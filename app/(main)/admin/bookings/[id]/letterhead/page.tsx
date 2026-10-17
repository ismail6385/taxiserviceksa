'use client';
// @ts-ignore
import html2canvas from 'html2canvas';
// @ts-ignore
import { jsPDF } from 'jspdf';

import { useEffect, useMemo, useState } from 'react';
import { useBillToCompany, BillToCompanyInput } from '@/components/admin/BillToCompany';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { adminFetch } from '@/lib/admin-fetch';
import { Printer, ArrowLeft, Mail, Languages, Repeat, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime12h } from '@/lib/format-time';
import { getReturnRoute, DELIVERY_ITEM_TYPES } from '@/lib/booking-validation';
import { ksaToday, shiftIsoDate } from '@/lib/ksa-time';
import { cleanCustomerNote, splitVat, isCardOrOnline } from '@/lib/doc-helpers';
import { driverDocFromParams, loadDocBooking } from '@/lib/doc-source';

// Official customer quotation, laid out per the owner's quotation brief:
// company header, reference / issue / validity / status, Prepared For,
// service & journey details, transfer arrangement, quotation summary with
// confirmed inclusions only, payment terms, terms & conditions, acceptance,
// and a single authorised signature (Ismail, Director). Anything that is not
// recorded on the booking is chosen in "Quotation settings", never assumed.

type DocLang = 'en' | 'ar';
type QuoteStatus = 'pending' | 'availability' | 'confirmed';
type Arrangement = 'none' | 'direct' | 'border_change' | 'multiple';
type PaymentPlan = 'cash' | 'advance' | 'prepaid' | 'online' | 'onboard' | 'paid' | 'none';
type IncludedKey = 'vehicleDriver' | 'fuel' | 'tolls' | 'parking' | 'waiting' | 'borderFees';

