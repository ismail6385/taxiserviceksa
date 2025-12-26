import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const vehicle = searchParams.vehicle;
    const vehicleName = typeof vehicle === 'string' ? vehicle : null;

    return {
        title: vehicleName
            ? `Book ${vehicleName} Online | Taxi Service KSA`
            : 'Taxi Booking KSA | Secure Online Reservation',
        description: vehicleName
            ? `Instant online booking for ${vehicleName} in Saudi Arabia. Best rates, professional drivers & 24/7 service. Reserve your ride now.`
            : 'Book your taxi in Saudi Arabia online. Secure reservations for airport transfers, Umrah & intercity travel. 24/7 professional service.',
    };
}

export default function BookingPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block">Secure Your Ride</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Book Your Ride</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below to reserve your luxury vehicle. Our team will verify your details and confirm your booking shortly.
                    </p>
                </div>

                <Suspense fallback={<div className="text-center py-12"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div><p className="mt-4 text-gray-600">Loading booking form...</p></div>}>
                    <BookingForm />
                </Suspense>
            </div>
        </div>
    );
}
