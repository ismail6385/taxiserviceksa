import { Metadata } from 'next';
import HomeClientArabic from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'خدمة تاكسي VIP في السعودية | Taxi Service KSA',
  description: 'احجز أفضل خدمة تاكسي VIP في السعودية. استمتع بنقل خاص فاخر، وسفر بين المدن، وعبور الحدود مع سائقينا التنفيذيين المحترفين.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/ar/',
    languages: {
      'en': 'https://taxiserviceksa.com/',
      'ar': 'https://taxiserviceksa.com/ar/',
      'x-default': 'https://taxiserviceksa.com/',
    },
  },
  openGraph: {
    title: 'خدمة تاكسي VIP في السعودية | Taxi Service KSA',
    description: 'احجز أفضل خدمة تاكسي VIP في السعودية. استمتع بنقل خاص فاخر، وسفر بين المدن، وعبور الحدود مع سائقينا التنفيذيين المحترفين.',
    url: 'https://taxiserviceksa.com/ar/',
    siteName: 'Taxi Service KSA',
    locale: 'ar_SA',
    type: 'website',
  },
  keywords: ['تاكسي السعودية', 'خدمة تاكسي السعودية', 'تاكسي عبور الحدود السعودية', 'تاكسي سياحي السعودية', 'تاكسي من مكة إلى المدينة', 'تاكسي مطار جدة', 'تاكسي بين المدن السعودية', 'سيارة خاصة VIP السعودية', 'سفر VIP السعودية'],
};

export default async function HomeArabic() {
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
                "contactType": "خدمة العملاء"
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
      <HomeClientArabic latestBlogs={latestBlogs} />
    </>
  );
}
