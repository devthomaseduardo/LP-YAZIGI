'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Sparkles, Award, Globe2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

const STORAGE_KEY = 'yazigi_enrollment_modal_closed'
const EXPIRATION_TIME_MS = 24 * 60 * 60 * 1000 // 24h

export const EnrollmentModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [banner] = useState('/banners/banner1.png') // apenas 1 banner

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

    const timer = setTimeout(() => setIsOpen(true), 500) // abre logo
    return () => clearTimeout(timer)
  }, [])

  const whatsappLink =
    'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20sobre%20as%20matrículas%202025%20do%20Yázigi%20Swiss%20Park!'

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='max-w-4xl p-0 overflow-hidden border-0 bg-background rounded-xl'>
        {/* Botão de fechar */}
        <button
          onClick={handleCloseModal}
          className='absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/70 hover:bg-background/90 flex items-center justify-center transition'
        >
          <X className='w-5 h-5 text-foreground' />
        </button>

        {/* Banner */}
        <div className='relative w-full h-[200px] md:h-[280px] overflow-hidden rounded-t-xl'>
          <img
            src={banner}
            alt='Banner Educacional'
            className='w-full h-full object-contain'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
        </div>

        {/* Conteúdo */}
        <div className='p-6 md:p-8 space-y-6 text-center'>
          <DialogHeader>
            <DialogTitle className='text-2xl md:text-3xl font-bold text-foreground'>
              Transforme seu futuro com o Yázigi
            </DialogTitle>
            <DialogDescription className='text-sm md:text-base text-muted-foreground/80'>
              Junte-se a mais de{' '}
              <span className='font-semibold'>2 milhões</span> de alunos que já
              transformaram suas vidas
            </DialogDescription>
          </DialogHeader>

          {/* Features simples */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            <div className='bg-background/10 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform'>
              <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                <Globe2 className='w-6 h-6 text-gray-700' />
              </div>
              <h3 className='mt-2 font-bold text-foreground'>
                Certificação Internacional
              </h3>
              <p className='text-sm text-muted-foreground/80'>
                Reconhecimento global
              </p>
            </div>

            <div className='bg-background/10 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform'>
              <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                <Award className='w-6 h-6 text-gray-700' />
              </div>
              <h3 className='mt-2 font-bold text-foreground'>
                75 Anos de Excelência
              </h3>
              <p className='text-sm text-muted-foreground/80'>
                Tradição e qualidade
              </p>
            </div>

            <div className='bg-background/10 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform'>
              <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-gray-700' />
              </div>
              <h3 className='mt-2 font-bold text-foreground'>
                Metodologia Premiada
              </h3>
              <p className='text-sm text-muted-foreground/80'>
                Aprendizado eficaz
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className='mt-6 space-y-3'>
            <Button
              size='lg'
              onClick={() => {
                window.open(whatsappLink, '_blank')
                handleCloseModal()
              }}
              className='w-full bg-accent hover:bg-accent/90 text-white text-lg py-4 rounded-xl font-bold transition-all hover:scale-105'
            >
              <FaWhatsapp className='mr-2 h-5 w-5' />
              Garantir Minha Vaga 2025
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
              className='w-full text-lg py-4 rounded-xl border border-gray-300 hover:bg-background/10 font-semibold transition-all'
            >
              Área do Aluno
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
