import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, MessageSquare } from 'lucide-react'
import { dictionaries } from '@/lib/dictionaries'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn ? 'Thank You | Aledo Locksmith' : 'Gracias | Aledo Locksmith',
    description: isEn ? 'Thank you for contacting Aledo Locksmith.' : 'Gracias por contactar a Aledo Locksmith.',
    robots: { index: false, follow: false },
  }
}

export default function ThankYouPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]
  const prefix = `/${lang}`

  return (
    <section className="py-24 bg-light-gray min-h-[60vh] flex items-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">{dict.thankYou.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{dict.thankYou.message}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a href={`tel:${CALL_NUMBER}`} className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-xl font-bold min-h-[56px]">
            <Phone className="w-5 h-5" /> {CALL_DISPLAY}
          </a>
          <a href={`sms:${TEXT_NUMBER}`} className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold min-h-[56px]">
            <MessageSquare className="w-5 h-5" /> {TEXT_DISPLAY}
          </a>
        </div>

        <Link href={prefix} className="text-secondary font-semibold hover:underline">
          &larr; {dict.thankYou.backHome}
        </Link>
      </div>
    </section>
  )
}
