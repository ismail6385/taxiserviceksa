import BookingForm from '@/components/BookingForm';
import BookingTitle from '@/components/BookingTitle';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Static metadata: /booking/ is prerendered so it can be served as a static
// file. Query-string variants (?vehicle=, ?route=) all canonicalize here.
export const metadata: Metadata = {
    title: 'Private Car Transfer, Taxi and Chauffeur Service Booking | Taxi Service KSA',
    description: 'Get a quote for your private transfer in Saudi Arabia. Professional chauffeur service for airport transfers, Umrah, and intercity travel. International quality standards.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/booking/',
    },
};

export default function BookingPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-8 sm:pt-12 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                        <Suspense fallback="Get a quote for your transfer"><BookingTitle /></Suspense>
                    </h1>
                    <p className="text-gray-600">Fill in your trip, and we&apos;ll confirm your price on WhatsApp.</p>
                    <p className="text-xs text-gray-500 mt-2">Pre-booked airport, intercity and Umrah transfers only. No short in-city rides.</p>
                </div>

                <Suspense fallback={<div className="text-center py-12"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div><p className="mt-4 text-gray-600">Loading booking form...</p></div>}>
                    <BookingForm />
                </Suspense>
            </div>
        </div>
    );
}
