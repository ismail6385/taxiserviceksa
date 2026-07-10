import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Globe, MessageCircle,
    Users, Shield, Car, MapPin, Star
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'سائق يتحدث الإنجليزية في السعودية | سائق ثنائي اللغة في الرياض وجدة | Taxi Service KSA',
    description: 'سائق خاص يتحدث العربية والإنجليزية في السعودية. سائق ثنائي اللغة للزوار الأجانب والمقيمين والمسافرات في الرياض وجدة. مرخص ومحترف على مدار الساعة.',
    keywords: [
        'سائق يتحدث الإنجليزية في السعودية',
        'سائق ثنائي اللغة الرياض',
        'سائق عربي وإنجليزي جدة',
        'سائق خاص للأجانب في السعودية',
        'سائق للسياح الأمريكيين السعودية',
        'سائق مناسب للسيدات السعودية',
        'سائق للمقيمين الأجانب السعودية',
        'سائق يتحدث الأردية السعودية',
        'سائق سياحي ناطق بالإنجليزية الرياض',
        'أفضل سائق خاص للأجانب جدة',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/bilingual-chauffeur/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/bilingual-chauffeur/',
            'ar': 'https://taxiserviceksa.com/ar/services/bilingual-chauffeur/',
            'x-default': 'https://taxiserviceksa.com/services/bilingual-chauffeur/',
        },
    },
    openGraph: {
        title: 'سائق يتحدث الإنجليزية في السعودية | سائق ثنائي اللغة | Taxi Service KSA',
        description: 'استأجر سائقاً خاصاً يتحدث العربية والإنجليزية في السعودية. سائق ثنائي اللغة محترف للزوار الأجانب والمقيمين والمسافرات في الرياض وجدة.',
        url: 'https://taxiserviceksa.com/ar/services/bilingual-chauffeur/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function BilingualChauffeurPageArabic() {
    const languages = [
        {
            lang: 'الإنجليزية',
            flag: '🇬🇧',
            detail: 'يتواصل جميع سائقينا بثقة باللغة الإنجليزية. مثالي للزوار الأمريكيين والبريطانيين والأوروبيين والدوليين الذين يحتاجون تواصلاً واضحاً طوال رحلتهم.',
        },
        {
            lang: 'العربية',
            flag: '🇸🇦',
            detail: 'سائقون ناطقون بالعربية بطلاقة في كامل أسطولنا، يجمعون بين معرفة محلية عميقة وخدمة احترافية لعملائنا السعوديين والعرب.',
        },
        {
            lang: 'الأردية',
            flag: '🇵🇰',
            detail: 'يتحدث كثير من سائقينا الأردية بطلاقة أيضاً، لخدمة الجالية الباكستانية وجنوب آسيا الكبيرة في السعودية، وكذلك المعتمرين الناطقين بالأردية.',
        },
    ];

    const clientGroups = [
        {
            title: 'زوار الأعمال الدوليون',
            description: 'تنفيذيون ووفود أجنبية قادمون إلى الرياض أو جدة لحضور الاجتماعات والمؤتمرات. تواصل بالإنجليزية طوال الرحلة — من المطار إلى قاعة الاجتماعات.',
            icon: Shield,
            scenarios: ['استقبال من مطار الرياض إلى مركز الملك عبدالله المالي', 'من الفندق إلى الحي التجاري', 'نقل لاجتماعات متعددة الأيام'],
        },
        {
            title: 'المقيمون الأجانب وطويلو الإقامة',
            description: 'مقيمون أجانب يعيشون ويعملون في السعودية ويحتاجون سائقاً ثنائي اللغة وموثوقاً للتنقلات اليومية والنزهات العائلية والتسوق ورحلات المطار.',
            icon: Star,
            scenarios: ['توصيل يومي للمدرسة أو العمل', 'نزهات عائلية في نهاية الأسبوع', 'توصيل للمطار لرحلات الطيران'],
        },
        {
            title: 'المسافرات والعائلات',
            description: 'يمكن للراكبات المسافرات بمفردهن أو مع العائلة طلب سائق مناسب للسيدات. جميع السائقين مدربون باحترافية ومحترمون وتم التحقق من سجلهم.',
            icon: Users,
            scenarios: ['توصيل مطار للمسافرات بمفردهن', 'رحلات تسوق عائلية', 'زيارات المستشفى والعيادات'],
        },
        {
            title: 'السياح والزوار الأجانب',
            description: 'سياح دوليون — من بينهم أمريكيون وأوروبيون وزوار من دول الخليج — يحتاجون سائقاً مرشداً يتحدث الإنجليزية لجولات المدينة والمعالم السياحية والتسوق.',
            icon: Globe,
            scenarios: ['جولات معالم الرياض', 'جولات البلد التاريخية في جدة', 'رحلات يوم واحد إلى الصحراء'],
        },
        {
            title: 'السياحة العلاجية',
            description: 'مرضى ومرافقون من العائلة يزورون مستشفيات في الرياض أو جدة ويحتاجون تواصلاً واضحاً وموثوقاً مع سائقهم طوال رحلة العلاج.',
            icon: Car,
            scenarios: ['استقبال وانتظار عند المستشفى', 'رحلات الصيدلية والتعافي', 'نقل لفترة علاج متعددة الأيام'],
        },
        {
            title: 'سياح الخليج والعرب',
            description: 'زوار من الإمارات والكويت والبحرين وقطر وعُمان يفضلون سائقين ناطقين بالعربية يمتلكون معرفة محلية عميقة بمدن السعودية.',
            icon: MapPin,
            scenarios: ['جولات مدن للسياح الإماراتيين', 'رحلات عائلية خليجية', 'رحلات تسوق ومطاعم'],
        },
    ];

    const features = [
        'جميع السائقين يتحدثون العربية والإنجليزية',
        'كثير من السائقين يتحدثون الأردية أيضاً',
        'تدريب احترافي على التواصل',
        'معرفة محلية بالشوارع والمعالم والمستشفيات',
        'سائقون مناسبون للسيدات عند الطلب',
        'مرخصون من وزارة النقل',
        'زي رسمي واحترافي متوفر',
        'تواصل عبر واتساب قبل الرحلة وأثناءها',
        'متوفر على مدار الساعة في الرياض وجدة',
        'الحجز بالإنجليزية — لا حاجة للعربية',
    ];

    const faqs = [
        {
            question: 'هل يوجد سائقون يتحدثون الإنجليزية في السعودية؟',
            answer: 'نعم. جميع سائقي Taxi Service KSA يتحدثون العربية والإنجليزية. السائقون الناطقون بالإنجليزية متوفرون على مدار الساعة في الرياض وجدة ومكة والمدينة. الحجز أيضاً يتم بالإنجليزية عبر واتساب أو البريد الإلكتروني — لا تحتاج للتحدث بالعربية أو امتلاك رقم هاتف سعودي للحجز.',
        },
        {
            question: 'هل توجد خدمة سائق ثنائي اللغة (عربي وإنجليزي) في الرياض؟',
            answer: 'نعم. جميع سائقينا في الرياض ثنائيو اللغة (عربي وإنجليزي)، وكثير منهم يتحدثون الأردية أيضاً. السائقون ثنائيو اللغة مفيدون جداً للزوار الدوليين الذين يحتاجون معرفة محلية إلى جانب تواصل واضح بالإنجليزية — خاصة عند التنقل بين الأحياء التجارية والمستشفيات والمواقع السياحية.',
        },
        {
            question: 'هل يمكنني حجز سائق مناسب للسيدات في السعودية؟',
            answer: 'نعم. خدمة السائق المناسب للسيدات متوفرة في الرياض وجدة ومكة والمدينة. يمكن للراكبات المسافرات بمفردهن أو مع العائلة طلب سائق مخصص للراكبات. جميع السائقين محترفون ومحترمون وتم التحقق من سجلهم. الخدمة متوفرة على مدار الساعة.',
        },
        {
            question: 'هل يوجد سائق خاص للأجانب والمقيمين في السعودية؟',
            answer: 'نعم. نخدم بانتظام المقيمين الأجانب والزوار الدوليين في جميع أنحاء السعودية. يفهم سائقونا ثنائيو اللغة احتياجات المقيمين غير السعوديين — من التنقل في مناطق غير مألوفة إلى التواصل نيابة عنكم مع الجهات المحلية. باقات سائق يومية وأسبوعية وشهرية متوفرة للمقيمين.',
        },
        {
            question: 'هل لديكم سائقون للسياح الأمريكيين أو الغربيين في السعودية؟',
            answer: 'نعم. نخدم بشكل متكرر السياح الأمريكيين والبريطانيين والأوروبيين والأستراليين وغيرهم من الزوار الغربيين. سائقونا الناطقون بالإنجليزية على دراية باستفسارات واحتياجات الزوار الغربيين — بما في ذلك الأسئلة الشائعة حول العادات المحلية والمعالم السياحية وتوصيات المطاعم الحلال ومواقيت الصلاة. يمكن الحجز دولياً قبل وصولكم.',
        },
        {
            question: 'هل يتحدث بعض السائقين الأردية في السعودية؟',
            answer: 'نعم. يتحدث كثير من سائقينا الأردية بطلاقة إلى جانب العربية والإنجليزية. هذا مفيد بشكل خاص للزوار الباكستانيين والهنود والبنغلاديشيين — بمن فيهم المعتمرون ورجال الأعمال من جنوب آسيا. حددوا رغبتكم في سائق يتحدث الأردية عند الحجز عبر واتساب.',
        },
        {
            question: 'كيف أحجز سائقاً يتحدث الإنجليزية في السعودية من الخارج؟',
            answer: 'يتم الحجز عبر واتساب (966552202642+) أو البريد الإلكتروني (taxiserviceksa9988@gmail.com) بالكامل بالإنجليزية. لا حاجة لشريحة سعودية أو رقم محلي. زوّدونا بتاريخ وصولكم، ورقم رحلة الطيران إن وجد، ومكان الاستلام والوجهة. نؤكد الحجز عبر واتساب ونرسل بيانات السائق قبل رحلتكم.',
        },
        {
            question: 'هل يوجد سائق للسياح الدوليين الذين لا يتحدثون العربية؟',
            answer: 'نعم. خدمة السائق ثنائي اللغة لدينا مصممة خصيصاً للسياح الذين لا يتحدثون العربية. يساعد السائقون في التنقل وتقديم نصائح محلية والتعرف على المعالم وترجمة بسيطة في الفنادق والمطاعم. للجولات النهارية الكاملة، يمكن للسائق أن يكون بمثابة مرشد غير رسمي بالإنجليزية طوال البرنامج.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'سائق ثنائي اللغة يتحدث الإنجليزية في السعودية',
        serviceType: 'خدمة سائق خاص ثنائي اللغة',
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
        description: 'خدمة سائق خاص يتحدث العربية والإنجليزية في السعودية. سائق ثنائي اللغة للزوار الأجانب والمقيمين والمسافرات والسياح الدوليين في الرياض وجدة.',
        availableLanguage: [
            { '@type': 'Language', name: 'الإنجليزية' },
            { '@type': 'Language', name: 'العربية' },
            { '@type': 'Language', name: 'الأردية' },
        ],
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="bilingual-chauffeur-schema-ar"
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
                        خدمة سائق ثنائي اللغة
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        سائق يتحدث الإنجليزية<br />
                        <span className="text-white/80">في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        خدمة سائق ثنائي اللغة محترفة بالعربية والإنجليزية في الرياض وجدة ومكة والمدينة. مثالية للزوار الأجانب والمقيمين والمسافرات والسياح الدوليين.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — السائق ثنائي اللغة <Globe className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية، العربية، الأردية</li>
                            <li><strong className="text-white">المدن:</strong> الرياض، جدة، مكة، المدينة</li>
                            <li><strong className="text-white">مناسب للسيدات:</strong> متوفر عند الطلب على مدار الساعة</li>
                            <li><strong className="text-white">الحجز:</strong> بالإنجليزية عبر واتساب — لا حاجة للعربية</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20سائقاً%20يتحدث%20الإنجليزية%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز سائقاً ثنائي اللغة
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

            {/* اللغات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اللغات التي يتحدثها سائقونا</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            لا حواجز لغوية بينك وبين سائقك — تواصل بطلاقة طوال رحلتك.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {languages.map((l, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-black hover:shadow-xl transition-all">
                                <div className="text-5xl mb-4">{l.flag}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{l.lang}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{l.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* من نخدم */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من يستخدم خدمة السائق ثنائي اللغة لدينا</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            من المسافرات بمفردهن إلى الوفود التجارية الدولية — سائقونا الناطقون بالإنجليزية يخدمون كل أنواع الزوار الأجانب في السعودية.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientGroups.map((group, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <group.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{group.description}</p>
                                <ul className="space-y-2">
                                    {group.scenarios.map((s, i) => (
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ما الذي يميز سائقينا ثنائيي اللغة</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* روابط داخلية */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> المدن المغطاة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">سائق إنجليزي في الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">سائق إنجليزي في جدة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">سائق إنجليزي في مكة</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black transition-colors">سائق إنجليزي في المدينة</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع المدن ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" /> خدمات شائعة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">نقل سياحي</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">توصيل المطار</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">سائق خاص (يومي/بالساعة)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">سائق كبار الشخصيات</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> السيارات الشائعة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">جمس يوكن (للعائلات والمجموعات)</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black transition-colors">تويوتا كامري (تنفيذي)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black transition-colors">هيونداي ستاريا (فان VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* الأسئلة الشائعة */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن السائق ثنائي اللغة</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">أسئلة شائعة من الزوار الأجانب حول السائقين الناطقين بالإنجليزية في السعودية.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
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
                        احجز سائقاً يتحدث الإنجليزية في السعودية
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        تواصل بوضوح مع سائقك من لحظة هبوط طائرتك. خدمة السائق ثنائي اللغة متوفرة على مدار الساعة في الرياض وجدة ومكة والمدينة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20سائقاً%20يتحدث%20الإنجليزية%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                التفاصيل عبر البريد
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        خدمات أخرى متوفرة:{' '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">نقل سياحي</Link>
                        {' · '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">سائق كبار الشخصيات</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">سائق خاص</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
