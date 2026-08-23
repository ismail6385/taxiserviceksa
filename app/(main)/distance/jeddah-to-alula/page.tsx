import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-alula')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to AlUla distance by road',
        'Jeddah to AlUla distance',
        'Jeddah to AlUla driving distance',
        'Jeddah to AlUla driving time',
        'Jeddah to AlUla by car',
        'Jeddah to AlUla road distance',
        'Jeddah to AlUla route',
        'Jeddah to AlUla map',
        'how far is Jeddah from AlUla',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-alula/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-alula/',
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

export default function JeddahToAlulaDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
