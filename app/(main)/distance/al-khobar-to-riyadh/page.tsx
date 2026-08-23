import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('al-khobar-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Khobar to Riyadh distance by road',
        'Al Khobar to Riyadh distance',
        'Al Khobar to Riyadh driving distance',
        'Al Khobar to Riyadh driving time',
        'Al Khobar to Riyadh by car',
        'Al Khobar to Riyadh road distance',
        'Al Khobar to Riyadh route',
        'Al Khobar to Riyadh map',
        'how far is Al Khobar from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/al-khobar-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/al-khobar-to-riyadh/',
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

export default function AlKhobarToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
