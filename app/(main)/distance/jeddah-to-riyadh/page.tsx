import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Riyadh distance by road',
        'Jeddah to Riyadh distance',
        'Jeddah to Riyadh driving distance',
        'Jeddah to Riyadh driving time',
        'Jeddah to Riyadh by car',
        'Jeddah to Riyadh road distance',
        'Jeddah to Riyadh route',
        'Jeddah to Riyadh map',
        'how far is Jeddah from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-riyadh/',
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

export default function JeddahToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
