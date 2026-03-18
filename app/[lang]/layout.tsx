import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileBar from '@/components/StickyMobileBar'
import { dictionaries } from '@/lib/dictionaries'
import { services } from '@/lib/services'
import { locales, baseUrl, CALL_NUMBER, RECAPTCHA_SITE_KEY, type Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = dictionaries[params.lang]
  return {
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    keywords: [
      params.lang === 'en' ? 'automotive locksmith Aledo' : 'cerrajero automotriz Aledo',
      params.lang === 'en' ? 'car locksmith Aledo TX' : 'cerrajero de autos Aledo TX',
      params.lang === 'en' ? 'car lockout Aledo' : 'apertura de auto Aledo',
      params.lang === 'en' ? 'car key replacement Aledo' : 'reemplazo de llave de auto Aledo',
      params.lang === 'en' ? 'key fob programming Aledo' : 'programación de control remoto Aledo',
      params.lang === 'en' ? 'transponder key Aledo' : 'llave transponder Aledo',
      params.lang === 'en' ? 'ignition repair Aledo TX' : 'reparación de ignición Aledo TX',
      params.lang === 'en' ? '24/7 car locksmith near me' : 'cerrajero de autos 24/7 cerca de mí',
    ],
    authors: [{ name: 'Aledo Locksmith' }],
    creator: 'Aledo Locksmith',
    publisher: 'Aledo Locksmith',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      url: `${baseUrl}/${params.lang}`,
      siteName: dict.meta.siteName,
      locale: params.lang === 'en' ? 'en_US' : 'es_US',
      type: 'website',
      images: [{ url: '/images/og-aledo.jpg', width: 1200, height: 630, alt: 'Aledo Locksmith - Professional Locksmith in Aledo, TX' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      images: ['/images/og-aledo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const lang = locales.includes(params.lang) ? params.lang : 'en'
  const dict = dictionaries[lang]
  const isEn = lang === 'en'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${baseUrl}/#organization`,
    name: 'Aledo Locksmith',
    alternateName: ['Aledo Locksmith Services', 'Cerrajero Aledo'],
    url: baseUrl,
    logo: { '@type': 'ImageObject', url: `${baseUrl}/images/new-car-keys-replacement-aledo-tx.png`, width: 600, height: 600 },
    image: [`${baseUrl}/images/car-lockout-service-aledo-tx.png`, `${baseUrl}/images/mobile-locksmith-service-van-aledo-tx.png`],
    telephone: CALL_NUMBER,
    email: 'contact@aledolocksmith.net',
    description: 'Professional mobile automotive locksmith serving Aledo, TX and surrounding areas within a 10-mile radius. Car lockouts, key replacement, fob programming, ECU services, and more. Licensed, insured, available 24/7. Bilingual English/Spanish.',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', postalCode: '76008', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 },
    areaServed: [
      { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 32.6960, longitude: -97.6023 }, geoRadius: '16093' },
      { '@type': 'City', name: 'Aledo, TX' },
      { '@type': 'City', name: 'Willow Park, TX' },
      { '@type': 'City', name: 'Annetta, TX' },
      { '@type': 'City', name: 'Hudson Oaks, TX' },
      { '@type': 'City', name: 'Walsh, TX' },
      { '@type': 'City', name: 'Weatherford, TX' },
      { '@type': 'City', name: 'Fort Worth, TX' },
    ],
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEn ? 'Automotive Locksmith Services' : 'Servicios de Cerrajería Automotriz',
      itemListElement: services.slice(0, 8).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isEn ? s.name : s.nameEs,
          description: isEn ? s.shortDesc : s.shortDescEs,
          url: `${baseUrl}/${lang}/${isEn ? 'services' : 'servicios'}/${isEn ? s.slug : s.slugEs}`,
        },
      })),
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
    sameAs: [],
    knowsLanguage: ['en', 'es'],
    slogan: isEn ? 'Professional Mobile Automotive Locksmith — We Come to You' : 'Cerrajero Automotriz Móvil Profesional — Vamos a Donde Usted Esté',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Aledo Locksmith',
    alternateName: 'Cerrajero Aledo',
    url: baseUrl,
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: ['en', 'es'],
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${baseUrl}/en/services/` },
      'query-input': 'required name=search_term_string',
    },
  }

  const navItems = isEn
    ? [
        { name: 'Home', url: `${baseUrl}/en` },
        { name: 'Services', url: `${baseUrl}/en/services` },
        { name: 'Locksmith Near Me', url: `${baseUrl}/en/locksmith-near-me` },
        { name: 'Service Area', url: `${baseUrl}/en/service-area` },
        { name: 'About', url: `${baseUrl}/en/about` },
        { name: 'Contact', url: `${baseUrl}/en/contact` },
        { name: 'FAQ', url: `${baseUrl}/en/faq` },
      ]
    : [
        { name: 'Inicio', url: `${baseUrl}/es` },
        { name: 'Servicios', url: `${baseUrl}/es/servicios` },
        { name: 'Cerrajero Cerca de Mí', url: `${baseUrl}/es/cerrajero-cerca-de-mi` },
        { name: 'Área de Servicio', url: `${baseUrl}/es/area-de-servicio` },
        { name: 'Acerca', url: `${baseUrl}/es/acerca` },
        { name: 'Contacto', url: `${baseUrl}/es/contacto` },
        { name: 'Preguntas Frecuentes', url: `${baseUrl}/es/preguntas-frecuentes` },
      ]

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: navItems.map((n) => n.name),
    url: navItems.map((n) => n.url),
  }

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
        <Header lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
        <StickyMobileBar lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  )
}
