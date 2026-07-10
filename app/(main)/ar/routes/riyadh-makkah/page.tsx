import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation, Calendar, Zap, Heart, User, Compass } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import RoutePerspective from '@/components/seo/RoutePerspective';
import JsonLdRoute from '@/components/JsonLdRoute';

export const metadata: Metadata = {
    title: 'تاكسي الرياض إلى مكة ٢٠٢٦ | نقل VIP خاص | أسعار ثابتة',
    description: 'احجز أفضل تاكسي من الرياض إلى مكة لعام ٢٠٢٦. رحلة VIP فاخرة تستغرق ٨-٩ ساعات مع سائقين محترفين. أسعار ثابتة وخدمة من الباب إلى الباب.',
    keywords: ['تاكسي الرياض مكة', 'سعر تاكسي الرياض مكة', 'سيارة خاصة من الرياض إلى مكة', 'تاكسي عمرة الرياض مكة', 'نقل الرياض مكة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/riyadh-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/riyadh-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/riyadh-makkah/',
            'x-default': 'https://taxiserviceksa.com/routes/riyadh-makkah/',
        },
    },
    openGraph: {
        title: 'تاكسي الرياض إلى مكة ٢٠٢٦ | نقل VIP خاص',
        description: 'رحلة VIP فاخرة من الرياض إلى مكة مع سائقين محترفين. أسعار ثابتة، خدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/riyadh-makkah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function RiyadhMakkahRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٨٧٠ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٨-٩ ساعات', icon: Clock },
        { label: 'السعر الأساسي', value: 'سعر ثابت', icon: DollarSign },
        { label: 'الخدمة', value: 'من الباب إلى الباب', icon: CheckCircle2 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdRoute
                from="Riyadh"
                to="Makkah"
                description="Luxury intercity transfer from Riyadh to Makkah. Premium 8-9 hour journey with professional chauffeurs. 100% private VIP car service."
                distance="870 km"
                duration="PT9H"
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي الرياض إلى مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        الرياض ← مكة VIP
                    </span>
                }
                subtitle="الطريقة المتميزة إلى المدينة المقدسة - نقل VIP خاص ومباشر ١٠٠٪"
                location="٨-٩ ساعات | خاص فقط | سائقون محترفون"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=riyadh-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي الرياض إلى مكة
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

            {/* Introduction & Trust Signals */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">تاكسي فاخر من الرياض إلى مكة</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                عبور ٨٧٠ كم داخل المملكة يتطلب أكثر من مجرد سيارة؛ إنه يتطلب شريك سفر محترف. صُممت خدمة <strong>تاكسي الرياض إلى مكة</strong> لتناسب العائلات ورجال الأعمال الذين يقدّرون الخصوصية والسلامة والراحة.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                لماذا تسافر جواً بينما يمكنك التنقل من الباب إلى الباب في سيارة <strong>جمس يوكن</strong> أو <strong>مرسيدس S-Class</strong> موديل ٢٠٢٦؟ نتولى القيادة الطويلة بينما تستريح أو تعمل، لنوفر لك انتقالاً سلساً من عاصمة الرياض إلى مكة المكرمة.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal
                                    brandName="TaxiServiceKSA Riyadh"
                                    description="The highest-rated intercity transfer provider in the capital region."
                                    metrics={[
                                        { label: 'Long Haul Trips', value: '10k+', icon: Navigation },
                                        { label: 'Safety Index', value: 'Elite', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">أسطول الرحلات الطويلة</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'جمس يوكن دينالي', capacity: '٧ ركاب', luggage: '٥ حقائب' },
                                    { name: 'مرسيدس S-Class VIP', capacity: '٣ ركاب', luggage: '٢ حقيبة' },
                                    { name: 'حافلة فاخرة', capacity: '٢٥ راكباً', luggage: '١٠ حقائب' },
                                    { name: 'مرسيدس سبرينتر', capacity: '١٤ راكباً', luggage: '٦ حقائب' }
                                ].map((car, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-emerald-50/50 transition-colors border border-gray-100">
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
                route="Riyadh to Makkah (The King's Road)"
                isRtl={true}
                perspectives={[
                    {
                        id: 'chauffeur-khalid',
                        targetAudience: 'الكابتن خالد',
                        icon: User,
                        intent: 'إتقان القيادة لمسافات طويلة',
                        description: 'طريق الرياض - مكة أشبه بسباق ماراثون لا عدو سريع. نُجري دائماً فحص سلامة كاملاً من ٢٠ نقطة لسياراتنا الدفع الرباعي قبل بدء هذه الرحلة التي تبلغ ٨٧٠ كم. محطة استراحتنا المفضلة هي محطة المزيرعية بالقرب من منتصف الطريق، لضمان تمكن الركاب من التمدد والاستعادة بشكل مريح.',
                        structuredFeatures: [
                            { label: 'مدى الوقود', value: 'خزان ممتلئ' },
                            { label: 'الخبرة', value: '١٥ عاماً' },
                            { label: 'متوسط السرعة', value: '١٢٠ كم/س' }
                        ],
                        visualContext: 'The endless desert horizon viewed through a clean, tinted VIP SUV window.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

            <MicroSemanticFAQ
                        contextName="الرياض إلى مكة"
                        isRtl={true}
                    faqs={[
                        {
                            question: "كم سعر التاكسي من الرياض إلى مكة؟",
                            shortAnswer: "سعر ثابت (حسب نوع المركبة)",
                            detailedAnswer: "أسعار التاكسي لرحلة ٨٧٠ كم من الرياض إلى مكة ثابتة لتجنب استغلال الأسعار. تختلف الأسعار حسب اختيارك بين سيدان أو SUV أو فان VIP. تواصل معنا للحصول على أحدث الأسعار الموسمية.",
                            perspectives: [
                                { role: 'الفوترة', icon: 'DollarSign', insight: 'تشمل أسعارنا الثابتة الوقود ورسوم الطرق وعدة استراحات للراحة.' }
                            ]
                        },
                        {
                            question: "هل السفر بسيارة من الرياض إلى مكة آمن؟",
                            shortAnswer: "نعم، مع سائقين محترفين.",
                            detailedAnswer: "نعم، إنه آمن للغاية. سائقونا مدربون خصيصاً على القيادة الصحراوية لمسافات طويلة، ونستخدم مركبات بموديلات ٢٠٢٤-٢٠٢٦ حاصلة على أعلى تصنيفات السلامة في المملكة.",
                            perspectives: [
                                { role: 'السلامة', icon: 'Shield', insight: 'جميع سياراتنا على مسار الرياض - مكة مزودة بأنظمة تتبع عبر الأقمار الصناعية.' }
                            ]
                        },
                        {
                            question: "هل يمكننا التوقف للصلاة أو الطعام في الطريق؟",
                            shortAnswer: "نعم، بقدر ما تحتاج من التوقفات.",
                            detailedAnswer: "بالتأكيد. تُصمَّم خدمة السيارة الخاصة من الرياض إلى مكة وفق جدولك الزمني. يمكنك التوقف عند أي محطة ساسكو أو مصلى على طول الطريق السريع في الوقت الذي يناسبك.",
                            perspectives: [
                                { role: 'المرشد', icon: 'Compass', insight: 'نوصي بتوقفين رئيسيين لرحلة تستغرق ٨-٩ ساعات.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Riyadh"
                isRtl={true}
                customLinks={[
                    { name: 'الرياض إلى المدينة المنورة', url: '/routes/riyadh-madinah/', description: 'نقل مباشر من العاصمة إلى المدينة المنورة.' },
                    { name: 'الرياض إلى الدمام', url: '/routes/riyadh-dammam/', description: 'ربط العاصمة بالمنطقة الشرقية.' },
                    { name: 'مكة إلى الرياض', url: '/routes/makkah-riyadh/', description: 'رحلة عودة VIP من المدينة المقدسة إلى الرياض.' }
                ]}
            />
            <RelatedRoutes originSlug="riyadh" currentSlug="riyadh-makkah" title="مسارات أخرى شائعة" />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون مشاركة الرحلة
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لرحلتك التنفيذية <br/> من الرياض إلى مكة</h2>
                    <p className="text-emerald-100/60 text-lg mb-12 max-w-2xl mx-auto italic">&quot;نوفر لك ملاذاً استثنائياً للسفر الطويل في رحلتك الروحية.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/booking/?route=riyadh-makkah">
                            <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto transition-all hover:scale-105 shadow-2xl">
                                احجز رحلتي
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com" className="text-white/60 hover:text-white font-bold underline underline-offset-8 transition-colors">
                            اطلب عرض سعر مخصص
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


