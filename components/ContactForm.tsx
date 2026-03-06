'use client'

import { useRef } from 'react'
import { CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, FORMS_ENDPOINT, type Locale } from '@/lib/i18n'
import { serviceOptionsEn, serviceOptionsEs } from '@/lib/services'
import { type Dictionary } from '@/lib/dictionaries'

interface ContactFormProps {
  lang: Locale
  dict: Dictionary
  compact?: boolean
}

export default function ContactForm({ lang, dict, compact = false }: ContactFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const serviceOptions = lang === 'en' ? serviceOptionsEn : serviceOptionsEs
  const thankYouPath = lang === 'en' ? '/en/thank-you' : '/es/gracias'

  const handleSubmit = () => {
    setTimeout(() => {
      window.location.href = thankYouPath
    }, 1000)
  }

  const inputClasses = 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-dark-gray bg-white min-h-[48px]'
  const labelClasses = 'block text-sm font-medium text-gray-700 mb-1.5'

  return (
    <>
    <iframe ref={iframeRef} name="hidden_iframe" style={{ display: 'none' }} />
    <form action={FORMS_ENDPOINT} method="POST" target="hidden_iframe" onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-5'}>
        <div>
          <label htmlFor="name" className={labelClasses}>{dict.form.name} *</label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder={dict.form.namePlaceholder} aria-required="true" />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>{dict.form.phone} *</label>
          <input type="tel" id="phone" name="phone" required className={inputClasses} placeholder={dict.form.phonePlaceholder} aria-required="true" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>{dict.form.email} *</label>
        <input type="email" id="email" name="email" required className={inputClasses} placeholder={dict.form.emailPlaceholder} aria-required="true" />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>{dict.form.service}</label>
        <select id="service" name="service" className={inputClasses}>
          <option value="">{dict.form.serviceDefault}</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>{dict.form.message} *</label>
        <textarea id="message" name="message" required rows={compact ? 3 : 4} className={`${inputClasses} resize-none`} placeholder={dict.form.messagePlaceholder} aria-required="true" />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all text-lg min-h-[56px]"
      >
        {dict.form.submit}
      </button>

      <p className="text-sm text-gray-500 text-center">
        {dict.form.orCall}{' '}
        <a href={`tel:${CALL_NUMBER}`} className="text-secondary font-semibold hover:underline">{CALL_DISPLAY}</a>
        {' '}{dict.form.orText}{' '}
        <a href={`sms:${TEXT_NUMBER}`} className="text-secondary font-semibold hover:underline">{dict.nav.textUs}</a>
      </p>
    </form>
    </>
  )
}
