import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('tabuk-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Tabuk to Makkah distance by road',
        'Tabuk to Makkah distance',
        'Tabuk to Makkah driving distance',
        'Tabuk to Makkah driving time',
        'Tabuk to Makkah by car',
        'Tabuk to Makkah road distance',
        'Tabuk to Makkah route',
        'Tabuk to Makkah map',
        'how far is Tabuk from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/tabuk-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/tabuk-to-makkah/',
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

export default function TabukToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
