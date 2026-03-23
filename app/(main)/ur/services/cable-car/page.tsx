import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Mountain, Cloud, MapPin, Camera, Car, Star, Navigation, Clock, ArrowRight } from 'lucide-react';

import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'کیبل کار ٹرانسفر سعودی عرب | طائف اور ابہا ٹیلی فریک ٹیکسی',
    description: 'طائف (الہدا) اور ابہا میں کیبل کار (ٹیلی فریک) اسٹیشنز کے لیے آرام دہ ٹیکسی اور ٹرانسفر سروس۔ خوبصورت پہاڑی مقامات تک محفوظ اور قابل اعتماد سفر۔',
    keywords: ['طائف کیبل کار ٹیکسی', 'الہدا ٹیلی فریک ٹرانسپورٹ', 'ابہا کیبل کار رائیڈ', 'سعودی عرب کیبل کار', 'پہاڑی سیاحت ٹیکسی KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/cable-car/',
    },
    openGraph: {
        title: 'طائف اور ابہا کیبل کار ٹرانسفرز | پہاڑی تفریحی مقامات',
        description: 'اسٹیشن تک آرام دہ رسائی۔ طائف اور ابہا کے بلند ترین مقامات کا نظارہ کریں۔',
        url: 'https://taxiserviceksa.com/ur/services/cable-car/',
        type: 'website',
    },
};

