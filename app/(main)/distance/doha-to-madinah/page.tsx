import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('doha-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Doha to Madinah distance by road',
        'Qatar to Madinah distance',
        'Doha to Madinah driving distance',
        'Doha to Madinah driving time',
        'Doha to Madinah by car',
        'Doha to Madinah road distance',
        'Doha to Madinah route',
        'Doha to Madinah map',
        'how far is Doha from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/doha-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/doha-to-madinah/',
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

export default function DohaToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
