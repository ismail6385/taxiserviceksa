import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation, Train, Shield, Briefcase, Compass, User, Building2, Landmark } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';
import PricingTable from '@/components/PricingTable';
import TrainComparison from '@/components/TrainComparison';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
    title: 'تاكسي مكة إلى المدينة ٢٠٢٦ | نقل VIP خاص | أسعار ثابتة',
    description: 'احجز أفضل تاكسي من مكة إلى المدينة لعام ٢٠٢٦. نقل متميز بين المدن مع سائقين محترفين. أسعار ثابتة تبدأ من ٥٥٠ ريال. خدمة VIP من الباب إلى الباب.',
    keywords: ['تاكسي مكة المدينة ٢٠٢٦', 'سعر تاكسي مكة المدينة', 'سيارة خاصة مكة المدينة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/makkah-madinah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/makkah-madinah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/makkah-madinah/',
            'x-default': 'https://taxiserviceksa.com/routes/makkah-madinah/',
        },
    },
    openGraph: {
        title: 'تاكسي مكة إلى المدينة ٢٠٢٦ | نقل VIP خاص',
        description: 'نقل متميز بين المدن المقدسة مع سائقين محترفين. أسعار ثابتة، خدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/makkah-madinah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function MakkahMadinahRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٤٥٠ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٤-٥ ساعات', icon: Clock },
        { label: 'سعر ٢٠٢٦ الأساسي', value: 'من ٥٥٠ ريال', icon: DollarSign },
        { label: 'الخدمة', value: 'من الباب إلى الباب', icon: CheckCircle2 },
    ];

    const pricingRows = [
        { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar. Comfortable for long trips.', price: '400', capacity: '3 Pax', isPopular: false },
        { vehicle: 'GMC Yukon XL', description: 'Maximum stability and comfort for the Hijrah Road.', price: '600', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Hyundai Staria VIP', description: 'Premium van with captain seats and dual AC.', price: '550', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Toyota Hiace', description: 'Large capacity for Umrah groups and luggage.', price: '800', capacity: '11 Pax', isPopular: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdRoute
                from="Makkah"
                to="Madinah"
                description="Premium intercity transfer from Makkah to Madinah. Direct door-to-door VIP car service for families and pilgrims. 450 km journey on Hijrah Road."
                distance="450 km"
                duration="PT5H"
                ratingValue="4.9"
                reviewCount="215"
            />

            <Hero
                images={['/locations/madinah.webp', '/makkah-kaaba-night.webp']}
                h1Text="تاكسي مكة إلى المدينة المتميز"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        طريق الهجرة VIP لعام ٢٠٢٦
                    </span>
                }
                subtitle="نقل متميز بين المدن للحجاج والعائلات"
                location="٤٥٠ كم | نقل خاص ١٠٠٪ فقط | أسعار ٢٠٢٦ موثقة"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=makkah-madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي مكة إلى المدينة
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            عرض سعر مخصص
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold tracking-widest">آخر تحديث: أبريل ٢٠٢٦ • أسعار ٢٠٢٦ موثقة</p>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight italic">أفضل خدمة سيارة خاصة من مكة إلى المدينة</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            يتطلب السفر بين المدينتين المقدستين موثوقية وراحة. توفر خدمة <strong>السيارة الخاصة من مكة إلى المدينة</strong> تجربة سلسة من الباب إلى الباب، مما يتيح لك التركيز على رحلتك الروحية دون القلق بشأن لوجستيات النقل.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            سواء كنت تسافر بمفردك أو مع عائلة كبيرة، يشمل أسطولنا لعام ٢٠٢٦ كل شيء من <strong>جمس يوكن</strong> الرائدة إلى <strong>مرسيدس سبرينتر VIP</strong>، جميعها يقودها سائقون محترفون بزي رسمي.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="bg-emerald-100 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="font-bold text-gray-800">الحجز عبر واتساب - بدون رسوم خفية</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="bg-emerald-100 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="font-bold text-gray-800">متوفر على مدار الساعة وحجز فوري</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 italic underline decoration-emerald-500 decoration-4">الأسطول الموصى به</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'جمس يوكن VIP 2026', capacity: '٧ ركاب', luggage: '٥ حقائب' },
                                { name: 'مرسيدس S-Class 2026', capacity: '٣ ركاب', luggage: '٢ حقيبة' },
                                { name: 'هيونداي ستاريا VIP', capacity: '٧ ركاب', luggage: '٤ حقائب' }
                            ].map((car, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-black text-white p-3 rounded-xl">
                                            <Car className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900">{car.name}</h4>
                                            <p className="text-xs text-gray-400 font-bold">{car.capacity} | {car.luggage}</p>
                                        </div>
                                    </div>
                                    <Link href="/booking/?route=makkah-madinah">
                                        <Button size="sm" variant="ghost" className="text-emerald-600 font-bold group-hover:bg-emerald-50"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> واتساب</Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <PricingTable
                    title="قائمة أسعار ٢٠٢٦: مكة إلى المدينة"
                    subtitle="أسعار ثابتة موثقة • رحلات طريق الهجرة"
                    rows={pricingRows}
                    disclaimer="الأسعار لرحلة مباشرة من فندقك في مكة إلى فندقك في المدينة. تشمل الوقود والرسوم وأجرة السائق. لا رسوم خفية على الأمتعة."
                />

                <TrainComparison
                    route="Makkah to Madinah"
                    taxiPrice="400"
                    trainPrice="150"
                />

                <BookingProcess />

            </section>

            <RoutePerspective
                route="Makkah to Madinah (Hijrah Road)"
                isRtl={true}
                perspectives={[
                    {
                        id: 'chauffeur-omar',
                        targetAudience: 'الكابتن عمر',
                        icon: User,
                        intent: 'السلامة والموثوقية',
                        description: 'طريق الهجرة هو أكثر مسارات الحج ازدحاماً. ننصح دائماً ببدء رحلتك في الصباح الباكر أو بعد الظهر لتجنب شمس منتصف النهار. تُعد سيارات جمس يوكن V8 لدينا الأكثر ثباتاً لهذه المسافة البالغة ٤٥٠ كم، مما يضمن رحلة خالية من الاهتزاز للحجاج المستريحين.',
                        structuredFeatures: [
                            { label: 'تصنيف الثبات', value: '٩.٨/١٠' },
                            { label: 'الخبرة', value: '٩ سنوات' },
                            { label: 'محطات الراحة', value: '٣ محطات رئيسية' }
                        ],
                        visualContext: 'Interior view of a GMC Yukon on the open desert highway.'
                    },
                    {
                        id: 'ops-manager',
                        targetAudience: 'فريق العمليات',
                        icon: Shield,
                        intent: 'ضمان الخدمة',
                        description: 'لعام ٢٠٢٦، وسّعنا عملياتنا في مكة لتشمل مكتب إرسال يعمل على مدار الساعة. هذا يضمن أنه حتى لو كان موعد مغادرتك الساعة ٣:٠٠ صباحاً، يراقب فريقنا وصول رحلتك وحالة استقبالك من الفندق في الوقت الفعلي. ندير حجم حركة الحج بدقة متناهية.',
                        structuredFeatures: [
                            { label: 'الإرسال', value: '٢٤/٧' },
                            { label: 'المراقبة', value: 'الوقت الفعلي' },
                            { label: 'الاحتياط', value: 'جاهز دائماً' }
                        ],
                        visualContext: 'Our central dispatch dashboard showing active Makkah-Madinah transits.'
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">مناطق وأحياء الانطلاق من مكة</h2>
                        <p className="text-gray-600">نوفر خدمة من الباب إلى الباب ١٠٠٪ من جميع مناطق مكة إلى أي فندق في المدينة المنورة.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { zone: 'المنطقة المركزية', detail: 'برج الساعة، جبل عمر، واجهة الحرم', icon: Building2 },
                            { zone: 'العزيزية', detail: 'شائعة لمجموعات العمرة وبعثات الحج', icon: MapPin },
                            { zone: 'كدي والمسفلة', detail: 'فنادق اقتصادية ومحاور نقل', icon: Navigation },
                            { zone: 'النسيم / العوالي', detail: 'مجمعات فنادق سكنية وراقية', icon: Landmark }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-500 transition-all group">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <item.icon className="w-4 h-4 text-emerald-600" /> {item.zone}
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                                <Link href="/booking/" className="mt-4 inline-flex items-center text-[10px] font-black text-emerald-600 hover:underline">
                                    تحقق من الأسعار من {item.zone} ←
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

                <MicroSemanticFAQ
                    contextName="مكة إلى المدينة ٢٠٢٦"
                    isRtl={true}
                    faqs={[
                        {
                            question: "كم سعر التاكسي من مكة إلى المدينة في ٢٠٢٦؟",
                            shortAnswer: "يبدأ من ٥٥٠ ريال",
                            detailedAnswer: "في عام ٢٠٢٦، السعر الثابت للسيدان القياسية ٥٥٠ ريال، ولجمس يوكن VIP ١٠٠٠ ريال. تغطي هذه الأسعار الرحلة الكاملة البالغة ٤٥٠ كم من الباب إلى الباب.",
                            perspectives: [
                                { role: 'خبير التسعير', icon: 'DollarSign', insight: 'تحميك الأسعار الثابتة من تغييرات المسار أو تأخيرات المرور على طريق الهجرة.' },
                                { role: 'مدير العمليات', icon: 'Shield', insight: 'يضمن نموذج تسعيرنا عدم وجود رسوم وقود أو رسوم إضافية أبداً.' }
                            ]
                        },
                        {
                            question: "كم تستغرق الرحلة من مكة إلى المدينة بالسيارة؟",
                            shortAnswer: "٤.٥ إلى ٥ ساعات",
                            detailedAnswer: "تستغرق الرحلة عبر طريق الهجرة (٤٥٠ كم) عادة ٤.٥ إلى ٥ ساعات، حسب حركة المرور وعدد محطات الراحة.",
                            perspectives: [
                                { role: 'وجهة نظر السائق', icon: 'Clock', insight: 'نتوقف عادة في محطات ساسكو أو السعيدي للاستراحة.' },
                                { role: 'مخطط المسار', icon: 'Navigation', insight: 'تساعدنا مراقبة المرور في الوقت الفعلي على تجنب نقاط الدخول المزدحمة إلى المدينة.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations
                currentCity="Makkah"
                isRtl={true}
                customLinks={[
                    { name: 'المدينة إلى مكة', url: '/routes/madinah-makkah/', description: 'مسار الحج العكسي مع توقف الميقات.' },
                    { name: 'جدة إلى مكة', url: '/routes/jeddah-makkah/', description: 'التوصيل الأكثر شيوعاً من المطار إلى المدينة.' }
                ]}
            />
            <RelatedRoutes originSlug="makkah" currentSlug="makkah-madinah" title="مسارات أخرى شائعة" />

            <div className="bg-black py-20 text-center px-4 rounded-[40px] mx-4 mb-12">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون مشاركة الرحلة
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">احصل على عرض سعر لرحلتك لعام ٢٠٢٦ اليوم</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الطريقة الأكثر ثقة للسفر بين المدينتين المقدستين.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=makkah-madinah">
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
        </div>
    );
}
