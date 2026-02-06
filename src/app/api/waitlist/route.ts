import { prisma } from "@/lib/prisma";
import "@/lib/startupChecks";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getEmailValidationError } from "@/lib/emailUtils";
import { NAME_MIN_LENGTH, NAME_MAX_LENGTH, EMAIL_MAX_LENGTH } from "@/lib/validators";
import { runWriteOperationWithRetries, isPreparedStmtError } from "@/lib/dbHelpers";
import { dbMetrics } from "@/lib/dbMetrics";
import { validateEmailDomain } from "@/lib/serverValidators";
import { sanitizeName, getNameValidationError } from "@/lib/nameAssociation";

// Validation schema (stricter): lengths, trim, optional honeypot field
const WaitlistSchema = z
  .object({
    name: z.string().trim().min(NAME_MIN_LENGTH, `Nome deve ter ao menos ${NAME_MIN_LENGTH} caracteres`).max(NAME_MAX_LENGTH, `Nome muito longo (máx ${NAME_MAX_LENGTH})`),
    email: z.string().trim().max(EMAIL_MAX_LENGTH, `Email muito longo (máx ${EMAIL_MAX_LENGTH})`),
    hp: z.string().optional()
  })
  .superRefine((data, ctx) => {
    const eErr = getEmailValidationError(data.email);
    if (eErr) ctx.addIssue({ path: ["email"], code: z.ZodIssueCode.custom, message: eErr });

    // name-email association will be verified server-side more strictly after sanitization
  });

// Simple in-memory rate limiter (per IP). Use Redis for production.
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // max requests per window
const rateLimitMap = new Map<string, { count: number; reset: number }>();

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr;
  return "local";
}

export async function POST(request: NextRequest) {
  try {
    // Read raw body and parse manually to surface JSON errors clearly
    const raw = await request.text();
    console.log('Raw request body:', raw);
    let body;
    try {
      body = JSON.parse(raw);
    } catch (e) {
      console.error('Failed to parse JSON body:', e);
      // persist to tmp for debugging
      try {
        await import('fs').then(({ promises: fs }) => fs.appendFile('tmp/raw_bodies.log', raw + '\n---\n'));
      } catch (err) {
        console.error('Failed to write raw body to file:', err);
      }
      throw e;
    }

    // Schema validation with Zod
    const parsed = WaitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Payload inválido", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    // Honeypot anti-bot: if present and non-empty, silently drop the request
    if (body?.hp && String(body.hp).trim().length > 0) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    // Rate limiting per IP
    const ip = getClientIp(request);
    const now = Date.now();
    const rl = rateLimitMap.get(ip);

    if (!rl || now > rl.reset) {
      rateLimitMap.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
    } else {
      if (rl.count >= RATE_LIMIT_MAX) {
        const retry = Math.ceil((rl.reset - now) / 1000);
        return NextResponse.json(
          { error: "Muitas requisições. Tente novamente mais tarde." },
          { status: 429, headers: { "Retry-After": String(retry) } }
        );
      }
      rl.count++;
      rateLimitMap.set(ip, rl);
    }

    // Sanitização e normalização
    const cleanEmail = parsed.data.email.trim().toLowerCase();
    const cleanName = sanitizeName(parsed.data.name);

    console.log('Waitlist POST - cleanEmail:', cleanEmail, 'cleanName:', cleanName);

    // Server-side domain/MX validation (async)
    const domainErr = await validateEmailDomain(cleanEmail);
    console.log('Waitlist POST - domainErr:', domainErr);
    if (domainErr) {
      return NextResponse.json({ error: domainErr }, { status: 400 });
    }

    // Server-side name content checks (profanity / basic validation)
    const nameErr = getNameValidationError(cleanName);
    console.log('Waitlist POST - nameErr:', nameErr);
    if (nameErr) {
      return NextResponse.json({ error: nameErr }, { status: 400 });
    }

    // Criar entrada na waitlist (usar valores sanitizados) — usar semáforo + retry centralizado para mitigar erros de prepared-statement em poolers (pgbouncer)
    dbMetrics.incrementWrite();
    let entry;
    try {
      entry = await runWriteOperationWithRetries(async () => {
        return await prisma.waitlistEntry.create({
          data: {
            name: cleanName,
            email: cleanEmail
          }
        });
      });
    } catch (e: any) {
      // If the prepared-statement issue persists, try a pg simple-query fallback (no prepared statements)
      if (isPreparedStmtError(e)) {
        console.warn('Prepared-statement issue persisted after retries — attempting pg simple query fallback', e?.message || e);
        try {
          const { Client } = await import('pg');
          // Support PG_SSL_ROOT_CERT as base64-encoded PEM content or raw PEM; if present, set as ca for ssl verification.
          let ssl: any = undefined;
          const rawCert = process.env.PG_SSL_ROOT_CERT;
          if (rawCert) {
            // allow both base64-encoded or raw PEM. Detect by checking for BEGIN CERTIFICATE
            const maybePem = rawCert.includes('BEGIN CERTIFICATE') ? rawCert : Buffer.from(rawCert, 'base64').toString('utf8');
            ssl = { ca: maybePem, rejectUnauthorized: true };
          } else {
            // rely on default Node CA store
            ssl = { rejectUnauthorized: true };
          }

          const client = new Client({ connectionString: process.env.DATABASE_URL, ssl });
          await client.connect();
          const esc = (s: any) => String(s).replace(/'/g, "''");
          const r = await client.query(`INSERT INTO public.waitlist_entries (email, name, created_at) VALUES ('${esc(cleanEmail)}','${esc(cleanName)}', now()) RETURNING id, email, name, created_at`);
          await client.end();
          entry = r.rows[0];
          console.warn('pg fallback succeeded');
          await dbMetrics.incrementFallback(`email=${cleanEmail}`);
        } catch (pgErr) {
          console.error('pg fallback failed', pgErr);
          // try to notify monitoring about the failure
          try {
            const { sendMonitoringEvent } = await import('@/lib/monitoring');
            sendMonitoringEvent({ type: 'db_fallback_failure', message: String(pgErr.message || pgErr), details: { email: cleanEmail } });
          } catch (_) {}
          throw e; // rethrow original
        }
      } else {
        throw e;
      }
    }

    return NextResponse.json(
      { message: "Cadastrado com sucesso!", data: entry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erro na API:", error);
    console.error(error?.stack);

    // Handle unique constraint (email already registered)
    if (error?.code === "P2002") {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 409 }
      );
    }

    // For debugging in dev, include error message in response
    return NextResponse.json(
      { error: error?.message || "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await prisma.waitlistEntry.findMany();
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }
}
