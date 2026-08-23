import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('bahrain-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Bahrain to Madinah distance by road',
        'Manama to Madinah distance',
        'Bahrain to Madinah driving distance',
        'Bahrain to Madinah driving time',
        'Bahrain to Madinah by car',
        'Bahrain to Madinah road distance',
        'Bahrain to Madinah route',
        'Bahrain to Madinah map',
        'how far is Bahrain from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/bahrain-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/bahrain-to-madinah/',
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

export default function BahrainToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
