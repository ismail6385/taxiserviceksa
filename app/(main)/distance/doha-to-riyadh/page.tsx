import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('doha-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Doha to Riyadh distance by road',
        'Doha to Riyadh distance',
        'Doha to Riyadh driving distance',
        'Doha to Riyadh driving time',
        'Doha to Riyadh by car',
        'Doha to Riyadh road distance',
        'Doha to Riyadh route',
        'Doha to Riyadh map',
        'how far is Doha from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/doha-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/doha-to-riyadh/',
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

export default function DohaToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
