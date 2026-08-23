import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Madinah distance by road',
        'Riyadh to Madinah distance',
        'Riyadh to Madinah driving distance',
        'Riyadh to Madinah driving time',
        'Riyadh to Madinah by car',
        'Riyadh to Madinah road distance',
        'Riyadh to Madinah route',
        'Riyadh to Madinah map',
        'how far is Riyadh from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-madinah/',
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

export default function RiyadhToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
