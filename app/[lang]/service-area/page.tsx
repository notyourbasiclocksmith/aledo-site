import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageSquare, MapPin } from 'lucide-react'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn ? 'Service Area | Locksmith Near Aledo, TX' : 'Área de Servicio | Cerrajero Cerca de Aledo, TX',
    description: isEn
      ? 'Aledo Locksmith serves a 10-mile radius around Aledo, TX including Willow Park, Annetta, Hudson Oaks & Walsh. Call (817) 993-5323.'
      : 'Aledo Locksmith sirve un radio de 10 millas alrededor de Aledo, TX incluyendo Willow Park, Annetta, Hudson Oaks y Walsh. Llame al (817) 993-5323.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'service-area' : 'area-de-servicio'}`,
      languages: { en: `${baseUrl}/en/service-area`, es: `${baseUrl}/es/area-de-servicio`, 'x-default': `${baseUrl}/en/service-area` },
    },
  }
}

const nearbyAreas = [
  'Willow Park', 'Annetta', 'Annetta North', 'Annetta South',
  'Hudson Oaks', 'Walsh', 'Weatherford (nearby)', 'Fort Worth (western edge, nearby)',
]

export default function ServiceAreaPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.serviceArea.title}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.serviceArea.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark-gray mb-4">
              {isEn ? '10-Mile Radius Around Aledo, TX' : 'Radio de 10 Millas Alrededor de Aledo, TX'}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {isEn
                ? 'We provide professional locksmith services throughout Aledo, TX and the surrounding communities within approximately 10 miles. Our team knows this area well and can reach you quickly when you need help the most.'
                : 'Proporcionamos servicios profesionales de cerrajería en todo Aledo, TX y las comunidades cercanas dentro de aproximadamente 10 millas. Nuestro equipo conoce bien esta área y puede llegar rápidamente cuando más lo necesita.'}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark-gray mb-4">
              {isEn ? 'Nearby Areas We Serve' : 'Áreas Cercanas que Servimos'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-dark-gray font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">{dict.serviceArea.cta}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark-gray mb-4">
              {isEn ? 'Services Available in Our Area' : 'Servicios Disponibles en Nuestra Área'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`${prefix}/${svcBase}/${isEn ? svc.slug : svc.slugEs}`}
                  className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
                >
                  <span className="text-secondary font-medium text-sm">{isEn ? svc.name : svc.nameEs}</span>
                  <span className="ml-auto text-secondary text-xs">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? 'Need a Locksmith Near Aledo?' : '¿Necesita un Cerrajero Cerca de Aledo?'}
            </h2>
            <p className="text-white/90 mb-6">
              {isEn ? 'We arrive fast — typically 20-30 minutes. Call or text us now.' : 'Llegamos rápido — generalmente 20-30 minutos. Llame o envíe un mensaje ahora.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-6 py-4 rounded-xl font-bold min-h-[56px]">
                <Phone className="w-5 h-5" /> {CALL_DISPLAY}
              </a>
              <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-bold border border-white/30 min-h-[56px]">
                <MessageSquare className="w-5 h-5" /> {TEXT_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
