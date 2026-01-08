import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Interactive City Map | TaxiServiceKSA',
    description: 'Explore Makkah, Madinah, and Riyadh with our interactive map. Find holy sites, hotels, and transport hubs.',
};

// Dynamically import the map component to avoid SSR issues with Leaflet
const InteractiveMap = dynamic(
    () => import('@/components/map/MapClient'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-medium animate-pulse">Loading Map Experience...</p>
            </div>
        )
    }
);

export default function MapPage() {
    return (
        <main className="w-full h-screen bg-white">
            <InteractiveMap />
        </main>
    );
}
