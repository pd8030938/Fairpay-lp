// startupChecks.ts
// Performs a simple check on DATABASE_URL to infer if we are using a session pooler
// and logs useful warning/info messages at import time.

function getDatabaseUrl() {
  return process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL || '';
}

function parseDatabaseUrl(url: string) {
  try {
    // Ensure url has protocol for URL parser
    const normalized = url.startsWith('postgres') || url.startsWith('postgresql') ? url : `postgresql://${url}`;
    return new URL(normalized);
  } catch (e) {
    return null;
  }
}

function isLikelyPooler(u: URL) {
  // heuristics: host contains 'pooler' and port is present
  const host = u.hostname || '';
  const port = u.port || '';
  return host.includes('pooler') ? { pooler: true, port } : { pooler: false, port };
}

(function runChecks() {
  const raw = getDatabaseUrl();
  if (!raw) {
    console.warn('startupChecks: DATABASE_URL is not set.');
    return;
  }

  const u = parseDatabaseUrl(raw);
  if (!u) {
    console.warn('startupChecks: Unable to parse DATABASE_URL (malformed). Value:', raw.substring(0, 120));
    return;
  }

  const poolInfo = isLikelyPooler(u);
  // send a startup monitoring event (best-effort)
  (async () => {
    try {
      const { sendMonitoringEvent } = await import('./monitoring');
      sendMonitoringEvent({ type: 'db_startup', message: `host=${u.hostname} port=${u.port} pooler=${poolInfo.pooler}` });
    } catch (err) {
      // ignore
    }
  })();

  if (poolInfo.pooler && poolInfo.port === '5432') {
    console.info(`startupChecks: Detected session pooler (host=${u.hostname}, port=${u.port}). This is GOOD for Prisma prepared statements.`);
  } else if (poolInfo.pooler) {
    console.warn(`startupChecks: Detected a pooler host (${u.hostname}) on port ${u.port}. If this is a transaction-pooler, Prisma may encounter prepared-statement errors. Prefer session pooling or a direct DB host.`);
  } else {
    console.info(`startupChecks: Database host appears not to be a pooler (host=${u.hostname}).`);
  }

  // Extra hint: check for common query params indicating SSL mode
  if (u.searchParams && u.searchParams.get('sslmode')) {
    console.info(`startupChecks: sslmode=${u.searchParams.get('sslmode')}`);
  }

  // Strict mode: when enabled, fail startup if a pooler host is detected (unless explicitly allowed)
  const STRICT = String(process.env.DB_POOLING_STRICT || '').toLowerCase() === '1' || String(process.env.DB_POOLING_STRICT || '').toLowerCase() === 'true';
  const ALLOW = String(process.env.DB_ALLOW_POOLER || '').toLowerCase() === '1' || String(process.env.DB_ALLOW_POOLER || '').toLowerCase() === 'true';

  if (STRICT && poolInfo.pooler && !ALLOW) {
    const msg = `startupChecks (strict): Database host ${u.hostname} appears to be a pooler. Startup blocked because DB_POOLING_STRICT is enabled. Set DB_ALLOW_POOLER=1 to override.`;
    console.error(msg);
    // throw to stop the boot process
    throw new Error(msg);
  }
})();
