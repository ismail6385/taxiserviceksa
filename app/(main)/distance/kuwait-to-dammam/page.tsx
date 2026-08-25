import { Metadata } from 'next';
import DistanceRouteTemplate from '@/components/distance/DistanceRouteTemplate';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('kuwait-to-dammam')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Kuwait to Dammam distance by road',
        'Kuwait City to Dammam distance',
        'Kuwait to Dammam driving distance',
        'Kuwait to Dammam driving time',
        'Kuwait to Dammam by car',
        'Kuwait to Dammam road distance',
        'Kuwait to Dammam route',
        'Kuwait to Dammam map',
        'how far is Kuwait from Dammam',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/kuwait-to-dammam/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/kuwait-to-dammam/',
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

export default function KuwaitToDammamDistancePage() {
    return <DistanceRouteTemplate route={route} />;
}
