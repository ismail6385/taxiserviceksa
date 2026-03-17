import { Metadata } from 'next';
import HomeClient from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'Taxi Service KSA | Taxi Makkah to Madinah | Jeddah Airport Taxi',
  description: 'Book the best online taxi in Saudi Arabia. Specializing in Taxi Makkah to Madinah, Jeddah Airport transfers, and VIP private car services for Umrah pilgrims.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'Taxi Service KSA | VIP Private Transfer | Taxi Makkah to Madinah',
    description: 'Book the best online taxi in Saudi Arabia. Specializing in Taxi Makkah to Madinah, Jeddah Airport transfers, and VIP private car services for Umrah pilgrims.',
    url: 'https://taxiserviceksa.com/',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['Taxi Makkah to Madinah', 'Jeddah Airport Taxi', 'Taxi Service KSA', 'Taxi in Makkah', 'Taxi in Jeddah', 'Taxi Makkah to Jeddah', 'Umrah Taxi Service', 'Private Car Makkah to Madinah'],
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

