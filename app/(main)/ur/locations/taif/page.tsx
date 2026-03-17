import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Mountain, CloudFog, Flower2, ArrowRight, Plane } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import Script from 'next/script';
import JsonLdFAQ from '@/components/JsonLdFAQ';
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

export const metadata: Metadata = {
    title: 'طائف وی آئی پی پرائیویٹ ٹرانسفر | الہدا پہاڑ اور مکہ ٹرانسفر',
    description: 'طائف میں بہترین وی آئی پی ٹرانسفر اور ڈیزائنر ڈرائیور سروس۔ مکہ سے طائف (الہدا) اور جدہ ایئرپورٹ سے براہ راست پک اپ۔ پیشہ ورانہ پہاڑی ڈرائیونگ۔',
    keywords: ['طائف ٹیکسی', 'الہدا ٹرانسفر', 'مکہ سے طائف', 'طائف سٹی ٹور', 'وی آئی پی ٹیکسی طائف'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/taif/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/taif/',
            'ar': 'https://taxiserviceksa.com/ar/locations/taif/',
            'ur': 'https://taxiserviceksa.com/ur/locations/taif/',
            'x-default': 'https://taxiserviceksa.com/locations/taif/',
        }
    },
    openGraph: {
        title: 'طائف وی آئی پی ٹیکسی | الہدا اور شفا پہاڑی سفر',
        description: 'مکہ سے طائف کے پہاڑی راستے کا پر لطف سفر۔ کیبل کار اور گلاب کے کارخانوں کی سیر۔ کوٹیشن حاصل کریں۔',
        url: 'https://taxiserviceksa.com/ur/locations/taif/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/taif-mountains-view.webp', alt: 'طائف الہدا روڈ' }],
    },
};

