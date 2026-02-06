require('dotenv').config();
// WARNING: Temporarily disabling TLS certificate validation to allow connection to Supabase pooler.
// This is necessary only in this environment; for production, prefer proper CA verification.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { Client } = require('pg');
const fs = require('fs');

const sql = fs.readFileSync('tmp/create_waitlist.sql', 'utf8');
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL not set in environment');
  process.exit(1);
}

(async () => {
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  try {
    await client.connect();
    console.log('Connected to DB');
    const res = await client.query(sql);
    console.log('SQL executed successfully');
  } catch (err) {
    console.error('Error executing SQL:', err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();