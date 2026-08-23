import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('muscat-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Muscat to Riyadh distance by road',
        'Oman to Riyadh distance',
        'Muscat to Riyadh driving distance',
        'Muscat to Riyadh driving time',
        'Muscat to Riyadh by car',
        'Muscat to Riyadh road distance',
        'Muscat to Riyadh route',
        'Muscat to Riyadh map',
        'how far is Muscat from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/muscat-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/muscat-to-riyadh/',
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

export default function MuscatToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
