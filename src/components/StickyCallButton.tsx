'use client';

import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-950/95 backdrop-blur-md border-t border-gold-400/30 p-3">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-dark-950 font-bold text-lg rounded-xl shadow-lg active:scale-[0.98] transition-transform"
      >
        <Phone className="w-5 h-5" />
        Call Now — {business.phone}
      </a>
    </div>
  );
}
