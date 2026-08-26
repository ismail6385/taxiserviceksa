import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('kuwait-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Kuwait to Jeddah distance by road',
        'Kuwait City to Jeddah distance',
        'Kuwait to Jeddah driving distance',
        'Kuwait to Jeddah driving time',
        'Kuwait to Jeddah by car',
        'Kuwait to Jeddah road distance',
        'Kuwait to Jeddah route',
        'Kuwait to Jeddah map',
        'how far is Kuwait from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/kuwait-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/kuwait-to-jeddah/',
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

export default function KuwaitToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
