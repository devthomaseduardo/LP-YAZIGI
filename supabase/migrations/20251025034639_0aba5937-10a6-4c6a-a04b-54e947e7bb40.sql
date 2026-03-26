CREATE TABLE IF NOT EXISTS public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  source TEXT NOT NULL,
  message TEXT,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS public.diagnostic_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  current_level TEXT NOT NULL,
  previous_experience TEXT NOT NULL,
  main_objective TEXT NOT NULL,
  biggest_difficulty TEXT NOT NULL,
  desired_timeline TEXT NOT NULL,
  weekly_availability TEXT NOT NULL,
  age_range TEXT NOT NULL,
  class_preference TEXT NOT NULL
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can insert diagnostic results"
ON public.diagnostic_results
FOR INSERT
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON public.leads(phone);
CREATE INDEX IF NOT EXISTS idx_diagnostic_created_at ON public.diagnostic_results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostic_phone ON public.diagnostic_results(phone);
