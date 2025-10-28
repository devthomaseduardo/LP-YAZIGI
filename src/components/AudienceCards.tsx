import { Users, Briefcase, GraduationCap } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'

const audiences = [
  {
    icon: Users,
    title: 'Yázigi Travel',
    subtitle: 'Intercâmbio e Aventura',
    description:
      'Explore o mundo com nossos programas de intercâmbio exclusivos. Segurança, acompanhamento e imersão cultural completa para uma fluência real.',
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: Briefcase,
    title: 'Yázigi for Business',
    subtitle: 'Inglês Corporativo',
    description:
      'Soluções personalizadas para o mundo corporativo. Desenvolva as habilidades de comunicação da sua equipe e impulsione a competitividade global da sua empresa.',
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: GraduationCap,
    title: 'Yázigi for Schools',
    subtitle: 'Parceria Educacional',
    description:
      'Traga a excelência Yázigi para sua escola regular. Metodologia e material didático de ponta, preparando alunos para o futuro global dentro da sala de aula.',
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  }
]

export const AudienceCards = () => {
  const handleWhatsAppClick = (audienceIndex: number) => {
    // Mensagens ajustadas para cada novo foco
    const messages = [
      // Yázigi Travel (Index 0)
      'Olá!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20programas%20de%20Intercâmbio%20Yázigi%20Travel%20e%20como%20posso%20participar.',
      // Yázigi for Business (Index 1)
      'Olá!%20Busco%20soluções%20de%20Inglês%20Corporativo%20personalizadas%20do%20Yázigi%20for%20Business%20para%20a%20minha%20empresa.',
      // Yázigi for Schools (Index 2)
      'Olá!%20Gostaria%20de%20conhecer%20a%20proposta%20do%20Yázigi%20for%20Schools%20para%20parceria%20e%20implementação%20na%20minha%20escola.'
    ]

    const message =
      messages[audienceIndex] ||
      'Olá!%20Tenho%20interesse%20nas%20soluções%20do%20Yázigi%20Swiss%20Park!'

    window.open(`https://wa.me/5519991394250?text=${message}`, '_blank')
  }

  return (
    <section className='py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
      {/* Geometric shapes background */}
      <div className='absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl' />

      <div className='container px-4 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-accent/10 to-cyan/10 rounded-full mb-4'>
            <span className='text-primary font-bold text-sm uppercase tracking-wide'>
              Quem Somos • Who We Serve
            </span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Hub educacional Yázigi
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Soluções personalizadas para cada etapa da sua jornada global
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className='group relative'
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Creative card with diagonal gradient */}
                <div className='relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
                  {/* Diagonal gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Decorative corner element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
                      audience.color === 'primary'
                        ? 'from-primary/20'
                        : audience.color === 'accent'
                        ? 'from-accent/20'
                        : 'from-cyan/20'
                    } to-transparent rounded-bl-full`}
                  />

                  <div className='relative p-8 flex flex-col h-full'>
                    {/* Icon with creative positioning */}
                    <div className='mb-6 relative'>
                      <div
                        className={`absolute -top-2 -left-2 w-20 h-20 rounded-2xl ${
                          audience.color === 'primary'
                            ? 'bg-primary/10'
                            : audience.color === 'accent'
                            ? 'bg-accent/10'
                            : 'bg-cyan/10'
                        } blur-xl`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-2xl ${
                          audience.color === 'primary'
                            ? 'bg-gradient-to-br from-primary to-primary/80'
                            : audience.color === 'accent'
                            ? 'bg-gradient-to-br from-accent to-accent/80'
                            : 'bg-gradient-to-br from-cyan to-cyan/80'
                        } flex items-center justify-center shadow-lg transition-all duration-500`}
                        // CLASSES REMOVIDAS AQUI: group-hover:scale-110 group-hover:rotate-6
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                    </div>

                    {/* Content */}
                    <div className='flex-1'>
                      <h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
                        {audience.title}
                      </h3>
                      <p
                        className={`text-sm font-semibold mb-4 ${
                          audience.color === 'primary'
                            ? 'text-primary'
                            : audience.color === 'accent'
                            ? 'text-accent'
                            : 'text-cyan'
                        }`}
                      >
                        {audience.subtitle}
                      </p>
                      <p className='text-muted-foreground leading-relaxed mb-6'>
                        {audience.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant='outline'
                      className='w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-full'
                      onClick={() => handleWhatsAppClick(index)}
                    >
                      <IoLogoWhatsapp className='mr-2 h-5 w-5' />
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Floating decoration */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                    audience.color === 'primary'
                      ? 'bg-primary/5'
                      : audience.color === 'accent'
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
