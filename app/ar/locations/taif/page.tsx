import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Car, ArrowRight, Mountain, Cloud } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'تاكسي الطائف | توصيل من جدة ومكة وجولات سياحية',
    description: 'خدمة تاكسي للطائف من جدة ومكة والمطار. جولات سياحية في الهدا والشفا. استمتع بجو الطائف وسياراتنا الحديثة.',
    keywords: ['تاكسي الطائف', 'توصيل جدة الطائف', 'مشوار الهدا', 'توصيل مطار جدة للطائف', 'سياحة الطائف'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/taif/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/taif/',
            'ar': 'https://taxiserviceksa.com/ar/locations/taif/',
            'ur': 'https://taxiserviceksa.com/ur/locations/taif/',
            'x-default': 'https://taxiserviceksa.com/locations/taif/',
        }
    },
    openGraph: {
        title: 'تاكسي الطائف | رحلات الهدا والشفا',
        description: 'احجز مشوارك للطائف الآن. سيارات عائلية وسائقين محترفين.',
        url: 'https://taxiserviceksa.com/ar/locations/taif/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/taif.webp', alt: 'جبال الطائف' }],
    },
};

export default function TaifPageArabic() {
    const images = [
        '/locations/taif.webp',
        '/hero-slide-3.webp',
        '/hero-slide-1.webp',
    ];

    const distanceData = [
        { destination: 'مكة المكرمة', distance: '٩٠ كم', time: '١ ساعة', route: 'طريق الكر' },
        { destination: 'مطار جدة', distance: '١٧٠ كم', time: '٢.٥ ساعة', route: 'طريق الهدا' },
        { destination: 'الرياض', distance: '٧٨٠ كم', time: '٧-٨ ساعات', route: 'طريق الطائف الرياض' },
    ];

    const faqs = [
        {
            question: "كم سعر المشوار من مطار جدة للطائف؟",
            answer: "يبدأ من ٣٠٠ ريال تقريباً حسب نوع السيارة. المسافة حوالي ١٧٠ كم."
        },
        {
            question: "هل توصلون للهدا والشفا؟",
            answer: "نعم، نوفر جولات سياحية كاملة في الطائف لزيارة الهدا، الشفا، ومزارع الورد."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="خدمة تاكسي الطائف وجولات سياحية"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        عروس المصايف
                    </span>
                }
                subtitle="رحلات الهدا والشفا من جدة ومكة"
                location="الطائف • الهدا • الشفا"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        استمتع بأجواء الطائف الباردة. نوفر توصيل آمن ومريح عبر عقبة الهدا الحلزونية، وجولات لزيارة مزارع الورد وتلفريك الهدا.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            احجز رحلة الطائف
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">لماذا تزور الطائف معنا؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Mountain className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">طريق الهدا</h3>
                            <p className="text-gray-600">سائقون محترفون في الطرق الجبلية والمنعطفات.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Cloud className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">الجو اللطيف</h3>
                            <p className="text-gray-600">اهرب من حرارة جدة ومكة واستمتع بالبرودة.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Car className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">سيارات عائلية</h3>
                            <p className="text-gray-600">فانات واسعة للعائلات وحقائب المصطافين.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="الطائف"
                        isRtl={true}
                        labels={{
                            title: "نصائح زيارة الطائف",
                            subtitle: "أفضل الأوقات",
                            summerTitle: "الصيف (الموسم)",
                            summerText: "ذروة الموسم السياحي. الفاكهة (البرشومي، الرمان) متوفرة. الجو معتدل نهاراً وبارد ليلاً.",
                            summerTag: "موسم الفاكهة",
                            winterTitle: "الشتاء",
                            winterText: "بارد جداً وضبابي. تجربة شتوية مميزة لكن يجب الحذر في الطريق وقت الضباب.",
                            winterTag: "ضباب وبرد"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="قلب الطائف"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "المسافات من الطائف",
                                subtitle: "زمن الرحلة المتوقع",
                                destinationHeader: "الوجهة",
                                distanceHeader: "المسافة",
                                timeHeader: "الوقت",
                                routeHeader: "الطريق",
                                disclaimer: "*قد يغلق طريق الهدا وقت الأمطار."
                            }}
                        />
                    </div>

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "أسئلة شائعة",
                                subtitle: "معلومات رحلة الطائف",
                                quickAnswer: "الجواب",
                                perspectives: "تفاصيل",
                                readMore: "المزيد",
                                readLess: "أقل"
                            }}
                            faqs={[
                                {
                                    question: "هل طريق الهدا آمن؟",
                                    shortAnswer: "نعم",
                                    detailedAnswer: "الطريق مزدوج ومضاء بالكامل. سائقونا معتادون عليه. يغلق أحياناً احترازياً عند الأمطار الغزيرة.",
                                    perspectives: [{ role: "السلامة", icon: "Shield", insight: "نتابع حالة الطرق مع أمن الطرق." }]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="الطائف"
                isRtl={true}
                labels={{ title: "وجهات قريبة", subtitle: "مدن مجاورة", viewRoutes: "التفاصيل" }}
                customLinks={[
                    { name: 'مكة المكرمة', url: '/locations/makkah', description: 'ساعة واحدة فقط' },
                    { name: 'جدة', url: '/locations/jeddah', description: 'توصيل للمطار' },
                ]}
            />
        </div>
    );
}
