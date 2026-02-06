const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const prisma = new PrismaClient({ log: ['warn', 'error'] });

// local semaphore
class Semaphore {
  constructor(max) { this.max = max; this.current = 0; this.waiters = []; }
  acquire() {
    if (this.current < this.max) { this.current++; return Promise.resolve(); }
    return new Promise((res) => this.waiters.push(res)).then(() => { this.current++; });
  }
  release() { this.current = Math.max(0, this.current - 1); const next = this.waiters.shift(); if (next) next(); }
}

const sem = new Semaphore(Number(process.env.DB_WRITE_CONCURRENCY) || 2);
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function isPreparedStmtError(e){ return Boolean(e && (String(e.message||'').toLowerCase().includes('prepared statement') || e.code === '42P05' || e.code === 'P1017')); }

async function runWithRetries(fn, maxAttempts=5){
  await sem.acquire();
  try {
    for (let attempt=1; attempt<=maxAttempts; attempt++){
      try { return await fn(); } catch(e){
        if (isPreparedStmtError(e) && attempt < maxAttempts){
          const backoff = 100 * Math.pow(2, attempt) + Math.floor(Math.random()*100);
          console.warn('attempt', attempt, 'failed, retrying in', backoff, 'ms:', e.message || e);
          await sleep(backoff);
          continue;
        }
        throw e;
      }
    }
    throw new Error('failed after retries');
  } finally { sem.release(); }
}

async function run(){
  const tasks = [];
  for(let i=0;i<200;i++){
    const email = `withRetry+${Date.now()}+${i}@example.com`;
    tasks.push(runWithRetries(async ()=> {
      return await prisma.waitlistEntry.create({ data: { name: `Retry ${i}`, email } });
    }).catch(async (e) => {
      // attempt pg simple-query fallback if it's a prepared statement problem
      if (String(e?.message || '').toLowerCase().includes('prepared statement') || e?.code === '42P05' || e?.code === 'P1017') {
        console.warn('Prisma failed with prepared-stmt, trying pg fallback for', email);
        try {
          const { Client } = require('pg');
          const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
          await client.connect();
          const esc = (s) => String(s).replace(/'/g, "''");
          const r = await client.query(`INSERT INTO public.waitlist_entries (email, name, created_at) VALUES ('${esc(email)}','${esc(`Retry ${i}`)}', now()) RETURNING id, email, name, created_at`);
          await client.end();
          return r.rows[0];
        } catch (pgErr) {
          return { error: pgErr };
        }
      }
      return { error: e };
    }));
  }
  const res = await Promise.all(tasks);
  const errors = res.filter(r=>r && r.error);
  console.log('Total:', res.length, 'errors:', errors.length);
  if (errors.length) console.log('Sample error:', errors[0].error?.message || errors[0].error);
  await prisma.$disconnect();
}

run().catch(async (e)=>{ console.error('run failed', e); try{ await prisma.$disconnect(); }catch(_){}});