import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'تاكسي الرياض إلى الدمام ٢٠٢٦ | نقل تنفيذي وخاص | Taxi Service KSA',
    description: 'اطلب عرض سعر لتاكسي خاص من الرياض إلى الدمام. نقل فاخر من الباب إلى الباب للاجتماعات التجارية، ومواعيد المطار، والرحلات العائلية. أسعار ثابتة.',
    keywords: ['تاكسي الرياض الدمام', 'سيارة من الرياض إلى الدمام', 'تاكسي الرياض الخبر', 'توصيل مطار الرياض الدمام', 'تاكسي الرياض الدمام اتجاه واحد'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/riyadh-dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/riyadh-dammam/',
            'ar': 'https://taxiserviceksa.com/ar/routes/riyadh-dammam/',
            'x-default': 'https://taxiserviceksa.com/routes/riyadh-dammam/',
        },
    },
    openGraph: {
        title: 'تاكسي تنفيذي: الرياض إلى الدمام / الخبر | Taxi Service KSA',
        description: 'تحتاج للتنقل بين الرياض والدمام؟ تجنّب متاعب الطيران. توفر سياراتنا الفاخرة GMC خدمة مريحة من الباب إلى الباب خلال ٣.٥ ساعة.',
        url: 'https://taxiserviceksa.com/ar/routes/riyadh-dammam/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function RiyadhDammamRoutePageArabic() {
    const images = [
        '/riyadh-discovery-map.png', // Ideally Highway / Desert Road image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];



    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="الرياض إلى الدمام"
                description="خدمة سيارة خاصة VIP احترافية من الرياض إلى الدمام. نقل موثوق من الباب إلى الباب على مدار الساعة بسيارات فاخرة وسائقين محترفين."
                services={[
                    { name: 'تاكسي الرياض إلى الدمام', description: 'نقل خاص متميز بأسعار ثابتة مضمونة.' },
                    { name: 'شوفير تنفيذي', description: 'سائقون محترفون لرحلات العمل والترفيه.' },
                    { name: 'خدمة فان عائلية', description: 'سيارات واسعة مثالية للمجموعات مع الأمتعة.' },
                    { name: 'توصيل المطار والفنادق', description: 'استقبال وتوصيل مريح في جميع المواقع الرئيسية.' }
                ]}

                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الرياض إلى الدمام والخبر"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        الممر التجاري
                    </span>
                }
                subtitle="رحلات تنفيذية يومية | ٣.٥ ساعة | خصوصية VIP ١٠٠٪"
                location="خدمة خاصة من الباب إلى الباب - حسب جدولك وراحتك"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh&dropoff=Dammam">
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

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">من مدينة إلى أخرى</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                الرياض إلى الدمام: رحلة سلسة وخالية من التوتر
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                يُعد التنقل بين العاصمة والمنطقة الشرقية أمراً روتينياً للعديد من الشركات. ورغم أن الرحلات الجوية قصيرة (ساعة واحدة)، فإن متاعب المطار تضيف ٣ ساعات إلى رحلتك.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                توصلك خدمة التاكسي الخاص لدينا من مكتبك في الرياض إلى اجتماعك في الدمام خلال نحو ٣.٥ إلى ٤ ساعات. بدون طوابير أمنية، وبدون انتظار. مجرد رحلة مريحة على الطريق السريع بسيارة جمس يوكن أو هيونداي ستاريا.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">٤ ساعات إجمالاً</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">اعمل داخل السيارة</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سفر جماعي</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">سعر ثابت</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">أبرز مزايا المسار</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">من الباب إلى الباب</h4>
                                        <p className="text-sm text-gray-500">الاستلام من الرياض (العليا، KAFD) والتوصيل إلى كورنيش الدمام أو الخبر.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">محطات راحة</h4>
                                        <p className="text-sm text-gray-500">يضم الطريق السريع محطات خدمة حديثة (ساسكو) توفر ستاربكس ووجبات سريعة.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">المرونة</h4>
                                        <p className="text-sm text-gray-500">انطلق في الوقت الذي يناسبك، بدون التقيّد بمواعيد الرحلات الجوية.</p>
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
                        contextName="الرياض إلى الدمام"
                        isRtl={true}
                        labels={{
                            title: 'الرياض إلى الدمام: حقيقة الرحلة وما يجب توقعه',
                            subtitle: 'إجماع الخبراء حول أوقات السفر والتكاليف استناداً إلى بيانات واقعية',
                            beliefLabel: 'الاعتقاد الشائع',
                            realityLabel: 'الواقع الفعلي',
                            rangeLabel: 'النطاق الحقيقي الآمن',
                            factorsLabel: 'العوامل المؤثرة'
                        }}
                        points={[
                            {
                                topic: "الطيران مقابل القيادة",
                                commonBelief: "الطيران أسرع.",
                                reality: "مدة الرحلة الجوية ساعة واحدة فقط، لكن المطار (ساعة) + الإجراءات الأمنية (ساعة) + التاكسي (ساعة) = ٤ ساعات. القيادة أيضاً تستغرق ٤ ساعات، لكنها خالية من التوتر وأقل تكلفة للمجموعات.",
                                truthRange: "الوقت نفسه تقريباً",
                                factors: ["متاعب المطار", "العمل عن بُعد"]
                            },
                            {
                                topic: "القطار",
                                commonBelief: "القطار هو الخيار الأفضل.",
                                reality: "القطار سريع، لكن التذاكر تنفد قبل ٣ أيام من الموعد. أما سيارات الأجرة فمتوفرة فوراً على مدار الساعة.",
                                truthRange: "التذاكر غير متوفرة",
                                factors: ["التوفر", "الحجز بآخر لحظة"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        نقل VIP خاص فقط ١٠٠٪ • بدون تاكسي مشترك
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لرحلة الرياض إلى الدمام التنفيذية</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الخيار المفضل لرجال ونساء الأعمال والعائلات الباحثين عن الخصوصية التامة.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=riyadh-dammam">
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
                    currentCity="Riyadh"
                    isRtl={true}
                    labels={{ title: 'استكشف وجهات قريبة من الرياض', subtitle: 'اتصال سلس عبر أنحاء السعودية', viewRoutes: 'عرض المسارات' }}
                />
                <RelatedRoutes originSlug="riyadh" currentSlug="riyadh-dammam" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: الرياض إلى الدمام',
                    subtitle: 'حقائق مباشرة تليها آراء متخصصة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر',
                    readMore: 'اقرأ التفاصيل الكاملة',
                    readLess: 'عرض أقل'
                }}
                faqs={[
                    {
                        question: "كم تستغرق الرحلة من الرياض إلى الدمام؟",
                        shortAnswer: "٣.٥ - ٤ ساعات",
                        detailedAnswer: "تبلغ المسافة نحو ٤٠٠ كم. وعلى الطريق السريع الممهد، تستغرق الرحلة نحو ٣.٥ إلى ٤ ساعات بسيارة خاصة.",
                        perspectives: []
                    },
                    {
                        question: "لماذا تختار التاكسي بدلاً من القطار؟",
                        shortAnswer: "من الباب إلى الباب وخاص بالكامل",
                        detailedAnswer: "يتطلب القطار التوجه إلى المحطات وحجز التذاكر مسبقاً. سيارتنا الخاصة بنسبة ١٠٠٪ تستقبلك من منزلك وتوصلك إلى فندقك مباشرة، مما يوفر وقت الانتقال ويمنحك خصوصية تامة.",
                        perspectives: []
                    },
                    {
                        question: "هل تصلون أيضاً إلى الخبر والجبيل؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نخدم كامل المنطقة الشرقية بما في ذلك الخبر والدمام والظهران والجبيل بنقل خاص VIP بنسبة ١٠٠٪.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}


