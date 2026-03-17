import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle2, Car, Users, Shield, Compass, MapPin, ArrowRight, Navigation, Map } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'انٹرسٹی وی آئی پی ٹرانسفر سعودی عرب | لانگ ڈرائیو کے لیے پرائیویٹ ٹرانسپورٹ',
    description: 'سعودی عرب میں پریمیم انٹرسٹی وی آئی پی ٹرانسفر سروس۔ جدہ، مکہ، مدینہ، ریاض اور دمام کے درمیان ایگزیکٹو پرائیویٹ گاڑیاں۔ فکسڈ ریٹس کے ساتھ آرام دہ سفر۔',
    keywords: ['انٹرسٹی وی آئی پی ٹرانسفر', 'سعودی عرب پرائیویٹ ٹرانسپورٹ', 'جدہ سے ریاض ٹیکسی', 'مکہ سے مدینہ ٹرانسفر', 'لانگ ڈرائیو وی آئی پی سروس'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/intercity/',
    },
    openGraph: {
        title: 'انٹرسٹی پرائیویٹ ٹرانسفر | ایک شہر سے دوسرے شہر کا سفر',
        description: 'سعودی عرب کے تمام بڑے شہروں کے درمیان پرائیویٹ اور محفوظ سفری سہولت۔ جدید اور آرام دہ گاڑیاں بمعہ ڈرائیور۔',
        url: 'https://taxiserviceksa.com/ur/services/intercity/',
        type: 'website',
    },
};

