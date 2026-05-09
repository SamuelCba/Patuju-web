'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: 'Institución',
    links: [
      { label: 'Historia', href: '/historia' },
      { label: 'Logros', href: '/logros' },
      { label: 'Docentes', href: '/docentes' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Himno', href: '/himno' },
      { label: 'Información', href: '/otros' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                P
              </div>
              <span className="font-semibold text-lg">Patujú</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Comprometidos con la excelencia educativa y la formación integral de nuestros estudiantes.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © 2024 Unidad Educativa Patujú. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
