import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { business } from '@/data/business';

export const metadata: Metadata = {
  title: 'Service Areas | Mobile Locksmith Aledo TX & Parker County',
  description: 'Aledo Locksmith serves Aledo, Weatherford, Annetta, Willow Park, Hudson Oaks, and all of Parker County. Mobile auto locksmith with 24/7 coverage.',
};

const areas = [
  { name: 'Aledo', zip: '76008', desc: 'Our home base with the fastest response times. Full automotive locksmith coverage for all Aledo neighborhoods, Walsh Ranch, and surrounding communities.' },
  { name: 'Weatherford', zip: '76087', desc: 'Complete mobile locksmith service for the Parker County seat. Covering downtown Weatherford, residential areas, and the US 377 corridor.' },
  { name: 'Annetta', zip: '76008', desc: 'Serving Annetta, Annetta North, and Annetta South with rapid mobile key replacement and lockout services.' },
  { name: 'Willow Park', zip: '76087', desc: 'Fast response along the I-20 corridor for car lockouts, key replacement, and programming services.' },
  { name: 'Hudson Oaks', zip: '76087', desc: 'Mobile locksmith coverage for Hudson Oaks and the US 180/377 commercial corridor.' },
  { name: 'Benbrook', zip: '76126', desc: 'Extended service coverage into western Fort Worth, including Benbrook and surrounding neighborhoods.' },
];

export default function ServiceAreasPage() {
  return (
    <>
      <SchemaMarkup pageType="service" serviceName="Mobile Locksmith Service Areas" />

      <Hero
        title="Service Areas in Parker County"
        subtitle="Our mobile automotive locksmith covers Aledo, Texas and the entire Parker County region. Wherever you are, we bring professional locksmith service to your exact location."
        showBadges={false}
      />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area) => (
              <div key={area.name} className="card-elevated border border-gray-100 hover:border-gold-400/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-dark-900 text-lg">{area.name}, Texas</h2>
                    <span className="text-xs text-gray-500">ZIP: {area.zip}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
                <a href={business.phoneHref} className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm hover:text-gold-600">
                  <Phone className="w-4 h-4" />
                  Call for Service in {area.name}
                </a>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">Roads and Highways We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {business.roads.map((road) => (
                <div key={road} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="font-medium text-dark-900">{road}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">ZIP Codes Served</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {business.zipCodes.map((zip) => (
                <span key={zip} className="px-5 py-3 bg-primary-500/5 border border-primary-500/10 rounded-xl font-bold text-primary-500 text-lg">
                  {zip}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">Services Available in All Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Car Key Replacement', href: '/car-key-replacement-aledo' },
                { name: 'Lost Car Key Service', href: '/lost-car-key-aledo' },
                { name: 'Key Fob Replacement', href: '/key-fob-replacement-aledo' },
                { name: 'Car Key Programming', href: '/car-key-programming-aledo' },
                { name: 'Ignition Repair', href: '/ignition-repair-aledo' },
                { name: 'Car Lockout Service', href: '/car-lockout-service-aledo' },
                { name: 'Mobile Locksmith', href: '/mobile-locksmith-aledo' },
                { name: 'Emergency Locksmith', href: '/emergency-locksmith-aledo' },
              ].map((svc) => (
                <Link key={svc.href} href={svc.href}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gold-400/5 hover:border-gold-400/30 transition-all font-medium text-dark-900">
                  {svc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
