import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('al-khobar-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Khobar to Makkah distance by road',
        'Al Khobar to Makkah distance',
        'Al Khobar to Makkah driving distance',
        'Al Khobar to Makkah driving time',
        'Al Khobar to Makkah by car',
        'Al Khobar to Makkah road distance',
        'Al Khobar to Makkah route',
        'Al Khobar to Makkah map',
        'how far is Al Khobar from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/al-khobar-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/al-khobar-to-makkah/',
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

export default function AlKhobarToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
