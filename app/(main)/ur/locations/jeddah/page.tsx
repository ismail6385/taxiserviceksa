import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, Waves, Compass, Heart, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import Script from 'next/script';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

export const metadata: Metadata = {
    title: 'جدہ ٹیکسی سروس | ایئرپورٹ ٹرانسفر اور مکہ زیارت (VIP)',
    description: 'جدہ میں بہترین ٹیکسی سروس۔ کنگ عبدالعزیز ایئرپورٹ سے مکہ اور مدینہ کے لیے آرام دہ سفر۔ فیملی کاریں (GMC) اور وی آئی پی استقبال دستیاب ہے۔',
    keywords: ['جدہ ٹیکسی', 'جدہ ایئرپورٹ پک اپ', 'مکہ ٹیکسی', 'عمرہ ٹرانسپورٹ', 'جدہ سے مدینہ', 'VIP ٹیپسی جدہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/jeddah/',
            'x-default': 'https://taxiserviceksa.com/locations/jeddah/',
        }
    },
    openGraph: {
        title: 'جدہ ٹیکسی | مکہ اور مدینہ ٹرانسفر',
        description: 'جدہ ایئرپورٹ (ٹرمینل 1) سے مکہ ہوٹل تک براہ راست سروس۔ سامان اور فیملی کے لیے بہترین۔',
        url: 'https://taxiserviceksa.com/ur/locations/jeddah/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'جدہ کورنیش' }],
    },
};

