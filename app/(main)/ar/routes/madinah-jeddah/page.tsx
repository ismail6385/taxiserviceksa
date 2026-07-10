import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, Train, User, Compass, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';

export const metadata: Metadata = {
    title: 'تاكسي المدينة المنورة إلى جدة ٢٠٢٦ | نقل VIP خاص | أسعار ثابتة',
    description: 'احجز أفضل تاكسي من المدينة المنورة إلى جدة لعام ٢٠٢٦. رحلة مريحة تستغرق ٤-٥ ساعات من فنادق المدينة إلى جدة. أسعار ثابتة، جمس يوكن VIP، وخدمة على مدار الساعة.',
    keywords: ['تاكسي المدينة جدة', 'سعر تاكسي المدينة المنورة جدة', 'سيارة خاصة من المدينة إلى جدة', 'نقل المدينة المنورة جدة', 'تاكسي المدينة إلى مطار جدة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/madinah-jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/madinah-jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/madinah-jeddah/',
            'x-default': 'https://taxiserviceksa.com/routes/madinah-jeddah/',
        },
    },
    openGraph: {
        title: 'تاكسي المدينة المنورة إلى جدة ٢٠٢٦ | نقل VIP خاص',
        description: 'رحلة مريحة من المدينة المنورة إلى جدة مع سائقين محترفين. أسعار ثابتة وخدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/madinah-jeddah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function MadinahJeddahRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٤٥٠ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٤-٥ ساعات', icon: Clock },
        { label: 'الطريق', value: 'طريق الهجرة', icon: Navigation },
        { label: 'الخدمة', value: 'من الباب إلى الباب', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdRoute
                from="Madinah"
                to="Jeddah"
                description="Luxury intercity transfer from Madinah to Jeddah. Comfortable 4-5 hour journey from Madinah hotels to Jeddah. 100% private VIP car service."
                distance="450 km"
                duration="PT5H"
            />

            <Hero
                images={['/locations/madinah.webp', '/jeddah-corniche-sunset.webp']}
                h1Text="تاكسي المدينة المنورة إلى جدة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        المدينة المنورة ← جدة
                    </span>
                }
                subtitle="خدمة سيارة خاصة موثوقة للعائلات ورجال الأعمال"
                location="٤٥٠ كم | حجز عبر واتساب | سائقون محترفون"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=madinah-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي المدينة المنورة إلى جدة
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

            {/* Stats Ribbon */}
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

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">أفضل خدمة سيارة خاصة من المدينة المنورة إلى جدة</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                السفر من مدينة الرسول ﷺ إلى المدينة الساحلية يتطلب سيارة مصممة لتحمل المسافات الصحراوية الطويلة. توفر <strong>خدمة السيارة الخاصة من المدينة المنورة إلى جدة</strong> تجربة مباشرة من الباب إلى الباب، تتجنب متاعب التنقل عبر محطات القطار أو إجراءات تسجيل الوصول في المطار.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                سواء كنت متجهاً إلى اجتماع عمل في كورنيش جدة أو للحاق برحلة دولية، تضمن لك خدمة <strong>تاكسي المدينة المنورة إلى جدة</strong> الوصول بنشاط وراحة. اختر من بين <strong>جمس يوكن دينالي</strong> VIP أو <strong>مرسيدس فيتو</strong> للسفر الجماعي.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal
                                    brandName="TaxiServiceKSA Madinah"
                                    description="Providing luxury long-distance transfers across the Hijrah highway since 2015."
                                    metrics={[
                                        { label: 'Trip Completion', value: '100%', icon: Shield },
                                        { label: 'Driver Rating', value: '4.9/5', icon: Star }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">الأسطول الموصى به</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'جمس يوكن VIP', capacity: '٧ ركاب', luggage: '٥ حقائب' },
                                    { name: 'مرسيدس فيتو VIP', capacity: '٧ ركاب', luggage: '٤ حقائب' },
                                    { name: 'هيونداي ستاريا VIP', capacity: '٧ ركاب', luggage: '٤ حقائب' },
                                    { name: 'تويوتا هايس الجماعية', capacity: '١١ راكباً', luggage: '١٦ حقيبة' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                        <div className="flex gap-4 items-center">
                                            <div className="bg-emerald-600 text-white p-3 rounded-xl">
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
                route="Madinah to Jeddah"
                isRtl={true}
                perspectives={[
                    {
                        id: 'chauffeur-yousef',
                        targetAudience: 'الكابتن يوسف',
                        icon: User,
                        intent: 'الموثوقية واللوجستيات',
                        description: 'تُعد رحلة المدينة المنورة إلى جدة (٤٥٠ كم) طريق عودة شائعاً لدى الحجاج والمعتمرين ورجال الأعمال على حد سواء. نراقب دائماً ظروف الرياح على طريق الهجرة لأنها قد تؤثر على ثبات السيارة. أوصي بجمس يوكن دينالي لهذا المسار تحديداً بسبب نظام تعليقه القوي وعزله الصوتي الفائق.',
                        structuredFeatures: [
                            { label: 'أولوية الركاب', value: 'الهدوء' },
                            { label: 'الخبرة', value: '١٠ أعوام' },
                            { label: 'معرفة الطريق', value: 'خبير' }
                        ],
                        visualContext: 'A luxury GMC Yukon cruising along the bridge near Rabigh on the way to Jeddah.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

            <MicroSemanticFAQ
                        contextName="المدينة المنورة إلى جدة"
                        isRtl={true}
                    faqs={[
                        {
                            question: "كم سعر التاكسي من المدينة المنورة إلى جدة؟",
                            shortAnswer: "حجز عبر واتساب حسب فئة المركبة",
                            detailedAnswer: "سعر التاكسي من المدينة المنورة إلى جدة ثابت ويعتمد على طلبك: سيدان قياسية، أو SUV فاخرة (جمس يوكن)، أو فان جماعي. أسعارنا شفافة وبدون أي رسوم خفية.",
                            perspectives: [
                                { role: 'الشؤون المالية', icon: 'DollarSign', insight: 'الاتفاق على سعر ثابت يحميك من ارتفاع الأسعار المفاجئ الشائع في تطبيقات الطلب الفوري.' }
                            ]
                        },
                        {
                            question: "كم تستغرق رحلة التاكسي من المدينة المنورة إلى جدة؟",
                            shortAnswer: "من ٤.٥ إلى ٥ ساعات تقريباً",
                            detailedAnswer: "تستغرق الرحلة البالغة ٤٥٠ كم عادةً من ٤.٥ إلى ٥ ساعات، بما في ذلك توقف أو توقفان قصيران للراحة أو الصلاة عند محطات ساسكو.",
                            perspectives: [
                                { role: 'السائق', icon: 'Clock', insight: 'نحرص دائماً على الحفاظ على سرعة ثابتة لتحقيق أقصى راحة للركاب.' }
                            ]
                        },
                        {
                            question: "هل تقدمون خدمة من الباب إلى الباب في جدة؟",
                            shortAnswer: "نعم، من الباب إلى الباب ١٠٠٪",
                            detailedAnswer: "نعم. سيستقبلك سائقنا من أي فندق أو مسكن في المدينة المنورة ويوصلك إلى أي عنوان محدد في جدة، بما في ذلك المطار أو فنادق الكورنيش.",
                            perspectives: [
                                { role: 'نجاح العملاء', icon: 'CheckCircle2', insight: 'تُلغي خدمتنا من الباب إلى الباب الحاجة للبحث عن تاكسي في اللحظة الأخيرة بعد رحلة طويلة.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Madinah"
                isRtl={true}
                customLinks={[
                    { name: 'المدينة المنورة إلى مكة', url: '/routes/madinah-makkah/', description: 'الرحلة الروحية الأساسية مع التوقف عند الميقات.' },
                    { name: 'جدة إلى المدينة المنورة', url: '/routes/jeddah-madinah/', description: 'نقل مباشر من جدة إلى المدينة المنورة.' },
                    { name: 'المدينة المنورة إلى ينبع', url: '/routes/madinah-yanbu/', description: 'رحلة بانورامية إلى المدينة الساحلية الصناعية والسياحية.' }
                ]}
            />
            <RelatedRoutes originSlug="madinah" currentSlug="madinah-jeddah" title="مسارات أخرى شائعة" />

            <footer className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-t-[3rem]">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">هل أنت مستعد لرحلة سلسة؟</h2>
                    <p className="text-gray-400 text-lg mb-10">نقل متميز بين المدن بين المدينة المنورة وجدة. احصل على عرض سعر لسيارتك الخاصة اليوم.</p>
                    <Link href="/booking/?route=madinah-jeddah">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-transform hover:scale-110">
                            احجز الآن من المدينة المنورة إلى جدة
                        </Button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}


