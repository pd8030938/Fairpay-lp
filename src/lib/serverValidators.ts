import dns from "dns/promises";
import { getEmailValidationError } from "@/lib/emailUtils";

// --- Asynchronous MX/domain checks (server-side) ---
// Simple TTL cache to avoid repeated DNS queries in short intervals
const mxCache = new Map<string, { ok: boolean; expires: number }>();
const MX_CACHE_TTL = 1000 * 60 * 60; // 1 hour
const MX_RESOLVE_TIMEOUT = 2000; // 2 seconds

async function resolveMxWithTimeout(domain: string, timeout = MX_RESOLVE_TIMEOUT) {
  const p = dns.resolveMx(domain);
  const t = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeout));
  return Promise.race([p, t]);
}

export async function checkDomainHasMx(domain: string): Promise<boolean> {
  const now = Date.now();
  const cached = mxCache.get(domain);
  if (cached && cached.expires > now) return cached.ok;

  try {
    // Try MX first
    const mx = await resolveMxWithTimeout(domain);
    const ok = Array.isArray(mx) && mx.length > 0;
    mxCache.set(domain, { ok, expires: now + MX_CACHE_TTL });
    if (ok) return true;
  } catch (e) {
    // fallthrough to A/AAAA checks
  }

  // If no MX, try A/AAAA records (some domains accept mail via A)
  try {
    const a = await Promise.race([dns.resolve4(domain), new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), MX_RESOLVE_TIMEOUT))]);
    const ok = Array.isArray(a) && a.length > 0;
    mxCache.set(domain, { ok, expires: now + MX_CACHE_TTL });
    return ok;
  } catch (e) {
    try {
      const a6 = await Promise.race([dns.resolve6(domain), new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), MX_RESOLVE_TIMEOUT))]);
      const ok = Array.isArray(a6) && a6.length > 0;
      mxCache.set(domain, { ok, expires: now + MX_CACHE_TTL });
      return ok;
    } catch (err) {
      mxCache.set(domain, { ok: false, expires: now + MX_CACHE_TTL });
      return false;
    }
  }
}

// Returns null when valid, otherwise an error message string
export async function validateEmailDomain(email: string): Promise<string | null> {
  // format + tld checks
  const baseErr = getEmailValidationError(email);
  if (baseErr) return baseErr;

  // check MX/A/AAAA
  const domain = email.split("@")[1];
  const ok = await checkDomainHasMx(domain);
  if (!ok) return "Domínio inválido";
  return null;
}
