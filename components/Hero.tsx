'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ImageCarousel from './ImageCarousel'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 0.9, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <p className="text-sm font-medium text-accent">Bienvenido a Patujú</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
            >
              Unidad Educativa
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent-yellow">
                Patujú
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-secondary mb-8 max-w-xl leading-relaxed"
            >
              Institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes desde hace más de 15 años.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Conocer más
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-foreground rounded-xl font-semibold transition-all">
                Contactar
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { label: '15+', value: 'Años de trayectoria' },
                { label: '500+', value: 'Estudiantes' },
                { label: '100%', value: 'Calidad educativa' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.label}</p>
                  <p className="text-sm text-secondary mt-1">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageCarousel />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-surface p-6 rounded-2xl shadow-xl border border-border"
            >
              <p className="text-sm text-secondary font-medium mb-2">Misión</p>
              <p className="text-sm font-semibold text-foreground max-w-xs">
                Formar ciudadanos íntegros con excelencia académica
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
