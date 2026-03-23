import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'ٹیکسی جدہ ٹو مکہ | جدہ ایئرپورٹ ٹیکسی | جدہ میں ٹیکسی (Taxi in Jeddah)',
    description: 'جدہ میں بہترین آن لائن ٹیکسی کے لیے کوٹیشن حاصل کریں۔ جدہ ایئرپورٹ (KAIA) سے مکہ اور مدینہ کے لیے ڈائریکٹ ٹرانسفرز، وی آئی پی چوفیر کارز، اور ایوارڈ یافتہ سروس۔',
    keywords: ['جدہ سے مکہ ٹیکسی', 'جدہ ایئرپورٹ ٹیکسی', 'جدہ میں ٹیکسی', 'جدہ ٹو مکہ ٹیکسی کرایہ', 'ایئرپورٹ پک اپ جدہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/taxi-in-jeddah/',
    },
    openGraph: {
        title: 'جدہ میں ٹیکسی | پریمیم کارز بمعہ ڈرائیور',
        description: 'جدہ میں وی آئی پی شخصیات، کارپوریٹ سفر، اور عمرہ زائرین کے لیے بہترین اور پرائیویٹ ٹیکسی سروس۔',
        url: 'https://taxiserviceksa.com/ur/services/taxi-in-jeddah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/jeddah.webp', alt: 'Premium Taxi service in Jeddah' }],
    },
};

