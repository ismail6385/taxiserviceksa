import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abu-dhabi-to-makkah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abu Dhabi to Makkah distance by road',
        'Abu Dhabi to Makkah distance',
        'Abu Dhabi to Makkah driving distance',
        'Abu Dhabi to Makkah driving time',
        'Abu Dhabi to Makkah by car',
        'Abu Dhabi to Makkah road distance',
        'Abu Dhabi to Makkah route',
        'Abu Dhabi to Makkah map',
        'how far is Abu Dhabi from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abu-dhabi-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abu-dhabi-to-makkah/',
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

export default function AbuDhabiToMakkahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
