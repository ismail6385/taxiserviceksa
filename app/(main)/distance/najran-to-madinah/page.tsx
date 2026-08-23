import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('najran-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Najran to Madinah distance by road',
        'Najran to Madinah distance',
        'Najran to Madinah driving distance',
        'Najran to Madinah driving time',
        'Najran to Madinah by car',
        'Najran to Madinah road distance',
        'Najran to Madinah route',
        'Najran to Madinah map',
        'how far is Najran from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/najran-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/najran-to-madinah/',
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

export default function NajranToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