const TXT = {
    en: {
        tagline: 'Private Transportation & Chauffeur Services', city: 'Jeddah, Saudi Arabia',
        title: 'Official Transportation Quotation',
        reference: 'Quotation Reference', issueDate: 'Issue Date', validUntil: 'Valid Until', status: 'Quotation Status', currency: 'Currency', bookingRef: 'Booking Reference',
        statusLabels: { pending: 'Pending Customer Acceptance', availability: 'Availability Pending', confirmed: 'Confirmed' } as Record<QuoteStatus, string>,
        preparedFor: 'Prepared For', name: 'Customer Name', contact: 'Contact Number', email: 'Email Address', company: 'Company', attn: 'Attention',
        journey: 'Service & Journey Details',
        serviceType: 'Service Type', pickupDate: 'Pickup Date', pickupTime: 'Pickup Time', pickup: 'Pickup Location', destination: 'Destination',
        stops: 'Intermediate Stops', vehicle: 'Vehicle', nationality: 'Passenger Nationality', passengers: 'Passengers', luggage: 'Luggage', items: 'Items', flight: 'Flight Number',
        specialRequests: 'Special Requests', returnJourney: 'Return Journey', returnDateTime: 'Return Date & Time', itinerary: 'Itinerary',
        distance: 'Approx. Distance', duration: 'Est. Journey Duration', durationNote: 'Journey times can vary with traffic and border processing.',
        hourly: 'Hours Booked',
        serviceTypes: { oneWay: 'Private One-Way Transfer', round: 'Private Round Trip', hourly: 'Hourly Chauffeur', daily: 'Daily Chauffeur' },
        bags: 'bags', pax: 'passengers',
        arrangementTitle: 'Transfer Arrangement',
        arrangements: {
            direct: 'Direct transfer: the same vehicle and driver for the whole journey.',
            border_change: 'Vehicle change at the border, as agreed.',
            multiple: 'Multiple vehicles, as arranged.',
        } as Record<Exclude<Arrangement, 'none'>, string>,
        summary: 'Quotation Summary', baseFare: 'Base Transportation Fare', total: 'Total Quoted Price',
        basis: 'Pricing Basis', basisText: 'One private vehicle for the journey specified above.', basisHourly: 'One private vehicle with driver for the hours booked.',
        included: 'Included in the Fare',
        includedLabels: { vehicleDriver: 'Vehicle and professional driver', fuel: 'Fuel', tolls: 'Road tolls', parking: 'Parking fees', waiting: 'Agreed standard waiting time', borderFees: 'Border-related vehicle fees' } as Record<IncludedKey, string>,
        notIncluded: 'Any other charge (extra stops, extended waiting, route changes) is not included and will be agreed with you before it applies.',
        vatCard: 'Card payments are subject to an additional 15% VAT.',
        payment: 'Payment Terms', advance: 'Advance to secure the booking', balance: 'Remaining balance, payable in cash to the driver',
        paymentSecured: 'The booking is secured only after the advance has been received and the booking has been confirmed by us.',
        paymentAgreed: 'Payment method', bankNote: 'Bank transfer details will be provided on confirmation.',
        payCashRow: 'Full amount, payable in cash to the driver on the day of service',
        payCashNote: 'No advance payment is required. Please have the exact amount ready for the driver.',
        payPrepaidRow: 'Full amount, payable in advance by bank transfer',
        payPrepaidNote: 'The booking is confirmed once the payment has been received. Bank transfer details will be provided on confirmation.',
        payOnlineRow: 'Full amount, payable online by card (secure payment link)',
        payOnlineNote: 'Pay securely online with a debit or credit card. The booking is confirmed once the payment has been received.',
        payOnlineLink: 'Payment link',
        payOnboardRow: 'Full amount, payable on the day when you board the vehicle, by card or online payment link',
        payOnboardNote: 'No advance payment is required. Pay in the car at pickup by card or through the secure payment link we send you.',
        payPaidRow: 'Paid in full',
        payPaidNote: 'Payment has been received in full. Thank you.',
        vatLine: 'VAT (15%)', baseFareExVat: 'Base Transportation Fare (excl. VAT)',
        acceptancePaid: 'Your booking is confirmed and paid in full. We will share your driver\'s name and contact details before the pickup.',
        terms: 'Terms & Conditions',
        termValidity: (d: string) => `This quotation is valid until ${d}, unless otherwise stated.`,
        termAvailability: 'This quotation is subject to vehicle availability. The booking is confirmed once the required payment and our final booking confirmation have been completed.',
        termCancellation: 'Cancellation is free up to 24 hours before the scheduled pickup time.',
        termDelays: 'Journey times can vary because of traffic, flights, border processing and other external factors; an exact arrival time cannot be guaranteed.',
        termDocuments: 'For international journeys, passengers are responsible for carrying valid passports, visas, entry permits and any other documents required for the route.',
        termChanges: 'Changes to the pickup time, route, passenger count, luggage or vehicle may affect availability and the quoted fare. Any change will be shared with you for approval before it is applied.',
        termCharges: 'Any additional charge will be disclosed and agreed before it is incurred. There are no hidden fees.',
        acceptance: 'Next Step',
        acceptanceText: 'To proceed, please confirm that the journey details, vehicle arrangement and quoted fare are correct. We will then verify availability, share the payment instructions and confirm your booking.',
        customerAcceptance: 'Customer Acceptance', bookingConfirmation: 'Booking Confirmation', pendingAcceptance: 'Pending', pendingConfirmation: 'Pending until formally confirmed', confirmedText: 'Confirmed',
        note: 'Additional Note',
        authorised: 'Authorised Representatives', director: 'Director', coFounder: 'Co-Founder',
        thanks: 'Thank you for considering Taxi Service KSA for your transportation requirements.',
        page: 'Page',
    },
    ar: {
        tagline: 'خدمات النقل الخاص والسائق', city: 'جدة، المملكة العربية السعودية',
        title: 'عرض سعر رسمي لخدمات النقل',
        reference: 'رقم عرض السعر', issueDate: 'تاريخ الإصدار', validUntil: 'صالح حتى', status: 'حالة العرض', currency: 'العملة', bookingRef: 'رقم الحجز',
        statusLabels: { pending: 'بانتظار موافقة العميل', availability: 'بانتظار تأكيد التوفر', confirmed: 'مؤكد' } as Record<QuoteStatus, string>,
        preparedFor: 'مُعد لـ', name: 'اسم العميل', contact: 'رقم التواصل', email: 'البريد الإلكتروني', company: 'الشركة', attn: 'عناية',
        journey: 'تفاصيل الخدمة والرحلة',
        serviceType: 'نوع الخدمة', pickupDate: 'تاريخ الانطلاق', pickupTime: 'وقت الانطلاق', pickup: 'مكان الانطلاق', destination: 'الوجهة',
        stops: 'محطات التوقف', vehicle: 'المركبة', nationality: 'جنسية الركاب', passengers: 'الركاب', luggage: 'الأمتعة', items: 'الأغراض', flight: 'رقم الرحلة الجوية',
        specialRequests: 'طلبات خاصة', returnJourney: 'رحلة العودة', returnDateTime: 'تاريخ ووقت العودة', itinerary: 'برنامج الرحلة',
        distance: 'المسافة التقريبية', duration: 'المدة التقديرية', durationNote: 'قد تختلف مدة الرحلة بسبب الازدحام وإجراءات الحدود.',
        hourly: 'عدد الساعات',
        serviceTypes: { oneWay: 'نقل خاص اتجاه واحد', round: 'نقل خاص ذهاب وعودة', hourly: 'سائق بالساعة', daily: 'سائق باليوم' },
        bags: 'حقائب', pax: 'ركاب',
        arrangementTitle: 'ترتيبات النقل',
        arrangements: {
            direct: 'نقل مباشر: نفس المركبة والسائق طوال الرحلة.',
            border_change: 'تغيير المركبة عند الحدود حسب الاتفاق.',
            multiple: 'عدة مركبات حسب الترتيب.',
        } as Record<Exclude<Arrangement, 'none'>, string>,
        summary: 'ملخص عرض السعر', baseFare: 'أجرة النقل الأساسية', total: 'السعر الإجمالي',
        basis: 'أساس التسعير', basisText: 'مركبة خاصة واحدة للرحلة الموضحة أعلاه.', basisHourly: 'مركبة خاصة واحدة مع سائق للساعات المحجوزة.',
        included: 'يشمل السعر',
        includedLabels: { vehicleDriver: 'المركبة وسائق محترف', fuel: 'الوقود', tolls: 'رسوم الطرق', parking: 'رسوم المواقف', waiting: 'وقت الانتظار القياسي المتفق عليه', borderFees: 'رسوم المركبة عند الحدود' } as Record<IncludedKey, string>,
        notIncluded: 'أي رسوم أخرى (محطات إضافية، انتظار إضافي، تغيير المسار) غير مشمولة وسيتم الاتفاق عليها معكم قبل تطبيقها.',
        vatCard: 'الدفع بالبطاقة تضاف إليه ضريبة القيمة المضافة 15%.',
        payment: 'شروط الدفع', advance: 'دفعة مقدمة لتأكيد الحجز', balance: 'المبلغ المتبقي يُدفع نقداً للسائق',
        paymentSecured: 'يتم تأكيد الحجز فقط بعد استلام الدفعة المقدمة وتأكيدنا النهائي للحجز.',
        paymentAgreed: 'طريقة الدفع', bankNote: 'سيتم تزويدكم بتفاصيل التحويل البنكي عند التأكيد.',
        payCashRow: 'المبلغ كاملاً يُدفع نقداً للسائق يوم الخدمة',
        payCashNote: 'لا يلزم دفع أي مبلغ مقدم. يرجى تجهيز المبلغ للسائق.',
        payPrepaidRow: 'المبلغ كاملاً يُدفع مقدماً بالتحويل البنكي',
        payPrepaidNote: 'يتم تأكيد الحجز بعد استلام المبلغ. سيتم تزويدكم بتفاصيل التحويل البنكي عند التأكيد.',
        payOnlineRow: 'المبلغ كاملاً يُدفع إلكترونياً بالبطاقة (رابط دفع آمن)',
        payOnlineNote: 'ادفع بأمان عبر الإنترنت باستخدام بطاقة مدى أو بطاقة ائتمانية. يتم تأكيد الحجز بعد استلام المبلغ.',
        payOnlineLink: 'رابط الدفع',
        payOnboardRow: 'المبلغ كاملاً يُدفع يوم الخدمة عند الركوب، بالبطاقة أو عبر رابط الدفع',
        payOnboardNote: 'لا يلزم دفع أي مبلغ مقدم. ادفع داخل السيارة عند الانطلاق بالبطاقة أو عبر رابط الدفع الآمن الذي نرسله لكم.',
        payPaidRow: 'مدفوع بالكامل',
        payPaidNote: 'تم استلام المبلغ بالكامل. شكراً لكم.',
        vatLine: 'ضريبة القيمة المضافة (15%)', baseFareExVat: 'أجرة النقل الأساسية (بدون الضريبة)',
        acceptancePaid: 'تم تأكيد حجزكم ودفع المبلغ بالكامل. سنرسل لكم اسم السائق ورقم التواصل قبل موعد الانطلاق.',
        terms: 'الشروط والأحكام',
        termValidity: (d: string) => `هذا العرض صالح حتى ${d} ما لم يُذكر خلاف ذلك.`,
        termAvailability: 'هذا العرض خاضع لتوفر المركبة. يتم تأكيد الحجز بعد إتمام الدفع المطلوب وتأكيدنا النهائي.',
        termCancellation: 'الإلغاء مجاني حتى 24 ساعة قبل موعد الانطلاق.',
        termDelays: 'قد تختلف مدة الرحلة بسبب الازدحام والرحلات الجوية وإجراءات الحدود وعوامل خارجية أخرى، ولا يمكن ضمان وقت وصول محدد.',
        termDocuments: 'في الرحلات الدولية، يتحمل الركاب مسؤولية حمل جوازات سفر وتأشيرات وتصاريح دخول سارية وأي وثائق أخرى مطلوبة.',
        termChanges: 'قد يؤثر أي تغيير في الوقت أو المسار أو عدد الركاب أو الأمتعة أو المركبة على التوفر والسعر، وسيتم عرض أي تغيير عليكم للموافقة قبل تطبيقه.',
        termCharges: 'سيتم الإفصاح عن أي رسوم إضافية والاتفاق عليها قبل تطبيقها. لا توجد رسوم خفية.',
        acceptance: 'الخطوة التالية',
        acceptanceText: 'للمتابعة، يرجى تأكيد صحة تفاصيل الرحلة وترتيبات المركبة والسعر. سنقوم بعدها بالتحقق من التوفر وإرسال تعليمات الدفع وتأكيد حجزكم.',
        customerAcceptance: 'موافقة العميل', bookingConfirmation: 'تأكيد الحجز', pendingAcceptance: 'قيد الانتظار', pendingConfirmation: 'قيد الانتظار حتى التأكيد الرسمي', confirmedText: 'مؤكد',
        note: 'ملاحظة إضافية',
        authorised: 'الممثلون المفوضون', director: 'المدير', coFounder: 'الشريك المؤسس',
        thanks: 'شكراً لاختياركم تاكسي سيرفس السعودية لاحتياجات النقل الخاصة بكم.',
        page: 'صفحة',
    },
};

