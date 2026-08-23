import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('bahrain-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Bahrain to Riyadh distance by road',
        'Manama to Riyadh distance',
        'Bahrain to Riyadh driving distance',
        'Bahrain to Riyadh driving time',
        'Bahrain to Riyadh by car',
        'Bahrain to Riyadh road distance',
        'Bahrain to Riyadh route',
        'Bahrain to Riyadh map',
        'how far is Bahrain from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/bahrain-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/bahrain-to-riyadh/',
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

export default function BahrainToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
