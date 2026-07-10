
import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, Building2, User } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import FreshnessStatus from '@/components/seo/FreshnessStatus';
import TLDRSummary from '@/components/seo/TLDRSummary';
import RoutePerspective from '@/components/seo/RoutePerspective';

export const metadata: Metadata = {
    title: 'تاكسي جدة إلى الرياض ٢٠٢٦ | سيارة خاصة (٩٥٠ كم) | Taxi Service KSA',
    description: 'احجز أفضل تاكسي من جدة إلى الرياض أونلاين. رحلة مباشرة بين المدن تستغرق ٩ إلى ١٠ ساعات عبر السعودية. أسعار ثابتة، سيارات جمس يوكن VIP، وخدمة من الباب إلى الباب.',
    keywords: ['تاكسي جدة الرياض', 'سعر تاكسي من جدة الى الرياض', 'سيارة خاصة جدة الرياض', 'تاكسي من جدة الى الرياض', 'استئجار سيارة جدة الرياض', 'تاكسي بين المدن السعودية'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/jeddah-riyadh/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/jeddah-riyadh/',
            'ar': 'https://taxiserviceksa.com/ar/routes/jeddah-riyadh/',
            'x-default': 'https://taxiserviceksa.com/routes/jeddah-riyadh/',
        },
    },
    openGraph: {
        title: 'تاكسي جدة إلى الرياض ٢٠٢٦ | سيارة خاصة VIP',
        description: 'رحلة مباشرة بين المدن مع سائقين محترفين. أسعار ثابتة وخدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/jeddah-riyadh/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function JeddahRiyadhRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٩٥٠ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٩ - ١٠ ساعات', icon: Clock },
        { label: 'المسار', value: 'الطريق السريع ٤٠', icon: MapPin },
        { label: 'الخدمة', value: '٢٤/٧ من الباب إلى الباب', icon: CheckCircle2 },
    ];

    const routeImages = ['/locations/riyadh/riyadh-skyline.webp', '/hero-slide-4.webp'];



    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Jeddah to Riyadh"
                description="Professional VIP private car service for Jeddah to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Jeddah to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}

                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={routeImages}
                h1Text="تاكسي جدة إلى الرياض"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        جدة ← الرياض VIP
                    </span>
                }
                subtitle="خدمة سائق خاص عبر المملكة"
                location="٩٥٠ كم | حجز عبر واتساب | من الباب إلى الباب"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-riyadh">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز هذا المسار
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            استفسار عبر البريد للسعر
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* ملخص سريع */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="١٥ مارس ٢٠٢٦" />
                    <TLDRSummary
                        title="ملخص تاكسي جدة إلى الرياض"
                        summary="البديل الأمثل عن الطيران. توفر خدمة التاكسي الخاص لدينا من جدة إلى الرياض رحلة مباشرة بمسافة ٩٥٠ كم بدون أوقات انتظار في المطار وبخصوصية تامة للعمل أو الراحة."
                        points={[
                            "خدمة كاملة من الباب إلى الباب من منزلك أو فندقك في جدة إلى الرياض",
                            "سيارات جمس يوكن خاصة متوفرة - مثالية للانتقال ونقل العائلات",
                            "توقف في أي وقت للاستراحة في محطات ساسكو المميزة",
                            "لا حدود للأمتعة - مثالية لنقل الأغراض الشخصية",
                            "سائقون مرخصون ولديهم معرفة عميقة بمسار الطريق السريع ٤٠"
                        ]}
                        pricing="الحجز عبر واتساب"
                        duration="٩ - ١٠ ساعات"
                    />
                </div>
            </section>

            {/* قسم تفاصيل المسار */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">معلومات المسار</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">أفضل حجز أونلاين من جدة إلى الرياض</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            حجز <strong>تاكسي جدة إلى الرياض</strong> أونلاين هو الطريقة الأكثر كفاءة للسفر عبر البلاد. نتجاوز طوابير التفتيش الأمني في المطار ونوفر <strong>استئجار سيارة مباشر</strong> من ساحل البحر الأحمر إلى العاصمة.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* منظور المسار */}
                    <div className="mb-16">
                        <RoutePerspective
                            route="Jeddah to Riyadh"
                            isRtl={true}
                            perspectives={[
                                {
                                    id: "business",
                                    targetAudience: "الأعمال والتنفيذيون",
                                    icon: Briefcase,
                                    intent: "الإنتاجية والخصوصية",
                                    description: "تجاوز إجراءات المطار التي تستغرق ٤ ساعات. تتيح لك سيارة جمس يوكن لدينا مكتباً متنقلاً على عجلات، بخصوصية وراحة للاستعداد لاجتماعاتك في الرياض.",
                                    structuredFeatures: [
                                        { label: "الخصوصية", value: "زجاج مظلل" },
                                        { label: "شحن الهاتف", value: "متعدد النقاط" },
                                        { label: "الراحة", value: "مقاعد تنفيذية" }
                                    ],
                                    visualContext: "Spacious GMC interior."
                                },
                                {
                                    id: "family",
                                    targetAudience: "انتقال العائلات",
                                    icon: User,
                                    intent: "الانتقال والأمتعة",
                                    description: "تنتقلون بين المدن؟ تفرض شركات الطيران رسوماً باهظة على الأمتعة الزائدة. سياراتنا الرياضية متعددة الاستخدامات تتسع لـ٧ ركاب وحتى ١٠ حقائب، مما يجعلها الطريقة الأكثر جدوى اقتصادياً للانتقال.",
                                    structuredFeatures: [
                                        { label: "الأمتعة", value: "سعة كبيرة" },
                                        { label: "السلامة", value: "مقاعد أطفال متوفرة" },
                                        { label: "المرونة", value: "توقف حسب الحاجة" }
                                    ],
                                    visualContext: "Large luggage capacity."
                                }
                            ]}
                        />
                    </div>

                    {/* قسم المقارنة */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Plane className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">جدة إلى الرياض: الطيران مقابل السيارة الخاصة</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">رحلة طيران تجارية</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold ml-2">✕</span>
                                        <span>الوقت الإجمالي: ~٥ ساعات (الازدحام إلى مطار جدة + ساعتان تسجيل + ساعة ونصف طيران + ازدحام إلى وسط الرياض)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold ml-2">✕</span>
                                        <span>الأمتعة: حدود صارمة بـ٢٣ كجم لمعظم الدرجات</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold ml-2">✕</span>
                                        <span>الخصوصية: صالات ومقصورات مزدحمة وصاخبة</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">تاكسي خاص (نقل تنفيذي)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>الراحة: من الباب إلى الباب، بدون الحاجة لحافلة المطار</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>الحرية: أمتعة غير محدودة في أسطولنا الكبير من جمس يوكن</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>الإنتاجية: بيئة هادئة وخاصة طوال الرحلة</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* الجدول الزمني للرحلة */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-white" />
                            الجدول الزمني لرحلة ٩٥٠ كم
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">١</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">الانطلاق من جدة</div>
                                    <p className="text-gray-300 text-sm">يستقبلك السائق من عنوانك المحدد في الوقت الذي تختاره.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">٢</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">عبور الجبال إلى الطائف</div>
                                    <p className="text-gray-300 text-sm">تسلق العقبة ذات المناظر الخلابة قبل الوصول إلى هضبة وسط الجزيرة العربية.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">٣</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">استراحة الغداء في منتصف الطريق</div>
                                    <p className="text-gray-300 text-sm">توقف عند محطة ساسكو مميزة لوجبة الطعام والصلاة.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">٤</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">الوصول إلى العاصمة الرياض</div>
                                    <p className="text-gray-300 text-sm">توصيل مباشر إلى فندقك أو مقر عملك في الرياض.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* قسم الأسعار */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">أسعار ثابتة بين المدن</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            أسعار تاكسي جدة إلى الرياض
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">سيدان تنفيذية</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">سعر قياسي</div>
                            <p className="text-gray-500 text-sm">٤ ركاب / حقيبتان</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">الأكثر طلباً بين المدن</div>
                            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">جمس يوكن XL / تاهو</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">سعر تنفيذي</div>
                            <p className="text-gray-500 text-sm">٧ ركاب / ١٠ حقائب</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Briefcase className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">فان عائلي</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">سعر جماعي</div>
                            <p className="text-gray-500 text-sm">٧-٩ ركاب</p>
                        </div>
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jeddah" isRtl={true} />
                <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-riyadh" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                        contextName="جدة إلى الرياض"
                isRtl={true}
                faqs={[
                    {
                        question: "كم تستغرق رحلة التاكسي من جدة إلى الرياض؟",
                        shortAnswer: "٩ - ١٠ ساعات.",
                        detailedAnswer: "المسافة من جدة إلى الرياض حوالي ٩٥٠ كم. حسب حالة الطريق وعدد محطات الاستراحة، يكون إجمالي وقت الرحلة عادة بين ٩ و١٠ ساعات.",
                        perspectives: []
                    },
                    {
                        question: "ما هو سعر التاكسي من جدة إلى الرياض؟",
                        shortAnswer: "أسعار ثابتة وميسورة بين المدن.",
                        detailedAnswer: "نقدم أسعاراً ثابتة للمركبة بالكامل. لمسافة طويلة كهذه، يُعد جمس يوكن خيارنا الأكثر شعبية بفضل راحته الفائقة وسعته للأمتعة عند انتقال العائلات.",
                        perspectives: []
                    },
                    {
                        question: "هل من الأفضل الطيران أم التاكسي من جدة إلى الرياض؟",
                        shortAnswer: "التاكسي أفضل للأمتعة والخصوصية.",
                        detailedAnswer: "بينما تكون الرحلة الجوية سريعة، بمجرد احتساب أوقات الانتظار في المطار والتنقل بين الصالات، يصبح التاكسي الخاص بديلاً تنافسياً من الباب إلى الباب، خاصة لمن ينقلون أغراضهم أو يسافرون في مجموعات.",
                        perspectives: []
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        احصل على عرض سعر لتاكسي جدة إلى الرياض
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        استمتع بتجربة النقل بين المدن براحة متميزة. سائقون محترفون، سيارات VIP، وأسعار ثابتة لرحلتك البالغة ٩٥٠ كم.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=jeddah-riyadh">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                الحجز عبر واتساب (سعر ثابت)
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                استفسار عبر البريد
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}


