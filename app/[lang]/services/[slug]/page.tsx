import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, ArrowLeft, CheckCircle, Shield, Clock, MapPin, Navigation, Star, Wrench } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

function findService(slug: string, lang: Locale) {
  return services.find((s) => (lang === 'en' ? s.slug : s.slugEs) === slug)
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  services.forEach((s) => {
    params.push({ lang: 'en', slug: s.slug })
    params.push({ lang: 'es', slug: s.slugEs })
  })
  return params
}

export async function generateMetadata({ params }: { params: { lang: Locale; slug: string } }): Promise<Metadata> {
  const service = findService(params.slug, params.lang)
  if (!service) return {}
  const isEn = params.lang === 'en'
  const name = isEn ? service.name : service.nameEs
  const svcBase = isEn ? 'services' : 'servicios'
  const slug = isEn ? service.slug : service.slugEs
  const desc = isEn ? service.description : service.descriptionEs

  return {
    title: isEn
      ? `${name} in Aledo, TX | Professional Mobile Service`
      : `${name} en Aledo, TX | Servicio Móvil Profesional`,
    description: isEn
      ? `${service.shortDesc} Professional mobile service in Aledo, TX and within 10 miles. Licensed & insured. Call (817) 634-5045.`
      : `${service.shortDescEs} Servicio móvil profesional en Aledo, TX y dentro de 10 millas. Licenciado y asegurado. Llame al (817) 634-5045.`,
    keywords: isEn
      ? `${name.toLowerCase()}, ${name.toLowerCase()} Aledo TX, ${name.toLowerCase()} near me, mobile ${name.toLowerCase()}, automotive locksmith Aledo`
      : `${name.toLowerCase()}, ${name.toLowerCase()} Aledo TX, ${name.toLowerCase()} cerca de mi, cerrajero automotriz Aledo`,
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${svcBase}/${slug}`,
      languages: {
        en: `${baseUrl}/en/services/${service.slug}`,
        es: `${baseUrl}/es/servicios/${service.slugEs}`,
        'x-default': `${baseUrl}/en/services/${service.slug}`,
      },
    },
    openGraph: {
      title: isEn ? `${name} | Aledo Locksmith` : `${name} | Cerrajero Aledo`,
      description: isEn ? service.shortDesc : service.shortDescEs,
      url: `${baseUrl}/${params.lang}/${svcBase}/${slug}`,
      siteName: 'Aledo Locksmith',
      images: [{ url: `${baseUrl}${service.image}`, width: 1200, height: 630, alt: name }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

function generateFaqs(name: string, isEn: boolean) {
  if (isEn) {
    return [
      { q: `How much does ${name.toLowerCase()} cost in Aledo?`, a: `Pricing for ${name.toLowerCase()} varies depending on your vehicle\'s make, model, and year. We always provide an upfront quote before starting any work — no hidden fees or surprises. Call (817) 634-5045 for a free estimate.` },
      { q: `How fast can you provide ${name.toLowerCase()} service?`, a: `We typically arrive within 20-30 minutes for locations in the Aledo, TX area. Our mobile unit comes fully equipped with all tools and parts needed to complete ${name.toLowerCase()} on-site.` },
      { q: `Do I need to tow my car to a dealer for ${name.toLowerCase()}?`, a: `No! Our mobile service comes directly to your location — home, work, parking lot, or roadside. We perform ${name.toLowerCase()} on-site with dealer-level equipment, saving you the cost and hassle of a tow.` },
      { q: `Is your ${name.toLowerCase()} service available 24/7?`, a: `Yes, we offer 24/7 emergency service for automotive locksmith needs in Aledo, TX and within a 10-mile radius. Call (817) 634-5045 anytime.` },
    ]
  }
  return [
    { q: `¿Cuánto cuesta el servicio de ${name.toLowerCase()} en Aledo?`, a: `El precio del servicio de ${name.toLowerCase()} varía según la marca, modelo y año de su vehículo. Siempre proporcionamos una cotización clara antes de comenzar — sin cargos ocultos. Llame al (817) 634-5045 para un estimado gratis.` },
    { q: `¿Qué tan rápido pueden proporcionar ${name.toLowerCase()}?`, a: `Generalmente llegamos en 20-30 minutos para ubicaciones en el área de Aledo, TX. Nuestra unidad móvil viene totalmente equipada con todas las herramientas y partes necesarias.` },
    { q: `¿Necesito remolcar mi auto al concesionario para ${name.toLowerCase()}?`, a: `¡No! Nuestro servicio móvil va directamente a su ubicación — casa, trabajo, estacionamiento o carretera. Realizamos ${name.toLowerCase()} en el lugar con equipo de nivel concesionario.` },
    { q: `¿El servicio de ${name.toLowerCase()} está disponible 24/7?`, a: `Sí, ofrecemos servicio de emergencia 24/7 para necesidades de cerrajería automotriz en Aledo, TX y dentro de un radio de 10 millas. Llame al (817) 634-5045 a cualquier hora.` },
  ]
}

