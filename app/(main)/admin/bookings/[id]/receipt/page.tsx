'use client';

import { useEffect, useState } from 'react';
import { useBillToCompany, BillToCompanyInput } from '@/components/admin/BillToCompany';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { adminFetch } from '@/lib/admin-fetch';
import { formatTime12h } from '@/lib/format-time';
import { downloadDocumentPdf, documentPdfToBase64 } from '@/lib/document-pdf';
import { getReturnRoute, DELIVERY_ITEM_TYPES } from '@/lib/booking-validation';
import { ksaToday } from '@/lib/ksa-time';
import { driverDocFromParams, loadDocBooking } from '@/lib/doc-source';
import { ArrowLeft, Mail, Printer, Languages, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Official payment receipt, laid out per the owner's receipt brief: header,
// receipt number / issue date / PAID, acknowledgement sentence, Particulars |
// Details | Amount table, Customer (or Payer) Information, both signatories
// (Ismail, Director and Zumer, Co-Founder) and the company footer.
// A receipt is only produced after the admin confirms the payment was
// actually received; nothing marks a booking paid behind their back.

type DocLang = 'en' | 'ar';

const TXT: Record<DocLang, Record<string, string>> = {
    en: {
        title: 'Official Payment Receipt', receiptNo: 'Receipt Number', issueDate: 'Issue Date', paymentStatus: 'Payment Status', paid: 'PAID',
        bookingRef: 'Booking Reference',
        ackA: 'This is to certify that Taxi Service KSA has received payment from',
        ackB: 'in the amount of', ackC: 'for the private transportation services provided on',
        ackCPartial: 'as part payment for the private transportation services scheduled on',
        particulars: 'Particulars', details: 'Details', amount: 'Amount',
        service: 'Service', privateTransfer: 'Private Chauffeur Transfer', roundTrip: 'Private Round Trip Transfer', hourly: 'Hourly Chauffeur Service',
        route: 'Route', pickup: 'Pickup', dropoff: 'Drop-off', returnRoute: 'Return Route',
        dateTime: 'Service Date & Pickup Time', returnDateTime: 'Return Date & Time', duration: 'Duration', hours: 'hours',
        vehicle: 'Vehicle', passengers: 'Passengers', items: 'Items', paymentMethod: 'Payment Method', remarks: 'Remarks',
        bookingTotal: 'Booking total', balanceRemaining: 'Balance remaining',
        totalReceived: 'Total Amount Received',
        customerInfo: 'Customer Information', payerInfo: 'Payer Information', onBehalfOf: 'On behalf of',
        company: 'Company', fullName: 'Full Name', phone: 'Phone', email: 'Email',
        director: 'Director', coFounder: 'Co-Founder',
        tagline: 'Premium Private Transport — Kingdom of Saudi Arabia', city: 'Jeddah, Saudi Arabia', cityUpper: 'JEDDAH · SAUDI ARABIA',
        receiptRef: 'Receipt Reference', issued: 'Issued',
        thanks: 'Thank you for choosing Taxi Service KSA.',
        officialNote: 'This is an official payment receipt. Please retain it for your records.',
    },
    ar: {
        title: 'إيصال دفع رسمي', receiptNo: 'رقم الإيصال', issueDate: 'تاريخ الإصدار', paymentStatus: 'حالة الدفع', paid: 'مدفوع',
        bookingRef: 'رقم الحجز',
        ackA: 'نشهد بأن تاكسي سيرفس السعودية قد استلمت دفعة من',
        ackB: 'بمبلغ وقدره', ackC: 'مقابل خدمات النقل الخاص المقدمة بتاريخ',
        ackCPartial: 'كدفعة جزئية مقابل خدمات النقل الخاص المقررة بتاريخ',
        particulars: 'البيان', details: 'التفاصيل', amount: 'المبلغ',
        service: 'الخدمة', privateTransfer: 'نقل خاص بسائق', roundTrip: 'نقل خاص ذهاب وعودة', hourly: 'خدمة سائق بالساعة',
        route: 'المسار', pickup: 'الانطلاق', dropoff: 'الوصول', returnRoute: 'مسار العودة',
        dateTime: 'تاريخ الخدمة ووقت الانطلاق', returnDateTime: 'تاريخ ووقت العودة', duration: 'المدة', hours: 'ساعات',
        vehicle: 'المركبة', passengers: 'الركاب', items: 'الأغراض', paymentMethod: 'طريقة الدفع', remarks: 'ملاحظات',
        bookingTotal: 'إجمالي الحجز', balanceRemaining: 'الرصيد المتبقي',
        totalReceived: 'إجمالي المبلغ المستلم',
        customerInfo: 'معلومات العميل', payerInfo: 'معلومات الدافع', onBehalfOf: 'نيابة عن',
        company: 'الشركة', fullName: 'الاسم الكامل', phone: 'الهاتف', email: 'البريد الإلكتروني',
        director: 'المدير', coFounder: 'الشريك المؤسس',
        tagline: 'خدمة نقل خاصة فاخرة — المملكة العربية السعودية', city: 'جدة، المملكة العربية السعودية', cityUpper: 'جدة · المملكة العربية السعودية',
        receiptRef: 'مرجع الإيصال', issued: 'تاريخ الإصدار',
        thanks: 'شكراً لاختياركم تاكسي سيرفس السعودية.',
        officialNote: 'هذا إيصال دفع رسمي. يرجى الاحتفاظ به لسجلاتكم.',
    },
};

const METHOD_AR: Record<string, string> = { 'Cash to Driver': 'نقداً للسائق', Online: 'دفع إلكتروني', 'Bank Transfer': 'تحويل بنكي', 'Card Payment': 'بطاقة' };

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    trip_end_date?: string;
    vehicle_type: string;
    passengers: number;
    luggage: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    status: string;
    special_requests?: string;
    total_price?: number;
    deposit_amount?: number | null;
    currency?: string;
    payment_status?: string;
    payment_method?: string;
    trip_type?: 'point_to_point' | 'hourly';
    duration_hours?: number;
    has_return_trip?: boolean;
    return_date?: string | null;
    return_time?: string | null;
    return_pickup_location?: string | null;
    return_destination?: string | null;
    booking_type?: 'passenger' | 'delivery';
    item_type?: string | null;
    item_count?: number | null;
}