export default function JeddahPageUrdu() {
    const services = [
        { name: 'ایئرپورٹ استقبال (Meet & Greet)', description: 'ٹرمینل 1 اور نارتھ ٹرمینل میں نام کے بورڈ کے ساتھ استقبال', icon: Plane },
        { name: 'مکہ ڈائریکٹ ٹرانسفر', description: 'ایئرپورٹ سے سیدھا ہوٹل یا حرم تک (75 منٹ)', icon: Car },
        { name: 'جدہ سٹی ٹور', description: 'بلد، کورنیش اور فوارہ شاہ فہد کی مکمل سیر', icon: Waves },
        { name: 'بزنس اور فیملی VIP', description: 'GMC یوکون اور لگژری سیڈان دستیاب ہیں', icon: Building2 },
    ];

    const jeddahImages = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const distanceData = [
        { destination: 'مکہ مکرمہ (حرم)', distance: '95 کلومیٹر', time: '1 گھنٹہ 15 منٹ', route: 'حرمین ہائی وے' },
        { destination: 'مدینہ منورہ', distance: '415 کلومیٹر', time: '4 گھنٹے', route: 'روٹ 15' },
        { destination: 'طائف', distance: '170 کلومیٹر', time: '2 گھنٹے 15 منٹ', route: 'الہدا روڈ' },
        { destination: 'بلد (پرانا شہر)', distance: '25 کلومیٹر', time: '30 منٹ', route: 'مدینہ روڈ' },
        { destination: 'ابحر (ساحل)', distance: '35 کلومیٹر', time: '40 منٹ', route: 'کورنیش روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema-ur-jeddah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Jeddah Airport VIP Transfer Urdu",
                        "areaServed": { "@type": "City", "name": "Jeddah" },
                        "description": "Premium airport transfer and intercity taxi service from Jeddah to Makkah/Madinah for Urdu speakers."
                    })
                }}
            />

            <Hero
                images={jeddahImages}
                h1Text="جدہ ٹیکسی سروس: وی آئی پی ایئرپورٹ اور مکہ ٹرانسفر"
                bookingFormTitle="جدہ میں ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مکہ کا دروازہ
                    </span>
                }
                subtitle="کنگ عبدالعزیز ایئرپورٹ (JED) پر شاہانہ استقبال"
                location="جدہ • مکہ • مدینہ • طائف"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="وی آئی پی ٹرانسفر KSA™ - جدہ"
                        description="جدہ ایئرپورٹ پر زائرین کے پہلے انتخاب۔ ہم ٹرمینل 1 (Aquarium) اور نارتھ ٹرمینل پر 24/7 فعال ہیں۔ ہماری فیملی SUV گاڑیاں عمرہ زائرین کے لیے سب سے زیادہ مقبول ہیں۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "لائسنس یافتہ", since: "خدمت از" }}
                        metrics={[
                            { label: 'ایئرپورٹ پک اپ', value: '15,000+', icon: Plane },
                            { label: 'فیملی گاڑیاں', value: 'GMC/Yukon', icon: Users },
                            { label: 'وقت کی پابندی', value: '100%', icon: Clock }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            کوٹیشن حاصل کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-emerald-50 border-y border-emerald-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-emerald-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        پریمیم الرٹ: ہم ایئرپورٹ ٹرمینل کے اندر 'نام کے بورڈ' کے ساتھ استقبال (Meet & Greet) فراہم کرتے ہیں۔ آپ کو باہر نکل کر ڈرائیور ڈھونڈنے کی ضرورت نہیں۔
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="جدہ ایئرپورٹ ٹرمینل الرٹ: ٹرمینل 1 بمقابلہ نارتھ ٹرمینل"
                    status="Insider Tip"
                    lastUpdated="دسمبر 2024"
                    content="زیادہ تر غیر ملکی فلائٹس (PIA, Air Blue, Emirates) نئے ٹرمینل 1 پر آتی ہیں۔ کچھ سستی ایئرلائنز (Flynas, Flyadeal) اب بھی نارتھ ٹرمینل استعمال کرتی ہیں۔ اپنی فلائٹ ٹرمینل کے مطابق ڈرائیور کو بتائیں تاکہ آپ کا وقت بچ سکے۔"
                    tags={["ٹرمینل_1", "جدہ_ایئرپورٹ", "نارتھ_ٹرمینل", "عمرہ_ٹرانسپورٹ"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="کیا جدہ ایئرپورٹ سے مکہ جانے کے لیے ٹرین بہتر ہے یا پرائیویٹ ٹیکسی؟"
                    intro="حرمین ہائی اسپیڈ ٹرین ایک بہترین آپشن ہے، لیکن اس کا انتخاب کرنے سے پہلے کچھ زمینی حقائق جاننا ضروری ہیں۔"
                    labels={{ condition: "آپ کی ضرورت", source: "تجزیہ" }}
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'فیملی + سامان (4 یا زیادہ لوگ)',
                            question: 'کیا فیملی کے لیے ٹیکسی سستی پڑتی ہے؟',
                            answer: 'جی ہاں۔ 4 افراد کی ٹرین ٹکٹ (لگ بھگ 140 ریال) اور پھر مکہ اسٹیشن سے ہوٹل تک ٹیکسی (50-80 ریال) کے مقابلے میں ایک پرائیویٹ ٹیکسی (200-250 ریال) سستی اور آسان ہے۔',
                            citation: 'کرایہ کا موازنہ'
                        },
                        {
                            id: 'q2',
                            condition: 'بزرگ اور بچے',
                            question: 'کم محنت کس میں ہے؟',
                            answer: 'ٹیکسی میں۔ ٹرین کے لیے آپ کو سامان اٹھا کر دو بار سواری بدلنی پڑتی ہے۔ ٹیکسی آپ کو ایئرپورٹ سے لے کر مکہ ہوٹل کے دروازے پر اتارتی ہے۔',
                            citation: 'آرام کا تجزیہ'
                        },
                        {
                            id: 'q3',
                            condition: 'وقت کی بچت',
                            question: 'تیز ترین کیا ہے؟',
                            answer: 'اگر ٹرین تیار کھڑی ہے تو وہ تیز ہے (55 منٹ)۔ لیکن ٹرین کے انتظار کا وقت (اکثر 1-2 گھنٹے) شامل کریں تو ٹیکسی (75 منٹ) مجموعی طور پر جلدی پہنچاتی ہے۔',
                            citation: 'ٹائم مانیٹر'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="جدہ: حج و عمرہ کی گزرگاہ اور تاریخی شہر"
                    explanation="جدہ صرف ایک ایئرپورٹ نہیں ہے، بلکہ یہ سعودی عرب کا جدید اور تاریخی مرکز ہے۔ یہاں کی سیر آپ کے سفر کو یادگار بنا سکتی ہے۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'کنگ عبدالعزیز ایئرپورٹ (JED)',
                            description: 'دنیا کے بڑے ایئرپورٹس میں سے ایک۔ یہاں کا نیا ٹرمینل 1 اپنے بڑے ایکویریم (Aquarium) کے لیے مشہور ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/شاہ_عبد_العزیز_بین_الاقوامی_ہوائی_اڈا'
                        },
                        {
                            label: 'البلد (قدیم جدہ)',
                            description: 'یونیسکو کا عالمی ثقافتی ورثہ۔ یہاں کی لکڑی کی بنی بالکنیاں اور پرانی گلیاں مکہ کی پرانی یاد تازہ کرتی ہیں۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/جدہ_تاریخی_شہر'
                        },
                        {
                            label: 'جدہ کورنیش',
                            description: 'سمندر کنارے دنیا کا بلند ترین فوارہ (شاہ فہد فوارہ) دیکھنے کی بہترین جگہ۔ فیملی پکنک کے لیے مثالی۔',
                            internalLink: '/ur/locations/jeddah'
                        },
                        {
                            label: 'خریداری (Shopping)',
                            description: 'جدہ کے بڑے مالز (Mall of Arabia, Red Sea Mall) بہترین خریداری کے مراکز ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Red_Sea_Mall'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="جدہ ٹریول حب"
                    clusters={[
                        {
                            category: "ایئرپورٹ سروسز",
                            relevance: "Primary",
                            items: [
                                { label: "جدہ ایئرپورٹ سے مکہ ڈراپ", url: "/ur/locations/makkah" },
                                { label: "ایئرپورٹ سے مدینہ ٹرانسفر", url: "/ur/locations/madinah" },
                                { label: "جدہ ایئرپورٹ VIP استقبال", url: "/booking" }
                            ]
                        },
                        {
                            category: "سیاحت اور قیام",
                            relevance: "Secondary",
                            items: [
                                { label: "جدہ سٹی ٹور پیکیج", url: "/services/city-tours" },
                                { label: "ابحر بیچ ریزورٹ ٹیکسی", url: "/locations/jeddah-obhur" },
                                { label: "مکہ چیک پوائنٹ گائیڈ", url: "/blog/makkah-checkpoint-rules" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='کیپٹن سعید الغامدی'
                        reviewerTitle='سینئر فلائٹ کوآرڈینیٹر'
                        reviewDate="28 دسمبر 2025"
                        expertise={["ایئرپورٹ لاجسٹکس", "وی آئی پی پروٹوکول", "مکہ ٹریفک ماہر"]}
                        labels={{ reviewTitle: "ایکسپرٹ گائیڈ", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">پریمیم ٹرانسپورٹ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-primary/30">جدہ ایئرپورٹ ٹرانسفر کے حل</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            ہماری تمام گاڑیاں اے سی اور وائی فائی (درخواست پر) سے لیس ہیں۔ ہم جانتے ہیں کہ آپ تھکے ہوئے ہیں، اس لیے ہمارا مقصد آپ کے سفر کو پرسکون بنانا ہے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6 text-emerald-700">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm font-semibold">حفاظت اور آرام</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-urdu">
                                ہم باہر سے ٹیکسی لینے کا مشورہ کیوں نہیں دیتے؟
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                جدہ ایئرپورٹ پر غیر لائسنس یافتہ ڈرائیور اکثر مسافروں کو پریشان کرتے ہیں۔ وہ کرایہ کم بتا کر بعد میں پارکنگ یا 'بیگیج فیس' کے نام پر اضافی رقم مانگتے ہیں۔
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed leading-relaxed font-urdu">
                                ہماری ویب سائٹ پر بکنگ کرنے سے آپ کو **فکسڈ کرایہ** ملتا ہے۔ ڈرائیور ایئرپورٹ کے مقررہ ضابطوں کا پابند ہے اور آپ کی حفاظت ہماری پہلی ترجیح ہے۔
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h3 className="font-bold text-lg">فکسڈ ریٹ</h3><p className="text-sm text-gray-500">کوئی خفیہ چارج نہیں</p></div>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h3 className="font-bold text-lg">لائسنس یافتہ</h3><p className="text-sm text-gray-500">منسٹری آف ٹرانسپورٹ سے منظور شدہ</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-1">
                            <div className="relative">
                                <Image
                                    src="/jeddah-airport-terminal.webp"
                                    alt="جدہ ایئرپورٹ ٹرمینل 1"
                                    width={700}
                                    height={600}
                                    className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-yellow-100 p-3 rounded-full"><Star className="w-8 h-8 text-yellow-600" /></div>
                                        <div><p className="text-2xl font-black">4.9/5</p><p className="text-sm text-gray-500">گوگل ریٹنگ</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="جدہ"
                        isRtl={true}
                        labels={{
                            title: "جدہ میں سفر کے ماہرانہ مشورے",
                            subtitle: "خوشگوار سفر کے لیے ضروری باتیں",
                            summerTitle: "گرمی اور حبس (اپریل - اکتوبر)",
                            summerText: "جدہ کی گرمی کے ساتھ حبس بہت ہوتا ہے۔ باہر ٹیکسی کا انتظار کرنا تھکاوٹ کا باعث بن سکتا ہے۔ ہمیشہ پریمیم اے سی گاڑی پہلے سے کوٹیشن حاصل کریں۔",
                            summerTag: "گرمی اور حبس کا الرٹ",
                            winterTitle: "موسم سرما (نومبر - مارچ)",
                            winterText: "جدہ کے لیے بہترین وقت۔ سمندر کنارے تفریح اور بلد کی سیر کے لیے مثالی موسم۔ شام کو ہلکا رش ہو سکتا ہے۔",
                            winterTag: "سیاحت کے لیے بہترین"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="جدہ ایئرپورٹ (JED)"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "جدہ ایئرپورٹ سے اہم فاصلے",
                                subtitle: "سفر کا دورانیہ اور راستہ",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*ٹریفک کے زیادہ رش (Rush Hours) میں 20-30 منٹ اضافی لگ سکتے ہیں۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "سفری حقائق اور صارفین کا ڈیٹا",
                                subtitle: "عام غلط فہمیوں کی وضاحت",
                                beliefLabel: "عام سوچ",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اہم اثرات"
                            }}
                            points={[
                                {
                                    topic: "ایئرپورٹ پک اپ پوائنٹ",
                                    commonBelief: "ڈرائیور باہر روڈ پر ملے گا۔",
                                    reality: "ہمارا ڈرائیور ٹرمینل کے اندر گیٹ پر آپ کے نام کا بورڈ لے کر کھڑا ہوگا۔ آپ کو دھوپ میں سامان لے کر باہر جانے کی ضرورت نہیں۔",
                                    truthRange: "اندرونی استقبال (Meet & Greet)",
                                    factors: ["پارکنگ فیس شامل ہے", "وقت کی بچت"]
                                },
                                {
                                    topic: "اوبر/کریم بمقابلہ پرائیویٹ سروس",
                                    commonBelief: "ایپس سستی ہوتی ہیں۔",
                                    reality: "ایئرپورٹ پر 'سرج پرائسنگ' کی وجہ سے ایپس اکثر 250 ریال سے اوپر چلی جاتی ہیں۔ ہماری فکس بکنگ آپ کو بجٹ میں رکھتی ہے۔",
                                    truthRange: "فکس ریٹ (200 - 250 ریال)",
                                    factors: ["بڑھا ہوا کرایہ", "بلاک شدہ انٹرنیٹ"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            isRtl={true}
                            route="جدہ ایئرپورٹ سے مکہ ہوٹل"
                            labels={{ title: "آپ کے لیے بہترین روٹ", subtitle: "مسافر کی قسم کے مطابق انتخاب" }}
                            perspectives={[
                                {
                                    id: "family-vip",
                                    targetAudience: "فیملی اور زائرین",
                                    icon: Users,
                                    intent: "آرام دہ اور ڈائریکٹ سفر",
                                    description: "اگر آپ فیملی کے ساتھ ہیں تو 'ڈور ٹو ڈور' سروس آپ کی ترجیح ہونی چاہیے۔ کوئی اسٹیشن بدلنا نہیں، کوئی سیڑھیاں نہیں۔",
                                    structuredFeatures: [
                                        { label: "گاڑی", value: "GMC Yukon / SUV" },
                                        { label: "پروٹوکول", value: "Meet & Greet" },
                                        { label: "سامان", value: "مکمل گنجائش" }
                                    ],
                                    visualContext: "ایئرپورٹ سے مکہ ہوٹل تک ایک سیدھی لکیر۔"
                                },
                                {
                                    id: "business-ur",
                                    targetAudience: "تیز رفتار مسافر",
                                    icon: Briefcase,
                                    intent: "وقت کی بچت",
                                    description: "ایئرپورٹ سے نکلتے ہی ہائی وے پر۔ کم سے کم وقت میں مکہ یا شہر میں میٹنگ کے لیے پہنچیں۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "70-80 منٹ" },
                                        { label: "سروس", value: "ایکسپریس ڈراپ" },
                                        { label: "گاڑی", value: "لگژری سیڈان" }
                                    ],
                                    visualContext: "تیز ترین روٹ ہائی لائٹڈ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "جدہ سفر کے سوالات",
                                subtitle: "زائرین اور مسافروں کے لیے اہم معلومات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "جدہ ایئرپورٹ سے مکہ کا وی آئی پی کرایہ کتنا ہے؟",
                                    shortAnswer: "200 - 300 ریال",
                                    detailedAnswer: "معیاری سیڈان کے لیے 200 ریال اور فیملی GMC کے لیے 300 ریال فکس کرایہ ہے۔ اس میں پارکنگ اور ٹول چارجز شامل ہوتے ہیں۔",
                                    perspectives: [
                                        { role: "فیملی", icon: "Users", insight: "بڑی گاڑی میں سامان کی پریشانی نہیں ہوتی اور سب ایک ساتھ سفر کرتے ہیں۔" }
                                    ]
                                },
                                {
                                    question: "کیا آدھی رات کو بھی ٹیکسی مل جائے گی؟",
                                    shortAnswer: "جی ہاں (24/7 سروس)",
                                    detailedAnswer: "ہماری سروس 24 گھنٹے دستیاب ہے۔ آپ کی فلائٹ کسی بھی وقت آئے، ہمارا ڈرائیور پہلے سے موجود ہوگا۔",
                                    perspectives: [
                                        { role: "حفاظت", icon: "Shield", insight: "رات کے وقت محفوظ سفر کے لیے رجسٹرڈ کمپنی کی بکنگ بہترین ہے۔" }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">کمونٹی کے تاثرات</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6 font-urdu">
                            مسافروں کے تجربات
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Jeddah" />
                        <QuestionsDisplay location="Jeddah" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Jeddah" />
                        <QuestionForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="جدہ"
                    isRtl={true}
                    labels={{ title: "جدہ سے دیگر مقامات", subtitle: "سعودی عرب کی سیاحت", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'مکہ مکرمہ', url: '/ur/locations/makkah', description: 'عمرہ کا اہم مرکز' },
                        { name: 'مدینہ منورہ', url: '/ur/locations/madinah', description: 'مسجد نبوی کی زیارت' },
                        { name: 'طائف', url: '/ur/locations/taif', description: 'پہاڑی مقام' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">جدہ میں بہترین سفر کا آغاز کریں</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-urdu">
                        ایئرپورٹ پر خوار ہونے سے بچیں اور اپنی وی آئی پی گاڑی کے لیے کوٹیشن حاصل کریں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-8 rounded-full">
                            وی آئی پی ٹیکسی کے لیے کوٹیشن حاصل کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
