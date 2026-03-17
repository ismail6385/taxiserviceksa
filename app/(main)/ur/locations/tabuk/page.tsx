import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Construction, Castle, Compass, Landmark } from 'lucide-react';
import Hero from '@/components/Hero';
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
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'تبوک ٹیکسی سرور | نیوم اور العلا انٹر سٹی ٹرانسفر',
    description: 'تبوک میں پریمیم ٹیکسی سروس۔ تبوک ایئرپورٹ سے نیوم (NEOM)، العلا اور مدینہ کے لیے آرام دہ سفر۔ بزنس اور کنسلٹنٹس کے لیے ماہر ڈرائیورز۔',
    keywords: ['تبوک ٹیکسی', 'تبوک سے نیوم ٹیکسی', 'تبوک ایئرپورٹ ٹرانسفر', 'تبوک سے العلا ٹیکسی', 'نیوم ٹرانسپورٹ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/tabuk/',
            'ar': 'https://taxiserviceksa.com/ar/locations/tabuk/',
            'ur': 'https://taxiserviceksa.com/ur/locations/tabuk/',
            'x-default': 'https://taxiserviceksa.com/locations/tabuk/',
        }
    },
    openGraph: {
        title: 'تبوک ٹیکسی اور نیوم ٹرانسفر | مستقبل کا راستہ',
        description: 'شمال مغربی سعودی عرب کے عظیم منصوبوں کے لیے آپ کا بااعتماد سفری ساتھی۔',
        url: 'https://taxiserviceksa.com/ur/locations/tabuk/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/tabuk.webp', alt: 'تبوک قلعہ' }],
    },
};

