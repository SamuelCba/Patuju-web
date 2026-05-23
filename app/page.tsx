'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import NewsModal from '@/components/NewsModal'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, Sparkles, ArrowRight, Award, Globe, Music, Trophy, HeartHandshake } from 'lucide-react'

interface NewsItem {
  title: string
  description: string
  date: string
}

const highlights = [
  {
    title: 'Excelencia Académica',
    description: 'Programas educativos de calidad con metodologías innovadoras y docentes comprometidos',
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Formación Integral',
    description: 'Desarrollo de habilidades académicas, sociales, emocionales, culturales y artísticas',
    icon: Users,
    color: 'from-accent to-accent-light',
  },
  {
    title: 'Infraestructura Moderna',
    description: 'Patrimonio educativo consolidado con espacios funcionales y tecnología actualizada',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
  },
]

const experiences = [
  {
    title: 'Cultura viva',
    description: 'Danzas, música y actividades que fortalecen la identidad de nuestra comunidad educativa.',
    icon: Music,
  },
  {
    title: 'Deporte estudiantil',
    description: 'Participación activa en disciplinas deportivas para formar disciplina, liderazgo y trabajo en equipo.',
    icon: Trophy,
  },
  {
    title: 'Valores y convivencia',
    description: 'Acompañamiento cercano para promover respeto, responsabilidad y compromiso social.',
    icon: HeartHandshake,
  },
]

const news: NewsItem[] = [
  {
    title: 'Concurso de Danzas para Mantener Viva la Cultura',
    date: '2024',
    description: 'La Unidad Educativa Patujú ha lanzado una convocatoria para un concurso de danzas, con premios para los cuatro primeros lugares. Los ensayos oficiales y las inscripciones ya están en marcha, invitando a todos los estudiantes a participar y celebrar sus raíces culturales.',
  },
  {
    title: 'Segundo lugar en Futbol de Salón',
    date: '2024',
    description: 'En los III Juegos Deportivos Estudiantiles Intercolegiales, nuestro equipo de futbol de salón categoría varones obtuvo el segundo lugar bajo la dirección técnica del Lic. Cristian Cerezo Lara, demostrando el talento deportivo de nuestros estudiantes.',
  },
  {
    title: 'Primer lugar en Olimpiada de Ajedrez',
    date: '2024',
    description: 'El estudiante Franz Elvin Carlo Vega ocupó primer lugar en la categoría de 1º a 3º año de escolaridad en la etapa distrital, clasificando para representar al Distrito de San Julián en la etapa departamental.',
  },
  {
    title: 'Primer lugar en Concurso de Banda Estudiantil',
    date: '2024',
    description: 'Nuestros estudiantes conquistaron el primer lugar en la categoría B del concurso de Banda Estudiantil, recibiendo 2000 Bs. como premio y reconocimiento a su dedicación y preparación.',
  },
]

export default function Home() {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const openNews = (item: NewsItem) => {
    setSelectedNews(item)
    setIsNewsModalOpen(true)
  }

  const openAllNews = () => {
    setSelectedNews(null)
    setIsNewsModalOpen(true)
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />
      <Hero />

      {/* Highlights Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-light/50 to-transparent dark:from-white/[0.03] dark:to-transparent">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent mb-5">
              <Sparkles size={16} /> Nuestra propuesta educativa
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance mb-4 tracking-tight">
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
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group relative p-8 rounded-[1.75rem] border border-border/50 dark:border-white/10 hover:border-accent/30 bg-white/60 dark:bg-white/[0.045] hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden backdrop-blur-md"
                >
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${highlight.color} opacity-10 rounded-full -mr-10 -mt-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`} />
                  <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${highlight.color} text-white mb-4 relative z-10 shadow-lg group-hover:rotate-3 transition-transform`}>
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

      {/* Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] border border-border/60 dark:border-white/10 bg-gradient-to-br from-accent/10 via-white/50 to-accent-yellow/10 dark:via-white/[0.04] dark:from-accent/15 dark:to-accent-yellow/10 p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-accent-yellow/20 blur-3xl" />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent mb-4">Experiencia Patujú</p>
            <h2 className="relative text-4xl sm:text-5xl font-black text-foreground tracking-tight text-balance mb-6">
              Una comunidad escolar con movimiento, identidad y futuro.
            </h2>
            <p className="relative text-secondary leading-relaxed mb-8">
              La página ahora transmite mejor la energía de la unidad educativa: más dinamismo, tarjetas interactivas y un lenguaje visual moderno sin perder los colores institucionales.
            </p>
            <Link
              href="/otros"
              className="relative inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 hover:bg-accent-light"
            >
              Ver más información <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {experiences.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 6 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group flex gap-5 rounded-3xl border border-border/60 dark:border-white/10 bg-white/60 dark:bg-white/[0.045] p-6 shadow-sm backdrop-blur-md transition-all hover:border-accent/35 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary-light/35 to-transparent dark:via-white/[0.025]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent mb-3">Comunidad activa</p>
              <h2 className="text-4xl sm:text-5xl font-black text-balance text-foreground mb-2 tracking-tight">
                Últimas Noticias
              </h2>
              <p className="text-secondary">Mantente informado sobre eventos y logros de nuestra comunidad</p>
            </div>
            <button
              onClick={openAllNews}
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/10 border border-accent/20 text-accent hover:border-accent/50 hover:bg-accent/20 transition-all font-semibold hover:-translate-y-1"
            >
              Ver más <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                onClick={() => openNews(item)}
                className="group relative p-8 border border-border/50 dark:border-white/10 rounded-[1.75rem] bg-white/60 dark:bg-white/[0.045] hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden backdrop-blur-md cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-yellow to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    openNews(item)
                  }}
                  className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Leer más <ArrowRight size={16} />
                </button>
              </motion.article>
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
              onClick={openAllNews}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent-light transition-colors font-semibold"
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
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/25 via-accent-yellow/25 to-accent/25 rounded-3xl blur-3xl animate-pulse-slow" />

          <div className="relative bg-gradient-to-br from-accent/10 to-accent-yellow/10 border border-accent/20 rounded-3xl p-12 sm:p-16 text-center backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-balance text-foreground tracking-tight">
                ¿Quieres ser parte de <span className="text-accent">Patujú</span>?
              </h2>
              <p className="text-lg text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                Contáctanos para conocer más sobre nuestros programas, inscripciones y cómo podemos ayudarte a alcanzar tus metas educativas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-accent/25">
                  Enviar Mensaje
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/otros"
                  className="px-8 py-4 border-2 border-accent/30 hover:border-accent text-accent rounded-xl font-semibold transition-all hover:bg-accent/5 hover:-translate-y-1"
                >
                  Más Información
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />

      <NewsModal
        isOpen={isNewsModalOpen}
        onClose={() => setIsNewsModalOpen(false)}
        news={news}
        selectedNews={selectedNews}
        onSelectNews={setSelectedNews}
      />
    </main>
  )
}
