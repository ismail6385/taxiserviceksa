import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('abu-dhabi-to-jeddah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Abu Dhabi to Jeddah distance by road',
        'Abu Dhabi to Jeddah distance',
        'Abu Dhabi to Jeddah driving distance',
        'Abu Dhabi to Jeddah driving time',
        'Abu Dhabi to Jeddah by car',
        'Abu Dhabi to Jeddah road distance',
        'Abu Dhabi to Jeddah route',
        'Abu Dhabi to Jeddah map',
        'how far is Abu Dhabi from Jeddah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/abu-dhabi-to-jeddah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/abu-dhabi-to-jeddah/',
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

export default function AbuDhabiToJeddahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
