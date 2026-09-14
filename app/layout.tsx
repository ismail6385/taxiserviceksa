import './(main)/globals.css';
import { Poppins } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';
import JsonLdSiteNavigation from '@/components/seo/JsonLdSiteNavigation';
import CookieConsentManager from '@/components/CookieConsentManager';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://taxiserviceksa.com'),
  verification: {
    google: 'Belm0suIdEZOrTDlLuFKDh04Zjd66lvr6K5LAkPcwIo',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // lang/dir default to English — correct for the vast majority of pages.
  // /ar/* and /ur/* are corrected below by a synchronous, render-blocking
  // inline script (not a headers()/usePathname() effect) so there's no
  // flash of LTR-then-RTL on Arabic/Urdu pages. This intentionally avoids
  // reading the request pathname on the server (via next/headers) here:
  // headers() is a Dynamic Function, and calling it in the ROOT layout
  // forced every single page on the site — including fully static ones
  // like /routes/*, /services/*, /guides/* — out of static rendering and
  // into a fresh, uncached render on every request (confirmed via
  // `Cache-Control: private, no-cache, no-store` on pages with zero
  // dynamic data). That made the whole site slower and meant a burst of
  // crawler traffic could occasionally hit a slow/incomplete render.
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              var p = window.location.pathname;
              if (p === '/ar' || p.indexOf('/ar/') === 0) {
                document.documentElement.lang = 'ar';
                document.documentElement.dir = 'rtl';
              } else if (p === '/ur' || p.indexOf('/ur/') === 0) {
                document.documentElement.lang = 'ur';
                document.documentElement.dir = 'rtl';
              }
            })();
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function initWebMCP() {
              if (typeof navigator !== 'undefined' && navigator.modelContext && typeof navigator.modelContext.provideContext === 'function') {
                if (window.__webmcp_initialized) return;
                try {
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
                  window.__webmcp_initialized = true;
                  console.log('WebMCP tools registered successfully');
                } catch (e) {
                  console.error('WebMCP registration failed', e);
                }
              }
            }
            initWebMCP();
            window.addEventListener('load', initWebMCP);
            // Also try on DOMContentLoaded just in case
            window.addEventListener('DOMContentLoaded', initWebMCP);
            `
          }}
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        {/* Google Analytics, Microsoft Clarity, and Trustpilot only load after the
            visitor accepts cookies via CookieConsentManager's banner. */}
        <CookieConsentManager />

        <LayoutWrapper>
          <JsonLdSiteNavigation />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
