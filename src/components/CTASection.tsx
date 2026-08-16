import { MapPin, Clock } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '@/components/ui/button'

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5519991394250?text=Olá!%20Estou%20pronto%20para%20começar%20minha%20jornada%20no%20Yázigi%20Swiss%20Park.%20Quero%20garantir%20minha%20vaga!',
      '_blank'
    )
  }

  return (
    <section className='relative py-28 bg-background overflow-hidden'>
      <div className='absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl' />
      <div className='absolute top-1/3 right-1/3 w-72 h-72 bg-cyan/10 rounded-full blur-3xl' />

      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-cyan/5' />

      <svg
        className='absolute inset-0 w-full h-full opacity-10'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M 0,150 Q 400,100 800,150 T 1600,150'
          stroke='hsl(var(--primary))'
          strokeWidth='2'
          fill='none'
        />
        <path
          d='M 0,250 Q 400,300 800,250 T 1600,250'
          stroke='hsl(var(--accent))'
          strokeWidth='2'
          fill='none'
        />
      </svg>

      <div className='container relative z-10 px-6'>
        <div className='max-w-4xl mx-auto text-center animate-fade-in'>
          <div className='inline-block px-4 py-2 bg-primary/10 rounded-full mb-4'>
            <span className='text-primary font-bold text-sm uppercase tracking-widest'>
              Pronto Para o Próximo Passo?
            </span>
          </div>

          <h2 className='text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground'>
            Comece Hoje Sua Transformação
          </h2>

          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10'>
            Mais de 76 anos formando cidadãos do mundo. Sua jornada para a
            fluência começa agora — com estrutura, método e resultados reais.
          </p>

          <Button
            size='lg'
            onClick={handleWhatsAppClick}
            className='bg-primary hover:bg-primary-hover text-white text-lg px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all font-semibold'
          >
            <IoLogoWhatsapp className='mr-2 h-6 w-6' />
            Falar no WhatsApp Agora
          </Button>

          <div className='grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12'>
            <div className='flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors'>
              <MapPin className='h-5 w-5' />
              <span>Swiss Park, Campinas - SP</span>
            </div>
            <div className='flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors'>
              <Clock className='h-5 w-5' />
              <span>Seg - Sex: 9h às 20h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
