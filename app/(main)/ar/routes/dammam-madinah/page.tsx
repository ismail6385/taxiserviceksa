import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'تاكسي الدمام إلى المدينة المنورة | نقل خاص للزيارة | Taxi Service KSA',
    description: 'احجز تاكسي خاصاً من الدمام إلى المدينة المنورة للزيارة أو زيارة العائلة. نقل بري طويل المسافة من الباب إلى الباب بسيارة جمس أو ستاريا مريحة. أسعار ثابتة وسائقون محترفون.',
    keywords: ['تاكسي الدمام المدينة المنورة', 'تاكسي زيارة الدمام المدينة', 'تاكسي الخبر المدينة المنورة', 'نقل الدمام المدينة المنورة', 'تاكسي المنطقة الشرقية إلى المدينة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/dammam-madinah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-madinah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-madinah/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-madinah/',
        },
    },
    openGraph: {
        title: 'تاكسي خاص: الدمام إلى المدينة المنورة | Taxi Service KSA',
        description: 'نقل بري بين المدن من الدمام إلى المدينة المنورة بسيارة خاصة مكيفة. الخيار الأمثل لزوار الزيارة والعائلات.',
        url: 'https://taxiserviceksa.com/ar/routes/dammam-madinah/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function DammamMadinahRoutePageArabic() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/hero-slide-1.webp',
    ];

    const routeDetails = [
        { label: 'المسافة', value: '~٩٥٠ كم', icon: MapPin },
        { label: 'مدة الرحلة', value: '٩ - ١٠ ساعات', icon: Clock },
        { label: 'المركبة', value: 'جمس يوكن / ستاريا', icon: Car },
        { label: 'السعة', value: 'حتى ٧ ركاب', icon: Users },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Dammam to Madinah"
                description="Private long-distance taxi service from Dammam to Madinah for Ziyarat and family visits. Reliable door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam to Madinah Taxi', description: 'Premium cross-country private transfer with guaranteed fixed rates.' },
                    { name: 'Ziyarat Transfer', description: 'Direct transfer to the Prophet’s Mosque area for visitors travelling from the Eastern Province.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Hotel Drop-off', description: 'Direct drop-off at any hotel in the Central Zone near Al-Masjid an-Nabawi.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الدمام إلى المدينة المنورة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        نقل خاص مباشر للزيارة وسفر العائلات
                    </span>
                }
                subtitle="من المنطقة الشرقية إلى مدينة الرسول ﷺ | ٩-١٠ ساعات | خصوصية VIP ١٠٠٪"
                location="خدمة خاصة من الباب إلى الباب - حسب جدولك وراحتك"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            احجز المسار (سعر المسار)
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            عقد الشركات
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {routeDetails.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-2 p-4">
                            <item.icon className="w-7 h-7 text-primary" />
                            <span className="font-bold text-gray-900 text-lg">{item.value}</span>
                            <span className="text-sm text-gray-500">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">من مدينة إلى مدينة</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                الدمام إلى المدينة المنورة: أقصر طريق بري بين المدن
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                المدينة المنورة هي أقرب الحرمين الشريفين إلى المنطقة الشرقية، مما يجعل الرحلة البرية أقصر بشكل ملحوظ مقارنة بالعبور إلى مكة أو جدة. يفضل كثير من العائلات وزوار الزيارة السفر عبر هذا المسار مباشرة بدلاً من الطيران، خاصة عند التوجه بعد ذلك إلى مكة المكرمة.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                ننظم الرحلة مع فترات راحة وصلاة مخطط لها على طول الطريق السريع. كل رحلة حجز خاص — فقط عائلتك أو مجموعتك في سيارة جمس يوكن أو هيونداي ستاريا نظيفة ومكيفة، مع نزول مباشر بالقرب من المسجد النبوي الشريف.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">أقصر عبور بري في السعودية</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">مساحة واسعة للأمتعة</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سفر العائلات والمجموعات</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سعر ثابت</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">أبرز معالم المسار</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">مباشرة إلى المسجد النبوي</h4>
                                        <p className="text-sm text-gray-500">استلام من أي مكان في الدمام أو الخبر أو الظهران، ونزول عند فندقك في المنطقة المركزية بالقرب من المسجد النبوي الشريف.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">محطات راحة مخططة</h4>
                                        <p className="text-sm text-gray-500">توقفات منتظمة في محطات خدمة الطريق السريع للصلاة والطعام والوقود طوال الرحلة.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">المتابعة إلى مكة المكرمة</h4>
                                        <p className="text-sm text-gray-500">يجمع كثير من الحجاج بين هذه الرحلة ومرحلة المدينة-مكة بعدها — اسألونا عن برنامج رحلة مجمّع.</p>
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
                        contextName="Dammam to Madinah"
                        isRtl={true}
                        labels={{
                            title: 'الدمام والمدينة المنورة: توقعات واقعية للرحلة',
                            subtitle: 'إجماع الخبراء حول أوقات السفر والتكاليف بناءً على بيانات حقيقية من المسافرين',
                            beliefLabel: 'التقدير الشائع',
                            realityLabel: 'الواقع الفعلي',
                            rangeLabel: 'النطاق الحقيقي الآمن',
                            factorsLabel: 'العوامل المؤثرة',
                        }}
                        points={[
                            {
                                topic: "الطيران أم القيادة؟",
                                commonBelief: "الطيران دائماً أسرع لهذه المسافة.",
                                reality: "الرحلة المباشرة تستغرق أقل من ساعتين، لكن بالنسبة للعائلات والمجموعات فإن السيارة الخاصة التي تستغرق ٩-١٠ ساعات تعني عدم الحاجة لنقل من وإلى المطار، وعدم الانتظار في طوابير تسجيل الوصول، وعدم التعامل مع الأمتعة — وغالباً ما يتساوى مجهودها الكلي مع رحلة مريحة ليلية أو نهارية.",
                                truthRange: "يعتمد على حجم المجموعة",
                                factors: ["حجم المجموعة", "الأمتعة", "بدون تنقلات إضافية"]
                            },
                            {
                                topic: "هل المدينة أقرب من مكة؟",
                                commonBelief: "كل مسارات الحرمين الشريفين تستغرق نفس الوقت تقريباً.",
                                reality: "المدينة المنورة أقرب إلى الدمام بحوالي ٣٠٠ كم من مكة المكرمة، بفضل ممر طريق سريع أكثر مباشرة، مما يقلص وقت الرحلة الكلي بمقدار ٣-٤ ساعات.",
                                truthRange: "نعم، أقصر بشكل ملحوظ",
                                factors: ["المسار السريع", "المسافة"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون مشاركة الرحلة
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لرحلة تاكسي الدمام إلى المدينة المنورة</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الخيار المفضل لزوار الزيارة والعائلات الباحثين عن خصوصية تامة في رحلتهم إلى المسجد النبوي الشريف.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=dammam-madinah">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations
                    currentCity="Dammam"
                    isRtl={true}
                    labels={{
                        title: 'اكتشف وجهات قريبة من الدمام',
                        subtitle: 'اتصال سلس عبر أنحاء السعودية',
                        viewRoutes: 'عرض المسارات',
                    }}
                />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-madinah" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                contextName="الدمام إلى المدينة المنورة"
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: الدمام إلى المدينة المنورة',
                    subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر',
                    readMore: 'اقرأ التفاصيل الكاملة',
                    readLess: 'عرض أقل',
                }}
                faqs={[
                    {
                        question: "كم تستغرق الرحلة من الدمام إلى المدينة المنورة؟",
                        shortAnswer: "٩ - ١٠ ساعات",
                        detailedAnswer: "تبلغ المسافة حوالي ٩٥٠ كم. في سيارة خاصة مع فترات راحة عادية، تستغرق الرحلة حوالي ٩ إلى ١٠ ساعات.",
                        perspectives: []
                    },
                    {
                        question: "هل المدينة المنورة أقرب إلى الدمام من مكة المكرمة؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، المدينة المنورة أقرب إلى الدمام بحوالي ٣٠٠ كم من مكة المكرمة، لذا فإن الرحلة أقصر بحوالي ٣-٤ ساعات.",
                        perspectives: []
                    },
                    {
                        question: "هل توصلون بالقرب من المسجد النبوي الشريف؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نوصلك مباشرة إلى فندقك في المنطقة المركزية بالقرب من المسجد النبوي الشريف، أو إلى أي مكان آخر في المدينة المنورة.",
                        perspectives: []
                    },
                    {
                        question: "هل تستقبلون الركاب من الخبر أيضاً؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نخدم كامل المنطقة الشرقية بما في ذلك الخبر والدمام والظهران لمسار المدينة المنورة.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
