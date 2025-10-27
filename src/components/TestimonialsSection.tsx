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
  },
  {
    name: 'Beatriz Alves',
    role: 'Profissional',
    content:
      'Meu filho adora as atividades em sala, o aprendizado acontece de forma natural.',
    rating: 5
  },
  {
    name: 'Ricardo Souza',
    role: 'Estudante',
    content:
      'O suporte dos professores é excelente, sempre prontos para tirar dúvidas.',
    rating: 5
  },
  {
    name: 'Fernanda Lima',
    role: 'Mãe de Aluna',
    content:
      'Consegui melhorar minha conversação e vocabulário em poucos meses.',
    rating: 5
  },
  {
    name: 'Paulo Ribeiro',
    role: 'Profissional',
    content:
      'A certificação internacional abriu novas oportunidades na minha carreira.',
    rating: 5
  },
  {
    name: 'Camila Martins',
    role: 'Estudante Universitária',
    content: 'O material didático é atualizado e muito bem estruturado.',
    rating: 5
  },
  {
    name: 'Lucas Almeida',
    role: 'Aluno',
    content:
      'A escola combina tecnologia, método e atenção personalizada de forma perfeita.',
    rating: 5
  },
  {
    name: 'Juliana Ferreira',
    role: 'Mãe de Aluna',
    content:
      'Minha filha ganhou confiança para falar inglês em viagens e intercâmbios.',
    rating: 5
  },
  {
    name: 'Thiago Gonçalves',
    role: 'Estudante',
    content:
      'As aulas online são tão interativas quanto as presenciais, recomendo totalmente.',
    rating: 5
  },
  {
    name: 'Patrícia Andrade',
    role: 'Profissional',
    content: 'Aprendi inglês de forma prática e consistente, sem enrolação.',
    rating: 5
  },
  {
    name: 'Eduardo Costa',
    role: 'Aluno',
    content:
      'Os professores são engajados, motivam os alunos e corrigem com cuidado.',
    rating: 5
  },
  {
    name: 'Larissa Mendes',
    role: 'Profissional',
    content: 'O Yázigi me preparou para entrevistas de emprego internacionais.',
    rating: 5
  },
  {
    name: 'Gabriel Rocha',
    role: 'Estudante Universitário',
    content:
      'O ambiente é acolhedor e estimula o aprendizado desde a primeira aula.',
    rating: 5
  },
  {
    name: 'Carla Nunes',
    role: 'Mãe de Aluna',
    content:
      'As turmas são bem divididas por nível, facilitando o aprendizado individual.',
    rating: 5
  },
  {
    name: 'Rafael Lima',
    role: 'Aluno',
    content:
      'Meu filho está mais confiante para se comunicar com amigos estrangeiros.',
    rating: 5
  },
  {
    name: 'Sabrina Alves',
    role: 'Profissional',
    content:
      'O acompanhamento de desempenho é constante e ajuda a evoluir rapidamente.',
    rating: 5
  },
  {
    name: 'Felipe Santos',
    role: 'Aluno',
    content:
      'Recomendo para todas as idades, desde crianças até adultos que querem fluência real.',
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
    const videoElement = videoRef.current
    if (!videoElement) return

    let timedOut = false
    const timeoutId = window.setTimeout(() => {
      timedOut = true
      // If media events didn't fire, we'll try a lightweight range request as a fallback
      // (some servers / CORS setups prevent media events)
      tryRangeProbe(videoElement.src)
    }, 8000) // 8s timeout to try fallback

    const onLoadedMetadata = () => {
      // metadata available; video can usually play
      setIsReady(true)
    }

    const onCanPlay = () => setIsReady(true)
    const onCanPlayThrough = () => setIsReady(true)
    const onError = () => {
      setIsError('Erro ao carregar vídeo')
    }

    if (videoElement.readyState >= 3) setIsReady(true)

    videoElement.addEventListener('loadedmetadata', onLoadedMetadata)
    videoElement.addEventListener('canplay', onCanPlay)
    videoElement.addEventListener('canplaythrough', onCanPlayThrough)
    videoElement.addEventListener('error', onError)

    async function tryRangeProbe(src: string) {
      if (!src) return
      try {
        // try to fetch a small range to confirm the file is reachable and CORS allows it
        const resp = await fetch(src, {
          method: 'GET',
          headers: { Range: 'bytes=0-16384' }
        })
        if (resp && resp.ok) {
          // try to set isReady — the browser still needs to buffer, but this indicates availability
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
      // if a timeout triggered and the probe is running, it will finish on its own
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (videoRef.current && isReady) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(error => {
          console.error('Erro ao tentar tocar o vídeo:', error)
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const retryLoad = () => {
    setIsError(null)
    setIsReady(false)
    const v = videoRef.current
    if (v) {
      try {
        v.load()
      } catch (e) {
        console.error('Erro no retry load:', e)
      }
    }
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
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/40'
          >
            {isError ? (
              <div className='text-center'>
                <p className='text-sm text-white mb-3'>{isError}</p>
                <Button onClick={retryLoad} className='px-4 py-2'>Tentar novamente</Button>
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

export const TestimonialsSection = () => {
  // Removido scrollRef e lógica de rolagem manual
  // const scrollRef = useRef<HTMLDivElement | null>(null)
  // const [currentVideo, setCurrentVideo] = useState(0)

  // Nota: Assumindo que useVideos() retorna { data: [videos] } ou null/undefined
  const { data: videos } = useVideos()

  const videoTestimonials =
    videos && videos.length > 0
      ? videos.map(v => ({
          name: v.title || v.filename,
          role: 'Aluno Yázigi',
          src: v.public_url
        }))
      : localFallbackVideoTestimonials

  return (
    <section
      id='depoimentos'
      className='py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'
    >
      <div className='absolute top-10 left-10 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-10 right-10 w-64 md:w-72 h-64 md:h-72 bg-gradient-to-br from-cyan/5 to-transparent rounded-full blur-3xl' />

      <div className='container px-4 md:px-6 relative z-10'>
        <div className='text-center mb-12 md:mb-16 animate-fade-in'>
          <div className='inline-block px-4 py-2 bg-accent/10 rounded-full mb-4 md:mb-6'>
            <span className='text-accent font-bold text-xs md:text-sm uppercase tracking-widest'>
              Histórias Reais
            </span>
          </div>

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

        {/* 1. CARROSSEL DE DEPOIMENTOS (Texto) - MANTIDO */}
        <div className='max-w-6xl mx-auto'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 },
                '(min-width: 1024px)': { slidesToScroll: 3 }
              }
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true
              })
            ]}
            className='relative w-full'
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <div className='group relative h-full'>
                    <div className='relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-primary/80 border-2 border-primary/30 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-6 md:p-8 h-full flex flex-col'>
                      <div className='absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-bl-full' />

                      <div className='flex gap-1 mb-3 md:mb-4 relative z-10'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='h-4 w-4 md:h-5 md:w-5 fill-accent text-accent drop-shadow-lg'
                          />
                        ))}
                      </div>

                      <p className='mb-4 md:mb-6 leading-relaxed text-white text-base md:text-lg flex-1 relative z-10'>
                        "{testimonial.content}"
                      </p>

                      <div className='border-t border-white/20 pt-3 md:pt-4 relative z-10'>
                        <p className='font-bold text-white text-base md:text-lg'>
                          {testimonial.name}
                        </p>
                        <p className='text-xs md:text-sm text-accent font-medium'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className='absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/10 blur-2xl group-hover:scale-150 transition-all duration-500 -z-10' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className='absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg transition-transform hover:scale-110'
              aria-label='Depoimento Anterior'
            />
            <CarouselNext
              className='absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg transition-transform hover:scale-110'
              aria-label='Próximo Depoimento'
            />
          </Carousel>
        </div>

        {/* 2. CARROSSEL DE VÍDEOS (Stories - AGORA USANDO EMBLE) */}
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
                loop: false, // Geralmente Stories não fazem loop
                breakpoints: {
                  '(min-width: 640px)': { slidesToScroll: 2, dragFree: true },
                  '(min-width: 1024px)': { slidesToScroll: 3, dragFree: true }
                }
              }}
              className='relative'
            >
              <CarouselContent className='py-4'>
                {videoTestimonials.map((video, index) => (
                  <CarouselItem
                    key={index}
                    // Largura fixa para efeito de Stories (280px)
                    className='basis-[296px] md:basis-1/2 lg:basis-1/3'
                  >
                    <div className='h-[500px]'>
                      <VideoStoryCard {...video} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controles de navegação para o carrossel de vídeos */}
              <CarouselPrevious
                className='absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg transition-transform hover:scale-110'
                aria-label='Vídeo Anterior'
              />
              <CarouselNext
                className='absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg transition-transform hover:scale-110'
                aria-label='Próximo Vídeo'
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
