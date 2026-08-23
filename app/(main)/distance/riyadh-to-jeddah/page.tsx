import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Jeddah distance by road',
        'Riyadh to Jeddah distance',
        'Riyadh to Jeddah driving distance',
        'Riyadh to Jeddah driving time',
        'Riyadh to Jeddah by car',
        'Riyadh to Jeddah road distance',
        'Riyadh to Jeddah route',
        'Riyadh to Jeddah map',
        'how far is Riyadh from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-jeddah/',
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

export default function RiyadhToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
