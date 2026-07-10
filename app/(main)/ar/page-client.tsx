"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { Plane, MapPin, Building2, Shield, Clock, Award, Star, CheckCircle2, Users, Car, ArrowRight, Camera, Calendar, User, Sparkles, Quote, Info, Wallet, Globe } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import JsonLdFAQ from '@/components/JsonLdFAQ';
import TrustedTransportNetwork from '@/components/seo/TrustedTransportNetwork';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import RelatedGuides from '@/components/RelatedGuides';
import { Blog } from '@/lib/blogService';
import HowItWorks from '@/components/HowItWorks';
import GlobalTrust from '@/components/GlobalTrust';
import TLDRSummary from '@/components/seo/TLDRSummary';
import FreshnessStatus from '@/components/seo/FreshnessStatus';
import { getPrice } from '@/lib/pricing';

interface HomeClientArabicProps {
    latestBlogs?: Blog[];
}

export default function HomeClientArabic({ latestBlogs = [] }: HomeClientArabicProps) {


    // Enhanced Structured Data with multiple schema types
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        "name": "Taxi Service KSA",
        "url": "https://taxiserviceksa.com",
        "logo": "https://taxiserviceksa.com/logo.png",
        "image": "https://taxiserviceksa.com/hero-image.jpg",
        "description": "تُعد Taxi Service KSA الخدمة الأعلى تقييماً للنقل الخاص VIP وخدمة الشوفير في السعودية. متخصصون في السفر الطويل بين المدن، وعبور الحدود، ونقل العمرة في جميع أنحاء المملكة. أسسها محمد إسماعيل، الخبير في لوجستيات السفر السعودية وحلول النقل التقنية.",
        "brand": {
            "@type": "Brand",
            "name": "Taxi Service KSA"
        },
        "founder": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "المؤسس وخبير لوجستيات السفر وتحسين محركات البحث",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail",
            "sameAs": [
                "https://www.linkedin.com/in/muhammad-ismail-sqa/",
                "https://www.facebook.com/profile.php?id=100007701130236"
            ]
        },
        "areaServed": "السعودية وحدود دول الخليج",
        "availableLanguage": ["English", "Arabic", "Urdu"],
        "priceRange": "$$$",
        "serviceType": "خدمة شوفير VIP ونقل خاص متميز",
        "knowsAbout": ["Umrah", "Haramain High Speed Railway", "Border Crossings", "GCC Tourism", "King Abdulaziz International Airport", "Prince Mohammad bin Abdulaziz International Airport", "Executive Travel", "Intercity Transport"],
        "sameAs": [
            "https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/",
            "https://www.linkedin.com/company/taxi-service-ksa/",
            "https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw",
            "https://www.pinterest.com/taxiserviceksa/",
            "https://twitter.com/TaxiServiceKSA",
            "https://www.instagram.com/taxiserviceksa/"
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://taxiserviceksa.com/booking/"
            },
            "result": {
                "@type": "Reservation",
                "name": "عرض سعر تاكسي"
            }
        }
    };

    // High-Quality Images for Hero Slider
    const heroImages = [
        '/makkah-kaaba-night.webp', // Makkah
        '/madinah-prophets-mosque.webp', // Madinah
        '/jeddah-corniche-sunset.webp', // Jeddah
        '/taif-mountains-view.webp', // Taif
        '/alula-hegra-tombs.webp', // AlUla
    ];

    // Services data with RDF Triple structure and Correct Links
    const services = [
        {
            title: "شوفير VIP وفاخر",
            description: "سائق خاص لضيوف العائلة المالكة والدبلوماسيين والرؤساء التنفيذيين وكبار الزوار. كاديلاك إسكاليد، جمس يوكن، ومرسيدس S-Class. خدمة سرية ومرخصة على مدار الساعة.",
            rdfTriple: "VIP chauffeur Saudi → serves → royal guests, diplomats, and elite visitors",
            icon: Star,
            link: "/ar/services/vip-chauffeur/",
            price: "أسعار مخصصة"
        },
        {
            title: "النقل السياحي",
            description: "سائق خاص للسياح الدوليين — جولات في المدن، رحلات صحراوية، رحلات برية إلى العلا، وجولات تسوق في الرياض وجدة. سائقون يتحدثون الإنجليزية.",
            rdfTriple: "Tourist transport Saudi → connects → international visitors to Saudi attractions",
            icon: Camera,
            link: "/ar/services/tourism-transport/",
            price: "عرض سعر مخصص"
        },
        {
            title: "سائق خاص — بالساعة واليوم",
            description: "سائقك الخاص المخصص بالساعة، أو اليوم الكامل، أو الأسبوع، أو الشهر. تسوق، اجتماعات عمل، نزهات عائلية — أسعار ثابتة دون أي زيادات مفاجئة.",
            rdfTriple: "Private driver Saudi → provides → dedicated hourly and daily transport",
            icon: Clock,
            link: "/ar/services/private-driver/",
            price: "سعر الساعة"
        },
        {
            title: "عبور الحدود ودول الخليج",
            description: "خدمة تاكسي متخصصة عبر دول الخليج: السعودية-البحرين (جسر الملك فهد)، بالإضافة إلى مسارات إلى الإمارات وقطر والكويت وعُمان. نتولى جميع الإجراءات الورقية لضمان سفر سلس بين الدول.",
            rdfTriple: "Border crossing taxi → facilitates → seamless transport between KSA and GCC countries",
            icon: Globe,
            link: "/border-crossings/",
            price: "أسعار مخصصة"
        },
        {
            title: "النقل بين المدن والمسافات الطويلة",
            description: "نقل للمسافات الطويلة إلى العلا، نيوم، الطائف، وأبها. أسعار ثابتة موحدة على جميع مسارات النقل بين المدن السعودية. مركبات فاخرة ومريحة.",
            rdfTriple: "Intercity taxi KSA → provides → luxury long-distance transport across Saudi Arabia",
            icon: MapPin,
            link: "/routes/",
            price: "أسعار ثابتة"
        },
        {
            title: "نقل الفعاليات والأفراح",
            description: "نقل منسّق للأفراح والمؤتمرات وفعاليات موسم الرياض. لوجستيات متعددة المركبات مع منسق فعاليات مخصص. لأي حجم من المجموعات.",
            rdfTriple: "Event chauffeur Saudi → manages → wedding and conference guest transport",
            icon: Calendar,
            link: "/ar/services/event-transport/",
            price: "باقة مخصصة"
        },
    ];

    // Fleet data with Links
    const fleet = [
        {
            name: "مرسيدس S-Class",
            image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["تجربة VIP", "مقصورة جلدية فاخرة", "خدمة سرية"],
            link: "/fleet/mercedes-s-class/",
        },
        {
            name: "كاديلاك إسكاليد",
            image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["نظام صوتي متميز", "راحة إضافية", "شوفير VIP"],
            link: "/fleet/cadillac-escalade/",
        },
        {
            name: "جمس يوكن XL / دينالي",
            image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
            passengers: 7,
            luggage: 5,
            features: ["دفع رباعي تنفيذي VIP", "مساحة أرجل إضافية", "مقصورة فاخرة"],
            link: "/fleet/gmc-yukon/",
        },
        {
            name: "مرسيدس فيتو",
            image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["فخامة أوروبية", "مقاعد اجتماعات", "درجة رجال الأعمال"],
            link: "/fleet/mercedes-vito/",
        },
        {
            name: "بي إم دبليو الفئة 7",
            image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["أداء قوي", "راحة فاخرة", "مكانة رفيعة"],
            link: "/fleet/bmw-7-series/",
        },
        {
            name: "جينيسيس G80 VIP",
            image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
            passengers: 3,
            luggage: 2,
            features: ["مقصورة هادئة", "مقعد خلفي VIP", "فخامة عصرية"],
            link: "/fleet/genesis-g80/",
        },
        {
            name: "فورد توروس 2026",
            image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
            passengers: 3,
            luggage: 2,
            features: ["سيدان تنفيذية", "قيادة سلسة", "تقنية عصرية"],
            link: "/fleet/ford-taurus/",
        },
        {
            name: "مرسيدس سبرينتر",
            image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
            passengers: 14,
            luggage: 4,
            features: ["تصميم داخلي مخصص", "سقف مرتفع", "سفر الشركات"],
            link: "/fleet/mercedes-sprinter/",
        },
        {
            name: "هيونداي ستاريا VIP",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["فان عائلي VIP", "مقصورة واسعة", "تميّز للمجموعات"],
            link: "/fleet/hyundai-staria/",
        },
        {
            name: "تويوتا هايس",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["نقل جماعي VIP", "لوجستيات الحجاج", "سعة كبيرة"],
            link: "/fleet/toyota-hiace/",
        },
        {
            name: "تويوتا كوستر",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["حافلة الشركات", "نقل الوفود", "مجموعات كبيرة"],
            link: "/fleet/toyota-coaster/",
        },
        {
            name: "تويوتا كامري",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["سائق محترف", "تكييف هواء", "نقل فعّال"],
            link: "/fleet/toyota-camry/",
        },
        {
            name: "هيونداي ستاريكس",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["ضيافة عائلية", "سائق محترف", "متخصص بالمطارات"],
            link: "/fleet/hyundai-starex/",
        },
        {
            name: "حافلة فاخرة",
            image: "/fleet/luxurious-bus.webp",
            passengers: 25,
            luggage: 30,
            features: ["راحة على متن الحافلة", "مجموعات كبيرة", "مقاعد تنفيذية"],
            link: "/fleet/luxurious-bus/",
        }
    ];

    // Service areas with Entity Context
    const serviceAreas = [
        { name: "جدة", role: "بوابة مكة المكرمة", link: "/ar/locations/jeddah/" },
        { name: "مكة المكرمة", role: "المدينة المقدسة ومركز العمرة", link: "/ar/locations/makkah/" },
        { name: "المدينة المنورة", role: "مدينة رسول الله ﷺ", link: "/ar/locations/madinah/" },
        { name: "الرياض", role: "العاصمة الاقتصادية", link: "/locations/riyadh/" },
        { name: "الدمام", role: "المنطقة الشرقية ومركز حدود الخليج", link: "/locations/dammam/" },
        { name: "الطائف", role: "مدينة الورد", link: "/ar/locations/taif/" },
        { name: "العلا", role: "إرث تاريخي عريق", link: "/ar/locations/alula/" },
        { name: "ينبع", role: "المركز الصناعي", link: "/ar/locations/yanbu/" },
        { name: "خيبر", role: "واحة أثرية قديمة", link: "/ar/locations/khayber-fort/" }
    ];

    // FAQ data - Entity-optimized answers
    const faqs = [
        {
            question: "هل تقدمون خدمة تاكسي المطار في السعودية من جدة إلى مكة؟",
            answer: "نعم، تعمل خدمة تاكسي المطار لدينا من مطار الملك عبدالعزيز الدولي (JED) إلى فنادق مكة المكرمة على مدار الساعة. وخلافاً لسيارات الأجرة الصفراء التقليدية، نقدّم أسعاراً ثابتة معلنة مسبقاً دون عدادات خفية. يقدّم السائقون خدمة استقبال داخل صالة الوصول، مع تتبع تلقائي لرحلتك لمراقبة أي تأخير."
        },
        {
            question: "هل هذه الخدمة أفضل من أوبر أو كريم أو كايان لرحلة العمرة؟",
            answer: "بالنسبة لرحلات العمرة الطويلة (مثل جدة-مكة أو مكة-المدينة)، تقدّم <strong>Taxi Service KSA</strong> مزايا واضحة مقارنة بتطبيقات النقل التشاركي. نضمن لك <strong>أسعاراً ثابتة</strong> (دون أي زيادة في أوقات الذروة)، ومركبات واسعة لاستيعاب الأمتعة (جمس يوكن، تويوتا هايس)، وسائقين محترفين ينتظرونك حتى في حال تأخر رحلتك. إنها <strong>خدمة نقل مخصصة بين المدن</strong> مصممة لراحة بالك."
        },
        {
            question: "ما هي أفضل خدمة نقل أونلاين لمعتمري العمرة؟",
            answer: "تُعد <strong>Taxi Service KSA</strong> أفضل خدمة نقل VIP لمعتمري العمرة، حيث توفر تنقلاً يراعي مواقيت الصلاة ومسارات الوصول إلى الحرم. يعرف السائقون الطرق بين مكة والمدينة ومطار جدة جيداً. تشمل الخدمة المساعدة في حمل الأمتعة وعبوات ماء زمزم."
        },
        {
            question: "هل خدمة التاكسي لديكم في السعودية متاحة على مدار الساعة؟",
            answer: "تعمل خدمة التاكسي على مدار ٢٤ ساعة يومياً في السعودية. نستوعب رحلات الوصول في وقت متأخر من الليل وجولات الزيارة الصباحية الباكرة. السائقون متاحون لتقديم عروض الأسعار في أي وقت."
        },
        {
            question: "كيف أطلب عرض سعر لنقل VIP في السعودية؟",
            answer: "يمكنك الحصول على عرض سعر لنقل VIP عبر <a href='/booking/' class='text-primary hover:underline font-bold'>نموذج طلب عرض السعر الإلكتروني</a> أو عبر البريد الإلكتروني taxiserviceksa9988@gmail.com. يتطلب طلبك تحديد موقع الاستلام والوجهة ونوع المركبة المفضل. تُرسل عروض الأسعار عبر البريد الإلكتروني."
        },
        {
            question: "هل Taxi Service KSA شركة مرخصة؟",
            answer: "نعم، <strong>Taxi Service KSA</strong> شركة تسهيل نقل مرخصة بالكامل في السعودية، وتعمل وفق أنظمة الهيئة العامة للنقل (TGA). يحمل جميع السائقين تراخيص سارية، والمركبات معتمدة للنقل القانوني للحجاج والسياح."
        },
        {
            question: "هل يمكنني طلب عرض سعر للتاكسي من بريطانيا أو أمريكا قبل رحلتي؟",
            answer: "نعم، يمكنك <strong>طلب عرض سعر لتاكسيك مسبقاً عبر الإنترنت</strong> من بريطانيا أو أمريكا أو كندا أو من أي مكان في العالم. نتابع موعد وصول رحلتك الدولية إلى مطار جدة (KAIA) ونضمن انتظار سائقك لك عند الصالة."
        },
        {
            question: "هل تقبلون بطاقات الائتمان الدولية؟",
            answer: "نعم، نقبل بطاقات الائتمان الدولية الرئيسية (فيزا، ماستركارد) بالإضافة إلى الدفع النقدي بعملات <strong>الريال السعودي، والدولار الأمريكي، والجنيه الإسترليني، واليورو</strong>. يمكنك اختيار الدفع أونلاين أو للسائق عند الوصول."
        }
    ];

    return (
        <div className="bg-white min-h-screen rtl" dir="rtl">
            <Script
                id="transportation-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section with Entity-Optimized H1 */}
            <Hero
                images={heroImages}
                h1Text="خدمة تاكسي VIP في السعودية"
                subtitle="خدمة شوفير احترافية للحدود والمطارات والمواقع السياحية والتنقل التنفيذي بين المدن في جميع أنحاء السعودية ودول الخليج (الإمارات، البحرين، قطر، الكويت، عُمان)."
            >

            </Hero>

            {/* AI SEO: Early TL;DR for Generative Engine Extraction */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="2026-03-06" />
                    <TLDRSummary
                        title="الملخص التنفيذي لـ Taxi Service KSA"
                        summary="تُعد Taxi Service KSA الشركة الرائدة في خدمات الشوفير التنفيذي والنقل الخاص في السعودية، وتأسست منذ عام ٢٠١٢. نتخصص في النقل المباشر بين المدن، وعبور الحدود، وتوصيل المطارات، والرحلات السياحية في جميع أنحاء المملكة."
                        points={[
                            "تغطية شاملة للمملكة: جميع المدن والحدود والمواقع السياحية",
                            "سائقون مرخصون بنسبة ١٠٠% ومدربون تدريباً احترافياً",
                            "أسطول متميز لرحلات العمرة VIP والأعمال والسياحة العائلية",
                            "ضمان السعر الثابت دون أي رسوم مفاجئة أو زيادات خفية",
                            "خدمة على مدار الساعة: مكة، المدينة، الرياض، جدة، العلا، وغيرها"
                        ]}
                        pricing="أسعار ثابتة"
                        duration="خدمة على مدار الساعة"
                    />
                </div>
            </section>

            {/* Global Trust Marquee */}
            <GlobalTrust />

            {/* LATEST INSIGHT BANNER */}
            <div className="bg-emerald-600 text-white relative overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-white text-emerald-700 text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">تقرير جديد</span>
                        <p className="text-sm sm:text-base font-medium">
                            <span className="font-bold">دراسة ٢٠٢٦:</span> لماذا تختار ٧٠% من العائلات التاكسي بدلاً من القطار فائق السرعة؟
                        </p>
                    </div>
                    <Link href="/insights/pilgrimage-transport-report-2025/" className="flex-shrink-0">
                        <button className="text-white border-b border-white hover:border-emerald-200 hover:text-emerald-100 transition-colors text-sm font-bold flex items-center gap-1 group">
                            اطّلع على البيانات <ArrowRight className="w-4 h-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Source Context Clarification - Koray's Methodology */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background with Gradient Overlay */}
                <div className="absolute inset-0 bg-[#0B1120]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <Shield className="w-3 h-3" />
                                <span>الأمان أولاً</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                نقل VIP خاص <span className="text-primary block mt-2">وخدمة شوفير تنفيذية</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                استمتع بأعلى معايير السفر مع خدمة النقل الخاص الأولى في السعودية. نقدّم بديلاً موثوقاً لتطبيقات النقل التشاركي للسياح الدوليين ورجال ورائدات الأعمال. نتخصص في <strong>عبور الحدود، وتوصيل المطارات، والرحلات السياحية، ونقل العمرة</strong> في جميع المدن (مثل جدة، الرياض، مكة، المدينة، العلا، تبوك). ملاحظة: نركّز على الرحلات الطويلة المحجوزة مسبقاً، ولا نقدّم خدمة الاستيقاف من الشارع المحلية.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/booking/">
                                    <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary font-bold transition-all shadow-lg shadow-primary/20">
                                        الحجز عبر واتساب أونلاين
                                    </Button>
                                </Link>
                                <a href="https://wa.me/966569487569?text=مرحباً،%20أرغب%20في%20الحصول%20على%20عرض%20سعر%20تاكسي%20VIP" target="_blank" rel="nofollow noopener noreferrer">
                                    <Button size="lg" className="bg-emerald-600 border-none text-white hover:bg-emerald-700 font-bold transition-all shadow-lg flex items-center gap-2 h-14 px-8 rounded-2xl">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        احصل على عرض سعر عبر واتساب
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        {/* Feature Image & Highlights */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/chauffeur-service.png"
                                    alt="أفضل خدمة تاكسي أونلاين - سائق يفتح باب السيارة في السعودية"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">سائقون مرخصون ضمن الخدمة</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">لا تأجير سيارات بدون سائق</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">خدمة شوفير فقط</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Refactored to Split List (No Cards) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs px-3 py-1 rounded-full mb-4 inline-block shadow-md shadow-primary/30">
                                قدراتنا الأساسية
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[0.9]">
                                أفضل{' '}<br />خدمات{' '}<br />النقل الخاص
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                متخصصون في الرحلات الطويلة، واستقبال المطار VIP، وخدمات نقل العمرة المخصصة للمسافر المميز.
                            </p>
                             <a href="https://wa.me/966569487569?text=مرحباً،%20أرغب%20في%20الحصول%20على%20عرض%20سعر%20تاكسي%20VIP" target="_blank" rel="nofollow noopener noreferrer">
                                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-8 py-6 text-lg font-bold min-h-[48px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 flex items-center gap-2">
                                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                                    احصل على عرض سعر عبر واتساب
                                </Button>
                            </a>
                        </div>

                        {/* Right: List Layout */}
                        <div className="lg:col-span-7 space-y-0">
                            {services.map((service, index) => (
                                <div key={index} className="group relative border-r-4 border-gray-200 hover:border-black pr-8 py-8 transition-colors duration-300">
                                    <Link href={service.link} className="block">
                                        <div className="flex items-baseline justify-between mb-2">
                                            <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <ArrowRight className="w-6 h-6 transform rotate-[225deg] group-hover:rotate-180 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl group-hover:text-gray-900 transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black">
                                            <span>يبدأ من {service.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Semantic Authority Network */}
            <TrustedTransportNetwork />

            {/* Why Choose Us - Premium Differentiation */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">معايير VIP</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            لماذا تختار <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">Taxi Service KSA؟</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "مرخصون بنسبة 100%",
                                desc: "مسجلون رسمياً لدى وزارة النقل والهيئة العامة للنقل (TGA) لضمان أمانك الكامل."
                            },
                            {
                                icon: Clock,
                                title: "وصول في الموعد",
                                desc: "بلا تأخير. يصل سائقنا إلى المطار قبل 15 دقيقة من هبوط رحلتك."
                            },
                            {
                                icon: Users,
                                title: "سائقون محترفون",
                                desc: "سائقون محترفون يتحدثون الإنجليزية ومدرّبون وفق معايير الضيافة الفاخرة."
                            },
                            {
                                icon: Wallet,
                                title: "سعر ثابت",
                                desc: "السعر الذي تراه هو ما تدفعه فعلياً. بلا ضريبة قيمة مضافة خفية أو رسوم مواقف أو أنفاق إضافية."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Visual Flow */}
            <HowItWorks title={<>احجز تاكسيك عبر واتساب في <span className="text-[#FFC107]">٣ خطوات بسيطة</span></>} />

            {/* About Us Preview - Optimized H2 */}
            {/* About Us - The Premium Narrative */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-10 aspect-[4/5]">
                                <Image
                                    src="/gmc-yukon.webp"
                                    alt="أسطول Taxi Service KSA للنقل VIP"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-0.5 bg-primary"></div>
                                        <span className="text-xs font-bold uppercase tracking-[0.3em]">على مستوى المملكة</span>
                                    </div>
                                    <h3 className="text-2xl font-black italic">تأسست عام 2014</h3>
                                </div>
                            </div>

                            {/* Floating Stats Badge */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden sm:block">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">+١٠ سنوات</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">تميّز في السوق</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full"></div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">+٥٠٬٠٠٠</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">رحلة مكتملة</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest mb-6">
                                    <Info className="w-4 h-4 text-primary" /> قصتنا
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                                    بوابتك إلى <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">التنقل VIP الفاخر</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    في قلب المملكة، وُلدت <strong>Taxi Service KSA</strong> من مهمة واحدة بسيطة: إعادة تعريف تجربة سفر الحج والعمرة والأعمال. ابتعدنا عن عدم يقين وسائل النقل العامة لنقدّم خدمة فاخرة مضمونة من الباب إلى الباب.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" /> معتمدون حكومياً
                                    </h4>
                                    <p className="text-sm text-gray-500">مرخّصون بالكامل من وزارة النقل والهيئة العامة للنقل (TGA) للتشغيل الرسمي.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Wallet className="w-4 h-4 text-primary" /> متوافقون ضريبياً
                                    </h4>
                                    <p className="text-sm text-gray-500">فوترة ضريبة القيمة المضافة الكاملة المعتمدة من هيئة الزكاة والضريبة والجمارك (ZATCA) متاحة لجميع حجوزات الشركات.</p>
                                </div>
                            </div>

                             <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <a href="https://wa.me/966569487569?text=مرحباً،%20أرغب%20في%20الحصول%20على%20عرض%20سعر%20تاكسي%20VIP" target="_blank" rel="nofollow noopener noreferrer" className="w-full sm:w-auto">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20 flex items-center gap-3">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        احصل على عرض سعر عبر واتساب
                                    </Button>
                                </a>
                                <Link href="/booking/" className="w-full sm:w-auto">
                                    <Button className="w-full bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 border-2 border-slate-900 px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95">
                                        استخدم النموذج الإلكتروني <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Fleet Section - Optimized H2 */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block shadow-md shadow-primary/30">أسطولنا</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            أفضل تشكيلة أسطول VIP
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            يضم أسطولنا المتميز مركبات جمس يوكن، وتويوتا كامري، وهيونداي ستاريا، وتويوتا هايس، جميعها بحالة صيانة دقيقة وفق المعايير التنفيذية.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {fleet.map((vehicle, index) => (
                            <div key={index} className="block group h-full">
                                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-200 group-hover:border-primary/50 flex flex-col">
                                    <Link href={vehicle.link} className="block">
                                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                            <Image
                                                src={vehicle.image}
                                                alt={`${vehicle.name} - خدمة تاكسي موثوقة في السعودية لعدد ${vehicle.passengers} أشخاص`}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                        </div>
                                    </Link>
                                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                                        <Link href={vehicle.link}>
                                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary transition-colors transform rotate-180 group-hover:-translate-x-1" />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-gray-600 text-sm sm:text-base">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.passengers} ركاب</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.luggage} حقائب</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 sm:space-y-2 mb-4 flex-1">
                                            {vehicle.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mt-auto">
                                            <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name.replace(/\s+/g, '-'))}`} className="w-full">
                                                <Button className="w-full bg-primary text-white hover:bg-blue-600 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-primary/20 text-xs"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> حجز واتساب</Button>
                                            </Link>
                                            <a
                                                href={`https://wa.me/966569487569?text=مرحباً،%20أرغب%20في%20الحصول%20على%20عرض%20سعر%20VIP%20لسيارة%20${encodeURIComponent(vehicle.name)}.`}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                className="w-full"
                                            >
                                                <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/20 text-xs gap-1.5 px-1">
                                                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                                                    واتساب
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Featured Airport & Chauffeur Services — Zipper Expansion */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">خدمات مميزة</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">نقل المطارات والمدن</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/jeddah-airport-transfer/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">توصيل مطار جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">نقل مميز على مدار الساعة من مطار جدة (JED) إلى الفنادق ومكة والمدينة.</p>
                        </Link>
                        <Link href="/riyadh-to-jeddah-private-car/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">سيارة من الرياض إلى جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">سيارة خاصة للمسافات الطويلة من الباب إلى الباب. 950 كم، سائقون محترفون.</p>
                        </Link>
                        <Link href="/riyadh-to-dammam-taxi/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">تاكسي من الرياض إلى الدمام</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">نقل مريح بين المدن يربط العاصمة بالمنطقة الشرقية.</p>
                        </Link>
                        <Link href="/private-taxi-madinah/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">تاكسي خاص في المدينة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">جولات زيارة، واستقبال من الفنادق، ونقل بالقرب من المسجد النبوي.</p>
                        </Link>
                        <Link href="/makkah-to-jeddah-taxi/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">تاكسي من مكة إلى جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">نقل مباشر من فنادق الحرم إلى مدينة جدة ومطارها (JED).</p>
                        </Link>
                        <Link href="/vip-chauffeur-jeddah/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">شوفير VIP في جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">استئجار سائق مميز بالساعة أو اليوم في جدة للأعمال أو الترفيه.</p>
                        </Link>
                        <Link href="/vip-transfer-dammam/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">نقل VIP في الدمام</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">خدمة سيارات تنفيذية في الدمام والخبر والجبيل وجسر البحرين.</p>
                        </Link>
                        <Link href="/riyadh-airport-taxi/" className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">تاكسي مطار الرياض</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">استقبال داخل الصالة، أسطول فاخر، وأسعار ثابتة من مطار الرياض (RUH).</p>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Top 5 Contextual Routes - Transactional Gold */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">المحور التنفيذي</span>

                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">أشهر مسارات VIP</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/ar/routes/jeddah-makkah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">من مطار جدة إلى مكة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">أسرع نقل من المطار لمعتمري العمرة. مسار مباشر بطول 80 كم.</p>
                        </Link>
                        <Link href="/ar/routes/makkah-madinah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">من مكة إلى المدينة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">المسار التاريخي للحج والعمرة بطول 450 كم بين الحرمين الشريفين.</p>
                        </Link>
                        <Link href="/ar/routes/madinah-jeddah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">من المدينة إلى مطار جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">مثالي لرحلات العودة من فنادق المدينة إلى مطار الملك عبدالعزيز.</p>
                        </Link>
                        <Link href="/ar/routes/riyadh-jeddah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">من الرياض إلى جدة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">نقل تنفيذي بين المدن يربط العاصمة بالساحل.</p>
                        </Link>
                        <Link href="/ar/routes/jeddah-taif/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">من جدة إلى الطائف</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">رحلة بمناظر خلابة إلى مدينة الورد وجبال السروات.</p>
                        </Link>
                        <Link href="/routes/" className="group p-6 bg-primary text-white rounded-2xl border border-primary hover:bg-black transition-all shadow-lg flex items-center justify-center font-bold">
                            عرض كل المسارات (+50) ←
                        </Link>
                    </div>
                </div>
            </section>

            {/* GCC & Cross-Border Routes Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">خارج حدود السعودية</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">مسارات دول الخليج والعبور الحدودي</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                            نقل تنفيذي مرخّص بين السعودية ودول الخليج المجاورة — الإمارات، والبحرين، وقطر، والكويت — مع تولّينا جميع إجراءات عبور الحدود نيابة عنك.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/ar/routes/dammam-bahrain/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">من الدمام إلى البحرين</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">عبور جسر الملك فهد مع المساعدة في الإجراءات الورقية.</p>
                        </Link>
                        <Link href="/ar/routes/riyadh-dubai/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">من الرياض إلى دبي</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">نقل تنفيذي طويل المسافة إلى الإمارات.</p>
                        </Link>
                        <Link href="/routes/riyadh-doha/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">من الرياض إلى الدوحة</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">نقل خاص عابر للحدود إلى قطر.</p>
                        </Link>
                        <Link href="/routes/riyadh-kuwait/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">من الرياض إلى الكويت</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">نقل VIP بين الدول إلى مدينة الكويت.</p>
                        </Link>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/border-crossings/">
                            <Button size="lg" className="bg-primary text-black hover:bg-white font-bold px-8 py-6 rounded-xl">
                                عرض جميع مسارات عبور الحدود <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <div>
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-3 sm:mb-4 shadow-md shadow-primary/30">معرض الصور</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                معرض الأسطول الفاخر والوجهات
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                صور توضح مركبات خدمة التاكسي الاحترافية لدينا، بما في ذلك جمس يوكن وهيونداي ستاريا في مكة والمدينة.
                            </p>
                            <Link href="/gallery/">
                                <Button size="lg" className="bg-primary text-white hover:bg-blue-600 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                                    عرض المعرض الكامل <Camera className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/makkah-kaaba-night.webp" alt="معتمرون يستخدمون أفضل خدمة تاكسي أونلاين في السعودية بمكة المكرمة" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/gmc-yukon.webp" alt="جمس يوكن الفاخرة - المقصورة الداخلية لأفضل خدمة تاكسي أونلاين في السعودية" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-4 sm:pt-6 md:pt-8">
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/madinah-prophets-mosque.webp" alt="زيارة مع أفضل خدمة تاكسي أونلاين في المدينة المنورة قرب المسجد النبوي" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/hyundai-staria.webp" alt="تاكسي عائلي في السعودية - مركبة هيونداي ستاريا لأفضل خدمة تاكسي أونلاين" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section - Minimal Links (No Cards) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-4">
                                مناطق تغطية خدمة التاكسي أونلاين
                            </h2>
                            <p className="text-gray-600 max-w-xl">
                                تمتد عملياتنا الأعلى تقييماً لتشمل جدة ومكة والمدينة والرياض والدمام — بالإضافة إلى النقل العابر للحدود إلى دول الخليج الأوسع.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {serviceAreas.map((area, index) => (
                            <Link key={index} href={area.link} className="block group">
                                <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-primary/10"></div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {area.name}
                                        </h3>

                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            {area.role}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        استكشف المسارات <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contextual Block: National Infrastructure */}
                    <div className="mt-16 border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">مسار تاكسي جدة إلى مكة</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                نقل تاكسي مباشر من مطار الملك عبدالعزيز إلى فنادق مكة المكرمة على مدار الساعة. أسعار ثابتة متاحة لجميع المجموعات.
                            </p>
                            <Link href="/ar/routes/jeddah-makkah/">
                                <Button className="text-black font-bold border-b-2 border-black rounded-none px-0 py-0 h-auto hover:bg-transparent hover:border-primary transition-colors">
                                    احصل على عرض سعر جدة إلى مكة
                                </Button>
                            </Link>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="/hero-slide-4.webp"
                                alt="الربط مع قطار الحرمين عبر أفضل خدمة تاكسي أونلاين"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* Customer Reviews Section - UGC for Koray's Methodology */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            آراء العملاء الأعلى تقييماً
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            يقيّم الركاب <strong>Taxi Service KSA</strong> كخدمة نقل احترافية ومميزة معروفة بموثوقيتها.
                        </p>
                    </div>

                    {/* Trustpilot Review Collector */}
                    <div className="mb-12 flex justify-center">
                        <div
                            className="trustpilot-widget w-full max-w-4xl"
                            data-locale="en-US"
                            data-template-id="56278e9abfbbba0bdcd568bc"
                            data-businessunit-id="69590063ca6f6aed3292cfb9"
                            data-style-height="52px"
                            data-style-width="100%"
                            data-token="fab9a024-f184-45ab-904b-1cf6f5e9b94a"
                        >
                            <a href="https://www.trustpilot.com/review/taxiserviceksa.com" target="_blank" rel="nofollow noopener noreferrer">
                                Trustpilot
                            </a>
                        </div>
                    </div>

                    {/* Reviews Display */}
                    <div className="mb-12">
                        <ReviewsDisplay limit={3} />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                        <Link href="/submit-review/">
                            <Button size="lg" className="w-full lg:w-auto bg-black text-white hover:bg-gray-800 font-bold min-h-[56px] px-8">
                                <Star className="w-5 h-5 ml-2" />
                                شاركنا تجربتك
                            </Button>
                        </Link>
                        <a
                            href="https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="w-full lg:w-auto"
                        >
                            <Button size="lg" className="w-full lg:w-auto bg-[#00b67a] text-white hover:bg-[#00a36c] font-bold min-h-[56px] px-8 border-none">
                                <Star className="w-5 h-5 ml-2 fill-white" />
                                قيّمنا على Trustpilot
                            </Button>
                        </a>
                        <Link href="/ask-question/" className="w-full lg:w-auto">
                            <Button size="lg" variant="outline" className="w-full lg:w-auto border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-colors min-h-[56px] px-8">
                                لديك سؤال؟
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest Guide Section */}
            <RelatedGuides blogs={latestBlogs} title="أحدث أدلة السفر" subtitle="نصائح الخبراء لرحلة العمرة والسفر في السعودية." />

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-md shadow-primary/30">الأسئلة الشائعة</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            الأسئلة الشائعة
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 px-4 sm:px-5 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <AccordionTrigger className="text-right hover:no-underline py-3 sm:py-4">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pl-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-3 sm:pb-4">
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section >

            {/* Final CTA Section - Optimized A/B & Trust */}
            < section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black" >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                        احجز عبر واتساب مع أفضل خدمة تاكسي أونلاين
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-4 max-w-2xl mx-auto">
                        احصل على عرض سعرك الآن مع خدمة التاكسي الأونلاين الأعلى تقييماً في السعودية لنقل موثوق من وإلى المطار.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        {/* Primary CTA */}
                        <Link href="/booking/" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-blue-600 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/40"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> الحجز عبر واتساب</Button>
                        </Link>

                        {/* Secondary CTA - Email */}
                        <a href="mailto:taxiserviceksa9988@gmail.com" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95">
                                راسلنا عبر البريد الإلكتروني
                            </Button>
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> تأكيد فوري</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> أسعار ثابتة</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> إلغاء مجاني</span>
                    </div>
                </div>
            </section >


            {/* Bottom Sticky CTA (Mobile Only) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:hidden animate-bounce-subtle">
                <Button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-slate-900 hover:bg-black text-white h-14 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-2 border border-white/10"
                >
                    <Car className="w-5 h-5 text-primary" /> الحجز عبر واتساب <ArrowRight className="w-5 h-5 rotate-180" />
                </Button>
            </div>
        </div >
    );
}
