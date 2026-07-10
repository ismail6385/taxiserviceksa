import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Users, Car, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'تويوتا هايس مع سائق في السعودية | تأجير حافلة جماعية بالرياض وجدة | Taxi Service KSA',
    description: 'استأجر تويوتا هايس مع سائق في السعودية. حافلة خاصة بـ ١١ مقعداً للمجموعات والعائلات ومجموعات المعتمرين والسياح في الرياض وجدة ومكة والمدينة. احجز الآن.',
    keywords: [
        'تويوتا هايس مع سائق السعودية',
        'تأجير هايس الرياض',
        'تأجير حافلة جماعية السعودية',
        'حافلة خاصة مع سائق الرياض',
        'تأجير هايس مع سائق جدة',
        'نقل جماعي السعودية',
        'حافلة للمعتمرين السعودية',
        'حافلة ١١ راكب مع سائق السعودية',
        'ميني فان مع سائق الرياض',
        'شوفير جماعي السعودية',
        'هايس لمجموعات السياح السعودية',
        'نقل جماعي خاص السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/group-hiace-hire/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/group-hiace-hire/',
            'ar': 'https://taxiserviceksa.com/ar/services/group-hiace-hire/',
            'x-default': 'https://taxiserviceksa.com/services/group-hiace-hire/',
        },
    },
    openGraph: {
        title: 'تويوتا هايس مع سائق في السعودية | تأجير حافلة جماعية | Taxi Service KSA',
        description: 'استأجر تويوتا هايس (١١ مقعداً) مع سائق في الرياض وجدة ومكة والمدينة. حافلة جماعية خاصة للعائلات ومجموعات المعتمرين والسياح.',
        url: 'https://taxiserviceksa.com/ar/services/group-hiace-hire/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function GroupHiaceHirePageArabic() {
    const useCases = [
        { title: 'المجموعات العائلية', desc: 'رحلات العائلة الممتدة، وتوصيل مطار للعائلات الكبيرة، وبرامج عائلية متعددة الأيام مع مساحة واسعة للمقاعد والأمتعة.', icon: Users, examples: ['استقبال المطار (١١ شخصاً)', 'مجموعات العمرة العائلية', 'رحلات برية عائلية بين عدة مدن'] },
        { title: 'مجموعات السياحة والجولات', desc: 'مجموعات تصل إلى ١١ سائحاً لجولات المدن في الرياض وجدة والعلا ومكة. السائق ينتظر عند كل موقع.', icon: Star, examples: ['جولات مجموعات الرياض', 'جولات البلد في جدة', 'رحلات جماعية ليوم في الصحراء'] },
        { title: 'مجموعات المعتمرين', desc: 'حافلة هايس مريحة لمجموعات العمرة والحج. من مطار جدة إلى مكة، وتوصيل بين الفندق والحرم، وجولات الزيارة.', icon: Shield, examples: ['نقل جماعي من جدة إلى مكة', 'جولات زيارة جماعية في مكة', 'من فندق المدينة إلى الحرم'] },
        { title: 'مجموعات الشركات والمؤتمرات', desc: 'نقل الفرق للمؤتمرات والمعارض وفعاليات الشركات. سائق محترف، ومقاعد واسعة لـ ١١ زميلاً.', icon: Car, examples: ['نقل مكوكي لمراكز المؤتمرات', 'رحلات جماعية من المطار للفندق', 'نقل وفود المعارض'] },
        { title: 'المجموعات المدرسية والتعليمية', desc: 'نقل جماعي مدرسي وتعليمي في الرياض وجدة. متوفر للرحلات الميدانية وزيارات المتاحف وتنقلات الحرم الجامعي.', icon: Clock, examples: ['رحلات مدرسية ميدانية', 'رحلات جماعية جامعية', 'تنقلات المؤسسات'] },
        { title: 'مجموعات التسوق والنزهات', desc: 'رحلات تسوق جماعية في مولات الرياض. السائق ينتظر عند كل موقع ويساعد في حمل الأمتعة. بدون متاعب موقف السيارات للمجموعة.', icon: MapPin, examples: ['رحلات جماعية إلى مول العرب', 'جولات الأسواق الشعبية', 'يوم تسوق في عدة مولات'] },
    ];

    const specs = [
        { label: 'المقاعد', value: '١١ راكباً' },
        { label: 'الأمتعة', value: '١٦ حقيبة كبيرة (تقريباً)' },
        { label: 'التكييف', value: 'تكييف كامل للمقصورة' },
        { label: 'التوفر', value: 'على مدار الساعة في كل السعودية' },
        { label: 'السائق', value: 'شوفير محترف ومرخص' },
        { label: 'اللغات', value: 'الإنجليزية والعربية والأردية' },
    ];

    const features = [
        'تتسع لـ ١١ راكباً براحة',
        'سعة أمتعة كبيرة للمجموعات',
        'سائق مرخص من وزارة النقل',
        'تكييف كامل في كل أنحاء المركبة',
        'نفس السائق للحجوزات متعددة الأيام',
        'يتحدث الإنجليزية والعربية',
        'أسعار جماعية ثابتة — بدون تسعير مرتفع بالطلب',
        'مقاعد أطفال متوفرة عند الطلب',
        'متوفر على مدار الساعة في كل السعودية',
        'متوفر أيضاً: تويوتا كوستر (٢٥ مقعداً)',
    ];

    const faqs = [
        {
            question: 'هل يمكنني استئجار تويوتا هايس مع سائق في السعودية؟',
            answer: 'نعم. تويوتا هايس (حافلة صغيرة ١١ مقعداً) مع سائق محترف متوفرة في الرياض وجدة ومكة والمدينة. السائق مرخص وبزي رسمي وذو خبرة في نقل المجموعات. خيارات التأجير تشمل توصيل المطار، وجولات ليوم كامل، وحجوزات متعددة الأيام، ومسارات بين المدن.',
        },
        {
            question: 'كم عدد الأشخاص الذين تتسع لهم تويوتا هايس؟',
            answer: 'تتسع تويوتا هايس المستخدمة للتأجير الخاص لـ ١١ راكباً مع الأمتعة. لديها سعة تقارب ١٦ حقيبة كبيرة في المؤخرة. مثالية للعائلات من ٨ إلى ١١ فرداً، والمجموعات السياحية، ومجموعات المعتمرين، وفرق الشركات التي تحتاج نقلاً جماعياً في السعودية.',
        },
        {
            question: 'هل تويوتا هايس متوفرة لمجموعات العمرة والحجاج؟',
            answer: 'نعم. تويوتا هايس من أكثر المركبات شعبية لمجموعات معتمري السعودية. الاستخدامات الشائعة تشمل النقل الجماعي من مطار جدة إلى مكة، ومن الفندق إلى المسجد الحرام، وجولات الزيارة في مكة. المقصورة الواسعة تستوعب العائلات الكبيرة والمجموعات مع الأمتعة براحة.',
        },
        {
            question: 'هل يمكنني استئجار حافلة جماعية مع سائق للتجول في الرياض؟',
            answer: 'نعم. تويوتا هايس مع سائق متوفرة لجولات سياحية ليوم كامل أو نصف يوم في الرياض لمجموعات تصل إلى ١١ شخصاً. تشمل محطات الجولات الجماعية الشائعة الدرعية، وحافة العالم، والمتحف الوطني، ومواقع موسم الرياض. السائق ينتظر عند كل موقع.',
        },
        {
            question: 'ما الفرق بين تويوتا هايس وتويوتا كوستر للتأجير الجماعي؟',
            answer: 'تويوتا هايس تتسع لـ ١١ راكباً وهي مثالية للمجموعات الصغيرة إلى المتوسطة والعائلات ومجموعات المعتمرين. تويوتا كوستر تتسع لـ ٢٥ راكباً وتناسب الوفود الكبيرة، وحافلات نقل ضيوف الأفراح، ومجموعات فعاليات الشركات. كلاهما متوفر مع سائقين محترفين في السعودية.',
        },
        {
            question: 'هل تتوفر حافلة خاصة لتوصيل المجموعات من المطار في الرياض؟',
            answer: 'نعم. تويوتا هايس مثالية لتوصيل المجموعات من مطار الملك خالد الدولي (RUH) في الرياض. للمجموعات من ٨ إلى ١١ شخصاً القادمين معاً، حافلة هايس واحدة أكثر توفيراً وسهولة من حجز عدة سيارات. يستقبل السائق المجموعة عند صالة الوصول بلوحة تحمل الاسم.',
        },
        {
            question: 'هل يمكنني استئجار هايس مع سائق لعدة أيام في السعودية؟',
            answer: 'نعم. تأجير تويوتا هايس لعدة أيام متوفر. يُخصص نفس السائق لكامل فترة الحجز، مما يضمن الاستمرارية والتعرف على جدول مجموعتكم. أسعار الأيام المتعددة متوفرة لمجموعات المعتمرين، والبرامج السياحية، ووفود الشركات.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'تأجير حافلة تويوتا هايس الجماعية مع سائق في السعودية',
        serviceType: 'نقل جماعي — تأجير حافلة خاصة',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'الرياض' },
            { '@type': 'City', name: 'جدة' },
            { '@type': 'City', name: 'مكة المكرمة' },
            { '@type': 'City', name: 'المدينة المنورة' },
            { '@type': 'AdministrativeArea', name: 'السعودية' },
        ],
        description: 'استأجر تويوتا هايس (حافلة صغيرة ١١ مقعداً) مع سائق في السعودية. نقل جماعي خاص للعائلات ومجموعات المعتمرين والسياح وفرق الشركات في الرياض وجدة ومكة والمدينة.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="hiace-hire-schema-ar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">تأجير حافلة جماعية</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        تويوتا هايس مع سائق<br /><span className="text-white/80">في السعودية</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        حافلة تويوتا هايس خاصة بـ ١١ مقعداً مع سائق محترف للعائلات ومجموعات المعتمرين والسياح وفرق الشركات في الرياض وجدة ومكة والمدينة.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">تويوتا هايس — حقائق سريعة <Users className="w-4 h-4 text-emerald-400" /></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">المقاعد:</strong> ١١ راكباً</li>
                            <li><strong className="text-white">الأمتعة:</strong> ~١٦ حقيبة كبيرة</li>
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة — الرياض، جدة، مكة، المدينة</li>
                            <li><strong className="text-white">السائق:</strong> مرخص، يتحدث العربية والإنجليزية</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أرغب%20باستئجار%20تويوتا%20هايس%20مع%20سائق%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز تأجير هايس الجماعي <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">استفسار عن السعر الجماعي عبر البريد</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">مواصفات المركبة</h2></div>
                    <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
                        {specs.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
                                <p className="text-base font-bold text-gray-900">{s.value}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-500">
                        تحتاج مقاعد أكثر؟ <Link href="/fleet/toyota-coaster/" className="text-black font-bold hover:underline">تويوتا كوستر (٢٥ مقعداً) ←</Link>
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من يستأجر الهايس</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((u, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><u.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{u.desc}</p>
                                <ul className="space-y-2">
                                    {u.examples.map((e, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />{e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ما الذي يشمله الحجز</h2></div>
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

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> خيارات الأسطول</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">تويوتا هايس (١١ مقعداً)</Link></li>
                                <li><Link href="/fleet/toyota-coaster/" className="text-gray-600 hover:text-black">تويوتا كوستر (٢٥ مقعداً)</Link></li>
                                <li><Link href="/fleet/mercedes-sprinter/" className="text-gray-600 hover:text-black">مرسيدس سبرينتر (١٤ مقعداً)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">جمس يوكن (٧ مقاعد)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> أهم المدن</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">تأجير هايس الرياض</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">تأجير هايس جدة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">تأجير هايس مكة</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">تأجير هايس المدينة</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> خدمات ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">نقل العمرة</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">نقل سياحي</Link></li>
                                <li><Link href="/services/event-transport/" className="text-gray-600 hover:text-black">نقل الفعاليات</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">سائق خاص (يومي)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن تأجير الهايس الجماعي</h2>
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">احجز تويوتا هايس مع سائق في السعودية</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">حافلة خاصة بـ ١١ مقعداً مع سائق محترف للعائلات ومجموعات المعتمرين والسياح وفرق الشركات. متوفرة على مدار الساعة في الرياض وجدة ومكة والمدينة.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أرغب%20باستئجار%20تويوتا%20هايس%20مع%20سائق%20في%20السعودية" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">حجز عبر واتساب</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">استفسار عن السعر الجماعي عبر البريد</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