export default function ServiceDetailPage({ params }: { params: { lang: Locale; slug: string } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const service = findService(params.slug, lang)
  if (!service) notFound()

  const prefix = `/${lang}`
  const svcBase = lang === 'en' ? 'services' : 'servicios'
  const isEn = lang === 'en'
  const name = isEn ? service.name : service.nameEs
  const desc = isEn ? service.description : service.descriptionEs
  const features = isEn ? service.features : service.featuresEs
  const detailed = isEn ? service.detailedContent : service.detailedContentEs
  const nearMePath = isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'
  const svcAreaPath = isEn ? 'service-area' : 'area-de-servicio'

  // Related services: prefer explicit relatedSlugs, fallback to next 4
  const relatedServices = service.relatedSlugs
    ? service.relatedSlugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean).slice(0, 4)
    : services.filter((s) => s.slug !== service.slug).slice(0, 4)

  const faqs = generateFaqs(name, isEn)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: desc,
    url: `${baseUrl}/${lang}/${svcBase}/${isEn ? service.slug : service.slugEs}`,
    image: `${baseUrl}${service.image}`,
    provider: {
      '@type': 'Locksmith',
      name: 'Aledo Locksmith',
      telephone: CALL_NUMBER,
      address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', postalCode: '76008', addressCountry: 'US' },
      geo: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 },
    },
    areaServed: [
      { '@type': 'City', name: 'Aledo, TX' },
      { '@type': 'City', name: 'Willow Park, TX' },
      { '@type': 'City', name: 'Hudson Oaks, TX' },
      { '@type': 'City', name: 'Annetta, TX' },
    ],
    serviceType: 'Automotive Locksmith',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}/${lang}/${svcBase}/${isEn ? service.slug : service.slugEs}`,
      servicePhone: CALL_NUMBER,
      availableLanguage: [{ '@type': 'Language', name: 'English' }, { '@type': 'Language', name: 'Spanish' }],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 }, geoRadius: '16093' },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Services' : 'Servicios', item: `${baseUrl}/${lang}/${svcBase}` },
      { '@type': 'ListItem', position: 3, name },
    ],
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20 overflow-hidden">
        <Image
          src={service.image}
          alt={isEn ? `${name} service in Aledo TX` : `Servicio de ${name} en Aledo TX`}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <Link href={`${prefix}/${svcBase}`} className="hover:text-white transition-colors">{isEn ? 'Services' : 'Servicios'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{name}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6">
            {isEn
              ? `Professional ${name.toLowerCase()} service in Aledo, TX and nearby areas.`
              : `Servicio profesional de ${name.toLowerCase()} en Aledo, TX y áreas cercanas.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 rounded-xl font-bold transition-colors shadow-lg min-h-[48px]">
              <Phone className="w-5 h-5" /> {dict.nav.callNow}: {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold border border-white/30 min-h-[48px]">
              <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}: {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Content */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={service.image}
                  alt={isEn ? `${name} - Aledo Locksmith` : `${name} - Cerrajero Aledo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <h2 className="text-2xl font-bold text-dark-gray mb-4">
                {isEn ? `About Our ${name} Service` : `Sobre Nuestro Servicio de ${name}`}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{desc}</p>

              {/* Detailed Content */}
              {detailed && detailed.length > 0 && (
                <div className="space-y-5 mb-8">
                  {detailed.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Features Grid */}
              {features && features.length > 0 && (
                <div className="bg-light-gray rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-dark-gray mb-4">
                    {isEn ? 'What\'s Included' : 'Qué Incluye'}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA mid-content */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-xl font-bold transition-colors hover:bg-accent/90 min-h-[56px]">
                  <Phone className="w-5 h-5" /> {dict.nav.callNow}: {CALL_DISPLAY}
                </a>
                <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold transition-colors hover:bg-secondary/90 min-h-[56px]">
                  <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}: {TEXT_DISPLAY}
                </a>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1">
              {/* Why Us Card */}
              <div className="bg-light-gray rounded-2xl p-6 mb-6 border border-gray-100">
                <h3 className="text-lg font-bold text-dark-gray mb-4">
                  {isEn ? 'Why Choose Aledo Locksmith?' : '¿Por Qué Elegirnos?'}
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: isEn ? '20-30 min response time' : 'Respuesta en 20-30 min' },
                    { icon: <Shield className="w-4 h-4" />, text: isEn ? 'Licensed & insured' : 'Licenciado y asegurado' },
                    { icon: <Star className="w-4 h-4" />, text: isEn ? 'Upfront pricing, no surprises' : 'Precios claros, sin sorpresas' },
                    { icon: <Navigation className="w-4 h-4" />, text: isEn ? 'Mobile — we come to you' : 'Móvil — vamos a usted' },
                    { icon: <Wrench className="w-4 h-4" />, text: isEn ? 'All makes & models' : 'Todas las marcas y modelos' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent">{item.icon}</span>
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Area Card */}
              <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-6 text-white mb-6">
                <MapPin className="w-6 h-6 mb-3" />
                <h3 className="font-bold mb-2">{isEn ? 'Service Area' : 'Área de Servicio'}</h3>
                <p className="text-white/80 text-sm mb-4">
                  {isEn
                    ? 'Aledo, Willow Park, Annetta, Hudson Oaks, Walsh & nearby areas within 10 miles.'
                    : 'Aledo, Willow Park, Annetta, Hudson Oaks, Walsh y áreas cercanas dentro de 10 millas.'}
                </p>
                <Link href={`${prefix}/${svcAreaPath}`} className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline">
                  {isEn ? 'View Service Area' : 'Ver Área de Servicio'} &rarr;
                </Link>
              </div>

              {/* Quick Links Card */}
              <div className="bg-light-gray rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-dark-gray mb-3">{isEn ? 'Quick Links' : 'Enlaces Rápidos'}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={`${prefix}/${svcBase}`} className="text-secondary text-sm font-medium hover:underline">
                      {isEn ? 'All Services' : 'Todos los Servicios'} &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href={`${prefix}/${nearMePath}`} className="text-secondary text-sm font-medium hover:underline">
                      {isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí'} &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href={`${prefix}/${isEn ? 'contact' : 'contacto'}`} className="text-secondary text-sm font-medium hover:underline">
                      {isEn ? 'Get a Free Quote' : 'Obtener Cotización Gratis'} &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-10">
            {isEn ? 'How It Works' : 'Cómo Funciona'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(isEn
              ? [
                  { step: '1', title: 'Call or Text Us', desc: `Tell us your vehicle make, model, and that you need ${name.toLowerCase()}. We\'ll give you an upfront quote.` },
                  { step: '2', title: 'We Come to You', desc: 'Our mobile technician drives to your location in Aledo with all the tools and parts needed.' },
                  { step: '3', title: 'Done On-Site', desc: `We complete the ${name.toLowerCase()} at your location and verify everything works before we leave.` },
                ]
              : [
                  { step: '1', title: 'Llame o Envíe Mensaje', desc: `Díganos la marca, modelo de su vehículo y que necesita ${name.toLowerCase()}. Le daremos una cotización clara.` },
                  { step: '2', title: 'Vamos a Usted', desc: 'Nuestro técnico móvil va a su ubicación en Aledo con todas las herramientas y partes necesarias.' },
                  { step: '3', title: 'Listo en el Lugar', desc: `Completamos el servicio de ${name.toLowerCase()} en su ubicación y verificamos que todo funcione antes de irnos.` },
                ]
            ).map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-gray mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-3">
            {isEn ? 'Related Services' : 'Servicios Relacionados'}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {isEn ? 'Explore other automotive locksmith services we offer in Aledo, TX.' : 'Explore otros servicios de cerrajería automotriz que ofrecemos en Aledo, TX.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((rs: any) => (
              <Link
                key={rs.slug}
                href={`${prefix}/${svcBase}/${isEn ? rs.slug : rs.slugEs}`}
                className="group bg-light-gray rounded-2xl p-5 hover:shadow-md transition-all border border-gray-100 hover:border-secondary/30 hover:-translate-y-0.5"
              >
                <div className="relative w-full h-28 rounded-xl overflow-hidden mb-3">
                  <Image src={rs.image} alt={isEn ? rs.name : rs.nameEs} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <h3 className="font-bold text-dark-gray text-sm mb-1 group-hover:text-secondary transition-colors">{isEn ? rs.name : rs.nameEs}</h3>
                <p className="text-gray-500 text-xs mb-2 line-clamp-2">{isEn ? rs.shortDesc : rs.shortDescEs}</p>
                <span className="text-secondary text-xs font-semibold">{dict.services.learnMore} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-10">
            {isEn ? `${name} — Frequently Asked Questions` : `${name} — Preguntas Frecuentes`}
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark-gray mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-gray-100">
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
            {isEn ? `Need ${name} in Aledo, TX?` : `¿Necesita ${name} en Aledo, TX?`}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn
              ? 'Mobile service — we come to you in 20-30 minutes. Call or text now for a free quote.'
              : 'Servicio móvil — vamos a usted en 20-30 minutos. Llame o envíe un mensaje para una cotización gratis.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition min-h-[56px]">
              <Phone className="w-5 h-5" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
