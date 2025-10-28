'use client'

import { Star, Play, Pause } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useVideos } from '@/hooks/useVideos'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

const localFallbackVideoTestimonials = [
  {
    name: 'Nalva',
    role: 'Aluna Yázigi',
    src: '/videos/YAZIGI_DEP_02_Nalva.mp4'
  },
  {
    name: 'Leandro',
    role: 'Aluno Yázigi',
    src: '/videos/YAZIGI_DEP_03_Leandro.mp4'
  }
]

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Mãe de Aluna',
    content:
      'Minha filha evoluiu muito rápido! As aulas são dinâmicas e motivadoras.',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Profissional',
    content:
      'O acompanhamento pedagógico é incrível, sempre atentos às necessidades dos alunos.',
    rating: 5
  }
]

const VideoStoryCard = ({
  name,
  role,
  src
}: {
  name: string
  role: string
  src: string
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isError, setIsError] = useState<string | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onReady = () => setIsReady(true)
    const onError = () => setIsError('Erro ao carregar vídeo')
    v.addEventListener('canplay', onReady)
    v.addEventListener('error', onError)

    if (v.readyState >= 3) setIsReady(true)

    return () => {
      v.removeEventListener('canplay', onReady)
      v.removeEventListener('error', onError)
    }
  }, [])

  const togglePlay = () => {
    if (!isReady || !videoRef.current) return
    const v = videoRef.current
    if (isPlaying) v.pause()
    else v.play().catch(() => setIsError('Falha ao reproduzir vídeo'))
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-cyan/5 h-full'>
      <video
        ref={videoRef}
        src={src}
        className='h-full w-full object-cover'
        playsInline
        preload='metadata'
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
          {isError ? (
            <p className='text-white text-sm'>{isError}</p>
          ) : (
            <Button
              onClick={togglePlay}
              disabled={!isReady}
              className='h-16 w-16 rounded-full bg-accent/90 hover:bg-accent'
            >
              {isReady ? (
                <Play className='h-8 w-8 text-white fill-white' />
              ) : (
                <div className='h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin' />
              )}
            </Button>
          )}
        </div>
      )}

      <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4'>
        <h4 className='text-white font-bold text-lg'>{name}</h4>
        <p className='text-white/90 text-sm'>{role}</p>
      </div>
    </div>
  )
}

export const TestimonialsSection = () => {
  const { data: videos, loading } = useVideos()

  const videoTestimonials =
    !loading && videos?.length
      ? videos.map(v => ({
          name: v.title || v.filename,
          role: 'Aluno Yázigi',
          src: v.public_url
        }))
      : localFallbackVideoTestimonials

  return (
    <section
      id='depoimentos'
      className='py-20 bg-gradient-to-b from-muted/50 to-background'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Resultados Comprovados
          </h2>
          <p className='text-muted-foreground mt-4'>
            A experiência dos nossos alunos é a melhor prova de que nossa
            metodologia funciona.
          </p>
        </div>

        {/* Carrossel de texto */}
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3'>
                <div className='bg-primary rounded-3xl text-white p-8 h-full'>
                  <p className='mb-4 text-lg'>" {t.content} "</p>
                  <p className='font-bold'>{t.name}</p>
                  <p className='text-accent'>{t.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carrossel de vídeos */}
        <div className='mt-20'>
          <h3 className='text-3xl font-bold mb-8 text-center'>
            <span className='bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
              Assista Nossas Histórias de Sucesso
            </span>
          </h3>

          <Carousel opts={{ align: 'start', loop: false }}>
            <CarouselContent>
              {videoTestimonials.map((v, i) => (
                <CarouselItem key={i} className='basis-[280px]'>
                  <div className='h-[480px]'>
                    <VideoStoryCard {...v} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-0' />
            <CarouselNext className='right-0' />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
