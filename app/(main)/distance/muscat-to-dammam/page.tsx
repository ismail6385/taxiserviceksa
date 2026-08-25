import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('muscat-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Muscat to Dammam distance by road',
        'Oman to Dammam distance',
        'Muscat to Dammam driving distance',
        'Muscat to Dammam driving time',
        'Muscat to Dammam by car',
        'Muscat to Dammam road distance',
        'Muscat to Dammam route',
        'Muscat to Dammam map',
        'how far is Muscat from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/muscat-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/muscat-to-dammam/',
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

export default function MuscatToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