export default function TabukPageUrdu() {
    const services = [
        { name: 'نیوم (NEOM) ٹرانسفر', description: 'تبوک ایئرپورٹ سے نیوم پروجیکٹ سائٹ اور دفاتر تک ڈائریکٹ سروس', icon: Construction },
        { name: 'العلا (AlUla) ایکسپڈیشن', description: 'تاریخی العلا اور مدائن صالح کے لیے آرام دہ انٹر سٹی سفر', icon: Compass },
        { name: 'ایئرپورٹ پک اپ', description: 'پرنس سلطان ایئرپورٹ سے تبوک کے تمام ہوٹلوں تک', icon: Plane },
        { name: 'تبوک سٹی ہسٹری ٹور', description: 'قلعہ تبوک اور شہر کے تاریخی مقامات کی سیر', icon: Castle },
    ];

    const distanceData = [
        { destination: 'نیوم (NEOM Community)', distance: '160 کلومیٹر', time: '1 گھنٹہ 45 منٹ', route: 'شرما روڈ' },
        { destination: 'العلا (AlUla)', distance: '340 کلومیٹر', time: '3 گھنٹہ 30 منٹ', route: 'روڈ 15' },
        { destination: 'مجھ (Magna/Beach)', distance: '220 کلومیٹر', time: '2 گھنٹہ 30 منٹ', route: 'کوسٹل روڈ' },
        { destination: 'مدینہ منورہ', distance: '680 کلومیٹر', time: '7 گھنٹے', route: 'ہائی وے 15' },
        { destination: 'اردن بارڈر (حالت عمار)', distance: '100 کلومیٹر', time: '1 گھنٹہ', route: 'بارڈر روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="tabuk-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Tabuk NEOM Gateway Taxi Urdu",
                        "areaServed": { "@type": "City", "name": "Tabuk" },
                        "description": "Premium intercity taxi service connecting Tabuk to NEOM, AlUla, and major projects."
                    })
                }}
            />

            <Hero
                images={['/hero-slide-1.webp', '/hero-slide-2.webp']}
                h1Text="تبوک ٹیکسی سرور: نیوم اور العلا کے لیے بہترین انتخاب"
                bookingFormTitle="تبوک میں بکنگ کریں"
                title={
                    <span className="bg-amber-900/40 backdrop-blur-md border border-amber-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        نیوم گیٹ وے ٹرانسپورٹ
                    </span>
                }
                subtitle="شمال مغربی ریجن کا سب سے تیز رفتار ٹرانسفر نیٹ ورک"
                location="تبوک، نیوم اور العلا"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="تبوک ایکسپریس KSA™"
                        description="نیوم ویب (NEOM) اور العلا کے عظیم منصوبوں کے لیے ماہر ڈرائیورز۔ ہم بزنس کنسلٹنٹس، انجینئرز اور سیاحوں کو ان کی منزل تک باحفاظت اور وقت پر پہنچاتے ہیں۔"
                        foundingDate="2018"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'نیوم ٹرانسفرز', value: '10,000+', icon: Construction },
                            { label: 'انٹر سٹی روٹس', value: '5k+', icon: Car },
                            { label: 'اطمینان', value: '4.8/5', icon: Star }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            نیوم ٹرانسفر کوٹیشن حاصل کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="نیوم اور کنسٹرکشن ایریا لاجسٹکس"
                    status="Insider Tip"
                    lastUpdated="مارچ 2025"
                    content="نیوم (NEOM) کے مختلف سیکٹرز (The Line, Oxagon, Trojena) میں داخلے کے لیے مخصوص اجازت نامے درکار ہو سکتے ہیں۔ ہمارے ڈرائیورز چیک پوائنٹس کے عمل سے واقف ہیں، تاہم مسافروں کے پاس کمپنی انوائٹ یا پرمٹ ہونا ضروری ہے۔"
                    tags={["نیوم_پرمٹ", "تبوک_لاجسٹکس", "بزنس_ٹریول", "شرما_روڈ"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="تبوک سے نیوم یا العلا جانے کے لیے بہترین طریقہ کیا ہے؟"
                    intro="شمال مغرب میں طویل فاصلوں کے لیے پرائیویٹ ٹیکسی سب سے آرام دہ حل ہے۔"
                    labels={{ condition: "سفری نوعیت", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 't1',
                            condition: 'بزنس اور کام',
                            question: 'کیا ایئرپورٹ سے براہ راست نیوم جا سکتے ہیں؟',
                            answer: 'جی ہاں، ہمارا ڈرائیور آپ کو تبوک ایئرپورٹ سے لے کر براہ راست نیوم کمیونٹی یا دفاتر تک پہنچا سکتا ہے۔ یہ سفر تقریباً 2 گھنٹے کا ہے۔',
                            citation: 'سروس گائیڈ'
                        },
                        {
                            id: 't2',
                            condition: 'سیاحت (AlUla)',
                            question: 'کیا العلا کے لیے ٹیکسی دستیاب ہے؟',
                            answer: 'بالکل۔ ہم تبوک سے العلا کے لیے پریمیم SUVs فراہم کرتے ہیں تاکہ آپ 3.5 گھنٹے کا سفر پرسکون انداز میں مکمل کر سکیں۔',
                            citation: 'ٹورسٹ ڈیسک'
                        },
                        {
                            id: 't3',
                            condition: 'لمبا سفر (مدینہ)',
                            question: 'تبوک سے مدینہ کتنا وقت لگتا ہے؟',
                            answer: 'تبوک سے مدینہ کا فاصلہ 680 کلومیٹر ہے، اس لیے ٹیکسی میں لگ بھگ 7 گھنٹے لگتے ہیں۔ ہم آرام کے لیے بیچ میں اسٹاپس (Stops) شامل کرتے ہیں۔',
                            citation: 'انٹر سٹی لاجسٹکس'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="تبوک: مستقبل کے میگا پروجیکٹس کا دروازہ"
                    explanation="تبوک خطہ اپنے قدیم ورثے اور مستقبل کے جدید ترین خوابوں (Vision 2030) کا سنگم ہے۔"
                    labels={{ relatedTopic: "اہم پروجیکٹ / مقام", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'نیوم (NEOM)',
                            description: 'دنیا کا سب سے بڑا اسمارٹ سٹی پروجیکٹ جس میں "دی لائن" اور "آکساگون" شامل ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Neom'
                        },
                        {
                            label: 'تاریخی قلعہ تبوک',
                            description: 'حضرت محمد ﷺ کے دور کی تاریخ سے جڑا ایک عظیم الشان قلعہ جو اب ایک عجائب گھر ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Tabuk_Castle'
                        },
                        {
                            label: 'العلا (AlUla)',
                            description: 'سعودی عرب کا مشہور ورثہ مقام جو تبوک سے چند گھنٹوں کی مسافت پر ہے۔',
                            internalLink: '/ur/locations/alula'
                        },
                        {
                            label: 'حقل کا ساحل (Haqi Coast)',
                            description: 'صاف شفاف پانی اور مشہور ڈوبے ہوئے بحری جہاز کے نظارے کے لیے مشہور۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Haql'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="تبوک نیوم لاجسٹکس"
                    clusters={[
                        {
                            category: "پروفیشنل روٹس",
                            relevance: "Primary",
                            items: [
                                { label: "تبوک سے نیوم", url: "/ur/locations/tabuk" },
                                { label: "تبوک سے العلا", url: "/ur/locations/tabuk" },
                                { label: "کنسلٹنٹ ٹرانسفرز", url: "/services/chauffeur" }
                            ]
                        },
                        {
                            category: "علاقائی سفر",
                            relevance: "Secondary",
                            items: [
                                { label: "تبوک سے مدینہ", url: "/ur/locations/tabuk" },
                                { label: "تبوک ایئرپورٹ ٹیکسٹ", url: "/services/airport-transfers" },
                                { label: "قلعہ تبوک زیارت", url: "/ur/locations/tabuk" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='انجینئر فہد'
                        reviewerTitle='نیوم پروجیکٹ کنسلٹنٹ'
                        reviewDate="02 فروری 2026"
                        expertise={["تبوک ہائی ویز", "نیوم لاجسٹکس", "بزنس کوآرڈینیشن"]}
                        labels={{ reviewTitle: "ماہر کا مشاہدہ", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 font-urdu">
                        <span className="bg-amber-100 text-amber-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">ترقی کا سفر</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">تبوک اور شمال مغربی خدمات</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            مستقبل کے شہروں کی طرف آپ کا پہلا قدم، ہمارے ماہر ڈرائیورز کے ساتھ۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-amber-900 group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-amber-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="تبوک"
                        isRtl={true}
                        labels={{
                            title: "تبوک ٹریول گائیڈ",
                            subtitle: "موسم اور صحرائی مشورے",
                            summerTitle: "گرمی (مئی - ستمبر)",
                            summerText: "تبوک کی دھوپ تیز ہوتی ہے۔ دن کے وقت طویل سفر کے لیے پانی ساتھ رکھیں اور سن اسکرین استعمال کریں۔ ہماری گاڑیاں کولنگ سسٹم سے لیس ہیں۔",
                            summerTag: "تیز دھوپ: دن کا سفر نوٹس",
                            winterTitle: "سردی (نومبر - فروری)",
                            winterText: "تبوک سعودی عرب کے ان چند علاقوں میں سے ہے جہاں برفباری ہو سکتی ہے۔ جبل اللوز کی طرف جانے کے لیے گرم کپڑے لازمی ہیں۔",
                            winterTag: "برفباری کا امکان"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="تبوک سٹی سینٹر"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "شمال مغربی ریجن کے بڑے فاصلے",
                                subtitle: "نیوم اور دیگر شہروں تک رسائی",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*سڑک کی صورتحال اور چیک پوائنٹس کی وجہ سے وقت مختلف ہو سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16 text-right">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "تبوک اور نیوم سفر: حقائق",
                                subtitle: "مسافروں کے لیے آگاہی",
                                beliefLabel: "عام خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "نیوم میں داخلہ",
                                    commonBelief: "کوئی بھی کبھی بھی نیوم جا سکتا ہے۔",
                                    reality: "نیوم کے رہائشی اور ورکنگ ایریاز میں داخلے کے لیے کمپنی کی طرف سے جاری کردہ کیو آر کوڈ (QR Code) یا پرمٹ ضروری ہوتا ہے۔ سیاحتی مقامات الگ ہیں۔",
                                    truthRange: "پرمٹ چیک ضروری ہے",
                                    factors: ["سیکیورٹی", "پروجیکٹ قواعد", "ویزہ"]
                                },
                                {
                                    topic: "طویل مسافت اور تھکن",
                                    commonBelief: "بس کا سفر سستا اور اچھا ہے۔",
                                    reality: "تبوک سے مدینہ یا العلا کا سفر بس میں بہت طویل اور تھکا دینے والا ہوتا ہے۔ پرائیویٹ ٹیکسی آپ کو ڈور-ٹو-ڈور (Door-to-Door) سروس دے کر وقت بچاتی ہے۔",
                                    truthRange: "پرائیویٹ ٹیکسی بہتر انتخاب",
                                    factors: ["آزادی", "وقت کی بچت", "آرام"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16 text-right">
                        <RoutePerspective
                            isRtl={true}
                            route="نیوم کنکٹیویٹی"
                            labels={{ title: "آپ کا سفر، آپ کا مقصد", subtitle: "بہترین سروس کا انتخاب" }}
                            perspectives={[
                                {
                                    id: "business-commute",
                                    targetAudience: "بزنس / پروفیشنل",
                                    icon: Construction,
                                    intent: "کارکردگی",
                                    description: "نیوم دفاتر اور پروجیکٹس کے لیے وقت کی پابندی اور پرسکون ماحول۔ ڈرائیور جو چیک پوائنٹس سے واقف ہیں۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "فوری ٹرانسفر" },
                                        { label: "انداز", value: "پیشہ ورانہ" },
                                        { label: "گاڑی", value: "سٹیڈان / لگژری" }
                                    ],
                                    visualContext: "نیوم روٹ ہائی لائٹڈ۔"
                                },
                                {
                                    id: "heritage-tour",
                                    targetAudience: "سیاح / وزٹر",
                                    icon: Compass,
                                    intent: "تاریخ و تفریح",
                                    description: "العلا اور قلعہ تبوک کی سیر۔ تاریخ سے واقف گائیڈ نما ڈرائیورز۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "ڈے ٹرپ" },
                                        { label: "انداز", value: "روحانی / تاریخی" },
                                        { label: "گاڑی", value: "SUV (آرام دہ)" }
                                    ],
                                    visualContext: "سیاحتی مقامات کا نقشہ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "تبوک ٹرانسپورٹ FAQ",
                                subtitle: "نیوم اور تبوک کے بارے میں سوالات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "کیا تبوک ایئرپورٹ پر ٹیکسی 24 گھنٹے ملتی ہے؟",
                                    shortAnswer: "جی ہاں، لیکن بکنگ کر لینا بہتر ہے۔",
                                    detailedAnswer: "رات کے وقت ایگزیکٹو گاڑیوں کی دستیابی محدود ہو سکتی ہے، اس لیے ہم مشورہ دیتے ہیں کہ آن لائن بکنگ پہلے سے کر لیں۔",
                                    perspectives: [
                                        { role: "بزنس", icon: "Clock", insight: "رات کے وقت بھی فکسڈ ریٹ پر سواری دستیاب۔" }
                                    ]
                                },
                                {
                                    question: "العلا کے لیے بہترین گاڑی کون سی ہے؟",
                                    shortAnswer: "کیمری یا جی ایم سی یوکون۔",
                                    detailedAnswer: "اگر آپ اکیلے ہیں تو کیمری بہترین ہے، لیکن اگر فیملی ہے تو یوکون یا سٹاریا زیادہ آرام دہ ثابت ہوگی۔",
                                    perspectives: [
                                        { role: "سفر", icon: "Car", insight: "لمبے روٹ پر سیٹ آرام (Seat Comfort) بہت اہم ہے۔" }
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
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">مسافروں کی کہانیاں</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu text-right">
                            تبوک اور نیوم کا سفر
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Tabuk" />
                        <QuestionsDisplay location="Tabuk" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Tabuk" />
                        <QuestionForm locationName="Tabuk" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="تبوک"
                    isRtl={true}
                    labels={{ title: "شمالی سعودی عرب کے مقامات", subtitle: "ترقی کا سفر", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'نیوم (NEOM)', url: '/ur/locations/tabuk', description: 'مستقبل کا شہر' },
                        { name: 'العلا', url: '/ur/locations/alula', description: 'قدیم ورثہ' },
                        { name: 'ایئرپورٹ پک اپ', url: '/services/airport-transfers', description: 'بکنگ' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-amber-500/50">تبوک اور نیوم میں اپنی سواری کوٹیشن حاصل کریں</h2>
                    <p className="text-xl text-amber-200/60 mb-8 leading-relaxed font-urdu">
                        ویژن 2030 کے میگا پروجیکٹس کی طرف آپ کا بااعتماد سفر۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-amber-950 hover:bg-amber-100 font-bold text-lg px-12 py-8 rounded-full">
                            بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
