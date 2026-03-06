import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { vehicleBrands, brandServiceLabels, brandServiceCombinations } from '@/data/vehicles';

export const metadata: Metadata = {
  title: 'Vehicle Brands We Service | Auto Locksmith Aledo TX',
  description: 'Complete list of vehicle brands serviced by Aledo Locksmith. Toyota, Honda, Ford, Chevrolet, BMW, and more. Mobile key replacement and programming in Parker County.',
};

export default function VehiclesPage() {
  return (
    <>
      <SchemaMarkup pageType="service" serviceName="Vehicle Key Services" />

      <Hero
        title="Vehicle Brands We Service in Aledo"
        subtitle="Our mobile automotive locksmith provides key replacement, programming, and lockout services for every major vehicle brand. Select your vehicle below."
        showBadges={false}
      />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="space-y-16">
            {vehicleBrands.map((brand) => (
              <div key={brand.slug} id={brand.slug}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <span className="text-2xl font-black text-primary-500">{brand.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-dark-900">{brand.name}</h2>
                    <p className="text-sm text-gray-500">{brand.country} — {brand.models.length} models covered</p>
                  </div>
                </div>

                {/* Services for brand */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
                  {brandServiceCombinations.map((svc) => (
                    <Link key={svc} href={`/${brand.slug}-${svc}-aledo`}
                      className="p-3 text-center bg-gray-50 rounded-lg border border-gray-200 hover:bg-gold-400/10 hover:border-gold-400/30 transition-all text-sm font-medium text-dark-900">
                      {brandServiceLabels[svc]}
                    </Link>
                  ))}
                </div>

                {/* Models */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {brand.models.map((model) => (
                    <Link key={model.slug} href={`/${brand.slug}-${model.slug}-key-replacement-aledo`}
                      className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-gold-400/30 hover:shadow-md transition-all">
                      <div className="font-bold text-dark-900 group-hover:text-primary-500 text-sm">{model.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{model.years[0]}-{model.years[model.years.length - 1]}</div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-500 mt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
