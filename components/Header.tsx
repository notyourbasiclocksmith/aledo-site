'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageSquare, Globe } from 'lucide-react'
import { CALL_NUMBER, CALL_DISPLAY, TEXT_NUMBER, TEXT_DISPLAY, type Locale } from '@/lib/i18n'
import { type Dictionary } from '@/lib/dictionaries'

interface HeaderProps {
  lang: Locale
  dict: Dictionary
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const prefix = `/${lang}`
  const altLang = lang === 'en' ? 'es' : 'en'
  const altPrefix = `/${altLang}`

  const navLinks = [
    { href: prefix, label: dict.nav.home },
    { href: `${prefix}/${lang === 'en' ? 'services' : 'servicios'}`, label: dict.nav.services },
    { href: `${prefix}/${lang === 'en' ? 'service-area' : 'area-de-servicio'}`, label: dict.nav.serviceArea },
    { href: `${prefix}/${lang === 'en' ? 'about' : 'acerca'}`, label: dict.nav.about },
    { href: `${prefix}/${lang === 'en' ? 'contact' : 'contacto'}`, label: dict.nav.contact },
  ]

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={prefix} className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Aledo Locksmith</div>
              <div className="text-[10px] text-gray-300 tracking-wide">Aledo, TX</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs + Lang Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href={altPrefix}
              className="flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-white transition-colors mr-2"
              aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              {altLang.toUpperCase()}
            </Link>
            <a
              href={`tel:${CALL_NUMBER}`}
              className="flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors pulse-cta"
            >
              <Phone className="w-4 h-4" />
              {dict.nav.callNow}
            </a>
            <a
              href={`sms:${TEXT_NUMBER}`}
              className="flex items-center gap-1.5 bg-secondary hover:bg-secondary/90 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              {dict.nav.textUs}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-white/10 pb-6 fade-in">
            {/* Mobile CTAs */}
            <div className="flex gap-2 py-4">
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                {CALL_DISPLAY}
              </a>
              <a
                href={`sms:${TEXT_NUMBER}`}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-lg font-semibold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                {dict.nav.textUs}
              </a>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-2 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={altPrefix}
                onClick={() => setIsOpen(false)}
                className="py-3 px-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {lang === 'en' ? 'Español' : 'English'}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
