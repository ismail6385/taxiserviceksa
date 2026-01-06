
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Train, Clock, MapPin, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'تاكسي محطة قطار مكة | توصيل من محطة الحرمين للفندق',
    description: 'خدمة تاكسي من محطة قطار الحرمين بمكة (الرصيفة) إلى فنادق الحرم. جسر الفجوة بين المحطة وفندقك بكل يسر. أسعار ثابتة.',
    keywords: ['تاكسي محطة مكة', 'توصيل محطة القطار مكة', 'تاكسي الرصيفة', 'توصيل من المحطة للحرم'],
    alternates: {
        canonical: 'https://transferksa.com/ar/makkah-train-station-taxi/',
    },
};

export default function MakkahTrainStationPageAr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي محطة قطار مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        توصيل المحطة
                    </span>
                }
                subtitle="المحطة الأخيرة في رحلتك"
                location="محطة الرصيفة"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="تاكسي المحطة™"
                        description="نربط بين محطة قطار الحرمين السريع وباب فندقك. تجنب فوضى البحث عن تاكسي عند مخرج المحطة."
                        foundingDate="2012"
                        metrics={[
                            { label: 'استقبال المحطة', value: '٢٠ ألف+', icon: Train },
                            { label: 'إلى الحرم', value: '١٥ دقيقة', icon: Clock },
                            { label: 'الموثوقية', value: '١٠٠٪', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">لماذا الحجز المسبق من المحطة؟</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                تقع محطة مكة في الرصيفة، وتبعد حوالي ١٠-١٥ دقيقة بالسيارة عن الحرم. عند وصول القطار، يتدفق مئات الركاب إلى مواقف التاكسي مما يسبب طوابير طويلة وارتفاع في الأسعار.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>تجاوز الطابور:</strong> السائق بانتظارك.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>سعر ثابت:</strong> لا داعي للمفاوضة.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>مساعدة بالأمتعة:</strong> السائق يساعدك في الحقائب.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> موقع المحطة
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                <strong>الاسم:</strong> محطة قطار الحرمين السريع بمكة<br />
                                <strong>الحي:</strong> الرصيفة<br />
                                <strong>المسافة لبوابة الملك عبدالعزيز:</strong> ~٦ كم
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>ملاحظة:</strong> توجد حافلات ترددية لكنها تنزلك في محطات الباص (تتطلب مشي). التاكسي الخاص يوصلك لباب الفندق.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <ReviewsDisplay location="MakkahStation" />
                        <QuestionsDisplay location="MakkahStation" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahStation" />
                        <QuestionForm locationName="MakkahStation" />
                    </div>
                </div>
            </section>
        </div>
    );
}
