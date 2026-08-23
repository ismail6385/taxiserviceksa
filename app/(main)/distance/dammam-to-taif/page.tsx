import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dammam-to-taif')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Taif distance by road',
        'Dammam to Taif distance',
        'Dammam to Taif driving distance',
        'Dammam to Taif driving time',
        'Dammam to Taif by car',
        'Dammam to Taif road distance',
        'Dammam to Taif route',
        'Dammam to Taif map',
        'how far is Dammam from Taif',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dammam-to-taif/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dammam-to-taif/',
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

export default function DammamToTaifDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
