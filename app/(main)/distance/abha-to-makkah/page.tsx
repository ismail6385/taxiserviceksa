import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abha-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abha to Makkah distance by road',
        'Abha to Makkah distance',
        'Abha to Makkah driving distance',
        'Abha to Makkah driving time',
        'Abha to Makkah by car',
        'Abha to Makkah road distance',
        'Abha to Makkah route',
        'Abha to Makkah map',
        'how far is Abha from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abha-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abha-to-makkah/',
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

export default function AbhaToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
