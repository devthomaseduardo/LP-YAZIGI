// src/hooks/useVideos.ts
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export function useVideos() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        // 1. Busca a tabela "videos" (metadados)
        const { data: videos, error: fetchError } = await supabase
          .from('videos')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError

        if (!videos || videos.length === 0) {
          setData([])
          return
        }

        // 2. Gera URL pública a partir do caminho salvo
        const videosWithUrls = videos.map(video => ({
          ...video,
          public_url:
            video.public_url ||
            supabase.storage
              .from('videos') // nome do bucket
              .getPublicUrl(video.storage_path).data.publicUrl
        }))

        setData(videosWithUrls)
      } catch (err: any) {
        console.error('Erro ao carregar vídeos:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return { data, loading, error }
}
