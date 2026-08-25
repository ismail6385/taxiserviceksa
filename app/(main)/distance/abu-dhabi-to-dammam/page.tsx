import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abu-dhabi-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abu Dhabi to Dammam distance by road',
        'Abu Dhabi to Dammam distance',
        'Abu Dhabi to Dammam driving distance',
        'Abu Dhabi to Dammam driving time',
        'Abu Dhabi to Dammam by car',
        'Abu Dhabi to Dammam road distance',
        'Abu Dhabi to Dammam route',
        'Abu Dhabi to Dammam map',
        'how far is Abu Dhabi from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abu-dhabi-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abu-dhabi-to-dammam/',
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

export default function AbuDhabiToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
