const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient({ log: ['warn', 'error'] });

async function run() {
  console.log('Starting batched inserts (batch size 5)');
  const BATCH = 5;
  const TOTAL = 200;
  let errors = [];

  for (let i = 0; i < TOTAL; i += BATCH) {
    const promises = [];
    for (let j = 0; j < BATCH && i + j < TOTAL; j++) {
      const idx = i + j;
      const email = `batched+${Date.now()}+${idx}@example.com`;
      promises.push(
        prisma.waitlistEntry.create({ data: { name: `Batch ${idx}`, email } }).catch((e) => ({ error: e }))
      );
    }
    const res = await Promise.all(promises);
    errors = errors.concat(res.filter((r) => r && r.error).map((r) => r.error));
    // small gap between batches
    await new Promise((r) => setTimeout(r, 50));
  }

  console.log('Total errors:', errors.length);
  if (errors.length > 0) console.log('Sample error:', errors[0].message || errors[0]);

  await prisma.$disconnect();
}

run().catch(async (e) => { console.error('Run failed:', e); try { await prisma.$disconnect(); } catch (_) {} process.exit(1); });