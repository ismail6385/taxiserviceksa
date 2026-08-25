import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Dammam distance by road',
        'Riyadh to Dammam distance',
        'Riyadh to Dammam driving distance',
        'Riyadh to Dammam driving time',
        'Riyadh to Dammam by car',
        'Riyadh to Dammam road distance',
        'Riyadh to Dammam route',
        'Riyadh to Dammam map',
        'how far is Riyadh from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-dammam/',
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

export default function RiyadhToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
