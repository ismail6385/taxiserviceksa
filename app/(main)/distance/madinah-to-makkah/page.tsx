import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('madinah-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Madinah to Makkah distance by road',
        'Madinah to Makkah distance',
        'Madinah to Makkah driving distance',
        'Madinah to Makkah driving time',
        'Madinah to Makkah by car',
        'Madinah to Makkah road distance',
        'Madinah to Makkah route',
        'Madinah to Makkah map',
        'how far is Madinah from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/madinah-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/madinah-to-makkah/',
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: route.seoTitle }],
    },
    twitter: {
        card: 'summary_large_image',
        title: route.seoTitle,
        description: route.metaDescription,
    },
};

export default function MadinahToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
