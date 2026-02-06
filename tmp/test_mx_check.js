const dns = require('dns').promises;

const MX_RESOLVE_TIMEOUT = 2000;

function withTimeout(promise, timeout) {
  return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))]);
}

async function check(domain) {
  try {
    const mx = await withTimeout(dns.resolveMx(domain), MX_RESOLVE_TIMEOUT);
    if (Array.isArray(mx) && mx.length) return { domain, ok: true, reason: 'mx' };
  } catch (e) {
    // continue
  }
  try {
    const a = await withTimeout(dns.resolve4(domain), MX_RESOLVE_TIMEOUT);
    if (Array.isArray(a) && a.length) return { domain, ok: true, reason: 'a' };
  } catch (e) {}
  try {
    const a6 = await withTimeout(dns.resolve6(domain), MX_RESOLVE_TIMEOUT);
    if (Array.isArray(a6) && a6.length) return { domain, ok: true, reason: 'aaaa' };
  } catch (e) {}
  return { domain, ok: false };
}

(async () => {
  const domains = ['gmail.com', 'example.com', 'nonexistent-tld.lak', 'weirdtld.xyz', 'supabase.io'];
  for (const d of domains) {
    const r = await check(d);
    console.log(d, '=>', r);
  }
})();
