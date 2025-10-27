import {
  Brain,
  Lightbulb,
  Users2,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    icon: Brain,
    title: 'Speaking From Day 1',
    titlePt: 'Conversação Desde o Dia 1',
    description:
      'Conversação desde a primeira aula e acompanhamento individual para manter o foco e aprender ainda mais rápido',
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: Users2,
    title: 'Monitored Progress',
    titlePt: 'Progresso Monitorado',
    description:
      'Professores monitoram o progresso de cada aluno individualmente, garantindo experiência personalizada',
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: Sparkles,
    title: 'Safe & Fun Environment',
    titlePt: 'Ambiente Lúdico e Seguro',
    description:
      'Crianças aprendem inglês se divertindo, a partir dos 3 anos, em um ambiente seguro',
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  },
  {
    icon: BookOpen,
    title: 'Exclusive Collections',
    titlePt: 'Coleções Exclusivas',
    description:
      'Material didático inovador, adaptado à faixa etária e ao estágio de desenvolvimento',
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: Award,
    title: 'International Exams',
    titlePt: 'Exames Internacionais',
    description:
      'Exames Pearson que comprovam sua fluência e garantem sua comunicação global',
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: Lightbulb,
    title: 'Live & Flexible Classes',
    titlePt: 'Aulas Ao Vivo & Flexíveis',
    description:
      'Aulas presenciais ou online com a excelência que só o Yázigi oferece',
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  }
]

export const BenefitsSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20diferenciais%20do%20Yázigi%20Swiss%20Park%20e%20como%20posso%20me%20matricular.',
      '_blank'
    )
  }

  return (
    <section className='py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
      {/* Background shapes */}
      <div className='absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl' />

      <div className='container px-4 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-block px-4 py-2 bg-primary/10 rounded-full mb-4'>
            <span className='text-primary font-bold text-sm uppercase tracking-widest'>
              Vantagens Yázigi
            </span>
          </div>

          <h2 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            <span className='bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
              Por Que Sua Voz Será Ouvida
            </span>
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Diferenciais que transformam o jeito de aprender idiomas
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12'>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className='group relative'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Decorative corner element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
                      benefit.color === 'primary'
                        ? 'from-primary/20'
                        : benefit.color === 'accent'
                        ? 'from-accent/20'
                        : 'from-cyan/20'
                    } to-transparent rounded-bl-full`}
                  />

                  <div className='relative p-8 flex flex-col h-full'>
                    {/* Icon with hover effect */}
                    <div className='mb-6 relative'>
                      <div
                        className={`absolute -top-2 -left-2 w-20 h-20 rounded-2xl ${
                          benefit.color === 'primary'
                            ? 'bg-primary/10'
                            : benefit.color === 'accent'
                            ? 'bg-accent/10'
                            : 'bg-cyan/10'
                        } blur-xl`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-2xl ${
                          benefit.color === 'primary'
                            ? 'bg-gradient-to-br from-primary to-primary/80'
                            : benefit.color === 'accent'
                            ? 'bg-gradient-to-br from-accent to-accent/80'
                            : 'bg-gradient-to-br from-cyan to-cyan/80'
                        } flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className='flex-1'>
                      <h3 className='text-2xl font-bold mb-2 text-black'>
                        {benefit.titlePt}
                      </h3>
                      <p
                        className={`text-sm font-semibold mb-4 ${
                          benefit.color === 'primary'
                            ? 'text-primary'
                            : benefit.color === 'accent'
                            ? 'text-accent'
                            : 'text-cyan'
                        }`}
                      >
                        {benefit.title}
                      </p>
                      <p className='text-black/70 leading-relaxed'>
                        {benefit.description}
                      </p>
                    </div>

                    <Button
                      variant='outline'
                      className='w-full mt-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-full'
                      onClick={handleWhatsAppClick}
                    >
                      <IoLogoWhatsapp className='mr-2 h-5 w-5' />
                      Consultar Vantagem
                    </Button>
                  </div>
                </div>

                {/* Floating decoration */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                    benefit.color === 'primary'
                      ? 'bg-primary/5'
                      : benefit.color === 'accent'
                      ? 'bg-accent/5'
                      : 'bg-cyan/5'
                  } blur-2xl group-hover:scale-150 transition-all duration-500 -z-10`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
