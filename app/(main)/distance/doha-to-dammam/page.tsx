import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('doha-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Doha to Dammam distance by road',
        'Doha to Dammam distance',
        'Doha to Dammam driving distance',
        'Doha to Dammam driving time',
        'Doha to Dammam by car',
        'Doha to Dammam road distance',
        'Doha to Dammam route',
        'Doha to Dammam map',
        'how far is Doha from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/doha-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/doha-to-dammam/',
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

export default function DohaToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
