'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function HimnoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <p className="text-sm font-medium text-accent">Nuestro Himno Institucional</p>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-foreground text-balance leading-tight">
            Himno de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Patujú</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Escucha nuestro himno, que representa los valores, esperanza y compromiso de nuestra comunidad educativa
          </motion.p>
        </motion.div>
      </section>

      {/* Music Player Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <MusicPlayer
            title="Himno de Patujú"
            artist="Unidad Educativa Patujú"
            duration={180}
            accentColor="#0f7d3f"
          />
        </motion.div>
      </section>

      {/* Lyrics Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-foreground text-center">
              Letra del Himno
            </h2>

            <div className="space-y-16">
              {verses.map((section, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-bold text-accent">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-accent">{section.verse}</h3>
                  </div>

                  <div className="space-y-3 ml-16 pl-4 border-l-2 border-accent/30">
                    {section.lyrics.map((line, lineIndex) => (
                      <motion.p
                        key={lineIndex}
                        variants={itemVariants}
                        className={`text-lg leading-relaxed transition-colors ${
                          line.includes('Coro')
                            ? 'font-bold text-accent text-xl mt-2 pt-4 border-t border-accent/20'
                            : 'text-foreground/80'
                        }`}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tertiary/50 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-foreground">
            Sobre nuestro himno
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Composición</h3>
              <p className="text-foreground/70 leading-relaxed">
                El himno de la Unidad Educativa Patujú fue compuesto especialmente para enaltecer los
                valores fundamentales de nuestra institución: excelencia académica, formación integral y
                compromiso con la comunidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Significado</h3>
              <p className="text-foreground/70 leading-relaxed">
                Cada verso representa nuestras aspiraciones y la dedicación de toda nuestra comunidad
                educativa. Cantamos este himno en cada acto importante, recordando nuestro compromiso con
                la educación de calidad.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg text-foreground/70 leading-relaxed text-center"
          >
            Somos una comunidad educativa comprometida con la formación de ciudadanos íntegros y comprometidos
            con el bien común.
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
