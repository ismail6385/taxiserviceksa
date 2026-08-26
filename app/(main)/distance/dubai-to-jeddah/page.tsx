import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dubai-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dubai to Jeddah distance by road',
        'Dubai to Jeddah distance',
        'Dubai to Jeddah driving distance',
        'Dubai to Jeddah driving time',
        'Dubai to Jeddah by car',
        'Dubai to Jeddah road distance',
        'Dubai to Jeddah route',
        'Dubai to Jeddah map',
        'how far is Dubai from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dubai-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dubai-to-jeddah/',
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

export default function DubaiToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
