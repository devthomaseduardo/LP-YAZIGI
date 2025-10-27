import { Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

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

export const TestimonialsSection = () => {
  return (
    <section
      id='depoimentos'
      className='py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'
    >
      {/* Background shapes */}
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
              Vidas Transformadas Pelo Yázigi
            </span>
          </h2>

          <p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
            Descubra como nossos alunos conquistaram seus sonhos com a fluência
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
                delay: 4000,
                stopOnInteraction: true
              })
            ]}
            className='w-full'
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <div className='group relative h-full'>
                    <div className='relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-primary/80 border-2 border-primary/30 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-6 md:p-8 h-full flex flex-col'>
                      {/* Decorative corner */}
                      <div className='absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-bl-full' />

                      {/* Rating */}
                      <div className='flex gap-1 mb-3 md:mb-4 relative z-10'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='h-4 w-4 md:h-5 md:w-5 fill-accent text-accent drop-shadow-lg'
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className='mb-4 md:mb-6 leading-relaxed text-white text-base md:text-lg flex-1 relative z-10'>
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className='border-t border-white/20 pt-3 md:pt-4 relative z-10'>
                        <p className='font-bold text-white text-base md:text-lg'>
                          {testimonial.name}
                        </p>
                        <p className='text-xs md:text-sm text-accent font-medium'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Floating decoration */}
                    <div className='absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/10 blur-2xl group-hover:scale-150 transition-all duration-500 -z-10' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex' />
            <CarouselNext className='hidden md:flex' />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
