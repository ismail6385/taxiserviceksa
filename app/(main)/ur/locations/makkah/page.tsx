import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Script from 'next/script';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import { User, Briefcase, Compass, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'مکہ میں ٹیکسی سروس | عمرہ ٹیکسی اور ایئرپورٹ ٹرانسفر (٢٤/٧)',
    description: 'مکہ میں عمرہ زائرین کے لیے قابل اعتماد ٹیکسی بک کریں۔ جدہ ایئرپورٹ سے مکہ، ہوٹل پک اپ اور زیارات۔ محفوظ سفر۔',
    keywords: ['مکہ ٹیکسی', 'عمرہ ٹیکسی', 'جدہ ایئرپورٹ ٹیکسی', 'حرم ٹرانسپورٹ', 'زیارات مکہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah/',
        }
    },
    openGraph: {
        title: 'مکہ ٹیکسی سروس | قابل اعتماد عمرہ ٹرانسپورٹ',
        description: 'کیا آپ کو مکہ میں ٹیکسی چاہیے؟ ہم ٢٤/٧ سروس فراہم کرتے ہیں۔ جدہ ایئرپورٹ اور زیارات کے لیے بہترین۔',
        url: 'https://taxiserviceksa.com/ur/locations/makkah/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'مکہ ٹیکسی سروس' }],
    },
};

