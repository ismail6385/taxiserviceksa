import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dammam-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Jeddah distance by road',
        'Dammam to Jeddah distance',
        'Dammam to Jeddah driving distance',
        'Dammam to Jeddah driving time',
        'Dammam to Jeddah by car',
        'Dammam to Jeddah road distance',
        'Dammam to Jeddah route',
        'Dammam to Jeddah map',
        'how far is Dammam from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dammam-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dammam-to-jeddah/',
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

export default function DammamToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
