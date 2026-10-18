'use client';
// html2pdf will be imported dynamically to avoid SSR issues


import { useEffect, useState } from 'react';
import { useBillToCompany, BillToCompanyInput } from '@/components/admin/BillToCompany';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { adminFetch } from '@/lib/admin-fetch';
import { formatTime12h } from '@/lib/format-time';
import { downloadDocumentPdf, documentPdfToBase64 } from '@/lib/document-pdf';
import { getReturnRoute, DELIVERY_ITEM_TYPES } from '@/lib/booking-validation';
import { ksaToday } from '@/lib/ksa-time';
import { cleanCustomerNote, splitVat, isCardOrOnline } from '@/lib/doc-helpers';
import { driverDocFromParams, loadDocBooking } from '@/lib/doc-source';
import { ExtraCharge, readExtras, extrasTotal } from '@/lib/extra-charges';
import ExtraChargesEditor from '@/components/admin/ExtraChargesEditor';
import {
    Printer,
    ArrowLeft,
    Mail,
    Phone,
    Globe,
    MapPin,
    Clock,
    Plus,
    Trash2,
    Repeat,
    Landmark,
    Languages,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

type DocLang = 'en' | 'ar';
type NormalizedStatus = 'paid' | 'unpaid' | 'partial';

const INVOICE_TEXT: Record<DocLang, Record<string, string>> = {
    en: {
        invoice: 'INVOICE', no: 'Invoice Number', issueDate: 'Issue Date', bookingRef: 'Booking Reference', roundTrip: 'round trip',
        invoiceStatus: 'Invoice Status', currencyLabel: 'Currency', bookingStatusLabel: 'Booking Status',
        bookingConfirmed: 'Booking Confirmed', bookingPending: 'Booking Pending Confirmation', bookingCompleted: 'Service Completed', bookingCancelled: 'Booking Cancelled',
        billTo: 'Bill To', attn: 'Attn', bookingDetails: 'Booking Details',
        serviceDate: 'Service Date', timeLabel: 'Pickup Time', vehicleLabel: 'Vehicle', passengersLabel: 'Passengers', nationalityLabel: 'Nationality', itemsLabel: 'Items', serviceTypeLabel: 'Service Type',
        journeyRoute: 'Journey Route', itinDate: 'Date', itinTime: 'Time', itinPickup: 'Pickup', itinDest: 'Drop-off',
        pickup: 'Pickup', dropoff: 'Drop-off', returnDropoff: 'Return · Drop-off', outbound: 'Outbound', returnLeg: 'Return', stopLabel: 'Stop',
        charges: 'Service Description & Charges', description: 'Description', qty: 'Qty', unitPrice: 'Unit Price', amount: 'Amount',
        roundTripService: 'Private Round Trip Transfer', privateService: 'Private Transfer Service', multiDayService: 'Multi-Day Private Chauffeur Service',
        hourlyService: 'Hourly Chauffeur Service', chauffeurService: 'Professional Chauffeur Service',
        subtotal: 'Subtotal', subtotalExVat: 'Subtotal (excl. VAT)', vatLine: 'VAT (15%)', totalInvoice: 'Total Invoice Amount', amountReceived: 'Amount Received', outstanding: 'Outstanding Balance', amountDue: 'Amount Due',
        paymentDetails: 'Payment Details', paymentMethodLabel: 'Payment Method',
        statusPaid: 'PAID', statusUnpaid: 'UNPAID', statusPartial: 'PARTIALLY PAID',
        payPaid: 'Payment has been received in full.',
        payPartial: 'The remaining balance is payable as agreed before or on the day of service.',
        payCash: 'Payable in cash to the driver on the day of service.',
        payOther: 'Payment is due according to the agreed payment arrangement.',
        msgPaidConfirmed: 'Your booking is confirmed and payment has been received in full. Thank you for choosing Taxi Service KSA.',
        msgConfirmedDue: 'Your booking is confirmed. The outstanding balance shown above is payable as agreed.',
        msgCompletedPaid: 'Your journey has been completed and payment has been received in full. Thank you for choosing Taxi Service KSA.',
        msgCompletedDue: 'Your journey has been completed. The outstanding balance shown above is now due.',
        payDue: 'The outstanding balance is now due.',
        msgPending: 'Booking pending confirmation. We will confirm your booking once availability and payment have been finalised.',
        bankDetails: 'Bank Transfer Details', bankName: 'Bank', accountName: 'Account Name', accountNumber: 'Account Number', iban: 'IBAN', swift: 'SWIFT / BIC',
        notes: 'Notes',
        terms: 'Terms & Conditions',
        term1: 'This invoice covers the transportation service and itinerary stated in this document.',
        term2: 'Fuel and standard chauffeur service are included only as specified in the agreed quotation or booking.',
        term3: 'Additional waiting time, stops, route changes or other services may incur additional charges when agreed.',
        term4: 'Any additional charges will be communicated to the customer before being applied, wherever reasonably practicable.',
        term5: 'Cancellation and refund conditions are governed by the confirmed booking terms.',
        term6: 'This invoice records the stated service charges and payment status.',
        director: 'Director', coFounder: 'Co-Founder',
        thankYou: 'Thank you for choosing Taxi Service KSA.', tagline: 'Private Transportation & Chauffeur Services', city: 'Jeddah, Saudi Arabia',
        pax: 'passengers', bags: 'bags', durationLabel: 'Duration', hours: 'hours',
    },
    ar: {
        invoice: 'فاتورة', no: 'رقم الفاتورة', issueDate: 'تاريخ الإصدار', bookingRef: 'رقم الحجز', roundTrip: 'ذهاب وعودة',
        invoiceStatus: 'حالة الفاتورة', currencyLabel: 'العملة', bookingStatusLabel: 'حالة الحجز',
        bookingConfirmed: 'الحجز مؤكد', bookingPending: 'الحجز بانتظار التأكيد', bookingCompleted: 'تمت الخدمة', bookingCancelled: 'الحجز ملغى',
        billTo: 'فاتورة إلى', attn: 'عناية', bookingDetails: 'تفاصيل الحجز',
        serviceDate: 'تاريخ الخدمة', timeLabel: 'وقت الانطلاق', vehicleLabel: 'المركبة', passengersLabel: 'الركاب', nationalityLabel: 'الجنسية', itemsLabel: 'الأغراض', serviceTypeLabel: 'نوع الخدمة',
        journeyRoute: 'مسار الرحلة', itinDate: 'التاريخ', itinTime: 'الوقت', itinPickup: 'الانطلاق', itinDest: 'الوصول',
        pickup: 'الانطلاق', dropoff: 'الوصول', returnDropoff: 'العودة · الوصول', outbound: 'الذهاب', returnLeg: 'العودة', stopLabel: 'محطة',
        charges: 'وصف الخدمة والرسوم', description: 'الوصف', qty: 'الكمية', unitPrice: 'سعر الوحدة', amount: 'المبلغ',
        roundTripService: 'نقل خاص ذهاب وعودة', privateService: 'خدمة نقل خاص', multiDayService: 'خدمة سائق خاص متعددة الأيام',
        hourlyService: 'خدمة سائق بالساعة', chauffeurService: 'خدمة سائق محترف',
        subtotal: 'المجموع الفرعي', subtotalExVat: 'المجموع الفرعي (بدون الضريبة)', vatLine: 'ضريبة القيمة المضافة (15%)', totalInvoice: 'إجمالي الفاتورة', amountReceived: 'المبلغ المستلم', outstanding: 'الرصيد المتبقي', amountDue: 'المبلغ المستحق',
        paymentDetails: 'تفاصيل الدفع', paymentMethodLabel: 'طريقة الدفع',
        statusPaid: 'مدفوع', statusUnpaid: 'غير مدفوع', statusPartial: 'مدفوع جزئياً',
        payPaid: 'تم استلام المبلغ بالكامل.',
        payPartial: 'يُدفع الرصيد المتبقي حسب الاتفاق قبل موعد الخدمة أو في يومها.',
        payCash: 'يُدفع نقداً للسائق في يوم الخدمة.',
        payOther: 'يستحق الدفع وفق ترتيب الدفع المتفق عليه.',
        msgPaidConfirmed: 'تم تأكيد حجزكم واستلام المبلغ بالكامل. شكراً لاختياركم تاكسي سيرفس السعودية.',
        msgConfirmedDue: 'تم تأكيد حجزكم. يُدفع الرصيد المتبقي الموضح أعلاه حسب الاتفاق.',
        msgCompletedPaid: 'تمت رحلتكم واستلام المبلغ بالكامل. شكراً لاختياركم تاكسي سيرفس السعودية.',
        msgCompletedDue: 'تمت رحلتكم. الرصيد المتبقي الموضح أعلاه مستحق الآن.',
        payDue: 'الرصيد المتبقي مستحق الآن.',
        msgPending: 'الحجز بانتظار التأكيد. سنؤكد حجزكم بعد التحقق من التوفر وإتمام الدفع.',
        bankDetails: 'تفاصيل التحويل البنكي', bankName: 'البنك', accountName: 'اسم الحساب', accountNumber: 'رقم الحساب', iban: 'الآيبان', swift: 'رمز السويفت',
        notes: 'ملاحظات',
        terms: 'الشروط والأحكام',
        term1: 'تغطي هذه الفاتورة خدمة النقل وبرنامج الرحلة الموضح في هذا المستند.',
        term2: 'الوقود وخدمة السائق الأساسية مشمولة فقط كما هو محدد في عرض السعر أو الحجز المتفق عليه.',
        term3: 'قد يترتب على وقت الانتظار الإضافي أو المحطات أو تغيير المسار أو الخدمات الأخرى رسوم إضافية عند الاتفاق عليها.',
        term4: 'سيتم إبلاغ العميل بأي رسوم إضافية قبل تطبيقها كلما أمكن ذلك.',
        term5: 'تخضع شروط الإلغاء والاسترداد لشروط الحجز المؤكد.',
        term6: 'تسجل هذه الفاتورة رسوم الخدمة المذكورة وحالة الدفع.',
        director: 'المدير', coFounder: 'الشريك المؤسس',
        thankYou: 'شكراً لاختياركم تاكسي سيرفس السعودية.', tagline: 'خدمات النقل الخاص والسائق', city: 'جدة، المملكة العربية السعودية',
        pax: 'ركاب', bags: 'حقائب', durationLabel: 'المدة', hours: 'ساعات',
    },
};

const STATUS_LABEL_KEY: Record<NormalizedStatus, string> = { paid: 'statusPaid', unpaid: 'statusUnpaid', partial: 'statusPartial' };
const METHOD_AR: Record<string, string> = { 'Cash to Driver': 'نقداً للسائق', 'Online': 'دفع إلكتروني', 'Bank Transfer': 'تحويل بنكي' };

function normalizeStatus(raw: string): NormalizedStatus {
    const v = (raw || '').toLowerCase();
    if (v.includes('partial')) return 'partial';
    if (v === 'paid') return 'paid';
    return 'unpaid';
}

interface Stop {
    time: string;
    location: string;
}
import { Button } from '@/components/ui/button';

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
    extra_charges?: unknown;
    currency?: string;
    payment_status?: string;
    payment_method?: string;
    trip_type?: 'point_to_point' | 'hourly';
    duration_hours?: number;
    contract_id?: string | null;
    invoice_number?: string | null;
    has_return_trip?: boolean;
    return_date?: string | null;
    return_time?: string | null;
    return_pickup_location?: string | null;
    return_destination?: string | null;
    itinerary_legs?: { date: string; time: string; pickup: string; dropoff: string }[] | null;
    additional_stops?: Stop[] | null;
    deposit_amount?: number | null;
    passenger_nationality?: string | null;
    booking_type?: 'passenger' | 'delivery';
    recipient_name?: string | null;
    recipient_phone?: string | null;
    item_type?: string | null;
    item_count?: number | null;
}

