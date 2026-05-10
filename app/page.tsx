'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import NewsModal from '@/components/NewsModal'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, Sparkles, ArrowRight, Award, Globe } from 'lucide-react'

const highlights = [
  {
    title: 'Excelencia Académica',
    description: 'Programas educativos de calidad con metodologías innovadoras y docentes certificados',
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Formación Integral',
    description: 'Desarrollo de habilidades académicas, sociales, emocionales y artísticas',
    icon: Users,
    color: 'from-accent to-accent-light',
  },
  {
    title: 'Infraestructura Moderna',
    description: 'Patrimonio educativo consolidado con espacios modernos y tecnología actualizada',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
  },
]

const news = [
  {
    title: 'Inauguración del Nuevo Pabellón',
    date: '15 de mayo de 2024',
    description: 'Se inaugura exitosamente el nuevo pabellón educativo con espacios modernos.',
  },
  {
    title: 'Campeonato Interescolar 2024',
    date: '10 de mayo de 2024',
    description: 'Nuestros estudiantes obtienen destacadas posiciones en competencias deportivas.',
  },
  {
    title: 'Programa de Becas',
    date: '1 de mayo de 2024',
    description: 'Se abre la convocatoria para becas académicas 2024-2025.',
  },
]

export default function Home() {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-light/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4">
              ¿Por qué elegir Patujú?
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Más de 15 años de excelencia educativa y compromiso con nuestros estudiantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl border border-border/50 hover:border-accent/30 bg-white/50 dark:bg-surface hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon background */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${highlight.color} opacity-5 rounded-full -mr-8 -mt-8 group-hover:opacity-10 transition-opacity`} />

                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${highlight.color} text-white mb-4 relative z-10`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-16"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-balance text-foreground mb-2">
                Últimas Noticias
              </h2>
              <p className="text-secondary">Mantente informado sobre eventos y logros de nuestra comunidad</p>
            </div>
            <button
              onClick={() => setIsNewsModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:border-accent/50 hover:bg-accent/20 transition-all font-semibold"
            >
              Ver más <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 border border-border/50 rounded-2xl bg-white/50 dark:bg-surface hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <button className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer más <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center sm:hidden"
          >
            <button
              onClick={() => setIsNewsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent-light transition-colors font-semibold"
            >
              Ver todas las noticias <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-yellow/20 to-accent/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-accent/10 to-accent-yellow/10 border border-accent/20 rounded-3xl p-12 sm:p-16 text-center backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance text-foreground">
                ¿Quieres ser parte de <span className="text-accent">Patujú</span>?
              </h2>
              <p className="text-lg text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                Contáctanos para conocer más sobre nuestros programas, inscripciones y cómo podemos ayudarte a alcanzar tus metas educativas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Enviar Mensaje
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/otros"
                  className="px-8 py-4 border-2 border-accent/30 hover:border-accent text-accent rounded-xl font-semibold transition-all hover:bg-accent/5"
                >
                  Más Información
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* News Modal */}
      <NewsModal
        isOpen={isNewsModalOpen}
        onClose={() => setIsNewsModalOpen(false)}
        news={news}
      />
    </main>
  )
}
