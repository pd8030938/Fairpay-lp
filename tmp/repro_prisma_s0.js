const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient({
  // enable query logging for debugging
  log: ['query', 'warn', 'error'],
});

async function run() {
  console.log('Starting concurrent inserts');
  const tasks = [];
  for (let i = 0; i < 200; i++) {
    const email = `concurrent+${Date.now()}+${i}@example.com`;
    tasks.push(
      prisma.waitlistEntry.create({ data: { name: `Test ${i}`, email } }).catch((e) => ({ error: e }))
    );
  }

  const results = await Promise.all(tasks);
  const errors = results.filter((r) => r && r.error);
  console.log('Total results:', results.length, 'errors:', errors.length);
  if (errors.length > 0) {
    console.log('Sample error:', errors[0].error);
  }

  await prisma.$disconnect();
}

run().catch(async (e) => {
  console.error('Run failed:', e);
  try { await prisma.$disconnect(); } catch (_) {}
  process.exit(1);
});