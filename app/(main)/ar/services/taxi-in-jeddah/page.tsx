import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'تاكسي محلي في جدة | رحلات داخل المدينة وتوصيل سريع | Taxi Service KSA',
    description: 'تحتاج تاكسي محلي في جدة؟ نغطي رحلات المدينة في نفس اليوم، والاستقبال من الفنادق، والتوصيل إلى المولات، والرحلات القصيرة داخل جدة. احجز عبر الإنترنت بسعر ثابت.',
    keywords: ['تاكسي محلي في جدة', 'تاكسي داخل مدينة جدة', 'رحلات تاكسي جدة', 'استقبال فندق جدة', 'تاكسي جدة في نفس اليوم', 'سائق خاص جدة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/taxi-in-jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-jeddah/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
        },
    },
    openGraph: {
        title: 'تاكسي في جدة | سيارات فاخرة مع سائق خاص | Taxi Service KSA',
        description: 'تاكسي خاص فاخر وسيارات دفع رباعي تنفيذية في جدة لكبار الشخصيات، وسفر الشركات، ومعتمري العمرة.',
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-jeddah/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/jeddah.webp', alt: 'خدمة تاكسي فاخرة في جدة' }],
    },
};

export default function TaxiInJeddahPageArabic() {
    const fleet = [
        { name: 'Mercedes S-Class', type: 'سيدان فاخرة', pax: '٣', lugg: '٢', img: 'Car' },
        { name: 'BMW', type: 'سيدان فاخرة', pax: '٣', lugg: '٢', img: 'Car' },
        { name: 'Cadillac Escalade', type: 'دفع رباعي مميز', pax: '٧', lugg: '٤', img: 'Car' },
        { name: 'GMC', type: 'دفع رباعي عائلي', pax: '٧', lugg: '٤', img: 'Car' },
        { name: 'Ford Taurus 2026', type: 'سيدان تنفيذية', pax: '٣', lugg: '٢', img: 'Car' },
        { name: 'Genesis 2023', type: 'سيدان تنفيذية', pax: '٣', lugg: '٢', img: 'Car' },
        { name: 'Mercedes Vito', type: 'فان فاخر', pax: '٧', lugg: '٤', img: 'Car' },
        { name: 'Mercedes Sprinter', type: 'ميني باص تنفيذي', pax: '١٤', lugg: '٤', img: 'Car' },
        { name: 'Luxurious Bus', type: 'نقل المجموعات الكبيرة', pax: '٢٥', lugg: '٤', img: 'Users' }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "تاكسي VIP وتوصيل من المطار",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "جدة"
        },
        "description": "خدمة تاكسي VIP حصرية بالحجز المسبق على مدار الساعة في جدة. نتخصص في الاستقبال من مطار الملك عبدالعزيز، وخدمات السائق الخاص للشركات، والتوصيل المباشر إلى مكة.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "يعتمد على المسار والسيارة"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema-jeddah-taxi-ar"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={['/locations/jeddah.webp', '/hero-slide-1.webp']}
                h1Text="تاكسي جدة"
                bookingFormTitle="احصل على عرض سعر لتاكسي جدة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مركز النقل التنفيذي
                    </span>
                }
                subtitle="توصيل VIP من المطار، سفر الشركات، وسائقون من الطراز الأول."
                location="خدمة على مدار الساعة | استقبال من مطار الملك عبدالعزيز | أسعار ثابتة"
            />

            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">الرئيسية</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/services/" className="text-gray-500 hover:text-primary transition-colors">الخدمات</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">تاكسي في جدة</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">أشهر مسارات جدة</h2>
                            <p className="text-gray-600">اختر وجهتك من جدة للحصول على نقل VIP.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/routes/jeddah-makkah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى مكة
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-madinah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى المدينة
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-alula/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى العلا
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and Value Proposition */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">خبراء الشركات والمطارات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            خدمة تاكسي فاخرة في جدة
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>هل وصلت إلى **مطار الملك عبدالعزيز الدولي (KAIA)** وتحتاج إلى نقل VIP فوري؟ أم أنك مدير تنفيذي يحتاج سائقاً موثوقاً ليوم كامل من الاجتماعات على كورنيش جدة؟ العثور على **تاكسي فاخر في جدة** لم يعد أمراً مرهقاً بفضل خدمة السائق الخاص التي يمكن حجزها مسبقاً.</p>
                            <p>نقدم بديلاً راقياً بالكامل عن تطبيقات مشاركة الركوب وسيارات الأجرة الخضراء التقليدية في الشارع. يضم أسطولنا أحدث موديلات مرسيدس وبي إم دبليو وكاديلاك. نتخصص في استقبال سلس من المطار (حيث ينتظرك سائقنا بلوحة اسم)، ورحلات بين المدن إلى مكة لأداء العمرة، وتأجير سيارات VIP التنفيذية مع سائق خاص.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Plane className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">خدمة مطار الملك عبدالعزيز</h3>
                            <p className="text-gray-600 text-sm">استقبال شخصي عند الوصول. نتابع رحلتك الجوية أولاً بأول، لذا حتى لو هبطت الطائرة مبكراً أو متأخرة، سيكون سائقك في انتظارك.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">تنظيم رحلات المجموعات VIP</h3>
                            <p className="text-gray-600 text-sm">من حافلات مرسيدس فيتو الفاخرة إلى الحافلات التنفيذية بسعة ٢٥ راكباً، نتولى نقل المجموعات الكبيرة والدبلوماسيين والعائلات.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">توصيل مباشر إلى مكة</h3>
                            <p className="text-gray-600 text-sm">اهبط في جدة وانتقل مباشرة إلى فندقك في مكة دون انتظار القطارات أو الحافلات. خدمة خاصة وكريمة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">اختيار تنفيذي</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">أسطول جدة التنفيذي</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            نُشغّل أرقى الموديلات الفاخرة المتوفرة في المملكة العربية السعودية. مثالية لإبهار عملاء الشركات أو لضمان أقصى درجات الراحة لعائلتك.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {fleet.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group">
                                <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {v.img === 'Car' ? <Car className="w-7 h-7 text-primary" /> : <Users className="w-7 h-7 text-primary" />}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{v.name}</h3>
                                <p className="text-sm font-semibold text-primary mb-6">{v.type}</p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{v.pax} ركاب</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Briefcase className="w-5 h-5 text-gray-400" />
                                        <span>{v.lugg} حقيبة</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        </div>
                                        <span>تكييف هواء</span>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/966569487569?text=مرحباً،%20أرغب%20في%20حجز%20سيارة%20VIP%20${encodeURIComponent(v.name)}%20في%20جدة.`}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="mt-8 relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary/20 rounded-xl group-hover:bg-primary group-hover:text-black text-center"
                                >
                                    <span className="relative font-bold">احجز عبر واتساب لهذه السيارة</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Trust Signals & Social Proof */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <EntityTrustSignal
                            isRtl={true}
                            brandName="تاكسي سيرفس KSA - جدة"
                            description="المعيار الأول للنقل الاحترافي الراقي داخل جدة وامتداداً إلى جميع أنحاء المملكة."
                            foundingDate="٢٠١٦"
                            licenseInfo="مرخصة رسمياً"
                            labels={{ verified: "مؤسسة موثقة", license: "رخصة نقل", since: "في الخدمة منذ" }}
                            metrics={[
                                { label: 'أسعار ثابتة', value: '١٠٠٪', icon: DollarSign },
                                { label: 'الدعم', value: '٢٤/٧', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 relative overflow-hidden">
                            <Shield className="absolute -top-10 -right-10 w-48 h-48 text-black/5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">لماذا الحجز المسبق أفضل من تطبيقات النقل؟</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                استخدام تطبيقات النقل المحلية في مطار جدة خلال أوقات الذروة يعني غالباً انتظاراً طويلاً، وأسعاراً مرتفعة غير متوقعة، وسيارات صغيرة غير مناسبة للأمتعة الكثيرة.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10">
                                معنا، تحصل على **سيارة VIP مؤكدة**. يستقبلك سائقنا داخل صالة المطار. تحصل بالضبط على السيارة الفاخرة التي طلبتها (مثل إس كلاس أو إسكاليد)، وسعرك لا يتغير أبداً، مما يخلق تجربة سفر سلسة تماماً.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Jeddah" */}
            <MicroSemanticFAQ
                        contextName="Taxi In Jeddah"
                isRtl={true}
                labels={{
                    title: "إجابات الخبراء: تاكسي في جدة",
                    subtitle: "حقائق مباشرة تليها آراء متخصصة",
                    quickAnswer: "الإجابة السريعة",
                    perspectives: "وجهات نظر",
                    readMore: "عرض التفاصيل الكاملة",
                    readLess: "عرض أقل"
                }}
                faqs={[
                    {
                        question: "هل يمكنني طلب عرض سعر لتاكسي VIP من مطار جدة؟",
                        shortAnswer: "نعم، استقبال على مدار الساعة.",
                        detailedAnswer: "نعم، التوصيل من مطار الملك عبدالعزيز الدولي هو تخصصنا. سيقابلك سائقنا في صالة الوصول بلوحة تحمل اسمك، ويساعدك في حمل الأمتعة، وينقلك مباشرة إلى فندقك في جدة أو مكة.",
                        perspectives: []
                    },
                    {
                        question: "ما أنواع السيارات المتوفرة لديكم في جدة؟",
                        shortAnswer: "دفع رباعي فاخر، سيدان، وفانات.",
                        detailedAnswer: "يركز أسطولنا في جدة على الفخامة والراحة التنفيذية. نوفر مرسيدس إس كلاس، بي إم دبليو، جينيسيس، كاديلاك إسكاليد، جي إم سي، وفانات ركاب واسعة مثل مرسيدس سبرينتر وفيتو.",
                        perspectives: []
                    },
                    {
                        question: "هل تقدمون خدمة سائق خاص ليوم كامل في جدة؟",
                        shortAnswer: "نعم.",
                        detailedAnswer: "نعم، سواء كان لديك اجتماعات عمل أو فعاليات للشركات أو ترغب ببساطة في استكشاف المدينة، يمكنك استئجار سيارة مع سائق محترف ليوم كامل (٨-١٢ ساعة).",
                        perspectives: []
                    },
                    {
                        question: "كيف أدفع مقابل تاكسي جدة؟",
                        shortAnswer: "دفع مسبق أو نقداً.",
                        detailedAnswer: "يمكنك تثبيت سعرك الثابت عبر الحجز من خلال نموذجنا الإلكتروني أو إرسال بريد إلكتروني. نوفر خيارات دفع مرنة لضمان راحتك.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
