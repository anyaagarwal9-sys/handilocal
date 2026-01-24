-- Create table for tracking profile clicks
CREATE TABLE public.profile_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  artisan_id INTEGER NOT NULL,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for tracking website visitors
CREATE TABLE public.site_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  page_path TEXT
);

-- Enable RLS but allow public inserts (anonymous tracking)
ALTER TABLE public.profile_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for anonymous tracking)
CREATE POLICY "Allow anonymous profile click inserts" 
ON public.profile_clicks 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow anonymous visitor inserts" 
ON public.site_visitors 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read counts (for displaying stats)
CREATE POLICY "Allow public read of profile clicks" 
ON public.profile_clicks 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read of visitors" 
ON public.site_visitors 
FOR SELECT 
USING (true);