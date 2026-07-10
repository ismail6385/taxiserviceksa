import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Shield, MapPin, Car,
    Clock, Users, Star, Phone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'نقل خاص للسيدات في السعودية | سائق خاص وآمن | Taxi Service KSA',
    description: 'خدمة نقل خاصة وآمنة للسيدات في السعودية. سائقون محترفون في الرياض وجدة ومكة والمدينة. سيارات خاصة، رخصة رسمية، وتوفر على مدار الساعة.',
    keywords: [
        'سائق خاص للسيدات السعودية',
        'نقل خاص للنساء الرياض',
        'تاكسي آمن للسيدات',
        'سائقة خاصة السعودية',
        'نقل عائلي السعودية',
        'سائق خاص لجدة',
        'نقل آمن للمسافرات',
        'سيارة خاصة للسيدات',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/women-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/women-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/women-transport/',
            'x-default': 'https://taxiserviceksa.com/services/women-transport/',
        },
    },
    openGraph: {
        title: 'نقل خاص للسيدات في السعودية | سائق خاص وآمن',
        description: 'نقل خاص وآمن ومحترم للسيدات في الرياض وجدة ومكة والمدينة، متوفر على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/women-transport/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function WomenTransportPageArabic() {
    const useCases = [
        {
            title: 'المسافرات بمفردهن',
            description: 'استقبال آمن وخاص من المطار، وتوصيل للفنادق والمدينة للسيدات المسافرات بمفردهن في السعودية. سائق مخصص للراكبات.',
            icon: Star,
            scenarios: ['استقبال وتوديع المطار', 'من الفندق إلى وجهتك', 'عودة آمنة في وقت متأخر'],
        },
        {
            title: 'النقل العائلي',
            description: 'سيارة جمس يوكن أو هيونداي ستاريا مريحة للأمهات والأطفال. رحلات متعددة المحطات — المدرسة، المستشفى، التسوق، والنزهات.',
            icon: Users,
            scenarios: ['اصطحاب الأطفال من وإلى المدرسة', 'زيارات المستشفى والعيادات', 'التسوق والنزهات العائلية'],
        },
        {
            title: 'سيدات الأعمال',
            description: 'نقل تنفيذي احترافي لسيدات الأعمال لحضور الاجتماعات والمؤتمرات والفعاليات في الرياض وجدة.',
            icon: Shield,
            scenarios: ['من المطار إلى الحي التجاري', 'من الفندق إلى قاعات المؤتمرات', 'رحلات عمل متعددة الأيام'],
        },
        {
            title: 'الزيارات الطبية',
            description: 'نقل خاص وموثوق للسيدات لحضور المستشفيات والعيادات والمواعيد الطبية. السائق ينتظر ويوفر رحلة العودة.',
            icon: MapPin,
            scenarios: ['استقبال وانتظار عند المستشفى', 'توصيل للعيادات', 'رحلات الصيدلية والتعافي'],
        },
        {
            title: 'التسوق والمهام الشخصية',
            description: 'سائق مخصص لرحلات التسوق إلى مولات الرياض وجدة. يساعد السائق في حمل الأمتعة والتنقل بين الوجهات حسب وقتك.',
            icon: Car,
            scenarios: ['مول العرب ورياض بارك', 'رحلات البقالة والسوبرماركت', 'مهام شخصية متعددة المحطات'],
        },
        {
            title: 'العمرة والسفر الديني',
            description: 'نقل خاص ومريح للسيدات والعائلات المسافرات للعمرة. من مطار جدة إلى مكة، ومن مكة إلى المدينة بخصوصية تامة.',
            icon: Clock,
            scenarios: ['من مطار جدة إلى مكة', 'توصيل مكة إلى المدينة', 'زيارة المواقع المقدسة'],
        },
    ];

    const features = [
        'سائقون محترفون ومحترمون',
        'مرخصون من وزارة النقل',
        'سائقون تم التحقق من سجلهم',
        'سيارات خاصة — بدون مشاركة الرحلة',
        'جمس يوكن وستاريا للعائلات',
        'متوفر على مدار الساعة حتى في الليل',
        'الحجز عبر واتساب — بدون تطبيق',
        'سائقون يتحدثون العربية والإنجليزية والأردية',
        'مقاعد أطفال متوفرة عند الطلب',
        'خدمة من الباب إلى الباب في كل السعودية',
    ];

    const faqs = [
        {
            question: 'هل توجد خدمة سائق خاص وآمن للسيدات في السعودية؟',
            answer: 'نعم. توفر Taxi Service KSA خدمة نقل خاصة وآمنة للسيدات في جميع أنحاء السعودية. السائقون المخصصون للراكبات محترفون ومحترمون وتم التحقق من سجلهم. الخدمة متوفرة على مدار الساعة في الرياض وجدة ومكة والمدينة. يمكنك تحديد رغبتك في سائق مناسب للسيدات عند الحجز عبر واتساب.',
        },
        {
            question: 'هل يوجد نقل خاص للسيدات المسافرات بمفردهن في السعودية؟',
            answer: 'نعم. يمكن للمسافرات بمفردهن حجز سيارة خاصة مع سائق مخصص. على عكس تطبيقات النقل التي قد تخصص أي سائق، خدمتنا تخصص سائقاً موثوقاً ومحترفاً مسبقاً لرحلتك. السيارة خاصة تماماً — بدون ركاب آخرين. الخدمة متوفرة لتوصيل المطار واستقبال الفنادق والتنقل داخل المدينة.',
        },
        {
            question: 'هل يوجد تاكسي أو نقل آمن للسيدات في الرياض؟',
            answer: 'نعم. النقل الخاص المحجوز مسبقاً في الرياض هو الخيار الأكثر أماناً للسيدات مقارنة بالتاكسي في الشارع أو تطبيقات النقل. سائقونا مرخصون وبزي رسمي ومدربون باحترافية. السيارات مزودة بتتبع GPS. جميع الحجوزات تتضمن مشاركة اسم السائق وصورته ورقم السيارة مسبقاً عبر واتساب لمزيد من الأمان.',
        },
        {
            question: 'هل يمكن للعائلة مع الأطفال حجز سائق خاص في السعودية؟',
            answer: 'نعم. باقات النقل العائلي متوفرة بسيارة جمس يوكن إكس إل (٧ مقاعد) أو هيونداي ستاريا في آي بي (٧ مقاعد) للأمهات مع الأطفال. مقاعد الأطفال الرضع والصغار متوفرة عند الطلب بدون تكلفة إضافية. الرحلات متعددة المحطات — بما في ذلك المدرسة والمستشفى والتسوق — مدعومة بالكامل.',
        },
        {
            question: 'هل يوجد نقل خاص للسيدات في جدة؟',
            answer: 'نعم. النقل الخاص المناسب للسيدات متوفر في جدة لتوصيل المطار وجولات المدينة وزيارة البلد التاريخية والرحلات الطبية والتسوق. السائقون لديهم خبرة بطرق ومعالم جدة الرئيسية. الحجز يتم عبر واتساب بالعربية أو الإنجليزية.',
        },
        {
            question: 'هل يوجد نقل خاص للسيدات للعمرة في السعودية؟',
            answer: 'نعم. يمكن للمعتمرات والعائلات حجز نقل خاص من مطار جدة إلى فنادق مكة، ومن مكة إلى المدينة، ولزيارة المواقع المقدسة. السيارات واسعة ومكيفة ويقودها سائقون محترفون. تضمن هذه الخدمة الخصوصية والراحة طوال رحلة العمرة.',
        },
        {
            question: 'هل يمكن حجز نقل للسيدات لوصول متأخر في المطار؟',
            answer: 'نعم. النقل المناسب للسيدات متوفر على مدار الساعة، بما في ذلك الوصول في وقت متأخر من الليل أو الصباح الباكر. تفاصيل السائق تُشارك مسبقاً ويستقبلكِ السائق عند صالة الوصول بلوحة تحمل اسمك. يُنصح بشدة باستخدام هذه الخدمة بدلاً من تطبيقات التاكسي للسفر الليلي للسيدات.',
        },
        {
            question: 'هل توفرون نقلاً خاصاً لسيدات الأعمال في الرياض؟',
            answer: 'نعم. النقل التنفيذي لسيدات الأعمال متوفر في الرياض. تشمل الخدمة استقبال المطار، والتوصيل من الفندق إلى الحي التجاري، ورحلات العمل متعددة المحطات. السيارات من الفئة التنفيذية (تويوتا كامري، جمس يوكن) والسائقون بزي احترافي. الفوترة الشهرية متوفرة للحسابات المؤسسية.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'نقل خاص للسيدات في السعودية',
        serviceType: 'سائق خاص مناسب للسيدات',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'الرياض' },
            { '@type': 'City', name: 'جدة' },
            { '@type': 'City', name: 'مكة المكرمة' },
            { '@type': 'City', name: 'المدينة المنورة' },
            { '@type': 'AdministrativeArea', name: 'السعودية' },
        ],
        description: 'نقل خاص وآمن ومحترم للسيدات في السعودية. سائق مناسب للسيدات في الرياض وجدة ومكة والمدينة للمسافرات بمفردهن والعائلات وسيدات الأعمال.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="women-transport-schema-ar"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-2.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        نقل خاص للسيدات
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نقل خاص وآمن<br />
                        <span className="text-white/80">للسيدات في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        خدمة سائق خاص محترمة وآمنة للسيدات في الرياض وجدة ومكة والمدينة. المسافرات بمفردهن، العائلات، سيدات الأعمال، ومعتمرات — الجميع مرحب بهم.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — نقل السيدات <Shield className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة حتى وقت متأخر</li>
                            <li><strong className="text-white">المدن:</strong> الرياض، جدة، مكة، المدينة</li>
                            <li><strong className="text-white">بيانات السائق:</strong> تُشارك مسبقاً عبر واتساب</li>
                            <li><strong className="text-white">السيارات:</strong> خاصة — بدون مشاركة أبداً</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20خاص%20للسيدات%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجزي نقل خاص
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                استفسار عبر البريد
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* من نخدم */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من نخدم</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            نقل آمن وخاص لكل رحلة — سواء كنتِ مسافرة بمفردك أو مع العائلة أو للعمل أو للعمرة.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((u, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <u.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{u.description}</p>
                                <ul className="space-y-2">
                                    {u.scenarios.map((s, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا خدمتنا موثوقة</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* روابط داخلية */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> المدن</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">نقل السيدات في الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">نقل السيدات في جدة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">نقل السيدات في مكة</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">نقل السيدات في المدينة</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> الأسطول</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">جمس يوكن (للعائلات)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black">هيونداي ستاريا VIP</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black">تويوتا كامري (فردي)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> خدمات ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">سائق ثنائي اللغة</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">سائق خاص (بالساعة/يومي)</Link></li>
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">نقل العمرة</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">توصيل المطار</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* الأسئلة الشائعة */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن نقل السيدات</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-right hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pl-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* دعوة لإجراء */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        احجزي نقلاً خاصاً وآمناً للسيدات في السعودية
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        سفر فردي، نزهات عائلية، رحلات عمل، أو عمرة — نقل احترافي ومحترم متوفر على مدار الساعة في جميع أنحاء المملكة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20خاص%20للسيدات%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">حجز عبر واتساب</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">التفاصيل عبر البريد</Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/services/bilingual-chauffeur/" className="text-gray-400 hover:text-white underline">سائق ثنائي اللغة</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">سائق خاص</Link>
                        {' · '}
                        <Link href="/services/umrah-transport/" className="text-gray-400 hover:text-white underline">نقل العمرة</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
