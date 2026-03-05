export type Locale = 'en' | 'es'

export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

export const baseUrl = 'https://aledolocksmith.net'

export const CALL_NUMBER = '+18179935323'
export const CALL_DISPLAY = '(817) 993-5323'
export const TEXT_NUMBER = '+18175869634'
export const TEXT_DISPLAY = '(817) 586-9634'

export const RECAPTCHA_SITE_KEY = '6Le_12ksAAAAABNp1PpYbfXZP_tsb6qRIXA6WRU2'
export const FORMS_ENDPOINT = 'https://formsai-backend-bz0j.onrender.com/v1/forms/33BGfPqmef/submit'

export function getAlternateUrls(enPath: string, esPath: string) {
  return {
    en: `${baseUrl}${enPath}`,
    es: `${baseUrl}${esPath}`,
  }
}
