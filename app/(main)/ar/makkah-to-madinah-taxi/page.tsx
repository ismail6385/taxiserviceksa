
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Car, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'تاكسي من مكة إلى المدينة | توصيل مباشر للفنادق',
    description: 'احجز تاكسي خاص من مكة إلى المدينة المنورة. سفر مباشر بدون توقف (إلا عند الطلب). رحلة 4.5 ساعة. سيارات جمس وسيدان مريحة.',
    keywords: ['تاكسي مكة المدينة', 'توصيل من مكة الى المدينة', 'سعر التاكسي مكة المدينة', 'حجز جمس مكة المدينة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/makkah-to-madinah-taxi/',
    },
};

export default function MakkahToMadinahPageAr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي من مكة إلى المدينة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        رحلة مباشرة
                    </span>
                }
                subtitle="توصيل من الفندق للفندق"
                location="طريق الهجرة السريع"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="تاكسي السعودية™"
                        description="بعد إتمام العمرة، سافر براحة لزيارة مسجد الرسول ﷺ. خدمتنا المباشرة تضمن لك انتقالاً سلساً بين الحرمين الشريفين."
                        foundingDate="2012"
                        metrics={[
                            { label: 'رحلة', value: '٤٥ ألف+', icon: Car },
                            { label: 'المدة', value: '٤.٥ ساعة', icon: Clock },
                            { label: 'الراحة', value: 'عالية', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">سافر براحة</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                المسافة بين مكة والمدينة حوالي ٤٥٠ كم. التاكسي الخاص يتيح لك الاسترخاء، النوم، أو قراءة القرآن بخصوصية تامة دون عناء جداول الحافلات أو التنقل لمحطات القطار.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>استقبال من الفندق:</strong> نأتي لفندقك في مكة.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>الطريق السريع:</strong> طريق الهجرة الحديث.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>توقف مرن:</strong> استرح متى ما شئت.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> زيارة بدر؟
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                يختار بعض الحجاج زيارة موقع **معركة بدر** وهو مسافة بسيطة عن الطريق الرئيسي.
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>نصيحة:</strong> إذا رغبت بزيارة بدر، يرجى ذكر ذلك عند الحجز لتخصيص وقت إضافي وتعديل السعر قليلاً.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "هل نحتاج للتوقف للميقات؟",
                                shortAnswer: "لا.",
                                detailedAnswer: "عند السفر من مكة *إلى* المدينة، لا يوجد ميقات لأنك تغادر منطقة الحرم. التوقف يكون للراحة أو الصلاة فقط.",
                                perspectives: [
                                    {
                                        role: "فقه",
                                        icon: "CheckCircle2",
                                        insight: "الرحلة مباشرة."
                                    }
                                ]
                            },
                            {
                                question: "هل القطار أسرع؟",
                                shortAnswer: "من محطة لمحطة، نعم.",
                                detailedAnswer: "القطار يستغرق ساعتين ونصف. لكن بإضافة زمن الوصول لمحطة مكة (٣٠ دقيقة) والانتظار (ساعة) والوصول لفندق المدينة (٣٠ دقيقة)، يصبح الوقت الإجمالي مقارباً للتاكسي (٤.٥ ساعات من الباب للباب).",
                                perspectives: [
                                    {
                                        role: "اللوجستيات",
                                        icon: "Clock",
                                        insight: "التاكسي أفضل لراحة البال وشنط السفر."
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
                        <ReviewsDisplay location="MakkahToMadinah" />
                        <QuestionsDisplay location="MakkahToMadinah" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahToMadinah" />
                        <QuestionForm locationName="MakkahToMadinah" />
                    </div>
                </div>
            </section>
        </div>
    );
}
