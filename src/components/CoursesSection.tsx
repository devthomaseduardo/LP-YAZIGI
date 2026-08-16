import { Baby, Users, Briefcase, Globe, Plane } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const levels = [
  {
    icon: Baby,
    titlePt: 'Crianças',
    age: '3 a 10 anos',
    language: 'Inglês',
    description:
      'Aprendizado através de jogos, música e arte. Desenvolvemos cidadania global enquanto as crianças se divertem naturalmente em inglês.',
    highlights: [
      {
        title: 'Jogos Educativos',
        content: 'Aprendizado lúdico através de jogos interativos, atividades digitais e brincadeiras estruturadas que tornam o inglês uma diversão natural. Desenvolvemos habilidades linguísticas enquanto as crianças se divertem.'
      },
      {
        title: 'Arte e Música',
        content: 'Expressão criativa através de projetos artísticos, músicas e atividades culturais. As crianças aprendem vocabulário, pronúncia e estruturas linguísticas naturalmente enquanto cantam, desenham e criam.'
      },
      {
        title: 'Cidadania Global',
        content: 'Desenvolvimento de consciência cultural, respeito à diversidade e compreensão do mundo. Através de projetos e atividades, as crianças aprendem sobre diferentes culturas enquanto praticam o inglês.'
      },
      {
        title: 'Inglês Natural',
        content: 'Metodologia que prioriza a comunicação natural e espontânea. As crianças desenvolvem confiança para se expressar em inglês através de situações reais e significativas do dia a dia.'
      }
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
      {
        title: 'Cultura Digital',
        content: 'Integração com tecnologia, redes sociais e mídia digital. Os adolescentes aprendem inglês usando as ferramentas que já fazem parte do seu dia a dia, como apps, jogos, séries e música.'
      },
      {
        title: 'Projetos Reais',
        content: 'Desenvolvimento de projetos práticos que simulam situações da vida real. Os alunos criam conteúdo, participam de debates e resolvem desafios enquanto praticam inglês ativamente.'
      },
      {
        title: 'Preparação Cambridge',
        content: 'Preparação específica para os exames internacionais Cambridge, incluindo KET, PET e FCE. Material exclusivo e simulados que garantem excelentes resultados nas certificações.'
      },
      {
        title: 'Fluência Ativa',
        content: 'Metodologia focada na comunicação real e desenvolvimento de habilidades práticas. Os adolescentes ganham confiança para se expressar em inglês em diferentes contextos e situações.'
      }
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
      {
        title: 'Business English',
        content: 'Vocabulário especializado e habilidades essenciais para o ambiente corporativo. Aprenda a conduzir reuniões, fazer apresentações, redigir e-mails profissionais e negociar em inglês com confiança.'
      },
      {
        title: 'Preparação TOEFL',
        content: 'Programa completo de preparação para o TOEFL iBT, com estratégias específicas para cada seção do teste. Material didático especializado e simulados que garantem pontuações competitivas.'
      },
      {
        title: 'Networking Global',
        content: 'Desenvolvimento de habilidades para networking internacional. Aprenda a se comunicar efetivamente em ambientes multiculturais e construa relações profissionais globais.'
      },
      {
        title: 'Carreira Internacional',
        content: 'Preparação específica para oportunidades internacionais, incluindo entrevistas de emprego, chamadas de vídeo e comunicação intercultural no ambiente de trabalho.'
      }
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
      {
        title: 'Certificação DELE',
        content: 'Preparação completa para os exames DELE (Diploma de Español como Lengua Extranjera). Metodologia específica e material didático atualizado para garantir seu sucesso na certificação oficial do Instituto Cervantes.'
      },
      {
        title: 'Cultura Hispânica',
        content: 'Imersão na rica cultura dos países hispânicos. Explore literatura, arte, música, gastronomia e costumes enquanto desenvolve suas habilidades linguísticas em espanhol.'
      },
      {
        title: 'Turmas Adaptadas',
        content: 'Grupos organizados por nível e objetivos, garantindo um aprendizado personalizado. Metodologia flexível que se adapta ao ritmo e necessidades específicas de cada aluno.'
      },
      {
        title: 'Material Pearson',
        content: 'Material didático de última geração da Pearson, líder mundial em educação. Recursos multimídia, plataforma digital interativa e conteúdo atualizado para um aprendizado completo.'
      }
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
      {
        title: 'Destinos Exclusivos',
        content: 'Parcerias com as melhores instituições de ensino ao redor do mundo. Programas em países como Inglaterra, Estados Unidos, Canadá, Austrália e Nova Zelândia, com opções para diferentes objetivos e orçamentos.'
      },
      {
        title: 'Acompanhamento Total',
        content: 'Suporte completo antes, durante e após o intercâmbio. Desde a escolha do programa e documentação até a adaptação no exterior e retorno ao Brasil, conte com nossa equipe especializada.'
      },
      {
        title: 'Vivência Cultural',
        content: 'Experiência cultural imersiva com hospedagem em famílias locais ou residências estudantis. Atividades extracurriculares, passeios e eventos que proporcionam uma verdadeira imersão na cultura local.'
      },
      {
        title: 'Fluência Acelerada',
        content: 'Rápida evolução no idioma através da imersão total. Pratique o idioma 24 horas por dia em situações reais, acelerando significativamente seu processo de aprendizagem.'
      }
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
      {
        title: 'Business English Avançado',
        content: 'Desenvolvimento avançado de habilidades específicas para o ambiente corporativo internacional. Aprenda a liderar reuniões globais, fazer pitch de projetos e gerenciar equipes multiculturais em inglês.'
      },
      {
        title: 'Negociações Internacionais',
        content: 'Técnicas avançadas de negociação em inglês, incluindo estratégias culturais, linguagem corporal e etiqueta internacional. Prepare-se para conduzir negociações complexas com parceiros globais.'
      },
      {
        title: 'Apresentações Profissionais',
        content: 'Metodologia especializada para apresentações executivas impactantes. Domine técnicas de storytelling, persuasão e comunicação visual para apresentações memoráveis em inglês.'
      },
      {
        title: 'Networking Corporativo',
        content: 'Habilidades avançadas para networking em ambientes corporativos internacionais. Aprenda a construir e manter relações profissionais estratégicas em contextos multiculturais.'
      }
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
    <section id='cursos' className='py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
      <div className='absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl' />
      <div className='absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl' />

      <div className='container px-4 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4'>
            <span className='text-primary font-bold text-sm uppercase tracking-wide'>
              Cursos • Yázigi
            </span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-4 text-foreground'>
            Cursos Que Transformam
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Do primeiro contato ao domínio completo: metodologia exclusiva
            Yázigi + Certificação Pearson Internacional
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <div key={index} className='group relative'>
                <div className='relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

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

                      <Accordion type="single" collapsible className="mb-4">
                        {level.highlights.map((highlight, idx) => (
                          <AccordionItem
                            key={idx}
                            value={`item-${idx}`}
                            className="border-b border-black/10 last:border-0"
                          >
                            <AccordionTrigger className="hover:no-underline hover:bg-black/5 py-3 px-4 text-left">
                              <span className="text-sm font-medium text-black">{highlight.title}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-3">
                              <p className="text-sm text-black/70 leading-relaxed">
                                {highlight.content}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

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
