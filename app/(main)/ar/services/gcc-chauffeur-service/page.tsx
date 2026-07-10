import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Shield, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'خدمة شوفير دول الخليج | من السعودية إلى الإمارات والكويت وقطر والبحرين | Taxi Service KSA',
    description: 'خدمة شوفير VIP خاصة من السعودية إلى دول الخليج — دبي وأبوظبي والكويت وقطر والبحرين. نقل عبر الحدود من الباب إلى الباب بأسعار ثابتة.',
    keywords: ['خدمة شوفير خليجية', 'تاكسي من السعودية إلى الإمارات', 'تاكسي من السعودية إلى الكويت', 'تاكسي من السعودية إلى قطر', 'تاكسي من السعودية إلى البحرين', 'سائق خاص عبر حدود الخليج'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/gcc-chauffeur-service/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/gcc-chauffeur-service/',
            'ar': 'https://taxiserviceksa.com/ar/services/gcc-chauffeur-service/',
            'x-default': 'https://taxiserviceksa.com/services/gcc-chauffeur-service/',
        },
    },
    openGraph: {
        title: 'خدمة شوفير دول الخليج | Taxi Service KSA',
        description: 'نقل خاص عبر الحدود يربط السعودية بالإمارات والكويت وقطر والبحرين.',
        url: 'https://taxiserviceksa.com/ar/services/gcc-chauffeur-service/',
        locale: 'ar_SA',
        type: 'website',
    },
};

const countries = [
    {
        name: 'الإمارات العربية المتحدة',
        cities: 'دبي، أبوظبي، الشارقة',
        description: 'نقل تنفيذي يربط المنطقة الشرقية ووسط السعودية بمراكز الأعمال والترفيه في الإمارات.',
        routes: [
            { label: 'الدمام إلى دبي', href: '/routes/dammam-dubai/' },
            { label: 'الرياض إلى دبي', href: '/routes/riyadh-dubai/' },
            { label: 'جدة إلى دبي', href: '/routes/jeddah-dubai/' },
        ],
    },
    {
        name: 'الكويت',
        cities: 'مدينة الكويت، السالمية، الفحيحيل',
        description: 'نقل خاص مباشر عبر ممر الخليج الشمالي، مفضل لدى رجال الأعمال والعائلات التي لديها أقارب عبر الحدود.',
        routes: [
            { label: 'الدمام إلى الكويت', href: '/routes/dammam-kuwait/' },
            { label: 'الرياض إلى الكويت', href: '/routes/riyadh-kuwait/' },
            { label: 'الخبر إلى الكويت', href: '/routes/khobar-to-kuwait-taxi/' },
        ],
    },
    {
        name: 'قطر',
        cities: 'الدوحة، لوسيل، اللؤلؤة',
        description: 'رحلات طويلة ومريحة عبر منفذ سلوى الحدودي، تربط المنطقة الشرقية بالدوحة وضواحيها.',
        routes: [
            { label: 'الدمام إلى الدوحة', href: '/routes/dammam-doha/' },
            { label: 'الخبر إلى قطر', href: '/routes/khobar-to-qatar-taxi/' },
            { label: 'الرياض إلى الدوحة', href: '/routes/riyadh-doha/' },
        ],
    },
    {
        name: 'البحرين',
        cities: 'المنامة، الرفاع، المحرق',
        description: 'أقصر معبر بين دول الخليج، عبر جسر الملك فهد — طريق مفضل لعطلات نهاية الأسبوع ورحلات العمل من المنطقة الشرقية.',
        routes: [
            { label: 'الدمام إلى البحرين', href: '/routes/dammam-bahrain/' },
            { label: 'الخبر إلى البحرين', href: '/routes/khobar-bahrain/' },
            { label: 'الرياض إلى البحرين', href: '/routes/riyadh-bahrain/' },
        ],
    },
];

