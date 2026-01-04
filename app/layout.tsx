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
  title: 'Taxi Service KSA',
  description: 'Reliable taxi service in Saudi Arabia',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Taxi Service KSA',
    description: 'Reliable taxi service in Saudi Arabia',
    url: 'https://taxiserviceksa.com',
    siteName: 'Taxi Service KSA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service KSA',
    description: 'Reliable taxi service in Saudi Arabia',
    images: ['/twitter-image.jpg'],
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

        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
