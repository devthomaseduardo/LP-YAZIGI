CREATE TABLE public.diagnostic_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
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
  class_preference TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_diagnostic_results_created_at ON public.diagnostic_results(created_at DESC);
CREATE INDEX idx_diagnostic_results_phone ON public.diagnostic_results(phone);
CREATE INDEX idx_diagnostic_results_email ON public.diagnostic_results(email);

ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode enviar diagnóstico"
ON public.diagnostic_results
FOR INSERT
TO anon
WITH CHECK (true);

CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  source TEXT NOT NULL,
  message TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_phone ON public.leads(phone);
CREATE INDEX idx_leads_source ON public.leads(source);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode enviar lead"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;
