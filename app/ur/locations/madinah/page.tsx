import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Book } from 'lucide-react';
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
    title: 'مدینہ منورہ ٹیکسی سروس | ایئرپورٹ اور زیارات',
    description: 'مدینہ منورہ میں قابل اعتماد ٹیکسی سروس۔ مسجد نبوی، مسجد قباء اور دیگر زیارات کے لیے بہترین۔ ٢٤ گھنٹے دستیاب۔',
    keywords: ['مدینہ ٹیکسی', 'زیارات مدینہ', 'ایئرپورٹ پک اپ', 'حرم ٹیکسی', 'مسجد قباء ٹرانسپورٹ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/madinah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/madinah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/madinah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/madinah/',
            'x-default': 'https://taxiserviceksa.com/locations/madinah/',
        }
    },
    openGraph: {
        title: 'مدینہ ٹیکسی سروس | مسجد نبوی کی زیارت',
        description: 'مدینہ میں سستی اور آرام دہ ٹیکسی بک کریں۔ ہوٹل سے حرم اور ایئرپورٹ ٹرانسفر کے لیے۔',
        url: 'https://taxiserviceksa.com/ur/locations/madinah/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-prophets-mosque.webp', alt: 'مسجد نبوی، مدینہ' }],
    },
};

export default function MadinahPageUrdu() {
    const services = [
        { name: 'ایئرپورٹ پک اپ', description: 'پرنس محمد ایئرپورٹ سے ہوٹل', icon: Plane },
        { name: 'زیارات پیکیج', description: 'تمام مقدس مقامات کی سیر', icon: Book },
        { name: 'مکہ کے لیے ٹیکسی', description: 'مدینہ سے مکہ عمرہ ٹرپ', icon: Car },
        { name: 'سٹی ٹرانسپورٹ', description: 'شہر میں کہیں بھی سفر کریں', icon: MapPin },
    ];

    const madinahImages = [
        '/madinah-prophets-mosque.webp',
        '/madinah-night-view.webp',
        '/hero-slide-2.webp',
    ];

    const faqs = [
        {
            question: "مدینہ ایئرپورٹ سے حرم کا کرایہ کتنا ہے؟",
            answer: "عام طور پر ٨٠ سے ١٢٠ ریال۔ ہماری ٹیکسی فکس ریٹ پر دستیاب ہے تاکہ آپ کو پریشانی نہ ہو۔"
        },
        {
            question: "کیا زیارات کے لیے الگ گاڑی ملے گی؟",
            answer: "جی ہاں، ہم زیارات کے لیے پرائیویٹ گاڑی فراہم کرتے ہیں جو آپ کو تمام اہم مقامات (احد، قباء) لے جائے گی۔"
        },
        {
            question: "کیا ڈرائیور اردو بولتے ہیں؟",
            answer: "ہمارے اکثر ڈرائیور اردو/ہندی سمجھتے اور بولتے ہیں، جو پاکستانی اور ہندوستانی زائرین کے لیے آسانی کا باعث ہے۔"
        }
    ];

    const distanceData = [
        { destination: 'مکہ مکرمہ (حرم)', distance: '٤٥٠ کلومیٹر', time: '٤-٥ گھنٹے', route: 'ہجرہ ہائی وے' },
        { destination: 'پرنس محمد ایئرپورٹ', distance: '٢٠ کلومیٹر', time: '٢٥-٣٠ منٹ', route: 'ایئرپورٹ روڈ' },
        { destination: 'مسجد قباء', distance: '١٠ کلومیٹر', time: '١٥-٢٠ منٹ', route: 'قباء روڈ' },
        { destination: 'جبل احد', distance: '٨ کلومیٹر', time: '١٥ منٹ', route: 'رنگ روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={madinahImages}
                h1Text="مدینہ منورہ میں بہترین ٹیکسی اور زیارات"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مدینہ ٹیکسی
                    </span>
                }
                subtitle="زائرین کے لیے خصوصی سروس"
                location="مسجد نبوی ٹرانسپورٹ"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="ٹیکسی سروس KSA™ - مدینہ"
                        description="مدینہ منورہ کی زیارات کے ماہر۔ ہم صرف ڈرائیور نہیں، آپ کے میزبان ہیں۔ تاریخی مقامات (احد، قباء) کی زیارت مقامی ڈرائیورز کے ساتھ کریں جو تاریخ سے واقف ہیں۔"
                        foundingDate="٢٠١٢"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'زیارات ٹورز', value: '٨,٠٠٠+', icon: Compass },
                            { label: 'کسٹمر ریٹنگ', value: '٥.٠', icon: Star },
                            { label: 'مقامی ڈرائیور', value: '١٠٠٪', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            زیارات بک کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="سفر کی اہم اطلاع: مسجد قباء اور احد"
                    status="Insider Tip"
                    lastUpdated="دسمبر ٢٠٢٤"
                    content="بھاری بھیڑ اور دھوپ کی شدت سے بچنے کے لیے، ہمارے مقامی ڈرائیورز نماز فجر کے فوراً بعد (تقریباً ٦:٠٠ بجے) زیارات شروع کرنے کا مشورہ دیتے ہیں۔ اس وقت آپ مسجد قباء میں سکون اور احد پہاڑ پر رش کے بغیر وقت گزار سکتے ہیں۔"
                    tags={["زیارات_مدینہ", "مسجد_قباء", "مقامی_مشورے", "بہترین_وقت"]}
                    linkText="صبح کی زیارات بک کریں"
                />
            </div>

            <QuestionGrouper
                isRtl={true}
                mainQuestion="مدینہ میں زیارات کے لیے بہترین وقت کون سا ہے؟"
                intro="بہترین وقت کا کوئی ایک جواب نہیں ہے۔ اس کا انحصار آپ کے مقصد پر ہے: کیا آپ سکون چاہتے ہیں، تاریخ سمجھنا چاہتے ہیں، یا گرمی سے بچنا چاہتے ہیں؟"
                labels={{ condition: "مقصد/حالات", source: "ذریعہ" }}
                subQuestions={[
                    {
                        id: 'q1',
                        condition: 'سکون اور عبادت',
                        question: 'مسجد قباء میں رش کب کم ہوتا ہے؟',
                        answer: 'فجر کی نماز کے فوراً بعد (سورج طلوع ہوتے ہی)۔ زیادہ تر ٹور گروپس ٨ بجے کے بعد آتے ہیں۔ جلدی جانے سے آپ سکون سے نفل ادا کر سکتے ہیں۔',
                        citation: 'نماز کے اوقات اور رش کا تجزیہ'
                    },
                    {
                        id: 'q2',
                        condition: 'تاریخی فوٹوگرافی',
                        question: 'جبل احد دیکھنے کا بہترین وقت؟',
                        answer: 'عصر کے بعد۔ سورج مغرب سے جبل رماۃ پر پڑتا ہے، جس سے سائے بنتے ہیں اور تاریخی میدانِ جنگ کو سمجھنا آسان ہوتا ہے۔',
                        citation: 'مدینہ فوٹوگرافی گائیڈ'
                    },
                    {
                        id: 'q3',
                        condition: 'شدید گرمی (مئی تا ستمبر)',
                        question: 'گرمی میں زیارت کیسے کریں؟',
                        answer: 'رات کی زیارت۔ مساجد سبعہ اور قباء رات کو خوبصورتی سے روشن ہوتے ہیں اور موسم بھی ٹھنڈا ہوتا ہے۔ صبح ١٠ سے شام ٤ تک بچیں۔',
                        citation: 'موسمیاتی ڈیٹا اور حفاظتی اصول'
                    }
                ]}
            />

            <SemanticField
                isRtl={true}
                title="مدینہ منورہ کا مقدس جغرافیہ"
                explanation="مدینہ کا حقیقی تجربہ حاصل کرنے کے لیے، آپ کو اس کے جغرافیہ کو اس کی تاریخ سے جوڑنا ہوگا۔ ہمارے زیارات ٹورز آپ کو نبی کریم ﷺ کے نقش قدم پر چلنے میں مدد دیتے ہیں۔"
                labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                concepts={[
                    {
                        label: 'روضہ شریف',
                        description: 'جنت کا باغ جو منبر رسول ﷺ اور آپ کے گھر کے درمیان ہے۔ ہم آپ کے بک کیے ہوئے وقت کے مطابق بہترین گیٹ (گیٹ 37) پر اتارتے ہیں۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/روضہ_رسول'
                    },
                    {
                        label: 'میقات ذوالحلیفہ (ابیار علی)',
                        description: 'اہل مدینہ کی میقات۔ یہ مسجد نبوی سے 18 کلومیٹر دور ہے، اور مکہ جاتے ہوئے ہم یہاں احرام کے لیے رکتے ہیں۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/مسجد_ذی_حلیفہ'
                    },
                    {
                        label: 'جبل احد',
                        description: 'غزوہ احد کا مقام۔ یہ صرف ایک پہاڑ نہیں بلکہ "وہ پہاڑ ہے جو ہم سے محبت کرتا ہے اور ہم اس سے"۔ مسجد سے 5 کلومیٹر شمال میں واقع ہے۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/جبل_احد'
                    },
                    {
                        label: 'مسجد قباء',
                        description: 'اسلام کی پہلی مسجد۔ یہاں دو نفل پڑھنے کا ثواب عمرہ کے برابر ہے۔ یہ مدینہ کے جنوبی مضافات میں واقع ہے۔',
                        wikiLink: 'https://ur.wikipedia.org/wiki/مسجد_قبا'
                    }
                ]}
            />

            <TopicCluster
                isRtl={true}
                mainTopic="مدینہ منورہ زیارت گائیڈ"
                clusters={[
                    {
                        category: "زیارات اور ٹورز",
                        relevance: "Primary",
                        items: [
                            { label: "مکمل زیارت پیکج بک کریں", url: "/ur/services/madinah-ziyarat" },
                            { label: "مدینہ سے مکہ ٹرانسفر", url: "/ur/madinah-to-makkah-taxi" },
                            { label: "مدینہ ایئرپورٹ پک اپ", url: "/ur/madinah-airport-taxi" }
                        ]
                    },
                    {
                        category: "تاریخی مقامات",
                        relevance: "Secondary",
                        items: [
                            { label: "غزوہ احد اور جبل رماہ", url: "/ur/guides/uhud-history", description: "جنگ احد کے میدان کا جغرافیائی خاکہ۔" },
                            { label: "سبعہ مساجد (سات مسجدیں)", url: "/ur/guides/seven-mosques", description: "غزوہ خندق کے مقامات کی زیارت۔" },
                            { label: "مسجد قباء پیدل راستہ", url: "/ur/guides/quba-walking-path", description: "حرم سے قباء تک پیدل راستے کی گائیڈ۔" }
                        ]
                    },
                    {
                        category: "مسافروں کے لیے معلومات",
                        relevance: "Tertiary",
                        items: [
                            { label: "نماز کے اوقات", url: "/ur/guides/madinah-prayer-times" },
                            { label: "موسم کی صورتحال", url: "/ur/guides/madinah-weather" },
                            { label: "قریبی ہوٹل اور ریسٹورنٹ", url: "/ur/guides/madinah-food" },
                            { label: "کرنسی ایکسچینج", url: "/ur/guides/currency" }
                        ]
                    }
                ]}
            />

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
                        <span className="text-gray-900 font-semibold">مدینہ منورہ</span>
                    </nav>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                        خدمات برائے زائرین مدینہ
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

                    <SeasonalTravelTips
                        city="مدینہ منورہ"
                        isRtl={true}
                        labels={{
                            title: "سفر اور موسم کی معلومات",
                            subtitle: "مدینہ میں موسم اور رش کی صورتحال",
                            summerTitle: "گرمی (جون - اگست)",
                            summerText: "مدینہ میں گرمی بہت شدید ہوتی ہے۔ زیارات کے لیے **صبح جلدی** نکلنا بہتر ہے۔ ہم آپ کو بہترین اے سی گاڑی فراہم کریں گے۔",
                            summerTag: "گرمی سے بچاؤ: اے سی کار",
                            winterTitle: "سردی (دسمبر - فروری)",
                            winterText: "موسم بہت خوشگوار ہوتا ہے۔ پیدل چلنے کے لیے بہترین۔ لیکن سکول کی چھٹیوں کی وجہ سے رش بڑھ جاتا ہے۔",
                            winterTag: "بہترین موسم"
                        }}
                    />

                    <DistanceTable
                        origin="مسجد نبوی"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "مختلف مقامات کا فاصلہ",
                            subtitle: "ٹیکسی سفر کا اوسط وقت",
                            destinationHeader: "منزل",
                            distanceHeader: "فاصلہ",
                            timeHeader: "وقت",
                            routeHeader: "روٹ",
                            disclaimer: "*نماز کے اوقات میں رش کی وجہ سے دیر ہو سکتی ہے۔"
                        }}
                    />

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "مدینہ سفر: حقائق",
                                subtitle: "زیارت کے اخراجات اور اوقات پر ماہرانہ رائے",
                                beliefLabel: "عام سوچ",
                                realityLabel: "حقیقت",
                                rangeLabel: "محفوظ اندازہ",
                                factorsLabel: "اہم عوامل"
                            }}
                            points={[
                                {
                                    topic: "ایئرپورٹ سے ہوٹل کرایہ",
                                    commonBelief: "تقریباً ٥٠ ریال۔",
                                    reality: "ایئرپورٹ ٹیکسی میٹر پر چلتی ہے (اکثر ٨٠-١٢٠ ریال)۔ پرائیویٹ کار فکس ریٹ (١٠٠-١٥٠) پر ملتی ہے جس میں استقبال بھی شامل ہے۔",
                                    truthRange: "٨٠ - ١٥٠ ریال",
                                    factors: ["ایئرپورٹ فیس", "گاڑی کی قسم", "استقبال سروس"]
                                },
                                {
                                    topic: "زیارات کا وقت",
                                    commonBelief: "٢ گھنٹے لگتے ہیں۔",
                                    reality: "صرف قباء اور احد کے لیے ٢ گھنٹے کافی ہیں۔ لیکن مکمل زیارت (سبعہ مساجد، قبلتین) اور نماز کے وقفوں کے ساتھ ٣-٤ گھنٹے درکار ہیں۔",
                                    truthRange: "٣ - ٤ گھنٹے",
                                    factors: ["نماز کے اوقات", "زیارات پر رش", "اسٹاپس"]
                                },
                                {
                                    topic: "مدینہ سے مکہ سفر",
                                    commonBelief: "ٹرین ٢ گھنٹے لیتی ہے۔",
                                    reality: "ٹرین کا سفر ٢.٥ گھنٹے ہے، لیکن اسٹیشن آنے جانے میں وقت لگتا ہے۔ ٹیکسی (٤-٥ گھنٹے) آپ کو ہوٹل سے ہوٹل پہنچاتی ہے اور میقات پر سکون سے رکتی ہے۔",
                                    truthRange: "٤ - ٥ گھنٹے (ٹیکسی)",
                                    factors: ["میقات پر توقف", "ڈور ٹو ڈور", "سامان"]
                                }
                            ]}
                        />
                        <div className="mt-12"></div>
                        <RoutePerspective
                            isRtl={true}
                            labels={{
                                title: "اپنا روٹ منتخب کریں",
                                subtitle: "مدینہ سے مکہ سفر کے اختیارات"
                            }}
                            route="مدینہ سے مکہ (عمرہ روٹ)"
                            perspectives={[
                                {
                                    id: "pilgrim-outbound",
                                    targetAudience: "عمرہ زائر",
                                    icon: User,
                                    intent: "نیت اور احرام",
                                    description: "سفر کا آغاز میقات ذوالحلیفہ (ابیار علی) سے ہوتا ہے۔ یہ اسٹاپ فرض ہے۔ راستے میں تلبیہ پڑھا جاتا ہے۔ زائرین تیز رفتاری کے بجائے پرسکون سفر پسند کرتے ہیں۔",
                                    structuredFeatures: [
                                        { label: "اہم اسٹاپ", value: "میقات (ابیار علی)" },
                                        { label: "وقت", value: "٤-٥ گھنٹے" },
                                        { label: "تیاری", value: "احرام اور غسل" },
                                        { label: "بہترین وقت", value: "فجر/عصر کے بعد" }
                                    ],
                                    visualContext: "نقشہ جس میں حرم سے میقات (١٢ کلومیٹر) اور پھر ہائی وے دکھایا گیا ہے۔"
                                },
                                {
                                    id: "tourist-ziyarat",
                                    targetAudience: "سیاح / زائر",
                                    icon: Compass,
                                    intent: "تاریخی مقامات کی سیر",
                                    description: "مدینہ ایک زندہ تاریخ ہے۔ راستے میں بدر کا میدان اور دیگر تاریخی وادیاں آتی ہیں۔ دن کی روشنی میں سفر کرنے سے آپ یہ مقامات دیکھ سکتے ہیں۔",
                                    structuredFeatures: [
                                        { label: "نظارہ", value: "بدر (راستے میں)" },
                                        { label: "منظر", value: "پہاڑی وادیاں" },
                                        { label: "اسٹاپ", value: "تصویروں کے لیے" },
                                        { label: "گائیڈ", value: "بہتر ہے" }
                                    ],
                                    visualContext: "ٹائم لائن جس میں بدر کی زیارت اور پہاڑی راستے شامل ہیں۔"
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "ماہرین کے جوابات",
                                subtitle: "مدینہ منورہ کے زائرین کے لیے تفصیلی حقائق",
                                quickAnswer: "مختصر جواب",
                                perspectives: "سیاقی تناظر",
                                readMore: "تفصیلات پڑھیں",
                                readLess: "کم دکھائیں"
                            }}
                            faqs={[
                                {
                                    question: "مدینہ ایئرپورٹ سے مسجد نبوی کا کرایہ کتنا ہے؟",
                                    shortAnswer: "٨٠ - ١٢٠ ریال (میٹر)",
                                    detailedAnswer: "ایئرپورٹ ٹیکسی میٹر پر چلتی ہے۔ حتمی کرایہ ٹریفک اور بھیڑ پر منحصر ہے۔ رش کے دنوں میں گاڑی ملنا مشکل ہو سکتا ہے۔",
                                    perspectives: [
                                        {
                                            role: "سکون اور اطمینان",
                                            icon: "Shield",
                                            insight: "پہلے سے بکنگ (١٤٠ ریال) تھوڑی مہنگی ہے لیکن ڈرائیور آپ کا انتظار کرتا ہے اور ریٹ فکس ہوتا ہے۔"
                                        },
                                        {
                                            role: "بڑی فیملی",
                                            icon: "Users",
                                            insight: "عام ٹیکسی میں صرف ٤ لوگ بیٹھ سکتے ہیں۔ اگر آپ ٥+ ہیں تو دو ٹیکسیوں (٢٠٠+ ریال) کے بجائے ایک ہائی ایس یا جی ایم سی بہتر ہے۔"
                                        }
                                    ]
                                },
                                {
                                    question: "زیارات میں کتنا وقت لگتا ہے؟",
                                    shortAnswer: "٣ - ٤ گھنٹے",
                                    detailedAnswer: "اہم مقامات (مسجد قباء، احد پہاڑ، قبلتین) کا مکمل دورہ عام طور پر ٣ سے ٤ گھنٹے لیتا ہے۔",
                                    perspectives: [
                                        {
                                            role: "روحانیت",
                                            icon: "Heart",
                                            insight: "قباء میں جلدی نہ کریں۔ یہاں دو رکعت نماز کا ثواب عمرہ کے برابر ہے۔ وضو اور دعا کے لیے کم از کم ٤٥ منٹ رکھیں۔"
                                        },
                                        {
                                            role: "تاریخی دلچسپی",
                                            icon: "Compass",
                                            insight: "احد پہاڑ پر جبل الرماة (تیر اندازوں کا پہاڑ) پر چڑھنے اور جنگ کا نقشہ سمجھنے کے لیے وقت نکالیں۔"
                                        }
                                    ]
                                },
                                {
                                    question: "کیا مدینہ سے مکہ ٹرین جاتی ہے؟",
                                    shortAnswer: "جی ہاں، حرمین ٹرین۔",
                                    detailedAnswer: "حرمین ٹرین بہت تیز (٢.٥ گھنٹے) ہے، لیکن اسٹیشن آنے جانے میں وقت لگتا ہے۔ سامان اٹھانا بھی مشکل ہو سکتا ہے۔",
                                    perspectives: [
                                        {
                                            role: "ہوٹل سے ہوٹل",
                                            icon: "User",
                                            insight: "ٹیکسی ٤.٥ گھنٹے لیتی ہے لیکن یہ ڈور-ٹو-ڈور سروس ہے۔ بس بیٹھیں اور مکہ ہوٹل اتریں۔"
                                        },
                                        {
                                            role: "اکیلا مسافر",
                                            icon: "Briefcase",
                                            insight: "اکیلے مسافر کے لیے ٹرین سستی ہے۔ لیکن سامان اور فیملی کے ساتھ ٹیکسی زیادہ آسان آپشن ہے۔"
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
                    currentCity="مدینہ"
                    isRtl={true}
                    labels={{
                        title: "دیگر مشہور مقامات",
                        subtitle: "سعودی عرب کے دیگر شہروں کا سفر",
                        viewRoutes: "تفصیلات دیکھیں"
                    }}
                    customLinks={[
                        { name: 'مکہ ٹیکسی', url: '/locations/makkah', description: 'عمرہ کے لیے مکہ کا سفر' },
                        { name: 'جدہ ایئرپورٹ', url: '/locations/jeddah', description: 'واپسی کے لیے ایئرپورٹ ڈراپ' },
                        { name: 'ینبع ساحل', url: '/locations/yanbu', description: 'ینبع کا تفریحی ٹرپ' },
                    ]}
                />
            </div>

        </div>
    );
}
