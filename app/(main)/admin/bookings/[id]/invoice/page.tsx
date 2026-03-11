'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
    Printer, 
    Download, 
    ArrowLeft, 
    Mail, 
    Phone, 
    Globe, 
    MapPin, 
    Calendar, 
    Clock, 
    Car,
    User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers: number;
    luggage: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    status: string;
    special_requests?: string;
    total_price?: number;
}

export default function InvoicePage() {
    const { id } = useParams();
    const router = useRouter();
    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const { data, error } = await supabase
                    .from('bookings')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setBooking(data);
            } catch (error) {
                console.error('Error fetching booking:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBooking();
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!booking) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Booking not found</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        );
    }

    const invoiceDate = new Date(booking.created_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
            {/* Header Controls */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
                <Button variant="outline" onClick={() => router.back()} className="bg-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>
                <div className="flex gap-2">
                    <Button onClick={handlePrint} className="bg-primary text-black hover:bg-black hover:text-white font-bold">
                        <Printer className="w-4 h-4 mr-2" /> Print / Save as PDF
                    </Button>
                </div>
            </div>

            {/* Invoice Container */}
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
                {/* Decorative Top Bar */}
                <div className="h-2 bg-primary w-full"></div>

                <div className="p-8 sm:p-12">
                    {/* Invoice Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-16 h-16">
                                    <Image 
                                        src="/logo.svg" 
                                        alt="Taxi Service KSA" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                                    Taxi Service <span className="text-lime-600">KSA</span>
                                </span>
                            </div>
                            <div className="space-y-1 text-sm text-gray-500">
                                <p className="flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5" /> Jeddah, Saudi Arabia
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5" /> +92 308 062 8195
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail className="w-3.5 h-3.5" /> info@taxiserviceksa.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <Globe className="w-3.5 h-3.5" /> www.taxiserviceksa.com
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">Invoice</h1>
                            <p className="text-gray-500 font-mono text-sm">REF: #{booking.id.slice(0, 8).toUpperCase()}</p>
                            <p className="text-gray-500 text-sm mt-1">Date: {invoiceDate}</p>
                            <div className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                                booking.status === 'completed' ? 'bg-blue-100 text-blue-700' : 
                                'bg-orange-100 text-orange-700'
                            }`}>
                                {booking.status}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        {/* Bill To */}
                        <div>
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Passenger Details</h2>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="text-lg font-bold text-gray-900 mb-2">{booking.customer_name}</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p className="flex items-center gap-2 font-medium">
                                        <Phone className="w-4 h-4 text-gray-400" /> {booking.customer_phone}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" /> {booking.customer_email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trip Summary */}
                        <div>
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trip Schedule</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" /> Pickup Date:
                                    </span>
                                    <span className="font-bold text-gray-900">{booking.pickup_date}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Pickup Time:
                                    </span>
                                    <span className="font-bold text-gray-900">{booking.pickup_time}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <Car className="w-4 h-4" /> Vehicle:
                                    </span>
                                    <span className="font-bold text-gray-900">{booking.vehicle_type}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <User className="w-4 h-4" /> Passengers:
                                    </span>
                                    <span className="font-bold text-gray-900">{booking.passengers} Pax | {booking.luggage} Bags</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Route Details */}
                    <div className="mb-12">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Journey Details</h2>
                        <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 before:border-l-2 before:border-dashed before:border-gray-200">
                            <div className="relative">
                                <div className="absolute -left-8 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-sm"></div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Pickup From</p>
                                <p className="text-lg font-bold text-gray-900">{booking.pickup_location}</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-8 top-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-sm"></div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Destination To</p>
                                <p className="text-lg font-bold text-gray-900">{booking.destination}</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Table Style Itemization */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden mb-8">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Service Description</th>
                                    <th className="px-6 py-4 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-6 py-6">
                                        <p className="font-bold text-gray-900">Private Transfer Service</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {booking.vehicle_type} route from {booking.pickup_location.split(',')[0]} to {booking.destination.split(',')[0]}
                                        </p>
                                        {booking.special_requests && (
                                            <p className="text-xs italic text-gray-400 mt-2">Note: {booking.special_requests}</p>
                                        )}
                                    </td>
                                    <td className="px-6 py-6 text-right align-top">
                                        <span className="text-lg font-bold text-gray-900">SAR {booking.total_price?.toFixed(2) || '0.00'}</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-gray-50/50">
                                <tr>
                                    <td className="px-6 py-4 text-right text-sm font-bold text-gray-500">Total Amount</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="text-2xl font-black text-primary">SAR {booking.total_price?.toFixed(2) || '0.00'}</span>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Footer / Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-t border-gray-100 pt-8">
                        <div className="text-sm text-gray-500">
                            <p className="font-bold text-gray-900 mb-2 font-mono uppercase tracking-tighter">Terms & Conditions</p>
                            <ul className="list-disc list-inside space-y-1 text-xs">
                                <li>Price includes fuel, parking, and toll fees.</li>
                                <li>Free cancellation up to 24 hours before pickup.</li>
                                <li>Our driver will wait 60 minutes for airport pickups.</li>
                                <li>All services are pre-booked for your convenience.</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <div className="inline-block border-2 border-primary/20 p-4 rounded-2xl bg-primary/5">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Company Signature</p>
                                <div className="h-12 flex items-center justify-end">
                                    <span className="text-2xl font-serif italic text-gray-400 opacity-50 select-none">Taxi Service KSA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Bar */}
                <div className="p-8 bg-gray-900 text-center text-white text-xs">
                    <p className="uppercase tracking-widest font-bold opacity-50">Thank you for choosing Taxi Service KSA</p>
                </div>
            </div>

            {/* Print Styling */}
            <style jsx global>{`
                @media print {
                    body {
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    .print\\:shadow-none {
                        box-shadow: none !important;
                    }
                    .print\\:rounded-none {
                        border-radius: 0 !important;
                    }
                    .print\\:py-0 {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .print\\:px-0 {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
}
