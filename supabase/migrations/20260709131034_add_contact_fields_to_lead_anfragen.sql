alter table public.lead_anfragen
  add column if not exists phone text,
  add column if not exists email text;

create index if not exists lead_anfragen_email_idx
  on public.lead_anfragen (email);
