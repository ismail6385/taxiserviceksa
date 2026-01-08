import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const vehicle = searchParams.vehicle;
    const vehicleName = typeof vehicle === 'string' ? vehicle : null;

    return {
        title: vehicleName
            ? `Book ${vehicleName} VIP Transfer | Private Chauffeur KSA`
            : 'VIP Private Transfer Booking | Premium Chauffeur KSA',
        description: vehicleName
            ? `Secure your VIP ${vehicleName} private transfer in Saudi Arabia. Premium chauffeur service, 2025 fleet, and international standards.`
            : 'Book your VIP private transfer in Saudi Arabia. Professional chauffeur service for airport transfers, Umrah, and intercity travel. International quality standards.',
        alternates: {
            canonical: 'https://taxiserviceksa.com/booking/',
        },
    };
}

export default function BookingPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const route = typeof searchParams.route === 'string' ? searchParams.route : null;

    const getTitle = (routeSlug: string | null) => {
        if (!routeSlug) return "Book Your VIP Transfer";
        const formatted = routeSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return `Book VIP Transfer from ${formatted.replace(' To ', ' to ')}`;
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">VIP Executive Service</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">{getTitle(route)}</h1>

                    {/* Premium Service Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 max-w-2xl mx-auto shadow-sm">
                        <p className="text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">!</span>
                            OFFICIAL NOTE: We specialize in pre-booked Airport, Intercity, and VIP Umrah transfers. We do NOT provide local short-distance hailing (e.g., city street pickups).
                        </p>
                    </div>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Fill out the form below to reserve your luxury vehicle. Experience the gold standard of private transport in Saudi Arabia. Our team will verify your details and confirm your VIP transfer via WhatsApp.
                    </p>
                </div>

                <Suspense fallback={<div className="text-center py-12"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div><p className="mt-4 text-gray-600">Loading booking form...</p></div>}>
                    <BookingForm />
                </Suspense>
            </div>
        </div>
    );
}
