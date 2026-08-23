import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-taif')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Taif distance by road',
        'Riyadh to Taif distance',
        'Riyadh to Taif driving distance',
        'Riyadh to Taif driving time',
        'Riyadh to Taif by car',
        'Riyadh to Taif road distance',
        'Riyadh to Taif route',
        'Riyadh to Taif map',
        'how far is Riyadh from Taif',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-taif/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-taif/',
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

export default function RiyadhToTaifDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
