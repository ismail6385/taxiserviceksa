import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Makkah distance by road',
        'Jeddah to Makkah distance',
        'Jeddah to Makkah driving distance',
        'Jeddah to Makkah driving time',
        'Jeddah to Makkah by car',
        'Jeddah to Makkah road distance',
        'Jeddah to Makkah route',
        'Jeddah to Makkah map',
        'how far is Jeddah from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-makkah/',
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

export default function JeddahToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
