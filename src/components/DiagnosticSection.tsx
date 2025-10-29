import { useState } from 'react'
import { BookOpenCheck, Globe, Users, BookOpen, Award } from 'lucide-react' // Importando os novos ícones
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import { DiagnosticModal } from './DiagnosticModal'
import heroImage from '@/assets/bg.webp'

const YAZIGI_LOGO_PATH = '/logo.png'

export const DiagnosticSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='relative py-32 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-primary opacity-95' />

          <div className='absolute inset-0'>
            <div
              className='absolute inset-0 opacity-10'
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_70%)]' />
          </div>

          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full' />
            <div className='absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full' />
          </div>
        </div>

        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='relative mx-auto mb-8 w-20 h-20'>
              <div className='absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75' />
              <div className='relative flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-sm rounded-full border border-white/20 p-2'>
                <img
                  src={YAZIGI_LOGO_PATH}
                  alt='Logo Yázigi'
                  className='h-full w-full object-cover rounded-full'
                />
              </div>
            </div>

            <h2 className='text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight'>
              Descubra Seu Nível de
              <span className='bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent block mt-2'>
                Fluência Global
              </span>
            </h2>

            <p className='text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed'>
              Nosso{' '}
              <span className='relative inline-block'>
                <span className='absolute -inset-1 bg-accent/20 rounded-lg blur' />
                <span className='relative text-white font-semibold'>
                  Diagnóstico Personalizado
                </span>
              </span>{' '}
              é a forma mais rápida de descobrir o curso ideal para o seu perfil
              no Yázigi Swiss Park.
            </p>

            <div className='grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-left'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center'>
                    <BookOpenCheck className='h-6 w-6 text-white' />{' '}
                    {/* Ícone alterado */}
                  </div>
                  <div>
                    <h3 className='font-semibold text-white'>
                      Rápido e Preciso
                    </h3>
                    <p className='text-white/80 text-sm'>Apenas 3 minutos</p>
                  </div>
                </div>
                <p className='text-white/70 text-sm'>
                  Teste adaptativo que identifica seu nível atual com precisão.
                </p>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-left'>
                <div className='flex items-center gap-4 mb-3'>
                  <div className='w-12 h-12 rounded-xl bg-cyan/30 flex items-center justify-center'>
                    <Globe className='h-6 w-6 text-white' />{' '}
                    {/* Ícone alterado */}
                  </div>
                  <div>
                    <h3 className='font-semibold text-white'>
                      Padrão Internacional
                    </h3>
                    <p className='text-white/80 text-sm'>GSE e CEFR</p>
                  </div>
                </div>
                <p className='text-white/70 text-sm'>
                  Alinhado aos padrões internacionais de proficiência para
                  certificação Pearson.
                </p>
              </div>
            </div>

            <div className='relative inline-block group'>
              <div className='absolute -inset-1 bg-accent/70 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity' />
              <Button
                size='lg'
                onClick={() => setIsModalOpen(true)}
                className='relative bg-accent text-primary hover:bg-accent/90 text-lg px-12 py-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all font-bold'
              >
                <IoLogoWhatsapp className='mr-3 h-7 w-7' />
                Fazer Meu Diagnóstico Grátis
              </Button>
            </div>

            <div className='mt-12 flex items-center justify-center gap-8'>
              <div className='text-white/60 text-sm flex items-center gap-2'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                100% Gratuito
              </div>
              <div className='text-white/60 text-sm flex items-center gap-2'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                Diagnóstico WhatsApp
              </div>
            </div>
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
