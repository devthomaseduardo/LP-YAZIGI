'use client'

import { Star, Play, Pause } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useVideos } from '@/hooks/useVideos'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

// ====== DADOS ======
const localFallbackVideoTestimonials = [
  {
    name: 'Nalva',
    role: 'Aluna Yázigi',
    src: encodeURI('/videos/YAZIGI_DEP_02_Nalva Fv1 (1).mp4')
  },
  {
    name: 'Leandro',
    role: 'Aluno Yázigi',
    src: encodeURI('/videos/YAZIGI_DEP_03_Leandro Fv1 (1).mp4')
  },
  {
    name: 'Alice',
    role: 'Aluna Yázigi',
    src: encodeURI('/videos/YAZIGI_DEP_04_Alice Fv1 (2).mp4')
  },
  {
    name: 'Nívea',
    role: 'Aluna Yázigi',
    src: encodeURI('/videos/YAZIGI_DEP_05_Nivea Fv1 (1).mp4')
  },
  {
    name: 'JP',
    role: 'Aluno Yázigi',
    src: encodeURI('/videos/YAZIGI_DEP_06_JP Fv1 (1).mp4')
  }
]

// Mantive seus depoimentos de texto
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
  },
  {
    name: 'Ana Costa',
    role: 'Estudante Universitária',
    content:
      'Recomendo o Yázigi para quem quer aprender inglês de forma eficiente e divertida.',
    rating: 5
  },
  {
    name: 'João Pereira',
    role: 'Pai de Aluno',
    content:
      'A metodologia é prática e ajuda a falar inglês com confiança desde o início.',
    rating: 5
  }
  // ...adicione os demais depoimentos conforme o original
]

