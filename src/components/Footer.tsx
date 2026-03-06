import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { business } from '@/data/business';

const serviceLinks = [
  { label: 'Car Key Replacement', href: '/car-key-replacement-aledo' },
  { label: 'Lost Car Key Service', href: '/lost-car-key-aledo' },
  { label: 'Key Fob Replacement', href: '/key-fob-replacement-aledo' },
  { label: 'Car Key Programming', href: '/car-key-programming-aledo' },
  { label: 'Ignition Repair', href: '/ignition-repair-aledo' },
  { label: 'Car Lockout Service', href: '/car-lockout-service-aledo' },
  { label: 'Mobile Locksmith', href: '/mobile-locksmith-aledo' },
  { label: 'Emergency Locksmith', href: '/emergency-locksmith-aledo' },
];

const vehicleLinks = [
  { label: 'Toyota Key Service', href: '/toyota-key-replacement-aledo' },
  { label: 'Honda Key Service', href: '/honda-key-replacement-aledo' },
  { label: 'Ford Key Service', href: '/ford-key-replacement-aledo' },
  { label: 'Chevrolet Key Service', href: '/chevrolet-key-replacement-aledo' },
  { label: 'Nissan Key Service', href: '/nissan-key-replacement-aledo' },
  { label: 'BMW Key Service', href: '/bmw-key-replacement-aledo' },
  { label: 'All Vehicle Brands', href: '/vehicles' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-max mx-auto section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                <span className="text-dark-950 font-black text-lg">A</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Aledo Locksmith</div>
                <div className="text-gray-500 text-xs">Mobile Auto Locksmith</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional mobile automotive locksmith serving Aledo, Texas and Parker County. 
              Car key replacement, programming, lockout service, and ignition repair — all at your location.
            </p>
            <div className="space-y-3 text-sm">
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-400" />
                {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-400" />
                {business.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                Aledo, TX 76008 — Parker County
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-1.5 text-sm hover:text-gold-400 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-gold-400/50 group-hover:text-gold-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Vehicle Brands</h3>
            <ul className="space-y-2.5">
              {vehicleLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-1.5 text-sm hover:text-gold-400 transition-colors group">
                    <ChevronRight className="w-3 h-3 text-gold-400/50 group-hover:text-gold-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {business.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gold-400/50" />
                  {area}, TX
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold text-sm mb-3">ZIP Codes Served</h4>
              <div className="flex flex-wrap gap-2">
                {business.zipCodes.map((zip) => (
                  <span key={zip} className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
                    {zip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aledo Locksmith. All rights reserved. Serving Aledo, Texas &amp; Parker County.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/sitemap" className="hover:text-gold-400 transition-colors">Sitemap</Link>
            <Link href="/blog" className="hover:text-gold-400 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