export default function MakkahPageUrdu() {
    const services = [
        { name: 'جدہ ایئرپورٹ ٹیکسی', description: 'جدہ ایئرپورٹ سے مکہ ہوٹل تک براہ راست', icon: Plane },
        { name: 'عمرہ ٹیکسی سروس', description: 'عمرہ اور زیارات کے لیے قابل اعتماد', icon: MapPin },
        { name: 'مکہ سے مدینہ', description: 'زائرین کے لیے آرام دہ سفر', icon: Car },
        { name: 'حرم ڈراپ آف', description: 'ہوٹل سے حرم تک فوری سروس', icon: Clock },
    ];

    const makkahImages = [
        '/makkah-kaaba-night.webp',
        '/makkah-grand-mosque.webp',
        '/makkah-clock-tower.webp',
    ];

    const faqs = [
        {
            question: "جدہ ایئرپورٹ سے مکہ کا کرایہ کتنا ہے؟",
            answer: "جدہ ایئرپورٹ سے مکہ کا کرایہ چھوٹی گاڑی کے لیے ١٥٠ ریال سے شروع ہوتا ہے۔ ہم فکس ریٹ پیش کرتے ہیں۔"
        },
        {
            question: "کیا مکہ میں ٢٤ گھنٹے ٹیکسی دستیاب ہے؟",
            answer: "جی ہاں، ہماری ٹیکسی سروس ٢٤/٧ دستیاب ہے، خاص طور پر تہجد اور فجر کے وقت۔"
        },
        {
            question: "کیا آپ کے پاس فیملی کے لیے بڑی گاڑیاں ہیں؟",
            answer: "ہمارے پاس جی ایم سی یوکون اور ہائیس وین موجود ہیں جن میں سامان کی کافی گنجائش ہے۔"
        }
    ];

    const distanceData = [
        { destination: 'جدہ ایئرپورٹ (KAIA)', distance: '٩٥ کلومیٹر', time: '٦٠-٨٠ منٹ', route: 'حرمین ہائی وے' },
        { destination: 'مدینہ منورہ', distance: '٤٥٠ کلومیٹر', time: '٤-٥ گھنٹے', route: 'ہجرہ روڈ' },
        { destination: 'طائف', distance: '٨٥ کلومیٹر', time: '٦٠-٩٠ منٹ', route: 'الہدا روڈ' },
        { destination: 'عزیزیہ', distance: '٥-١٠ کلومیٹر', time: '١٥-٢٠ منٹ', route: 'ٹنل' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={makkahImages}
                h1Text="مکہ مکرمہ میں بہترین ٹیکسی سروس"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مکہ ٹیکسی
                    </span>
                }
                subtitle="عمرہ زائرین کے لیے محفوظ سفر"
                location=" ہوٹل سے حرم ٢٤/٧ سروس"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="ٹیکسی سروس KSA™ - مکہ"
                        description="١٠ ہزار سے زائد عمرہ زائرین کا قابل اعتماد ساتھی۔ ہمارے پاس رجسٹرڈ، لائسنس یافتہ اور تجربہ کار ڈرائیورز ہیں جو آپ کے روحانی سفر کو آسان بناتے ہیں۔"
                        foundingDate="٢٠١٢"
                        labels={{ verified: "تصدیق شدہ", license: "لائسنس یافتہ", since: "خدمت از" }}
                        metrics={[
                            { label: 'زائرین کی خدمت', value: '١٥,٠٠٠+', icon: Users },
                            { label: 'گوگل ریٹنگ', value: '٤.٩', icon: Star },
                            { label: 'وقت کی پابندی', value: '٩٩.٨٪', icon: Clock }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            ابھی بک کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="حرمین ٹرین بمقابلہ پرائیویٹ ٹیکسی: حالیہ صورتحال"
                    status="High Demand"
                    lastUpdated="دسمبر ٢٠٢٤"
                    content="حرمین ٹرین تیز ضرور ہے، لیکن عمرہ زائرین (خاص طور پر فیملی اور سامان کے ساتھ) کا کہنا ہے کہ 'ڈور ٹو ڈور' ٹیکسی سروس آپ کا ٤٠٪ وقت اور محنت بچاتی ہے۔ اسٹیشنوں پر سامان اٹھانے کی پریشانی سے بچیں۔ جی ایم سی بک کریں۔"
                    tags={["حرمین_ٹرین", "جدہ_ایئرپورٹ_ٹیکسی", "فیملی_نقل_و_حمل", "عمرہ_٢٠٢٥"]}
                    linkText="فیملی ٹیکسی ریٹس چیک کریں"
                />
            </div>

            <QuestionGrouper
                isRtl={true}
                mainQuestion="کیا حرمین ٹرین جدہ سے مکہ جانے کے لیے پرائیویٹ ٹیکسی سے بہتر ہے؟"
                intro="بہت سے زائرین سمجھتے ہیں کہ ٹرین ہمیشہ 'بہترین' ہے کیونکہ یہ تیز ہے، لیکن جب آپ سامان، فیملی اور ہوٹل کی لوکیشن کو دیکھتے ہیں تو حقیقت بدل جاتی ہے۔"
                labels={{ condition: "صورتحال", source: "حوالہ" }}
                subQuestions={[
                    {
                        id: 'q1',
                        condition: 'اکیلا مسافر (ہلکا سامان)',
                        question: 'کیا ٹرین اکیلے شخص کے لیے تیز ہے؟',
                        answer: 'جی ہاں۔ ایک بیگ کے ساتھ اکیلے مسافر کے لیے، ٹرین (٣٥ ریال) بہترین ہے۔ آپ آسانی سے اسٹیشن سے بس یا ٹیکسی لے سکتے ہیں۔',
                        citation: 'حرمین ریلوے شیڈول ٢٠٢٤'
                    },
                    {
                        id: 'q2',
                        condition: 'فیملی (٤+ افراد، سامان کے ساتھ)',
                        question: 'کیا فیملی کے لیے ٹرین آرام دہ ہے؟',
                        answer: 'نہیں۔ سامان کے ساتھ ٣ بار سواری بدلنا (ایئرپورٹ -> ٹرین -> اسٹیشن -> ہوٹل) بہت تھکا دینے والا ہے۔ ٹیکسی (٢٤٠ ریال) ٤ ٹکٹوں سے سستی پڑتی ہے اور دروازے تک پہنچاتی ہے۔',
                        citation: 'صارفین کے تبصرے اور لاگت کا تجزیہ'
                    },
                    {
                        id: 'q3',
                        condition: 'حرم سے ہوٹل کا فاصلہ',
                        question: 'کیا ہوٹل کی لوکیشن اہم ہے؟',
                        answer: 'بہت اہم۔ اگر آپ کا ہوٹل عزیزیہ میں ہے یا حرم سے دور ہے، تو مکہ اسٹیشن سے وہاں جانے کا ٹیکسی کا خرچہ ٥٠-٨٠ ریال اضافی ہو سکتا ہے۔',
                        citation: 'لوکل ریٹ مانیٹر'
                    }
                ]}
            />

            <SemanticField
                isRtl={true}
                title="حج اور عمرہ کے اہم مقامات"
                explanation="آپ کا ٹیکسی کا سفر صرف ایک جگہ سے دوسری جگہ جانا نہیں، بلکہ مناسک کی ادائیگی کا حصہ ہے۔ ہم ان مقدس مقامات کے درمیان رابطہ آسان بناتے ہیں:"
                labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                concepts={[
                    {
                        label: 'میقات (احرام کی حد)',
                        description: 'وہ مقام جہاں سے عمرہ زائرین کو احرام باندھنا لازمی ہے۔ ہمارے ڈرائیور میقات السیل الکبیر (قرن المنازل) اور ذوالحلیفہ کے راستوں سے بخوبی واقف ہیں۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/میقات'
                    },
                    {
                        label: 'طواف قدوم',
                        description: 'مکہ پہنچنے پر پہلا طواف۔ ہم آپ کو باب عبدالعزیز کے قریب ترین ڈراپ آف پوائنٹ پر اتارتے ہیں تاکہ آپ کو کم چلنا پڑے۔',
                        internalLink: '/ur/guides/umrah-tawaf-guide'
                    },
                    {
                        label: 'حدود حرم',
                        description: 'حرم مکہ کی جغرافیائی حد۔ سستی رہائش (عزیزیہ) یا نماز کے اوقات کا تعین کرنے کے لیے اس کا علم ہونا ضروری ہے۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/حرم_مکی'
                    },
                    {
                        label: 'نسک ایپ اور پرمٹ',
                        description: 'عمرہ پرمٹ کے لیے سرکاری ایپ۔ ہماری گاڑیاں نسک پرمٹ ہولڈرز کے لیے مختص تمام ڈراپ آف زونز تک رسائی رکھتی ہیں۔',
                        wikiLink: 'https://www.nusuk.sa/ur'
                    }
                ]}
            />

            <TopicCluster
                isRtl={true}
                mainTopic="مکہ مکرمہ ٹرانسپورٹ روڈ میپ"
                clusters={[
                    {
                        category: "بنیادی سفری سہولیات",
                        relevance: "Primary",
                        items: [
                            { label: "جدہ ایئرپورٹ سے مکہ ٹیکسی", url: "/ur/jeddah-airport-to-makkah-taxi" },
                            { label: "مکہ سے مدینہ ٹیکسی", url: "/ur/makkah-to-madinah-taxi" },
                            { label: "حرمین ٹرین اسٹیشن پک اپ", url: "/ur/makkah-train-station-taxi" }
                        ]
                    },
                    {
                        category: "عمرہ زائرین کے لیے گائیڈ",
                        relevance: "Secondary",
                        items: [
                            { label: "میقات اور احرام گائیڈ", url: "/ur/guides/meeqat-locations", description: "جدہ یا طائف سے آتے ہوئے احرام کہاں باندھیں؟" },
                            { label: "حرم کے دروازوں تک رسائی", url: "/ur/guides/haram-gates-access", description: "باب عبدالعزیز اور باب فہد کے لیے بہترین ڈراپ آف پوائنٹس۔" },
                            { label: "وہیل چیئر ٹیکسی سروس", url: "/ur/services/wheelchair-taxi", description: "بزرگوں اور معذور افراد کے لیے خصوصی گاڑیاں۔" }
                        ]
                    },
                    {
                        category: "علاقائی روابط",
                        relevance: "Tertiary",
                        items: [
                            { label: "طائف کا سفر", url: "/ur/locations/taif" },
                            { label: "جدہ کی سیر", url: "/ur/locations/jeddah" },
                            { label: "مکہ کی مقدس زیارتیں", url: "/ur/locations/makkah-ziyarat" },
                            { label: "شاپنگ مالز", url: "/ur/guides/makkah-shopping" }
                        ]
                    }
                ]}
            />

            {/* Breadcrumb Navigation - Urdu */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 ml-2">
                            ہوم
                        </Link>
                        <span className="text-gray-400 ml-2">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 ml-2">
                            مقامات
                        </Link>
                        <span className="text-gray-400 ml-2">/</span>
                        <span className="text-gray-900 font-semibold">مکہ مکرمہ</span>
                    </nav>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                        مکہ میں ہماری ٹیکسی سروسز
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/50 transition-all text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Semantic SEO */}
                    <SeasonalTravelTips
                        city="مکہ مکرمہ"
                        isRtl={true}
                        labels={{
                            title: "مکہ میں سفر کے مشورے",
                            subtitle: "خوشگوار سفر کے لیے موسم کی معلومات",
                            summerTitle: "گرمی کا موسم (جون - اگست)",
                            summerText: "درجہ حرارت ٤٠ ڈگری سے اوپر جا سکتا ہے۔ **اے سی ٹیکسی** بک کرنا بہت ضروری ہے۔ ہمارا اے سی سسٹم بہترین کولنگ فراہم کرتا ہے۔",
                            summerTag: "ضروری: اے سی ٹیکسی",
                            winterTitle: "سردی کا موسم (دسمبر - فروری)",
                            winterText: "موسم خوشگوار ہوتا ہے لیکن رش بہت زیادہ ہوتا ہے۔ سڑک پر ٹیکسی ملنا مشکل ہو سکتا ہے۔ **پہلے سے بکنگ** کرنے سے انتظار کی زحمت نہیں ہوتی۔",
                            winterTag: "ٹریفک الرٹ: رش کا سیزن",

                        }}
                    />

                    <DistanceTable
                        origin="حرم شریف"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "حرم سے سفر کا دورانیہ",
                            subtitle: "ٹیکسی سفر کا تخمینہ",
                            destinationHeader: "منزل",
                            distanceHeader: "فاصلہ",
                            timeHeader: "وقت",
                            routeHeader: "راستہ",
                            disclaimer: "*رش کے دنوں میں وقت مختلف ہو سکتا ہے۔"
                        }}
                    />

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "سفری حقائق: کیا توقع رکھیں؟",
                                subtitle: "زائرین کے ڈیٹا کی بنیاد پر ماہرانہ مشورے",
                                beliefLabel: "عام خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اثر انداز عوامل"
                            }}
                            points={[
                                {
                                    topic: "جدہ ایئرپورٹ سے مکہ کرایہ",
                                    commonBelief: "عام کرایہ ١٥٠-٢٠٠ ریال ہے۔",
                                    reality: "ایپس میں ریٹ کم نظر آتے ہیں لیکن وی آئی پی سروس ٢٥٠-٣٠٠ ریال تک جاتی ہے۔ رمضان اور حج میں کرائے ڈبل ہو جاتے ہیں۔ ہمارے فکس ریٹ آپ کو بچاتے ہیں۔",
                                    truthRange: "١٥٠ - ٣٥٠ ریال",
                                    factors: ["گاڑی کی قسم (جی ایم سی)", "سیزن (رمضان)", "رش کے اوقات"]
                                },
                                {
                                    topic: "جدہ ایئرپورٹ کا دورانیہ",
                                    commonBelief: "گوگل میپس ٦٠ منٹ بتاتا ہے۔",
                                    reality: "حرم چیک پوائنٹ اور ایئرپورٹ ٹرمینل کا رش ٣٠+ منٹ بڑھا دیتا ہے۔ جمعہ کی نماز کے بعد سڑکیں بند ہونے سے ایک گھنٹہ اور لگ سکتا ہے۔",
                                    truthRange: "٧٥ - ١١٠ منٹ",
                                    factors: ["چیک پوائنٹ", "نماز جمعہ", "ٹرمینل رش"]
                                },
                                {
                                    topic: "ٹیکسی بمقابلہ ٹرین",
                                    commonBelief: "ٹرین ہمیشہ تیز ہوتی ہے۔",
                                    reality: "حرمین ٹرین تیز ہے (٥٥ منٹ) لیکن اسٹیشن جانے میں ٢٠-٤٠ منٹ لگتے ہیں۔ حرم کے قریب ہوٹلوں کے لیے ڈائریکٹ ٹیکسی جلدی پہنچاتی ہے۔",
                                    truthRange: "برابر",
                                    factors: ["اسٹیشن کا فاصلہ", "سامان کی منتقلی", "انتظار کا وقت"]
                                }
                            ]}
                        />
                        <div className="mt-12"></div>
                        <RoutePerspective
                            isRtl={true}
                            labels={{
                                title: "سفر کا انداز منتخب کریں",
                                subtitle: "آپ کی ضرورت کے مطابق بہترین روٹ"
                            }}
                            route="مکہ سے مدینہ (ہجرہ روڈ)"
                            perspectives={[
                                {
                                    id: "pilgrim",
                                    targetAudience: "عمرہ زائر",
                                    icon: User,
                                    intent: "روحانی سفر اور زیارت",
                                    description: "زائرین کے لیے یہ صرف سفر نہیں، عبادت ہے۔ راستے میں میقات پر توقف ہوتا ہے۔ سکون اور آرام نماز اور ذکر کے لیے ضروری ہے۔",
                                    structuredFeatures: [
                                        { label: "توقف", value: "موجود (میقات)" },
                                        { label: "سامان", value: "بڑی گنجائش (زمزم)" },
                                        { label: "لباس", value: "احرام کے لیے مناسب" },
                                        { label: "انداز", value: "پرسکون" }
                                    ],
                                    visualContext: "روٹ میپ میں میقات اور نماز کی جگہوں کی نشاندہی۔"
                                },
                                {
                                    id: "express",
                                    targetAudience: "ایکسپریس مسافر",
                                    icon: Briefcase,
                                    intent: "تیز ترین سفر",
                                    description: "ہوٹل سے ہوٹل کم وقت میں پہنچیں۔ ہائی وے کا بہترین استعمال اور رش سے بچاؤ۔ بزنس کے لیے بہترین۔",
                                    structuredFeatures: [
                                        { label: "اسپیڈ", value: "١٢٠-١٤٠ کلومیٹر/گھنٹہ" },
                                        { label: "روٹ", value: "ڈائریکٹ ہائی وے" },
                                        { label: "توقف", value: "صرف پیٹرول" },
                                        { label: "انداز", value: "تیز رفتار" }
                                    ],
                                    visualContext: "ٹائم لائن جو سیدھے ہائی وے کا دورانیہ دکھاتی ہے۔"
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "ماہرین کے جوابات",
                                subtitle: "ہر مسافر کے لیے براہ راست حقائق اور سیاق و سباق",
                                quickAnswer: "مختصر جواب",
                                perspectives: "سیاقی تناظر",
                                readMore: "تفصیلات پڑھیں",
                                readLess: "کم دکھائیں"
                            }}
                            faqs={[
                                {
                                    question: "جدہ ایئرپورٹ سے مکہ ٹیکسی کا کرایہ کتنا ہے؟",
                                    shortAnswer: "٢٠٠ ریال (فکسڈ)",
                                    detailedAnswer: "پرائیویٹ سیڈان کار کا معیاری ریٹ تقریباً ٢٠٠ ریال ہے۔ کریم/اوبر ایپس رش کے اوقات میں مہنگی (٣٠٠ ریال تک) ہو سکتی ہیں۔ ایئرپورٹ ٹیکسی میٹر پر چلتی ہے۔",
                                    perspectives: [
                                        {
                                            role: "فیملی (٥+ افراد)",
                                            icon: "Users",
                                            insight: "دو چھوٹی گاڑیاں لینے کے بجائے ایک جی ایم سی (٣٠٠-٣٥٠ ریال) بک کرنا زیادہ سستا اور آرام دہ ہے۔"
                                        },
                                        {
                                            role: "بچت کرنے والے",
                                            icon: "Briefcase",
                                            insight: "حرمین ٹرین سستی (٣٥ ریال) ہے لیکن اسٹیشن سے ہوٹل تک ٹیکسی کا اضافی خرچہ (٤٠-٥٠ ریال) اور وقت لگتا ہے۔"
                                        }
                                    ]
                                },
                                {
                                    question: "جدہ سے مکہ کا سفر کتنا طویل ہے؟",
                                    shortAnswer: "٧٥ - ٩٠ منٹ",
                                    detailedAnswer: "حرمین ہائی وے کے ذریعے فاصلہ تقریباً ١٠٠ کلومیٹر ہے۔ عام ٹریفک میں یہ سفر ایک گھنٹہ پندرہ منٹ کا ہے۔",
                                    perspectives: [
                                        {
                                            role: "عمرہ زائرین",
                                            icon: "Heart",
                                            insight: "شمیسی چیک پوائنٹ پر پرمٹ چیکنگ میں ١٠-٢٠ منٹ لگ سکتے ہیں۔ جمعہ کی نماز کے وقت حرم کے قریب رش ہوتا ہے۔"
                                        },
                                        {
                                            role: "مقامی مشورہ",
                                            icon: "Shield",
                                            insight: "شام ٥ سے ٧ بجے کے درمیان جدہ سے نکلنے سے گریز کریں کیونکہ یہ چھٹی کا وقت ہوتا ہے۔"
                                        }
                                    ]
                                },
                                {
                                    question: "کیا ٹیکسی میں احرام پہننا آسان ہے؟",
                                    shortAnswer: "جی ہاں، بالکل۔",
                                    detailedAnswer: "ہماری گاڑیاں زائرین کے لیے بہترین ہیں۔ اے سی ٹھنڈا ہوتا ہے اور سیٹیں صاف ستھری ہوتی ہیں۔",
                                    perspectives: [
                                        {
                                            role: "آرام",
                                            icon: "Compass",
                                            insight: "احرام والوں کے لیے جی ایم سی (SUV) میں بیٹھنا اور اترنا چھوٹی گاڑی کی نسبت بہت آسان ہے۔"
                                        },
                                        {
                                            role: "روحانیت",
                                            icon: "User",
                                            insight: "ڈرائیور سفر کے دوران احترام کا خیال رکھتے ہیں۔ آپ تلاوت یا خاموشی کی درخواست کر سکتے ہیں۔"
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <RelatedLocations
                    currentCity="مکہ"
                    isRtl={true}
                    labels={{
                        title: "قریبی مقامات",
                        subtitle: "سعودی عرب میں آسان سفر",
                        viewRoutes: "روٹ دیکھیں"
                    }}
                    customLinks={[
                        { name: 'مدینہ ٹیکسی', url: '/locations/madinah', description: 'مسجد نبوی کے لیے کار سروس' },
                        { name: 'جدہ ایئرپورٹ', url: '/locations/jeddah', description: 'ایئرپورٹ پک اپ سروس' },
                        { name: 'طائف ٹرپ', url: '/locations/taif', description: 'طائف کی سیر' },
                    ]}
                />
            </div>

        </div>
    );
}
