import { Metadata } from 'next';
import BusRouteTemplate from '@/components/bus/BusRouteTemplate';
import { getBusRoute } from '@/data/busRoutes';

const route = getBusRoute('al-ahsa-to-bahrain')!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Al Ahsa to Bahrain bus',
        'Al Ahsa to Bahrain coach',
        'Al Ahsa to Bahrain group transport',
        'Al Ahsa to Bahrain bus service',
        'bus from Al Ahsa to Bahrain',
        'coach charter Al Ahsa Bahrain',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/al-ahsa-to-bahrain/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/bus/al-ahsa-to-bahrain/',
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

export default function AlAhsaToBahrainBusPage() {
    return <BusRouteTemplate route={route} />;
}
