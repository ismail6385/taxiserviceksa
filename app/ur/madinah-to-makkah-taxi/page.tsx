
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
    title: 'مدینہ سے مکہ ٹیکسی | پرائیویٹ ٹرانسفر (میقات اسٹاپ)',
    description: 'مدینہ سے مکہ کے لیے پرائیویٹ ٹیکسی بک کریں۔ آرام دہ گاڑیاں اور میقات ذوالحلیفہ (ابیار علی) پر احرام کے لیے لازمی اسٹاپ۔',
    keywords: ['مدینہ سے مکہ ٹیکسی', 'مدینہ مکہ ٹرانسفر', 'میقات ٹیکسی', 'عمرہ ٹیکسی'],
    alternates: {
        canonical: 'https://transferksa.com/ur/madinah-to-makkah-taxi/',
    },
};

export default function MadinahToMakkahPageUr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="مدینہ سے مکہ ٹیکسی"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        ہجرت روٹ
                    </span>
                }
                subtitle="میقات اسٹاپ کے ساتھ پرائیویٹ ٹرانسفر"
                location="450 کلومیٹر کا سفر"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="ٹیکسی سروس کے ایس اے™"
                        description="مدینہ منورہ سے مکہ مکرمہ کا روحانی سفر۔ ہمارے ڈرائیور میقات پر احرام کے لیے ضروری قیام اور آرام دہ سفر کو یقینی بناتے ہیں۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'مکمل ٹرپ', value: '50k+', icon: Car },
                            { label: 'میقات', value: '100%', icon: MapPin },
                            { label: 'وقت', value: '4.5 گھنٹے', icon: Clock }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <RoutePerspective
                        route="مدینہ تا مکہ"
                        perspectives={[
                            {
                                id: "pilgrim",
                                targetAudience: "عمرہ زائر",
                                icon: User,
                                intent: "روحانی تیاری",
                                description: "اس سفر کا سب سے اہم حصہ میقات ذوالحلیفہ (ابیار علی) پر رکنا ہے۔ ہم یہاں 45-60 منٹ کے لیے رکتے ہیں، تاکہ آپ احرام باندھ سکیں اور نفل ادا کر سکیں۔",
                                structuredFeatures: [
                                    { label: "میقات اسٹاپ", value: "شامل ہے" },
                                    { label: "دورانیہ", value: "4-5 گھنٹے" },
                                    { label: "آرام", value: "اعلیٰ" }
                                ],
                                visualContext: "گاڑی میقات کی پارکنگ میں انتظار کرتی ہے۔"
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">پرائیویٹ ٹیکسی کیوں؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">ڈور ٹو ڈور</h3>
                            <p className="text-gray-600">مدینہ ہوٹل سے پک اپ اور مکہ ہوٹل پر ڈراپ۔ سامان اٹھانے کی ضرورت نہیں۔</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <MapPin className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">میقات کی سہولت</h3>
                            <p className="text-gray-600">ٹرین کے برعکس (جہاں پہلے احرام باندھنا پڑتا ہے)، ہماری ٹیکسی میقات پر آپ کا انتظار کرتی ہے۔</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">پرائیویٹ اور محفوظ</h3>
                            <p className="text-gray-600">صرف آپ اور آپ کی فیملی۔ صاف گاڑیاں اور تجربہ کار ڈرائیور۔</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">مسافروں کے تبصرے</h2>
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