export default function InvoicePage() {
    const params = useParams();
    const id = params.id as string;
    // Opened from a driver's private trip link: load via the token, hide admin-only actions.
    const driverDoc = driverDocFromParams(params as Record<string, string>);
    const router = useRouter();
    const [booking, setBooking] = useState<Booking | null>(null);
    const [billToCompany, setBillToCompany] = useBillToCompany(booking?.id);
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState<DocLang>('en');
    const [quickNote, setQuickNote] = useState('');
    const [currency, setCurrency] = useState('SAR');
    const [paymentStatus, setPaymentStatus] = useState('Unpaid');
    const [paymentMethod, setPaymentMethod] = useState('Cash to Driver');
    // Total already includes 15% VAT (card / online payments): show subtotal + VAT.
    const [includesVat, setIncludesVat] = useState(false);
    const [extras, setExtras] = useState<ExtraCharge[]>([]);
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [returnPickupLocation, setReturnPickupLocation] = useState('');
    const [returnDropoffLocation, setReturnDropoffLocation] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [stops, setStops] = useState<Stop[]>([]);
    const [additionalEmails, setAdditionalEmails] = useState<string[]>([]);
    const [emailInput, setEmailInput] = useState('');
    const [bankDetails, setBankDetails] = useState({
        showOnDocument: false,
        bankName: '',
        accountName: '',
        accountNumber: '',
        iban: '',
        swiftCode: '',
        notes: ''
    });
    useEffect(() => {
        try {
            const saved = localStorage.getItem('invoice-bank-details');
            if (saved) setBankDetails(prev => ({ ...prev, ...JSON.parse(saved), showOnDocument: false }));
        } catch { /* storage blocked */ }
    }, []);
    useEffect(() => {
        try {
            const { showOnDocument, ...rest } = bankDetails;
            if (Object.values(rest).some(Boolean)) localStorage.setItem('invoice-bank-details', JSON.stringify(rest));
        } catch { /* storage blocked */ }
    }, [bankDetails]);

    const addEmail = () => {
        const val = emailInput.trim().toLowerCase();
        if (val && val.includes('@') && !additionalEmails.includes(val)) {
            setAdditionalEmails(prev => [...prev, val]);
            setEmailInput('');
        }
    };

    const addStop = () => setStops(prev => [...prev, { time: '', location: '' }]);
    const removeStop = (i: number) => setStops(prev => prev.filter((_, idx) => idx !== i));
    const updateStop = (i: number, field: keyof Stop, value: string) =>
        setStops(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: value } : s));

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const data = await loadDocBooking<Booking>(id, driverDoc, { invoice: true });
                let bookingData = data;
                setExtras(readExtras(data.extra_charges));
                // Assign a permanent sequential invoice number the first time
                // this invoice is ever opened — accounting numbers must not
                // change on re-visits, so it's stored back on the booking.
                // (In driver mode the API has already assigned it.)
                if (!bookingData.invoice_number && !driverDoc) {
                    const { data: assignedNumber, error: rpcError } = await supabase.rpc('assign_invoice_number', { p_booking_id: id });
                    if (!rpcError && assignedNumber) {
                        bookingData = { ...bookingData, invoice_number: assignedNumber };
                    } else if (rpcError) {
                        console.error('Failed to assign invoice number:', rpcError);
                    }
                }
                setBooking(bookingData);
                // Initialize editable fields from booking data if they exist
                if (Array.isArray(data.additional_stops)) setStops(data.additional_stops);
                if (data.currency) setCurrency(data.currency);
                if (data.payment_status) {
                    const s = normalizeStatus(data.payment_status);
                    setPaymentStatus(s === 'paid' ? 'Paid' : s === 'partial' ? 'Partially Paid' : 'Unpaid');
                }
                // Note: payment_method might not be in the DB yet, but we check just in case
                if (data.payment_method) setPaymentMethod(data.payment_method);
                if (isCardOrOnline(data.payment_method)) setIncludesVat(true);
                // Auto-detect round trip from booking data. getReturnRoute()
                // prefers explicitly recorded return locations and falls back
                // to the outbound route reversed for legacy bookings that
                // predate return_pickup_location/return_destination.
                if (data.has_return_trip) {
                    setIsRoundTrip(true);
                    const route = getReturnRoute(data);
                    setReturnPickupLocation(route.pickupLocation);
                    setReturnDropoffLocation(route.destination);
                    if (data.return_date) setReturnDate(data.return_date);
                    if (data.return_time) setReturnTime(data.return_time);
                }
            } catch (error) {
                console.error('Error fetching booking:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBooking();
    }, [id]);

    const buildInvoiceFilename = () => {
        if (!booking) return 'Invoice.pdf';
        const customerName = booking.customer_name ? booking.customer_name.replace(/\s+/g, '-') : 'Client';
        const refId = booking.id.slice(0, 8).toUpperCase();
        const dateStr = booking.pickup_date || new Date().toISOString().split('T')[0];
        return `Invoice-${refId}-${customerName}-${dateStr}.pdf`;
    };

    const handlePrint = async () => {
        if (!booking) return;
        await downloadDocumentPdf('invoice-print', buildInvoiceFilename());
    };

    const handleSendEmail = async () => {
        if (!booking) return;
        setSendingEmail(true);
        setEmailSent(false);

        try {
            const filename = buildInvoiceFilename();
            const base64 = await documentPdfToBase64('invoice-print', filename);

            // Persist currency, paymentStatus, paymentMethod, and any extra
            // stops added on this screen back to DB — previously `stops`
            // only lived in local state and was lost on every reload.
            await supabase
                .from('bookings')
                .update({
                    currency,
                    payment_status: paymentStatus,
                    payment_method: paymentMethod,
                    additional_stops: stops.filter(s => s.location.trim()).length > 0 ? stops.filter(s => s.location.trim()) : null,
                })
                .eq('id', booking.id);

            const res = await adminFetch('/api/send-invoice-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    booking: {
                        ...booking,
                        total_price: (booking.total_price || 0) + extrasTotal(extras),
                        has_return_trip: isRoundTrip,
                        return_date: isRoundTrip ? (returnDate || booking.return_date || null) : null,
                        return_time: isRoundTrip ? (returnTime || booking.return_time || null) : null,
                        return_pickup_location: isRoundTrip ? (returnPickupLocation || null) : null,
                        return_destination: isRoundTrip ? (returnDropoffLocation || null) : null,
                    },
                    pdfBase64: base64,
                    filename,
                    currency,
                    paymentStatus,
                    paymentMethod,
                    additionalEmails,
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

    // Invoice is issued today (Saudi date); the number itself is permanent.
    const issueIso = ksaToday();
    const fmtDate = (iso?: string | null) => {
        if (!iso) return '';
        const d = new Date(`${iso}T12:00:00Z`);
        return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(lang === 'ar' ? 'ar-SA-u-ca-gregory' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
    };
    // Falls back to the old date/id-derived format only in the brief window
    // before the permanent sequential number above finishes assigning.
    const invoiceNumber = booking.invoice_number || `INV-${(booking.pickup_date || booking.created_at.slice(0, 10)).replace(/-/g, '')}-${booking.id.slice(0, 6).toUpperCase()}`;
    const bookingRef = `BOOK-${booking.id.slice(0, 8).toUpperCase()}`;
    const t = INVOICE_TEXT[lang];
    const money = (n: number) => `${currency} ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Single source of truth for payment: every amount and status on the
    // document comes from the selected payment status + recorded deposit.
    // "Cash to Driver" is only the method; it never marks anything as paid.
    const status = normalizeStatus(paymentStatus);
    // fare = the booking price; total adds the extra charges (border crossing etc.).
    const fare = booking.total_price || 0;
    const total = fare + extrasTotal(extras);
    const received = status === 'paid' ? total : status === 'partial' ? Math.min(booking.deposit_amount || 0, total) : 0;
    const balance = Math.max(total - received, 0);
    const vatSplit = includesVat && fare ? splitVat(fare) : null;
    const STATUS_STYLE: Record<NormalizedStatus, string> = {
        paid: 'border-emerald-600 text-emerald-700',
        unpaid: 'border-red-600 text-red-700',
        partial: 'border-amber-500 text-amber-700',
    };
    // Booking status shown on the invoice follows the real booking status:
    // a completed trip says "Service Completed", not "Booking Confirmed".
    const bookingCompleted = booking.status === 'completed';
    const bookingCancelled = booking.status === 'cancelled';
    const bookingConfirmed = booking.status === 'confirmed' || booking.status === 'in_progress' || bookingCompleted;
    const bookingStatusText = bookingCompleted ? t.bookingCompleted : bookingCancelled ? t.bookingCancelled : bookingConfirmed ? t.bookingConfirmed : t.bookingPending;
    const paymentNote = status === 'paid' ? t.payPaid
        : bookingCompleted ? t.payDue
        : status === 'partial' ? t.payPartial
        : paymentMethod === 'Cash to Driver' ? t.payCash : t.payOther;
    const statusMessage = bookingCancelled ? ''
        : bookingCompleted ? (status === 'paid' ? t.msgCompletedPaid : t.msgCompletedDue)
        : bookingConfirmed ? (status === 'paid' ? t.msgPaidConfirmed : t.msgConfirmedDue)
        : t.msgPending;
    const showBank = bankDetails.showOnDocument && status !== 'paid' && !!(bankDetails.iban || bankDetails.accountNumber);
    const companyLines = billToCompany.split('\n').map(l => l.trim()).filter(Boolean);
    // Things that would make the invoice wrong; shown on screen only.
    const warnings = [
        !total && 'No price on this booking: set the total price before sending the invoice.',
        status === 'partial' && !booking.deposit_amount && 'Partially Paid is selected but no amount received is entered.',
        bankDetails.showOnDocument && !(bankDetails.iban || bankDetails.accountNumber) && 'Bank details are switched on but no IBAN / account number is entered, so they are not shown.',
    ].filter(Boolean) as string[];

    const hasItinerary = !!(booking.itinerary_legs && booking.itinerary_legs.length > 0);

    // Service date range — computed from the full itinerary when present,
    // otherwise from pickup_date (+ trip_end_date for multi-day packages).
    let serviceDateLabel = fmtDate(booking.pickup_date);
    if (hasItinerary) {
        const dates = [booking.pickup_date, ...booking.itinerary_legs!.map(l => l.date), ...(isRoundTrip && returnDate ? [returnDate] : [])].filter(Boolean).sort();
        const first = dates[0];
        const last = dates[dates.length - 1];
        serviceDateLabel = first === last ? fmtDate(first) : `${fmtDate(first)} – ${fmtDate(last)}`;
    } else if (booking.trip_end_date && booking.trip_end_date !== booking.pickup_date) {
        serviceDateLabel = `${fmtDate(booking.pickup_date)} – ${fmtDate(booking.trip_end_date)}`;
    }

    const serviceTitle = hasItinerary
        ? t.multiDayService
        : booking.trip_type === 'hourly' ? t.hourlyService
        : isRoundTrip ? t.roundTripService
        : t.privateService;

    const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
        <div className="grid grid-cols-[110px_1fr] gap-2 py-[3px] border-b border-slate-100">
            <dt className="text-slate-500">{label}</dt>
            <dd className="font-semibold text-slate-900">{value}</dd>
        </div>
    );
    const SectionTitle = ({ children }: { children: React.ReactNode }) => (
        <p role="heading" aria-level={2} className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-emerald-700 border-b-2 border-emerald-600/70 pb-0.5 mb-1.5">{children}</p>
    );

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 print:bg-white print:py-0 print:px-0 print:min-h-0">
            {/* Header Controls */}
            <div className="max-w-[210mm] mx-auto mb-4 flex flex-wrap gap-4 justify-between items-center print:hidden border-b pb-4">
                <Button variant="outline" onClick={() => router.back()} className="bg-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>

                <div className="flex flex-wrap gap-4 items-center">
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                        className="flex items-center gap-2 rounded-lg border p-1 shadow-sm px-3 h-10 bg-white text-gray-700 border-gray-200 hover:bg-gray-50 transition-all"
                    >
                        <Languages className="w-4 h-4" />
                        <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">
                            {lang === 'en' ? 'English' : 'عربي'}
                        </span>
                    </button>

                    {/* Round Trip Toggle */}
                    <div className="flex flex-col gap-1">
                        <div
                            onClick={() => {
                                const next = !isRoundTrip;
                                setIsRoundTrip(next);
                                if (next && booking) {
                                    const route = getReturnRoute(booking);
                                    setReturnPickupLocation(route.pickupLocation);
                                    setReturnDropoffLocation(route.destination);
                                }
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
                            <div className="flex flex-col gap-1 bg-blue-50/60 border border-blue-100 rounded-lg p-1.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-bold text-blue-600 uppercase">Return Route</span>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!booking) return;
                                            setReturnPickupLocation(booking.destination);
                                            setReturnDropoffLocation(booking.pickup_location);
                                        }}
                                        className="text-[9px] font-semibold text-primary hover:underline"
                                    >
                                        Reverse outbound
                                    </button>
                                </div>
                                <input
                                    value={returnPickupLocation}
                                    onChange={(e) => setReturnPickupLocation(e.target.value)}
                                    className="h-7 w-44 text-[11px] font-bold border rounded px-2 outline-none bg-white"
                                    placeholder="Return pickup location..."
                                />
                                <input
                                    value={returnDropoffLocation}
                                    onChange={(e) => setReturnDropoffLocation(e.target.value)}
                                    className="h-7 w-44 text-[11px] font-bold border rounded px-2 outline-none bg-white"
                                    placeholder="Return drop-off location..."
                                />
                                <div className="flex gap-1">
                                    <input
                                        type="date"
                                        value={returnDate}
                                        min={booking?.pickup_date}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        className="h-7 w-[100px] text-[10px] font-bold border rounded px-1.5 outline-none bg-white"
                                    />
                                    <input
                                        type="time"
                                        value={returnTime}
                                        onChange={(e) => setReturnTime(e.target.value)}
                                        className="h-7 w-20 text-[10px] font-bold border rounded px-1.5 outline-none bg-white"
                                    />
                                </div>
                            </div>
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
                                placeholder="e.g. Paid, Partially Paid"
                            />
                        </div>
                        <div className="flex gap-1 px-1">
                            {['Paid', 'Partially Paid', 'Unpaid'].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setPaymentStatus(s)}
                                    className={`px-2 py-0.5 text-[9px] font-bold rounded transition-all ${paymentStatus === s
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Deposit amount — only relevant once Partially Paid is selected */}
                    {status === 'partial' && (
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 bg-white rounded-lg border p-1 shadow-sm px-2">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 whitespace-nowrap">Paid:</span>
                                <input
                                    type="number"
                                    min={0}
                                    step="0.01"
                                    value={booking.deposit_amount ?? ''}
                                    onChange={(e) => setBooking({ ...booking, deposit_amount: e.target.value ? parseFloat(e.target.value) : null })}
                                    className="h-7 w-20 text-[11px] font-bold outline-none bg-transparent"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                    )}

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
                            {['Cash to Driver', 'Online', 'Bank Transfer'].map((method) => (
                                <button
                                    key={method}
                                    onClick={() => {
                                        setPaymentMethod(method);
                                        if (method === 'Bank Transfer') {
                                            setBankDetails(prev => ({ ...prev, showOnDocument: true }));
                                        }
                                    }}
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

                    <label className="flex items-center gap-1.5 rounded-lg border bg-white px-2 h-10 text-[11px] font-bold text-gray-700 shadow-sm cursor-pointer">
                        <input type="checkbox" checked={includesVat} onChange={e => setIncludesVat(e.target.checked)} />
                        Incl. 15% VAT
                    </label>

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

                    {!driverDoc && <Button
                        onClick={handleSendEmail}
                        disabled={sendingEmail}
                        className={`font-bold h-10 px-6 ${emailSent ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        {sendingEmail ? 'Sending...' : emailSent ? '✓ Email Sent!' : 'Send Invoice Email'}
                    </Button>}
                </div>
            </div>

            <BillToCompanyInput value={billToCompany} onChange={setBillToCompany} />

            {!driverDoc && <ExtraChargesEditor bookingId={booking.id} extras={extras} onChange={setExtras} currency={currency} />}

            {warnings.length > 0 && (
                <div className="max-w-[210mm] mx-auto mb-3 print:hidden rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs text-amber-900 space-y-0.5">
                    <p className="font-bold">Check before sending:</p>
                    {warnings.map(w => <p key={w}>• {w}</p>)}
                </div>
            )}

            {/* Quick Note Input — screen only */}
            <div className="max-w-[210mm] mx-auto mb-3 print:hidden">
                <textarea
                    value={quickNote}
                    onChange={e => setQuickNote(e.target.value)}
                    placeholder="Type a custom message here (e.g. I have 2 checked bags...)"
                    rows={2}
                    className="w-full border-2 border-dashed border-primary/20 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-0 resize-none bg-white/50 backdrop-blur-sm shadow-sm transition-all"
                />
            </div>

            {/* Multi-Stop Builder — screen only. Only meaningful when the booking
                has no structured itinerary_legs; a booking with a real multi-day
                itinerary already has its full schedule and doesn't need this. */}
            {!hasItinerary && (
                <div className="max-w-[210mm] mx-auto mb-4 print:hidden">
                    <div className="bg-white border-2 border-dashed border-orange-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Extra Stops (single trip)</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">Add waypoints between pickup and drop-off. For a multi-day/multi-leg itinerary, add legs on the booking itself instead.</p>
                            </div>
                            <button
                                onClick={addStop}
                                className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                            >
                                <Plus className="w-3.5 h-3.5" /> Add Stop
                            </button>
                        </div>

                        {stops.length === 0 ? (
                            <p className="text-[11px] text-gray-400 italic text-center py-2">No extra stops. Click "Add Stop" to add intermediate locations.</p>
                        ) : (
                            <div className="space-y-2">
                                {stops.map((stop, i) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <span className="text-[10px] font-black text-gray-400 w-14 shrink-0">Stop {i + 1}</span>
                                        <input
                                            type="time"
                                            value={stop.time}
                                            onChange={e => updateStop(i, 'time', e.target.value)}
                                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs font-bold outline-none focus:border-orange-400 w-28 shrink-0"
                                        />
                                        <input
                                            type="text"
                                            value={stop.location}
                                            onChange={e => updateStop(i, 'location', e.target.value)}
                                            placeholder="Location / address..."
                                            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-orange-400"
                                        />
                                        <button onClick={() => removeStop(i)} className="text-red-400 hover:text-red-600 transition-colors shrink-0">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!driverDoc && (<>
            {/* Additional Recipients */}
            <div className="max-w-[210mm] mx-auto mb-4 print:hidden">
                <div className="bg-white border-2 border-dashed border-blue-200 rounded-xl p-4">
                    <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Additional Recipients</p>
                    <p className="text-[10px] text-gray-400 mb-3">Invoice email will also be sent (CC) to these addresses</p>
                    <div className="flex gap-2 mb-2">
                        <input
                            type="email"
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && addEmail()}
                            placeholder="email@example.com"
                            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-400"
                        />
                        <button
                            onClick={addEmail}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                        >
                            <Plus className="w-3.5 h-3.5" /> Add
                        </button>
                    </div>
                    {additionalEmails.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {additionalEmails.map(email => (
                                <span key={email} className="flex items-center gap-1 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-medium px-2 py-0.5 rounded-full">
                                    {email}
                                    <button onClick={() => setAdditionalEmails(prev => prev.filter(e => e !== email))} className="text-blue-400 hover:text-red-500 transition-colors ml-0.5">
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bank Details Editor Card — screen only */}
            <div className="max-w-[210mm] mx-auto mb-4 print:hidden">
                <div className="bg-white border-2 border-dashed border-blue-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🏦</span>
                            <div>
                                <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Bank Transfer Details</p>
                                <p className="text-[10px] text-gray-400">Configure bank information shown on the invoice document</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Show On Document</label>
                            <input
                                type="checkbox"
                                checked={bankDetails.showOnDocument}
                                onChange={(e) => setBankDetails({...bankDetails, showOnDocument: e.target.checked})}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                        </div>
                    </div>

                    {bankDetails.showOnDocument && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">Bank Name</span>
                                <input
                                    value={bankDetails.bankName}
                                    onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
                                    placeholder="e.g. Al Rajhi Bank"
                                    className="h-8 text-xs font-bold border rounded px-2 outline-none focus:border-blue-400 bg-gray-50/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">Account Holder</span>
                                <input
                                    value={bankDetails.accountName}
                                    onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                                    placeholder="e.g. Taxi Service KSA"
                                    className="h-8 text-xs font-bold border rounded px-2 outline-none focus:border-blue-400 bg-gray-50/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">Account Number</span>
                                <input
                                    value={bankDetails.accountNumber}
                                    onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                                    placeholder="e.g. 123456789012345"
                                    className="h-8 text-xs font-bold border rounded px-2 outline-none focus:border-blue-400 bg-gray-50/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">IBAN Number</span>
                                <input
                                    value={bankDetails.iban}
                                    onChange={(e) => setBankDetails({...bankDetails, iban: e.target.value})}
                                    placeholder="e.g. SA8280000000..."
                                    className="h-8 text-xs font-bold border rounded px-2 outline-none focus:border-blue-400 bg-gray-50/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">SWIFT / BIC Code (Optional)</span>
                                <input
                                    value={bankDetails.swiftCode}
                                    onChange={(e) => setBankDetails({...bankDetails, swiftCode: e.target.value})}
                                    placeholder="e.g. RAJHSARIXXX"
                                    className="h-8 text-xs font-bold border rounded px-2 outline-none focus:border-blue-400 bg-gray-50/50"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            </>)}

            {/* ============ INVOICE DOCUMENT (A4, may flow to a 2nd page) ============ */}
            <div id="invoice-print" dir={lang === 'ar' ? 'rtl' : 'ltr'} className="max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none print:max-w-none print:w-[210mm] box-border" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div className="px-10 pt-6 pb-4 print:px-[16mm] print:py-[12mm] text-[11.5px] leading-snug text-slate-800">

                    {/* Company header */}
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

                    {/* Title + status */}
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p role="heading" aria-level={1} className="text-[24px] font-black tracking-[0.12em] text-slate-900">{t.invoice}</p>
                        <span className={`rounded-md border-2 px-3 py-1 text-[13px] font-black tracking-wider ${STATUS_STYLE[status]}`}>{t[STATUS_LABEL_KEY[status]]}</span>
                    </div>

                    {/* Metadata panel */}
                    <dl className="mt-3 grid grid-cols-3 gap-x-6 gap-y-1.5 rounded-lg bg-slate-50 border border-slate-200 px-4 py-2.5 text-[11px]">
                        <div><dt className="text-slate-500">{t.no}</dt><dd className="font-bold text-slate-900 font-mono">{invoiceNumber}</dd></div>
                        <div><dt className="text-slate-500">{t.issueDate}</dt><dd className="font-bold text-slate-900">{fmtDate(issueIso)}</dd></div>
                        <div><dt className="text-slate-500">{t.bookingRef}</dt><dd className="font-bold text-slate-900 font-mono">{bookingRef}</dd></div>
                        <div><dt className="text-slate-500">{t.invoiceStatus}</dt><dd className="font-bold text-slate-900">{t[STATUS_LABEL_KEY[status]]}</dd></div>
                        <div><dt className="text-slate-500">{t.currencyLabel}</dt><dd className="font-bold text-slate-900">{currency}</dd></div>
                        <div><dt className="text-slate-500">{t.bookingStatusLabel}</dt><dd className={`font-bold ${bookingCancelled ? 'text-red-700' : bookingConfirmed ? 'text-emerald-700' : 'text-amber-700'}`}>{bookingStatusText}</dd></div>
                    </dl>

                    {/* Bill to + booking details */}
                    <div className="mt-3 grid grid-cols-2 gap-6">
                        <section>
                            <SectionTitle>{t.billTo}</SectionTitle>
                            {companyLines.length > 0 && (
                                <div className="mb-1">
                                    <p className="font-bold text-slate-900 text-[12.5px]">{companyLines[0]}</p>
                                    {companyLines.slice(1).map((l, i) => <p key={i} className="text-slate-600">{l}</p>)}
                                </div>
                            )}
                            <p className={companyLines.length ? 'text-slate-700' : 'font-bold text-slate-900 text-[12.5px]'}>{companyLines.length ? `${t.attn}: ` : ''}{booking.customer_name}</p>
                            {booking.customer_phone && <p className="text-slate-600" dir="ltr">{booking.customer_phone}</p>}
                            {booking.customer_email && <p className="text-slate-600 break-all">{booking.customer_email}</p>}
                        </section>
                        <section>
                            <SectionTitle>{t.bookingDetails}</SectionTitle>
                            <dl>
                                <Row label={t.serviceDate} value={serviceDateLabel} />
                                <Row label={t.timeLabel} value={formatTime12h(booking.pickup_time)} />
                                <Row label={t.vehicleLabel} value={booking.vehicle_type} />
                                {booking.booking_type === 'delivery'
                                    ? <Row label={t.itemsLabel} value={`${DELIVERY_ITEM_TYPES.find(it => it.value === booking.item_type)?.label || booking.item_type || 'Item'} × ${booking.item_count || 1}`} />
                                    : <Row label={t.passengersLabel} value={`${booking.passengers} ${t.pax} · ${booking.luggage} ${t.bags}`} />}
                                {booking.passenger_nationality && <Row label={t.nationalityLabel} value={booking.passenger_nationality} />}
                                <Row label={t.serviceTypeLabel} value={serviceTitle} />
                                {booking.trip_type === 'hourly' && <Row label={t.durationLabel} value={`${booking.duration_hours || '?'} ${t.hours}`} />}
                            </dl>
                        </section>
                    </div>

                    {/* Journey route */}
                    <section className="mt-3">
                        <SectionTitle>{t.journeyRoute}</SectionTitle>
                        {hasItinerary ? (
                            <table className="w-full text-[11px] border-collapse">
                                <thead>
                                    <tr className="text-slate-500 text-left border-b border-slate-200">
                                        <th className="py-1 pr-2 font-semibold">{t.itinDate}</th>
                                        <th className="py-1 pr-2 font-semibold">{t.itinTime}</th>
                                        <th className="py-1 pr-2 font-semibold">{t.itinPickup}</th>
                                        <th className="py-1 font-semibold">{t.itinDest}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[{ date: booking.pickup_date, time: booking.pickup_time, pickup: booking.pickup_location, dropoff: booking.destination }, ...booking.itinerary_legs!, ...(isRoundTrip && returnDate ? [{ date: returnDate, time: returnTime, pickup: returnPickupLocation || booking.destination, dropoff: returnDropoffLocation || booking.pickup_location }] : [])].map((leg, i) => (
                                        <tr key={i} className="border-b border-slate-100 align-top">
                                            <td className="py-1 pr-2 whitespace-nowrap">{fmtDate(leg.date)}</td>
                                            <td className="py-1 pr-2 whitespace-nowrap">{formatTime12h(leg.time)}</td>
                                            <td className="py-1 pr-2 font-semibold text-slate-900">{leg.pickup}</td>
                                            <td className="py-1 font-semibold text-slate-900">{leg.dropoff}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <dl>
                                <Row label={`${isRoundTrip ? t.outbound + ' · ' : ''}${t.pickup}`} value={booking.pickup_location} />
                                {stops.filter(s => s.location.trim()).map((s, i) => (
                                    <Row key={i} label={`${t.stopLabel} ${i + 1}${s.time ? ` · ${formatTime12h(s.time)}` : ''}`} value={s.location} />
                                ))}
                                {booking.trip_type !== 'hourly' && <Row label={t.dropoff} value={booking.destination} />}
                                {isRoundTrip && (
                                    <>
                                        <Row label={`${t.returnLeg} · ${t.pickup}`} value={<>{returnPickupLocation || booking.destination}{returnDate ? <span className="block font-normal text-slate-500">{fmtDate(returnDate)}{returnTime ? `, ${formatTime12h(returnTime)}` : ''}</span> : null}</>} />
                                        <Row label={t.returnDropoff} value={returnDropoffLocation || booking.pickup_location} />
                                    </>
                                )}
                            </dl>
                        )}
                    </section>

                    {/* Charges table */}
                    <section className="mt-3" style={{ breakInside: 'avoid' }}>
                        <SectionTitle>{t.charges}</SectionTitle>
                        <table className="w-full text-[11.5px] border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className={`py-1.5 px-2 font-semibold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.description}</th>
                                    <th className="py-1.5 px-2 font-semibold text-center w-[50px]">{t.qty}</th>
                                    <th className={`py-1.5 px-2 font-semibold w-[110px] ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{t.unitPrice}</th>
                                    <th className={`py-1.5 px-2 font-semibold w-[110px] ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{t.amount}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200 align-top">
                                    <td className="py-2 px-2">
                                        <p className="font-bold text-slate-900">{serviceTitle}</p>
                                        <p className="text-slate-600">{booking.vehicle_type} — {t.chauffeurService}</p>
                                        <p className="text-slate-500 text-[10.5px]">{booking.pickup_location}{booking.trip_type !== 'hourly' ? ` → ${booking.destination}` : ''}{isRoundTrip ? ` (${t.roundTrip})` : ''}</p>
                                    </td>
                                    <td className="py-2 px-2 text-center">1</td>
                                    <td className={`py-2 px-2 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{money(vatSplit ? vatSplit.base : fare)}</td>
                                    <td className={`py-2 px-2 font-semibold ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{money(vatSplit ? vatSplit.base : fare)}</td>
                                </tr>
                                {extras.map((e, i) => (
                                    <tr key={i} className="border-b border-slate-200 align-top">
                                        <td className="py-2 px-2 font-semibold text-slate-900">{e.label}</td>
                                        <td className="py-2 px-2 text-center">1</td>
                                        <td className={`py-2 px-2 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{money(e.amount)}</td>
                                        <td className={`py-2 px-2 font-semibold ${lang === 'ar' ? 'text-left' : 'text-right'}`}>{money(e.amount)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                    {/* Payment details + financial summary */}
                    <div className="mt-3 grid grid-cols-[1fr_270px] gap-5 items-start" style={{ breakInside: 'avoid' }}>
                        <section>
                            <SectionTitle>{t.paymentDetails}</SectionTitle>
                            <dl>
                                <Row label={t.paymentMethodLabel} value={lang === 'ar' ? (METHOD_AR[paymentMethod] || paymentMethod) : paymentMethod} />
                                <Row label={t.invoiceStatus} value={t[STATUS_LABEL_KEY[status]]} />
                                <Row label={t.amountReceived} value={money(received)} />
                                <Row label={t.outstanding} value={money(balance)} />
                            </dl>
                            <p className="mt-1.5 text-[11px] text-slate-600">{paymentNote}</p>
                            {showBank && (
                                <div className="mt-2 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-[10.5px]">
                                    <p className="font-bold text-slate-800 mb-0.5">{t.bankDetails}</p>
                                    {bankDetails.bankName && <p>{t.bankName}: <b>{bankDetails.bankName}</b></p>}
                                    {bankDetails.accountName && <p>{t.accountName}: <b>{bankDetails.accountName}</b></p>}
                                    {bankDetails.accountNumber && <p>{t.accountNumber}: <b>{bankDetails.accountNumber}</b></p>}
                                    {bankDetails.iban && <p>{t.iban}: <b className="font-mono">{bankDetails.iban}</b></p>}
                                    {bankDetails.swiftCode && <p>{t.swift}: <b>{bankDetails.swiftCode}</b></p>}
                                    {bankDetails.notes && <p className="text-slate-500 mt-0.5">{bankDetails.notes}</p>}
                                </div>
                            )}
                        </section>
                        <section className="rounded-lg border border-slate-300 overflow-hidden">
                            <div className="flex justify-between px-3 py-1.5 border-b border-slate-200"><span>{vatSplit ? t.subtotalExVat : t.subtotal}</span><span className="font-semibold">{money(vatSplit ? vatSplit.base : fare)}</span></div>
                            {vatSplit && <div className="flex justify-between px-3 py-1.5 border-b border-slate-200"><span>{t.vatLine}</span><span className="font-semibold">{money(vatSplit.vat)}</span></div>}
                            {extras.map((e, i) => <div key={i} className="flex justify-between px-3 py-1.5 border-b border-slate-200"><span>{e.label}</span><span className="font-semibold">{money(e.amount)}</span></div>)}
                            <div className="flex justify-between items-center px-3 py-2 bg-slate-900 text-white">
                                <span className="font-bold text-[11px] uppercase tracking-wide">{t.totalInvoice}</span>
                                <span className="text-[15px] font-black whitespace-nowrap">{money(total)}</span>
                            </div>
                            <div className="flex justify-between px-3 py-1.5 border-b border-slate-200"><span>{t.amountReceived}</span><span className="font-semibold text-emerald-700">{money(received)}</span></div>
                            <div className="flex justify-between px-3 py-1.5"><span className="font-bold">{status === 'unpaid' ? t.amountDue : t.outstanding}</span><span className={`font-black ${balance > 0 ? 'text-red-700' : 'text-slate-900'}`}>{money(balance)}</span></div>
                        </section>
                    </div>

                    {/* Booking status message (only when it says something true and useful) */}
                    {statusMessage && (
                        <p className={`mt-3 rounded-md border px-3 py-1.5 text-[11px] font-semibold ${bookingConfirmed && status === 'paid' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-amber-200 bg-amber-50 text-amber-800'}`}>{statusMessage}</p>
                    )}

                    {(quickNote.trim() || cleanCustomerNote(booking.special_requests)) && (
                        <section className="mt-3">
                            <SectionTitle>{t.notes}</SectionTitle>
                            {cleanCustomerNote(booking.special_requests) && <p className="text-slate-700">{cleanCustomerNote(booking.special_requests)}</p>}
                            {quickNote.trim() && <p className="text-slate-700 whitespace-pre-wrap">{quickNote.trim()}</p>}
                        </section>
                    )}

                    {/* Terms */}
                    <section className="mt-3" style={{ breakInside: 'avoid' }}>
                        <SectionTitle>{t.terms}</SectionTitle>
                        <ol className={`list-decimal space-y-0 text-[10px] text-slate-600 ${lang === 'ar' ? 'pr-5' : 'pl-5'}`}>
                            <li>{t.term1}</li>
                            <li>{t.term2}</li>
                            <li>{t.term3}</li>
                            <li>{t.term4}</li>
                            <li>{t.term5}</li>
                            <li>{t.term6}</li>
                        </ol>
                    </section>

                    {/* Signatures */}
                    <section className={`mt-4 flex ${lang === 'ar' ? 'justify-start' : 'justify-end'} gap-10`} style={{ breakInside: 'avoid' }}>
                        {[
                            { img: '/ismail-signature.png', name: 'Ismail', role: t.director },
                            { img: '/zumer-signature.png', name: 'Zumer', role: t.coFounder },
                        ].map(sig => (
                            <div key={sig.name} className="text-center min-w-[120px]">
                                <img src={sig.img} alt={`Signature of ${sig.name}`} className="h-7 w-auto object-contain mx-auto" />
                                <p className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-900">{sig.name}</p>
                                <p className="text-[10.5px] text-slate-600">{sig.role}, Taxi Service KSA</p>
                            </div>
                        ))}
                    </section>

                    {/* Footer */}
                    <div className="mt-3 pt-2 border-t border-slate-300 text-center text-[10px] text-slate-500">
                        <p>Taxi Service KSA | {t.city} | <span dir="ltr">+966 57 580 6733</span> | info@taxiserviceksa.com | www.taxiserviceksa.com</p>
                        <p className="italic">{t.thankYou}</p>
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
                        background: white !important;
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 auto !important;
                        overflow: visible !important;
                    }
                    h1, h2, h3 {
                        break-after: avoid;
                    }
                    table, tr {
                        break-inside: avoid;
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
