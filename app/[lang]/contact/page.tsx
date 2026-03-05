import type { Metadata } from 'next'
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { dictionaries } from '@/lib/dictionaries'
import { baseUrl, CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en'
  return {
    title: isEn ? 'Contact Aledo Locksmith | Aledo, TX' : 'Contactar Aledo Locksmith | Aledo, TX',
    description: isEn
      ? 'Contact Aledo Locksmith for fast locksmith service in Aledo, TX. Call (817) 993-5323 or text (817) 586-9634. Available 24/7.'
      : 'Contacte a Aledo Locksmith para servicio rápido en Aledo, TX. Llame al (817) 993-5323 o envíe mensaje al (817) 586-9634. Disponible 24/7.',
    alternates: {
      canonical: `${baseUrl}/${params.lang}/${isEn ? 'contact' : 'contacto'}`,
      languages: { en: `${baseUrl}/en/contact`, es: `${baseUrl}/es/contacto`, 'x-default': `${baseUrl}/en/contact` },
    },
  }
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = dictionaries[lang]

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Aledo Locksmith',
    url: baseUrl,
    telephone: CALL_NUMBER,
    address: { '@type': 'PostalAddress', addressLocality: 'Aledo', addressRegion: 'TX', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Aledo, TX' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.contact.h1}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-gray mb-6">
                {lang === 'en' ? 'Contact Information' : 'Información de Contacto'}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark-gray mb-2">{dict.contact.callUs}</h3>
                  <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-3 bg-accent/10 text-accent px-4 py-4 rounded-xl font-bold text-lg hover:bg-accent/20 transition-colors min-h-[56px]">
                    <Phone className="w-6 h-6" /> {CALL_DISPLAY}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-dark-gray mb-2">{dict.contact.textUs}</h3>
                  <a href={`sms:${TEXT_NUMBER}`} className="flex items-center gap-3 bg-secondary/10 text-secondary px-4 py-4 rounded-xl font-bold text-lg hover:bg-secondary/20 transition-colors min-h-[56px]">
                    <MessageSquare className="w-6 h-6" /> {TEXT_DISPLAY}
                  </a>
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
                    <div>
                      <p className="font-semibold text-dark-gray">{dict.contact.available}</p>
                    </div>
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
    </>
  )
}