export default function CableCarPageUrdu() {
    const locations = [
        {
            name: 'طائف کیبل کار (الہدا)',
            desc: 'یہ سعودی عرب کی سب سے مشہور کیبل کار ہے۔ الہدا کے اونچے پہاڑ سے شروع ہو کر، خطرناک چٹانوں کے درمیان، نیچے (کر ٹورسٹ ولیج - Al Kar Tourist Village) کے حیرت انگیز واٹر پارک تک پرکشش سفر کرواتی ہے۔',
            height: '2000 میٹر سطح سمندر سے بلند',
            rideTime: '20 منٹ (یک طرفہ)',
            image: '/locations/taif.webp'
        },
        {
            name: 'ابہا کیبل کار (گرین ماؤنٹین/جبل الاخضر)',
            desc: 'گرین ماؤنٹین سے ابہا شہر کا دلفریب پینورامک نظارہ۔ شام اور رات کے وقت روشن پہاڑی سے کیبل کار کا سفر ایک رومانوی اور یادگار تجربہ ہے۔',
            height: '2200 میٹر سطح سمندر سے بلند',
            rideTime: '15 منٹ',
            image: '/hero-slide-3.webp'
        },
        {
            name: 'ابہا کیبل کار (حبلہ گاؤں)',
            desc: 'گہری کھائیوں کے درمیان قائم قدیمی اور مشہور "Hanging Village" (لٹکنے والے گاؤں) حبلہ تک رسائی۔ یہ منفرد گاؤں اب صرف اسی کیبل کار کے ذریعے قابلِ رسائی ہے۔',
            height: 'عمودی گہرائی (Vertical Drop)',
            rideTime: '10 منٹ',
            image: '/hero-slide-1.webp' 
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cable Car Station Transfers (Urdu)",
        "description": "طائف اور ابہا کے مشہور کیبل کار تفریحی مقامات تک ٹیکسی ٹرانسفرز۔",
        "areaServed": ["Taif", "Abha"],
        "serviceType": "TouristTransport"
    };

    return (
        <div className="bg-sky-50/50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="cable-car-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Airborne/Mountain Hero Section */}
            <section className="relative bg-gradient-to-t from-slate-950 via-cyan-950 to-sky-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 border-b border-cyan-500/20">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/locations/taif.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-cyan-900/60 to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-sky-500/20 backdrop-blur border border-cyan-400/40 text-cyan-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <Cloud className="w-4 h-4" />
                            بادلوں کا سفر (Telefric)
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-xl text-right">
                            کیبل کار (ٹیلی فریک) <br />
                            <span className="text-cyan-400">اسٹیشن ٹرانسفرز</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100/90 max-w-3xl leading-relaxed mb-10 font-light drop-shadow md:text-justify text-right mx-auto md:mr-0 md:ml-auto">
                            مملکت کے سب سے خوبصورت مقامات اور پہاڑی چوٹیوں پر بنے کیبل کار اسٹیشنز تک آپ کا محفوظ اور آرام دہ سفر۔ طائف اور ابہا کے دلکش نظاروں تک بلا تعطل رسائی۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=cable-car" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500 font-bold text-lg px-10 py-7 rounded-full shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 group border-[2px] border-cyan-400/50 w-full font-urdu">
                                    <Mountain className="mr-3 w-6 h-6" />
                                     ٹیکسی کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust Signal inside Hero */}
                <div className="max-w-3xl mx-auto mt-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl z-20 relative">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x-reverse md:divide-x divide-white/20">
                        <div className="text-center md:text-right px-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 mb-1">
                                <Mountain className="w-5 h-5" />
                                <span className="font-bold text-3xl text-white">3,000+</span>
                            </div>
                            <span className="text-sm text-cyan-100/70 font-urdu block tracking-wide">پہاڑی دورے (Trips)</span>
                        </div>
                        <div className="text-center md:text-right px-4 pt-4 md:pt-0 border-r border-white/20">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 mb-1">
                                <MapPin className="w-5 h-5" />
                                <span className="font-bold text-3xl text-white">4</span>
                            </div>
                            <span className="text-sm text-cyan-100/70 font-urdu block tracking-wide">بڑے اسٹیشنز</span>
                        </div>
                        <div className="text-center md:text-right px-4 pt-4 md:pt-0 border-r border-white/20">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 mb-1">
                                <Star className="w-5 h-5" />
                                <span className="font-bold text-3xl text-white">4.9/5</span>
                            </div>
                            <span className="text-sm text-cyan-100/70 font-urdu block tracking-wide">سیاحوں کی ریٹنگ</span>
                        </div>
                     </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu font-urdu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 font-bold tracking-wider mb-2 block text-sm uppercase">ہمارے روٹس</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 underline decoration-cyan-500/30">بڑے کیبل کار اسٹیشنز</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">ہم آپ کو سیدھا پہاڑی چوٹیوں پر بنے ٹکٹ کاؤنٹرز کے عین سامنے اُتارتے ہیں۔</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((loc, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all group border border-slate-200 hover:border-cyan-400 group">
                                <div className="h-56 bg-slate-200 relative overflow-hidden">
                                     {/* Background with slight zoom on hover */}
                                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${loc.image}')`}}></div>
                                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                                     
                                     <div className="absolute bottom-6 right-6 left-6 z-10 flex flex-col items-start">
                                         <h3 className="text-2xl font-black text-white mb-2 drop-shadow-md text-right w-full leading-snug">{loc.name}</h3>
                                     </div>
                                </div>
                                <div className="p-8 text-right bg-white relative">
                                    {/* Small icon overlap */}
                                    <div className="absolute -top-8 left-8 bg-cyan-600 p-3 rounded-xl shadow-lg shadow-cyan-500/30 text-white">
                                        <Cloud className="w-5 h-5" />
                                    </div>
                                    
                                    <p className="text-slate-600 text-base mb-6 leading-relaxed pt-2 h-[80px]">{loc.desc}</p>
                                    
                                    <div className="flex flex-col gap-3 text-sm font-bold text-sky-800 bg-sky-50 rounded-xl p-4 border border-sky-100">
                                        <div className="flex items-center justify-start flex-row-reverse gap-2">
                                            <Navigation className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                                            <span>اونچائی: {loc.height}</span>
                                        </div>
                                        <div className="flex items-center justify-start flex-row-reverse gap-2 border-t border-sky-200/60 pt-2">
                                            <Clock className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                                            <span>سفر کا تخمینہ: {loc.rideTime}</span>
                                        </div>
                                    </div>

                                    <Link href="/ur/booking?service=cable-car" className="block mt-8 w-full">
                                        <Button className="w-full bg-slate-900 text-white hover:bg-cyan-600 font-bold py-6 text-lg rounded-xl shadow-md transition-colors flex items-center justify-between">
                                            رائیڈ کوٹیشن حاصل کریں
                                            <ArrowRight className="w-5 h-5 rotate-180" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Semantic Guide Section / FAQs */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100 font-urdu text-right" dir="rtl">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-cyan-600 font-bold tracking-wider mb-2 block uppercase text-sm">اہم سوالات</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">کیبل کار سفر سے متعلق معلومات</h2>
                    </div>

                    <MicroSemanticFAQ
                        contextName="Cable Car"
                        faqs={[
                            {
                                question: "کیا ٹیکسی (ڈرائیور) ہمارا انتظار کر سکتا ہے جب تک ہم کیبل کار پر سیر کریں؟",
                                shortAnswer: "جی ہاں، انتظار کا انتخاب (Waiting time available)۔",
                                detailedAnswer: "کیبل کار کے ذریعے راؤنڈ ٹرپ (دو طرفہ) اور منزل پر گزارا ہوا وقت (جیسے الہدا میں الکر واٹر پارک) مجموعی طور پر کچھ گھنٹے لے سکتا ہے۔ آپ ہماری 'Wait and Return' (انتظار کریں اور واپس لائیں) سروس بک کر سکتے ہیں تاکہ جب آپ تھک ہار کر اوپر آئیں، تو آپ کی اپنی پرائیویٹ گاڑي تیار کھڑی ہو۔",
                                perspectives: [
                                    {
                                        role: "ٹورسٹ ٹِپ (Tourist Tip)",
                                        icon: "Clock",
                                        insight: "دور دراز پہاڑی علاقوں (Remote mountains) سے فوری واپسی کی ٹیکسی بکنگ عام طور پر بہت مشکل ہو جاتی ہے۔ اپنے ڈرائیور کو محفوظ رکھنا سمجھداری ہے۔"
                                    }
                                ]
                            },
                            {
                                question: "کیا کیبل کار کا ٹکٹ ٹیکسی کرائے میں شامل ہوتا ہے؟",
                                shortAnswer: "نہیں، صرف ٹرانسپورٹ۔",
                                detailedAnswer: "ہم صرف کیبل کار اسٹیشن تک پہنچانے یا وہاں سے واپس لانے کا کرایہ وصول کرتے ہیں۔ کیبل کار کے ٹکٹوں کی خریداری انتظامیہ کے کاؤنٹر سے ہوتی ہے، جس کی ذمہ داری اور ادائگی مسافر کے ذمے ہے۔",
                                perspectives: [
                                    {
                                        role: "بجٹ (Budgeting)",
                                        icon: "Navigation",
                                        insight: "طائف کر (Village) اور کیبل کار کے ٹکٹس اسٹیشن پر الگ سے فروخت ہوتے ہیں۔ رش سے بچنے کے لیے پیشگی دریافت کرلیں۔"
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* CTA Outro */}
            <section className="bg-cyan-950 rounded-3xl p-12 text-center text-white my-16 max-w-7xl mx-auto mx-4 sm:mx-6 shadow-2xl relative font-urdu border-[4px] border-cyan-800">
                <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] opacity-10 mix-blend-overlay rounded-[1.5rem] bg-cover"></div>
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        سرد اور پُرسکون اونچائیاں آپ کی منتظر ہیں
                    </h2>
                    <p className="text-lg md:text-xl text-cyan-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        آج ہی الہدا یا ابہا کے دورے کے لیے پرائیویٹ کار بک کروا کر اپنے دن کو یادگار بنائیں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 font-bold text-lg px-10 py-6 h-auto shadow-xl rounded-full text-slate-900 border border-transparent">
                            <Link href="/ur/booking?service=cable-car">
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                پہاڑی سفر کی بکنگ
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
