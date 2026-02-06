CREATE TABLE IF NOT EXISTS public.waitlist_entries (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
