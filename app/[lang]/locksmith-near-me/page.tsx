import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, MapPin, Clock, Shield, Zap, Star, CheckCircle, Navigation, Car, Key, Cpu } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  const enPath = '/en/locksmith-near-me'
  const esPath = '/es/cerrajero-cerca-de-mi'

  return {
    title: isEn
      ? 'Locksmith Near Me in Aledo, TX | 24/7 Mobile Car Key & Lockout Service'
      : 'Cerrajero Cerca de Mí en Aledo, TX | Servicio Móvil de Llaves 24/7',
    description: isEn
      ? 'Looking for a locksmith near you in Aledo, TX? Mobile automotive locksmith — car lockouts, key replacement, fob programming, ECU services. 20-30 min response. Call (817) 634-5045.'
      : 'Buscando cerrajero cerca de usted en Aledo, TX? Cerrajero automotriz móvil — aperturas, llaves, programación, ECU. Respuesta en 20-30 min. Llame al (817) 634-5045.',
    keywords: isEn
      ? 'locksmith near me, locksmith near me Aledo, car locksmith near me, mobile locksmith near me, automotive locksmith near me, 24 hour locksmith near me, emergency locksmith near me, locksmith close to me, car key replacement near me, key fob programming near me'
      : 'cerrajero cerca de mi, cerrajero cerca de mi Aledo, cerrajero de auto cerca, cerrajero movil cerca, cerrajero automotriz cerca, cerrajero 24 horas cerca, cerrajero emergencia cerca, llaves de auto cerca de mi',
    alternates: {
      canonical: `${baseUrl}${isEn ? enPath : esPath}`,
      languages: {
        en: `${baseUrl}${enPath}`,
        es: `${baseUrl}${esPath}`,
        'x-default': `${baseUrl}${enPath}`,
      },
    },
    openGraph: {
      title: isEn
        ? 'Locksmith Near Me in Aledo, TX | 24/7 Mobile Service'
        : 'Cerrajero Cerca de Mí en Aledo, TX | Servicio Móvil 24/7',
      description: isEn
        ? 'Fast mobile locksmith service near you in Aledo, TX. Car lockouts, key replacement, fob programming & more. 20-30 min response. Call (817) 634-5045.'
        : 'Cerrajero móvil rápido cerca de usted en Aledo, TX. Aperturas, llaves, programación y más. Respuesta en 20-30 min. Llame al (817) 634-5045.',
      url: `${baseUrl}${isEn ? enPath : esPath}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
      images: [{ url: `${baseUrl}/images/mobile-locksmith-service-van-aledo-tx.png`, width: 1200, height: 630, alt: isEn ? 'Mobile locksmith near me in Aledo TX' : 'Cerrajero móvil cerca de mí en Aledo TX' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Locksmith Near Me in Aledo, TX' : 'Cerrajero Cerca de Mí en Aledo, TX',
      description: isEn
        ? 'Fast mobile locksmith near you. Car lockouts, keys, fob programming. Call (817) 634-5045.'
        : 'Cerrajero móvil rápido cerca de usted. Aperturas, llaves, programación. Llame (817) 634-5045.',
    },
  }
}

const nearbyAreas = [
  { name: 'Aledo', zip: '76008' },
  { name: 'Willow Park', zip: '76087' },
  { name: 'Annetta', zip: '76008' },
  { name: 'Annetta North', zip: '76008' },
  { name: 'Annetta South', zip: '76008' },
  { name: 'Hudson Oaks', zip: '76087' },
  { name: 'Walsh', zip: '76008' },
  { name: 'Weatherford', zip: '76086' },
]

const faqsEn = [
  { q: 'How quickly can a locksmith get to me near Aledo?', a: 'Our average response time is 20-30 minutes for locations in and around Aledo, TX. We have a mobile unit ready to dispatch to your exact location — whether you\'re at home, at work, in a parking lot, or on the roadside.' },
  { q: 'Is there a locksmith near me open 24/7?', a: 'Yes! Aledo Locksmith is available 24 hours a day, 7 days a week, including holidays. We handle emergency car lockouts and key issues any time of day or night. Call (817) 634-5045.' },
  { q: 'How much does a mobile locksmith near me cost?', a: 'Pricing depends on the service needed. Car lockouts typically start lower, while key programming and ECU services vary by vehicle. We always provide an upfront quote before starting — no hidden fees or surprises.' },
  { q: 'Can a locksmith near me make car keys without the original?', a: 'Absolutely. We can create new car keys from scratch using your vehicle\'s VIN and our professional key cutting and programming equipment. No original key or dealer visit needed.' },
  { q: 'Do you serve areas outside of Aledo?', a: 'Yes, we serve a 10-mile radius around Aledo, TX including Willow Park, Annetta, Hudson Oaks, Walsh, and parts of Weatherford and western Fort Worth.' },
  { q: 'Can you program smart keys and key fobs near me?', a: 'Yes! We program all types of smart keys, proximity fobs, and keyless entry remotes on-site for all major vehicle brands. No tow to the dealer needed.' },
]

const faqsEs = [
  { q: '¿Qué tan rápido puede llegar un cerrajero cerca de Aledo?', a: 'Nuestro tiempo promedio de respuesta es de 20-30 minutos para ubicaciones en y alrededor de Aledo, TX. Tenemos una unidad móvil lista para ir a su ubicación exacta — ya sea en casa, trabajo, estacionamiento o carretera.' },
  { q: '¿Hay un cerrajero cerca de mí abierto las 24 horas?', a: '¡Sí! Aledo Locksmith está disponible las 24 horas del día, los 7 días de la semana, incluyendo días festivos. Manejamos emergencias de aperturas de auto y llaves a cualquier hora. Llame al (817) 634-5045.' },
  { q: '¿Cuánto cuesta un cerrajero móvil cerca de mí?', a: 'El precio depende del servicio necesario. Las aperturas de auto generalmente comienzan con un precio menor, mientras que la programación de llaves y servicios de ECU varían según el vehículo. Siempre damos una cotización clara antes de empezar — sin cargos ocultos.' },
  { q: '¿Puede un cerrajero cerca hacer llaves de auto sin la original?', a: 'Absolutamente. Podemos crear llaves nuevas de auto desde cero usando el VIN de su vehículo y nuestro equipo profesional de corte y programación. No se necesita llave original ni visita al concesionario.' },
  { q: '¿Sirven áreas fuera de Aledo?', a: 'Sí, servimos en un radio de 10 millas alrededor de Aledo, TX incluyendo Willow Park, Annetta, Hudson Oaks, Walsh y partes de Weatherford y el oeste de Fort Worth.' },
  { q: '¿Pueden programar llaves inteligentes y controles remotos cerca de mí?', a: '¡Sí! Programamos todo tipo de llaves inteligentes, controles de proximidad y entrada sin llave en el lugar para todas las marcas principales. Sin necesidad de grúa al concesionario.' },
]

export default function LocksmithNearMePage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'
  const faqs = isEn ? faqsEn : faqsEs

  const featuredServices = services.slice(0, 6)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${baseUrl}/${lang}/locksmith-near-me/#business`,
    name: 'Aledo Locksmith',
    url: baseUrl,
    telephone: CALL_NUMBER,
    email: 'contact@aledolocksmith.net',
    priceRange: '$$',
    image: `${baseUrl}/images/mobile-locksmith-service-van-aledo-tx.png`,
    description: isEn
      ? 'Professional mobile automotive locksmith near Aledo, TX. Car lockouts, key replacement, fob programming, ECU services, and more. 24/7 service within 10 miles of Aledo.'
      : 'Cerrajero automotriz móvil profesional cerca de Aledo, TX. Aperturas, reemplazo de llaves, programación, servicios de ECU y más. Servicio 24/7 dentro de 10 millas de Aledo.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aledo',
      addressRegion: 'TX',
      postalCode: '76008',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.6960,
      longitude: -97.6023,
    },
    areaServed: nearbyAreas.map((a) => ({
      '@type': 'City',
      name: `${a.name}, TX`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEn ? 'Automotive Locksmith Services' : 'Servicios de Cerrajería Automotriz',
      itemListElement: services.slice(0, 8).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isEn ? s.name : s.nameEs,
          description: isEn ? s.shortDesc : s.shortDescEs,
          url: `${baseUrl}/${lang}/${svcBase}/${isEn ? s.slug : s.slugEs}`,
        },
      })),
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/mobile-locksmith-service-van-aledo-tx.png"
          alt={isEn ? 'Mobile locksmith near me in Aledo TX' : 'Cerrajero móvil cerca de mí en Aledo TX'}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-5">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                {isEn ? 'Available 24/7 • Mobile Service' : 'Disponible 24/7 • Servicio Móvil'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí'}
              <span className="block text-2xl md:text-3xl font-semibold text-gray-200 mt-2">
                {isEn ? 'in Aledo, TX' : 'en Aledo, TX'}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-4">
              {isEn
                ? 'Professional mobile automotive locksmith service coming directly to your location. Car lockouts, key replacement, fob programming, advanced ECU services — we bring the shop to you.'
                : 'Servicio profesional de cerrajería automotriz móvil directo a su ubicación. Aperturas de auto, reemplazo de llaves, programación de controles, servicios avanzados de ECU — llevamos el taller a usted.'}
            </p>
            <p className="text-gray-300 mb-8">
              {isEn
                ? 'Serving Aledo, Willow Park, Annetta, Hudson Oaks, Walsh & nearby areas within 10 miles.'
                : 'Sirviendo Aledo, Willow Park, Annetta, Hudson Oaks, Walsh y áreas cercanas dentro de 10 millas.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg min-h-[56px]"
              >
                <Phone className="w-5 h-5" /> {dict.nav.callNow}: {CALL_DISPLAY}
              </a>
              <a
                href={`sms:${TEXT_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 min-h-[56px]"
              >
                <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}: {TEXT_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-dark-gray">
            <span className="flex items-center gap-2"><Navigation className="w-4 h-4 text-accent" /> <strong>{isEn ? '20-30 Min Response' : 'Respuesta 20-30 Min'}</strong></span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-secondary" /> <strong>{isEn ? 'Licensed & Insured' : 'Licenciado y Asegurado'}</strong></span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> <strong>{isEn ? 'Open 24/7' : 'Abierto 24/7'}</strong></span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-gold" /> <strong>{isEn ? '4.9★ Rated' : '4.9★ Calificación'}</strong></span>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-gray mb-3">
              {isEn ? 'Automotive Locksmith Services Near You' : 'Servicios de Cerrajería Automotriz Cerca de Usted'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'From basic lockouts to advanced ECU programming — our mobile unit comes fully equipped to handle any automotive lock or key issue on-site.'
                : 'Desde aperturas básicas hasta programación avanzada de ECU — nuestra unidad móvil viene totalmente equipada para manejar cualquier problema de cerradura o llave en el lugar.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`${prefix}/${svcBase}/${isEn ? svc.slug : svc.slugEs}`}
                className="group bg-light-gray rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={svc.image}
                    alt={isEn ? `${svc.name} near me in Aledo TX` : `${svc.nameEs} cerca de mí en Aledo TX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-1 group-hover:text-secondary transition-colors">
                  {isEn ? svc.name : svc.nameEs}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{isEn ? svc.shortDesc : svc.shortDescEs}</p>
                <span className="text-secondary text-sm font-semibold">{dict.services.learnMore} &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`${prefix}/${svcBase}`}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              {dict.services.viewAll} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-gray mb-10 text-center">
            {isEn ? 'Why Choose the Closest Locksmith to You?' : '¿Por Qué Elegir el Cerrajero Más Cercano a Usted?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Navigation className="w-7 h-7 text-white" />,
                bg: 'bg-accent',
                titleEn: 'Fastest Response in the Area',
                titleEs: 'La Respuesta Más Rápida del Área',
                descEn: 'We\'re based right here near Aledo — not dispatched from Dallas or Fort Worth. That means 20-30 minute arrival, not 60+.',
                descEs: 'Estamos basados aquí cerca de Aledo — no despachados desde Dallas o Fort Worth. Eso significa llegada en 20-30 minutos, no 60+.',
              },
              {
                icon: <Shield className="w-7 h-7 text-white" />,
                bg: 'bg-secondary',
                titleEn: 'Licensed, Insured & Trusted',
                titleEs: 'Licenciado, Asegurado y Confiable',
                descEn: 'Fully licensed automotive locksmith with insurance coverage. Your vehicle is in safe, professional hands every time.',
                descEs: 'Cerrajero automotriz con licencia completa y cobertura de seguro. Su vehículo está en manos profesionales y seguras cada vez.',
              },
              {
                icon: <Star className="w-7 h-7 text-white" />,
                bg: 'bg-primary',
                titleEn: 'Upfront Pricing, No Surprises',
                titleEs: 'Precios Claros, Sin Sorpresas',
                descEn: 'We quote you a price before we start — and that\'s the price you pay. No bait-and-switch, no hidden charges, no "after-hours" markups.',
                descEs: 'Le cotizamos un precio antes de empezar — y ese es el precio que paga. Sin tácticas engañosas, sin cargos ocultos, sin recargos por horario.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-dark-gray mb-2">{isEn ? item.titleEn : item.titleEs}</h3>
                <p className="text-gray-600 text-sm">{isEn ? item.descEn : item.descEs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-gray mb-3">
              {isEn ? 'Locksmith Service Areas Near Aledo' : 'Áreas de Servicio de Cerrajería Cerca de Aledo'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? 'We provide mobile locksmith service within a 10-mile radius of Aledo, TX. Here are the communities we serve:'
                : 'Proporcionamos servicio de cerrajería móvil dentro de un radio de 10 millas de Aledo, TX. Estas son las comunidades que servimos:'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {nearbyAreas.map((area) => (
              <div key={area.name} className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <div>
                  <span className="text-dark-gray font-medium text-sm block">{area.name}</span>
                  <span className="text-gray-400 text-xs">{area.zip}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-light-gray rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm mb-3">
              {isEn
                ? 'ZIP codes served: 76008, 76087, 76086, and surrounding areas.'
                : 'Códigos postales: 76008, 76087, 76086 y áreas circundantes.'}
            </p>
            <p className="text-gray-500 text-sm">
              {isEn
                ? 'Not sure if you\'re in our area? Give us a call — we\'ll let you know!'
                : '¿No está seguro si estamos en su área? ¡Llámenos y se lo confirmamos!'}
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-gray mb-3 text-center">
            {isEn ? 'All Services Available Near You' : 'Todos los Servicios Disponibles Cerca de Usted'}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {isEn ? 'Every service below is performed on-site at your location — no towing required.' : 'Cada servicio se realiza en el lugar donde usted se encuentre — sin necesidad de grúa.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`${prefix}/${svcBase}/${isEn ? svc.slug : svc.slugEs}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-dark-gray font-medium text-sm">{isEn ? svc.name : svc.nameEs}</span>
                <span className="ml-auto text-secondary text-xs">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-gray mb-10 text-center">
            {isEn ? 'Locksmith Near Me — FAQs' : 'Cerrajero Cerca de Mí — Preguntas Frecuentes'}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-dark-gray mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Form */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-dark-gray mb-2">{dict.form.title}</h2>
            <p className="text-gray-600 mb-6">{dict.form.subtitle}</p>
            <ContactForm lang={lang} dict={dict} compact />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? 'Need a Locksmith Near You Right Now?' : '¿Necesita un Cerrajero Cerca Ahora Mismo?'}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {isEn
              ? 'We\'re the closest mobile locksmith to Aledo, TX. Call or text and we\'ll be there in 20-30 minutes.'
              : 'Somos el cerrajero móvil más cercano a Aledo, TX. Llame o envíe un mensaje y estaremos ahí en 20-30 minutos.'}
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
