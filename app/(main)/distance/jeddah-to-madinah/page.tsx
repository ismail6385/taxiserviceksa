import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('jeddah-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jeddah to Madinah distance by road',
        'Jeddah to Madinah distance',
        'Jeddah to Madinah driving distance',
        'Jeddah to Madinah driving time',
        'Jeddah to Madinah by car',
        'Jeddah to Madinah road distance',
        'Jeddah to Madinah route',
        'Jeddah to Madinah map',
        'how far is Jeddah from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/jeddah-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/jeddah-to-madinah/',
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

export default function JeddahToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
