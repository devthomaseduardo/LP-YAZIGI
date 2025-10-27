import { Play } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import welcomeIsa from '@/assets/welcome-isa.png'
import welcomePedro from '@/assets/welcome-pedro.png'
import studentMother from '@/assets/student-mother.png'

const galleryItems = [
  {
    type: 'image' as const,
    src: welcomeIsa,
    alt: 'Nova aluna Yázigi Swiss Park - Welcome Isa',
    title: 'Welcome, Isa!'
  },
  {
    type: 'video' as const,
    src: 'https://www.youtube.com/watch?v=KSC8qsm7YQY',
    thumbnail: welcomePedro,
    alt: 'Aulas dinâmicas e interativas Yázigi',
    title: 'Aprendizado que Conecta Pessoas'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_01_Silvia Fv1 (1).mp4',
    thumbnail: welcomeIsa,
    alt: 'Depoimento Silvia',
    title: 'Depoimento Silvia'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_02_Nalva Fv1 (1).mp4',
    thumbnail: welcomePedro,
    alt: 'Depoimento Nalva',
    title: 'Depoimento Nalva'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_03_Leandro Fv1 (1).mp4',
    thumbnail: studentMother,
    alt: 'Depoimento Leandro',
    title: 'Depoimento Leandro'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_04_Alice Fv1 (2).mp4',
    thumbnail: welcomeIsa,
    alt: 'Depoimento Alice',
    title: 'Depoimento Alice'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_05_Nivea Fv1 (1).mp4',
    thumbnail: welcomePedro,
    alt: 'Depoimento Nivea',
    title: 'Depoimento Nivea'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_06_JP Fv1 (1).mp4',
    thumbnail: studentMother,
    alt: 'Depoimento JP',
    title: 'Depoimento JP'
  },
  {
    type: 'video' as const,
    src: '/videos/YAZIGI_DEP_07_Nayla Fv1 (1).mp4',
    thumbnail: welcomeIsa,
    alt: 'Depoimento Nayla',
    title: 'Depoimento Nayla'
  }
]



export const GallerySection = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-background to-muted'>
      <div className='container px-4'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Conheça Nossa Comunidade
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Veja como nossos alunos aprendem com propósito e vivenciam o inglês
            de forma natural e divertida.
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true
              })
            ]}
            className='w-full'
          >
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                  <div className='edu-card h-full overflow-hidden group'>
                    <div className='relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md'>
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <div className='relative w-full h-full'>
                          <img
                            src={item.thumbnail}
                            alt={item.alt}
                            className='w-full h-full object-cover'
                          />
                          <div className='absolute inset-0 bg-primary/30 flex items-center justify-center'>
                            <button
                              onClick={() => window.open(item.src, '_blank')}
                              className='w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform hover:scale-110 shadow-lg'
                              aria-label='Assistir vídeo'
                            >
                              <Play
                                className='h-10 w-10 ml-1'
                                fill='currentColor'
                              />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Overlay com título */}
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6'>
                        <h3 className='text-white text-2xl font-bold'>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex -left-12' />
            <CarouselNext className='hidden md:flex -right-12' />
          </Carousel>

          {/* Indicadores mobile */}
          <div className='flex justify-center gap-2 mt-8 md:hidden'>
            {galleryItems.map((_, index) => (
              <div key={index} className='w-2 h-2 rounded-full bg-primary/30' />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <p className='text-lg text-muted-foreground mb-6'>
            Faça parte dessa comunidade que transforma sonhos em fluência.
          </p>
          <a
            href='https://wa.me/5519991394250?text=Olá!%20Vi%20a%20galeria%20de%20alunos%20e%20quero%20fazer%20parte%20do%20Yázigi%20Swiss%20Park!%20Gostaria%20de%20mais%20informações.'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg'
          >
            <IoLogoWhatsapp className='h-6 w-6' />
            Quero Fazer Parte!
          </a>
        </div>
      </div>
    </section>
  )
}
