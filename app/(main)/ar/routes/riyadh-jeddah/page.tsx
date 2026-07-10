import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';


export const metadata: Metadata = {
    title: 'تاكسي الرياض إلى جدة ٢٠٢٦ | سيارة خاصة (٩٥٠ كم) | Taxi Service KSA',
    description: 'احجز أفضل تاكسي من الرياض إلى جدة أونلاين. رحلة مباشرة بين المدن تستغرق ٩ إلى ١٠ ساعات من الرياض إلى ساحل البحر الأحمر. أسعار ثابتة، سيارات جمس يوكن VIP، وخدمة من الباب إلى الباب.',
    keywords: ['تاكسي الرياض جدة', 'سعر تاكسي من الرياض الى جدة', 'سيارة خاصة الرياض جدة', 'تاكسي من الرياض الى جدة', 'استئجار سيارة الرياض جدة', 'تاكسي بين المدن السعودية', 'نقل خاص الرياض جدة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/riyadh-jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/riyadh-jeddah/',
            'x-default': 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
        },
    },
    openGraph: {
        title: 'تاكسي الرياض إلى جدة ٢٠٢٦ | سيارة خاصة VIP',
        description: 'رحلة مباشرة بين المدن مع سائقين محترفين. أسعار ثابتة وخدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/riyadh-jeddah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function RiyadhJeddahRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٩٥٠ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٩ - ١٠ ساعات', icon: Clock },
        { label: 'التوفر', value: '٢٤/٧ من الباب إلى الباب', icon: MapPin },
        { label: 'الخدمة', value: 'تجربة VIP', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdRoute
                from="Riyadh"
                to="Jeddah"
                description="Luxury intercity transfer from Riyadh to Jeddah. Direct 9-10 hour trans-Kingdom journey on Highway 40. 100% private VIP car service."
                distance="950 km"
                duration="PT10H"
            />

            <Hero
                images={['/jeddah-corniche-sunset.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي الرياض إلى جدة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        الرياض ← جدة VIP
                    </span>
                }
                subtitle="خدمة سائق خاص عبر المملكة"
                location="٩٥٠ كم | حجز عبر واتساب | سائقون محترفون"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=riyadh-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي الرياض إلى جدة
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            احصل على عرض سعر مخصص
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* شريط الإحصائيات */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">خدمة سيارة خاصة فاخرة من الرياض إلى جدة</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                يُعد عبور قلب المملكة العربية السعودية من الرياض إلى ساحل البحر الأحمر في جدة (٩٥٠ كم) رحلة تستحق أعلى معايير السفر. توفر <strong>خدمة تاكسي الرياض إلى جدة</strong> بديلاً متميزاً عن الطيران، يتيح لك السفر من الباب إلى الباب بخصوصية وراحة تامتين.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                تجنب ازدحام المطارات وحدود الأمتعة. أسطولنا من طراز ٢٠٢٦ من <strong>جمس يوكن</strong> و<strong>مرسيدس S-Class</strong> مُجهز تماماً لرحلة العشر ساعات، بمقاعد قابلة للاستلقاء وتحكم في المناخ وسائقين خبراء يعرفون أفضل محطات الاستراحة على طريق ٤٠ السريع.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal
                                    brandName="TaxiServiceKSA Riyadh"
                                    description="The capital's leader in trans-kingdom executive transfers since 2015."
                                    metrics={[
                                        { label: 'Long Haul Trips', value: '15k+', icon: Navigation },
                                        { label: 'Fleet Age', value: '< 2 Yrs', icon: Car }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">أسطول عبور المملكة</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'جمس يوكن دينالي', capacity: '٧ ركاب', luggage: '٥ حقائب' },
                                    { name: 'كاديلاك إسكاليد VIP', capacity: '٧ ركاب', luggage: '٤ حقائب' },
                                    { name: 'مرسيدس S-Class VIP', capacity: '٣ ركاب', luggage: '٢ حقيبة' },
                                    { name: 'هيونداي ستاريا VIP', capacity: '٧ ركاب', luggage: '٤ حقائب' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50 transition-colors border border-gray-100">
                                        <div className="flex gap-4 items-center">
                                            <div className="bg-emerald-600 text-white p-3 rounded-xl shadow-lg shadow-emerald-600/20">
                                                <Car className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900">{car.name}</h4>
                                                <p className="text-xs text-gray-400 font-bold uppercase">{car.capacity} | {car.luggage}</p>
                                            </div>
                                        </div>
                                        <Link href="/fleet/">
                                            <Button size="sm" variant="ghost" className="text-emerald-600 font-bold">التفاصيل</Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective
                route="Riyadh to Jeddah (Hwy 40)"
                isRtl={true}
                perspectives={[
                    {
                        id: 'chauffeur-nasser',
                        targetAudience: 'الكابتن ناصر',
                        icon: User,
                        intent: 'التنفيذ والسلامة',
                        description: 'طريق ٤٠ السريع هو العمود الفقري للمملكة. بالنسبة لرحلة ٩٥٠ كم، أقوم دائماً بفحص متعدد النقاط لأنظمة التبريد وضغط الإطارات. ننصح ببدء رحلة الرياض إلى جدة في المساء الباكر للاستمتاع بغروب الشمس فوق الصحراء والوصول إلى جدة صباحاً، تجنباً لحرارة منتصف النهار.',
                        structuredFeatures: [
                            { label: 'الاستعداد للرحلة', value: 'صارم' },
                            { label: 'الخبرة', value: '١٨ عاماً' },
                            { label: 'تصنيف الراحة', value: 'الدرجة الأولى' }
                        ],
                        visualContext: 'A VIP GMC Yukon Denali silhouetted against the vast desert horizon at dusk.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

            <MicroSemanticFAQ
                        contextName="الرياض إلى جدة"
                    isRtl={true}
                    faqs={[
                        {
                            question: "كم تستغرق رحلة التاكسي من الرياض إلى جدة؟",
                            shortAnswer: "من ٩ إلى ١٠ ساعات تقريباً",
                            detailedAnswer: "يبلغ إجمالي وقت السفر لرحلة ٩٥٠ كم نحو ٩.٥ ساعات. يشمل ذلك توقفين رئيسيين على الأقل للراحة وتناول الوجبات والتزود بالوقود والصلاة في محطات ساسكو على طول الطريق السريع.",
                            perspectives: [
                                { role: 'السائق', icon: 'Clock', insight: 'القيادة الليلية غالباً أسرع وأكثر برودة بكثير للرحلات الطويلة.' }
                            ]
                        },
                        {
                            question: "ما هو سعر السيارة الخاصة من الرياض إلى جدة؟",
                            shortAnswer: "الحجز عبر واتساب حسب نوع المركبة",
                            detailedAnswer: "أسعارنا لمسار الرياض إلى جدة ثابتة. يشمل السعر المركبة بالكامل والسائق والوقود وجميع رسوم الطريق السريع. تواصل معنا للحصول على عرض سعر دقيق حسب اختيارك من الأسطول.",
                            perspectives: [
                                { role: 'الفوترة', icon: 'DollarSign', insight: 'سعر ثابت واحد يعني عدم وجود مفاجآت حتى في حال تحويلات الطريق.' }
                            ]
                        },
                        {
                            question: "هل يمكنني إحضار أمتعة إضافية لرحلة الرياض إلى جدة؟",
                            shortAnswer: "نعم، حتى سعة المركبة.",
                            detailedAnswer: "على عكس شركات الطيران، لا نفرض حدوداً للوزن. طالما تتسع أمتعتك بشكل مريح في المركبة المختارة (مثل جمس يوكن التي تستوعب ٥ حقائب كبيرة)، فلا توجد أي رسوم إضافية.",
                            perspectives: [
                                { role: 'اللوجستيات', icon: 'Briefcase', insight: 'سيارات جمس يوكن لدينا هي الخيار الأفضل لسعة أمتعة العائلة.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Riyadh"
                isRtl={true}
                customLinks={[
                    { name: 'الرياض إلى مكة', url: '/routes/riyadh-makkah/', description: 'نقل حج مباشر إلى المدينة المقدسة.' },
                    { name: 'جدة إلى الرياض', url: '/routes/jeddah-riyadh/', description: 'رحلة عودة VIP إلى العاصمة السعودية.' },
                    { name: 'الرياض إلى الدمام', url: '/routes/riyadh-dammam/', description: 'نقل إلى مركز الأعمال في المنطقة الشرقية.' }
                ]}
            />
            <RelatedRoutes originSlug="riyadh" currentSlug="riyadh-jeddah" title="مسارات أخرى شائعة" />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">أتقن رحلتك من <br/> الرياض إلى جدة</h2>
                    <p className="text-emerald-100/60 text-lg mb-10 max-w-2xl mx-auto">سافر عبر المملكة بأقصى درجات الفخامة. احصل على عرض سعر لسيارتك الخاصة عبر المملكة اليوم.</p>
                    <Link href="/booking/?route=riyadh-jeddah">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-transform hover:scale-110"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> الحجز عبر واتساب</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
