import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Mountain, History } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'رحلة خيبر | جولة سياحية في حصون خيبر التاريخية',
    description: 'اكتشف تاريخ خيبر وحصونها القديمة. رحلات يومية من المدينة المنورة والعلا. استكشف الواحات البركانية والحصون.',
    keywords: ['رحلة خيبر', 'سياحة خيبر', 'حصن خيبر', 'توصيل العلا خيبر', 'تاريخ خيبر'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/khayber-fort',
            'ur': 'https://taxiserviceksa.com/ur/locations/khayber-fort',
        }
    },
    openGraph: {
        title: 'جولة خيبر التاريخية',
        description: 'زر حصون خيبر العظيمة والواحات. رحلة عبر التاريخ.',
        url: 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/khayber.webp', alt: 'حصن خيبر' }],
    },
};

export default function KhayberPageArabic() {
    const images = [
        '/locations/alula.webp', // Placeholder
        '/hero-slide-2.webp',
    ];

    const distanceData = [
        { destination: 'المدينة المنورة', distance: '١٧٠ كم', time: '٢ ساعة', route: 'طريق خيبر' },
        { destination: 'العلا', distance: '٢٠٠ كم', time: '٢.٥ ساعة', route: 'طريق العلا' },
    ];

    const faqs = [
        {
            question: "كم تبعد خيبر عن المدينة؟",
            answer: "حوالي ١٧٠ كم شمال المدينة المنورة، تستغرق الرحلة ساعتين تقريباً."
        },
        {
            question: "ماذا يوجد في خيبر؟",
            answer: "تشتهر بحصونها التاريخية القديمة، السدود، والواحات البركانية."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="جولة خيبر التاريخية"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        أرض الحصون
                    </span>
                }
                subtitle="رحلة عبر التاريخ البركاني"
                location="خيبر • المدينة • العلا"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        استكشف واحدة من أقدم الواحات في الجزيرة العربية. حصون خيبر الشامخة وسط الحرات البركانية تروي قصصاً من فجر التاريخ الإسلامي.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            احجز جولة خيبر
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">معالم خيبر</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <History className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">الحصون القديمة</h3>
                            <p className="text-gray-600">القلاع التاريخية التي تشهد على مناعة خيبر.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Mountain className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">الحرات البركانية</h3>
                            <p className="text-gray-600">طبيعة جيولوجية فريدة من الصخور السوداء.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <DistanceTable
                        origin="خيبر"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "المسافات والوصول",
                            subtitle: "موقع استراتيجي",
                            destinationHeader: "المدينة",
                            distanceHeader: "الفاصلة",
                            timeHeader: "الوقت",
                            routeHeader: "الطريق",
                            disclaimer: ""
                        }}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "أسئلة شائعة",
                                subtitle: "معلومات الزيارة",
                                quickAnswer: "الجواب",
                                perspectives: "المزيد",
                                readMore: "+",
                                readLess: "-"
                            }}
                            faqs={[
                                {
                                    question: "هل الرحلة تستحق يوماً كاملاً؟",
                                    shortAnswer: "نعم",
                                    detailedAnswer: "خيبر مكان غني بالتاريخ. يمكن دمجها مع زيارة العلا أو كرحلة نهارية من المدينة.",
                                    perspectives: [{ role: "سياحة", icon: "MapPin", insight: "أفضل وقت للزيارة الشتاء." }]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="خيبر"
                isRtl={true}
                labels={{ title: "وجهات قريبة", subtitle: "استكمل رحلتك", viewRoutes: "التفاصيل" }}
                customLinks={[
                    { name: 'المدينة المنورة', url: '/locations/madinah', description: 'نقطة الانطلاق' },
                    { name: 'العلا', url: '/locations/alula', description: 'تاريخ الأنباط' },
                ]}
            />
        </div>
    );
}
