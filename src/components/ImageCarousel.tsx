'use client'

import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const images = [
  '/banners/banner4.png',
  '/banners/banner2.png',
  '/banners/banner3.png',
  '/banners/banner5.png'
]
export function ImageCarousel () {
  const plugin = useRef(
    Autoplay({
      // Atraso aumentado para 10 segundos (10000 ms)
      delay: 10000,
      stopOnInteraction: false
    })
  )

  return (
    <div className='w-full overflow-hidden ]'>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className='w-full'
      >
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i} className='relative w-full'>
              <img
                src={src}
                alt={`Banner ${i + 1}`}
                className={cn(
                  'w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[700px] object-contain transition-transform duration-1000 ease-in-out',
                  'hover:scale-[1.02]'
                )}
                loading='lazy'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
