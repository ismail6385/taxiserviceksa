import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Clock, Shield, Wifi, FileText, CheckCircle2, Car, Star, MapPin, Users, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata: Metadata = {
    title: 'بزنس اور کارپوریٹ وی آئی پی ٹرانسفر KSA | ایگزیکٹو چوفیر (Chauffeur)',
    description: 'سعودی عرب میں کاروباری شخصیات (Business professionals) کے لیے صفِ اول کی کارپوریٹ وی آئی پی ٹرانسفر سروس۔ ایگزیکٹو گاڑیاں، ایئرپورٹ ٹرانسفرز، اور ماہانہ بلنگ کی سہولت۔',
    keywords: ['کارپوریٹ وی آئی پی ٹرانسفر سعودی عرب', 'بزنس ایگزیکٹو ٹرانسفر KSA', 'چوفیر سروس ریاض', 'جدہ بزنس ٹرانسفر', 'وی آئی پی ٹرانسپورٹ سعودی عرب'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/business/',
    },
    openGraph: {
        title: 'کارپوریٹ بزنس ٹرانسفرز | ایگزیکٹو گاڑیاں اور ڈرائیورز',
        description: 'ریاض، جدہ اور دمام میں کاروباری وفود اور ایگزیکٹوز کے لیے انتہائی شاندار اور پرائیویسی پر مبنی سفری سہولیات۔',
        url: 'https://taxiserviceksa.com/ur/services/business/',
        type: 'website',
    },
};

