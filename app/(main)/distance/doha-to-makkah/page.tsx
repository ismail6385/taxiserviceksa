import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('doha-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Doha to Makkah distance by road',
        'Qatar to Makkah distance',
        'Doha to Makkah driving distance',
        'Doha to Makkah driving time',
        'Doha to Makkah by car',
        'Doha to Makkah road distance',
        'Doha to Makkah route',
        'Doha to Makkah map',
        'how far is Doha from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/doha-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/doha-to-makkah/',
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

export default function DohaToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