export default function IntercityServicePageUrdu() {
    const popularRoutes = [
        { name: 'جدہ ↔ مکہ مکرمہ', distance: '85 کلومیٹر', time: '1 گھنٹہ 15 منٹ', price: 'فکسڈ ریٹ' },
        { name: 'مکہ ↔ مدینہ منورہ', distance: '450 کلومیٹر', time: '4 گھنٹے 30 منٹ', price: 'مارکیٹ کے مطابق' },
        { name: 'جدہ ↔ مدینہ منورہ', distance: '420 کلومیٹر', time: '4 گھنٹے', price: 'فکسڈ ریٹ' },
        { name: 'ریاض ↔ دمام', distance: '400 کلومیٹر', time: '3 گھنٹے 45 منٹ', price: 'گروپ ریٹ' },
        { name: 'جدہ ↔ طائف', distance: '170 کلومیٹر', time: '2 گھنٹے', price: 'ٹور ریٹ' },
        { name: 'مدینہ ↔ العلا', distance: '330 کلومیٹر', time: '3 گھنٹے 30 منٹ', price: 'اسپیشل ریٹ' },
    ];

    const features = [
        'ڈور ٹو ڈور (گھر سے گھر تک) پک اینڈ ڈراپ سروس',
        'بکنگ کے وقت طے شدہ اور فکسڈ کرایہ (کوئی پوشیدہ چارجز نہیں)',
        'پیشہ ور اور باقاعدہ لائسنس یافتہ ڈرائیورز',
        'طویل سفر کے لیے آرام دہ اور جدید گاڑیاں (Sedans & SUVs)',
        'راستے میں نماز، کھانے یا آرام کے لیے رکنے کی سہولت',
        'سامان (Luggage) اٹھانے اور رکھنے میں مکمل مدد',
    ];

    const faqs = [
        {
            question: "میں انٹرسٹی وی آئی پی ٹرانسفر کیسے بک کر سکتا ہوں؟",
            answer: "آپ ہماری ویب سائٹ پر آن لائن بکنگ فارم کے ذریعے باآسانی بکنگ کر سکتے ہیں۔ بس اپنی پک اپ (جہاں سے بیٹھنا ہے) اور ڈراپ آف (جہاں جانا ہے) لوکیشنز منتخب کریں اور فوری ایگزیکٹو کوٹیشن کے ساتھ کنفرمیشن حاصل کریں۔"
        },
        {
            question: "کیا لمبے سفر (Long-distance trips) کے لیے کرائے فکس ہیں؟",
            answer: "جی ہاں، ہمارے تمام انٹرسٹی روٹس کے کرائے پہلے سے طے شدہ اور فکس (Fixed) ہوتے ہیں۔ آپ کو جو قیمت بتائی جائے گی، اس میں پٹرول، ٹول ٹیکس اور ڈرائیور کی فیس شامل ہوتی ہے۔ کوئی پوشیدہ چارجز (Hidden costs) نہیں ہوتے۔"
        },
        {
            question: "ایک شہر سے دوسرے شہر سفر کے لیے کس قسم کی گاڑیاں استعمال ہوتی ہیں؟",
            answer: "ہم 1 سے 4 مسافروں کے لیے بہترین حالت میں موجود سیڈان گاڑیاں (Camry/Sonata) استعمال کرتے ہیں، جبکہ فیملیز اور بڑے گروپس کے لیے GMC Yukon یا Hyundai H-1 وینز دستیاب ہیں۔ تمام گاڑیاں بہترین اے سی (Air-conditioned) کے ساتھ طویل سفر کے لیے انتہائی موزوں ہیں۔"
        },
        {
            question: "کیا ہم سفر کے دوران رستے میں رک (Stops) سکتے ہیں؟",
            answer: "جی ہاں! ہماری سروس چونکہ پرائیویٹ ٹرانسفر ہے، اس لیے اس میں مکمل لچک موجود ہے۔ آپ راستے میں نماز، کھانے پینے یا واش روم کے لیے جتنا چاہیں رک سکتے ہیں، اور اس کا کوئی اضافی چارج نہیں لیا جاتا۔"
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Intercity VIP Transfer KSA (Urdu)",
        "category": "Intercity Transport",
        "description": "سعودی عرب کے بڑے شہروں کے درمیان پرائیویٹ اور محفوظ سفری سہولت۔ جدید اور آرام دہ گاڑیاں۔",
        "provider": {
            "@type": "Organization",
            "name": "VIP Transfer KSA",
            "url": "https://taxiserviceksa.com"
        },
        "author": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "Founder & Saudi Intercity Logistics Expert",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail"
        },
        "areaServed": "Saudi Arabia",
        "serviceType": "VIP Transport"
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Premium Hero Section */}
            <section className="relative bg-gradient-to-tr from-slate-900 via-indigo-950 to-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
                <div className="absolute inset-0 opacity-20 Mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right">
                        <span className="bg-indigo-500/20 backdrop-blur border border-indigo-400/40 text-indigo-100 font-bold tracking-wider uppercase text-sm px-5 py-2 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            سعودی انٹرسٹی ٹریول
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-xl">
                            سعودی شہروں کے درمیان <br />
                            <span className="text-indigo-400">پرائیویٹ ٹرانسفر سروس</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100/90 max-w-3xl leading-relaxed mb-10 font-light mx-auto md:mr-0 md:ml-auto">
                            جدہ، مکہ، مدینہ، ریاض، اور دمام کے درمیان محفوظ اور آرام دہ سفر۔ آپ کی دہلیز سے منزل تک، پروفیشنل ڈرائیورز اور بہترین ایگزیکٹو گاڑیوں کے ساتھ۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=intercity">
                                <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-500 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1 group border border-indigo-400/50 w-full sm:w-auto">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    انٹرسٹی ٹرانسفر کوٹیشن حاصل کریں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* TL;DR Quick Facts Panel */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-800">
                        <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                             <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black mb-1">انٹرسٹی سفر کے اہم حقائق</h2>
                            <p className="text-sm text-slate-500 font-medium">سعودی عرب میں لمبے سفر کے لیے ضروری معلومات</p>
                        </div>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-700 text-sm flex-1 mr-0 md:mr-8 border-r-0 md:border-r border-slate-200 pr-0 md:pr-8">
                        <li className="flex items-start gap-2">
                            <Navigation className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                            <span><strong>اہم روٹس:</strong> جدہ-مکہ (85km)، مکہ-مدینہ (450km)، ریاض-دمام (400km)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Car className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                            <span><strong>گاڑیوں کا معیار:</strong> اے سی والی سیڈان کاریں (Camry) اور کشادہ لگژری SUVs (GMC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                            <span><strong>لچکداری:</strong> راستے میں نماز یا کھانے کے لیے رکنے کی مکمل آزادی بغیر کسی اضافی فیس کے</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                            <span><strong>فکسڈ کرایہ:</strong> کوٹیشن میں پٹرول، اور ٹول ٹیکس کی قیمت پہلے سے شامل ہوتی ہے</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Popular Routes Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
                <div className="text-center mb-12">
                    <span className="text-indigo-600 font-bold tracking-wider mb-2 block">سفری فاصلے</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-indigo-500/30">مشہور انٹرسٹی روٹس</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularRoutes.map((route, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all group">
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                                <h3 className="font-black text-xl text-slate-900 group-hover:text-indigo-700 transition-colors">{route.name}</h3>
                                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Map className="text-indigo-400 w-5 h-5" />
                                </div>
                            </div>
                            <div className="space-y-4 text-sm text-slate-600 mb-6">
                                <div className="flex justify-between items-center bg-slate-50 p-2 rounded">
                                    <span className="font-medium">فاصلہ:</span>
                                    <span className="font-bold text-slate-900">{route.distance}</span>
                                </div>
                                <div className="flex justify-between items-center bg-indigo-50/50 p-2 rounded">
                                    <span className="font-medium">تخمینہ وقت:</span>
                                    <span className="font-bold text-slate-900">{route.time}</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-emerald-600 font-extrabold text-lg px-2 py-1 bg-emerald-50 rounded">{route.price}</span>
                                <Link href="/ur/booking/" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1">
                                    کوٹیشن حاصل کریں <ArrowRight className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Travel Perspective / Scenarios */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-wider mb-2 block">سفر کی اقسام</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-indigo-500/30">انٹرسٹی ٹریول - کس کے لیے؟</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Business Card */}
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 relative overflow-hidden group hover:border-indigo-300 transition-all">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-bl-full -z-10 group-hover:bg-indigo-200 transition-colors"></div>
                            <Users className="w-12 h-12 text-indigo-700 mb-6" />
                            <h3 className="text-2xl font-black text-slate-900 mb-4">بزنس ٹریولرز (کاروباری حضرات)</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                ایئرپورٹ کی لمبی لائنوں، سیکیورٹی چیکس اور بورڈنگ کے جھنجھٹ سے بچیں۔ ریاض، دمام یا جدہ کے درمیان سفر کریں اور اپنی پرائیویٹ کار کے پُرسکون ماحول میں لیپ ٹاپ پر کام کریں یا آرام سے سوتے ہوئے جائیں۔
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 font-medium text-slate-800"><CheckCircle2 className="w-5 h-5 text-indigo-500"/> مکمل پرائیویسی</li>
                                <li className="flex items-center gap-2 font-medium text-slate-800"><CheckCircle2 className="w-5 h-5 text-indigo-500"/> کارپوریٹ رسیدات دستیاب</li>
                            </ul>
                        </div>

                        {/* Family Card */}
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 relative overflow-hidden group hover:border-emerald-300 transition-all">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-bl-full -z-10 group-hover:bg-emerald-200 transition-colors"></div>
                            <Car className="w-12 h-12 text-emerald-700 mb-6" />
                            <h3 className="text-2xl font-black text-slate-900 mb-4">فیملیز کے لیے سفر</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                بچوں کے ساتھ پبلک ٹرانسپورٹ (بسوں یا ٹرین) کا سفر مشکل ہو سکتا ہے۔ ہماری کشادہ GMC گاڑیاں آپ کے پورے خاندان اور سامان کے لیے بہترین ہیں جس میں جب چاہیں واش روم یا کھانے کے لیے بریک لے سکتے ہیں۔
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 font-medium text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> 7 مسافروں تک گنجائش</li>
                                <li className="flex items-center gap-2 font-medium text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> بچوں کے لیے آرام دہ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* Features Section */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-indigo-600 font-bold tracking-wider mb-2 block">ہماری خصوصیات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-indigo-500/30">ملک بھر میں ہماری سروس کا انتخاب کیوں کریں؟</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors shadow-sm hover:shadow-md">
                                <span className="text-slate-700 font-bold leading-relaxed text-base flex-1">{feature}</span>
                                <div className="bg-indigo-50 p-2 rounded-full">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* FAQ Section */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-indigo-100 text-indigo-900 font-bold tracking-wider uppercase text-sm px-5 py-2 rounded-full inline-block mb-4 border border-indigo-200">سوالات و جوابات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-indigo-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-2xl border border-slate-200 px-6 shadow-sm hover:border-indigo-300 transition-all data-[state=open]:bg-white data-[state=open]:border-indigo-400">
                                <AccordionTrigger className="text-left hover:no-underline py-5 flex-row-reverse text-right">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 flex-1 pl-4 text-right leading-snug">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <p className="text-slate-600 leading-relaxed pt-2 text-right md:text-lg border-t border-slate-100 mt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 font-urdu mt-10">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-indigo-100 bg-white" />
            </div>
        </div>
    );
}
