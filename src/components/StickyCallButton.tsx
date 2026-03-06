'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { business } from '@/data/business';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-950/95 backdrop-blur-md border-t border-gold-400/30 p-3">
      <div className="flex gap-2">
        <a
          href={business.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-dark-950 font-bold text-base rounded-xl shadow-lg active:scale-[0.98] transition-transform"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={business.textHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-emerald-500 text-white font-bold text-base rounded-xl shadow-lg active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-5 h-5" />
          Text Us
        </a>
      </div>
    </div>
  );
}
