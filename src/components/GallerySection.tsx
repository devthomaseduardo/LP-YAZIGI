'use client'

import { IoLogoWhatsapp } from 'react-icons/io'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

// IMAGENS
import brunoEMel from '@/assets/bruno-e-mel.png'
import diogoCongratulations from '@/assets/Diogo-congratulations.png'
import mariMegafashion from '@/assets/Mari-megafashion.png'
import mariMelcoordenadora from '@/assets/mari-melcoordenadora.png'
import welcomeIsa from '@/assets/welcome-isa.png'
import welcomePedro from '@/assets/welcome-pedro.png'

const galleryItems = [
  {
    src: welcomeIsa,
    alt: 'Nova aluna Yázigi Swiss Park - Welcome Isa',
    title: 'Welcome, Isa!',
    description:
      'Isa está terminando a faculdade e nos procurou pois deseja concorrer a vagas em multinacionais.'
  },
  {
    src: welcomePedro,
    alt: 'Novo aluno Yázigi Swiss Park - Welcome Pedro',
    title: 'Welcome, Pedro!',
    description:
      'Pedro vai fazer aplicação para universidade nos EUA e nos procurou para conquistar esse objetivo.'
  },
  {
    src: brunoEMel,
    alt: 'Professores Bruno e Mel',
    title: 'Mel e Bruno',
    description:
      'Gestora pedagógica e gestor comercial — juntos, lideram com excelência e paixão pelo aprendizado.'
  },
  {
    src: diogoCongratulations,
    alt: 'Aluno Diogo comemorando',
    title: 'Parabéns, Diogo!',
    description:
      'Diogo indicou amigos para estudar no Yázigi e levou esse super prêmio!'
  },
  {
    src: mariMegafashion,
    alt: 'Mari no Mega Fashion',
    title: 'Mari - Mega Fashion',
    description: 'Mari ama vir às aulas e faz sua própria produção com estilo!'
  },
  {
    src: mariMelcoordenadora,
    alt: 'Mari e Mel coordenadora',
    title: 'Mari e Mel',
    description:
      'Uma dupla que inspira: dedicação, alegria e aprendizado diário.'
  }
]

export const GallerySection = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-background to-muted'>
      <div className='container px-4'>
        {/* TÍTULO */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Vivência Yázigi
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Veja como nossos alunos e professores transformam o aprendizado em
            fluência global.
          </p>
        </div>

        {/* GALERIA */}
        <div className='max-w-6xl mx-auto'>
          <Carousel opts={{ align: 'start', loop: true }} className='w-full'>
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
                  <div className='edu-card h-full overflow-hidden group'>
                    <div className='relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(128,0,255,0.25)]'>
                      {/* Imagem */}
                      <img
                        src={item.src}
                        alt={item.alt}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />

                      {/* Overlay */}
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#6B21A8]/90 to-transparent p-6'>
                        <h3 className='text-white text-2xl font-bold mb-2'>
                          {item.title}
                        </h3>
                        <p className='text-sm text-white/90 max-w-sm'>
                          {item.description}
                        </p>
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
        <div className='text-center mt-16'>
          <p className='text-lg text-muted-foreground mb-6'>
            Faça parte dessa escola que transforma sonhos em fluência.
          </p>
          <a
            href='https://wa.me/5519991394250?text=Olá!%20Vi%20a%20galeria%20de%20alunos%20e%20quero%20fazer%20parte%20do%20Yázigi%20Swiss%20Park!%20Gostaria%20de%20mais%20informações.'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(128,0,255,0.4)]'
          >
            <IoLogoWhatsapp className='h-6 w-6' />
            Quero Fazer Parte!
          </a>
        </div>
      </div>
    </section>
  )
}
