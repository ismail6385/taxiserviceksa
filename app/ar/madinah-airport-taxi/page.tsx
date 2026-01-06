
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Plane, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'تاكسي مطار المدينة المنورة | توصيل للحرم النبوي',
    description: 'تاكسي موثوق من مطار المدينة المنورة (MED) إلى فنادق الحرم. استقبال 24/7. أسعار ثابتة تبدأ من 50 ريال. سائقون محترفون.',
    keywords: ['تاكسي مطار المدينة', 'توصيل مطار محمد بن عبدالعزيز', 'تاكسي من المطار للحرم', 'رقم تاكسي المدينة'],
    alternates: {
        canonical: 'https://transferksa.com/ar/madinah-airport-taxi/',
    },
};

export default function MadinahAirportTaxiPageAr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/madinah.webp', '/hero-slide-2.webp']}
                h1Text="تاكسي مطار المدينة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        وصول المدينة
                    </span>
                }
                subtitle="توصيل سريع للحرم النبوي"
                location="٢٠ دقيقة قيادة"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="تاكسي المدينة™"
                        description="نرحب بك في طيبة الطيبة. سائقونا يضمنون لك انتقالاً سلساً وسريعاً من مطار الأمير محمد بن عبدالعزيز الدولي (MED) إلى فندقك."
                        foundingDate="2012"
                        metrics={[
                            { label: 'استقبال مطار', value: '٣٠ ألف+', icon: Plane },
                            { label: 'إلى الحرم', value: '٢٥ دقيقة', icon: Clock },
                            { label: 'الرضا', value: '٥.٠', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900">
                                <Plane className="w-6 h-6 text-emerald-600" /> لماذا تحجز معنا؟
                            </h3>
                            <ul className="space-y-4 text-emerald-800">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>مراقبة الرحلات:</strong> نتابع وقت هبوط طائرتك.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>الاستقبال:</strong> السائق ينتظر عند المخرج.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>أسعار قياسية:</strong> لا داعي للمساومة.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">الرحلة إلى الحرم</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                يبعد مطار الأمير محمد بن عبدالعزيز الدولي (MED) حوالي ١٥-٢٠ كم فقط عن المنطقة المركزية. هو من أكثر المطارات راحة للحجاج لقربه من وسط المدينة.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                سائقونا يعرفون جميع الفنادق في المنطقة المركزية ويمكنهم التعامل مع قيود المرور بكفاءة لإيصالك لباب الفندق بسرعة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "كم سعر التاكسي من مطار المدينة للحرم؟",
                                shortAnswer: "تقريباً ٨٠-١٢٠ ريال.",
                                detailedAnswer: "بينما تتوفر سيارات الأجرة العادية، يضمن لك الحجز الخاص سيارة فخمة (كامري/فورد) بسعر يتراوح بين ١٠٠-١٥٠ ريال حسب الموسم، مع صفر وقت انتظار.",
                                perspectives: [
                                    {
                                        role: "القيمة",
                                        icon: "CheckCircle2",
                                        insight: "راحة البال عند الوصول تستحق الفارق البسيط في السعر."
                                    }
                                ]
                            },
                            {
                                question: "هل يمكنني حجز فان لعائلتي؟",
                                shortAnswer: "نعم، جمس وهيونداي متوفرة.",
                                detailedAnswer: "نوفر سيارات جمس ٧ ركاب وباصات H1 ١٠ ركاب للعائلات الكبيرة مع الحقائب. يرجى الحجز مسبقاً لضمان توفر السيارات الكبيرة.",
                                perspectives: [
                                    {
                                        role: "العائلة",
                                        icon: "User",
                                        insight: "ضروري إذا كان لديكم أكثر من حقيبتين كبيرتين."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <ReviewsDisplay location="MadinahAirport" />
                        <QuestionsDisplay location="MadinahAirport" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MadinahAirport" />
                        <QuestionForm locationName="MadinahAirport" />
                    </div>
                </div>
            </section>
        </div>
    );
}
