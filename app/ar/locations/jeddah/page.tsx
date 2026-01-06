import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Car, ArrowRight, Star, Shield, Building2, Waves } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import TravelConsensus from '@/components/seo/TravelConsensus';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'تاكسي جدة | توصيل مطار الملك عبدالعزيز ومكة المكرمة',
    description: 'خدمة تاكسي في جدة. توصيل من الصالة ١ والصالة الشمالية لمكة المكرمة والمدينة. استقبال في المطار وتوصيل للفنادق.',
    keywords: ['تاكسي جدة', 'توصيل مطار جدة', 'تاكسي الحرم', 'توصيل مكة', 'استقبال المطار'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/jeddah/',
            'x-default': 'https://taxiserviceksa.com/locations/jeddah/',
        }
    },
    openGraph: {
        title: 'تاكسي جدة | توصيل مطار الملك عبدالعزيز',
        description: 'احجز تاكسي من مطار جدة إلى مكة أو المدينة. سيارات حديثة وسائقين محترفين.',
        url: 'https://taxiserviceksa.com/ar/locations/jeddah/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'كورنيش جدة' }],
    },
};

export default function JeddahPageArabic() {
    const services = [
        { name: 'استقبال المطار', description: 'من الصالة 1 والصالة الشمالية', icon: Plane },
        { name: 'توصيل لمكة', description: 'مباشر للحرم أو الفندق (٧٥ دقيقة)', icon: Car },
        { name: 'جولات البلد', description: 'زيارة جدة التاريخية والكورنيش', icon: Waves },
        { name: 'رجال الأعمال', description: 'سيارات فارهة للاجتماعات', icon: Building2 },
    ];

    const images = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const faqs = [
        {
            question: "أين أقابل السائق في مطار جدة؟",
            answer: "في الصالة ١ نقابلكم عند 'الأكواريوم'. في الصالة الشمالية عند البوابة ٢."
        },
        {
            question: "كم يستغرق الطريق من جدة لمكة؟",
            answer: "حوالي ٧٥ دقيقة بالسيارة. نوصلكم لباب الفندق مباشرة."
        },
        {
            question: "هل السيارات مكيفة؟",
            answer: "نعم، جميع سياراتنا (جمس، كامري، ستاريا) مكيفة ونظيفة لضمان راحتكم."
        }
    ];

    const distanceData = [
        { destination: 'مكة المكرمة', distance: '٩٥ كم', time: '١ ساعة ١٥ د', route: 'طريق الحرمين' },
        { destination: 'المدينة المنورة', distance: '٤١٥ كم', time: '٤ ساعات', route: 'طريق ١٥' },
        { destination: 'الطائف', distance: '١٧٠ كم', time: '٢ ساعة ١٥ د', route: 'طريق الهدا' },
        { destination: 'أبحر', distance: '٣٥ كم', time: '٤٠ دقيقة', route: 'طريق الكورنيش' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="تاكسي جدة وتوصيل المطار ومكة"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        بوابة مكة
                    </span>
                }
                subtitle="خدمة استقبال مطار الملك عبدالعزيز"
                location="جدة • مكة • المدينة"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        نغنيك عن عناء الانتظار والزحام. استقبال خاص من المطار وتوصيل مباشر لمكة المكرمة والمدينة بسيارات حديثة.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            احجز تاكسي المطار
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">خدماتنا في عروس البحر الأحمر</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="جدة"
                        isRtl={true}
                        labels={{
                            title: "نصائح السفر في جدة",
                            subtitle: "الطقس والتنقلات",
                            summerTitle: "الصيف والرطوبة",
                            summerText: "الرطوبة عالية جداً. تجنب الانتظار خارج الصالات. احجز سيارة لتنتظرك بالمكيف.",
                            summerTag: "رطوبة عالية",
                            winterTitle: "الشتاء والربيع",
                            winterText: "أجواء رائعة للكورنيش والبلد. أفضل وقت لزيارة جدة التاريخية.",
                            winterTag: "موسم السياحة"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="مطار جدة (KAIA)"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "المسافات من المطار",
                                subtitle: "أوقات الوصول المتوقعة",
                                destinationHeader: "الوجهة",
                                distanceHeader: "المسافة",
                                timeHeader: "الوقت",
                                routeHeader: "الطريق",
                                disclaimer: "*يعتمد على زحام كوبري الحرمين."
                            }}
                        />
                    </div>

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "حقائق النقل في جدة",
                                subtitle: "القطار أم التاكسي؟",
                                beliefLabel: "المعتقد",
                                realityLabel: "الواقع",
                                rangeLabel: "التقدير",
                                factorsLabel: "عوامل"
                            }}
                            points={[
                                {
                                    topic: "قطار الحرمين",
                                    commonBelief: "أسرع دائماً.",
                                    reality: "سريع (٥٥ دقيقة) لكن الوصول للمحطة والخروج منها يضيف وقتاً. التاكسي يوصلك لباب الفندق مباشرة.",
                                    truthRange: "حسب الموقع",
                                    factors: ["الأمتعة", "عدد الأشخاص"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "أسئلة شائعة",
                                subtitle: "معلومات هامة للمسافرين",
                                quickAnswer: "الجواب",
                                perspectives: "تفاصيل",
                                readMore: "المزيد",
                                readLess: "أقل"
                            }}
                            faqs={[
                                {
                                    question: "هل يمكنني لبس الإحرام في التاكسي؟",
                                    shortAnswer: "نعم",
                                    detailedAnswer: "معظم الحجاج يصلون بإحرامهم. سياراتنا واسعة ومكيفة لراحتكم.",
                                    perspectives: [{ role: "السائق", icon: "Shield", insight: "نحافظ على برودة السيارة للمحرمين." }]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="جدة"
                isRtl={true}
                labels={{ title: "وجهات أخرى", subtitle: "توصيل لمدن المملكة", viewRoutes: "التفاصيل" }}
                customLinks={[
                    { name: 'مكة المكرمة', url: '/locations/makkah', description: 'توصيل للعمرة' },
                    { name: 'المدينة المنورة', url: '/locations/madinah', description: 'زيارة المسجد النبوي' },
                    { name: 'الطائف', url: '/locations/taif', description: 'مصيف المملكة' }
                ]}
            />
        </div>
    );
}
