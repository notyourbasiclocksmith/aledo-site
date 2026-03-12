import Link from 'next/link'
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react'
import { CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'
import { services } from '@/lib/services'
import { type Dictionary } from '@/lib/dictionaries'

interface FooterProps {
  lang: Locale
  dict: Dictionary
}

export default function Footer({ lang, dict }: FooterProps) {
  const prefix = `/${lang}`
  const svcBase = lang === 'en' ? 'services' : 'servicios'

  const quickLinks = [
    { href: prefix, label: dict.nav.home },
    { href: `${prefix}/${svcBase}`, label: dict.nav.services },
    { href: `${prefix}/${lang === 'en' ? 'service-area' : 'area-de-servicio'}`, label: dict.nav.serviceArea },
    { href: `${prefix}/${lang === 'en' ? 'locksmith-near-me' : 'cerrajero-cerca-de-mi'}`, label: dict.nav.nearMe },
    { href: `${prefix}/${lang === 'en' ? 'about' : 'acerca'}`, label: dict.nav.about },
    { href: `${prefix}/${lang === 'en' ? 'contact' : 'contacto'}`, label: dict.nav.contact },
  ]

  const topServices = services.slice(0, 5)

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">Aledo Locksmith</div>
                <div className="text-xs text-gray-300">Aledo, TX</div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${CALL_NUMBER}`} className="hover:text-white transition-colors">{CALL_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-secondary shrink-0" />
                <a href={`sms:${TEXT_NUMBER}`} className="hover:text-white transition-colors">{TEXT_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Aledo, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>{dict.footer.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={lang === 'en' ? '/es' : '/en'} className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Español' : 'English'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4">{dict.footer.ourServices}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`${prefix}/${svcBase}/${lang === 'en' ? service.slug : service.slugEs}`}
                    className="hover:text-white transition-colors"
                  >
                    {lang === 'en' ? service.name : service.nameEs}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`${prefix}/${svcBase}`} className="hover:text-white transition-colors font-semibold">
                  {dict.services.viewAll} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-bold text-base mb-4">{dict.footer.getHelp}</h3>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {dict.nav.callNow}: {CALL_DISPLAY}
              </a>
              <a
                href={`sms:${TEXT_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                {dict.nav.textUs}: {TEXT_DISPLAY}
              </a>
            </div>
            <p className="text-xs text-gray-400">
              {dict.serviceArea.nearby}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} {dict.footer.copyright}</p>
          <p className="mt-1">{dict.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
