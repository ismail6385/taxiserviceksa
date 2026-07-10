import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2, Star, Shield, Anchor } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'تاكسي ميناء جدة الإسلامي | توصيل ركاب السفن السياحية | Taxi Service KSA',
    description: 'تاكسي خاص من ميناء جدة الإسلامي. توصيل مميز لركاب السفن السياحية إلى مكة المكرمة (للعمرة)، مطار جدة، وفنادق جدة. أسعار ثابتة، احجز عبر واتساب.',
    keywords: [
        'تاكسي ميناء جدة',
        'توصيل ميناء جدة الإسلامي',
        'تاكسي ميناء السفن السياحية جدة',
        'توصيل ركاب السفن إلى مكة',
        'سيارة خاصة من ميناء جدة إلى مكة',
        'تاكسي من ميناء جدة إلى المطار',
        'خدمة سائق خاص ميناء جدة',
        'من ميناء جدة إلى فندق فيرمونت مكة',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/jeddah-port-taxi-transfer/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/jeddah-port-taxi-transfer/',
            'ar': 'https://taxiserviceksa.com/ar/services/jeddah-port-taxi-transfer/',
            'x-default': 'https://taxiserviceksa.com/services/jeddah-port-taxi-transfer/',
        },
    },
    openGraph: {
        title: 'تاكسي ميناء جدة الإسلامي | توصيل ركاب السفن السياحية',
        description: 'تاكسي خاص من ميناء جدة الإسلامي إلى مكة المكرمة، مطار جدة، وفنادق جدة. أسعار ثابتة، احجز عبر واتساب.',
        url: 'https://taxiserviceksa.com/ar/services/jeddah-port-taxi-transfer/',
        locale: 'ar_SA',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'كيف أحجز تاكسي من ميناء جدة الإسلامي؟',
        answer: 'يمكنكم حجز سيارة خاصة مسبقاً عبر واتساب على الرقم ٩٦٦٥٦٩٤٨٧٥٦٩+ أو من خلال نموذج الحجز الإلكتروني لدينا. يُرجى تزويدنا بموعد وصول السفينة واسمها. سيكون سائقكم بانتظاركم خارج بوابة محطة السفن حاملاً لوحة تحمل اسمكم.',
    },
    {
        question: 'هل يمكن لركاب السفن السياحية التوجه من ميناء جدة إلى مكة المكرمة لأداء العمرة؟',
        answer: 'نعم. نحن متخصصون في رحلات اليوم الواحد لركاب السفن الراغبين في أداء العمرة. سائقونا المسلمون المعتمدون سيأخذونكم مباشرة إلى مكة المكرمة (٨٥ كم، حوالي ساعة واحدة)، وينتظرون حتى تنتهوا من العمرة، ثم يعيدونكم إلى السفينة قبل موعد إبحارها.',
    },
    {
        question: 'ما هو سعر التاكسي من ميناء جدة إلى مكة المكرمة؟',
        answer: 'يبدأ سعر التوصيل الخاص بسيارة تويوتا كامري من ٣٠٠ ريال. أما سيارة جمس يوكن إكس إل للمجموعات العائلية فتبدأ من ٦٠٠ ريال. تتوفر باقات ذهاب وعودة (تشمل وقت الانتظار لأداء العمرة). جميع الأسعار ثابتة ومتفق عليها مسبقاً.',
    },
    {
        question: 'ما هي المسافة بين ميناء جدة الإسلامي والمطار؟',
        answer: 'يبعد ميناء جدة الإسلامي حوالي ٢٥ كم عن مطار الملك عبدالعزيز الدولي (JED). تستغرق الرحلة بالسيارة من ٣٠ إلى ٤٠ دقيقة حسب حركة المرور. نوفر توصيلاً مباشراً إلى المطار.',
    },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'خدمة سائق وتاكسي ميناء جدة للسفن السياحية',
    serviceType: 'سائق الميناء والتاكسي الخاص',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: '+966569487569' },
    areaServed: { '@type': 'City', name: 'جدة' },
    description: 'توصيل خاص بالتاكسي من محطة السفن السياحية بميناء جدة الإسلامي إلى مكة المكرمة، مطار جدة، وفنادق المدينة.',
    offers: { '@type': 'Offer', priceCurrency: 'SAR', price: '180', availability: 'https://schema.org/InStock' },
};

export default function JeddahPortTaxiTransferPageArabic() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">الرئيسية</Link>
                        <span>/</span>
                        <span>توصيل ميناء جدة</span>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-blue-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500">🚢 استقبال من محطة السفن السياحية</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">متوفر ٢٤/٧</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        ميناء جدة الإسلامي<br />
                        <span className="text-blue-300">تاكسي وسائق خاص</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        توصيل خاص محجوز مسبقاً من محطة السفن السياحية بميناء جدة الإسلامي. رحلات مباشرة إلى الحرم المكي، مطار الملك عبدالعزيز الدولي (جدة)، وفنادق جدة. سائقون محترفون، وأسعار ثابتة.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=مرحباً،%20أحتاج%20تاكسي%20من%20ميناء%20جدة%20الإسلامي" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> احجز عبر واتساب
                        </a>
                        <Link href="/booking/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            اطلب عرض سعر <ArrowRight className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

                {/* Popular Routes */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">أشهر رحلات توصيل الميناء</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { to: 'الحرم المكي', price: 'من ٣٠٠ ريال', note: 'توصيل مباشر للمعتمرين. رحلة ساعة واحدة بالسيارة.' },
                            { to: 'مطار جدة (JED)', price: 'من ١٢٠ ريال', note: 'توصيل لربط الرحلات في مطار الملك عبدالعزيز. ٣٥ دقيقة.' },
                            { to: 'فنادق مدينة جدة', price: 'من ١٠٠ ريال', note: 'توصيل لفنادق الكورنيش ووسط المدينة. ٢٠ دقيقة.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-300 transition-all">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                    <Anchor className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{r.to}</h3>
                                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{r.note}</p>
                                <p className="font-black text-blue-700">{r.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-blue-50 border border-blue-100 rounded-3xl p-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">استقبال سلس لركاب السفن السياحية</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            'السائق يستقبلكم خارج بوابة محطة السفن',
                            'لوحة تحمل اسمكم لسهولة التعرف',
                            'سائقون مسلمون معتمدون للدخول إلى حدود الحرم المكي',
                            'جمس يوكن إكس إل وخيارات فاخرة للعائلات والأمتعة',
                            'أسعار ثابتة تشمل جميع رسوم بوابة المحطة',
                            'تنسيق مع العملاء على مدار الساعة عبر واتساب',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">الأسئلة الشائعة</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
