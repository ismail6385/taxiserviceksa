import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Mountain, Cloud, TreePine, Camera } from 'lucide-react';
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
    title: 'ابہا ٹیکسی سرور | جبلِ سودہ اور عسیر ٹورازم',
    description: 'ابہا میں بہترین ٹیکسی اور ٹورسٹ ٹرانسپورٹ۔ جبلِ سودہ، حبالہ گاؤں اور ابہا ایئرپورٹ کے لیے پریمیم سواری۔ پہاڑی راستوں کے ماہر ڈرائیورز۔',
    keywords: ['ابہا ٹیکسی', 'جبل سودہ ٹور', 'ابہا ایئرپورٹ ٹیکسی', 'عسیر ٹرانسپورٹ', 'حبالہ گاؤں زیارت'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/abha/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/abha/',
            'ar': 'https://taxiserviceksa.com/ar/locations/abha/',
            'ur': 'https://taxiserviceksa.com/ur/locations/abha/',
            'x-default': 'https://taxiserviceksa.com/locations/abha/',
        }
    },
    openGraph: {
        title: 'ابہا ٹیکسی اور ٹورسٹ گائیڈ | بادلوں کے درمیان سفر',
        description: 'ابہا کے خوبصورت پہاڑوں اور وادیوں کی سیر کے لیے آرام دہ ٹیکسی۔',
        url: 'https://taxiserviceksa.com/ur/locations/abha/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/abha.webp', alt: 'ابہا پہاڑ' }],
    },
};

