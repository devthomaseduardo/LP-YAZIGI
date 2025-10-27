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
import dep02 from '@/assets/videos/YAZIGI_DEP_02_Nalva Fv1 (1).mp4'
import dep03 from '@/assets/videos/YAZIGI_DEP_03_Leandro Fv1 (1).mp4'
import dep04 from '@/assets/videos/YAZIGI_DEP_04_Alice Fv1 (2).mp4'
import dep05 from '@/assets/videos/YAZIGI_DEP_05_Nivea Fv1 (1).mp4'
import dep06 from '@/assets/videos/YAZIGI_DEP_06_JP Fv1 (1).mp4'

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
    src: dep02,
    thumbnail: welcomePedro,
    alt: 'Depoimento Nalva',
    title: 'Depoimento Nalva'
  },
  {
    type: 'video' as const,
    src: dep03,
    thumbnail: studentMother,
    alt: 'Depoimento Leandro',
    title: 'Depoimento Leandro'
  },
  {
    type: 'video' as const,
    src: dep04,
    thumbnail: welcomeIsa,
    alt: 'Depoimento Alice',
    title: 'Depoimento Alice'
  },
  {
    type: 'video' as const,
    src: dep05,
    thumbnail: welcomePedro,
    alt: 'Depoimento Nivea',
    title: 'Depoimento Nivea'
  },
  {
    type: 'video' as const,
    src: dep06,
    thumbnail: studentMother,
    alt: 'Depoimento JP',
    title: 'Depoimento JP'
  }
]

const youtubeLinks = [
  'https://youtu.be/mjMAcOoG_vo?si=XXVpXZQFiJTo18jA',
  'https://youtube.com/shorts/ES8RF0sFd30?si=Tp9Weih5SLgjivtA',
  'https://youtube.com/shorts/4DVruze6lWA?si=BpiTxATNQ2TrYkUl'
]

function getYouTubeEmbed(url: string) {
  try {
    const u = new URL(url)
    // youtu.be short links
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '')
      return `https://www.youtube.com/embed/${id}${u.search || ''}`
    }
    // youtube.com links (watch, shorts)
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/shorts/')[1]
        return `https://www.youtube.com/embed/${id}${u.search || ''}`
      }
      if (u.searchParams.has('v')) {
        const id = u.searchParams.get('v')
        return `https://www.youtube.com/embed/${id}${u.search || ''}`
      }
    }
  } catch (e) {
    // fallthrough
  }
  return url
}



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
                          // Vídeos: render inline quando possível (mp4) ou iframe para YouTube
                          <div className='relative w-full h-full'>
                            {typeof item.src === 'string' && (item.src.includes('.mp4') || item.src.endsWith('.mp4')) ? (
                              <video
                                src={item.src}
                                controls
                                playsInline
                                className='w-full h-full object-cover bg-black'
                              />
                            ) : typeof item.src === 'string' && (item.src.includes('youtube.com') || item.src.includes('youtu.be')) ? (
                              <iframe
                                src={getYouTubeEmbed(item.src)}
                                title={item.title}
                                className='w-full h-full object-cover'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                              />
                            ) : (
                              // Fallback: thumbnail (sem botão gigante de play)
                              <img
                                src={item.thumbnail}
                                alt={item.alt}
                                className='w-full h-full object-cover'
                              />
                            )}
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

        {/* Sessão de vídeos do YouTube fornecidos */}
        <div className='max-w-6xl mx-auto mt-12'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold'>Vídeos da Comunidade</h3>
            <p className='text-muted-foreground'>Assista alguns vídeos selecionados do nosso canal.</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {youtubeLinks.map((link, i) => (
              <div key={i} className='rounded-2xl overflow-hidden shadow-md bg-black'>
                <div className='relative w-full aspect-video'>
                  <iframe
                    src={getYouTubeEmbed(link)}
                    title={`video-${i}`}
                    className='w-full h-full'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  />
                </div>
              </div>
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
