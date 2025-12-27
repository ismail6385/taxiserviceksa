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
    title: 'خدمة تاكسي المدينة المنورة | زيارات وتوصيل المسجد النبوي',
    description: 'تاكسي موثوق في المدينة المنورة. توصيل من مطار الأمير محمد، زيارات المساجد السبعة وقباء، ونقل للمسجد النبوي. خدمة ٢٤/٧.',
    keywords: ['تاكسي المدينة المنورة', 'زيارة المساجد السبعة', 'توصيل مطار المدينة', 'تاكسي الحرم النبوي', 'زيارات المدينة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/madinah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/madinah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/madinah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/madinah/',
            'x-default': 'https://taxiserviceksa.com/locations/madinah/',
        }
    },
    openGraph: {
        title: 'تاكسي المدينة المنورة | زيارات وتوصيل المطار',
        description: 'احجز تاكسي في المدينة المنورة لزيارة المسجد النبوي والمزارات التاريخية. سيارات حديثة وسائقين محترفين.',
        url: 'https://taxiserviceksa.com/ar/locations/madinah/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-prophets-mosque.webp', alt: 'المسجد النبوي الشريف' }],
    },
};

export default function MadinahPageArabic() {
    const services = [
        { name: 'استقبال مطار المدينة', description: 'من مطار الأمير محمد للفنادق', icon: Plane },
        { name: 'جولات الزيارة', description: 'زيارة قباء، أحد، والقبلتين', icon: Book },
        { name: 'توصيل لمكة', description: 'سفر مريح من المدينة لمكة', icon: Car },
        { name: 'تاكسي محلي', description: 'توصيل داخل المدينة وضواحيها', icon: MapPin },
    ];

    const madinahImages = [
        '/madinah-prophets-mosque.webp',
        '/madinah-night-view.webp',
        '/hero-slide-2.webp',
    ];

    const faqs = [
        {
            question: "كم سعر التاكسي من مطار المدينة للمسجد النبوي؟",
            answer: "السعر يتراوح بين ٨٠-١٢٠ ريال حسب نوع السيارة. المسافة قصيرة (٢٠-٣٠ دقيقة)."
        },
        {
            question: "هل تشمل جولات الزيارة مسجد قباء؟",
            answer: "نعم، جولاتنا تشمل مسجد قباء، جبل أحد، مسجد القبلتين، والمساجد السبعة."
        },
        {
            question: "هل لديكم سيارات لرحلة المدينة إلى مكة؟",
            answer: "نعم، نوفر سيارات خاصة (كامري، هايس، جمس) للسفر لمكة. الرحلة تستغرق ٤-٥ ساعات."
        }
    ];

    const distanceData = [
        { destination: 'مكة المكرمة (الحرم)', distance: '٤٥٠ كم', time: '٤-٥ ساعات', route: 'طريق الهجرة' },
        { destination: 'مطار الأمير محمد', distance: '٢٠ كم', time: '٢٥-٣٠ دقيقة', route: 'طريق المطار' },
        { destination: 'مسجد قباء', distance: '١٠ كم', time: '١٥-٢٠ دقيقة', route: 'طريق قباء' },
        { destination: 'جبل أحد', distance: '٨ كم', time: '١٥ دقيقة', route: 'طريق الملك عبدالله' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={madinahImages}
                h1Text="تاكسي المدينة المنورة وزيارات الأماكن المقدسة"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        تاكسي المدينة
                    </span>
                }
                subtitle="خدمة زوار المسجد النبوي"
                location="زيارات وتوصيل المطار"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        isRtl={true}
                        brandName="تاكسي سيرفس KSA™ - المدينة"
                        description="خبراء زيارات المدينة المنورة. نعرف التاريخ وليس الطرق فقط. ثق بنا لنقلك إلى الأماكن المقدسة (أحد، قباء، القبلتين) مع سائقين من أهل المدينة يعرفون القصص والآثار."
                        foundingDate="٢٠١٢"
                        labels={{ verified: "مؤسسة موثقة", license: "رخصة إرشاد", since: "منذ" }}
                        metrics={[
                            { label: 'جولة زيارت', value: '٨,٠٠٠+', icon: Compass },
                            { label: 'تقييم الزوار', value: '٥.٠', icon: Star },
                            { label: 'سائقين محليين', value: '١٠٠٪', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            احجز جولات الزيارة
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    isRtl={true}
                    topic="تنبيه توقيت الزيارات: مسجد قباء وأحد"
                    status="Insider Tip"
                    lastUpdated="ديسمبر ٢٠٢٤"
                    content="لتجنب حافلات السياح وحرارة الظهيرة، ينصح سائقونا المحليون ببدء جولة الزيارات مباشرة بعد صلاة الفجر (حوالي ٦:٠٠ صباحاً). ستستمتع بروحانية عالية في مسجد قباء وهدوء في جبل أحد قبل الازدحام."
                    tags={["زيارات_المدينة", "مسجد_قباء", "نصائح_محلية", "أفضل_وقت_للزيارة"]}
                    linkText="احجز جولة زيارة صباحية"
                />
            </div>

            <QuestionGrouper
                isRtl={true}
                mainQuestion="متى هو أفضل وقت لزيارة المزارات في المدينة لتجنب الزحام؟"
                intro="أفضل وقت ليس إجابة واحدة. يعتمد بشكل كبير على هدفك: هل تريد الروحانية والهدوء، أم التصوير التاريخي، أم تجنب الحر؟"
                labels={{ condition: "الهدف/الحالة", source: "المصدر" }}
                subQuestions={[
                    {
                        id: 'q1',
                        condition: 'الهدوء والروحانية',
                        question: 'متى يكون مسجد قباء أقل ازدحاماً؟',
                        answer: 'بعد صلاة الفجر (الشروق) مباشرة. معظم المجموعات السياحية تصل بعد ٨:٠٠ صباحاً. الذهاب مبكراً يتيح لك صلاة ركعتي السنة في سكينة.',
                        citation: 'مواقيت الصلاة وتحليل الحشود'
                    },
                    {
                        id: 'q2',
                        condition: 'التصوير وتوثيق المعالم',
                        question: 'أفضل إضاءة لجبل أحد؟',
                        answer: 'فترة ما بعد العصر. الشمس تضرب جبل الرماة من الغرب، مما يخلق ظلالاً وتجسيم يسهّل تخيل جغرافية المعركة تاريخياً.',
                        citation: 'دليل مصوري المدينة المنورة'
                    },
                    {
                        id: 'q3',
                        condition: 'حرارة الصيف (مايو - سبتمبر)',
                        question: 'كيف أزور في الصيف؟',
                        answer: 'الزيارات الليلية. العديد من المواقع، بما فيها المساجد السبعة وقباء، مضاءة بشكل جميل ليلاً. تجنب تماماً الفترة من ١٠ ص - ٤ م.',
                        citation: 'بيانات المناخ وإرشادات السلامة'
                    }
                ]}
            />

            <SemanticField
                isRtl={true}
                title="الجغرافيا المقدسة للمدينة"
                explanation="لكي تعيش تجربة المدينة بحق، يجب أن تربط جغرافيتها بتاريخها. جولات الزيارة لدينا مصممة لتتبع خطى النبي ﷺ ومواقع السيرة النبوية."
                labels={{ relatedTopic: "مواضيع ذات صلة", readMore: "اقرأ المزيد" }}
                concepts={[
                    {
                        label: 'الروضة الشريفة',
                        description: 'رياض الجنة بين بيت النبي ﷺ ومنبره. نوجهك لأفضل نقاط الوصول (بوابة ٣٧) حسب موعد حجزك المسبق.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/المسجد_النبوي#الروضة_الشريفة'
                    },
                    {
                        label: 'ميقات ذي الحليفة (آبار علي)',
                        description: 'ميقات أهل المدينة ومن يمر بها. يبعد ١٨ كم عن المسجد النبوي، ونتوقف فيه للإحرام عند التوجه لمكة.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/مسجد_ذي_الحليفة'
                    },
                    {
                        label: 'جبل أحد',
                        description: 'موقع معركة أحد التاريخية. ليس مجرد جبل بل "جبل يحبنا ونحبه". يقع على بعد ٥ كم شمال المسجد.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/جبل_أحد'
                    },
                    {
                        label: 'مسجد قباء',
                        description: 'أول مسجد بني في الإسلام. الصلاة فيه تعدل عمرة. يقع في الأطراف الجنوبية للمدينة.',
                        wikiLink: 'https://ar.wikipedia.org/wiki/مسجد_قباء'
                    }
                ]}
            />

            <TopicCluster
                isRtl={true}
                mainTopic="دليل زيارة المدينة المنورة"
                clusters={[
                    {
                        category: "زيارات وجولات",
                        relevance: "Primary",
                        items: [
                            { label: "حجز باقة الزيارات الكاملة", url: "/ar/services/madinah-ziyarat" },
                            { label: "توصيل من المدينة لمكة", url: "/ar/madinah-to-makkah-taxi" },
                            { label: "تاكسي مطار المدينة", url: "/ar/madinah-airport-taxi" }
                        ]
                    },
                    {
                        category: "معالم تاريخية",
                        relevance: "Secondary",
                        items: [
                            { label: "جبل الرماة وأحد", url: "/ar/guides/uhud-history", description: "شرح جغرافي لموقع المعركة وجبل الرماة." },
                            { label: "المساجد السبعة", url: "/ar/guides/seven-mosques", description: "زيارة مواقع غزوة الخندق." },
                            { label: "ممشى قباء", url: "/ar/guides/quba-walking-path", description: "دليل الممشى الرابط بين الحرم ومسجد قباء." }
                        ]
                    },
                    {
                        category: "معلومات للمسافر",
                        relevance: "Tertiary",
                        items: [
                            { label: "أوقات الصلاة والزيارة", url: "/ar/guides/madinah-prayer-times" },
                            { label: "حالة الطقس", url: "/ar/guides/madinah-weather" },
                            { label: "مطاعم قريبة", url: "/ar/guides/madinah-food" },
                            { label: "صرافة وعملات", url: "/ar/guides/currency" }
                        ]
                    }
                ]}
            />

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
                        <span className="text-gray-900 font-semibold">المدينة المنورة</span>
                    </nav>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                        خدماتنا في طيبة الطيبة
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
                        city="المدينة المنورة"
                        isRtl={true}
                        labels={{
                            title: "نصائح السفر في المدينة",
                            subtitle: "دليلك لطقس وزحام مدينة الرسول ﷺ",
                            summerTitle: "الصيف (يونيو - أغسطس)",
                            summerText: "الطقس حار جداً وجاف. يفضل زيارة المزارات (أحد، قباء) في **الصباح الباكر** أو بعد العصر. سياراتنا مكيفة لراحتكم.",
                            summerTag: "نصيحة: الزيارات الصباحية",
                            winterTitle: "الشتاء (ديسمبر - فبراير)",
                            winterText: "الأجواء باردة ليلاً ومعتدلة نهاراً. مثالي للمشي وزيارة البقيع. الازدحام يزداد في عطلات المدارس.",
                            winterTag: "مثالي للمشي"
                        }}
                    />

                    <DistanceTable
                        origin="المسجد النبوي"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "المسافات من الحرم النبوي",
                            subtitle: "أوقات التنقل المتوقعة",
                            destinationHeader: "الوجهة",
                            distanceHeader: "المسافة",
                            timeHeader: "الوقت",
                            routeHeader: "الطريق",
                            disclaimer: "*الأوقات تعتمد على حركة المرور في المنطقة المركزية."
                        }}
                    />

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "حقائق سفر المدينة: الواقع",
                                subtitle: "رؤية خبيرة لتكاليف وتوقيتات زيارة طيبة الطيبة",
                                beliefLabel: "المتداول",
                                realityLabel: "الواقع",
                                rangeLabel: "النطاق الآمن",
                                factorsLabel: "عوامل متغيرة"
                            }}
                            points={[
                                {
                                    topic: "أجرة المطار للفندق",
                                    commonBelief: "السعر ٥٠ ريال.",
                                    reality: "تاكسي المطار الرسمي يحسب بالعداد (غالباً ٨٠-١٢٠ ريال). النقل الخاص يوفر سعر ثابت (١٠٠-١٥٠) مع استقبال وعدم انتظار.",
                                    truthRange: "٨٠ - ١٥٠ ريال",
                                    factors: ["رسوم المطار", "نوع السيارة", "الاستقبال"]
                                },
                                {
                                    topic: "مدة جولة الزيارة",
                                    commonBelief: "تاخذ ساعتين.",
                                    reality: "زيارة قباء وأحد فقط تأخذ ساعتين. الجولة الروحانية الكاملة (السبع مساجد، القبلتين) مع التوقف للصلاة تحتاج ٣-٤ ساعات.",
                                    truthRange: "٣ - ٤ ساعات",
                                    factors: ["أوقات الصلاة", "زحام المزارات", "عدد الوقفات"]
                                },
                                {
                                    topic: "السفر لمكة (قطار/تاكسي)",
                                    commonBelief: "القطار ساعتين.",
                                    reality: "رحلة القطار ٢.٥ ساعة، لكن الوصول للمحطة والخروج يضيف وقتاً. التاكسي (٤-٥ ساعات) يوصلك من الباب للباب ويتوقف بالميقات براحة.",
                                    truthRange: "٤ - ٥ ساعات (تاكسي)",
                                    factors: ["توقف الميقات", "من الباب للباب", "العفش"]
                                }
                            ]}
                        />
                        <div className="mt-12"></div>
                        <RoutePerspective
                            isRtl={true}
                            labels={{
                                title: "اختر مسار رحلتك",
                                subtitle: "خيارات السفر من المدينة إلى مكة"
                            }}
                            route="المدينة إلى مكة (للعمرة)"
                            perspectives={[
                                {
                                    id: "pilgrim-outbound",
                                    targetAudience: "قاصد العمرة",
                                    icon: User,
                                    intent: "نية العمرة والإحرام",
                                    description: "تبدأ الرحلة بميقات ذي الحليفة (آبار علي). هذا التوقف جوهري. الطريق هو وقت للتلبية والذكر. يفضل الزوار قيادة هادئة للحفاظ على الروحانية.",
                                    structuredFeatures: [
                                        { label: "محطة رئيسية", value: "الميقات (أبيار علي)" },
                                        { label: "الوقت", value: "٤-٥ ساعات" },
                                        { label: "التجهيز", value: "إحرام وغسل" },
                                        { label: "أفضل وقت", value: "بعد الفجر/العصر" }
                                    ],
                                    visualContext: "خريطة توضح المسافة من الحرم للميقات (١٢ كم) ثم الهجرة."
                                },
                                {
                                    id: "tourist-ziyarat",
                                    targetAudience: "سائح تاريخي",
                                    icon: Compass,
                                    intent: "استكشاف التاريخ والتراث",
                                    description: "المدينة متحف مفتوح. الطريق يمر بمواقع تاريخية (مثل بدر). السفر بالنهار يتيح مشاهدة تضاريس الطريق النبوي والجبال.",
                                    structuredFeatures: [
                                        { label: "مشاهدة", value: "بدر (تحويلة)" },
                                        { label: "طبيعة", value: "أودية وجبال" },
                                        { label: "توقفات", value: "مرنة للتصوير" },
                                        { label: "مرشد", value: "ينصح به" }
                                    ],
                                    visualContext: "مسار يوضح إمكانية المرور ببدر والاستراحات الجبلية."
                                }
                            ]}
                        />

                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "إجابات الخبراء",
                                subtitle: "حقائق تفصيلية لزوار مدينة الرسول ﷺ",
                                quickAnswer: "الجواب المختصر",
                                perspectives: "منظور سياقي",
                                readMore: "اقرأ التفاصيل",
                                readLess: "أخف التفاصيل"
                            }}
                            faqs={[
                                {
                                    question: "كم سعر التاكسي من مطار المدينة للمسجد النبوي؟",
                                    shortAnswer: "٨٠ - ١٢٠ ريال (عداد)",
                                    detailedAnswer: "سيارات الأجرة في مطار الأمير محمد بن عبدالعزيز تعمل بالعداد. السعر النهائي يعتمد على وقت الانتظار والزحام.",
                                    perspectives: [
                                        {
                                            role: "راحة البال",
                                            icon: "Shield",
                                            insight: "الحجز المسبق لسيارة خاصة يكلف أكثر قليلاً (حوالي ١٤٠ ريال) ولكنه يضمن لك سائقاً ينتظرك عند الوصول وسعراً ثابتاً."
                                        },
                                        {
                                            role: "للعائلات",
                                            icon: "Users",
                                            insight: "التاكسي العادي يحمل ٤ ركاب. العائلات الكبيرة تحتاج تاكسيين (٢٠٠+ ريال). حجز جمس واحد أوفر وأريح."
                                        }
                                    ]
                                },
                                {
                                    question: "كم تستغرق جولة المزارات؟",
                                    shortAnswer: "٣ - ٤ ساعات",
                                    detailedAnswer: "الجولة الشاملة للمواقع الرئيسية (مسجد قباء، جبل أحد، القبلتين) تستغرق عادة ٣ إلى ٤ ساعات.",
                                    perspectives: [
                                        {
                                            role: "الأولوية الروحانية",
                                            icon: "Heart",
                                            insight: "لا تستعجل في قباء. الصلاة فيه تعدل عمرة. خصص ٤٥ دقيقة على الأقل للوضوء والصلاة والدعاء."
                                        },
                                        {
                                            role: "للمهتمين بالتاريخ",
                                            icon: "Compass",
                                            insight: "جبل أحد يستحق وقتاً للتأمل. اطلب من السائق التوقف عند جبل الرماة لتصور موقع المعركة."
                                        }
                                    ]
                                },
                                {
                                    question: "هل يوجد قطار من المدينة لمكة؟",
                                    shortAnswer: "نعم، قطار الحرمين.",
                                    detailedAnswer: "قطار الحرمين سريع ومريح (٢.٥ ساعة)، لكن يحتاج تنسيق الوصول للمحطة ومن المحطة للفندق.",
                                    perspectives: [
                                        {
                                            role: "من باب لباب",
                                            icon: "User",
                                            insight: "التاكسي يستغرق ٤.٥ ساعات لكنه يأخذك من باب الفندق لباب الفندق. لا حاجة لجر الحقائب في المحطات."
                                        },
                                        {
                                            role: "للمسافر الفردي",
                                            icon: "Briefcase",
                                            insight: "القطار خيار ممتاز وارخص للمسافر الواحد. لكن للعائلات مع حقائب، التاكسي أسهل بكثير."
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
                    currentCity="المدينة"
                    isRtl={true}
                    labels={{
                        title: "وجهات أخرى",
                        subtitle: "خدمات النقل بين المدن",
                        viewRoutes: "تفاصيل الرحلة"
                    }}
                    customLinks={[
                        { name: 'تاكسي مكة', url: '/locations/makkah', description: 'توصيل للحرم المكي' },
                        { name: 'تاكسي العلا', url: '/locations/alula', description: 'رحلات سياحية لمدائن صالح' },
                        { name: 'ينبع', url: '/locations/yanbu', description: 'توصيل لمدينة ينبع الصناعية' },
                    ]}
                />
            </div>

        </div>
    );
}
