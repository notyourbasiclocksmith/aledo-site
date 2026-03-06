'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { business } from '@/data/business';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Car Key Replacement', href: '/car-key-replacement-aledo' },
      { label: 'Lost Car Key Service', href: '/lost-car-key-aledo' },
      { label: 'Key Fob Replacement', href: '/key-fob-replacement-aledo' },
      { label: 'Car Key Programming', href: '/car-key-programming-aledo' },
      { label: 'Ignition Repair', href: '/ignition-repair-aledo' },
      { label: 'Car Lockout Service', href: '/car-lockout-service-aledo' },
      { label: 'Mobile Locksmith', href: '/mobile-locksmith-aledo' },
      { label: 'Emergency Locksmith', href: '/emergency-locksmith-aledo' },
    ],
  },
  {
    label: 'Vehicles',
    href: '#',
    children: [
      { label: 'Toyota', href: '/toyota-key-replacement-aledo' },
      { label: 'Honda', href: '/honda-key-replacement-aledo' },
      { label: 'Ford', href: '/ford-key-replacement-aledo' },
      { label: 'Chevrolet', href: '/chevrolet-key-replacement-aledo' },
      { label: 'Nissan', href: '/nissan-key-replacement-aledo' },
      { label: 'BMW', href: '/bmw-key-replacement-aledo' },
      { label: 'All Brands →', href: '/vehicles' },
    ],
  },
  { label: 'Service Area', href: '/service-areas' },
  { label: 'About', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/10">
      {/* Top bar */}
      <div className="hidden md:block bg-primary-700 text-white text-sm">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <span>Serving Aledo, TX &amp; Parker County — 24/7 Emergency Service</span>
          <a href={business.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-gold-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {business.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
              <span className="text-dark-950 font-black text-lg md:text-xl">A</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg md:text-xl tracking-tight group-hover:text-gold-300 transition-colors">
                Aledo Locksmith
              </div>
              <div className="text-gray-400 text-xs hidden sm:block">Mobile Auto Locksmith</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
                  onClick={(e) => link.children && e.preventDefault()}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-dark-900 border border-white/10 rounded-xl shadow-2xl py-2 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 text-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="hidden md:inline-flex items-center gap-2 btn-primary !py-2.5 !px-5 !text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={business.textHref}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-950 border-t border-white/10 max-h-[70vh] overflow-y-auto animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1 animate-fade-in">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-gray-400 hover:text-white text-sm rounded-lg hover:bg-white/5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white text-base font-medium rounded-lg hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 btn-primary w-full mt-4"
            >
              <Phone className="w-5 h-5" />
              Call {business.phone}
            </a>
            <a
              href={business.textHref}
              className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Text Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