export default function BusinessPageUrdu() {
    const features = [
        {
            icon: Clock,
            title: 'وقت کی پابندی (Punctuality)',
            desc: 'ہم آپ کے وقت کی قدر جانتے ہیں۔ ہمارے ڈرائیورز تمام بزنس بکنگز کے لیے مقررہ وقت سے 15 منٹ پہلے پہنچ جاتے ہیں۔'
        },
        {
            icon: Building2,
            title: 'کارپوریٹ اکاؤنٹس',
            desc: 'رجسٹرڈ کمپنیوں کے لیے ماہانہ انوائسنگ (Invoicing) اور تفصیلی رپورٹس کے ساتھ آسان بلنگ کا طریقہ کار۔'
        },
        {
            icon: Shield,
            title: 'مکمل رازداری (Confidentiality)',
            desc: 'پیشہ ور اور سمجھدار ڈرائیورز جنہیں سفر کے دوران آپ کی حساس گفتگو اور پرائیویسی کا احترام کرنے کی خاص تربیت دی گئی ہے۔'
        },
        {
            icon: Wifi,
            title: 'گاڑی میں وائی فائی (WiFi)',
            desc: 'دورانِ سفر کام جاری رکھنے کے لیے ہماری ایگزیکٹو فلیٹ میں تیز رفتار انٹرنیٹ کی سہولت (درخواست پر) دستیاب ہے۔'
        }
    ];

    const fleet = [
        { name: 'Mercedes S-Class', type: 'فرسٹ کلاس', capacity: '3 مسافر' },
        { name: 'BMW 7 Series', type: 'بزنس کلاس', capacity: '3 مسافر' },
        { name: 'GMC Yukon', type: 'ایگزیکٹو SUV', capacity: '6 مسافر' },
        { name: 'Lexus ES', type: 'پریمیم سیڈان', capacity: '3 مسافر' }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate VIP Transfer KSA (Urdu)",
        "description": "سعودی عرب میں بزنس ٹریولرز کے لیے ایگزیکٹو ٹرانسپورٹ سروسز۔",
        "areaServed": "Saudi Arabia",
        "serviceType": "VIP Transport"
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Premium Business Hero Theme */}
            <section className="relative bg-gradient-to-tr from-slate-950 via-gray-900 to-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 border-b-2 border-slate-800">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right flex flex-col items-center md:items-end">
                        <span className="bg-gray-100/10 backdrop-blur border border-gray-400/20 text-gray-200 font-bold tracking-wider pt-2 uppercase text-sm px-6 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
                            <Briefcase className="w-4 h-4 text-emerald-400" />
                            بزنس کلاس ٹریول
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                            ایگزیکٹو کارپوریٹ <br />
                            <span className="text-emerald-500">سفری حل (Transport Solutions)</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-light mx-auto md:mr-0 md:ml-auto drop-shadow-md text-right md:text-justify font-urdu">
                            سعودی عرب کے اندر ہموار اور قابلِ اعتماد کاروباری ٹرانسپورٹ۔ ریاض، جدہ اور دمام میں ایک میٹنگ سے دوسری میٹنگ یا ایئرپورٹ تک ہمارے پروفیشنل ڈرائیورز پر بھروسہ کریں۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-sm md:max-w-none ml-auto">
                            <Link href="/ur/booking?service=business" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1 group border border-emerald-400/50 w-full">
                                    <Car className="mr-3 w-6 h-6" />
                                    کارپوریٹ گاڑی کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             <div className="max-w-5xl mx-auto -mt-8 relative z-30 px-4 sm:px-6 mb-16">
                 <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Corporate"
                        description="آپ کے شیڈول کی پابندی کرتے ہوئے، سعودی کاروباری نقل و حرکت میں پریمیم گاڑیوں اور تربیت یافتہ چوفیرز کے ساتھ صفِ اول کا ادارہ۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'کارپوریٹ کلائنٹس', value: '500+', icon: Building2 },
                            { label: 'بروقت رسائی کی شرح', value: '99.8%', icon: Clock },
                            { label: 'پریمیم گاڑیاں', value: '100+', icon: Car }
                        ]}
                    />
                 </div>
            </div>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-wider mb-2 block uppercase text-sm">ہمارا معیار</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 underline decoration-emerald-500/30">کاروباری ادارے ہمیں کیوں چنتے ہیں؟</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">جدید کارپوریٹ سفر کے تقاضوں کے عین مطابق مخصوص اور بھرپور سپورٹ۔</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all group text-right">
                                <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <f.icon className="w-8 h-8 text-emerald-700" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-600 text-base leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white font-urdu border-y-[6px] border-emerald-600">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-emerald-400 font-bold tracking-wider mb-2 block uppercase text-sm">شاندار گاڑیاں</span>
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">ایگزیکٹو فلیٹ (Executive Fleet)</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">سعودی عرب میں دستیاب بہترین لگژری ماڈلز۔ آپ کے کارپوریٹ مہمانوں کو متاثر کرنے یا وی آئی پی کلائنٹس کے استقبال کے لیے بہترین انتخاب۔</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fleet.map((car, i) => (
                            <div key={i} className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-emerald-500/50 transition-all text-right">
                                <div className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-3 bg-emerald-900/40 inline-block px-3 py-1 rounded-sm">{car.type}</div>
                                <h3 className="text-2xl font-black mb-3">{car.name}</h3>
                                <div className="text-slate-300 text-sm flex items-center justify-start flex-row-reverse gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-700">
                                    <Users className="w-5 h-5 text-emerald-500" /> 
                                    <span>گنجائش: {car.capacity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Semantic FAQ Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 font-urdu text-right" dir="rtl">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-emerald-600 font-bold tracking-wider mb-2 block uppercase text-sm">اکثر پوچھے گئے سوالات</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">پرائیویٹ بزنس اکاؤنٹس کی معلومات</h2>
                    </div>

                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "میں کارپوریٹ وی آئی پی اکاؤنٹ کیسے کھول سکتا ہوں؟",
                                shortAnswer: "کارپوریٹ سیلز ٹیم سے رابطہ کریں۔",
                                detailedAnswer: "براہ کرم اپنی کمپنی کی تفصیلات کے ساتھ ہماری کارپوریٹ سیلز ٹیم کو info@taxiserviceksa.com پر ای میل کریں۔ ہم آپ کی ضروریات کا جائزہ لے کر ایک مختص بکنگ پورٹل اور کریڈٹ ٹرمز (Credit Terms) کے ساتھ آپ کا اکاؤنٹ ترتیب دیں گے۔",
                                perspectives: [
                                    {
                                        role: "اکاؤنٹ مینیجر کی رائے",
                                        icon: "Briefcase",
                                        insight: "رجسٹرڈ کارپوریٹ اکاؤنٹس کو بکنگ میں اولیت (Priority dispatch) اور زیادہ استعمال پر رعایتی قیمتیں دی جاتی ہیں۔"
                                    }
                                ]
                            },
                            {
                                question: "کیا آپ اخراجات (Expense) کلیم کرنے کے لیے رسیدیں فراہم کرتے ہیں؟",
                                shortAnswer: "جی ہاں، فوری ڈیجیٹل رسیدیں۔",
                                detailedAnswer: "ہر سفر کے فوراً بعد آپ کے ای میل پر ایک آٹومیٹک ڈیجیٹل انوائس (رسید) بھیجی جاتی ہے۔ کارپوریٹ اکاؤنٹس کے لیے، ہم مہینے کے آخر میں تمام اسفار کی یکجا اور تفصیلی ماہانہ اسٹیٹمنٹ (Statement) فراہم کرتے ہیں۔",
                                perspectives: [
                                    {
                                        role: "اکاؤنٹس افسر (Finance)",
                                        icon: "FileText",
                                        insight: "ہماری تمام انوائسز ٹیکس (VAT) کی واپسی اور آڈٹ کے لیے مکمل طور پر درست فارمیٹ میں بنائی جاتی ہیں۔"
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'ایئرپورٹ ٹرانسفرز',
                        description: 'آپ کے ایگزیکٹوز اور مہمانوں کے لیے ایئرپورٹ پر قابل اعتماد استقبال (Meet & Greet)۔',
                        href: '/ur/services/airport-transfers/',
                        icon: Star
                    },
                    {
                        name: 'انٹرسٹی ٹریول (دو شہروں کے درمیان)',
                        description: 'مختلف شہروں میں قائم برانچوں کے درمیان پُرسکون اور آرام دہ سفر۔',
                        href: '/ur/services/intercity/',
                        icon: MapPin
                    }
                ]}
                title="متعلقہ کارپوریٹ خدمات"
                description=""
            />
        </div>
    );
}
