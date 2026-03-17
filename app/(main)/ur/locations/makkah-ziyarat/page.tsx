import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Mountain, History, Compass, Waves, Heart } from 'lucide-react';
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
    title: 'مکہ مکرمہ زیارات ٹیکسی ٹور | غارِ حرا، ثور اور عرفات کی سیر',
    description: 'مکہ مکرمہ کے مقدس مقامات کی زیارت کے لیے بہترین ٹیکسی سروس۔ جبلِ نور (غارِ حرا)، جبلِ ثور، میدانِ عرفات، منیٰ اور مزدلفہ کے مکمل ٹورز۔',
    keywords: ['مکہ زیارات', 'مکہ زیارت ٹیکسی', 'غار حرا ٹور', 'غار ثور ٹیکسی', 'میدان عرفات زیارت', 'مکہ مقدس مقامات'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/makkah-ziyarat/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah-ziyarat/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah-ziyarat/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah-ziyarat/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah-ziyarat/',
        }
    },
    openGraph: {
        title: 'مکہ مکرمہ زیارات ٹور | مقدس مقامات کا سفر',
        description: 'مکہ مکرمہ کی تاریخی اور مقدس جگہوں کی زیارت کے لیے اپنی پرائیویٹ ٹیکسی کے لیے کوٹیشن حاصل کریں۔ آرام دہ گاڑیاں اور ماہر ڈرائیورز۔',
        url: 'https://taxiserviceksa.com/ur/locations/makkah-ziyarat/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/makkah.webp', alt: 'مکہ مکرمہ زیارات' }],
    },
};

