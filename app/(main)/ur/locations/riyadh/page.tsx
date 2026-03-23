import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, Landmark, Briefcase, Camera } from 'lucide-react';
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
    title: 'ریاض ٹیکسی سروس | ایئرپورٹ ٹرانسفر اور کارپوریٹ سفر',
    description: 'ریاض میں پریمیم ٹیکسی سروس۔ کنگ خالد ایئرپورٹ، کنگڈم سینٹر، اور الدرعیہ کے لیے آرام دہ سفر۔ بزنس اور سیاحت کے لیے ماہر ڈرائیورز۔',
    keywords: ['ریاض ٹیکسی', 'ریاض ایئرپورٹ ٹرانسفر', 'ریاض کارپوریٹ ٹرانسپورٹ', 'کنگ خالد ایئرپورٹ ٹیکسی', 'ریاض سٹی ٹور'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/riyadh/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/riyadh/',
            'ar': 'https://taxiserviceksa.com/ar/locations/riyadh/',
            'ur': 'https://taxiserviceksa.com/ur/locations/riyadh/',
            'x-default': 'https://taxiserviceksa.com/locations/riyadh/',
        }
    },
    openGraph: {
        title: 'ریاض ٹیکسی اور کارپوریٹ ٹرانسفر | آرام دہ سفر',
        description: 'ریاض کی مصروف شاہراہوں پر پرسکون سفر۔ پریمیم گاڑیوں اور پیشہ ور ڈرائیورز کے ساتھ۔',
        url: 'https://taxiserviceksa.com/ur/locations/riyadh/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/riyadh-skyline.webp', alt: 'ریاض سٹی لائن' }],
    },
};

