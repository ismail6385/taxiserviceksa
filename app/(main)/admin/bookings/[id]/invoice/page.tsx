'use client';
// @ts-ignore
import html2canvas from 'html2canvas';
// @ts-ignore
import { jsPDF } from 'jspdf';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
    Printer, 
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
    const [quickNote, setQuickNote] = useState('');

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

    const handlePrint = async () => {
        if (!booking) return;
        const customerName = booking.customer_name ? booking.customer_name.replace(/\s+/g, '-') : 'Client';
        const refId = booking.id.slice(0, 8).toUpperCase();
        const dateStr = booking.pickup_date || new Date().toISOString().split('T')[0];
        const filename = `Invoice-${refId}-${customerName}-${dateStr}.pdf`;
        const element = document.getElementById('invoice-print');
        if (!element) return;
        // A4 dimensions in mm
        const a4W = 210;
        const a4H = 297;
        const canvas = await html2canvas(element, { scale: 2, useCORS: true, scrollY: 0 });
        const imgData = canvas.toDataURL('image/jpeg', 0.98);
        const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
        pdf.addImage(imgData, 'JPEG', 0, 0, a4W, a4H);
        pdf.save(filename);
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
        <div className="min-h-screen bg-gray-100 py-6 px-4 print:bg-white print:py-0 print:px-0 print:min-h-0">
            {/* Header Controls */}
            <div className="max-w-[210mm] mx-auto mb-4 flex justify-between items-center print:hidden">
                <Button variant="outline" onClick={() => router.back()} className="bg-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Button>
                <div className="flex gap-2">
                    <Button onClick={handlePrint} className="bg-primary text-black hover:bg-black hover:text-white font-bold">
                        <Printer className="w-4 h-4 mr-2" /> Download PDF
                    </Button>
                </div>
            </div>

            {/* Quick Note Input — screen only */}
            <div className="max-w-[210mm] mx-auto mb-4 print:hidden">
                <textarea
                    value={quickNote}
                    onChange={e => setQuickNote(e.target.value)}
                    placeholder="Type a custom message here (e.g. I have 2 checked bags...)"
                    rows={2}
                    className="w-full border-2 border-dashed border-primary/20 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-0 resize-none bg-white/50 backdrop-blur-sm shadow-sm transition-all"
                />
                <p className="text-[10px] text-gray-400 mt-1 ml-1 uppercase font-bold tracking-widest">Note: Text entered above will appear directly in the invoice below.</p>
            </div>

            {/* Invoice Container — Single A4 Page */}
            <div id="invoice-print" className="max-w-[210mm] mx-auto bg-white shadow-2xl rounded-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none print:w-[210mm] print:h-[297mm] print:overflow-hidden">
                {/* Decorative Top Bar */}
                <div className="h-1.5 bg-primary w-full print:h-1"></div>

                <div className="p-8 print:p-[12mm] print:pb-[8mm] flex flex-col print:h-[calc(297mm-4px)] print:justify-between">
                    
                    {/* Top Content */}
                    <div>
                        {/* Invoice Header */}
                        <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-5">
                            <div>
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="relative w-12 h-12 print:w-10 print:h-10">
                                        <Image 
                                            src="/logo.svg" 
                                            alt="Taxi Service KSA" 
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-xl font-black tracking-tighter text-gray-900 uppercase print:text-lg">
                                        Taxi Service <span className="text-lime-600">KSA</span>
                                    </span>
                                </div>
                                    <div className="text-[11px] text-gray-500 space-y-0.5 max-w-[250px] leading-tight font-medium">
                                        <p className="flex items-center gap-1.5"><MapPin className="w-2.5 h-2.5" /> Jeddah, Saudi Arabia</p>
                                        <p className="flex items-center gap-1.5"><Mail className="w-2.5 h-2.5" /> info@taxiserviceksa.com</p>
                                        <p className="flex items-center gap-1.5"><Globe className="w-2.5 h-2.5" /> www.taxiserviceksa.com</p>
                                    </div>
                            </div>
                            <div className="text-right">
                                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1 print:text-2xl">Invoice</h1>
                                <p className="text-gray-500 font-mono text-xs">REF: #{booking.id.slice(0, 8).toUpperCase()}</p>
                                <p className="text-gray-500 text-xs mt-0.5">Date: {invoiceDate}</p>
                                <div className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                                    booking.status === 'completed' ? 'bg-blue-100 text-blue-700' : 
                                    'bg-orange-100 text-orange-700'
                                }`}>
                                    {booking.status}
                                </div>
                            </div>
                        </div>

                        {/* Passenger + Trip in 2 columns */}
                        <div className="grid grid-cols-2 gap-6 mb-5">
                            <div>
                                <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Passenger Details</h2>
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <p className="text-sm font-bold text-gray-900 mb-1.5">{booking.customer_name}</p>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        <p className="flex items-center gap-1.5 font-medium">
                                            <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" /> {booking.customer_phone}
                                        </p>
                                        <p className="flex items-center gap-1.5">
                                            <Mail className="w-3 h-3 text-gray-400 flex-shrink-0" /> {booking.customer_email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Trip Schedule</h2>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3" /> Pickup Date:
                                        </span>
                                        <span className="font-bold text-gray-900">{booking.pickup_date}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" /> Pickup Time:
                                        </span>
                                        <span className="font-bold text-gray-900">{booking.pickup_time}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <Car className="w-3 h-3" /> Vehicle:
                                        </span>
                                        <span className="font-bold text-gray-900">{booking.vehicle_type}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <User className="w-3 h-3" /> Passengers:
                                        </span>
                                        <span className="font-bold text-gray-900">{booking.passengers} Pax | {booking.luggage} Bags</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Route Details */}
                        <div className="mb-5">
                            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Journey Details</h2>
                            <div className="relative pl-6 space-y-4 before:absolute before:left-[9px] before:top-1.5 before:bottom-1.5 before:w-0.5 before:border-l-2 before:border-dashed before:border-gray-200">
                                <div className="relative">
                                    <div className="absolute -left-6 top-0.5 w-[18px] h-[18px] bg-green-500 rounded-full border-[3px] border-white shadow-sm"></div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-0.5">Pickup From</p>
                                    <p className="text-sm font-bold text-gray-900">{booking.pickup_location}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-6 top-0.5 w-[18px] h-[18px] bg-red-500 rounded-full border-[3px] border-white shadow-sm"></div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-0.5">Destination To</p>
                                    <p className="text-sm font-bold text-gray-900">{booking.destination}</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Table */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden mb-5">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                                    <tr>
                                        <th className="px-5 py-2.5">Service Description</th>
                                        <th className="px-5 py-2.5 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-5 py-4">
                                            <p className="font-bold text-gray-900 text-sm">Private Transfer Service</p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {booking.vehicle_type} route from {booking.pickup_location.split(',')[0]} to {booking.destination.split(',')[0]}
                                            </p>
                                            {booking.special_requests && (
                                                <p className="text-[10px] italic text-gray-400 mt-1">Note: {booking.special_requests}</p>
                                            )}
                                            {quickNote.trim() && (
                                                <div className="mt-2 border-l-2 border-gray-300 px-3 py-1.5">
                                                    <p className="text-xs text-gray-700 whitespace-pre-wrap">{quickNote.trim()}</p>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-5 py-4 text-right align-top">
                                            <span className="text-sm font-bold text-gray-900">SAR {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-gray-50/50">
                                    <tr>
                                        <td className="px-5 py-3 text-right text-xs font-bold text-gray-500">Total Amount</td>
                                        <td className="px-5 py-3 text-right">
                                            <span className="text-xl font-black text-primary">SAR {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Footer — pushed to bottom on print */}
                    <div>
                        <div className="grid grid-cols-2 gap-6 items-end border-t border-gray-100 pt-5">
                            <div className="text-sm text-gray-500">
                                <p className="font-bold text-gray-900 mb-1.5 font-mono uppercase tracking-tighter text-xs">Terms & Conditions</p>
                                <ul className="list-disc list-inside space-y-0.5 text-[10px]">
                                    <li>Price includes fuel, parking, and toll fees.</li>
                                    <li>Free cancellation up to 24 hours before pickup.</li>
                                    <li>Our driver will wait 60 minutes for airport pickups.</li>
                                    <li>All services are pre-booked for your convenience.</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border-2 border-primary/20 p-3 rounded-xl bg-primary/5">
                                    <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-0.5">Company Signature</p>
                                    <div className="mt-2 flex items-center justify-end">
                                        <img src="/ismail signature.png" alt="Ismail Signature" className="h-14 w-auto max-w-[200px] object-contain select-none mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-4 py-3 bg-gray-900 text-center text-white text-[10px] -mx-8 -mb-8 print:-mx-[12mm] print:-mb-[8mm] px-8">
                            <p className="uppercase tracking-widest font-bold opacity-50">Thank you for choosing Taxi Service KSA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Styling — Single A4 Page */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    html, body {
                        width: 210mm;
                        height: 297mm;
                        margin: 0 !important;
                        padding: 0 !important;
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        overflow: hidden !important;
                    }
                    #invoice-print {
                        width: 210mm !important;
                        height: 297mm !important;
                        page-break-after: avoid !important;
                        page-break-inside: avoid !important;
                        break-after: avoid !important;
                        break-inside: avoid !important;
                        overflow: hidden !important;
                    }
                }
            `}</style>
        </div>
    );
}
