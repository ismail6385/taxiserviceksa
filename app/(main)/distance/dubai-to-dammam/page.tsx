import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('dubai-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dubai to Dammam distance by road',
        'Dubai to Dammam distance',
        'Dubai to Dammam driving distance',
        'Dubai to Dammam driving time',
        'Dubai to Dammam by car',
        'Dubai to Dammam road distance',
        'Dubai to Dammam route',
        'Dubai to Dammam map',
        'how far is Dubai from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/dubai-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/dubai-to-dammam/',
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

export default function DubaiToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
