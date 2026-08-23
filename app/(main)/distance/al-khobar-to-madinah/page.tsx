import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('al-khobar-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Khobar to Madinah distance by road',
        'Al Khobar to Madinah distance',
        'Al Khobar to Madinah driving distance',
        'Al Khobar to Madinah driving time',
        'Al Khobar to Madinah by car',
        'Al Khobar to Madinah road distance',
        'Al Khobar to Madinah route',
        'Al Khobar to Madinah map',
        'how far is Al Khobar from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/al-khobar-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/al-khobar-to-madinah/',
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

export default function AlKhobarToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
