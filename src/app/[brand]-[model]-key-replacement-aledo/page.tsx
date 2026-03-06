import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { vehicleBrands } from '@/data/vehicles';
import { services } from '@/data/services';
import { business } from '@/data/business';

function findBrandModel(brand: string, model: string) {
  const b = vehicleBrands.find((v) => v.slug === brand);
  if (!b) return null;
  const m = b.models.find((mod) => mod.slug === model);
  if (!m) return null;
  return { brand: b, model: m };
}

export async function generateStaticParams() {
  const params: { 'brand': string; 'model': string }[] = [];
  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      params.push({ brand: brand.slug, model: model.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { brand: string; model: string } }): Promise<Metadata> {
  const result = findBrandModel(params.brand, params.model);
  if (!result) return { title: 'Not Found' };
  const { brand, model } = result;
  const title = `${brand.name} ${model.name} Key Replacement Aledo TX | Mobile Locksmith`;
  const desc = `Professional ${brand.name} ${model.name} key replacement in Aledo, Texas. Mobile locksmith for ${model.years[0]}-${model.years[model.years.length - 1]} models. Serving Parker County. Call now!`;
  return { title, description: desc, openGraph: { title, description: desc } };
}

export default function BrandModelPage({ params }: { params: { brand: string; model: string } }) {
  const result = findBrandModel(params.brand, params.model);
  if (!result) notFound();
  const { brand, model } = result!;

  const yearStart = model.years[0];
  const yearEnd = model.years[model.years.length - 1];

  const faqItems = [
    {
      question: `How much does ${brand.name} ${model.name} key replacement cost in Aledo?`,
      answer: `${brand.name} ${model.name} key replacement in Aledo typically costs between $85 and $350 depending on the model year and key type. Newer ${model.name} models with smart keys cost more than older models with basic transponder keys. Our mobile service saves you 30-60% compared to ${brand.name} dealership pricing.`,
    },
    {
      question: `Can you make a key for my ${brand.name} ${model.name} without the original?`,
      answer: `Yes, our mobile locksmith can create a new key for your ${brand.name} ${model.name} even if you have lost all original keys. We use your vehicle's VIN to generate the correct key cut and program it to your ${model.name}'s immobilizer system right at your location in Aledo.`,
    },
    {
      question: `How long does ${brand.name} ${model.name} key replacement take?`,
      answer: `Most ${brand.name} ${model.name} key replacements are completed in 20-45 minutes once our mobile locksmith arrives at your Aledo location. Response time is typically 15-30 minutes within Parker County.`,
    },
    {
      question: `Do you program ${brand.name} ${model.name} key fobs too?`,
      answer: `Yes, we program key fobs, smart keys, and transponder keys for all ${brand.name} ${model.name} model years from ${yearStart} to ${yearEnd}. Our mobile workshop carries the programming equipment needed for every ${brand.name} key system.`,
    },
  ];

  return (
    <>
      <SchemaMarkup
        pageType="vehicle"
        serviceName={`${brand.name} ${model.name} Key Replacement`}
        faqItems={faqItems}
      />

      <Hero
        title={`${brand.name} ${model.name} Key Replacement in Aledo, Texas`}
        subtitle={`Expert mobile locksmith service for ${brand.name} ${model.name} key replacement, programming, and key fob service. Covering ${yearStart}-${yearEnd} models throughout Aledo and Parker County.`}
      />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">
                {brand.name} {model.name} Key Replacement for Aledo Drivers
              </h2>

              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Need a replacement key for your {brand.name} {model.name} in Aledo, Texas? Our mobile automotive
                  locksmith specializes in {brand.name} {model.name} key services and delivers professional results
                  right at your location. Whether you drive a {yearStart} or {yearEnd} {model.name}, we have the
                  expertise and equipment to cut and program your new key on the spot.
                </p>
                <p>
                  The {brand.name} {model.name} uses {brand.country.toLowerCase()} automotive key technology that
                  requires specialized diagnostic and programming equipment. Our certified technicians carry
                  {brand.name}-compatible tools in our mobile workshop, allowing us to handle every {model.name}
                  key situation without a dealership visit. Aledo drivers and Parker County motorists save both
                  time and money with our mobile approach.
                </p>
                <p>
                  We provide complete key services for the {brand.name} {model.name} including transponder key
                  cutting and programming, smart key replacement, key fob programming and battery replacement,
                  emergency lockout service, and ignition repair. All services are performed at your location
                  anywhere in Aledo, along Interstate 20, near FM 1187, or throughout the 76008 and 76087 ZIP codes.
                </p>

                <h3 className="text-xl font-bold text-dark-900 mt-8 mb-4">
                  {brand.name} {model.name} Key Types by Year
                </h3>
                <p>
                  The key system in your {brand.name} {model.name} varies by model year. Earlier {model.name} models
                  ({yearStart}-{Math.min(yearStart + 4, yearEnd)}) typically use transponder chip keys, while newer
                  models ({Math.max(yearEnd - 4, yearStart)}-{yearEnd}) often feature smart keys with push-button
                  start and proximity entry. Our technicians are trained on every {model.name} key generation and
                  carry the right blanks and programming tools for each type.
                </p>

                <h3 className="text-xl font-bold text-dark-900 mt-8 mb-4">
                  Why Choose Us for {brand.name} {model.name} Key Service in Aledo?
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  `Specialized ${brand.name} ${model.name} key expertise for ${yearStart}-${yearEnd} models`,
                  'Mobile service — we come to your exact Aledo location',
                  'All key types: transponder, smart key, key fob, and remote',
                  `Save 30-60% compared to ${brand.name} dealership pricing`,
                  '24/7 emergency service throughout Parker County',
                  'Key replacement even without the original key',
                  'Fast 15-30 minute response time in the Aledo area',
                  'Licensed, insured, and experienced with all vehicle brands',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Year Links */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {brand.name} {model.name} Key Replacement by Year
                </h3>
                <div className="flex flex-wrap gap-2">
                  {model.years.map((year) => (
                    <span
                      key={year}
                      className="px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700"
                    >
                      {year} {model.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href={business.phoneHref} className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for {brand.name} {model.name} Key Service
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-elevated border border-gold-400/20 bg-gradient-to-br from-dark-950 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-2">{brand.name} {model.name}</h3>
                <p className="text-gray-300 text-sm mb-4">Key Replacement in Aledo, TX</p>
                <a href={business.phoneHref} className="btn-primary w-full justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {business.phone}
                </a>
              </div>

              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Other {brand.name} Models</h3>
                <div className="space-y-2">
                  {brand.models.filter((m) => m.slug !== model.slug).map((m) => (
                    <Link key={m.slug} href={`/${brand.slug}-${m.slug}-key-replacement-aledo`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-sm text-gray-700 group-hover:text-primary-500">{brand.name} {m.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Our Services</h3>
                <div className="space-y-2">
                  {services.slice(0, 6).map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-sm text-gray-700 group-hover:text-primary-500">{s.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={`Need ${brand.name} ${model.name} Key Service in Aledo?`} />
      <FAQ items={faqItems} title={`${brand.name} ${model.name} Key Replacement FAQ`} />
    </>
  );
}
