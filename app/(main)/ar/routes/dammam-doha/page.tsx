import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';


export const metadata: Metadata = {
    title: 'تاكسي الدمام إلى الدوحة | نقل VIP عبر الحدود | Taxi Service KSA',
    description: 'اطلب عرض سعر مميز لرحلة من الدمام إلى الدوحة. نقل VIP موثوق عبر الحدود، سيارات دفع رباعي مريحة، وخدمة من الباب إلى الباب في جميع أنحاء الخليج.',
    keywords: ['تاكسي الدمام إلى الدوحة', 'نقل الدمام الدوحة', 'تاكسي عبور الحدود السعودية', 'نقل VIP الدمام الدوحة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/dammam-doha/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-doha/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-doha/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-doha/',
        },
    },
    openGraph: {
        title: 'تاكسي الدمام إلى الدوحة | Taxi Service KSA',
        description: 'اطلب عرض سعر مميز لرحلة من الدمام إلى الدوحة. نقل VIP موثوق عبر الحدود، سيارات دفع رباعي مريحة، وخدمة من الباب إلى الباب في جميع أنحاء الخليج.',
        url: 'https://taxiserviceksa.com/ar/routes/dammam-doha/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function DammamDohaRoutePageArabic() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Dammam to Doha"
                description="Professional VIP private car service for Dammam to Doha. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam to Doha Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الدمام إلى الدوحة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        خدمة عبور الحدود الخليجية
                    </span>
                }
                subtitle="نقل VIP سلس: من الدمام إلى الدوحة"
                location="خدمة من الباب إلى الباب"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Doha">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز عبر الإنترنت
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Doha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> حجز عبر واتساب</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">حدود دولية</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                الطريقة المتميزة للسفر من الدمام إلى الدوحة
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                يُعد السفر بين الدمام والدوحة عبر الطريق البري خياراً شائعاً للعائلات ورجال الأعمال ومقيمي دول الخليج. تبلغ المسافة نحو ٤٠٠ كم، وتستغرق الرحلة عادة من ٤ إلى ٥ ساعات.
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
                                    <span className="font-semibold text-gray-800">٤-٥ ساعات رحلة</span>
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
                                        <p className="text-sm text-gray-500">نستقبلك من موقعك الدقيق في الدمام ونوصلك مباشرة إلى وجهتك في الدوحة.</p>
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
                        contextName="الدمام إلى الدوحة"
                        isRtl={true}
                        labels={{
                            title: 'تحقّق من حقائق الرحلة: الدمام إلى الدوحة',
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
                                factors: ["السعر لكل مركبة", "بدون رسوم أمتعة"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">وجهات قطرية محددة من مطار الدمام</h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/dammam-airport-to-doha-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            مدينة الدوحة
                        </Link>
                        <Link href="/routes/dammam-airport-to-lusail-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            لوسيل
                        </Link>
                        <Link href="/routes/dammam-airport-to-the-pearl-qatar-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            لؤلؤة قطر
                        </Link>
                        <Link href="/routes/dammam-airport-to-al-wakrah-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            الوكرة
                        </Link>
                        <Link href="/routes/dammam-airport-to-al-khor-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            الخور
                        </Link>
                        <Link href="/routes/khobar-to-qatar-taxi/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            الخبر إلى قطر
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations
                    currentCity="None"
                    isRtl={true}
                    labels={{
                        title: "أشهر المسارات القريبة",
                        subtitle: "نقل خاص مباشر وخدمات تاكسي عبر الحدود",
                        viewRoutes: "عرض المسارات"
                    }}
                    customLinks={[
                        {
                            name: "تاكسي الدمام إلى الرياض",
                            url: "/routes/dammam-riyadh/",
                            description: "نقل خاص متميز بين المدن من الدمام إلى الرياض."
                        },
                        {
                            name: "تاكسي الدمام إلى مكة",
                            url: "/ar/locations/makkah/",
                            description: "نقل VIP لمسافات طويلة من الدمام إلى مكة المكرمة."
                        },
                        {
                            name: "تاكسي الدمام إلى المدينة",
                            url: "/ar/locations/madinah/",
                            description: "خدمة سائق خاص موثوقة من الدمام إلى المدينة المنورة."
                        },
                        {
                            name: "تاكسي الدمام إلى البحرين",
                            url: "/routes/dammam-bahrain/",
                            description: "نقل عبر الحدود عبر جسر الملك فهد إلى البحرين."
                        },
                        {
                            name: "تاكسي الدمام إلى الخبر",
                            url: "/locations/al-khobar/",
                            description: "نقل محلي وتنفيذي سريع بين الدمام والخبر."
                        },
                        {
                            name: "تاكسي مطار الدمام",
                            url: "/dammam-airport-taxi/",
                            description: "استقبال وتوصيل على مدار الساعة في مطار الملك فهد الدولي."
                        },
                        {
                            name: "تاكسي الدمام إلى مطار الدوحة",
                            url: "/booking?pickup=Dammam&dropoff=Doha+Airport",
                            description: "نقل خاص مباشر عبر الحدود إلى مطار حمد الدولي في الدوحة."
                        }
                    ]}
                />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-doha" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: الدمام إلى الدوحة',
                    subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر متعددة',
                    readMore: 'عرض التفاصيل الكاملة',
                    readLess: 'عرض أقل'
                }}
                faqs={[
                    {
                        question: "كم من الوقت يستغرق التاكسي من الدمام إلى الدوحة؟",
                        shortAnswer: "٤-٥ ساعات",
                        detailedAnswer: "يبلغ إجمالي وقت القيادة نحو ٤-٥ ساعات. يُرجى ملاحظة أن أوقات عبور الحدود قد تتراوح بين ٣٠ دقيقة وساعتين حسب الموسم وأيام العطلة ووقت اليوم.",
                        perspectives: []
                    },
                    {
                        question: "ما خيارات المركبات المتاحة لهذا المسار؟",
                        shortAnswer: "دفع رباعي وسيدان",
                        detailedAnswer: "نوفر سيارات سيدان مريحة لراكب أو راكبين، وسيارات دفع رباعي فاخرة (مثل جمس يوكن أو شيفروليه سوبربان) يُنصح بها بشدة لرحلة الـ٤٠٠ كم الطويلة.",
                        perspectives: []
                    },
                    {
                        question: "هل يشمل السعر تأمين عبور المركبة عند الحدود؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، يشمل السعر المُعلن تأمين عبور المركبة ورسوم الطرق.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
