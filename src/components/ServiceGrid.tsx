import Link from 'next/link';
import { Key, Search, Smartphone, Cpu, Wrench, Lock, Truck, Siren } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Key, Search, Smartphone, Cpu, Wrench, Lock, Truck, Siren,
};

export default function ServiceGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-4">
            Automotive Locksmith Services in Aledo
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete mobile automotive locksmith solutions for Aledo drivers and Parker County motorists. 
            Every service delivered directly to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Key;
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group card-elevated hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-gold-400/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary-500 group-hover:text-gold-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.excerpt}
                </p>
                <span className="inline-flex items-center mt-4 text-gold-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
