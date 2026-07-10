import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Clock, Car, Users,
    MapPin, Calendar, Shield, Star
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'سائق خاص بالساعة واليوم والشهر في السعودية | الرياض وجدة | Taxi Service KSA',
    description: 'استأجر سائقاً خاصاً في الرياض أو جدة بالساعة أو اليوم الكامل أو الأسبوع أو الشهر. سيارة فاخرة مع سائق. شوفير يتحدث الإنجليزية للتسوق والاجتماعات والجولات والاستخدام العائلي.',
    keywords: [
        'سائق خاص ليوم كامل الرياض',
        'حجز سائق يومي الرياض',
        'سائق خاص أسبوعي السعودية',
        'خدمة سائق شهري الرياض',
        'سائق خاص السعودية',
        'سائق للتسوق الرياض',
        'جمس فاخرة مع سائق الرياض',
        'استئجار سائق خاص السعودية',
        'استئجار سائق بالساعة السعودية',
        'سائق من الباب إلى الباب السعودية',
        'سائق خاص لرحلات التسوق جدة',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/private-driver/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/private-driver/',
            'ar': 'https://taxiserviceksa.com/ar/services/private-driver/',
            'x-default': 'https://taxiserviceksa.com/services/private-driver/',
        },
    },
    openGraph: {
        title: 'سائق خاص بالساعة واليوم والشهر في السعودية | Taxi Service KSA',
        description: 'استأجر سائقاً خاصاً في الرياض أو جدة بالساعة أو اليوم أو الأسبوع أو الشهر. شوفير يتحدث الإنجليزية بسيارة فاخرة للتسوق والاجتماعات والرحلات العائلية والجولات.',
        url: 'https://taxiserviceksa.com/ar/services/private-driver/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function PrivateDriverPageArabic() {
    const packages = [
        {
            title: 'سائق خاص بالساعة',
            duration: '٣–٨ ساعات',
            icon: Clock,
            description: 'احجز سائقاً خاصاً لعدد ساعات محدد. مثالي لاستقبال المطار مع الانتظار، أو تنفيذ عدة مهام، أو جولة في المدينة بمحطات مرنة.',
            useCases: ['استقبال المطار + التوصيل للفندق', 'زيارة مستشفى أو عيادة', 'توصيلات لعدة اجتماعات', 'خرجة عشاء مسائية'],
        },
        {
            title: 'سائق خاص ليوم كامل',
            duration: '٨–١٢ ساعة',
            icon: Star,
            description: 'سائق مخصص لك حصرياً طوال اليوم. مثالي لجولات التسوق، والتجول السياحي، والاجتماعات في أنحاء المدينة، أو النزهات العائلية.',
            useCases: ['التنقل بين مولات الرياض', 'جولة سياحية في المدينة', 'يوم عمل بعدة اجتماعات', 'رحلة عائلية ليوم واحد إلى الطائف'],
        },
        {
            title: 'سائق خاص أسبوعي',
            duration: '٥–٧ أيام',
            icon: Calendar,
            description: 'سائق خاص ثابت لزيارتك أو رحلة عملك الأسبوعية. نفس السائق كل يوم لضمان معرفته بجدولك وتفضيلاتك.',
            useCases: ['زيارات الوفود التجارية', 'برنامج سياحي لأسبوع كامل', 'رحلات السياحة العلاجية', 'تنقلات أسبوع المؤتمرات'],
        },
        {
            title: 'سائق خاص شهري',
            duration: '٣٠ يوماً',
            icon: Shield,
            description: 'سائق شهري مخصص للمقيمين والزوار طويلي الإقامة أو الشركات التي تحتاج تنقلاً يومياً موثوقاً دون إدارة سيارة خاصة.',
            useCases: ['التنقل اليومي للمغتربين', 'حساب تنفيذي شهري', 'دعم إضافي لأسطول الشركة', 'إقامة طويلة لزوار دول الخليج'],
        },
    ];

    const useCaseDetails = [
        {
            title: 'سائق التسوق — الرياض وجدة',
            description: 'يأخذك السائق إلى المول، وينتظر في موقف السيارات، ويساعدك في حمل الأكياس، وينقلك بين وجهات التسوق. بلا إزعاج مواقف السيارات وبلا ضغط الوقت.',
            locations: ['مول العرب، الرياض', 'رياض بارك', 'مول النخيل', 'سوق البلد، جدة'],
            icon: MapPin,
        },
        {
            title: 'سائق الأعمال والاجتماعات',
            description: 'سائق محترف ليوم عمل بعدة محطات في الرياض أو جدة. ينتظر السائق أثناء الاجتماعات ويعدّل الجدول لحظياً حسب الحاجة.',
            locations: ['حي الملك عبدالله المالي (KAFD)', 'مكاتب طريق الملك فهد', 'منطقة الأعمال بشارع العليا', 'الممر التجاري في جدة'],
            icon: Shield,
        },
        {
            title: 'سائق خاص للعائلة',
            description: 'سيارة جمس يوكن أو هيونداي ستاريا مريحة مع سائق مهذب للاستخدام العائلي — اصطحاب المدرسة، وزيارات المستشفى، والنزهات، ورحلات المطار.',
            locations: ['زيارات المستشفى والعيادات', 'اصطحاب من وإلى المدرسة', 'توصيل المطار', 'نزهات عائلية في نهاية الأسبوع'],
            icon: Users,
        },
        {
            title: 'سائق السياحة العلاجية',
            description: 'سائق يومي موثوق للمرضى وعائلاتهم القادمين إلى السعودية للعلاج. جدولة مرنة حسب مواعيد العلاج وفترات التعافي.',
            locations: ['مستشفى الملك فيصل التخصصي', 'المستشفى السعودي الألماني', 'عيادات الدكتور سليمان الحبيب', 'المدينة الطبية بالرياض'],
            icon: Star,
        },
    ];

    const vehicles = [
        { name: 'تويوتا كامري', slug: 'toyota-camry', type: 'سيدان تنفيذية', seats: '٤', ideal: 'فردي أو ثنائي، للاستخدام التجاري' },
        { name: 'جمس يوكن XL', slug: 'gmc-yukon-xl', type: 'إس يو في فاخرة', seats: '٧', ideal: 'العائلات والمجموعات والتسوق' },
        { name: 'هيونداي ستاريا VIP', slug: 'hyundai-staria-vip', type: 'فان فاخر', seats: '٧', ideal: 'عائلات VIP والرحلات الطبية' },
        { name: 'تويوتا هايس', slug: 'toyota-hiace', type: 'ميني فان', seats: '١١', ideal: 'المجموعات الكبيرة والتسوق بكميات' },
        { name: 'كاديلاك إسكاليد', slug: 'cadillac-escalade', type: 'إس يو في فائقة الفخامة', seats: '٧', ideal: 'الاستخدام التنفيذي وضيوف VIP' },
    ];

    const features = [
        'نفس السائق للحجوزات متعددة الأيام',
        'يتحدث الإنجليزية والعربية والأردية',
        'مرخص من وزارة النقل',
        'سائقون مناسبون للسيدات عند الطلب',
        'جدولة مرنة — تعديل لحظي',
        'خدمة من الباب إلى الباب في الرياض وجدة',
        'بدون تسعير مرتفع في أوقات الذروة — أسعار يومية ثابتة',
        'مساعدة في حمل الأمتعة ومشتريات التسوق',
        'مقاعد أطفال متوفرة عند الطلب',
        'متوفر على مدار الساعة طوال أيام الأسبوع',
    ];

    const faqs = [
        {
            question: 'هل يمكنني استئجار سائق خاص في الرياض ليوم كامل؟',
            answer: 'نعم. استئجار السائق الخاص ليوم كامل في الرياض يغطي ٨ إلى ١٢ ساعة ويشمل عدداً غير محدود من المحطات داخل المدينة. يتم تخصيص جمس يوكن أو تويوتا كامري أو هيونداي ستاريا حسب حجم المجموعة. يستقبلك السائق من الفندق أو المنزل ويبقى متفرغاً لك حصرياً طوال اليوم. يُنصح بالحجز قبل ٢٤ ساعة على الأقل.',
        },
        {
            question: 'كم تبلغ تكلفة استئجار سائق خاص في السعودية؟',
            answer: 'تختلف أسعار السائق الخاص حسب نوع السيارة والمدة وعدد المحطات. الأسعار ثابتة (بدون زيادة في أوقات الذروة) وتُقدَّم عبر عرض سعر على واتساب. تتوفر باقات نصف يوم (٤–٥ ساعات)، ويوم كامل (٨–١٢ ساعة)، وأسبوعية، وشهرية. تواصلوا معنا عبر واتساب أو البريد الإلكتروني مع تحديد التواريخ والمتطلبات للحصول على عرض سعر مخصص.',
        },
        {
            question: 'هل يمكنني حجز سائق خاص للتسوق في الرياض؟',
            answer: 'نعم. تتوفر خدمة سائق التسوق لأهم مولات الرياض بما في ذلك مول العرب، ورياض بارك، والنخيل، وسوق الزل. ينتظر السائق عند كل موقع، ويساعد في حمل الأمتعة، وينقلك بين الوجهات. تتوفر باقات تسوق ليوم كامل أو نصف يوم. كما تتوفر خدمة سائق التسوق في جدة.',
        },
        {
            question: 'هل يتوفر سائق خاص أسبوعي أو شهري في السعودية؟',
            answer: 'نعم. تتوفر باقات السائق الخاص الأسبوعية (٥–٧ أيام) والشهرية (٣٠ يوماً). يتم تخصيص نفس السائق لضمان الاستمرارية. الباقات الأسبوعية شائعة لدى الوفود التجارية والسياح. الباقات الشهرية تناسب المغتربين والزوار طويلي الإقامة والشركات التي تحتاج نقلاً تنفيذياً منتظماً. تتوفر الفوترة الشهرية مع إصدار فاتورة.',
        },
        {
            question: 'ما المقصود بـ"جمس فاخرة مع سائق" في الرياض؟',
            answer: 'تعني خدمة سائق خاص بسيارة جمس يوكن إكس إل أو دينالي في الرياض. تتسع جمس يوكن لـ٦–٧ ركاب مع مساحة أمتعة واسعة، ما يجعلها الخيار الأكثر شيوعاً للعائلات ورحلات التسوق والتوصيلات الجماعية. السائق بزي احترافي ومرخص ومتاح للاستئجار ليوم كامل أو لعدة أيام.',
        },
        {
            question: 'هل يمكن للسيدات استئجار سائق خاص في السعودية؟',
            answer: 'نعم. تتوفر خدمة سائق خاص مناسبة للسيدات. يمكن للراكبات — سواء كنّ مسافرات بمفردهن أو مع العائلة أو لمواعيد طبية — طلب سائق مخصص لهن. جميع سائقينا محترفون ومحترمون ومدربون على مساعدة العميلات. تتوفر هذه الخدمة في الرياض وجدة ومكة والمدينة.',
        },
        {
            question: 'هل يتوفر سائق خاص للسياحة العلاجية في السعودية؟',
            answer: 'نعم. تتوفر باقات سائق للسياحة العلاجية للمرضى وعائلاتهم القادمين لزيارة المستشفيات والعيادات في الرياض أو جدة. تتم جدولة السائق حسب مواعيد الحجوزات مع مرونة للتأخير أو الاستشارات الممتدة. من أبرز المستشفيات المخدومة: الملك فيصل التخصصي، والمستشفى السعودي الألماني، وعيادات الدكتور سليمان الحبيب.',
        },
        {
            question: 'هل يمكنني استئجار فان خاص مع سائق في الرياض؟',
            answer: 'نعم. تتوفر تويوتا هايس (١١ مقعداً) ومرسيدس سبرينتر (١٤ مقعداً) مع سائق للاستئجار الجماعي الخاص في الرياض. مثالية للمجموعات التجارية والوفود السياحية وضيوف الأفراح أو النزهات العائلية الكبيرة. يتوفر الاستئجار لنصف يوم أو يوم كامل أو عدة أيام. مساحة الأمتعة واسعة بما يكفي لرحلات التسوق.',
        },
        {
            question: 'كيف أحجز سائقاً خاصاً في السعودية؟',
            answer: 'يتم الحجز عبر واتساب (966552202642+) أو البريد الإلكتروني (taxiserviceksa9988@gmail.com). زودونا بالتواريخ وعدد الركاب ونوع السيارة المفضل والوجهات المخطط لها. للاستئجار ليوم كامل أو عدة أيام، يُنصح بالحجز قبل ٢٤–٤٨ ساعة. لا حاجة لرقم هاتف سعودي أو حساب محلي — نقبل الحجوزات الدولية.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمة سائق خاص في السعودية — بالساعة واليوم والأسبوع والشهر',
        serviceType: 'استئجار سائق خاص',
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
        description: 'استأجر سائقاً خاصاً في الرياض أو جدة بالساعة أو اليوم الكامل أو الأسبوع أو الشهر. شوفير يتحدث الإنجليزية بسيارات فاخرة للتسوق والأعمال والعائلة والرحلات الطبية.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'باقات السائق الخاص',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سائق خاص بالساعة في الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سائق خاص ليوم كامل في السعودية' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سائق خاص أسبوعي في السعودية' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'خدمة سائق شهري في الرياض' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سائق تسوق في الرياض وجدة' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="private-driver-schema-ar"
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
                        استئجار سائق خاص
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        استأجر سائقاً خاصاً<br />
                        <span className="text-white/80">بالساعة أو اليوم أو الشهر في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        سائقك الخاص المخصص في الرياض أو جدة — للتسوق والاجتماعات والنزهات العائلية أو برنامج سياحي كامل. أسعار ثابتة. يتحدث الإنجليزية. سيارات فاخرة.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — السائق الخاص <Car className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">الباقات:</strong> بالساعة، نصف يوم، يوم كامل، أسبوعي، شهري</li>
                            <li><strong className="text-white">الأسطول:</strong> تويوتا كامري، جمس يوكن، هايس، إسكاليد</li>
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية والعربية والأردية</li>
                            <li><strong className="text-white">الحجز:</strong> واتساب أو البريد الإلكتروني — قبل ٢٤ ساعة</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أريد%20استئجار%20سائق%20خاص%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                استأجر سائقاً خاصاً
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                راسلنا للحصول على سعر خاص
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* الباقات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">باقات السائق الخاص</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            من حجز لثلاث ساعات إلى شهر كامل — باقات استئجار مرنة تناسب جدولك بالضبط.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <pkg.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                                <p className="text-sm text-emerald-600 font-semibold mb-4">{pkg.duration}</p>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{pkg.description}</p>
                                <ul className="space-y-2">
                                    {pkg.useCases.map((u, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {u}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* حالات الاستخدام */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أكثر استخدامات السائق الخاص شيوعاً</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            أياً كان سبب وجودك في السعودية — لدينا باقة سائق خاص تناسبك.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCaseDetails.map((u, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <u.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">{u.description}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {u.locations.map((l, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-3 h-3 flex-shrink-0" />
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* جدول السيارات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختر سيارتك</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            تشمل جميع باقات السائق الخاص سائقاً محترفاً. اختر السيارة المناسبة لحجم مجموعتك والغرض من رحلتك.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">السيارة</th>
                                    <th className="px-6 py-4 font-bold">الفئة</th>
                                    <th className="px-6 py-4 font-bold">المقاعد</th>
                                    <th className="px-6 py-4 font-bold">الأنسب لـ</th>
                                    <th className="px-6 py-4 font-bold">التفاصيل</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-white transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.type}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                        <td className="px-6 py-4">
                                            <Link href={`/fleet/${v.slug}/`} className="text-black font-bold text-sm hover:underline">
                                                عرض ←
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ماذا يشمل كل حجز</h2>
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> السيارات الأكثر طلباً
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">جمس يوكن مع سائق</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black transition-colors">تويوتا كامري مع سائق</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">تويوتا هايس مع سائق</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> أهم المدن
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">سائق خاص في الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">سائق خاص في جدة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">سائق خاص في مكة</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع المدن ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> خدمات ذات صلة
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">سائق VIP فاخر</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">النقل السياحي</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">نقل الشركات</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">توصيل المطار</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن السائق الخاص</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">أكثر الأسئلة شيوعاً حول استئجار سائق خاص في السعودية.</p>
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
                        استأجر سائقك الخاص في السعودية اليوم
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        بالساعة أو اليوم الكامل أو الأسبوع أو الشهر — سائقك الشخصي بانتظارك في الرياض وجدة. أسعار ثابتة، أسطول فاخر، يتحدث الإنجليزية.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أريد%20استئجار%20سائق%20خاص%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                راسلنا لطلب قائمة الأسعار
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        متوفر أيضاً:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">سائق VIP فاخر</Link>
                        {' · '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">النقل السياحي</Link>
                        {' · '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">نقل الشركات</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