export default function ReceiptPage() {
    const params = useParams();
    const id = params.id as string;
    // Opened from a driver's private trip link: load via the token, hide admin-only actions.
    const driverDoc = driverDocFromParams(params as Record<string, string>);
    const router = useRouter();
    const [booking, setBooking] = useState<Booking | null>(null);
    const [billToCompany, setBillToCompany] = useBillToCompany(booking?.id);
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState<DocLang>('en');
    const [currency, setCurrency] = useState('SAR');
    const [paymentMethod, setPaymentMethod] = useState('Cash to Driver');
    const [amountPaid, setAmountPaid] = useState('');
    const [receiptNote, setReceiptNote] = useState('');
    const [payerName, setPayerName] = useState('');
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const data = await loadDocBooking<Booking>(id, driverDoc);
                setBooking(data);
                if (data.currency) setCurrency(data.currency);
                if (data.payment_method) setPaymentMethod(data.payment_method);
                const status = (data.payment_status || '').toLowerCase();
                // Default the amount to what the records say was received.
                if (status.includes('partial') && data.deposit_amount) setAmountPaid(Number(data.deposit_amount).toFixed(2));
                else if (data.total_price) setAmountPaid(Number(data.total_price).toFixed(2));
                if (status === 'paid') setPaymentConfirmed(true);
            } catch (err) {
                console.error('Error fetching booking:', err);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchBooking();
    }, [id]);

    const receiptNumber = booking ? `RCP-${booking.id.slice(0, 8).toUpperCase()}` : '';
    const issueIso = ksaToday();

    const requireConfirmation = () => {
        if (paymentConfirmed) return true;
        alert('Tick "Payment has been received" first. A receipt must only be issued for money actually received.');
        return false;
    };

    const handlePrint = async () => {
        if (!booking || !requireConfirmation()) return;
        await downloadDocumentPdf('receipt-print', `Receipt-${receiptNumber}.pdf`);
    };

    const handleSendEmail = async () => {
        if (!booking || !requireConfirmation()) return;
        setSendingEmail(true);
        setEmailSent(false);
        try {
            const filename = `Receipt-${receiptNumber}.pdf`;
            const base64 = await documentPdfToBase64('receipt-print', filename);
            const received = Number(amountPaid) || 0;
            const total = Number(booking.total_price) || 0;
            const fullyPaid = total > 0 && received >= total;
            // Record exactly what was received: full payment marks the booking
            // paid; a smaller amount is stored as a partial payment.
            await supabase.from('bookings')
                .update(fullyPaid
                    ? { currency, payment_status: 'paid', payment_method: paymentMethod }
                    : { currency, payment_status: 'partial', deposit_amount: received, payment_method: paymentMethod })
                .eq('id', booking.id);

            const res = await adminFetch('/api/send-receipt-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ booking, pdfBase64: base64, filename, currency, paymentMethod, amountPaid: received.toFixed(2) }),
            });
            if (!res.ok) throw new Error('failed');
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 4000);
        } catch {
            alert('Failed to send receipt. Please try again.');
        } finally {
            setSendingEmail(false);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500" />
        </div>
    );
    if (!booking) return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <p className="text-xl font-bold">Booking not found</p>
            <Button onClick={() => router.back()}>Go Back</Button>
        </div>
    );

    const t = TXT[lang];
    const fmtDate = (iso?: string | null) => {
        if (!iso) return '';
        const d = new Date(`${iso}T12:00:00Z`);
        return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(lang === 'ar' ? 'ar-SA-u-ca-gregory' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
    };
    const money = (n: number) => `${currency} ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    const received = Number(amountPaid) || 0;
    const total = Number(booking.total_price) || 0;
    const partial = total > 0 && received > 0 && received < total;
    const serviceDate = booking.trip_end_date && booking.trip_end_date !== booking.pickup_date
        ? `${fmtDate(booking.pickup_date)} – ${fmtDate(booking.trip_end_date)}`
        : fmtDate(booking.pickup_date);
    const serviceName = booking.trip_type === 'hourly' ? t.hourly : booking.has_return_trip ? t.roundTrip : t.privateTransfer;
    const companyLines = billToCompany.split('\n').map(l => l.trim()).filter(Boolean);
    const payer = payerName.trim();
    const ret = booking.has_return_trip ? getReturnRoute(booking) : null;
    const warnings = [
        !paymentConfirmed && 'Tick "Payment has been received" once the money is actually in. Until then the receipt cannot be downloaded or sent.',
        !received && 'Enter the amount received.',
        total > 0 && received > total && 'The amount received is more than the booking total.',
    ].filter(Boolean) as string[];

    const cell = 'px-3 py-2 align-top border-b border-slate-100';
    const Line = ({ k, v, amt }: { k: string; v: React.ReactNode; amt?: React.ReactNode }) => (
        <tr>
            <td className={`${cell} w-[150px] font-semibold text-slate-700`}>{k}</td>
            <td className={`${cell} text-slate-800`}>{v}</td>
            <td className={`${cell} w-[120px] font-semibold text-slate-900 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{amt ?? ''}</td>
        </tr>
    );

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 print:bg-white print:py-0 print:px-0">

            {/* Controls */}
            <div className="max-w-[210mm] mx-auto mb-3 print:hidden space-y-3">
                <div className="flex flex-wrap gap-3 items-center justify-between bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                    <Button variant="outline" onClick={() => router.back()} className="h-9 text-sm">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                    </Button>
                    <div className="flex flex-wrap gap-2 items-center">
                        <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 h-9 bg-gray-50 hover:bg-gray-100 text-xs font-bold">
                            <Languages className="w-3.5 h-3.5" /> {lang === 'en' ? 'English' : 'عربي'}
                        </button>
                        <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2 py-1.5 bg-gray-50">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Received:</span>
                            <input value={amountPaid} onChange={e => setAmountPaid(e.target.value)} className="w-20 text-xs font-bold outline-none bg-transparent" placeholder="0.00" />
                        </div>
                        <div className="flex gap-1">
                            {['SAR', 'KWD', 'AED', 'USD'].map(c => (
                                <button key={c} onClick={() => setCurrency(c)} className={`px-2 py-1 text-[10px] font-bold rounded-md ${currency === c ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{c}</button>
                            ))}
                        </div>
                        <div className="flex gap-1">
                            {['Cash to Driver', 'Bank Transfer', 'Card Payment', 'Online'].map(m => (
                                <button key={m} onClick={() => setPaymentMethod(m)} className={`px-2 py-1 text-[10px] font-bold rounded-md ${paymentMethod === m ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{m}</button>
                            ))}
                        </div>
                        <Button onClick={handlePrint} disabled={!paymentConfirmed} className="bg-gray-900 text-white hover:bg-black font-bold h-9 px-4 text-sm">
                            <Printer className="w-4 h-4 mr-1.5" /> PDF
                        </Button>
                        {!driverDoc && <Button onClick={handleSendEmail} disabled={sendingEmail || !paymentConfirmed} className={`font-bold h-9 px-4 text-sm ${emailSent ? 'bg-green-500 text-white' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                            <Mail className="w-4 h-4 mr-1.5" /> {sendingEmail ? 'Sending...' : emailSent ? '✓ Sent!' : 'Email Receipt'}
                        </Button>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-sm cursor-pointer ${paymentConfirmed ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
                        <input type="checkbox" className="mt-1" checked={paymentConfirmed} onChange={e => setPaymentConfirmed(e.target.checked)} />
                        <span><b className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Payment has been received</b>I confirm {money(received)} was actually received from the customer.</span>
                    </label>
                    <label className="block rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold text-gray-600">
                        Paid by someone else? (optional)
                        <input value={payerName} onChange={e => setPayerName(e.target.value)} placeholder="Payer's full name" className="mt-1 block w-full h-8 rounded border border-gray-300 px-2 text-sm font-normal" />
                    </label>
                </div>

                <textarea value={receiptNote} onChange={e => setReceiptNote(e.target.value)} placeholder="Remarks on the receipt (optional), e.g. transaction reference" rows={2}
                    className="w-full border border-dashed border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-green-400 resize-none bg-white shadow-sm" />

                {warnings.length > 0 && (
                    <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs text-amber-900 space-y-0.5">
                        {warnings.map(w => <p key={w}>• {w}</p>)}
                    </div>
                )}
            </div>

            <BillToCompanyInput value={billToCompany} onChange={setBillToCompany} />

            {/* ── A4 RECEIPT ── */}
            <div id="receipt-print" dir={lang === 'ar' ? 'rtl' : 'ltr'} className="max-w-[210mm] min-h-[296mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none print:w-[210mm]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div className="px-11 pt-8 pb-6 flex flex-col min-h-[296mm] text-[12px] leading-snug text-slate-800">

                    {/* Header */}
                    <div className="flex items-start justify-between gap-6 pb-3 border-b-2 border-slate-900">
                        <div>
                            <p className="text-[22px] font-black tracking-wide text-slate-900">TAXI SERVICE <span className="text-emerald-600">KSA</span></p>
                            <p className="text-[11.5px] font-semibold text-slate-600">{t.tagline}</p>
                            <p className="text-[11px] text-slate-500 mt-0.5">{t.city}</p>
                        </div>
                        <div className={`text-[11px] text-slate-600 space-y-0.5 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                            <p dir="ltr">+966 57 580 6733</p>
                            <p>info@taxiserviceksa.com</p>
                            <p>www.taxiserviceksa.com</p>
                        </div>
                    </div>

                    {/* Title + meta */}
                    <div className="mt-5 flex items-center justify-between gap-4">
                        <p role="heading" aria-level={1} className="text-[20px] font-black uppercase tracking-[0.1em] text-slate-900">{t.title}</p>
                        <span className="rounded-md border-2 border-emerald-600 px-3 py-1 text-[13px] font-black tracking-wider text-emerald-700">{t.paid}</span>
                    </div>
                    <dl className="mt-3 grid grid-cols-4 gap-x-5 rounded-lg bg-slate-50 border border-slate-200 px-4 py-2.5 text-[11px]">
                        <div><dt className="text-slate-500">{t.receiptNo}</dt><dd className="font-bold font-mono text-slate-900">{receiptNumber}</dd></div>
                        <div><dt className="text-slate-500">{t.issueDate}</dt><dd className="font-bold text-slate-900">{fmtDate(issueIso)}</dd></div>
                        <div><dt className="text-slate-500">{t.paymentStatus}</dt><dd className="font-bold text-emerald-700">{t.paid}</dd></div>
                        <div><dt className="text-slate-500">{t.bookingRef}</dt><dd className="font-bold font-mono text-slate-900">BOOK-{booking.id.slice(0, 8).toUpperCase()}</dd></div>
                    </dl>

                    {/* Acknowledgement */}
                    <p className="mt-5 text-[13px] leading-relaxed text-slate-800">
                        {t.ackA} <b className="text-slate-900">{payer || booking.customer_name}</b>{payer ? <> ({t.onBehalfOf} {companyLines[0] || booking.customer_name})</> : companyLines[0] ? <> ({companyLines[0]})</> : null} {t.ackB} <b className="text-slate-900 whitespace-nowrap">{money(received)}</b> {partial ? t.ackCPartial : t.ackC} <b className="text-slate-900">{serviceDate}</b>.
                    </p>

                    {/* Particulars table */}
                    <table className="mt-4 w-full border border-slate-200 text-[11.5px] border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className={`px-3 py-1.5 font-semibold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.particulars}</th>
                                <th className={`px-3 py-1.5 font-semibold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.details}</th>
                                <th className={`px-3 py-1.5 font-semibold ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{t.amount}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Line k={t.service} v={serviceName} amt={money(received)} />
                            <Line k={t.route} v={<><span className="block"><span className="text-slate-500">{t.pickup}: </span>{booking.pickup_location}</span>{booking.trip_type !== 'hourly' && <span className="block"><span className="text-slate-500">{t.dropoff}: </span>{booking.destination}</span>}</>} />
                            {ret && <Line k={t.returnRoute} v={<><span className="block"><span className="text-slate-500">{t.pickup}: </span>{ret.pickupLocation}</span><span className="block"><span className="text-slate-500">{t.dropoff}: </span>{ret.destination}</span></>} />}
                            <Line k={t.dateTime} v={`${serviceDate}, ${formatTime12h(booking.pickup_time)}`} />
                            {ret && booking.return_date && <Line k={t.returnDateTime} v={`${fmtDate(booking.return_date)}${booking.return_time ? `, ${formatTime12h(booking.return_time)}` : ''}`} />}
                            {booking.trip_type === 'hourly' && <Line k={t.duration} v={`${booking.duration_hours || '?'} ${t.hours}`} />}
                            <Line k={t.vehicle} v={booking.vehicle_type} />
                            {booking.booking_type === 'delivery'
                                ? <Line k={t.items} v={`${DELIVERY_ITEM_TYPES.find(it => it.value === booking.item_type)?.label || booking.item_type || 'Item'} × ${booking.item_count || 1}`} />
                                : <Line k={t.passengers} v={booking.passengers} />}
                            <Line k={t.paymentMethod} v={lang === 'ar' ? (METHOD_AR[paymentMethod] || paymentMethod) : paymentMethod} />
                            {partial && <Line k={t.bookingTotal} v={`${t.balanceRemaining}: ${money(total - received)}`} amt={money(total)} />}
                            {receiptNote.trim() && <Line k={t.remarks} v={<span className="italic">{receiptNote.trim()}</span>} />}
                            <tr className="bg-emerald-50">
                                <td colSpan={2} className="px-3 py-2.5 font-black uppercase tracking-wide text-slate-900">{t.totalReceived}</td>
                                <td className={`px-3 py-2.5 text-[17px] font-black text-emerald-800 whitespace-nowrap ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{money(received)}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Customer / payer information */}
                    <section className="mt-4">
                        <p role="heading" aria-level={2} className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-emerald-700 border-b-2 border-emerald-600/70 pb-0.5 mb-1.5">{payer ? t.payerInfo : t.customerInfo}</p>
                        <dl className="grid grid-cols-3 gap-x-5 gap-y-1 text-[11.5px]">
                            {payer && <div><dt className="text-slate-500">{t.payerInfo}</dt><dd className="font-bold text-slate-900">{payer}</dd></div>}
                            {companyLines.length > 0 && <div><dt className="text-slate-500">{t.company}</dt><dd className="font-bold text-slate-900">{companyLines[0]}{companyLines.slice(1).map((l, i) => <span key={i} className="block font-normal text-slate-600">{l}</span>)}</dd></div>}
                            <div><dt className="text-slate-500">{t.fullName}</dt><dd className="font-bold text-slate-900">{booking.customer_name}</dd></div>
                            {booking.customer_phone && <div><dt className="text-slate-500">{t.phone}</dt><dd className="font-bold text-slate-900" dir="ltr">{booking.customer_phone}</dd></div>}
                            {booking.customer_email && <div><dt className="text-slate-500">{t.email}</dt><dd className="font-bold text-slate-900 break-all">{booking.customer_email}</dd></div>}
                        </dl>
                    </section>

                    {/* Both signatories, equal width */}
                    <section className="mt-auto pt-8 grid grid-cols-2 gap-16 px-6">
                        {[
                            { img: '/ismail-signature.png', name: 'Ismail', role: t.director },
                            { img: '/zumer-signature.png', name: 'Zumer', role: t.coFounder },
                        ].map(sig => (
                            <div key={sig.name} className="text-center">
                                <div className="h-11 flex items-end justify-center">
                                    <img src={sig.img} alt={`Signature of ${sig.name}`} className="max-h-11 w-auto object-contain" />
                                </div>
                                <div className="border-t border-slate-700 mt-1 pt-1">
                                    <p className="font-bold text-slate-900">{sig.name}</p>
                                    <p className="text-[11px] text-slate-600">{sig.role}</p>
                                    <p className="text-[10.5px] text-slate-500">Taxi Service KSA</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Footer */}
                    <div className="mt-6 pt-3 border-t-2 border-slate-900 text-center text-[10.5px] text-slate-600 space-y-0.5">
                        <p className="font-black tracking-[0.15em] text-slate-900">TAXI SERVICE KSA</p>
                        <p className="tracking-[0.12em]">{t.cityUpper}</p>
                        <p className="font-mono">{t.receiptRef}: {receiptNumber} · {t.issued}: {fmtDate(issueIso)}</p>
                        <p className="pt-1">{t.thanks} {t.officialNote}</p>
                        <p dir="ltr">info@taxiserviceksa.com · +966 57 580 6733 · www.taxiserviceksa.com</p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    html, body {
                        width: 210mm;
                        margin: 0 !important; padding: 0 !important;
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    #receipt-print { width: 210mm !important; box-shadow: none !important; }
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                }
            `}</style>
        </div>
    );
}
