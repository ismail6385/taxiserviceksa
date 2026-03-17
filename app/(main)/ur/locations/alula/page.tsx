import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Compass, Camera, Mountain } from 'lucide-react';
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
    title: 'العلا ٹیکسی سروس | مدائن صالح ٹورز اور ایئرپورٹ ٹرانسفر',
    description: 'العلا میں بہترین ٹیکسی سروس۔ ہیگرا (مدائن صالح) کے تاریخی ٹورز اور ایئرپورٹ سے ہوٹل تک آرام دہ سفر۔ 4x4 گاڑیاں دستیاب ہیں۔',
    keywords: ['العلا ٹیکسی', 'مدائن صالح ٹور', 'ہیگرا ٹرانسپورٹ', 'العلا ایئرپورٹ ٹیکسی', 'العلا تاریخی زیارات'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/alula/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/alula/',
            'ar': 'https://taxiserviceksa.com/ar/locations/alula/',
            'ur': 'https://taxiserviceksa.com/ur/locations/alula/',
            'x-default': 'https://taxiserviceksa.com/locations/alula/',
        }
    },
    openGraph: {
        title: 'العلا ٹیکسی اور ٹورز | ہیگرا کی سیر',
        description: 'العلا کے تاریخی مقامات کی سیر کے لیے اپنی پرائیویٹ ٹیکسی کے لیے کوٹیشن حاصل کریں۔ 4x4 گاڑیاں اور ماہر ڈرائیورز۔',
        url: 'https://taxiserviceksa.com/ur/locations/alula/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp', alt: 'ہیگرا، العلا' }],
    },
};

