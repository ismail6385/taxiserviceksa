import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dubai-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dubai to Madinah distance by road',
        'Dubai to Madinah distance',
        'Dubai to Madinah driving distance',
        'Dubai to Madinah driving time',
        'Dubai to Madinah by car',
        'Dubai to Madinah road distance',
        'Dubai to Madinah route',
        'Dubai to Madinah map',
        'how far is Dubai from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dubai-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dubai-to-madinah/',
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

export default function DubaiToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
