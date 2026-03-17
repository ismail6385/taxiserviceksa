import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Plane, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Navigation, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';
import { blogService } from '@/lib/blogService';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata: Metadata = {
    title: 'ایئرپورٹ ٹرانسفر سروس سعودی عرب | پریمیم چوفر - 8 بڑے ہوائی اڈے',
    description: 'سعودی عرب بھر میں پروفیشنل وی آئی پی ایئرپورٹ ٹرانسفر سروس۔ 8 بڑے ایئرپورٹس کی کوریج۔ ایگزیکٹو استقبالیہ (Meet-and-greet)، فلائٹ ٹریکنگ، اور 24/7 سروس۔',
    keywords: ['وی آئی پی ایئرپورٹ ٹرانسفر سعودی عرب', 'پریمیم چوفر سروس', 'جدہ ایئرپورٹ ٹیکسی', 'ریاض ایئرپورٹ ٹرانسفر', 'مدینہ ایئرپورٹ ٹیکسی', 'ابہا ایئرپورٹ ٹیکسی'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/airport-transfers/',
    },
    openGraph: {
        title: 'ایئرپورٹ ٹرانسفر سروس سعودی عرب | پریمیم چوفر - 8 ہوائی اڈے',
        description: 'سعودی عرب بھر میں پروفیشنل وی آئی پی ایئرپورٹ ٹرانسفر سروس۔ 8 بڑے ایئرپورٹس کی کوریج۔ ایگزیکٹو استقبالیہ، فلائٹ ٹریکنگ، 24/7 سروس۔',
        url: 'https://taxiserviceksa.com/ur/services/airport-transfers/',
        type: 'website',
    },
};