const GCC_HINT = /dubai|abu dhabi|sharjah|ajman|uae|emirates|doha|qatar|bahrain|manama|kuwait|muscat|oman|jordan|amman|al batha|ghuwaifat|salwa|causeway/i;

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
    flight_number?: string | null;
    passenger_nationality?: string | null;
    total_price?: number;
    deposit_amount?: number | null;
    currency?: string;
    payment_method?: string;
    payment_status?: string | null;
    distance_km?: number;
    duration_estimate?: string;
    trip_type?: string | null;
    duration_hours?: number | null;
    has_return_trip?: boolean;
    return_date?: string | null;
    return_time?: string | null;
    return_pickup_location?: string | null;
    return_destination?: string | null;
    itinerary_legs?: { date: string; time: string; pickup: string; dropoff: string }[] | null;
    additional_stops?: { time?: string | null; location: string }[] | null;
    booking_type?: 'passenger' | 'delivery';
    item_type?: string | null;
    item_count?: number | null;
}

const longDate = (iso: string | null | undefined, lang: DocLang) => {
    if (!iso) return '';
    const d = new Date(`${iso}T12:00:00Z`);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(lang === 'ar' ? 'ar-SA-u-ca-gregory' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
};
const money = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function LetterheadPage() {
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
    const [sendingEmail, setSendingEmail] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isEmailingOnly, setIsEmailingOnly] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [returnPickupLocation, setReturnPickupLocation] = useState('');
    const [returnDropoffLocation, setReturnDropoffLocation] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');

    // Quotation settings: only what is ticked here appears on the document.
    const [quoteStatus, setQuoteStatus] = useState<QuoteStatus>('pending');
    const [arrangement, setArrangement] = useState<Arrangement>('none');
    const [included, setIncluded] = useState<Record<IncludedKey, boolean>>({ vehicleDriver: true, fuel: true, tolls: true, parking: false, waiting: false, borderFees: false });
    const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>('advance');
    const [advancePercent, setAdvancePercent] = useState(25);
    const [paymentLink, setPaymentLink] = useState('');
    const [showCardVat, setShowCardVat] = useState(true);
    // Price already includes 15% VAT (card / online payments): show base + VAT.
    const [includesVat, setIncludesVat] = useState(false);
    const [validityDays, setValidityDays] = useState(7);
    const [showCancellation, setShowCancellation] = useState(true);
    const [showDocuments, setShowDocuments] = useState(false);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const data = await loadDocBooking<Booking>(id, driverDoc);
                setBooking(data);
                if (data.has_return_trip) {
                    setIsRoundTrip(true);
                    const route = getReturnRoute(data);
                    setReturnPickupLocation(route.pickupLocation);
                    setReturnDropoffLocation(route.destination);
                    if (data.return_date) setReturnDate(data.return_date);
                    if (data.return_time) setReturnTime(data.return_time);
                }
                if (data.status === 'confirmed' || data.status === 'completed') setQuoteStatus('confirmed');
                // Cash-to-driver bookings with no advance recorded default to "full amount in cash".
                if (!Number(data.deposit_amount) && (data.payment_method || 'Cash to Driver') === 'Cash to Driver') setPaymentPlan('cash');
                if ((data.payment_status || '').toLowerCase() === 'paid') setPaymentPlan('paid');
                if (isCardOrOnline(data.payment_method)) {
                    setIncludesVat(true); setShowCardVat(false);
                    if ((data.payment_status || '').toLowerCase() !== 'paid') setPaymentPlan('online');
                }
                if (GCC_HINT.test(`${data.pickup_location} ${data.destination}`)) setShowDocuments(true);
            } catch (error) {
                console.error('Error fetching booking:', error);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchBooking();
    }, [id]);

    const issueIso = useMemo(() => ksaToday(), []);

    // Renders the quotation to an A4 PDF, adding pages (with page numbers)
    // instead of squeezing a long quotation onto one page.
    const generateQuotationPdf = async () => {
        if (!booking) return null;
        const element = document.getElementById('printable-area');
        if (!element) return null;

        const customerName = booking.customer_name ? booking.customer_name.replace(/\s+/g, '-') : 'Client';
        const refId = booking.id.slice(0, 8).toUpperCase();
        const filename = `Quotation-QT-${refId}-${customerName}.pdf`;

        const canvas = await html2canvas(element, { scale: 2, useCORS: true, scrollY: 0 });
        const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
        const pageW = 210, pageH = 297;
        const pxPerMm = canvas.width / pageW;
        const pagePx = Math.floor(pageH * pxPerMm);
        // A few stray pixels past the page edge should not create a blank second page.
        const pages = Math.max(1, Math.ceil((canvas.height - 12 * (canvas.width / 794)) / pagePx));
        for (let i = 0; i < pages; i++) {
            const slice = document.createElement('canvas');
            slice.width = canvas.width;
            slice.height = Math.min(pagePx, canvas.height - i * pagePx);
            const ctx = slice.getContext('2d')!;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, slice.width, slice.height);
            ctx.drawImage(canvas, 0, i * pagePx, canvas.width, slice.height, 0, 0, canvas.width, slice.height);
            if (i > 0) pdf.addPage();
            pdf.addImage(slice.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, pageW, slice.height / pxPerMm);
            if (pages > 1) {
                pdf.setFontSize(8);
                pdf.setTextColor(120);
                pdf.text(`Page ${i + 1} of ${pages}`, pageW / 2, pageH - 6, { align: 'center' });
            }
        }
        const pdfBase64 = pdf.output('datauristring').split(',')[1];
        return { pdf, pdfBase64, filename };
    };

    const emailQuotation = async (pdfBase64: string, filename: string) => {
        if (!booking) return;
        const emailRes = await adminFetch('/api/send-quote-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                booking: {
                    ...booking,
                    special_requests: quickNote.trim() ? `${booking.special_requests || ''}\nNote: ${quickNote}` : booking.special_requests,
                    has_return_trip: isRoundTrip,
                    return_date: isRoundTrip ? (returnDate || booking.return_date || null) : null,
                    return_time: isRoundTrip ? (returnTime || booking.return_time || null) : null,
                    return_pickup_location: isRoundTrip ? (returnPickupLocation || null) : null,
                    return_destination: isRoundTrip ? (returnDropoffLocation || null) : null,
                },
                currency: booking.currency || 'SAR',
                pdfBase64,
                pdfFilename: filename,
            }),
        });
        if (!emailRes.ok) throw new Error('Failed to send quote email');
    };

    const handlePrint = async () => {
        if (!booking) return;
        setSendingEmail(true);
        try {
            const result = await generateQuotationPdf();
            if (!result) return;
            await emailQuotation(result.pdfBase64, result.filename);
            result.pdf.save(result.filename);
            alert('✅ Quotation emailed with PDF attachment & downloaded successfully!');
        } catch (error) {
            console.error('Error in handlePrint:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setSendingEmail(false);
        }
    };

    const handleDownloadOnly = async () => {
        if (!booking) return;
        setIsDownloading(true);
        try {
            const result = await generateQuotationPdf();
            if (!result) return;
            result.pdf.save(result.filename);
        } catch (error) {
            console.error('Error downloading quotation PDF:', error);
            alert('An error occurred while generating the PDF. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    const handleSendEmailOnly = async () => {
        if (!booking) return;
        setIsEmailingOnly(true);
        try {
            const result = await generateQuotationPdf();
            if (!result) return;
            await emailQuotation(result.pdfBase64, result.filename);
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 4000);
        } catch (error) {
            console.error('Error emailing quotation:', error);
            alert('An error occurred while sending the email. Please try again.');
        } finally {
            setIsEmailingOnly(false);
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

    const t = TXT[lang];
    const curr = booking.currency || 'SAR';
    const total = Number(booking.total_price || 0);
    const hasPrice = booking.total_price !== undefined && booking.total_price !== null && total > 0;
    const recordedDeposit = Number(booking.deposit_amount || 0);
    const advance = recordedDeposit > 0 ? recordedDeposit : Math.round(total * advancePercent) / 100;
    const balance = Math.max(0, total - advance);
    const validUntilIso = shiftIsoDate(issueIso, { days: validityDays });
    const quoteRef = `QT-${booking.id.slice(0, 8).toUpperCase()}`;
    const isHourly = booking.trip_type === 'hourly';
    const isMultiDay = !!booking.trip_end_date && booking.trip_end_date !== booking.pickup_date;
    const serviceType = isHourly ? t.serviceTypes.hourly : isMultiDay || (booking.itinerary_legs?.length ?? 0) > 0 ? t.serviceTypes.daily : isRoundTrip ? t.serviceTypes.round : t.serviceTypes.oneWay;
    const delivery = booking.booking_type === 'delivery';
    const companyLines = billToCompany.split('\n').map(l => l.trim()).filter(Boolean);
    const stops = (booking.additional_stops || []).filter(s => s.location?.trim());
    const includedList = (Object.keys(included) as IncludedKey[]).filter(k => included[k]);
    const confirmed = quoteStatus === 'confirmed';

    const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
        <div className="grid grid-cols-[118px_1fr] gap-2 py-[3px] border-b border-slate-100">
            <dt className="text-slate-500">{label}</dt>
            <dd className="font-semibold text-slate-900">{value}</dd>
        </div>
    );
    const SectionTitle = ({ children }: { children: React.ReactNode }) => (
        <p role="heading" aria-level={2} className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-blue-800 border-b-2 border-blue-800/80 pb-0.5 mb-1.5">{children}</p>
    );
    const check = (key: IncludedKey) => (
        <label key={key} className="flex items-center gap-1.5 text-xs">
            <input type="checkbox" checked={included[key]} onChange={e => setIncluded(p => ({ ...p, [key]: e.target.checked }))} />
            {TXT.en.includedLabels[key]}
        </label>
    );

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 print:bg-white print:py-0 print:px-0 print:min-h-0">
            {/* Header Controls */}
            <div className="max-w-[210mm] mx-auto mb-4 flex flex-wrap gap-3 justify-between items-center print:hidden">
                <Button variant="outline" onClick={() => router.back()} className="bg-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <div className="flex flex-wrap gap-2 items-center">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                        className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 h-10 bg-white hover:bg-gray-50 transition-all text-xs font-bold"
                    >
                        <Languages className="w-3.5 h-3.5" /> {lang === 'en' ? 'English' : 'عربي'}
                    </button>

                    {/* Round Trip Toggle */}
                    <div className="flex flex-col gap-1">
                        <div
                            onClick={() => {
                                const next = !isRoundTrip;
                                setIsRoundTrip(next);
                                if (next) {
                                    const route = getReturnRoute(booking);
                                    setReturnPickupLocation(route.pickupLocation);
                                    setReturnDropoffLocation(route.destination);
                                }
                            }}
                            className={`flex items-center gap-2 rounded-lg border p-1 shadow-sm px-3 h-10 cursor-pointer transition-all select-none ${isRoundTrip ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white text-gray-500 border-gray-200'}`}
                        >
                            <Repeat className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">{isRoundTrip ? 'Round Trip ON' : 'Round Trip'}</span>
                        </div>
                        {isRoundTrip && (
                            <div className="flex flex-col gap-1 bg-blue-50/60 border border-blue-100 rounded-lg p-1.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-bold text-blue-600 uppercase">Return Route</span>
                                    <button type="button" onClick={() => { setReturnPickupLocation(booking.destination); setReturnDropoffLocation(booking.pickup_location); }} className="text-[9px] font-semibold text-primary hover:underline">Reverse outbound</button>
                                </div>
                                <input value={returnPickupLocation} onChange={(e) => setReturnPickupLocation(e.target.value)} className="h-7 w-44 text-[11px] font-bold border rounded px-2 outline-none bg-white" placeholder="Return pickup location..." />
                                <input value={returnDropoffLocation} onChange={(e) => setReturnDropoffLocation(e.target.value)} className="h-7 w-44 text-[11px] font-bold border rounded px-2 outline-none bg-white" placeholder="Return drop-off location..." />
                                <div className="flex gap-1">
                                    <input type="date" value={returnDate} min={booking.pickup_date} onChange={(e) => setReturnDate(e.target.value)} className="h-7 w-[100px] text-[10px] font-bold border rounded px-1.5 outline-none bg-white" />
                                    <input type="time" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className="h-7 w-20 text-[10px] font-bold border rounded px-1.5 outline-none bg-white" />
                                </div>
                            </div>
                        )}
                    </div>

                    <Button onClick={handleDownloadOnly} disabled={isDownloading} variant="outline" className="bg-white font-bold">
                        {isDownloading ? <><div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900 mr-2"></div> Generating...</> : <><Printer className="w-4 h-4 mr-2" /> Download PDF</>}
                    </Button>
                    {!driverDoc && <><Button onClick={handleSendEmailOnly} disabled={isEmailingOnly} className={`font-bold ${emailSent ? 'bg-green-500 text-white hover:bg-green-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                        {isEmailingOnly ? <><div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div> Sending...</> : <><Mail className="w-4 h-4 mr-2" /> {emailSent ? '✓ Email Sent!' : 'Send Email'}</>}
                    </Button>
                    <Button onClick={handlePrint} disabled={sendingEmail} className="bg-primary text-black hover:bg-black hover:text-white font-bold">
                        {sendingEmail ? <><div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-black mr-2"></div> Sending & Generating...</> : <><Printer className="w-4 h-4 mr-2" /> Send & Download</>}
                    </Button></>}
                </div>
            </div>

            {/* Quotation settings: screen only */}
            <div className="max-w-[210mm] mx-auto mb-3 print:hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gray-700 mb-3"><Settings2 className="w-4 h-4" /> Quotation settings (only what you choose appears on the quotation)</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-600">Status
                            <select value={quoteStatus} onChange={e => setQuoteStatus(e.target.value as QuoteStatus)} className="mt-1 block w-full h-8 rounded border border-gray-300 px-2">
                                <option value="pending">Pending Customer Acceptance</option>
                                <option value="availability">Availability Pending</option>
                                <option value="confirmed">Confirmed</option>
                            </select>
                        </label>
                        <label className="block font-semibold text-gray-600">Transfer arrangement
                            <select value={arrangement} onChange={e => setArrangement(e.target.value as Arrangement)} className="mt-1 block w-full h-8 rounded border border-gray-300 px-2">
                                <option value="none">Don&apos;t state</option>
                                <option value="direct">Direct, same vehicle throughout</option>
                                <option value="border_change">Vehicle change at the border</option>
                                <option value="multiple">Multiple vehicles</option>
                            </select>
                        </label>
                        <label className="block font-semibold text-gray-600">Valid for (days)
                            <input type="number" min={1} max={60} value={validityDays} onChange={e => setValidityDays(Math.max(1, Number(e.target.value) || 7))} className="mt-1 block w-20 h-8 rounded border border-gray-300 px-2" />
                        </label>
                    </div>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-gray-600">Included in the fare</p>
                        {(Object.keys(included) as IncludedKey[]).map(check)}
                    </div>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-gray-600">Payment &amp; terms</p>
                        <select value={paymentPlan} onChange={e => {
                            const plan = e.target.value as PaymentPlan;
                            setPaymentPlan(plan);
                            // Card payments carry 15% VAT: show the price as base + VAT.
                            if (plan === 'online' || plan === 'onboard') { setIncludesVat(true); setShowCardVat(false); }
                        }} className="block w-full h-8 rounded border border-gray-300 px-2">
                            <option value="cash">Full amount cash to driver (no advance)</option>
                            <option value="advance">Advance + balance cash to driver</option>
                            <option value="prepaid">Full amount in advance (bank transfer)</option>
                            <option value="online">Pay online by card (payment link)</option>
                            <option value="onboard">Pay in the car at pickup (card / payment link)</option>
                            <option value="paid">Paid in full (online / already received)</option>
                            <option value="none">Don&apos;t mention payment</option>
                        </select>
                        {(paymentPlan === 'online' || paymentPlan === 'onboard') && (
                            <input type="url" value={paymentLink} onChange={e => setPaymentLink(e.target.value)} placeholder="Paste payment link (optional)" className="block w-full h-8 rounded border border-gray-300 px-2" />
                        )}
                        {paymentPlan === 'advance' && (
                            <p className="flex items-center gap-1.5">
                                {recordedDeposit > 0 ? `Advance recorded: ${curr} ${money(recordedDeposit)}` : <>Advance <input type="number" min={0} max={100} value={advancePercent} onChange={e => setAdvancePercent(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} className="w-12 h-6 rounded border border-gray-300 px-1" />%</>}
                            </p>
                        )}
                        <label className="flex items-center gap-1.5"><input type="checkbox" checked={includesVat} onChange={e => setIncludesVat(e.target.checked)} /> Price includes 15% VAT (show base + VAT)</label>
                        <label className="flex items-center gap-1.5"><input type="checkbox" checked={showCardVat} onChange={e => setShowCardVat(e.target.checked)} /> Card payments +15% VAT note</label>
                        <label className="flex items-center gap-1.5"><input type="checkbox" checked={showCancellation} onChange={e => setShowCancellation(e.target.checked)} /> Free cancellation up to 24 h</label>
                        <label className="flex items-center gap-1.5"><input type="checkbox" checked={showDocuments} onChange={e => setShowDocuments(e.target.checked)} /> Travel documents note (international)</label>
                    </div>
                </div>
            </div>

            <BillToCompanyInput value={billToCompany} onChange={setBillToCompany} />

            {/* Additional note: screen only input */}
            <div className="max-w-[210mm] mx-auto mb-4 print:hidden">
                <textarea
                    value={quickNote}
                    onChange={e => setQuickNote(e.target.value)}
                    placeholder="Optional note to the customer (appears on the quotation)"
                    rows={2}
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary resize-none bg-white shadow-sm"
                />
            </div>

            {/* ============ QUOTATION DOCUMENT ============ */}
            <div
                id="printable-area"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                className="max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-xl border border-gray-100 print:shadow-none print:border-none print:m-0"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
                <div className="px-10 pt-6 pb-3 text-[11.5px] leading-snug text-slate-800">
                    {/* Company header */}
                    <header className="flex items-start justify-between gap-6 pb-3 border-b-2 border-slate-900">
                        <div>
                            <p className="text-[22px] font-black tracking-wide text-slate-900">TAXI SERVICE KSA</p>
                            <p className="text-[12px] font-semibold text-blue-800">{t.tagline}</p>
                            <p className="text-[11px] text-slate-500 mt-1">{t.city}</p>
                        </div>
                        <div className={`text-[11px] text-slate-600 space-y-0.5 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                            <p dir="ltr">+966 57 580 6733</p>
                            <p>info@taxiserviceksa.com</p>
                            <p>www.taxiserviceksa.com</p>
                        </div>
                    </header>

                    {/* Title + reference block */}
                    <div className="mt-3 mb-3">
                        <p role="heading" aria-level={1} className="text-[17px] font-bold uppercase tracking-[0.08em] text-slate-900 text-center">{t.title}</p>
                        <dl className="mt-2 grid grid-cols-3 gap-x-6 gap-y-1 rounded-lg bg-slate-50 border border-slate-200 px-4 py-2.5 text-[11px]">
                            <div><dt className="text-slate-500">{t.reference}</dt><dd className="font-bold text-slate-900 font-mono">{quoteRef}</dd></div>
                            <div><dt className="text-slate-500">{t.issueDate}</dt><dd className="font-bold text-slate-900">{longDate(issueIso, lang)}</dd></div>
                            <div><dt className="text-slate-500">{t.validUntil}</dt><dd className="font-bold text-slate-900">{longDate(validUntilIso, lang)}</dd></div>
                            <div><dt className="text-slate-500">{t.status}</dt><dd className={`font-bold ${confirmed ? 'text-emerald-700' : 'text-amber-700'}`}>{t.statusLabels[quoteStatus]}</dd></div>
                            <div><dt className="text-slate-500">{t.currency}</dt><dd className="font-bold text-slate-900">{curr}</dd></div>
                            <div><dt className="text-slate-500">{t.bookingRef}</dt><dd className="font-bold text-slate-900 font-mono">#{booking.id.slice(0, 8).toUpperCase()}</dd></div>
                        </dl>
                    </div>

                    {/* Prepared for */}
                    <section className="mb-3.5">
                        <SectionTitle>{t.preparedFor}</SectionTitle>
                        <dl className="grid grid-cols-2 gap-x-6">
                            {companyLines.length > 0 && <Row label={t.company} value={<>{companyLines[0]}{companyLines.slice(1).map((l, i) => <span key={i} className="block font-normal text-slate-600">{l}</span>)}</>} />}
                            <Row label={companyLines.length ? t.attn : t.name} value={booking.customer_name} />
                            {booking.customer_phone && <Row label={t.contact} value={<span dir="ltr">{booking.customer_phone}</span>} />}
                            {booking.customer_email && <Row label={t.email} value={booking.customer_email} />}
                        </dl>
                    </section>

                    {/* Service & journey: short fields in pairs, long ones full width */}
                    <section className="mb-3.5">
                        <SectionTitle>{t.journey}</SectionTitle>
                        <dl className="grid grid-cols-2 gap-x-6">
                            <Row label={t.serviceType} value={serviceType} />
                            <Row label={t.vehicle} value={booking.vehicle_type} />
                            <Row label={t.pickupDate} value={isMultiDay ? `${longDate(booking.pickup_date, lang)} – ${longDate(booking.trip_end_date, lang)}` : longDate(booking.pickup_date, lang)} />
                            <Row label={t.pickupTime} value={formatTime12h(booking.pickup_time)} />
                            {delivery
                                ? <Row label={t.items} value={`${DELIVERY_ITEM_TYPES.find(it => it.value === booking.item_type)?.label || booking.item_type || 'Item'} × ${booking.item_count || 1}`} />
                                : <>
                                    <Row label={t.passengers} value={booking.passengers} />
                                    <Row label={t.luggage} value={`${booking.luggage} ${t.bags}`} />
                                </>}
                            {booking.flight_number && <Row label={t.flight} value={booking.flight_number} />}
                            {booking.passenger_nationality && <Row label={t.nationality} value={booking.passenger_nationality} />}
                            {isHourly && <Row label={t.hourly} value={`${booking.duration_hours || '—'}`} />}
                            {booking.distance_km ? <Row label={t.distance} value={`${booking.distance_km} km`} /> : null}
                            {isRoundTrip && returnDate && <Row label={t.returnDateTime} value={`${longDate(returnDate, lang)}${returnTime ? `, ${formatTime12h(returnTime)}` : ''}`} />}
                        </dl>
                        <dl>
                            <Row label={t.pickup} value={booking.pickup_location} />
                            {!isHourly && <Row label={t.destination} value={booking.destination} />}
                            {stops.length > 0 && <Row label={t.stops} value={stops.map((s, i) => <span key={i} className="block">{s.time ? `${formatTime12h(s.time)} · ` : ''}{s.location}</span>)} />}
                            {(booking.itinerary_legs?.length ?? 0) > 0 && (
                                <Row label={t.itinerary} value={booking.itinerary_legs!.map((leg, i) => <span key={i} className="block">{longDate(leg.date, lang)}{leg.time ? `, ${formatTime12h(leg.time)}` : ''}: {leg.pickup} → {leg.dropoff}</span>)} />
                            )}
                            {isRoundTrip && <Row label={t.returnJourney} value={`${returnPickupLocation || booking.destination} → ${returnDropoffLocation || booking.pickup_location}`} />}
                            {booking.duration_estimate ? <Row label={t.duration} value={<>{booking.duration_estimate}<span className="block text-[10.5px] font-normal text-slate-500">{t.durationNote}</span></>} /> : null}
                            {cleanCustomerNote(booking.special_requests) && <Row label={t.specialRequests} value={<span className="font-normal">{cleanCustomerNote(booking.special_requests)}</span>} />}
                        </dl>
                    </section>

                    {arrangement !== 'none' && (
                        <section className="mb-3.5">
                            <SectionTitle>{t.arrangementTitle}</SectionTitle>
                            <p>{t.arrangements[arrangement]}</p>
                        </section>
                    )}

                    {/* Quotation summary */}
                    {hasPrice && (
                        <section className="mb-3.5">
                            <SectionTitle>{t.summary}</SectionTitle>
                            <div className="rounded-lg border border-slate-300 overflow-hidden">
                                {includesVat ? (() => {
                                    const v = splitVat(total);
                                    return (
                                        <>
                                            <div className="flex justify-between px-4 py-1.5 border-b border-slate-200">
                                                <span>{t.baseFareExVat}</span><span className="font-semibold">{curr} {money(v.base)}</span>
                                            </div>
                                            <div className="flex justify-between px-4 py-1.5 border-b border-slate-200">
                                                <span>{t.vatLine}</span><span className="font-semibold">{curr} {money(v.vat)}</span>
                                            </div>
                                        </>
                                    );
                                })() : (
                                    <div className="flex justify-between px-4 py-1.5 border-b border-slate-200">
                                        <span>{t.baseFare}</span><span className="font-semibold">{curr} {money(total)}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 text-white">
                                    <span className="font-bold uppercase tracking-wide text-[11.5px]">{t.total}</span>
                                    <span className="text-[18px] font-black">{curr} {money(total)}</span>
                                </div>
                                {paymentPlan === 'cash' && (
                                    <div className="flex justify-between gap-3 px-4 py-1.5 border-b border-slate-200 text-[11px] bg-emerald-50">
                                        <span className="font-semibold text-emerald-800">{t.payCashRow}</span><b className="text-emerald-900 whitespace-nowrap">{curr} {money(total)}</b>
                                    </div>
                                )}
                                {paymentPlan === 'paid' && (
                                    <div className="flex justify-between gap-3 px-4 py-1.5 border-b border-slate-200 text-[11px] bg-emerald-50">
                                        <span className="font-semibold text-emerald-800">✓ {t.payPaidRow}</span><b className="text-emerald-900 whitespace-nowrap">{curr} {money(total)}</b>
                                    </div>
                                )}
                                {paymentPlan === 'online' && (
                                    <div className="flex justify-between gap-3 px-4 py-1.5 border-b border-slate-200 text-[11px] bg-sky-50">
                                        <span className="font-semibold text-sky-900">{t.payOnlineRow}</span><b className="text-sky-950 whitespace-nowrap">{curr} {money(total)}</b>
                                    </div>
                                )}
                                {paymentPlan === 'onboard' && (
                                    <div className="flex justify-between gap-3 px-4 py-1.5 border-b border-slate-200 text-[11px] bg-sky-50">
                                        <span className="font-semibold text-sky-900">{t.payOnboardRow}</span><b className="text-sky-950 whitespace-nowrap">{curr} {money(total)}</b>
                                    </div>
                                )}
                                {paymentPlan === 'prepaid' && (
                                    <div className="flex justify-between gap-3 px-4 py-1.5 border-b border-slate-200 text-[11px]">
                                        <span className="font-semibold text-slate-800">{t.payPrepaidRow}</span><b className="whitespace-nowrap">{curr} {money(total)}</b>
                                    </div>
                                )}
                                {paymentPlan === 'advance' && advance > 0 && advance < total && (
                                    <div className="grid grid-cols-2 border-b border-slate-200 text-[11px]">
                                        <div className="px-4 py-1.5 border-r border-slate-200"><span className="text-slate-500">{t.advance}{recordedDeposit > 0 ? '' : ` (${advancePercent}%)`}: </span><b>{curr} {money(advance)}</b></div>
                                        <div className="px-4 py-1.5"><span className="text-slate-500">{t.balance}: </span><b>{curr} {money(balance)}</b></div>
                                    </div>
                                )}
                                <div className="px-4 py-2 text-[11px] space-y-1 bg-slate-50">
                                    <p><span className="text-slate-500">{t.basis}: </span>{isHourly ? t.basisHourly : t.basisText}</p>
                                    {includedList.length > 0 && <p><span className="text-slate-500">{t.included}: </span>{includedList.map(k => t.includedLabels[k]).join(', ')}.</p>}
                                    <p className="text-slate-600">{t.notIncluded}</p>
                                    {showCardVat && !includesVat && paymentPlan !== 'paid' && <p className="font-semibold text-slate-800">{t.vatCard}</p>}
                                    {paymentPlan === 'advance' && advance > 0 && advance < total && <p className="text-slate-600">{t.paymentSecured} {t.bankNote}</p>}
                                    {paymentPlan === 'cash' && <p className="text-slate-600">{t.payCashNote}</p>}
                                    {paymentPlan === 'prepaid' && <p className="text-slate-600">{t.payPrepaidNote}</p>}
                                    {paymentPlan === 'online' && <p className="text-slate-600">{t.payOnlineNote}</p>}
                                    {paymentPlan === 'onboard' && <p className="text-slate-600">{t.payOnboardNote}</p>}
                                    {(paymentPlan === 'online' || paymentPlan === 'onboard') && paymentLink.trim() && (
                                        <p><span className="text-slate-500">{t.payOnlineLink}: </span><a href={paymentLink.trim()} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-800 underline [overflow-wrap:anywhere]">{paymentLink.trim()}</a></p>
                                    )}
                                    {paymentPlan === 'paid' && <p className="font-semibold text-emerald-800">{t.payPaidNote}</p>}
                                </div>
                            </div>
                        </section>
                    )}

                    {quickNote.trim() && (
                        <section className="mb-3.5">
                            <SectionTitle>{t.note}</SectionTitle>
                            <p className="whitespace-pre-wrap">{quickNote.trim()}</p>
                        </section>
                    )}

                    {/* Terms */}
                    <section className="mb-3.5">
                        <SectionTitle>{t.terms}</SectionTitle>
                        <ol className={`list-decimal space-y-0 text-[10px] text-slate-700 ${lang === 'ar' ? 'pr-5' : 'pl-5'}`}>
                            <li>{t.termValidity(longDate(validUntilIso, lang))}</li>
                            <li>{t.termAvailability}</li>
                            {showCancellation && <li>{t.termCancellation}</li>}
                            <li>{t.termDelays}</li>
                            {showDocuments && <li>{t.termDocuments}</li>}
                            <li>{t.termChanges}</li>
                            <li>{t.termCharges}</li>
                        </ol>
                    </section>

                    {/* Acceptance + signature */}
                    <section className="mb-3 grid grid-cols-[1fr_300px] gap-6 items-end">
                        <div>
                            <SectionTitle>{t.acceptance}</SectionTitle>
                            <p>{paymentPlan === 'paid' && confirmed ? t.acceptancePaid : t.acceptanceText}</p>
                            <dl className="mt-1 grid grid-cols-2 gap-4 text-[11px]">
                                <div><dt className="text-slate-500">{t.customerAcceptance}</dt><dd className="font-bold">{confirmed ? t.confirmedText : t.pendingAcceptance}</dd></div>
                                <div><dt className="text-slate-500">{t.bookingConfirmation}</dt><dd className="font-bold">{confirmed ? t.confirmedText : t.pendingConfirmation}</dd></div>
                            </dl>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-0.5 text-center">{t.authorised}</p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                {[
                                    { img: '/ismail-signature.png', name: 'Ismail', role: t.director },
                                    { img: '/zumer-signature.png', name: 'Zumer', role: t.coFounder },
                                ].map(sig => (
                                    <div key={sig.name}>
                                        <img src={sig.img} alt={`Signature of ${sig.name}`} className="h-8 w-auto object-contain mx-auto" />
                                        <p className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-900">{sig.name}</p>
                                        <p className="text-[10px] text-slate-600">{sig.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="pt-2 border-t border-slate-300 text-center text-[10px] text-slate-500">
                        <p>Taxi Service KSA | {t.city} | <span dir="ltr">+966 57 580 6733</span> | info@taxiserviceksa.com | www.taxiserviceksa.com</p>
                        <p className="italic">{t.thanks}</p>
                    </footer>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    @page { margin: 0; size: A4; }
                    body { background: white !important; margin: 0 !important; }
                    main { margin: 0 !important; padding: 0 !important; }
                    .md\\:ml-64, header.print-hide, nav, aside, .print\\:hidden { display: none !important; }
                    #printable-area { width: 210mm !important; box-shadow: none !important; border: none !important; margin: 0 !important; }
                }
            `}</style>
        </div>
    );
}
