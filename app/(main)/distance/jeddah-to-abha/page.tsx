import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-abha')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Abha distance by road',
        'Jeddah to Abha distance',
        'Jeddah to Abha driving distance',
        'Jeddah to Abha driving time',
        'Jeddah to Abha by car',
        'Jeddah to Abha road distance',
        'Jeddah to Abha route',
        'Jeddah to Abha map',
        'how far is Jeddah from Abha',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-abha/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-abha/',
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

export default function JeddahToAbhaDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
