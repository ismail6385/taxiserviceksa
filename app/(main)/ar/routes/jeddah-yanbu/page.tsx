import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Factory, Anchor, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'تاكسي من جدة إلى ينبع ٢٠٢٦ | السعر والوقت والحجز | Taxi Service KSA',
    description: 'احجز تاكسي أو سيارة خاصة موثوقة من جدة إلى ينبع (أو من مطار جدة إلى ينبع). أسعار ثابتة، مدة الرحلة ٣.٥ ساعة، سائقون محترفون يتحدثون الإنجليزية، متوفرون على مدار الساعة.',
    keywords: ['تاكسي من جدة إلى ينبع', 'سعر تاكسي جدة ينبع', 'تاكسي مطار جدة إلى ينبع', 'نقل مدينة ينبع الصناعية', 'خدمة سيارات جدة ينبع', 'المسافة بين جدة وينبع'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/jeddah-yanbu/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/jeddah-yanbu/',
            'ar': 'https://taxiserviceksa.com/ar/routes/jeddah-yanbu/',
            'x-default': 'https://taxiserviceksa.com/routes/jeddah-yanbu/',
        },
    },
    openGraph: {
        title: 'خدمة: تاكسي من مطار جدة إلى ينبع | Taxi Service KSA',
        description: 'نقل مباشر من جدة إلى مدينة ينبع الصناعية. سيارات آمنة ومريحة للمهندسين والتنفيذيين والغواصين.',
        url: 'https://taxiserviceksa.com/ar/routes/jeddah-yanbu/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function JeddahYanbuRoutePageArabic() {
    const images = [
        '/jeddah-airport.webp', // Ideally Yanbu Industrial / Red Sea
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];



    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Jeddah to Yanbu"
                description="Professional VIP private car service for Jeddah to Yanbu. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Jeddah to Yanbu Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}

                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي من مطار جدة إلى ينبع"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        المركز الصناعي
                    </span>
                }
                subtitle="مباشرة إلى الهيئة الملكية والمنتجعات"
                location="من الباب إلى الباب | ٣.٥ ساعة"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Yanbu">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز رحلة ينبع (سعر المسار)
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            لوجستيات المشاريع
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">ربط حيوي</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                ربط جدة بمركز البحر الأحمر
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                ينبع مدينة مزدوجة: &quot;ينبع البحر&quot; التاريخية (السياحة والغوص) و&quot;ينبع الصناعية&quot; الحديثة (البتروكيماويات والهيئة الملكية).
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                نتخصص في نقل المهندسين والاستشاريين والغواصين القادمين إلى جدة. الرحلة مسار مستقيم بطول ٣٣٠ كم شمالاً على طول ساحل البحر الأحمر، وتستغرق حوالي ٣.٥ ساعة.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Factory className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">المدينة الصناعية</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Anchor className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">منتجعات الغوص</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">الهيئة الملكية</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">استقبال على مدار الساعة</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">محطات شائعة</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">مدينة ينبع الصناعية</h4>
                                        <p className="text-sm text-gray-500">التوصيل إلى مقر الهيئة الملكية أو المصافي أو مخيمات الموظفين.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">واجهة ينبع البحرية</h4>
                                        <p className="text-sm text-gray-500">منطقة كورنيش جميلة تحظى بشعبية لدى السياح.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">شاطئ باراكودا</h4>
                                        <p className="text-sm text-gray-500">موقع غوص شهير. ننقل الغواصين مع معداتهم.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                <TravelConsensus
                        contextName="Jeddah to Yanbu"
                        isRtl={true}
                        labels={{
                            title: 'جدة وينبع: توقعات واقعية للرحلة',
                            subtitle: 'إجماع الخبراء حول أوقات السفر والتكاليف بناءً على بيانات حقيقية من المسافرين',
                            beliefLabel: 'التقدير الشائع',
                            realityLabel: 'الواقع الفعلي',
                            rangeLabel: 'النطاق الحقيقي الآمن',
                            factorsLabel: 'العوامل المؤثرة',
                        }}
                        points={[
                            {
                                topic: "الحافلة / سابتكو",
                                commonBelief: "الحافلة أرخص.",
                                reality: "الحافلة أرخص لكنها تستغرق ٥-٦ ساعات وتوصلك إلى محطة مركزية. لا تزال بحاجة إلى تاكسي للوصول إلى المدينة الصناعية (على بعد ٢٠ كم).",
                                truthRange: "بطيئة وغير مباشرة",
                                factors: ["وقت سفر طويل", "ليست من الباب إلى الباب"]
                            },
                            {
                                topic: "السلامة على الطريق",
                                commonBelief: "الطريق مظلم.",
                                reality: "توجد كاميرات مراقبة سرعة صارمة (ساهر) على طول الطريق. يلتزم سائقونا بحدود السرعة ويقودون مركبات حديثة وآمنة.",
                                truthRange: "مراقبة بشكل صارم",
                                factors: ["كاميرات السرعة", "قيادة آمنة"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations
                    currentCity="Jeddah"
                    isRtl={true}
                    labels={{
                        title: 'اكتشف وجهات قريبة من جدة',
                        subtitle: 'اتصال سلس عبر أنحاء السعودية',
                        viewRoutes: 'عرض المسارات',
                    }}
                />
                <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-yanbu" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                contextName="جدة إلى ينبع"
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: جدة إلى ينبع',
                    subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر',
                    readMore: 'اقرأ التفاصيل الكاملة',
                    readLess: 'عرض أقل',
                }}
                faqs={[
                    {
                        question: "ما المسافة بين مطار جدة وينبع؟",
                        shortAnswer: "٣٣٠ كم",
                        detailedAnswer: "المسافة حوالي ٣٣٠ كم. بدون توقفات، تستغرق الرحلة حوالي ٣ ساعات و٣٠ دقيقة.",
                        perspectives: []
                    },
                    {
                        question: "هل يمكنكم التوصيل داخل المدينة الصناعية؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، يمكننا الدخول إلى منطقة الهيئة الملكية وتوصيلك إلى بوابة شركتك المحددة أو فندقك.",
                        perspectives: []
                    },
                    {
                        question: "لدي معدات غوص، هل توجد مساحة كافية؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "ننصح بحجز خيار SUV / جمس إذا كنت تحمل معدات غوص ثقيلة أو عدة حقائب كبيرة.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}


