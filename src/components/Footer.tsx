import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
} from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import logo75anos from '@/assets/logo-75anos.png'

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5519991394250?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20Yázigi%20Swiss%20Park.',
      '_blank'
    )
  }

  return (
    <footer className='bg-primary text-white'>
      <div className='container px-4 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-accent'>Yázigi</h3>
            <p className='text-white/80 text-sm'>Swiss Park, Campinas</p>
            <p className='text-white/80 text-sm'>
              Excelência em ensino de idiomas há 75 anos
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='font-bold text-lg mb-4'>Contato</h4>
            <div className='space-y-3 text-sm'>
              <a
                href='#'
                onClick={e => {
                  e.preventDefault()
                  handleWhatsAppClick()
                }}
                className='flex items-center gap-2 text-white/80 hover:text-accent transition-colors group'
              >
                <IoLogoWhatsapp className='h-4 w-4 group-hover:scale-110 transition-transform' />
                <span>19 99139-4250</span>
              </a>
              <a
                href='mailto:swisspark@yazigi.com.br'
                className='flex items-center gap-2 text-white/80 hover:text-accent transition-colors group'
              >
                <Mail className='h-4 w-4 group-hover:scale-110 transition-transform' />
                <span>swisspark@yazigi.com.br</span>
              </a>
              <div className='flex items-start gap-2 text-white/80'>
                <MapPin className='h-4 w-4 mt-0.5 flex-shrink-0' />
                <span>Swiss Park, Campinas - SP</span>
              </div>
              <div className='flex items-center gap-2 text-white/80'>
                <Phone className='h-4 w-4' />
                <span>Seg - Sex: 8h às 20h</span>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-bold text-lg mb-4'>Cursos</h4>
            <div className='space-y-2 text-sm'>
              <a
                href='#'
                className='block text-white/80 hover:text-accent transition-colors'
              >
                Para Crianças
              </a>
              <a
                href='#'
                className='block text-white/80 hover:text-accent transition-colors'
              >
                Para Adolescentes
              </a>
              <a
                href='#'
                className='block text-white/80 hover:text-accent transition-colors'
              >
                Para Adultos
              </a>
              <a
                href='#'
                className='block text-white/80 hover:text-accent transition-colors'
              >
                Para Empresas
              </a>
              <a
                href='#'
                className='block text-white/80 hover:text-accent transition-colors'
              >
                Certificação Pearson
              </a>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-bold text-lg mb-4'>Redes Sociais</h4>
            <p className='text-white/80 text-sm mb-4'>
              Acompanhe nossas novidades e dicas de inglês
            </p>
            <div className='flex gap-3'>
              <a
                href='https://www.instagram.com/yazigi_swisspark/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=100064077818455'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110'
              >
                <Youtube className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className='text-center md:text-left text-sm text-white/60'>
              <p>© 2025 Yázigi Swiss Park. Todos os direitos reservados.</p>
              <p className='mt-2'>
                Parte da rede Yázigi - 75 anos de excelência em ensino de
                idiomas
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src={logo75anos}
                alt='Yázigi 75 Anos'
                className='h-16 w-auto'
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type='button'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
        aria-label='Voltar ao topo'
      >
        <ArrowUp className='h-6 w-6' />
      </button>
    </footer>
  )
}
