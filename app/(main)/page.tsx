import { Metadata } from 'next';
import HomeClient from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'BEST VIP Private Transfer Saudi Arabia | Executive Chauffeur',
  description: 'Book elite VIP private transfers in Saudi Arabia for Umrah, airport transfers & executive travel. 24/7 premium chauffeur service with professional drivers.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'BEST VIP Private Transfer & Executive Chauffeur Saudi Arabia',
    description: 'Book elite VIP private transfers in Saudi Arabia for Umrah, airport transfers & executive travel. 24/7 premium chauffeur service with professional drivers.',
    url: 'https://taxiserviceksa.com/',
    siteName: 'VIP Transfer KSA',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['VIP Private Transfer Saudi Arabia', 'Executive Chauffeur Saudi Arabia', 'VIP Umrah Transport', 'Premium Airport Transfer KSA', 'rent a car with driver in saudi arabia', 'jeddah to makkah coaster', 'transport madinah to makkah', 'private luxury transfer for families', 'executive suv for rent in jeddah', 'taxi saudi arabia from uk', 'umrah taxi from usa', 'jeddah airport transfer canada', 'prebook taxi jeddah', 'luxury transport saudi arabia'],
};

export default async function Home() {
  const blogs = await blogService.getPublishedBlogs();
  const latestBlogs = blogs.slice(0, 4);
  return (
    <>
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
