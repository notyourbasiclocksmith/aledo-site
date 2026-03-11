import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageSquare, MapPin, HelpCircle } from 'lucide-react'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  const enPath = '/en/faq'
  const esPath = '/es/preguntas-frecuentes'

  return {
    title: isEn
      ? 'FAQ | Automotive Locksmith Questions Answered | Aledo, TX'
      : 'Preguntas Frecuentes | Cerrajero Automotriz | Aledo, TX',
    description: isEn
      ? 'Frequently asked questions about automotive locksmith services in Aledo, TX. Car lockouts, key replacement, fob programming, ECU services, pricing, response times, and more. Call (817) 634-5045.'
      : 'Preguntas frecuentes sobre servicios de cerrajería automotriz en Aledo, TX. Aperturas, llaves, programación, ECU, precios, tiempos de respuesta y más. Llame al (817) 634-5045.',
    alternates: {
      canonical: `${baseUrl}${isEn ? enPath : esPath}`,
      languages: { en: `${baseUrl}${enPath}`, es: `${baseUrl}${esPath}`, 'x-default': `${baseUrl}${enPath}` },
    },
    openGraph: {
      title: isEn ? 'FAQ — Aledo Locksmith' : 'Preguntas Frecuentes — Cerrajero Aledo',
      description: isEn
        ? 'Get answers to common automotive locksmith questions. Aledo, TX.'
        : 'Respuestas a preguntas comunes de cerrajería automotriz. Aledo, TX.',
      url: `${baseUrl}${isEn ? enPath : esPath}`,
      siteName: 'Aledo Locksmith',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  }
}

interface FaqCategory {
  title: string
  faqs: { q: string; a: string }[]
}

