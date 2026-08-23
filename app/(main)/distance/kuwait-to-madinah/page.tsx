import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('kuwait-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Kuwait to Madinah distance by road',
        'Kuwait City to Madinah distance',
        'Kuwait to Madinah driving distance',
        'Kuwait to Madinah driving time',
        'Kuwait to Madinah by car',
        'Kuwait to Madinah road distance',
        'Kuwait to Madinah route',
        'Kuwait to Madinah map',
        'how far is Kuwait from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/kuwait-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/kuwait-to-madinah/',
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

export default function KuwaitToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
