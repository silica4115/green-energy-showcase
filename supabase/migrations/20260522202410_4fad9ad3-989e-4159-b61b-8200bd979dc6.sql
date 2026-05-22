
create table public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  address text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_inquiries enable row level security;

-- Allow anyone to submit an inquiry (public form), no read access
create policy "Anyone can submit inquiry"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);
