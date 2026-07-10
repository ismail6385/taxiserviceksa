
import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, CloudSun, ArrowRight, User, Compass, Shield, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'تاكسي جدة إلى الطائف | نقل جبل الهدا | سيارة خاصة | Taxi Service KSA',
    description: 'احجز أفضل تاكسي أونلاين من جدة إلى الطائف. استمتع برحلة خلابة عبر جبل الهدا في سيارة خاصة. نقل موثوق إلى مدينة الطائف والمنتجعات والمواقع التاريخية.',
    keywords: ['تاكسي جدة الطائف', 'سعر تاكسي جدة الطائف', 'تاكسي جبل الهدا', 'تلفريك الطائف', 'سيارة مع سائق جدة الطائف', 'نقل خاص جدة الطائف'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/jeddah-taif/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/jeddah-taif/',
            'ar': 'https://taxiserviceksa.com/ar/routes/jeddah-taif/',
            'x-default': 'https://taxiserviceksa.com/routes/jeddah-taif/',
        },
    },
    openGraph: {
        title: 'تاكسي جدة إلى الطائف | نقل جبل الهدا الخلاب',
        description: 'رحلة خلابة عبر جبل الهدا في سيارة خاصة مع سائق محترف. نقل موثوق إلى الطائف والمنتجعات.',
        url: 'https://taxiserviceksa.com/ar/routes/jeddah-taif/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function JeddahTaifRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '١٧٠ كم', icon: Navigation },
        { label: 'مدة الرحلة', value: '٢ - ٢.٥ ساعة', icon: Clock },
        { label: 'المسار', value: 'جبل الهدا', icon: Mountain },
        { label: 'الخدمة', value: 'من الباب إلى الباب', icon: CheckCircle2 },
    ];



    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Jeddah to Taif"
                description="Professional VIP private car service for Jeddah to Taif. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Jeddah to Taif Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}

                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="تاكسي جدة إلى الطائف"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        جدة ← الطائف VIP
                    </span>
                }
                subtitle="الهروب إلى برودة الجبل | طريق الهدا الخلاب"
                location="ساعتان | حجز عبر واتساب | سائقون محترفون"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-taif">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي جدة إلى الطائف
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-6 font-display uppercase tracking-tight">أفضل خدمة سيارة خاصة من جدة إلى الطائف</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                اهرب من رطوبة جدة إلى هواء الطائف الجبلي المنعش. تُعد <strong>خدمة تاكسي جدة إلى الطائف</strong> الخيار المفضل للعائلات الباحثة عن صعود آمن ومريح عبر طريق جبل الهدا المذهل.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                لماذا تقود الطرق المتعرجة بنفسك بينما يمكنك الاسترخاء في <strong>جمس يوكن VIP</strong>؟ سائقونا ذوو خبرة عالية بالتضاريس الجبلية، مما يضمن أن تكون رحلتك إلى مدينة الورد ممتعة بقدر متعة الوجهة نفسها.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EntityTrustSignal
                                    brandName="TaxiServiceKSA Jeddah"
                                    description="Specializing in mountain transfers and summer tours since 2015."
                                    metrics={[
                                        { label: 'Mountain Ascents', value: '5k+', icon: Mountain },
                                        { label: 'Safety Rating', value: 'Elite', icon: Shield }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 font-display">أسطول جاهز للجبال</h3>
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
                route="Jeddah to Taif (Al Hada)"
                isRtl={true}
                labels={{
                    title: 'جدة إلى الطائف: وجهات نظر الرحلة',
                    subtitle: 'تخطيط مسار مخصص حسب هدف رحلتك',
                }}
                perspectives={[
                    {
                        id: 'chauffeur-mansour',
                        targetAudience: 'الكابتن منصور',
                        icon: User,
                        intent: 'الراحة ومشاهدة المعالم',
                        description: 'القيادة إلى الطائف ليست فقط عن الوصول؛ بل عن المناظر على الطريق. أنصح دائماً بطريق الهدا بدلاً من طريق السيل لجماله. أقود جمس يوكن تحديداً لهذا الصعود لأن محركها V8 القوي يجعل التسلق الحاد يبدو سهلاً لركابي.',
                        structuredFeatures: [
                            { label: 'درجة الصعود', value: 'سلس' },
                            { label: 'الخبرة', value: '١٢ عاماً' },
                            { label: 'توقفات التصوير', value: 'متضمنة' }
                        ],
                        visualContext: 'منظر بانورامي لطريق الهدا المتعرج مع سيارة SUV فاخرة في المقدمة.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

            <MicroSemanticFAQ
                        contextName="جدة إلى الطائف"
                    isRtl={true}
                    labels={{
                        title: 'إجابات الخبراء: جدة إلى الطائف',
                        subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                        quickAnswer: 'إجابة سريعة',
                        perspectives: 'وجهات نظر',
                        readMore: 'اقرأ التفاصيل الكاملة',
                        readLess: 'عرض أقل',
                    }}
                    faqs={[
                        {
                            question: "كم تستغرق رحلة التاكسي من جدة إلى الطائف؟",
                            shortAnswer: "من ساعتين إلى ساعتين ونصف تقريباً",
                            detailedAnswer: "تغطي الرحلة مسافة ١٧٠ كم وتستغرق عادة حوالي ساعتين. إذا اخترت طريق الهدا الخلاب، فقد تستغرق وقتاً أطول قليلاً بسبب منعطفات الجبل، خاصة خلال عطلة نهاية الأسبوع.",
                            perspectives: [
                                { role: 'السائق', icon: 'Clock', insight: 'ننصح بالمغادرة باكراً صباح الجمعة لتجنب ازدحام نهاية الأسبوع.' }
                            ]
                        },
                        {
                            question: "كم سعر التاكسي من جدة إلى الطائف؟",
                            shortAnswer: "احجز عبر واتساب لمعرفة السعر",
                            detailedAnswer: "أسعارنا لرحلة جدة إلى الطائف ثابتة حسب نوع المركبة. سواء كنت متجهاً إلى منتجع في الهدا أو إلى مدينة الطائف، ستحصل على سعر إجمالي شفاف مسبقاً.",
                            perspectives: [
                                { role: 'الفوترة', icon: 'DollarSign', insight: 'أسعارنا الثابتة تشمل رسوم طريق الجبل والصعود حتى المنتجعات.' }
                            ]
                        },
                        {
                            question: "هل تقدمون توقفات عند سوق فاكهة الهدا؟",
                            shortAnswer: "نعم، توقف اختياري بالكامل",
                            detailedAnswer: "نعم! يستمتع كثير من ركابنا بالتوقف عند سوق الفاكهة الشهير على الجبل. فقط أخبر سائقنا، وسنتوقف لتسوقك المحلي دون أي رسوم إضافية.",
                            perspectives: [
                                { role: 'المرشد', icon: 'Compass', insight: 'التين والعنب المحلي في أفضل حالاته في أواخر الصيف.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Jeddah"
                isRtl={true}
                labels={{
                    title: 'اكتشف وجهات قريبة من جدة',
                    subtitle: 'اتصال سلس عبر أنحاء السعودية',
                    viewRoutes: 'عرض المسارات',
                }}
                customLinks={[
                    { name: 'جدة إلى مكة', url: '/ar/routes/jeddah-makkah/', description: 'نقل مباشر إلى منطقة المسجد الحرام.' },
                    { name: 'جدة إلى المدينة المنورة', url: '/routes/jeddah-madinah/', description: 'نقل سريع إلى مدينة الرسول ﷺ.' },
                    { name: 'الطائف إلى مكة', url: '/routes/makkah-taif/', description: 'زر مكة المكرمة من جبال الطائف.' }
                ]}
            />
            <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-taif" title="مسارات أخرى شائعة" />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-t-[4rem]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">اهرب إلى الجبال</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">استمتع بأجمل رحلة برية في المملكة مع خدمة تاكسي VIP من جدة إلى الطائف.</p>
                    <Link href="/booking/?route=jeddah-taif">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all hover:scale-105">
                            احصل على عرض سعر لرحلتك إلى الطائف
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


