alter table public.lead_anfragen
  drop column if exists cta_label,
  drop column if exists target_url,
  drop column if exists utm,
  drop column if exists user_agent;
