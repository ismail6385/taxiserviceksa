import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Compass, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Mountain, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'سعودی عرب میں تاریخی و ورثہ ٹورز | بہترین 4x4 صحرائی ٹرانسپورٹ',
    description: 'العلا، مدائن صالح، اور تاریخی مقامات (UNESCO) کی سیر کے لیے ٹاپ ریٹڈ 4x4 گاڑیاں بمعہ مقامی ماہر ڈرائیورز۔ بہترین سفری تجربہ حاصل کریں۔',
    keywords: ['ہیریٹیج ٹورز سعودی عرب', '4x4 ڈیزرٹ ٹرانسپورٹ', 'العلا ٹورز', 'مدائن صالح کی سیر', 'خیبر ٹورز', 'سعودی تاریخی مقامات ٹیکسی'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/heritage-tours/',
    },
    openGraph: {
        title: 'سعودی عرب تاریخی مقامات ٹورز | 4x4 کے ساتھ یونیسکو سائٹس کا سفر',
        description: 'العلا اور خیبر جیسے تاریخی مقامات کی سیر کے لیے پروفیشنل ٹرانسپورٹ سروس اور لائسنس یافتہ مقامی ڈرائیورز۔',
        url: 'https://taxiserviceksa.com/ur/services/heritage-tours/',
        type: 'website',
    },
};

