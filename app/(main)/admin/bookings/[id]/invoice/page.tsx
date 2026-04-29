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
    currency?: string;
    payment_status?: string;
    payment_method?: string;
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
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [returnDestination, setReturnDestination] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

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
                // Auto-detect round trip from booking data
                if (data.has_return_trip) {
                    setIsRoundTrip(true);
                    setReturnDestination(data.pickup_location || '');
                }
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

    const handleSendEmail = async () => {
        if (!booking) return;
        setSendingEmail(true);
        setEmailSent(false);

        try {
            const customerName = booking.customer_name ? booking.customer_name.replace(/\s+/g, '-') : 'Client';
            const refId = booking.id.slice(0, 8).toUpperCase();
            const dateStr = booking.pickup_date || new Date().toISOString().split('T')[0];
            const filename = `Invoice-${refId}-${customerName}-${dateStr}.pdf`;

            const element = document.getElementById('invoice-print');
            if (!element) throw new Error('Invoice element not found');

            const opt = {
                margin: [0, 0, 0, 0] as [number, number, number, number],
                filename,
                image: { type: 'jpeg' as const, quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, letterRendering: true, windowWidth: 1200, scrollY: 0, scrollX: 0 },
                jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
            };

            // @ts-ignore
            const html2pdf = (await import('html2pdf.js')).default;
            const pdfBlob: Blob = await html2pdf().set(opt).from(element).outputPdf('blob');

            const arrayBuffer = await pdfBlob.arrayBuffer();
            const bytes = new Uint8Array(arrayBuffer);
            let binary = '';
            for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
            const base64 = btoa(binary);

            // Persist currency, paymentStatus, paymentMethod back to DB
            await supabase
                .from('bookings')
                .update({ currency, payment_status: paymentStatus, payment_method: paymentMethod })
                .eq('id', booking.id);

            const res = await fetch('/api/send-invoice-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    booking,
                    pdfBase64: base64,
                    filename,
                    currency,
                    paymentStatus,
                    paymentMethod,
                }),
            });

            if (!res.ok) throw new Error('Email API error');
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 4000);
        } catch (err) {
            console.error('Send Invoice Email Error:', err);
            alert('Failed to send invoice email. Please try again.');
        } finally {
            setSendingEmail(false);
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
                    {/* Round Trip Toggle */}
                    <div className="flex flex-col gap-1">
                        <div
                            onClick={() => {
                                setIsRoundTrip(!isRoundTrip);
                                if (!isRoundTrip && booking) setReturnDestination(booking.pickup_location);
                            }}
                            className={`flex items-center gap-2 rounded-lg border p-1 shadow-sm px-3 cursor-pointer transition-all select-none ${
                                isRoundTrip ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white text-gray-500 border-gray-200'
                            }`}
                        >
                            <span className="text-lg">🔄</span>
                            <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">
                                {isRoundTrip ? 'Round Trip ON' : 'Round Trip'}
                            </span>
                        </div>
                        {isRoundTrip && (
                            <input
                                value={returnDestination}
                                onChange={(e) => setReturnDestination(e.target.value)}
                                className="h-7 w-40 text-[11px] font-bold border rounded px-2 outline-none bg-white"
                                placeholder="Return destination..."
                            />
                        )}
                    </div>

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

                    <Button
                        onClick={handleSendEmail}
                        disabled={sendingEmail}
                        className={`font-bold h-10 px-6 ${emailSent ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        {sendingEmail ? 'Sending...' : emailSent ? '✓ Email Sent!' : 'Send Invoice Email'}
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
            <div id="invoice-print" className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none print:w-[210mm] box-border">
                {/* Decorative Top Bar */}
                <div className="h-[4px] bg-primary w-full"></div>

                <div className="px-8 py-5 print:px-[11mm] print:py-[7mm] flex flex-col min-h-[calc(296mm-4px)] justify-between bg-white">

                    {/* Top Content */}
                    <div>
                        {/* Invoice Header */}
                        <div className="flex justify-between items-start mb-3 border-b-2 border-gray-100 pb-3">
                            <div>
                                <span className="text-[12px] font-black tracking-tighter text-gray-900 uppercase">
                                    Taxi Service <span className="text-lime-600">KSA</span>
                                </span>
                                <div className="text-[9px] text-gray-500 space-y-0 mt-1 leading-tight font-medium">
                                    <p className="flex items-center gap-1"><MapPin className="w-2 h-2 text-gray-400" /> Jeddah, Saudi Arabia</p>
                                    <p className="flex items-center gap-1"><Mail className="w-2 h-2 text-gray-400" /> info@taxiserviceksa.com</p>
                                    <p className="flex items-center gap-1"><Globe className="w-2 h-2 text-gray-400" /> www.taxiserviceksa.com</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center justify-end gap-2 mb-0.5">
                                    <h1 className="text-[12px] font-black text-gray-900 uppercase tracking-tighter">Invoice</h1>
                                    {isRoundTrip && (
                                        <span className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase bg-blue-600 text-white whitespace-nowrap">
                                            🔄 Round Trip
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 font-mono text-[9px] tracking-widest">REF: #{booking.id.slice(0, 8).toUpperCase()}</p>
                                <p className="text-gray-500 text-[10px] font-bold">Date: {invoiceDate}</p>
                                <div className="flex justify-end gap-1.5 mt-1.5">
                                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wide ${paymentStatus === 'Paid' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                        {paymentStatus}
                                    </span>
                                    <span className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100">
                                        {paymentMethod}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Passenger + Trip in 2 columns */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                                <h2 className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Passenger Details</h2>
                                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                    <p className="text-[12px] font-bold text-gray-900 mb-1">{booking.customer_name}</p>
                                    <div className="space-y-0.5 text-[10px] text-gray-600">
                                        <p className="flex items-center gap-1 font-medium">
                                            <Phone className="w-2.5 h-2.5 text-gray-400 flex-shrink-0" /> {booking.customer_phone}
                                        </p>
                                        <p className="flex items-center gap-1">
                                            <Mail className="w-2.5 h-2.5 text-gray-400 flex-shrink-0" /> {booking.customer_email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Trip Schedule</h2>
                                <div className="space-y-0.5">
                                    {[
                                        { icon: <Calendar className="w-2.5 h-2.5" />, label: 'Date', value: booking.pickup_date },
                                        { icon: <Clock className="w-2.5 h-2.5" />, label: 'Time', value: booking.pickup_time },
                                        { icon: <Car className="w-2.5 h-2.5" />, label: 'Vehicle', value: booking.vehicle_type },
                                        { icon: <User className="w-2.5 h-2.5" />, label: 'Pax', value: `${booking.passengers} Pax | ${booking.luggage} Bags` },
                                    ].map(({ icon, label, value }) => (
                                        <div key={label} className="flex justify-between items-center text-[10px]">
                                            <span className="text-gray-500 flex items-center gap-1">{icon} {label}:</span>
                                            <span className="font-bold text-gray-900">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Route Details */}
                        <div className="mb-3">
                            <h2 className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">
                                Journey Route {isRoundTrip && <span className="text-blue-500 ml-1">(Round Trip)</span>}
                            </h2>
                            <div className="relative pl-5 space-y-2 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-gray-200">
                                <div className="relative">
                                    <div className="absolute -left-[18px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                                    <p className="text-[8px] text-gray-400 font-black uppercase">Pick-up</p>
                                    <p className="text-[12px] font-bold text-gray-900 leading-snug break-words">{booking.pickup_location}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[18px] top-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                                    <p className="text-[8px] text-gray-400 font-black uppercase">{isRoundTrip ? 'Destination' : 'Drop-off'}</p>
                                    <p className="text-[12px] font-bold text-gray-900 leading-snug break-words">{booking.destination}</p>
                                </div>
                                {isRoundTrip && (
                                    <div className="relative">
                                        <div className="absolute -left-[18px] top-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                            <span className="text-white text-[5px] font-black">↩</span>
                                        </div>
                                        <p className="text-[8px] text-blue-500 font-black uppercase">Return Drop-off</p>
                                        <p className="text-[12px] font-bold text-gray-900 leading-snug break-words">{returnDestination || booking.pickup_location}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Service Table */}
                        <div className="border-2 border-gray-100 rounded-lg overflow-hidden mb-3">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50/50 text-gray-400 text-[8px] font-black uppercase tracking-[0.2em]">
                                    <tr>
                                        <th className="px-4 py-2">Service Description</th>
                                        <th className="px-4 py-2 text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2.5">
                                            <p className="font-black text-gray-900 text-[12px] uppercase tracking-tight">
                                                {isRoundTrip ? 'Round Trip Transfer Service 🔄' : 'Private Transfer Service'}
                                            </p>
                                            <p className="text-[10px] text-gray-500 mt-0.5">
                                                {booking.vehicle_type} • Professional Chauffeur Service
                                            </p>
                                            <p className="text-[9px] text-gray-400 mt-0.5 uppercase font-bold">
                                                {isRoundTrip
                                                    ? `${booking.pickup_location.split(',')[0]} ↔ ${booking.destination.split(',')[0]}`
                                                    : `${booking.pickup_location.split(',')[0]} → ${booking.destination.split(',')[0]}`}
                                            </p>
                                            {booking.special_requests && (
                                                <div className="mt-1.5 p-1.5 bg-gray-50 rounded border border-gray-100 text-[9px] text-gray-500 whitespace-pre-wrap leading-snug">
                                                    <span className="font-bold">Special Requests: </span>{booking.special_requests}
                                                </div>
                                            )}
                                            {quickNote.trim() && (
                                                <div className="mt-1.5 border-l-4 border-primary px-2.5 py-1.5 bg-primary/5 rounded-r">
                                                    <p className="text-[10px] text-gray-700 whitespace-pre-wrap leading-snug">{quickNote.trim()}</p>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-2.5 text-right align-top">
                                            <span className="text-[12px] font-black text-gray-900">{currency} {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-gray-900">
                                    <tr>
                                        <td className="px-4 py-2.5 text-right text-[9px] font-black uppercase tracking-widest text-white/50">Total Payable Amount</td>
                                        <td className="px-4 py-2.5 text-right border-l border-white/10">
                                            <span className="text-[12px] font-black text-primary">{currency} {booking.total_price?.toFixed(2) || '0.00'}</span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        {/* Payment Info */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/10">
                                <h3 className="text-[8px] font-black text-primary uppercase tracking-wide mb-1">Booking Confirmation</h3>
                                <p className="text-[9px] text-gray-600 leading-snug">
                                    Your transport service is fully confirmed. Please have this invoice ready for your chauffeur.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                                <h3 className="text-[8px] font-black text-gray-400 uppercase tracking-wide mb-1">Payment Instruction</h3>
                                <p className="text-[9px] text-gray-800 font-black uppercase italic leading-snug">
                                    {paymentMethod === 'Cash to Driver'
                                        ? "Payment to be handed to the driver upon journey completion."
                                        : "Payment has been secured via online transaction."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto">
                        <div className="grid grid-cols-2 gap-6 items-end border-t-2 border-gray-100 pt-3">
                            <div>
                                <p className="font-black text-gray-900 mb-1 font-mono uppercase tracking-[0.1em] text-[9px]">Terms & Conditions</p>
                                <ul className="list-disc list-inside space-y-0 text-[8px] font-medium text-gray-500 opacity-80">
                                    <li>Price includes fuel, parking, and toll fees.</li>
                                    <li>Free cancellation up to 24 hours before pickup.</li>
                                    <li>Driver will wait 60 minutes for airport pickups.</li>
                                    <li>This invoice is valid for 30 days from date issued.</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border-2 border-primary/20 p-3 rounded-xl bg-primary/5">
                                    <p className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-2">Partner Authorizations</p>
                                    <div className="flex items-center justify-end gap-4 h-10">
                                        <div className="text-center">
                                            <img src="/zumer-signature.png" alt="Zumer" className="h-full w-auto max-w-[80px] object-contain select-none" />
                                            <p className="text-[7px] font-black mt-0.5 text-gray-400 border-t pt-0.5 border-gray-100 italic tracking-widest">Zumer</p>
                                        </div>
                                        <div className="text-center">
                                            <img src="/ismail-signature.png" alt="Ismail" className="h-full w-auto max-w-[80px] object-contain select-none" />
                                            <p className="text-[7px] font-black mt-0.5 text-gray-400 border-t pt-0.5 border-gray-100 italic tracking-widest">Ismail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 py-2 bg-gray-900 text-center text-white text-[9px] font-black -mx-8 -mb-5 print:-mx-[11mm] print:-mb-[7mm] px-8 tracking-[0.3em] uppercase">
                            <p className="opacity-60">Premium Transport Services • Kingdom of Saudi Arabia</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Styling */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    html, body {
                        width: 210mm;
                        margin: 0 !important;
                        padding: 0 !important;
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        overflow: visible !important;
                    }
                    #invoice-print {
                        width: 210mm !important;
                        min-height: 296mm !important;
                        background: white !important;
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 auto !important;
                        overflow: visible !important;
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
