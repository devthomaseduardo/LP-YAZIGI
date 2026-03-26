import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(
      'https://wa.me/5519991394250?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Yázigi%20Swiss%20Park!',
      '_blank'
    )
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 group'>
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className='bg-white rounded-2xl shadow-2xl px-4 py-3 whitespace-nowrap border-2 border-primary/20'>
          <p className='text-sm font-bold text-primary'>Fale Conosco!</p>
          <p className='text-xs text-muted-foreground'>Tire suas dúvidas agora</p>
        </div>
        <div className='absolute -bottom-1 right-6 w-3 h-3 bg-white border-r-2 border-b-2 border-primary/20 transform rotate-45' />
      </div>

      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]'
        aria-label='Abrir WhatsApp'
      >
        <div className='absolute inset-0 rounded-full bg-[#25D366] animate-[ping_2s_ease-in-out_infinite] opacity-75' />

        <FaWhatsapp className='w-8 h-8 text-white relative z-10' />
      </button>

      <div className='absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-[ping_2s_ease-in-out_infinite] pointer-events-none' style={{ animationDelay: '1s' }} />
    </div>
  )
}
