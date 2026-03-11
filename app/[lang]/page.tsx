import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageSquare, Shield, Clock, DollarSign, MapPin, Star, CheckCircle, Zap, Users } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = dictionaries[params.lang]
  const altLang = params.lang === 'en' ? 'es' : 'en'
  return {
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: { en: `${baseUrl}/en`, es: `${baseUrl}/es`, 'x-default': `${baseUrl}/en` },
    },
  }
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const prefix = `/${lang}`
  const svcBase = lang === 'en' ? 'services' : 'servicios'

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${baseUrl}/#organization`,
    name: 'Aledo Locksmith',
    alternateName: 'Aledo Locksmith Services',
    url: baseUrl,
    logo: `${baseUrl}/images/new-car-keys-replacement-aledo-tx.png`,
    image: [`${baseUrl}/images/car-lockout-service-aledo-tx.png`, `${baseUrl}/images/mobile-locksmith-service-van-aledo-tx.png`, `${baseUrl}/images/key-fob-programming-service-aledo-tx.png`],
    telephone: CALL_NUMBER,
    email: 'contact@aledolocksmith.net',
    description: dict.meta.defaultDescription,
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 },
    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 }, geoRadius: '16093' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'en' ? 'Locksmith Services' : 'Servicios de Cerrajería',
      itemListElement: services.slice(0, 5).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: lang === 'en' ? s.name : s.nameEs,
          description: lang === 'en' ? s.shortDesc : s.shortDescEs,
        },
      })),
    },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const iconMap: Record<string, React.ReactNode> = {
    Siren: <Zap className="w-7 h-7" />,
    Car: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25L6 6.75h12l2.625 7.5" /></svg>,
    KeyRound: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>,
    Lock: <Shield className="w-7 h-7" />,
    Drill: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.192-.14 1.743" /></svg>,
    Wrench: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/car-lockout-service-aledo-tx.png"
          alt={lang === 'en' ? 'Automotive locksmith unlocking car door in Aledo TX' : 'Cerrajero automotriz abriendo puerta de auto en Aledo TX'}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-balance">{dict.hero.h1}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{dict.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl min-h-[56px] pulse-cta">
              <Phone className="w-5 h-5" /> {dict.hero.callNow}: {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-7 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {dict.hero.textUs}
            </a>
            <a href="#request-service" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-4 rounded-xl font-bold text-lg transition-all border border-white/20 min-h-[56px]">
              {dict.hero.getQuote}
            </a>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-light-gray border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm md:text-base font-medium text-dark-gray">
            <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> {dict.trustBar.licensed}</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /> {dict.trustBar.insured}</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-secondary" /> {dict.trustBar.fastResponse}</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-gold" /> {dict.trustBar.upfrontPricing}</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3">{dict.services.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dict.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
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
                <h3 className="text-lg font-bold text-dark-gray mb-2 group-hover:text-secondary transition-colors">
                  {lang === 'en' ? service.name : service.nameEs}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{lang === 'en' ? service.shortDesc : service.shortDescEs}</p>
                <span className="text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {dict.services.learnMore} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${prefix}/${svcBase}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-md">
              {dict.services.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-10">{dict.whyUs.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.whyUs.items.map((item, i) => {
              const icons = [<Shield key={0} className="w-7 h-7" />, <Zap key={1} className="w-7 h-7" />, <DollarSign key={2} className="w-7 h-7" />, <Clock key={3} className="w-7 h-7" />, <MapPin key={4} className="w-7 h-7" />, <Users key={5} className="w-7 h-7" />]
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">{icons[i]}</div>
                  <h3 className="text-lg font-bold text-dark-gray mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-10">{dict.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark-gray mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">{dict.serviceArea.title}</h2>
          <p className="text-gray-600 text-lg mb-4">{dict.serviceArea.subtitle}</p>
          <p className="text-gray-500 mb-6">{dict.serviceArea.nearby}</p>
          <p className="text-gray-700 font-medium mb-6">{dict.serviceArea.cta}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-accent/90 min-h-[48px]">
              <Phone className="w-4 h-4" /> {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-secondary/90 min-h-[48px]">
              <MessageSquare className="w-4 h-4" /> {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-10">{dict.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dict.testimonials.items.map((review, i) => (
              <div key={i} className="bg-light-gray rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold text-dark-gray">{review.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">{dict.testimonials.disclaimer}</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title={dict.faq.title} items={dict.faq.items} />

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold mb-1">24/7</div><div className="text-gray-200 text-sm">{lang === 'en' ? 'Emergency Service' : 'Servicio de Emergencia'}</div></div>
            <div><div className="text-4xl font-bold mb-1">20min</div><div className="text-gray-200 text-sm">{lang === 'en' ? 'Avg. Response' : 'Respuesta Prom.'}</div></div>
            <div><div className="text-4xl font-bold mb-1">All</div><div className="text-gray-200 text-sm">{lang === 'en' ? 'Makes & Models' : 'Marcas y Modelos'}</div></div>
            <div><div className="text-4xl font-bold mb-1">0</div><div className="text-gray-200 text-sm">{lang === 'en' ? 'Tows Needed' : 'Grúas Necesarias'}</div></div>
          </div>
        </div>
      </section>

      {/* Request Service Form */}
      <section id="request-service" className="py-16 bg-light-gray">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-3">{dict.form.title}</h2>
            <p className="text-gray-600 text-lg">{dict.form.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
            <ContactForm lang={lang} dict={dict} compact />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{lang === 'en' ? 'Need a Car Locksmith in Aledo?' : '¿Necesita un Cerrajero de Auto en Aledo?'}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {lang === 'en' ? 'Locked out? Lost your key? Need a fob programmed? We\'re available 24/7 and come to you.' : '¿Encerrado? ¿Perdió su llave? ¿Necesita programar un control? Estamos disponibles 24/7 y vamos a donde usted esté.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-gray-100 shadow-lg min-h-[56px]">
              <Phone className="w-5 h-5" /> {dict.hero.callNow}: {CALL_DISPLAY}
            </a>
            <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30 min-h-[56px]">
              <MessageSquare className="w-5 h-5" /> {dict.hero.textUs}: {TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
