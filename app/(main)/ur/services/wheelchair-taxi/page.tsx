import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Accessibility, Heart, Shield, Clock, Phone, UserCheck, Car, ArrowRight, UserPlus } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'وہیل چیئر قابل رسائی ٹرانسپورٹ کسا | بزرگوں اور معذورین کی ویل چیئر ٹیکسی',
    description: 'سعودی عرب میں وہیل چیئر استعمال کرنے والے بزرگوں اور معذور افراد کے لیے محفوظ ٹرانسفر سروس۔ طبی معائنے، عمرہ اور ایئرپورٹ کے لیے خصوصی خیال والی ٹرانسپورٹ۔',
    keywords: ['وہیل چیئر ٹرانسفر', 'عمرہ بزرگوں کی ٹرانسپورٹ', 'ویل چیئر ٹیکسی سعودی عرب', 'ہسپتال ٹرانسفر سروس', 'معذور افراد ٹرانسپورٹ کسا'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/wheelchair-taxi/',
    },
    openGraph: {
        title: 'ویل چیئر قابلِ رسائی وی آئی پی ٹرانسفر | آرام اور دیکھ بھال',
        description: 'بیماروں، بزرگوں، اور معذورین کی آسانی کے لیے کشادہ گاڑیاں اور تعاون کرنے والے ڈرائیورز کا انتظام۔',
        url: 'https://taxiserviceksa.com/ur/services/wheelchair-taxi/',
        type: 'website',
    },
};

