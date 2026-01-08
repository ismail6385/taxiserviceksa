
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
    title: 'تاكسي مطار جدة إلى مكة | توصيل خاص للمعتمرين',
    description: 'خدمة تاكسي رسمية من مطار جدة (JED) إلى فنادق مكة. استقبال 24/7 في الوصول. أسعار ثابتة لرحلات العمرة الخاصة. رحلة ساعة واحدة.',
    keywords: ['تاكسي مطار جدة مكة', 'توصيل من المطار للحرم', 'سعر تاكسي جدة مكة', 'استقبال مطار جدة'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/jeddah-airport-to-makkah-taxi/',
    },
};

export default function JeddahAirportToMakkahPageAr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/jeddah-airport.webp', '/hero-slide-1.webp']}
                h1Text="تاكسي مطار جدة إلى مكة"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        توصيل الوصول
                    </span>
                }
                subtitle="ابدأ عمرتك بيسر وسهولة"
                location="جدة -> مكة (٨٠ كم)"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="تاكسي المطار™"
                        description="الخيار الأول الموثوق للمعتمرين القادمين عبر مطار الملك عبدالعزيز الدولي. نتابع رحلتك وننتظرك، لنضمن لك وصولاً سلساً إلى البلد الأمين."
                        foundingDate="2012"
                        metrics={[
                            { label: 'استقبال مطار', value: '١٠٠ ألف+', icon: Plane },
                            { label: 'دقة المواعيد', value: '٩٩.٩٪', icon: Clock },
                            { label: 'زمن الرحلة', value: '٦٠ دقيقة', icon: MapPin }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">نقل سلس من المطار</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">تتبع الرحلات</h3>
                            <p className="text-gray-600">نراقب حالة رحلتك. إذا تأخرت الطائرة، نقوم بتعديل موعد الاستقبال تلقائياً. لا داعي للقلق.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <User className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">خدمة الاستقبال</h3>
                            <p className="text-gray-600">ينتظرك السائق في صالة الوصول حاملاً لوحة باسمك لسهولة التعرف عليه وسط الزحام.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">مباشرة للفندق</h3>
                            <p className="text-gray-600">لا حافلات مشتركة ولا توقفات متعددة. سيارة خاصة تأخذك مباشرة لمدخل فندقك في مكة.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "كم سعر التاكسي؟",
                                shortAnswer: "من ٢٠٠ ريال.",
                                detailedAnswer: "سعرنا الثابت للسيدان يبدأ من ٢٠٠ ريال. السيارات العائلية (جمس) من ٣٥٠-٤٠٠ ريال. السعر شامل الانتظار والوقود.",
                                perspectives: [
                                    {
                                        role: "المقارنة",
                                        icon: "CheckCircle2",
                                        insight: "أرخص وأضمن من البحث عن تاكسي في المطار وقت الزحام."
                                    }
                                ]
                            },
                            {
                                question: "أين مكان الانتظار؟",
                                shortAnswer: "صالة القدوم.",
                                detailedAnswer: "في الصالة رقم 1 (الخطوط السعودية/الأجنبية) ينتظر السائق بعد الجمارك. للصالة الشمالية، خارج المخرج الرئيسي. نرسل لك تفاصيل السائق وصورة الموقع عند الحجز.",
                                perspectives: [
                                    {
                                        role: "اللوجستيات",
                                        icon: "MapPin",
                                        insight: "ابحث عن اللوحة التي تحمل اسمك."
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
                    <h2 className="text-2xl font-bold text-center mb-8">تقييمات المسافرين</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="JeddahAirport" />
                        <QuestionsDisplay location="JeddahAirport" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="JeddahAirport" />
                        <QuestionForm locationName="JeddahAirport" />
                    </div>
                </div>
            </section>
        </div>
    );
}
