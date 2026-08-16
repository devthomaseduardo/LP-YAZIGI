'use client'

import { useState, useEffect } from 'react'
import { Award, Trophy, Play } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero-students.jpg'
import logo from '@/assets/logo.png'
import logo75anos from '@/assets/logo-75anos.png'

const phrases = [
  { pt: 'Fale com o Mundo', en: 'Speak to the World' },
  { pt: 'Transforme Seu Futuro', en: 'Transform Your Future' },
  { pt: 'Destrave Seu Potencial', en: 'Unlock Your Potential' },
  { pt: 'Domine Novos Idiomas', en: 'Master New Languages' }
]

export const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    const langInterval = setInterval(() => setIsEnglish(prev => !prev), 2500)
    return () => clearInterval(langInterval)
  }, [])

  useEffect(() => {
    const phraseInterval = setInterval(
      () => setIndex(prev => (prev + 1) % phrases.length),
      5000
    )
    return () => clearInterval(phraseInterval)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5519991394250?text=Olá!%20Quero%20começar%20minha%20jornada%20rumo%20à%20fluência%20global%20no%20Yázigi%20Swiss%20Park!',
      '_blank'
    )
  }

  const handleScrollToCourses = () => {
    const section = document.getElementById('cursos')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const current = phrases[index]

  return (
    <section className='relative flex items-center justify-center min-h-[92vh] overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className='absolute top-10 md:top-20 right-5 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-accent/10 rounded-full blur-3xl' />
      <div className='absolute bottom-10 md:bottom-20 left-5 md:left-10 w-56 h-56 md:w-96 md:h-96 bg-cyan/10 rounded-full blur-3xl' />

      <div className='relative z-10 container px-4 md:px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl'>
        <div className='text-white space-y-6 md:space-y-8'>
          <div className='flex items-center gap-3 md:gap-4'>
            <img
              src={logo}
              alt='Yázigi Swiss Park'
              className='h-16 w-16 md:h-24 md:w-24 rounded-full border-2 md:border-4 border-accent/30 shadow-2xl backdrop-blur-sm bg-white/10 p-2 md:p-3 ring-2 md:ring-4 ring-white/10'
            />
            <div>
              <h1 className='text-xl md:text-2xl font-bold'>
                Yázigi Swiss Park
              </h1>
              <p className='text-white/80 text-xs md:text-sm'>
                Você Cidadão do Mundo
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight'>
              Sua Voz Merece Ser Ouvida no Mundo Inteiro
            </h2>
            <div className='relative h-12 md:h-16 overflow-hidden mb-4 md:mb-6'>
              {phrases.map((phrase, i) => (
                <span
                  key={i}
                  className={`absolute left-0 w-full text-accent text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-700 ${
                    i === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                >
                  {isEnglish ? phrase.en : phrase.pt}
                </span>
              ))}
            </div>
          </div>

          <p className='text-base md:text-xl text-white/90 leading-relaxed max-w-xl'>
            Aprenda inglês e espanhol com a metodologia que transforma vidas há
            76 anos. Do primeiro contato à fluência internacional comprovada.
          </p>

          <div className='flex flex-wrap gap-3 md:gap-6 items-center text-white/90'>
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full text-sm md:text-base'>
              <Award className='h-4 w-4 md:h-5 md:w-5 text-accent' />
              <span className='text-xs md:text-sm font-medium'>
                Certificação Pearson
              </span>
            </div>
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full text-sm md:text-base'>
              <Trophy className='h-4 w-4 md:h-5 md:w-5 text-accent' />
              <span className='text-xs md:text-sm font-medium'>
                76 Anos de Excelência
              </span>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4'>
            <Button
              size='lg'
              onClick={handleWhatsAppClick}
              className='bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-2xl hover:scale-105 transition-all font-bold w-full sm:w-auto'
            >
              <IoLogoWhatsapp className='mr-2 h-5 w-5 md:h-6 md:w-6' />
              Começar Agora Grátis
            </Button>

            <Button
              size='lg'
              variant='outline'
              onClick={handleScrollToCourses}
              className='border-2 border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full backdrop-blur-sm bg-white/10 hover:scale-105 transition-all font-bold w-full sm:w-auto'
            >
              <Play className='mr-2 h-4 w-4 md:h-5 md:w-5' />
              Ver Cursos
            </Button>
          </div </div>

          <p className='text-xs md:text-sm text-white/70 mt-2'>
            Teste grátis • Sem compromisso • Resposta em minutos
          </p>
        </div>

        <div className='hidden lg:flex items-center justify-center'>
          <img
            src={logo75anos}
            alt='Yázigi 76 Anos'
            className='w-full max-w-md drop-shadow-2xl animate-fade-in rounded-full'
          />
        </div>
      </div>
    </section>
  )
}
