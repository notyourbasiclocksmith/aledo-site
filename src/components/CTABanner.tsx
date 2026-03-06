import { Phone, ArrowRight } from 'lucide-react';
import { business } from '@/data/business';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: 'dark' | 'gold';
}

export default function CTABanner({
  title = 'Need a Locksmith in Aledo Right Now?',
  subtitle = 'Our mobile automotive locksmith is ready to help. Fast response, professional service, competitive pricing throughout Parker County.',
  variant = 'dark',
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`section-padding ${isDark ? 'gradient-dark' : 'bg-gradient-to-r from-gold-400 to-gold-500'}`}>
      <div className="container-max mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-dark-900'}`}>
          {title}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-dark-800'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={business.phoneHref}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${
              isDark
                ? 'bg-gold-400 text-dark-900 hover:bg-gold-300'
                : 'bg-dark-950 text-white hover:bg-dark-800'
            }`}
          >
            <Phone className="w-5 h-5" />
            Call {business.phone}
          </a>
          <a
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl text-lg border-2 transition-all duration-300 ${
              isDark
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-dark-900/30 text-dark-900 hover:bg-dark-900/10'
            }`}
          >
            Request Service <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
