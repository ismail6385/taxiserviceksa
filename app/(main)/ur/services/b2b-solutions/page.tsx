import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
    Building2,
    Handshake,
    Rocket,
    ShieldCheck,
    Users2,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Globe,
    FileText,
    Car
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'B2B اور کارپوریٹ ٹرانسپورٹ سلوشنز | وی آئی پی ٹرانسفر',
    description: 'سعودی عرب میں ٹریول ایجنسیوں، کارپوریٹ کلائنٹس اور ٹور آپریٹرز کے لیے پریمیئر B2B سفری سہولیات۔ پریمیم ٹرانسپورٹ کے ساتھ اپنے کاروبار کو وسعت دیں۔',
    keywords: ['کارپوریٹ ٹرانسپورٹ', 'B2B ٹرانسفر سعودی عرب', 'عمرہ ایجنسی ٹرانسپورٹ', 'وی آئی پی ٹرانسفر بزنس', 'کمپنی ٹرانسپورٹ معاہدہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/b2b-solutions/',
    },
    openGraph: {
        title: 'B2B سفری سہولیات | بزنس لاجسٹکس',
        description: 'کارپوریٹ کمپنیوں اور ٹریول ایجنسیوں کے لیے خصوصی اور قابل اعتماد سفری انتظامات۔ پیشگی بکنگ، فکسڈ ریٹس اور بلنگ کی سہولت۔',
        url: 'https://taxiserviceksa.com/ur/services/b2b-solutions/',
        type: 'website',
    },
};

