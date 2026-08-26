import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('jubail-to-bahrain')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Jubail to Bahrain bus',
        'Jubail to Bahrain coach',
        'Jubail to Bahrain group transport',
        'Jubail to Bahrain bus service',
        'bus from Jubail to Bahrain',
        'coach charter Jubail Bahrain',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/jubail-to-bahrain/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/jubail-to-bahrain/',
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

export default function JubailToBahrainBusPage() {
    return <BusRouteTemplate route={route} />;
}
