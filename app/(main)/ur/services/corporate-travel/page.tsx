import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Briefcase, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'ٹاپ ریٹڈ کارپوریٹ وی آئی پی ٹرانسفر سعودی عرب | بہترین ایگزیکٹو ڈرائیور سروس',
    description: 'سعودی عرب میں بزنس ٹریول کے لیے بہترین وی آئی پی ٹرانسفر سروس۔ ریاض اور جدہ میں کاروباری میٹنگز کے لیے پروفیشنل ایگزیکٹو ٹرانسپورٹ۔ کارپوریٹ کلائنٹس کے لیے ماہانہ بلنگ کی سہولت۔',
    keywords: ['کارپوریٹ وی آئی پی ٹرانسفر سعودی عرب', 'بہترین وی آئی پی ٹرانسفر سروس', 'ایگزیکٹو ٹرانسپورٹ ریاض', 'بزنس ٹریول جدہ', 'کارپوریٹ چوفر سروس'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/corporate-travel/',
    },
    openGraph: {
        title: 'کارپوریٹ وی آئی پی ٹرانسفر سعودی عرب | ایگزیکٹو سروس بمعہ ڈرائیور',
        description: 'بزنس ایگزیکٹوز کے لیے پروفیشنل کارپوریٹ وی آئی پی ٹرانسفر سروس۔ ماہانہ بلنگ، ترجیحی بکنگ اور ایگزیکٹو گاڑیاں دستیاب ہیں۔',
        url: 'https://taxiserviceksa.com/ur/services/corporate-travel/',
        type: 'website',
    },
};

