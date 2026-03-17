import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'مکہ ٹو مدینہ ٹیکسی | آن لائن بُکنگ | مکہ میں ٹیکسی (Taxi in Makkah)',
    description: 'مکہ میں بہترین آن لائن ٹیکسی کے لیے کوٹیشن حاصل کریں۔ مکہ سے مدینہ، جدہ ایئرپورٹ اور زیارات کے لیے پرائیویٹ کار سروس۔ مقررہ کرایہ (Fixed Pricing)، وی آئی پی گاڑیاں بمطابق GMC اور Mercedes۔',
    keywords: ['مکہ سے مدینہ ٹیکسی', 'مکہ میں ٹیکسی', 'مکہ ٹیکسی', 'مکہ سے مدینہ ٹیکسی کرایہ', 'مکہ ٹو جدہ ٹیکسی'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/taxi-in-makkah/',
    },
    openGraph: {
        title: 'مکہ میں ٹیکسی | 24/7 پریمیم پرائیویٹ ٹرانسپورٹ',
        description: 'مکہ میں انتہائی قابل اعتماد اور لگژری پرائیویٹ ٹیکسی سروس۔ بین الشہری سفر (Intercity) اور مقامات مقدسہ کی زیارات کے لیے ہمہ وقت دستیاب۔',
        url: 'https://taxiserviceksa.com/ur/services/taxi-in-makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'Taxi in Makkah service' }],
    },
};

