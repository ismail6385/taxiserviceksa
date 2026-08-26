import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('doha-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Doha to Jeddah distance by road',
        'Doha to Jeddah distance',
        'Doha to Jeddah driving distance',
        'Doha to Jeddah driving time',
        'Doha to Jeddah by car',
        'Doha to Jeddah road distance',
        'Doha to Jeddah route',
        'Doha to Jeddah map',
        'how far is Doha from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/doha-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/doha-to-jeddah/',
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

export default function DohaToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
