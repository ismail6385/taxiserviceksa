import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('muscat-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Muscat to Jeddah distance by road',
        'Oman to Jeddah distance',
        'Muscat to Jeddah driving distance',
        'Muscat to Jeddah driving time',
        'Muscat to Jeddah by car',
        'Muscat to Jeddah road distance',
        'Muscat to Jeddah route',
        'Muscat to Jeddah map',
        'how far is Muscat from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/muscat-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/muscat-to-jeddah/',
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

export default function MuscatToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