// ====== COMPONENTE CARD DE VÍDEO ======
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
    const videoElement = videoRef.current
    if (!videoElement) return

    let timedOut = false
    const timeoutId = window.setTimeout(() => {
      timedOut = true
      tryRangeProbe(videoElement.src)
    }, 8000)

    const onLoadedMetadata = () => setIsReady(true)
    const onCanPlay = () => setIsReady(true)
    const onCanPlayThrough = () => setIsReady(true)
    const onError = () => setIsError('Erro ao carregar vídeo')

    if (videoElement.readyState >= 3) setIsReady(true)

    videoElement.addEventListener('loadedmetadata', onLoadedMetadata)
    videoElement.addEventListener('canplay', onCanPlay)
    videoElement.addEventListener('canplaythrough', onCanPlayThrough)
    videoElement.addEventListener('error', onError)

    async function tryRangeProbe (src: string) {
      if (!src) return
      try {
        const resp = await fetch(src, {
          method: 'GET',
          headers: { Range: 'bytes=0-16384' }
        })
        if (resp && resp.ok) {
          setIsReady(true)
          setIsError(null)
        } else {
          setIsError('Vídeo indisponível')
        }
      } catch (err) {
        console.error('Range probe failed:', err)
        setIsError('Falha de rede/CORS ao carregar vídeo')
      }
    }

    return () => {
      window.clearTimeout(timeoutId)
      videoElement.removeEventListener('loadedmetadata', onLoadedMetadata)
      videoElement.removeEventListener('canplay', onCanPlay)
      videoElement.removeEventListener('canplaythrough', onCanPlayThrough)
      videoElement.removeEventListener('error', onError)
      if (isPlaying) videoElement.pause()
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (videoRef.current && isReady) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play().catch(() => setIsPlaying(false))
      setIsPlaying(!isPlaying)
    }
  }

  const retryLoad = () => {
    setIsError(null)
    setIsReady(false)
    videoRef.current?.load()
  }

  return (
    <div className='group relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-cyan/5 story-card cursor-pointer'>
      <div className='absolute inset-[2px] rounded-3xl overflow-hidden bg-white shadow-2xl'>
        <video
          ref={videoRef}
          src={src}
          className='h-full w-full object-cover'
          playsInline
          preload='auto'
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
        />

        {!isPlaying && (
          <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/40'>
            {isError ? (
              <div className='text-center'>
                <p className='text-sm text-white mb-3'>{isError}</p>
                <Button onClick={retryLoad} className='px-4 py-2'>
                  Tentar novamente
                </Button>
              </div>
            ) : (
              <div onClick={togglePlay}>
                <Button
                  className={`h-16 w-16 rounded-full bg-accent/90 hover:bg-accent shadow-xl transition-all duration-300 hover:scale-105 ${
                    !isReady ? 'animate-pulse' : ''
                  }`}
                  disabled={!isReady}
                >
                  {isReady ? (
                    <Play className='h-8 w-8 fill-white text-white ml-0.5' />
                  ) : (
                    <div className='h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin' />
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {isPlaying && (
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <Pause className='h-6 w-6 text-white' />
            </div>
          </div>
        )}

        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pb-6 pt-12 px-4'>
          <h4
            className='text-white font-bold text-lg'
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
          >
            {name}
          </h4>
          <p
            className='text-white/90 text-sm'
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            {role}
          </p>
        </div>
      </div>
      <div className='absolute -bottom-2 -right-2 w-48 h-48 bg-accent/20 blur-2xl rounded-full opacity-70'></div>
    </div>
  )
}

// ====== SECTION DEPOIMENTOS ======
export const TestimonialsSection = () => {
  const { data: videos } = useVideos()
  const videoTestimonials =
    videos && videos.length > 0
      ? videos.map(v => ({
          name: v.title || v.filename,
          role: 'Aluno Yázigi',
          src: v.public_url
        }))
      : localFallbackVideoTestimonials

  // Estado para controle da bolinha ativa
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id='depoimentos'
      className='py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'
    >
      <div className='container px-4 md:px-6 relative z-10'>
        {/* TÍTULO */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4'>
            <span className='bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
              Resultados Comprovados
            </span>
          </h2>
          <p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
            A experiência dos nossos alunos é a melhor prova de que nossa
            metodologia funciona.
          </p>
        </div>

        {/* CARROSSEL DE TEXTO */}
        <div className='max-w-6xl mx-auto mb-16'>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className='md:basis-1/2 lg:basis-1/3'>
                  <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 border-2 border-primary/30 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-6 md:p-8 h-full flex flex-col'>
                    <div className='flex gap-1 mb-3 md:mb-4'>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-4 w-4 md:h-5 md:w-5 fill-accent text-accent drop-shadow-lg'
                        />
                      ))}
                    </div>
                    <p className='mb-4 md:mb-6 text-white flex-1'>
                      "{t.content}"
                    </p>
                    <div className='border-t border-white/20 pt-3 md:pt-4'>
                      <p className='font-bold text-white'>{t.name}</p>
                      <p className='text-xs md:text-sm text-accent font-medium'>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CARROSSEL DE VÍDEOS */}
        <div className='mt-16 md:mt-24'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-4xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
                Assista Nossas Histórias de Sucesso
              </span>
            </h3>
            <p className='text-base md:text-lg text-muted-foreground'>
              Veja o que alunos e pais têm a dizer sobre o Yázigi Swiss Park.
            </p>
          </div>

          <div className='relative w-full max-w-6xl mx-auto'>
            <Carousel
              opts={{
                align: 'start',
                loop: false,
                breakpoints: {
                  '(min-width: 640px)': { slidesToScroll: 1.2, dragFree: true },
                  '(min-width: 1024px)': { slidesToScroll: 1.5, dragFree: true }
                }
              }}
              ref={carouselRef}
              className='relative'
            >
              <CarouselContent className='py-4'>
                {videoTestimonials.map((video, idx) => (
                  <CarouselItem
                    key={idx}
                    className='basis-[280px] md:basis-1/2 lg:basis-1/3'
                  >
                    <div className='h-[500px]'>
                      <VideoStoryCard {...video} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* BOLINHAS DE NAVEGAÇÃO */}
            <div className='flex justify-center mt-4 gap-2'>
              {videoTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-accent scale-125' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