export default function WheelchairTaxiPageUrdu() {
    const features = [
        { icon: Accessibility, title: "کشادہ گاڑیاں", desc: "ہماری GMC/H-1 جیسی کشادہ گاڑیاں جن کے پچھلے حصے (Trunk) میں فولڈنگ وہیل چیئر محفوظ طریقے سے رکھنے کی کافی جگہ موجود ہوتی ہے۔" },
        { icon: Heart, title: "ڈرائیور کا تعاون", desc: "ہمارے ڈرائیورز کو خاص تربیت دی گئی ہے تاکہ وہ معذور مسافر کے گاڑی میں بیٹھنے اور اُترنے میں احترام کے ساتھ جسمانی مدد کر سکیں۔" },
        { icon: Clock, title: "ہسپتال اور انتظار کی سہولت", desc: "چیک اپ، اطباء (Doctors) سے ملاقات اور کلینکس کے دورے کے دوران صبر سے انتظار کی سہولت۔" },
        { icon: Shield, title: "حفاظت اولین ترجیح", desc: "بیمار اور حساس مسافروں کو جھٹکوں (Jerks) سے بچانے کے لیے نہایت احتیاط والی اور نرم ڈرائیونگ۔" }
    ];

    const faqs = [
        {
            question: "کیا آپ کی گاڑیوں میں وہیل چیئر کے چڑھنے کے لیے ریمپ (Ramp) یا لفٹ موجود ہے؟",
            answer: "موجودہ وقت میں ہماری فلیٹ (GMC Yukon, Hyundai H1) میں ریمپ یا ہائیڈرولک لفٹ موجود نہیں ہے۔ ہم صرف فولڈ ہونے والی وہیل چیئرز (Foldable Wheelchairs) ایڈجسٹ کرتے ہیں جو گاڑی کی ڈگی یا پچھلی سیٹوں پر رکھی جاتی ہیں۔ مسافر کو گاڑی کی سیٹ پر بیٹھنے میں ڈرائیور مکمل مدد فراہم کرتا ہے۔ اس لیے یہ سروس ان مسافروں کے لیے ہے جو سیٹ پر چڑھ سکیں۔"
        },
        {
            question: "کیا ڈرائیور وہیل چیئر کو حرم (مکہ/مدینہ) کے اندر لے جا کر خود چلاتا ہے؟",
            answer: "نہیں، ہماری سروس صرف پک اور ڈراپ (Point-to-point) ٹرانسپورٹ ہے۔ ڈرائیور آپ کو حرم شریف کے ان قریبی مقامات پر اتارے گا جہاں سے لفٹ یا ریمپ (Ramp) شروع ہوتے ہیں تاکہ اندر داخل ہونا آسان ہو۔ حرم کے اندر مفت وہیل چیئرز اور حکومت کے مقرر کردہ پیڈ پُشرز (Pushers/جو وہیل چیئر چلاتے ہیں) موجود ہیں، آپ ان کی خدمات حاصل کر سکتے ہیں۔"
        },
        {
            question: "کیا ہسپتال یا کلینک میں دیر ہونے پر ڈرائیور انتظار کرتا ہے؟",
            answer: "جی ہاں، ہم ہسپتال یا ڈاکٹروں کی اپائنٹمنٹس کے لیے اپنی سروس فراہم کرتے ہیں۔ ڈرائیور آپ کو ہسپتال چھوڑ کر انتظار کرے گا اور جب تک آپ کو ضرورت ہوگی وہ دستیاب رہے گا۔ بکنگ کے وقت اپنے متوقع (Expected) وقت کا ذکر ضرور کریں۔"
        },
        {
            question: "بزرگوں کے عمرہ ٹرانسفر کے لیے کونسی گاڑی تجویز کی جاتی ہے؟",
            answer: "بزرگوں کے لیے ہم عام سیڈان (Camry وغیرہ) کی بجائے کشادہ گاڑیاں (GMC Yukon یا Hyundai H1) شدت سے تجویز کرتے ہیں، تاکہ پیروں کے لیے جگہ (Legroom) زیادہ ہو، سامان اور وہیل چیئر رکھنے میں کوئی تنگی نہ ہو، اور سفر بغیر تھکاوٹ کے مکمل ہو۔"
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Wheelchair Accessible Taxi Service (Urdu)",
        "description": "ان مسافروں کے لیے مخصوص ٹرانسپورٹ جنہیں چلنے پھرنے میں دشواری کا سامنا ہو۔ نرم ڈرائیونگ اور فولڈ ایبل وہیل چیئر کی جگہ۔",
        "areaServed": "Saudi Arabia",
        "serviceType": "MedicalTransport"
    };

    return (
        <div className="bg-sky-50 min-h-screen rtl font-urdu" dir="rtl">
            <Script
                id="accessible-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Premium Hero Section - Healthcare/Care theme (Teal/Sky) */}
            <section className="relative bg-gradient-to-tr from-teal-950 via-cyan-900 to-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-0">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-right">
                    <div className="mb-10 text-center md:text-right">
                        <span className="bg-teal-500/20 backdrop-blur border border-teal-400/30 text-teal-100 font-bold tracking-wider uppercase text-sm px-6 py-2 rounded-full inline-block mb-6 shadow-lg shadow-teal-500/10 flex items-center gap-2 mx-auto md:mr-0 md:ml-auto w-max">
                            <Heart className="w-4 h-4 text-rose-400" />
                            محبت اور خاص خیال
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
                            سعودی عرب میں <br />
                            <span className="text-cyan-400">وہیل چیئر وی آئی پی ٹرانسفر</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl leading-relaxed mb-10 font-light mx-auto md:mr-0 md:ml-auto drop-shadow text-emerald-50">
                            ہمارے بزرگوں، بیماروں اور چلنے پھرنے سے معذور مسافروں کے لیے پروقار اور پرسکون سفری سہولت۔ ہسپتال کے چکر ہوں یا عمرے کی سعادت، ہم ہر قدم پر آپ کے ساتھ ہیں۔
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=wheelchair-taxi">
                                <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 group border-[1.5px] border-cyan-400/50 w-full sm:w-auto">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    خصوصی ٹرانسفر کوٹیشن حاصل کریں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Quick Highlight Cards */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30 mb-20 drop-shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-teal-100 flex items-center gap-4">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <UserPlus className="w-7 h-7 text-teal-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">8,000+ مسافرین</h3>
                            <p className="text-sm text-slate-500">جنہیں محفوظ طریقے سے منزل تک پہنچایا</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-teal-100 flex items-center gap-4">
                        <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <Heart className="w-7 h-7 text-rose-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">مہربان ڈرائیورز</h3>
                            <p className="text-sm text-slate-500">بزرگوں اور بیماروں کے لیے تربیت یافتہ عملہ</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-teal-100 flex items-center gap-4">
                        <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0">
                             <Shield className="w-7 h-7 text-cyan-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">100% سیفٹی ریکارڈ</h3>
                            <p className="text-sm text-slate-500">بہترین احتیاط اور آرام دہ بریکس کا استعمال</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Display */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-teal-50 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-teal-600 font-bold tracking-wider mb-2 block">سہولیات برائے احتیاجِ خاص</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-teal-500/30">ہر مسافر کی سہولت اور سلامتی ہمارا منشور ہے</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            ہماری ٹرانسپورٹ سروس میں ان تمام چھوٹی بڑی باتوں کا خیال رکھا جاتا ہے جو جسمانی طور پر کمزور افراد کے لیے اہم ہو سکتی ہیں۔
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="p-8 bg-sky-50/50 rounded-2xl border border-sky-100/50 text-right hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-600 transition-colors">
                                    <f.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 mb-3">{f.title}</h3>
                                <p className="text-slate-600 text-base leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Guidance/Info Alert */}
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-right">
                <div className="bg-amber-50 rounded-3xl p-8 md:p-10 border border-amber-200 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex-1 w-full text-right">
                         <div className="flex items-center gap-3 justify-start flex-row-reverse mb-4">
                            <h3 className="text-2xl font-black text-amber-900 leading-snug">صرف فولڈ ہونے والی وہیل چیئرز (Foldable)</h3>
                            <div className="bg-amber-100 p-2 rounded-full shadow-inner border border-amber-200"><Accessibility className="w-6 h-6 text-amber-700" /></div>
                        </div>
                        <p className="text-amber-800 leading-relaxed mb-4 text-lg">
                            براہ کرم نوٹ کریں کہ اس وقت ہماری فلیٹ کی کسی بھی گاڑی کے پیچھے ریمپ (Ramp) یا ہائیڈرولک لفٹ (Hydraulic Lift) نہیں لگی جو کرسی پر بیٹھے ہوئے مریض کو اوپر کر سکے۔ ہماری گاڑیاں صرف بند ہونے (فولڈہونے) والی وہیل چیئرز کے لیے ہیں۔ ہم مسافر کو کرسی سے کار کی سیٹ پر بیٹھنے میں بھرپور مدد فراہم کرتے ہیں۔
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50/30 border-t border-sky-100 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-teal-100 text-teal-900 font-bold tracking-wider uppercase text-sm px-5 py-2 rounded-full inline-block mb-4 border border-teal-200 hidden-not-needed">ضروری معلومات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 underline decoration-teal-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-slate-200 px-6 shadow-sm hover:border-teal-300 transition-all data-[state=open]:border-teal-500">
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

             {/* Footer CTA */}
             <section className="bg-slate-900 rounded-3xl p-12 text-center text-white my-16 max-w-7xl mx-auto mx-4 sm:mx-6 shadow-2xl relative font-urdu border-b-[6px] border-cyan-500">
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        اپنوں کی بہترین دیکھ بھال
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        چاہے ایئرپورٹ سے منتقلی ہو یا ہسپتالوں کی دورے، ہمارے بھروسہ مند ڈرائیورز کے ساتھ ایک پُرسکون اور محفوظ سفر کوٹیشن حاصل کریں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500 font-black text-lg px-10 py-6 h-auto shadow-xl rounded-full">
                            <Link href="/ur/booking/">
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                خصوصی ٹرانسفر کوٹیشن حاصل کریں
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-500 font-bold text-lg px-10 py-6 h-auto rounded-full transition-colors">
                            <Link href="/ur/services/airport-transfers/">
                                ایئرپورٹ سروس دیکھیں
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 font-urdu">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-slate-200 bg-white" />
            </div>
        </div>
    );
}
