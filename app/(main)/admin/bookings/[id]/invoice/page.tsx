'use client';
// html2pdf will be imported dynamically to avoid SSR issues


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
    const [currency, setCurrency] = useState('SAR');
    const [paymentStatus, setPaymentStatus] = useState('Unpaid');
    const [paymentMethod, setPaymentMethod] = useState('Cash to Driver');

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
                // Initialize editable fields from booking data if they exist
                if (data.currency) setCurrency(data.currency);
                if (data.payment_status) setPaymentStatus(data.payment_status);
                // Note: payment_method might not be in the DB yet, but we check just in case
                if (data.payment_method) setPaymentMethod(data.payment_method);
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

        const opt = {
            margin: [0, 0, 0, 0] as [number, number, number, number],
            filename: filename,
            image: { type: 'jpeg' as const, quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                windowWidth: 1200, // Important: capture at desktop width
                scrollY: 0,
                scrollX: 0
            },
            jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
        };

        try {
            // @ts-ignore - dynamic import to avoid SSR 'self is not defined'
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error('PDF Generation Error:', error);
            // Fallback to window.print if html2pdf fails
            window.print();
        }
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
            <div className="max-w-[210mm] mx-auto mb-4 flex flex-wrap gap-4 justify-between items-center print:hidden border-b pb-4">
                <Button variant="outline" onClick={() => router.back()} className="bg-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>

                <div className="flex flex-wrap gap-4 items-center">
                    {/* Payment Status Toggle */}
                    {/* Payment Status Custom Input */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 bg-white rounded-lg border p-1 shadow-sm px-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 whitespace-nowrap">Status:</span>
                            <input
                                value={paymentStatus}
                                onChange={(e) => setPaymentStatus(e.target.value)}
                                className="h-7 w-24 text-[11px] font-bold outline-none bg-transparent"
                                placeholder="e.g. Paid, Half"
                            />
                        </div>
                        <div className="flex gap-1 px-1">
                            {['Paid', 'Unpaid', 'Pending'].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setPaymentStatus(status)}
                                    className={`px-2 py-0.5 text-[9px] font-bold rounded transition-all ${paymentStatus === status
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payment Method Custom Input */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 bg-white rounded-lg border p-1 shadow-sm px-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 whitespace-nowrap">Method:</span>
                            <input
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="h-7 w-28 text-[11px] font-bold outline-none bg-transparent"
                                placeholder="e.g. Cash, Link"
                            />
                        </div>
                        <div className="flex gap-1 px-1">
                            {['Cash to Driver', 'Online'].map((method) => (
                                <button
                                    key={method}
                                    onClick={() => setPaymentMethod(method)}
                                    className={`px-2 py-0.5 text-[9px] font-bold rounded transition-all ${paymentMethod === method
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                >
                                    {method}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Currency Custom Input */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 bg-white rounded-lg border p-1 shadow-sm px-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 whitespace-nowrap">Curr:</span>
                            <input
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value.toUpperCase())}
                                className="h-7 w-16 text-[11px] font-bold outline-none bg-transparent uppercase"
                                placeholder="SAR"
                            />
                        </div>
                        <div className="flex gap-1 px-1">
                            {['SAR', 'KWD', 'AED', 'USD'].map((curr) => (
                                <button
                                    key={curr}
                                    onClick={() => setCurrency(curr)}
                                    className={`px-2 py-0.5 text-[9px] font-bold rounded transition-all ${currency === curr
                                            ? 'bg-primary text-black'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                >
                                    {curr}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button onClick={handlePrint} className="bg-primary text-black hover:bg-black hover:text-white font-bold h-10 px-6">
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
            <div id="invoice-print" className="max-w-[210mm] mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:max-w-none print:w-[210mm] print:h-[296mm] print:overflow-hidden box-border">
                {/* Decorative Top Bar */}
                <div className="h-[4px] bg-primary w-full"></div>

                <div className="px-10 py-8 print:px-[12mm] print:py-[10mm] flex flex-col h-[calc(296mm-4px)] print:h-[calc(296mm-4px)] justify-between overflow-hidden bg-white">

                    {/* Top Content */}
                    <div>
                        {/* Invoice Header */}
                        <div className="flex justify-between items-start mb-6 border-b-2 border-gray-100 pb-5">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="relative w-10 h-10">
                                        <img
                                            src="/logo.svg"
                                            alt="Taxi Service KSA"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xl font-black tracking-tighter text-gray-900 uppercase">
                                        Taxi Service <span className="text-lime-600">KSA</span>
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 space-y-0.5 max-w-[250px] leading-tight font-medium">
                                    <p className="flex items-center gap-1.5"><MapPin className="w-2.5 h-2.5 text-gray-400" /> Jeddah, Saudi Arabia</p>
                                    <p className="flex items-center gap-1.5"><Mail className="w-2.5 h-2.5 text-gray-400" /> info@taxiserviceksa.com</p>
                                    <p className="flex items-center gap-1.5"><Globe className="w-2.5 h-2.5 text-gray-400" /> www.taxiserviceksa.com</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-1">Invoice</h1>
                                <p className="text-gray-400 font-mono text-[10px] tracking-widest">REF: #{booking.id.slice(0, 8).toUpperCase()}</p>
                                <p className="text-gray-500 text-xs mt-0.5 font-bold">Date: {invoiceDate}</p>

                                <div className="flex justify-end gap-2 mt-3">
                                    <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] ${paymentStatus === 'Paid' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                                        } shadow-sm`}>
                                        {paymentStatus}
                                    </div>
                                    <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] bg-blue-50 text-blue-700 border border-blue-100 shadow-sm`}>
                                        {paymentMethod}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Passenger + Trip in 2 columns */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <h2 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Passenger Details</h2>
                                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
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
                                <h2 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Trip Schedule</h2>
                                <div className="space-y-1">
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
                            <h2 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-3">Journey Route</h2>
                            <div className="relative pl-6 space-y-4 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-gray-200">
                                <div className="relative">
                                    <div className="absolute -left-[22px] top-1 w-4 h-4 bg-green-500 rounded-full border-[3px] border-white shadow-sm ring-1 ring-green-100"></div>
                                    <p className="text-[9px] text-gray-400 font-black uppercase mb-0.5">Pick-up Point</p>
                                    <p className="text-sm font-bold text-gray-900 leading-tight">{booking.pickup_location}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[22px] top-1 w-4 h-4 bg-red-500 rounded-full border-[3px] border-white shadow-sm ring-1 ring-red-100"></div>
                                    <p className="text-[9px] text-gray-400 font-black uppercase mb-0.5">Final Destination</p>
                                    <p className="text-sm font-bold text-gray-900 leading-tight">{booking.destination}</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Table */}
                        <div className="border-2 border-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50/50 text-gray-400 text-[9px] font-black uppercase tracking-[0.2em]">
                                    <tr>
                                        <th className="px-6 py-3">Service Description</th>
                                        <th className="px-6 py-3 text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr>
                                        <td className="px-6 py-4">
                                            <p className="font-black text-gray-900 text-sm uppercase tracking-tight">Private Transfer Service</p>
                                            <p className="text-xs text-gray-500 mt-1 font-medium">
                                                {booking.vehicle_type} • Professional Chauffeur Service
                                            </p>
                                            <p className="text-[10px] text-gray-400 mt-0.5 uppercase font-bold">
                                                Route: {booking.pickup_location.split(',')[0]} to {booking.destination.split(',')[0]}
                                            </p>
                                            {booking.special_requests && (
                                                <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-100 italic text-[10px] text-gray-500">
                                                    Special Requests: {booking.special_requests}
                                                </div>
                                            )}
                                            {quickNote.trim() && (
                                                <div className="mt-2 border-l-3 border-primary px-3 py-1.5 bg-primary/5 rounded-r">
                                                    <p className="text-xs text-gray-700 whitespace-pre-wrap leading-relaxed">{quickNote.trim()}</p>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right align-top">
                                            <span className="text-lg font-black text-gray-900">{currency} {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-gray-900">
                                    <tr>
                                        <td className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-widest text-white/50">Total Payable Amount</td>
                                        <td className="px-6 py-4 text-right border-l border-white/10">
                                            <span className="text-2xl font-black text-primary">{currency} {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* Payment Info Section */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                                <h3 className="text-[9px] font-black text-primary uppercase tracking-[0.15em] mb-2">Booking Confirmation</h3>
                                <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                                    Your transport service is fully confirmed for the scheduled date.
                                    Please have a digital copy of this invoice ready for your chauffeur.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">Payment Instruction</h3>
                                <p className="text-[10px] text-gray-800 leading-relaxed font-black uppercase italic">
                                    {paymentMethod === 'Cash to Driver'
                                        ? "Important: Payment to be handed to the driver upon journey completion."
                                        : "Important: Payment has been secured via online transaction."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer — pushed to bottom */}
                    <div className="mt-auto">
                        <div className="grid grid-cols-2 gap-8 items-end border-t-2 border-gray-100 pt-5">
                            <div className="text-sm text-gray-500">
                                <p className="font-black text-gray-900 mb-1 font-mono uppercase tracking-[0.1em] text-[10px]">Terms & Conditions</p>
                                <ul className="list-disc list-inside space-y-0.5 text-[9px] font-medium opacity-80">
                                    <li>Price includes fuel, parking, and toll fees.</li>
                                    <li>Free cancellation up to 24 hours before pickup.</li>
                                    <li>Driver will wait 60 minutes for airport pickups.</li>
                                    <li>This invoice is valid for 30 days from the date issued.</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border-2 border-primary/20 p-4 rounded-xl bg-primary/5">
                                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-3">Partner Authorizations</p>
                                    <div className="flex items-center justify-end gap-5 h-12">
                                        <div className="text-center">
                                            <img src="/zumer-signature.png" alt="Zumer Signature" className="h-full w-auto max-w-[100px] object-contain select-none" />
                                            <p className="text-[7px] font-black mt-0.5 text-gray-400 border-t pt-0.5 border-gray-100 italic tracking-widest">Zumer</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/ismail-signature.png" alt="Ismail Signature" className="h-full w-auto max-w-[100px] object-contain select-none" />
                                            <p className="text-[7px] font-black mt-0.5 text-gray-400 border-t pt-0.5 border-gray-100 italic tracking-widest">Ismail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-5 py-3 bg-gray-900 text-center text-white text-[10px] font-black -mx-10 -mb-8 print:-mx-[12mm] print:-mb-[10mm] px-10 tracking-[0.3em] uppercase">
                            <p className="opacity-60">Premium Transport Services • Kingdom of Saudi Arabia</p>
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
                        overflow: visible !important;
                    }
                    #invoice-print {
                        width: 210mm !important;
                        height: 296mm !important;
                        page-break-after: avoid !important;
                        page-break-before: avoid !important;
                        page-break-inside: avoid !important;
                        background: white !important;
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 auto !important;
                        overflow: hidden !important;
                    }
                    * {
                        page-break-inside: avoid !important;
                    }
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
            `}</style>
        </div>
    );
}
