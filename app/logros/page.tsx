'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Award, TrendingUp, Zap, Trophy } from 'lucide-react'

const achievements = [
  {
    category: 'Gestión 2024',
    items: [
      'Institución cuenta con 289 estudiantes efectivos',
      '17 docentes profesionales y 1 item de administración',
      'Incorporación de nuevos maestros especializados',
      'Lic. Aida Márquez Cuevas en área de Valores Espiritualidad y Religiones',
    ],
  },
  {
    category: 'Deportivo',
    items: [
      'Segundo lugar en futbol de salón categoría varones - III Juegos Deportivos Estudiantiles',
      'Excelente presentación de danza "Pastorcita" en ceremonia de inauguración',
      'Segundo lugar en lanzamiento de jabalina - Herlin Chaurara Sánchez',
      'Dirección técnica bajo liderazgo del Lic. Cristian Cerezo Lara',
    ],
  },
  {
    category: 'Académico',
    items: [
      'Primer lugar en Olimpiada de Ajedrez - Franz Elvin Carlo Vega',
      'Clasificación para etapa departamental en competencia de ajedrez',
      'Estudiantes destacados en categoría 1º a 3º año de escolaridad',
      'Representación del Distrito de San Julián en competencias regionales',
    ],
  },
  {
    category: 'Cultural y Artístico',
    items: [
      'Primer lugar en categoría B - Concurso de Banda Estudiantil',
      'Premio de 2000 Bs. por excelente presentación musical',
      'Preparación conjunta de maestros y Junta Escolar',
      'Reconocimiento regional por calidad artística y musical',
    ],
  },
]

const stats = [
  { number: '35+', label: 'Años de trayectoria' },
  { number: '289', label: 'Estudiantes 2024' },
  { number: '17', label: 'Docentes profesionales' },
  { number: '4', label: 'Primeros lugares 2024' },
]

export default function LogrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent-yellow/20 border border-accent-yellow/40 mb-6"
          >
            <p className="text-sm font-medium text-accent">Celebramos nuestros éxitos</p>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Logros</span>
          </h1>
          <p className="text-lg text-secondary max-w-3xl leading-relaxed">
            Celebramos los destacados logros de nuestros estudiantes, docentes y comunidad educativa en diversos ámbitos de excelencia.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const icons = [TrendingUp, Trophy, Award, Zap]
              const Icon = icons[index]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 bg-gradient-to-br from-white/50 to-white/30 dark:from-surface/50 dark:to-surface/30 rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon size={32} className="text-accent" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-secondary text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-light/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-foreground"
          >
            Áreas de Excelencia
          </motion.h2>

          <div className="space-y-16">
            {achievements.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-1 bg-gradient-to-b from-accent to-accent-light rounded-full" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="group p-6 border border-border/50 rounded-2xl bg-white/50 dark:bg-surface hover:border-accent/30 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
                        >
                          <span className="text-white font-bold text-lg">✓</span>
                        </motion.div>
                        <p className="text-foreground text-base leading-relaxed group-hover:text-accent transition-colors">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