export default function B2BSolutionsUrdu() {
    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "B2B Transportation Services (Urdu)",
        "description": "Corporate transport solutions, fleet management for Umrah agencies, and corporate chauffeur services in Saudi Arabia.",
        "areaServed": "Saudi Arabia",
        "serviceType": "B2BTransport"
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="b2b-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Premium Corporate Hero Section */}
            <section className="relative bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 border-b border-indigo-500/30">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/chauffeur-service.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right">
                        <span className="bg-blue-500/20 backdrop-blur border border-blue-400/30 text-blue-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-block mb-6 shadow-lg shadow-blue-500/10">
                            کارپوریٹ پارٹنرشپ (B2B)
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                            پریمیم ٹرانسپورٹ کے ذریعے <br />
                            <span className="text-blue-400">اپنا بزنس بڑھائیں</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50/90 max-w-3xl leading-relaxed mb-10 font-light mx-auto md:mr-0 md:ml-auto drop-shadow text-slate-300">
                            ہم عالمی عمرہ ایجنسیوں اور کارپوریٹ کلائنٹس کے لیے پرائیویٹ ٹرانسپورٹ، قابلِ اعتماد فلیٹ (Fleet) اور لگژری سہولیات فراہم کرتے ہیں۔ شفافیت اور معیار ہماری پہچان ہے۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/contact/">
                                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500 font-bold text-lg px-10 py-7 rounded-lg shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 group border border-blue-400/50 w-full sm:w-auto">
                                    <Handshake className="mr-3 w-6 h-6" />
                                    بزنس اکاؤنٹ کے لیے رابطہ کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Services Grid */}
            <section className="py-24 px-4 bg-white text-right font-urdu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider mb-2 block uppercase text-sm">ہماری مہارت</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-blue-500/30">کارپوریٹ خدمات</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">ہمارا B2B ماڈل شفافیت، بروقت فراہمی اور آپ کے VIP کلائنٹس کو اعلیٰ ترین سفری تجربہ دینے کی بنیاد پر بنایا گیا ہے۔</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'عمرہ ایجنسیز کے لیے',
                                desc: 'ہر سائز کے گروپس اور زائرین کے لیے قابل اعتماد ٹرانسپورٹ مینجمنٹ۔ مکہ، مدینہ اور جدہ کے مابین بہترین کوریج۔',
                                color: 'bg-emerald-50 text-emerald-600',
                                border: 'border-emerald-100 hover:shadow-emerald-100'
                            },
                            {
                                icon: Building2,
                                title: 'کارپوریٹ چوفیر (Chauffeur)',
                                desc: 'اعلیٰ عہدے داروں (Executives)، وفود اور وی آئی پی مہمانوں کے لیے جدید SUVs کے ساتھ لگژری چوفیر سروس۔',
                                color: 'bg-blue-50 text-blue-600',
                                border: 'border-blue-100 hover:shadow-blue-100'
                            },
                            {
                                icon: Users2,
                                title: 'گروپ لاجسٹکس',
                                desc: 'بڑے ایونٹس، کانفرنسز اور ٹور گروپس کے لیے HiAce، Staria اور Coaster بسوں کے ذریعے مکمل رابطہ کاری (Coordination)۔',
                                color: 'bg-indigo-50 text-indigo-600',
                                border: 'border-indigo-100 hover:shadow-indigo-100'
                            }
                        ].map((service, idx) => (
                            <div key={idx} className={`p-10 rounded-3xl bg-white border ${service.border} shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}>
                                <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mr-0 md:ml-auto shadow-inner`}>
                                    <service.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8 text-base">{service.desc}</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded justify-start flex-row-reverse">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        <span>فکسڈ نیٹ ریٹس (Fixed Net Rates)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded justify-start flex-row-reverse">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        <span>ترجیحی الاٹمنٹ (Priority Allotment)</span>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Features / Why Choose Us - Dark Section */}
             <section className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden font-urdu text-right border-y border-slate-800">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-blue-400 font-bold tracking-wider mb-2 block text-sm">ہمارے فوائد</span>
                            <h2 className="text-4xl lg:text-5xl font-black mb-10 leading-tight">کارپوریٹ لیڈرز <br /><span className="text-blue-200">ہمیں کیوں چنتے ہیں؟</span></h2>
                            
                            <div className="space-y-8">
                                {[
                                    { icon: BarChart3, title: 'سینٹرلائزڈ بلنگ (مرکزی بلنگ)', desc: 'آپ کی تمام کارپوریٹ سفری سرگرمیوں کے لیے یکجا رسیدیں (Invoices) اور رپورٹس۔' },
                                    { icon: ShieldCheck, title: 'تحفظ اور بھروسہ (Duty of Care)', desc: 'تصدیق شدہ ڈرائیورز اور سخت حفاظتی اصول تاکہ آپ مکمل ذہنی سکون کے ساتھ سفر کر سکیں۔' },
                                    { icon: Rocket, title: 'API انٹیگریشن دستیاب', desc: 'اپنی بکنگ ویب سائٹ یا انجن کو براہ راست ہمارے فلیٹ مینجمنٹ سسٹم کے ساتھ جوڑیں۔' },
                                    { icon: FileText, title: 'ماہانہ بیانات (Statements)', desc: 'اخراجات کو کنٹرول اور مینیج کرنے کے لیے استعمال کی تفصیلی ماہانہ رپورٹس۔' }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-6 items-start bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors">
                                        <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-500/20 shadow-inner">
                                            <feature.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stat Blocks */}
                        <div className="grid grid-cols-2 gap-6 relative">
                            {/* Decorative element */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[3rem] blur-xl -z-10"></div>
                            
                            <div className="space-y-6">
                                <div className="bg-slate-900/80 p-8 py-12 rounded-[2rem] border border-slate-700/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center">
                                    <div className="text-5xl font-black text-blue-400 mb-3 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">99%</div>
                                    <div className="text-slate-300 text-sm font-bold tracking-wider">آن ٹائم آمد</div>
                                </div>
                                <div className="bg-slate-900/80 p-8 py-12 rounded-[2rem] border border-slate-700/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center">
                                    <div className="text-5xl font-black text-white mb-3 drop-shadow-md">150+</div>
                                    <div className="text-slate-300 text-sm font-bold tracking-wider">عالمی پارٹنرز</div>
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="bg-slate-900/80 p-8 py-12 rounded-[2rem] border border-slate-700/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center">
                                    <div className="text-5xl font-black text-white mb-3 drop-shadow-md">24/7</div>
                                    <div className="text-slate-300 text-sm font-bold tracking-wider">B2B سپورٹ ڈیسک</div>
                                </div>
                                <div className="bg-slate-900/80 p-8 py-12 rounded-[2rem] border border-slate-700/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center">
                                    <div className="text-5xl font-black text-indigo-400 mb-3 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">5/5</div>
                                    <div className="text-slate-300 text-sm font-bold tracking-wider">اوسط VIP ریٹنگ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="py-24 px-4 bg-white font-urdu">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 font-urdu">آج ہی ہمارے کارپوریٹ پارٹنر بنیں</h2>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-urdu">
                        ایلیٹ (Elite) ٹریول پارٹنرز کے ہمارے نیٹ ورک میں شامل ہوں اور اپنے کلائنٹس کو مملکتِ سعودیہ میں سب سے زیادہ قابل اعتماد ٹرانسپورٹ سروس فراہم کریں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/ur/contact/" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-8 px-10 rounded-2xl text-xl shadow-xl shadow-blue-500/20 transition-all group font-urdu border border-transparent hover:border-blue-400">
                                B2B نرخ دریافت کریں (Inquire Pricing)
                                <ArrowRight className="ml-0 mr-3 w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full bg-slate-50 border-2 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-900 font-bold py-8 px-10 rounded-2xl text-xl transition-all font-urdu">
                                بزنس ٹیم کو ای میل کریں
                            </Button>
                        </a>
                    </div>
                    <p className="mt-8 text-sm text-slate-400">عموماً 4 کاروباری گھنٹوں کے اندر جواب دے دیا جاتا ہے۔</p>
                </div>
            </section>
        </div>
    );
}
