'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import ImageCarousel from './ImageCarousel'

const heroBadges = [
  { icon: GraduationCap, label: 'Formación integral' },
  { icon: Sparkles, label: 'Cultura y deporte' },
  { icon: MapPin, label: 'San Julián' },
]

const stats = [
  { label: '15+', value: 'Años de trayectoria' },
  { label: '500+', value: 'Estudiantes' },
  { label: '100%', value: 'Calidad educativa' },
]

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center overflow-hidden animated-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.16, 1], opacity: [0.08, 0.16, 0.08], x: [0, -24, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 right-0 w-[28rem] h-[28rem] bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 0.92, 1], opacity: [0.08, 0.14, 0.08], y: [0, -18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 -left-24 w-[30rem] h-[30rem] bg-accent-yellow rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full border border-accent/10 border-dashed"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <p className="text-sm font-semibold text-accent">Bienvenido a Patujú</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-balance leading-[0.95] tracking-tight"
            >
              Unidad Educativa
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent-yellow bg-[length:200%_auto] animate-gradient-x">
                Patujú
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="text-lg text-secondary mb-8 max-w-xl leading-relaxed"
            >
              Institución educativa comprometida con la excelencia académica, la cultura, el deporte y la formación integral de estudiantes con valores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {heroBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42 + index * 0.08 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/60 dark:bg-surface/70 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-md"
                  >
                    <Icon size={16} className="text-accent" />
                    {badge.label}
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-accent/25">
                Conocer más
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-accent/20 hover:border-accent/50 hover:bg-accent/5 text-foreground rounded-xl font-semibold transition-all hover:-translate-y-1">
                Contactar
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white/45 dark:bg-surface/55 border border-border/60 p-4 text-center backdrop-blur-md"
                >
                  <p className="text-2xl sm:text-3xl font-black text-accent">{stat.label}</p>
                  <p className="text-xs sm:text-sm text-secondary mt-1 leading-snug">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10"
            >
              <ImageCarousel />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 pointer-events-none" />
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-surface/90 p-6 rounded-2xl shadow-xl border border-border backdrop-blur-xl"
            >
              <p className="text-sm text-secondary font-medium mb-2">Misión</p>
              <p className="text-sm font-semibold text-foreground max-w-xs">
                Formar ciudadanos íntegros con excelencia académica
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 bg-accent text-white px-5 py-4 rounded-2xl shadow-xl"
            >
              <p className="text-xs font-medium opacity-90">Comunidad</p>
              <p className="text-lg font-black">Activa</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
