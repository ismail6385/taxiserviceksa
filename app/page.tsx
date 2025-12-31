import { Metadata } from 'next';
import HomeClient from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'Online Taxi Service in Saudi Arabia | Airport & Umrah Taxi',
  description: 'Book online taxi service in Saudi Arabia for Umrah, airport transfers & city travel. 24/7 reliable airport taxi with professional drivers.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'Online Taxi Service in Saudi Arabia | Airport & Umrah Taxi',
    description: 'Book online taxi service in Saudi Arabia for Umrah, airport transfers & city travel. 24/7 reliable airport taxi with professional drivers.',
    url: 'https://taxiserviceksa.com/',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['Online Taxi Service in Saudi Arabia', 'Taxi Service in Saudi Arabia', 'Umrah Taxi Service', 'Airport Taxi KSA', 'rent a car with driver in saudi arabia', 'jeddah to makkah coaster', 'transport madinah to makkah', 'private umrah taxi for families', 'toyota hiace for rent in jeddah'],
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
