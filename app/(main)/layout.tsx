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
  alternates: {
    canonical: './',
  },
  title: {
    default: 'VIP Transfer KSA | #1 Airport Taxi & Umrah Transport (Pre-Book)',
    template: '%s | VIP Transfer KSA',
  },
  description: 'Pre-book premium taxi services in Saudi Arabia. Trusted by travelers from UK, USA, Canada & Indonesia. Reliable Jeddah Airport to Makkah transfers. Fixed rates & English-speaking drivers.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'VIP Transfer KSA | Premium Jeddah to Makkah Transfers',
    description: 'Book official taxi services in Saudi Arabia. Reliable private transfers from Jeddah Airport to Makkah & Madinah. Fixed rates, VIP GMCs, and 24/7 customer support.',
    url: './',
    siteName: 'VIP Transfer KSA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Transfer KSA Fleet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Transfer KSA | Premium Transfers',
    description: 'Book official taxi services in Saudi Arabia. Reliable private transfers from Jeddah Airport to Makkah & Madinah.',
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
