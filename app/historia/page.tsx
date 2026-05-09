import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const milestones = [
  {
    year: '1985',
    title: 'Fundación de Patujú',
    description: 'Se funda la Unidad Educativa Patujú con una visión de excelencia educativa y compromiso comunitario.',
  },
  {
    year: '1995',
    title: 'Expansión Educativa',
    description: 'Se amplía la infraestructura con nuevos pabellones y laboratorios especializados.',
  },
  {
    year: '2005',
    title: 'Acreditación Internacional',
    description: 'Patujú obtiene acreditación de calidad educativa a nivel internacional.',
  },
  {
    year: '2015',
    title: 'Innovación Tecnológica',
    description: 'Se implementan plataformas digitales de aprendizaje y educación virtual.',
  },
  {
    year: '2020',
    title: 'Educación Híbrida',
    description: 'Adaptación exitosa a modalidades de educación híbrida durante la pandemia.',
  },
  {
    year: '2024',
    title: 'Infraestructura Moderna',
    description: 'Inaugura nuevas instalaciones con tecnología de punta para la educación del futuro.',
  },
]

export default function HistoriaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Nuestra <span className="text-accent">Historia</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Conozca el fascinante recorrido de la Unidad Educativa Patujú, una institución con más de 35 años de trayectoria educativa.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 bg-accent/20 flex-grow mt-4" style={{ minHeight: '120px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 pt-2">
                  <div className="text-sm font-semibold text-accent mb-1">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">Nuestra Filosofía</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-accent">Misión</h3>
              <p className="text-foreground/70">
                Formar estudiantes íntegros, con excelencia académica y valores sólidos, comprometidos con el desarrollo sostenible de la comunidad.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-accent">Visión</h3>
              <p className="text-foreground/70">
                Ser una institución educativa líder, reconocida por su calidad académica, innovación pedagógica e impacto social en la región.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-accent">Valores</h3>
              <p className="text-foreground/70">
                Excelencia, integridad, respeto, compromiso social y responsabilidad ambiental guían nuestras acciones educativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
