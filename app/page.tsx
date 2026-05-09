import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const highlights = [
  {
    title: 'Excelencia Académica',
    description: 'Programas educativos de calidad con metodologías innovadoras',
    icon: '📚',
  },
  {
    title: 'Formación Integral',
    description: 'Desarrollo de habilidades académicas, sociales y emocionales',
    icon: '🎯',
  },
  {
    title: 'Tradición y Modernidad',
    description: 'Patrimonio educativo consolidado con infraestructura moderna',
    icon: '✨',
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
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            ¿Por qué elegir Patujú?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="p-6 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-foreground/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Noticias</h2>
            <Link href="/otros" className="text-accent hover:text-accent-dark transition-colors font-medium">
              Ver más →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={item.title}
                className="p-6 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="text-sm text-accent font-medium mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-accent/10 border border-accent/20 rounded-lg p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">¿Quieres ser parte de Patujú?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros programas y cómo podemos ayudarte a alcanzar tus metas educativas.
          </p>
          <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors">
            Enviar mensaje
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
