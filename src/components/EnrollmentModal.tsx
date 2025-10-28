'use client'

import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { FaWhatsapp, FaUserGraduate, FaGlobe, FaAward } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'yazigi_enrollment_modal_closed'
const EXPIRATION_TIME_MS = 24 * 60 * 60 * 1000 // 24h

export const EnrollmentModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [banner, setBanner] = useState('/banners/banner-kids.png')
  const [bannerLoaded, setBannerLoaded] = useState(false)

  const banners = ['/banners/banner-kids.png', '/banners/banner-youtube.jpg']

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString())
    } catch {}
  }, [])

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY)
    if (lastClosed) {
      const elapsed = Date.now() - parseInt(lastClosed, 10)
      if (elapsed < EXPIRATION_TIME_MS) return
    }

    setBanner(banners[Math.floor(Math.random() * banners.length)])
    setBannerLoaded(false)

    const timer = setTimeout(() => setIsOpen(true), 2500)

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [banners, handleCloseModal])

  if (!isOpen) return null

  const whatsappLink =
    'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20sobre%20as%20matrículas%202025%20do%20Yázigi%20Swiss%20Park!'

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in'
      onClick={e => {
        if (e.target === e.currentTarget) handleCloseModal()
      }}
      style={{
        backgroundImage: `url('/bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className='relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white md:flex md:flex-row flex-col'>
        {/* Botão de Fechar */}
        <button
          onClick={handleCloseModal}
          aria-label='Fechar modal'
          className='absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors'
        >
          <X className='w-5 h-5 text-white' />
        </button>

        {/* Banner */}
        <div className='relative md:w-1/2 w-full h-64 md:h-auto flex-shrink-0 overflow-hidden'>
          <img
            src={banner}
            alt='Banner Educacional - Matrículas abertas'
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              bannerLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setBannerLoaded(true)}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
            <div>
              <h3 className='text-white text-2xl md:text-3xl font-bold'>
                MATRÍCULAS 2025
              </h3>
              <p className='text-white/90 text-sm md:text-base'>
                Vagas limitadas — garanta a sua
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className='md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between'>
          <div className='space-y-5'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center'>
                <FaUserGraduate className='w-6 h-6 text-white' />
              </div>
              <div>
                <h2 className='text-2xl md:text-3xl font-extrabold'>
                  Junte-se à nossa comunidade
                </h2>
                <p className='text-sm md:text-base text-white/80'>
                  Metodologia premiada e certificação internacional.
                </p>
              </div>
            </div>

            <p className='text-base text-white/95 leading-relaxed'>
              Mais de <span className='font-bold text-cyan-300'>2 milhões</span>{' '}
              de alunos já transformaram suas vidas com nosso método.
            </p>

            <div className='flex flex-wrap gap-4 text-sm text-white/85'>
              <div className='flex items-center gap-2'>
                <FaGlobe className='text-cyan-400 w-4 h-4' /> Certificação
                Internacional
              </div>
              <div className='flex items-center gap-2'>
                <FaAward className='text-yellow-300 w-4 h-4' /> 75 anos de
                excelência
              </div>
            </div>
          </div>

          {/* Botões CTA */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <Button
              size='lg'
              onClick={() => {
                window.open(whatsappLink, '_blank')
                handleCloseModal()
              }}
              className='flex-1 bg-green-500 hover:bg-green-600 text-white text-lg py-4 rounded-full font-semibold shadow-lg transition-transform hover:scale-105'
            >
              <FaWhatsapp className='mr-2 h-5 w-5' />
              Garantir minha vaga
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
              className='flex-1 text-lg py-4 rounded-full border border-white text-white hover:bg-white/10 font-semibold transition'
            >
              <FaUserGraduate className='mr-2 h-5 w-5' />
              Já sou aluno
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
