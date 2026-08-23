import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('taif-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Taif to Makkah distance by road',
        'Taif to Makkah distance',
        'Taif to Makkah driving distance',
        'Taif to Makkah driving time',
        'Taif to Makkah by car',
        'Taif to Makkah road distance',
        'Taif to Makkah route',
        'Taif to Makkah map',
        'how far is Taif from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/taif-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/taif-to-makkah/',
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

export default function TaifToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
