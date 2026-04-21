import { Metadata } from 'next';
import HomeClient from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'VIP Taxi Service Saudi Arabia | Taxi Service KSA',
  description: 'Book the best VIP Taxi Service Saudi Arabia. Experience elite private transfers, intercity travel, and border crossings with our professional executive chauffeurs.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'VIP Taxi Service Saudi Arabia | Taxi Service KSA',
    description: 'Book the best VIP Taxi Service Saudi Arabia. Experience elite private transfers, intercity travel, and border crossings with our professional executive chauffeurs.',
    url: 'https://taxiserviceksa.com/',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['Taxi Service KSA', 'Taxi Service Saudi Arabia', 'Border Crossing Taxi KSA', 'Tourist Taxi Saudi Arabia', 'Taxi Makkah to Madinah', 'Jeddah Airport Taxi', 'Intercity Taxi Saudi', 'Saudi Arabia Private Car Service', 'VIP Travel KSA'],
};

export default async function Home() {
  const blogs = await blogService.getPublishedBlogs();
  const latestBlogs = blogs.slice(0, 4);
  return (
    <>
      <script
        type="application/ld+json"
        id="website-search-schema"
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
        id="org-schema-home"
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
                "telephone": "+966 56 073 2928",
                "contactType": "customer service"
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
      <HomeClient latestBlogs={latestBlogs} />
    </>
  );
}
