import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import { business } from '@/data/business';

export const metadata: Metadata = {
  title: 'Contact Aledo Locksmith | 24/7 Mobile Auto Locksmith Aledo TX',
  description: 'Contact Aledo Locksmith for mobile automotive locksmith services. Available 24/7 for car key replacement, lockouts, and more in Aledo, Texas & Parker County.',
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup pageType="contact" />

      <Hero
        title="Contact Aledo Locksmith"
        subtitle="Reach our mobile automotive locksmith team 24/7. We are ready to help Aledo drivers and Parker County motorists with any car key or lockout situation."
        showBadges={false}
      />

      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-dark-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                The fastest way to reach us is by phone. Our team is available around the clock to dispatch
                a mobile locksmith to your location in Aledo, Texas or anywhere in Parker County.
              </p>

              <div className="space-y-6">
                <a href={business.phoneHref} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gold-400/5 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-900 group-hover:text-primary-500">Call Us Now</div>
                    <div className="text-gold-500 font-bold text-xl">{business.phone}</div>
                    <div className="text-sm text-gray-500 mt-1">Available 24/7 — fastest response</div>
                  </div>
                </a>

                <a href={`mailto:${business.email}`} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gold-400/5 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-900 group-hover:text-primary-500">Email Us</div>
                    <div className="text-primary-500">{business.email}</div>
                    <div className="text-sm text-gray-500 mt-1">For non-urgent inquiries</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">Service Area</div>
                    <div className="text-gray-700">Aledo, TX 76008 — Parker County</div>
                    <div className="text-sm text-gray-500 mt-1">Mobile service — we come to your location</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">Hours of Operation</div>
                    <div className="text-gray-700">24 Hours a Day, 7 Days a Week</div>
                    <div className="text-sm text-gray-500 mt-1">Including holidays and weekends</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-elevated border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-gold-500" />
                  <h3 className="text-xl font-bold text-dark-900">Request Service Online</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out this form and we will contact you shortly. For emergencies, please call us directly.
                </p>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-900 mb-1.5">Full Name</label>
                    <input type="text" id="name" name="name" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-colors"
                      placeholder="Your name" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-900 mb-1.5">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-colors"
                      placeholder="(817) 555-0000" />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-dark-900 mb-1.5">Vehicle Make & Model</label>
                    <input type="text" id="vehicle" name="vehicle"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-colors"
                      placeholder="e.g., 2022 Toyota Camry" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark-900 mb-1.5">Service Needed</label>
                    <select id="service" name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-colors bg-white">
                      <option value="">Select a service</option>
                      <option value="key-replacement">Car Key Replacement</option>
                      <option value="lost-key">Lost Car Key</option>
                      <option value="key-fob">Key Fob Replacement</option>
                      <option value="programming">Key Programming</option>
                      <option value="ignition">Ignition Repair</option>
                      <option value="lockout">Car Lockout</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-900 mb-1.5">Additional Details</label>
                    <textarea id="message" name="message" rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-colors resize-none"
                      placeholder="Describe your situation and location in Aledo..." />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Request
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    For immediate assistance, call <a href={business.phoneHref} className="text-gold-500 font-semibold">{business.phone}</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
