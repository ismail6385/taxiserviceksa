import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abu-dhabi-to-riyadh')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abu Dhabi to Riyadh distance by road',
        'Abu Dhabi to Riyadh distance',
        'Abu Dhabi to Riyadh driving distance',
        'Abu Dhabi to Riyadh driving time',
        'Abu Dhabi to Riyadh by car',
        'Abu Dhabi to Riyadh road distance',
        'Abu Dhabi to Riyadh route',
        'Abu Dhabi to Riyadh map',
        'how far is Abu Dhabi from Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abu-dhabi-to-riyadh/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abu-dhabi-to-riyadh/',
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

export default function AbuDhabiToRiyadhDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