export default function CorporateTravelPageUrdu() {
    const businessHubs = [
        {
            name: 'ریاض کے کاروباری مراکز (Business Districts)',
            description: 'دارالحکومت میں کارپوریٹ ٹرانسپورٹ۔ کنگ عبداللہ فنانشل ڈسٹرکٹ (KAFD)، ڈپلومیٹک کوارٹر اور دیگر اہم کاروباری مراکز۔',
            routes: ['ایئرپورٹ → KAFD', 'ہوٹلز → بزنس ڈسٹرکٹس', 'کانفرنس سینٹرز'],
            link: '/ur/locations/riyadh',
            icon: Building2
        },
        {
            name: 'جدہ کارپوریٹ ایریاز',
            description: 'تجارتی مرکز میں ٹرانسپورٹ کی سہولت۔ کارنیش بزنس ڈسٹرکٹ، کنگ روڈ کے دفاتر اور کارپوریٹ ہیڈ کوارٹرز۔',
            routes: ['ایئرپورٹ → کارپوریٹ HQ', 'ہوٹلز → میٹنگ کے مقامات', 'جدہ پورٹ → بزنس سینٹرز'],
            link: '/ur/locations/jeddah',
            icon: Building2
        },
    ];

    const features = [
        'ایگزیکٹو گاڑیاں (GMC Yukon, Toyota Camry)',
        'پروفیشنل ڈرائیورز (رسمی کاروباری لباس میں)',
        'کارپوریٹ اکاؤنٹس کے لیے ماہانہ بلنگ',
        'ایمرجنسی اور فوری ٹرپس کے لیے ترجیحی بکنگ',
        'ڈیڈیکیٹڈ اکاؤنٹ مینیجر کی سہولت',
        'اخراجات کی رپورٹس (Expense reports) کے لیے ٹرپ کی تفصیلات کے ساتھ انوائس',
        'بکنگ منسوخ کرنے کی لچکدار پالیسی',
        'کانفرنس اور ایونٹس کے لیے ٹرانسپورٹ کی مکمل کوریج',
        'ملٹی سٹی (کئی شہروں کے) بزنس ٹرپس کی کوآرڈینیشن',
        'انگریزی، عربی اور اردو میں روانی رکھنے والے باشعور ڈرائیورز',
    ];

    const services = [
        {
            name: 'ایئرپورٹ ٹرانسفرز',
            description: 'بزنس مسافروں کے لیے ایگزیکٹو ایئرپورٹ پک اپ اور ڈراپ آف۔ مسافر کے نام کے بورڈ کے ساتھ ماہرانہ استقبالیہ سروس۔',
            price: 'ایگزیکٹو ریٹس'
        },
        {
            name: 'میٹنگ ٹرانسپورٹ',
            description: 'دفاتر، ہوٹلوں اور میٹنگ کے مقامات کے درمیان پوائنٹ ٹو پوائنٹ ٹرانسپورٹ۔ وقت کی پابندی کی 100% گارنٹی۔',
            price: 'کارپوریٹ ریٹس'
        },
        {
            name: 'کانفرنس ٹرانسپورٹ',
            description: 'کونفرنس کے شرکاء کے لیے مخصوص گاڑیوں کے ساتھ کئی دنوں کی ٹرانسپورٹ سروس۔ ایونٹ کے شیڈول کے مطابق لچک۔',
            price: 'حسب ضرورت کوٹیشن'
        },
        {
            name: 'انٹرسٹی بزنس ٹریول',
            description: 'ریاض سے جدہ بزنس کوریڈور (950 کلومیٹر)۔ طویل فاصلے کا انتہائی آرام دہ اور پرسکون ایگزیکٹو سفر۔',
            price: 'کوریڈور ریٹس'
        },
    ];

    const faqs = [
        {
            question: "کیا آپ کارپوریٹ اکاؤنٹس کے لیے ماہانہ بلنگ کی سہولت دیتے ہیں؟",
            answer: "جی ہاں۔ ماہانہ بلنگ کارپوریٹ اکاؤنٹس کے لیے دستیاب ہے جن کے کم از کم 10 ٹرپس ماہانہ ہوں۔ ہماری انوائس میں کمپنی کے اخراجات کی رپورٹنگ کے لیے ٹرپ کی تمام تفصیلات (تاریخ، وقت، روٹ، مسافر کا نام) شامل ہوتی ہیں۔ ادائیگی کی شرائط: 30 دن (Net 30) کے اندر۔ اکاؤنٹ سیٹ اپ کے لیے کمپنی کے رجسٹریشن کے دستاویزات لازمی ہیں۔"
        },
        {
            question: "کیا ہم کانفرنسز اور بڑے ایونٹس کے لیے ایگزیکٹو ٹرانسپورٹ بک کر سکتے ہیں؟",
            answer: "جی ہاں۔ کانفرنس ٹرانسپورٹ سروس میں ملٹی ڈے ایونٹس، شرکاء کے لیے لچکدار شیڈول اور ترجیحی بکنگ شامل ہے۔ بڑی کانفرنسز کے لیے پیشگی بکنگ (2-4 ہفتے پہلے) کی سفارش کی جاتی ہے۔ 50 سے زیادہ شرکاء کے لیے خصوصی کسٹم پیکیجز بھی دستیاب ہیں۔"
        },
        {
            question: "کیا ڈرائیورز کارپوریٹ ٹرانسپورٹ کے لیے بزنس ڈریسنگ کرتے ہیں؟",
            answer: "جی ہاں۔ کارپوریٹ ٹرانسپورٹ کے لیے ہمارے تمام ڈرائیورز بزنس ڈریس کوڈ (سفید قمیض، سیاہ پتلون) کی سختی سے پابندی کرتے ہیں۔ ڈرائیورز کو پروفیشنل آداب اور ڈسپلن کی خاص تربیت دی جاتی ہے۔ غیر ملکی ایگزیکٹوز کے لیے ہم انگریزی بولنے والے ڈرائیورز مختص کرتے ہیں۔"
        },
        {
            question: "کارپوریٹ بکنگ کے لیے کینسلیشن (منسوخی) کی پالیسی کیا ہے؟",
            answer: "کارپوریٹ اکاؤنٹس کے لیے ہم نے لچکدار کینسلیشن پالیسی رکھی ہے: پک اپ ٹائم سے 2 گھنٹے پہلے تک بکنگ مفت کینسل کی جا سکتی ہے۔ 2 گھنٹے کے اندر کی گئی کینسلیشنز پر 50% چارج لاگو ہوتا ہے۔ اگر مسافر وقت پر نہ پہنچے (No-show) تو پوری فیس لی جاتی ہے۔ پرواز میں تاخیر یا میٹنگ کے اوقات بدلنے کی صورت میں ہم زیادہ سے زیادہ تعاون کرتے ہیں۔"
        },
        {
            question: "کیا ہم ریاض سے جدہ بزنس ٹرپس کے لیے ٹرانسپورٹ بک کر سکتے ہیں؟",
            answer: "جی ہاں۔ ریاض سے جدہ بزنس کوریڈور (950 کلومیٹر، 9-10 گھنٹے) کا سفر ایگزیکٹو گاڑیوں (GMC Yukon) کے ساتھ باآسانی دستیاب ہے۔ اس سروس میں راستے میں آرام کے وقفے اور لچکدار روانگی کا وقت شامل ہے۔ ڈرائیور کے رات قیام کا بندوبست بھی کیا جا سکتا ہے۔ بزنس کوریڈور کی خصوصی قیمتوں کے لیے ہم سے رابطہ کریں۔"
        },
        {
            question: "کیا کارپوریٹ کلائنٹس کو ڈیڈیکیٹڈ اکاؤنٹ مینیجر فراہم کیا جاتا ہے؟",
            answer: "جی ہاں۔ ان کارپوریٹ اکاؤنٹس کو جن کے ماہانہ 20 سے زیادہ ٹرپس ہوں، انہیں ایک ڈیڈیکیٹڈ اکاؤنٹ مینیجر فراہم کیا جاتا ہے۔ اکاؤنٹ مینیجر بکنگ کوآرڈینیشن، انوائس کے معاملات اور کلائنٹ کی ضرورت کے مطابق سروس کی تخصیص (Customization) کو سنبھالتا ہے۔ ڈائریکٹ ای میل اور فون نمبر بھی مہیا کیا جاتا ہے۔"
        },
        {
            question: "کیا ہمیں اخراجات کلیم (Expense reimbursement) کے لیے ٹرپ رپورٹس مل سکتی ہیں؟",
            answer: "جی ہاں۔ ہر مہینے کی انوائس میں تفصیلی ٹرپ رپورٹس شامل ہوتی ہیں: تاریخ، وقت، پک اپ کی لوکیشن، ڈراپ آف کی لوکیشن، مسافر کا نام، طے شدہ فاصلہ اور کرایہ۔ یہ رپورٹس خاص طور پر کارپوریٹ سسٹمز کے لیے بنائی گئی ہیں۔ درخواست پر کسٹم رپورٹس (جیسے ایکسل شیٹ وغیرہ) بھی فراہم کی جا سکتی ہیں۔"
        },
        {
            question: "کیا ہنگامی بزنس ٹرپس کے لیے ترجیحی (Priority) بکنگ دستیاب ہے؟",
            answer: "جی ہاں۔ کارپوریٹ اکاؤنٹ ہولڈرز کو فوری نوعیت کے ٹرپس (اسی دن یا اگلے دن) کے لیے ترجیحی بکنگ دی جاتی ہے۔ بکنگ کے بعد 2 گھنٹے کے اندر گاڑی کی دستیابی کی ضمانت دی جاتی ہے (بشرطیکہ گاڑیاں فارغ ہوں)۔ اکاؤنٹ ہولڈرز کو ایمرجنسی رابطہ نمبر بھی دیا جاتا ہے۔"
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Travel Service Saudi Arabia (Urdu)",
        "serviceType": "Corporate Transport",
        "areaServed": [
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Jeddah" }
        ],
        "description": "سعودی عرب میں کارپوریٹ ٹریول کے لیے ٹاپ ریٹڈ وی آئی پی ٹرانسفر سروس۔ ماہانہ بلنگ اور بزنس کلائنٹس کے لیے ترجیحی بکنگ کی سہولت۔",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

             {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-urdu border-b border-blue-900/50">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-right">
                    <div className="mb-12">
                        <span className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-100 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6 shadow-lg shadow-blue-500/10">
                            کارپوریٹ ٹریول سروس
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
                            سعودی عرب کی ٹاپ ریٹڈ<br />
                            <span className="text-blue-400">ایگزیکٹو ٹرانسپورٹ</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 font-light text-right">
                            VIP Transfer KSA کارپوریٹ کلائنٹس کے لیے بہترین ایگزیکٹو ٹرانسفر سروس پیش کرتا ہے۔ ریاض اور جدہ میں لائسنس یافتہ پروفیشنل چوفرز کے ساتھ پرتعیش اور آرام دہ ایگزیکٹو ٹرانسپورٹ۔ وقت کی پابندی ہماری پہچان ہے۔
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=corporate-travel">
                                <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-50 font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-all transform hover:scale-105 group border border-blue-100/20">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    کارپوریٹ اکاؤنٹ کی درخواست دیں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Business Hubs Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider mb-2 block">اہم بزنس مراکز</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-blue-500/30">ریاض اور جدہ کے ایگزیکٹو بزنس ڈسٹرکٹس</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            ہماری ٹاپ ریٹڈ ایگزیکٹو ٹرانسفر سروس ریاض اور جدہ میں کلیدی کارپوریٹ اور معاشی علاقوں کی مکمل کوریج کرتی ہے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {businessHubs.map((hub, index) => (
                            <Link key={index} href={hub.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 h-full flex flex-col relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -z-10 group-hover:bg-blue-200/50 transition-colors"></div>
                                    <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <hub.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors text-right pl-4">
                                        {hub.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-1 text-right">{hub.description}</p>
                                    <div className="space-y-2 mt-auto">
                                        <div className="text-sm font-bold text-gray-900 mb-3 text-right">عام استعمال ہونے والے روٹس:</div>
                                        {hub.routes.map((route, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 justify-start flex-row-reverse text-left">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span>{route}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

             {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider mb-2 block">ہماری کارپوریٹ سروسز</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-blue-500/30">کارپوریٹ وی آئی پی ٹرانسفر خدمات</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border border-transparent hover:border-blue-200 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">{service.name}</h3>
                                <p className="text-gray-600 mb-6 flex-1 text-right">{service.description}</p>
                                <div className="pt-4 border-t border-gray-100 flex justify-end">
                                    <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-md">{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                         <span className="text-blue-600 font-bold tracking-wider mb-2 block">ہماری خصوصیات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-blue-500/30">ہماری سعودی کارپوریٹ سروس ہی کیوں؟</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-blue-50/40 p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                                <span className="text-gray-800 font-medium leading-relaxed text-sm flex-1">{feature}</span>
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">سوالات و جوابات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-blue-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:border-blue-200 transition-colors">
                                <AccordionTrigger className="text-left hover:no-underline py-4 flex-row-reverse text-right">
                                    <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4 text-right">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2 text-right">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 font-urdu border-t-4 border-blue-500">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow">
                        سعودی عرب کی بہترین کارپوریٹ ٹرانسپورٹ کوٹیشن حاصل کریں
                    </h2>
                    <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                        سعودی عرب میں ٹاپ ریٹڈ وی آئی پی ٹرانسفر سروس کے ساتھ اپنا بزنس ٹریول محفوظ بنائیں۔ ماہانہ بلنگ اور ترجیحی بکنگ کی سہولیات سے فائدہ اٹھائیں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ur/booking?service=corporate-travel">
                            <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-50 font-black text-lg px-10 py-6 h-auto min-w-[200px] rounded-full shadow-xl">
                                کارپوریٹ اکاؤنٹ کی درخواست دیں
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
