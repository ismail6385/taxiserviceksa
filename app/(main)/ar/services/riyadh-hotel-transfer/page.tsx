import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Star, Clock, Shield, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'خدمة توصيل فنادق الرياض | استقبال من المطار وفنادق المدينة | Taxi Service KSA',
    description: 'خدمة استقبال وتوصيل خاصة للفنادق في الرياض. من المطار إلى الفندق، ومن فندق إلى فندق، ومن الفندق إلى الحي التجاري. سيارات فاخرة، استقبال شخصي، وخدمة على مدار الساعة. احجز توصيل فندقك في الرياض الآن.',
    keywords: [
        'خدمة استقبال فنادق الرياض',
        'توصيل فاخر من الفندق للمطار الرياض',
        'من المطار إلى الفندق الرياض',
        'توصيل الفنادق الرياض',
        'توصيل فندق فور سيزونز الرياض',
        'توصيل فندق ريتز كارلتون الرياض',
        'سائق فنادق الرياض',
        'نقل خاص للفنادق الرياض',
        'استقبال فندقي فاخر الرياض',
        'توصيل من الفندق إلى KAFD الرياض',
        'سائق من الباب إلى الباب الرياض',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/riyadh-hotel-transfer/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/riyadh-hotel-transfer/',
            'ar': 'https://taxiserviceksa.com/ar/services/riyadh-hotel-transfer/',
            'x-default': 'https://taxiserviceksa.com/services/riyadh-hotel-transfer/',
        },
    },
    openGraph: {
        title: 'خدمة توصيل فنادق الرياض | استقبال من المطار والمدينة | Taxi Service KSA',
        description: 'استقبال وتوصيل خاص للفنادق في الرياض. من المطار إلى الفندق، ومن الفندق إلى الحي التجاري، وتوصيل فاخر بين الفنادق. استقبال شخصي على مدار الساعة.',
        url: 'https://taxiserviceksa.com/ar/services/riyadh-hotel-transfer/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function RiyadhHotelTransferPageArabic() {
    const hotels = [
        { name: 'فندق فور سيزونز الرياض', area: 'مركز المملكة، العليا', routes: ['مطار الرياض (RUH)', 'حي الملك عبدالله المالي', 'الحي الدبلوماسي'] },
        { name: 'فندق ريتز كارلتون الرياض', area: 'حي الحدا', routes: ['مطار الرياض (RUH)', 'مكاتب طريق الملك فهد', 'العليا'] },
        { name: 'فندق روزوود الرياض', area: 'حي الملك عبدالله المالي', routes: ['مطار الرياض (RUH)', 'الحي التجاري', 'الدرعية التاريخية'] },
        { name: 'فندق ماندارين أورينتال الرياض', area: 'حي الملك عبدالله المالي', routes: ['مطار الرياض (RUH)', 'حي الملك عبدالله المالي (KAFD)', 'حي السفارات'] },
        { name: 'فندق هيلتون الرياض', area: 'شارع العليا', routes: ['مطار الرياض (RUH)', 'مناطق التسوق', 'مراكز المؤتمرات'] },
        { name: 'فندق ماريوت الرياض', area: 'المروج', routes: ['مطار الرياض (RUH)', 'الأحياء التجارية', 'الحي الدبلوماسي'] },
    ];

    const transferTypes = [
        { title: 'من مطار الرياض (RUH) إلى الفندق', desc: 'استقبال شخصي في مطار الملك خالد الدولي (RUH). توصيل خاص إلى أي فندق في الرياض مع لوحة تحمل اسمك، وتتبع للرحلة، وانتظار مجاني لمدة ٩٠ دقيقة.', icon: MapPin },
        { title: 'من الفندق إلى مطار الرياض (RUH)', desc: 'توصيل للمغادرة من أي فندق في الرياض إلى مطار RUH. يصل السائق قبل ٣ ساعات من الرحلات الدولية، وقبل ساعتين من الرحلات الداخلية.', icon: Clock },
        { title: 'من الفندق إلى الحي التجاري', desc: 'توصيل من الباب إلى الباب من أهم فنادق الرياض إلى حي الملك عبدالله المالي، وطريق الملك فهد، وشارع العليا، وجميع مناطق الأعمال. في الموعد وباحترافية.', icon: Shield },
        { title: 'توصيل من فندق إلى فندق', desc: 'سيارة خاصة بين فنادق الرياض لنقل الضيوف أو الوفود. متوفرة لرحلة واحدة أو عقود توصيل لعدة أيام.', icon: Car },
        { title: 'جولات المدينة من الفندق', desc: 'سائق خاص ينطلق من فندقك لجولة سياحية في الرياض — الدرعية، والمتحف الوطني، وحافة العالم، ومواقع موسم الرياض.', icon: Star },
        { title: 'استقبال فندقي في وقت متأخر من الليل', desc: 'استقبال فندقي موثوق للرحلات المتأخرة ليلاً، والفعاليات، والمغادرات في الصباح الباكر. بدون تسعير مرتفع في أي وقت.', icon: Users },
    ];

    const features = [
        'تتبع الرحلات لجميع عمليات الاستقبال من المطار',
        'لوحة تحمل اسمك عند صالة وصول مطار RUH',
        'انتظار مجاني لمدة ٩٠ دقيقة (الرحلات الدولية)',
        'سائقون مرخصون من وزارة النقل',
        'يتحدثون الإنجليزية والعربية',
        'أسطول جمس يوكن وكامري وستاريا',
        'أسعار ثابتة — بدون تسعير مرتفع',
        'على مدار الساعة بما في ذلك الليل والصباح الباكر',
        'مساعدة في حمل الأمتعة ضمن الخدمة',
        'مقاعد أطفال متوفرة عند الطلب',
    ];

    const faqs = [
        {
            question: 'هل توجد خدمة استقبال من الفنادق في الرياض؟',
            answer: 'نعم. توفر Taxi Service KSA خدمة استقبال وتوصيل خاصة لجميع الفنادق الكبرى في الرياض. تشمل الخدمات: من المطار إلى الفندق، ومن الفندق إلى المطار، ومن الفندق إلى الحي التجاري، وجولات سياحية تنطلق من الفندق. جميع السيارات خاصة — بدون مشاركة الرحلة. يتم الحجز عبر واتساب قبل ٢٤–٤٨ ساعة.',
        },
        {
            question: 'ما أفضل طريقة للوصول من مطار الرياض (RUH) إلى فندقي؟',
            answer: 'الحجز المسبق لتوصيل خاص هو الخيار الأكثر موثوقية. يستقبلك سائقنا في صالة الوصول بلوحة تحمل اسمك بعد هبوط رحلتك. بفضل تتبع الرحلة، يتكيف السائق مع أي تأخير. وقت الانتظار المجاني ٩٠ دقيقة للرحلات الدولية و٦٠ دقيقة للرحلات الداخلية. تتوفر سيارات من تويوتا كامري (فردي/ثنائي) إلى جمس يوكن إكس إل (عائلات/مجموعات).',
        },
        {
            question: 'هل توفرون توصيلاً لفنادق فور سيزونز وريتز كارلتون وروزوود الرياض؟',
            answer: 'نعم. نخدم بانتظام ضيوف أهم فنادق الخمس نجوم في الرياض، بما في ذلك فور سيزونز مركز المملكة، وريتز كارلتون الرياض، وروزوود KAFD، وماندارين أورينتال، وهيلتون الرياض، وماريوت. يمكن تنسيق الحجز مباشرة أو عبر فريق خدمة الضيافة في الفندق.',
        },
        {
            question: 'هل يوجد توصيل فاخر من الفندق إلى المطار في الرياض؟',
            answer: 'نعم. يتوفر توصيل فاخر من الفندق إلى مطار RUH بسيارة جمس يوكن إكس إل أو كاديلاك إسكاليد لضيوف VIP. يصل السائق إلى فندقك في الوقت المطلوب، ويساعد في حمل الأمتعة، ويقدم خدمة من الباب حتى صالة المطار. أسعار ثابتة بدون تسعير مرتفع.',
        },
        {
            question: 'هل يمكنني حجز توصيل فندقي في وقت متأخر من الليل في الرياض؟',
            answer: 'نعم. تتوفر خدمة التوصيل الفندقي في وقت متأخر من الليل أو الصباح الباكر على مدار الساعة في الرياض. من أكثر الاحتياجات شيوعاً: العودة بعد الفعاليات، والمغادرة لرحلات ليلية، وتوصيلات مطار RUH في الساعات الأولى من الصباح (٢–٥ صباحاً). بدون أي رسوم إضافية للساعات غير المعتادة.',
        },
        {
            question: 'هل يوجد نقل فندقي إلى حي الملك عبدالله المالي (KAFD) في الرياض؟',
            answer: 'نعم. يتوفر توصيل من الفندق إلى حي الملك عبدالله المالي (KAFD) من جميع فنادق الرياض الكبرى. هذه الخدمة شائعة لدى رجال الأعمال المقيمين في فنادق طريق الملك فهد والعليا ولديهم اجتماعات في KAFD. تتوفر باقات يومية ومتعددة الرحلات.',
        },
        {
            question: 'ما السيارات المتوفرة لتوصيل الفنادق في الرياض؟',
            answer: 'تشمل الخيارات تويوتا كامري (١–٣ ركاب، سفر تنفيذي)، وجمس يوكن إكس إل (٤–٧ ركاب، عائلات ومجموعات)، وهيونداي ستاريا VIP (عائلات VIP)، وكاديلاك إسكاليد (فخامة فائقة). جميع السيارات حديثة الموديل، مكيفة، وتشمل سائقاً محترفاً.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمة توصيل فنادق الرياض',
        serviceType: 'استقبال وتوصيل الفنادق — الرياض',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [{ '@type': 'City', name: 'الرياض' }],
        description: 'خدمة استقبال وتوصيل خاصة للفنادق في الرياض. من المطار إلى الفندق، ومن الفندق إلى المطار، ومن الفندق إلى الحي التجاري. استقبال شخصي، أسطول فاخر، على مدار الساعة.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script id="riyadh-hotel-schema-ar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">توصيل فنادق الرياض</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        خدمة توصيل الفنادق<br /><span className="text-white/80">في الرياض</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        توصيل خاص من المطار إلى الفندق، ومن الفندق إلى الحي التجاري، وخدمة استقبال فندقي فاخرة في جميع أنحاء الرياض. استقبال شخصي، وتتبع للرحلة، وأسعار ثابتة — متوفرة على مدار الساعة.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-right mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2 justify-end">حقائق سريعة — توصيل الفنادق <MapPin className="w-4 h-4 text-emerald-400" /></p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">المطار:</strong> RUH (الملك خالد الدولي)</li>
                            <li><strong className="text-white">وقت الانتظار:</strong> ٩٠ دقيقة دولي، ٦٠ دقيقة داخلي</li>
                            <li><strong className="text-white">التوفر:</strong> على مدار الساعة حتى وقت متأخر</li>
                            <li><strong className="text-white">الأسطول:</strong> كامري، جمس يوكن، إسكاليد، ستاريا</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20توصيل%20فندقي%20في%20الرياض" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                احجز توصيل الفندق <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">راسلنا لطلب عرض سعر</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات التوصيل</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transferTypes.map((t, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><t.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الفنادق التي نخدمها في الرياض</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{h.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{h.area}</p>
                                <div className="space-y-1">
                                    {h.routes.map((r, j) => (
                                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />{r}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-500">لم تجد فندقك؟ نغطي <strong>جميع الفنادق</strong> في الرياض. <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20توصيل%20فندقي%20في%20الرياض" className="text-black font-bold hover:underline">تواصل معنا ←</Link></p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ما تشمله الخدمة</h2></div>
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> الأسطول</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black">تويوتا كامري (فردي/ثنائي)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">جمس يوكن (للعائلات)</Link></li>
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black">كاديلاك إسكاليد (VIP)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">جميع السيارات ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> وجهات الرياض</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">تنقلات مدينة الرياض</Link></li>
                                <li><Link href="/locations/riyadh/diplomatic-quarter/" className="text-gray-600 hover:text-black">الحي الدبلوماسي</Link></li>
                                <li><Link href="/routes/" className="text-gray-600 hover:text-black">جميع طرق الرياض</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-black font-bold hover:underline">توصيل المطار ←</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> خدمات ذات صلة</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black">سائق VIP فاخر</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">سائق خاص (بالساعة)</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black">نقل الشركات</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">النقل السياحي</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-4">الأسئلة الشائعة</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أسئلة عن توصيل فنادق الرياض</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">احجز توصيل فندقك في الرياض</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">وصول من المطار، أو توصيل للحي التجاري، أو جولات المدينة، أو عودة في وقت متأخر — سيارات خاصة مع سائقين محترفين متوفرة على مدار الساعة في جميع أنحاء الرياض.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=مرحباً،%20أحتاج%20توصيل%20فندقي%20في%20الرياض" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">حجز عبر واتساب</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">راسلنا لطلب عرض سعر</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
