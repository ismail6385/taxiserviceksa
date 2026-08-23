import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dammam-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Riyadh distance by road',
        'Dammam to Riyadh distance',
        'Dammam to Riyadh driving distance',
        'Dammam to Riyadh driving time',
        'Dammam to Riyadh by car',
        'Dammam to Riyadh road distance',
        'Dammam to Riyadh route',
        'Dammam to Riyadh map',
        'how far is Dammam from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dammam-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dammam-to-riyadh/',
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

export default function DammamToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
