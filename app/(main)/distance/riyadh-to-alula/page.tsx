import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-alula')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to AlUla distance by road',
        'Riyadh to AlUla distance',
        'Riyadh to AlUla driving distance',
        'Riyadh to AlUla driving time',
        'Riyadh to AlUla by car',
        'Riyadh to AlUla road distance',
        'Riyadh to AlUla route',
        'Riyadh to AlUla map',
        'how far is Riyadh from AlUla',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-alula/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-alula/',
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

export default function RiyadhToAlulaDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
