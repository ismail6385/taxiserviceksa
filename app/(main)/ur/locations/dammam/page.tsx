import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Waves, Building, Ship, Anchor } from 'lucide-react';
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
    title: 'دمام ٹیکسی سروس | ایئرپورٹ اور ایسٹرن پروونس ٹرانسفر',
    description: 'دمام میں بہترین ٹیکسی سروس۔ کنگ فہد ایئرپورٹ، الخبر، اور جبیل کے لیے آرام دہ سفر۔ فیملی اور بزنس ٹرپس کے لیے محفوظ سواری۔',
    keywords: ['دمام ٹیکسی', 'کنگ فہد ایئرپورٹ ٹیکسی', 'دمام سے الخبر ٹیکسی', 'دمام ٹرانسپورٹ', 'ہاف مون بے ٹرپ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/dammam/',
            'ar': 'https://taxiserviceksa.com/ar/locations/dammam/',
            'ur': 'https://taxiserviceksa.com/ur/locations/dammam/',
            'x-default': 'https://taxiserviceksa.com/locations/dammam/',
        }
    },
    openGraph: {
        title: 'دمام اور الخبر ٹیکسی سروس | ایسٹرن پروونس کا سفر',
        description: 'دمام کے ساحل اور انڈسٹریل ایریاز کے لیے پریمیم ٹرانسپورٹ۔',
        url: 'https://taxiserviceksa.com/ur/locations/dammam/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/dammam.webp', alt: 'دمام سٹی' }],
    },
};

