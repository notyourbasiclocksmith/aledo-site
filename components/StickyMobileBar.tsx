'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { CALL_NUMBER, TEXT_NUMBER, type Locale } from '@/lib/i18n'
import { type Dictionary } from '@/lib/dictionaries'

interface StickyMobileBarProps {
  lang: Locale
  dict: Dictionary
}

export default function StickyMobileBar({ lang, dict }: StickyMobileBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10 safe-area-bottom">
      <div className="flex">
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-4 bg-accent hover:bg-accent/90 transition-colors min-h-[56px]"
          aria-label={dict.nav.callNow}
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">{dict.nav.callNow}</span>
        </a>
        <a
          href={`sms:${TEXT_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-4 bg-secondary hover:bg-secondary/90 transition-colors min-h-[56px]"
          aria-label={dict.nav.textUs}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm">{dict.nav.textUs}</span>
        </a>
      </div>
    </div>
  )
}
