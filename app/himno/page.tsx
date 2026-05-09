'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Music } from 'lucide-react'
import { useState } from 'react'

const verses = [
  {
    verse: 'Verso 1',
    lyrics: [
      'Patujú, luz de esperanza',
      'Que brillas en el horizonte',
      'Con tu nombre en cada corazón',
      'Nos guías hacia adelante',
      '',
      'Coro:',
      'Oh, Patujú, Patujú',
      'Tierra de sabiduría',
      'En tus aulas florecer',
      'Es nuestro destino feliz',
    ],
  },
  {
    verse: 'Verso 2',
    lyrics: [
      'En tus muros se forjan sueños',
      'De estudiantes valientes y dignos',
      'Con la fuerza de nuestros maestros',
      'Alcanzamos la cumbre del éxito',
      '',
      'Coro:',
      'Oh, Patujú, Patujú',
      'Tierra de sabiduría',
      'En tus aulas florecer',
      'Es nuestro destino feliz',
    ],
  },
  {
    verse: 'Verso 3',
    lyrics: [
      'Seguiremos tu noble camino',
      'De verdad, de amor y de paz',
      'Patujú, orgullo de todos',
      'Nos vemos en un futuro mejor',
      '',
      'Coro:',
      'Oh, Patujú, Patujú',
      'Tierra de sabiduría',
      'En tus aulas florecer',
      'Es nuestro destino feliz',
    ],
  },
]

export default function HimnoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            El Himno de <span className="text-accent">Patujú</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Escucha nuestro himno, que representa los valores, esperanza y compromiso de nuestra comunidad educativa.
          </p>
        </div>
      </section>

      {/* Music Player */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-accent/10 border border-accent/20 rounded-lg flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-accent hover:bg-accent-dark rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <Music size={24} />
            </button>
            <div>
              <p className="text-sm text-foreground/70 mb-1">Reproductor de Audio</p>
              <p className="text-lg font-semibold">{isPlaying ? 'Reproduciendo...' : 'Haz clic para escuchar'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {verses.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6 text-accent">{section.verse}</h2>
                <div className="space-y-2">
                  {section.lyrics.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={`text-lg leading-relaxed ${
                        line.includes('Coro') ? 'font-bold mt-4 pt-4 border-t border-border' : ''
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sobre nuestro himno</h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-4">
            El himno de la Unidad Educativa Patujú fue compuesto especialmente para enaltecer los valores
            fundamentales de nuestra institución: excelencia académica, formación integral, y compromiso
            con la comunidad. Cada verso representa nuestras aspiraciones y la dedicación de toda nuestra
            comunidad educativa.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Cantamos este himno en cada acto importante de nuestra institución, recordando así nuestro
            compromiso con la educación de calidad y la formación de ciudadanos íntegros y comprometidos
            con el bien común.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