export default function MakkahZiyaratPageUrdu() {
    const sites = [
        {
            name: "جبلِ نور (غارِ حرا)",
            desc: "وہ پہاڑ جہاں نبی کریم ﷺ پر پہلی وحی نازل ہوئی۔",
            type: "تاریخی مقام",
            icon: Mountain
        },
        {
            name: "جبلِ ثور (غارِ ثور)",
            desc: "ہجرت کے دوران نبی ﷺ اور حضرت ابوبکر الصدیق ؓ کی پناہ گاہ۔",
            type: "تاریخی مقام",
            icon: Mountain
        },
        {
            name: "میدانِ عرفات و جبلِ رحمت",
            desc: "حج کا رکنِ اعظم اور دعا کی قبولیت کا مقام۔",
            type: "حج مقامات",
            icon: MapPin
        },
        {
            name: "منیٰ، مزدلفہ اور جمرات",
            desc: "خیموں کا شہر اور حج کے اہم ارکان کی جگہ۔",
            type: "حج مقامات",
            icon: MapPin
        },
        {
            name: "جنت المعلیٰ",
            desc: "مکہ کا تاریخی قبرستان جہاں حضرت خدیجہ الکبریٰ ؓ مدفون ہیں۔",
            type: "مقدس مقام",
            icon: History
        },
        {
            name: "مسجدِ جن و دیگر مساجد",
            desc: "مکہ کی تاریخی مساجد جہاں اہم واقعات پیش آئے۔",
            type: "تاریخی مقام",
            icon: History
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Makkah Ziyarat Sites Urdu",
        "description": "Holy historical sites tour in Makkah for pilgrims.",
        "containsPlace": sites.map(s => ({ "@type": "Place", "name": s.name }))
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="makkah-ziyarat-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-2.webp']}
                h1Text="مکہ مکرمہ زیارت ٹورز: مقدس مقامات کا روحانی سفر"
                bookingFormTitle="زیارت ٹور کوٹیشن حاصل کریں"
                title={
                    <span className="bg-emerald-900/40 backdrop-blur-md border border-emerald-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug font-urdu">
                        مقدس مقاماتِ مکہ
                    </span>
                }
                subtitle="اسلامی تاریخ کے عظیم باب دیکھئے"
                location="مکہ مکرمہ"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="مکہ زیارات KSA™"
                        description="مکہ مکرمہ کی جغرافیائی اور تاریخی اہمیت سے واقف ماہر ڈرائیورز۔ ہم صرف ٹرانسپورٹ فراہم نہیں کرتے بلکہ آپ کو ان جگہوں تک لے جاتے ہیں جہاں ایمان تازہ ہو جائے۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'کامیاب زیارات', value: '20,000+', icon: Mountain },
                            { label: 'مقامات شامل ہیں', value: '7+', icon: MapPin },
                            { label: 'دورانیہ', value: '3-4 گھنٹے', icon: Clock }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            زیارت کوٹیشن حاصل کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="جبلِ نور اور جبلِ ثور: ٹریفک اور رسائی"
                    status="Traffic Alert"
                    lastUpdated="دسمبر 2024"
                    content="حالیہ تعمیراتی کاموں کی وجہ سے جبلِ نور کے قریب گاڑیوں کا داخلہ بعض اوقات محدود ہوتا ہے۔ ہم اپنی گاڑیوں کو قریب ترین پارکنگ تک لے جاتے ہیں۔ غارِ حرا تک چڑھائی کے لیے مناسب وقت نکال کر چلیں۔"
                    tags={["غار_حرا", "غار_ثور", "مکہ_ٹرریفک", "زیارات_گائیڈ"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="مکہ میں زیارت کا بہترین وقت کون سا ہے؟"
                    intro="مکہ میں موسم اور رش کو مدنظر رکھتے ہوئے زیارت پلان کرنا ضروری ہے۔"
                    labels={{ condition: "صورتحال", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'z1',
                            condition: 'رش اور گرمی سے بچاؤ',
                            question: 'دن کے کس وقت نکلنا بہتر ہے؟',
                            answer: 'فجر کی نماز کے فوری بعد یا عصر کے بعد نکلنا بہترین ہے۔ دوپہر کی تپش میں پہاڑی علاقوں کا سفر تھکا دینے والا ہو سکتا ہے۔',
                            citation: 'پیلیگریم گائیڈ'
                        },
                        {
                            id: 'z2',
                            condition: 'بچے اور بوڑھے',
                            question: 'کیا گاڑی پہاڑ کے اوپر تک جاتی ہے؟',
                            answer: 'نہیں۔ گاڑیاں پہاڑ کے دامن (Base) تک جاتی ہیں۔ وہاں سے پیدل چڑھنا پڑتا ہے۔ عرفات اور میدانی مقامات پر گاڑی قریب تک جاتی ہے۔',
                            citation: 'لاجسٹکس گائیڈ'
                        },
                        {
                            id: 'z3',
                            condition: 'دورانیہ اور ٹریفک',
                            question: 'کل کتنا وقت لگے گا؟',
                            answer: 'ایک مکمل ٹور (عرفات، منیٰ، مزدلفہ، جبلِ نور اور ثور) تقریباً 3 سے 4 گھنٹے لیتا ہے۔ جمعہ کے دن رش کی وجہ سے وقت زیادہ لگ سکتا ہے۔',
                            citation: 'ڈرائیور رپورٹ'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="مقدس مقامات: ایمان کی تجدید"
                    explanation="مکہ مکرمہ کی وادیاں اور پہاڑ اسلام کے ابتدائی دور کی عظیم قربانیوں کے گواہ ہیں۔"
                    labels={{ relatedTopic: "متعلقہ مقام", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'جبلِ نور (Mount of Light)',
                            description: 'یہ وہ مقام ہے جہاں قرآن کی پہلی آیات نازل ہوئیں۔ غارِ حرا اسی پہاڑ کی چوٹی پر واقع ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/جبل_نور'
                        },
                        {
                            label: 'جبلِ ثور',
                            description: 'ہجرتِ مدینہ کے وقت دشمنوں سے بچنے کے لیے نبی ﷺ نے یہاں پناہ لی تھی۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/غار_ثور'
                        },
                        {
                            label: 'میدانِ عرفات',
                            description: 'حج کا وہ میدان جہاں جبلِ رحمت واقع ہے اور جہاں حضور ﷺ نے آخری خطبہ دیا۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/عرفات'
                        },
                        {
                            label: 'منیٰ (Tent City)',
                            description: 'دنیا کا سب سے بڑا خیموں کا شہر جہاں حج کے ایام میں لاکھوں حاجی قیام کرتے ہیں۔',
                            internalLink: '/ur/locations/makkah-ziyarat'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="مقدس مکہ ٹورز"
                    clusters={[
                        {
                            category: "تاریخی مقامات",
                            relevance: "Primary",
                            items: [
                                { label: "جبلِ نور غارِ حرا", url: "/ur/locations/makkah-ziyarat" },
                                { label: "غارِ ثور ٹور", url: "/ur/locations/makkah-ziyarat" },
                                { label: "جنت المعلیٰ زیارت", url: "/services/ziyarat" }
                            ]
                        },
                        {
                            category: "مشاعرِ مقدسہ (حج)",
                            relevance: "Secondary",
                            items: [
                                { label: "میدانِ عرفات", url: "/ur/locations/makkah-ziyarat" },
                                { label: "منیٰ اور مزدلفہ", url: "/ur/locations/makkah-ziyarat" },
                                { label: "جمرات کا علاقہ", url: "/services/ziyarat" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='مولانا اسلم صدیقی'
                        reviewerTitle='مذہبی اسکالر و گائیڈ'
                        reviewDate="05 مارچ 2026"
                        expertise={["تاریخِ اسلام", "مقاماتِ مقدسہ", "مکہ جغرافیہ"]}
                        labels={{ reviewTitle: "ماہر کا مشورہ", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">آسانی اور سکون</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">آپ کی زیارت، ہمارا عزم</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            ہماری پریمیم ٹیکسی سروس کے ذریعے مکہ کے مقدس مقامات کو پورے آرام اور ایمان کی روشنی میں دیکھیں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sites.map((site, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                                    <site.icon className="w-8 h-8 text-emerald-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{site.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{site.desc}</p>
                                <span className="mt-4 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">{site.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="مکہ مکرمہ"
                        isRtl={true}
                        labels={{
                            title: "زیارت ٹریول گائیڈ",
                            subtitle: "بہترین وقت کا انتخاب",
                            summerTitle: "گرمی (اپریل - اکتوبر)",
                            summerText: "گرمیوں میں مکہ کا درجہ حرارت بہت بڑھ جاتا ہے۔ پہاڑی زیارات (حرا و ثور) کے لیے صرف فجر کے وقت یا رات کے وقت نکلیں۔",
                            summerTag: "گرمی کا الرٹ: دھوپ سے بچیں",
                            winterTitle: "سردی (نومبر - مارچ)",
                            winterText: "زیارت کے لیے بہترین موسم۔ سارا دن گھومنا ممکن ہوتا ہے۔ شامیں بہت خوشگوار ہوتی ہیں۔",
                            winterTag: "بہترین سیزن"
                        }}
                    />

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "زائرین کی رائے اور حقائق",
                                subtitle: "سفر سے پہلے جان لیں",
                                beliefLabel: "عام خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اثر انداز عوامل"
                            }}
                            points={[
                                {
                                    topic: "غارِ حرا کی چڑھائی",
                                    commonBelief: "یہ ایک آسان لمبی سیر ہے۔",
                                    reality: "یہ ایک مشکل چڑھائی ہے جس کے لیے 45 سے 90 منٹ لگ سکتے ہیں۔ اگر آپ کا سانس پھولتا ہے تو چڑھائی سے پرہیز کریں۔",
                                    truthRange: "میڈیم سے مشکل",
                                    factors: ["صحت", "وقت", "موسم"]
                                },
                                {
                                    topic: "ٹیکسی بمقابلہ گروپ بس",
                                    commonBelief: "بس سستی اور اچھی ہے۔",
                                    reality: "بسوں میں بہت زیادہ انتظار کرنا پڑتا ہے اور وہ آپ کو صرف منٹوں کے لیے روکتی ہیں۔ پرائیویٹ ٹیکسی میں آپ ہر جگہ اپنی مرضی کا وقت گزار سکتے ہیں۔",
                                    truthRange: "ٹیکسی پریفیرڈ (Preferred)",
                                    factors: ["آزادی", "سکون", "وقت کی بچت"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16 text-right">
                        <RoutePerspective
                            isRtl={true}
                            route="مکہ زیارات (مکمل پیکیج)"
                            labels={{ title: "اپنی ترجیح بتائیں", subtitle: "آپ کی ضرورت کے مطابق ٹور" }}
                            perspectives={[
                                {
                                    id: "spiritual-voyage",
                                    targetAudience: "روحانی مسافر",
                                    icon: Heart,
                                    intent: "گہری زیارت",
                                    description: "تاریخی معلومات اور ہر جگہ پر کافی وقت گزارنے والے زائرین کے لیے۔ خاموش اور روحانی سفر۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "4-5 گھنٹے" },
                                        { label: "انداز", value: "پرسکون" },
                                        { label: "گاڑی", value: "پریمیم سیڈان" }
                                    ],
                                    visualContext: "تاریخی مقامات کا روٹ ہائی لائٹڈ۔"
                                },
                                {
                                    id: "family-trip",
                                    targetAudience: "فیملی / بچے",
                                    icon: Users,
                                    intent: "آرام اور سہولت",
                                    description: "بچوں اور بزرگوں کے ساتھ آرام دہ سفر۔ ہر جگہ پر گاڑی کو قریب ترین ممکنہ جگہ تک لے جانا۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "3 گھنٹے" },
                                        { label: "انداز", value: "آرام دہ" },
                                        { label: "گاڑی", value: "SUV / GMC" }
                                    ],
                                    visualContext: "فیملی فرینڈلی اسٹاپس کا نقشہ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "زیارت FAQ",
                                subtitle: "آپ کے سوالات، ہمارے جوابات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "کیا ہم صرف عرفات کی زیارت الگ سے کر سکتے ہیں؟",
                                    shortAnswer: "جی ہاں، کسٹم ٹور دستیاب ہے۔",
                                    detailedAnswer: "آپ اپنی پسند کے مقامات منتخب کر سکتے ہیں۔ کرایہ آپ کے منتخب کردہ مقامات اور وقت کے مطابق طے کیا جائے گا۔",
                                    perspectives: [
                                        { role: "مشورہ", icon: "Clock", insight: "وقت بچانے کے لیے صرف اہم مقامات کی لسٹ دیں۔" }
                                    ]
                                },
                                {
                                    question: "کیا زیارت کے دوران حرم سے پک اپ مل جائے گا؟",
                                    shortAnswer: "بالکل، آپ کے ہوٹل سے ہی پک اپ ہوگا۔",
                                    detailedAnswer: "ہمارا ڈرائیور آپ کے ہوٹل کے گیٹ یا حرم کے قریب ترین متعین کردہ پارکنگ پر آپ کا انتظار کرے گا۔",
                                    perspectives: [
                                        { role: "رہنمائی", icon: "MapPin", insight: "ہوٹل کا نام اور لوکیشن پہلے سے فراہم کریں۔" }
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
                            <span className="text-sm font-semibold">زائرین کے تاثرات</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu">
                            مقدس سفر کی یادیں
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="MakkahZiyarat" />
                        <QuestionsDisplay location="MakkahZiyarat" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="MakkahZiyarat" />
                        <QuestionForm locationName="MakkahZiyarat" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="مکہ زیارا ت"
                    isRtl={true}
                    labels={{ title: "متعلقہ مقامات", subtitle: "سعودی عرب کا سفر", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'مکہ مکرمہ سٹی', url: '/ur/locations/makkah', description: 'حرم گائیڈ' },
                        { name: 'مدینہ منورہ زیارات', url: '/ur/locations/madinah', description: 'مسجد نبوی' },
                        { name: 'جدہ ایئرپورٹ', url: '/ur/locations/jeddah', description: 'ایئرپورٹ ٹرانسفر' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-emerald-500/50">اپنی مکہ زیارت کی بکنگ ابھی کریں</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-urdu">
                        مقدس مقامات کا سفر پورے آرام اور سکون کے ساتھ مکمل کریں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-12 py-8 rounded-full">
                            زیارت بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
