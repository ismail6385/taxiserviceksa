import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('al-khobar-to-bahrain')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Khobar to Bahrain bus',
        'Al Khobar to Bahrain coach',
        'Al Khobar to Bahrain group transport',
        'Al Khobar to Bahrain bus service',
        'bus from Al Khobar to Bahrain',
        'coach charter Al Khobar Bahrain',
        'King Fahd Causeway bus',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/al-khobar-to-bahrain/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/al-khobar-to-bahrain/',
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

export default function AlKhobarToBahrainBusPage() {
    return <BusRouteTemplate route={route} />;
}
