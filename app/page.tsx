import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, MapPin, Award, Users, Building } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-800 rounded-sm flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-green-800">Saz Arquitectura</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-green-800 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-green-800 transition-colors">
                Servicios
              </a>
              <a href="#proyectos" className="text-gray-700 hover:text-green-800 transition-colors">
                Proyectos
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-green-800 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-green-800 transition-colors">
                Contacto
              </a>
            </nav>
            <Button className="bg-green-800 hover:bg-green-900 text-white">Consulta Gratuita</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Estudio de Arquitectura</Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Diseñamos espacios que
                <span className="text-green-800"> inspiran</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                En Saz Arquitectura transformamos ideas en realidades arquitectónicas excepcionales. Creamos espacios
                únicos que reflejan la personalidad y necesidades de cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-800 text-green-800 hover:bg-green-50 bg-transparent"
                >
                  Conocer Más
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-glass-building.png"
                alt="Proyecto arquitectónico moderno"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">15+ Años</p>
                    <p className="text-sm text-gray-600">de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones arquitectónicas integrales desde el concepto inicial hasta la construcción final
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diseño Arquitectónico",
                description: "Proyectos residenciales y comerciales con diseño innovador y funcional",
                icon: Building,
              },
              {
                title: "Planificación Urbana",
                description: "Desarrollo de espacios urbanos sostenibles y bien integrados",
                icon: MapPin,
              },
              {
                title: "Consultoría",
                description: "Asesoramiento especializado en todas las fases del proyecto",
                icon: Users,
              },
              {
                title: "Remodelaciones",
                description: "Transformación de espacios existentes con nuevas funcionalidades",
                icon: Award,
              },
              {
                title: "Diseño Interior",
                description: "Espacios interiores que combinan estética y funcionalidad",
                icon: Building,
              },
              {
                title: "Gestión de Obra",
                description: "Supervisión completa desde el inicio hasta la entrega final",
                icon: Users,
              },
            ].map((service, index) => (
              <Card key={index} className="border-gray-200 hover:border-green-800 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-800 transition-colors">
                    <service.icon className="w-6 h-6 text-green-800 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una selección de nuestros trabajos más representativos que demuestran nuestra experiencia y creatividad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Casa Moderna Minimalista",
                category: "Residencial",
                image: "/minimalist-house.png",
              },
              {
                title: "Centro Comercial Urbano",
                category: "Comercial",
                image: "/modern-commercial-center.png",
              },
              {
                title: "Complejo Residencial",
                category: "Residencial",
                image: "/modern-residential-green.png",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-800 text-white hover:bg-green-800">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <Button variant="ghost" className="text-green-800 hover:text-green-900 p-0">
                    Ver Detalles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Sobre Saz Arquitectura</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Con más de 15 años de experiencia en el sector, Saz Arquitectura se ha consolidado como un referente en
                diseño arquitectónico innovador y sostenible. Nuestro equipo multidisciplinario combina creatividad,
                técnica y funcionalidad para crear espacios únicos.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Creemos que la arquitectura debe ser más que estructuras; debe ser una extensión de las personas que
                habitan los espacios, reflejando sus valores, necesidades y aspiraciones.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800 mb-2">150+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800 mb-2">15+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/architecture-team-office.png"
                alt="Equipo de Saz Arquitectura"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Hablemos de tu Proyecto</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Estamos listos para convertir tus ideas en realidad. Contáctanos para una consulta gratuita
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-green-100">+34 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-green-100">info@sazarquitectura.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Dirección</p>
                    <p className="text-green-100">Calle Arquitectura 123, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Envíanos un Mensaje</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-800 hover:bg-green-900 text-white">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-800 rounded-sm flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Saz Arquitectura</h1>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Saz Arquitectura. Todos los derechos reservados.</p>
              <p className="mt-1">Diseñando el futuro, construyendo sueños.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
