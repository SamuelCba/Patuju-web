'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
        >
          Unidad Educativa
          <br />
          <span className="text-accent">Patujú</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance"
        >
          Institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors">
            Conocer más
          </button>
          <button className="px-8 py-3 border border-border hover:bg-border rounded-lg font-medium transition-colors">
            Contactar
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
