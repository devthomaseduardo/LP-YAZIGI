import { Users, Briefcase, GraduationCap } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'

const audiences = [
  {
    icon: Users,
    title: 'Para Pais',
    subtitle: 'Confiança para o futuro',
    description:
      'Metodologia comprovada, segurança e acompanhamento pedagógico de perto. Prepare seu filho para um mundo sem fronteiras.',
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: GraduationCap,
    title: 'Para Alunos',
    subtitle: 'Seu passaporte global',
    description:
      'De crianças a adultos: aprenda inglês e espanhol de forma natural, divertida e eficaz. Conquiste certificação internacional.',
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: Briefcase,
    title: 'Para Empresas',
    subtitle: 'Competitividade global',
    description:
      'Soluções corporativas personalizadas. Desenvolva equipes multilíngues, aumente competitividade e expanda mercados.',
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  }
]

export const AudienceCards = () => {
  const handleWhatsAppClick = (audience: string) => {
    const messages = {
      pais: 'Olá!%20Sou%20pai/mãe%20e%20quero%20garantir%20o%20melhor%20ensino%20de%20idiomas%20para%20meu%20filho.%20Conte-me%20mais%20sobre%20a%20metodologia%20Yázigi!',
      alunos:
        'Olá!%20Quero%20aprender%20inglês%20ou%20espanhol%20no%20Yázigi%20Swiss%20Park%20e%20conquistar%20fluência%20internacional!',
      empresas:
        'Olá!%20Represento%20uma%20empresa%20e%20busco%20soluções%20corporativas%20de%20idiomas%20para%20nossa%20equipe.'
    }
    window.open(
      `https://wa.me/5519991394250?text=${messages[audience as keyof typeof messages]}`,
      '_blank'
    )
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
            Yázigi Para Todos
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
                        } flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
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
                      onClick={() =>
                        handleWhatsAppClick(
                          index === 0 ? 'pais' : index === 1 ? 'alunos' : 'empresas'
                        )
                      }
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
