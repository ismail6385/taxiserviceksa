import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Makkah distance by road',
        'Riyadh to Makkah distance',
        'Riyadh to Makkah driving distance',
        'Riyadh to Makkah driving time',
        'Riyadh to Makkah by car',
        'Riyadh to Makkah road distance',
        'Riyadh to Makkah route',
        'Riyadh to Makkah map',
        'how far is Riyadh from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-makkah/',
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

export default function RiyadhToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
