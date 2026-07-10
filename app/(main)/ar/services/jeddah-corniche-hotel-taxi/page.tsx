import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Star, Hotel } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'تاكسي فنادق كورنيش جدة | نقل فاخر بسائق خاص | Taxi Service KSA',
    description: 'خدمة تاكسي خاصة لفنادق كورنيش جدة. خدمة شوفير فاخرة لفنادق ريتز كارلتون وشانغريلا وهيلتون ووالدورف أستوريا وروزوود. أسعار ثابتة على مدار الساعة.',
    keywords: [
        'تاكسي كورنيش جدة',
        'توصيل فنادق كورنيش جدة',
        'تاكسي والدورف أستوريا جدة',
        'شوفير ريتز كارلتون جدة',
        'سيارة خاصة شانغريلا جدة',
        'خدمة تاكسي روزوود جدة',
        'تاكسي من فندق جدة إلى المطار',
        'توصيل من فندق جدة إلى مكة',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/jeddah-corniche-hotel-taxi/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/jeddah-corniche-hotel-taxi/',
            'ar': 'https://taxiserviceksa.com/ar/services/jeddah-corniche-hotel-taxi/',
            'x-default': 'https://taxiserviceksa.com/services/jeddah-corniche-hotel-taxi/',
        },
    },
    openGraph: {
        title: 'تاكسي فنادق كورنيش جدة | نقل فاخر بسائق خاص | Taxi Service KSA',
        description: 'نقل فندقي خاص بشوفير مباشرة من ردهة فندقكم على كورنيش جدة. تنقل سلس إلى مطار جدة والحرم المكي ومراكز الأعمال.',
        url: 'https://taxiserviceksa.com/ar/services/jeddah-corniche-hotel-taxi/',
        locale: 'ar_SA',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'ما هي الفنادق التي تخدمونها على كورنيش جدة؟',
        answer: 'نوفر خدمة استقبال وتوصيل مميزة لجميع فنادق الكورنيش، بما في ذلك فندق ريتز كارلتون جدة، وشانغريلا جدة، وهيلتون جدة، ووالدورف أستوريا جدة - قصر الشرق، وروزوود جدة.',
    },
    {
        question: 'هل يمكنني حجز نقل خاص من فندق على كورنيش جدة إلى مكة؟',
        answer: 'نعم. نوفر نقلاً مباشراً من الفندق إلى الفندق من الكورنيش مباشرة إلى فنادق مكة القريبة من الحرم (حوالي ٩٠ كم، رحلة ساعة وربع). تتوفر مركبات عادية وفاخرة عائلية (جمس يوكن إكس إل).',
    },
    {
        question: 'كم سعر توصيل المطار إلى فندق على الكورنيش؟',
        answer: 'تبدأ أسعار التوصيل الثابتة من مطار الملك عبدالعزيز الدولي (JED) إلى فنادق كورنيش جدة من ٨٠ إلى ١٢٠ ريالاً سعودياً حسب فئة السيارة. جميع الأسعار متفق عليها قبل السفر بدون رسوم إضافية لتأخير الرحلات.',
    },
    {
        question: 'هل تقدمون تأجير شوفير ليوم كامل من فنادق الكورنيش؟',
        answer: 'نعم. يمكنكم استئجار سائق محترف مع سيارة من اختياركم ليوم كامل (٨-١٠ ساعات) بدءاً من ردهة الفندق. مثالية لجولات التسوق والاجتماعات وجولات المدينة السياحية.',
    },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'شوفير وتاكسي فنادق كورنيش جدة',
    serviceType: 'شوفير فندقي وتاكسي خاص',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966569487569' },
    areaServed: { '@type': 'City', name: 'جدة' },
    description: 'خدمة تاكسي وشوفير فاخرة لفنادق كورنيش جدة لضيوف الفنادق المميزة.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '80', availability: 'https://schema.org/InStock' },
};

export default function JeddahCornicheHotelTaxiPageArabic() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-black via-zinc-950 to-emerald-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span>/</span>
                        <span>تاكسي فنادق كورنيش جدة</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">⭐ نقل فندقي فاخر</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">استقبال من الردهة</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        تاكسي فنادق<br />
                        <span className="text-emerald-300">كورنيش جدة</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        نقل فندقي خاص بشوفير مباشرة من ردهة فندقكم على كورنيش جدة. تنقل سلس إلى مطار جدة، والحرم المكي، ومراكز الأعمال الرئيسية.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=مرحباً،%20أحتاج%20نقلاً%20من%20فندقي%20على%20كورنيش%20جدة" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> حجز عبر واتساب
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-zinc-950 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            احجز أونلاين <ArrowRight className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Hotels We Serve */}
                <section>
                    <h2 className="text-3xl font-black text-zinc-900 mb-8">الفنادق الفاخرة التي نخدمها</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'فندق ريتز كارلتون جدة', location: 'كورنيش الحمراء' },
                            { name: 'شانغريلا جدة', location: 'كورنيش الشاطئ' },
                            { name: 'والدورف أستوريا قصر الشرق', location: 'الكورنيش الشمالي' },
                            { name: 'روزوود جدة', location: 'طريق الكورنيش الشمالي' },
                            { name: 'هيلتون جدة', location: 'الكورنيش الشمالي' },
                            { name: 'إنتركونتيننتال جدة', location: 'حي الحمراء' },
                        ].map((h, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-300 transition-all flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Hotel className="w-6 h-6 text-emerald-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-900 text-base leading-tight mb-1">{h.name}</h3>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">{h.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="bg-emerald-950 text-white rounded-3xl p-10">
                    <h2 className="text-3xl font-black mb-8 text-center">خدمات الشوفير الفندقي</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: 'توصيل المطار', desc: 'استقبال مباشر من صالة مطار جدة إلى ردهة فندقكم. متابعة الرحلات على مدار الساعة.' },
                            { title: 'رحلات بين المدن', desc: 'نقل فاخر مباشر إلى برج الساعة بمكة، أو المدينة المنورة، أو مراكز الأعمال في الرياض.' },
                            { title: 'تأجير خاص بالساعة', desc: 'استأجر سيدان أو SUV فاخرة مع سائق لاجتماعات العمل أو تسوق العائلة.' },
                            { title: 'أسطول فاخر متميز', desc: 'كاديلاك إسكاليد، ومرسيدس الفئة S، وجمس يوكن إكس إل، وجينيسيس G80 متوفرة.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-emerald-300 mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-zinc-900 mb-8">الأسئلة الشائعة</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-zinc-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
