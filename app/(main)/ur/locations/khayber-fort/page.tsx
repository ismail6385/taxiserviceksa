import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Mountain, History, Compass, Search } from 'lucide-react';
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
    title: 'خیبر تاریخی ٹور | قلعہ خیبر اور قدیم نخلستان کی سیر',
    description: 'مدینہ منورہ سے خیبر کا تاریخی سفر۔ قدیم قلعے، آتش فشاں کے پتھر اور اسلامی تاریخ کے اہم مقامات دیکھیں۔ العلا سے بھی سروس دستیاب ہے۔',
    keywords: ['خیبر ٹور', 'قلعہ خیبر', 'مدینہ سے خیبر ٹیکسی', 'خیبر زیارت', 'تاریخی مقامات سعودی عرب', 'غزوہ خیبر'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/khayber-fort/',
            'ar': 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
            'ur': 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
            'x-default': 'https://taxiserviceksa.com/locations/khayber-fort/',
        }
    },
    openGraph: {
        title: 'خیبر کا تاریخی سفر | قلعہ خیبر کی زیارت',
        description: 'اسلامی تاریخ کا عظیم باب خیبر دیکھیں۔ مدینہ سے پرائیویٹ ٹیکسی ٹور لنکس۔',
        url: 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/khayber.webp', alt: 'قدیم قلعہ خیبر' }],
    },
};

