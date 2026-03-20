import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Plane, Building2, Compass, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'وی آئی پی پرائیویٹ ٹرانسفرز اور چوفیر (Chauffeur) سروسز سعودی عرب',
    description: 'سعودی عرب میں تمام تر وی آئی پی اور پرائیویٹ ٹرانسفر کی سروسز دیکھیں۔ ایئرپورٹ پک اپ، انٹرسٹی (اندرونِ ملک) سفر، اور زائرین کے لیے خصوصی عمرہ ٹرانسپورٹ۔',
    keywords: ['وی آئی پی پرائیویٹ ٹرانسفرز', 'چوفیر سروس سعودی عرب', 'عمرہ پرائیویٹ ٹرانسپورٹ', 'جدہ مکہ ٹیکسی', 'ایئرپورٹ پک اپ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/',
    },
};

export default function ServicesPageUrdu() {
    const services = [
        {
            name: 'وی آئی پی عمرہ ٹرانسفرز',
            description: 'زائرین کے لیے جدہ ایئرپورٹ، مکہ مکرمہ اور مدینہ منورہ کے درمیان خصوصی پرائیویٹ ٹرانسپورٹ۔ ہم خاندانوں کے لیے لگژری اور کشادہ گاڑیوں (جہاں سامان کی معقول جگہ ہو) میں مہارت رکھتے ہیں۔',
            icon: Car,
            href: '/ur/services/umrah-transport/',
            features: ['میقات پر خصوصی رہنمائی', 'زائرین کے لیے کشادہ لگژری وینز', 'متعدد زبانیں بولنے والے ڈرائیورز', 'پورے دن کے لیے پرائیویٹ کار'],
            isPopular: true
        },
        {
            name: 'ایئرپورٹ وی آئی پی پک اپ',
            description: 'سعودی عرب کے تمام بڑے ایئرپورٹس پر اعلیٰ Meet-and-Greet سروس۔ ہمارے چوفیرز (ڈرائیورز) ٹرمینل یا گیٹ پر آپ کے نام والے بورڈ کے ساتھ استقبال کے لیے انتظار کرتے ہیں۔',
            icon: Plane,
            href: '/ur/services/airport-transfers/',
            features: ['آپ کے نام والا سائن بورڈ', 'پرواز کی ریئل ٹائم ٹریکنگ', 'وی آئی پی ٹرمینل معاونت', 'لگژری سیڈان اور SUV (گیارہ سیٹر تک)'],
            isPopular: true
        },
        {
            name: 'کارپوریٹ (بزنس) وی آئی پی سفر',
            description: 'بزنس ایگزیکٹوز (شخصیات) کے لیے نہایت شاندار اور قابل اعتماد کارپوریٹ ٹرانسفر سروس۔ معاہدہ شدہ بکنگس میں ماہانہ بلنگز اور ترجیحی فراہمی شامل ہیں۔',
            icon: Building2,
            href: '/ur/services/corporate-travel/',
            features: ['شاندار ایگزیکٹو گاڑیاں', 'ماہانہ انوائسنگ (Billing)', 'بکنگ میں ترجیح', 'بزنس اضلاع اور ایونٹس'],
            isPopular: true
        },
        {
            name: 'ٹؤرز (تاریخی مقامات کا سفر)',
            description: 'سیاحوں کے لیے العلا (AlUla) اور مدائن صالح جیسی یونیسکو (UNESCO) کی جانب سے نامزد قدیم تاریخی و ثقافتی مقامات تک رسائی۔ صحرائی سفاری کے لیے 4x4 گاڑیاں۔',
            icon: Compass,
            href: '/ur/services/heritage-tours/',
            features: ['العلا (Hegra) ٹورز', 'صحرائی 4x4 گاڑیاں', 'انگریزی بولنے والے گائیڈز', 'لچکدار ڈرائیونگ شیڈول'],
            isPopular: true
        },
        {
            name: 'بزنس اور ایگزیکٹو ٹرانسفرز (Business)',
            description: 'ریاض، جدہ اور دمام میں بین الاقوامی کاروباری شخصیات کے لیے بزنس وی آئی پی ٹرانسفرز۔ بزنس اور کانفرنسز میں بروقت رسائی کے لیے سمجھدار اور تربیت یافتہ ڈرائیورز۔',
            icon: Building2,
            href: '/ur/services/business/',
            features: ['KAFD اور اہم بزنس مراکز', 'میٹنگز میں پابندیِ وقت', 'چنیدہ بزنس گاڑیاں', 'فی گھنٹہ کرایہ/بکنگ کی سہولت'],
            isPopular: false
        },
        {
            name: 'ویل چیئر قابلِ رسائی ٹیکسی',
            description: 'بیمار، عمر رسیدہ زائرین یا خصوصی افراد (Special Needs) کے لیے خصوصی طور پر تیار کردہ وہیل چیئر قابلِ رسائی ٹرانسفر سروس۔ جدید تر ہائیڈرولک ریمپس کے ساتھ آرام دہ سفر۔',
            icon: Car,
            href: '/ur/services/wheelchair-taxi/',
            features: ['ریمپ (Ramp) سے لیس جدید گاڑیاں', 'ویل چیئر اور سامان کی محفوظ منتقلی', 'تربیت یافتہ مددگار ڈرائیورز', 'ہسپتال / ہوٹل میں ڈراپ آف'],
            isPopular: false
        },
        {
            name: 'مقاماتِ مقدسہ کی زیارات',
            description: 'مکہ، مدینہ، اور طائف میں گائیڈڈ (Guided) تدریسی اور تاریخی زیارات۔ اپنے خاندان کے ساتھ پُر سکون انداز میں تمام اہم اسلامی مقامات اور مساجد کی زیارت کریں۔',
            icon: MapPin,
            href: '/ur/services/tours/',
            features: ['مکہ زائرین', 'مدینہ کے تاریخی مقامات', 'طائف پہاڑی سفر (تلفاریک)', 'آپ کی سہولت کے مطابق وقت'],
            isPopular: false
        },
        {
            name: 'انٹرسٹی (درمیانی شہر) ٹرانسفرز',
            description: 'سعودی عرب کے تمام بڑے شہروں کو جوڑنے والی ہماری انٹرسٹی ٹرانسفر سروس۔ ریاض سے جدہ، یا جدہ سے مدینہ تک نہایت آرام دہ گاڑیوں میں، ایک فکسڈ (مقررہ) کرایے پر سفر کریں۔',
            icon: Compass,
            href: '/ur/services/intercity/',
            features: ['طویل سفر میں مطلق راحت', 'راستے میں ضرورت کے مطابق بریکس', 'فکسڈ انٹرسٹی ریٹس', 'طویل راستوں پر کارکردگی'],
            isPopular: false
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20 rtl font-urdu border-t-[8px] border-slate-900" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                {/* Hero Section */}
                <div className="text-center md:text-right mb-16">
                    <span className="bg-indigo-600/10 border-indigo-200 border text-indigo-800 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2 mb-6">
                        ہماری تمام سروسز (Services Index)
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-snug">
                        وی آئی پی پرائیویٹ سفری اور<br />
                        <span className="text-indigo-600 underline decoration-indigo-200 decoration-[4px] underline-offset-[12px]">ایگزیکٹو ڈرائیورز (Chauffeur) </span> سروسز
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl md:mx-0 mx-auto leading-relaxed">
                        **Taxi Service KSA** مقامی پبلک ٹرانسپورٹ کا ایک اعلیٰ متبادل (Alternative) فراہم کرتا ہے۔ ہم خاص طور پر بین الاقوامی مہمانوں اور کمپنیوں کے لیے **پری بُکڈ (Pre-booked) پرائیویٹ سفر**، لمبے راستوں پر سفر اور گھنٹوں کے حساب سے گاڑیوں کے کرائے پر مہارت رکھتے ہیں۔
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all h-full flex flex-col group relative text-right">
                            {/* Header */}
                            <div className="p-8 border-b border-slate-100 flex flex-col pt-10">
                                <div className="flex items-start justify-between mb-6 flex-row-reverse w-full">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <service.icon className="w-8 h-8 text-indigo-400" />
                                    </div>
                                    {service.isPopular && (
                                        <span className="bg-amber-100 text-amber-800 border border-amber-200 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">
                                            مقبول سروس
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 mb-4">{service.name}</h2>
                                <p className="text-slate-600 leading-relaxed text-[17px] font-medium min-h-[90px]">{service.description}</p>
                            </div>

                            {/* Features */}
                            <div className="p-8 flex-1 bg-slate-50/50">
                                <h3 className="font-bold text-slate-900 mb-5 text-lg">اہم خصوصیات و سہولیات:</h3>
                                <div className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center justify-start flex-row-reverse gap-3">
                                            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-sm"></div>
                                            <span className="text-slate-700 font-medium text-[16px]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-8 bg-slate-50/50 pt-0">
                                <Link href={service.href} className="block">
                                    <Button className="w-full bg-slate-900 text-white hover:bg-indigo-600 font-bold text-lg h-14 rounded-xl group-hover:shadow-[0_8px_20px_rgba(79,70,229,0.2)] transition-all flex items-center justify-center gap-2">
                                        تفصیلات پڑھیں
                                        <ArrowRight className="w-6 h-6 rotate-180" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note Section (Urdu version of the bottom CTA warning) */}
                <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 rounded-[2.5rem] p-8 md:p-14 text-white text-center shadow-2xl relative overflow-hidden border border-slate-800">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
                    <div className="relative z-10 w-full text-center">
                        <span className="text-indigo-400 font-black tracking-widest text-sm mb-4 block uppercase bg-indigo-950/50 inline-block px-4 py-1.5 rounded-full mx-auto">توجہ فرمائیں (Important Note)</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">شاندار اور طویل مسافتی سفر کی تخصیص</h2>
                        <p className="text-indigo-100/90 mb-10 max-w-3xl mx-auto leading-relaxed text-xl font-light">
                            ہم ایک **سرشار (Dedicated)** پرائیویٹ ٹرانسفر کمپنی ہیں۔ ہم مقامی گلی کوچوں میں ہاتھ دے کر روکی جانے والی ٹیکسی یا چھوٹے، لوکل پوائنٹ ٹو پوائنٹ سفری حل فراہم نہیں کرتے۔ ہماری پوری فلیٹ کا مقصد صرف اور صرف پہلے سے بک شدہ (Pre-booked) ایئرپورٹ ٹرانسفرز، لمبی دوری کے انٹرسٹی سفر، اور دن بھر کی لگژری سہولیات مہیا کرنا ہے۔
                        </p>
                        <Link href="/ur/booking/" className="inline-block">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-indigo-50 hover:text-indigo-700 hover:scale-105 font-black text-xl px-12 py-7 h-auto rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.1)] transition-all">
                                اپنی وی آئی پی گاڑی کے لیے کوٹیشن حاصل کریں
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
