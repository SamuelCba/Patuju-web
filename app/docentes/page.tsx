import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const teachers = [
  {
    name: 'Lic. María González',
    subject: 'Directora General',
    specialty: 'Educación y Administración',
  },
  {
    name: 'Prof. Carlos Rodríguez',
    subject: 'Matemáticas',
    specialty: 'Educación Matemática',
  },
  {
    name: 'Lic. Ana Martínez',
    subject: 'Lengua y Literatura',
    specialty: 'Lingüística',
  },
  {
    name: 'Prof. Luis Sánchez',
    subject: 'Ciencias Naturales',
    specialty: 'Biología',
  },
  {
    name: 'Lic. Patricia López',
    subject: 'Historia y Geografía',
    specialty: 'Ciencias Sociales',
  },
  {
    name: 'Prof. Jorge Díaz',
    subject: 'Educación Física',
    specialty: 'Entrenamiento Deportivo',
  },
  {
    name: 'Lic. Sandra García',
    subject: 'Inglés',
    specialty: 'Lingüística Aplicada',
  },
  {
    name: 'Prof. Roberto Pérez',
    subject: 'Informática',
    specialty: 'Tecnología Educativa',
  },
  {
    name: 'Lic. Carmen Torres',
    subject: 'Educación Artística',
    specialty: 'Artes Plásticas',
  },
  {
    name: 'Prof. Miguel Flores',
    subject: 'Educación Musical',
    specialty: 'Música',
  },
  {
    name: 'Lic. Rosario Mendoza',
    subject: 'Psicología Educativa',
    specialty: 'Orientación Psicopedagógica',
  },
  {
    name: 'Prof. Francisco Vargas',
    subject: 'Educación Religiosa',
    specialty: 'Formación en Valores',
  },
]

export default function DocentesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Nuestro Equipo <span className="text-accent">Docente</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Profesionales comprometidos con la excelencia educativa y la formación integral de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.name}
                className="p-6 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-lg mb-4 flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-accent font-medium mb-2">{teacher.subject}</p>
                <p className="text-foreground/70 text-sm">{teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-balance">
            Nuestros Docentes se Caracterizan por:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Excelencia Profesional',
                description: 'Títulos de postgrado y formación continua en metodologías educativas innovadoras.',
              },
              {
                title: 'Compromiso Educativo',
                description: 'Dedicación permanente al desarrollo integral y bienestar de los estudiantes.',
              },
              {
                title: 'Innovación Pedagógica',
                description: 'Uso de tecnologías educativas y estrategias didácticas contemporáneas.',
              },
              {
                title: 'Ética Profesional',
                description: 'Valores fundamentales en la práctica educativa y relaciones interpersonales.',
              },
            ].map((value, index) => (
              <div key={value.title} className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-accent">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
