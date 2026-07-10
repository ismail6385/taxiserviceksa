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
    title: 'تاكسي الدمام إلى الرياض ٢٠٢٦ | نقل تنفيذي وخاص | Taxi Service KSA',
    description: 'اطلب عرض سعر لتاكسي خاص من الدمام إلى الرياض. نقل فاخر من الباب إلى الباب للاجتماعات التجارية، ومواعيد المطار، والرحلات العائلية. أسعار ثابتة.',
    keywords: ['تاكسي الدمام الرياض', 'سيارة من الدمام إلى الرياض', 'تاكسي الخبر الرياض', 'توصيل مطار الدمام الرياض', 'تاكسي الدمام الرياض اتجاه واحد'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/dammam-riyadh/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/dammam-riyadh/',
            'ar': 'https://taxiserviceksa.com/ar/routes/dammam-riyadh/',
            'x-default': 'https://taxiserviceksa.com/routes/dammam-riyadh/',
        },
    },
    openGraph: {
        title: 'تاكسي تنفيذي: الدمام إلى الرياض | Taxi Service KSA',
        description: 'تحتاج للتنقل من الدمام إلى الرياض؟ توفر سياراتنا الفاخرة GMC خدمة مريحة من الباب إلى الباب خلال ٤ ساعات.',
        url: 'https://taxiserviceksa.com/ar/routes/dammam-riyadh/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function DammamRiyadhRoutePageArabic() {
    const images = [
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="الدمام إلى الرياض"
                description="خدمة سيارة خاصة VIP احترافية من الدمام إلى الرياض. نقل موثوق من الباب إلى الباب على مدار الساعة بسيارات فاخرة وسائقين محترفين."
                services={[
                    { name: 'تاكسي الدمام إلى الرياض', description: 'نقل خاص متميز بأسعار ثابتة مضمونة.' },
                    { name: 'شوفير تنفيذي', description: 'سائقون محترفون لرحلات العمل والترفيه.' },
                    { name: 'خدمة فان عائلية', description: 'سيارات واسعة مثالية للمجموعات مع الأمتعة.' },
                    { name: 'توصيل المطار والفنادق', description: 'استقبال وتوصيل مريح في جميع المواقع الرئيسية.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="تاكسي الدمام إلى الرياض"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        الممر التجاري
                    </span>
                }
                subtitle="رحلات تنفيذية يومية | ٤ ساعات | خصوصية VIP ١٠٠٪"
                location="خدمة خاصة من الباب إلى الباب - حسب جدولك وراحتك"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam&dropoff=Riyadh">
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
                                الدمام إلى الرياض: رحلة سلسة وخالية من التوتر
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                يُعد التنقل من المنطقة الشرقية إلى العاصمة مساراً شائعاً لرجال ونساء الأعمال. ورغم أن الرحلات الجوية خيار متاح، فإن متاعب المطار تضيف وقتاً إضافياً كبيراً إلى رحلتك.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                توصلك خدمة التاكسي الخاص لدينا من مكتبك في الدمام أو الخبر إلى وجهتك في الرياض خلال نحو ٤ ساعات. بدون طوابير أمنية، وبدون انتظار. مجرد رحلة مريحة على الطريق السريع بسيارة جمس يوكن أو هيونداي ستاريا.
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
                                        <p className="text-sm text-gray-500">الاستلام من الدمام أو الخبر والتوصيل إلى أي موقع في الرياض (العليا، KAFD، مطار الملك خالد).</p>
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
                        contextName="الدمام إلى الرياض"
                        isRtl={true}
                        labels={{
                            title: 'الدمام إلى الرياض: حقيقة الرحلة وما يجب توقعه',
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
                                reality: "القطار سريع، لكن التذاكر تنفد قبل أيام من الموعد. أما سيارات الأجرة فمتوفرة فوراً على مدار الساعة.",
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
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">احصل على عرض سعر لرحلة الدمام إلى الرياض التنفيذية</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;الخيار المفضل لرجال ونساء الأعمال والعائلات الباحثين عن الخصوصية التامة.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=dammam-riyadh">
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
                    labels={{ title: 'استكشف وجهات قريبة من الدمام', subtitle: 'اتصال سلس عبر أنحاء السعودية', viewRoutes: 'عرض المسارات' }}
                />
                <RelatedRoutes originSlug="dammam" currentSlug="dammam-riyadh" title="مسارات أخرى شائعة" />
            </div>

            <MicroSemanticFAQ
                isRtl={true}
                labels={{
                    title: 'إجابات الخبراء: الدمام إلى الرياض',
                    subtitle: 'حقائق مباشرة تليها آراء متخصصة',
                    quickAnswer: 'إجابة سريعة',
                    perspectives: 'وجهات نظر',
                    readMore: 'اقرأ التفاصيل الكاملة',
                    readLess: 'عرض أقل'
                }}
                faqs={[
                    {
                        question: "كم تستغرق الرحلة من الدمام إلى الرياض؟",
                        shortAnswer: "٣.٥ - ٤ ساعات",
                        detailedAnswer: "تبلغ المسافة نحو ٤٠٠ كم. وعلى الطريق السريع الممهد، تستغرق الرحلة نحو ٣.٥ إلى ٤ ساعات بسيارة خاصة.",
                        perspectives: []
                    },
                    {
                        question: "هل تستقبلون الركاب من الخبر أيضاً؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، نخدم كامل المنطقة الشرقية بما في ذلك الخبر والدمام والظهران لمسار الرياض.",
                        perspectives: []
                    },
                    {
                        question: "هل توصلون إلى مطار الملك خالد في الرياض؟",
                        shortAnswer: "نعم",
                        detailedAnswer: "نعم، يمكننا توصيلك إلى مطار الملك خالد الدولي (KAIA) في الرياض، أو إلى أي فندق أو مكتب أو منزل.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
