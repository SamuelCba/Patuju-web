'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselImage {
  src: string
  alt: string
}

const images: CarouselImage[] = [
  { src: '/UE patuju2.jpeg', alt: 'Unidad Educativa Patujú' },
  { src: '/UE patuju3.jpeg', alt: 'Campus Patujú' },
  { src: '/UE patuju4.jpeg', alt: 'Instalaciones Patujú' },
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + images.length) % images.length)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-8' : 'bg-white/50 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}