export default async function AirportTransfersPageUrdu() {
    // Fetch related blogs
    const jeddahBlogs = await blogService.getBlogsByCategory('Jeddah Guide');
    const madinahBlogs = await blogService.getBlogsByCategory('Madinah Guide');
    const displayBlogs = [...jeddahBlogs.slice(0, 2), ...madinahBlogs.slice(0, 1)];

    const airports = [
        {
            name: 'کنگ عبدالعزیز انٹرنیشنل ایئرپورٹ (JED)',
            city: 'جدہ',
            code: 'JED',
            description: (
                <>
                    سعودی عرب کا سب سے بڑا ہوائی اڈہ اور عمرہ کے لیے اہم ترین راستہ۔ راستوں کی رہنمائی کے لیے ہمارا{' '}
                    <Link href="/ur/guides/jeddah-airport-guide/" className="text-sky-700 hover:underline">
                        جدہ ایئرپورٹ ٹرمینل گائیڈ
                    </Link>{' '}
                    پڑھیں۔
                </>
            ),
            routes: ['جدہ → مکہ (80km)', 'جدہ → طائف (90km)', 'جدہ شہر کے ہوٹلز'],
            price: 'مناسب ریٹس',
            link: '/ur/locations/jeddah/',
            isHub: true
        },
        {
            name: 'کنگ خالد انٹرنیشنل ایئرپورٹ (RUH)',
            city: 'ریاض',
            code: 'RUH',
            description: 'دارالحکومت کا ایئرپورٹ۔ سعودی عرب کے تمام بڑے شہروں کے ساتھ ساتھ بزنس ٹریول کا مرکز۔',
            routes: ['ریاض ایئرپورٹ → ہوٹلز', 'ریاض ایئرپورٹ → بزنس ڈسٹرکٹس', 'ریاض ایئرپورٹ → سفارتی علاقہ'],
            price: 'فکسڈ ریٹس',
            link: '/ur/locations/riyadh/',
            isHub: true
        },
        {
            name: 'پرنس محمد بن عبدالعزیز ایئرپورٹ (MED)',
            city: 'مدینہ منورہ',
            code: 'MED',
            description: 'مدینہ منورہ آنے والے زائرین کے لیے مخصوص ایئرپورٹ۔ مسجد نبوی تک براہ راست رسائی۔',
            routes: ['مدینہ ایئرپورٹ → ہوٹلز', 'مدینہ ایئرپورٹ → مسجد نبوی', 'مدینہ ایئرپورٹ → مسجد قباء'],
            price: 'مقامی ریٹس',
            link: '/ur/locations/madinah/',
        },
        {
            name: 'العلا انٹرنیشنل ایئرپورٹ (ULH)',
            city: 'العلا',
            code: 'ULH',
            description: 'یونیسکو (UNESCO) کے عالمی ثقافتی ورثے کے مقامات اور ہجرا (Hegra) کے لیے مخصوص سیاحتی ایئرپورٹ۔',
            routes: ['العلا ایئرپورٹ → ہوٹلز', 'العلا ایئرپورٹ → مدائن صالح', 'العلا → خیبر (150km)'],
            price: 'مسابقتی ریٹس',
            link: '/ur/locations/alula/',
        },
        {
            name: 'پرنس عبدالمحسن بن عبدالعزیز ایئرپورٹ (YNB)',
            city: 'ینبع',
            code: 'YNB',
            description: 'صنعتی شہر کا ہوائی اڈہ۔ پورٹ ورکرز اور بحیرہ احمر کے ساحلی علاقوں تک رسائی فراہم کرتا ہے۔',
            routes: ['ینبع ایئرپورٹ → ہوٹلز', 'ینبع ایئرپورٹ → انڈسٹریل سٹی', 'ینبع → مدینہ (220km)'],
            price: 'مقامی ریٹس',
            link: '/ur/locations/yanbu/',
        },
        {
            name: 'طائف ریجنل ایئرپورٹ (TIF)',
            city: 'طائف',
            code: 'TIF',
            description: 'پہاڑی ریزورٹ کا ایئرپورٹ۔ ٹھنڈے موسم کے باعث گرمیوں کا بہترین سیاحتی مقام۔',
            routes: ['طائف ایئرپورٹ → ہوٹلز', 'طائف ایئرپورٹ → ماؤنٹین ریزورٹس', 'طائف → جدہ (90km)'],
            price: 'سمر اسپیشل ریٹس',
            link: '/ur/locations/taif/',
        },
    ];

    const features = [
        'ٹرمینل 1 ایکویریم اور نارتھ ٹرمینل پر استقبالیہ سروس',
        'پرواز میں تاخیر پر خودکار ٹائم ایڈجسٹمنٹ کے ساتھ فلائٹ ٹریکنگ',
        'سعودی وزارت ٹرانسپورٹ سے منظور شدہ اور لائسنس یافتہ ڈرائیورز',
        'آسانی سے پہچان کے لیے مسافر کے نام کا بورڈ (Name Sign)',
        'سامان اٹھانے میں ڈرائیور کی مکمل مدد',
        'ہماری تمام گاڑیاں ڈرائیور کے ساتھ ہوتی ہیں (سیلف ڈرائیو منسوخ کر دی گئی ہے)',
        'فکسڈ ریٹس بغیر کسی پوشیدہ چارجز یا سرج پرائسنگ کے',
        'دن اور رات کی تمام پروازوں کے لیے 24/7 سروس دستیاب ہے',
        'مفت انتظار کا وقت: ڈومیسٹک کے لیے 60 منٹ، انٹرنیشنل کے لیے 90 منٹ',
        'درخواست پر بچوں کے لیے مخصوص سیٹیں (Child seats) بھی دستیاب ہیں',
    ];

    const vehicles = [
        {
            name: 'Toyota Camry',
            capacity: '4 passengers',
            luggage: '2 large bags',
            ideal: 'Business travelers, couples',
            airports: 'All airports'
        },
        {
            name: 'GMC Yukon XL / Denali',
            capacity: '7 passengers',
            luggage: '5 large bags',
            ideal: 'Families, group travelers',
            airports: 'All airports'
        },
        {
            name: 'Hyundai Staria VIP',
            capacity: '7 passengers',
            luggage: '4 large bags',
            ideal: 'VIP Family groups',
            airports: 'All airports'
        },
        {
            name: 'Toyota Hiace',
            capacity: '11 passengers',
            luggage: '16 large bags',
            ideal: 'Large groups, tour groups',
            airports: 'Major airports (JED, RUH, MED)'
        },
        {
            name: 'Mercedes-Benz Sprinter',
            capacity: '14 passengers',
            luggage: '4 large bags',
            ideal: 'VIP Executive groups',
            airports: 'Jeddah International (JED)'
        }
    ];

    const faqs = [
        {
            question: "سعودی ہوائی اڈوں پر وی آئی پی استقبالیہ (Meet-and-greet) سروس کیسے کام کرتی ہے؟",
            answer: "ڈرائیور ارائیولز ہال میں آپ کے نام کے بورڈ (Name sign) کے ساتھ انتظار کرتا ہے۔ جدہ (JED) میں، ہم **ایکویریم (ٹرمینل 1)** یا **گیٹ 4 (نارتھ ٹرمینل)** پر ملتے ہیں۔ مدینہ (MED) میں، ڈرائیورز مین انٹرنیشنل ایگزٹ بیریئر پر انتظار کرتے ہیں۔ میٹنگ پوائنٹ کی تفصیلی تصاویر ای میل کے ذریعے بھیجی جاتی ہیں۔"
        },
        {
            question: "کیا جدہ ایئرپورٹ سے پرائیویٹ ٹرانسفر کے بجائے اوبر (Uber) یا کریم (Careem) کا استعمال بہتر ہے؟",
            answer: "اگرچہ اوبر، کریم، اور کایان جیسی ایپس دستیاب ہیں، لیکن انہیں اکثر سرج پرائسنگ کی وجہ سے دوگنا کرایہ اور پک اپ زونز کی پابندیوں کا سامنا ہوتا ہے۔ ہماری **پری بک شدہ وی آئی پی ٹرانسفر** ایک فکسڈ قیمت پر، آپ کو ارائیولز ہال میں انتظار کرنے والے پروفیشنل ڈرائیور (استقبالیہ سروس) اور بڑی فیملیز/سامان کے لیے کشادہ گاڑیوں (GMC, Hiace) کی ضمانت دیتی ہے، جو اکثر عام ایپس پر دستیاب نہیں ہوتیں۔"
        },
        {
            question: "اگر میری پرواز میں تاخیر ہو جائے یا وقت سے پہلے آ جائے تو کیا ہوگا؟",
            answer: "تمام ایئرپورٹ پک اپس کے لیے فلائٹ ٹریکنگ شامل ہے۔ ڈرائیور ایئر لائن سسٹمز کے ذریعے پرواز کے ریئل ٹائم اسٹیٹس کو مانیٹر کرتا ہے۔ 3 گھنٹے تک کی تاخیر پر کوئی اضافی چارجز نہیں ہوتے۔ وقت سے پہلے آمد کی صورت میں ڈرائیور خودکار طور پر پک اپ کا وقت ایڈجسٹ کر لیتا ہے۔ اگر فلائٹ 3 گھنٹے سے زیادہ لیٹ ہو تو، ڈرائیور کے شیڈول کو ری-شیڈول کروانے کے لیے ہمیں ای میل کے ذریعے مطلع کریں۔"
        },
        {
            question: "کیا آپ رات گئے یا علی الصبح پروازوں کے لیے ایئرپورٹ ٹرانسفر سروس فراہم کرتے ہیں؟",
            answer: "جی ہاں۔ ہماری وی آئی پی ایئرپورٹ ٹرانسفر سروس پروازوں کے تمام اوقات کے لیے 24/7 کام کرتی ہے۔ رات گئے پک اپس (رات 10 بجے سے صبح 6 بجے تک) کے لیے بھی دن کے وقت کے برابر ہی مسابقتی فکسڈ ریٹس لاگو ہوتے ہیں۔ آدھی رات سے صبح 5 بجے تک پہنچنے والی پروازوں کے لیے ایڈوانس بکنگ (24-48 گھنٹے پہلے) سختی سے تجویز کی جاتی ہے۔"
        },
        {
            question: "کیا میں بچے کی سیٹ (Child seat) کے ساتھ ایئرپورٹ ٹرانسفر بک کر سکتا ہوں؟",
            answer: "جی ہاں۔ تمام ایئرپورٹ ٹرانسفرز کے لیے درخواست پر چائلڈ سیٹیں دستیاب ہیں۔ بکنگ کے دوران بچے کی عمر اور وزن بتائیں۔ نوزائیدہ سیٹیں (0-1 سال)، ٹوڈلر سیٹیں (1-4 سال)، اور بوسٹر سیٹیں (4-8 سال) دستیاب ہیں۔ چائلڈ سیٹ فراہم کرنے کے لیے کوئی اضافی چارج نہیں لیا جاتا۔"
        },
        {
            question: "ہوائی اڈے پر پہنچنے کے بعد مفت انتظار کا وقت کتنا ہے؟",
            answer: "ملکی (Domestic) پروازوں کے لیے مفت انتظار کا وقت 60 منٹ ہے اور بین الاقوامی (International) پروازوں کے لیے 90 منٹ ہے۔ انتظار کا وقت پرواز کے اترنے کے اصل وقت (نہ کہ شیڈول ٹائم) سے شروع ہوتا ہے۔ اس وقت میں آپ سامان کا حصول، کسٹم، اور ایمیگریشن کے مراحل آسانی سے مکمل کر سکتے ہیں۔ مفت وقت سے زیادہ انتظار کرنے پر ہر 30 منٹ کے حساب سے ایک معمولی اضافی فیس لی جاتی ہے۔"
        },
        {
            question: "کیا آپ جدہ ایئرپورٹ سے مکہ مکرمہ تک ایئرپورٹ ٹرانسفر فراہم کرتے ہیں؟",
            answer: (
                <>
                    جی ہاں۔{' '}
                    <Link href='/ur/routes/jeddah-makkah/' className='text-sky-700 hover:underline'>
                        جدہ سے مکہ کا روٹ
                    </Link>{' '}
                    ہماری سب سے مشہور اور بک ہونے والی سروس ہے۔ فاصلہ 80 کلومیٹر ہے، اور سفر کا وقت 60-90 منٹ ہے۔ فکسڈ ریٹس میں ارائیولز ہال پر میٹ اینڈ گریٹ کی سروس بھی شامل ہے۔
                </>
            )
        },
        {
            question: "کیا میں واپسی کا ایئرپورٹ ٹرانسفر (ہوٹل سے ایئرپورٹ) بک کر سکتا ہوں؟",
            answer: "جی ہاں۔ واپسی کی ایئرپورٹ ٹرانسفر سروس تمام ہوائی اڈوں کے لیے دستیاب ہے۔ پک اپ اور ڈراپ آف کے ریٹس یکساں ہیں۔ بین الاقوامی پروازوں کے لیے ڈرائیور پرواز سے کم از کم 3-4 گھنٹے پہلے، اور ملکی پروازوں کے لیے 2-3 گھنٹے پہلے پہنچتا ہے (یہ ایئرلائن کی چیک ان ریکوائرمنٹس پر নির্ভর کرتا ہے)۔ ایڈوانس بکنگ کی سختی سے ہدایت کی جاتی ہے۔"
        },
        {
            question: "کیا بین الاقوامی مسافروں کے لیے ڈرائیورز انگریزی زبان سمجھتے ہیں؟",
            answer: "جی ہاں۔ تمام ڈرائیورز انگریزی اور عربی بولتے اور سمجھتے ہیں۔ ہندوستان اور پاکستان کے زائرین کے لیے بہت سے ڈرائیورز اردو بھی باآسانی بول لیتے ہیں۔ ہمارے ڈرائیورز زائرین اور مسافروں کو مقامی معلومات دینے اور راستوں کی رہنمائی کے لیے خصوصی طور پر ٹرینڈ ہیں۔ غیر عربی بولنے والوں کے لیے ہوائی اڈے کی سائنجیز (Signs) پر بھی مدد فراہم کی جاتی ہے۔"
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "KSA Airport Transfer Service (Urdu)",
        "category": "Travel & Transportation",
        "description": "سعودی عرب کے 8 بڑے ہوائی اڈوں بشمول جدہ، ریاض، اور مدینہ کے لیے پروفیشنل ایئرپورٹ ٹرانسفر اور ٹیکسی سروسز۔",
        "provider": {
            "@type": "Organization",
            "name": "VIP Transfer KSA",
            "url": "https://taxiserviceksa.com"
        },
        "author": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "Founder & Saudi Aviation Logistics Expert",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail"
        },
        "areaServed": ["Jeddah", "Riyadh", "Madinah", "AlUla", "Yanbu", "Taif", "Dammam", "Abha"]
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs.map(f => ({
                question: f.question,
                answer: typeof f.answer === 'string'
                    ? f.answer
                    : "جی ہاں۔ جدہ سے مکہ کا راستہ ہماری سب سے مشہور سروس ہے۔ فاصلہ 80 کلومیٹر ہے، اور سفر کا وقت 60-90 منٹ ہے۔ فکسڈ ریٹس میں استقبالیہ سروس شامل ہے۔"
            }))} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-sky-950 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-urdu border-b border-sky-900/50">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-right">
                    <div className="text-center mb-12">
                        <span className="bg-sky-500/20 backdrop-blur-md border border-sky-500/30 text-sky-100 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 shadow-lg shadow-sky-500/10">
                            ماہر ہوا بازی لاجسٹکس
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-6 drop-shadow-lg">
                            سعودی عرب ایئرپورٹ ٹرانسفر سروس
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            مملکت کے تمام بڑے ٹریول ہبز پر <strong>24/7 ایئرپورٹ پک اپس</strong> اور روانگی کی بااعتماد سروس۔ ہم 8 ہوائی اڈوں بشمول نئے <strong>جدہ ٹرمینل 1</strong> اور <strong>ریاض ٹرمینل 3/4</strong> پر <strong>استقبالیہ (Meet-and-greet)</strong> کی خدمات فراہم کرتے ہیں تاکہ آپ کو انتظار کی زحمت نہ اٹھانی پڑے۔
                        </p>
                    </div>

                    {/* AI SEO: TL;DR Summary Block */}
                    <div className="bg-sky-950/40 backdrop-blur-sm rounded-2xl p-8 border border-sky-500/20 shadow-lg shadow-sky-900/20 mb-12 text-right">
                        <h2 className="text-xl font-bold text-sky-100 mb-4 flex items-center gap-2 justify-start flex-row-reverse text-right">
                            <Plane className="w-5 h-5 text-sky-400" />
                            مختصر حقائق: کے ایس اے ایئرپورٹ ٹرانسپورٹ
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sky-100/80 text-sm">
                            <li><strong>مرکزی ایئرپورٹس:</strong> جدہ (JED)، ریاض (RUH)، مدینہ (MED)، العلا (ULH)۔</li>
                            <li><strong>انتظار کی پالیسی:</strong> 60 منٹ (ڈومیسٹک) اور 90 منٹ (انٹرنیشنل) مفت انتظار۔</li>
                            <li><strong>ٹریکنگ:</strong> تمام بکنگز میں لائیو فلائٹ ٹریکنگ کی سہولت شامل ہے۔</li>
                            <li><strong>پک اپس:</strong> <strong>ارائیولز ٹرمینل</strong> پر پروفیشنل ڈرائیورز نام کے بورڈ کے ساتھ آپ کا استقبال کریں گے۔</li>
                        </ul>
                    </div>
                </div>
            </section>

             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider mb-2 block">سفری سہولیات</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
                            وی آئی پی ایئرپورٹ پرائیویٹ ٹرانسفرز<br />
                            <span className="text-sky-600">سعودی عرب میں</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            بین الاقوامی معیار کی استقبالیہ خدمات کا تجربہ کریں۔ ہم <Link href="/ur/locations/jeddah/" className="text-gray-900 underline decoration-sky-500/50 hover:text-sky-600 transition-colors">جدہ ایئرپورٹ</Link> سے <span className="text-gray-900 font-bold">الحمراء</span>، <span className="text-gray-900 font-bold">ابراج البیت</span>، اور دیگر بڑے مراکز کے لیے **پریمیم، پہلے سے بک شدہ وی آئی پی ٹرانسفرز** فراہم کرتے ہیں۔ ہماری ایگزیکٹو ڈرائیونگ سروس **عزیزیہ کے حاجی کیمپوں** اور **ریاض کے KAFD** کی پیچیدہ سفری رکاوٹوں کو حل کر کے آپ کو باآسانی آپ کی منزل تک پہنچاتی ہے۔
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/ur/booking?service=airport-transfer">
                                <Button size="lg" className="bg-sky-600 text-white hover:bg-sky-700 font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-sky-500/20 transition-all transform hover:scale-105 group">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    ایئرپورٹ ٹرانسفر کوٹیشن حاصل کریں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
             </section>

            {/* Airports Coverage Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider mb-2 block">نیٹ ورک</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-sky-500/30">اہم سٹریٹیجک ہوائی اڈے</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            ہم مخصوص اور پہلے سے بک شدہ ایگزیکٹو ٹرانسپورٹ فراہم کرتے ہیں۔ ہم گلیوں سے سواریاں اٹھانے یا کم فاصلے والی <strong>لوکل ٹیکسی</strong> کی سروس پیش <strong>نہیں</strong> کرتے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {airports.map((airport, index) => (
                            <Link key={index} href={airport.link} className="group">
                                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-sky-500 h-full flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10 group-hover:bg-sky-100/50 transition-colors"></div>
                                    <div className="flex items-start justify-between mb-4 flex-row-reverse text-left">
                                        <div className="w-14 h-14 bg-sky-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Plane className="w-7 h-7 text-white" />
                                        </div>
                                        {airport.isHub && (
                                            <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">
                                                مرکزی ایئرپورٹ
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-700 transition-colors text-right pl-4">
                                        {airport.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-3 justify-start flex-row-reverse text-left">
                                        <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-0.5 rounded ml-1">
                                            {airport.code}
                                        </span>
                                        <span className="text-sm text-gray-600">{airport.city}</span>
                                        <MapPin className="w-4 h-4 text-sky-500" />
                                    </div>

                                    <div className="text-gray-600 mb-4 flex-1 text-right">{airport.description}</div>

                                    <div className="mb-4">
                                        <div className="text-sm font-bold text-gray-900 mb-2 text-right">مشہور روٹس:</div>
                                        <div className="space-y-1">
                                            {airport.routes.map((route, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 justify-start flex-row-reverse text-left">
                                                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                                                    <span>{route}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between flex-row-reverse">
                                            <span className="text-sky-700 font-bold">{airport.price}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-600 group-hover:-translate-x-1 transition-all rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider mb-2 block">پری بکنگ کے فوائد</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-sky-500/30">پیشگی بکنگ کیوں ضروری ہے؟</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            کسی بھی انتظار کے بغیر، لائیو فلائٹ ٹریکنگ اور فکسڈ ریٹس کے ساتھ مکمل پریشانی سے پاک سفر کریں۔
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-sky-50/50 p-6 rounded-xl border border-sky-100 hover:border-sky-300 transition-colors">
                                <span className="text-gray-800 font-medium leading-relaxed text-sm flex-1">{feature}</span>
                                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5 ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider mb-2 block">پریمیم فلیٹ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-sky-500/30">اپنی مطلوبہ گاڑی کا انتخاب کریں</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            اپنے مسافروں اور سامان کی ضروریات کے مطابق ایگزیکٹو پرائیویٹ کاروں، لگژری سیڈان، یا پریمیم بڑی وینز میں سے کوئی ایک منتخب کریں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-sky-200 shadow-sm hover:shadow-lg transition-all">
                                <Car className="w-12 h-12 text-sky-900 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 justify-start flex-row-reverse text-left">
                                        <Users className="w-5 h-5 text-sky-500" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 justify-start flex-row-reverse text-left">
                                        <CheckCircle2 className="w-5 h-5 text-sky-500" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 space-y-2">
                                    <p className="text-sm text-gray-500 text-right">
                                        <strong className="text-gray-900 font-bold">بہترین انتخاب برائے:</strong> {vehicle.ideal}
                                    </p>
                                    <p className="text-sm text-gray-500 text-right">
                                        <strong className="text-gray-900 font-bold">کس ایئرپورٹ کے لیے:</strong> {vehicle.airports}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Airport Comparison Table for AI Extraction */}
            <div className="max-w-7xl mx-auto mb-16 overflow-x-auto bg-white rounded-2xl border border-gray-200 p-6 font-urdu shadow-sm w-full mx-4 sm:mx-auto mt-20" dir="rtl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 justify-start pl-4">
                    <Navigation className="w-5 h-5 text-sky-600" /> اہم ایئرپورٹ روٹس
                </h3>
                <table className="min-w-full text-right text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="py-4 px-4 font-bold text-gray-900">ایئرپورٹ کا نام</th>
                            <th className="py-4 px-4 font-bold text-gray-900">مشہور روٹ</th>
                            <th className="py-4 px-4 font-bold text-gray-900">اوسط فاصلہ</th>
                            <th className="py-4 px-4 font-bold text-gray-900">قیمت کا انداز</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-sky-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">جدہ ایئرپورٹ (JED)</td>
                            <td className="py-4 px-4 font-medium text-sky-700">جدہ → مکہ مکرمہ</td>
                            <td className="py-4 px-4 text-gray-600">80 کلومیٹر</td>
                            <td className="py-4 px-4 text-emerald-600 font-medium bg-emerald-50 inline-block mt-2 mb-2 px-2 py-1 rounded">مناسب ترین ریٹ</td>
                        </tr>
                        <tr className="hover:bg-sky-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">ریاض ایئرپورٹ (RUH)</td>
                            <td className="py-4 px-4 font-medium text-sky-700">ریاض → KAFD (فنانشل ڈسٹرکٹ)</td>
                            <td className="py-4 px-4 text-gray-600">35 کلومیٹر</td>
                            <td className="py-4 px-4 text-sky-700 font-medium">فکسڈ ریٹ</td>
                        </tr>
                        <tr className="hover:bg-sky-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">مدینہ ایئرپورٹ (MED)</td>
                            <td className="py-4 px-4 font-medium text-sky-700">مدینہ → مسجد نبوی</td>
                            <td className="py-4 px-4 text-gray-600">20 کلومیٹر</td>
                            <td className="py-4 px-4 text-gray-700 font-medium">مقامی ریٹ</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Airports - Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-sky-100 text-sky-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">سوالات و جوابات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-sky-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:border-sky-200 transition-colors">
                                <AccordionTrigger className="text-left hover:no-underline py-4 flex-row-reverse text-right">
                                    <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4 text-right">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <div className="text-gray-600 leading-relaxed pt-2 text-right">{faq.answer}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-950 font-urdu">
                {/* Author Section */}
                <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-sky-800 bg-sky-900 text-white" textClass="text-sky-100" />
                </div>
                <div className="max-w-4xl mx-auto text-center border-t-2 border-sky-800 pt-16 mt-8">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow">
                        اپنی وی آئی پی سواری کوٹیشن حاصل کریں
                    </h2>
                    <p className="text-xl text-sky-100/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                        سعودی عرب کی بہترین ایگزیکٹو ایئرپورٹ ٹرانسپورٹ کے ساتھ اپنے سفر کو محفوظ اور پرسکون بنائیں۔ ہم بین الاقوامی مسافروں اور بزنس ٹریولنگ کے لیے خصوصی خدمات فراہم کرتے ہیں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ur/booking?service=airport-transfer">
                            <Button size="lg" className="bg-white text-sky-950 hover:bg-sky-50 font-black text-lg px-10 py-6 h-auto min-w-[200px] rounded-full shadow-2xl">
                                کوٹیشن حاصل کریں
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
