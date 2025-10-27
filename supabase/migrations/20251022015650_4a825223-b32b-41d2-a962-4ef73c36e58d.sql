-- Criar tabela para armazenar resultados do diagnóstico
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

-- Criar índices para melhor performance
CREATE INDEX idx_diagnostic_results_created_at ON public.diagnostic_results(created_at DESC);
CREATE INDEX idx_diagnostic_results_phone ON public.diagnostic_results(phone);
CREATE INDEX idx_diagnostic_results_email ON public.diagnostic_results(email);

-- Habilitar RLS
ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (sem autenticação necessária)
CREATE POLICY "Qualquer pessoa pode enviar diagnóstico"
ON public.diagnostic_results
FOR INSERT
TO anon
WITH CHECK (true);

-- Criar tabela para leads gerais da landing page
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  source TEXT NOT NULL, -- de onde veio o lead (ex: "hero_cta", "diagnostic", "benefits_section")
  message TEXT,
  metadata JSONB, -- para armazenar dados adicionais flexíveis
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar índices para melhor performance
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_phone ON public.leads(phone);
CREATE INDEX idx_leads_source ON public.leads(source);

-- Habilitar RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (sem autenticação necessária)
CREATE POLICY "Qualquer pessoa pode enviar lead"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Criar função para atualizar timestamp automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;