import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('riyadh-to-dubai')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Dubai bus',
        'Riyadh to Dubai coach',
        'Riyadh to Dubai group transport',
        'Riyadh to Dubai bus service',
        'bus from Riyadh to Dubai',
        'coach charter Riyadh Dubai',
        'Riyadh Dubai group travel',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/riyadh-to-dubai/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/riyadh-to-dubai/',
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

export default function RiyadhToDubaiBusPage() {
    return <BusRouteTemplate route={route} />;
}
