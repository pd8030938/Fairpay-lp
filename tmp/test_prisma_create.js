const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(async () => {
  try {
    const r = await prisma.waitlistEntry.create({ data: { name: 'Prisma Test', email: `prisma.test+${Date.now()}@example.com` } });
    console.log('Inserted:', r);
  } catch (e) {
    console.error('Prisma error:', e);
  } finally {
    await prisma.$disconnect();
  }
})();
