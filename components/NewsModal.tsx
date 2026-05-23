'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, ArrowLeft, CalendarDays } from 'lucide-react'

interface NewsItem {
  title: string
  description: string
  date: string
}

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  news: NewsItem[]
  selectedNews?: NewsItem | null
  onSelectNews?: (item: NewsItem | null) => void
}

export default function NewsModal({ isOpen, onClose, news, selectedNews, onSelectNews }: NewsModalProps) {
  const closeModal = () => {
    onSelectNews?.(null)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-2xl w-full max-w-3xl max-h-[84vh] overflow-hidden flex flex-col border border-border/70 dark:border-white/10">
              <div className="relative p-6 sm:p-8 border-b border-border/70 dark:border-white/10 bg-gradient-to-r from-accent/10 to-accent-yellow/10 dark:from-accent/20 dark:to-accent-yellow/15">
                {selectedNews && (
                  <button
                    onClick={() => onSelectNews?.(null)}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/15 transition-colors"
                  >
                    <ArrowLeft size={16} /> Volver a noticias
                  </button>
                )}

                <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight text-balance pr-12">
                  {selectedNews ? selectedNews.title : 'Todas las Noticias'}
                </h2>
                <p className="text-secondary mt-2">
                  {selectedNews ? 'Noticia completa de la comunidad educativa' : 'Mantente informado sobre eventos y logros'}
                </p>

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  aria-label="Cerrar noticias"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white/70 dark:bg-[#0b1220]">
                {selectedNews ? (
                  <motion.article
                    key={selectedNews.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-3xl border border-border/60 dark:border-white/10 bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-xl shadow-black/5 dark:shadow-black/30"
                  >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                      <CalendarDays size={16} /> {selectedNews.date}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-5 leading-tight">
                      {selectedNews.title}
                    </h3>
                    <p className="text-secondary text-base sm:text-lg leading-8">
                      {selectedNews.description}
                    </p>
                  </motion.article>
                ) : (
                  <div className="space-y-6">
                    {news.map((item, index) => (
                      <motion.button
                        type="button"
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => onSelectNews?.(item)}
                        className="group w-full text-left p-6 border border-border/50 dark:border-white/10 rounded-2xl bg-white/75 dark:bg-[#111827] hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1 rounded-2xl bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                            <Award size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-accent font-medium mb-2">{item.date}</div>
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                            <span className="mt-4 inline-flex text-sm font-semibold text-accent">
                              Leer noticia completa
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-border/70 dark:border-white/10 p-6 sm:p-8 bg-secondary-light/50 dark:bg-black/25">
                <button
                  onClick={closeModal}
                  className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg shadow-accent/20"
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
