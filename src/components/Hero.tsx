import { Phone, Clock, MapPin, Shield } from 'lucide-react';
import { business } from '@/data/business';

interface HeroProps {
  title: string;
  subtitle: string;
  showBadges?: boolean;
}

export default function Hero({ title, subtitle, showBadges = true }: HeroProps) {
  return (
    <section className="relative gradient-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative container-max mx-auto section-padding pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          {showBadges && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available 24/7 in Aledo, Texas
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={business.phoneHref} className="btn-primary text-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now — {business.phone}
            </a>
            <a href="/contact" className="btn-outline text-center">
              Request Service Online
            </a>
          </div>

          {/* Trust badges */}
          {showBadges && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: '24/7 Service' },
                { icon: MapPin, label: 'Mobile — We Come to You' },
                { icon: Shield, label: 'Licensed & Insured' },
                { icon: Phone, label: 'Fast Response Time' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
