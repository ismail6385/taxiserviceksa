'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Star, Calendar, MessageSquare, Loader2, Heart, Home, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Booking {
    id: string;
    customer_name: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    vehicle_type: string;
    total_price?: number;
    currency?: string;
}

function CompletedContent() {
    const params = useSearchParams();
    const ref = params.get('ref') || '';

    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!ref) { setLoading(false); return; }
        supabase
            .from('bookings')
            .select('id,customer_name,pickup_location,destination,pickup_date,vehicle_type,total_price,currency')
            .ilike('id', `${ref}%`)
            .limit(1)
            .single()
            .then(({ data }) => {
                setBooking(data);
                setLoading(false);
            });
    }, [ref]);

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
    );

    const curr = booking?.currency || 'SAR';
    const price = booking?.total_price ? Number(booking.total_price).toFixed(2) : null;
    const refId = booking ? `#${booking.id.slice(0, 8).toUpperCase()}` : '';

    const reviewWA = encodeURIComponent(
        `Hi VIP Transfer KSA, I just completed my trip ${refId}. I would like to share my feedback.`
    );

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Heart className="w-10 h-10 text-primary fill-primary" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Trip Completed!</h1>
                    <p className="text-gray-500">Thank you for choosing VIP Transfer KSA.</p>
                    {refId && (
                        <div className="mt-3 inline-flex items-center gap-2 bg-black text-primary px-4 py-2 rounded-full text-sm font-black tracking-wide">
                            {refId}
                        </div>
                    )}
                </div>

                {/* Trip Summary */}
                {booking && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6 space-y-4">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trip Summary</p>

                        <div className="relative pl-5 space-y-3 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:border-l-2 before:border-dashed before:border-gray-200">
                            <div className="relative">
                                <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow"></span>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">From</p>
                                <p className="text-sm font-bold text-gray-900">{booking.pickup_location}</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow"></span>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">To</p>
                                <p className="text-sm font-bold text-gray-900">{booking.destination}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-600 pt-2 border-t border-gray-100 flex-wrap">
                            <span className="flex items-center gap-1.5 font-medium">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                {booking.pickup_date}
                            </span>
                            <span className="text-gray-200">|</span>
                            <span className="font-medium">{booking.vehicle_type}</span>
                            {price && (
                                <>
                                    <span className="text-gray-200">|</span>
                                    <span className="font-black text-gray-900">{curr} {price}</span>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Review Section */}
                <div className="bg-black rounded-2xl p-6 mb-6 text-center">
                    <div className="flex justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className="w-7 h-7 text-primary fill-primary" />
                        ))}
                    </div>
                    <p className="text-white font-black text-xl mb-1">How was your journey?</p>
                    <p className="text-gray-400 text-sm mb-5">Your feedback helps us serve you better.</p>
                    <Link
                        href="/submit-review"
                        className="inline-block bg-primary text-black font-black px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                    >
                        Leave a Review
                    </Link>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <a
                        href={`https://wa.me/966569487569?text=${reviewWA}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Share Feedback on WhatsApp
                    </a>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full bg-black text-primary font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Book Another Trip
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}

export default function BookingCompletedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        }>
            <CompletedContent />
        </Suspense>
    );
}
