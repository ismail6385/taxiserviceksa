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
import DiscoveryMap from '@/components/DiscoveryMap';

export const metadata: Metadata = {
    title: 'خدمة تاكسي في مكة | تاكسي العمرة وتوصيل المطار (٢٤/٧)',
    description: 'احجز خدمة تاكسي موثوقة في مكة للمعتمرين والسياح. تاكسي مطار مكة ٢٤/٧، توصيل من الفندق وجولات الزيارة. سائقين محترفين وآمنين.',
    keywords: ['تاكسي مكة', 'توصيل المطار مكة', 'تاكسي العمرة', 'نقل المعتمرين', 'تاكسي الحرم'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah/',
        }
    },
    openGraph: {
        title: 'خدمة تاكسي في مكة | تاكسي العمرة الموثوق',
        description: 'هل تحتاج تاكسي في مكة؟ نوفر خدمة ٢٤/٧ للمعتمرين وتوصيل مطار جدة والمدينة. احجز الآن.',
        url: 'https://taxiserviceksa.com/ar/locations/makkah/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'تاكسي مكة بجوار الحرم' }],
    },
};

export default function MakkahPageArabic() {
    const services = [
        { name: 'تاكسي مطار مكة', description: 'توصيل مباشر من مطار جدة إلى فنادق مكة', icon: Plane },
        { name: 'خدمة تاكسي العمرة', description: 'نقل موثوق للعمرة والزيارات', icon: MapPin },
        { name: 'تاكسي من مكة للمدينة', description: 'سفر مريح بين المدن للمعتمرين', icon: Car },
        { name: 'توصيل للحرم', description: 'توصيل سريع من وإلى الحرم المكي', icon: Clock },
    ];

    const features = [
        'سائقين خبرة بطرق مكة',
        'توصيل للفنادق والحرم',
        'سيارات واسعة للعائلات',
        'خدمة ٢٤/٧ للصلوات',
        'أسعار ثابتة',
        'طاقم يتحدث العربية',
    ];

    const makkahImages = [
        '/makkah-kaaba-night.webp',
        '/makkah-grand-mosque.webp',
        '/makkah-clock-tower.webp',
    ];

    const faqs = [
        {
            question: "كم يبعد مطار جدة عن مكة بالتاكسي؟",
            answer: "المسافة من مطار الملك عبدالعزيز بجدة إلى مكة حوالي ٨٠-٩٠ كم. تستغرق الرحلة بالتاكسي ٦٠-٩٠ دقيقة. نوفر أسعار ثابتة."
        },
        {
            question: "هل تتوفر خدمة التاكسي ٢٤/٧ في مكة؟",
            answer: "نعم، خدماتنا متاحة طوال اليوم لتناسب أوقات الصلوات والوصول المتأخر."
        },
        {
            question: "هل توفرون سيارات عائلية (جمس)؟",
            answer: "بالتأكيد، لدينا سيارات جمس يوكن (٧ ركاب) وفانات للعائلات الكبيرة مع مساحة للعفش."
        },
        {
            question: "كم سعر التاكسي من جدة لمكة؟",
            answer: "تبدأ الأسعار من ١٥٠ ريال للسيارات الصغيرة وتختلف حسب نوع السيارة والموسم."
        }
    ];

    const distanceData = [
        { destination: 'مطار جدة (KAIA)', distance: '٩٥ كم', time: '٦٠-٨٠ دقيقة', route: 'طريق الحرمين' },
        { destination: 'المدينة المنورة', distance: '٤٥٠ كم', time: '٤-٥ ساعات', route: 'طريق الهجرة' },
        { destination: 'الطائف', distance: '٨٥ كم', time: '٦٠-٩٠ دقيقة', route: 'طريق الهدا' },
        { destination: 'العزيزية', distance: '٥-١٠ كم', time: '١٥-٢٠ دقيقة', route: 'الأنفاق' },
        { destination: 'فنادق جبل عمر', distance: '١-٣ كم', time: '٥-١٠ دقائق', route: 'طريق الملك عبدالعزيز' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={makkahImages}
                h1Text="خدمة تاكسي مكة للمعتمرين والزوار"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        تاكسي مكة
                    </span>
                }
                subtitle="نقل آمن ومريح للمعتمرين"
                location="خدمة من الفندق للحرم ٢٤/٧"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="تاكسي سيرفس KSA™ - مكة"
                        description="شريك النقل الرسمي لأكثر من ١٠,٠٠٠ معتمر. نحن لا نقود السيارة فحسب؛ نحن نسهل رحلتك الروحانية مع سائقين محليين مرخصين وموثوقين وعلى دراية تامة بطرق مكة."
                        foundingDate="٢٠١٢"
                        labels={{ verified: "مؤسسة موثقة", license: "رخصة نقل", since: "في الخدمة منذ" }}
                        metrics={[
                            { label: 'معتمر تم خدمتهم', value: '١٥,٠٠٠+', icon: Users },
                            { label: 'تقييم جوجل', value: '٤.٩', icon: Star },
                            { label: 'دقة المواعيد', value: '٩٩.٨٪', icon: Clock }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            احجز الآن
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="قطار الحرمين أم التاكسي الخاص: الواقع الحالي"
                    status="High Demand"
                    lastUpdated="ديسمبر ٢٠٢٤"
                    content="على الرغم من سرعة قطار الحرمين، تشير تجارب المعتمرين الأخيرة إلى أن العائلات (٣ أشخاص فأكثر) مع حقائب تجد خدمة التاكسي 'من الباب للباب' أوفر للجهد والوقت بنسبة ٤٠٪ مقارنة برحلة القطار متعددة المراحل. احجز سيارة جمس خاصة لراحة بالك."
                    tags={["قطار_الحرمين", "تاكسي_مطار_جدة", "نقل_عائلي", "عمرة_٢٠٢٥"]}
                    linkText="شاهد أسعار التاكسي العائلي"
                />
            </div>

            <DiscoveryMap city="makkah" />

            <QuestionGrouper
                isRtl={true}
                mainQuestion="هل الأفضل السفر بقطار الحرمين أم التاكسي الخاص من جدة لمكة؟"
                intro="يعتقد الكثيرون أن القطار هو الأفضل دائماً لسرعته، لكن الواقع يتغير جذرياً عندما تدخل شروط مثل العفش، عدد أفراد الأسرة، وموقع الفندق."
                labels={{ condition: "الحالة", source: "المصدر" }}
                subQuestions={[
                    {
                        id: 'q1',
                        condition: 'مسافر مفرد (حقيبة خفيفة)',
                        question: 'هل القطار أسرع لشخص واحد؟',
                        answer: 'نعم. لمسافر واحد مع حقيبة ظهر، القطار (٣٥ ريال) لا يُنافس. يمكنك بسهولة التنقل من المحطة إلى مواقف الباصات/التاكسي.',
                        citation: 'جدول قطار الحرمين ٢٠٢٤'
                    },
                    {
                        id: 'q2',
                        condition: 'عائلة ٤+ أشخاص مع حقائب',
                        question: 'هل القطار مريح للعائلات؟',
                        answer: 'لا. نقل الحقائب (مطار -> قطار -> محطة مكة -> فندق) يتطلب ٣ تنقلات متعبة. التاكسي (٢٤٠ ريال) أرخص من ٤ تذاكر + تاكسي محلي، ويوفر خدمة من الباب للباب.',
                        citation: 'تحليل تكاليف النقل العائلي'
                    },
                    {
                        id: 'q3',
                        condition: 'موقع الفندق من الحرم',
                        question: 'هل يفرق موقع الفندق؟',
                        answer: 'بشكل حاسم. إذا كان فندقك في العزيزية أو بعيد عن الحرم، التاكسي من محطة القطار قد يكلف ٥٠-٨٠ ريال إضافية. التاكسي المباشر يوفر عليك هذا العناء.',
                        citation: 'مؤشر أسعار النقل المحلي'
                    }
                ]}
            />

            <SemanticField
                isRtl={true}
                title="مفاهيم رحلة الحج والعمرة"
                explanation="رحلتك بالتاكسي ليست مجرد نقل، بل هي الجسر بين مناسكك الروحانية. نحن نضمن الربط السلس بين هذه المفاهيم المقدسة:"
                labels={{ relatedTopic: "مواضيع ذات صلة", readMore: "اقرأ المزيد" }}
                concepts={[
                    {
                        label: 'الميقات (حدود الإحرام)',
                        description: 'النقطة التي يجب على المعتمر الإحرام منها. سائقونا يعرفون أماكن التوقف بالضبط لميقات السيل الكبير (قرن المنازل) وميقات ذي الحليفة.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/ميقات'
                    },
                    {
                        label: 'طواف القدوم',
                        description: 'أول طواف يؤديه القادم إلى مكة. نوصلك لأقرب نقطة لبوابة الملك عبدالعزيز لتقليل مسافة المشي عليك.',
                        internalLink: '/ar/guides/umrah-tawaf-guide'
                    },
                    {
                        label: 'حدود الحرم (الحِل)',
                        description: 'الحد الجغرافي للمنطقة المقدسة. معرفته ضرورية لاختيار السكن الأرخص (العزيزية/الششة) أو لحساب أوقات الصلاة بدقة.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/حدود_الحرم_المكي'
                    },
                    {
                        label: 'تطبيق نسك وتصريح العمرة',
                        description: 'المنصة الحكومية الرسمية للتصاريح. مركباتنا مصرحة للوصول لجميع نقاط الإنزال المحددة لحاملي تصاريح نسك.',
                        wikiLink: 'https://www.nusuk.sa/ar'
                    }
                ]}
            />

            <TopicCluster
                isRtl={true}
                mainTopic="خريطة مواصلات مكة المكرمة"
                clusters={[
                    {
                        category: "الاحتياجات الأساسية",
                        relevance: "Primary",
                        items: [
                            { label: "تاكسي مطار جدة لمكة", url: "/ar/jeddah-airport-to-makkah-taxi" },
                            { label: "توصيل من مكة للمدينة", url: "/ar/makkah-to-madinah-taxi" },
                            { label: "نقل محطة قطار الحرمين", url: "/ar/makkah-train-station-taxi" }
                        ]
                    },
                    {
                        category: "أدلة التخطيط للمعتمر",
                        relevance: "Secondary",
                        items: [
                            { label: "دليل المواقيت والإحرام", url: "/ar/guides/meeqat-locations", description: "أين تتوقف للإحرام عند القدوم من جدة أو الطائف." },
                            { label: "الوصول لبوابات الحرم", url: "/ar/guides/haram-gates-access", description: "أفضل نقاط الإنزال لبوابة الملك عبدالعزيز وبوابة الملك فهد." },
                            { label: "تاكسي ذوي الاحتياجات الخاصة", url: "/ar/services/wheelchair-taxi", description: "سيارات مجهزة لكبار السن وأصحاب الهمم." }
                        ]
                    },
                    {
                        category: "روابط المنطقة",
                        relevance: "Tertiary",
                        items: [
                            { label: "جولة سياحية في الطائف", url: "/ar/locations/taif" },
                            { label: "جولة في جدة", url: "/ar/locations/jeddah" },
                            { label: "مزارات مكة", url: "/ar/locations/makkah-ziyarat" },
                            { label: "أسواق مكة", url: "/ar/guides/makkah-shopping" }
                        ]
                    }
                ]}
            />

            {/* Breadcrumb Navigation - Arabic */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 ml-2">
                            الرئيسية
                        </Link>
                        <span className="text-gray-400 ml-2">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 ml-2">
                            المناطق
                        </Link>
                        <span className="text-gray-400 ml-2">/</span>
                        <span className="text-gray-900 font-semibold">مكة المكرمة</span>
                    </nav>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                        خدمات التاكسي في مكة
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
                        city="مكة المكرمة"
                        isRtl={true}
                        labels={{
                            title: "نصائح السفر في مكة",
                            subtitle: "معلومات الطقس لرحلة عمرة مريحة",
                            summerTitle: "الصيف (يونيو - أغسطس)",
                            summerText: "درجات الحرارة قد تتجاوز ٤٠ درجة. من الضروري حجز **تاكسي مكيف**. أسطولنا يضمن تكييف عالي الكفاءة لراحة عائلتك.",
                            summerTag: "طلب عالي: تاكسي مكيف",
                            winterTitle: "الشتاء (ديسمبر - فبراير)",
                            winterText: "الطقس لطيف (١٨-٣٠ درجة). هذا هو \"موسم العمرة\". الازدحام شديد، لذا **الحجز المسبق** يضمن لك عدم الانتظار طويلاً في الشارع.",
                            winterTag: "تنبيه زحام: موسم الذروة",

                        }}
                    />

                    <DistanceTable
                        origin="الحرم المكي"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "متوسط أوقات السفر من الحرم",
                            subtitle: "تقديرات المسافة والوقت لرحلات التاكسي",
                            destinationHeader: "الوجهة",
                            distanceHeader: "المسافة (تقريباً)",
                            timeHeader: "الوقت المتوقع",
                            routeHeader: "الطريق",
                            disclaimer: "*الأوقات قد تختلف حسب الزحام خاصة في رمضان والحج."
                        }}
                    />

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "حقائق السفر: ماذا تتوقع؟",
                                subtitle: "توصيات الخبراء حول أوقات السفر والتكاليف بناءً على بيانات المعتمرين",
                                beliefLabel: "الاعتقاد الشائع",
                                realityLabel: "الواقع للمعتمر",
                                rangeLabel: "نطاق الحقيقة الآمن",
                                factorsLabel: "العوامل المؤثرة"
                            }}
                            points={[
                                {
                                    topic: "تكلفة التاكسي من مطار جدة",
                                    commonBelief: "السعر المعتاد ١٥٠-٢٠٠ ريال.",
                                    reality: "بينما تظهر التطبيقات أسعاراً أساسية، خدمات VIP/الجمس تصل غالباً إلى ٢٥٠-٣٠٠ ريال. مواسم الحج ورمضان تضاعف الأسعار. أسعارنا الثابتة تجنبك هذه الارتفاعات.",
                                    truthRange: "١٥٠ - ٣٥٠ ريال",
                                    factors: ["نوع السيارة (جمس)", "الموسم (رمضان)", "اوقات الذروة"]
                                },
                                {
                                    topic: "وقت السفر لمطار جدة",
                                    commonBelief: "خرائط جوجل تقول ٦٠ دقيقة.",
                                    reality: "نقاط التفتيش حدود الحرم وزحام مبنى المطار يضيف غالباً ٣٠+ دقيقة. المغادرة بعد صلاة الجمعة قد تضيف ساعة بسبب إغلاق الطرق.",
                                    truthRange: "٧٥ - ١١٠ دقيقة",
                                    factors: ["تفتيش الحرم", "صلاة الجمعة", "زحام المطار"]
                                },
                                {
                                    topic: "تاكسي vs قطار vs باص",
                                    commonBelief: "القطار دائماً أسرع.",
                                    reality: "قطار الحرمين سريع (٥٥ دقيقة) لكن يتطلب الذهاب لمحطة الرصيفة (٢٠-٤٠ دقيقة). التاكسي المباشر غالباً أسرع من الباب للباب للفنادق القريبة من الحرم.",
                                    truthRange: "متقارب (من الباب للباب)",
                                    factors: ["وقت المحطة", "نقل العفش", "أوقات الانتظار"]
                                }
                            ]}
                        />
                        <div className="mt-12"></div>
                        <RoutePerspective
                            isRtl={true}
                            labels={{
                                title: "منظور الرحلة: اختر أسلوب سفرك",
                                subtitle: "تخطيط مسار مخصص بناءً على هدف رحلتك"
                            }}
                            route="مكة إلى المدينة (طريق الهجرة)"
                            perspectives={[
                                {
                                    id: "pilgrim",
                                    targetAudience: "المعتمر",
                                    icon: User,
                                    intent: "رحلة روحانية وزيارة",
                                    description: "للمعتمرين، هذه ليست مجرد تنقل؛ إنها انتقال بين الحرمين. تتضمن الرحلة غالباً التوقف في الميقات إذا كنت متجهاً لمكة، أو شوقاً روحياً للمدينة. الراحة للصلاة والذكر هي الأهم.",
                                    structuredFeatures: [
                                        { label: "توقف", value: "متاح (الميقات)" },
                                        { label: "العفش", value: "سعة كبيرة (زمزم)" },
                                        { label: "الملابس", value: "مناسب للإحرام" },
                                        { label: "الوتيرة", value: "هادئة / للذكر" }
                                    ],
                                    visualContext: "خريطة المسار توضح مواقع الميقات والاستراحات المناسبة للصلاة."
                                },
                                {
                                    id: "express",
                                    targetAudience: "المسافر السريع",
                                    icon: Briefcase,
                                    intent: "السرعة والكفاءة",
                                    description: "التركيز على الوصول من الفندق للفندق في أقل وقت. استغلال طريق الحرمين بكفاءة، وتجنب نقاط الزحام. مثالي لرجال الأعمال أو من لديهم رحلات طيران.",
                                    structuredFeatures: [
                                        { label: "السرعة", value: "١٢٠-١٤٠ كم/س" },
                                        { label: "المسار", value: "طريق سريع مباشر" },
                                        { label: "توقف", value: "حد أدنى / وقود" },
                                        { label: "الوتيرة", value: "سريع / ملزم بوقت" }
                                    ],
                                    visualContext: "خط زمن خطي يوضح قطاعات الطريق السريع والأوقات التقديرية."
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "إجابات الخبراء",
                                subtitle: "حقائق مباشرة مع رؤى مخصصة لكل مسافر",
                                quickAnswer: "الجواب المختصر",
                                perspectives: "منظور سياقي",
                                readMore: "اقرأ التفاصيل",
                                readLess: "أخف التفاصيل"
                            }}
                            faqs={[
                                {
                                    question: "كم سعر التاكسي من مطار جدة إلى مكة؟",
                                    shortAnswer: "٢٠٠ ريال (سعر ثابت)",
                                    detailedAnswer: "السعر المتعارف عليه لسيارة سيدان خاصة هو ٢٠٠ ريال. تكلف تطبيقات مثل أوبر/كريم أكثر وقت الذروة (٢٥٠-٣٠٠ ريال). تاكسي المطار الرسمي يعمل بالعداد.",
                                    perspectives: [
                                        {
                                            role: "للعائلات (٥+ أشخاص)",
                                            icon: "Users",
                                            insight: "حجز سيارتين سيدان يكلف ٤٠٠ ريال. حجز جمس يوكون (٧ ركاب) يكلف حوالي ٣٠٠ ريال فقط، وهو خيار أوفر وأكثر راحة."
                                        },
                                        {
                                            role: "للموفرين",
                                            icon: "Briefcase",
                                            insight: "قطار الحرمين أرخص (٣٥ ريال) لكن يتطلب تاكسي إضافي من محطة الرصيفة للفندق (٤٠-٥٠ ريال). التاكسي المباشر يوفر ١.٥ ساعة."
                                        }
                                    ]
                                },
                                {
                                    question: "كم تستغرق الرحلة من جدة لمكة؟",
                                    shortAnswer: "٧٥ - ٩٠ دقيقة",
                                    detailedAnswer: "المسافة حوالي ١٠٠ كم عبر طريق الحرمين. في الأحوال العادية تستغرق ساعة وربع.",
                                    perspectives: [
                                        {
                                            role: "للمعتمرين",
                                            icon: "Heart",
                                            insight: "نقطة تفتيش الشميسي قد تضيف ١٠-٢٠ دقيقة للتأكد من التصاريح. يوم الجمعة قبل الصلاة يكون الازدحام في ذروته."
                                        },
                                        {
                                            role: "نصيحة خبير",
                                            icon: "Shield",
                                            insight: "تجنب المغادرة من جدة بين ٥-٧ مساءً (وقت خروج الموظفين). أفضل وقت للسفر هو الصباح الباكر أو بعد العشاء."
                                        }
                                    ]
                                },
                                {
                                    question: "هل السيارات مناسبة للمحرمين؟",
                                    shortAnswer: "نعم، وبكل تأكيد.",
                                    detailedAnswer: "سياراتنا مجهزة لنقل المعتمرين. التكييف يعمل بكفاءة عالية والمقاعد واسعة.",
                                    perspectives: [
                                        {
                                            role: "الراحة",
                                            icon: "Compass",
                                            insight: "لمن يرتدي الإحرام، سيارات الجمس (SUV) توفر مساحة أرجل أفضل وحرية حركة مقارنة بالسيدان الضيقة."
                                        },
                                        {
                                            role: "الروحانية",
                                            icon: "User",
                                            insight: "السائقون يحترمون قدسية الرحلة. يمكنك طلب تشغيل القرآن الكريم أو البقاء في صمت تام للذكر."
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
                    currentCity="مكة"
                    isRtl={true}
                    labels={{
                        title: "واجهات أخرى قريبة",
                        subtitle: "توصيل مريح لكل مدن المملكة",
                        viewRoutes: "عرض المسارات"
                    }}
                    customLinks={[
                        { name: 'تاكسي المدينة المنورة', url: '/locations/madinah', description: 'توصيل للمسجد النبوي الشريف' },
                        { name: 'تاكسي مطار جدة', url: '/locations/jeddah', description: 'استقبال من مطار الملك عبدالعزيز' },
                        { name: 'رحلات الطائف', url: '/locations/taif', description: 'جولات سياحية في مدينة الورد' },
                    ]}
                />
            </div>

        </div >
    );
}
