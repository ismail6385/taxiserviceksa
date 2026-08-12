import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Car, DollarSign, Mountain, ArrowRight, Cloud, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'تاكسي وخدمة شوفير خاص في أبها | استقبال مطار AHB | Taxi Service KSA',
    description: 'خدمة نقل خاص وشوفير تنفيذي متميزة في أبها. استقبال من مطار أبها (AHB) ونقل جبلي متخصص إلى السودة ورجال ألمع. خدمة احترافية للقيادة في المرتفعات.',
    keywords: ['تاكسي أبها VIP', 'شوفير تنفيذي أبها', 'استقبال مطار AHB', 'رحلة إلى السودة VIP', 'سائق مميز أبها'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/abha/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/abha/',
            'ar': 'https://taxiserviceksa.com/ar/locations/abha/',
            'ur': 'https://taxiserviceksa.com/ur/locations/abha/',
            'x-default': 'https://taxiserviceksa.com/locations/abha/',
        },
    },
    openGraph: {
        title: 'تاكسي وخدمة شوفير خاص في أبها | Taxi Service KSA',
        description: 'هل تحتاج نقلاً متميزاً في أبها؟ نوفر رحلات شوفير مريحة إلى السودة، الجبل الأخضر، ومطار أبها.',
        url: 'https://taxiserviceksa.com/ar/locations/abha/',
        type: 'website',
    },
};

export default function AbhaPageArabic() {
    const images = [
        '/hero-slide-4.webp',
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Abha"
                description="نقل احترافي للمرتفعات في أبها. متخصصون في استقبال مطار أبها (AHB)، رحلات جبل السودة، وجولات رجال ألمع التراثية."
                services={[
                    { name: 'استقبال مطار أبها', description: 'استقبال بلوحة اسم في مطار AHB مع متابعة الرحلة الجوية.' },
                    { name: 'نقل جبلي إلى السودة', description: 'نقل آمن إلى أعلى قمة في السعودية.' },
                    { name: 'جولة رجال ألمع التراثية', description: 'رحلات يومية إلى القرية التاريخية الشهيرة.' },
                    { name: 'نقل بين المدن إلى خميس مشيط', description: 'نقل مباشر إلى خميس مشيط ومنطقة عسير.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-4.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي وخدمة شوفير خاص في أبها"
                bookingFormTitle="حجز واتساب لنقل متميز في أبها"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        خدمة شوفير أبها
                    </span>
                }
                subtitle="تميّز المرتفعات في المدينة العالية"
                location="أبها | منطقة عسير | السودة"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Abha%20Airport&dropoff=Selected%20Hotel">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز رحلتك في أبها
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            راسلنا عبر البريد
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" /> ملاحظة رسمية: نتخصص في النقل الجبلي وبين المدن والمطارات المحجوزة مسبقاً. لا نقدّم خدمة الاستيقاف من الشارع المحلية.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">نقل جبلي</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">خدمات النقل في عسير</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                تضاريس أبها جبلية وخلابة، لكنها تتطلب سائقين ماهرين. سواء كنت متجهاً إلى منتزه السودة، أو تزور قرية رجال ألمع التراثية، أو تحتاج نقلاً إلى خميس مشيط، نحن نغطي رحلتك بالكامل.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                نغطي استقبال مطار أبها (AHB) مع متابعة الرحلة الجوية، لضمان انتظار سائقك حتى في حال تأخر رحلتك بسبب الضباب.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Cloud className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">استقبال المطار</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">رحلات السودة</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">خبراء محليون</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current inline-block" /> حجز واتساب</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">أشهر الوجهات</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <Link href="/locations/abha/al-soudah/" className="font-bold text-gray-900 hover:text-primary transition-colors">السودة ←</Link>
                                        <p className="text-sm text-gray-500">أعلى قمة في المملكة. تشتهر بالتلفريك وغابات العرعر.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">رجال ألمع</h4>
                                        <p className="text-sm text-gray-500">القرية التاريخية الملونة. رحلة يوم واحد لا بد منها.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">الجبل الأخضر</h4>
                                        <p className="text-sm text-gray-500">جبل ظفرا. إطلالات ليلية رائعة على المدينة.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="أبها"
                        points={[
                            {
                                topic: "الطقس",
                                commonBelief: "الجو حار.",
                                reality: "أبها باردة وضبابية غالباً، حتى في الصيف. تتطلب القيادة في الضباب خبرة محلية يمتلكها سائقونا.",
                                truthRange: "ضبابي وبارد",
                                factors: ["نصائح الضباب", "السلامة"]
                            },
                            {
                                topic: "تطبيقات النقل",
                                commonBelief: "أوبر متوفر في كل مكان.",
                                reality: "قد تكون تطبيقات النقل غير موثوقة في المناطق الجبلية النائية مثل السودة. السائق المحجوز مسبقاً يضمن عدم تعطلك.",
                                truthRange: "تغطية محدودة",
                                factors: ["مناطق نائية", "الموثوقية"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Abha" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "كم تبعد السودة عن أبها؟",
                        shortAnswer: "25-30 دقيقة",
                        detailedAnswer: "تبعد السودة حوالي 25-30 دقيقة بالسيارة من وسط أبها. الطريق خلاب لكنه متعرج.",
                        perspectives: []
                    },
                    {
                        question: "هل تذهبون إلى خميس مشيط؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نوفر رحلات نقل بين أبها وخميس مشيط، بما في ذلك المدينة العسكرية والمناطق الصناعية.",
                        perspectives: []
                    },
                    {
                        question: "هل رجال ألمع بعيدة؟",
                        shortAnswer: "أكثر من ساعة",
                        detailedAnswer: "نعم، تبعد رجال ألمع حوالي ساعة بالسيارة نزولاً من الجبال. تتضمن طرقاً شديدة الانحدار، لذا فإن السيارة الموثوقة ضرورية.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
