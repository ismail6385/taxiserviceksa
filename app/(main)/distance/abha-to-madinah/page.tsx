import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abha-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abha to Madinah distance by road',
        'Abha to Madinah distance',
        'Abha to Madinah driving distance',
        'Abha to Madinah driving time',
        'Abha to Madinah by car',
        'Abha to Madinah road distance',
        'Abha to Madinah route',
        'Abha to Madinah map',
        'how far is Abha from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abha-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abha-to-madinah/',
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

export default function AbhaToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
