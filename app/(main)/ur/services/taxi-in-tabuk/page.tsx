import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Users, DollarSign, Shield, Star, Plane, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'ٹیکسی نیوم ٹو تبوک | نیوم اور تبوک پرائیویٹ کار (Taxi in Tabuk)',
    description: 'تبوک میں پرائیویٹ ٹیکسی کے لیے کوٹیشن حاصل کریں۔ تبوک سے نیوم سٹی کے لیے وی آئی پی ٹرانسفرز، لانگ ڈسٹینس سفر اور ایگزیکٹو کارز جیسے کہ GMC اور مرسڈیز۔',
    keywords: ['تبوک سے نیوم ٹیکسی', 'تبوک میں ٹیکسی', 'نیوم ٹو تبوک کار', 'تبوک سے مدینہ ٹیکسی', 'تبوک پرائیویٹ کار'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/taxi-in-tabuk/',
    },
    openGraph: {
        title: 'نیوم اور تبوک میں ٹیکسی | انتہائی محفوظ اور آرام دہ گاڑیاں',
        description: 'سعودی عرب کے شمال میں (نیوم، العلا) طویل بین الشہری سفر کے لیے پرائیویٹ وی آئی پی کارز اور ایگزیکٹو ٹرانسپورٹ۔',
        url: 'https://taxiserviceksa.com/ur/services/taxi-in-tabuk/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/tabuk.webp', alt: 'Premium Taxi service in Tabuk' }],
    },
};

