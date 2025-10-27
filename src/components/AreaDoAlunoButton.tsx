'use client'

import { useEffect, useState } from 'react'
import { FaUserGraduate } from 'react-icons/fa'

export const AreaDoAlunoButton = () => {
  const [isDarkBg, setIsDarkBg] = useState(true)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bgColor = getComputedStyle(entry.target).backgroundColor
            const rgb = bgColor.match(/\d+/g)
            if (rgb) {
              const brightness =
                (parseInt(rgb[0]) * 299 +
                  parseInt(rgb[1]) * 587 +
                  parseInt(rgb[2]) * 114) /
                1000
              setIsDarkBg(brightness < 128) // true = fundo escuro
            }
          }
        })
      },
      { threshold: 0.5 } // metade da seção visível
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <a
      href='https://yconnect.yazigi.com.br/#/login?redirect=/'
      target='_blank'
      rel='noopener noreferrer'
      className={`fixed top-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-all hover:scale-105
        ${
          isDarkBg
            ? 'bg-white text-primary border border-white/30 hover:bg-white/90'
            : 'bg-primary text-white border border-primary/40 hover:bg-primary/90'
        }
      `}
    >
      <FaUserGraduate className='w-4 h-4' />
      Área do Aluno
    </a>
  )
}
