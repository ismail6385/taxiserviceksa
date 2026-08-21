import { Metadata } from 'next';
import HomeClientUrdu from './page-client';

export const metadata: Metadata = {
  title: 'سعودی عرب میں ٹیکسی سروس | Taxi Service KSA',
  description: 'سعودی عرب میں بہترین وی آئی پی ٹیکسی سروس بک کریں۔ عمرہ ٹرانسپورٹ، ایئرپورٹ ٹرانسفر، انٹرسٹی سفر اور پیشہ ور ڈرائیورز کے ساتھ لگژری پرائیویٹ گاڑیاں۔',
  alternates: {
    canonical: 'https://taxiserviceksa.com/ur/',
    languages: {
      'en': 'https://taxiserviceksa.com/',
      'ar': 'https://taxiserviceksa.com/ar/',
      'ur': 'https://taxiserviceksa.com/ur/',
      'x-default': 'https://taxiserviceksa.com/',
    },
  },
  openGraph: {
    images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'سعودی عرب میں ٹیکسی سروس | Taxi Service KSA' }],
    title: 'سعودی عرب میں ٹیکسی سروس | Taxi Service KSA',
    description: 'سعودی عرب میں بہترین وی آئی پی ٹیکسی سروس بک کریں۔ عمرہ ٹرانسپورٹ، ایئرپورٹ ٹرانسفر اور انٹرسٹی سفر پیشہ ور ڈرائیورز کے ساتھ۔',
    url: 'https://taxiserviceksa.com/ur/',
    siteName: 'Taxi Service KSA',
    locale: 'ur_PK',
    type: 'website',
  },
  keywords: ['سعودی عرب ٹیکسی', 'عمرہ ٹیکسی سروس', 'جدہ ایئرپورٹ ٹیکسی', 'مکہ مدینہ ٹیکسی', 'سعودی عرب پرائیویٹ کار', 'اردو بولنے والے ڈرائیور سعودی عرب'],
};

export default function HomeUrdu() {
  return (
    <>
      <script
        type="application/ld+json"
        id="website-search-schema-ur"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://taxiserviceksa.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://taxiserviceksa.com/routes/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        id="org-schema-home-ur"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "url": "https://taxiserviceksa.com",
            "logo": "https://taxiserviceksa.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/",
              "https://www.linkedin.com/company/taxi-service-ksa/",
              "https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+966 56 357 3531",
                "contactType": "کسٹمر سروس"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Speakable",
            "cssSelector": ["h1", "p"]
          })
        }}
      />
      <HomeClientUrdu />
    </>
  );
}
