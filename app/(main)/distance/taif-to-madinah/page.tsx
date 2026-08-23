import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('taif-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Taif to Madinah distance by road',
        'Taif to Madinah distance',
        'Taif to Madinah driving distance',
        'Taif to Madinah driving time',
        'Taif to Madinah by car',
        'Taif to Madinah road distance',
        'Taif to Madinah route',
        'Taif to Madinah map',
        'how far is Taif from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/taif-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/taif-to-madinah/',
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

export default function TaifToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
