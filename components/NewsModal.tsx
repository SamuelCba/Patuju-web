'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Award } from 'lucide-react'

interface NewsItem {
  title: string
  description: string
  date: string
}

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  news: NewsItem[]
}

export default function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-surface rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative p-6 sm:p-8 border-b border-border bg-gradient-to-r from-accent/10 to-accent-yellow/10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Todas las Noticias
                </h2>
                <p className="text-secondary mt-2">Mantente informado sobre eventos y logros</p>

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="space-y-6">
                  {news.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-6 border border-border/50 rounded-2xl bg-white/50 dark:bg-surface/50 hover:border-accent/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Award size={20} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-accent font-medium mb-2">{item.date}</div>
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-secondary text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border p-6 sm:p-8 bg-secondary-light/30 dark:bg-black/20">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:scale-105"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
