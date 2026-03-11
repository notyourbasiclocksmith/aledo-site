import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, Shield, Zap } from 'lucide-react'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn ? 'Automotive Locksmith Services in Aledo, TX' : 'Servicios de Cerrajería Automotriz en Aledo, TX',
    description: isEn
      ? 'Complete automotive locksmith services in Aledo, TX. Car lockouts, key replacement, fob programming, ignition repair & more. Call (817) 634-5045.'
      : 'Servicios completos de cerrajería automotriz en Aledo, TX. Aperturas de auto, reemplazo de llaves, programación de controles y más. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'services' : 'servicios'}`,
      languages: { en: `${baseUrl}/en/services`, es: `${baseUrl}/es/servicios`, 'x-default': `${baseUrl}/en/services` },
    },
  }
}

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const prefix = `/${lang}`
  const svcBase = lang === 'en' ? 'services' : 'servicios'

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.services.title}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.services.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`${prefix}/${svcBase}/${lang === 'en' ? service.slug : service.slugEs}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={lang === 'en' ? `${service.name} service in Aledo TX` : `Servicio de ${service.nameEs} en Aledo TX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h2 className="text-lg font-bold text-dark-gray mb-2 group-hover:text-secondary transition-colors">
                  {lang === 'en' ? service.name : service.nameEs}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{lang === 'en' ? service.shortDesc : service.shortDescEs}</p>
                <span className="text-secondary text-sm font-semibold">{dict.services.learnMore} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === 'en' ? 'Need Help Now?' : '¿Necesita Ayuda Ahora?'}
          </h2>
          <p className="text-white/90 mb-6">
            {lang === 'en' ? 'Call or text us for fast, professional locksmith service in Aledo, TX.' : 'Llame o envíe un mensaje para servicio rápido y profesional en Aledo, TX.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-gray-100 shadow-lg min-h-[56px]">
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
