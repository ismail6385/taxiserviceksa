import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('bahrain-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Bahrain to Makkah distance by road',
        'Manama to Makkah distance',
        'Bahrain to Makkah driving distance',
        'Bahrain to Makkah driving time',
        'Bahrain to Makkah by car',
        'Bahrain to Makkah road distance',
        'Bahrain to Makkah route',
        'Bahrain to Makkah map',
        'how far is Bahrain from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/bahrain-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/bahrain-to-makkah/',
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

export default function BahrainToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
