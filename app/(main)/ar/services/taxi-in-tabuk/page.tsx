import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    Clock, CheckCircle2, ArrowRight, MapPin,
    Car, Users, Shield, Star, Navigation, Crown
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'تاكسي في تبوك | سيارة خاصة من تبوك إلى نيوم والعلا | Taxi Service KSA',
    description: 'أفضل خدمة تاكسي خاص في تبوك ٢٠٢٦. متخصصون في التوصيل من تبوك إلى نيوم والعلا وجدة والتنقلات داخل المدينة. أسعار ثابتة، أسطول فاخر، وعلى مدار الساعة. احجز عبر واتساب.',
    keywords: [
        'تاكسي في تبوك',
        'سيارة خاصة في تبوك',
        'تاكسي من تبوك إلى نيوم',
        'خدمة تاكسي تبوك',
        'سائق خاص تبوك',
        'تاكسي من تبوك إلى العلا',
        'سيارة مع سائق تبوك',
        'تاكسي مطار تبوك',
        'سيارة خاصة من تبوك إلى جدة',
        'تاكسي طويل المسافة تبوك',
        'توصيل VIP تبوك',
        'سائق خاص تبوك السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
        },
    },
    openGraph: {
        title: 'تاكسي في تبوك | سيارة خاصة إلى نيوم والعلا وجميع أنحاء السعودية',
        description: 'خدمة تاكسي وسيارات خاصة فاخرة في تبوك. متخصصون في نيوم، توصيل العلا، واستقبال المطار. أسعار ثابتة، أسطول فاخر، وعلى مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function TaxiInTabukPageArabic() {

    const useCases = [
        {
            icon: <Crown className="w-8 h-8 text-black" />,
            title: 'العاملون في مشروع نيوم',
            desc: 'توصيل يومي وأسبوعي للاستشاريين والمهندسين والمدراء التنفيذيين المتجهين إلى نيوم من تبوك. ١٩٠ كم — رحلة ٢–٢.٥ ساعة. سائق مخصص مسبقاً، مع إمكانية اشتراك شهري بسعر ثابت.',
            badge: 'الأكثر طلباً',
        },
        {
            icon: <Star className="w-8 h-8 text-black" />,
            title: 'سياح التراث في العلا',
            desc: 'السياح الدوليون القادمون عبر مطار تبوك (TUU) لزيارة العلا والحِجر وموقع ددان الأثري. سائق يتحدث الإنجليزية، ٣٣٠ كم — ٣.٥–٤ ساعات.',
            badge: 'مسار سياحي',
        },
        {
            icon: <MapPin className="w-8 h-8 text-black" />,
            title: 'توصيل المطار (TUU)',
            desc: 'استقبال شخصي في مطار الأمير سلطان بن عبدالعزيز. السائق بانتظارك في صالة الوصول بلوحة تحمل اسمك. متابعة الرحلة الجوية مشمولة. وجهات المدينة ونيوم والعلا.',
            badge: 'المطار',
        },
        {
            icon: <Car className="w-8 h-8 text-black" />,
            title: 'تنقلات داخل مدينة تبوك',
            desc: 'اجتماعات عمل، وتوصيل من وإلى الفنادق، والتسوق، ومواعيد المستشفيات في جميع أنحاء مدينة تبوك. تأجير لنصف يوم أو ليوم كامل مع انتظار مشمول بين المحطات.',
            badge: 'داخل المدينة',
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: 'سفر العائلات والمجموعات',
            desc: 'العائلات الكبيرة المسافرة من تبوك إلى جدة أو المدينة أو مكة بسيارة خاصة. جمس يوكن إكس إل وتويوتا هايس للمجموعات حتى ١١ شخصاً مع كامل الأمتعة.',
            badge: 'المجموعات',
        },
        {
            icon: <Shield className="w-8 h-8 text-black" />,
            title: 'الشركات وكبار الشخصيات',
            desc: 'الضيوف الدبلوماسيون والوفود الحكومية وكبار المدراء التنفيذيين الزائرون لمنطقة تبوك. كاديلاك إسكاليد، خدمة سرية بالكامل، وزي احترافي موحد.',
            badge: 'VIP',
        },
    ];

    const routes = [
        { from: 'مدينة تبوك', to: 'نيوم (شرما)', dist: '١٩٠ كم', time: '٢–٢.٥ ساعة', link: '/routes/tabuk-neom/' },
        { from: 'مدينة تبوك', to: 'العلا', dist: '٣٣٠ كم', time: '٣.٥–٤ ساعات', link: '/routes/tabuk-alula/' },
        { from: 'مطار تبوك (TUU)', to: 'وسط مدينة تبوك', dist: '١٤ كم', time: '١٥–٢٠ دقيقة', link: '/tabuk-airport-taxi/' },
        { from: 'مدينة تبوك', to: 'جدة', dist: '١٬١٠٠ كم', time: '١٠–١١ ساعة', link: '/routes/tabuk-jeddah/' },
        { from: 'مدينة تبوك', to: 'المدينة المنورة', dist: '٦٨٠ كم', time: '٦.٥–٧ ساعات', link: '/routes/tabuk-madinah/' },
        { from: 'مدينة تبوك', to: 'الوجه', dist: '٢٢٠ كم', time: '٢.٥ ساعة', link: '/routes/tabuk-al-wajh/' },
        { from: 'مدينة تبوك', to: 'حقل', dist: '٣٢٠ كم', time: '٣.٥ ساعة', link: '/routes/tabuk-haql/' },
        { from: 'مدينة تبوك', to: 'الرياض', dist: '١٬٤٥٠ كم', time: '١٣–١٤ ساعة', link: '/routes/tabuk-riyadh/' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: '٣', luggage: 'حقيبتان', ideal: 'مسافر أعمال فردي، تنقلات داخل المدينة', link: '/fleet/toyota-camry/' },
        { name: 'Genesis G80', seats: '٣', luggage: 'حقيبتان', ideal: 'زائر تنفيذي، VIP فردي', link: '/fleet/genesis-g80/' },
        { name: 'GMC Yukon XL', seats: '٧', luggage: '٥ حقائب', ideal: 'فرق نيوم، العائلات، المجموعات', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria VIP', seats: '٧', luggage: '٤ حقائب', ideal: 'عائلات VIP، الوفود', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: '١١', luggage: '١٦ حقيبة', ideal: 'المجموعات الكبيرة، الرحلات السياحية', link: '/fleet/toyota-hiace/' },
        { name: 'Cadillac Escalade', seats: '٦', luggage: '٤ حقائب', ideal: 'دبلوماسي، كبار المدراء التنفيذيين', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'أسعار ثابتة — بدون زيادة أبداً',
        'سائقون مرخصون من وزارة النقل',
        'يتحدثون الإنجليزية والعربية والأردية',
        'متخصصون في الطرق السريعة الطويلة',
        'تفاصيل السائق تُشارك قبل الاستقبال',
        'محطات راحة مشمولة في الرحلات الطويلة',
        'تكييف كامل — جاهز لحرارة الصحراء',
        'على مدار الساعة بما في ذلك رحلات الصباح الباكر',
        'حجز عبر واتساب — تأكيد خلال ٣٠ دقيقة',
        'نفس السائق للحجوزات متعددة الأيام',
    ];

    const faqs = [
        {
            question: 'ما هي أفضل خدمة تاكسي في تبوك؟',
            answer: 'تُعد Taxi Service KSA واحدة من أعلى خدمات السيارات الخاصة تقييماً في تبوك، ومتخصصة في التوصيل لمسافات طويلة إلى نيوم والعلا وجميع أنحاء المملكة. وعلى عكس تطبيقات النقل ذات التغطية غير المنتظمة في تبوك، نوفر سائقين محترفين بالحجز المسبق وأسعار ثابتة، واستقبالاً شخصياً في مطار تبوك، وسيارات مختارة خصيصاً للرحلات الصحراوية الطويلة على الطرق السريعة.',
        },
        {
            question: 'كم تستغرق الرحلة من تبوك إلى نيوم؟',
            answer: 'تبلغ المسافة من مدينة تبوك إلى منطقة شرما في نيوم حوالي ١٩٠ كم، وتستغرق الرحلة ٢–٢.٥ ساعة على الطريق السريع الرئيسي. يعرف سائقونا هذا المسار جيداً، بما في ذلك نقاط التفتيش الصحيحة وطرق الدخول إلى نيوم. يُنصح باستخدام جمس يوكن إكس إل أو كاديلاك إسكاليد لهذه الرحلة لراحة أكبر وسعة أمتعة أوسع.',
        },
        {
            question: 'هل يمكنني حجز تاكسي من تبوك إلى العلا؟',
            answer: 'نعم. تبلغ المسافة من تبوك إلى العلا حوالي ٣٣٠ كم — رحلة ٣.٥–٤ ساعات عبر مرتفعات شمال غرب المملكة. هذا المسار يحظى بشعبية كبيرة لدى السياح الدوليين الذين يزورون موقع الحِجر (مدائن صالح) المدرج ضمن التراث العالمي لليونسكو، وبلدة العلا القديمة. يتوفر سائق يتحدث الإنجليزية كخدمة أساسية. يُرجى الحجز قبل ٢٤ ساعة لهذا المسار.',
        },
        {
            question: 'هل تتوفر سيارة خاصة من تبوك إلى جدة؟',
            answer: 'نعم. تبلغ المسافة من تبوك إلى جدة حوالي ١٬١٠٠ كم — رحلة بين المدن تستغرق ١٠–١١ ساعة. هذا مسار متخصص طويل المسافة يتطلب سائقاً ذا خبرة في الطرق السريعة وسيارة بحالة ممتازة. نستخدم جمس يوكن إكس إل أو تويوتا هايس لهذا المسار. تشمل الرحلة محطات راحة مجدولة في محطات ساسكو. يُرجى التواصل معنا قبل ٤٨ ساعة لحجوزات المسافات الطويلة.',
        },
        {
            question: 'كم تبلغ تكلفة التاكسي من تبوك؟',
            answer: 'تتراوح تكلفة التنقلات داخل مدينة تبوك (من الفندق إلى الاجتماع، أو توصيل المطار داخل المدينة) بين ٥٠–١٢٠ ريالاً سعودياً حسب المسافة. تكلفة الرحلة من تبوك إلى نيوم تتراوح بين ٤٠٠–٧٠٠ ريال حسب السيارة. أما من تبوك إلى العلا فتتراوح بين ٦٠٠–١٬٠٠٠ ريال. جميع الأسعار ثابتة — يتم الاتفاق عليها قبل الرحلة، بدون عداد. تواصل معنا عبر واتساب للحصول على عرض سعر دقيق لمسارك وسيارتك المحددة.',
        },
        {
            question: 'هل تتوفر أوبر في تبوك؟',
            answer: 'تتوفر أوبر وكريم بشكل محدود وغير منتظم في تبوك مقارنة بالرياض وجدة. تكون التطبيقات غير موثوقة بشكل خاص في مطار تبوك، وعلى المسارات الطويلة إلى نيوم والعلا، وخلال ساعات الليل المتأخرة. لضمان الاستقبال — خصوصاً عند الوصول من المطار أو التوجه إلى نيوم — يُنصح بشدة بحجز توصيل خاص مسبقاً.',
        },
        {
            question: 'هل يمكنني الحصول على عقد سائق شهري في تبوك؟',
            answer: 'نعم. للعاملين في مشروع نيوم والمقيمين الأجانب في تبوك الذين يحتاجون نقلاً يومياً أو أسبوعياً، يتوفر عقد سائق مخصص. يغطي السعر الشهري الثابت سائقاً مخصصاً مسبقاً لمساراتك المعتادة — من تبوك إلى نيوم، ومن الفندق إلى الموقع، ورحلات المطار. تواصل معنا عبر واتساب لمناقشة جدولك واحتياجاتك.',
        },
        {
            question: 'هل يتحدث السائقون الإنجليزية في تبوك؟',
            answer: 'نعم. جميع سائقي Taxi Service KSA في تبوك يتحدثون الإنجليزية بطلاقة تخاطبية. بالنسبة للسياح الدوليين الزائرين للعلا وزوار مشروع نيوم، يتم تأكيد سائق يجيد الإنجليزية كخدمة أساسية. كما يتوفر سائقون يتحدثون الأردية عند الطلب للعمال الباكستانيين وجنوب آسيويين العاملين في منطقة تبوك ونيوم.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'تاكسي في تبوك — خدمة سيارات خاصة',
        serviceType: 'تاكسي خاص وسائق في تبوك',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966552202642',
        },
        areaServed: [
            { '@type': 'City', name: 'تبوك' },
            { '@type': 'Place', name: 'نيوم' },
            { '@type': 'City', name: 'العلا' },
            { '@type': 'Country', name: 'السعودية' },
        ],
        description: 'خدمة تاكسي وسائق خاص فاخرة في تبوك، المملكة العربية السعودية. متخصصون في التوصيل من تبوك إلى نيوم، ومسارات السياحة في العلا، واستقبال المطار، وتأجير السيارات الخاصة بين المدن.',
        availableLanguage: [
            { '@type': 'Language', name: 'الإنجليزية' },
            { '@type': 'Language', name: 'العربية' },
            { '@type': 'Language', name: 'الأردية' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات تاكسي تبوك',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل خاص من تبوك إلى نيوم' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل مطار تبوك (TUU)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سيارة خاصة من تبوك إلى العلا' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنقلات داخل تبوك — تأجير بالساعة واليوم' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل بين المدن من تبوك إلى جدة' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'تاكسي في تبوك — خدمة سيارات خاصة في السعودية',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="tabuk-taxi-schema-ar" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="tabuk-speakable-ar" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        تبوك · بوابة نيوم · شمال غرب السعودية
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        تاكسي في تبوك<br />
                        <span className="text-white/80">سيارة خاصة إلى نيوم والعلا وجميع أنحاء السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        أفضل خدمة تاكسي خاص في تبوك — توصيل نيوم، مسارات العلا السياحية، استقبال المطار، وتنقلات داخل المدينة. سائقون محترفون، أسطول فاخر، وأسعار ثابتة على مدار الساعة.
                    </p>

                    {/* TL;DR AEO Block */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — تاكسي تبوك <Car className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">المطار:</strong> TUU — ١٤ كم من المدينة، ١٥–٢٠ دقيقة</li>
                            <li><strong className="text-white">نيوم:</strong> ١٩٠ كم — ٢–٢.٥ ساعة من تبوك</li>
                            <li><strong className="text-white">العلا:</strong> ٣٣٠ كم — ٣.٥–٤ ساعات من تبوك</li>
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية، العربية، الأردية</li>
                            <li><strong className="text-white">الأسعار:</strong> ثابتة — بدون زيادة أبداً</li>
                            <li><strong className="text-white">الحجز:</strong> واتساب +966 552 202 642</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20تاكسي%20في%20تبوك" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز تاكسي تبوك
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                البريد لعرض سعر
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900">الرئيسية</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/services/" className="text-gray-500 hover:text-gray-900">الخدمات</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">تاكسي في تبوك</span>
                    </nav>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من يستخدم خدمة التاكسي لدينا في تبوك</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">من فرق مشروع نيوم إلى سياح العلا — سائق محترف واحد لكل رحلة في تبوك.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((c, i) => (
                            <div key={i} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-black hover:shadow-lg transition-all">
                                <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {c.badge}
                                </span>
                                <div className="mb-4">{c.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Routes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أشهر مسارات تاكسي تبوك</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">اضغط على أي مسار لعرض التفاصيل الكاملة والأسعار وخيارات الحجز.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">من</th>
                                    <th className="px-6 py-4 font-bold">إلى</th>
                                    <th className="px-6 py-4 font-bold">المسافة</th>
                                    <th className="px-6 py-4 font-bold">مدة الرحلة</th>
                                    <th className="px-6 py-4 font-bold">التفاصيل</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{r.from}</td>
                                        <td className="px-6 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4">
                                            <Link href={r.link} className="text-black font-bold text-sm hover:underline flex items-center gap-1 group">
                                                عرض المسار <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختر سيارتك في تبوك</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">لمسارات نيوم والعلا الطويلة، ننصح بجمس يوكن إكس إل أو أكبر لراحة أكثر في رحلات ٢–٤ ساعات.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((v, i) => (
                            <Link key={i} href={v.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all h-full">
                                    <Car className="w-10 h-10 text-black mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black">{v.name}</h3>
                                    <div className="space-y-1 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-gray-400" />
                                            <span>{v.seats} ركاب</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                                            <span>{v.luggage}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 border-t border-gray-200 pt-3">{v.ideal}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/fleet/">
                            <Button variant="outline" className="border-2 border-black font-bold px-8 py-3">
                                عرض الأسطول الكامل <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose + Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                لماذا نحن الأفضل في تبوك
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 speakable-answer">
                                تبوك هي بوابة أكبر المشاريع العملاقة في المملكة العربية السعودية — نيوم، ذا لاين، جزيرة سندالة، ومشروع البحر الأحمر. المسافات بين المواقع شاسعة. تغطية أوبر وكريم غير منتظمة. سيارات الأجرة العادية غير مهيأة لرحلات الطرق الصحراوية الطويلة التي تمتد ٢–٤ ساعات.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                سائقونا من أهل تبوك ومتخصصون في الرحلات الطويلة. يعرفون نقاط التفتيش للدخول إلى نيوم، وأفضل محطات الراحة (ساسكو) بين تبوك والعلا، وأسرع الطرق إلى حقل على ساحل البحر الأحمر. يتم فحص كل سيارة قبل الانطلاق على الطريق السريع.
                            </p>
                            <div className="grid grid-cols-3 gap-6 border-t pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">٤.٩</div>
                                    <div className="text-sm text-gray-500 mt-1">تقييم النجوم</div>
                                </div>
                                <div className="text-center border-x border-gray-200">
                                    <div className="text-3xl font-black text-black">٢٤/٧</div>
                                    <div className="text-sm text-gray-500 mt-1">التوفر</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">٠</div>
                                    <div className="text-sm text-gray-500 mt-1">رسوم إضافية</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Book */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تحجز تاكسي في تبوك</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '١', title: 'راسلنا عبر واتساب', desc: 'أرسل موقع الاستقبال والوجهة والتاريخ والوقت وعدد الركاب. لمسارات نيوم والعلا، يُنصح بالحجز قبل ٢٤ ساعة.' },
                            { step: '٢', title: 'استلم تفاصيل السائق', desc: 'نرسل لك اسم السائق وصورته ورقم لوحة السيارة وتأكيد الاستقبال. تعرف بالضبط من سيأتي وبأي سيارة.' },
                            { step: '٣', title: 'السائق أمام بابك', desc: 'يصل السائق في الموعد المحدد، ويساعد في حمل الأمتعة، وينقلك إلى وجهتك. محطات راحة مشمولة في الرحلات الطويلة.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20تاكسي%20في%20تبوك" target="_blank">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-10 py-6 h-auto rounded-2xl">
                                احجز عبر واتساب <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> أهم مسارات تبوك</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/routes/tabuk-neom/" className="text-gray-600 hover:text-black">تبوك ← نيوم</Link></li>
                                <li><Link href="/routes/tabuk-alula/" className="text-gray-600 hover:text-black">تبوك ← العلا</Link></li>
                                <li><Link href="/routes/tabuk-jeddah/" className="text-gray-600 hover:text-black">تبوك ← جدة</Link></li>
                                <li><Link href="/routes/tabuk-madinah/" className="text-gray-600 hover:text-black">تبوك ← المدينة المنورة</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> الأسطول</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">جمس يوكن إكس إل</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">تويوتا هايس (مجموعات)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">كاديلاك إسكاليد</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">كل الأسطول ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> خدمات ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/tabuk-airport-taxi/" className="text-gray-600 hover:text-black">تاكسي مطار تبوك (TUU)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">سائق VIP خاص</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">نقل سياحي</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">تأجير سائق خاص</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> مواقع تبوك</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/tabuk/" className="text-gray-600 hover:text-black">توصيل VIP داخل تبوك</Link></li>
                                <li><Link href="/locations/neom/" className="text-gray-600 hover:text-black">نقل نيوم</Link></li>
                                <li><Link href="/services/intercity/" className="text-gray-600 hover:text-black">نقل بين المدن في السعودية</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">كل المواقع ←</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تاكسي تبوك — كل الأسئلة والأجوبة</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">كل ما تحتاج معرفته عن حجز تاكسي أو سيارة خاصة في تبوك.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-right hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pl-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2 speakable-answer">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Author */}
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        احجز أفضل تاكسي في تبوك
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        توصيل نيوم، رحلات العلا، استقبال المطار، أو تنقلات داخل المدينة — سائق محترف واحد لكل رحلة في تبوك. أسعار ثابتة، أسطول فاخر، وعلى مدار الساعة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20تاكسي%20في%20تبوك" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                البريد للحصول على عرض سعر
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/routes/tabuk-neom/" className="text-gray-400 hover:text-white underline">تبوك ← نيوم</Link>
                        {' · '}
                        <Link href="/routes/tabuk-alula/" className="text-gray-400 hover:text-white underline">تبوك ← العلا</Link>
                        {' · '}
                        <Link href="/tabuk-airport-taxi/" className="text-gray-400 hover:text-white underline">مطار تبوك (TUU)</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">كل مطارات السعودية</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
