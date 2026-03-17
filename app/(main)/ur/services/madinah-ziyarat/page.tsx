import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Moon, Clock, MapPin, CheckCircle2, Car, Users, Star, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'مدینہ زیارات ٹیکسی سروس | مقامات مقدسہ کا ٹور (Ziyarah)',
    description: 'مدینہ منورہ میں زیارات کے لیے بہترین ٹیکسی سروس۔ مسجد قباء، جبل احد، سات مساجد (خندق) اور قبلتین کا دورہ بااخلاق مقامی ڈرائیورز کے ساتھ فکسڈ ریٹس پر کوٹیشن حاصل کریں۔',
    keywords: ['مدینہ زیارات', 'زیارت ٹیکسی مدینہ', 'مسجد قباء ٹیکسی', 'جبل احد کا دورہ', 'مدینہ کے مقدس مقامات کی ٹرانسپورٹ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/madinah-ziyarat/',
    },
    openGraph: {
        title: 'مدینہ زیارات پرائیویٹ ٹیکسی | دینی مقامات کی سیر',
        description: 'مدینہ منورہ میں اسلامی مقامات اور زیارات کا مسنون سفر۔ قابل اعتماد ڈرائیورز اور فکسڈ پیکجز۔',
        url: 'https://taxiserviceksa.com/ur/services/madinah-ziyarat/',
        type: 'website',
    },
};

