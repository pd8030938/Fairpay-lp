require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

(async () => {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  try {
    await client.connect();
    console.log('Connected to DB (insert_test)');
    const now = new Date().toISOString();
    const email = `test+pooler+${Date.now()}@example.com`;
    const name = 'API test insert';
    const res = await client.query('INSERT INTO public.waitlist_entries (email, name) VALUES ($1, $2) RETURNING id, email, name, created_at', [email, name]);
    console.log('Inserted:', res.rows[0]);
  } catch (err) {
    console.error('Error inserting test record:', err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();