export default function AbhaPageUrdu() {
    const services = [
        { name: 'ابہا ایئرپورٹ پک اپ', description: 'ایئرپورٹ سے ابہا شہر اور جبلِ سودہ کے ریزورٹس تک', icon: Plane },
        { name: 'جبلِ سودہ ماؤنٹین ٹور', description: 'سعودی عرب کی بلند ترین چوٹی اور کیبل کار کی سیر', icon: Mountain },
        { name: 'حبالہ تاریخی گاؤں', description: 'تاریخی لٹکتے ہوئے گاؤں (Hanging Village) کا مکمل ٹرپ', icon: Camera },
        { name: 'عسیر نیشنل پارک ٹور', description: 'فیملی پکنک اور ہائیکنگ پوائنٹس تک رسائی', icon: TreePine },
    ];

    const distanceData = [
        { destination: 'ابہا ایئرپورٹ (AHB)', distance: '20 کلومیٹر', time: '25 منٹ', route: 'کنگ فہد روڈ' },
        { destination: 'جبلِ سودہ (Al Soudah)', distance: '28 کلومیٹر', time: '40 منٹ', route: 'سودہ ماؤنٹین روڈ' },
        { destination: 'حبالہ گاؤں (Habalah)', distance: '55 کلومیٹر', time: '1 گھنٹہ', route: 'خمیس مشیط روڈ' },
        { destination: 'خمیس مشیط (Khamis Mushait)', distance: '25 کلومیٹر', time: '30 منٹ', route: 'مین ہائی وے' },
        { destination: 'جیزان (Jizan)', distance: '200 کلومیٹر', time: '3 گھنٹے', route: 'عقبہ ضلع' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="abha-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Abha Mountains Taxi Service Urdu",
                        "areaServed": { "@type": "City", "name": "Abha" },
                        "description": "Premium mountain-ready taxi service for tourists in Abha and Asir region."
                    })
                }}
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-1.webp']}
                h1Text="ابہا ٹیکسی سرور: پہاڑوں اور بادلوں کا سحر انگیز سفر"
                bookingFormTitle="ابہا میں سواری کوٹیشن حاصل کریں"
                title={
                    <span className="bg-emerald-900/40 backdrop-blur-md border border-emerald-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        عسیر ٹورسٹ ٹرانسپورٹ
                    </span>
                }
                subtitle="ابہا کی پرسکون وادیوں میں آپ کا بااعتماد ساتھی"
                location="ابہا، سودہ اور خمیس مشیط"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="ابہا ٹورز KSA™"
                        description="سعودی عرب کے سرد ترین اور خوبصورت ترین شہر ابہا میں سیاحوں کے لیے مخصوص سروس۔ ہمارے ڈرائیورز پہاڑی راستوں اور سیاحتی مقامات سے بخوبی واقف ہیں۔ پریمیم اور محفوظ گاڑیاں۔"
                        foundingDate="2016"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'ٹورسٹ ٹرپس', value: '8,000+', icon: TreePine },
                            { label: 'پہاڑی سفر', value: '12k+', icon: Mountain },
                            { label: 'کسٹمر ریٹنگ', value: '4.9/5', icon: Star }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            ٹور کوٹیشن حاصل کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="دھند اور پہاڑی راستوں پر انتباہ"
                    status="Traffic Alert"
                    lastUpdated="فروری 2025"
                    content="المنطقۃ السودہ (Al Soudah) میں اکثر شدید دھند کی وجہ سے حدِ نگاہ متاثر ہوتی ہے۔ ہم مشورہ دیتے ہیں کہ شام کے وقت خود گاڑی چلانے کے بجائے ہمارے تجربہ کار ڈرائیورز کی خدمات حاصل کریں جو ان راستوں کے ماہر ہیں۔"
                    tags={["ابہا_موسم", "دھند_الرٹ", "سودہ_پہاڑ", "محفوظ_سفر"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="ابہا میں سیاحت کے لیے ٹیکسی کیوں ضروری ہے؟"
                    intro="ابہا کے ٹورسٹ پوائنٹس ایک دوسرے سے فاصلے پر اور پہاڑی بلندیوں پر واقع ہیں۔"
                    labels={{ condition: "سفری ضرورت", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'a1',
                            condition: 'پہاڑی راستہ',
                            question: 'کیا عام ٹیکسی جبلِ سودہ جا سکتی ہے؟',
                            answer: 'بلکل، لیکن پہاڑی چڑھائی کے لیے مضبوط انجن اور بہترین بریک سسٹم والی گاڑی ضروری ہے۔ ہماری تمام گاڑیاں پہاڑی سفر کے لیے فٹنس چیک (Fitness Check) پاس شدہ ہیں۔',
                            citation: 'ٹیکنیکل ریویو'
                        },
                        {
                            id: 'a2',
                            condition: 'کیبل کار اور پکنک',
                            question: 'کیا ڈرائیور ہمارے ساتھ انتظار کرے گا؟',
                            answer: 'جی ہاں، ہمارے پکنک پیکیجز میں "ویٹنگ ٹائم" (Waiting Time) شامل ہوتا ہے تاکہ آپ کیبل کار یا پارک میں اطمینان سے وقت گزار سکیں۔',
                            citation: 'ٹور پیکیج'
                        },
                        {
                            id: 'a3',
                            condition: 'خمیس مشیط سے ابہا',
                            question: 'کیا خمیس مشیط سے پک اپ مل سکتا ہے؟',
                            answer: 'جی ہاں، ہم ابہا اور خمیس مشیط کے پورے جڑواں شہروں کے ریجن میں پک اینڈ ڈراپ فراہم کرتے ہیں۔',
                            citation: 'سروس ایریا'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="عسیر ریجن: فطرت اور بادلوں کا گھر"
                    explanation="ابہا سعودی عرب کا وہ واحد شہر ہے جہاں بادل پہاڑوں سے ٹکراتے نظر آتے ہیں۔"
                    labels={{ relatedTopic: "سیاحتی مقام", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'جبلِ سودہ (Mount Sawda)',
                            description: 'سعودی عرب کا بلند ترین پہاڑ جو سطح سمندر سے 3000 میٹر بلند ہے۔ یہاں پورا سال موسم خوشگوار رہتا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Jabal_Sawda'
                        },
                        {
                            label: 'حبالہ گاؤں (The Hanging Village)',
                            description: 'ایک قدیم تاریخی گاؤں جو پہاڑ کی چٹان پر لٹکا ہوا محسوس ہوتا ہے، اب اسے کیبل کار کے ذریعے دیکھا جا سکتا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Al-Habala'
                        },
                        {
                            label: 'عسیر نیشنل پارک',
                            description: 'قدرتی جنگل اور ہائیکنگ کے لیے بہترین جگہ، جہاں نایاب پرندے اور خوشگوار ہوائیں آپ کا استقبال کرتی ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Asir_National_Park'
                        },
                        {
                            label: 'ابہا ڈیم اور جھیل',
                            description: 'شہر کے قلب میں واقع ایک خوبصورت جھیل جس کے گرد واک ویز اور پارکس موجود ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Abha'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="ابہا ٹورسٹ روٹس"
                    clusters={[
                        {
                            category: "پہاڑی مہم جوئی",
                            relevance: "Primary",
                            items: [
                                { label: "جبلِ سودہ ٹور", url: "/ur/locations/abha" },
                                { label: "کیبل کار ایکسپیریئنس", url: "/ur/locations/abha" },
                                { label: "حبالہ ہینگنگ ولیج", url: "/ur/locations/abha" }
                            ]
                        },
                        {
                            category: "شہری سیر و تفریح",
                            relevance: "Secondary",
                            items: [
                                { label: "آرٹ اسٹریٹ ابہا", url: "/ur/locations/abha" },
                                { label: "خمیس مشیط مارکیٹ", url: "/ur/locations/abha" },
                                { label: "ابہا ایئرپورٹ ٹرانسفر", url: "/services/airport-transfers" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='خالد عسیری'
                        reviewerTitle='لوکل ٹورازم گائیڈ'
                        reviewDate="15 مارچ 2026"
                        expertise={["عسیر جغرافیہ", "پہاڑی ڈرائیونگ", "لوکل ہسٹری"]}
                        labels={{ reviewTitle: "ماہر کی رائے", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 font-urdu">
                        <span className="bg-emerald-100 text-emerald-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">فطرت کے قریب</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">ابہا ٹورازم سروسز</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            پہاڑوں کے درمیان ایک آرام دہ اور محفوظ سفر کا تجربہ کریں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-emerald-900 group-hover:text-white transition-colors" />
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
                        city="ابہا"
                        isRtl={true}
                        labels={{
                            title: "ابہا ٹریول گائیڈ",
                            subtitle: "بہترین موسم کا انتخاب",
                            summerTitle: "گرمی (جون - اگست)",
                            summerText: "جب سعودی عرب جل رہا ہوتا ہے، ابہا میں درجہ حرارت 20-25 ڈگری رہتا ہے۔ یہ ابہا کا 'پیک سیزن' ہے، اس لیے سواری پہلے سے کوٹیشن حاصل کریں۔",
                            summerTag: "سیاحت کا سب سے بہترین وقت",
                            winterTitle: "سردی (نومبر - فروری)",
                            winterText: "ابہا میں شدید سردی اور دھند ہوتی ہے۔ برفباری (Hale) بھی ہو سکتی ہے۔ گرم کپڑے لازمی ساتھ رکھیں۔",
                            winterTag: "شدید سردی اور دھند کا الرٹ"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="ابہا سٹی سینٹر"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "ابہا اور گردونواح کے فاصلے",
                                subtitle: "پہاڑی راستوں کا دورانیہ",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*پہاڑی راستوں پر رفتار کم ہونے کی وجہ سے وقت زیادہ لگ سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "ابہا میں سفر: حقائق",
                                subtitle: "سیاحوں کے لیے ضروری معلومات",
                                beliefLabel: "عام خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "خود گاڑی چلانا بمقابلہ ڈرائیور",
                                    commonBelief: "گاڑی کرائے پر لے کر خود چلانا بہتر ہے۔",
                                    reality: "ابہا کے کئی موڑ بہت خطرناک اور بادلوں کی وجہ سے ناپید ہو جاتے ہیں۔ مقامی ڈرائیور ان راستوں کے عادی ہوتے ہیں جو آپ کے سفر کو محفوظ بناتے ہیں۔",
                                    truthRange: "پیشہ ور ڈرائیور پریفیرڈ (Preferred)",
                                    factors: ["شدید دھند", "خطرناک موڑ", "تھکن"]
                                },
                                {
                                    topic: "جبلِ سودہ میں اے سی",
                                    commonBelief: "گاڑی کا اے سی ہر وقت ضروری ہے۔",
                                    reality: "جبلِ سودہ میں اے سی کی ضرورت شاذ و نادر ہی پڑتی ہے، زیادہ تر لوگ کھڑکیاں کھول کر قدرتی ٹھنڈی ہوا کا مزہ لینا پسند کرتے ہیں۔",
                                    truthRange: "قدرتی ٹھنڈک (2500m+)",
                                    factors: ["بلندی", "قدرتی ہوا", "موسم"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16 text-right">
                        <RoutePerspective
                            isRtl={true}
                            route="عسیر مہم جوئی"
                            labels={{ title: "اپنی ترجیح بتائیں", subtitle: "آپ کا سفر، آپ کی پسند" }}
                            perspectives={[
                                {
                                    id: "adventure-seeker",
                                    targetAudience: "مہم جو سیاح",
                                    icon: Mountain,
                                    intent: "ایڈونچر",
                                    description: "سودہ کی چوٹی، ہائیکنگ اور کیبل کار کا ایڈونچر۔ دور دراز وادیوں کی تلاش۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "8-10 گھنٹے" },
                                        { label: "انداز", value: "مہم جو" },
                                        { label: "گاڑی", value: "4x4 / SUV" }
                                    ],
                                    visualContext: "پہاڑی چوٹیوں کا روٹ نقشہ۔"
                                },
                                {
                                    id: "family-nature",
                                    targetAudience: "فیملی / بچے",
                                    icon: TreePine,
                                    intent: "آرام اور پکنک",
                                    description: "گرین ماؤنٹین، ابہا جھیل اور آسان پارک پوائنٹس۔ فیملی کے ساتھ پرسکون دن۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "5-6 گھنٹے" },
                                        { label: "انداز", value: "پرسکون" },
                                        { label: "گاڑی", value: "فیملی وین / SUV" }
                                    ],
                                    visualContext: "فیملی فرینڈلی اسپاٹس۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "ابہا FAQ",
                                subtitle: "آپ کے سوالات، ہمارے جوابات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "ابہا میں سب سے اچھی جگہ کون سی ہے؟",
                                    shortAnswer: "جبلِ سودہ اور آرٹ اسٹریٹ۔",
                                    detailedAnswer: "اگر آپ فطرت پسند ہیں تو سودہ بہترین ہے، اور اگر آپ کو شہر کی رونق پسند ہے تو آرٹ اسٹریٹ اور ہائی سٹی (High City) لاجواب ہیں۔",
                                    perspectives: [
                                        { role: "تجویز", icon: "Cloud", insight: "بادلوں کا نظارہ صبح سویرے بہترین ہوتا ہے۔" }
                                    ]
                                },
                                {
                                    question: "کیا ابہا ایئرپورٹ پر ٹیکسی آسانی سے مل جاتی ہے؟",
                                    shortAnswer: "جی ہاں، لیکن آن لائن بکنگ سستی پڑتی ہے۔",
                                    detailedAnswer: "ایئرپورٹ پر براہِ راست ٹیکسی کے ریٹ زیادہ ہو سکتے ہیں۔ ہم سے پہلے بک کرنے پر آپ کو فکسڈ ریٹ اور پریمیم گاڑی ملتی ہے۔",
                                    perspectives: [
                                        { role: "سفر", icon: "Plane", insight: "فلائٹ لیٹ ہونے پر بھی ہم چارج نہیں کرتے۔" }
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
                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">سیاحوں کے تاثرات</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu text-right">
                            ابہا کی ٹھنڈی ہوائیں اور یادیں
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Abha" />
                        <QuestionsDisplay location="Abha" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Abha" />
                        <QuestionForm locationName="Abha" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="ابہا"
                    isRtl={true}
                    labels={{ title: "قریبی شہر", subtitle: "جنوبی سعودی عرب کا سفر", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'جیزان', url: '/ur/locations/[city]', description: 'ساحلی شہر' },
                        { name: 'خمیس مشیط', url: '/ur/locations/[city]', description: 'مین مارکیٹ' },
                        { name: 'نجران', url: '/ur/locations/[city]', description: 'تاریخی ریجن' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-emerald-500/50">ابہا کے بادلوں میں اپنی سواری کوٹیشن حاصل کریں</h2>
                    <p className="text-xl text-emerald-200/60 mb-8 leading-relaxed font-urdu">
                        ایک محفوظ اور خوبصورت پہاڑی سفر کا آغاز کریں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-100 font-bold text-lg px-12 py-8 rounded-full">
                            بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
