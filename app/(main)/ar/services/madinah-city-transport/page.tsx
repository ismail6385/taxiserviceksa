import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Users, Star, Clock, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'نقل عائلي فاخر في المدينة المنورة | سائق خاص وتوصيل | Taxi Service KSA',
    description: 'نقل عائلي خاص وسائق فاخر في المدينة المنورة. من الفندق إلى المسجد النبوي، جولات زيارة المعالم، استقبال من مطار المدينة، وتوصيل من المدينة إلى مكة. سائقون مرخصون على مدار الساعة.',
    keywords: [
        'نقل عائلي فاخر المدينة المنورة',
        'نقل خاص المدينة المنورة',
        'توصيل من الفندق إلى الحرم النبوي',
        'تاكسي مطار المدينة المنورة',
        'سائق خاص المدينة المنورة',
        'توصيل خاص من المدينة إلى مكة',
        'سائق زيارة المدينة المنورة',
        'نقل عائلي المدينة المنورة',
        'نقل VIP المدينة المنورة',
        'توصيل فاخر المدينة المنورة',
        'سائق للمدينة المنورة',
        'تاكسي مطار المدينة (MED)',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/madinah-city-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/madinah-city-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/madinah-city-transport/',
            'x-default': 'https://taxiserviceksa.com/services/madinah-city-transport/',
        },
    },
    openGraph: {
        title: 'نقل عائلي فاخر في المدينة المنورة | سائق خاص | Taxi Service KSA',
        description: 'نقل فاخر وخاص في المدينة المنورة. من الفندق إلى المسجد النبوي، جولات الزيارة، توصيل المطار، ومن المدينة إلى مكة. سيارات عائلية متوفرة على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/madinah-city-transport/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function MadinahCityTransportPageArabic() {
    const services = [
        { title: 'من الفندق إلى المسجد النبوي', desc: 'توصيل خاص من أي فندق في المدينة المنورة إلى المسجد النبوي الشريف. ينتظر السائق حتى موعد العودة. متوفر في جميع أوقات الصلاة بما فيها الفجر.', icon: Star },
        { title: 'استقبال من مطار المدينة المنورة (MED)', desc: 'استقبال شخصي في مطار الأمير محمد بن عبدالعزيز الدولي (MED) وتوصيل إلى فنادق المدينة المنورة. ٢٠ كم، حوالي ٢٠-٣٠ دقيقة.', icon: MapPin },
        { title: 'جولات زيارة المعالم في المدينة المنورة', desc: 'سائق ليوم كامل لزيارة المسجد النبوي، مسجد قباء، مسجد القبلتين، جبل أحد، مقبرة البقيع، وأسواق التمور.', icon: Clock },
        { title: 'توصيل من المدينة إلى مكة', desc: 'توصيل خاص بين المدن من المدينة المنورة إلى مكة المكرمة (٤٢٠ كم، حوالي ٤.٥ ساعة). سيارة دفع رباعي فاخرة أو فان بكامل الراحة ومحطات استراحة.', icon: Car },
        { title: 'نقل عائلي فاخر', desc: "سيارة جمس يوكن إكس إل أو تويوتا هايس للعائلات الكبيرة. برامج متعددة المحطات — زيارة المسجد، جولات الزيارة، والتسوق في أسواق المدينة المنورة.", icon: Users },
        { title: 'نقل متوفر لجميع أوقات الصلاة', desc: 'متوفر لصلاة التهجد والفجر والظهر والعصر والمغرب والعشاء. بدون زيادة في الأسعار في أي وقت.', icon: Shield },
    ];

    const routes = [
        { from: 'مطار المدينة المنورة (MED)', to: 'فنادق المدينة المنورة', dist: '٢٠ كم', time: '٢٠-٣٠ دقيقة' },
        { from: 'المدينة المنورة', to: 'مكة المكرمة', dist: '٤٢٠ كم', time: '٤.٥ ساعة' },
        { from: 'المدينة المنورة', to: 'مطار جدة (JED)', dist: '٤٢٠ كم', time: '٤.٥ ساعة' },
        { from: 'فندق المدينة المنورة', to: 'المسجد النبوي', dist: '١-٤ كم', time: '٥-١٥ دقيقة' },
        { from: 'المدينة المنورة', to: 'ينبع', dist: '٢٢٠ كم', time: '٢.٥ ساعة' },
    ];

    const features = [
        'جميع السائقين مسلمون — دخول كامل لكل مناطق المدينة المنورة',
        'مرخصون من وزارة النقل',
        'تتبع الرحلات الجوية لاستقبال مطار المدينة',
        'جمس يوكن وهايس للعائلات الكبيرة',
        'يتحدثون العربية والإنجليزية والأردية',
        'على مدار الساعة بما في ذلك جميع أوقات الصلاة',
        'سيارات خاصة — بدون مشاركة الرحلة',
        'أسعار ثابتة — بدون زيادة في أوقات الذروة',
        'مقاعد أطفال متوفرة عند الطلب',
        'خدمة من الباب إلى الباب في كل أنحاء المدينة المنورة',
    ];

    const faqs = [
        {
            question: 'هل توجد خدمة نقل عائلي فاخر في المدينة المنورة؟',
            answer: "نعم. توفر Taxi Service KSA نقلاً عائلياً فاخراً في المدينة المنورة بسيارات جمس يوكن إكس إل (٧ مقاعد)، تويوتا هايس (١١ مقعداً)، وهيونداي ستاريا VIP (٧ مقاعد). يُخصص السائق حصرياً لخدمة عائلتكم. تشمل الخدمات التوصيل من الفندق إلى المسجد النبوي، جولات الزيارة، والتوصيل بين المدن إلى مكة ومطار جدة.",
        },
        {
            question: 'كيف أصل من مطار المدينة المنورة (MED) إلى المسجد النبوي بسيارة خاصة؟',
            answer: 'يمكنكم حجز توصيل خاص من مطار المدينة المنورة (MED) مسبقاً. يبعد المطار ٢٠ كم عن وسط المدينة وتستغرق الرحلة من ٢٠ إلى ٣٠ دقيقة. سيقابلكم سائقنا عند مخرج صالة الوصول الدولي حاملاً لوحة تحمل اسمكم. السيارة خاصة ومكيفة. يتم الحجز عبر واتساب قبل وصولكم.',
        },
        {
            question: 'هل يوجد سائق خاص لجولات الزيارة في المدينة المنورة؟',
            answer: "نعم. تشمل باقات جولة الزيارة ليوم كامل في المدينة المنورة: المسجد النبوي، مسجد قباء (أول مسجد في الإسلام)، مسجد القبلتين، جبل أحد وموقع غزوة أحد، مقبرة البقيع، مسجد الغمامة، وأسواق التمور الشهيرة في المدينة المنورة. ينتظر السائق في كل موقع. متوفر بالعربية والإنجليزية والأردية.",
        },
        {
            question: 'ما هي أفضل طريقة للسفر من المدينة المنورة إلى مكة المكرمة بشكل خاص؟',
            answer: 'الخيار الأكثر راحة للعائلات هو سيارة جمس يوكن أو تويوتا هايس خاصة مع سائق. تبلغ المسافة من المدينة المنورة إلى مكة المكرمة حوالي ٤٢٠ كم وتستغرق ٤.٥ ساعة بالطريق البري. سعر ثابت مع إمكانية محطات استراحة اختيارية. مثالي للعائلات التي بها كبار سن أو أطفال أو أمتعة ثقيلة ويفضلون خدمة من الباب إلى الباب بدلاً من قطار الحرمين.',
        },
        {
            question: 'هل يتوفر نقل في المدينة المنورة لصلاة الفجر في الصباح الباكر؟',
            answer: 'نعم. النقل في المدينة المنورة متوفر على مدار الساعة، بما في ذلك أوقات صلاة الفجر (٤-٥ صباحاً) والتهجد (٢-٣ صباحاً). لا توجد زيادة في الأسعار لحجوزات الصباح الباكر. يُنصح بالحجز المسبق للنقل المنتظم لصلاة الفجر خلال إقامتكم.',
        },
        {
            question: 'هل توفرون نقلاً خاصاً من فندق المدينة المنورة إلى المسجد النبوي؟',
            answer: 'نعم. تتوفر خدمة التوصيل من الفندق إلى الحرم النبوي من جميع فنادق المدينة المنورة إلى المسجد النبوي. ينتظر السائق أثناء صلاتكم ويعيدكم إلى الفندق. هذه الخدمة مفيدة بشكل خاص لكبار السن من الحجاج أو العائلات التي لديها أطفال صغار لا يستطيعون المشي لمسافات طويلة. متوفرة في جميع أوقات الصلاة على مدار الساعة.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'نقل عائلي فاخر وسائق خاص في المدينة المنورة',
        serviceType: 'نقل خاص في المدينة المنورة',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'المدينة المنورة' },
            { '@type': 'AdministrativeArea', name: 'منطقة المدينة المنورة' },
        ],
        description: 'نقل فاخر وعائلي خاص في المدينة المنورة. من الفندق إلى المسجد النبوي، جولات الزيارة، توصيل المطار، ومن المدينة إلى مكة. جميع السائقين مسلمون، على مدار الساعة.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="madinah-transport-schema-ar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">نقل المدينة المنورة</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نقل عائلي فاخر<br /><span className="text-white/80">في المدينة المنورة</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        توصيل خاص من الفندق، جولات زيارة المعالم، استقبال من المطار، ونقل بين المدينة المنورة ومكة المكرمة. سيارات عائلية مريحة مع سائقين مسلمين، متوفرة في جميع أوقات الصلاة.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">حقائق سريعة — نقل المدينة المنورة <MapPin className="w-4 h-4 text-emerald-400" /></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">السائقون:</strong> جميعهم مسلمون — دخول كامل لكل أنحاء المدينة المنورة</li>
                            <li><strong className="text-white">من مطار المدينة إلى المدينة:</strong> ٢٠ كم، حوالي ٢٠-٣٠ دقيقة</li>
                            <li><strong className="text-white">من المدينة إلى مكة:</strong> ٤٢٠ كم، حوالي ٤.٥ ساعة</li>
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة شاملاً كل أوقات الصلاة</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20في%20المدينة%20المنورة" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز نقل المدينة المنورة <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
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
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات النقل في المدينة المنورة</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><s.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أهم الطرق من المدينة المنورة</h2></div>
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
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار خدمة النقل لدينا في المدينة المنورة</h2></div>
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
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">دليل مدينة المدينة المنورة</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">نقل مكة المكرمة</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">نقل جدة</Link></li>
                                <li><Link href="/routes/madinah-jeddah/" className="text-gray-600 hover:text-black">طريق المدينة المنورة ← جدة</Link></li>
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
                                <li><Link href="/services/makkah-city-transport/" className="text-gray-600 hover:text-black">نقل مكة المكرمة</Link></li>
                                <li><Link href="/services/madinah-ziyarat/" className="text-gray-600 hover:text-black">زيارة المدينة المنورة</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن نقل المدينة المنورة</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">احجز نقلاً خاصاً في المدينة المنورة</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">من الفندق إلى المسجد النبوي، جولات الزيارة، استقبال من المطار، أو من المدينة إلى مكة — سيارات عائلية خاصة مع سائقين مسلمين متوفرة على مدار الساعة.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20نقل%20في%20المدينة%20المنورة" target="_blank">
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
