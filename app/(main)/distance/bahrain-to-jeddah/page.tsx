import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('bahrain-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Bahrain to Jeddah distance by road',
        'Manama to Jeddah distance',
        'Bahrain to Jeddah driving distance',
        'Bahrain to Jeddah driving time',
        'Bahrain to Jeddah by car',
        'Bahrain to Jeddah road distance',
        'Bahrain to Jeddah route',
        'Bahrain to Jeddah map',
        'how far is Bahrain from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/bahrain-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/bahrain-to-jeddah/',
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

export default function BahrainToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
