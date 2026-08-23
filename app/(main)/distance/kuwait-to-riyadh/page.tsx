import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('kuwait-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Kuwait to Riyadh distance by road',
        'Kuwait City to Riyadh distance',
        'Kuwait to Riyadh driving distance',
        'Kuwait to Riyadh driving time',
        'Kuwait to Riyadh by car',
        'Kuwait to Riyadh road distance',
        'Kuwait to Riyadh route',
        'Kuwait to Riyadh map',
        'how far is Kuwait from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/kuwait-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/kuwait-to-riyadh/',
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

export default function KuwaitToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
