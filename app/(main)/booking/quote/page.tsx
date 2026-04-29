'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import {
    CheckCircle2, Calendar, Clock, Car, Users,
    MessageSquare, Loader2, XCircle, AlertCircle, Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Booking {
    id: string;
    customer_name: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers: number;
    total_price?: number;
    currency?: string;
    status: string;
}

function QuoteContent() {
    const params = useSearchParams();
    const router = useRouter();
    const ref = params.get('ref') || '';

    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);
    const [accepting, setAccepting] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!ref) { setLoading(false); setError('No booking reference provided.'); return; }
        supabase
            .from('bookings')
            .select('id,customer_name,pickup_location,destination,pickup_date,pickup_time,vehicle_type,passengers,total_price,currency,status')
            .ilike('id', `${ref}%`)
            .limit(1)
            .single()
            .then(({ data }) => {
                if (data) setBooking(data);
                else setError('Booking not found.');
                setLoading(false);
            });
    }, [ref]);

    const acceptQuote = async () => {
        if (!booking) return;
        setAccepting(true);
        try {
            const res = await fetch('/api/booking/accept-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookingId: booking.id })
            });
            if (!res.ok) throw new Error();
            setAccepted(true);
            setTimeout(() => {
                router.push(`/booking/confirmed?ref=${booking.id.slice(0, 8)}`);
            }, 1500);
        } catch {
            setError('Failed to accept quote. Please contact us on WhatsApp.');
        } finally {
            setAccepting(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
    );

    if (error && !booking) return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl border border-red-200 p-8 text-center max-w-sm w-full">
                <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <p className="font-bold text-red-700 mb-1">Quote Not Found</p>
                <p className="text-sm text-gray-500 mb-6">{error || 'This quote link may be expired or invalid.'}</p>
                <Link href="/"><Button variant="outline">Back to Home</Button></Link>
            </div>
        </main>
    );

    if (booking && ['confirmed', 'in_progress', 'completed'].includes(booking.status)) return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl border border-green-200 p-8 text-center max-w-sm w-full">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="font-bold text-green-700 text-lg mb-1">Already Confirmed!</p>
                <p className="text-sm text-gray-500 mb-6">Your booking is already confirmed.</p>
                <Link href={`/track-booking?ref=${booking.id.slice(0, 8)}`}>
                    <Button className="bg-black text-white font-bold w-full">Track My Booking</Button>
                </Link>
            </div>
        </main>
    );

    if (!booking) return null;

    const curr = booking.currency || 'SAR';
    const price = booking.total_price ? Number(booking.total_price).toFixed(2) : null;
    const refId = `#${booking.id.slice(0, 8).toUpperCase()}`;
    const whatsappMsg = encodeURIComponent(
        `Hello, I'd like to confirm my booking.\n\n*Ref:* ${refId}\n*Route:* ${booking.pickup_location} → ${booking.destination}\n*Date:* ${booking.pickup_date} at ${booking.pickup_time}`
    );

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-black text-primary px-4 py-2 rounded-full text-sm font-black tracking-wide mb-4">
                        Your Quote — {refId}
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Review Your Quote</h1>
                    <p className="text-gray-500 text-sm">Valid for 48 hours. Accept now to secure your booking.</p>
                </div>

                {/* Journey Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-4 space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Journey Details</p>

                    <div className="relative pl-5 space-y-3 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:border-l-2 before:border-dashed before:border-gray-200">
                        <div className="relative">
                            <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow"></span>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Pickup</p>
                            <p className="text-sm font-bold text-gray-900">{booking.pickup_location}</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow"></span>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Destination</p>
                            <p className="text-sm font-bold text-gray-900">{booking.destination}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                            <Calendar className="w-4 h-4 text-gray-400 mb-1" />
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Date</p>
                            <p className="text-sm font-bold text-gray-900">{booking.pickup_date}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                            <Clock className="w-4 h-4 text-gray-400 mb-1" />
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Time</p>
                            <p className="text-sm font-bold text-gray-900">{booking.pickup_time}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                            <Users className="w-4 h-4 text-gray-400 mb-1" />
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Pax</p>
                            <p className="text-sm font-bold text-gray-900">{booking.passengers}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <Car className="w-4 h-4 text-gray-500" />
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">Vehicle</p>
                            <p className="text-sm font-bold text-gray-900">{booking.vehicle_type}</p>
                        </div>
                    </div>
                </div>

                {/* Price Card */}
                {price ? (
                    <div className="bg-black rounded-2xl p-6 mb-6 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Quote Price</p>
                        <p className="text-5xl font-black text-primary mb-1">{curr} {price}</p>
                        <p className="text-xs text-gray-500">Includes fuel, toll &amp; all fees</p>
                    </div>
                ) : (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-center text-amber-800 text-sm">
                        <AlertCircle className="w-5 h-5 mx-auto mb-2" />
                        Price is being finalized. Contact us on WhatsApp for instant confirmation.
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4 text-sm text-red-700 text-center">{error}</div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                    {accepted ? (
                        <div className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 rounded-xl">
                            <CheckCircle2 className="w-5 h-5" />
                            Booking Confirmed! Redirecting...
                        </div>
                    ) : price ? (
                        <Button
                            onClick={acceptQuote}
                            disabled={accepting}
                            className="w-full bg-primary text-black hover:bg-primary/90 font-black text-base h-14 rounded-xl shadow-lg shadow-primary/20"
                        >
                            {accepting
                                ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Confirming...</>
                                : <><CheckCircle2 className="w-5 h-5 mr-2" />Accept Quote &amp; Confirm Booking</>
                            }
                        </Button>
                    ) : null}

                    <a
                        href={`https://wa.me/966569487569?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors text-base"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Confirm on WhatsApp
                    </a>

                    <Link
                        href={`/track-booking?ref=${booking.id.slice(0, 8)}`}
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors text-base"
                    >
                        <Home className="w-5 h-5" />
                        Track Booking Status
                    </Link>
                </div>

            </div>
        </main>
    );
}

export default function QuotePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        }>
            <QuoteContent />
        </Suspense>
    );
}
