import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, MapPin, Clock, Shield, CheckCircle, Wrench, Star, Navigation } from 'lucide-react'
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
      ? 'Service Area | Automotive Locksmith Near Aledo, Willow Park, Annetta, TX'
      : 'Área de Servicio | Cerrajero Automotriz Cerca de Aledo, Willow Park, Annetta, TX',
    description: isEn
      ? 'Aledo Locksmith provides mobile automotive locksmith service within a 10-mile radius of Aledo, TX. Serving Willow Park, Annetta, Hudson Oaks, Walsh & surrounding areas. 20-30 min response. Call (817) 634-5045.'
      : 'Aledo Locksmith ofrece cerrajería automotriz móvil en radio de 10 millas de Aledo, TX. Sirviendo Willow Park, Annetta, Hudson Oaks, Walsh y áreas cercanas. Respuesta 20-30 min. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'service-area' : 'area-de-servicio'}`,
      languages: { en: `${baseUrl}/en/service-area`, es: `${baseUrl}/es/area-de-servicio`, 'x-default': `${baseUrl}/en/service-area` },
    },
    openGraph: {
      title: isEn ? 'Service Area | Aledo Locksmith' : 'Área de Servicio | Aledo Locksmith',
      description: isEn
        ? 'Mobile locksmith service within 10 miles of Aledo, TX. Willow Park, Annetta, Hudson Oaks, Walsh.'
        : 'Servicio móvil de cerrajería dentro de 10 millas de Aledo, TX. Willow Park, Annetta, Hudson Oaks, Walsh.',
      url: `${baseUrl}/${params.lang}/${isEn ? 'service-area' : 'area-de-servicio'}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

const nearbyAreas = [
  { name: 'Aledo', zip: '76008', descEn: 'Our home base. Fastest response times for all of Aledo proper, including the Aledo ISD area, downtown, and all residential neighborhoods.', descEs: 'Nuestra base. Los tiempos de respuesta más rápidos para todo Aledo, incluyendo el área de Aledo ISD, centro y todos los vecindarios residenciales.' },
  { name: 'Willow Park', zip: '76087', descEn: 'Immediately adjacent to Aledo along I-20. We serve all of Willow Park including Crown Pointe, Trinity Meadows, and the FM 5 corridor.', descEs: 'Inmediatamente adyacente a Aledo a lo largo de la I-20. Servimos todo Willow Park incluyendo Crown Pointe, Trinity Meadows y el corredor FM 5.' },
  { name: 'Annetta', zip: '76008', descEn: 'The Annetta communities — Annetta, Annetta North, and Annetta South — are fully within our service radius. Fast response throughout the area.', descEs: 'Las comunidades de Annetta — Annetta, Annetta North y Annetta South — están completamente dentro de nuestro radio de servicio.' },
  { name: 'Hudson Oaks', zip: '76087', descEn: 'Located just west along I-20, Hudson Oaks is a quick drive from our base. We serve all residential and commercial areas including the retail corridor.', descEs: 'Ubicado justo al oeste por la I-20, Hudson Oaks está a un corto viaje desde nuestra base. Servimos todas las áreas residenciales y comerciales.' },
  { name: 'Walsh', zip: '76008', descEn: 'The fast-growing Walsh community is one of our most-served neighborhoods. We handle car lockouts, key replacements, and all services for Walsh residents.', descEs: 'La comunidad de rápido crecimiento de Walsh es uno de nuestros vecindarios más atendidos. Manejamos aperturas, reemplazos de llaves y todos los servicios para residentes de Walsh.' },
  { name: 'Weatherford', zip: '76086', descEn: 'We serve the eastern portions of Weatherford that fall within our 10-mile radius, including areas near the I-20/US-180 interchange.', descEs: 'Servimos las porciones orientales de Weatherford que caen dentro de nuestro radio de 10 millas, incluyendo áreas cerca del intercambio I-20/US-180.' },
  { name: 'Fort Worth (West)', zip: '76126', descEn: 'The western edge of Fort Worth — including areas near Walsh Ranch, Benbrook Lake, and the I-20/I-30 split — falls within our coverage area.', descEs: 'El borde occidental de Fort Worth — incluyendo áreas cerca de Walsh Ranch, Benbrook Lake y la división I-20/I-30 — cae dentro de nuestra área de cobertura.' },
]

export default function ServiceAreaPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Service Area' : 'Área de Servicio' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-20 overflow-hidden">
        <Image
          src="/images/mobile-automotive-locksmith-van-neighborhood-aledo-tx.png"
          alt={isEn ? 'Mobile automotive locksmith van serving neighborhoods in Aledo TX' : 'Van móvil de cerrajero automotriz sirviendo vecindarios en Aledo TX'}
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-5" aria-label="Breadcrumb">
            <Link href={prefix} className="hover:text-white transition-colors">{isEn ? 'Home' : 'Inicio'}</Link>
            <span>/</span>
            <span className="text-white font-medium">{isEn ? 'Service Area' : 'Área de Servicio'}</span>
          </nav>
          <MapPin className="w-10 h-10 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.serviceArea.title}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.serviceArea.subtitle}</p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            {isEn ? 'Mobile Automotive Locksmith — 10-Mile Radius Around Aledo, TX' : 'Cerrajero Automotriz Móvil — Radio de 10 Millas Alrededor de Aledo, TX'}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {isEn
                ? 'Aledo Locksmith provides on-site mobile automotive locksmith services throughout Aledo, TX and every community within an approximate 10-mile radius. Our fully equipped service vehicle carries professional key cutting machines, transponder and fob programming equipment, J2534 pass-through devices, and OEM software for all major vehicle manufacturers. This means we can perform any of our 21 automotive locksmith services at your exact location — whether that is your driveway, a grocery store parking lot, the roadside, your office, or an apartment complex. No towing required, ever.'
                : 'Aledo Locksmith proporciona servicios móviles de cerrajería automotriz en el lugar en todo Aledo, TX y toda comunidad dentro de un radio aproximado de 10 millas. Nuestro vehículo de servicio completamente equipado lleva máquinas profesionales de corte de llaves, equipo de programación de transponder y controles, dispositivos J2534 y software OEM para todos los fabricantes principales. Esto significa que podemos realizar cualquiera de nuestros 21 servicios en su ubicación exacta — ya sea su cochera, estacionamiento de supermercado, carretera, oficina o complejo de apartamentos.'}
            </p>
            <p>
              {isEn
                ? 'Our service area is centered on Aledo, TX (ZIP code 76008) and extends outward to cover Willow Park, Annetta, Annetta North, Annetta South, Hudson Oaks, Walsh, the eastern edge of Weatherford, and the western edge of Fort Worth. We cover ZIP codes 76008, 76087, 76086, and portions of 76126. If you are unsure whether your location falls within our coverage, just give us a call at (817) 634-5045 — we are happy to let you know. For locations slightly outside our standard radius, we may still be able to help depending on availability.'
                : 'Nuestra área de servicio está centrada en Aledo, TX (código postal 76008) y se extiende para cubrir Willow Park, Annetta, Annetta North, Annetta South, Hudson Oaks, Walsh, el borde oriental de Weatherford y el borde occidental de Fort Worth. Cubrimos los códigos postales 76008, 76087, 76086 y porciones de 76126. Si no está seguro si su ubicación cae dentro de nuestra cobertura, llámenos al (817) 634-5045 — con gusto se lo confirmamos.'}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <Navigation className="w-5 h-5" />, value: '10mi', label: isEn ? 'Coverage Radius' : 'Radio de Cobertura' },
              { icon: <Clock className="w-5 h-5" />, value: '20-30', label: isEn ? 'Min Response Time' : 'Min Tiempo Respuesta' },
              { icon: <MapPin className="w-5 h-5" />, value: '7+', label: isEn ? 'Communities Served' : 'Comunidades Servidas' },
              { icon: <Shield className="w-5 h-5" />, value: '24/7', label: isEn ? 'Availability' : 'Disponibilidad' },
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

      {/* Detailed Area Cards */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-8">
            {isEn ? 'Communities We Serve' : 'Comunidades que Servimos'}
          </h2>
          <div className="space-y-4">
            {nearbyAreas.map((area) => (
              <div key={area.name} className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-bold text-dark-gray text-lg">{area.name}, TX</h3>
                      <span className="text-xs bg-light-gray text-gray-500 px-2 py-0.5 rounded-full">{area.zip}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{isEn ? area.descEn : area.descEs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 mt-6 border border-gray-100">
            <p className="text-gray-600 text-sm text-center">
              {isEn
                ? 'ZIP codes served: 76008, 76087, 76086, 76126 (partial). Not sure if we cover your area? Call (817) 634-5045 and we\'ll let you know!'
                : 'Códigos postales: 76008, 76087, 76086, 76126 (parcial). ¿No está seguro si cubrimos su área? ¡Llame al (817) 634-5045 y se lo confirmamos!'}
            </p>
          </div>
        </div>
      </section>

      {/* Services in Our Area */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray text-center mb-3">
            {isEn ? 'All 21 Services Available in Your Area' : 'Los 21 Servicios Disponibles en Su Área'}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {isEn
              ? 'Every service is performed on-site at your location by a licensed, insured technician with dealer-level equipment.'
              : 'Cada servicio se realiza en su ubicación por un técnico licenciado y asegurado con equipo de nivel concesionario.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`${prefix}/${svcBase}/${isEn ? svc.slug : svc.slugEs}`}
                className="flex items-center gap-2 bg-light-gray rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-dark-gray font-medium text-sm">{isEn ? svc.name : svc.nameEs}</span>
                <span className="ml-auto text-secondary text-xs">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-14 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            {isEn ? 'Why a Local Locksmith Matters' : 'Por Qué Importa un Cerrajero Local'}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {isEn
                ? 'When you search for a locksmith in Aledo or the surrounding area, many of the results you find online are actually national dispatch services operating out of call centers in other states. They take your call, quote a low price to get you to agree, and then dispatch a subcontractor who may be 30 to 60 minutes away — if they show up at all. When they arrive, the price often doubles or triples from what was quoted on the phone. This is an unfortunately common practice in the locksmith industry, and it is exactly what we set out to fix.'
                : 'Cuando busca un cerrajero en Aledo o el área circundante, muchos de los resultados que encuentra en línea son en realidad servicios nacionales de despacho operando desde centros de llamadas en otros estados. Toman su llamada, cotizan un precio bajo para que acepte, y luego despachan un subcontratista que puede estar a 30 o 60 minutos — si es que llega. Cuando llegan, el precio a menudo se duplica o triplica de lo cotizado por teléfono. Esta es una práctica desafortunadamente común en la industria de cerrajería.'}
            </p>
            <p>
              {isEn
                ? 'Aledo Locksmith is different. We are based right here in the Aledo, TX area. When you call us, you reach our actual team — not a middleman. Our 20 to 30 minute response time is real because we are already nearby, not because we are making optimistic promises from across the metroplex. Our pricing is fixed and quoted upfront before we dispatch, so you know exactly what you will pay before anyone arrives. We are licensed, insured, and invested in this community. Our reputation depends on every single job we do for our neighbors, and that accountability is something a national dispatch service simply cannot provide.'
                : 'Aledo Locksmith es diferente. Estamos basados aquí en el área de Aledo, TX. Cuando nos llama, alcanza a nuestro equipo real — no un intermediario. Nuestro tiempo de respuesta de 20 a 30 minutos es real porque ya estamos cerca, no porque estamos haciendo promesas optimistas desde el otro lado de la metrópolis. Nuestros precios son fijos y cotizados antes de despachar, así que sabe exactamente lo que pagará antes de que llegue alguien. Somos licenciados, asegurados e invertidos en esta comunidad.'}
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href={`${prefix}/${isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'}`} className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-6 text-white text-center hover:shadow-lg transition-all hover:-translate-y-0.5">
              <Navigation className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-bold mb-1">{isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí'}</h3>
              <p className="text-white/80 text-xs">{isEn ? 'Find the closest locksmith' : 'Encuentre el cerrajero más cercano'}</p>
            </Link>
            <Link href={`${prefix}/${svcBase}`} className="bg-light-gray rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Wrench className="w-6 h-6 mx-auto mb-2 text-accent" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'All Services' : 'Todos los Servicios'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? '21 automotive locksmith services' : '21 servicios de cerrajería'}</p>
            </Link>
            <Link href={`${prefix}/${isEn ? 'about' : 'acerca'}`} className="bg-light-gray rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100">
              <Star className="w-6 h-6 mx-auto mb-2 text-gold" />
              <h3 className="font-bold text-dark-gray mb-1">{isEn ? 'About Us' : 'Acerca de Nosotros'}</h3>
              <p className="text-gray-500 text-xs">{isEn ? 'Local, licensed, bilingual' : 'Local, licenciado, bilingüe'}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isEn ? 'Need a Car Locksmith Near Aledo?' : '¿Necesita un Cerrajero de Auto Cerca de Aledo?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? 'Mobile service — we come to you in 20-30 minutes. Call or text us now.' : 'Servicio móvil — vamos a donde usted esté en 20-30 minutos. Llame o envíe un mensaje ahora.'}
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
