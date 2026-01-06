
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RoutePerspective from '@/components/seo/RoutePerspective';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

export const metadata: Metadata = {
    title: 'تاكسي من المدينة إلى مكة | رحلة خاصة مع ميقات',
    description: 'احجز تاكسي خاص من المدينة المنورة إلى مكة المكرمة. سيارات مريحة مع توقف في ميقات ذو الحليفة (أبيار علي) للإحرام. أسعار ثابتة وسائقين محترفين.',
    keywords: ['تاكسي المدينة مكة', 'توصيل من المدينة الى مكة', 'تاكسي الميقات', 'سعر التاكسي من المدينة لمكة'],
    alternates: {
        canonical: 'https://transferksa.com/ar/madinah-to-makkah-taxi/',
    },
};

export default function MadinahToMakkahPageAr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="تاكسي من المدينة إلى مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        طريق الهجرة
                    </span>
                }
                subtitle="رحلة خاصة مع توقف الميقات"
                location="رحلة ٤٥٠ كم"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="تاكسي السعودية™"
                        description="رحلة روحانية من مدينة الرسول ﷺ إلى الكعبة المشرفة. سائقونا يضمنون رحلة مريحة ومحترمة مع التوقف الضروري في الميقات للإحرام."
                        foundingDate="2012"
                        metrics={[
                            { label: 'رحلة', value: '٥٠ ألف+', icon: Car },
                            { label: 'الميقات', value: '١٠٠٪', icon: MapPin },
                            { label: 'الوقت', value: '٤.٥ ساعة', icon: Clock }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <RoutePerspective
                        route="المدينة إلى مكة"
                        perspectives={[
                            {
                                id: "pilgrim",
                                targetAudience: "المعتمر",
                                icon: User,
                                intent: "الاستعداد للعمرة",
                                description: "أهم جزء في هذه الرحلة هو التوقف في ميقات ذو الحليفة (أبيار علي). نتوقف هنا لمدة ٤٥-٦٠ دقيقة، مما يتيح لك وقتاً كافياً للاغتسال ولبس الإحرام وصلاة ركعتين قبل مواصلة التلبية إلى مكة.",
                                structuredFeatures: [
                                    { label: "توقف الميقات", value: "شامل" },
                                    { label: "المدة", value: "٤-٥ ساعات" },
                                    { label: "الراحة", value: "عالية" }
                                ],
                                visualContext: "السيارة تنتظر في مواقف مسجد الميقات."
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">لماذا تحجز تاكسي خاص؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">من الباب إلى الباب</h3>
                            <p className="text-gray-600">الاستقبال من بهو فندقك في المدينة والتوصيل مباشرة إلى فندقك في مكة. لا حاجة لنقل الأمتعة في محطات القطار.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <MapPin className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">راحة الميقات</h3>
                            <p className="text-gray-600">على عكس القطار (الذي يتطلب لبس الإحرام مسبقاً) أو الحافلات، التاكسي الخاص ينتظرك في الميقات بقدر ما تحتاج.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">خصوصية وأمان</h3>
                            <p className="text-gray-600">سافر مع عائلتك فقط. سيارات نظيفة ومعقمة وسائقون محترفون.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">آراء المسافرين</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="MadinahToMakkah" />
                        <QuestionsDisplay location="MadinahToMakkah" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MadinahToMakkah" />
                        <QuestionForm locationName="MadinahToMakkah" />
                    </div>
                </div>
            </section>
        </div>
    );
}
