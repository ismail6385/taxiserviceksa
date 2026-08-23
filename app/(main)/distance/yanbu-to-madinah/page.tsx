import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('yanbu-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Yanbu to Madinah distance by road',
        'Yanbu to Madinah distance',
        'Yanbu to Madinah driving distance',
        'Yanbu to Madinah driving time',
        'Yanbu to Madinah by car',
        'Yanbu to Madinah road distance',
        'Yanbu to Madinah route',
        'Yanbu to Madinah map',
        'how far is Yanbu from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/yanbu-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/yanbu-to-madinah/',
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

export default function YanbuToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