export default function TaxiInMakkahPageUrdu() {
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
        "serviceType": "Taxi Service (Urdu)",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Makkah"
        },
        "description": "Premium 24/7 pre-booked taxi and chauffeur services based in Makkah, Saudi Arabia. Covering all domestic routes including Madinah and Jeddah. (Urdu variant)",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on route"
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="service-schema-makkah-taxi-urdu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Premium Gold/Amber Theme for Makkah */}
            <section className="relative bg-gradient-to-tr from-slate-950 via-amber-950 to-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 border-b-[6px] border-amber-600">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-amber-500/20 backdrop-blur border border-amber-400/40 text-amber-200 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2 mb-6">
                            <Star className="w-4 h-4" />
                            پریمیم چوفیر سروس
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl text-right">
                            مکہ معظمہ میں <br />
                            <span className="text-amber-400">ٹیکسی سروس</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-50 max-w-3xl leading-relaxed mb-10 font-light drop-shadow-lg md:text-justify text-right mx-auto md:mr-0 md:ml-auto">
                            حج، عمرہ اور انٹرسٹی سفر کے لیے قابل اعتماد پرائیویٹ گاڑیاں اور وی آئی پی SUVs کی آن لائن بکنگ۔ مقامی تجربہ کار ڈرائیورز اور فکسڈ کرایہ۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=makkah-taxi" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-500 font-bold text-lg px-10 py-7 rounded-xl shadow-[0_10px_20px_rgba(217,119,6,0.3)] hover:shadow-[0_15px_30px_rgba(217,119,6,0.5)] transition-all transform hover:-translate-y-1 group border border-amber-400/50 w-full text-slate-950">
                                     مکہ ٹیکسی کے لیے کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Breadcrumb Navigation Menu style */}
             <div className="bg-slate-900 text-amber-100/70 border-b border-amber-900/30 py-3 px-4 sm:px-6 lg:px-8 font-urdu relative z-30 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-start space-x-2 space-x-reverse text-sm font-bold">
                    <Link href="/ur" className="hover:text-amber-400 transition-colors">ہوم</Link>
                    <span className="text-amber-700">/</span>
                    <Link href="/ur/services" className="hover:text-amber-400 transition-colors">سروسز</Link>
                    <span className="text-amber-700">/</span>
                    <span className="text-amber-500">ٹیکسی ان مکہ</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 bg-amber-50/50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                        <div className="w-full md:w-auto">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">مکہ سے باہر کا سفر کر رہے ہیں؟</h2>
                            <p className="text-slate-600">کرایہ اور راستے کی تفصیلی معلومات کے لیے اپنی منزل کا انتخاب کریں۔</p>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-row-reverse w-full md:w-auto justify-start">
                            <Link href="/ur/routes/makkah-madinah/">
                                <Button className="bg-white text-slate-900 hover:bg-amber-500 hover:text-white border-2 border-slate-200 hover:border-amber-500 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                     مکہ سے مدینہ
                                </Button>
                            </Link>
                            <Link href="/ur/routes/makkah-jeddah/">
                                <Button className="bg-white text-slate-900 hover:bg-amber-500 hover:text-white border-2 border-slate-200 hover:border-amber-500 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    مکہ سے جدہ (ایئرپورٹ)
                                </Button>
                            </Link>
                            <Link href="/ur/routes/makkah-taif/">
                                <Button className="bg-white text-slate-900 hover:bg-amber-500 hover:text-white border-2 border-slate-200 hover:border-amber-500 rounded-full px-6 transition-all shadow-sm font-bold h-12">
                                    مکہ سے طائف
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Introduction and The "Why" */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center md:text-right">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-3 block">آپ کے روحانی سفر کی ٹرانسپورٹ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                            مکہ کی سب سے قابل اعتماد ٹیکسی
                        </h2>
                        <div className="prose prose-lg text-slate-600 max-w-4xl mx-auto md:mr-0 ml-auto leading-relaxed">
                            <p>حج اور عمرہ کے رش والے سیزن کے دوران ایک بھروسہ مند **ٹیکسی (Taxi in Makkah)** تلاش کرنا انتہائی مشکل ہو سکتا ہے۔ چاہے آپ کو حرم کے قریب اپنے ہوٹل (جیسے جبل عمر) سے فوری وی آئی پی ڈراپ آف کی ضرورت ہو یا مدینہ تک ایک آرام دہ طویل سفر کی، ہم ایک پری بکڈ، پرائیویٹ کار سروس فراہم کرتے ہیں جو سڑک پر ٹیکسی روکنے کی پریشانی اور بحث مباحثے کو ختم کرتی ہے۔</p>
                            <p>ہم عام میٹر والی سٹریٹ ٹیکسی کے طور پر کام نہیں کرتے۔ ہم ایک سرشار پرائیویٹ ٹرانسپورٹ پرووائیڈر ہیں جو عمرہ گروپس، خاندانوں، اور وی آئی پی افراد کے لیے پریمیم سفری سہولیات مہیا کرتے ہیں۔ ہماری شفاف فکسڈ قیمتوں (Fixed Price) کا مطلب ہے کہ آپ کو رش کے اوقات میں ڈرائیوروں کے ساتھ کرائے پر بحث نہیں کرنی پڑے گی۔</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-2">
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-amber-100/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                <DollarSign className="w-7 h-7 text-amber-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">طے شدہ کرایہ (Fixed Pricing)</h3>
                            <p className="text-slate-600 text-base leading-relaxed">نماز کے اوقات یا سیزن کے دوران کوئی 'سرج پرائسنگ' نہیں (No Peak Factor)۔ گاڑی میں بیٹھنے سے پہلے اپنا کرایہ ٹھیک سے جان لیں۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-amber-100/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                <Clock className="w-7 h-7 text-amber-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">پابندیِ وقت (Punctual Pickups)</h3>
                            <p className="text-slate-600 text-base leading-relaxed">ہمارے ڈرائیورز کا شیڈول پہلے سے ہی محتاط انداز میں طے کیا جاتا ہے تاکہ آپ کسی فلائٹ یا فرض نماز کے دورانیے سے محروم نہ ہوں۔</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-amber-100/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                <Shield className="w-7 h-7 text-amber-700" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">لائسنس یافتہ پروفیشنلز</h3>
                            <p className="text-slate-600 text-base leading-relaxed">ہر گاڑی مکمل طور پر انشورڈ ہے اور اسے ایک تصدیق شدہ ڈرائیور چلاتا ہے جو مکہ مکرمہ کی ٹریفک اور پیچیدہ سڑکوں سے اچھی طرح واقف ہے۔</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Our VIP Fleet */}
             <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 font-urdu border-y-[4px] border-amber-500/30 text-right">
                <div className="max-w-7xl mx-auto text-right md:text-center pt-2">
                    <div className="text-center mb-16">
                        <span className="text-amber-400 font-bold tracking-wider mb-2 block uppercase text-sm">شاندار گاڑیاں</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">ہماری مکہ V.I.P فلیٹ</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            جدید ترین سیڈانز سے لے کر انتہائی وسیع گروپ ٹرانسپورٹ تک۔ سعودی عرب کے طویل سفر کے دوران آپ کے سکون کے لیے خاص طور پر منتخب کردہ۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-right">
                        {fleet.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-slate-800 hover:border-amber-500/50 transition-all group">
                                <div className="bg-amber-900/40 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mr-0 ml-auto">
                                    {v.img === 'Car' ? <Car className="w-7 h-7 text-amber-400" /> : <Users className="w-7 h-7 text-amber-400" />}
                                </div>
                                <h3 className="text-2xl font-black mb-2">{v.name}</h3>
                                <p className="text-sm font-bold text-amber-500 mb-6 bg-amber-900/30 inline-block px-3 py-1 rounded-sm">{v.type}</p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Users className="w-5 h-5 text-slate-500 rounded-full" />
                                        <span>{v.pax} مسافر</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                        <Briefcase className="w-5 h-5 text-slate-500" />
                                        <span>{v.lugg} بیگز (سامان)</span>
                                    </div>
                                    <div className="flex items-center justify-start flex-row-reverse gap-3 text-slate-300">
                                         <div className="w-5 h-5 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-amber-500/80 rounded-full"></div>
                                        </div>
                                        <span>طاقتور کنڈیشننگ (A/C)</span>
                                    </div>
                                </div>
                                
                                <Link href="/ur/booking/" className="mt-8 w-full flex items-center justify-center gap-2 p-4 font-bold text-slate-950 transition-all bg-amber-500 rounded-xl hover:bg-amber-400 shadow-lg">
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
                            brandName="TaxiServiceKSA Makkah"
                            description="بین الاقوامی عمرہ گروپس، وی آئی پی زائرین، اور شہرِ مقدس کو مسکن بنانے والے کاروباری مسافروں کے لیے اولین پسندیدہ پریمیم ٹرانسفر کا انتخاب۔"
                            foundingDate="2016"
                            metrics={[
                                { label: 'راستوں کے ماہر', value: '100%', icon: MapPin },
                                { label: 'دستیابی', value: '24/7', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-amber-50 rounded-[2.5rem] p-10 lg:p-14 border border-amber-100 relative overflow-hidden shadow-sm">
                            <Star className="absolute -top-10 -right-10 w-48 h-48 text-amber-200 opacity-40 mix-blend-multiply" />
                            <h3 className="text-3xl font-black text-slate-900 mb-6 relative z-10 leading-snug">ہم میٹر کیوں استعمال نہیں کرتے؟</h3>
                            <p className="text-slate-700 leading-relaxed mb-6 relative z-10 text-lg">
                                مکہ مکرمہ میں عام سٹریٹ ٹیکسیاں اکثر میٹر استعمال کرتی ہیں، جو حرم کے ارد گرد بھاری ٹریفک میں پھنسنے پر نمایاں طور پر غیر متوقع اور بہت زیادہ کرایوں کا باعث بن سکتا ہے، خاص طور پر رمضان یا حج کے دوران۔
                            </p>
                            <p className="text-slate-800 leading-relaxed text-base relative z-10 font-bold bg-white/70 p-5 rounded-xl border border-amber-200 shadow-inner">
                                ہماری کمپنی سختی سے سروس کو **مقررہ کرایہ (Fixed Fare)** پر چلاتی ہے۔ ہم پیشگی فیصلہ کرتے ہوئے فاصلے، گاڑی کی قسم، اور روٹنگ کا تجزیہ کرتے ہیں اور آپ کو ایک فکسڈ قیمت دیتے ہیں۔ اگر ہمیں انتہائی ٹریفک جام کا سامنا بھی کرنا پڑے، تو آپ کا کرایہ ایک ریال بھی اوپر نہیں جاتا۔ بغیر کسی کٹوتی یا بحث کے اعتماد۔
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated MicroSemanticFAQ for "Taxi in Makkah" */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu text-right" dir="rtl">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-amber-600 font-bold tracking-wider mb-2 block uppercase text-sm">اکثر پوچھے گئے سوالات</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">مکہ میں ٹیکسی کی معلومات</h2>
                    </div>
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "میں مکہ میں پرائیویٹ ٹیکسی کیسے بک کر سکتا ہوں؟",
                                shortAnswer: "آن لائن ہماری ویب سائٹ یا ای میل سے پری بُک (Pre-book) کریں۔",
                                detailedAnswer: "آپ ہماری ویب سائٹ پر موجود بُکنگ فارم کے ذریعے یا ہمیں واٹس ایپ/ای میل بھیج کر مکہ ٹیکسی سروس براہ راست بک کر سکتے ہیں۔ ہمیں مکہ میں اپنا پک اپ کا مقام، اپنی منزل، تاریخ اور گروپ (خاندان) کی تفصیل بتائیں۔ ہم فوری طور پر آپ کی VIP گاڑی کنفرم کر دیں گے۔",
                                perspectives: []
                            },
                            {
                                question: "کیا آپ مکہ سے مدینہ جانے کے لیے ٹیکسی فراہم کر سکتے ہیں؟",
                                shortAnswer: "جی ہاں، 24/7 سروس دستیاب ہے۔",
                                detailedAnswer: "جی ہاں، یہ ہمارا سب سے مقبول روٹ ہے۔ ہم آپ کے مکہ کے ہوٹل سے براہ راست آپ کی مدینہ کی رہائش گاہ تک انتہائی آرام دہ بین الشہری (Intercity) ٹرانسفر پیش کرتے ہیں۔ آپ ہماری سیڈانز یا بڑی مرسڈیز / GMC SUVs میں سے انتخاب کر سکتے ہیں۔",
                                perspectives: []
                            },
                            {
                                question: "کیا آپ کے پاس مکہ میں خاندانوں کے لیے بڑی گاڑیاں ہیں؟",
                                shortAnswer: "جی ہاں، بڑے خاندانوں کے لیے کشادہ گاڑیاں موجود ہیں۔",
                                detailedAnswer: "جی بالکل۔ ہمارے پاس Cadillac Escalade اور GMC جیسی 7 سیٹوں والی شاندار گاڑیاں ہیں، اس کے علاوہ زیادہ افراد کے لیے Mercedes Vito (7 سواریاں)، اور Mercedes Sprinter (14 سواریاں) جیسی کشادہ آپشنز بھی موجود ہیں، جن میں مسافروں اور سامان دونوں کے لیے زبردست جگہ ہوتی ہے۔",
                                perspectives: []
                            },
                            {
                                question: "کیا مکہ میں آپ کے ٹیکسی کرایے طے شدہ (Fixed) ہیں؟",
                                shortAnswer: "جی ہاں، 100% طے شدہ (Fixed Rates)۔",
                                detailedAnswer: "جی ہاں۔ سڑک پر موجود عام ٹیکسیوں کے برعکس، ہم میٹر کا استعمال نہیں کرتے۔ ہمارے ذریعے بک کی گئی ہر رائیڈ (سفر) کی ایک مقررہ، پہلے سے طے شدہ قیمت ہوتی ہے۔ آپ ٹریفک یا تاخیر کے لیے کوئی اضافی رقم نہیں دیں گے۔",
                                perspectives: []
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
