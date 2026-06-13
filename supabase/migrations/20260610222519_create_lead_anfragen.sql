create table if not exists public.lead_anfragen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  service text not null,
  source text not null,
  situation text not null,
  language text,
  page_url text,
  cta_label text,
  target_url text,
  notify_emails text,
  utm jsonb not null default '{}'::jsonb,
  user_agent text,
  status text not null default 'new',
  email_sent_at timestamptz,
  email_error text
);

alter table public.lead_anfragen enable row level security;

create index if not exists lead_anfragen_created_at_idx
  on public.lead_anfragen (created_at desc);

create index if not exists lead_anfragen_service_idx
  on public.lead_anfragen (service);
