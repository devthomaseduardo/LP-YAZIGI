import { Baby, Users, Briefcase, Globe, Plane } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'

const levels = [
  {
    icon: Baby,
    titlePt: 'Crianças',
    age: '3 a 10 anos',
    language: 'Inglês',
    description:
      'Aprendizado através de jogos, música e arte. Desenvolvemos cidadania global enquanto as crianças se divertem naturalmente em inglês.',
    highlights: [
      'Jogos Educativos',
      'Arte e Música',
      'Cidadania Global',
      'Inglês Natural'
    ],
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: Users,
    titlePt: 'Adolescentes',
    age: '11 a 17 anos',
    language: 'Inglês',
    description:
      'Conectados com cultura pop, redes sociais e o mundo digital. Desenvolvem fluência através de projetos e pensamento crítico.',
    highlights: [
      'Cultura Digital',
      'Projetos Reais',
      'Preparação Cambridge',
      'Fluência Ativa'
    ],
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: Briefcase,
    titlePt: 'Jovens e Adultos',
    age: '18+ anos',
    language: 'Inglês',
    description:
      'Inglês para carreira, viagens e vida. Business English, preparação TOEFL e comunicação internacional de alto nível.',
    highlights: [
      'Business English',
      'Preparação TOEFL',
      'Networking Global',
      'Carreira Internacional'
    ],
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  },
  {
    icon: Globe,
    titlePt: 'Espanhol',
    age: 'Todas as Idades',
    language: 'Espanhol',
    description:
      'Domine o espanhol com metodologia Yázigi. Certificação DELE, cultura hispânica e preparação para o mercado latino-americano.',
    highlights: [
      'Certificação DELE',
      'Cultura Hispânica',
      'Turmas Adaptadas',
      'Material Pearson'
    ],
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent'
  },
  {
    icon: Plane,
    titlePt: 'Intercâmbio',
    age: 'Jovens e Adultos',
    language: 'Internacional',
    description:
      'Programas de intercâmbio personalizados. Viva a experiência de estudar no exterior com todo o suporte Yázigi.',
    highlights: [
      'Destinos Exclusivos',
      'Acompanhamento Total',
      'Vivência Cultural',
      'Fluência Acelerada'
    ],
    color: 'accent',
    gradient: 'from-accent/20 via-accent/10 to-transparent'
  },
  {
    icon: Briefcase,
    titlePt: 'Adultos Profissionais',
    age: '18+ anos',
    language: 'Inglês Avançado',
    description:
      'Aprimore habilidades avançadas para negócios, reuniões internacionais e negociações complexas. Foco total na fluência profissional.',
    highlights: [
      'Business English Avançado',
      'Negociações Internacionais',
      'Apresentações Profissionais',
      'Networking Corporativo'
    ],
    color: 'cyan',
    gradient: 'from-cyan/20 via-cyan/10 to-transparent'
  }
]

export const CoursesSection = () => {
  const handleWhatsAppClick = (level: string) => {
    const message = `Olá!%20Quero%20saber%20mais%20sobre%20o%20curso%20de%20${encodeURIComponent(
      level
    )}%20no%20Yázigi%20Swiss%20Park.`
    window.open(`https://wa.me/5519991394250?text=${message}`, '_blank')
  }

  return (
    <section className='py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
      {/* Background shapes */}
      <div className='absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl' />

      <div className='container px-4 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-accent/10 to-cyan/10 rounded-full mb-4'>
            <span className='text-black font-bold text-sm uppercase tracking-wide'>
              Cursos • Yázigi
            </span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent'>
            Cursos Que Transformam
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto'>
            Do primeiro contato ao domínio completo: metodologia exclusiva
            Yázigi + Certificação Pearson Internacional
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <div key={index} className='group relative'>
                <div className='relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
                      level.color === 'primary'
                        ? 'from-primary/20'
                        : level.color === 'accent'
                        ? 'from-accent/20'
                        : 'from-cyan/20'
                    } to-transparent rounded-bl-full`}
                  />

                  <div className='relative p-8 flex flex-col h-full'>
                    {/* Icon */}
                    <div className='mb-6 relative'>
                      <div
                        className={`absolute -top-2 -left-2 w-20 h-20 rounded-2xl ${
                          level.color === 'primary'
                            ? 'bg-primary/10'
                            : level.color === 'accent'
                            ? 'bg-accent/10'
                            : 'bg-cyan/10'
                        } blur-xl`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-2xl ${
                          level.color === 'primary'
                            ? 'bg-gradient-to-br from-primary to-primary/80'
                            : level.color === 'accent'
                            ? 'bg-gradient-to-br from-accent to-accent/80'
                            : 'bg-gradient-to-br from-cyan to-cyan/80'
                        } flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                    </div>

                    {/* Content */}
                    <div className='flex-1'>
                      <h3 className='text-2xl font-bold mb-2 text-black'>
                        {level.titlePt}
                      </h3>
                      <p className='text-sm font-semibold mb-4 text-black/70'>
                        {level.age} • {level.language}
                      </p>
                      <p className='text-black/70 leading-relaxed mb-4'>
                        {level.description}
                      </p>

                      {/* Accordions */}
                      <div className='mb-4'>
                        {level.highlights.map((highlight, idx) => (
                          <details
                            key={idx}
                            className='mb-2 border border-black/10 rounded-lg overflow-hidden group'
                          >
                            <summary className='cursor-pointer px-4 py-2 bg-black/5 text-black font-medium hover:bg-black/10 transition-all'>
                              {highlight}
                            </summary>
                            <div className='px-4 py-2 text-sm text-black/70 bg-black/2'>
                              Aprenda mais sobre "{highlight}" no curso.
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant='outline'
                      className='w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-full'
                      onClick={() => handleWhatsAppClick(level.titlePt)}
                    >
                      <IoLogoWhatsapp className='mr-2 h-5 w-5' />
                      Consultar Curso
                    </Button>
                  </div>
                </div>

                {/* Floating decoration */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                    level.color === 'primary'
                      ? 'bg-primary/5'
                      : level.color === 'accent'
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
