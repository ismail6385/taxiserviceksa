import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, MapPin, Globe, Camera,
    Car, Users, Star, Sun, Compass
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'نقل سياحي في السعودية | سائق خاص للسياح | Taxi Service KSA',
    description: 'سيارة خاصة مع سائق للسياح في السعودية. جولات المدن، رحلات الصحراء، جولات التسوق، ومعالم سياحية في الرياض وجدة والعلا ومكة. سائقون يتحدثون الإنجليزية. احجز الآن.',
    keywords: [
        'سيارة سياحية مع سائق السعودية',
        'سائق للسياح الأجانب في السعودية',
        'سائق خاص للسياح الرياض',
        'استئجار سيارة دفع رباعي مع سائق للسياح',
        'سائق جولات سياحية الرياض',
        'نقل سياحي جدة',
        'سائق خاص لرحلات الصحراء السعودية',
        'رحلات برية فاخرة السعودية',
        'سائق للعائلات الأجنبية السعودية',
        'سائق جولة ليلية الرياض',
        'سائق جولات المدينة السعودية',
        'سائق سياحي للأمريكيين في السعودية',
        'سائق للسياح من الإمارات',
        'خدمة نقل سياحي فاخرة السعودية',
        'سائق لزوار موسم الرياض',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/tourism-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/tourism-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/tourism-transport/',
            'x-default': 'https://taxiserviceksa.com/services/tourism-transport/',
        },
    },
    openGraph: {
        title: 'نقل سياحي في السعودية | سائق خاص للسياح',
        description: 'سائق خاص للسياح في جميع أنحاء السعودية. جولات المدن، رحلات الصحراء، التسوق، والمعالم السياحية في الرياض وجدة والعلا ومكة. سائقون يتحدثون الإنجليزية.',
        url: 'https://taxiserviceksa.com/ar/services/tourism-transport/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function TourismTransportPageArabic() {
    const tourTypes = [
        {
            title: 'جولات الرياض الثقافية والمدينة',
            description: 'استكشف موقع الدرعية المدرج في اليونسكو، وحافة العالم، وقصر المصمك، وبرج المملكة برفقة سائق محلي خبير. جولات نهارية كاملة أو نصف يوم متاحة.',
            icon: Compass,
            highlights: ['موقع الدرعية التراثي', 'حافة العالم (جبل فِهرِيْن)', 'المتحف الوطني السعودي', 'فعاليات موسم الرياض'],
            link: '/locations/riyadh/',
        },
        {
            title: 'جولات جدة التاريخية والساحلية',
            description: 'اكتشف حي البلد التاريخي المدرج في اليونسكو، والكورنيش، والمسجد العائم، وأسواق جدة النابضة بالحياة. سائق خاص يستقبلك من فندقك.',
            icon: Camera,
            highlights: ['حي البلد التاريخي', 'إطلالات نافورة الملك فهد', 'كورنيش جدة', 'مدينة الشلال الترفيهية'],
            link: '/locations/jeddah/',
        },
        {
            title: 'جولات الصحراء والطبيعة',
            description: 'سائق خاص لرحلات الصحراء من الرياض — بما في ذلك حافة العالم الشهيرة، وفوهة الوهبة، ووادي حنيفة. سيارة دفع رباعي مريحة ضمن الخدمة.',
            icon: Sun,
            highlights: ['رحلة يوم إلى حافة العالم', 'فوهة الوهبة', 'نزهة وادي حنيفة', 'زيارة مزارع الإبل'],
            link: '/locations/riyadh/',
        },
        {
            title: 'رحلات العلا البرية الفاخرة',
            description: 'توصيل خاص بسائق خاص من المدينة المنورة أو الرياض إلى العلا. برامج رحلات يومية تشمل الحِجر (مدائن صالح)، ودادان، وبلدة العلا القديمة.',
            icon: Star,
            highlights: ['الحِجر (موقع تراث عالمي لليونسكو)', 'موقع دادان الأثري', 'قاعة مرايا للحفلات', 'بلدة العلا القديمة'],
            link: '/locations/alula/',
        },
        {
            title: 'جولات التسوق — الرياض وجدة',
            description: 'سائق مخصص لرحلات التسوق إلى مولات وأسواق الرياض. ينتظر السائق أثناء تسوقك، ويساعد في حمل الأمتعة، وينقلك بين الوجهات حسب وقتك.',
            icon: MapPin,
            highlights: ['مول العرب / مول السعودية', 'مول النخيل', 'رياض بارك', 'سوق البلد (جدة)'],
            link: '/locations/riyadh/',
        },
        {
            title: 'برامج سياحية متعددة المدن',
            description: 'نقل خاص يربط بين الرياض وجدة ومكة والمدينة والطائف والعلا. جدولة مرنة للمسافرين المستقلين والمجموعات السياحية.',
            icon: Globe,
            highlights: ['توصيل يومي من الرياض إلى جدة', 'مسار جدة ← مكة ← المدينة', 'تخطيط رحلات برية سعودية مخصصة', 'خيارات سيارات وحافلات جماعية'],
            link: '/routes/',
        },
    ];

    const visitorTypes = [
        { label: 'السياح الدوليون', detail: 'زوار من أمريكا وأوروبا والإمارات وجنوب آسيا' },
        { label: 'سياح دول الخليج', detail: 'زوار من الإمارات والكويت والبحرين وقطر وعُمان' },
        { label: 'زوار موسم الرياض', detail: 'الحضور للفعاليات وسياح الترفيه' },
        { label: 'سياح الأعمال', detail: 'يجمعون بين العمل والترفيه في الرياض أو جدة' },
        { label: 'المجموعات العائلية', detail: 'عائلات بحاجة إلى نقل واسع ومريح' },
        { label: 'المسافرات بمفردهن', detail: 'سائقون مناسبون للسيدات في جميع أنحاء السعودية' },
    ];

    const features = [
        'سائقون يتحدثون الإنجليزية والعربية والأردية',
        'بدون رسوم خفية — أسعار جولات ثابتة',
        'السائق ينتظر طوال فترة زيارتك',
        'جمس يوكن وهاياس وستاريا للمجموعات',
        'شامل الاستقبال والتوصيل من الفندق',
        'سائقون مرخصون من وزارة النقل',
        'أوقات انطلاق مرنة حتى الصباح الباكر',
        'برامج متعددة المحطات عند الطلب',
        'مقاعد أطفال متوفرة',
        'سائقون مناسبون للسيدات عند الطلب',
    ];

    const faqs = [
        {
            question: 'هل يمكنني استئجار سائق خاص للتجول في الرياض؟',
            answer: 'نعم. نوفر سائقين خاصين لجولات سياحية في الرياض ليوم كامل أو نصف يوم. تشمل الوجهات الشائعة الدرعية، وحافة العالم، والمتحف الوطني، وفعاليات موسم الرياض. يستقبلك السائق من فندقك، وينقلك إلى كل موقع، وينتظر أثناء استكشافك. يتوفر سائقون يتحدثون الإنجليزية.',
        },
        {
            question: 'هل توجد خدمة نقل سياحي خاصة للسياح الأجانب في السعودية؟',
            answer: 'نعم. توفر Taxi Service KSA خدمة سيارة خاصة مع سائق مخصصة للسياح الدوليين في السعودية. نخدم زواراً من الولايات المتحدة وأوروبا والإمارات وجميع دول الخليج. جميع السائقين يتحدثون الإنجليزية وملمّون بالمسارات والمعالم السياحية في الرياض وجدة والعلا ومكة.',
        },
        {
            question: 'هل يمكنني حجز سائق خاص لرحلة صحراوية من الرياض؟',
            answer: 'نعم. نوفر خدمة سائق خاص لرحلات الصحراء اليومية من الرياض. أشهر وجهة هي حافة العالم (جبل فِهرِيْن)، على بعد حوالي ٩٠ كم من الرياض. تشمل باقات اليوم الكامل (١٠–١٢ ساعة) استقبالاً من الفندق، ومساراً موجهاً، ووقت انتظار في الموقع، والعودة. تُستخدم سيارة دفع رباعي مناسبة للتضاريس الصحراوية.',
        },
        {
            question: 'هل تقدمون نقلاً سياحياً لزوار من الإمارات؟',
            answer: 'نعم. نخدم بانتظام سياح دول الخليج، بمن فيهم زوار من الإمارات والكويت والبحرين. يستأجر العديد من السياح الإماراتيين الزائرين للرياض لحضور الفعاليات أو الترفيه خدمة سائقنا الخاص لجولات المدينة والتسوق. يمكن الحجز عبر واتساب قبل الوصول إلى السعودية.',
        },
        {
            question: 'هل يوجد سائق خاص لجولات التسوق في الرياض؟',
            answer: 'نعم. تتيح لك خدمة سائق جولات التسوق زيارة عدة مولات وأسواق في الرياض دون القلق بشأن التنقل. ينتظر السائق عند كل موقع ويساعد في حمل الأمتعة. تشمل المحطات الشائعة مول العرب، ورياض بارك، ومول النخيل، وسوق الزل. تتوفر جولات تسوق لنصف يوم أو يوم كامل.',
        },
        {
            question: 'ما السيارة المناسبة لمجموعة سياحية في السعودية؟',
            answer: 'لمجموعات من ٥ إلى ٧ سياح، تعد جمس يوكن إكس إل أو هيونداي ستاريا VIP مثالية — واسعة ومريحة ومزودة بمساحة للأمتعة. للمجموعات الأكبر من ٨ إلى ١٤ شخصاً، يُنصح بتويوتا هاياس أو تويوتا كوستر. تأتي جميع السيارات مع سائق محترف.',
        },
        {
            question: 'هل يمكن للأمريكيين والسياح الغربيين حجز سائق خاص في السعودية؟',
            answer: 'نعم. نخدم بشكل متكرر السياح الأمريكيين والبريطانيين والأوروبيين وغيرهم من الزوار الغربيين إلى السعودية. سائقونا الناطقون بالإنجليزية يفهمون احتياجات الزوار الدوليين ويمكنهم المساعدة في التوجيه الأساسي والنصائح المحلية وتنسيق المطار. يتم الحجز عبر واتساب أو البريد الإلكتروني — بدون الحاجة لرقم هاتف سعودي.',
        },
        {
            question: 'هل توجد خدمة نقل سياحي لفعاليات موسم الرياض؟',
            answer: 'نعم. خلال موسم الرياض (عادة من أكتوبر إلى فبراير)، نوفر باقات نقل سياحي مخصصة لزوار الفعاليات. تشمل هذه الباقات الاستقبال من الفندق، والتوصيل إلى مواقع الفعاليات، والعودة في وقت متأخر بعد العروض. يُنصح بشدة بالحجز المسبق خلال أسابيع الذروة لموسم الرياض نظراً لارتفاع الطلب.',
        },
        {
            question: 'هل تقدمون رحلات برية فاخرة في جميع أنحاء السعودية؟',
            answer: 'نعم. تتوفر باقات رحلات برية فاخرة متعددة المدن تغطي مسارات مثل الرياض ← العلا، وجدة ← الطائف ← مكة، أو الرياض ← جدة مع محطات توقف. يُخصص سائق واحد لكامل البرنامج. تشمل السيارات جمس يوكن أو كاديلاك إسكاليد حسب حجم المجموعة.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمة النقل السياحي في السعودية',
        serviceType: 'نقل سياحي وسائق خاص',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'الرياض' },
            { '@type': 'City', name: 'جدة' },
            { '@type': 'City', name: 'العلا' },
            { '@type': 'City', name: 'مكة المكرمة' },
            { '@type': 'City', name: 'المدينة المنورة' },
            { '@type': 'City', name: 'الطائف' },
            { '@type': 'AdministrativeArea', name: 'السعودية' },
        ],
        description: 'سيارة خاصة مع سائق للسياح في السعودية. جولات المدن، رحلات صحراوية، جولات تسوق، ورحلات برية متعددة المدن. سائقون يتحدثون الإنجليزية في الرياض وجدة والعلا.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات النقل السياحي',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'جولة مشاهدة معالم الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'جولة حي جدة التاريخي' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'رحلة يوم صحراوية من الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'رحلة العلا البرية الفاخرة' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'جولة تسوق سعودية مع سائق' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'برنامج سياحي متعدد المدن' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="tourism-transport-schema-ar"
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
                        النقل السياحي في السعودية
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        سائق خاص للسياح<br />
                        <span className="text-white/80">في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        استكشف الرياض وجدة والعلا والصحراء السعودية مع سائقك الخاص الناطق بالإنجليزية. جولات المدن، رحلات التسوق، المغامرات الصحراوية، والرحلات البرية الفاخرة — كل ذلك في خدمة واحدة.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — النقل السياحي <Globe className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية، العربية، الأردية</li>
                            <li><strong className="text-white">الوجهات:</strong> الرياض، جدة، العلا، الطائف، مكة</li>
                            <li><strong className="text-white">أنواع الجولات:</strong> مدن، صحراء، تسوق، رحلات برية</li>
                            <li><strong className="text-white">الحجز:</strong> عبر واتساب قبل الوصول — بدون الحاجة لشريحة سعودية</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20سياحي%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز سائقاً سياحياً
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                استفسار عبر البريد للجولة المخصصة
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* أنواع الجولات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">باقات النقل السياحي</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            من مواقع التراث العالمي لليونسكو إلى مغامرات الصحراء — كل تجربة سعودية مع سائقك الخاص.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourTypes.map((tour, index) => (
                            <Link key={index} href={tour.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all h-full">
                                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                        <tour.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">{tour.title}</h3>
                                    <p className="text-gray-600 mb-5 leading-relaxed">{tour.description}</p>
                                    <ul className="space-y-2">
                                        {tour.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* أنواع الزوار */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من يستخدم خدمة النقل السياحي لدينا</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            نخدم سياحاً من جميع أنحاء العالم يزورون السعودية للترفيه والفعاليات والاستكشاف الثقافي.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {visitorTypes.map((v, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
                                <Users className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{v.label}</p>
                                    <p className="text-gray-500 text-xs mt-1">{v.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا يختارنا السياح</h2>
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
                                <MapPin className="w-4 h-4" /> أبرز الوجهات السياحية
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">سائق مشاهدة معالم الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">النقل السياحي في جدة</Link></li>
                                <li><Link href="/locations/alula/" className="text-gray-600 hover:text-black transition-colors">سائق خاص في العلا</Link></li>
                                <li><Link href="/locations/taif/" className="text-gray-600 hover:text-black transition-colors">جولات جبال الطائف</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع الوجهات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> أسطول السياحة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">جمس يوكن (مجموعات)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">تويوتا هاياس (مجموعات كبيرة)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black transition-colors">هيونداي ستاريا VIP</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">الأسطول الكامل ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Globe className="w-4 h-4" /> خدمات ذات صلة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">توصيل المطار</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">سائق خاص (بالساعة/يومي)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">خدمة الشوفير VIP</Link></li>
                                <li><Link href="/services/heritage-tours/" className="text-gray-600 hover:text-black transition-colors">الجولات التراثية</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة النقل السياحي</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">كل ما يحتاج السياح الدوليون معرفته عن استئجار سائق خاص في السعودية.</p>
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
                        استكشف السعودية بسائقك الخاص
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        جولات مدينة الرياض، رحلات جدة الساحلية، رحلات العلا التراثية، أو رحلات برية سعودية مخصصة — احجز سائقك السياحي الناطق بالإنجليزية اليوم.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20سياحي%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                استفسار عبر البريد للجولة المخصصة
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        متوفر أيضاً:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">خدمة الشوفير VIP</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">سائق خاص (بالساعة)</Link>
                        {' · '}
                        <Link href="/services/heritage-tours/" className="text-gray-400 hover:text-white underline">الجولات التراثية</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