function getFaqCategories(isEn: boolean): FaqCategory[] {
  if (isEn) {
    return [
      {
        title: 'General Questions',
        faqs: [
          { q: 'What is Aledo Locksmith?', a: 'Aledo Locksmith is a professional mobile automotive locksmith service based in Aledo, Texas. We specialize in car lockouts, key replacement, key fob programming, transponder key programming, ignition repair, ECU programming, and advanced automotive electronics services. We are licensed, insured, and available 24/7.' },
          { q: 'What areas does Aledo Locksmith serve?', a: 'We serve Aledo, TX and all communities within a 10-mile radius, including Willow Park, Annetta, Annetta North, Annetta South, Hudson Oaks, Walsh, and parts of Weatherford and western Fort Worth. Our primary ZIP codes are 76008, 76087, and 76086.' },
          { q: 'What are your hours of operation?', a: 'We are available 24 hours a day, 7 days a week, 365 days a year — including all holidays. Emergency automotive locksmith service is always available.' },
          { q: 'Do you speak Spanish?', a: 'Yes. Our team is fully bilingual in English and Spanish. Nuestro equipo es completamente bilingüe. Our entire website is also available in Spanish.' },
          { q: 'Are you licensed and insured?', a: 'Yes. Aledo Locksmith is a fully licensed and insured automotive locksmith business operating in the state of Texas.' },
        ],
      },
      {
        title: 'Service & Response Times',
        faqs: [
          { q: 'How fast can you get to my location?', a: 'Our average response time is 20 to 30 minutes for locations within the Aledo, TX area. Actual times may vary based on your exact location and current demand, but we prioritize fast dispatch.' },
          { q: 'Do I need to tow my car to a shop or dealer?', a: 'No. We are a fully mobile locksmith service. Our technician drives to your location — home, work, parking lot, roadside, or anywhere within our service area — with all necessary tools and equipment. No towing is required for any of our services.' },
          { q: 'What vehicles do you work on?', a: 'We work on all makes and models, including Ford, Chevrolet, Toyota, Honda, Nissan, Hyundai, Kia, BMW, Mercedes-Benz, Audi, Volkswagen, Dodge, Chrysler, Jeep, Ram, Subaru, Lexus, Infiniti, Acura, GMC, Buick, Cadillac, Pontiac, Saab, and more. Both domestic and import vehicles are supported.' },
          { q: 'Can you help if I lost all my car keys?', a: 'Yes. We specialize in all-keys-lost situations. Using your vehicle\'s VIN and our professional key cutting and programming equipment, we can create brand-new keys from scratch — including standard keys, transponder keys, smart keys, and key fobs. No original key or dealer visit is needed.' },
        ],
      },
      {
        title: 'Pricing & Payment',
        faqs: [
          { q: 'How much does a car locksmith cost in Aledo, TX?', a: 'Pricing varies depending on the specific service and your vehicle\'s make, model, and year. Simple car lockouts are typically the lowest cost, while advanced key programming, ECU services, and European vehicle specialty work may cost more due to equipment and time required. We always provide a clear, upfront quote before starting any work — no hidden fees, no bait-and-switch, and no surprise charges.' },
          { q: 'Do you charge extra for after-hours or weekend service?', a: 'Our pricing is transparent and we do not add hidden surcharges. Contact us for a quote at any time — day, night, weekday, or weekend.' },
          { q: 'What payment methods do you accept?', a: 'We accept cash, all major credit cards, and debit cards.' },
          { q: 'Do you offer free estimates?', a: 'Yes. Call or text us with your vehicle\'s make, model, year, and the service you need, and we\'ll provide a free estimate before dispatching.' },
        ],
      },
      {
        title: 'Car Lockouts & Keys',
        faqs: [
          { q: 'What should I do if I\'m locked out of my car?', a: 'Call Aledo Locksmith at (817) 634-5045 or text (817) 586-9634. Stay with your vehicle in a safe location. Our mobile technician will arrive within 20-30 minutes and use professional non-damaging tools to unlock your car. We handle all vehicle makes and models.' },
          { q: 'Will you damage my car when unlocking it?', a: 'No. We use professional, non-damaging lockout tools specifically designed for vehicle entry. Your car\'s locks, doors, windows, and paint will not be damaged.' },
          { q: 'Can you make a car key on-site?', a: 'Yes. We cut and program car keys at your location using our fully equipped mobile unit. This includes standard metal keys, transponder chip keys, smart proximity keys, and key fobs.' },
          { q: 'Can you extract a broken key from my ignition or door?', a: 'Yes. We safely extract broken key fragments from ignition cylinders and door locks using specialized extraction tools, then cut a new key on-site.' },
          { q: 'How much cheaper are you compared to a car dealer?', a: 'Our pricing is typically 30% to 50% less than dealership pricing for the same key replacement and programming services, with the added convenience of mobile service at your location. No towing costs, no waiting days for parts, and no dealer markup.' },
        ],
      },
      {
        title: 'Key Fob & Smart Key Programming',
        faqs: [
          { q: 'Can you program key fobs and remotes?', a: 'Yes. We program all types of key fobs, remote keyless entry transmitters, smart proximity keys, and push-to-start fobs for all major vehicle brands. This includes OEM-quality replacement fobs programmed on-site.' },
          { q: 'Can you program a smart key for a push-to-start car?', a: 'Yes. We program proximity smart keys for push-to-start vehicles from all manufacturers, including Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, BMW, Mercedes-Benz, and more.' },
          { q: 'My key fob battery died. Can you help?', a: 'Yes. We replace key fob batteries and reprogram fobs if they have lost their pairing with the vehicle. This is a quick, inexpensive service we perform on-site.' },
        ],
      },
      {
        title: 'Advanced Programming & ECU Services',
        faqs: [
          { q: 'What is ECU programming?', a: 'ECU (Engine Control Unit) programming involves writing software, VIN data, and configuration parameters to your vehicle\'s engine computer. This is required when replacing a failed ECU, installing a used ECU from another vehicle, updating factory software, or clearing persistent diagnostic codes. We use dealer-level J2534 pass-through tools and OEM manufacturer software.' },
          { q: 'Can you program control modules (ECM, TCM, BCM)?', a: 'Yes. We program Engine Control Modules (ECM), Transmission Control Modules (TCM), Body Control Modules (BCM), and ABS modules for all vehicle makes and models. This includes VIN writing, parameter configuration, key learning, and module initialization.' },
          { q: 'Do you offer airbag module reset?', a: 'Yes. After a collision, your vehicle\'s airbag control module stores crash data that keeps the SRS warning light on. We reset the module by clearing crash data and fault codes, restoring it to factory condition — saving $500 to $1,500+ compared to dealer module replacement.' },
          { q: 'What is IMMO OFF for VW/Audi?', a: 'IMMO OFF is a service that disables the immobilizer function in a Volkswagen or Audi ECU. This allows the ECU to start the engine without requiring a paired transponder key. It is used for ECU swaps, engine transplants, race builds, and situations where all keys are lost and a new ECU is installed.' },
          { q: 'Can you tune my vehicle for more horsepower?', a: 'Yes. We offer professional ECU remapping and performance tuning that adjusts fuel maps, ignition timing, boost pressure, and other parameters for gains in horsepower, torque, and throttle response. Custom tunes are available for gas, diesel, and turbocharged vehicles.' },
        ],
      },
      {
        title: 'European & Specialty Vehicles',
        faqs: [
          { q: 'Can you fix a Mercedes ELV steering lock?', a: 'Yes. The Electronic Steering Lock (ELV) is a common failure on Mercedes-Benz W204 C-Class, W207 E-Class Coupe, and W212 E-Class models. We repair and replace ELV modules on-site and offer ELV emulator installation as a permanent bypass solution.' },
          { q: 'Do you repair BMW FRM modules?', a: 'Yes. We repair BMW Footwell Module (FRM/FRM3) circuit boards, replace failed components, and reprogram the module to your vehicle using BMW ISTA diagnostic software. This fixes headlight, tail light, turn signal, power window, and central locking malfunctions.' },
          { q: 'Can you bypass a GM VATS anti-theft system?', a: 'Yes. We professionally bypass and disable GM VATS (Vehicle Anti-Theft System) and PassKey systems that cause intermittent no-start conditions. This is a permanent, clean solution for Chevrolet, Pontiac, Buick, Cadillac, and Oldsmobile vehicles.' },
          { q: 'Do you work on Dodge/Chrysler WIN modules?', a: 'Yes. We replace and program WIN (Wireless Ignition Node) modules and program FOBIK keys for Dodge, Chrysler, Jeep, and Ram vehicles. We also provide VIN swap and module programming services using wiTECH-level tools.' },
        ],
      },
    ]
  }

  return [
    {
      title: 'Preguntas Generales',
      faqs: [
        { q: '¿Qué es Aledo Locksmith?', a: 'Aledo Locksmith es un servicio profesional de cerrajería automotriz móvil basado en Aledo, Texas. Nos especializamos en aperturas de auto, reemplazo de llaves, programación de controles remotos, programación de llaves transponder, reparación de ignición, programación de ECU y servicios avanzados de electrónica automotriz. Somos licenciados, asegurados y estamos disponibles 24/7.' },
        { q: '¿Qué áreas cubre Aledo Locksmith?', a: 'Servimos Aledo, TX y todas las comunidades dentro de un radio de 10 millas, incluyendo Willow Park, Annetta, Annetta North, Annetta South, Hudson Oaks, Walsh y partes de Weatherford y el oeste de Fort Worth. Nuestros códigos postales principales son 76008, 76087 y 76086.' },
        { q: '¿Cuál es su horario de atención?', a: 'Estamos disponibles las 24 horas del día, los 7 días de la semana, los 365 días del año — incluyendo todos los días festivos. El servicio de cerrajería automotriz de emergencia siempre está disponible.' },
        { q: '¿Hablan español?', a: '¡Sí! Nuestro equipo es completamente bilingüe en inglés y español. Todo nuestro sitio web también está disponible en español.' },
        { q: '¿Están licenciados y asegurados?', a: 'Sí. Aledo Locksmith es un negocio de cerrajería automotriz completamente licenciado y asegurado operando en el estado de Texas.' },
      ],
    },
    {
      title: 'Servicio y Tiempos de Respuesta',
      faqs: [
        { q: '¿Qué tan rápido pueden llegar a mi ubicación?', a: 'Nuestro tiempo promedio de respuesta es de 20 a 30 minutos para ubicaciones dentro del área de Aledo, TX. Los tiempos reales pueden variar, pero priorizamos el despacho rápido.' },
        { q: '¿Necesito remolcar mi auto a un taller o concesionario?', a: 'No. Somos un servicio de cerrajería completamente móvil. Nuestro técnico va a su ubicación — casa, trabajo, estacionamiento, carretera o cualquier lugar dentro de nuestra área de servicio — con todas las herramientas y equipo necesarios.' },
        { q: '¿Con qué vehículos trabajan?', a: 'Trabajamos con todas las marcas y modelos, incluyendo Ford, Chevrolet, Toyota, Honda, Nissan, Hyundai, Kia, BMW, Mercedes-Benz, Audi, Volkswagen, Dodge, Chrysler, Jeep, Ram, Subaru, Lexus, Infiniti, Acura, GMC, Buick, Cadillac, Pontiac, Saab y más.' },
        { q: '¿Pueden ayudar si perdí todas mis llaves del auto?', a: 'Sí. Nos especializamos en situaciones donde se perdieron todas las llaves. Usando el VIN de su vehículo y nuestro equipo profesional, podemos crear llaves nuevas desde cero — incluyendo llaves estándar, transponder, inteligentes y controles remotos.' },
      ],
    },
    {
      title: 'Precios y Pago',
      faqs: [
        { q: '¿Cuánto cuesta un cerrajero de auto en Aledo, TX?', a: 'El precio varía según el servicio específico y la marca, modelo y año de su vehículo. Las aperturas de auto simples son generalmente el costo más bajo, mientras que la programación avanzada de llaves y servicios de ECU pueden costar más. Siempre proporcionamos una cotización clara y por adelantado antes de comenzar cualquier trabajo — sin cargos ocultos ni sorpresas.' },
        { q: '¿Cobran extra por servicio nocturno o en fin de semana?', a: 'Nuestros precios son transparentes y no agregamos recargos ocultos. Contáctenos para una cotización en cualquier momento.' },
        { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos efectivo, todas las tarjetas de crédito principales y tarjetas de débito.' },
        { q: '¿Ofrecen estimados gratis?', a: 'Sí. Llame o envíe un mensaje con la marca, modelo, año de su vehículo y el servicio que necesita, y le proporcionaremos un estimado gratis.' },
      ],
    },
    {
      title: 'Aperturas y Llaves de Auto',
      faqs: [
        { q: '¿Qué debo hacer si me quedé encerrado fuera de mi auto?', a: 'Llame a Aledo Locksmith al (817) 634-5045 o envíe un mensaje al (817) 586-9634. Quédese con su vehículo en un lugar seguro. Nuestro técnico llegará en 20-30 minutos y usará herramientas profesionales que no dañan su vehículo para abrirlo.' },
        { q: '¿Dañarán mi auto al abrirlo?', a: 'No. Usamos herramientas profesionales de apertura específicamente diseñadas para la entrada de vehículos sin daño. Las cerraduras, puertas, ventanas y pintura de su auto no serán dañadas.' },
        { q: '¿Pueden hacer una llave de auto en el lugar?', a: 'Sí. Cortamos y programamos llaves de auto en su ubicación usando nuestra unidad móvil completamente equipada. Esto incluye llaves metálicas estándar, llaves transponder, llaves inteligentes de proximidad y controles remotos.' },
        { q: '¿Cuánto más económicos son comparados con un concesionario?', a: 'Nuestros precios son típicamente 30% a 50% menos que los precios del concesionario para los mismos servicios de reemplazo y programación de llaves, con la conveniencia adicional del servicio móvil en su ubicación.' },
      ],
    },
    {
      title: 'Programación de Controles y Llaves Inteligentes',
      faqs: [
        { q: '¿Pueden programar controles remotos y llaves inteligentes?', a: 'Sí. Programamos todo tipo de controles remotos, llaves inteligentes de proximidad, llaves de encendido por botón y transmisores de entrada sin llave para todas las marcas principales.' },
        { q: '¿Pueden programar una llave inteligente para un auto de encendido por botón?', a: 'Sí. Programamos llaves inteligentes de proximidad para vehículos con encendido por botón de todos los fabricantes, incluyendo Toyota, Honda, Nissan, Hyundai, Kia, Ford, Chevrolet, BMW, Mercedes-Benz y más.' },
      ],
    },
    {
      title: 'Programación Avanzada y Servicios de ECU',
      faqs: [
        { q: '¿Qué es la programación de ECU?', a: 'La programación de ECU (Unidad de Control del Motor) implica escribir software, datos de VIN y parámetros de configuración en la computadora del motor de su vehículo. Esto se requiere al reemplazar una ECU fallida, instalar una ECU usada, actualizar software de fábrica o limpiar códigos de diagnóstico persistentes. Usamos herramientas J2534 de nivel concesionario y software OEM del fabricante.' },
        { q: '¿Pueden programar módulos de control (ECM, TCM, BCM)?', a: 'Sí. Programamos Módulos de Control del Motor (ECM), Módulos de Control de Transmisión (TCM), Módulos de Control de Carrocería (BCM) y módulos ABS para todas las marcas y modelos.' },
        { q: '¿Ofrecen reseteo de módulo de airbag?', a: 'Sí. Después de una colisión, el módulo de control de airbag almacena datos de choque que mantienen la luz SRS encendida. Reseteamos el módulo limpiando datos de choque y códigos de falla, ahorrando $500 a $1,500+ comparado con el reemplazo del módulo en el concesionario.' },
        { q: '¿Pueden afinar mi vehículo para más potencia?', a: 'Sí. Ofrecemos remapeo profesional de ECU y afinación de rendimiento que ajusta mapas de combustible, tiempo de ignición, presión de turbo y otros parámetros para ganancias en potencia, torque y respuesta del acelerador.' },
      ],
    },
    {
      title: 'Vehículos Europeos y de Especialidad',
      faqs: [
        { q: '¿Pueden reparar una cerradura de dirección ELV de Mercedes?', a: 'Sí. La Cerradura Electrónica de Dirección (ELV) es una falla común en los modelos Mercedes-Benz W204 Clase C, W207 Clase E Coupé y W212 Clase E. Reparamos y reemplazamos módulos ELV en el lugar y ofrecemos instalación de emulador ELV como solución permanente de bypass.' },
        { q: '¿Reparan módulos FRM de BMW?', a: 'Sí. Reparamos circuitos de Módulo de Piso BMW (FRM/FRM3), reemplazamos componentes fallidos y reprogramamos el módulo usando software de diagnóstico BMW ISTA.' },
        { q: '¿Pueden bypasear el sistema antirrobo VATS de GM?', a: 'Sí. Bypaseamos y desactivamos profesionalmente los sistemas VATS y PassKey de GM que causan condiciones de no arranque intermitentes. Esta es una solución permanente para vehículos Chevrolet, Pontiac, Buick, Cadillac y Oldsmobile.' },
        { q: '¿Trabajan con módulos WIN de Dodge/Chrysler?', a: 'Sí. Reemplazamos y programamos módulos WIN (Nodo de Ignición Inalámbrico) y programamos llaves FOBIK para vehículos Dodge, Chrysler, Jeep y Ram. También proporcionamos servicios de cambio de VIN y programación de módulos usando herramientas de nivel wiTECH.' },
      ],
    },
  ]
}

export default function FaqPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const isEn = lang === 'en'
  const prefix = `/${lang}`
  const svcBase = isEn ? 'services' : 'servicios'
  const nearMePath = isEn ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'

  const categories = getFaqCategories(isEn)
  const allFaqs = categories.flatMap((c) => c.faqs)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: isEn ? 'FAQ' : 'Preguntas Frecuentes' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="w-10 h-10 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {isEn
              ? 'Everything you need to know about our automotive locksmith services in Aledo, TX. Can\'t find your answer? Call or text us.'
              : 'Todo lo que necesita saber sobre nuestros servicios de cerrajería automotriz en Aledo, TX. ¿No encuentra su respuesta? Llame o envíe un mensaje.'}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Quick Nav */}
          <nav className="bg-light-gray rounded-2xl p-6 mb-12">
            <h2 className="font-bold text-dark-gray mb-3 text-sm uppercase tracking-wider">{isEn ? 'Jump to Section' : 'Ir a Sección'}</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <a key={i} href={`#section-${i}`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-secondary font-medium hover:bg-secondary hover:text-white transition-colors border border-gray-200">
                  {cat.title}
                </a>
              ))}
            </div>
          </nav>

          {/* FAQ Sections */}
          {categories.map((cat, ci) => (
            <div key={ci} id={`section-${ci}`} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-dark-gray mb-6 pb-3 border-b-2 border-accent/30">{cat.title}</h2>
              <div className="space-y-4">
                {cat.faqs.map((faq, fi) => (
                  <div key={fi} className="bg-light-gray rounded-xl p-6">
                    <h3 className="font-bold text-dark-gray mb-3">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Internal Links */}
          <div className="bg-light-gray rounded-2xl p-6 mt-8">
            <h2 className="font-bold text-dark-gray mb-4">{isEn ? 'Explore More' : 'Explorar Más'}</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link href={`${prefix}/${svcBase}`} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all border border-gray-100 hover:border-secondary/30">
                <h3 className="font-bold text-dark-gray text-sm mb-1">{isEn ? 'All Services' : 'Todos los Servicios'}</h3>
                <p className="text-gray-500 text-xs">{isEn ? '21 automotive locksmith services' : '21 servicios de cerrajería automotriz'}</p>
              </Link>
              <Link href={`${prefix}/${nearMePath}`} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all border border-gray-100 hover:border-secondary/30">
                <h3 className="font-bold text-dark-gray text-sm mb-1">{isEn ? 'Locksmith Near Me' : 'Cerrajero Cerca de Mí'}</h3>
                <p className="text-gray-500 text-xs">{isEn ? 'Fast mobile service in Aledo' : 'Servicio móvil rápido en Aledo'}</p>
              </Link>
              <Link href={`${prefix}/${isEn ? 'contact' : 'contacto'}`} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all border border-gray-100 hover:border-secondary/30">
                <h3 className="font-bold text-dark-gray text-sm mb-1">{isEn ? 'Get a Quote' : 'Obtener Cotización'}</h3>
                <p className="text-gray-500 text-xs">{isEn ? 'Free estimate, no obligation' : 'Estimado gratis, sin compromiso'}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {isEn ? 'Still Have Questions?' : '¿Aún Tiene Preguntas?'}
          </h2>
          <p className="text-white/90 mb-6">
            {isEn ? 'Call or text us — we\'re happy to help.' : 'Llámenos o envíe un mensaje — estamos para ayudarle.'}
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
