
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
    title: 'جدہ ایئرپورٹ تا مکہ ٹیکسی | پرائیویٹ ٹرانسفر',
    description: 'جدہ ایئرپورٹ (JED) سے مکہ ہوٹلز تک آفیشل ٹیکسی سروس۔ ارائیول پر 24/7 میٹ اینڈ گریٹ۔ عمرہ زائرین کے لیے فکسڈ ریٹ۔',
    keywords: ['جدہ ایئرپورٹ مکہ ٹیکسی', 'جدہ ٹو مکہ ٹرانسفر', 'عمرہ ٹیکسی جدہ', 'جدہ ایئرپورٹ کرایہ'],
    alternates: {
        canonical: 'https://transferksa.com/ur/jeddah-airport-to-makkah-taxi/',
    },
};

export default function JeddahAirportToMakkahPageUr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/jeddah-airport.webp', '/hero-slide-1.webp']}
                h1Text="جدہ ایئرپورٹ تا مکہ ٹیکسی"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        ارائیول ٹرانسفر
                    </span>
                }
                subtitle="عمرہ کا آسان آغاز"
                location="جدہ -> مکہ (80 کلومیٹر)"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="ایئرپورٹ ٹیکسی™"
                        description="کنگ عبدالعزیز انٹرنیشنل ایئرپورٹ پر آنے والے زائرین کے لیے سب سے قابل اعتماد ٹرانسفر۔ ہم آپ کی فلائٹ ٹریک کرتے ہیں اور آپ کا انتظار کرتے ہیں۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'ایئرپورٹ پک اپ', value: '100k+', icon: Plane },
                            { label: 'بروقت', value: '99.9%', icon: Clock },
                            { label: 'سفر کا وقت', value: '60 منٹ', icon: MapPin }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">بغیر کسی پریشانی کے ایئرپورٹ ٹرانسفر</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">فلائٹ ٹریکنگ</h3>
                            <p className="text-gray-600">ہم آپ کی فلائٹ کا اسٹیٹس مانیٹر کرتے ہیں۔ اگر فلائٹ لیٹ ہو جائے تو ہم خودکار طریقے سے پک اپ کا وقت ایڈجسٹ کر لیتے ہیں۔</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <User className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">استقبال</h3>
                            <p className="text-gray-600">آپ کا ڈرائیور ارائیول ہال میں آپ کے نام کی تختی کے ساتھ انتظار کرتا ہے۔</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">براہ راست ہوٹل</h3>
                            <p className="text-gray-600">کوئی شٹل بس یا انتظار نہیں۔ پرائیویٹ کار آپ کو سیدھا مکہ ہوٹل کے گیٹ پر اتارتی ہے۔</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "ٹیکسی کا کرایہ کتنا ہے؟",
                                shortAnswer: "200 ریال سے۔",
                                detailedAnswer: "سیڈان کار کا فکسڈ ریٹ 200 ریال سے شروع ہوتا ہے۔ بڑی فیملی کار (GMC) 350-400 ریال ہے۔ اس میں انتظار اور فیول شامل ہے۔",
                                perspectives: [
                                    {
                                        role: "موازنہ",
                                        icon: "CheckCircle2",
                                        insight: "ایئرپورٹ پر عام ٹیکسی ڈھونڈنے سے کہیں بہتر اور سستا۔"
                                    }
                                ]
                            },
                            {
                                question: "ملاقات کی جگہ کہاں ہے؟",
                                shortAnswer: "ارائیول ہال۔",
                                detailedAnswer: "ٹرمینل 1 کے لیے کسٹمز کے بعد، اور نارتھ ٹرمینل کے لیے مین گیٹ کے باہر۔ ہم بکنگ کے بعد ڈرائیور کی تفصیلات بھیج دیتے ہیں۔",
                                perspectives: [
                                    {
                                        role: "رہنمائی",
                                        icon: "MapPin",
                                        insight: "اپنے نام کا بورڈ دیکھیں۔"
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
                    <h2 className="text-2xl font-bold text-center mb-8">مسافروں کے ریویوز</h2>
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
