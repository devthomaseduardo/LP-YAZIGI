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
    try {
      localStorage.setItem(STORAGE_KEY, now.toString())
    } catch (e) {
      /* ignore storage errors */
    }
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

    const timer = setTimeout(() => setIsOpen(true), 4200)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setIsOpen(true)
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('keydown', handleKey)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('keydown', handleKey)
    }
  }, [banners, handleCloseModal])

  if (!isOpen) return null

  const whatsappLink =
    'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20sobre%20as%20matrículas%202025%20do%20Yázigi%20Swiss%20Park!'

  return (
    <div
      className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'
      aria-label='Matrículas Yázigi Swiss Park'
    >
      <div className='relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/95 to-accent/90'>
        {/* Close button top-right */}
        <button
          onClick={handleCloseModal}
          aria-label='Fechar modal'
          className='absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors'
        >
          <X className='w-5 h-5 text-white' />
        </button>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
          {/* Left: Visual banner */}
          <div className='col-span-1 md:col-span-1 relative min-h-[220px] md:min-h-[360px] overflow-hidden'>
            <img
              src={banner}
              alt='Banner Educacional - Matrículas abertas'
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                bannerLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setBannerLoaded(true)}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6'>
              <div>
                <h3 className='text-white text-2xl md:text-3xl font-bold'>MATRÍCULAS 2025</h3>
                <p className='text-white/90 text-sm md:text-base'>Vagas limitadas — garanta a sua</p>
              </div>
            </div>
          </div>

          {/* Right: Content and CTAs */}
          <div className='col-span-2 p-6 md:p-8 flex flex-col justify-between text-white'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center'>
                  <FaUserGraduate className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl md:text-3xl font-extrabold'>Junte-se à nossa comunidade</h2>
                  <p className='text-sm text-white/80'>Aprenda com metodologia premiada e certificação internacional.</p>
                </div>
              </div>

              <p className='text-base text-white/95 leading-relaxed mb-6'>
                Mais de <span className='font-bold text-accent'>2 milhões</span> de alunos já transformaram suas vidas com nosso método. Turmas formam rápido — reserve sua vaga agora.
              </p>

              <div className='flex flex-wrap gap-4 text-sm text-white/90 mb-6'>
                <div className='flex items-center gap-2'><FaGlobe className='text-accent w-4 h-4' /> Certificação Internacional</div>
                <div className='flex items-center gap-2'><FaAward className='text-cyan-300 w-4 h-4' /> 75 anos de excelência</div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                onClick={() => {
                  window.open(whatsappLink, '_blank')
                  handleCloseModal()
                }}
                className='flex-1 bg-white text-primary hover:bg-white/95 text-lg py-4 rounded-full font-semibold shadow-lg transition-transform hover:scale-102'
              >
                <FaWhatsapp className='mr-2 h-5 w-5' />
                Garantir minha vaga
              </Button>

              <Button
                size='lg'
                variant='outline'
                onClick={() => {
                  window.open('https://yconnect.yazigi.com.br/#/login?redirect=/', '_blank')
                  handleCloseModal()
                }}
                className='flex-1 text-lg py-4 rounded-full border-white text-white hover:bg-white/10 font-semibold'
              >
                <FaUserGraduate className='mr-2 h-5 w-5' />
                Já sou aluno
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
