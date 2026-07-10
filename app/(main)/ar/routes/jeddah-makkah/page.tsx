import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Building2, Shield, User, Compass, Info } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';
import PricingTable from '@/components/PricingTable';
import TrainComparison from '@/components/TrainComparison';
import BookingProcess from '@/components/BookingProcess';
import { makkahHotels } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'تاكسي جدة إلى مكة ٢٠٢٦ | نقل VIP خاص | أسعار ثابتة',
    description: 'احجز أفضل تاكسي من جدة إلى مكة لعام ٢٠٢٦. نقل متميز بين المدن مع سائقين محترفين. أسعار ثابتة تبدأ من ٣٠٠ ريال. خدمة VIP من الباب إلى الباب.',
    keywords: ['تاكسي جدة مكة ٢٠٢٦', 'سعر تاكسي جدة مكة', 'سيارة خاصة جدة مكة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/jeddah-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/jeddah-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/jeddah-makkah/',
            'x-default': 'https://taxiserviceksa.com/routes/jeddah-makkah/',
        },
    },
    openGraph: {
        title: 'تاكسي جدة إلى مكة ٢٠٢٦ | نقل VIP خاص',
        description: 'نقل متميز بين المدن مع سائقين محترفين. أسعار ثابتة، خدمة من الباب إلى الباب.',
        url: 'https://taxiserviceksa.com/ar/routes/jeddah-makkah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function JeddahMakkahRoutePageArabic() {
    const routeDetails = [
        { label: 'المسافة', value: '٨٥-٩٥ كم', icon: Navigation },
        { label: 'وقت الرحلة', value: '٦٠-٨٠ دقيقة', icon: Clock },
        { label: 'سعر ٢٠٢٦ الأساسي', value: 'من ٣٠٠ ريال', icon: DollarSign },
        { label: 'الخدمة', value: 'من الباب إلى الباب', icon: CheckCircle2 },
    ];

    const pricingRows = [
        { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar. Perfect for solo or couples.', price: '300', capacity: '3 Pax', isPopular: false },
        { vehicle: 'GMC Yukon XL', description: 'The ultimate VIP experience for families.', price: '600', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Hyundai Staria VIP', description: 'Modern luxury van with captain seats.', price: '350', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Toyota Hiace', description: 'For large groups and heavy luggage.', price: '500', capacity: '11 Pax', isPopular: false },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdRoute
                from="Jeddah"
                to="Makkah"
                description="Book the best online taxi from Jeddah to Makkah. Premium intercity transfer with professional chauffeurs. Fixed rates, door-to-door service, and high-end SUVs."
                distance="90 km"
                duration="70 mins"
            />

            <Hero
                images={['/makkah-kaaba-night.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي جدة إلى مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        نقل VIP لعام ٢٠٢٦
                    </span>
                }
                subtitle="نقل خاص حصري للحجاج والعائلات"
                location="مطار جدة ← مكة | أسعار ثابتة | سائقون معتمدون"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز تاكسي جدة إلى مكة
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            احصل على عرض سعر مخصص
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold tracking-widest">آخر تحديث: أبريل ٢٠٢٦ • أسعار ٢٠٢٦ موثقة</p>
            </Hero>

            {/* إحصائيات المسار */}
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
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight italic">خدمة سيارة خاصة متميزة من جدة إلى مكة</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            استمتع بأعلى معايير النقل البري مع أفضل <strong>خدمة سيارة خاصة من جدة إلى مكة</strong>. نوفر رحلة سلسة وخالية من التوتر من أي موقع في جدة مباشرة إلى فندقك في مكة المكرمة.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            تجنب متاعب المفاوضة على الطريق أو مشاركة الرحلات. تقدم خدمة <strong>تاكسي جدة إلى مكة</strong> أسعاراً ثابتة، وسائقين محترفين، وأسطولاً فاخراً حديثاً مصمماً خصيصاً لراحة الحجاج والمعتمرين.
                        </p>

                        <div className="space-y-4">
                            <EntityTrustSignal
                                brandName="TaxiServiceKSA Jeddah"
                                description="Providing luxury intercity transfers since 2015 with a 99% satisfaction rate."
                                metrics={[
                                    { label: 'Jeddah Reach', value: '100%', icon: MapPin },
                                    { label: 'Verified VIP', value: 'Yes', icon: Shield }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 italic underline decoration-emerald-500 decoration-4">المركبات الموصى بها</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'جمس يوكن XL 2026', capacity: '٧ ركاب', luggage: '٥ حقائب' },
                                { name: 'مرسيدس S-Class VIP', capacity: '٣ ركاب', luggage: '٢ حقيبة' },
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
                                    <Link href="/booking/?route=jeddah-makkah">
                                        <Button size="sm" variant="ghost" className="text-emerald-600 font-bold group-hover:bg-emerald-50"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> واتساب</Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* جدول الأسعار */}
                <PricingTable
                    title="قائمة أسعار ٢٠٢٦: جدة إلى مكة"
                    subtitle="أسعار ثابتة موثقة • بدون رسوم خفية"
                    rows={pricingRows}
                    disclaimer="الأسعار لكل مركبة وليست للفرد. تشمل الأسعار جميع الرسوم والوقود وأجرة السائق. قد تُطبق رسوم إضافية في موسم رمضان والحج."
                />

                {/* مقارنة القطار */}
                <TrainComparison />

                {/* خطوات الحجز */}
                <BookingProcess />

                {/* تعليمات استقبال المطار */}
                <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 my-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-500 font-black tracking-widest text-xs mb-4 inline-block">دليل المطار</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">أين تقابل سائقك في مطار جدة (JED)؟</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                لا تنخدع بالسماسرة غير المرخصين في المطار. يتابع سائقونا رحلتك وسيكونون بانتظارك في صالة الوصول المحددة.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">الصالة ١ (المطار الجديد)</h4>
                                        <p className="text-gray-500 text-sm italic">نقطة اللقاء: خارج بوابة الوصول الدولي (بالقرب من حوض الأسماك الكبير).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">الصالة الشمالية (الدولية)</h4>
                                        <p className="text-gray-500 text-sm italic">نقطة اللقاء: مباشرة خارج بوابة الوصول مع لوحة تحمل اسمك.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-white font-black tracking-tighter text-xl italic">تحذير أمان</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                سيارات الأجرة الرسمية والنقل المحجوز مسبقاً في السعودية منظمة بشكل صارم. لا تقبل أبداً رحلة من أفراد داخل مبنى المطار — فهي غالباً غير مؤمّنة وذات أسعار مبالغ فيها.
                            </p>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                                <p className="text-emerald-400 text-xs font-bold leading-relaxed">
                                    يرسل سائقونا دائماً تفاصيل السيارة وصورتها عبر واتساب قبل ٣٠ دقيقة من وصولك.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoutePerspective
                route="Jeddah to Makkah"
                isRtl={true}
                perspectives={[
                    {
                        id: 'chauffeur-tariq',
                        targetAudience: 'الكابتن طارق',
                        icon: User,
                        intent: 'الكفاءة والسرعة',
                        description: 'تُعد رحلة ٩٠ كم بين جدة ومكة أكثر المسارات ازدحاماً بين المدن في العالم خلال موسم الذروة. نستخدم مراقبة مرورية متقدمة في الوقت الفعلي لتجنب ازدحام الطريق السريع الرئيسي، وغالباً ما نستخدم طريق مكة القديم للدخول السلس دون انقطاع إلى المدينة.',
                        structuredFeatures: [
                            { label: 'حجوزات VIP', value: '+٥٠٠٠' },
                            { label: 'الخبرة', value: '١٥ عاماً' },
                            { label: 'تصنيف السلامة', value: 'فئة الخبراء' }
                        ],
                        visualContext: 'A birds-eye view of the Jeddah-Makkah highway showing moderate traffic.'
                    }
                ]}
            />

            <div className="max-w-4xl mx-auto py-20 px-4">
                <RouteFleetSection />

                <MicroSemanticFAQ
                    contextName="جدة إلى مكة ٢٠٢٦"
                    isRtl={true}
                    faqs={[
                        {
                            question: "كم سعر التاكسي من جدة إلى مكة في ٢٠٢٦؟",
                            shortAnswer: "من ٣٠٠ ريال (ثابت)",
                            detailedAnswer: "في عام ٢٠٢٦، تبدأ أسعارنا من ٣٠٠ ريال للسيدان القياسية (تويوتا كامري) و٦٠٠ ريال لجمس يوكن VIP. هذه أسعار ثابتة تشمل الرسوم ورسوم المطار.",
                            perspectives: [
                                { role: 'الفوترة', icon: 'DollarSign', insight: 'الشفافية قيمتنا الأساسية؛ ما تراه هو ما تدفعه.' }
                            ]
                        },
                        {
                            question: "ما هي أسرع طريقة للوصول إلى مكة من جدة؟",
                            shortAnswer: "سيارة خاصة (من الباب إلى الباب)",
                            detailedAnswer: "بينما يُعد قطار الحرمين سريعاً، غالباً ما تكون خدمة سيارتنا الخاصة الأكثر كفاءة إجمالاً لأنها توفر خدمة من الباب إلى الباب، مما يلغي الحاجة إلى نقل داخل المحطة ورحلات تاكسي إضافية من محطة مكة إلى فندقك.",
                            perspectives: [
                                { role: 'اللوجستيات', icon: 'Navigation', insight: 'توفر خدمة الباب إلى الباب ما معدله ٤٥ دقيقة مقارنة بالنقل عبر محطة القطار.' }
                            ]
                        }
                    ]}
                />
            </div>

            {/* دليل التوصيل الفندقي */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">دليل الفنادق</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">توصيل الفنادق الشهيرة في مكة</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">احجز توصيلاً مباشراً لفندقك المحدد مع نقطة نزول دقيقة يعرفها سائقونا مسبقاً.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/routes/jeddah-to-fairmont-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">فيرمونت كلوك تاور</span>
                        </Link>
                        <Link href="/routes/jeddah-to-pullman-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">بولمان زمزم مكة</span>
                        </Link>
                        <Link href="/routes/jeddah-to-swissotel-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">سويس أوتيل مكة</span>
                        </Link>
                        {makkahHotels.map((hotel) => (
                            <Link
                                key={hotel.slug}
                                href={`/routes/jeddah-to-${hotel.slug}/`}
                                className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors"
                            >
                                <span className="font-bold text-gray-900">{hotel.shortName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="Jeddah"
                isRtl={true}
                customLinks={[
                    { name: 'مكة إلى المدينة', url: '/routes/makkah-madinah/', description: 'تابع رحلة حجك من مكة إلى المدينة المنورة.' },
                    { name: 'جدة إلى الطائف', url: '/routes/jeddah-taif/', description: 'اهرب من الحر إلى مدينة الطائف الجبلية.' }
                ]}
            />
            <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-makkah" title="مسارات أخرى شائعة" />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون مشاركة الرحلة
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">هل أنت مستعد لرحلة مكة VIP لعام ٢٠٢٦؟</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;سافر بكرامة وراحة وخصوصية تامة.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=jeddah-makkah">
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
