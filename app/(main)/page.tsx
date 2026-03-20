import { Metadata } from 'next';
import HomeClient from './page-client';
import { blogService } from '@/lib/blogService';

export const metadata: Metadata = {
  title: 'Taxi Service KSA | VIP Private Transfers & Border Crossing | Saudi Arabia',
  description: 'Book executive private transfers across all Saudi Arabia cities including Makkah, Madinah, Riyadh, Jeddah, and AlUla. Expert chauffeur service for border crossings, tourist spots, and Umrah pilgrims.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'Taxi Service KSA | All Cities & Border Crossing | VIP Transfers',
    description: 'Book executive private transfers across all Saudi Arabia cities. Specializing in long-distance travel, border crossings, and VIP car services for tourists and pilgrims.',
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

