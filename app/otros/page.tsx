import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Calle Principal 123, Zona Educativa',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@patuju.edu.bo',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Viernes 7:00am - 5:00pm',
  },
]

const programs = [
  {
    name: 'Educación Inicial',
    description: 'Formación temprana enfocada en desarrollo motriz, emocional y cognitivo',
    icon: '🌱',
  },
  {
    name: 'Primaria',
    description: 'Educación integral con énfasis en habilidades fundamentales y valores',
    icon: '📚',
  },
  {
    name: 'Secundaria',
    description: 'Preparación académica rigurosa para educación superior',
    icon: '🎓',
  },
  {
    name: 'Bachillerato',
    description: 'Especialización en carreras científicas y humanísticas',
    icon: '🔬',
  },
]

const facilities = [
  'Aulas equipadas con tecnología moderna',
  'Laboratorios de ciencias y computación',
  'Biblioteca y centro de recursos',
  'Canchas deportivas multifuncionales',
  'Auditorio para eventos culturales',
  'Cafetería y áreas de descanso',
  'Área de parqueo segura',
  'Sistema de seguridad 24/7',
]

export default function OtrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Información <span className="text-accent">General</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Encuentra toda la información que necesitas sobre nuestras instalaciones, programas y datos de contacto.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-balance">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-semibold">{item.label}</h3>
                  </div>
                  <p className="text-foreground/70">{item.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-balance">Programas Educativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={program.name} className="p-6 bg-background border border-border rounded-lg hover:border-accent transition-all duration-300 group">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {program.name}
                </h3>
                <p className="text-foreground/70">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-balance">Infraestructura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="p-4 border border-border rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <p className="text-foreground/70">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-balance">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: '20 de mayo de 2024',
                title: 'Evento de Graduación 2024',
                description: 'Celebramos la graduación de nuestros estudiantes del bachillerato.',
              },
              {
                date: '15 de mayo de 2024',
                title: 'Inauguración Nuevo Pabellón',
                description: 'Se inaugura exitosamente el nuevo pabellón educativo con tecnología de punta.',
              },
              {
                date: '10 de mayo de 2024',
                title: 'Feria Científica Anual',
                description: 'Participación destacada de estudiantes en la feria de ciencias regional.',
              },
            ].map((news, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="text-sm text-accent font-medium mb-2">{news.date}</div>
                <h3 className="text-lg font-bold mb-3">{news.title}</h3>
                <p className="text-foreground/70 text-sm">{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