export default function GccChauffeurServicePageArabic() {
    const images = [
        '/hero-slide-2.webp',
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="خدمة شوفير دول الخليج"
                description="خدمة شوفير VIP خاصة من السعودية إلى الإمارات والكويت وقطر والبحرين. نقل عبر الحدود من الباب إلى الباب بأسعار ثابتة وسائقين محترفين."
                services={[
                    { name: 'نقل من السعودية إلى الإمارات', description: 'خدمة شوفير خاصة إلى دبي وأبوظبي والشارقة.' },
                    { name: 'نقل من السعودية إلى الكويت', description: 'نقل مباشر عبر الحدود إلى مدينة الكويت والمناطق المحيطة.' },
                    { name: 'نقل من السعودية إلى قطر', description: 'نقل خاص إلى الدوحة عبر منفذ سلوى الحدودي.' },
                    { name: 'نقل من السعودية إلى البحرين', description: 'نقل إلى المنامة عبر جسر الملك فهد.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-2.webp"
            />

            <Hero
                images={images}
                h1Text="خدمة شوفير دول الخليج"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        من السعودية إلى الخليج، من الباب إلى الباب
                    </span>
                }
                subtitle="نقل خاص عبر الحدود إلى الإمارات والكويت وقطر والبحرين"
                location="100% خاص VIP — بدون مشاركة الركاب"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احصل على عرض سعر
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=مرحباً،%20أحتاج%20عرض%20سعر%20لخدمة%20شوفير%20عبر%20حدود%20دول%20الخليج" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 ml-2 fill-current" />
                            تواصل عبر واتساب
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        يتحمل الراكب مسؤولية توفير جواز سفر ساري المفعول وأي تأشيرة أو تصريح دخول مطلوب لدولة الوجهة. يرجى التأكد من متطلبات الدخول قبل الحجز.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">شوفير عبر الحدود</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                            شوفير واحد، لكل الخليج
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            من الرياض وجدة والدمام والخبر، ينظم سائقونا الخاصون رحلات منتظمة عبر الحدود إلى الإمارات والكويت وقطر والبحرين. كل رحلة تكون بسيارة خاصة واحدة لمجموعتكم — بدون تبديل مركبات، وبدون مقاعد مشتركة، وبسعر ثابت متفق عليه قبل السفر.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { label: '٤ دول خليجية', icon: Globe },
                            { label: 'أسعار ثابتة', icon: CheckCircle2 },
                            { label: 'سيارة خاصة SUV أو سيدان', icon: Car },
                            { label: 'انطلاق على مدار الساعة', icon: Clock },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-2 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <item.icon className="w-7 h-7 text-primary" />
                                <span className="font-bold text-gray-900">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {countries.map((country) => (
                            <div key={country.name} className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-primary/10 p-2.5 rounded-xl">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-semibold mb-3">{country.cities}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">{country.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {country.routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="text-sm font-bold text-primary bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
                <RelatedLocations
                    currentCity="Dammam"
                    isRtl={true}
                    labels={{ title: "وجهات أخرى من الدمام", subtitle: "توصيل سلس عبر أنحاء السعودية", viewRoutes: "التفاصيل" }}
                    customLinks={[
                        { name: 'الخبر', url: '/locations/al-khobar/', description: 'نقل خاص مباشر بين الدمام والخبر في المنطقة الشرقية.' },
                        { name: 'الظهران', url: '/locations/dhahran/', description: 'نقل خاص مباشر بين الدمام والظهران في المنطقة الشرقية.' },
                        { name: 'الجبيل', url: '/locations/jubail/', description: 'نقل خاص مباشر بين الدمام والجبيل في المنطقة الشرقية.' },
                        { name: 'الهفوف', url: '/locations/hofuf/', description: 'نقل خاص مباشر بين الدمام والهفوف في المنطقة الشرقية.' },
                    ]}
                />
            </div>

            <MicroSemanticFAQ
                isRtl={true}
                labels={{
                    title: "أسئلة شائعة",
                    subtitle: "معلومات هامة للمسافرين عبر حدود الخليج",
                    quickAnswer: "الجواب",
                    perspectives: "تفاصيل",
                    readMore: "المزيد",
                    readLess: "أقل",
                }}
                faqs={[
                    {
                        question: "ما هي دول الخليج التي تغطونها؟",
                        shortAnswer: "الإمارات والكويت وقطر والبحرين",
                        detailedAnswer: "ننظم رحلات شوفير خاصة من السعودية إلى الإمارات العربية المتحدة (دبي وأبوظبي والشارقة) والكويت وقطر والبحرين.",
                        perspectives: []
                    },
                    {
                        question: "هل أحتاج تأشيرة لعبور الحدود؟",
                        shortAnswer: "يعتمد على جنسيتك",
                        detailedAnswer: "تختلف متطلبات الدخول حسب الجنسية ودولة الوجهة. عادة يعبر مواطنو دول الخليج بحرية باستخدام الهوية الوطنية؛ أما بقية المسافرين فعليهم التحقق من متطلبات التأشيرة لوجهتهم قبل الحجز.",
                        perspectives: []
                    },
                    {
                        question: "هل السيارة خاصة بمجموعتي فقط؟",
                        shortAnswer: "نعم، دائماً",
                        detailedAnswer: "جميع رحلات الخليج خاصة بنسبة 100% — سيارة واحدة محجوزة لمجموعتكم فقط، بدون ركاب آخرين.",
                        perspectives: []
                    },
                    {
                        question: "هل يمكنني حجز رحلة ذهاب فقط عبر الحدود؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "يمكنكم حجز رحلة ذهاب فقط أو ذهاب وعودة. كثير من عملائنا يسافرون في اتجاه واحد ويعودون بالطائرة، أو العكس.",
                        perspectives: []
                    }
                ]}
            />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص 100% فقط • بدون تاكسي مشترك
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لرحلة شوفير الخليج الخاصة بك</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الخيار الموثوق لرجال ورائدات الأعمال والعائلات العابرة للخليج بخصوصية تامة.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/">
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
