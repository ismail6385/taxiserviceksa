import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'تاكسي الدمام إلى البحرين | نقل VIP عبر الحدود | Taxi Service KSA',
    description: 'اطلب عرض سعر مميز لرحلة من الدمام إلى البحرين. نقل VIP موثوق عبر الحدود، سيارات دفع رباعي مريحة، وخدمة من الباب إلى الباب في جميع أنحاء الخليج.',
    keywords: ['تاكسي الدمام إلى البحرين', 'نقل الدمام البحرين', 'تاكسي عبور الحدود السعودية', 'نقل VIP الدمام البحرين'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/dammam-bahrain/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-bahrain/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-bahrain/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-bahrain/',
        },
    },
    openGraph: {
        title: 'تاكسي الدمام إلى البحرين | نقل VIP عبر الحدود | Taxi Service KSA',
        description: 'اطلب عرض سعر مميز لرحلة من الدمام إلى البحرين. نقل VIP موثوق عبر الحدود، سيارات دفع رباعي مريحة، وخدمة من الباب إلى الباب في جميع أنحاء الخليج.',
        url: 'https://taxiserviceksa.com/ar/routes/dammam-bahrain/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function DammamBahrainRoutePageArabic() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Dammam to Bahrain"
                description="Professional VIP private car service for Dammam to Bahrain. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam to Bahrain Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الدمام إلى البحرين"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        خدمة عبور الحدود الخليجية
                    </span>
                }
                subtitle="نقل VIP سلس: من الدمام إلى البحرين"
                location="خدمة من الباب إلى الباب"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            حجز عبر واتساب
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Dammam%20to%20Bahrain">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            استفسار عبر البريد الإلكتروني
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">حدود دولية</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                الطريقة المتميزة للسفر من الدمام إلى البحرين
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                يُعد السفر بين الدمام والبحرين عبر الطريق البري خياراً شائعاً للعائلات ورجال الأعمال ومقيمي دول الخليج. تبلغ المسافة نحو ٩٠ كم، وتستغرق الرحلة عادة من ١ إلى ٣ ساعات.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                تجنّب عناء طوابير المطار وقيود الأمتعة الصارمة. يتولى سائقونا المحترفون إجراءات عبور الحدود الورقية، وتأمين المركبة، والتنقل خلال الرحلة بينما تسترخي في سيارة دفع رباعي واسعة.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">المساعدة عند الحدود</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">١-٣ ساعات رحلة</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">من الباب إلى الباب</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">راحة VIP</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">أبرز مراحل الرحلة</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">خدمة سلسة من الباب إلى الباب</h4>
                                        <p className="text-sm text-gray-500">نستقبلك من موقعك الدقيق في الدمام ونوصلك مباشرة إلى وجهتك في البحرين.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">إجراءات حدودية مخصصة</h4>
                                        <p className="text-sm text-gray-500">سائقونا لديهم خبرة في حدود دول الخليج، ويساعدونك على اجتياز إجراءات جوازات السفر بسرعة وسلاسة.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">توقفات راحة عند الطلب</h4>
                                        <p className="text-sm text-gray-500">خذ استراحة متى شئت. نتوقف عند محطات خدمة نظيفة على الطريق السريع للاستراحة وتناول الطعام والصلاة.</p>
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
                        contextName="الدمام إلى البحرين"
                        isRtl={true}
                        labels={{
                            title: 'تحقّق من حقائق الرحلة: الدمام إلى البحرين',
                            subtitle: 'إجماع الخبراء حول أوقات السفر والتكاليف استناداً إلى بيانات مسافرين حقيقية',
                            beliefLabel: 'التقدير الشائع',
                            realityLabel: 'الواقع الفعلي',
                            rangeLabel: 'النطاق الحقيقي الآمن',
                            factorsLabel: 'العوامل المؤثرة'
                        }}
                        points={[
                            {
                                topic: "التأشيرات والهوية",
                                commonBelief: "فقط اركب واذهب.",
                                reality: "يجب أن يكون لديك جواز سفر ساري المفعول، وإقامة أو هوية خليجية، والتأشيرات المناسبة حسب جنسيتك. يساعدك السائق لكنه لا يستطيع إصدار التأشيرات.",
                                truthRange: "مسؤولية المسافر",
                                factors: ["جواز سفر ساري", "تأشيرة خليجية"]
                            },
                            {
                                topic: "الأسعار",
                                commonBelief: "إنها مكلفة للمجموعات.",
                                reality: "بالنسبة للعائلات أو المجموعات من ٤ إلى ٦ أشخاص، غالباً ما يكون النقل الخاص VIP بسيارة دفع رباعي أرخص من شراء عدة تذاكر طيران.",
                                truthRange: "فعّال من حيث التكلفة",
                                factors: ["احجز عبر واتساب لمزيد من التفاصيل", "بدون رسوم أمتعة"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">وجهات محددة في البحرين من الدمام</h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-bahrain-airport-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            مطار الدمام إلى مطار البحرين
                        </Link>
                        <Link href="/routes/dammam-airport-to-manama-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            مطار الدمام إلى المنامة
                        </Link>
                        <Link href="/routes/dammam-airport-to-muharraq-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            مطار الدمام إلى المحرق
                        </Link>
                        <Link href="/routes/dammam-airport-to-riffa-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            مطار الدمام إلى الرفاع
                        </Link>
                        <Link href="/routes/dammam-airport-to-amwaj-islands-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                            مطار الدمام إلى جزر أمواج
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations
                    currentCity="Dammam"
                    isRtl={true}
                    labels={{
                        title: 'استكشف الوجهات القريبة من الدمام',
                        subtitle: 'اتصال سلس عبر أنحاء السعودية',
                        viewRoutes: 'عرض المسارات'
                    }}
                />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-bahrain" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: الدمام إلى البحرين',
                    subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر متعددة',
                    readMore: 'عرض التفاصيل الكاملة',
                    readLess: 'عرض أقل'
                }}
                faqs={[
                    {
                        question: "كم من الوقت يستغرق التاكسي من الدمام إلى البحرين؟",
                        shortAnswer: "١-٣ ساعات",
                        detailedAnswer: "يبلغ إجمالي وقت القيادة نحو ١-٣ ساعات. يُرجى ملاحظة أن أوقات عبور الحدود قد تتراوح بين ٣٠ دقيقة وساعتين حسب الموسم وأيام العطلة ووقت اليوم.",
                        perspectives: []
                    },
                    {
                        question: "ما خيارات المركبات المتاحة لهذا المسار؟",
                        shortAnswer: "دفع رباعي وسيدان",
                        detailedAnswer: "نوفر سيارات سيدان مريحة لراكب أو راكبين، وسيارات دفع رباعي فاخرة (مثل جمس يوكن أو شيفروليه سوبربان) يُنصح بها بشدة لرحلة الـ٩٠ كم الطويلة.",
                        perspectives: []
                    },
                    {
                        question: "كيف يمكنني الحصول على سعر لهذا النقل عبر الحدود؟",
                        shortAnswer: "اطلب عرض سعر",
                        detailedAnswer: "تختلف الأسعار حسب نوع المركبة، وعدد الركاب، والمواقع المحددة. يُرجى استخدام زر 'حجز عبر واتساب' أو التواصل معنا عبر البريد الإلكتروني للحصول على عرض سعر دقيق وشامل يغطي تأمين عبور المركبة ورسوم الطرق.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
