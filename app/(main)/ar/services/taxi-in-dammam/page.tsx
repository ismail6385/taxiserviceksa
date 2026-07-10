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
    title: 'تاكسي الدمام | سيارة خاصة في الدمام والخبر والمنطقة الشرقية | Taxi Service KSA',
    description: 'أفضل خدمة تاكسي خاص في الدمام لعام 2026. توصيلات إلى الخبر والظهران وجسر الملك فهد إلى البحرين والجبيل الصناعية والرياض. أسعار ثابتة، أسطول فاخر، على مدار الساعة. احجز عبر واتساب.',
    keywords: [
        'تاكسي الدمام',
        'سيارة خاصة الدمام',
        'خدمة تاكسي الدمام',
        'سائق خاص الدمام',
        'تاكسي من الدمام إلى الخبر',
        'سيارة خاصة من الدمام إلى البحرين',
        'تاكسي من الدمام إلى الظهران',
        'سيارة مع سائق الدمام',
        'تاكسي مطار الدمام',
        'تاكسي المنطقة الشرقية',
        'سيارة خاصة من الدمام إلى الرياض',
        'سائق خاص الدمام السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/taxi-in-dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-dammam/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-dammam/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-dammam/',
        },
    },
    openGraph: {
        title: 'تاكسي الدمام | سيارة خاصة إلى الخبر والبحرين وكل السعودية',
        description: 'خدمة تاكسي وسيارة خاصة متميزة في الدمام. الخبر، الظهران، جسر الملك فهد إلى البحرين، استقبال المطار. أسعار ثابتة، أسطول فاخر، على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-dammam/',
        locale: 'ar_SA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-3.webp' }],
    },
};

