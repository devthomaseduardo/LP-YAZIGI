import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export type Video = {
  id: string
  title: string
  filename: string
  storage_path: string
  public_url: string
  created_at: string
}

export function useVideos() {
  return useQuery<Video[]>({
    queryKey: ['videos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    }
  })
}