export default function AlUlaPageUrdu() {
    const services = [
        { name: 'العلا ایئرپورٹ ٹرانسفر', description: 'العلا انٹرنیشنل ایئرپورٹ (ULH) سے ہوٹل اور ریزورٹس تک', icon: Plane },
        { name: 'ہیگرا (مدائن صالح) ٹور', description: 'یونیسکو کے عالمی ورثہ مقامات کی سیر کے لیے 4x4 گاڑیاں', icon: Compass },
        { name: 'تاریخی مقامات کی سیر', description: 'دادان، جبل اکرامہ اور ہاتھی پہاڑ (Elephant Rock) کے ٹورز', icon: MapPin },
        { name: 'العلا سے خیبر فورٹ', description: 'العلا اور خیبر کے قدیم قلعوں کے درمیان انٹرسٹی سفر', icon: Car },
    ];

    const alulaImages = [
        '/alula-hegra-tombs.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const distanceData = [
        { destination: 'ہیگرا (مدائن صالح)', distance: '22 کلومیٹر', time: '25 منٹ', route: 'مین ہائی وے' },
        { destination: 'العلا ایئرپورٹ', distance: '30 کلومیٹر', time: '35 منٹ', route: 'ایئرپورٹ روڈ' },
        { destination: 'ہاتھی پہاڑ (Elephant Rock)', distance: '15 کلومیٹر', time: '20 منٹ', route: 'ڈیزرٹ روڈ' },
        { destination: 'اولڈ ٹاؤن العلا', distance: '5 کلومیٹر', time: '10 منٹ', route: 'سٹی سینٹر' },
        { destination: 'خیبر فورٹ', distance: '150 کلومیٹر', time: '2 گھنٹے', route: 'مدینہ ہائی وے' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="alula-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "AlUla Heritage Taxi Service Urdu",
                        "areaServed": { "@type": "City", "name": "AlUla" },
                        "description": "Premium heritage tour and airport transfer service in AlUla, Saudi Arabia."
                    })
                }}
            />

            <Hero
                images={alulaImages}
                h1Text="العلا ٹیکسی سروس: ہیگرا ٹورز اور پریمیم ٹرانسپورٹ"
                bookingFormTitle="العلا میں ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-amber-900/40 backdrop-blur-md border border-amber-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        العلا ٹورازم ٹرانسفر
                    </span>
                }
                subtitle="تاریخ کے قدیم صفحات کا سفر"
                location="4x4 ڈیزرٹ ٹورز دستیاب ہیں"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="العلا ہیریٹیج ٹرانسفر™"
                        description="العلا کے صحرائی ماحول اور تاریخی مقامات کے ماہر۔ ہم آپ کو صرف منزل تک نہیں پہنچاتے، بلکہ العلا کی تاریخ کے اہم موڑ بھی دکھاتے ہیں۔ ہماری 4x4 گاڑیاں ہر قسم کے راستے کے لیے تیار ہیں۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'ہیریٹیج ٹورز', value: '3,000+', icon: Compass },
                            { label: '4x4 فلیٹ', value: 'GMC/Land Cruiser', icon: Mountain },
                            { label: 'سیاحوں کا اعتماد', value: '4.9/5', icon: Star }
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
                    topic="العلا ہیگرا (مدائن صالح) اینٹری پرمٹ"
                    status="Insider Tip"
                    lastUpdated="دسمبر 2024"
                    content="ہیگرا (Hegra) کے اندر پرائیویٹ ٹیکسیوں کا داخلہ محدود ہو سکتا ہے۔ ہم آپ کو ہیگرا کے مین پارکنگ ایریا تک پہنچاتے ہیں جہاں سے سرکاری شٹل بسیں شروع ہوتی ہیں۔ دادان اور ہاتھی پہاڑ کے لیے مکمل پرائیویٹ سروس دستیاب ہے۔"
                    tags={["ہیگرا_ٹور", "العلا_پرمٹ", "سیاحتی_معلومات", "ہیریٹیج"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="العلا کے تاریخی مقامات کی سیر کے لیے ٹیکسی کیوں ضروری ہے؟"
                    intro="العلا کے مقامات ایک دوسرے سے کافی فاصلے پر ہیں اور زیادہ تر صحرائی علاقوں میں ہیں۔"
                    labels={{ condition: "سفری ضرورت", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'a1',
                            condition: 'فیملی اور فوٹوگرافی',
                            question: 'کیا ہم ہر جگہ اپنی مرضی سے رک سکتے ہیں؟',
                            answer: 'جی ہاں، پرائیویٹ ٹیکسی کا فائدہ ہی یہ ہے کہ آپ ہاتھی پہاڑ (Elephant Rock) یا خوبصورت مناظر پر اپنی مرضی سے فوٹوگرافی کے لیے رک سکتے ہیں۔ ٹور بسوں میں یہ سہولت نہیں ہوتی۔',
                            citation: 'ٹورازم فیڈ بیک'
                        },
                        {
                            id: 'a2',
                            condition: 'موسم (شدید گرمی)',
                            question: 'کیا اے سی گاڑیاں ٹھنڈی ہوتی ہیں؟',
                            answer: 'بالکل۔ العلا کی گرمی میں ہم صرف جدید اور طاقتور اے سی والی گاڑیاں استعمال کرتے ہیں تاکہ آپ کا سفر پرسکون رہے۔',
                            citation: 'کسٹمر ریٹنگ'
                        },
                        {
                            id: 'a3',
                            condition: 'ایئرپورٹ ٹرانسفر',
                            question: 'ایئرپورٹ سے ہوٹل کتنا دور ہے؟',
                            answer: 'العلا ایئرپورٹ شہر اور ریزورٹس سے 30 کلومیٹر دور ہے۔ رات کی فلائٹس کے لیے پہلے سے ٹیکسی بک کرنا بہت ضروری ہے کیونکہ ایئرپورٹ پر ٹیکسیوں کی کمی ہوتی ہے۔',
                            citation: 'ایئرپورٹ ٹریفک رپورٹ'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="العلا: ایک زندہ عجائب گھر"
                    explanation="العلا سعودی عرب کا وہ ہیرا ہے جو صدیوں پرانی نبطی اور دیگر قدیم تہذیبوں کی کہانی سناتا ہے۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'ہیگرا (مدائن صالح)',
                            description: 'سعودی عرب کا پہلا یونیسکو عالمی ورثہ مقام۔ یہاں نبطی تہذیب کے تراشے ہوئے مقبرے آج بھی موجود ہیں۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/مدائن_صالح'
                        },
                        {
                            label: 'ہاتھی پہاڑ (Jabal Al-Fil)',
                            description: 'ایک قدرتی پہاڑی چٹان جو ہاتھی کی شکل کی ہے۔ یہ العلا کا سب سے مشہور فوٹو گرافک پوائنٹ ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Al-Ula'
                        },
                        {
                            label: 'دادان اور جبل اکرامہ',
                            description: 'قدیم مکتوبات اور پتھروں پر نقش نگاری کے لیے مشہور مقامات جو لحیان تہذیب کی یاد دلاتے ہیں۔',
                            internalLink: '/ur/locations/alula'
                        },
                        {
                            label: 'العلا اولڈ ٹاؤن',
                            description: 'مٹی کے گھروں اور پتھروں سے بنا پرانا شہر جو اب سیاحت کا ایک خوبصورت مرکز بن چکا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Al-Ula_Old_Town'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="العلا ٹورازم نیٹ ورک"
                    clusters={[
                        {
                            category: "تاریخی ٹورز",
                            relevance: "Primary",
                            items: [
                                { label: "ہیگرا ٹور ٹرانسفر", url: "/ur/locations/alula-hegra" },
                                { label: "تاریخی العلا اولڈ ٹاؤن", url: "/ur/locations/alula-old-town" },
                                { label: "پتھروں کی نقش نگاری ٹور", url: "/services/heritage" }
                            ]
                        },
                        {
                            category: "سیاحتی روابط",
                            relevance: "Secondary",
                            items: [
                                { label: "العلا سے خیبر ٹرپ", url: "/locations/khayber-fort" },
                                { label: "مدینہ سے العلا ٹیکسی", url: "/ur/locations/madinah" },
                                { label: "ہاتھی پہاڑ نائٹ ٹور", url: "/services/night-tours" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='کیپٹن طارق العلاوی'
                        reviewerTitle='سینئر ہیریٹیج گائیڈ و ڈرائیور'
                        reviewDate="10 فروری 2026"
                        expertise={["العلا روٹس", "ڈیزرٹ ڈرائیونگ", "تاریخی مقامات"]}
                        labels={{ reviewTitle: "ماہر کی رائے", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-amber-100 text-amber-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">تاریخی ورثہ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-amber-500/30">العلا کی سیاحتی خدمات</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            العلا کا سفر عام ٹیکسی سے ممکن نہیں، یہاں آپ کو ایک ایسے ساتھی کی ضرورت ہے جو راستوں اور تاریخ سے واقف ہو۔
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
                        city="العلا"
                        isRtl={true}
                        labels={{
                            title: "العلا ٹریول گائیڈ",
                            subtitle: "بہترین وقت اور موسم",
                            summerTitle: "موسم گرما (اپریل - اکتوبر)",
                            summerText: "العلا میں گرمی بہت شدید ہوتی ہے۔ دن میں 11 سے شام 4 بجے تک زیارات سے گریز کریں۔ رات کے وقت ستارے دیکھنا (Stargazing) بہترین ہے۔",
                            summerTag: "گرمی کا الرٹ: نائٹ ٹورز بہتر ہیں",
                            winterTitle: "موسم سرما (نومبر - مارچ)",
                            winterText: "العلا کے لیے بہترین وقت۔ دن بھر باہر گھومنا ممکن ہوتا ہے۔ راتیں ٹھنڈی ہوتی ہیں، گرم کپڑے ساتھ رکھیں۔",
                            winterTag: "ٹورازم کا بہترین سیزن"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="العلا سٹی سینٹر"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "العلا کے درمیان فاصلے",
                                subtitle: "تاریخی مراکز تک رسائی",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*پتھریلے راستوں پر وقت زیادہ لگ سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "العلا سفر: حقائق",
                                subtitle: "سیاحوں کے لیے مفید معلومات",
                                beliefLabel: "عام خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "ٹیکسی بمقابلہ رینٹل کار",
                                    commonBelief: "گاڑی کرائے پر لینا سب سے بہتر ہے۔",
                                    reality: "صحرائی راستوں اور ریت میں گاڑی چلانا خطرناک ہو سکتا ہے۔ لوکل ڈرائیور کے ساتھ آپ بے فکر ہو کر مناظر سے لطف اندوز ہو سکتے ہیں۔",
                                    truthRange: "پروفیشنل ڈرائیور بہتر ہے",
                                    factors: ["ریت میں پھنسنا", "راستوں کا نہ پتہ ہونا", "تھکاوٹ"]
                                },
                                {
                                    topic: "کھانے پینے کے اسٹاپس",
                                    commonBelief: "ہر جگہ ریسٹورنٹ مل جائیں گے۔",
                                    reality: "تاریخی مقامات کے قریب سہولیات محدود ہیں۔ ہمارا ڈرائیور آپ کو بہترین لوکل ریسٹورنٹس اور کیفے پر لے جا سکتا ہے۔",
                                    truthRange: "محدود آپشنز",
                                    factors: ["اولڈ ٹاؤن", "ریزورٹس", "لوکل شاپس"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            isRtl={true}
                            route="العلا ہیریٹیج ٹریل"
                            labels={{ title: "آپ کا سفری انداز", subtitle: "سیاحت کی قسم کے مطابق انتخاب" }}
                            perspectives={[
                                {
                                    id: "history-buff",
                                    targetAudience: "تاریخ کے دلدادہ",
                                    icon: Compass,
                                    intent: "گہری معلومات",
                                    description: "دادان، ہیگرا اور اولڈ ٹاؤن کا تفصیلی دورہ۔ ڈرائیور جو ان جگہوں کی تاریخ اور کہانیوں سے واقف ہو۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "مکمل دن (Full Day)" },
                                        { label: "فوکس", value: "تاریخ و مہم جوئی" },
                                        { label: "گاڑی", value: "آرام دہ 4x4" }
                                    ],
                                    visualContext: "تاریخی روٹ میپ ہائی لائٹڈ۔"
                                },
                                {
                                    id: "insta-traveler",
                                    targetAudience: "فوٹوگرافرز / سیاح",
                                    icon: Camera,
                                    intent: "خوبصورت یادیں",
                                    description: "ہاتھی پہاڑ، جبل اکرامہ اور ریزورٹس کے بہترین فوٹو گرافک پوائنٹس پر مختصر اسٹاپس۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "4-6 گھنٹے" },
                                        { label: "فوکس", value: "فوٹوگرافی و مناظر" },
                                        { label: "گاڑی", value: "سیڈان یا SUV" }
                                    ],
                                    visualContext: "فوٹوجینک پوائنٹس کا نقشہ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "العلا ٹور FAQ",
                                subtitle: "سیاحوں کے منتخب کردہ سوالات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "ہیگرا دکھانے کا کتنا کرایہ ہے؟",
                                    shortAnswer: "250 - 450 ریال",
                                    detailedAnswer: "یہ کرایہ ہوٹل سے ہیگرا پارکنگ تک اور واپسی کا ہے۔ ہیگرا کے اندر جانے کے لیے آپ کو الگ سے بکنگ کرنی ہوتی ہے۔",
                                    perspectives: [
                                        { role: "مشورہ", icon: "Shield", insight: "ویک اینڈ پر رش زیادہ ہوتا ہے، پہلے سے بکنگ بہتر ہے۔" }
                                    ]
                                },
                                {
                                    question: "کیا العلا میں رات کو ٹیکسی ملتی ہے؟",
                                    shortAnswer: "جی ہاں، کال پر دستیاب ہے۔",
                                    detailedAnswer: "شہر میں چلتی ٹیکسیاں کم ہیں، لیکن فون یا ویب سائٹ سے بکنگ پر آپ کو 24 گھنٹے سروس مل سکتی ہے۔",
                                    perspectives: [
                                        { role: "رات کا سفر", icon: "Star", insight: "رات کے وقت العلا کے پہاڑوں کا منظر جادوئی ہوتا ہے۔" }
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
                            <span className="text-sm font-semibold">کمونٹی کے خیالات</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu">
                            سیاحوں کے تبصرے
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="AlUla" />
                        <QuestionsDisplay location="AlUla" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="AlUla" />
                        <QuestionForm locationName="AlUla" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="العلا"
                    isRtl={true}
                    labels={{ title: "العلا سے دیگر مقامات", subtitle: "سعودی عرب کا قدیم ورثہ", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'خیبر فورٹ', url: '/ur/locations/khayber-fort', description: 'تاریخی قلعے' },
                        { name: 'مدینہ منورہ', url: '/ur/locations/madinah', description: 'مسجد نبوی' },
                        { name: 'ینبع ساحل', url: '/ur/locations/yanbu', description: 'سمندری تفریح' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-amber-500/50">العلا کے جادوئی سفر کی بکنگ کریں</h2>
                    <p className="text-xl text-amber-200/60 mb-8 leading-relaxed font-urdu">
                        تاریخی مقامات اور صحرا کی خوبصورتی کو ماہر گائیڈ و ڈرائیور کے ساتھ دیکھیں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-amber-950 hover:bg-amber-100 font-bold text-lg px-12 py-8 rounded-full">
                            العلا ٹیکسی کے لیے کوٹیشن حاصل کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
