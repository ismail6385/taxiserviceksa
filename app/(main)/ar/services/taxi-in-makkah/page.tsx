import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'تاكسي محلي في مكة | توصيل من الفندق إلى الحرم ورحلات الزيارة | Taxi Service KSA',
    description: 'خدمة تاكسي محلي داخل مكة المكرمة للحجاج والمعتمرين. توصيل من الفندق إلى الحرم، رحلات زيارة قصيرة، وتنقلات داخل المدينة. متوفرة على مدار الساعة خلال موسمي العمرة والحج.',
    keywords: ['تاكسي محلي في مكة', 'تاكسي من الفندق إلى الحرم', 'تاكسي داخل مكة', 'تاكسي للحجاج في مكة', 'تاكسي زيارة مكة', 'سائق خاص مكة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/taxi-in-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-makkah/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-makkah/',
        },
    },
    openGraph: {
        title: 'تاكسي في مكة | سيارات خاصة فاخرة على مدار الساعة | Taxi Service KSA',
        description: 'خدمة تاكسي خاص موثوقة في مكة. أسطول فاخر متوفر على مدار الساعة للسفر بين المدن وزيارة المعالم.',
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-makkah/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'خدمة تاكسي في مكة' }],
    },
};

export default function TaxiInMakkahPageArabic() {
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
        "serviceType": "خدمة تاكسي",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "مكة المكرمة"
        },
        "description": "خدمة تاكسي وسائق خاص فاخرة بالحجز المسبق على مدار الساعة، مقرها مكة المكرمة، المملكة العربية السعودية. تغطي جميع المسارات الداخلية بما في ذلك المدينة المنورة وجدة.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "يعتمد على المسار"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema-makkah-taxi-ar"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={['/makkah-clock-tower.webp', '/makkah-kaaba-night.webp']}
                h1Text="تاكسي مكة"
                bookingFormTitle="احصل على عرض سعر لتاكسي مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        خدمة سائق خاص فاخرة
                    </span>
                }
                subtitle="احجز مسبقاً سيارات خاصة موثوقة ودفع رباعي VIP لرحلات الحج والعمرة والتنقل بين المدن."
                location="متوفر على مدار الساعة | سائقون محليون | أسعار ثابتة"
            />

            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">الرئيسية</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/services/" className="text-gray-500 hover:text-primary transition-colors">الخدمات</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">تاكسي في مكة</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">متجه خارج مكة؟</h2>
                            <p className="text-gray-600">اختر وجهتك للاطلاع على تفاصيل المسار والأسعار.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/routes/makkah-madinah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى المدينة
                                </Button>
                            </Link>
                            <Link href="/routes/makkah-jeddah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى مطار جدة
                                </Button>
                            </Link>
                            <Link href="/routes/makkah-taif/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    تاكسي إلى الطائف
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and The "Why" */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">نقل رحلتك الروحانية</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            التاكسي الأكثر ثقة في مكة
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>قد يكون إيجاد <strong>تاكسي موثوق في مكة</strong> خلال مواسم الحج والعمرة المزدحمة أمراً صعباً للغاية. سواء كنت بحاجة إلى استقبال VIP سريع من فندقك القريب من الحرم (مثل جبل عمر)، أو رحلة مريحة طويلة إلى المدينة المنورة، نوفر خدمة سائق خاص بالحجز المسبق تُغنيك عن عناء استيقاف السيارات في الشارع.</p>
                            <p>نحن لا نعمل كتاكسي شارع تقليدي بعداد. نحن مزوّد نقل خاص متخصص في السفر الفاخر والمريح لمجموعات العمرة والعائلات وكبار الشخصيات. نظام أسعارنا الثابت والشفاف يعني أنك لن تضطر أبداً لمساومة السائقين على الأجرة في أوقات الازدحام.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">أسعار ثابتة</h3>
                            <p className="text-gray-600 text-sm">بدون زيادة أسعار خلال أوقات الصلاة أو المواسم المزدحمة. اعرف الأجرة بالضبط قبل ركوب السيارة.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">استقبال في الوقت المحدد</h3>
                            <p className="text-gray-600 text-sm">يتم جدولة سائقينا مسبقاً لضمان عدم تفويتك لأي رحلة طيران أو موعد صلاة.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">محترفون مرخصون</h3>
                            <p className="text-gray-600 text-sm">كل سيارة مؤمّنة بالكامل ويقودها سائق موثق يعرف شبكة طرق مكة المعقدة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">سيارات فاخرة</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">أسطول مكة VIP</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            من السيدان الحديثة إلى وسائل النقل الجماعي الواسعة، تم اختيارها بعناية لضمان الراحة خلال الرحلات الطويلة في جميع أنحاء المملكة العربية السعودية.
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

                                <Link href="/booking/" className="mt-8 relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary/20 rounded-xl group-hover:bg-primary group-hover:text-black">
                                    <span className="relative font-bold">احجز عبر واتساب لهذه السيارة</span>
                                </Link>
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
                            brandName="تاكسي سيرفس KSA - مكة"
                            description="الخيار الفاخر المفضل لمجموعات العمرة الدولية وكبار الشخصيات ورجال الأعمال الزائرين للمدينة المقدسة."
                            foundingDate="٢٠١٦"
                            licenseInfo="مرخصة رسمياً"
                            labels={{ verified: "مؤسسة موثقة", license: "رخصة نقل", since: "في الخدمة منذ" }}
                            metrics={[
                                { label: 'خبراء المسارات', value: '١٠٠٪', icon: MapPin },
                                { label: 'الالتزام بالمواعيد', value: '٢٤/٧', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 relative overflow-hidden">
                            <Star className="absolute -top-10 -right-10 w-48 h-48 text-yellow-100 opacity-50" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">لماذا لا نستخدم العدادات</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                تستخدم سيارات الأجرة التقليدية في مكة غالباً عدادات، مما قد يؤدي إلى تكاليف مرتفعة غير متوقعة عند الوقوع في ازدحام مروري كثيف حول الحرم، خصوصاً خلال رمضان أو موسم الحج.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10">
                                تعمل شركتنا بنظام **أجرة ثابتة** بشكل صارم. نقوم بتحليل المسافة ونوع السيارة والمسار الحالي مسبقاً. تحصل على سعر محدد. وحتى لو واجهنا ازدحاماً مرورياً خانقاً، فإن أجرتك لن ترتفع ولو بريال واحد.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Makkah" */}
            <MicroSemanticFAQ
                        contextName="Taxi In Makkah"
                isRtl={true}
                labels={{
                    title: "إجابات الخبراء: تاكسي في مكة",
                    subtitle: "حقائق مباشرة تليها آراء متخصصة",
                    quickAnswer: "الإجابة السريعة",
                    perspectives: "وجهات نظر",
                    readMore: "عرض التفاصيل الكاملة",
                    readLess: "عرض أقل"
                }}
                faqs={[
                    {
                        question: "كيف أطلب عرض سعر لتاكسي خاص في مكة؟",
                        shortAnswer: "احجز مسبقاً عبر البريد الإلكتروني.",
                        detailedAnswer: "يمكنك حجز خدمة تاكسي مكة مباشرة عبر نموذج الحجز في موقعنا أو بإرسال بريد إلكتروني لنا. أخبرنا بموقع الاستقبال في مكة، ووجهتك، والتاريخ، وحجم مجموعتك. سنؤكد لك سيارة VIP فوراً.",
                        perspectives: []
                    },
                    {
                        question: "هل يمكنكم توفير تاكسي من مكة إلى المدينة؟",
                        shortAnswer: "نعم، خدمة على مدار الساعة.",
                        detailedAnswer: "نعم، هذا هو مسارنا الأكثر طلباً. نوفر توصيلاً مباشراً ومريحاً بين المدن من فندقك في مكة إلى مكان إقامتك في المدينة المنورة مباشرة. يمكنك الاختيار من سياراتنا السيدان أو الدفع الرباعي الكبير من مرسيدس أو جي إم سي.",
                        perspectives: []
                    },
                    {
                        question: "هل لديكم سيارات كبيرة للعائلات في مكة؟",
                        shortAnswer: "نعم.",
                        detailedAnswer: "بالتأكيد. لدينا سيارات بسعة ٧ ركاب مثل كاديلاك إسكاليد وجي إم سي، بالإضافة إلى خيارات أكبر مثل مرسيدس فيتو (٧ ركاب)، ومرسيدس سبرينتر (١٤ راكباً)، وحافلة فاخرة للمجموعات حتى ٢٥ شخصاً مع أمتعتهم.",
                        perspectives: []
                    },
                    {
                        question: "هل أسعار التاكسي لديكم في مكة ثابتة؟",
                        shortAnswer: "نعم، ثابتة ١٠٠٪.",
                        detailedAnswer: "نعم. على عكس سيارات الأجرة في الشارع، نحن لا نستخدم عدادات. كل رحلة تُحجز من خلالنا لها سعر ثابت ومحدد مسبقاً. لن تدفع أي مبلغ إضافي بسبب تأخيرات المرور.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