export default function TaxiInDammamPageArabic() {

    const useCases = [
        {
            icon: <Crown className="w-8 h-8 text-black" />,
            title: 'توصيلات أرامكو والظهران',
            desc: 'توصيلات يومية وأسبوعية لموظفي أرامكو السعودية والمقاولين والزوار بين مجمع الظهران السكني، ومطار الدمام (DMM)، والخبر. سائق مخصص مسبقاً وأسعار ثابتة.',
            badge: 'الأكثر طلباً',
        },
        {
            icon: <Star className="w-8 h-8 text-black" />,
            title: 'توصيلات جسر الملك فهد إلى البحرين',
            desc: 'سيارة خاصة من الدمام أو الخبر إلى جسر الملك فهد والبحرين (المنامة). سائقون ذوو خبرة في إجراءات عبور الحدود. يتوفر الاستئجار ليوم كامل.',
            badge: 'عبور حدودي',
        },
        {
            icon: <MapPin className="w-8 h-8 text-black" />,
            title: 'توصيل مطار الدمام (DMM)',
            desc: 'استقبال شخصي في مطار الملك فهد الدولي. السائق بانتظارك عند صالة الوصول بلوحة تحمل اسمك. يشمل تتبع الرحلة. وجهات إلى المدينة والخبر والظهران والبحرين.',
            badge: 'المطار',
        },
        {
            icon: <Car className="w-8 h-8 text-black" />,
            title: 'تنقلات مدينة الدمام والخبر',
            desc: 'اجتماعات عمل، وتوصيل فنادق، ومولات تسوق، ومواعيد مستشفيات في الدمام والخبر. يتوفر الاستئجار لنصف يوم أو يوم كامل مع الانتظار.',
            badge: 'المدينة',
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: 'توصيلات مدينة الجبيل الصناعية',
            desc: 'توصيلات بسيارة خاصة من وإلى الجبيل — مركز الصناعات البتروكيماوية في السعودية، على بعد 95 كم شمال الدمام. حجوزات للشركات والمجموعات. تويوتا هايس للفرق الكبيرة.',
            badge: 'صناعي',
        },
        {
            icon: <Shield className="w-8 h-8 text-black" />,
            title: 'الشركات وكبار الشخصيات',
            desc: 'الوفود الحكومية، وكبار التنفيذيين في صناعة النفط، والضيوف الدبلوماسيون الزائرون للمنطقة الشرقية. كاديلاك إسكاليد، خدمة سرية بالكامل، وزي احترافي كمعيار ثابت.',
            badge: 'VIP',
        },
    ];

    const routes = [
        { from: 'مدينة الدمام', to: 'الخبر', dist: '20 كم', time: '20–30 دقيقة', link: '/routes/dammam-airport-to-khobar/' },
        { from: 'مدينة الدمام', to: 'الظهران / أرامكو', dist: '15 كم', time: '15–20 دقيقة', link: '/locations/dammam/' },
        { from: 'مطار الدمام (DMM)', to: 'الدمام / الخبر / الظهران', dist: '30–40 كم', time: '25–45 دقيقة', link: '/dammam-airport-taxi/' },
        { from: 'مدينة الدمام', to: 'البحرين (المنامة)', dist: '95 كم', time: '1.5–2.5 ساعة', link: '/routes/dammam-bahrain/' },
        { from: 'مدينة الدمام', to: 'مدينة الجبيل الصناعية', dist: '95 كم', time: '1–1.25 ساعة', link: '/locations/dammam/' },
        { from: 'مدينة الدمام', to: 'الرياض', dist: '400 كم', time: '4–4.5 ساعة', link: '/routes/dammam-riyadh/' },
        { from: 'مدينة الدمام', to: 'دبي (الإمارات)', dist: '960 كم', time: '9–10 ساعات', link: '/routes/dammam-dubai/' },
        { from: 'مدينة الدمام', to: 'مدينة الكويت', dist: '430 كم', time: '4.5–5 ساعات', link: '/routes/dammam-kuwait/' },
    ];

    const vehicles = [
        { name: 'تويوتا كامري', seats: 3, luggage: 'حقيبتان', ideal: 'مسافر أعمال فردي، تنقلات المدينة', link: '/fleet/toyota-camry/' },
        { name: 'جينيسيس G80', seats: 3, luggage: 'حقيبتان', ideal: 'زائر تنفيذي، اجتماعات أرامكو', link: '/fleet/genesis-g80/' },
        { name: 'جمس يوكن إكس إل', seats: 7, luggage: '5 حقائب', ideal: 'فرق الشركات والعائلات ورحلات البحرين', link: '/fleet/gmc-yukon/' },
        { name: 'هيونداي ستاريا VIP', seats: 7, luggage: '4 حقائب', ideal: 'عائلات VIP والوفود', link: '/fleet/hyundai-staria/' },
        { name: 'تويوتا هايس', seats: 11, luggage: '16 حقيبة', ideal: 'المجموعات الكبيرة وفرق الجبيل', link: '/fleet/toyota-hiace/' },
        { name: 'كاديلاك إسكاليد', seats: 6, luggage: '4 حقائب', ideal: 'الاستخدام الدبلوماسي والتنفيذي الأول', link: '/fleet/cadillac-escalade/' },
    ];

    const features = [
        'أسعار ثابتة — بدون تسعير مرتفع أبداً',
        'سائقون مرخصون من وزارة النقل',
        'يتحدثون الإنجليزية والعربية والأردية',
        'متخصصون في عبور جسر الملك فهد',
        'معرفة بإجراءات الدخول لمجمعات أرامكو',
        'مشاركة بيانات السائق قبل الاستقبال',
        'تكييف كامل — جاهز لصيف الخليج',
        'على مدار الساعة بما في ذلك رحلات الصباح الباكر',
        'حجز عبر واتساب — تأكيد خلال 30 دقيقة',
        'نفس السائق للحجوزات متعددة الأيام',
    ];

    const faqs = [
        {
            question: 'ما أفضل خدمة تاكسي في الدمام؟',
            answer: 'Taxi Service KSA هي خدمة سيارات خاصة متميزة في الدمام متخصصة في توصيلات الشركات، ورحلات جسر الملك فهد إلى البحرين، وزيارات أرامكو. على عكس تطبيقات النقل، نوفر سائقين محترفين محجوزين مسبقاً بأسعار ثابتة، واستقبالاً شخصياً في مطار الدمام (DMM)، وسيارات مختارة خصيصاً لرحلتك — سواء كانت تنقلاً داخل الخبر أو توصيلاً عابراً للحدود إلى البحرين.',
        },
        {
            question: 'كيف أصل من الدمام إلى البحرين بسيارة خاصة؟',
            answer: 'تستغرق الرحلة بسيارة خاصة من مدينة الدمام إلى البحرين (المنامة) نحو 1.5 إلى 2.5 ساعة حسب الازدحام ووقت الانتظار عند جسر الملك فهد. مسافة القيادة نحو 95 كم. سائقونا لديهم خبرة في عبور الجسر ويعرفون المسارات الصحيحة للسيارات السياحية وسيارات المقيمين. يُنصح باستخدام جمس يوكن إكس إل للعائلات والمجموعات.',
        },
        {
            question: 'هل يمكنني حجز تاكسي من الدمام إلى الخبر؟',
            answer: 'نعم. المسافة من الدمام إلى الخبر نحو 20 كم — أي حوالي 20–30 دقيقة بالسيارة الخاصة. هذا من أكثر مسارات التوصيل بين المدينتين طلباً لدينا. نغطي التوصيل بين الفنادق، وزيارات الكورنيش، والتوصيل إلى مولات التسوق، وتوصيلات اجتماعات العمل بين المدينتين. يتوفر الاستئجار لنصف يوم إذا احتجت لسائق ينتظر بين المحطات.',
        },
        {
            question: 'كيف أصل من مطار الدمام إلى الخبر؟',
            answer: 'المسافة من مطار الملك فهد الدولي (DMM) إلى الخبر نحو 40 كم — أي حوالي 35–45 دقيقة بالسيارة الخاصة. احجز توصيل المطار عبر واتساب قبل رحلتك. يستقبلك سائقك في صالة وصول DMM بلوحة تحمل اسمك. يمر المسار عبر الظهران ويسلك الطريق الساحلي إلى الخبر.',
        },
        {
            question: 'كم تبلغ تكلفة التاكسي في الدمام؟',
            answer: 'تتراوح تكلفة تنقلات مدينة الدمام وتوصيلات الخبر بين 80 و150 ريالاً سعودياً حسب المسافة والسيارة. الدمام إلى الظهران تتراوح بين 80 و120 ريالاً. الدمام إلى البحرين (الرحلة الكاملة) تتراوح بين 300 و500 ريال حسب السيارة ووقت الانتظار عند الحدود. الدمام إلى الرياض تتراوح بين 600 و900 ريال. جميع الأسعار ثابتة — بدون عداد وبدون تسعير مرتفع. تواصلوا معنا عبر واتساب للحصول على عرض سعر دقيق.',
        },
        {
            question: 'هل تتوفر خدمة أوبر في الدمام؟',
            answer: 'تعمل أوبر وكريم في الدمام والخبر. لكن توفر التطبيقات في مطار الدمام قد يكون غير موثوق للوصول في الصباح الباكر أو وقت متأخر من الليل، والتسعير المرتفع في أوقات الذروة شائع. لضمان الاستقبال، وتوصيلات البحرين العابرة للحدود، وزيارات أرامكو التي تتطلب سيارة شركات احترافية، يُعد التوصيل الخاص المحجوز مسبقاً الخيار الأفضل.',
        },
        {
            question: 'هل يمكنني الحصول على سائق خاص من الدمام إلى الرياض؟',
            answer: 'نعم. المسافة من الدمام إلى الرياض نحو 400 كم — أي حوالي 4 إلى 4.5 ساعة عبر طريق الرياض الرئيسي. هذا من مسارات التنقل بين المدن الشائعة لدى رجال الأعمال الذين يتجنبون الرحلة الجوية الداخلية القصيرة. يُنصح باستخدام جمس يوكن إكس إل أو كاديلاك إسكاليد لمزيد من الراحة. تشمل الرحلة توقفات راحة مجدولة عند محطات ساسكو. تواصلوا معنا قبل 24 ساعة لحجز هذا المسار.',
        },
        {
            question: 'هل يتحدث سائقو التاكسي في الدمام الإنجليزية؟',
            answer: 'جميع سائقي Taxi Service KSA في الدمام والخبر يتحدثون الإنجليزية بطلاقة تخاطبية. بالنسبة لزوار أرامكو الدوليين، ومسافري البحرين ليوم واحد، وعملاء الشركات، يُؤكَّد توفير سائق يجيد الإنجليزية كمعيار ثابت. كما يتوفر سائقون يتحدثون الأردية للعمالة الوافدة من جنوب آسيا في جميع أنحاء المنطقة الشرقية.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'تاكسي الدمام — خدمة السيارات الخاصة',
        serviceType: 'تاكسي وسائق خاص الدمام',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966553270009',
        },
        areaServed: [
            { '@type': 'City', name: 'الدمام' },
            { '@type': 'City', name: 'الخبر' },
            { '@type': 'City', name: 'الظهران' },
            { '@type': 'Place', name: 'المنطقة الشرقية' },
        ],
        description: 'خدمة تاكسي وسائق خاص متميزة في الدمام، السعودية. متخصصون في توصيلات جسر الملك فهد إلى البحرين، وزيارات أرامكو بالظهران، واستقبال مطار الدمام، واستئجار سيارات خاصة بين مدن المنطقة الشرقية.',
        availableLanguage: [
            { '@type': 'Language', name: 'English' },
            { '@type': 'Language', name: 'Arabic' },
            { '@type': 'Language', name: 'Urdu' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات تاكسي الدمام',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل خاص من الدمام إلى البحرين' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل مطار الدمام (DMM)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'سيارة خاصة من الدمام إلى الخبر' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنقلات مدينة الدمام — استئجار بالساعة واليوم' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'توصيل بين المدن من الدمام إلى الرياض' } },
            ],
        },
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'تاكسي الدمام — خدمة السيارات الخاصة في السعودية',
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
        },
        url: 'https://taxiserviceksa.com/ar/services/taxi-in-dammam/',
    };

    const ratingSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'تاكسي الدمام — خدمة السيارات الخاصة',
        serviceType: 'تاكسي وسائق خاص الدمام',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: '+966553270009',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '118',
            bestRating: '5',
            worstRating: '1',
        },
        areaServed: [
            { '@type': 'City', name: 'الدمام' },
            { '@type': 'City', name: 'الخبر' },
            { '@type': 'Place', name: 'المنطقة الشرقية' },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="dammam-taxi-schema-ar" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="dammam-speakable-ar" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <Script id="dammam-rating-schema-ar" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        الدمام · الخبر · الظهران · المنطقة الشرقية
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        تاكسي الدمام<br />
                        <span className="text-white/80">سيارة خاصة إلى البحرين والخبر وكل السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                        أفضل خدمة تاكسي خاص في الدمام — توصيلات جسر الملك فهد إلى البحرين، وزيارات أرامكو بالظهران، واستقبال المطار، وتنقلات المدينة في جميع أنحاء المنطقة الشرقية. سائقون محترفون، أسطول فاخر، أسعار ثابتة على مدار الساعة.
                    </p>

                    {/* حقائق سريعة */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10 tldr-summary">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">
                            حقائق سريعة — تاكسي الدمام <Car className="w-4 h-4 text-emerald-400" />
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">المطار (DMM):</strong> 35 كم من المدينة — 30–40 دقيقة</li>
                            <li><strong className="text-white">الخبر:</strong> 20 كم من الدمام — 20–30 دقيقة</li>
                            <li><strong className="text-white">البحرين:</strong> 95 كم — 1.5–2.5 ساعة (يشمل عبور الجسر)</li>
                            <li><strong className="text-white">اللغات:</strong> الإنجليزية والعربية والأردية</li>
                            <li><strong className="text-white">الأسعار:</strong> ثابتة — بدون تسعير مرتفع أبداً</li>
                            <li><strong className="text-white">الحجز:</strong> واتساب +966 553 270 009</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=مرحباً،%20أحتاج%20تاكسي%20في%20الدمام" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز تاكسي الدمام
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                راسلنا لطلب عرض سعر
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
                        <span className="text-gray-900 font-semibold">تاكسي الدمام</span>
                    </nav>
                </div>
            </section>

            {/* حالات الاستخدام */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من يستخدم خدمة التاكسي لدينا في الدمام</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">من مقاولي أرامكو إلى مسافري البحرين ليوم واحد — سائق محترف واحد لكل رحلة في المنطقة الشرقية.</p>
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

            {/* المسارات */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أشهر مسارات تاكسي الدمام</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">اضغط على أي مسار لمشاهدة التفاصيل الكاملة والأسعار وخيارات الحجز.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">من</th>
                                    <th className="px-6 py-4 font-bold">إلى</th>
                                    <th className="px-6 py-4 font-bold">المسافة</th>
                                    <th className="px-6 py-4 font-bold">مدة القيادة</th>
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

            {/* الأسطول */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختر سيارة تاكسي الدمام</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">لرحلات جسر الملك فهد إلى البحرين والتوصيلات الجماعية للشركات، توفر جمس يوكن إكس إل الرحلة الأكثر راحة واتساعاً.</p>
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

            {/* لماذا نحن الأفضل + المزايا */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                لماذا نحن الأفضل في خدمة التاكسي بالدمام
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 speakable-answer">
                                تُعد الدمام والمنطقة الشرقية موطن صناعة النفط والغاز في السعودية، وشركة أرامكو السعودية، وجسر الملك فهد إلى البحرين. المسافات بين المطار والمناطق الصناعية والمدن السكنية (الدمام، الخبر، الظهران) تتطلب سيارة خاصة موثوقة — لا تاكسي عشوائياً بالعداد.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                يعرف سائقونا مداخل مجمعات أرامكو، والمسارات الصحيحة عند الجسر للركاب السعوديين والأجانب، وأسرع الطرق بين مدن المنطقة الشرقية. يتم فحص كل سيارة للتأكد من جاهزيتها لصيف الخليج — تكييف كامل، وبدون أعطال على طريق البحرين السريع.
                            </p>
                            <p className="text-sm text-gray-500 mb-8">
                                لمزيد من القراءة:{' '}
                                <a href="https://www.visitsaudi.com/en/see-do/destinations/eastern-province" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">زوروا السعودية — المنطقة الشرقية</a>
                                {' · '}
                                <a href="https://www.bahrain.com/en/plan-your-visit/getting-to-bahrain/by-road" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-black">سياحة البحرين — الوصول عبر الطريق البري</a>
                            </p>
                            <div className="grid grid-cols-3 gap-6 border-t pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">4.9</div>
                                    <div className="text-sm text-gray-500 mt-1">تقييم النجوم</div>
                                </div>
                                <div className="text-center border-x border-gray-200">
                                    <div className="text-3xl font-black text-black">24/7</div>
                                    <div className="text-sm text-gray-500 mt-1">التوفر</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-black">0</div>
                                    <div className="text-sm text-gray-500 mt-1">رسوم الذروة</div>
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

            {/* كيفية الحجز */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تحجز تاكسي في الدمام</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'راسلنا عبر واتساب', desc: 'أرسل موقع الاستقبال والوجهة (الخبر، الظهران، البحرين، المطار) والتاريخ والوقت وعدد الركاب. لتوصيلات جسر البحرين، يُنصح بالحجز قبل 24 ساعة.' },
                            { step: '2', title: 'استلم بيانات السائق', desc: 'نرسل لك اسم السائق وصورته ورقم لوحة السيارة وتأكيد الاستقبال. تعرف بالضبط من سيأتي وبأي سيارة.' },
                            { step: '3', title: 'السائق عند بابك', desc: 'يصل السائق في الموعد، ويساعد في حمل الأمتعة، ويوصلك إلى وجهتك. يتم التعامل مع عبور الجسر بسلاسة مع سائق ذي خبرة.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="https://wa.me/966553270009?text=مرحباً،%20أحتاج%20تاكسي%20في%20الدمام" target="_blank">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-10 py-6 h-auto rounded-2xl">
                                احجز عبر واتساب <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* روابط داخلية */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> أهم مسارات الدمام</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/routes/dammam-bahrain/" className="text-gray-600 hover:text-black">الدمام ← البحرين</Link></li>
                                <li><Link href="/routes/dammam-riyadh/" className="text-gray-600 hover:text-black">الدمام ← الرياض</Link></li>
                                <li><Link href="/routes/dammam-dubai/" className="text-gray-600 hover:text-black">الدمام ← دبي</Link></li>
                                <li><Link href="/routes/dammam-kuwait/" className="text-gray-600 hover:text-black">الدمام ← الكويت</Link></li>
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
                                <li><Link href="/dammam-airport-taxi/" className="text-gray-600 hover:text-black">تاكسي مطار الدمام (DMM)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">سائق VIP فاخر</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">نقل الشركات</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">استئجار سائق خاص</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4" /> المنطقة الشرقية</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/dammam/" className="text-gray-600 hover:text-black">توصيل VIP في الدمام</Link></li>
                                <li><Link href="/routes/dammam-airport-to-khobar/" className="text-gray-600 hover:text-black">مطار DMM ← الخبر</Link></li>
                                <li><Link href="/services/intercity/" className="text-gray-600 hover:text-black">التنقل بين المدن في السعودية</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">جميع المدن ←</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* الأسئلة الشائعة */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تاكسي الدمام — جميع الأسئلة والأجوبة</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">كل ما تحتاج معرفته عن حجز تاكسي أو سيارة خاصة في الدمام والمنطقة الشرقية.</p>
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

            {/* الكاتب */}
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>

            {/* دعوة لإجراء */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        احجز أفضل تاكسي في الدمام
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        جسر البحرين، أرامكو الظهران، استقبال المطار، أو تنقلات مدينة الخبر — سائق محترف واحد لكل رحلة في المنطقة الشرقية. أسعار ثابتة، أسطول فاخر، على مدار الساعة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966553270009?text=مرحباً،%20أحتاج%20تاكسي%20في%20الدمام" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                حجز عبر واتساب
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[220px]">
                                راسلنا لطلب عرض سعر
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/routes/dammam-bahrain/" className="text-gray-400 hover:text-white underline">الدمام ← البحرين</Link>
                        {' · '}
                        <Link href="/routes/dammam-riyadh/" className="text-gray-400 hover:text-white underline">الدمام ← الرياض</Link>
                        {' · '}
                        <Link href="/dammam-airport-taxi/" className="text-gray-400 hover:text-white underline">مطار الدمام (DMM)</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">جميع مطارات السعودية</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
