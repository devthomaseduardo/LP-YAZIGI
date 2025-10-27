import { BookOpen, Users, Lightbulb } from 'lucide-react'
import logo70anos from '@/assets/logo-70anos.png'

const features = [
  {
    icon: BookOpen,
    title: 'Cultura + Idioma',
    description:
      'Ensinamos aspectos culturais globais, não apenas gramática e vocabulário',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Aprendizado Social',
    description:
      'Aulas dinâmicas e colaborativas, com foco em comunicação real e fluência',
    color: 'accent'
  },
  {
    icon: Lightbulb,
    title: 'Método Moderno',
    description:
      'Aprendizado baseado em contexto, vivências e tecnologia educacional',
    color: 'cyan'
  }
]

export const FeatureCards = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative'>
      {features.map((feature, index) => (
        <div
          key={index}
          className='relative bg-[#c0ea41] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
        >
          {/* Decorative corner element */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${
              feature.color === 'primary'
                ? 'from-primary/20'
                : feature.color === 'accent'
                ? 'from-accent/20'
                : 'from-cyan-400/20'
            } to-transparent rounded-bl-full`}
          />

          <feature.icon className='w-10 h-10 text-gray-900 mb-4 relative z-10' />
          <h3 className='text-xl font-semibold text-gray-900 mb-2 relative z-10'>
            {feature.title}
          </h3>
          <p className='text-gray-800 text-sm leading-relaxed relative z-10'>
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  )
}
