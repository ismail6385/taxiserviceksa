import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('riyadh-to-abha')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Abha distance by road',
        'Riyadh to Abha distance',
        'Riyadh to Abha driving distance',
        'Riyadh to Abha driving time',
        'Riyadh to Abha by car',
        'Riyadh to Abha road distance',
        'Riyadh to Abha route',
        'Riyadh to Abha map',
        'how far is Riyadh from Abha',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/riyadh-to-abha/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/riyadh-to-abha/',
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

export default function RiyadhToAbhaDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
