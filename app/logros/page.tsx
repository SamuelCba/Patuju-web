import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const achievements = [
  {
    category: 'Académico',
    items: [
      'Tasa de aprobación del 98% en evaluaciones nacionales',
      'Estudiantes destacados en olimpiadas de matemática y ciencias',
      'Programas de intercambio estudiantil internacional',
      'Acreditación ISO 9001 en gestión educativa',
    ],
  },
  {
    category: 'Deportivo',
    items: [
      'Campeones interescolares de voleibol por 5 años consecutivos',
      'Destacados participantes en competencias nacionales de atletismo',
      'Equipo de fútbol femenino con múltiples títulos',
      'Programa de formación de talentos deportivos',
    ],
  },
  {
    category: 'Cultural',
    items: [
      'Presentaciones artísticas en festivales internacionales',
      'Banda sinfónica de renombre regional',
      'Programas de teatro y danza con reconocimiento nacional',
      'Exposiciones de arte plástico y diseño',
    ],
  },
  {
    category: 'Comunitario',
    items: [
      'Proyectos de responsabilidad social en la comunidad',
      'Programas de tutoría para estudiantes de instituciones públicas',
      'Iniciativas ambientales y de sostenibilidad',
      'Convenios con universidades para investigación',
    ],
  },
]

const stats = [
  { number: '35+', label: 'Años de excelencia' },
  { number: '2000+', label: 'Estudiantes graduados' },
  { number: '150+', label: 'Docentes dedicados' },
  { number: '95%', label: 'Tasa de ingreso a universidades' },
]

export default function LogrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Nuestros <span className="text-accent">Logros</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Celebramos los destacados logros de nuestros estudiantes, docentes y comunidad educativa en diversos ámbitos.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="p-6 bg-accent/10 rounded-lg border border-accent/20 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {achievements.map((category, index) => (
              <div key={category.category}>
                <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-border">
                  <span className="text-accent">→</span> {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent font-bold">✓</span>
                        </div>
                        <p className="text-foreground group-hover:text-accent transition-colors">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
