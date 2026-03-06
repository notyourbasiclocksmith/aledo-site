import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { services } from '@/data/services';
import { vehicleBrands, brandServiceLabels, brandServiceCombinations, getAllBrandServicePages, type BrandServiceType } from '@/data/vehicles';
import { business, faqs } from '@/data/business';

function getServicePage(slug: string) {
  return services.find((s) => s.slug === slug) || null;
}

function getBrandServicePage(slug: string) {
  const allPages = getAllBrandServicePages();
  return allPages.find((p) => p.slug === slug) || null;
}

function getBrandModelPage(slug: string) {
  const suffix = '-key-replacement-aledo';
  if (!slug.endsWith(suffix)) return null;
  const rest = slug.slice(0, -suffix.length);
  for (const brand of vehicleBrands) {
    if (rest.startsWith(brand.slug + '-')) {
      const modelSlug = rest.slice(brand.slug.length + 1);
      const model = brand.models.find((m) => m.slug === modelSlug);
      if (model) return { brand, model };
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  // Service pages
  for (const s of services) {
    params.push({ slug: s.slug });
  }

  // Brand+service combo pages
  const brandPages = getAllBrandServicePages();
  for (const p of brandPages) {
    params.push({ slug: p.slug });
  }

  // Brand+model key replacement pages
  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      params.push({ slug: `${brand.slug}-${model.slug}-key-replacement-aledo` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServicePage(params.slug);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `https://aledolocksmith.net/${service.slug}`,
      },
    };
  }

  const brandPage = getBrandServicePage(params.slug);
  if (brandPage) {
    const serviceLabel = brandServiceLabels[brandPage.service];
    const title = `${brandPage.brand.name} ${serviceLabel} Aledo TX | Mobile Locksmith`;
    const desc = `Professional ${brandPage.brand.name} ${serviceLabel.toLowerCase()} in Aledo, Texas. Mobile locksmith service for all ${brandPage.brand.name} models. Serving Parker County. Call now!`;
    return {
      title,
      description: desc,
      openGraph: { title, description: desc, url: `https://aledolocksmith.net/${brandPage.slug}` },
    };
  }

  const brandModelPage = getBrandModelPage(params.slug);
  if (brandModelPage) {
    const { brand, model } = brandModelPage;
    const title = `${brand.name} ${model.name} Key Replacement Aledo TX | Mobile Locksmith`;
    const desc = `Professional ${brand.name} ${model.name} key replacement in Aledo, Texas. Mobile locksmith for ${model.years[0]}-${model.years[model.years.length - 1]} models. Serving Parker County. Call now!`;
    return { title, description: desc, openGraph: { title, description: desc } };
  }

  return { title: 'Aledo Locksmith' };
}

function ServicePageContent({ service }: { service: typeof services[0] }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const serviceFaqs = faqs.slice(0, 5).map((f) => ({
    question: f.question.replace('Aledo', 'Aledo').replace('car key', service.name.toLowerCase()),
    answer: f.answer,
  }));

  return (
    <>
      <SchemaMarkup pageType="service" serviceName={service.name} faqItems={serviceFaqs} />
      <Hero title={service.heroHeading} subtitle={service.heroSubheading} />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">
                Professional {service.name} for Aledo Drivers
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  When you need {service.name.toLowerCase()} in Aledo, Texas, our mobile locksmith service
                  delivers fast, professional results right at your location. Whether you are at home in one of
                  Aledo&apos;s residential communities, at work, or stranded along Interstate 20, our certified
                  technicians arrive equipped with everything needed to resolve your situation on the spot.
                </p>
                <p>
                  As a dedicated mobile automotive locksmith serving Parker County, we understand that
                  {service.name.toLowerCase()} situations are often urgent. That is why we maintain 24/7
                  availability and rapid response times throughout the Aledo area. Our service covers all major
                  vehicle brands including Toyota, Honda, Ford, Chevrolet, Nissan, BMW, and many more.
                </p>
                <p>
                  Unlike dealership services that require towing and long wait times, our mobile approach brings
                  the workshop to you. We carry the latest diagnostic and programming equipment in our service
                  vehicle, allowing us to cut keys, program transponders, and complete {service.name.toLowerCase()}
                  {' '}right where your vehicle is located.
                </p>
                <h3 className="text-xl font-bold text-dark-900 mt-8 mb-4">
                  Why Choose Our {service.name} Service in Aledo?
                </h3>
                <p>
                  Aledo drivers and Parker County motorists choose our {service.name.toLowerCase()} service
                  because we combine convenience, expertise, and fair pricing. Here is what sets us apart:
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  `Fast mobile ${service.name.toLowerCase()} anywhere in Aledo and Parker County`,
                  'No towing required — we come to your exact location',
                  'All major vehicle brands and models covered',
                  'Upfront pricing with no hidden fees',
                  '24/7 emergency service including nights, weekends, and holidays',
                  'Licensed, insured, and experienced technicians',
                  'Save 30-60% compared to dealership pricing',
                  'Serving ZIP codes 76008, 76087, and surrounding areas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 prose prose-lg text-gray-600 space-y-4">
                <h3 className="text-xl font-bold text-dark-900 mt-8 mb-4">
                  Areas We Serve for {service.name}
                </h3>
                <p>
                  Our {service.name.toLowerCase()} coverage extends throughout Aledo, Texas and the greater
                  Parker County region. We regularly serve local vehicle owners in Aledo, Weatherford, Annetta,
                  Willow Park, Hudson Oaks, and western Fort Worth. Our service area includes the I-20 corridor,
                  FM 1187, US 377, and all roads connecting these communities.
                </p>
                <p>
                  Whether you are in the 76008 or 76087 ZIP code area, our mobile locksmith can reach you quickly.
                  We know the Aledo area well and take the fastest route to minimize your wait time.
                </p>
              </div>

              <div className="mt-8">
                <a href={business.phoneHref} className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for {service.name}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="card-elevated border border-gold-400/20 bg-gradient-to-br from-dark-950 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-4">Need {service.name}?</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Call now for immediate mobile locksmith service in Aledo, Texas and Parker County.
                </p>
                <a href={business.phoneHref} className="btn-primary w-full justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {business.phone}
                </a>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Serving Aledo, TX & Parker County
                </div>
              </div>

              {/* Other Services */}
              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-primary-500">{s.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vehicle Brands */}
              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Vehicle Brands</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicleBrands.slice(0, 12).map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/${brand.slug}-key-replacement-aledo`}
                      className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 hover:bg-gold-400/10 hover:text-gold-600 transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQ items={serviceFaqs} title={`${service.name} FAQ`} />
    </>
  );
}

function BrandServicePageContent({ brand, service, slug }: {
  brand: typeof vehicleBrands[0];
  service: BrandServiceType;
  slug: string;
}) {
  const serviceLabel = brandServiceLabels[service];
  const title = `${brand.name} ${serviceLabel} in Aledo, Texas`;
  const subtitle = `Professional ${brand.name} ${serviceLabel.toLowerCase()} services delivered to your location in Aledo and throughout Parker County by our certified mobile locksmith team.`;

  const brandFaqs = [
    {
      question: `How much does ${brand.name} ${serviceLabel.toLowerCase()} cost in Aledo?`,
      answer: `${brand.name} ${serviceLabel.toLowerCase()} costs in Aledo typically range from $75 to $350 depending on the specific model and key type. Our mobile locksmith service is significantly more affordable than ${brand.name} dealership pricing, and we come directly to your location in Aledo or Parker County.`,
    },
    {
      question: `Can you program ${brand.name} keys at my location in Aledo?`,
      answer: `Yes, our mobile locksmith programs ${brand.name} keys on-site at your location anywhere in Aledo, Texas or Parker County. We carry all the diagnostic and programming equipment needed for ${brand.name} vehicles in our mobile workshop.`,
    },
    {
      question: `Do you cover all ${brand.name} models for ${serviceLabel.toLowerCase()}?`,
      answer: `Yes, we provide ${serviceLabel.toLowerCase()} for all ${brand.name} models including ${brand.models.slice(0, 4).map((m) => m.name).join(', ')}, and more. Our technicians are trained on all ${brand.name} key systems from the oldest to the newest models.`,
    },
    {
      question: `How fast can you get to me for ${brand.name} ${serviceLabel.toLowerCase()} in Aledo?`,
      answer: `Our typical response time in Aledo is 15-30 minutes. Once on-site, most ${brand.name} ${serviceLabel.toLowerCase()} jobs are completed within 20-45 minutes. We provide 24/7 service throughout Parker County.`,
    },
  ];

  return (
    <>
      <SchemaMarkup pageType="vehicle" serviceName={`${brand.name} ${serviceLabel}`} faqItems={brandFaqs} />
      <Hero title={title} subtitle={subtitle} />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">
                Expert {brand.name} {serviceLabel} in Aledo, TX
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Looking for professional {brand.name} {serviceLabel.toLowerCase()} in Aledo, Texas? Our mobile
                  automotive locksmith specializes in {brand.name} vehicles and provides complete {serviceLabel.toLowerCase()}
                  {' '}services right at your location. No dealership visit required — we bring the expertise and
                  equipment directly to you anywhere in Aledo and Parker County.
                </p>
                <p>
                  {brand.name} vehicles use advanced key technology that requires specialized equipment and training
                  to service properly. Our certified technicians have extensive experience with {brand.country.toLowerCase()}{' '}
                  automotive key systems and carry the latest {brand.name}-compatible programming tools in our mobile workshop.
                </p>
                <p>
                  We service every {brand.name} model driven by Aledo residents and Parker County motorists, including
                  the {brand.models.map((m) => m.name).join(', ')}. Whether your {brand.name} uses a traditional
                  transponder key, a smart key with push-button start, or a key fob remote, we have the capability
                  to provide complete {serviceLabel.toLowerCase()} on the spot.
                </p>
              </div>

              {/* Models Grid */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-dark-900 mb-6">
                  {brand.name} Models We Service in Aledo
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {brand.models.map((model) => (
                    <Link
                      key={model.slug}
                      href={`/${brand.slug}-${model.slug}-key-replacement-aledo`}
                      className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gold-400/10 hover:border-gold-400/30 border border-gray-200 transition-all group"
                    >
                      <div className="font-bold text-dark-900 group-hover:text-primary-500">{brand.name} {model.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{model.years[0]}-{model.years[model.years.length - 1]}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other services for this brand */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-dark-900 mb-6">
                  All {brand.name} Locksmith Services in Aledo
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brandServiceCombinations.map((svc) => (
                    <Link
                      key={svc}
                      href={`/${brand.slug}-${svc}-aledo`}
                      className={`p-4 rounded-xl border transition-all ${
                        svc === service
                          ? 'bg-gold-400/10 border-gold-400/30 font-bold'
                          : 'bg-gray-50 border-gray-200 hover:bg-gold-400/5'
                      }`}
                    >
                      <span className="text-dark-900">{brand.name} {brandServiceLabels[svc]}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href={business.phoneHref} className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for {brand.name} {serviceLabel}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-elevated border border-gold-400/20 bg-gradient-to-br from-dark-950 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-4">{brand.name} {serviceLabel}</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Call now for immediate {brand.name} locksmith service in Aledo, Texas.
                </p>
                <a href={business.phoneHref} className="btn-primary w-full justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {business.phone}
                </a>
              </div>

              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">All Services</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-sm text-gray-700 group-hover:text-primary-500">{s.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card-elevated border border-gray-100">
                <h3 className="text-lg font-bold text-dark-900 mb-4">Other Brands</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicleBrands.filter((b) => b.slug !== brand.slug).slice(0, 10).map((b) => (
                    <Link key={b.slug} href={`/${b.slug}-key-replacement-aledo`}
                      className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 hover:bg-gold-400/10 hover:text-gold-600 transition-colors">
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={`Need ${brand.name} ${serviceLabel} in Aledo?`} />
      <FAQ items={brandFaqs} title={`${brand.name} ${serviceLabel} FAQ`} />
    </>
  );
}

function BrandModelPageContent({ brand, model }: {
  brand: typeof vehicleBrands[0];
  model: typeof vehicleBrands[0]['models'][0];
}) {
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
      <SchemaMarkup pageType="vehicle" serviceName={`${brand.name} ${model.name} Key Replacement`} faqItems={faqItems} />
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

              <div className="mt-10">
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {brand.name} {model.name} Key Replacement by Year
                </h3>
                <div className="flex flex-wrap gap-2">
                  {model.years.map((year) => (
                    <span key={year} className="px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
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

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const service = getServicePage(params.slug);
  if (service) return <ServicePageContent service={service} />;

  const brandPage = getBrandServicePage(params.slug);
  if (brandPage) return <BrandServicePageContent brand={brandPage.brand} service={brandPage.service} slug={brandPage.slug} />;

  const brandModelPage = getBrandModelPage(params.slug);
  if (brandModelPage) return <BrandModelPageContent brand={brandModelPage.brand} model={brandModelPage.model} />;

  notFound();
}
