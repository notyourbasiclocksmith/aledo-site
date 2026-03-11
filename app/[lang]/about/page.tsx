import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageSquare, Shield, Zap, Star, Users } from 'lucide-react'
import { dictionaries } from '@/lib/dictionaries'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn ? 'About Aledo Locksmith | Automotive Locksmith in Aledo, TX' : 'Acerca de Aledo Locksmith | Cerrajero Automotriz en Aledo, TX',
    description: isEn
      ? 'Learn about Aledo Locksmith — your trusted automotive locksmith in Aledo, TX. Car lockouts, key replacement, fob programming. Licensed, insured, bilingual. Call (817) 634-5045.'
      : 'Conozca a Aledo Locksmith — su cerrajero automotriz de confianza en Aledo, TX. Aperturas de auto, reemplazo de llaves, programación de controles. Licenciado, asegurado, bilingüe. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'about' : 'acerca'}`,
      languages: { en: `${baseUrl}/en/about`, es: `${baseUrl}/es/acerca`, 'x-default': `${baseUrl}/en/about` },
    },
  }
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const icons = [<Shield key={0} className="w-7 h-7" />, <Zap key={1} className="w-7 h-7" />, <Star key={2} className="w-7 h-7" />, <Users key={3} className="w-7 h-7" />]

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-16 overflow-hidden">
        <Image
          src="/images/mobile-locksmith-service-van-aledo-tx.png"
          alt={lang === 'en' ? 'Aledo Locksmith mobile service van in Aledo TX' : 'Van de servicio m\u00f3vil de Aledo Locksmith en Aledo TX'}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.about.h1}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.about.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-dark-gray mb-4">{dict.about.mission}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{dict.about.missionText}</p>
            </div>
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/mobile-locksmith-service-van-aledo-tx.png"
                alt={lang === 'en' ? 'Mobile automotive locksmith van serving Aledo TX' : 'Van m\u00f3vil de cerrajero automotriz sirviendo Aledo TX'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/automotive-locksmith-mobile-workshop-aledo-tx.png"
                alt={lang === 'en' ? 'Professional key programming workstation inside mobile unit' : 'Estaci\u00f3n profesional de programaci\u00f3n de llaves dentro de unidad m\u00f3vil'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-dark-gray mb-4">{dict.about.whyLocal}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{dict.about.whyLocalText}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {dict.about.values.map((val, i) => (
              <div key={i} className="bg-light-gray rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">{icons[i]}</div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {lang === 'en' ? 'Ready to Work With Us?' : '¿Listo Para Trabajar Con Nosotros?'}
            </h2>
            <p className="text-white/90 mb-6">
              {lang === 'en' ? 'Call or text us anytime for fast, reliable locksmith service in Aledo, TX.' : 'Llame o envíe un mensaje en cualquier momento para servicio rápido y confiable en Aledo, TX.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-6 py-4 rounded-xl font-bold transition-all hover:bg-gray-100 min-h-[56px]">
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
