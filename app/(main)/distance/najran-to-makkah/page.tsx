import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('najran-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Najran to Makkah distance by road',
        'Najran to Makkah distance',
        'Najran to Makkah driving distance',
        'Najran to Makkah driving time',
        'Najran to Makkah by car',
        'Najran to Makkah road distance',
        'Najran to Makkah route',
        'Najran to Makkah map',
        'how far is Najran from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/najran-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/najran-to-makkah/',
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

export default function NajranToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
