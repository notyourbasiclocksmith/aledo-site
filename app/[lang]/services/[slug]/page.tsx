import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, ArrowLeft, CheckCircle } from 'lucide-react'
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
  return {
    title: isEn ? `${name} in Aledo, TX` : `${name} en Aledo, TX`,
    description: isEn ? service.shortDesc : service.shortDescEs,
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${svcBase}/${slug}`,
      languages: {
        en: `${baseUrl}/en/services/${service.slug}`,
        es: `${baseUrl}/es/servicios/${service.slugEs}`,
        'x-default': `${baseUrl}/en/services/${service.slug}`,
      },
    },
  }
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

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: desc,
    url: `${baseUrl}/${lang}/${svcBase}/${isEn ? service.slug : service.slugEs}`,
    provider: {
      '@type': 'Locksmith',
      name: 'Aledo Locksmith',
      telephone: CALL_NUMBER,
      email: 'contact@aledolocksmith.net',
      address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: 'Aledo, TX' },
    serviceType: 'Automotive Locksmith Services',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}/${lang}/${svcBase}/${isEn ? service.slug : service.slugEs}`,
      availableLanguage: isEn ? 'en' : 'es',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Services' : 'Servicios', item: `${baseUrl}/${lang}/${svcBase}` },
      { '@type': 'ListItem', position: 3, name: name },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-16 overflow-hidden">
        <Image
          src={service.image}
          alt={isEn ? `${name} service in Aledo TX` : `Servicio de ${name} en Aledo TX`}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href={`${prefix}/${svcBase}`} className="inline-flex items-center gap-1 text-gray-300 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {isEn ? 'All Services' : 'Todos los Servicios'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-lg text-gray-200">
            {isEn ? `Professional ${name.toLowerCase()} service in Aledo, TX and nearby areas.` : `Servicio profesional de ${name.toLowerCase()} en Aledo, TX y áreas cercanas.`}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={service.image}
              alt={isEn ? `${name} - automotive locksmith Aledo TX` : `${name} - cerrajero automotriz Aledo TX`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{desc}</p>

            <div className="bg-light-gray rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold text-dark-gray mb-4">
                {isEn ? 'Why Choose Aledo Locksmith?' : '¿Por Qué Elegirnos?'}
              </h2>
              <ul className="space-y-3">
                {[
                  isEn ? 'Fast response — typically 20-30 minutes in the Aledo area' : 'Respuesta rápida — generalmente 20-30 minutos en el área de Aledo',
                  isEn ? 'Licensed and insured professionals' : 'Profesionales licenciados y asegurados',
                  isEn ? 'Upfront, honest pricing — no surprises' : 'Precios honestos y claros — sin sorpresas',
                  isEn ? 'Available 24/7 for emergencies' : 'Disponible 24/7 para emergencias',
                  isEn ? 'Serving within 10 miles of Aledo, TX' : 'Servicio dentro de 10 millas de Aledo, TX',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-xl font-bold transition-colors hover:bg-accent/90 min-h-[56px]">
                <Phone className="w-5 h-5" /> {dict.nav.callNow}: {CALL_DISPLAY}
              </a>
              <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold transition-colors hover:bg-secondary/90 min-h-[56px]">
                <MessageSquare className="w-5 h-5" /> {dict.nav.textUs}: {TEXT_DISPLAY}
              </a>
            </div>
          </div>

          {/* Related Services */}
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-dark-gray mb-6">
              {isEn ? 'Related Services' : 'Servicios Relacionados'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.slug}
                  href={`${prefix}/${svcBase}/${isEn ? rs.slug : rs.slugEs}`}
                  className="bg-light-gray rounded-xl p-4 hover:shadow-md transition-all border border-gray-100 hover:border-secondary/30"
                >
                  <h3 className="font-semibold text-dark-gray mb-1">{isEn ? rs.name : rs.nameEs}</h3>
                  <span className="text-secondary text-sm font-medium">{dict.services.learnMore} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Inline Form */}
          <div className="mt-12 bg-light-gray rounded-2xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark-gray mb-2">{dict.form.title}</h2>
            <p className="text-gray-600 mb-6">{dict.form.subtitle}</p>
            <ContactForm lang={lang} dict={dict} compact />
          </div>
        </div>
      </section>
    </>
  )
}
