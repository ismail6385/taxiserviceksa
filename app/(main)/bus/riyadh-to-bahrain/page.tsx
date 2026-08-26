import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('riyadh-to-bahrain')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Riyadh to Bahrain bus',
        'Riyadh to Bahrain coach',
        'Riyadh to Bahrain group transport',
        'Riyadh to Bahrain bus service',
        'bus from Riyadh to Bahrain',
        'coach charter Riyadh Bahrain',
        'Riyadh Bahrain group travel',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/riyadh-to-bahrain/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/riyadh-to-bahrain/',
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

export default function RiyadhToBahrainBusPage() {
    return <BusRouteTemplate route={route} />;
}
