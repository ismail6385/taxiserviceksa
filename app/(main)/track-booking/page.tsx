'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, Clock, Car, Users, CheckCircle2, XCircle, AlertCircle, Loader2, Phone, Mail } from 'lucide-react';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    status: string;
    total_price?: number;
    currency?: string;
    special_requests?: string;
}

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: any }> = {
    pending:   { label: 'Pending Review',   color: 'text-amber-700',  bg: 'bg-amber-50 border-amber-200',  icon: AlertCircle },
    confirmed: { label: 'Confirmed',        color: 'text-green-700',  bg: 'bg-green-50 border-green-200',  icon: CheckCircle2 },
    completed: { label: 'Trip Completed',   color: 'text-blue-700',   bg: 'bg-blue-50 border-blue-200',    icon: CheckCircle2 },
    cancelled: { label: 'Cancelled',        color: 'text-red-700',    bg: 'bg-red-50 border-red-200',      icon: XCircle },
};

function TrackBookingContent() {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [booking, setBooking] = useState<Booking | null>(null);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const ref = searchParams.get('ref');
        if (ref) {
            setQuery(ref);
            doSearch(ref);
        }
    }, []);

    const doSearch = async (q: string) => {
        if (!q) return;
        setLoading(true);
        setBooking(null);
        setNotFound(false);
        setError('');
        try {
            const isId = /^[a-f0-9-]{8,36}$/i.test(q);
            let result = null;
            if (isId) {
                const { data } = await supabase.from('bookings').select('*').ilike('id', `${q}%`).limit(1).single();
                result = data;
            }
            if (!result) {
                const { data } = await supabase.from('bookings').select('*').eq('customer_email', q.toLowerCase()).order('created_at', { ascending: false }).limit(1).single();
                result = data;
            }
            if (result) setBooking(result);
            else setNotFound(true);
        } catch { setNotFound(true); }
        finally { setLoading(false); }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        doSearch(query.trim());
    };


    const statusCfg = booking ? (STATUS_CONFIG[booking.status] || STATUS_CONFIG.pending) : null;
    const StatusIcon = statusCfg?.icon;

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black mb-4">
                        <Search className="w-6 h-6 text-primary" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Track Your Booking</h1>
                    <p className="text-gray-500 text-sm">Enter your Booking ID or email address to check status</p>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="flex gap-2 mb-8">
                    <Input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Booking ID (e.g. A1B2C3D4) or Email"
                        className="h-12 text-base bg-white border-gray-200 focus:border-black"
                    />
                    <Button type="submit" disabled={loading} className="h-12 px-6 bg-black text-white hover:bg-primary hover:text-black font-bold shrink-0">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    </Button>
                </form>

                {/* Not Found */}
                {notFound && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                        <XCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                        <p className="font-bold text-red-700 mb-1">Booking Not Found</p>
                        <p className="text-sm text-red-500">Please check your Booking ID or email address and try again.</p>
                    </div>
                )}

                {/* Booking Result */}
                {booking && statusCfg && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        {/* Status Banner */}
                        <div className={`flex items-center gap-3 px-6 py-4 border-b ${statusCfg.bg} ${statusCfg.color}`}>
                            {StatusIcon && <StatusIcon className="w-5 h-5" />}
                            <div>
                                <p className="font-black text-base uppercase tracking-wide">{statusCfg.label}</p>
                                <p className="text-xs opacity-70">Ref: #{booking.id.slice(0, 8).toUpperCase()}</p>
                            </div>
                            {booking.total_price ? (
                                <div className="ml-auto text-right">
                                    <p className="font-black text-lg">{booking.currency || 'SAR'} {booking.total_price.toFixed(2)}</p>
                                    <p className="text-[10px] uppercase tracking-wide opacity-60">Total Amount</p>
                                </div>
                            ) : null}
                        </div>

                        <div className="p-6 space-y-5">
                            {/* Customer */}
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Passenger</p>
                                <p className="font-bold text-gray-900">{booking.customer_name}</p>
                                <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {booking.customer_phone}</span>
                                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {booking.customer_email}</span>
                                </div>
                            </div>

                            {/* Route */}
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

                            {/* Trip Details */}
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

                            {/* Vehicle */}
                            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <Car className="w-4 h-4 text-gray-500" />
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Vehicle</p>
                                    <p className="text-sm font-bold text-gray-900">{booking.vehicle_type}</p>
                                </div>
                            </div>

                            {/* Special Requests */}
                            {booking.special_requests && (
                                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-sm text-amber-800">
                                    <span className="font-bold">Special Request: </span>{booking.special_requests}
                                </div>
                            )}

                            {/* WhatsApp CTA */}
                            <a
                                href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hello, I'd like to ask about my booking.\n\nRef: #${booking.id.slice(0,8).toUpperCase()}\nName: ${booking.customer_name}`)}`}
                                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20bd5a] transition-colors"
                            >
                                💬 Contact Support on WhatsApp
                            </a>
                        </div>
                    </div>
                )}

                {/* Help Text */}
                {!booking && !notFound && (
                    <div className="text-center text-sm text-gray-400 mt-6">
                        <p>Can't find your booking? <a href="https://wa.me/966569487569" className="text-black font-bold underline">Contact us on WhatsApp</a></p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function TrackBookingPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <TrackBookingContent />
        </Suspense>
    );
}
