import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Anchor, Compass, Waves, Building2, Heart, Briefcase } from 'lucide-react';
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
    title: 'ینبع ٹیکسی سروس | ایئرپورٹ ٹرانسفر اور انڈسٹریل سٹی ٹرانسپورٹ',
    description: 'ینبع میں 24/7 ٹیکسی سروس۔ ینبع ایئرپورٹ، انڈسٹریل سٹی اور پورٹ کے لیے قابل اعتماد ٹرانسپورٹ۔ فکسڈ ریٹس اور پیشہ ورانہ سروس۔',
    keywords: ['ینبع ٹیکسی', 'ینبع ایئرپورٹ ٹرانسفر', 'ینبع انڈسٹریل سٹی ٹیکسی', 'ینبع ٹرانسپورٹ', 'ینبع سے مدینہ ٹیکسی'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/yanbu/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/yanbu/',
            'ar': 'https://taxiserviceksa.com/ar/locations/yanbu/',
            'ur': 'https://taxiserviceksa.com/ur/locations/yanbu/',
            'x-default': 'https://taxiserviceksa.com/locations/yanbu/',
        }
    },
    openGraph: {
        title: 'ینبع ٹیکسی سروس | ایئرپورٹ اور انڈسٹریل ٹرانسفر',
        description: 'ینبع میں بہترین ٹیکسی سروس۔ ایئرپورٹ پک اپ اور انڈسٹریل ایریا access کے لیے ماہر ڈرائیورز۔',
        url: 'https://taxiserviceksa.com/ur/locations/yanbu/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/yanbu-waterfront.webp', alt: 'ینبع واٹر فرنٹ' }],
    },
};

