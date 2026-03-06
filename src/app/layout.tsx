import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://aledolocksmith.net'),
  title: {
    default: 'Aledo Locksmith | Mobile Automotive Locksmith in Aledo, Texas',
    template: '%s | Aledo Locksmith',
  },
  description:
    'Professional mobile automotive locksmith serving Aledo, Texas and Parker County. Car key replacement, key fob programming, lockout service, and ignition repair. Available 24/7.',
  keywords: [
    'auto locksmith Aledo',
    'car key replacement Aledo TX',
    'lost car key Aledo Texas',
    'mobile locksmith Aledo',
    'car lockout service Aledo',
    'key fob replacement Aledo',
    'ignition repair Aledo',
    'Parker County locksmith',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aledolocksmith.net',
    siteName: 'Aledo Locksmith',
    title: 'Aledo Locksmith | Mobile Automotive Locksmith in Aledo, Texas',
    description:
      'Professional mobile automotive locksmith serving Aledo, Texas and Parker County. 24/7 car key replacement, programming, lockouts & ignition repair.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
        {/* Bottom padding for sticky mobile CTA */}
        <div className="h-20 md:hidden" />
      </body>
    </html>
  );
}
