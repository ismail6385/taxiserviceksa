import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('al-khobar-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Khobar to Jeddah distance by road',
        'Al Khobar to Jeddah distance',
        'Al Khobar to Jeddah driving distance',
        'Al Khobar to Jeddah driving time',
        'Al Khobar to Jeddah by car',
        'Al Khobar to Jeddah road distance',
        'Al Khobar to Jeddah route',
        'Al Khobar to Jeddah map',
        'how far is Al Khobar from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/al-khobar-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/al-khobar-to-jeddah/',
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

export default function AlKhobarToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