export default function DammamPageUrdu() {
    const services = [
        { name: 'کنگ فہد ایئرپورٹ ٹرانسفر', description: 'ایئرپورٹ (DMM) سے دمام، الخبر اور جبیل تک', icon: Plane },
        { name: 'دمام-الخبر سٹی شٹل', description: 'ٹرائی سٹی ایریا میں روزانہ کی بنیاد پر سفر', icon: Car },
        { name: 'ہاف مون بے ٹور', description: 'ریزورٹس اور بیچ پکنک کے لیے فیملی گاڑیاں', icon: Waves },
        { name: 'جبیل انڈسٹریل ٹرانسفر', description: 'بزنس مسافروں کے لیے جبیل اور انڈسٹریل سٹی کی سروس', icon: Building },
    ];

    const distanceData = [
        { destination: 'کنگ فہد ایئرپورٹ (DMM)', distance: '45 کلومیٹر', time: '40 منٹ', route: 'ایئرپورٹ روڈ' },
        { destination: 'الخبر (Al Khobar)', distance: '25 کلومیٹر', time: '25 منٹ', route: 'کنگ فہد ہائی وے' },
        { destination: 'ہاف مون بے ریزورٹس', distance: '40 کلومیٹر', time: '35 منٹ', route: 'دھاراں روڈ' },
        { destination: 'جبیل انڈسٹریل سٹی', distance: '100 کلومیٹر', time: '1 گھنٹہ 10 منٹ', route: 'ابو حدریہ ہائی وے' },
        { destination: 'ریاض (دارالحکومت)', distance: '400 کلومیٹر', time: '4 گھنٹے', route: 'ہائی وے 40' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="dammam-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Dammam Premium Taxi Service Urdu",
                        "areaServed": { "@type": "City", "name": "Dammam" },
                        "description": "Professional 24/7 taxi service in Dammam and Eastern Province."
                    })
                }}
            />

            <Hero
                images={['/hero-slide-2.webp', '/hero-slide-3.webp']}
                h1Text="دمام ٹیکسی سروس: ساحلی شہر اور ایئرپورٹ ٹرانسفر"
                bookingFormTitle="دمام میں ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-cyan-900/40 backdrop-blur-md border border-cyan-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مشرقی ریجن ٹرانسپورٹ
                    </span>
                }
                subtitle="ایسٹرن پروونس کا سب سے بھروسہ مند نام"
                location="دمام، الخبر اور دھاراں"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="دمام ٹیکسی ماہر KSA™"
                        description="دمام اور الخبر کے درمیان روزانہ ہزاروں مسافروں کا اعتماد۔ ہماری سروس ایئرپورٹ، انڈسٹریل سٹی اور ساحلی تفریح گاہوں کو آپس میں جوڑتی ہے۔ جدید فلیٹ اور پیشہ ور ڈرائیورز۔"
                        foundingDate="2014"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'انڈسٹریل ٹرپس', value: '15,000+', icon: Building },
                            { label: 'ایئرپورٹ پک اپ', value: '30k+', icon: Plane },
                            { label: 'اطمینان (Ratings)', value: '4.8/5', icon: Star }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            آن لائن بکنگ کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="بحرین کسٹم اور ٹرانسفر نوٹس"
                    status="Insider Tip"
                    lastUpdated="جنوری 2025"
                    content="الخبر سے بحرین جانے والے مسافروں کے لیے مشورہ ہے کہ ویک اینڈ پر کاز وے (Causeway) پر رش ہو سکتا ہے۔ ہم بحرین کے لیے ڈائریکٹ ٹرانسفر فراہم کرتے ہیں، لیکن مسافروں کے پاس قانونی دستاویزات ہونا لازمی ہیں۔"
                    tags={["بحرین_ٹرانسفر", "الخبر_ٹیکسی", "کاز_وے_الرٹ", "دمام_ایئرپورٹ"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="دمام میں بہترین ٹیکسی کا انتخاب کیسے کریں؟"
                    intro="ایسٹرن پروونس میں مسافتیں طویل ہو سکتی ہیں، اس لیے آرام دہ گاڑی کا انتخاب ضروری ہے۔"
                    labels={{ condition: "منزل / نوعیت", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'd1',
                            condition: 'ایئرپورٹ سے شہر',
                            question: 'دمام ایئرپورٹ سے شہر تک کتنا وقت لگتا ہے؟',
                            answer: 'کنگ فہد ایئرپورٹ شہر سے باہر واقع ہے، اس لیے یہاں سے دمام یا الخبر پہنچنے میں کم از کم 40 سے 50 منٹ لگتے ہیں۔ پہلے سے بکنگ انتظار سے بچاتی ہے۔',
                            citation: 'لاجسٹکس ڈیٹا'
                        },
                        {
                            id: 'd2',
                            condition: 'ہفتہ وار پکنک',
                            question: 'ہاف مون بے کے لیے ریٹرن ٹیکسی مل سکتی ہے؟',
                            answer: 'جی ہاں، ہم ہاف مون بے کے لیے ریٹرن پیکج دیتے ہیں، جس میں ڈرائیور آپ کو وقت پر واپس لانے کے لیے موجود ہوتا ہے۔',
                            citation: 'پکنک پیکج'
                        },
                        {
                            id: 'd3',
                            condition: 'بزنس اور صنعتی کام',
                            question: 'کیا جبیل انڈسٹریل کے لیے روزانہ سروس ہے؟',
                            answer: 'بالکل۔ ہم دمام سے جبیل کے لیے کارپوریٹ کومیوٹرز (Commuters) کو روزانہ پک اینڈ ڈراپ کی سہولت فراہم کرتے ہیں۔',
                            citation: 'انڈسٹری سروس'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="ایسٹرن پروونس: سعودی عرب کا توانائی اور ساحلی مرکز"
                    explanation="دمام، الخبر اور دھاراں کا 'ٹرائی سٹی' ایریا ایک بڑا معاشی اور تعلیمی مرکز ہے۔"
                    labels={{ relatedTopic: "اہم مقام", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'دمام کورنیش (Dammam Corniche)',
                            description: 'ساحلِ سمندر کے کنارے ایک خوبصورت سیرگاہ جو فیملیز کے لیے بہترین جگہ ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Dammam'
                        },
                        {
                            label: 'کنگ عبدالعزیز سینٹر (Ithra)',
                            description: 'دھاراں میں واقع ایک عالمی سطح کا ثقافتی اور تعلیمی مرکز۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Abdulaziz_Center_for_World_Culture'
                        },
                        {
                            label: 'کنگ فہد کاز وے (Bahrain Link)',
                            description: 'وہ پل جو سعودی عرب کو بحرین سے جوڑتا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Fahd_Causeway'
                        },
                        {
                            label: 'کنگ فہد ایئرپورٹ (DMM)',
                            description: 'رقبے کے لحاظ سے دنیا کا سب سے بڑا ہوائی اڈہ۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Fahd_International_Airport'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="ایسٹرن ٹرانسپورٹ روٹس"
                    clusters={[
                        {
                            category: "انٹر سٹی روٹس",
                            relevance: "Primary",
                            items: [
                                { label: "دمام سے الخبر", url: "/ur/locations/dammam" },
                                { label: "دمام سے جبیل", url: "/ur/locations/dammam" },
                                { label: "دمام سے ریاض", url: "/ur/locations/riyadh" }
                            ]
                        },
                        {
                            category: "تفریحی مقامات",
                            relevance: "Secondary",
                            items: [
                                { label: "ہاف مون بے ریزورٹس", url: "/ur/locations/dammam" },
                                { label: "اثرا سینٹر ٹرانسفر", url: "/ur/locations/dammam" },
                                { label: "الرشید مال الخبر", url: "/ur/locations/dammam" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='ہارون رشید'
                        reviewerTitle='دمام سٹی گائیڈ'
                        reviewDate="10 مارچ 2026"
                        expertise={["دھاراں ہائی ویز", "ایئرپورٹ لاجسٹکس", "ساحلی سیاحت"]}
                        labels={{ reviewTitle: "ماہر کا مشورہ", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 font-urdu">
                        <span className="bg-cyan-100 text-cyan-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">آسانی اور سکون</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-cyan-500/30">دمام سفر کی سہولیات</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            پورے ایسٹرن پروونس میں پریمیم ٹیکسی کی سہولت اب ایک کلک پر۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-cyan-900 group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-cyan-900 group-hover:text-white transition-colors" />
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
                        city="دمام"
                        isRtl={true}
                        labels={{
                            title: "دمام ٹریول گائیڈ",
                            subtitle: "موسم کی تبدیلی اور پکنک",
                            summerTitle: "گرمی اور حبس (جون - ستمبر)",
                            summerText: "دمام میں ساحلی شہر ہونے کی وجہ سے گرمیوں میں حبس (Humidity) بہت زیادہ ہوتی ہے۔ شام کے وقت کورنیش کی سیر کے لیے صرف ایئرکنڈیشنڈ سواری کا انتخاب کریں۔",
                            summerTag: "حبس الرٹ: ان ڈور پکنک",
                            winterTitle: "خوشگوار سردی (دسمبر - فروری)",
                            winterText: "ہاف مون بے اور بیرونی پکنک کے لیے بہترین وقت۔ راتیں ٹھنڈی اور دن خوشگوار ہوتے ہیں۔",
                            winterTag: "پکنک کا بہترین سیزن"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="دمام سٹی سینٹر"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "مشرقی ریجن کے اہم فاصلے",
                                subtitle: "سفر کا دورانیہ اور راستے",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*ٹریفک کی وجہ سے وقت میں تبدیلی ممکن ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                        contextName="Dammam"
                            isRtl={true}
                            labels={{
                                title: "دمام میں ٹیکسی: حقائق",
                                subtitle: "سفر سے پہلے جان لیں",
                                beliefLabel: "لوگوں کا خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "دمام سے الخبر کا سفر",
                                    commonBelief: "یہ تو ایک ہی شہر ہے۔",
                                    reality: "تکنیکی طور پر یہ دو الگ شہر ہیں لیکن ان کے درمیان فاصلہ بہت کم ہو گیا ہے۔ تاہم، ہائی وے ٹریفک کی وجہ سے ایک شہر سے دوسرے شہر جانے میں 30 منٹ لگ سکتے ہیں۔",
                                    truthRange: "ٹرائی سٹی نیٹ ورک",
                                    factors: ["کنگ فہد ہائی وے", "اوقات", "دفاتر"]
                                },
                                {
                                    topic: "ایئرپورٹ ٹیکسی کے ریٹ",
                                    commonBelief: "ایئرپورٹ پر کھڑی ٹیکسی سستی ہے۔",
                                    reality: "کونٹر پر کھڑی ٹیکسی بہت زیادہ چارج کر سکتی ہے۔ آن لائن فکسڈ ریٹ بکنگ سے آپ کو پہلے سے معلوم ہوتا ہے کہ کتنا ادا کرنا ہے۔",
                                    truthRange: "آن لائن بکنگ سستی ہے",
                                    factors: ["فکسڈ ریٹس", "آرام دہ گاڑی", "اطمینان"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "دمام ٹرانسپورٹ FAQ",
                                subtitle: "دمام کے مسافروں کے لیے اہم سوالات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "کیا ہمیں دمام ایئرپورٹ پر رات کے وقت ٹیکسی مل جائے گی؟",
                                    shortAnswer: "جی ہاں، ہماری سروس 24/7 دستیاب ہے۔",
                                    detailedAnswer: "اگر آپ کی فلائٹ رات دیر سے آ رہی ہے، تو پریشان نہ ہوں۔ ہمارا ڈرائیور آپ کا انتظار کر رہا ہوگا۔ ہم فلائٹ وقت کو ٹریک کرتے ہیں۔",
                                    perspectives: [
                                        { role: "اطمینان", icon: "Clock", insight: "رات کے وقت پرائیویٹ ٹیکسی زیادہ محفوظ ہوتی ہے۔" }
                                    ]
                                },
                                {
                                    question: "کیا آپ الخبر سے بحرین کے لیے گاڑی فراہم کرتے ہیں؟",
                                    shortAnswer: "جی ہاں، کراس بارڈر سروس دستیاب ہے۔",
                                    detailedAnswer: "ہم بحرین کے لیے خصوصی گاڑیاں فراہم کرتے ہیں۔ مسافروں کو پل کے ٹول اور کسٹم کے لیے تیار رہنا چاہیے۔",
                                    perspectives: [
                                        { role: "بزنس", icon: "Shield", insight: "کاز وے پر گزرنے کا تجربہ رکھنے والے ڈرائیورز۔" }
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
                        <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-900 px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">مسافروں کے تاثرات</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu text-right">
                            دمام اور الخبر کی یادیں
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Dammam" />
                        <QuestionsDisplay location="Dammam" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Dammam" />
                        <QuestionForm locationName="Dammam" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="دمام"
                    isRtl={true}
                    labels={{ title: "قریبی مقامات", subtitle: "ایسٹرن ریجن کے ٹورز", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'الخبر', url: '/ur/locations/al-khobar', description: 'کاز وے ٹرانسفر' },
                        { name: 'جبیل', url: '/ur/locations/jubail', description: 'صنعتی شہر' },
                        { name: 'ریاض', url: '/ur/locations/riyadh', description: 'کیپیٹل ٹرانسفر' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyan-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-cyan-500/50">دمام میں اپنی سواری کوٹیشن حاصل کریں</h2>
                    <p className="text-xl text-cyan-200/60 mb-8 leading-relaxed font-urdu">
                        ایئرپورٹ ٹرانسفر یا سٹی ٹور کے لیے بھروسہ مند سواری۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-cyan-950 hover:bg-cyan-100 font-bold text-lg px-12 py-8 rounded-full">
                            بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
