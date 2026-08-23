import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-taif')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Taif distance by road',
        'Jeddah to Taif distance',
        'Jeddah to Taif driving distance',
        'Jeddah to Taif driving time',
        'Jeddah to Taif by car',
        'Jeddah to Taif road distance',
        'Jeddah to Taif route',
        'Jeddah to Taif map',
        'how far is Jeddah from Taif',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-taif/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-taif/',
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

export default function JeddahToTaifDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