export default function HeritageToursPageUrdu() {
    const heritageSites = [
        {
            name: 'العلا ہیریٹیج سرکٹ',
            description: 'یونیسکو (UNESCO) کا عالمی ثقافتی ورثہ۔ حجر، مدائن صالح کے قدیم مقبرے، ددان (Dadan) کا قدیم شہر اور ایلیفینٹ راک جیسی مشہور جگہیں شامل ہیں۔',
            highlights: ['ہیگرا / مدائن صالح', 'ددان قدیم شہر', 'ایلیفینٹ راک', 'العلا کا پرانا شہر (Old Town)'],
            duration: 'مکمل دن (8-10 گھنٹے)',
            price: 'انتہائی مناسب ریٹس',
            link: '/ur/locations/alula',
            isUNESCO: true
        },
        {
            name: 'خیبر کا تاریخی سفر',
            description: 'قدیم نخلستان اور قلعے کے کھنڈرات۔ ابتدائی اسلامی دور کے تاریخی مقامات جہاں تک رسائی کے لیے کچے اور صحرائی راستوں پر صرف 4x4 گاڑیاں ہی چل سکتی ہیں۔',
            highlights: ['قلعہ خیبر', 'قدیم نخلستان (Oasis)', 'صحرائی راستوں کا سفر', 'تاریخی نشانات'],
            duration: 'آدھا دن (4-6 گھنٹے)',
            price: 'انتہائی مناسب ریٹس',
            link: '/ur/locations/khayber-fort'
        },
        {
            name: 'العلا سے خیبر کا مکمل ٹور',
            description: 'العلا کے مقامات اور خیبر کے تاریخی علاقوں کا مشترکہ ٹور۔ یہ تقریباً 150 کلومیٹر کا مخصوص صحرائی روٹ ہے جو آپ کی تاریخ سے دلچسپی کو بڑھاتا ہے۔',
            highlights: ['العلا + خیبر', 'آف روڈ اور صحرائی سفر', 'فوٹوگرافی کے لیے بہترین', 'تاریخی سرکٹ'],
            duration: '2 دن کا مشورہ دیا جاتا ہے',
            price: 'بہترین اور مسابقتی پیکج',
            link: '/ur/locations/alula'
        },
    ];

    const features = [
        'آف روڈنگ اور صحرائی سفر کے لیے 4x4 گاڑیاں (ٹویوٹا لینڈ کروزر)',
        'تاریخی مقامات اور راستوں سے مکمل واقف لائسنس یافتہ ڈرائیورز',
        'غیر ملکیوں کے لیے انگریزی بولنے والے ڈرائیورز کی دستیابی',
        'آپ کی پسند اور ضرورت کے مطابق ٹور کے شیڈول میں لچک',
        'فوٹوگرافی کے لیے بہترین پوائنٹس پر رکنے کی خصوصی سہولت',
        'خطرناک یا کچے صحرائی راستوں پر ڈرائیونگ میں مہارت',
        'یونیسکو کے مقامات تک اندرونی رسائی اور کوآرڈینیشن',
        'مقامی تاریخ سے متعلق بنیادی معلومات کی فراہمی',
        'دورانِ سفر پینے کا پانی اور ریفریشمنٹس (Refreshments) شامل',
        'طلوع آفتاب اور غروب آفتاب کے مناظر دیکھنے کے لیے خصوصی ٹورز',
    ];

    const vehicles = [
        {
            name: 'ٹویوٹا لینڈ کروزر (4x4)',
            capacity: '5-7 مسافر',
            terrain: 'صحرا، چٹانی، ریت کے ٹیلے (Off-road)',
            ideal: 'ہیریٹیج ٹورز، صحرائی مہم جوئی'
        },
        {
            name: 'جی ایم سی یوکون (GMC Yukon SUV)',
            capacity: '7 مسافر',
            terrain: 'پکی سڑکیں، ہلکا کچا راستہ',
            ideal: 'شہر سے تاریخی مقامات تک کا سیدھا سفر'
        },
    ];

    const faqs = [
        {
            question: "کیا آپ العلا ٹورز کے لیے 4x4 گاڑیاں فراہم کرتے ہیں؟",
            answer: "جی ہاں۔ العلا کے تمام ہیریٹیج ٹورز خصوصی 4x4 گاڑیوں (خاص طور پر Toyota Land Cruiser) میں کروائے جاتے ہیں جو ریت اور چٹانی علاقوں کے لیے موزوں ہیں۔ یہ گاڑیاں مدائن صالح، ایلیفینٹ راک اور دیگر آثارِ قدیمہ کے اندرونی راستوں پر چلنے کی پوری صلاحیت رکھتی ہیں۔ ہمارے ڈرائیورز کو ان راستوں پر مہارت حاصل ہے۔"
        },
        {
            question: "کیا میں العلا کے تمام مقامات کی سیر کے لیے پورے دن کا ٹور بک کروا سکتا ہوں؟",
            answer: "ضرور! پورے دن کا العلا ٹور (جس میں 8 سے 10 گھنٹے درکار ہوتے ہیں) میں آپ ہیگرا (مدائن صالح)، ددان کا قدیم شہر، ایلیفینٹ راک، اور العلا اولڈ ٹاؤن سب دیکھ سکتے ہیں۔ اس میں ہماری 4x4 گاڑی بمعہ ڈرائیور آپ کے ساتھ ہوتی ہے، اور آپ کو فوٹوگرافی کے لیے روکے جانے کی مکمل آزادی ہے۔"
        },
        {
            question: "کیا خیبر کے قلعے اور ঐতিহাসিক مقامات کے لیے ٹرانسپورٹ دستیاب ہے؟",
            answer: "جی ہاں! قلعہ خیبر کا ٹور عام طور پر 4 سے 6 گھنٹے کا ہوتا ہے۔ چونکہ خیبر کے قدیم نخلستان اور کھنڈرات تک جانے والے راستے کچے ہیں اس لیے ہم اس کے لیے بھی صرف 4x4 لینڈ کروزر فراہم کرتے ہیں۔ ڈرائیور راستے میں بنیادی تاریخی معلومات بھی شیئر کرتے ہیں۔ کم از کم 48 گھنٹے پہلے ایڈوانس بکنگ کا مشورہ دیا جاتا ہے۔"
        },
        {
            question: "کیا ڈرائیورز تاریخی مقامات کی تاریخ بھی بتاتے ہیں؟",
            answer: "ہمارے تمام مقامی ڈرائیورز کو ان مقامات کی تاریخ کا بنیادی علم ہوتا ہے اور وہ آپ کو اس کی اہمیت سے آگاہ کر سکتے ہیں۔ تاہم، اگر آپ کو نبطی (Nabataean) تہذیب یا اسلامی تاریخ کی تفصیلی اور ماہرانہ گائیڈنس چاہیے تو آپ کی درخواست پر ہم علیحدہ سے ایک پروفیشنل ٹور گائیڈ (انگریزی یا عربی) بھی فراہم کر سکتے ہیں، جس کے اضافی چارجز ہوتے ہیں۔"
        },
        {
            question: "کیا میں ہیگرا میں صبح سویرے (طلوع آفتاب) یا شام (غروب آفتاب) کا ٹور بک کر سکتا ہوں؟",
            answer: "یقیناً! طلوع آفتاب کے ٹور کے لیے ہم صبح 5 بجے نکلتے ہیں تاکہ مقبروں پر صبح کی سنہری روشنی پڑتے ہوئے دیکھ سکیں جو فوٹوگرافرز کی اولین ترجیح ہوتی ہے۔ اسی طرح ایلیفینٹ راک پر سن سیٹ (غروب آفتاب) دیکھنے کے لیے سہ پہر 3 یا 4 بجے ٹور شروع کیا جاتا ہے۔ ان ٹورز کی قیمتیں ہمارے عام اوقاتِ کار کے برابر ہی ہیں، بس اس کا انحصار موسم (جیسے آندھی یا ریت کے طوفان) پر ہوتا ہے۔"
        },
        {
            question: "کیا العلا سے خیبر کے راستے پر عام سیڈان گاڑیاں جا سکتی ہیں؟",
            answer: "نہیں! العلا سے خیبر (تقریباً 150 کلومیٹر) کا کچھ راستہ آف روڈ اور صحرائی ہے جس پر عام گاڑیاں نہیں چل سکتیں۔ اس روٹ پر ریت کے ٹیلے اور چٹانیں آتی ہیں۔ راستے کے مناظر اور اسٹاپس پر رکنے کی وجہ سے عموماً 2 سے 3 گھنٹے لگتے ہیں۔ اس لیے اس روٹ پر ہمارا اصول ہے کہ صرف 4x4 گاڑیاں استعمال کی جائیں۔"
        },
        {
            question: "کیا دورانِ سفر پینے کا پانی یا کھانے پینے کا سامان مہیا کیا جاتا ہے؟",
            answer: "جی ہاں۔ ہمارے تمام ہیریٹیج اور صحرائی ٹورز میں مسافروں کے لیے منرل واٹر اور ہلکی ریفریشمنٹس پیکج میں شامل ہوتی ہیں۔ البتہ اگر آپ کا فل ڈے ٹور ہے، تو دوپہر کے کھانے (لنچ) کے لیے ڈرائیور آپ کو العلا یا خیبر کے کسی مقامی ہوٹل پر روک دے گا جس کا بل آپ کو خود ادا کرنا ہوگا۔"
        },
        {
            question: "کیا میں اپنی مرضی کے لحاظ سے اس ٹور کا پلان (Itinerary) ترتیب دے سکتا ہوں؟",
            answer: "بالکل۔ ہمارے پاس ٹور کے شیڈول میں مکمل لچک موجود ہے۔ اگر آپ صرف مدائن صالح پر زیادہ وقت گزارنا چاہتے ہیں یا ددان کی بجائے کسی اور مقام کی تصویر کشی کرنا چاہتے ہیں، تو آپ اپنے ڈرائیور کو بتا سکتے ہیں۔ ملٹی ڈے ٹورز اور خاص آرکیالوجی ٹورز کے لیے کسٹم پیکج اور فیس کے لیے ہم سے واٹس ایپ پر رابطہ کریں۔"
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Heritage Tour Transport Saudi Arabia (Urdu)",
        "category": "Tourism & Transport",
        "description": "سعودی عرب کے تاریخی مقامات جیسے العلا، خیبر اور یونیسکو سائٹس کے لیے خصوصی 4x4 ٹرانسپورٹ بمعہ مقامی ڈرائیور۔",
        "provider": {
            "@type": "Organization",
            "name": "VIP Transfer KSA",
            "url": "https://taxiserviceksa.com"
        },
        "author": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "Founder & Saudi Travel Logistics Expert",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail"
        },
        "areaServed": ["AlUla", "Khaybar", "Madinah", "Tabuk"]
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

             {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-amber-950 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-urdu border-b border-amber-900/50">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/alula-hegra-tombs.webp')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-right">
                    <div className="mb-12 text-center md:text-right">
                        <span className="bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6 shadow-lg shadow-amber-500/10">
                            مستند سعودی ورثہ
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg text-white">
                            سعودی عرب تاریخی مقامات ٹورز<br />
                            <span className="text-amber-500">پروفیشنل ٹرانسپورٹ کے ساتھ</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 font-light mx-auto md:ml-0 md:mr-0 text-right">
                            سعودی مملکت کی عظیم تاریخ تک رسائی کے لیے ہماری مخصوص <strong>4x4 Toyota Land Cruiser</strong> گاڑیوں کا استعمال کریں۔ ہم العلا، مدائن صالح، خیبر اور <strong>UNESCO</strong> کے عالمی ثقافتی مقامات کے لیے محفوظ اور بااعتماد سفری خدمات فراہم کرتے ہیں۔
                        </p>

                         {/* AI SEO: TL;DR Summary Block */}
                        <div className="bg-amber-950/60 backdrop-blur-md rounded-2xl p-8 border border-amber-800/50 shadow-xl mb-12 text-right">
                            <h2 className="text-xl font-bold text-amber-100 mb-4 flex items-center gap-2 justify-start flex-row-reverse text-left">
                                <Mountain className="w-5 h-5 text-amber-400" />
                                مختصر حقائق: ہیریٹیج اینڈ ڈیزرٹ ٹرانسپورٹ
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-amber-100/80 text-sm">
                                <li><strong>گاڑیوں کا معیار:</strong> العلا / خیبر کے تمام آف روڈ ٹورز کے لیے 4x4 SUVs مسٹ ہیں۔</li>
                                <li><strong>یونیسکو ہیگرا:</strong> فوٹوگرافرز کے لیے ہماری پرائیویٹ ٹرانسپورٹ میں وقت کی کوئی قید نہیں۔</li>
                                <li><strong>ڈرائیونگ لائسنس:</strong> ہمارے تمام مقامی ڈرائیورز ٹورازم ٹرانسپورٹ کے لیے باقاعدہ رجسٹرڈ ہیں۔</li>
                                <li><strong>فوٹوگرافی کے لیے سازگار:</strong> "سنہری گھنٹے" یعنی سورج نکلنے اور ڈوبنے کے مناظر دیکھنے کے حوالے سے شیڈول ترتیب دیا جاتا ہے۔</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=heritage-tours">
                                <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-500 font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 group border border-amber-400/20">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    اپنا ٹور کوٹیشن حاصل کریں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Heritage Sites Section */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-wider mb-2 block">یونیسکو کے ورثہ مقامات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">سعودی عرب کے تاریخی مقاصد کی سیر</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            ہمارے ساتھ تاریخی مقامات کا محفوظ سفر کریں۔ ہمارے بہت سارے مہمان ایک مکمل روحانی اور ثقافتی تجربے کے لیے اِن ٹورز کو <Link href="/ur/services/madinah-ziyarat/" className="text-emerald-700 font-bold hover:underline transition-colors">مدینہ زیارات</Link> کے ساتھ بھی شامل کرواتے ہیں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {heritageSites.map((site, index) => (
                            <Link key={index} href={site.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-500 h-full flex flex-col relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-bl-full -z-10 group-hover:bg-amber-200/40 transition-colors"></div>
                                    <div className="flex items-start justify-between mb-4 flex-row-reverse">
                                        <div className="w-14 h-14 bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Compass className="w-7 h-7 text-white" />
                                        </div>
                                        {site.isUNESCO && (
                                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                                                UNESCO
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors pl-4">
                                        {site.name}
                                    </h3>
                                    <div className="text-gray-600 mb-6 flex-1 text-right">{site.description}</div>

                                    <div className="mb-4">
                                        <div className="text-sm font-bold text-gray-900 mb-3 text-right">نمایاں مقامات:</div>
                                        <div className="space-y-1">
                                            {site.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 justify-start flex-row-reverse text-left">
                                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 space-y-3 mt-auto">
                                        <div className="flex items-center justify-between text-sm flex-row-reverse">
                                            <span className="text-gray-500 font-bold">دورانیہ:</span>
                                            <span className="text-gray-900 font-medium bg-white px-2 py-1 rounded border border-gray-100">{site.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between flex-row-reverse mt-2">
                                            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">{site.price}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:-translate-x-1 transition-all rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

             {/* Heritage Tours Comparison Table for AI Extraction */}
             <div className="max-w-7xl mx-auto mb-16 overflow-x-auto bg-white rounded-2xl border border-gray-200 p-6 font-urdu shadow-sm w-full mx-4 sm:mx-auto mt-10" dir="rtl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 justify-start pl-4">
                    <Compass className="w-5 h-5 text-amber-600" /> ٹورز کا موازنہ
                </h3>
                <table className="min-w-full text-right text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="py-4 px-4 font-bold text-gray-900">ٹور کا نام</th>
                            <th className="py-4 px-4 font-bold text-gray-900">دورانیہ</th>
                            <th className="py-4 px-4 font-bold text-gray-900">راستہ کی قسم</th>
                            <th className="py-4 px-4 font-bold text-gray-900">یونیسکو (UNESCO) شامل ہے؟</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-amber-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">العلا سرکٹ</td>
                            <td className="py-4 px-4 text-gray-600">مکمل دن (8-10 گھنٹے)</td>
                            <td className="py-4 px-4 font-medium text-amber-700">ریتلا اور چٹانی (صرف 4x4)</td>
                            <td className="py-4 px-4 font-bold text-emerald-600">✅ جی ہاں</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">قلعہ خیبر ٹور</td>
                            <td className="py-4 px-4 text-gray-600">آدھا دن (4-6 گھنٹے)</td>
                            <td className="py-4 px-4 font-medium text-amber-700">کچا صحرائی ٹریک (صرف 4x4)</td>
                            <td className="py-4 px-4 text-gray-600">مقامی ورثہ</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">صرف ایئرپورٹ ٹرانسفر</td>
                            <td className="py-4 px-4 text-gray-600">فاصلے کے مطابق</td>
                            <td className="py-4 px-4 font-medium text-gray-700">پکی سڑکیں (Luxury SUV)</td>
                            <td className="py-4 px-4 text-gray-500">نہیں (صرف ڈراپ آف)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

             {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-wider mb-2 block">4x4 ڈیزرٹ فلیٹ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">سعودی صحرا کے لیے بہترین کاریں</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            ہمارا ٹاپ ریٹڈ فلیٹ ان 4x4 گاڑیوں پر مشتمل ہے جو خاص طور پر سعودی عرب کی سخت صحرائی اور غیر ہموار زمین کے لیے ڈیزائن کی گئی ہیں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border hover:border-amber-200 transition-colors shadow-sm">
                                <Car className="w-12 h-12 text-black mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-4 mb-6 mt-6">
                                    <div className="flex items-center gap-3 justify-start flex-row-reverse text-left bg-gray-50 p-3 rounded">
                                        <Users className="w-5 h-5 text-gray-500" />
                                        <span className="font-medium text-gray-700">{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-start flex-row-reverse text-left bg-amber-50/50 p-3 rounded">
                                        <Mountain className="w-5 h-5 text-amber-600" />
                                        <span className="font-medium text-amber-900">{vehicle.terrain}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 text-right">
                                        <strong className="text-gray-900 font-bold">بہترین انتخاب برائے:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-wider mb-2 block">ہماری خصوصیات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">ہمارے ہیریٹیج ٹورز سب سے زیادہ پسند کیوں کیے جاتے ہیں؟</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-amber-50/40 p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors">
                                <span className="text-gray-800 font-medium leading-relaxed text-sm flex-1">{feature}</span>
                                <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5 ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* FAQ Section */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-amber-100 text-amber-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 border border-amber-200">سوالات و جوابات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:border-amber-200 transition-colors">
                                <AccordionTrigger className="text-left hover:no-underline py-4 flex-row-reverse text-right">
                                    <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4 text-right">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2 text-right">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

             {/* CTA Section */}
             <section className="bg-gradient-to-br from-amber-950 to-gray-900 rounded-3xl p-12 text-center text-white my-16 max-w-7xl mx-auto mx-4 sm:mx-6 shadow-2xl overflow-hidden relative font-urdu">
                 <div className="absolute inset-0 opacity-10 bg-[url('/alula-hegra-tombs.webp')] bg-cover mix-blend-overlay"></div>
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        کیا آپ سعودی تاریخ کھوجنے کے لیے تیار ہیں؟
                    </h2>
                    <p className="text-lg md:text-xl text-amber-100/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        آج ہی اپنے ٹور کے لیے پروفیشنل ٹرانسپورٹ کوٹیشن حاصل کریں۔ ماہر آف روڈ ڈرائیورز، مخصوص 4x4 گاڑیاں، اور گروپس یا اکیلے ٹریول کرنے والوں کے لیے آپ کی پسند کے مطابق ترتیب دیا گیا بہترین شیڈول۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-amber-600 text-white hover:bg-amber-500 font-black text-lg px-10 py-6 h-auto shadow-xl rounded-full border border-amber-500/50">
                            <Link href="/ur/booking/">
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                ہیریٹیج ٹور کوٹیشن حاصل کریں
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white border hover:text-black font-bold text-lg px-10 py-6 h-auto rounded-full transition-colors">
                            <Link href="/ur/services/airport-transfers/">
                                ایئرپورٹ سے العلا
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 font-urdu">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-amber-100 bg-white" />
            </div>
        </div>
    );
}