export default function TaxiInJeddahPageUrdu() {
    const fleet = [
        { name: 'Mercedes S-Class', type: 'لگژری سیڈان', pax: '3', lugg: '2', img: 'Car' },
        { name: 'BMW', type: 'لگژری سیڈان', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Cadillac Escalade', type: 'پریمیم SUV', pax: '7', lugg: '4', img: 'Car' },
        { name: 'GMC', type: 'فیملی SUV', pax: '7', lugg: '4', img: 'Car' },
        { name: 'Ford Taurus 2025', type: 'ایگزیکٹو سیڈان', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Genesis 2023', type: 'ایگزیکٹو سیڈان', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Mercedes Vito', type: 'لگژری وین', pax: '7', lugg: '4', img: 'Car' },
        { name: 'Mercedes Sprinter', type: 'ایگزیکٹو منی بس', pax: '14', lugg: '4', img: 'Car' },
        { name: 'Luxurious Bus', type: 'بڑی لگژری بس', pax: '25', lugg: '4', img: 'Users' }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "VIP Taxi & Airport Transfer (Urdu)",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Jeddah"
        },
        "description": "خصوصی 24/7 پری بکنگ وی آئی پی ٹیکسی جدہ۔ بادشاہ عبدالعزیز ایئرپورٹ (KAIA) سے پک اپ اور مکہ ڈائریکٹ ٹرانسفرز۔",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on route & vehicle"
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu border-t-[8px] border-emerald-600" dir="rtl">
            <Script
                id="service-schema-jeddah-taxi-urdu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Custom RTL Hero with Emerald (Jeddah vibe - sea & prosperity) */}
            <section className="relative bg-gradient-to-tr from-slate-900 via-emerald-950 to-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/locations/jeddah.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-emerald-500/20 backdrop-blur border border-emerald-400/40 text-emerald-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2 mb-6">
                            <Car className="w-4 h-4" />
                            ایگزیکٹو ٹرانسپورٹ ہب
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-xl text-right">
                            جدہ میں ٹیکسی <br />
                            <span className="text-emerald-400">& ایئرپورٹ ٹرانسفرز</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50/90 max-w-3xl leading-relaxed mb-10 font-light drop-shadow md:text-justify text-right mx-auto md:mr-0 md:ml-auto">
                            وی آئی پی ایئرپورٹ ٹرانسفرز، کارپوریٹ سفر، اور پریمیم چوفیر سروس۔ جدہ ایئرپورٹ سے مکہ یا مدینہ تک کا سب سے محفوظ اور پُرسکون سفر۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=jeddah-taxi" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-lg px-10 py-7 rounded-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-1 group border-[2px] border-emerald-400/50 w-full">
                                     ٹیکسی کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation Menu style */}
            <div className="bg-emerald-950/20 backdrop-blur text-emerald-800 border-b border-emerald-900/10 py-3 px-4 sm:px-6 lg:px-8 font-urdu relative z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-start space-x-2 space-x-reverse text-sm font-bold">
                    <Link href="/ur" className="hover:text-emerald-600 transition-colors">ہوم</Link>
                    <span className="text-emerald-300">/</span>
                    <Link href="/ur/services" className="hover:text-emerald-600 transition-colors">سروسز</Link>
                    <span className="text-emerald-300">/</span>
                    <span className="text-emerald-900">ٹیکسی ان جدہ</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-full md:w-auto">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">جدہ کے مشہور روٹس</h2>
                            <p className="text-slate-600">جدہ سے اپنی منزل منتخب کریں اور وی آئی پی ٹرانسپورٹ حاصل کریں۔</p>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-row-reverse w-full md:w-auto justify-start">
                            <Link href="/ur/routes/jeddah-makkah/">
                                <Button className="bg-white text-slate-900 hover:bg-emerald-600 hover:text-white border-2 border-slate-200 hover:border-emerald-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    جدہ سے مکہ
                                </Button>
                            </Link>
                            <Link href="/ur/routes/jeddah-madinah/">
                                <Button className="bg-white text-slate-900 hover:bg-emerald-600 hover:text-white border-2 border-slate-200 hover:border-emerald-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    جدہ سے مدینہ
                                </Button>
                            </Link>
                            <Link href="/ur/routes/jeddah-alula/">
                                <Button className="bg-white text-slate-900 hover:bg-emerald-600 hover:text-white border-2 border-slate-200 hover:border-emerald-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    جدہ سے العلا
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and Value Proposition */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center md:text-right">
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3 block">کارپوریٹ اور ایئرپورٹ ماہرین</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                            جدہ کی پریمیم ٹیکسی سروس
                        </h2>
                        <div className="prose prose-lg text-slate-600 max-w-4xl mx-auto md:mr-0 ml-auto leading-relaxed">
                            <p>کیا آپ **شاہ عبدالعزیز بین الاقوامی ہوائی اڈے (KAIA)** پر پہنچ رہے ہیں اور آپ کو فوری وی آئی پی ٹرانسپورٹ کی ضرورت ہے؟ یا آپ ایک ایگزیکٹو ہیں جسے جدہ کارنیش کے ساتھ میٹنگز کے طویل دن کے لیے ایک قابل اعتماد چوفیر (ڈرائیور) درکار ہے؟ ہماری پری بکڈ چوفیر سروس کے ساتھ جدہ میں **پریمیم ٹیکسی** تلاش کرنا اب کوئی مسئلہ نہیں رہا۔</p>
                            <p>ہم رائیڈ شیئر ایپس (Rideshare apps) اور عام گلی محلوں کی ٹیکسیوں کا ایک سختی سے اعلیٰ معیار، ہائی اینڈ (High-end) متبادل فراہم کرتے ہیں۔ ہماری فلیٹ (گاڑیوں) میں جدید ترین Mercedes, BMW اور Cadillac ماڈلز شامل ہیں۔ ہم بغیر کسی پریشانی کے ایئرپورٹ پک اپس (جہاں ہمارا ڈرائیور نشان نام کے ساتھ آپ کا انتظار کرتا ہے)، عمرہ کے لیے مکہ تک انٹرسٹی سفر، اور ڈرائیور کے ساتھ ایگزیکٹو وی آئی پی کار رینٹل میں مہارت رکھتے ہیں۔</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-2">
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <Plane className="w-7 h-7 text-emerald-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">KAIA ایئرپورٹ سروس</h3>
                            <p className="text-slate-600 text-base leading-relaxed">آرائیولز (Arrivals) پر شاندار استقبال۔ ہم آپ کی پرواز کو ٹریک کرتے ہیں، لہذا اگر آپ جلدی یا تاخیر سے بھی پہنچیں، آپ کا ڈرائیور انتظار کر رہا ہوگا۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <Users className="w-7 h-7 text-emerald-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">وی آئی پی گروپس</h3>
                            <p className="text-slate-600 text-base leading-relaxed">لگژری Mercedes Vito وینز سے لے کر 25 سیٹوں والی ایگزیکٹو بسوں تک، ہم بڑے گروپس، سفارت کاروں اور خاندانوں کے لیے ٹرانسپورٹ کا انتظام کرتے ہیں۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <MapPin className="w-7 h-7 text-emerald-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">مکہ ڈائریکٹ ٹرانسفرز</h3>
                            <p className="text-slate-600 text-base leading-relaxed">جدہ پہنچیں اور ٹرینوں یا بسوں کے انتظار کے بغیر سیدھے اپنے مکہ کے ہوٹل کا سفر کریں۔ پرائیویٹ اور باوقار سروس۔</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Our VIP Fleet (Integrated User Data) - RTL adapted */}
             <section className="py-24 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 font-urdu border-y-[4px] border-emerald-600">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-400 font-bold tracking-wider mb-2 block uppercase text-sm">ایگزیکٹو انتخاب</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">جدہ ایگزیکٹو گاڑیاں (Fleet)</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            ہم سعودی عرب میں دستیاب بہترین لگژری ماڈلز چلاتے ہیں۔ کارپوریٹ کلائنٹس کو متاثر کرنے یا آپ کے خاندان کے لیے زیادہ سے زیادہ آرام کو یقینی بنانے کے لیے بہترین۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-right">
                        {fleet.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-slate-800 hover:border-emerald-500/50 transition-all group">
                                <div className="bg-emerald-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                    {v.img === 'Car' ? <Car className="w-7 h-7 text-emerald-400" /> : <Users className="w-7 h-7 text-emerald-400" />}
                                </div>
                                <h3 className="text-2xl font-black mb-2">{v.name}</h3>
                                <p className="text-sm font-bold text-emerald-400 mb-6 bg-emerald-900/40 inline-block px-3 py-1 rounded-sm">{v.type}</p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Users className="w-5 h-5 text-emerald-500/80" />
                                        <span>{v.pax} مسافر</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Briefcase className="w-5 h-5 text-emerald-500/80" />
                                        <span>{v.lugg} سامان (Luggages)</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                         <div className="w-5 h-5 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-emerald-500/80 rounded-full"></div>
                                        </div>
                                        <span>خوبصورت اور ٹھنڈا AC</span>
                                    </div>
                                </div>
                                
                                <Link href="/ur/booking/" className="mt-8 w-full flex items-center justify-center gap-2 p-4 font-bold text-white transition-all bg-emerald-700/80 rounded-xl hover:bg-emerald-600 shadow-lg">
                                    یہ گاڑی کوٹیشن حاصل کریں
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Trust Signals & Social Proof */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 font-urdu text-right" dir="rtl">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <EntityTrustSignal 
                            brandName="TaxiServiceKSA Jeddah"
                            description="جدہ کے اندر اور پورے مملکت تک پھیلی ہوئی پیشہ ورانہ، اعلیٰ درجے کی ٹرانسپورٹیشن کے لیے ایک ناگزیر اور انتہائی قابلِ اعتماد نام۔"
                            foundingDate="2016"
                            metrics={[
                                { label: 'فکسڈ کرایہ', value: '100%', icon: DollarSign },
                                { label: 'سپورٹ', value: '24/7', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 relative overflow-hidden shadow-xl">
                            <Shield className="absolute -top-10 -right-10 w-48 h-48 text-emerald-100 opacity-60" />
                            <h3 className="text-3xl font-black text-slate-900 mb-6 relative z-10 leading-snug">عام ٹیکسی ایپس کے بجائے ہمیں کیوں چنیں؟</h3>
                            <p className="text-slate-700 leading-relaxed mb-6 relative z-10 text-lg">
                                رش کے اوقات (Peak times) میں جدہ ایئرپورٹ پر مقامی رائیڈ ایپس استعمال کرنے کا عموماً مطلب لمبا انتظار، غیر متوقع بھاری کرایہ، اور چھوٹی گاڑیاں ہوتی ہیں جو زیادہ سامان کے لیے موزوں نہیں ہوتیں۔
                            </p>
                            <p className="text-slate-700 leading-relaxed text-base relative z-10 font-medium bg-white/60 p-4 rounded-xl border border-emerald-100 italic">
                                ہمارے ساتھ، آپ کو ایک **کنفرم وی آئی پی گاڑی** ملتی ہے۔ ہمارا چوفیر (ڈرائیور) ٹرمینل کے اندر آپ کا استقبال کرتا ہے۔ آپ کو بالکل وہی لگژری گاڑی ملتی ہے جس کی آپ نے درخواست کی تھی (جیسے S-Class یا Escalade)، اور آپ کا طے شدہ کرایہ کبھی تبدیل نہیں ہوتا، جس سے آپ کا سفری تجربہ نہایت شاندار بن جاتا ہے۔
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated MicroSemanticFAQ for "Taxi in Jeddah" */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu text-right" dir="rtl">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-emerald-600 font-bold tracking-wider mb-2 block uppercase text-sm">اکثر پوچھے گئے سوالات</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">جدہ ٹیکسی سروس کی معلومات</h2>
                    </div>
                    <MicroSemanticFAQ
                        contextName="Taxi In Jeddah"
                        faqs={[
                            {
                                question: "کیا میں جدہ ایئرپورٹ سے وی آئی پی ٹیکسی بک کر سکتا ہوں؟",
                                shortAnswer: "جی ہاں، 24/7 استقبال۔",
                                detailedAnswer: "جی ہاں، KAIA سے ایئرپورٹ ٹرانسفر ہماری بنیادی مہارت ہے۔ ہمارا ڈرائیور آرائیولز ہال (Arrivals Hall) پر آپ کے نام کے بورڈ کے ساتھ آپ سے ملے گا، آپ کے سامان کے ساتھ آپ کی مدد کرے گا، اور آپ کو سیدھے جدہ یا مکہ میں آپ کے ہوٹل لے جائے گا۔",
                                perspectives: []
                            },
                            {
                                question: "آپ کے پاس جدہ میں کس قسم کی گاڑیاں ہیں؟",
                                shortAnswer: "پریمیم SUV، سیڈان اور وینز۔",
                                detailedAnswer: "ہماری جدہ کی فلیٹ لگژری اور ایگزیکٹو آرام پر مرکوز ہے۔ ہم پیش کرتے ہیں: Mercedes S-Class, BMW, Genesis, Cadillac Escalade, GMC، اور وسیع و عریض وینز جیسے کہ Mercedes Sprinter اور Vito۔",
                                perspectives: []
                            },
                            {
                                question: "کیا آپ جدہ میں پورے دن کی چوفیر سروس فراہم کرتے ہیں؟",
                                shortAnswer: "جی ہاں، بالکل۔",
                                detailedAnswer: "جی ہاں، اگر آپ کی بزنس میٹنگز ہیں، کارپوریٹ ایونٹس ہیں، یا آپ آسانی سے شہر کی سیر کرنا چاہتے ہیں، تو آپ ایک پیشہ ور ڈرائیور کے ساتھ پورے دن (8 سے 12 گھنٹے لگ بھگ) کے لیے گاڑی کرائے (Rent) پر لے سکتے ہیں۔",
                                perspectives: []
                            },
                            {
                                question: "میں جدہ میں اپنی ٹیکسی کی ادائیگی کیسے کر سکتا ہوں؟",
                                shortAnswer: "ایڈوانس یا کیش۔",
                                detailedAnswer: "آپ ہمارے آن لائن فارم کے ذریعے یا ای میل بھیج کر اپنا فکسڈ ریٹ لاک (Lock) کر سکتے ہیں۔ ہم آپ کی سہولت کو یقینی بنانے کے لیے ادائیگی (Payment) کے لچکدار اور آسان آپشنز پیش کرتے ہیں۔",
                                perspectives: []
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