export default function RiyadhPageUrdu() {
    const services = [
        { name: 'کنگ خالد ایئرپورٹ پک اپ', description: 'ایئرپورٹ (RUH) سے ریاض کے تمام ہوٹلوں اور دفاتر تک', icon: Plane },
        { name: 'کارپوریٹ چوفر سروس', description: 'بزنس میٹنگز اور دفاتر کے لیے پریمیم گاڑیاں اور ڈرائیورز', icon: Briefcase },
        { name: 'ریاض سٹی ٹور', description: 'الدرعیہ، بلیوارڈ اور کنگڈم سینٹر کی سیر', icon: Camera },
        { name: 'انٹر سٹی ٹرانسفر', description: 'ریاض سے دمام، قصیم اور دیگر شہروں کے لیے ڈائریکٹ سروس', icon: Car },
    ];

    const riyadhImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const distanceData = [
        { destination: 'کنگ خالد ایئرپورٹ (RUH)', distance: '35 کلومیٹر', time: '30-40 منٹ', route: 'ایئرپورٹ روڈ' },
        { destination: 'کنگڈم سینٹر (مرکز المملکہ)', distance: '5 کلومیٹر', time: '15 منٹ', route: 'کنگ فہد روڈ' },
        { destination: 'تاریخی الدرعیہ', distance: '20 کلومیٹر', time: '25 منٹ', route: 'ویسٹرن رنگ روڈ' },
        { destination: 'ریاض بلیوارڈ سٹی', distance: '12 کلومیٹر', time: '20 منٹ', route: 'نارتھ رنگ روڈ' },
        { destination: 'دمام', distance: '400 کلومیٹر', time: '4 گھنٹے', route: 'ہائی وے 40' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="riyadh-schema-ur"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Riyadh Premium Taxi Service Urdu",
                        "areaServed": { "@type": "City", "name": "Riyadh" },
                        "description": "Exclusive 24/7 taxi and corporate chauffeur service in Riyadh, Saudi Arabia."
                    })
                }}
            />

            <Hero
                images={riyadhImages}
                h1Text="ریاض ٹیکسی سروس: ایئرپورٹ اور بزنس ٹرانسفر"
                bookingFormTitle="ریاض میں ٹیکسی کے لیے کوٹیشن حاصل کریں"
                title={
                    <span className="bg-blue-900/40 backdrop-blur-md border border-blue-900/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        ریاض پریمیم ٹرانسپورٹ
                    </span>
                }
                subtitle="تیز رفتار اور پرسکون کارپوریٹ سفر"
                location="24/7 کال اور آن لائن بکنگ"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6 text-right">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="ریاض چوفر KSA™"
                        description="سعودی عرب کے دارالحکومت میں پریمیم ٹرانسپورٹ کا نیا نام۔ ہم صرف ٹیکسی نہیں، بلکہ آپ کی پروفیشنل لائف کا ایک حصہ ہیں۔ ہماری گاڑیاں لیپ ٹاپ استعمال کرنے اور میٹنگ کی تیاری کے لیے بہترین ماحول فراہم کرتی ہیں۔"
                        foundingDate="2012"
                        labels={{ verified: "تصدیق شدہ", license: "رجسٹرڈ", since: "خدمت از" }}
                        metrics={[
                            { label: 'کارپوریٹ کلائنٹس', value: '1,000+', icon: Building2 },
                            { label: 'ایئرپورٹ ٹرانسفرز', value: '50k+', icon: Plane },
                            { label: 'کسٹمر ریٹنگ', value: '4.9/5', icon: Star }
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
                    topic="ریاض سیزن اور ٹریفک الرٹ"
                    status="Traffic Alert"
                    lastUpdated="دسمبر 2024"
                    content="ریاض سیزن (Riyadh Season) کے دوران بلیوارڈ سٹی اور مڈل بیسٹ کے علاقوں میں ٹریفک زیادہ ہو سکتا ہے۔ ہم مشورہ دیتے ہیں کہ ایئرپورٹ جانے کے لیے 1 گھنٹہ اضافی لے کر چلیں۔ ہماری گاڑیاں ٹریفک اپ ڈیٹس کے ساتھ اپ ٹو ڈیٹ رہتی ہیں۔"
                    tags={["ریاض_سیزن", "ٹریفک_اپ ڈیٹ", "ایئرپورٹ_ٹیکسی", "بزنس_ٹریول"]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    isRtl={true}
                    mainQuestion="ریاض میں ٹیکسی بک کرتے وقت کن باتوں کا خیال رکھیں؟"
                    intro="ریاض ایک وسیع شہر ہے، یہاں کا سفر صحیح انتخاب کے بنا مشکل ہو سکتا ہے۔"
                    labels={{ condition: "سفری ضرورت", source: "مشورہ" }}
                    subQuestions={[
                        {
                            id: 'r1',
                            condition: 'بزنس اور کارپوریٹ',
                            question: 'کیا ہم گھنٹوں کے حساب سے گاڑی بک کر سکتے ہیں؟',
                            answer: 'جی ہاں، ریاض میں ہماری فل ڈے یا آورلی (Hourly) چوفر سروس بہت مقبول ہے، جس میں ڈرائیور آپ کے ساتھ رہتا ہے تاکہ آپ کی تمام میٹنگز وقت پر ہوں۔',
                            citation: 'کارپوریٹ پالیسی'
                        },
                        {
                            id: 'r2',
                            condition: 'فیملی ٹرپ',
                            question: 'بڑی فیملی کے لیے کون سی گاڑی بہتر ہے؟',
                            answer: 'فیملی کے لیے ہم GMC یوکون یا ہیونڈائی ایچ-1 (H-1) تجویز کرتے ہیں تاکہ سامان اور فیملی کے لیے کافی جگہ ہو۔',
                            citation: 'فلیٹ گائیڈ'
                        },
                        {
                            id: 'r3',
                            condition: 'ایئرپورٹ ٹرانسفر',
                            question: 'ٹیکسی ایئرپورٹ پر کہاں ملے گی؟',
                            answer: 'کنگ خالد ایئرپورٹ پر ہمارا ڈرائیور "پک اپ زون" (Pick-up Zone) میں آپ کے نام کے بورڈ کے ساتھ موجود ہوگا، تاکہ آپ کو تلاش کرنے میں دقت نہ ہو۔',
                            citation: 'کسٹمر سپورٹ'
                        }
                    ]}
                />

                <SemanticField
                    isRtl={true}
                    title="ریاض: مستقبل کی طرف تیزی سے بڑھتا دارالحکومت"
                    explanation="ریاض سعودی عرب کا سیاسی اور مالیاتی مرکز ہے، جہاں جدیدیت اور تاریخ کا حسین سنگم ملتا ہے۔"
                    labels={{ relatedTopic: "متعلقہ موضوع", readMore: "مزید پڑھیں" }}
                    concepts={[
                        {
                            label: 'کنگ فہد روڈ (شریانِ ریاض)',
                            description: 'ریاض کی سب سے اہم شاہراہ جہاں بڑے بڑے ٹاورز اور کارپوریٹ دفاتر واقع ہیں۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/Riyadh'
                        },
                        {
                            label: 'الدرعیہ (تاریخی مرکز)',
                            description: 'سعودی ریاست کا پہلا مرکز اور یونیسکو کا عالمی ورثہ مقام، جو اب ایک بڑا سیاحتی مقام بن چکا ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/الدرعیہ'
                        },
                        {
                            label: 'کنگ خالد ایئرپورٹ (RUH)',
                            description: 'ریاض کا مرکزی ہوائی اڈہ جو دنیا بھر سے آنے والے مسافروں کا استقبال کرتا ہے۔',
                            wikiLink: 'https://ur.wikipedia.org/wiki/کنگ_خالد_بین_الاقوامی_ہوائی_اڈہ'
                        },
                        {
                            label: 'کنگ عبداللہ فنانشل ڈسٹرکٹ (KAFD)',
                            description: 'ریاض کا نیا مالیاتی مرکز جو مستقبل کا دبئی کہلانے کی صلاحیت رکھتا ہے۔',
                            wikiLink: 'https://en.wikipedia.org/wiki/King_Abdullah_Financial_District'
                        }
                    ]}
                />

                <TopicCluster
                    isRtl={true}
                    mainTopic="ریاض نیٹ ورک"
                    clusters={[
                        {
                            category: "بزنس خدمات",
                            relevance: "Primary",
                            items: [
                                { label: "کارپوریٹ چوفر", url: "/services/chauffeur" },
                                { label: "KAFD ٹرانسفرز", url: "/ur/locations/riyadh" },
                                { label: "ایئرپورٹ وی آئی پی پک اپ", url: "/services/vip-airport" }
                            ]
                        },
                        {
                            category: "تفریح و سیاحت",
                            relevance: "Secondary",
                            items: [
                                { label: "ریاض بلیوارڈ سٹی", url: "/ur/locations/riyadh" },
                                { label: "درعیہ ٹور", url: "/ur/locations/riyadh" },
                                { label: "ریاض سیزن ٹرانسپورٹ", url: "/services/events" }
                            ]
                        }
                    ]}
                />
            </div>

            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        isRtl={true}
                        reviewerName='منصور علی'
                        reviewerTitle='ٹرانسپورٹ و لاجسٹک مینیجر'
                        reviewDate="22 فروری 2026"
                        expertise={["ریاض ہائی ویز", "کارپوریٹ سروسز", "ٹریفک مینجمنٹ"]}
                        labels={{ reviewTitle: "ماہر کا تجزیہ", verifiedReview: "تصدیق شدہ معلومات" }}
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">پیشہ ورانہ مہارت</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-blue-500/30">ریاض کے لیے مخصوص ٹرانسپورٹ</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                            ریاض کی رفتار تیز ہے۔ ہماری سروس آپ کو اس رفتار کے ساتھ چلنے میں مدد فراہم کرتی ہے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 text-center group">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                    <service.icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" />
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
                        city="ریاض"
                        isRtl={true}
                        labels={{
                            title: "ریاض ٹریول گائیڈ",
                            subtitle: "موسم اور سفری مشورے",
                            summerTitle: "گرمی (مئی - ستمبر)",
                            summerText: "ریاض کی گرمی خشک (Dry) ہوتی ہے، لیکن پارہ 45 سے اوپر جا سکتا ہے۔ دوپہر میں باہر نکلنے سے گریز کریں۔ ہماری گاڑیاں ہائی پاور اے سی سے لیس ہیں۔",
                            summerTag: "شدید گرمی: صرف اے سی ٹیکسی",
                            winterTitle: "سردی (نومبر - مارچ)",
                            winterText: "ریاض کا بہترین موسم۔ ریاض سیزن کے تمام ایونٹس اسی دوران ہوتے ہیں۔ باہر گھومنے کے لیے مثالی وقت۔",
                            winterTag: "ٹورازم اور ایونٹس کا سیزن"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="کنگ فہد روڈ (اولایا)"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "ریاض شہر کے فاصلے",
                                subtitle: "اہم مقامات تک رسائی",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*ٹریفک کے اوقات میں وقت دگنا ہو سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-16">
                        <TravelConsensus
                        contextName="Riyadh"
                            isRtl={true}
                            labels={{
                                title: "ریاض میں سفر: حقائق",
                                subtitle: "سیاحوں اور بزنس مسافروں کے لیے",
                                beliefLabel: "عام سوچ",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "اثرات"
                            }}
                            points={[
                                {
                                    topic: "ٹیکسی ایپس بمقابلہ پرائیویٹ ٹیکسی",
                                    commonBelief: "ایپ والی ٹیکسی ہمیشہ سستی ہوتی ہے۔",
                                    reality: "پیک ٹائم (Peak Time) میں ایپس پر کرایے 3 گنا بڑھ جاتے ہیں اور گاڑیاں نہیں ملتیں۔ ہماری فکسڈ ریٹ سروس آپ کو ان جھنجھٹوں سے بچاتی ہے۔",
                                    truthRange: "پہلے سے بکنگ بہتر ہے",
                                    factors: ["کرایوں کا بڑھنا", "کینسل ہونے کا خطرہ", "انتظار"]
                                },
                                {
                                    topic: "ایئرپورٹ ٹائم کا اندازہ",
                                    commonBelief: "30 منٹ میں ایئرپورٹ پہنچ جائیں گے۔",
                                    reality: "اگرچہ فاصلہ کم ہے، لیکن شام کے وقت ٹریفک ریاض کی زندگی کا حصہ ہے۔ ہمیشہ فلائٹ سے 3.5 گھنٹے پہلے نکلیں۔",
                                    truthRange: "بھرپور ٹریفک الرٹ",
                                    factors: ["رنگ روڈ ٹریفک", "ایئرپورٹ سیکیورٹی", "وقت"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16 text-right">
                        <RoutePerspective
                            isRtl={true}
                            route="ریاض کارپوریٹ موبلٹی"
                            labels={{ title: "اپنی ترجیح بتائیں", subtitle: "آپ کی ضرورت کے مطابق انتخاب" }}
                            perspectives={[
                                {
                                    id: "executive-move",
                                    targetAudience: "بزنس ایگزیکٹو",
                                    icon: Briefcase,
                                    intent: "وقار اور سکون",
                                    description: "خاموش کیبن، تجربہ کار ڈرائیور اور اعلیٰ ترجیحی سروس۔ میٹنگز کے درمیان بہترین ساتھی۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "گھنٹوں کے حساب سے" },
                                        { label: "انداز", value: "وی آئی پی" },
                                        { label: "گاڑی", value: "پریمیم سیڈان" }
                                    ],
                                    visualContext: "بزنس ڈسٹرکٹ کا نقشہ۔"
                                },
                                {
                                    id: "family-fun",
                                    targetAudience: "سیاح / فیملی",
                                    icon: Users,
                                    intent: "تفریح اور آسانی",
                                    description: "ریاض بلیوارڈ اور درعیہ کی سیر۔ بچوں کے ساتھ آرام دہ سفر اور کافی جگہ۔",
                                    structuredFeatures: [
                                        { label: "وقت", value: "ڈے ٹرپ" },
                                        { label: "انداز", value: "خوشگوار" },
                                        { label: "گاڑی", value: "فیملی SUV" }
                                    ],
                                    visualContext: "سیاحتی مقامات ہائی لائٹڈ۔"
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "ریاض ٹرانسپورٹ FAQ",
                                subtitle: "ریاض کے مسافروں کے لیے اہم جوابات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "مزید",
                                readLess: "کم"
                            }}
                            faqs={[
                                {
                                    question: "کنگ خالد ایئرپورٹ سے اولایا کا سفر کتنا مہنگا ہے؟",
                                    shortAnswer: "120 - 180 ریال (فکسڈ)",
                                    detailedAnswer: "ہماری سروس کے تحت کرایہ پہلے سے طے شدہ ہوتا ہے، جس میں ٹریفک جام یا دیگر وجوہات پر اضافی چارجز نہیں لیے جاتے۔",
                                    perspectives: [
                                        { role: "بزنس", icon: "CheckCircle2", insight: "کارپوریٹ رسید فورا فراہم کی جاتی ہے۔" }
                                    ]
                                },
                                {
                                    question: "کیا ہم ریاض سے دمام جا سکتے ہیں؟",
                                    shortAnswer: "جی ہاں، انٹرسٹی سروس دستیاب ہے۔",
                                    detailedAnswer: "ریاض سے دمام کا سفر 4 گھنٹے کا ہے۔ ہم پریمیم گاڑیوں میں یہ سروس فراہم کرتے ہیں تاکہ آپ تھکن محسوس نہ کریں۔",
                                    perspectives: [
                                        { role: "سفر", icon: "Car", insight: "ہائی وے پر سفر کے لیے SUV بہترین انتخاب ہے۔" }
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
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">مسافروں کی رائے</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-urdu text-right">
                            ریاض میں ہمارے مسافر
                        </h2>
                    </div>

                    <div className="space-y-16 mb-16">
                        <ReviewsDisplay location="Riyadh" />
                        <QuestionsDisplay location="Riyadh" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-right">
                        <ReviewForm locationName="Riyadh" />
                        <QuestionForm locationName="Riyadh" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations
                    currentCity="ریاض"
                    isRtl={true}
                    labels={{ title: "ریاض سے جڑے شہر", subtitle: "مزید اسفار", viewRoutes: "دیکھیں" }}
                    customLinks={[
                        { name: 'دمام', url: '/ur/locations/dammam', description: 'ایسٹرن پروونس' },
                        { name: 'ایئرپورٹ ٹرانسفر', url: '/services/airport-transfers', description: 'بکنگ کریں' },
                        { name: 'جدہ', url: '/ur/locations/jeddah', description: 'کمرشل مرکز' }
                    ]}
                />
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 underline decoration-blue-500/50">ریاض میں اپنی پریمیم سواری کوٹیشن حاصل کریں</h2>
                    <p className="text-xl text-blue-200/60 mb-8 leading-relaxed font-urdu">
                        ایئرپورٹ، میٹنگ یا ایونٹ کے لیے بہترین ٹیکسی سروس۔
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-blue-950 hover:bg-blue-100 font-bold text-lg px-12 py-8 rounded-full">
                            بکنگ شروع کریں
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