export default function KhayberPageUrdu() {
    const services = [
        { name: 'مدینہ سے خیبر ڈے ٹرپ', description: 'مدینہ منورہ سے صبح روانگی اور شام واپسی (170 کلومیٹر)', icon: Car },
        { name: 'تاریخی مقامات کی گائیڈڈ سیر', description: 'قدیم قلعوں اور نخلستانوں تک رسائی', icon: History },
        { name: 'العلا سے خیبر ٹرانسفر', description: 'العلا اور خیبر کے درمیان سیاحتی سفر', icon: Compass },
        { name: 'آتش فشاں لاوا فیلڈ ٹور', description: 'حراۃ خیبر کے کالے پتھروں اور غاروں کی سیر', icon: Mountain },
    ];

    const khayberImages = [
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
        '/hero-slide-1.webp',
    ];

    const distanceData = [
        { destination: 'مدینہ منورہ', distance: '170 کلومیٹر', time: '2 گھنٹے', route: 'تبوک ہائی وے' },
        { destination: 'العلا', distance: '200 کلومیٹر', time: '2.5 گھنٹے', route: 'العلا روڈ' },
        { destination: 'خیبر سٹی سینٹر', distance: '5 کلومیٹر', time: '10 منٹ', route: 'لوکل روڈ' },
        { destination: 'حراۃ خیبر (لاوا)', distance: '40 کلومیٹر', time: '50 منٹ', route: 'ڈیزرٹ ٹریک' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="khayber-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Khayber Historical Tour Urdu",
                        "areaServed": { "@type": "City", "name": "Khaybar" },
                        "description": "Historical day trips and taxi services to Khayber Fort from Madinah and AlUla."
                    })
                }}
            />

            <Hero
                images={khayberImages}
                h1Text="خیبر کا تاریخی سفر: قدیم قلعے اور اسلامی تاریخ"
                bookingFormTitle="خیبر ٹور کوٹیشن حاصل کریں"
                title={
                    <span className="bg-stone-900/40 backdrop-blur-md border border-stone-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug font-urdu">
                        تاریخی زیارات خیبر
                    </span>
                }
                subtitle="مدینہ منورہ سے ایک یادگار ڈے ٹرپ"
                location="مدینہ سے 2 گھنٹے کا سفر"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="خیبر ایکسپلورر KSA™"
                        description="خیبر کے قدیم قلعوں اور مشکل راستوں کے ماہر۔ ہم آپ کو ان مقامات تک لے جاتے ہیں جہاں عام گاڑیاں نہیں پہنچ پاتیں۔ غزوہ خیبر کے حوالے سے اہم مقامات کی نشاندہی اور آرام دہ سفر ہماری پہچان ہے۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'تاریخی ٹورز', value: '1,500+', icon: History },
                            { label: 'کامیاب اسفار', value: '100%', icon: CheckCircle2 },
                            { label: 'ماہر ڈرائیورز', value: 'اردو/عربی', icon: Users }
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
                    topic="خیبر ٹورازم اپ ڈیٹ: قدیم قلعوں کی بحالی"
                    status="Insider Tip"
                    lastUpdated="دسمبر 2024"
                    content="خیبر میں حالیہ بحالی کے کاموں کے بعد اب سیاحوں کے لیے 'خیبر اولڈ ٹاؤن' اور مخصوص قلعوں تک رسائی آسان ہو گئی ہے۔ کچھ حصوں میں پیدل چلنا پڑتا ہے، لہذا آرام دہ جوتے ساتھ رکھیں۔"
                    tags={["غزوہ_خیبر", "قدیم_قلعے", "مدینہ_ڈے_ٹرپ", "سعودی_ویژن_2030"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="خیبر کا ٹور کیسے پلان کریں؟"
                    intro="خیبر کا سفر مدینہ سے ایک دن میں ممکن ہے۔ یہاں چند اہم معلومات ہیں:"
                    labels={{ condition: "سفری پہلو", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'k1',
                            condition: 'کھانا اور سہولیات',
                            question: 'کیا وہاں ریسٹورنٹ موجود ہیں؟',
                            answer: 'خیبر کے تاریخی مقامات کے پاس سہولیات محدود ہیں۔ ہم مشورہ دیتے ہیں کہ مدینہ سے ضروری اسنیکس اور پانی ساتھ لائیں، یا واپسی پر خیبر سٹی میں کھانا کھائیں۔',
                            citation: 'لاجسٹکس گائیڈ'
                        },
                        {
                            id: 'k2',
                            condition: 'بہترین وقت',
                            question: 'کون سا وقت موزوں ہے؟',
                            answer: 'صبح 7 بجے مدینہ سے نکلنا بہترین ہے تاکہ آپ 9 بجے تک پہنچ جائیں اور دوپہر کی تپش سے پہلے اہم مقامات دیکھ لیں۔',
                            citation: 'ٹریول شیڈول'
                        },
                        {
                            id: 'k3',
                            condition: 'بچے اور بزرگ',
                            question: 'کیا یہ مشکل سفر ہے؟',
                            answer: 'قلعوں تک چڑھائی تھوڑی مشکل ہو سکتی ہے، لیکن ہماری گاڑیاں قریب ترین ممکنہ پوائنٹ تک جاتی ہیں۔ بزرگوں کے لیے نخلستان (Oasis) کے مناظر سحر انگیز ہیں۔',
                            citation: 'ایکسیسیبلٹی رپورٹ'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="خیبر: جہاں تاریخ اور جغرافیہ ملتے ہیں"
                    explanation="خیبر صرف ایک قلعہ نہیں بلکہ یہ نخلستانوں، آتش فشانی پتھروں اور قدیم تہذیبوں کا سنگم ہے۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'غزوہ خیبر کے مقامات',
                            description: 'وہ مقامات جہاں اسلامی دور کے اہم معرکے ہوئے اور قلعہ قموص جیسے مشہور قلعے واقع ہیں۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/غزوہ_خیبر'
                        },
                        {
                            label: 'حراۃ خیبر (Lava Fields)',
                            description: 'سعودی عرب کا سب سے بڑا آتش فشانی علاقہ جہاں کالے پتھروں کے حیرت انگیز مناظر ملتے ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Khaybar'
                        },
                        {
                            label: 'قدیم نخلستان',
                            description: 'خیبر کے گہرے نخلستان جو ہزاروں سالوں سے یہاں کی زندگی کا مرکز رہے ہیں۔',
                            internalLink: '/ur/locations/khayber-fort'
                        },
                        {
                            label: 'ام جرسان غار',
                            description: 'خیبر کے قریب واقع ایک قدیم غار جس نے حال ہی میں ماہرین آثار قدیمہ کی توجہ حاصل کی ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Khaybar'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="خیبر ایکسپلوریشن"
                    clusters={[
                        {
                            category: "تاریخی مقامات",
                            relevance: "Primary",
                            items: [
                                { label: "قلعہ خیبر ٹور", url: "/ur/locations/khayber-fort" },
                                { label: "قدیم نخلستان کی سیر", url: "/services/nature-tours" },
                                { label: "غزوہ خیبر گائیڈ", url: "/blog/battle-of-khayber" }
                            ]
                        },
                        {
                            category: "سفری روٹس",
                            relevance: "Secondary",
                            items: [
                                { label: "مدینہ سے خیبر ٹیکسی", url: "/ur/locations/madinah" },
                                { label: "العلا سے خیبر روٹ", url: "/ur/locations/alula" },
                                { label: "تبوک ہائی وے گائیڈ", url: "/blog/road-trips" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='ڈاکٹر عرفان حمید'
                        reviewerTitle='ماہر اسلامی آثار قدیمہ'
                        reviewDate="20 فروری 2026"
                        expertise={["اسلامی تاریخ", "سعودی ورثہ", "خیبر ایکسپرٹ"]}
                        labels={{ reviewTitle: "ماہر کا تجزیہ", verifiedReview: "تصدیق شدہ گائیڈ" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-stone-100 text-stone-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">قدیم ورثہ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-stone-500/30">خیبر میں کیا دیکھیں؟</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            خیبر کا علاقہ اپنے دشوار گزار راستوں اور کالے پتھروں کی وجہ سے مشہور ہے۔ ایک تجربہ کار ڈرائیور کے بغیر ان مقامات کو دیکھنا مشکل ہے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-stone-900 group-hover:text-white transition-colors" />
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
                        city="خیبر"
                        isRtl={true}
                        labels={{
                            title: "خیبر ٹریول ٹپس",
                            subtitle: "بہترین وقت کا انتخاب",
                            summerTitle: "گرمی (مئی - اکتوبر)",
                            summerText: "خیبر کے کالے پتھر گرمی کو جذب کرتے ہیں، جس سے درجہ حرارت زیادہ محسوس ہوتا ہے۔ اس موسم میں صرف صبح کے وقت سفر کریں۔",
                            summerTag: "گرمی کا الرٹ: ڈے ٹرپ مختصر رکھیں",
                            winterTitle: "سردی (نومبر - مارچ)",
                            winterText: "خیبر دیکھنے کا بہترین وقت۔ نخلستانوں میں ہریالی اور خوشگوار موسم آپ کے سفر کو یادگار بنا دے گا۔",
                            winterTag: "ٹورازم کے لیے مثالی"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="خیبر اولڈ ٹاؤن"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "خیبر کے گرد و نواح",
                                subtitle: "فاصلے اور روٹس",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*سیاحتی مقامات کے اندر کچی سڑکیں ہو سکتی ہیں۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "سیاحوں کی رائے: خیبر ٹرپ",
                                subtitle: "حقائق اور تجاویز",
                                beliefLabel: "عام سوچ",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "ٹور کا دورانیہ",
                                    commonBelief: "2 گھنٹے میں سب دیکھ لیں گے۔",
                                    reality: "صرف قلعوں تک جانا اور نخلستان دیکھنا ہی 3-4 گھنٹے لیتا ہے۔ مدینہ سے آنے جانے کے 4 گھنٹے شامل کر کے یہ پورا دن کا ٹرپ ہے۔",
                                    truthRange: "6 - 8 گھنٹے (کل ٹرپ)",
                                    factors: ["قلعوں تک چڑھائی", "لوکل گائیڈ کا وقت", "فوٹوگرافی"]
                                },
                                {
                                    topic: "پرمٹ اور اجازت",
                                    commonBelief: "کسی بھی وقت جا سکتے ہیں۔",
                                    reality: "کچھ مقامات کے لیے اب سرکاری پورٹل سے بکنگ ضروری ہو سکتی ہے۔ ہم آپ کو تازہ ترین قواعد سے آگاہ رکھتے ہیں۔",
                                    truthRange: "چیک کرنا ضروری ہے",
                                    factors: ["بحالی کا کام", "سیکیورٹی قواعد", "سیزن"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            isRtl={true}
                            route="مدینہ سے خیبر (تاریخی روٹ)"
                            labels={{ title: "سفر کا انتخاب", subtitle: "آپ کی ترجیح کے مطابق" }}
                            perspectives={[
                                {
                                    id: "history-khayber",
                                    targetAudience: "تاریخ کے متلاشی",
                                    icon: History,
                                    intent: "گہری زیارت",
                                    description: "اسلامی تاریخ کے اہم مقامات اور قلعوں کی تفصیل سے جانکاری۔ خاموش اور علمی سفر۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "8 گھنٹے (مکمل دن)" },
                                        { label: "انداز", value: "علمی و روحانی" },
                                        { label: "گائیڈ", value: "ضروری ہے" }
                                    ],
                                    visualContext: "قلعوں اور تاریخی مقامات کا روڈ میپ۔"
                                },
                                {
                                    id: "nature-khayber",
                                    targetAudience: "فیملی / فوٹوگرافی",
                                    icon: Mountain,
                                    intent: "منفرد مناظر",
                                    description: "لاوا فیلڈز اور نخلستانوں کے خوبصورت مناظر کی فوٹوگرافی۔ آرام دہ اور پرسکون سفر۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "6 گھنٹے" },
                                        { label: "انداز", value: "سیاحتی / تفریحی" },
                                        { label: "گاڑی", value: "SUV (آرام دہ)" }
                                    ],
                                    visualContext: "نخلستان اور ویو پوائنٹس ہائی لائٹڈ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "خیبر سفر کے سوالات",
                                subtitle: "زائرین کے لیے اہم معلومات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "مدینہ سے خیبر ٹیکسی کا کرایہ کتنا ہے؟",
                                    shortAnswer: "350 - 500 ریال (ڈے ٹرپ)",
                                    detailedAnswer: "پوری گاڑی کا کرایہ 350 سے 500 ریال کے درمیان ہوتا ہے جس میں ڈرائیور کا انتظار اور واپسی شامل ہے۔",
                                    perspectives: [
                                        { role: "مشورہ", icon: "CheckCircle2", insight: "فیملی کے لیے GMC یوکون بہتر ہے کیونکہ راستے پتھریلے ہیں۔" }
                                    ]
                                },
                                {
                                    question: "کیا خیبر میں داخلہ مفت ہے؟",
                                    shortAnswer: "جی ہاں (لیکن رجسٹریشن ضروری ہو سکتی ہے)",
                                    detailedAnswer: "فی الحال زیادہ تر مقامات مفت ہیں، لیکن بحالی کے بعد کچھ حصوں میں فیس یا بکنگ لاگو ہو سکتی ہے۔",
                                    perspectives: [
                                        { role: "تازہ ترین", icon: "Search", insight: "ہمیشہ جانے سے پہلے تازہ ترین صورتحال معلوم کریں۔" }
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
                        <div className="inline-flex items-center gap-2 bg-stone-50 text-stone-900 px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">مسافروں کی آواز</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu text-right">
                            خیبر کے تجربات
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Khayber Fort" />
                        <QuestionsDisplay location="Khayber Fort" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Khayber Fort" />
                        <QuestionForm locationName="Khayber Fort" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="خیبر"
                    isRtl={true}
                    labels={{ title: "خیبر سے دیگر مقامات", subtitle: "سعودی عرب کا سفر", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'مدینہ منورہ', url: '/ur/locations/madinah', description: 'تاریخی مرکز' },
                        { name: 'العلا', url: '/ur/locations/alula', description: 'قدیم تہذیب' },
                        { name: 'تبوک', url: '/ur/locations/tabuk', description: 'شمالی گیٹ وے' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-stone-500/50">خیبر کے تاریخی دورے کی ابھی بکنگ کریں</h2>
                    <p className="text-xl text-stone-400 mb-8 leading-relaxed font-urdu">
                        تاریخی قلعوں اور اسلامی تاریخ کے اس عظیم باب کو اپنی آنکھوں سے دیکھیں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-stone-950 hover:bg-stone-100 font-bold text-lg px-12 py-8 rounded-full">
                            ٹور کوٹیشن حاصل کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
