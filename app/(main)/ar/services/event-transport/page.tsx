import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Calendar, Users, Star,
    MapPin, Music, Briefcase, Heart, Building2, Car
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'نقل الفعاليات والأفراح في السعودية | سائق للمؤتمرات والمعارض | Taxi Service KSA',
    description: 'نقل احترافي للفعاليات — الأفراح والمؤتمرات والمعارض وفعاليات الشركات في الرياض وجدة. سائق خاص للضيوف، استقبال كبار الشخصيات، ولوجستيات المجموعات. احجز الآن.',
    keywords: [
        'حجز سائق للفعاليات في السعودية',
        'نقل خاص لضيوف الأفراح',
        'نقل ضيوف الفعاليات الرياض',
        'نقل ضيوف الأفراح السعودية',
        'سائق للمؤتمرات الرياض',
        'نقل معارض الرياض',
        'سائق خاص للمعارض الرياض',
        'نقل فعاليات الشركات الرياض',
        'خدمة نقل الأفراح السعودية',
        'شركة نقل فعاليات الرياض',
        'سائق فعاليات كبار الشخصيات السعودية',
        'نقل جماعي للفعاليات السعودية',
        'باص نقل مؤتمرات الرياض',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/event-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/event-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/event-transport/',
            'x-default': 'https://taxiserviceksa.com/services/event-transport/',
        },
    },
    openGraph: {
        title: 'نقل الفعاليات والأفراح في السعودية | سائق للمؤتمرات والأفراح | Taxi Service KSA',
        description: 'سائق خاص ونقل جماعي للأفراح والمؤتمرات والمعارض وفعاليات الشركات في الرياض وجدة. استقبال كبار الشخصيات، نقل الضيوف، ولوجستيات فعاليات متكاملة.',
        url: 'https://taxiserviceksa.com/ar/services/event-transport/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function EventTransportPageArabic() {
    const eventTypes = [
        {
            title: 'نقل ضيوف الأفراح',
            description: 'نقل منسق لضيوف حفلات الزفاف والاستقبالات في الرياض وجدة. تخصيص عدة سيارات لموجات الوصول والمغادرة، مع إمكانية نقل خاص لموكب العروسين.',
            icon: Heart,
            details: ['نقل الضيوف من الفندق إلى القاعة', 'سائق خاص لموكب العروسين', 'تنسيق نقاط استقبال متعددة', 'نقل العودة في وقت متأخر من الليل'],
        },
        {
            title: 'نقل المؤتمرات والقمم',
            description: 'أسطول سيارات مخصص للمؤتمرات متعددة الأيام في مراكز المؤتمرات بالرياض وقاعات مركز الملك عبدالله المالي والفنادق الخمس نجوم، مع استقبال من المطار للمتحدثين والمندوبين.',
            icon: Briefcase,
            details: ['نقل المندوبين من المطار إلى الفندق', 'استقبال كبار المتحدثين من المطار', 'نقل مكوكي لمركز المؤتمرات', 'تخصيص أسطول لعدة أيام'],
        },
        {
            title: 'نقل المعارض',
            description: 'حلول نقل جماعي للعارضين والحضور في مركز الرياض الدولي للمؤتمرات والمعارض، ومركز جدة للمنتديات والفعاليات، وكبرى المعارض التجارية.',
            icon: Building2,
            details: ['نقل مكوكي لمركز الرياض الدولي للمعارض', 'رحلات يومية من الفندق إلى مركز المعرض', 'دعم نقل معدات العارضين', 'باقات متعددة الأيام للحضور'],
        },
        {
            title: 'موسم الرياض والفعاليات الترفيهية',
            description: 'نقل ليالي الفعاليات لعروض موسم الرياض وسباقات فورمولا إي وفعاليات الدرعية والعروض الثقافية. حجز مسبق لتجنب ارتفاع الأسعار وفوضى مواقف السيارات.',
            icon: Music,
            details: ['الوصول والعودة من موقع العرض', 'من الفندق إلى بوليفارد الرياض', 'استقبال في وقت متأخر بعد الفعالية', 'نقل جماعي للمجموعات'],
        },
        {
            title: 'فعاليات الشركات والجولات الترويجية',
            description: 'نقل تنفيذي للجولات الترويجية للمستثمرين وإطلاق المنتجات وحفلات عشاء الشركات في الرياض وجدة. تتوفر خيارات سيارات بعلامة الشركة عند الطلب.',
            icon: Star,
            details: ['لوجستيات جولات المستثمرين الترويجية', 'نقل ضيوف إطلاق المنتجات', 'وصول ضيوف حفلات عشاء الشركات', 'نقل وفود كبار التنفيذيين'],
        },
        {
            title: 'الفعاليات الحكومية والدبلوماسية',
            description: 'نقل ملتزم بالبروتوكول للمناسبات الحكومية واستقبالات السفارات والاحتفالات الرسمية في الحي الدبلوماسي بالرياض والمواقع الرسمية.',
            icon: MapPin,
            details: ['نقل لاستقبالات السفارات', 'وصول فعاليات الوزارات', 'لوجستيات الحي الدبلوماسي', 'تنسيق المناسبات الرسمية'],
        },
    ];

    const features = [
        'تخطيط مسبق للمسار لكل فعالية',
        'تشغيل عدة سيارات في وقت واحد',
        'تخصيص سائق محدد لكل مجموعة ضيوف',
        'تنسيق فوري عبر واتساب',
        'سائقون مرخصون من وزارة النقل',
        'سائقون يتحدثون العربية والإنجليزية والأردية',
        'جمس يوكن وهاياس وكوستر للمجموعات',
        'مرسيدس سبرينتر للمجموعات الكبيرة من كبار الشخصيات',
        'دعم على مدار الساعة يوم الفعالية',
        'مرونة في تغيير الجدول في نفس اليوم',
    ];

    const vehicles = [
        { name: 'تويوتا كامري', seats: 4, ideal: 'ضيف فردي VIP، متحدثون' },
        { name: 'جمس يوكن إكس إل', seats: 7, ideal: 'موكب العروسين، مجموعات صغيرة' },
        { name: 'هيونداي ستاريا VIP', seats: 7, ideal: 'عائلات VIP، مندوبون' },
        { name: 'تويوتا هاياس', seats: 11, ideal: 'دفعات ضيوف، مجموعات طاقم العمل' },
        { name: 'تويوتا كوستر', seats: 25, ideal: 'نقل جماعي كبير للضيوف، الوفود' },
        { name: 'مرسيدس سبرينتر', seats: 14, ideal: 'مجموعات الشركات، حفلات الأفراح' },
    ];

    const faqs = [
        {
            question: 'هل توفرون نقلاً لضيوف الأفراح في الرياض أو جدة؟',
            answer: 'نعم. نوفر نقلاً منسقاً لضيوف الأفراح في الرياض وجدة. يتم تشغيل عدة سيارات في وقت واحد للتعامل مع موجات وصول ومغادرة الضيوف. تشمل الخدمات نقلاً مكوكياً من الفندق إلى القاعة، وسائقاً خاصاً لموكب العروسين، ونقل العودة في وقت متأخر من الليل. يُنصح بالحجز المسبق من أسبوع إلى أسبوعين للأفراح.',
        },
        {
            question: 'هل يمكنكم ترتيب نقل لمندوبي المؤتمرات في الرياض؟',
            answer: 'نعم. تشمل باقات نقل المؤتمرات نقل المندوبين من المطار إلى الفندق، ونقلاً مكوكياً يومياً من الفندق إلى القاعة، واستقبال كبار المتحدثين. نخصص منسقاً مختصاً للمؤتمرات متعددة الأيام لإدارة تغييرات الجدول لحظياً. تتراوح السيارات من السيدان التنفيذي للأفراد من كبار الشخصيات إلى حافلات تويوتا كوستر لمجموعات المندوبين الكبيرة.',
        },
        {
            question: 'هل يتوفر نقل للفعاليات في مراكز المعارض بالرياض؟',
            answer: 'نعم. نخدم كبرى مراكز المعارض بما في ذلك مركز الرياض الدولي للمؤتمرات والمعارض ومركز جدة للمنتديات والفعاليات. تتوفر رحلات مكوكية يومية للعارضين والحضور من فنادق الرياض. كما تتوفر باقات متعددة الأيام بسيارات مخصصة للعارضين طوال فترة الفعالية.',
        },
        {
            question: 'قبل كم مدة يجب حجز نقل الفعاليات في السعودية؟',
            answer: 'للأفراح والفعاليات الكبيرة، يُنصح بالحجز المسبق من أسبوعين إلى أربعة أسابيع لضمان توفر عدد كافٍ من السيارات. أما بالنسبة للمؤتمرات والمعارض، فعادة يكفي إشعار من أسبوع إلى أسبوعين للمجموعات التي تقل عن 50 شخصاً. أما فعاليات موسم الرياض والعروض العامة الكبرى، فيُنصح بالحجز بأقرب وقت ممكن — إذ يبلغ الطلب ذروته بشكل كبير بين أكتوبر وفبراير.',
        },
        {
            question: 'هل يمكنني حجز سائق خاص لضيوف كبار الشخصيات في فعالية للشركة؟',
            answer: 'نعم. يتوفر تخصيص سائق خاص محدد بالاسم لضيوف كبار الشخصيات والمتحدثين. يحصل كل ضيف VIP على سائق مخصص طوال مدة زيارته — بما يشمل الاستقبال من المطار والفندق والقاعة والعودة. يتم إطلاع السائق على جدول الضيف ويبقى جاهزاً طوال يوم الفعالية.',
        },
        {
            question: 'ما السيارات المتوفرة لنقل المجموعات الكبيرة في الفعاليات؟',
            answer: 'للمجموعات الكبيرة، نوفر تويوتا كوستر (25 مقعداً)، وتويوتا هاياس (11 مقعداً)، ومرسيدس سبرينتر (14 مقعداً). يمكن تشغيل عدة سيارات في وقت واحد لوصول ومغادرة ضيوف الفعالية. تشمل جميع سيارات المجموعات سائقاً محترفاً، ويمكن تغليفها بعلامة الشركة عند الطلب لفعاليات الشركات.',
        },
        {
            question: 'هل تديرون لوجستيات النقل للفعالية بأكملها وليس فقط رحلات فردية؟',
            answer: 'نعم. للفعاليات الكبيرة، نخصص منسق نقل للفعالية يدير تشغيل السيارات والتوقيت والتعديلات اللحظية عبر واتساب. يعمل المنسق مع فريق فعاليتكم لضمان نقل جميع الضيوف والمتحدثين وكبار الشخصيات حسب البرنامج. تتوفر باقات تنسيق ليوم كامل أو لعدة أيام.',
        },
        {
            question: 'هل توجد خدمة نقل لعروض وحفلات موسم الرياض؟',
            answer: 'نعم. خلال موسم الرياض (من أكتوبر إلى فبراير)، نقدم باقات نقل محجوزة مسبقاً للعروض تشمل النقل من الفندق إلى موقع العرض، والانتظار أثناء العرض، والعودة بعده. الحجز المسبق يجنبكم ارتفاع الأسعار في تطبيقات مثل أوبر وكريم، التي غالباً ما تتضاعف ثلاث مرات في ليالي العروض الشهيرة.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'نقل الفعاليات والأفراح في السعودية',
        serviceType: 'سائق فعاليات ونقل جماعي',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'الرياض' },
            { '@type': 'City', name: 'جدة' },
            { '@type': 'AdministrativeArea', name: 'السعودية' },
        ],
        description: 'نقل احترافي للفعاليات والأفراح في السعودية. سائق خاص للضيوف، استقبال كبار الشخصيات، مندوبي المؤتمرات، ولوجستيات المجموعات للفعاليات في الرياض وجدة.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات نقل الفعاليات',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نقل ضيوف الأفراح في السعودية' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نقل مندوبي المؤتمرات في الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'خدمة نقل مكوكي للمعارض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نقل فعاليات موسم الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سائق فعاليات الشركات' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نقل الفعاليات الحكومية والدبلوماسية' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="event-transport-schema-ar"
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
                        نقل الفعاليات والأفراح
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نقل خاص للفعاليات<br />
                        <span className="text-white/80">في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        سائق منسق ونقل جماعي للأفراح والمؤتمرات والمعارض وفعاليات موسم الرياض ومناسبات الشركات في الرياض وجدة.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — نقل الفعاليات <Calendar className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">أنواع الفعاليات:</strong> أفراح، مؤتمرات، معارض، موسم الرياض</li>
                            <li><strong className="text-white">الأسطول:</strong> كامري، جمس، هاياس، كوستر، سبرينتر</li>
                            <li><strong className="text-white">التنسيق:</strong> منسق فعالية مخصص عبر واتساب</li>
                            <li><strong className="text-white">مهلة الحجز:</strong> أسبوعان إلى 4 أسابيع للأفراح، وأسبوع إلى أسبوعين للفعاليات</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20فعاليات%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز نقل الفعالية
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                عرض سعر عبر البريد
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* أنواع الفعاليات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الفعاليات التي نغطيها</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            من حفلات الزفاف الملكية إلى المؤتمرات الدولية — نقل خاص للفعاليات في جميع أنحاء السعودية.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventTypes.map((event, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <event.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{event.description}</p>
                                <ul className="space-y-2">
                                    {event.details.map((d, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* أسطول الفعاليات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسطول الفعاليات</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            أسطول قابل للتوسع لفعاليات من أي حجم — من نقل فردي لكبار الشخصيات إلى عملية نقل مكوكي لحفل زفاف بـ200 ضيف.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">السيارة</th>
                                    <th className="px-6 py-4 font-bold">المقاعد</th>
                                    <th className="px-6 py-4 font-bold">الأنسب لـ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-sm text-gray-500">
                        تتوفر عدة وحدات من كل نوع سيارة في وقت واحد.{' '}
                        <Link href="/fleet/" className="text-black font-bold hover:underline">عرض كامل الأسطول ←</Link>
                    </p>
                </div>
            </section>

            {/* المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف ندير لوجستيات الفعاليات</h2>
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
                                <Car className="w-4 h-4" /> أسطول الفعاليات
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-coaster/" className="text-gray-600 hover:text-black transition-colors">تويوتا كوستر (25 مقعداً)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">تويوتا هاياس (11 مقعداً)</Link></li>
                                <li><Link href="/fleet/mercedes-sprinter/" className="text-gray-600 hover:text-black transition-colors">مرسيدس سبرينتر (14 مقعداً)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">جمس يوكن (مجموعات VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> مواقع الفعاليات
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">نقل فعاليات الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">نقل فعاليات جدة</Link></li>
                                <li><Link href="/locations/riyadh/diplomatic-quarter/" className="text-gray-600 hover:text-black transition-colors">الحي الدبلوماسي</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع المواقع ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Users className="w-4 h-4" /> خدمات ذات صلة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">خدمة سائق كبار الشخصيات</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">سفر الشركات</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">سائق خاص (يومي)</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">توصيل المطار</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن نقل الفعاليات</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">كل ما تحتاج معرفته عن تنظيم نقل الفعاليات والأفراح في السعودية.</p>
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
                        خطط لنقل فعاليتك في السعودية
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        أفراح، مؤتمرات، معارض، أو موسم الرياض — دعنا ندير جميع لوجستيات نقل الضيوف ليسير حدثك بسلاسة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20فعاليات%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                عرض سعر عبر البريد
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        خدمات أخرى متوفرة:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">سائق كبار الشخصيات</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">سائق خاص</Link>
                        {' · '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">سفر الشركات</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
