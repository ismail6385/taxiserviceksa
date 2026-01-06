
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
    title: 'مکہ تا مدینہ ٹیکسی | پرائیویٹ ٹرانسفر (ڈور ٹو ڈور)',
    description: 'مکہ سے مدینہ منورہ کے لیے پرائیویٹ ٹیکسی بک کریں۔ بغیر رکے (الا یہ کہ آپ چاہیں) براہ راست سفر۔ 4.5 گھنٹے کا سفر۔ آرام دہ GMC۔',
    keywords: ['مکہ تا مدینہ ٹیکسی', 'مکہ مدینہ کار', 'پرائیویٹ ٹیکسی مکہ مدینہ', 'کرایہ مکہ مدینہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/makkah-to-madinah-taxi/',
    },
};

export default function MakkahToMadinahPageUr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="مکہ تا مدینہ ٹیکسی"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        براہ راست سفر
                    </span>
                }
                subtitle="ہوٹل ٹو ہوتل ٹرانسفر"
                location="ہجرت ہائی وے"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="ٹیکسی سروس کے ایس اے™"
                        description="عمرہ مکمل کرنے کے بعد، مسجد نبوی ﷺ کی زیارت کے لیے آرام سے سفر کریں۔ ہماری سروس دونوں مقدس شہروں کے درمیان ہموار سفر کو یقینی بناتی ہے۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'روٹس', value: '45k+', icon: Car },
                            { label: 'دورانیہ', value: '4.5 گھنٹے', icon: Clock },
                            { label: 'آرام', value: 'پریمیم', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">آرام سے سفر کریں</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                مکہ سے مدینہ کا فاصلہ تقریباً 450 کلومیٹر ہے۔ پرائیویٹ ٹیکسی آپ کو بسوں کے شیڈول یا ٹرین اسٹیشن کے دھکوں کے بغیر پرائیویسی میں آرام کرنے، سونے یا قرآن پڑھنے کی سہولت دیتی ہے۔
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>ہوٹل پک اپ:</strong> ہم مکہ میں آپ کے ہوٹل آتے ہیں۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>اسٹینڈرڈ روٹ:</strong> جدید ہجرت ہائی وے۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>لچکدار اسٹاپس:</strong> جب چاہیں آرام کے لیے رکیں۔</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> بدر کی زیارت؟
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                کچھ زائرین **غزوہ بدر** کے مقام کی زیارت کرنا چاہتے ہیں جو مین ہائی وے سے تھوڑا ہٹ کر ہے۔
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>ٹپ:</strong> اگر آپ بدر جانا چاہتے ہیں تو بکنگ کے وقت بتائیں تاکہ ہم وقت اور کرایہ ایڈجسٹ کر سکیں۔
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
                                question: "کیا ہمیں میقات پر رکنا ہوگا؟",
                                shortAnswer: "نہیں۔",
                                detailedAnswer: "مکہ سے مدینہ جاتے وقت میقات کی ضرورت نہیں ہوتی کیونکہ آپ حرم سے باہر جا رہے ہیں۔ اسٹاپ صرف آرام یا نماز کے لیے ہے۔",
                                perspectives: [
                                    {
                                        role: "فقہ",
                                        icon: "CheckCircle2",
                                        insight: "سیدھا سفر ہے۔"
                                    }
                                ]
                            },
                            {
                                question: "کیا ٹرین تیز ہے؟",
                                shortAnswer: "اسٹیشن سے اسٹیشن، ہاں۔",
                                detailedAnswer: "ٹرین کا سفر 2.5 گھنٹے ہے۔ لیکن اسٹیشن پہنچنے، چیک ان (1 گھنٹہ)، اور مدینہ اسٹیشن سے ہوٹل تک جانے کا وقت شامل کریں تو ٹوٹل وقت ٹیکسی کے برابر ہی بنتا ہے (4.5 گھنٹے)، وہ بھی سامان اٹھائے بغیر۔",
                                perspectives: [
                                    {
                                        role: "سہولت",
                                        icon: "Clock",
                                        insight: "ٹیکسی ڈور ٹو ڈور سہولت میں بہترین ہے۔"
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
