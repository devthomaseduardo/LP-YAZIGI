'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, Menu } from 'lucide-react'
import { useState } from 'react'
import logo from '@/assets/logo.png'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm'>
      <div className='container px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo + Marca */}
          <div className='flex items-center gap-3'>
            <img
              src={logo}
              alt='Yázigi 70 Anos'
              className='h-12 w-12 rounded-full object-cover border border-primary/20 shadow-sm'
            />
            <div className='hidden sm:block'>
              <h1 className='font-bold text-lg text-primary leading-tight'>
                Yázigi Swiss Park
              </h1>
              <p className='text-xs text-muted-foreground'>
                Você Cidadão do Mundo
              </p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className='hidden md:flex items-center gap-6'>
            <a
              href='#cursos'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Cursos
            </a>
            <a
              href='#diferenciais'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Diferenciais
            </a>
            <a
              href='#depoimentos'
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              Depoimentos
            </a>
            <Button
              variant='outline'
              size='sm'
              onClick={() =>
                window.open(
                  'https://yconnect.yazigi.com.br/#/login?redirect=/',
                  '_blank'
                )
              }
              className='hover:bg-primary hover:text-white transition-all'
            >
              <ExternalLink className='mr-2 h-4 w-4' />
              Área do Aluno
            </Button>
          </nav>

          {/* Menu Mobile */}
          <button
            className='md:hidden text-primary'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Abrir menu'
          >
            <Menu className='h-6 w-6' />
          </button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4 animate-fade-in'>
            <a
              href='#cursos'
              className='text-sm font-medium hover:text-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </a>
            <a
              href='#diferenciais'
              className='text-sm font-medium hover:text-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a
              href='#depoimentos'
              className='text-sm font-medium hover:text-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button
              variant='outline'
              size='sm'
              className='w-full hover:bg-primary hover:text-white transition-all'
              onClick={() =>
                window.open(
                  'https://yconnect.yazigi.com.br/#/login?redirect=/',
                  '_blank'
                )
              }
            >
              <ExternalLink className='mr-2 h-4 w-4' />
              Área do Aluno
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
