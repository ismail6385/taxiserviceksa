import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('alula-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'AlUla to Makkah distance by road',
        'AlUla to Makkah distance',
        'AlUla to Makkah driving distance',
        'AlUla to Makkah driving time',
        'AlUla to Makkah by car',
        'AlUla to Makkah road distance',
        'AlUla to Makkah route',
        'AlUla to Makkah map',
        'how far is AlUla from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/alula-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/alula-to-makkah/',
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

export default function AlulaToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
