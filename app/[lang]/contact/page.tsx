import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, MapPin, Clock, Shield, CheckCircle, Wrench, Star } from 'lucide-react'
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
      ? 'Contact Aledo Locksmith | Call, Text, or Request Service Online'
      : 'Contactar Aledo Locksmith | Llame, Envíe Mensaje o Solicite Servicio',
    description: isEn
      ? 'Contact Aledo Locksmith for fast automotive locksmith service in Aledo, TX. Call (817) 634-5045, text (817) 586-9634, or submit a request online. 24/7 availability, 20-30 min response. Bilingual service.'
      : 'Contacte a Aledo Locksmith para servicio rápido en Aledo, TX. Llame al (817) 634-5045, mensaje al (817) 586-9634, o solicite en línea. Disponible 24/7, respuesta en 20-30 min. Servicio bilingüe.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'contact' : 'contacto'}`,
      languages: { en: `${baseUrl}/en/contact`, es: `${baseUrl}/es/contacto`, 'x-default': `${baseUrl}/en/contact` },
    },
    openGraph: {
      title: isEn ? 'Contact Aledo Locksmith' : 'Contactar Aledo Locksmith',
      description: isEn
        ? 'Call (817) 634-5045 or text (817) 586-9634 for fast mobile locksmith service in Aledo, TX.'
        : 'Llame al (817) 634-5045 o mensaje al (817) 586-9634 para servicio móvil rápido en Aledo, TX.',
      url: `${baseUrl}/${params.lang}/${isEn ? 'contact' : 'contacto'}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isEn ? 'Contact Aledo Locksmith' : 'Contactar Aledo Locksmith',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.contact-methods'],
    },
    url: `${baseUrl}/${lang}/${isEn ? 'contact' : 'contacto'}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Contact' : 'Contacto' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20 overflow-hidden">
        <Image
          src="/images/locksmith-delivering-car-keys-customer-aledo-tx.png"
          alt={isEn ? 'Locksmith delivering car keys to happy customer in Aledo TX' : 'Cerrajero entregando llaves de auto a cliente satisfecho en Aledo TX'}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-5" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{isEn ? 'Contact' : 'Contacto'}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.contact.h1}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">
                {isEn ? 'Contact Information' : 'Información de Contacto'}
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-dark-gray mb-2">{dict.contact.callUs}</h3>
                  <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-3 bg-accent/10 text-accent px-4 py-4 rounded-xl font-bold text-lg hover:bg-accent/20 transition-colors min-h-[56px]">
                    <Phone className="w-6 h-6" /> {CALL_DISPLAY}
                  </a>
                  <p className="text-gray-500 text-xs mt-1.5 ml-1">
                    {isEn ? 'Best for emergencies — a real person answers 24/7' : 'Mejor para emergencias — una persona real contesta 24/7'}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-dark-gray mb-2">{dict.contact.textUs}</h3>
                  <a href={`sms:${TEXT_NUMBER}`} className="flex items-center gap-3 bg-secondary/10 text-secondary px-4 py-4 rounded-xl font-bold text-lg hover:bg-secondary/20 transition-colors min-h-[56px]">
                    <MessageSquare className="w-6 h-6" /> {TEXT_DISPLAY}
                  </a>
                  <p className="text-gray-500 text-xs mt-1.5 ml-1">
                    {isEn ? 'Great for quotes — include your vehicle make, model & year' : 'Ideal para cotizaciones — incluya marca, modelo y año de su vehículo'}
                  </p>
                </div>

                <div className="bg-light-gray rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-gray">{dict.contact.location}</p>
                      <p className="text-sm text-gray-600">{dict.contact.servingArea}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <p className="font-semibold text-dark-gray">{dict.contact.available}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-secondary shrink-0" />
                    <p className="font-semibold text-dark-gray">{isEn ? 'Licensed & Insured' : 'Licenciado y Asegurado'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-light-gray rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-dark-gray mb-2">{dict.form.title}</h2>
                <p className="text-gray-600 mb-6">{dict.form.subtitle}</p>
                <ContactForm lang={lang} dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'What to Expect When You Contact Us' : 'Qué Esperar Cuando Nos Contacta'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(isEn
              ? [
                  { step: '1', title: 'Tell Us What You Need', desc: 'When you call, text, or submit the form, let us know your vehicle make, model, and year, plus a brief description of the issue — locked out, lost key, broken key in ignition, fob not working, etc. This helps us prepare the right tools and parts before we arrive.' },
                  { step: '2', title: 'Get an Upfront Quote', desc: 'Based on the information you provide, we give you a clear, fixed price quote before dispatching a technician. The price we quote is the price you pay — no hidden trip charges, no surprise add-ons, no bait-and-switch. You approve the quote before any work begins.' },
                  { step: '3', title: 'We Come to You — Fast', desc: 'Once you approve the quote, we dispatch a mobile technician to your exact location. Our average arrival time is 20 to 30 minutes in the Aledo area. The technician performs all work on-site, tests everything, and makes sure you are satisfied before leaving.' },
                ]
              : [
                  { step: '1', title: 'Díganos Qué Necesita', desc: 'Cuando llame, envíe mensaje o complete el formulario, indíquenos la marca, modelo y año de su vehículo, más una breve descripción del problema — encerrado, llave perdida, llave rota en ignición, control no funciona, etc. Esto nos ayuda a preparar las herramientas correctas.' },
                  { step: '2', title: 'Reciba una Cotización Clara', desc: 'Basado en la información que proporciona, le damos un precio fijo y claro antes de despachar un técnico. El precio que cotizamos es el precio que paga — sin cargos de viaje ocultos, sin sorpresas, sin tácticas engañosas. Usted aprueba la cotización antes de que comience el trabajo.' },
                  { step: '3', title: 'Vamos a Usted — Rápido', desc: 'Una vez que aprueba la cotización, despachamos un técnico móvil a su ubicación exacta. Nuestro tiempo promedio de llegada es de 20 a 30 minutos en el área de Aledo. El técnico realiza todo el trabajo en el lugar, prueba todo y se asegura de que esté satisfecho.' },
                ]
            ).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark-gray mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            {isEn ? 'Three Ways to Reach Aledo Locksmith' : 'Tres Formas de Contactar a Aledo Locksmith'}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {isEn
                ? 'We make it easy to get in touch with us however you prefer. If you are in an emergency — locked out of your car, stranded with a broken key, or need immediate help — calling is the fastest option. A real member of our team answers the phone 24 hours a day, 7 days a week, including weekends and holidays. We never use an answering service or voicemail for emergency calls. When you call (817) 634-5045, you speak directly to someone who can help you and dispatch a technician to your location immediately.'
                : 'Hacemos fácil contactarnos de la forma que prefiera. Si está en una emergencia — encerrado fuera de su auto, varado con una llave rota, o necesita ayuda inmediata — llamar es la opción más rápida. Un miembro real de nuestro equipo contesta el teléfono las 24 horas del día, los 7 días de la semana, incluyendo fines de semana y festivos. Nunca usamos servicio de contestadora o buzón de voz para llamadas de emergencia. Cuando llama al (817) 634-5045, habla directamente con alguien que puede ayudarle.'}
            </p>
            <p>
              {isEn
                ? 'For non-emergency situations — like scheduling a spare key, getting a quote for a fob replacement, or asking about our services — texting is a great option. Send a text to (817) 586-9634 with your vehicle year, make, and model, plus what you need, and we will respond with a quote typically within minutes. Texting is also helpful if you are at work or in a situation where you cannot take a phone call.'
                : 'Para situaciones no emergentes — como programar una llave de repuesto, obtener una cotización para un reemplazo de control, o preguntar sobre nuestros servicios — enviar un mensaje de texto es una gran opción. Envíe un texto al (817) 586-9634 con el año, marca y modelo de su vehículo, más lo que necesita, y responderemos con una cotización generalmente en minutos.'}
            </p>
            <p>
              {isEn
                ? 'You can also use the request form on this page to send us a detailed message. Include your name, phone number, vehicle information, and a description of the service you need. We check form submissions frequently and will follow up by phone or text with a quote and availability. The form is ideal when you want to provide detailed information about your situation — for example, if you need an ECU programmed, a module replaced, or a European vehicle specialty service.'
                : 'También puede usar el formulario de solicitud en esta página para enviarnos un mensaje detallado. Incluya su nombre, número de teléfono, información del vehículo y una descripción del servicio que necesita. Revisamos las solicitudes del formulario frecuentemente y daremos seguimiento por teléfono o texto con una cotización y disponibilidad. El formulario es ideal cuando quiere proporcionar información detallada sobre su situación.'}
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray text-center mb-6">
            {isEn ? 'Explore Our Site' : 'Explore Nuestro Sitio'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href={`${prefix}/${isEn ? 'services' : 'servicios'}`} className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Wrench className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <h3 className="font-bold text-dark-gray text-sm">{isEn ? 'All Services' : 'Todos los Servicios'}</h3>
            </Link>
            <Link href={`${prefix}/${isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'}`} className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
              <h3 className="font-bold text-dark-gray text-sm">{isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca'}</h3>
            </Link>
            <Link href={`${prefix}/${isEn ? 'service-area' : 'area-de-servicio'}`} className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-gold" />
              <h3 className="font-bold text-dark-gray text-sm">{isEn ? 'Service Area' : 'Área de Servicio'}</h3>
            </Link>
            <Link href={`${prefix}/${isEn ? 'faq' : 'preguntas-frecuentes'}`} className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Star className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <h3 className="font-bold text-dark-gray text-sm">{isEn ? 'FAQ' : 'Preguntas Frecuentes'}</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isEn ? 'Need a Locksmith Right Now?' : '¿Necesita un Cerrajero Ahora Mismo?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? 'We answer 24/7. Call for immediate dispatch or text for a quick quote.' : 'Contestamos 24/7. Llame para despacho inmediato o envíe mensaje para cotización rápida.'}
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
