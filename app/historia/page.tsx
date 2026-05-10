'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const milestones = [
  {
    year: '1985',
    title: 'Fundación de Patujú',
    description: 'Se funda la Unidad Educativa Patujú con una visión de excelencia educativa y compromiso comunitario.',
  },
  {
    year: '1995',
    title: 'Expansión Educativa',
    description: 'Se amplía la infraestructura con nuevos pabellones y laboratorios especializados.',
  },
  {
    year: '2005',
    title: 'Acreditación Internacional',
    description: 'Patujú obtiene acreditación de calidad educativa a nivel internacional.',
  },
  {
    year: '2015',
    title: 'Innovación Tecnológica',
    description: 'Se implementan plataformas digitales de aprendizaje y educación virtual.',
  },
  {
    year: '2020',
    title: 'Educación Híbrida',
    description: 'Adaptación exitosa a modalidades de educación híbrida durante la pandemia.',
  },
  {
    year: '2024',
    title: 'Infraestructura Moderna',
    description: 'Inaugura nuevas instalaciones con tecnología de punta para la educación del futuro.',
  },
]

export default function HistoriaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
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
            className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <p className="text-sm font-medium text-accent">Desde 1985</p>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Historia</span>
          </h1>
          <p className="text-lg text-secondary max-w-3xl leading-relaxed">
            Conozca el fascinante recorrido de la Unidad Educativa Patujú, una institución con más de 35 años de trayectoria educativa transformando vidas.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary-light/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-foreground"
          >
            Hitos Importantes
          </motion.h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-6 sm:gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileInView={{ scale: [1, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                  </motion.div>
                  {index < milestones.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className="w-1 bg-gradient-to-b from-accent to-accent/20 flex-grow mt-4 origin-top"
                      style={{ minHeight: '120px' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 pt-4 flex-grow">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="p-6 rounded-2xl bg-white/50 dark:bg-surface border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={20} className="text-accent flex-shrink-0" />
                      <span className="text-sm font-semibold text-accent">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                    <p className="text-secondary leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-light/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance text-foreground"
          >
            Nuestra Filosofía
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Misión',
                content: 'Formar estudiantes íntegros, con excelencia académica y valores sólidos, comprometidos con el desarrollo sostenible de la comunidad.',
                icon: '🎯',
              },
              {
                title: 'Visión',
                content: 'Ser una institución educativa líder, reconocida por su calidad académica, innovación pedagógica e impacto social en la región.',
                icon: '🌟',
              },
              {
                title: 'Valores',
                content: 'Excelencia, integridad, respeto, compromiso social y responsabilidad ambiental guían nuestras acciones educativas.',
                icon: '💎',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/50 dark:bg-surface border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-accent-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