export default function MadinahZiyaratPageUrdu() {
    const packages = [
        {
            name: 'معیاری زیارت (Standard)',
            duration: '2 سے 3 گھنٹے',
            price: 'ZIYARAT RATE',
            sites: ['مسجد قباء', 'جبل احد (شہدائے احد)', 'مسجد قبلتین', 'سات مساجد (میدانِ خندق)'],
            desc: 'یہ وہ بنیادی اور مسنون زیارات ہیں جو ہر سال لاکھوں زائرین کرتے ہیں۔ اس میں وقت کی بچت اور اہم ترین مقامات شامل ہیں۔'
        },
        {
            name: 'تفصیلی زیارت (Extended)',
            duration: '4 سے 5 گھنٹے',
            price: 'EXTENDED RATE',
            sites: ['معیاری زیارت کے تمام مقامات، اور مزید:', 'بئر عثمان (حضرت عثمان کا کنواں)', 'کھجوروں کا باغ اور مارکیٹ', 'قرآن پرنٹنگ پریس', 'جنت البقیع (باہر سے)'],
            desc: 'جن زائرین کے پاس وقت زیادہ ہوتا ہے، ان کے لیے مدینہ کی تاریخ میں گہرا غوطہ زن ہونے اور اضافی مقامات دیکھنے کا بہترین پیکج۔'
        },
        {
            name: 'زیارتِ بدر (میدان بدر)',
            duration: '5 سے 6 گھنٹے',
            price: 'BADAR RATE',
            sites: ['تاریخی غزوہ بدر کا میدان', 'شہدائے بدر کے مزارات', 'العریش مسجد', 'مدینہ سے بدر کا سفر (تقریباً 150 کلومیٹر)'],
            desc: 'مدینہ شہر سے باہر، اسلام کی پہلی فیصلہ کن جنگ کے مقام کا تاریخی سفر۔ ایک پُرسکون اور روحانی تجربہ۔'
        }
    ];

    const faqs = [
        {
            question: "کیا ہم اپنی مرضی سے زیارات کی فہرست (List) تبدیل کر سکتے ہیں؟",
            answer: "جی ہاں، یہ بالکل ممکن ہے۔ اوپردیے گئے پیکجز محض ہماری تجویز ہیں۔ اگر آپ کسی خاص مقام پر زیادہ دیر رکنا چاہتے ہیں یا کوئی مقام شامل/نکالنا چاہتے ہیں تو ڈرائیور کو بتا سکتے ہیں۔ کرایہ گاڑی کے استعمال اور وقت کے حساب سے طے ہوگا۔"
        },
        {
            question: "خواتین کے لیے قبرستان کی زیارت کی کیا پابندیاں ہیں؟",
            answer: "جنت البقیع اور شہدائے احد کے قبرستانوں کے اندر عموماً صرف مردوں کو جانے کی اجازت ہوتی ہے۔ خواتین باہر کی جالیوں اور باؤنڈری وال کے پاس کھڑے ہو کر سلام پیش کر سکتی ہیں۔ ہمارے ڈرائیورز ان آداب سے بخوبی واقف ہیں اور گاڑی مناسب جگہ پارک کرتے ہیں۔"
        },
        {
            question: "زیارات کے لیے صبح کا وقت بہتر ہے یا شام کا؟",
            answer: "صبح کا وقت (صبح 7 سے 10 بجے) زیارات کے لیے سب سے بہترین اور مسنون مانا جاتا ہے۔ اس وقت دھوپ کم ہوتی ہے، ہجوم نسبتاً کم ہوتا ہے اور تصویر کشی کے لیے روشنی بہترین ہوتی ہے۔"
        },
        {
            question: "کیا مسجد قباء میں نفل پڑھنے کے لیے کافی وقت دیا جاتا ہے؟",
            answer: "مسجد قباء کے بارے میں حدیث ہے کہ گھر سے وضو کر کے اس میں دو رکعت پڑھنا عمرے کے برابر ہے۔ اس مسنون عمل کی ادائیگی کے لیے ہم کھلے دل سے (تقریباً 30 سے 45 منٹ) وقت دیتے ہیں تاکہ آپ سکون سے عبادت کر سکیں۔"
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Madinah Ziyarat Service (Urdu)",
        "description": "مدینہ منورہ میں زیارات اور مقامات مقدسہ کے لیے گائیڈڈ آرام دہ ٹیکسی ٹورز۔",
        "areaServed": "Madinah",
        "serviceType": "ReligiousTour"
    };

    return (
        <div className="bg-slate-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="ziyarat-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Premium Emerald Hero */}
            <section className="relative bg-gradient-to-tr from-emerald-950 via-green-900 to-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/madinah-prophets-mosque.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right">
                        <span className="bg-emerald-500/20 backdrop-blur border border-emerald-400/30 text-emerald-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-block mb-6 shadow-lg shadow-emerald-500/10">
                            ایک بابرکت اور روحانی سفر
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                            مدینہ منورہ کی <br />
                            <span className="text-emerald-400">تاریخی زیارات</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl leading-relaxed mb-10 font-light mx-auto md:mr-0 md:ml-auto drop-shadow">
                            تاريخ اور سنتِ رسولﷺ کے نقشِ قدم پر چلیں۔ مسجد قباء کا ثواب، جبل احد پر سلام اور غزوہ خندق کے مقامات۔ ہماری پُرسکون اور آرام دہ ٹرانسپورٹ کے ساتھ اپنے اس سفر کو یادگار بنائیں۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=ziyarat">
                                <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1 group border-[3px] border-emerald-400/30 w-full sm:w-auto">
                                    <Moon className="mr-3 w-6 h-6" />
                                    زیارت کوٹیشن حاصل کریں
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform rotate-180" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Quick Highlight Cards */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xl flex items-center gap-4">
                        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <Moon className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">25,000+ زیارات</h3>
                            <p className="text-sm text-slate-500">کامیابی سے مکمل کروائی گئیں</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xl flex items-center gap-4">
                        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <MapPin className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">15+ اہم مقامات</h3>
                            <p className="text-sm text-slate-500">تاریخی مساجد اور باغات کی کوریج</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xl flex items-center gap-4">
                        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <ShieldCheck className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">اعتماد و احترام</h3>
                            <p className="text-sm text-slate-500">مقدس مقامات کے تقدس کا خاص خیال</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-wider mb-2 block">ہمارے انتخاب</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-emerald-500/30">مدینہ زیارات کے خصوصی پیکجز</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            ہم نے زائرین کی سہولت اور وقت کی دستیابی کے لحاظ سے مختلف پیکجز ترتیب دیے ہیں، تاکہ آپ اپنی مرضی سے بہترین انتخاب کر سکیں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-2xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-emerald-600 font-sans text-white px-5 py-2 rounded-bl-2xl font-black tracking-wider text-sm shadow-md">
                                    {pkg.price}
                                </div>
                                
                                <h3 className="text-3xl font-black text-slate-900 mb-4 mt-4">{pkg.name}</h3>
                                
                                <div className="flex justify-start flex-row-reverse mb-6">
                                    <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-md text-sm font-bold shadow-sm">
                                        <span>{pkg.duration}</span>
                                        <Clock className="w-4 h-4" />
                                    </div>
                                </div>
                                
                                <p className="text-slate-600 mb-8 leading-relaxed text-right md:text-lg">{pkg.desc}</p>
                                
                                <div className="bg-white rounded-2xl p-5 border border-slate-100 mb-8">
                                    <ul className="space-y-4">
                                        {pkg.sites.map((site, s) => (
                                            <li key={s} className="flex items-center gap-3 text-slate-800 font-bold justify-start flex-row-reverse">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                                                <span className="text-right">{site}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href="/ur/booking?service=ziyarat" className="block w-full">
                                    <Button className="w-full bg-slate-900 text-white hover:bg-emerald-600 text-lg py-6 font-bold rounded-xl shadow-lg transition-colors">
                                        آج ہی کوٹیشن حاصل کریں
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Guidance Highlights Tabular / Alert Style */}
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
                <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-sm flex flex-col md:flex-row gap-8 items-start justify-between">
                    <div className="flex-1 w-full text-right">
                         <div className="flex items-center gap-3 justify-end flex-row w-full mb-4">
                            <h3 className="text-2xl font-black text-emerald-900">مسجد قباء میں وقت کا تعین</h3>
                            <BookOpen className="w-6 h-6 text-emerald-600" />
                        </div>
                        <p className="text-emerald-800 leading-relaxed mb-4 text-lg">
                            "جولوگ مسجد قباء کو صرف ایک مختصر اسٹاپ سمجھتے ہیں، انہیں یہ جان لینا چاہیے کہ گھر سے وضو کر کے قباء جانا سنت ہے۔ ہمارے ڈرائیور اس بات کو سمجھتے ہوئے جلد بازی نہیں کرتے۔ نفل کی ادائیگی تک بغیر کسی دباؤ (Pressure) کے آپ کا انتظار کیا جاتا ہے۔"
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-900 font-bold tracking-wider uppercase text-sm px-5 py-2 rounded-full inline-block mb-4 border border-emerald-200">رہنمائی</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-emerald-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-slate-200 px-6 shadow-sm hover:border-emerald-300 transition-all data-[state=open]:border-emerald-500">
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

             {/* Related CTA End */}
             <section className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-12 text-center text-white my-16 max-w-7xl mx-auto mx-4 sm:mx-6 shadow-2xl overflow-hidden relative font-urdu">
                 <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg-dark.webp')] bg-cover mix-blend-overlay"></div>
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md">
                        زیارات کے بعد مکہ واپسی کی تیاری؟
                    </h2>
                    <p className="text-lg md:text-xl text-emerald-50/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        مدینہ منورہ میں قیام کے احرٰی دنوں کے بعد ہم آپ کو واپس مکہ یا جدہ ائیرپورٹ تک آرام دہ ٹرانسپورٹ فراہم کرتے ہیں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500 font-black text-lg px-10 py-6 h-auto shadow-xl rounded-full border border-emerald-500/50">
                            <Link href="/ur/routes/makkah-madinah/">
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                مدینہ سے مکہ ٹرانسفر
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 font-urdu">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-100 bg-white" />
            </div>
        </div>
    );
}
