import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-yanbu')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Yanbu distance by road',
        'Riyadh to Yanbu distance',
        'Riyadh to Yanbu driving distance',
        'Riyadh to Yanbu driving time',
        'Riyadh to Yanbu by car',
        'Riyadh to Yanbu road distance',
        'Riyadh to Yanbu route',
        'Riyadh to Yanbu map',
        'how far is Riyadh from Yanbu',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-yanbu/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-yanbu/',
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

export default function RiyadhToYanbuDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
