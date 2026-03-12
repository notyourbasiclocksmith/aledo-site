import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, MapPin, Clock, Shield, CheckCircle, Star, Navigation, Wrench } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

interface PageProps {
  params: { lang: Locale; service: string; city: string }
}

export async function generateStaticParams() {
  const params: { lang: string; service: string; city: string }[] = []
  for (const lang of ['en', 'es']) {
    for (const svc of services) {
      for (const city of cities) {
        params.push({ lang, service: svc.slug, city: city.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isEn = params.lang === 'en'
  const svc = services.find((s) => s.slug === params.service)
  const city = cities.find((c) => c.slug === params.city)
  if (!svc || !city) return {}

  const svcName = isEn ? svc.name : svc.nameEs
  const title = isEn
    ? `${svc.name} Near Me in ${city.name}, TX | Aledo Locksmith`
    : `${svc.nameEs} Cerca de Mí en ${city.name}, TX | Aledo Locksmith`
  const description = isEn
    ? `Need ${svc.name.toLowerCase()} near you in ${city.name}, TX? Aledo Locksmith provides fast mobile service. Call (817) 634-5045 for immediate help. 24/7, licensed, insured.`
    : `¿Necesita ${svc.nameEs.toLowerCase()} cerca de usted en ${city.name}, TX? Aledo Locksmith ofrece servicio móvil rápido. Llame al (817) 634-5045. 24/7, licenciado, asegurado.`
  const enPath = `/en/near-me/${svc.slug}/${city.slug}`
  const esPath = `/es/cerca-de-mi/${svc.slug}/${city.slugEs}`

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${isEn ? enPath : esPath}`,
      languages: { en: `${baseUrl}${enPath}`, es: `${baseUrl}${esPath}`, 'x-default': `${baseUrl}${enPath}` },
    },
    openGraph: { title, description, url: `${baseUrl}${isEn ? enPath : esPath}`, siteName: 'Aledo Locksmith', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
  }
}

export default function NearMePage({ params }: PageProps) {
  const lang = params.lang
  const isEn = lang === 'en'
  const dict = dictionaries[lang]
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'

  const svc = services.find((s) => s.slug === params.service)
  const city = cities.find((c) => c.slug === params.city)
  if (!svc || !city) notFound()

  const svcName = isEn ? svc.name : svc.nameEs
  const svcDesc = isEn ? svc.description : svc.descriptionEs
  const cityDesc = isEn ? city.descEn : city.descEs
  const landmarks = isEn ? city.landmarks : city.landmarksEs

  const otherCities = cities.filter((c) => c.slug !== city.slug)
  const relatedServices = svc.relatedSlugs
    ? services.filter((s) => svc.relatedSlugs!.includes(s.slug)).slice(0, 4)
    : services.filter((s) => s.slug !== svc.slug).slice(0, 4)

  const faqs = isEn
    ? [
        { q: `How fast can you get to ${city.name} for ${svc.name.toLowerCase()}?`, a: `We typically arrive in ${city.slug === 'aledo' ? '15 to 20' : city.slug === 'weatherford' ? '25 to 35' : '20 to 30'} minutes anywhere in ${city.name}. Our mobile unit is based in Aledo and serves all of ${city.name} and surrounding areas 24 hours a day, 7 days a week.` },
        { q: `How much does ${svc.name.toLowerCase()} cost in ${city.name}?`, a: `Pricing varies based on your specific vehicle and situation. Call us at (817) 634-5045 or text (817) 586-9634 with your vehicle year, make, and model for an upfront fixed quote. We never charge hidden fees or surprise add-ons.` },
        { q: `Do you offer ${svc.name.toLowerCase()} on weekends and holidays in ${city.name}?`, a: `Yes. We operate 24 hours a day, 7 days a week, 365 days a year — including all holidays. Whether it is 2 AM on a Tuesday or noon on Christmas Day, we dispatch a technician to your location in ${city.name}.` },
        { q: `Are you a local locksmith or a dispatch service?`, a: `We are a locally based automotive locksmith operating out of Aledo, TX. When you call us, you speak directly to our team — not a national call center. We dispatch our own licensed, insured technicians who know the ${city.name} area.` },
      ]
    : [
        { q: `¿Qué tan rápido pueden llegar a ${city.name} para ${svc.nameEs.toLowerCase()}?`, a: `Típicamente llegamos en ${city.slug === 'aledo' ? '15 a 20' : city.slug === 'weatherford' ? '25 a 35' : '20 a 30'} minutos a cualquier lugar en ${city.name}. Nuestra unidad móvil está basada en Aledo y sirve todo ${city.name} las 24 horas del día, los 7 días de la semana.` },
        { q: `¿Cuánto cuesta ${svc.nameEs.toLowerCase()} en ${city.name}?`, a: `El precio varía según su vehículo y situación. Llame al (817) 634-5045 o envíe mensaje al (817) 586-9634 con el año, marca y modelo para una cotización fija. Nunca cobramos cargos ocultos.` },
        { q: `¿Ofrecen ${svc.nameEs.toLowerCase()} en fines de semana y festivos en ${city.name}?`, a: `Sí. Operamos las 24 horas del día, los 7 días de la semana, los 365 días del año — incluyendo todos los festivos. Ya sea a las 2 AM un martes o al mediodía en Navidad, despachamos un técnico a su ubicación en ${city.name}.` },
        { q: `¿Son un cerrajero local o un servicio de despacho?`, a: `Somos un cerrajero automotriz local basado en Aledo, TX. Cuando nos llama, habla directamente con nuestro equipo — no un centro de llamadas nacional. Despachamos nuestros propios técnicos licenciados que conocen el área de ${city.name}.` },
      ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Aledo Locksmith',
    url: baseUrl,
    telephone: CALL_NUMBER,
    address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', postalCode: '76008', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 },
    areaServed: { '@type': 'City', name: `${city.name}, TX` },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí', item: `${baseUrl}/${lang}/${isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'}` },
      { '@type': 'ListItem', position: 3, name: `${svcName} — ${city.name}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20 overflow-hidden">
        <Image src={svc.image} alt={`${svcName} in ${city.name} TX`} fill className="object-cover opacity-15" priority sizes="100vw" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <Link href={`${prefix}/${isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'}`} className="hover:text-white transition-colors">{isEn ? 'Near Me' : 'Cerca de Mí'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{svcName} — {city.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-5 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">{isEn ? 'Mobile Service Near You' : 'Servicio Móvil Cerca de Usted'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {isEn ? `${svc.name} Near Me in ${city.name}` : `${svc.nameEs} Cerca de Mí en ${city.name}`}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            {isEn
              ? `Fast, professional mobile ${svc.name.toLowerCase()} service throughout ${city.name}, TX and surrounding areas.`
              : `Servicio móvil rápido y profesional de ${svc.nameEs.toLowerCase()} en todo ${city.name}, TX y áreas cercanas.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition min-h-[56px]">
              <Phone className="w-5 h-5" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? `Why Choose Us for ${svc.name} in ${city.name}?` : `¿Por Qué Elegirnos para ${svc.nameEs} en ${city.name}?`}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(isEn
              ? [
                  { icon: <Clock className="w-7 h-7" />, title: 'Fast Response', desc: `${city.slug === 'aledo' ? '15-20' : city.slug === 'weatherford' ? '25-35' : '20-30'} min average response in ${city.name}` },
                  { icon: <MapPin className="w-7 h-7" />, title: 'Mobile Service', desc: `We come to you anywhere in ${city.name} — no towing needed` },
                  { icon: <Shield className="w-7 h-7" />, title: 'Licensed & Insured', desc: 'Professional technicians with dealer-level equipment' },
                ]
              : [
                  { icon: <Clock className="w-7 h-7" />, title: 'Respuesta Rápida', desc: `${city.slug === 'aledo' ? '15-20' : city.slug === 'weatherford' ? '25-35' : '20-30'} min respuesta promedio en ${city.name}` },
                  { icon: <MapPin className="w-7 h-7" />, title: 'Servicio Móvil', desc: `Vamos a donde usted esté en ${city.name} — sin grúa` },
                  { icon: <Shield className="w-7 h-7" />, title: 'Licenciado y Asegurado', desc: 'Técnicos profesionales con equipo de nivel concesionario' },
                ]
            ).map((item, i) => (
              <div key={i} className="bg-light-gray rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">{item.icon}</div>
                <h3 className="font-bold text-dark-gray mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            {isEn ? `${svc.name} Service in ${city.name}, TX` : `Servicio de ${svc.nameEs} en ${city.name}, TX`}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{svcDesc}</p>
            <p>{cityDesc}</p>
            <p>
              {isEn
                ? `When you need ${svc.name.toLowerCase()} in ${city.name}, Aledo Locksmith is the trusted local choice. We bring our fully equipped mobile workshop directly to your location — whether you are at home, at work, in a parking lot, or on the roadside. All work is performed on-site, and we carry the tools, blanks, and software needed for virtually every vehicle make and model on the road today. You get the same quality of service you would expect from a dealership, but at a fraction of the cost and without the wait or the tow.`
                : `Cuando necesita ${svc.nameEs.toLowerCase()} en ${city.name}, Aledo Locksmith es la opción local de confianza. Llevamos nuestro taller móvil completamente equipado directamente a su ubicación — ya sea en su casa, trabajo, estacionamiento o al lado de la carretera. Todo el trabajo se realiza en el lugar, y llevamos las herramientas, plantillas y software necesarios para prácticamente todas las marcas y modelos de vehículos. Obtiene la misma calidad de servicio que esperaría de un concesionario, pero a una fracción del costo y sin espera ni grúa.`}
            </p>
          </div>
          <div className="mt-6">
            <Link
              href={`${prefix}/${svcBase}/${isEn ? svc.slug : svc.slugEs}`}
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              {isEn ? `View full ${svc.name} details` : `Ver detalles completos de ${svc.nameEs}`} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray text-center mb-6">
            {isEn ? `We Serve All ${city.name} Neighborhoods` : `Servimos Todos los Vecindarios de ${city.name}`}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {isEn
              ? `Our mobile ${svc.name.toLowerCase()} service covers every area of ${city.name}, TX`
              : `Nuestro servicio móvil de ${svc.nameEs.toLowerCase()} cubre toda el área de ${city.name}, TX`}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {landmarks.map((lm, i) => (
              <div key={i} className="flex items-center gap-2 bg-light-gray rounded-xl p-3 border border-gray-100">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-dark-gray text-sm font-medium">{lm}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            <strong>{isEn ? 'ZIP Code' : 'Código Postal'}:</strong> {city.zip} &middot; <strong>{isEn ? 'County' : 'Condado'}:</strong> {city.county}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100">
                <h3 className="font-bold text-dark-gray mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray text-center mb-6">
            {isEn ? `${svc.name} in Other Areas` : `${svc.nameEs} en Otras Áreas`}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`${prefix}/${isEn ? 'near-me' : 'cerca-de-mi'}/${svc.slug}/${isEn ? c.slug : c.slugEs}`}
                className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-accent shrink-0" />
                <span className="text-dark-gray font-medium text-sm">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray text-center mb-6">
            {isEn ? `Other Services in ${city.name}` : `Otros Servicios en ${city.name}`}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`${prefix}/${isEn ? 'near-me' : 'cerca-de-mi'}/${rs.slug}/${isEn ? city.slug : city.slugEs}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
              >
                <Wrench className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <span className="text-dark-gray font-medium text-sm block">{isEn ? rs.name : rs.nameEs}</span>
                  <span className="text-gray-400 text-xs">{city.name}, TX</span>
                </div>
                <span className="ml-auto text-secondary text-xs">&rarr;</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href={`${prefix}/${svcBase}`} className="text-secondary font-semibold hover:underline text-sm">
              {isEn ? 'View all 21 services' : 'Ver los 21 servicios'} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark-gray mb-2">{dict.form.title}</h2>
            <p className="text-gray-600 mb-6">{dict.form.subtitle}</p>
            <ContactForm lang={lang} dict={dict} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isEn ? `Need ${svc.name} in ${city.name}?` : `¿Necesita ${svc.nameEs} en ${city.name}?`}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? `We come to you in ${city.name} — fast, licensed, and insured. Call or text now.` : `Vamos a usted en ${city.name} — rápido, licenciado y asegurado. Llame o envíe mensaje ahora.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition min-h-[56px]">
              <Phone className="w-5 h-5" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
