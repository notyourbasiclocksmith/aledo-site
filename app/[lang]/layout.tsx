import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileBar from '@/components/StickyMobileBar'
import { dictionaries } from '@/lib/dictionaries'
import { locales, baseUrl, RECAPTCHA_SITE_KEY, type Locale } from '@/lib/i18n'

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
        <Header lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
        <StickyMobileBar lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  )
}
