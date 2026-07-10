import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Star, Shield, Crown, Globe,
    Car, Users, Clock, MapPin, Phone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'خدمة شوفير VIP في السعودية | نقل ملكي ودبلوماسي | Taxi Service KSA',
    description: 'خدمة شوفير VIP فاخرة لضيوف العائلة المالكة والدبلوماسيين وكبار الزوار في السعودية. سائقون مرخصون وموثوقون في الرياض وجدة. سيارات دفع رباعي وسيدان فاخرة متاحة على مدار الساعة.',
    keywords: [
        'شوفير VIP السعودية',
        'سائق لضيوف العائلة المالكة الرياض',
        'نقل خاص للدبلوماسيين الرياض',
        'سائق لضيوف السفارات',
        'خدمات نقل النخبة في السعودية',
        'شوفير عائلي VIP السعودية',
        'شوفير فاخر الرياض',
        'سائق للفنادق الفاخرة الرياض',
        'رحلات برية فاخرة السعودية',
        'شوفير تنفيذي السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/vip-chauffeur/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/vip-chauffeur/',
            'ar': 'https://taxiserviceksa.com/ar/services/vip-chauffeur/',
            'x-default': 'https://taxiserviceksa.com/services/vip-chauffeur/',
        },
    },
    openGraph: {
        title: 'خدمة شوفير VIP في السعودية | نقل ملكي ودبلوماسي',
        description: 'شوفير VIP فاخر لضيوف العائلة المالكة والدبلوماسيين ونزلاء الفنادق وكبار الزوار في الرياض وجدة. موثوق ومرخص على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/vip-chauffeur/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function VIPChauffeurPageArabic() {
    const clientTypes = [
        {
            title: 'ضيوف العائلة المالكة والحكومة',
            description: 'نقل موثوق ومراعٍ للبروتوكول لضيوف العائلة المالكة والمسؤولين الحكوميين وكبار الزوار الرسميين. سائقون مرخصون بالكامل، تم التحقق من سجلهم، ومدربون على آداب البروتوكول الرسمي.',
            icon: Crown,
            examples: ['التنقل من وإلى القصور الملكية', 'من القصر إلى الوزارات', 'استقبال المناسبات الرسمية'],
        },
        {
            title: 'الدبلوماسيون وموظفو السفارات',
            description: 'خدمة شوفير موثوقة للسفراء وموظفي القنصليات ووفود وزارات الخارجية الزائرة للحي الدبلوماسي في الرياض وما حوله.',
            icon: Shield,
            examples: ['التنقل من السفارة إلى وزارة الخارجية', 'نقل داخل الحي الدبلوماسي', 'استقبال المؤتمرات والقمم'],
        },
        {
            title: 'الرؤساء التنفيذيون وكبار المسؤولين',
            description: 'استقبال تنفيذي من المطار ونقل داخل المدينة لكبار المسؤولين وأعضاء مجالس الإدارة والوفود التجارية القادمة إلى الرياض أو جدة.',
            icon: Star,
            examples: ['التنقل التنفيذي في KAFD', 'ممر أعمال طريق الملك فهد', 'من الفندق إلى قاعة الاجتماعات'],
        },
        {
            title: 'خدمة كونسيرج الفنادق الفاخرة',
            description: 'شريك النقل المفضل لنزلاء الفنادق الخمس نجوم في الرياض وجدة. خدمة سلسة من الفندق إلى الوجهة عند الطلب.',
            icon: MapPin,
            examples: ['التنقل من فندق فور سيزونز الرياض', 'استقبال ريتز كارلتون', 'ماندارين أورينتال جدة'],
        },
        {
            title: 'زوار كبار الشخصيات الدوليون',
            description: 'تجربة شوفير مصممة خصيصاً للزوار الدوليين الحاضرين للفعاليات السعودية والمناسبات الرياضية والجولات الثقافية بما في ذلك موسم الرياض وفورمولا إي.',
            icon: Globe,
            examples: ['نقل فعاليات موسم الرياض', 'استقبال فورمولا إي والدرعية', 'رحلات العلا البرية الفاخرة'],
        },
        {
            title: 'نقل عائلي VIP',
            description: 'سيارات خاصة وواسعة بسائق خاص للعائلات البارزة التي تحتاج إلى الراحة والخصوصية والمرونة في برامج تنقل متعددة المحطات داخل المدينة.',
            icon: Users,
            examples: ['جولة تسوق مع سائق', 'سفر عائلي متعدد المدن', 'التنقل من المطار إلى الفيلا'],
        },
    ];

    const features = [
        'سائقون مرخصون من وزارة النقل',
        'سائقون تم التحقق من سجلهم وفحصهم بعناية',
        'زي عمل رسمي كمعيار أساسي',
        'خصوصية وسرية تامة',
        'سائقون يتحدثون الإنجليزية والعربية والأردية',
        'أسطول من جمس يوكن ومرسيدس الفئة S وكاديلاك إسكاليد',
        'تخطيط المسار قبل الرحلة ضمن الخدمة',
        'متوفر على مدار الساعة حتى في العطلات',
        'خدمة من الباب إلى الباب في جميع أنحاء السعودية',
        'سائقون مناسبون للسيدات متاحون',
    ];

    const vehicles = [
        { name: 'جمس يوكن إكس إل', class: 'دفع رباعي فاخر', seats: '٦–٧', ideal: 'المجموعات والعائلات والدبلوماسيين' },
        { name: 'كاديلاك إسكاليد', class: 'دفع رباعي فائق الفخامة', seats: '٦–٧', ideal: 'ضيوف العائلة المالكة والرؤساء التنفيذيون' },
        { name: 'مرسيدس-بنز الفئة S', class: 'سيدان تنفيذي', seats: '٣', ideal: 'التنفيذيون المنفردون ووصول كبار الشخصيات' },
        { name: 'جينيسيس G80', class: 'سيدان فاخر', seats: '٣', ideal: 'تنفيذيو الأعمال ونزلاء الفنادق' },
        { name: 'هيونداي ستاريا VIP', class: 'فان فاخر', seats: '٧', ideal: 'عائلات كبار الشخصيات والوفود' },
    ];

    const faqs = [
        {
            question: 'هل تقدمون خدمة شوفير لضيوف العائلة المالكة والحكومة في الرياض؟',
            answer: 'نعم. نقدم خدمة شوفير موثوقة ومراعية للبروتوكول لضيوف العائلة المالكة والمسؤولين الحكوميين في الرياض. جميع السائقين مرخصون من وزارة النقل، تم التحقق من سجلهم، ومدربون على آداب البروتوكول الرسمي. تشمل خيارات السيارات جمس يوكن إكس إل وكاديلاك إسكاليد للوفود متعددة الركاب.',
        },
        {
            question: 'هل يمكنكم ترتيب نقل خاص للدبلوماسيين وموظفي السفارات في الرياض؟',
            answer: 'نعم. نخدم بانتظام موظفي السفارات والبعثات الدبلوماسية في الحي الدبلوماسي بالرياض. يفهم سائقونا متطلبات البروتوكول ويعملون بسرية تامة. يُنصح بالحجز المسبق لاحتياجات النقل الدبلوماسي المتكررة. الفوترة الشهرية متوفرة للسفارات والقنصليات.',
        },
        {
            question: 'ما السيارات المستخدمة لخدمة شوفير VIP في السعودية؟',
            answer: 'يُخصص لعملاء VIP سيارات كاديلاك إسكاليد أو جمس يوكن إكس إل أو مرسيدس-بنز الفئة S أو هيونداي ستاريا VIP حسب حجم المجموعة والتفضيل. جميع السيارات حديثة، تتم صيانتها بانتظام، وتُحافظ على أعلى معايير النظافة. يمكن تحديد اختيار السيارة عند الحجز.',
        },
        {
            question: 'هل يتوفر سائق مناسب للسيدات في الرياض أو جدة؟',
            answer: 'نعم. تتوفر خدمة سائق مناسب للسيدات. يمكن للراكبات المسافرات بمفردهن أو مع عائلاتهن طلب سائق مخصص. جميع سائقينا مدربون باحترافية ومحترمون. تتوفر هذه الخدمة في الرياض وجدة ومكة والمدينة.',
        },
        {
            question: 'هل يتحدث سائقوكم الإنجليزية لضيوف VIP الدوليين؟',
            answer: 'نعم. جميع شوفيرية VIP يتحدثون الإنجليزية والعربية بطلاقة. يتحدث الكثير منهم الأردية أيضاً للوفود من جنوب آسيا. يُختار السائقون المخصصون لعملاء VIP خصيصاً بناءً على مهارات التواصل والمعرفة المحلية والحضور الاحترافي.',
        },
        {
            question: 'هل يمكنني حجز شوفير VIP لبرنامج يوم كامل أو عدة أيام في السعودية؟',
            answer: 'نعم. تتوفر باقات شوفير VIP ليوم كامل (٨–١٠ ساعات) ولعدة أيام. يبقى السائق مخصصاً لك حصرياً طوال فترة الحجز. تشمل البرامج الشائعة رحلات العلا البرية الفاخرة، وجولات مدينة الرياض، والتوصيل الخاص من جدة إلى مكة مع الانتظار.',
        },
        {
            question: 'كيف أحجز خدمة شوفير VIP لفندق فاخر في السعودية؟',
            answer: 'يمكن حجز شوفير VIP للفنادق عبر واتساب أو البريد الإلكتروني بإشعار مسبق من ٢٤ إلى ٤٨ ساعة للطلبات العادية. للوفود الكبيرة أو الحجوزات متعددة الأيام، يُنصح بإشعار مسبق مدته ٧٢ ساعة. ننسق مباشرة مع فرق كونسيرج الفنادق في فور سيزونز الرياض وريتز كارلتون وماندارين أورينتال جدة.',
        },
        {
            question: 'هل تتوفر خدمة شوفير VIP لموسم الرياض والفعاليات الكبرى؟',
            answer: 'نعم. نوفر باقات شوفير مخصصة للفعاليات مثل موسم الرياض، وفورمولا إي، وبينالي الدرعية، والمؤتمرات الكبرى. يُنصح بشدة بالحجز المسبق خلال فترات الذروة (أكتوبر–فبراير). تتوفر باقات متعددة الليالي مع سائق مخصص للوفود المشاركة في الفعاليات.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمة شوفير VIP في السعودية',
        serviceType: 'شوفير VIP ونقل فاخر',
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
        description: 'خدمة شوفير VIP فاخرة لضيوف العائلة المالكة والدبلوماسيين والرؤساء التنفيذيين وكبار الزوار في جميع أنحاء السعودية. سائقون موثوقون ومرخصون بسيارات فاخرة.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            availabilityStarts: '00:00',
            availabilityEnds: '23:59',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات شوفير VIP',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نقل ضيوف العائلة المالكة والحكومة' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'خدمة الشوفير الدبلوماسي' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'استقبال تنفيذي من المطار' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل الفنادق الفاخرة' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'شوفير VIP ليوم كامل' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="vip-chauffeur-schema-ar"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        شوفير VIP وفاخر
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        خدمة شوفير VIP خاصة<br />
                        <span className="text-white/80">في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        شوفيرية موثوقون ومرخصون لضيوف العائلة المالكة والدبلوماسيين والتنفيذيين وكبار الزوار في الرياض وجدة ومكة وما وراءها. أسطول فاخر. متوفر على مدار الساعة.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — شوفير VIP <Crown className="w-4 h-4 text-yellow-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">الأسطول:</strong> جمس يوكن، كاديلاك إسكاليد، مرسيدس الفئة S</li>
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية، العربية، الأردية</li>
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة بما في ذلك عطلات نهاية الأسبوع والعطلات الرسمية</li>
                            <li><strong className="text-white">التغطية:</strong> الرياض، جدة، مكة، المدينة، العلا</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20خدمة%20شوفير%20VIP" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز شوفير VIP
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                استفسار عبر البريد لعرض سعر مخصص
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
                            من نقل البروتوكول الملكي إلى السياحة الفاخرة — تغطي خدمة شوفير VIP لدينا كل احتياج سفر بارز في المملكة.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientTypes.map((type, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <type.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">{type.description}</p>
                                <ul className="space-y-2">
                                    {type.examples.map((ex, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {ex}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* أسطول VIP */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختيارات أسطول VIP</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            اختر من بين أكثر السيارات الفاخرة الموثوقة في السعودية. جميعها بسائق خاص، ومتاحة على مدار الساعة.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">السيارة</th>
                                    <th className="px-6 py-4 font-bold">الفئة</th>
                                    <th className="px-6 py-4 font-bold">المقاعد</th>
                                    <th className="px-6 py-4 font-bold">الأنسب لـ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.class}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-gray-500 text-sm">
                        عرض المواصفات الكاملة للأسطول ←{' '}
                        <Link href="/fleet/" className="text-black font-bold hover:underline">استكشف جميع السيارات</Link>
                    </p>
                </div>
            </section>

            {/* المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار خدمة شوفير VIP لدينا</h2>
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
                                <Car className="w-4 h-4" /> أسطول VIP
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black transition-colors">كاديلاك إسكاليد</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">جمس يوكن إكس إل</Link></li>
                                <li><Link href="/fleet/mercedes-s-class/" className="text-gray-600 hover:text-black transition-colors">مرسيدس-بنز الفئة S</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> المواقع الرئيسية
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">شوفير VIP الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">شوفير VIP جدة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">نقل VIP مكة</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع المواقع ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> خدمات ذات صلة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">السفر المؤسسي</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">توصيل المطار</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">سائق خاص (بالساعة)</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">النقل السياحي</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة شوفير VIP</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">كل ما تحتاج معرفته عن حجز نقل VIP خاص في السعودية.</p>
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
                        احجز شوفيرك الخاص من فئة VIP في السعودية
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        متكتم، ودقيق في المواعيد، ومحترف. احجز شوفيرك الفاخر لضيوف العائلة المالكة أو الدبلوماسيين أو التنفيذيين أو سفر العائلة النخبوي في جميع أنحاء المملكة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20خدمة%20شوفير%20VIP" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                استفسار عبر البريد لعرض سعر
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        متوفر أيضاً:{' '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">السفر المؤسسي</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">توصيل المطار</Link>
                        {' · '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">النقل السياحي</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
