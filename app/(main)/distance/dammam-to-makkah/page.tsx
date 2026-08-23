import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dammam-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Makkah distance by road',
        'Dammam to Makkah distance',
        'Dammam to Makkah driving distance',
        'Dammam to Makkah driving time',
        'Dammam to Makkah by car',
        'Dammam to Makkah road distance',
        'Dammam to Makkah route',
        'Dammam to Makkah map',
        'how far is Dammam from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dammam-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dammam-to-makkah/',
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

export default function DammamToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
