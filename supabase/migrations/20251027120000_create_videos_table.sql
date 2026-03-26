CREATE TABLE IF NOT EXISTS public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  title TEXT,
  filename TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  public_url TEXT,
  metadata JSONB
);

CREATE INDEX IF NOT EXISTS idx_videos_created_at ON public.videos(created_at DESC);