export default function YanbuPageUrdu() {
    const services = [
        { name: 'ینبع ایئرپورٹ پک اپ', description: 'پرنس عبدالمحسن ایئرپورٹ (YNB) سے ہوٹل تک', icon: Plane },
        { name: 'انڈسٹریل سٹی ٹرانسپورٹ', description: 'پیٹرو کیمیکل فصیلٹیز اور پورٹ ایریا کے لیے مخصوص سروس', icon: Anchor },
        { name: 'ینبع سے مدینہ ٹیکسی', description: 'ینبع سے مدینہ منورہ (220 کلومیٹر) کا آرام دہ سفر', icon: Car },
        { name: 'ریڈ سی ٹورز', description: 'ینبع کورنیش اور غوطہ خوری کے مراکز تک رسائی', icon: Waves },
    ];

    const yanbuImages = [
        '/yanbu-waterfront.webp',
        '/yanbu-night-lights.webp',
        '/hero-slide-3.webp',
    ];

    const distanceData = [
        { destination: 'ینبع انڈسٹریل سٹی', distance: '15 کلومیٹر', time: '20 منٹ', route: 'ایئرپورٹ روڈ' },
        { destination: 'مدینہ منورہ', distance: '220 کلومیٹر', time: '2.5 - 3 گھنٹے', route: 'روٹ 15' },
        { destination: 'جدہ', distance: '330 کلومیٹر', time: '3.5 گھنٹے', route: 'کوسٹل روڈ' },
        { destination: 'ینبع کمرشل پورٹ', distance: '10 کلومیٹر', time: '15 منٹ', route: 'کنگ عبدالعزیز روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="yanbu-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Yanbu Taxi Service Urdu",
                        "areaServed": { "@type": "City", "name": "Yanbu" },
                        "description": "Professional 24/7 taxi and industrial transport service in Yanbu, Saudi Arabia."
                    })
                }}
            />

            <Hero
                images={yanbuImages}
                h1Text="ینبع ٹیکسی سروس: ایئرپورٹ اور انڈسٹریل سٹی ٹرانسپورٹ"
                bookingFormTitle="ینبع میں ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-primary/20 backdrop-blur-md border border-primary/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        ینبع ٹیکسی سروس
                    </span>
                }
                subtitle="بزنس اور سیاحت کے لیے پریمیم ٹرانسپورٹ"
                location="24/7 ایئرپورٹ اور پورٹ سروس"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="ینبع ٹرانسفر KSA™"
                        description="ینبع کے صنعتی اور سیاحتی شعبے کا قابل اعتماد ساتھی۔ ہم ایئرپورٹ سے لے کر انڈسٹریل ہائی ویز تک ہر جگہ فعال ہیں۔ ہمارے ڈرائیورز سیکیورٹی کلیئرنس اور انڈسٹریل ایریا کے قواعد سے واقف ہیں۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "لائسنس یافتہ", since: "خدمت از" }}
                        metrics={[
                            { label: 'انڈسٹریل کلائنٹس', value: '500+', icon: Building2 },
                            { label: 'ایئرپورٹ پک اپس', value: '5,000+', icon: Plane },
                            { label: '24/7 دستیابی', value: '100%', icon: Clock }
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

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="ینبع انڈسٹریل سٹی گائیڈ: سیکیورٹی چیک پوائنٹس"
                    status="Traffic Alert"
                    lastUpdated="دسمبر 2024"
                    content="ینبع انڈسٹریل سٹی (Yanbu Industrial City) کے کچھ علاقوں میں سیکیورٹی چیک پوائنٹس ہوتے ہیں۔ ہماری تمام گاڑیاں لائسنس یافتہ ہیں، لیکن اگر آپ کسی مخصوص فیکٹری یا پورٹ ایریا جا رہے ہیں تو اپنا 'اہلنا' (Ehalna) یا سیکیورٹی پرمٹ ساتھ رکھیں۔"
                    tags={["ینبع_انڈسٹریل", "سیکیورٹی_پرمٹ", "پورٹ_ٹرانسپورٹ", "بزنس_ٹریول"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="ینبع ایئرپورٹ سے انڈسٹریل سٹی جانے کا بہترین طریقہ کیا ہے؟"
                    intro="ینبع ایئرپورٹ شہر اور انڈسٹریل ایریا سے تھوڑا فاصلے پر ہے۔ یہاں ٹرانسپورٹ کے چند اہم پہلو یہ ہیں:"
                    labels={{ condition: "صورتحال", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'y1',
                            condition: 'بزنس وزٹ (Shift Workers)',
                            question: 'کیا آدھی رات کو ٹیکسی مل سکتی ہے؟',
                            answer: 'جی ہاں۔ ہم 24 گھنٹے کام کرتے ہیں تاکہ شفٹ ورکرز اور بزنس ایگزیکٹوز کو کسی بھی وقت ایئرپورٹ سے لایا جا سکے۔ پہلے سے بکنگ سے گیٹ پر انتظار نہیں کرنا پڑتا۔',
                            citation: '24/7 آپریشنل ڈیٹا'
                        },
                        {
                            id: 'y2',
                            condition: 'فیملی اور سیاحت',
                            question: 'واٹر فرنٹ کے لیے بہترین سواری؟',
                            answer: 'ینبع واٹر فرنٹ (Waterfront) ایئرپورٹ سے 20 منٹ کی دوری پر ہے۔ فیملی کے لیے SUV بہترین ہے جس میں ساحل کی سیر کے لیے کافی جگہ ہوتی ہے۔',
                            citation: 'لوکل ٹورازم گائیڈ'
                        },
                        {
                            id: 'y3',
                            condition: 'ینبع سے مدینہ منورہ',
                            question: 'کیا مدینہ کے لیے ڈائریکٹ ٹیکسی ملتی ہے؟',
                            answer: 'جی ہاں، ہم ینبع سے مدینہ منورہ کے لیے فکسڈ ریٹ پر پریمیم کاریں فراہم کرتے ہیں۔ یہ سفر 2.5 سے 3 گھنٹے کا ہے اور زائرین کے لیے بہت مقبول ہے۔',
                            citation: 'انٹر سٹی روٹ میپ'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="ینبع: انڈسٹریل پاور ہاؤس اور ریڈ سی موتی"
                    explanation="ینبع سعودی عرب کا ایک منفرد شہر ہے جو صنعتی ترقی اور قدرتی خوبصورتی کا حسین امتزاج ہے۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'ینبع انڈسٹریل سٹی (Yanbu RC)',
                            description: 'رائل کمیشن کے زیر انتظام دنیا کے بڑے پیٹرو کیمیکل مراکز میں سے ایک۔ یہاں کا انفراسٹرکچر عالمی معیار کا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Yanbu'
                        },
                        {
                            label: 'ینبع البحر (قدیم شہر)',
                            description: 'ینبع کا وہ حصہ جہاں آپ کو مچھلی کی پرانی منڈی اور تاریخی بلد کی جھلک ملے گی۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/ینبع'
                        },
                        {
                            label: 'غوطہ خوری اور کورنیش',
                            description: 'ینبع اپنے شفاف پانی اور مرجان کی چٹانوں (Coral Reefs) کے لیے مشہور ہے۔ سکوبا ڈائیونگ کے شائقین یہاں کھچے چلے آتے ہیں۔',
                            internalLink: '/ur/locations/yanbu'
                        },
                        {
                            label: 'ینبع ایئرپورٹ (YNB)',
                            description: 'پرنس عبدالمحسن بن عبدالعزیز ایئرپورٹ جو ینبع کو دنیا اور مملکت کے دیگر حصوں سے جوڑتا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Yanbu_Commercial_Port'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="ینبع ٹرانسپورٹ نیٹ ورک"
                    clusters={[
                        {
                            category: "صنعتی خدمات",
                            relevance: "Primary",
                            items: [
                                { label: "انڈسٹریل سٹی پک اپ", url: "/ur/locations/yanbu-industrial" },
                                { label: "پورٹ ٹرانسفر سروس", url: "/services/port-transport" },
                                { label: "کارپوریٹ اکاؤنٹس", url: "/services/corporate" }
                            ]
                        },
                        {
                            category: "سیاحت اور زیارت",
                            relevance: "Secondary",
                            items: [
                                { label: "ینبع سے مدینہ منورہ ٹیکسی", url: "/ur/locations/madinah" },
                                { label: "ریڈ سی واٹر فرنٹ ٹور", url: "/ur/locations/yanbu-waterfront" },
                                { label: "ڈائیونگ سینٹر ٹرانسپورٹ", url: "/services/diving-tours" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='انجینئر احمد باجوہ'
                        reviewerTitle='انڈسٹریل لاجسٹکس مینیجر'
                        reviewDate="15 جنوری 2026"
                        expertise={["ینبع پورٹ آپریشنز", "کارپوریٹ ٹرانسپورٹ", "سیفٹی پروٹوکول"]}
                        labels={{ reviewTitle: "ماہر کی رائے", verifiedReview: "تصدیق شدہ گائیڈ" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">صنعتی معیار</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-primary/30">ینبع کی مخصوص سفری ضروریات</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            ینبع کا سفر دیگر شہروں سے مختلف ہے۔ یہاں وقت کی پابندی اور سیفٹی سب سے اہم ہے۔ ہم انڈسٹریل سٹی کے سخت ضوابط کو سمجھتے ہیں۔
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="ینبع"
                        isRtl={true}
                        labels={{
                            title: "ینبع ٹریول ٹپس",
                            subtitle: "موسم اور تفریح",
                            summerTitle: "گرمی (مئی - ستمبر)",
                            summerText: "ینبع میں گرمی کے ساتھ شام کو نمی (Humidity) بڑھ جاتی ہے۔ واٹر ایکٹیویٹیز کے لیے بہترین وقت ہے، لیکن خشکی پر سفر کے لیے اے سی ٹیکسی ہی واحد حل ہے۔",
                            summerTag: "گرمی اور نمی کا الرٹ",
                            winterTitle: "سردی (نومبر - مارچ)",
                            winterText: "سعودی عرب کے بہترین موسموں میں سے ایک۔ شامیں ٹھنڈی اور خوشگوار ہوتی ہیں۔ فیملی آؤٹنگ اور کیمپنگ کے لیے مثالی۔",
                            winterTag: "سیاحت کا سیزن"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="ینبع ایئرپورٹ (YNB)"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "ینبع ایئرپورٹ سے اہم فاصلے",
                                subtitle: "صنعتی اور سیاحتی مراکز",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*انڈسٹریل سٹی کے چیک پوائنٹس پر 5-10 منٹ اضافی لگ سکتے ہیں۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "ینبع سفری حقائق",
                                subtitle: "صنعتی ورکرز اور سیاحوں کا فیڈ بیک",
                                beliefLabel: "عام تاثر",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثر انداز عوامل"
                            }}
                            points={[
                                {
                                    topic: "ٹیکسی کی دستیابی",
                                    commonBelief: "ایئرپورٹ پر ٹیکسی ہر وقت ملتی ہے۔",
                                    reality: "ینبع ایئرپورٹ چھوٹا ہے، وہاں فلائٹ کے اوقات کے بغیر ٹیکسی ملنا مشکل ہو سکتا ہے۔ پریمیم سروس پہلے سے بک کرنا ہی واحد محفوظ راستہ ہے۔",
                                    truthRange: "پیشگی بکنگ ضروری",
                                    factors: ["فلائٹ شیڈول", "انڈسٹریل شفٹ", "محدود ٹیکسی فلیٹ"]
                                },
                                {
                                    topic: "ینبع سے مدینہ کا سفر",
                                    commonBelief: "بس سب سے بہتر ہے۔",
                                    reality: "بس اسٹیشن جانا اور پھر مدینہ میں ہوٹل تک ٹیکسی کرنا مہنگا اور تھکا دینے والا ہے۔ پرائیویٹ ٹیکسی ڈائریکٹ اور سستی پڑتی ہے۔",
                                    truthRange: "ٹیکسی پریفیرڈ (Preferred)",
                                    factors: ["سامان کی قیمت", "وقت کی بچت", "ڈور ٹو ڈور"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            isRtl={true}
                            route="ینبع سے مدینہ منورہ"
                            labels={{ title: "سفر کا انتخاب کریں", subtitle: "آپ کی ضرورت کے مطابق" }}
                            perspectives={[
                                {
                                    id: "ziyarat-yanbu",
                                    targetAudience: "زائرین",
                                    icon: Heart,
                                    intent: "مدینہ منورہ زیارت",
                                    description: "ینبع میں رہنے والے انجینئرز اور ان کی فیملیز کے لیے مدینہ کا ویک اینڈ ٹرپ بہت عام ہے۔ ہم آپ کو سیدھا مسجد نبوی کے قریب لاتے ہیں۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "2.5 گھنٹے" },
                                        { label: "گاڑی", value: "SUV (Family)" },
                                        { label: "انداز", value: "روحانی / پرسکون" }
                                    ],
                                    visualContext: "ینبع سے مدینہ ہائی وے روٹ ہائی لائٹڈ۔"
                                },
                                {
                                    id: "business-yanbu",
                                    targetAudience: "صنعتی وفود",
                                    icon: Briefcase,
                                    intent: "کارپوریٹ میٹنگز",
                                    description: "ینبع اور مدینہ کے صنعتی یونٹس کے درمیان بزنس ٹریول۔ تیز رفتار اور پیشہ ورانہ ڈرائیورز۔",
                                    structuredFeatures: [
                                        { label: "اسپیڈ", value: "ماڈریٹ (Safe)" },
                                        { label: "سروس", value: "کارپوریٹ سٹینڈرڈ" },
                                        { label: "گاڑی", value: "پریمیم سیڈان" }
                                    ],
                                    visualContext: "بزنس ٹائم لائن جس میں بروقت پہنچنے کی ضمانت شامل ہے۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "ینبع ٹرانسپورٹ FAQ",
                                subtitle: "آپ کے سوالات، ہمارے جوابات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "کیا ینبع ایئرپورٹ سے انڈسٹریل سٹی کا کرایہ فکس ہے؟",
                                    shortAnswer: "جی ہاں (90 - 150 ریال)",
                                    detailedAnswer: "منزل کے فاصلے اور گاڑی کی قسم کے مطابق ریٹ فکس ہوتا ہے۔ کوئی سرپرائز چارجز نہیں ہوتے۔",
                                    perspectives: [
                                        { role: "بزنس", icon: "Briefcase", insight: "کارپوریٹ انوائس اور رسید (Receipt) فراہم کی جاتی ہے۔" }
                                    ]
                                },
                                {
                                    question: "ینبع سے مدینہ جانے کا بہترین وقت؟",
                                    shortAnswer: "فجر کے بعد یا عصر کے بعد",
                                    detailedAnswer: "دوپہر کی تپش سے بچنے کے لیے صبح جلدی یا سہ پہر کا وقت بہترین ہے۔",
                                    perspectives: [
                                        { role: "سیاح", icon: "Compass", insight: "راستے کی پہاڑی وادیوں (Valleys) کا نظارہ دن کی روشنی میں بہترین ہوتا ہے۔" }
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
                            <span className="text-sm font-semibold">ینبع کمونٹی</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu">
                            مسافروں کی رائے
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Yanbu" />
                        <QuestionsDisplay location="Yanbu" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Yanbu" />
                        <QuestionForm locationName="Yanbu" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="ینبع"
                    isRtl={true}
                    labels={{ title: "ینبع سے جڑے شہر", subtitle: "سعودی عرب کا سفر", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'مدینہ منورہ', url: '/ur/locations/madinah', description: 'قریبی بڑا شہر' },
                        { name: 'جدہ', url: '/ur/locations/jeddah', description: 'کمرشل مرکز' },
                        { name: 'مکہ مکرمہ', url: '/ur/locations/makkah', description: 'عمرہ ٹرانسفر' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-primary/50">ینبع میں پروفیشنل ٹیکسی کے لیے کوٹیشن حاصل کریں</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-urdu">
                        انڈسٹریل سٹی یا ایئرپورٹ ٹرانسفر کے لیے ابھی رابطہ کریں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg px-12 py-8 rounded-full">
                            بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
