import { IoLogoWhatsapp } from 'react-icons/io'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

// NOVOS IMPORTS DE IMAGEM DA PASTA ASSETS:
import brunoEMel from '@/assets/bruno-e-mel.png'
import diogoCongratulations from '@/assets/Diogo-congratulations.png'
import mariMegafashion from '@/assets/Mari-megafashion.png'
import mariMelcoordenadora from '@/assets/mari-melcoordenadora.png'
import studentMother from '@/assets/student-mother.png'
import welcomeIsa from '@/assets/welcome-isa.png'
import welcomePedro from '@/assets/welcome-pedro.png'
// DEPOIMENTOS EM VÍDEO REMOVIDOS

const galleryItems = [
  
  {
    type: 'image' as const,
    src: welcomeIsa,
    alt: 'Nova aluna Yázigi Swiss Park - Welcome Isa',
    title: 'Welcome, Isa!'
  },
  {
    type: 'image' as const,
    src: welcomePedro,
    alt: 'Nova aluno Yázigi Swiss Park - Welcome Pedro',
    title: 'Welcome, Pedro!'
  },
  {
    type: 'image' as const,
    src: brunoEMel,
    alt: 'Professores Bruno e Mel',
    title: 'Professores Bruno e Mel'
  },
  {
    type: 'image' as const,
    src: diogoCongratulations,
    alt: 'Aluno Diogo comemorando',
    title: 'Parabéns, Diogo!'
  },
  {
    type: 'image' as const,
    src: mariMegafashion,
    alt: 'Mari no Mega Fashion',
    title: 'Mari - Mega Fashion'
  },
  {
    type: 'image' as const,
    src: mariMelcoordenadora,
    alt: 'Mari no Mega Fashion',
title: 'Mari - Mega Fashion'
  },
  
]

// FUNÇÃO getYouTubeEmbed REMOVIDA

export const GallerySection = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-background to-muted'>
      <div className='container px-4'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Vivência Yázigi 
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Veja como nossos alunos e professores transformam o aprendizado em
            fluência global.
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            // Autoplay REMOVIDO
            className='w-full'
          >
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                  <div className='edu-card h-full overflow-hidden group'>
                    <div className='relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md'>
                      {/* Renderiza APENAS Imagens */}
                      <img
                        src={item.src}
                        alt={item.alt}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />

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
            Faça parte dessa escola que transforma sonhos em fluência.
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
