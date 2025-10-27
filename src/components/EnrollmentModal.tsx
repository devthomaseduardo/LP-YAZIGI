import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { FaWhatsapp, FaUserGraduate, FaGlobe, FaAward } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'yazigi_enrollment_modal_closed'
const EXPIRATION_TIME_MS = 24 * 60 * 60 * 1000 // 24 horas

export const EnrollmentModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [banner, setBanner] = useState('')
  const [bannerLoaded, setBannerLoaded] = useState(false)

  const banners = ['/banners/banner-kids.png', '/banners/banner-70anos.png']

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
    const now = new Date().getTime()
    localStorage.setItem(STORAGE_KEY, now.toString())
  }, [])

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY)
    if (lastClosed) {
      const timeElapsed = new Date().getTime() - parseInt(lastClosed, 10)
      if (timeElapsed < EXPIRATION_TIME_MS) return
    }

    const randomBanner = banners[Math.floor(Math.random() * banners.length)]
    setBanner(randomBanner)
    setBannerLoaded(false)

    const timer = setTimeout(() => setIsOpen(true), 5000)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setIsOpen(true)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [banners])

  if (!isOpen) return null

  const whatsappLink =
    'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20sobre%20as%20matrículas%202025%20do%20Yázigi%20Swiss%20Park!'

  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in'>
      <div className='relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-scale-in'>
        {/* Fundo com gradiente */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-primary opacity-95' />

        {/* Linhas decorativas onduladas */}
        <svg
          className='absolute inset-0 w-full h-full opacity-25'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M 0,150 Q 400,100 800,150 T 1600,150'
            stroke='hsl(var(--accent))'
            strokeWidth='3'
            fill='none'
          />
          <path
            d='M 0,250 Q 400,300 800,250 T 1600,250'
            stroke='hsl(var(--cyan))'
            strokeWidth='3'
            fill='none'
          />
        </svg>

        {/* Conteúdo principal */}
        <div className='relative z-10 text-white'>
          {/* Banner com fade */}
          <div className='w-full h-56 md:h-64 overflow-hidden relative'>
            <img
              src={banner}
              alt='Banner Educacional - Matrículas abertas'
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                bannerLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setBannerLoaded(true)}
            />
            <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6'>
              <h2 className='text-3xl md:text-4xl font-extrabold mb-2'>
                MATRÍCULAS 2025 ABERTAS!
              </h2>
              <p className='text-lg md:text-xl font-medium text-white/90'>
                Vagas limitadas no Yázigi Swiss Park.
              </p>
            </div>

            <button
              onClick={handleCloseModal}
              className='absolute top-4 right-4 z-20 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors'
              aria-label='Fechar'
            >
              <X className='w-5 h-5 text-white' />
            </button>
          </div>

          {/* Bloco informativo */}
          <div className='p-8 text-center'>
            <p className='text-xl leading-relaxed mb-6 text-white/95'>
              Faça parte de uma rede com{' '}
              <span className='font-bold text-accent'>
                mais de 2 milhões de alunos
              </span>{' '}
              e desenvolva fluência com o método que transforma aprendizado em
              experiência real.
            </p>

            <div className='flex flex-wrap justify-center gap-6 text-sm mb-10 text-white/90'>
              <div className='flex items-center gap-2'>
                <FaGlobe className='text-accent w-5 h-5' />
                <span>Certificação Internacional</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaAward className='text-cyan-300 w-5 h-5' />
                <span>75 Anos de Excelência</span>
              </div>
            </div>

            {/* Botões de ação */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                onClick={() => {
                  window.open(whatsappLink, '_blank')
                  handleCloseModal()
                }}
                className='flex-1 bg-white text-primary hover:bg-white/90 text-lg py-6 rounded-full font-semibold shadow-xl hover:scale-105 transition-all'
              >
                <FaWhatsapp className='mr-2 h-5 w-5' />
                Garantir Minha Vaga
              </Button>

              <Button
                size='lg'
                variant='outline'
                onClick={() => {
                  window.open(
                    'https://yconnect.yazigi.com.br/#/login?redirect=/',
                    '_blank'
                  )
                  handleCloseModal()
                }}
                className='flex-1 text-lg py-6 rounded-full border-white text-white hover:bg-white/10 font-semibold transition-all'
              >
                <FaUserGraduate className='mr-2 h-5 w-5' />
                Já Sou Aluno
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
