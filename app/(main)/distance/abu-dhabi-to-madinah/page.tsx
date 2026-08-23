import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abu-dhabi-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abu Dhabi to Madinah distance by road',
        'Abu Dhabi to Madinah distance',
        'Abu Dhabi to Madinah driving distance',
        'Abu Dhabi to Madinah driving time',
        'Abu Dhabi to Madinah by car',
        'Abu Dhabi to Madinah road distance',
        'Abu Dhabi to Madinah route',
        'Abu Dhabi to Madinah map',
        'how far is Abu Dhabi from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abu-dhabi-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abu-dhabi-to-madinah/',
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

export default function AbuDhabiToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
