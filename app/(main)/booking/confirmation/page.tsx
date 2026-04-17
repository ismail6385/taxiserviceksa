'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, MapPin, Calendar, Clock, Car, Search, MessageSquare, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ConfirmationContent() {
    const params = useSearchParams();
    const ref = params.get('ref') || '';
    const name = params.get('name') || 'Customer';
    const email = params.get('email') || '';
    const from = params.get('from') || '';
    const to = params.get('to') || '';
    const date = params.get('date') || '';
    const time = params.get('time') || '';
    const vehicle = params.get('vehicle') || '';

    const refId = ref ? `#${ref.slice(0, 8).toUpperCase()}` : '';
    const whatsappMsg = encodeURIComponent(
        `Hello, I just submitted a booking request.\n\nRef: ${refId}\nName: ${name}\nRoute: ${from} → ${to}\nDate: ${date} at ${time}\nVehicle: ${vehicle}\n\nPlease confirm my quote.`
    );

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full">
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                        <CheckCircle2 className="w-10 h-10 text-black" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Request Received!</h1>
                    <p className="text-gray-500">Your booking request has been submitted successfully.</p>
                    {refId && (
                        <div className="mt-3 inline-flex items-center gap-2 bg-black text-primary px-4 py-2 rounded-full text-sm font-black tracking-wide">
                            Booking Ref: {refId}
                        </div>
                    )}
                </div>

                {/* Booking Summary Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6 space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Booking Summary</p>

                    {(from || to) && (
                        <div className="relative pl-5 space-y-3 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:border-l-2 before:border-dashed before:border-gray-200">
                            {from && (
                                <div className="relative">
                                    <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow"></span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Pickup</p>
                                    <p className="text-sm font-bold text-gray-900">{from}</p>
                                </div>
                            )}
                            {to && (
                                <div className="relative">
                                    <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow"></span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Destination</p>
                                    <p className="text-sm font-bold text-gray-900">{to}</p>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                        {date && (
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <Calendar className="w-4 h-4 text-gray-400 mb-1" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Date</p>
                                <p className="text-sm font-bold text-gray-900">{date}</p>
                            </div>
                        )}
                        {time && (
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <Clock className="w-4 h-4 text-gray-400 mb-1" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Time</p>
                                <p className="text-sm font-bold text-gray-900">{time}</p>
                            </div>
                        )}
                        {vehicle && (
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <Car className="w-4 h-4 text-gray-400 mb-1" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Vehicle</p>
                                <p className="text-sm font-bold text-gray-900">{vehicle}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-sm text-amber-800">
                    <p className="font-bold mb-1">What happens next?</p>
                    <p>Our team will review your request and send you an official quote to <strong>{email || 'your email'}</strong> within 1 hour. You can also WhatsApp us for instant confirmation.</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <a
                        href={`https://wa.me/966569487569?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-colors text-base"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Confirm on WhatsApp
                    </a>

                    {refId && (
                        <Link href={`/track-booking/?ref=${ref}`} className="flex items-center justify-center gap-2 w-full bg-black text-primary font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors text-base">
                            <Search className="w-5 h-5" />
                            Track My Booking
                        </Link>
                    )}

                    <Link href="/" className="flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors text-base">
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function BookingConfirmationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>
            <ConfirmationContent />
        </Suspense>
    );
}
