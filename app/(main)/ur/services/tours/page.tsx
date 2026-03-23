import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Camera, Clock, Users, Star, Car, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'سعودی عرب ٹورز اور سائیٹ سینگ | تاریخی اور ثقافتی سفر',
    description: 'سعودی عرب میں نجی اور گائیڈڈ ٹورز دریافت کریں۔ مکہ اور مدینہ کی زیارات، العلا (AlUla) کے ثقافتی مقامات، طائف کی سیر، اور جدہ کے تاریخی مقامات۔ مقامی ڈرائیورز کے ساتھ آرام دہ سفر۔',
    keywords: ['سعودی عرب ٹورز', 'مدینہ زیارت ٹور', 'العلا تاریخی سفر', 'طائف سائیٹ سینگ', 'جدہ تاریخی ٹور', 'پرائیویٹ ٹور ڈرائیور KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/tours/',
    },
    openGraph: {
        title: 'سعودی عرب کے ٹورز اور سائیٹ سینگ | پرائیویٹ ٹرانسپورٹ',
        description: 'مملکت کے خوبصورت اور تاریخی مقامات کی سیر۔ قابل اعتماد مقامی ڈرائیورز۔',
        url: 'https://taxiserviceksa.com/ur/services/tours/',
        type: 'website',
    },
};

