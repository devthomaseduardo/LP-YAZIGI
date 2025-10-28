'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

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

// ✅ IDs extraídos dos links YouTube Shorts
const youtubeVideos = [
  { id: 'vrgelV__MZA', name: 'Nalva', role: 'Aluna Yázigi' },
  { id: 'ukD0pFnF730', name: 'Leandro', role: 'Aluno Yázigi' },
  { id: 'Iz58S1_ARDo', name: 'Maria', role: 'Aluna Yázigi' },
  { id: '0GdfkVIwH1Q', name: 'João', role: 'Aluno Yázigi' },
  { id: 'm2nj0l42N2A', name: 'Camila', role: 'Aluna Yázigi' },
  { id: '9qs3iNNH548', name: 'Pedro', role: 'Aluno Yázigi' }
]

// 🎬 Player limpo do YouTube (sem controles, autoplay, loop)
const CleanYouTubeEmbed = ({
  videoId,
  autoPlay
}: {
  videoId: string
  autoPlay?: boolean
}) => {
  const [isPlaying, setIsPlaying] = useState(!!autoPlay)

  return (
    <div className='relative w-full h-full overflow-hidden rounded-3xl bg-black'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${
          isPlaying ? 1 : 0
        }&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
        title='Depoimento'
        className='absolute top-0 left-0 w-full h-full'
        allow='autoplay; encrypted-media'
      />

      {!isPlaying && (
        <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
          <Button
            onClick={() => setIsPlaying(true)}
            className='h-16 w-16 rounded-full bg-accent/90 hover:bg-accent'
          >
            <Play className='h-8 w-8 text-white fill-white' />
          </Button>
        </div>
      )}
    </div>
  )
}

export const TestimonialsSection = () => {
  return (
    <section
      id='depoimentos'
      className='py-20 bg-gradient-to-b from-muted/50 to-background'
    >
      <div className='container mx-auto px-6'>
        {/* Cabeçalho */}
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

          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {youtubeVideos.map((v, i) => (
                <CarouselItem key={i} className='basis-[280px]'>
                  <div className='h-[480px] relative'>
                    <CleanYouTubeEmbed videoId={v.id} />
                    <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4'>
                      <h4 className='text-white font-bold text-lg'>{v.name}</h4>
                      <p className='text-white/90 text-sm'>{v.role}</p>
                    </div>
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
