import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Dammam distance by road',
        'Jeddah to Dammam distance',
        'Jeddah to Dammam driving distance',
        'Jeddah to Dammam driving time',
        'Jeddah to Dammam by car',
        'Jeddah to Dammam road distance',
        'Jeddah to Dammam route',
        'Jeddah to Dammam map',
        'how far is Jeddah from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-dammam/',
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

export default function JeddahToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
