'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

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
    <footer className="relative bg-gradient-to-b from-surface to-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Patujú Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg text-foreground">Patujú</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Comprometidos con la excelencia educativa y la formación integral de nuestros estudiantes.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@patuju.edu.ec" className="text-secondary hover:text-accent transition-colors text-sm">
                  info@patuju.edu.ec
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+59372123456" className="text-secondary hover:text-accent transition-colors text-sm">
                  +593 (7) 212-3456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-secondary text-sm">
                  Calle Principal, Patate<br />Tungurahua, Ecuador
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              © 2024 Unidad Educativa Patujú. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <button className="text-secondary hover:text-accent transition-colors text-sm font-medium">
                Privacidad
              </button>
              <button className="text-secondary hover:text-accent transition-colors text-sm font-medium">
                Términos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