export default function TaxiInTabukPageUrdu() {
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
        "serviceType": "VIP Taxi & Long Distance Transfers (Urdu)",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tabuk"
        },
        "description": "پری بکنگ لگژری ٹیکسی سروس تبوک، سعودی عرب۔ نیوم (NEOM) اور دی لائن پراجیکٹس تک آرام دہ وی آئی پی ٹرانسفرز۔",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on destination"
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu border-t-[8px] border-blue-600" dir="rtl">
            <Script
                id="service-schema-tabuk-taxi-urdu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Custom RTL Hero with Blue/Sky (Tabuk, Neom aesthetic) */}
            <section className="relative bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 border-b border-blue-900/40">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/locations/tabuk.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-blue-500/20 backdrop-blur border border-blue-400/40 text-blue-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <Car className="w-4 h-4" />
                            شمالی سعودی ٹرانسپورٹ
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-xl text-right">
                            تبوک اور نیوم <br />
                            <span className="text-blue-400">میں ٹیکسی</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50/90 max-w-3xl leading-relaxed mb-10 font-light drop-shadow md:text-justify text-right mx-auto md:mr-0 md:ml-auto">
                            نیوم اور شہر کے اہم حصوں کے ماہر۔ آپ کی صفِ اول کی پرائیویٹ ٹیکسی سروس (Tabuk)۔ انٹرسٹی لمبی دوری کے ماہر اور مقامی ڈرائیورز فکسڈ کرایے کے ساتھ۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=tabuk-taxi" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500 font-bold text-lg px-10 py-7 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 group border-[2px] border-blue-400/50 w-full">
                                     نیوم کے لیے گاڑی کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation Menu style */}
            <div className="bg-slate-950 text-blue-800 border-b border-blue-900/30 py-3 px-4 sm:px-6 lg:px-8 font-urdu relative z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-start space-x-2 space-x-reverse text-sm font-bold">
                    <Link href="/ur" className="hover:text-blue-400 text-slate-400 transition-colors">ہوم</Link>
                    <span className="text-blue-800">/</span>
                    <Link href="/ur/services" className="hover:text-blue-400 text-slate-400 transition-colors">سروسز</Link>
                    <span className="text-blue-800">/</span>
                    <span className="text-blue-400">ٹیکسی ان تبوک اور نیوم</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-full md:w-auto">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">تبوک سے اہم روٹس</h2>
                            <p className="text-slate-600">ایک محفوظ، تصدیق شدہ طویل سفر کے لیے تبوک سے اپنی منزل منتخب کریں۔</p>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-row-reverse w-full md:w-auto justify-start">
                            <Link href="/ur/routes/tabuk-neom/">
                                <Button className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-2 border-slate-200 hover:border-blue-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                     تبوک سے نیوم (NEOM)
                                </Button>
                            </Link>
                            <Link href="/ur/routes/tabuk-jeddah/">
                                <Button className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-2 border-slate-200 hover:border-blue-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    تبوک سے جدہ
                                </Button>
                            </Link>
                            <Link href="/ur/routes/tabuk-makkah/">
                                <Button className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white border-2 border-slate-200 hover:border-blue-600 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    تبوک سے مکہ
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
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3 block">ترقی کی جانب تیز رفتار سفر</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                            تبوک کی وی آئی پی (VIP) ٹیکسی سروس
                        </h2>
                        <div className="prose prose-lg text-slate-600 max-w-4xl mx-auto md:mr-0 ml-auto leading-relaxed">
                            <p>تبوک تیزی سے سعودی عرب کی مستقبل کی شاندار ترقی (جیسے **NEOM**) کا مرکزی دروازہ بن رہا ہے۔ چاہے آپ کسی پراجیکٹ کی قیادت کرنے والے بزنس ایگزیکٹو ہوں، یا شمالی عجائبات دریافت کرنے والا خاندان، تبوک میں ایک طویل ہائی وے کے سفر کے لیے ایک ایسی **ٹیکسی** بک کرنا لازم ہے جو انتہائی قابل رسائی، محفوظ اور آرام دہ ہو۔</p>
                            <p>ہم تبوک میں کسی بھی مقام یا ایئرپورٹ سے براہ راست **نیوم، دی لائن (The Line)، العلا**، اور یہاں تک کہ کراس کنٹری (جدہ یا مکہ) کو پرائیویٹ کارز فراہم کرتے ہیں۔ چونکہ شمالی شہروں کے درمیان فاصلے وسیع ہیں، ہم آپ کے سکون کے لیے صرف احتیاط سے برقرار رکھی گئی لگژری سیڈان، VIP SUVs جیسے Escalade اور کشادہ مرسڈیز وینز تعینات کرتے ہیں۔ آپ کا آرام اور تحفظ ہماری اولین ترجیح ہے۔</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-2">
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <Car className="w-7 h-7 text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">تبوک سٹی ٹرانسفرز</h3>
                            <p className="text-slate-600 text-base leading-relaxed">تبوک میں کسی بھی مقام سے آسان پک اپس (Pickups)۔ ہمارے ڈرائیور شہر کو بخوبی جانتے ہیں اور فوری سروس کو یقینی بناتے ہیں۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <MapPin className="w-7 h-7 text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">نیوم (NEOM) کے ماہرین</h3>
                            <p className="text-slate-600 text-base leading-relaxed">ہم طویل دوری کے ماہر چوفیرز فراہم کرتے ہیں جو نیوم کے پراجیکٹس تک ہموار سفر کے لیے درست راستوں کی پہچان رکھتے ہیں۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto md:ml-0">
                                <Shield className="w-7 h-7 text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">طویل سفر کے لیے لگژری</h3>
                            <p className="text-slate-600 text-base leading-relaxed">2 سے زیادہ گھنٹوں کی ڈرائیو کے لیے مکمل سکون درکار ہے۔ ہماری فلیٹ (گاڑیاں) صحرائی راستوں پر بھی فرسٹ کلاس تجربہ فراہم کرتی ہے۔</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Our VIP Fleet (Integrated User Data) - RTL adapted */}
             <section className="py-24 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 font-urdu border-y-[4px] border-blue-600 text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-bold tracking-wider mb-2 block uppercase text-sm">Long-Haul Luxury</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">تبوک ٹرانسپورٹ فلیٹ</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            طویل ہائی ویز پر قطعی سکون کے ساتھ سفر کریں۔ پریمیم SUVs، ایگزیکٹو سیڈان گاڑیاں، اور فیملی منٰی بسوں کے کشادہ آپشنز سے انتخاب کریں۔ سامان کی وسیع جگہ، اور سرد AC۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-right">
                        {fleet.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-slate-900 hover:border-blue-500/50 transition-all group">
                                <div className="bg-blue-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                    {v.img === 'Car' ? <Car className="w-7 h-7 text-blue-400" /> : <Users className="w-7 h-7 text-blue-400" />}
                                </div>
                                <h3 className="text-2xl font-black mb-2">{v.name}</h3>
                                <p className="text-sm font-bold text-blue-400 mb-6 bg-blue-900/40 inline-block px-3 py-1 rounded-sm shadow-sm">{v.type}</p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Users className="w-5 h-5 text-blue-500/80" />
                                        <span>{v.pax} مسافر</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Briefcase className="w-5 h-5 text-blue-500/80" />
                                        <span>{v.lugg} لگج (سامان کی گنجائش)</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                         <div className="w-5 h-5 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500/80 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                                        </div>
                                        <span>آرام دہ اور سرد AC</span>
                                    </div>
                                </div>
                                
                                <Link href="/ur/booking/" className="mt-8 w-full flex items-center justify-center gap-2 p-4 font-bold text-white transition-all bg-blue-700/80 rounded-xl hover:bg-blue-600 shadow-lg border border-blue-500/30">
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
                            brandName="TaxiServiceKSA Tabuk"
                            description="سعودی عرب کے وسیع و عریض شمالی علاقوں اور بالخصوص (NEOM) تبوک سے منسلک مستقبل کے مرکز کے لیے پریمیم کارپوریٹ اور پرائیویٹ لگژری ٹرانسپورٹ فراہم کرنے والا نمائندہ ادارہ۔"
                            foundingDate="2016"
                            metrics={[
                                { label: 'مقامی ڈرائیورز', value: '100%', icon: MapPin },
                                { label: 'طے شدہ کرایہ', value: 'جی ہاں', icon: DollarSign }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 border border-slate-200 relative overflow-hidden shadow-xl">
                            <Shield className="absolute -top-10 -right-10 w-48 h-48 text-blue-100/60" />
                            <h3 className="text-3xl font-black text-slate-900 mb-6 relative z-10 leading-snug">محفوظ، طویل سفر کی مہارت (Long Distance)</h3>
                            <p className="text-slate-700 leading-relaxed mb-6 relative z-10 text-lg">
                                تبوک سے نکلنے والے بین الشہری راستے (Intercity routes) ہائی وے کے طویل سفر کے متقاضی ہیں۔ آپ ان 2 سے 4 گھنٹوں کے تنہا اور لمبے سفر کے لیے عام اور سستی رائیڈ ہیلنگ (Ride-hailing) ایپس پر بھروسہ نہیں کر سکتے۔ 
                            </p>
                            <p className="text-slate-800 leading-relaxed text-base relative z-10 font-medium bg-white/60 p-5 rounded-xl border border-blue-100">
                                ہمارے چوفیرز (ڈرائیورز) مقامی پیشہ ور افراد ہیں جو ہائی وے یا صحرائی گاڑی چلانے کا وسیع اور انتہائی محفوظ تجربہ رکھتے ہیں۔ ہم اس بات کو یقینی بناتے ہیں کہ طویل سفر سے پہلے ہر VIP ٹیکسی، جیسے ہماری GMC یا S-Class، کا بخوبی معائنہ کیا جائے، تاکہ صحرائی آب و ہوا میں بھی آپ کی سلامتی اور مکمل سکون کی ضمانت دی جا سکے۔
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated MicroSemanticFAQ for "Taxi in Tabuk" */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu text-right" dir="rtl">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-blue-600 font-bold tracking-wider mb-2 block uppercase text-sm">اکثر پوچھے گئے سوالات</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">تبوک اور نیوم ٹیکسی سروس</h2>
                    </div>
                    <MicroSemanticFAQ
                        contextName="Taxi In Tabuk"
                        faqs={[
                            {
                                question: "تبوک سے نیوم کا ٹیکسی سفر کتنا طویل ہے؟",
                                shortAnswer: "تقریباً 2 سے 2.5 (ڈھائی) گھنٹے۔",
                                detailedAnswer: "تبوک ایئرپورٹ اور شہر سے نیوم (NEOM) کے مرکزی علاقے کا درمیانی فاصلہ تقریباً 180 کلومیٹر ہے۔ ہماری جدید گاڑیاں اس ڈھائی گھنٹے کے سفر کو نہایت پُرسکون اور پرلطف بناتی ہیں۔",
                                perspectives: []
                            },
                            {
                                question: "کیا میں تبوک سے طویل فاصلے (Long Distance) کے لیے ٹیکسی لے سکتا ہوں؟",
                                shortAnswer: "جی ہاں، بس آن لائن کوٹیشن حاصل کریں۔",
                                detailedAnswer: "جی ہاں، پری بکنگ کے ذریعے۔ ہم لوکل گلیوں کی سروس نہیں دیتے۔ آپ کو ہماری ویب سائٹ یا ای میل کے ذریعے پہلے سے بکنگ (Pre-book) کرنی ہوگی۔ آپ تبوک سے کسی بھی بڑے شہر یا نیوم، العلا جیسے ترقیاتی منصوبوں کے لیے پرائیویٹ کار حاصل کر سکتے ہیں۔",
                                perspectives: []
                            },
                            {
                                question: "کیا تبوک میں خاندانوں کے لیے بڑی چھ سیٹر یا ویگن (SUV) ٹیکسی دستیاب ہیں؟",
                                shortAnswer: "جی ہاں، SUVs اور Vans۔",
                                detailedAnswer: "جی ہاں، بڑے خاندانوں کے لیے ہمارے پاس GMC اور Cadillac Escalade جیسی 7 سیٹوں والی شاندار لگژری گاڑیاں کھڑی ہیں۔ نیز، زیادہ سامان اور بڑے خاندانوں کے لیے Mercedes Vito (7 سیٹر) وین بھی دستیاب ہے۔",
                                perspectives: []
                            },
                            {
                                question: "کیا آپ تبوک سے طے شدہ (Fixed) ٹیکسی کے کرایے پیش کرتے ہیں؟",
                                shortAnswer: "جی ہاں، 100% (Fixed Rates)۔",
                                detailedAnswer: "جی ہاں۔ تبوک سے ہماری تمام طویل فاصلے کی ٹرانسفرز - چاہے نیوم کے لیے ہوں یا جدہ کے لیے - طے شدہ کرایوں پر چلتی ہیں۔ کوئی پوشیدہ چارجز (Hidden charges) یا میٹر کا چکر نہیں۔ بکنگ پر آپ کا کرایہ فکس ہو جاتا ہے۔",
                                perspectives: []
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
