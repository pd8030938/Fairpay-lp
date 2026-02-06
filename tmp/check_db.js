require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

(async () => {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  try {
    await client.connect();
    console.log('Connected to DB (check_db)');
    const res = await client.query("SELECT id, name, email, created_at FROM public.waitlist_entries ORDER BY created_at DESC LIMIT 10;");
    console.log('Rows:', res.rows.length);
    console.table(res.rows);
  } catch (err) {
    console.error('Error querying DB:', err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();