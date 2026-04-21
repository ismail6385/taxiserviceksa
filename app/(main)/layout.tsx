import './globals.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import LayoutWrapper from '@/components/LayoutWrapper';
import JsonLdSiteNavigation from '@/components/seo/JsonLdSiteNavigation';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://taxiserviceksa.com'),
  verification: {
    other: {
      'msvalidate.01': 'DBF10D8E5F51FF80E9121C8FF0A4F0A5',
    },
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
  title: {
    default: 'Taxi Service KSA | #1 Airport Taxi & VIP Private Transfers (Pre-Book)',
  },
  description: 'Pre-book VIP taxi services in Saudi Arabia. Reliable intercity transfers, border crossings, and Jeddah Airport to Makkah transport. Fixed rates & professional English-speaking drivers.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Taxi Service KSA | VIP Jeddah to Makkah Transfers',
    description: 'Book official taxi services in Saudi Arabia. Reliable private transfers from Jeddah Airport to Makkah & Madinah. Fixed rates, VIP GMCs, and 24/7 customer support.',
    url: './',
    siteName: 'Taxi Service KSA',
    images: [
      {
        url: 'https://taxiserviceksa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taxi Service KSA - Premium Saudi Arabia Transfers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service KSA | VIP Private Transfers',
    description: 'Book official taxi services in Saudi Arabia. Reliable private transfers from Jeddah Airport to Makkah & Madinah.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#1d4ed8',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

import { headers } from 'next/headers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdSiteNavigation />
      {children}
    </>
  );
}
