import Link from 'next/link';
import { Phone, MapPin, Clock, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import VehicleBrands from '@/components/VehicleBrands';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { business, faqs } from '@/data/business';

export default function HomePage() {
  return (
    <>
      <SchemaMarkup pageType="home" faqItems={faqs} />

      <Hero
        title="Mobile Automotive Locksmith in Aledo, Texas"
        subtitle="Lost your car keys? Locked out of your vehicle? Our certified mobile locksmith brings professional automotive key services directly to your location in Aledo and throughout Parker County — 24 hours a day, 7 days a week."
      />

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Why Aledo Drivers Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-6">
                The Most Trusted Auto Locksmith in Parker County
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When Aledo drivers and Parker County motorists need fast, reliable automotive locksmith service, 
                they call us. Our fully equipped mobile workshop arrives at your exact location — whether you are 
                at home, at work, stranded on Interstate 20, or parked near FM 1187. No towing required. No 
                dealership wait times. Just professional locksmith service at your doorstep.
              </p>
              <div className="space-y-4">
                {[
                  'Fully mobile — we come to you anywhere in Aledo and Parker County',
                  'All major vehicle brands: Toyota, Honda, Ford, Chevrolet, BMW, and more',
                  'Transponder keys, smart keys, and key fobs programmed on-site',
                  'Save 30-60% compared to dealership key services',
                  '24/7 emergency locksmith response throughout ZIP codes 76008 and 76087',
                  'Licensed, insured, and trusted by local vehicle owners',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href={business.phoneHref} className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Immediate Service
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24/7', label: 'Emergency Service', sublabel: 'Always available' },
                { value: '30min', label: 'Avg Response', sublabel: 'In Aledo area' },
                { value: '19+', label: 'Vehicle Brands', sublabel: 'All makes covered' },
                { value: '4.9★', label: 'Customer Rating', sublabel: 'Parker County' },
              ].map((stat) => (
                <div key={stat.label} className="card-elevated text-center border border-gray-100">
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="font-semibold text-dark-900 text-sm">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid />

      {/* How It Works */}
      <section className="section-padding gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative container-max mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
              How Our Mobile Locksmith Service Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Getting back on the road is easy. Three simple steps and our Aledo locksmith team handles the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Call Us',
                description: 'Call our 24/7 line and describe your situation. We will provide an upfront quote and dispatch a technician to your Aledo location immediately.',
              },
              {
                step: '02',
                title: 'We Arrive',
                description: 'Our fully equipped mobile locksmith arrives at your exact location — home, office, roadside, or parking lot — anywhere in Parker County.',
              },
              {
                step: '03',
                title: 'Problem Solved',
                description: 'We cut keys, program transponders, unlock vehicles, or repair ignitions on the spot. You are back on the road in minutes, not hours.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-black text-gold-400">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="w-5 h-5 mr-2" />
              Start with Step 1 — Call Now
            </a>
          </div>
        </div>
      </section>

      <VehicleBrands />

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-4">
              Serving Aledo and All of Parker County
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our mobile locksmith covers every corner of Aledo and the surrounding Parker County communities. 
              Wherever you are, we will come to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: 'Aledo, TX 76008', desc: 'Our home base — fastest response times for all automotive locksmith services.' },
              { area: 'Weatherford, TX 76087', desc: 'Full coverage for the Parker County seat, including downtown and surrounding neighborhoods.' },
              { area: 'Annetta, TX', desc: 'Serving Annetta, Annetta North, and Annetta South with mobile key replacement.' },
              { area: 'Willow Park, TX', desc: 'Quick response along I-20 corridor for lockouts, key replacement, and programming.' },
              { area: 'Hudson Oaks, TX', desc: 'Mobile locksmith service covering Hudson Oaks and the US 377 corridor.' },
              { area: 'Fort Worth (West), TX', desc: 'Extended coverage into western Fort Worth, including Benbrook and surrounding areas.' },
            ].map((item) => (
              <div key={item.area} className="card-elevated border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <h3 className="font-bold text-dark-900">{item.area}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
            <h3 className="font-bold text-dark-900 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold-500" />
              Major Roads We Cover
            </h3>
            <div className="flex flex-wrap gap-3">
              {business.roads.map((road) => (
                <span key={road} className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700">
                  {road}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTABanner
        title="Locked Out or Lost Your Keys in Aledo?"
        subtitle="Do not stress — our mobile locksmith team is standing by 24/7 to help Aledo drivers and Parker County motorists get back on the road fast."
      />

      <FAQ items={faqs} subtitle="Answers to common questions from Aledo drivers about our mobile automotive locksmith services." />

      {/* SEO Content Block */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-dark-900 mb-6">
            Your Trusted Automotive Locksmith in Aledo, Texas
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              When you need a reliable auto locksmith in Aledo, Texas, our mobile service delivers professional 
              results directly to your location. Whether you have lost your car keys at Walsh Ranch, locked them 
              inside your vehicle at an Aledo restaurant, or need a replacement key fob for your daily driver, 
              our certified technicians arrive equipped to handle every situation.
            </p>
            <p>
              As Parker County continues to grow, local vehicle owners need a locksmith they can trust. Our mobile 
              automotive locksmith service eliminates the hassle of towing your car to a dealership or waiting days 
              for a replacement key. We bring the dealership-level equipment to you — cutting and programming 
              transponder keys, smart keys, and key fobs for Toyota, Honda, Ford, Chevrolet, Nissan, BMW, 
              Mercedes-Benz, and every other major brand.
            </p>
            <p>
              Serving the 76008 and 76087 ZIP code areas, we provide 24/7 emergency response along Interstate 20, 
              FM 1187, and throughout the Aledo, Weatherford, Annetta, Willow Park, and Hudson Oaks communities. 
              Our commitment to fast response times, transparent pricing, and expert workmanship has made us the 
              preferred automotive locksmith for Aledo drivers and Parker County motorists.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/car-key-replacement-aledo" className="btn-primary text-center">
              Car Key Replacement <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/car-lockout-service-aledo" className="btn-secondary text-center">
              Lockout Service <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        variant="gold"
        title="Call Aledo's #1 Mobile Locksmith Now"
        subtitle="Fast, affordable, and professional automotive locksmith service delivered to your location in Aledo, Texas and Parker County."
      />
    </>
  );
}
