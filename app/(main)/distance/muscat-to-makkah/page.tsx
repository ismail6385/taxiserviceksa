import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('muscat-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Muscat to Makkah distance by road',
        'Oman to Makkah distance',
        'Muscat to Makkah driving distance',
        'Muscat to Makkah driving time',
        'Muscat to Makkah by car',
        'Muscat to Makkah road distance',
        'Muscat to Makkah route',
        'Muscat to Makkah map',
        'how far is Muscat from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/muscat-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/muscat-to-makkah/',
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

export default function MuscatToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
