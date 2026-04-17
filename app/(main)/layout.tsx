import './globals.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import LayoutWrapper from '@/components/LayoutWrapper';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  // Detect language and direction
  let lang = 'en';
  let dir = 'ltr';

  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    lang = 'ar';
    dir = 'rtl';
  } else if (pathname.startsWith('/ur/') || pathname === '/ur') {
    lang = 'ur';
    dir = 'rtl';
  }

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14M4JL9R6T"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-14M4JL9R6T');
          `}
        </Script>

        {/* Trustpilot Review Collector */}
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="lazyOnload"
          async
        />

        {/* WebMCP - expose site tools to AI agents via browser */}
        <Script id="webmcp" strategy="afterInteractive">
          {`
            if (typeof navigator !== 'undefined' && navigator.modelContext && navigator.modelContext.provideContext) {
              navigator.modelContext.provideContext({
                tools: [
                  {
                    name: 'book_taxi',
                    description: 'Book a private taxi transfer in Saudi Arabia between airports, cities, and holy sites (Makkah, Madinah). Opens the booking page.',
                    inputSchema: {
                      type: 'object',
                      properties: {
                        from: { type: 'string', description: 'Pickup location (e.g. Jeddah Airport, Makkah, Riyadh)' },
                        to: { type: 'string', description: 'Drop-off location (e.g. Makkah, Madinah, Jeddah)' },
                        date: { type: 'string', format: 'date', description: 'Travel date (YYYY-MM-DD)' },
                        passengers: { type: 'number', description: 'Number of passengers (1-12)' }
                      },
                      required: ['from', 'to']
                    },
                    execute: async (params) => {
                      const url = new URL('https://taxiserviceksa.com/booking/');
                      if (params.from) url.searchParams.set('from', params.from);
                      if (params.to) url.searchParams.set('to', params.to);
                      if (params.date) url.searchParams.set('date', params.date);
                      if (params.passengers) url.searchParams.set('passengers', String(params.passengers));
                      window.location.href = url.toString();
                      return { success: true, url: url.toString() };
                    }
                  },
                  {
                    name: 'get_routes',
                    description: 'Browse all available taxi routes and pricing in Saudi Arabia',
                    inputSchema: { type: 'object', properties: {} },
                    execute: async () => {
                      window.location.href = 'https://taxiserviceksa.com/routes/';
                      return { success: true, url: 'https://taxiserviceksa.com/routes/' };
                    }
                  },
                  {
                    name: 'browse_fleet',
                    description: 'View available vehicle types, capacity, and features',
                    inputSchema: { type: 'object', properties: {} },
                    execute: async () => {
                      window.location.href = 'https://taxiserviceksa.com/fleet/';
                      return { success: true, url: 'https://taxiserviceksa.com/fleet/' };
                    }
                  }
                ]
              });
            }
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qp7iv7z299");
          `}
        </Script>

        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
