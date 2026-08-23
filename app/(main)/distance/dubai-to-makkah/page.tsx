import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dubai-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dubai to Makkah distance by road',
        'Dubai to Makkah distance',
        'Dubai to Makkah driving distance',
        'Dubai to Makkah driving time',
        'Dubai to Makkah by car',
        'Dubai to Makkah road distance',
        'Dubai to Makkah route',
        'Dubai to Makkah map',
        'how far is Dubai from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dubai-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dubai-to-makkah/',
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

export default function DubaiToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
