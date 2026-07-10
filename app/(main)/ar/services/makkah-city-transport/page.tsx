import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Users, Star, Clock, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'خدمة نقل VIP في مكة المكرمة | سائق خاص ونقل عائلي | Taxi Service KSA',
    description: 'نقل VIP خاص وسائق عائلي في مكة المكرمة. توصيل من الفندق إلى الحرم، جولات الزيارة، من مطار جدة إلى مكة، ونقل عائلي فاخر. سائقون مرخصون على مدار الساعة.',
    keywords: [
        'خدمة نقل VIP مكة المكرمة',
        'خدمة نقل عائلي مكة المكرمة',
        'سائق خاص مكة المكرمة',
        'توصيل من فندق مكة إلى الحرم',
        'توصيل خاص من مطار جدة إلى مكة',
        'نقل فاخر مكة المكرمة',
        'تاكسي VIP مكة المكرمة',
        'سائق عائلي مكة المكرمة',
        'نقل داخل مدينة مكة',
        'سيارة خاصة مكة المكرمة',
        'توصيل خاص من مكة إلى المدينة',
        'سائق خاص مكة السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/makkah-city-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/makkah-city-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/makkah-city-transport/',
            'x-default': 'https://taxiserviceksa.com/services/makkah-city-transport/',
        },
    },
    openGraph: {
        title: 'نقل VIP في مكة المكرمة | سائق عائلي خاص | Taxi Service KSA',
        description: 'نقل VIP وعائلي في مكة المكرمة. من الفندق إلى الحرم، جولات الزيارة، توصيل المطار، ومن مكة إلى المدينة. سائقون مرخصون، أسطول فاخر، على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/makkah-city-transport/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function MakkahCityTransportPageArabic() {
    const services = [
        { title: 'توصيل من الفندق إلى الحرم', desc: 'سيارة خاصة من أي فندق في مكة المكرمة إلى المسجد الحرام. ينتظر السائق حتى موعد العودة. متوفر في جميع أوقات الصلاة بما فيها الفجر والعشاء.', icon: Star },
        { title: 'من مطار جدة إلى مكة', desc: 'استقبال شخصي في مطار الملك عبدالعزيز الدولي (JED) مع التوصيل إلى فنادق مكة المكرمة. ٨٠ كم، حوالي ٦٠-٧٥ دقيقة.', icon: MapPin },
        { title: 'جولات زيارة المعالم في مكة المكرمة', desc: 'سائق مرافق ليوم كامل لزيارة المسجد الحرام، غار حراء، غار ثور، منى، مزدلفة، عرفات، وجبل النور.', icon: Clock },
        { title: 'توصيل من مكة إلى المدينة المنورة', desc: 'توصيل خاص بين المدن من مكة المكرمة إلى المدينة المنورة (٤٢٠ كم، حوالي ٤.٥ ساعة). سيارة دفع رباعي فاخرة أو فان بكامل الراحة.', icon: Car },
        { title: 'نقل عائلي VIP', desc: 'سيارة جمس يوكن أو تويوتا هايس واسعة للعائلات الكبيرة. برامج متعددة المحطات داخل المدينة، التسوق، وزيارات المستشفى داخل مكة المكرمة.', icon: Users },
        { title: 'نقل ليلي وفي الصباح الباكر', desc: 'نقل متوفر لصلاة التهجد والفجر والعشاء. بدون زيادة في الأسعار. استقبال موثوق في الساعة الثالثة والرابعة فجراً وما بعدها.', icon: Shield },
    ];

    const routes = [
        { from: 'مطار جدة (JED)', to: 'فنادق مكة المكرمة', dist: '٨٠ كم', time: '٦٠-٧٥ دقيقة' },
        { from: 'مكة المكرمة', to: 'المدينة المنورة', dist: '٤٢٠ كم', time: '٤.٥ ساعة' },
        { from: 'فندق مكة المكرمة', to: 'المسجد الحرام', dist: '١-٥ كم', time: '٥-٢٠ دقيقة' },
        { from: 'مكة المكرمة', to: 'الطائف', dist: '٧٥ كم', time: '١.٥ ساعة' },
        { from: 'مكة المكرمة', to: 'جدة', dist: '٨٥ كم', time: '٦٠-٩٠ دقيقة' },
    ];

    const features = [
        'السائقون غير المسلمين لا يدخلون وسط مدينة مكة المكرمة',
        'جميع السائقين مسلمون — دخول كامل لجميع المناطق',
        'مرخصون من وزارة النقل',
        'تتبع الرحلات الجوية لاستقبال مطار جدة',
        'جمس يوكن وهايس للعائلات الكبيرة',
        'يتحدثون العربية والإنجليزية والأردية',
        'على مدار الساعة بما في ذلك أوقات الصلاة',
        'بدون مشاركة الرحلة — سيارة خاصة فقط',
        'مقاعد أطفال عند الطلب',
        'أسعار ثابتة — بدون زيادة في أوقات الذروة',
    ];

    const faqs = [
        {
            question: 'هل توجد خدمة نقل VIP في مكة المكرمة؟',
            answer: 'نعم. توفر Taxi Service KSA نقلاً خاصاً VIP في مكة المكرمة يشمل التوصيل من الفندق إلى الحرم، جولات الزيارة، والتوصيل بين المدن إلى المدينة المنورة وجدة. جميع السائقين مسلمون ويمكنهم الدخول إلى جميع مناطق مكة المكرمة. تشمل السيارات جمس يوكن إكس إل وتويوتا هايس للعائلات والمجموعات.',
        },
        {
            question: 'كيف أصل من مطار جدة إلى مكة المكرمة بسيارة خاصة؟',
            answer: 'يمكنكم حجز توصيل خاص من مطار جدة (JED) إلى مكة المكرمة مسبقاً. تبلغ المسافة ٨٠ كم وتستغرق الرحلة حوالي ٦٠-٧٥ دقيقة. سيقابلكم سائقنا في صالة الوصول حاملاً لوحة تحمل اسمكم. السيارة خاصة تماماً — بدون مقاعد مشتركة. يتم الحجز عبر واتساب قبل رحلتكم.',
        },
        {
            question: 'هل يمكنني حجز سائق عائلي خاص في مكة المكرمة؟',
            answer: 'نعم. يتوفر نقل عائلي في مكة المكرمة بسيارات جمس يوكن إكس إل (٧ مقاعد)، تويوتا هايس (١١ مقعداً)، أو هيونداي ستاريا VIP (٧ مقاعد). يُخصص السائق حصرياً لعائلتكم طوال مدة الحجز. البرامج متعددة المحطات — زيارات الحرم، الزيارة، التسوق، والمستشفى — جميعها مدعومة.',
        },
        {
            question: 'هل يوجد نقل خاص لجولات الزيارة في مكة المكرمة؟',
            answer: 'نعم. تتوفر باقات سائق لجولة الزيارة ليوم كامل في مكة المكرمة. تشمل محطات الزيارة المعتادة المسجد الحرام، غار حراء (جبل النور)، غار ثور، منى، مزدلفة، عرفات (جبل الرحمة)، ومنطقة أبراج البيت. ينتظر السائق في كل موقع. يتوفر سائقون يتحدثون العربية والإنجليزية والأردية.',
        },
        {
            question: 'ما هي أفضل طريقة للسفر من مكة المكرمة إلى المدينة المنورة بشكل خاص؟',
            answer: 'الخيار الأكثر راحة هو سيارة جمس يوكن أو تويوتا هايس خاصة مع سائق. تبلغ رحلة مكة المكرمة إلى المدينة المنورة حوالي ٤٢٠ كم وتستغرق ٤.٥ ساعة. سعر ثابت، سيارة مكيفة، مع إمكانية محطات استراحة اختيارية على الطريق. هذا الخيار مثالي للعائلات وكبار السن من الحجاج والمجموعات الذين يفضلون الراحة على قطار الحرمين السريع.',
        },
        {
            question: 'هل توجد خدمة نقل ليلية في مكة المكرمة لصلاة الفجر؟',
            answer: 'نعم. يتوفر النقل في جميع الأوقات في مكة المكرمة، بما في ذلك صلاة الفجر (٣-٤ فجراً)، التهجد (٢-٣ فجراً)، والعشاء. لا توجد زيادة في الأسعار لحجوزات الليل المتأخر أو الصباح الباكر. يُنصح بالحجز المسبق للاستقبال في الساعات الأولى من الصباح.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمة نقل VIP وعائلي في مكة المكرمة',
        serviceType: 'نقل خاص في مكة المكرمة',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'مكة المكرمة' },
            { '@type': 'AdministrativeArea', name: 'منطقة مكة المكرمة' },
        ],
        description: 'نقل VIP وعائلي خاص في مكة المكرمة. من الفندق إلى الحرم، جولات الزيارة، توصيل المطار، ومن مكة إلى المدينة. جميع السائقين مسلمون بدخول كامل للمدينة.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="makkah-transport-schema-ar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">نقل مكة المكرمة</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نقل VIP وعائلي<br /><span className="text-white/80">في مكة المكرمة</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        توصيل خاص من الفندق إلى الحرم، جولات زيارة المعالم، استقبال من مطار جدة، ونقل بين مكة المكرمة والمدينة المنورة. جميع السائقين مسلمون بدخول كامل للمناطق المقدسة في مكة المكرمة.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">حقائق سريعة — نقل مكة المكرمة <MapPin className="w-4 h-4 text-emerald-400" /></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">السائقون:</strong> جميعهم مسلمون — دخول كامل لمكة المكرمة</li>
                            <li><strong className="text-white">من جدة إلى مكة:</strong> ٨٠ كم، حوالي ٦٠-٧٥ دقيقة</li>
                            <li><strong className="text-white">من مكة إلى المدينة:</strong> ٤٢٠ كم، حوالي ٤.٥ ساعة</li>
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة بما في ذلك أوقات الصلاة</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20في%20مكة%20المكرمة" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز نقل مكة المكرمة <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">طلب عرض سعر عبر البريد</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات النقل في مكة المكرمة</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <s.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أهم الطرق من مكة المكرمة</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">من</th>
                                    <th className="px-6 py-4 font-bold">إلى</th>
                                    <th className="px-6 py-4 font-bold">المسافة</th>
                                    <th className="px-6 py-4 font-bold">المدة</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-bold text-gray-900">{r.from}</td>
                                        <td className="px-6 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-sm text-gray-500">
                        المزيد من الطرق ← <Link href="/routes/" className="text-black font-bold hover:underline">عرض جميع الطرق بين المدن</Link>
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار خدمة النقل لدينا في مكة المكرمة</h2></div>
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> مواقع ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">دليل مدينة مكة المكرمة</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">نقل جدة</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">نقل المدينة المنورة</Link></li>
                                <li><Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-black">طريق جدة ← مكة المكرمة</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> الأسطول</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">جمس يوكن (للعائلات)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">تويوتا هايس (للمجموعات)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black">هيونداي ستاريا VIP</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> خدمات ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">نقل العمرة</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">توصيل المطار</Link></li>
                                <li><Link href="/services/madinah-city-transport/" className="text-gray-600 hover:text-black">نقل المدينة المنورة</Link></li>
                                <li><Link href="/services/women-transport/" className="text-gray-600 hover:text-black">نقل السيدات</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن نقل مكة المكرمة</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">احجز نقلاً خاصاً في مكة المكرمة</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">من الفندق إلى الحرم، جولات الزيارة، استقبال من المطار، أو من مكة إلى المدينة — سيارات خاصة مع سائقين مسلمين متوفرة على مدار الساعة.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20في%20مكة%20المكرمة" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">حجز عبر واتساب</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">طلب عرض سعر عبر البريد</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
