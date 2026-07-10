import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'تاكسي من الدمام إلى مكة | نقل خاص للعمرة | Taxi Service KSA',
    description: 'احجز تاكسي خاص من الدمام إلى مكة لأداء العمرة أو زيارة العائلة. نقل بري طويل المسافة من الباب إلى الباب بسيارة جمس يوكن أو ستاريا مريحة. أسعار ثابتة وسائقون محترفون.',
    keywords: ['تاكسي الدمام مكة', 'تاكسي عمرة من الدمام إلى مكة', 'تاكسي الخبر إلى مكة', 'نقل الدمام مكة', 'تاكسي المنطقة الشرقية إلى مكة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/dammam-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-makkah/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-makkah/',
        },
    },
    openGraph: {
        title: 'تاكسي خاص: الدمام إلى مكة | Taxi Service KSA',
        description: 'نقل بري بين المدن من الدمام إلى مكة بسيارة خاصة مكيفة. مثالي لمعتمري العمرة والعائلات.',
        url: 'https://taxiserviceksa.com/ar/routes/dammam-makkah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function DammamMakkahRoutePageArabic() {
    const images = [
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const routeDetails = [
        { label: 'المسافة', value: '١٬٢٥٠ كم', icon: MapPin },
        { label: 'المدة', value: '١٢ - ١٣ ساعة', icon: Clock },
        { label: 'المركبة', value: 'جمس يوكن / ستاريا', icon: Car },
        { label: 'السعة', value: 'حتى ٧ ركاب', icon: Users },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Dammam to Makkah"
                description="Private long-distance taxi service from Dammam to Makkah for Umrah and family visits. Reliable door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam to Makkah Taxi', description: 'Premium cross-country private transfer with guaranteed fixed rates.' },
                    { name: 'Umrah Transfer', description: 'Direct transfer to the Haram area for pilgrims travelling from the Eastern Province.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage and Umrah supplies.' },
                    { name: 'Hotel Drop-off', description: 'Direct drop-off at any hotel in the Haram or Aziziyah area of Makkah.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الدمام إلى مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        نقل خاص مباشر للعمرة وسفر العائلات
                    </span>
                }
                subtitle="من المنطقة الشرقية إلى المدينة المقدسة | ١٢-١٣ ساعة | خصوصية VIP ١٠٠٪"
                location="خدمة خاصة من الباب إلى الباب - حسب جدولك وراحتك"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز المسار (سعر ثابت)
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            عقد للشركات
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {routeDetails.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-2 p-4">
                            <item.icon className="w-7 h-7 text-primary" />
                            <span className="font-bold text-gray-900 text-lg">{item.value}</span>
                            <span className="text-sm text-gray-500">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">من مدينة إلى مدينة</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                الدمام إلى مكة: رحلة مريحة لأداء العمرة
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                تسافر العائلات والمعتمرون من المنطقة الشرقية بانتظام إلى مكة المكرمة لأداء العمرة أو زيارة الأقارب. وبدلاً من المرور عبر مطار جدة بمحطات توقف ونقل، تأخذك السيارة الخاصة مباشرة من الباب إلى الباب دون أي توقفات أو تبديل وسائل نقل.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                ننظم الرحلة بفترات صلاة وراحة مخطط لها، ويمكننا ترتيب توقف ليلي إذا رغبت في الوصول بنشاط. كل رحلة حجز خاص — فقط عائلتك أو مجموعتك في سيارة جمس يوكن أو هيونداي ستاريا نظيفة ومكيفة.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">خيار المبيت الليلي</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">مساحة واسعة للأمتعة</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سفر عائلي وجماعي</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سعر ثابت</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">أبرز مميزات المسار</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">١</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">مباشرة إلى الحرم</h4>
                                        <p className="text-sm text-gray-500">الاستقبال من أي موقع في الدمام أو الخبر أو الظهران، والتوصيل إلى فندقك بالقرب من الحرم أو في العزيزية.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">٢</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">محطات راحة مخطط لها</h4>
                                        <p className="text-sm text-gray-500">توقفات منتظمة في محطات خدمة الطريق السريع للصلاة والطعام والتزود بالوقود طوال الرحلة.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">٣</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">مرونة في وقت المغادرة</h4>
                                        <p className="text-sm text-gray-500">انطلق في أي وقت يناسبك — يفضّل كثير من المعتمرين المغادرة ليلاً للوصول بحالة نشاط.</p>
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
                        contextName="الدمام إلى مكة"
                        isRtl={true}
                        points={[
                            {
                                topic: "الطيران مقابل القيادة",
                                commonBelief: "الطيران عبر جدة دائماً أسرع.",
                                reality: "غالباً ما تستغرق الرحلة الجوية إلى جدة مع النقل المتصل إلى مكة من ٤ إلى ٥ ساعات من الباب إلى الباب بعد احتساب تسجيل الوصول والأمتعة والنقل عبر قطار الحرمين أو التاكسي. أما السيارة الخاصة المباشرة فتستغرق نحو ١٢-١٣ ساعة لكن دون أي نقل أو انتظار.",
                                truthRange: "يعتمد على الأولويات",
                                factors: ["بدون تنقلات", "الراحة", "حجم المجموعة"]
                            },
                            {
                                topic: "هل هي رحلة قيادة طويلة قبل العمرة؟",
                                commonBelief: "أكثر من ١٢ ساعة وقت طويل جداً قبل أداء مناسك العمرة.",
                                reality: "تسافر معظم العائلات ليلاً وترتاح أثناء القيادة، لتصل إلى مكة جاهزة لأداء العمرة بعد استراحة قصيرة في الفندق. فترات الصلاة مدرجة ضمن جدول الرحلة.",
                                truthRange: "قابلة للتحمل مع السفر الليلي",
                                factors: ["محطات الراحة", "السفر الليلي"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون تاكسي مشترك
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لتاكسي الدمام إلى مكة</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الخيار المفضل للمعتمرين والعائلات الباحثين عن خصوصية تامة في رحلتهم إلى الحرم.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=dammam-makkah">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                احجز سيارة خاصة
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                استفسار عبر البريد
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations
                    currentCity="Dammam"
                    isRtl={true}
                    labels={{
                        title: 'استكشف الوجهات القريبة من الدمام',
                        subtitle: 'روابط سلسة عبر أنحاء المملكة العربية السعودية',
                        viewRoutes: 'عرض المسارات',
                    }}
                    customLinks={[
                        { name: 'الخبر', url: '/locations/al-khobar/', description: 'نقل مباشر بين الدمام والخبر عبر المنطقة الشرقية.' },
                        { name: 'الظهران', url: '/locations/dhahran/', description: 'نقل مباشر بين الدمام والظهران عبر المنطقة الشرقية.' },
                        { name: 'الجبيل', url: '/locations/jubail/', description: 'نقل مباشر بين الدمام والجبيل عبر المنطقة الشرقية.' },
                        { name: 'الهفوف', url: '/locations/hofuf/', description: 'نقل مباشر بين الدمام والهفوف عبر المنطقة الشرقية.' },
                    ]}
                />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-makkah" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                contextName="الدمام إلى مكة"
                isRtl={true}
                faqs={[
                    {
                        question: "كم تستغرق الرحلة من الدمام إلى مكة؟",
                        shortAnswer: "١٢ - ١٣ ساعة",
                        detailedAnswer: "تبلغ المسافة نحو ١٬٢٥٠ كم. في سيارة خاصة مع محطات راحة عادية، يستغرق العبور من ١٢ إلى ١٣ ساعة تقريباً.",
                        perspectives: []
                    },
                    {
                        question: "هل يمكننا التوقف للمبيت في الطريق؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، يفضّل كثير من العملاء السفر ليلاً أو تقسيم الرحلة بتوقف في فندق. أخبرنا عند الحجز وسنخطط المسار وفق التوقف الذي تفضله.",
                        perspectives: []
                    },
                    {
                        question: "هل توصلون بالقرب من الحرم؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نوصلك مباشرة إلى فندقك بالقرب من الحرم أو إلى أي مكان آخر في مكة، بما في ذلك العزيزية والأطراف.",
                        perspectives: []
                    },
                    {
                        question: "هل تقومون بالاستقبال من الخبر أيضاً؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نخدم كامل المنطقة الشرقية بما في ذلك الخبر والدمام والظهران لمسار مكة.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