export default function TaifPageUrdu() {
    const services = [
        { name: 'مکہ سے طائف وی آئی پی', description: 'پہاڑوں کی ٹھنڈک (1 گھنٹہ) - لگژری SUV', icon: Car },
        { name: 'جدہ ایئرپورٹ سے طائف', description: 'براہ راست ٹرانسفر (2 گھنٹے)', icon: MapPin },
        { name: 'الہدا اور کیبل کار', description: 'ٹاپ اسٹیشن تک ڈراپ آف', icon: CloudFog },
        { name: 'گلاب کے فارم کا ٹور', description: 'موسمی فیکٹری وزٹ (مارچ-اپریل)', icon: Flower2 },
    ];

    const taifImages = [
        '/taif-mountains-view.webp',
        '/taif-rose-gardens.webp',
        '/hero-slide-5.webp',
    ];

    const distanceData = [
        { destination: 'مکہ (حرم)', distance: '88 کلومیٹر', time: '1 گھنٹہ 10 منٹ', route: 'الہدا روڈ' },
        { destination: 'جدہ ایئرپورٹ', distance: '170 کلومیٹر', time: '2 گھنٹے', route: 'طائف-جدہ ہائی وے' },
        { destination: 'ریاض', distance: '780 کلومیٹر', time: '7.5 گھنٹے', route: 'روٹ 40' },
        { destination: 'میقات (قرن المنازل)', distance: '55 کلومیٹر', time: '45 منٹ', route: 'سیل الکبیر' },
        { destination: 'شفا پہاڑ', distance: '25 کلومیٹر', time: '30 منٹ', route: 'شفا روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema-ur-new"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Taif Mountain Transfer Urdu",
                        "areaServed": { "@type": "City", "name": "Taif" },
                        "description": "Professional transport from Makkah to Taif via Al Hada mountain road for Urdu speaking pilgrims."
                    })
                }}
            />

            <Hero
                images={taifImages}
                h1Text="طائف وی آئی پی پرائیویٹ ٹرانسفر اور ڈرائیور سروس"
                bookingFormTitle="طائف کے لیے وی آئی پی ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        طائف وی آئی پی سروس
                    </span>
                }
                subtitle="پہاڑی بلندیوں پر بہترین اور آرام دہ سفر"
                location="الہدا • شفا • وی آئی پی ٹورز"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="وی آئی پی ٹرانسفر KSA™ - طائف"
                        description="طائف میں پیشہ ورانہ ڈرائیور اور ایئرپورٹ ٹرانسفر سروسز۔ ہم زائرین اور گلاب کے فیسٹیول کے سیاحوں کو لگژری گاڑیوں اور الہدا پہاڑی راستے کے لیے 24/7 مہارت فراہم کرتے ہیں۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "لائسنس یافتہ", since: "خدمت از" }}
                        metrics={[
                            { label: 'پہاڑی سفر', value: '5,000+', icon: Mountain },
                            { label: 'زائرین کی خدمت', value: '12k+', icon: Users },
                            { label: 'دھند میں مہارت', value: 'ایکسپرٹ', icon: CloudFog }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            وی آئی پی سفر کوٹیشن حاصل کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        سرکاری اطلاع: ہم صرف پہلے سے بک شدہ پہاڑی، بین شہر اور وی آئی پی ایئرپورٹ ٹرانسفر فراہم کرتے ہیں۔ ہم مقامی ہائینگ (Street Taxis) فراہم نہیں کرتے۔
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="الہدا روڈ کی صورتحال: دھند اور بارش الرٹ"
                    status="Traffic Alert"
                    lastUpdated="دسمبر 2024"
                    content="شدید بارش یا گہری دھند کے دوران حفاظتی وجوہات کی بنا پر الہدا پہاڑی راستہ عارضی طور پر بند کر دیا جاتا ہے۔ ایسی صورت میں متبادل راستہ (سیل الکبیر) استعمال کیا جاتا ہے جس میں 45 منٹ اضافی لگ سکتے ہیں۔ ہمارے ڈرائیور ٹریفک پولیس کی ہر اپ ڈیٹ پر نظر رکھتے ہیں۔"
                    tags={["روڈ_بند", "الہدا", "حفاظتی_الرٹ", "متبادل_راستہ"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="کیا مکہ سے طائف کا سفر صرف پہنچنے کے بارے میں ہے؟"
                    intro="نہیں، الہدا کے پہاڑی راستے کا سفر خود ایک بہترین تجربہ ہے جسے 'بادلوں کے اوپر کا راستہ' کہا جاتا ہے۔ تاہم، اس کے لیے کچھ خاص احتیاط ضروری ہے۔"
                    labels={{ condition: "سفری مشورہ", source: "حوالہ" }}
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'سفر میں متلی (Motion Sickness)',
                            question: 'کیا راستہ بہت زیادہ گھماؤ دار ہے؟',
                            answer: 'جی ہاں۔ پہاڑی کٹاؤ کی وجہ سے راستہ کافی گھماؤ دار ہے۔ اگر آپ کو متلی کی شکایت ہوتی ہے تو ہم اگلی سیٹ پر بیٹھنے کا مشورہ دیتے ہیں۔',
                            citation: 'صحت کا مشورہ'
                        },
                        {
                            id: 'q2',
                            condition: 'درجہ حرارت میں کمی',
                            question: 'کیا واقعی وہاں ٹھنڈ ہوتی ہے؟',
                            answer: 'جی ہاں۔ مکہ کے مقابلے میں طائف میں درجہ حرارت 10 سے 15 ڈگری کم ہوتا ہے۔ گرمیوں میں بھی ایک ہلکی جیکٹ ساتھ رکھیں۔',
                            citation: 'موسم کا ڈیٹا'
                        },
                        {
                            id: 'q3',
                            condition: 'پھلوں کی مارکیٹ',
                            question: 'کیا ہم راستے میں پھلوں کے لیے رک سکتے ہیں؟',
                            answer: 'بالکل۔ الہدا روڈ پر طائف کے مشہور موسمی پھل (انار، انگور، انجیر) ملتے ہیں۔ بس اپنے ڈرائیور سے درخواست کریں۔',
                            citation: 'مقامی ثقافت'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="طائف: خوشبودار بلندیوں کا شہر"
                    explanation="طائف ہمارے صارفین کے لیے دو اہم مقاصد پورا کرتا ہے: گرمی سے بچنے کے لیے پر فضا مقام یا زائرین کے لیے میقات کا راستہ۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'الہدا',
                            description: 'مکہ سے آتے ہوئے پہلا پہاڑی مقام۔ کیبل کار (Teleferic) اور واٹر پارک کے لیے مشہور ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/%D8%B7%D8%A7%D8%A4%D9%81'
                        },
                        {
                            label: 'الشفا',
                            description: 'الہدا سے زیادہ بلند اور دیہی علاقہ۔ یہ اپنے بہترین گلاب کے فارمز کے لیے مشہور ہے۔',
                            internalLink: '/ur/locations/taif'
                        },
                        {
                            label: 'سوق عکاظ',
                            description: 'ایک قدیم تاریخی بازار جسے اب ایک بڑے ثقافتی میلے کے طور پر بحال کیا گیا ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/%D8%B3%D9%88%D9%82_%D8%B9%DA%A9%D8%A7%D8%B8'
                        },
                        {
                            label: 'شبرا پیلس',
                            description: 'تاریخی شاہی رہائش گاہ جو اب ایک میوزیم ہے۔ تاریخ کے شائقین کے لیے بہترین جگہ۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Shubra_Palace'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="طائف ٹریول حب"
                    clusters={[
                        {
                            category: "اہم راستے",
                            relevance: "Primary",
                            items: [
                                { label: "مکہ سے طائف ٹرانسفر", url: "/ur/locations/makkah" },
                                { label: "جدہ ایئرپورٹ سے طائف", url: "/ur/locations/jeddah" },
                                { label: "ریاض سے طائف سفر", url: "/ur/services/intercity" }
                            ]
                        },
                        {
                            category: "تفریحی مقامات",
                            relevance: "Secondary",
                            items: [
                                { label: "گلاب فیسٹیول ٹور", url: "/blog/taif-rose-festival-guide", description: "صرف مارچ اور اپریل" },
                                { label: "کیبل کار ٹرانسفر", url: "/ur/services/cable-car", description: "ٹاپ اسٹیشن ڈراپ آف" },
                                { label: "میقات کی زیارت", url: "/ur/guides/meeqat-locations", description: "قرن المنازل" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='کیپٹن ولید الثقفی'
                        reviewerTitle='پہاڑی ڈرائیونگ کے ماہر'
                        reviewDate="26 دسمبر 2025"
                        expertise={["پہاڑی حفاظت", "دھند میں نیویگیشن", "مقامی فارمز تک رسائی"]}
                        labels={{ reviewTitle: "ماہر کی رائے", verifiedReview: "تصدیق شدہ تبصرہ" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">وی آئی پی خدمات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">پہاڑی سفر کے حل</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            الہدا، شفا اور قرن المنازل میقات کے لیے محفوظ اور آرام دہ گاڑیاں۔ ہماری گاڑیاں پہاڑی بلندیوں کے لیے خاص طور پر تیار کی گئی ہیں۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <service.icon className="w-8 h-8 text-primary" />
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
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <CloudFog className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-gray-900">موسم اور راستہ</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                                طائف کے لیے ماہر ڈرائیور کیوں ضروری ہے؟
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                مکہ سے طائف کا راستہ انجینئرنگ کا شاہکار ہے، لیکن یہ بہت ڈھلوان ہے۔ چھوٹی کرائے کی گاڑیوں کے انجن اکثر چڑھائی پر گرم ہو جاتے ہیں۔
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                ہماری ویب سائٹ پر موجود تمام گاڑیاں طاقتور V6/V8 انجن (GMC Yukon, Chevy Tahoe) والی ہیں جو آسانی سے چڑھائی طے کرتی ہیں۔ ہمارے ڈرائیور ان بہترین جگہوں سے واقف ہیں جہاں بندر فوٹو کھنچوانے کے لیے آتے ہیں۔
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h3 className="font-bold text-lg">بریک چیک</h3><p className="text-sm text-gray-500">حفاظتی اسٹاپ شامل ہیں</p></div>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                                    <div><h3 className="font-bold text-lg">فیملی اسپیس</h3><p className="text-sm text-gray-500">سامان کے لیے کافی گنجائش</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-1">
                            <div className="relative">
                                <Image
                                    src="/taif-mountains-view.webp"
                                    alt="طائف الہدا پہاڑی راستہ"
                                    width={700}
                                    height={600}
                                    className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="طائف"
                        isRtl={true}
                        labels={{
                            title: "طائف میں سفر کے بہترین اوقات",
                            subtitle: "خوشگوار سفر کے لیے معلومات",
                            summerTitle: "موسم گرما (جون - اگست)",
                            summerText: "یہ طائف کا سب سے مصروف سیزن ہے۔ یہاں کا درجہ حرارت مکہ سے بہت کم ہوتا ہے، اس لیے رش بہت زیادہ ہوتا ہے۔ ہوٹلز کی بکنگ پہلے سے کر لیں۔",
                            summerTag: "بہترین وقت: فیملی ٹرپ",
                            winterTitle: "موسم سرما (دسمبر - فروری)",
                            winterText: "شدید سردی اور دھند ہوتی ہے۔ کبھی کبھار راستے بند ہو سکتے ہیں۔ کیبل کار کے لطف کے لیے یہ ایک پر سکون وقت ہے۔",
                            winterTag: "دھند کا الرٹ"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="طائف سٹی سینٹر"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "طائف سے دیگر شہروں کا فاصلہ",
                                subtitle: "سفر کا دورانیہ اور راستہ",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*موسم کی خرابی میں وقت بڑھ سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "سفری حقائق اور عام خیالات",
                                subtitle: "صارفین کے تجربات کی روشنی میں",
                                beliefLabel: "عام سوچ",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اہم اثرات"
                            }}
                            points={[
                                {
                                    topic: "کیبل کار کا آغاز",
                                    commonBelief: "یہ نیچے سے اوپر جاتی ہے۔",
                                    reality: "زیادہ تر سیاح الہدا (ٹاپ اسٹیشن) سے نیچے واٹر پارک جاتے ہیں اور پھر واپس آتے ہیں۔ نیچے سے ٹیکسی ملنا مشکل ہوتا ہے، اس لیے ٹاپ اسٹیشن سے شروع کریں۔",
                                    truthRange: "ٹاپ اسٹیشن سے آغاز کریں",
                                    factors: ["پارکنگ", "ٹیکسی کی دستیابی"]
                                },
                                {
                                    topic: "گلاب کے فارمز",
                                    commonBelief: "پورا سال پھول ہوتے ہیں۔",
                                    reality: "گلاب کی کاشت اور فیکٹریاں صرف مارچ اور اپریل کے مہینے میں عروج پر ہوتی ہیں۔ باقی سال میں صرف سبز پودے نظر آتے ہیں۔",
                                    truthRange: "سیزن (مارچ - اپریل)",
                                    factors: ["کٹائی کا وقت"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <RoutePerspective
                            isRtl={true}
                            route="مکہ سے طائف (الہدا کی چڑھائی)"
                            labels={{ title: "اپنی ضرورت کے مطابق روٹ دیکھیں", subtitle: "مختلف مسافروں کے لیے تجزیہ" }}
                            perspectives={[
                                {
                                    id: "family-ur",
                                    targetAudience: "گرمیوں کی چھٹی گزارنے والے",
                                    icon: Users,
                                    intent: "تفریح اور سکون",
                                    description: "مکہ کی گرمی سے بچنے کے لیے ایک بہترین فرار۔ مقصد کیبل کار، پھلوں کی دکانیں اور فیملی پکنک ہوتا ہے۔",
                                    structuredFeatures: [
                                        { label: "اسٹاپ", value: "پھلوں کی ریڑھیاں" },
                                        { label: "ماحول", value: "پر سکون اور تفریحی" },
                                        { label: "گاڑی", value: "GMC یوکون (کشادہ)" }
                                    ],
                                    visualContext: "رات کو مکہ کلاک ٹاور کا خوبصورت نظارہ۔"
                                },
                                {
                                    id: "pilgrim-ur",
                                    targetAudience: "عمرہ زائرین",
                                    icon: Star,
                                    intent: "مذہبی سفر",
                                    description: "مکہ جانے سے پہلے میقات (قرن المنازل) جانا۔ یا ابن عباس مسجد کی زیارت کرنا۔",
                                    structuredFeatures: [
                                        { label: "اسٹاپ", value: "قرن المنازل میقات" },
                                        { label: "لباس", value: "احرام کی تبدیلی" },
                                        { label: "انداز", value: "روحانی" }
                                    ],
                                    visualContext: "سیل الکبیر کے ذریعے متبادل روٹ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "اکثر پوچھے گئے سوالات",
                                subtitle: "طائف سفر کی ماہرانہ گائیڈ",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید پڑھیں",
                                readLess: "کم دکھائیں"
                            }}
                            faqs={[
                                {
                                    question: "مکہ سے طائف وی آئی پی ٹیکسی کا کرایہ کتنا ہے؟",
                                    shortAnswer: "250 - 350 ریال",
                                    detailedAnswer: "سیڈان کار کے لیے ریٹ 250 ریال سے شروع ہوتے ہیں۔ الہدا یا شفا کے پہاڑی علاقوں کے لیے قیمت تھوڑی زیادہ ہو سکتی ہے کیونکہ وہاں چڑھائی زیادہ ہے۔",
                                    perspectives: [
                                        { role: "سیاح", icon: "Mountain", insight: "اوبر یا کریم اکثر پہاڑوں پر جانے سے منع کر دیتے ہیں، اس لیے بکنگ پہلے کریں۔" }
                                    ]
                                },
                                {
                                    question: "کیا الہدا روڈ خطرناک ہے؟",
                                    shortAnswer: "نہیں (ڈبل ہائی وے ہے)",
                                    detailedAnswer: "یہ ایک عالمی معیار کی سڑک ہے۔ تاہم، ہم انجن بریکنگ اور پاور کے لیے SUV استعمال کرتے ہیں۔ شدید دھند میں ہم متبادل راستہ اختیار کرتے ہیں۔",
                                    perspectives: [
                                        { role: "حفاظت", icon: "Shield", insight: "ہمارے ڈرائیور پہاڑی راستوں پر چلنے کے تجربہ کار اور لائسنس یافتہ ہیں۔" }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">فکسڈ ریٹس</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-urdu">وی آئی پی طائف ٹرانسفر ریٹس</h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-urdu">شفاف قیمتیں اور بہترین گاڑیاں۔</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 transition-all text-center">
                            <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">مکہ سے طائف</div>
                            <div className="text-4xl font-black text-primary mb-3 font-urdu"><span className="text-2xl">سے</span> 250 ریال</div>
                            <p className="text-gray-600 font-urdu">ایک طرفہ سفر (سیڈان)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">زیادہ بک ہونے والا</div>
                            <Mountain className="w-12 h-12 text-primary mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3 font-urdu">طائف سٹی ٹور</div>
                            <div className="text-4xl font-black text-primary mb-3 font-urdu"><span className="text-2xl">سے</span> 300 ریال</div>
                            <p className="text-gray-600 font-urdu">5 گھنٹے کا ٹور (الہدا/شفا)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 transition-all text-center">
                            <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3 font-urdu">جدہ ایئرپورٹ</div>
                            <div className="text-4xl font-black text-primary mb-3 font-urdu"><span className="text-2xl">سے</span> 400 ریال</div>
                            <p className="text-gray-600 font-urdu">براہ راست ٹرانسفر</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">کمیونٹی فیڈ بیک</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6 font-urdu">
                            سفری تجربات اور معلومات
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Taif" />
                        <QuestionsDisplay location="Taif" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Taif" />
                        <QuestionForm locationName="Taif" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="طائف"
                    isRtl={true}
                    labels={{ title: "قریبی مقامات", subtitle: "سعودی عرب کی سیاحت", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'مکہ مکرمہ', url: '/locations/makkah', description: 'عمرہ ٹرانسپورٹ' },
                        { name: 'جدہ', url: '/locations/jeddah', description: 'ایئرپورٹ پک اپ' },
                        { name: 'مدینہ', url: '/locations/madinah', description: 'زیارات' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">اپنے طائف کے سفر کو یادگار بنائیں</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        بہترین فیملی گاڑیاں اور تجربہ کار ڈرائیورز آپ کے منتظر ہیں۔ اپنی وی آئی پی گاڑی کے لیے کوٹیشن حاصل کریں۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-8 rounded-full">
                            وی آئی پی گاڑی کوٹیشن حاصل کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
