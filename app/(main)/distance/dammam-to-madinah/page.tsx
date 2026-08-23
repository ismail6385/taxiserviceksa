import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dammam-to-madinah')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Madinah distance by road',
        'Dammam to Madinah distance',
        'Dammam to Madinah driving distance',
        'Dammam to Madinah driving time',
        'Dammam to Madinah by car',
        'Dammam to Madinah road distance',
        'Dammam to Madinah route',
        'Dammam to Madinah map',
        'how far is Dammam from Madinah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dammam-to-madinah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dammam-to-madinah/',
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

export default function DammamToMadinahDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
