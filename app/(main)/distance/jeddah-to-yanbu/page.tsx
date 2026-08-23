import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-yanbu')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Yanbu distance by road',
        'Jeddah to Yanbu distance',
        'Jeddah to Yanbu driving distance',
        'Jeddah to Yanbu driving time',
        'Jeddah to Yanbu by car',
        'Jeddah to Yanbu road distance',
        'Jeddah to Yanbu route',
        'Jeddah to Yanbu map',
        'how far is Jeddah from Yanbu',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-yanbu/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-yanbu/',
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

export default function JeddahToYanbuDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