export default function ToursPageUrdu() {
    const popularTours = [
        {
            name: 'مدینہ زیارات',
            duration: '3-4 گھنٹے',
            spots: ['مسجد قباء', 'جبل احد', 'سات مساجد', 'مسجد قبلتین'],
            price: 'زیارت ریٹ',
            image: '/madinah-prophets-mosque.webp',
            link: '/ur/services/madinah-ziyarat/'
        },
        {
            name: 'مکہ زیارات',
            duration: '3-4 گھنٹے',
            spots: ['جبل النور (غار حرا)', 'جبل ثور', 'منیٰ / عرفات', 'جنت المعلیٰ'],
            price: 'معیاری ریٹ',
            image: '/locations/makkah.webp',
            link: '/ur/locations/makkah-ziyarat/'
        },
        {
            name: 'العلا تاریخی ٹور (AlUla)',
            duration: 'پورا دن (Full Day)',
            spots: ['مدائن صالح (Hegra)', 'ایلیفینٹ راک', 'اولڈ ٹاؤن', 'دادان'],
            price: 'ہیریٹیج ٹور ریٹ',
            image: '/alula-hegra.webp',
            link: '/ur/locations/alula/'
        },
        {
            name: 'طائف سٹی ٹور',
            duration: '4-6 گھنٹے',
            spots: ['شبراء محل', 'الردف پارک', 'طائف روز فیکٹری', 'الہدا پہاڑ'],
            price: 'ماؤنٹین ٹور ریٹ',
            image: '/locations/taif.webp',
            link: '/ur/locations/taif/'
        },
        {
            name: 'جدہ تاریخی ٹور',
            duration: '4 گھنٹے',
            spots: ['البلد (قدیم جدہ)', 'کارنیش', 'کنگ فہد فاؤنٹین', 'فلوٹنگ مسجد'],
            price: 'تاریخی ریٹ',
            image: '/jeddah-airport.webp',
            link: '/ur/locations/jeddah/'
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Saudi Arabia Private Tours (Urdu)",
        "description": "سعودی عرب میں پرائیویٹ سائیٹ سینگ اور تاریخی ٹورز بشمول زیارات اور ہیریٹیج سائٹس۔",
        "areaServed": "Saudi Arabia",
        "serviceType": "TourOperator"
    };

    return (
        <div className="bg-amber-50/30 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="tour-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Rich Arabian Desert/Heritage Hero */}
            <section className="relative bg-gradient-to-tr from-orange-950 via-amber-900 to-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/alula-hegra.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-amber-950/60 to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-orange-500/30 backdrop-blur border border-orange-400/40 text-orange-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-block mb-6 shadow-lg shadow-orange-500/20">
                            مملکت کی دریافت کریں
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                            سعودی عرب میں <br />
                            <span className="text-orange-400">پرائیویٹ ٹورز اور سائیٹ سینگ</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-50/90 max-w-3xl leading-relaxed mb-10 font-light drop-shadow mx-auto md:mr-0 md:ml-auto md:text-justify text-right">
                            ہمارے تجربہ کار پرائیویٹ ڈرائیورز کے ساتھ عرب کی گہری اور شاندار تاریخ کا تجربہ کریں۔ انبیاء کرام کے مقدس راستوں سے لے کر نبطی تہذیب کے قدیم مقبروں تک کے یادگار سفر کا آغاز کریں۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=tours" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-bold text-lg px-10 py-7 rounded-2xl shadow-[0_10px_30px_rgba(234,88,12,0.4)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.6)] transition-all transform hover:-translate-y-1 group border-[2px] border-orange-400/50 w-full font-urdu">
                                    <Camera className="mr-3 w-6 h-6" />
                                     اپنی سیر کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust Signal inside Hero Footer */}
                <div className="max-w-3xl mx-auto mt-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl z-20 relative">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x-reverse md:divide-x divide-white/20">
                        <div className="text-center md:text-right px-4">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-orange-300 mb-1">
                                <MapPin className="w-5 h-5" />
                                <span className="font-bold text-2xl text-white">50+</span>
                            </div>
                            <span className="text-sm text-orange-100/70 font-urdu block">ٹور روٹس</span>
                        </div>
                        <div className="text-center md:text-right px-4 pt-4 md:pt-0 border-r border-white/20">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-orange-300 mb-1">
                                <Users className="w-5 h-5" />
                                <span className="font-bold text-2xl text-white">10k+</span>
                            </div>
                            <span className="text-sm text-orange-100/70 font-urdu block">خوشگوار سیاح</span>
                        </div>
                        <div className="text-center md:text-right px-4 pt-4 md:pt-0 border-r border-white/20">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-orange-300 mb-1">
                                <Star className="w-5 h-5" />
                                <span className="font-bold text-2xl text-white">100%</span>
                            </div>
                            <span className="text-sm text-orange-100/70 font-urdu block">مقامی ماہرین</span>
                        </div>
                     </div>
                </div>
            </section>

             {/* Trending Note */}
             <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-30 font-urdu" dir="rtl">
                <TrendingTravelNote
                    topic="موسمِ بہار - طائف کے پھول (Taif Roses)"
                    status="Seasonal Update"
                    lastUpdated="اسپرنگ 2025"
                    content="موسم بہار (مارچ سے اپریل) میں طائف کے مشہور گلاب کھلنے کا شاندار نظارہ کریں۔ ہمارے 'طائف سٹی ٹور' میں اس خوشبودار موسم کے دوران روایتی عرقِ گلاب کی فیکٹریوں (Distilleries) کے دورے شامل کیے جا سکتے ہیں۔"
                    tags={["TaifRoses", "Nature", "Seasonal"]}
                    linkText="طائف ٹور کوٹیشن حاصل کریں"
                />
            </div>

            {/* Popular Tours Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 font-urdu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 underline decoration-orange-500/30">مقبول ٹور پیکجز</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">روحانی تسکین اور ثقافتی ورثے کو قریب سے جاننے کے لیے ہمارے منتخب کردہ بہترین تجربات۔</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularTours.map((tour, idx) => (
                            <Link href={tour.link} key={idx} className="group block bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-56 bg-slate-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${tour.image}')`}}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 z-10 flex flex-col items-start text-white">
                                        <h3 className="text-2xl font-black mb-1 drop-shadow-md text-right w-full">{tour.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-orange-200 font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                            <span dir="ltr">{tour.price}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-8 text-right">
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-bold bg-amber-50 rounded-lg p-2 w-max shadow-inner flex-row-reverse border border-amber-100">
                                        <Clock className="w-5 h-5 text-orange-600" /> 
                                        <span>دورانیہ: {tour.duration}</span>
                                    </div>
                                    
                                    <div className="space-y-3 mb-8">
                                        {tour.spots.map((spot, sIdx) => (
                                            <div key={sIdx} className="flex items-center justify-start flex-row-reverse gap-3 text-slate-700 font-medium">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(234,88,12,0.8)]"></div>
                                                <span className="text-right">{spot}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex justify-start w-full pt-6 border-t border-slate-100">
                                        <Button variant="ghost" className="text-orange-600 font-bold text-lg p-0 hover:text-orange-700 hover:bg-transparent flex items-center justify-between w-full">
                                            تفصیلات دیکھیں 
                                            <div className="bg-orange-50 p-2 rounded-full group-hover:bg-orange-100 transition-colors">
                                                 <ArrowRight className="w-5 h-5 rotate-180" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

             {/* Semantic Guide Section */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100 font-urdu text-right" dir="rtl">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Tours"
                        points={[
                            {
                                topic: "کیا زیارات کے لیے گائیڈڈ ٹور بہتر ہے یا خود سفر کرنا؟ (Guided vs Self)",
                                commonBelief: "میں بس گوگل میپس (Google Maps) استعمال کر سکتا ہوں۔",
                                reality: "گوگل میپس راستے دکھا سکتے ہیں، لیکن ایک مقامی ڈرائیور کو بہترین پارکنگ، تاریخی پس منظر (سیرت کے لحاظ سے)، اور مقامات کی زیارت کی صحیح ترتیب کا علم ہوتا ہے تاکہ کھلے اوقات میں پہنچا جا سکے اور ہجوم (Crowd) سے بچا جا سکے۔",
                                truthRange: "گائیڈ کی سہولت = بہترین تجربہ",
                                factors: ["بہتر رسائی", "تاریخی حوالوں کی سمجھ", "وقت کی بچت"]
                            },
                            {
                                topic: "العلا (AlUla) ٹور کے قواعد",
                                commonBelief: "میں اپنی گاڑی یا ٹیکسی لے کر مدائن صالح سیدھا جا سکتا ہوں۔",
                                reality: "یونیسکو کی سائٹ ہونے کے ناطے، ہیگرا (مدائن صالح) میں داخلہ محدود ہے۔ آپ کو پہلے سے ٹکٹ خریدنے اور ان کی مخصوص سرکاری بسوں میں سفرِ اندرون کرنا ہوتا ہے۔ ہمارے ڈرائیورز آپ کو ونٹر پارک (Winter Park) کے اجتماعی مقام (آخری حد) تک بحفاظت پہنچاتے ہیں۔",
                                truthRange: "پلاننگ کی ضرورت ہے",
                                factors: ["سرکاری پرمٹ/ٹکٹس", "لمبا فاصلہ", "ٹرانسپورٹ کے اصول"]
                            }
                        ]}
                    />

                    <div className="mt-16">
                        <div className="text-center mb-10">
                             <h3 className="text-3xl font-black text-slate-900 mb-2">ٹورز کے بارے میں حقائق</h3>
                        </div>
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "کیا ڈرائیورز انگلش یا اردو بولتے ہیں؟",
                                    shortAnswer: "جی ہاں، اردو/انگلش/عربی۔",
                                    detailedAnswer: "ہمارے ڈرائیورز کا انتخاب ان کی زبان کی مہارتوں اور مقامات کی بنیادی معلومات فراہم کرنے کی اہلیت پر کیا جاتا ہے۔ تفصیلی تاریخ پر گہری بحث کے لیے ہم لائسنس یافتہ گورنمنٹ گائیڈ کی سفارش کرتے ہیں، لیکن ہمارے ڈرائیور آپ کو بہترین سفری اور عام تاریخی معلومات مہیا کرتے ہیں۔",
                                    perspectives: [
                                        {
                                            role: "سیاحوں کا تجربہ",
                                            icon: "Users",
                                            insight: "ڈرائیور سے اپنی زبان میں گفتگو اور سوال پوچھنے کی صلاحیت (جیسے 'یہ کون سا پہاڑ ہے؟') سفر کو زیادہ دلچسپ بناتی ہے۔"
                                        }
                                    ]
                                },
                                {
                                    question: "کیا مقامات کی ٹکٹس (Tickets) ٹور کے کرائے میں شامل ہوتی ہیں؟",
                                    shortAnswer: "صرف ٹرانسپورٹ شامل ہے۔",
                                    detailedAnswer: "ہماری قیمتیں پرائیویٹ گاڑی، پٹرول، اور ڈرائیور کے الاؤنس پر مشتمل ہوتی ہیں۔ بند عجائب گھروں (Museums) یا العلا جیسی مخصوص سائٹس کی داخلہ فیس آپ کو خود ادا اور آن لائن بک کرنی ہوتی ہے۔ البتہ تاریخی مساجد اور کھلے میدان دیکھنے کی کوئی فیس نہیں ہوتی۔",
                                    perspectives: [
                                        {
                                            role: "بکنگ معلومات",
                                            icon: "Shield",
                                            insight: "ہم آپ کو ٹکٹ خریدنے کی مکمل رہنمائی (Guidance) دے سکتے ہیں، لیکن ہماری ذمہ داری آپ کو سکون اور بروقت منزل پہنچانا ہے۔"
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
