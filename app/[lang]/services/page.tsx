import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, Shield, Clock, CheckCircle, MapPin, Wrench, Star } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn
      ? 'Automotive Locksmith Services in Aledo, TX | 21 Mobile Services'
      : 'Servicios de Cerrajería Automotriz en Aledo, TX | 21 Servicios Móviles',
    description: isEn
      ? 'Complete list of 21 automotive locksmith services in Aledo, TX. Car lockouts, key replacement, fob programming, ECU services, ignition repair & more. Mobile service — we come to you. Call (817) 634-5045.'
      : 'Lista completa de 21 servicios de cerrajería automotriz en Aledo, TX. Aperturas, llaves, programación, ECU, ignición y más. Servicio móvil. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'services' : 'servicios'}`,
      languages: { en: `${baseUrl}/en/services`, es: `${baseUrl}/es/servicios`, 'x-default': `${baseUrl}/en/services` },
    },
    openGraph: {
      title: isEn ? 'All Automotive Locksmith Services | Aledo Locksmith' : 'Todos los Servicios | Cerrajero Aledo',
      description: isEn
        ? '21 professional automotive locksmith services in Aledo, TX. Mobile service within 10 miles.'
        : '21 servicios profesionales de cerrajería automotriz en Aledo, TX. Servicio móvil dentro de 10 millas.',
      url: `${baseUrl}/${params.lang}/${isEn ? 'services' : 'servicios'}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'
  const nearMePath = isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'

  const basicServices = services.slice(0, 9)
  const advancedServices = services.slice(9)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Services' : 'Servicios' },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isEn ? 'Automotive Locksmith Services in Aledo, TX' : 'Servicios de Cerrajería Automotriz en Aledo, TX',
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: isEn ? s.name : s.nameEs,
      url: `${baseUrl}/${lang}/${svcBase}/${isEn ? s.slug : s.slugEs}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-5" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{isEn ? 'Services' : 'Servicios'}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.services.title}</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-6">{dict.services.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 rounded-xl font-bold transition-colors shadow-lg min-h-[48px]">
              <Phone className="w-5 h-5" /> {dict.nav.callNow}: {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold border border-white/30 min-h-[48px]">
              <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}: {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            {isEn ? 'Professional Mobile Automotive Locksmith — Aledo, TX' : 'Cerrajero Automotriz Móvil Profesional — Aledo, TX'}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {isEn
                ? 'Aledo Locksmith offers a complete range of automotive locksmith services — from basic car lockouts to advanced ECU programming and European vehicle specialties. Every service listed below is performed on-site at your location by a licensed, insured technician using dealer-level tools and equipment. Our mobile unit comes directly to you anywhere in Aledo, TX and within a 10-mile radius, including Willow Park, Annetta, Hudson Oaks, and Walsh.'
                : 'Aledo Locksmith ofrece una gama completa de servicios de cerrajería automotriz — desde aperturas básicas de auto hasta programación avanzada de ECU y especialidades de vehículos europeos. Cada servicio listado abajo se realiza en el lugar por un técnico licenciado y asegurado usando herramientas de nivel concesionario. Nuestra unidad móvil va directamente a usted en cualquier lugar de Aledo, TX y dentro de un radio de 10 millas.'}
            </p>
            <p>
              {isEn
                ? 'We work on all makes and models — domestic and import — and we are available 24 hours a day, 7 days a week for emergencies. Our bilingual team speaks both English and Spanish, and we provide upfront quotes before every job so there are never any surprises. Whether you need a single spare key or a full ECU replacement programmed to your vehicle, we have the expertise and equipment to get it done right the first time.'
                : 'Trabajamos con todas las marcas y modelos — domésticos e importados — y estamos disponibles las 24 horas del día, los 7 días de la semana para emergencias. Nuestro equipo bilingüe habla inglés y español, y proporcionamos cotizaciones claras antes de cada trabajo para que nunca haya sorpresas. Ya sea que necesite una sola llave de repuesto o un reemplazo completo de ECU programado a su vehículo, tenemos la experiencia y el equipo para hacerlo bien la primera vez.'}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <Wrench className="w-5 h-5" />, value: '21', label: isEn ? 'Services' : 'Servicios' },
              { icon: <Clock className="w-5 h-5" />, value: '24/7', label: isEn ? 'Availability' : 'Disponibilidad' },
              { icon: <MapPin className="w-5 h-5" />, value: '10mi', label: isEn ? 'Service Radius' : 'Radio de Servicio' },
              { icon: <Star className="w-5 h-5" />, value: '4.9★', label: isEn ? 'Customer Rating' : 'Calificación' },
            ].map((stat, i) => (
              <div key={i} className="bg-light-gray rounded-xl p-4 text-center border border-gray-100">
                <div className="text-accent mx-auto mb-1 flex justify-center">{stat.icon}</div>
                <div className="text-xl font-bold text-dark-gray">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Services */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-3">
              {isEn ? 'Core Locksmith Services' : 'Servicios Principales de Cerrajería'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'Our most-requested automotive locksmith services. Car lockouts, key replacement, fob programming, ignition repair, and more — all performed on-site at your location.'
                : 'Nuestros servicios de cerrajería automotriz más solicitados. Aperturas, reemplazo de llaves, programación de controles, reparación de ignición y más — todo en su ubicación.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {basicServices.map((service) => (
              <Link
                key={service.slug}
                href={`${prefix}/${svcBase}/${isEn ? service.slug : service.slugEs}`}
                className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={isEn ? `${service.name} service in Aledo TX` : `Servicio de ${service.nameEs} en Aledo TX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2 group-hover:text-secondary transition-colors">
                  {isEn ? service.name : service.nameEs}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{isEn ? service.shortDesc : service.shortDescEs}</p>
                <span className="text-secondary text-sm font-semibold">{dict.services.learnMore} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-3">
              {isEn ? 'Advanced Programming & Specialty Services' : 'Programación Avanzada y Servicios de Especialidad'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'Dealer-level ECU programming, module configuration, European vehicle specialties, and performance tuning — services most locksmiths cannot offer. All performed on-site with professional J2534 and OEM tools.'
                : 'Programación de ECU de nivel concesionario, configuración de módulos, especialidades de vehículos europeos y afinación de rendimiento — servicios que la mayoría de cerrajeros no pueden ofrecer. Todo en el lugar con herramientas J2534 y OEM profesionales.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advancedServices.map((service) => (
              <Link
                key={service.slug}
                href={`${prefix}/${svcBase}/${isEn ? service.slug : service.slugEs}`}
                className="group bg-light-gray rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={isEn ? `${service.name} service in Aledo TX` : `Servicio de ${service.nameEs} en Aledo TX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2 group-hover:text-secondary transition-colors">
                  {isEn ? service.name : service.nameEs}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{isEn ? service.shortDesc : service.shortDescEs}</p>
                <span className="text-secondary text-sm font-semibold">{dict.services.learnMore} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'Why Customers Choose Aledo Locksmith' : 'Por Qué los Clientes Eligen Aledo Locksmith'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(isEn
              ? [
                  { title: 'Dealer-Level Equipment, Mobile Convenience', text: 'We carry the same J2534 pass-through programming tools, OEM software subscriptions, and professional key cutting machines that dealerships use — but we bring them to your driveway, parking lot, or roadside. You get dealer-quality results without the dealer price tag, wait times, or towing costs.' },
                  { title: 'More Than Just Lockouts', text: 'While most locksmiths only handle basic lockouts and key copies, we offer advanced services like ECU programming, airbag module reset, Mercedes ELV repair, BMW FRM repair, and performance tuning. If your vehicle has an electronic lock, key, or computer issue, we can handle it.' },
                  { title: 'Transparent, Honest Pricing', text: 'We provide a clear, upfront quote before starting any work. The price we quote is the price you pay — no hidden trip charges, no after-hours markups, no bait-and-switch. We believe repeat customers are built on trust, not surprise invoices.' },
                  { title: 'Local to Aledo, Not Dispatched from Dallas', text: 'We are based right here near Aledo, TX — not dispatched from a call center 40 miles away. That means faster response times (20-30 minutes average), familiarity with the area, and a genuine commitment to this community. We are also fully bilingual in English and Spanish.' },
                ]
              : [
                  { title: 'Equipo de Nivel Concesionario, Conveniencia Móvil', text: 'Llevamos las mismas herramientas de programación J2534, suscripciones de software OEM y máquinas de corte de llaves profesionales que usan los concesionarios — pero las llevamos a su cochera, estacionamiento o carretera. Obtiene resultados de calidad de concesionario sin el precio, tiempos de espera o costos de grúa.' },
                  { title: 'Más Que Solo Aperturas', text: 'Mientras la mayoría de cerrajeros solo manejan aperturas básicas y copias de llaves, ofrecemos servicios avanzados como programación de ECU, reseteo de airbag, reparación de ELV de Mercedes, reparación de FRM de BMW y afinación de rendimiento.' },
                  { title: 'Precios Transparentes y Honestos', text: 'Proporcionamos una cotización clara antes de comenzar cualquier trabajo. El precio que cotizamos es el precio que paga — sin cargos de viaje ocultos, sin recargos por horario, sin tácticas engañosas.' },
                  { title: 'Locales en Aledo, No Despachados desde Dallas', text: 'Estamos basados aquí cerca de Aledo, TX — no despachados desde un centro de llamadas a 40 millas. Eso significa tiempos de respuesta más rápidos (20-30 minutos promedio), familiaridad con el área y un compromiso genuino con esta comunidad. También somos completamente bilingües.' },
                ]
            ).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-dark-gray mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href={`${prefix}/${nearMePath}`} className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-6 text-white text-center hover:shadow-lg transition-all hover:-translate-y-0.5">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-bold mb-1">{isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí'}</h3>
              <p className="text-white/80 text-xs">{isEn ? 'Fast mobile service in your area' : 'Servicio móvil rápido en su área'}</p>
            </Link>
            <Link href={`${prefix}/${isEn ? 'service-area' : 'area-de-servicio'}`} className="bg-light-gray rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'Service Area' : 'Área de Servicio'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? 'Cities and ZIP codes we cover' : 'Ciudades y códigos postales que cubrimos'}</p>
            </Link>
            <Link href={`${prefix}/${isEn ? 'faq' : 'preguntas-frecuentes'}`} className="bg-light-gray rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Star className="w-6 h-6 mx-auto mb-2 text-gold" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'FAQ' : 'Preguntas Frecuentes'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? '35+ questions answered' : '35+ preguntas respondidas'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-dark-gray mb-2">{dict.form.title}</h2>
            <p className="text-gray-600 mb-6">{dict.form.subtitle}</p>
            <ContactForm lang={lang} dict={dict} compact />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isEn ? 'Need Help Now?' : '¿Necesita Ayuda Ahora?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? 'Call or text us for fast, professional locksmith service in Aledo, TX. 20-30 minute response time.' : 'Llame o envíe un mensaje para servicio rápido y profesional en Aledo, TX. Respuesta en 20-30 minutos.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition min-h-[56px]">
              <Phone className="w-5 h-5" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
