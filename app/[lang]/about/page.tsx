import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, Shield, Zap, Star, Users, MapPin, Clock, CheckCircle, Wrench } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn
      ? 'About Aledo Locksmith | Licensed Automotive Locksmith in Aledo, TX'
      : 'Acerca de Aledo Locksmith | Cerrajero Automotriz Licenciado en Aledo, TX',
    description: isEn
      ? 'Learn about Aledo Locksmith — locally owned, licensed, insured automotive locksmith in Aledo, TX. Dealer-level tools, 24/7 mobile service, bilingual team. Serving Aledo & 10-mile radius. Call (817) 634-5045.'
      : 'Conozca Aledo Locksmith — cerrajero automotriz local, licenciado y asegurado en Aledo, TX. Herramientas de nivel concesionario, servicio móvil 24/7, equipo bilingüe. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'about' : 'acerca'}`,
      languages: { en: `${baseUrl}/en/about`, es: `${baseUrl}/es/acerca`, 'x-default': `${baseUrl}/en/about` },
    },
    openGraph: {
      title: isEn ? 'About Aledo Locksmith' : 'Acerca de Aledo Locksmith',
      description: isEn
        ? 'Locally owned automotive locksmith in Aledo, TX. Licensed, insured, bilingual, 24/7.'
        : 'Cerrajero automotriz local en Aledo, TX. Licenciado, asegurado, bilingüe, 24/7.',
      url: `${baseUrl}/${params.lang}/${isEn ? 'about' : 'acerca'}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const icons = [<Shield key={0} className="w-7 h-7" />, <Zap key={1} className="w-7 h-7" />, <Star key={2} className="w-7 h-7" />, <Users key={3} className="w-7 h-7" />]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'About' : 'Acerca' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20 overflow-hidden">
        <Image
          src="/images/mobile-locksmith-service-van-aledo-tx.png"
          alt={isEn ? 'Aledo Locksmith mobile service van in Aledo TX' : 'Van de servicio móvil de Aledo Locksmith en Aledo TX'}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-5" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{isEn ? 'About' : 'Acerca'}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.about.h1}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.about.intro}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <h2 className="text-2xl font-bold text-dark-gray mb-4">{dict.about.mission}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{dict.about.missionText}</p>
              <p className="text-gray-700 leading-relaxed">
                {isEn
                  ? 'We started this business with a simple idea: Aledo drivers deserve better than being stranded for hours waiting for a locksmith dispatched from across the metroplex, or being quoted one price on the phone and charged double when the technician arrives. Every interaction we have is guided by respect for your time, your vehicle, and your wallet. We quote honestly, arrive promptly, and do the job right — every single time.'
                  : 'Comenzamos este negocio con una idea simple: los conductores de Aledo merecen algo mejor que estar varados por horas esperando un cerrajero despachado desde el otro lado de la metrópolis, o recibir un precio por teléfono y que les cobren el doble cuando llega el técnico. Cada interacción que tenemos está guiada por el respeto a su tiempo, su vehículo y su bolsillo. Cotizamos honestamente, llegamos puntualmente y hacemos el trabajo bien — cada vez.'}
              </p>
            </div>
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/mobile-locksmith-service-van-aledo-tx.png"
                alt={isEn ? 'Mobile automotive locksmith van serving Aledo TX' : 'Van móvil de cerrajero automotriz sirviendo Aledo TX'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>

          {/* Equipment & Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/automotive-locksmith-mobile-workshop-aledo-tx.png"
                alt={isEn ? 'Professional key programming workstation inside mobile unit' : 'Estación profesional de programación de llaves dentro de unidad móvil'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-dark-gray mb-4">
                {isEn ? 'Dealer-Level Tools & Equipment' : 'Herramientas y Equipo de Nivel Concesionario'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isEn
                  ? 'Our mobile unit is not just a van with a few tools — it is a fully equipped automotive locksmith workshop on wheels. We invest heavily in the same professional-grade equipment that franchise dealerships use, including J2534 pass-through programming devices, OEM manufacturer software subscriptions for Ford, GM, Chrysler, Toyota, Honda, Nissan, BMW, Mercedes-Benz, Volkswagen, and other brands. We also carry professional key cutting machines capable of cutting standard, transponder, high-security sidewinder, and laser-cut key blanks on-site.'
                  : 'Nuestra unidad móvil no es solo una van con algunas herramientas — es un taller de cerrajería automotriz completamente equipado sobre ruedas. Invertimos fuertemente en el mismo equipo de grado profesional que usan los concesionarios, incluyendo dispositivos de programación J2534, suscripciones de software OEM para Ford, GM, Chrysler, Toyota, Honda, Nissan, BMW, Mercedes-Benz, Volkswagen y otras marcas. También llevamos máquinas profesionales de corte de llaves capaces de cortar blancos estándar, transponder, sidewinder y corte láser en el lugar.'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {isEn
                  ? 'This investment in equipment is what separates us from most mobile locksmiths in the DFW area. Many locksmiths carry only basic lockout tools and aftermarket key programmers. We carry the same dealer-level tools that allow us to perform advanced services like ECU reflashing, module programming, airbag reset, and European vehicle specialty repairs — all at your location without needing to tow your vehicle anywhere.'
                  : 'Esta inversión en equipo es lo que nos separa de la mayoría de cerrajeros móviles en el área de DFW. Muchos cerrajeros solo llevan herramientas básicas de apertura y programadores de llaves del mercado secundario. Nosotros llevamos las mismas herramientas de nivel concesionario que nos permiten realizar servicios avanzados como reprogramación de ECU, programación de módulos, reseteo de airbag y reparaciones especializadas de vehículos europeos — todo en su ubicación.'}
              </p>
            </div>
          </div>

          {/* Why Local */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div>
              <h2 className="text-2xl font-bold text-dark-gray mb-4">{dict.about.whyLocal}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{dict.about.whyLocalText}</p>
              <p className="text-gray-700 leading-relaxed">
                {isEn
                  ? 'Large national locksmith chains often operate through call centers and dispatch contractors who may be 30 to 60 miles away. By the time they arrive, you have been waiting for over an hour — and the price quoted on the phone mysteriously changes once they see your vehicle. As a locally based business, we eliminate those problems. Our response time averages 20 to 30 minutes because we are already in the Aledo area. Our pricing is set before we arrive and does not change. And when you call us, you talk to a real member of our team — not a call center operator reading a script.'
                  : 'Las grandes cadenas nacionales de cerrajería a menudo operan a través de centros de llamadas y despachan contratistas que pueden estar a 30 o 60 millas de distancia. Para cuando llegan, ha estado esperando más de una hora — y el precio cotizado por teléfono misteriosamente cambia cuando ven su vehículo. Como negocio local, eliminamos esos problemas. Nuestro tiempo de respuesta promedia 20 a 30 minutos porque ya estamos en el área de Aledo. Nuestros precios se establecen antes de llegar y no cambian. Y cuando nos llama, habla con un miembro real de nuestro equipo.'}
              </p>
            </div>
            <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/locksmith-delivering-car-keys-customer-aledo-tx.png"
                alt={isEn ? 'Locksmith delivering keys to satisfied customer in Aledo TX' : 'Cerrajero entregando llaves a cliente satisfecho en Aledo TX'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'Our Core Values' : 'Nuestros Valores Fundamentales'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {dict.about.values.map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">{icons[i]}</div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & At-a-Glance */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'Aledo Locksmith at a Glance' : 'Aledo Locksmith de un Vistazo'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Shield className="w-5 h-5" />, label: isEn ? 'Licensed & Insured' : 'Licenciado y Asegurado' },
              { icon: <Clock className="w-5 h-5" />, label: isEn ? '24/7/365 Availability' : 'Disponibilidad 24/7/365' },
              { icon: <MapPin className="w-5 h-5" />, label: isEn ? '10-Mile Service Radius' : 'Radio de 10 Millas' },
              { icon: <Users className="w-5 h-5" />, label: isEn ? 'Bilingual: EN & ES' : 'Bilingüe: EN y ES' },
              { icon: <Wrench className="w-5 h-5" />, label: isEn ? '21 Services Offered' : '21 Servicios Ofrecidos' },
              { icon: <Zap className="w-5 h-5" />, label: isEn ? '20-30 Min Response' : 'Respuesta 20-30 Min' },
              { icon: <Star className="w-5 h-5" />, label: isEn ? '4.9★ Customer Rating' : '4.9★ Calificación' },
              { icon: <CheckCircle className="w-5 h-5" />, label: isEn ? 'Upfront, Fixed Pricing' : 'Precios Fijos y Claros' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100">
                <div className="text-accent shrink-0">{item.icon}</div>
                <span className="text-dark-gray font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bilingual Promise */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-dark-gray mb-3">
              {isEn ? 'Fully Bilingual Service — Hablamos Español' : 'Servicio Completamente Bilingüe — We Speak English'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEn
                ? 'Aledo and the surrounding communities are home to a growing number of Spanish-speaking families. We believe that language should never be a barrier to getting the help you need when you are locked out of your car or stranded with a broken key. Our entire team is fluent in both English and Spanish, and our website is fully available in both languages. Whether you prefer to communicate in English or Spanish — on the phone, via text, or in person — we are here for you. Hablamos su idioma.'
                : 'Aledo y las comunidades circundantes son hogar de un número creciente de familias hispanohablantes. Creemos que el idioma nunca debe ser una barrera para obtener la ayuda que necesita cuando está encerrado fuera de su auto o varado con una llave rota. Todo nuestro equipo habla inglés y español con fluidez, y nuestro sitio web está completamente disponible en ambos idiomas. Ya sea que prefiera comunicarse en inglés o español — por teléfono, mensaje o en persona — estamos aquí para usted. We speak your language.'}
            </p>
          </div>

          {/* Internal Links */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href={`${prefix}/${isEn ? 'services' : 'servicios'}`} className="bg-light-gray rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Wrench className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'Our Services' : 'Nuestros Servicios'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? '21 automotive locksmith services' : '21 servicios de cerrajería automotriz'}</p>
            </Link>
            <Link href={`${prefix}/${isEn ? 'service-area' : 'area-de-servicio'}`} className="bg-light-gray rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'Service Area' : 'Área de Servicio'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? 'Aledo, Willow Park, Annetta & more' : 'Aledo, Willow Park, Annetta y más'}</p>
            </Link>
            <Link href={`${prefix}/${isEn ? 'faq' : 'preguntas-frecuentes'}`} className="bg-light-gray rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Star className="w-6 h-6 mx-auto mb-2 text-gold" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'FAQ' : 'Preguntas Frecuentes'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? '35+ questions answered' : '35+ preguntas respondidas'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-2xl mx-auto px-4">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isEn ? 'Ready to Work With Us?' : '¿Listo Para Trabajar Con Nosotros?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? 'Call or text us anytime for fast, reliable locksmith service in Aledo, TX.' : 'Llame o envíe un mensaje en cualquier momento para servicio rápido y confiable en Aledo, TX.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-6 py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg min-h-[56px]">
              <Phone className="w-5 h-5" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-bold border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
