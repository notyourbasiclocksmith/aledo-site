'use client'

import { useState } from 'react'
import { CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, RECAPTCHA_SITE_KEY, FORMS_ENDPOINT, type Locale } from '@/lib/i18n'
import { serviceOptionsEn, serviceOptionsEs } from '@/lib/services'
import { type Dictionary } from '@/lib/dictionaries'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

interface ContactFormProps {
  lang: Locale
  dict: Dictionary
  compact?: boolean
}

export default function ContactForm({ lang, dict, compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const serviceOptions = lang === 'en' ? serviceOptionsEn : serviceOptionsEs
  const thankYouPath = lang === 'en' ? '/en/thank-you' : '/es/gracias'

  const validate = (form: HTMLFormElement): boolean => {
    const newErrors: Record<string, string> = {}
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name) newErrors.name = lang === 'en' ? 'Name is required' : 'El nombre es obligatorio'
    if (!phone) newErrors.phone = lang === 'en' ? 'Phone is required' : 'El teléfono es obligatorio'
    if (!email) newErrors.email = lang === 'en' ? 'Email is required' : 'El correo es obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = lang === 'en' ? 'Invalid email' : 'Correo inválido'
    if (!message) newErrors.message = lang === 'en' ? 'Message is required' : 'El mensaje es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!validate(form)) return

    setIsSubmitting(true)

    try {
      await new Promise<void>((resolve) => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(resolve)
        } else {
          resolve()
        }
      })

      let token = ''
      if (window.grecaptcha) {
        token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_form' })
      }

      const formData = new FormData(form)
      formData.set('recaptchaToken', token)

      const response = await fetch(FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        window.location.href = thankYouPath
      } else {
        setErrors({ form: lang === 'en' ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor intente de nuevo.' })
      }
    } catch {
      setErrors({ form: lang === 'en' ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor intente de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-dark-gray bg-white min-h-[48px]'
  const labelClasses = 'block text-sm font-medium text-gray-700 mb-1.5'
  const errorClasses = 'text-red-600 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="hidden" name="recaptchaToken" value="" />

      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-5'}>
        <div>
          <label htmlFor="name" className={labelClasses}>{dict.form.name} *</label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder={dict.form.namePlaceholder} aria-required="true" />
          {errors.name && <p className={errorClasses} role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>{dict.form.phone} *</label>
          <input type="tel" id="phone" name="phone" required className={inputClasses} placeholder={dict.form.phonePlaceholder} aria-required="true" />
          {errors.phone && <p className={errorClasses} role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>{dict.form.email} *</label>
        <input type="email" id="email" name="email" required className={inputClasses} placeholder={dict.form.emailPlaceholder} aria-required="true" />
        {errors.email && <p className={errorClasses} role="alert">{errors.email}</p>}
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
        {errors.message && <p className={errorClasses} role="alert">{errors.message}</p>}
      </div>

      {errors.form && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm" role="alert">
          {errors.form}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg min-h-[56px]"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {dict.form.sending}
          </span>
        ) : dict.form.submit}
      </button>

      <p className="text-sm text-gray-500 text-center">
        {dict.form.orCall}{' '}
        <a href={`tel:${CALL_NUMBER}`} className="text-secondary font-semibold hover:underline">{CALL_DISPLAY}</a>
        {' '}{dict.form.orText}{' '}
        <a href={`sms:${TEXT_NUMBER}`} className="text-secondary font-semibold hover:underline">{dict.nav.textUs}</a>
      </p>
    </form>
  )
}
