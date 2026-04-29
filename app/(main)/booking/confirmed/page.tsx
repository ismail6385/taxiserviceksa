'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import {
    CheckCircle2, Calendar, Clock, Car, MessageSquare,
    Loader2, Phone, User, Search, Home, MapPin
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
    driver_name?: string;
    driver_phone?: string;
    driver_plate?: string;
    status: string;
}

function ConfirmedContent() {
    const params = useSearchParams();
    const ref = params.get('ref') || '';

    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!ref) { setLoading(false); return; }
        supabase
            .from('bookings')
            .select('id,customer_name,pickup_location,destination,pickup_date,pickup_time,vehicle_type,passengers,total_price,currency,driver_name,driver_phone,driver_plate,status')
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
    const hasDriver = !!(booking?.driver_name || booking?.driver_phone);

    const driverWAMsg = booking?.driver_phone
        ? encodeURIComponent(`Hello, I am your passenger for booking ${refId}. Pickup: ${booking.pickup_location} → ${booking.destination} on ${booking.pickup_date} at ${booking.pickup_time}.`)
        : '';

    const supportWAMsg = booking
        ? encodeURIComponent(`Hello, my booking ${refId} is confirmed. Pickup: ${booking.pickup_location} on ${booking.pickup_date} at ${booking.pickup_time}.`)
        : encodeURIComponent('Hello, I have a confirmed booking and need assistance.');

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full">

                {/* Success Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-500">Your transfer is confirmed and ready to go.</p>
                    {refId && (
                        <div className="mt-3 inline-flex items-center gap-2 bg-black text-primary px-4 py-2 rounded-full text-sm font-black tracking-wide">
                            {refId}
                        </div>
                    )}
                </div>

                {/* Trip Details */}
                {booking && (
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
                                <Car className="w-4 h-4 text-gray-400 mb-1" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Vehicle</p>
                                <p className="text-sm font-bold text-gray-900">{booking.vehicle_type}</p>
                            </div>
                        </div>

                        {price && (
                            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <p className="text-xs font-bold text-gray-500 uppercase">Total Amount</p>
                                <p className="text-lg font-black text-gray-900">{curr} {price}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Driver Card — shown if driver assigned */}
                {hasDriver && booking && (
                    <div className="bg-black rounded-2xl p-5 mb-4">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Your Driver</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                                <User className="w-6 h-6 text-black" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-black text-white text-lg truncate">{booking.driver_name || 'Assigned Driver'}</p>
                                {booking.driver_phone && (
                                    <p className="text-gray-400 text-sm flex items-center gap-1">
                                        <Phone className="w-3 h-3 shrink-0" /> {booking.driver_phone}
                                    </p>
                                )}
                                {booking.driver_plate && (
                                    <p className="text-gray-400 text-sm">
                                        Plate: <span className="text-primary font-bold">{booking.driver_plate}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                        {booking.driver_phone && (
                            <a
                                href={`https://wa.me/${booking.driver_phone.replace(/\D/g, '')}?text=${driverWAMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm"
                            >
                                <MessageSquare className="w-4 h-4" />
                                WhatsApp Your Driver
                            </a>
                        )}
                    </div>
                )}

                {/* Driver pending notice */}
                {!hasDriver && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 text-sm text-amber-800">
                        <p className="font-bold mb-1">Driver being assigned</p>
                        <p>You&apos;ll receive driver details before your pickup time via email.</p>
                    </div>
                )}

                {/* Actions */}
                <div className="space-y-3">
                    <a
                        href={`https://wa.me/966569487569?text=${supportWAMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors text-base"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Contact Support
                    </a>

                    <Link
                        href={`/track-booking?ref=${booking?.id.slice(0, 8) || ref}`}
                        className="flex items-center justify-center gap-2 w-full bg-black text-primary font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors text-base"
                    >
                        <Search className="w-5 h-5" />
                        Track My Booking
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors text-base"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}

export default function BookingConfirmedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        }>
            <ConfirmedContent />
        </Suspense>
    );
}
