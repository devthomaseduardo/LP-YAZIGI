import { useState } from 'react'
import { GraduationCap, Clock, BarChart } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import { DiagnosticModal } from './DiagnosticModal'
import heroImage from '@/assets/bg.webp'

export const DiagnosticSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='relative py-32 overflow-hidden'>
        {/* Parallax Background */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-fixed'
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: 'translateZ(-1px) scale(1.5)'
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80' />
        </div>

        {/* Floating shapes with shadow */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse shadow-2xl' />
        <div
          className='absolute bottom-20 right-10 w-40 h-40 bg-cyan/20 rounded-full blur-3xl animate-pulse shadow-2xl'
          style={{ animationDelay: '1s' }}
        />

        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='icon-badge mx-auto mb-6 animate-bounce'>
              <GraduationCap className='h-7 w-7 text-white' />
            </div>

            <h2 className='text-4xl md:text-6xl font-bold mb-6 text-white'>
              Qual é o Seu Nível de Voz no Mundo?
            </h2>

            <p className='text-xl md:text-2xl mb-6 text-white/95 font-light max-w-3xl mx-auto leading-relaxed'>
              Nosso{' '}
              <span className='font-semibold text-accent'>
                Teste de Nível EXPLORE
              </span>{' '}
              é a forma mais rápida de descobrir qual curso e turma são ideais
              para você.
            </p>

            <p className='text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
              Receba um diagnóstico preciso, alinhado às escalas de nivelamento
              internacionais <span className='font-semibold'>GSE e CEFR</span>.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-6 mb-10 text-white/80'>
              <span className='flex items-center gap-2'>
                <Clock className='h-6 w-6 text-accent' />
                <span>Duração: 3 minutos</span>
              </span>
              <span className='flex items-center gap-2'>
                <BarChart className='h-6 w-6 text-cyan' />
                <span>Resultado: Diagnóstico Personalizado</span>
              </span>
            </div>

            <Button
              size='lg'
              onClick={() => setIsModalOpen(true)}
              className='bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all font-semibold'
            >
              <IoLogoWhatsapp className='mr-2 h-6 w-6' />
              Fazer Meu Diagnóstico Grátis
            </Button>
          </div>
        </div>
      </section>

      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
