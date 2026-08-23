import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('yanbu-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Yanbu to Makkah distance by road',
        'Yanbu to Makkah distance',
        'Yanbu to Makkah driving distance',
        'Yanbu to Makkah driving time',
        'Yanbu to Makkah by car',
        'Yanbu to Makkah road distance',
        'Yanbu to Makkah route',
        'Yanbu to Makkah map',
        'how far is Yanbu from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/yanbu-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/yanbu-to-makkah/',
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

export default function YanbuToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
