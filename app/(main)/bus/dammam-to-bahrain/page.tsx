import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('dammam-to-bahrain')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Dammam to Bahrain bus',
        'Dammam to Bahrain coach',
        'Dammam to Bahrain group transport',
        'Dammam to Bahrain bus service',
        'bus from Dammam to Bahrain',
        'coach charter Dammam Bahrain',
        'King Fahd Causeway bus',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/dammam-to-bahrain/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/dammam-to-bahrain/',
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

export default function DammamToBahrainBusPage() {
    return <BusRouteTemplate route={route} />;
}
