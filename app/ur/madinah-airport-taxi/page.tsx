
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
    title: 'مدینہ ایئرپورٹ ٹیکسی | مسجد نبوی ٹرانسفر',
    description: 'مدینہ ایئرپورٹ سے مسجد نبوی کے ہوٹلوں تک قابل اعتماد ٹیکسی۔ 24/7 پک اپ۔ 50 ریال سے شروع ہونے والے فکسڈ ریٹس۔ پروفیشنل ڈرائیورز۔',
    keywords: ['مدینہ ایئرپورٹ ٹیکسی', 'پرنس محمد ایئرپورٹ ٹرانسفر', 'مدینہ ایئرپورٹ پک اپ', 'حرم ٹیکسی'],
    alternates: {
        canonical: 'https://transferksa.com/ur/madinah-airport-taxi/',
    },
};

export default function MadinahAirportTaxiPageUr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/madinah.webp', '/hero-slide-2.webp']}
                h1Text="مدینہ ایئرپورٹ ٹیکسی"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        ارائیول ٹرانسفر
                    </span>
                }
                subtitle="مسجد نبوی تک فوری رسائی"
                location="20 منٹ کی ڈرائیو"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="ٹیکسی سروس مدینہ™"
                        description="روشنیوں کے شہر میں خوش آمدید۔ ہمارے ڈرائیور پرنس محمد بن عبدالعزیز انٹرنیشنل ایئرپورٹ (MED) سے آپ کے ہوٹل تک ہموار سفر کو یقینی بناتے ہیں۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'ایئرپورٹ ٹرانسفرز', value: '30k+', icon: Plane },
                            { label: 'حرم تک', value: '25 منٹ', icon: Clock },
                            { label: 'اطمینان', value: '5.0', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900">
                                <Plane className="w-6 h-6 text-emerald-600" /> ہمارے ساتھ بک کیوں کریں؟
                            </h3>
                            <ul className="space-y-4 text-emerald-800">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>فلائٹ مانیٹرنگ:</strong> ہم آپ کے لینڈنگ کا وقت ٹریک کرتے ہیں۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>میٹ اینڈ گریٹ:</strong> ڈرائیور باہر نکلتے ہی استقبال کرتا ہے۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>اسٹینڈرڈ ریٹس:</strong> بحث کرنے کی ضرورت نہیں۔</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">حرم کا سفر</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                پرنس محمد بن عبدالعزیز انٹرنیشنل ایئرپورٹ (MED) مرکزی حرم کے علاقے سے صرف 15-20 کلومیٹر دور ہے۔ شہر کے مرکز سے قربت کی وجہ سے یہ زائرین کے لیے سب سے آسان ایئرپورٹ ہے۔
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ہمارے ڈرائیور سنٹرل زون (مرکزیہ) کے تمام ہوٹلوں کو جانتے ہیں اور ٹریفک کی پابندیوں کو سمجھتے ہوئے آپ کو جلدی آپ کی لابی تک پہنچا سکتے ہیں۔
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
                                question: "مدینہ ایئرپورٹ سے حرم کی ٹیکسی کتنے کی ہے؟",
                                shortAnswer: "تقریباً 80-120 ریال۔",
                                detailedAnswer: "اگرچہ میٹر والی ٹیکسیاں دستیاب ہیں، ہماری فکسڈ ریٹ پرائیویٹ ٹرانسفر پریمیم کار (کیمری/فورڈ) کو یقینی بناتی ہے جو تقریباً 100-150 ریال میں ملتی ہے، بغیر کسی انتظار کے۔",
                                perspectives: [
                                    {
                                        role: "ویلیو",
                                        icon: "CheckCircle2",
                                        insight: "پہنچتے ہی ذہنی سکون ملنا اس معمولی فرق سے بہتر ہے۔"
                                    }
                                ]
                            },
                            {
                                question: "کیا میں فیملی کے لیے وین بک کر سکتا ہوں؟",
                                shortAnswer: "ہاں، GMC/Hiace دستیاب ہیں۔",
                                detailedAnswer: "ہم بڑی فیملیز اور سامان کے لیے 7 سیٹر GMC اور 10 سیٹر H1 وین پیش کرتے ہیں۔ بڑی گاڑیوں کی دستیابی کے لیے براہ کرم پہلے سے بکنگ کریں۔",
                                perspectives: [
                                    {
                                        role: "فیملی",
                                        icon: "User",
                                        insight: "اگر آپ کے پاس 2 سے زیادہ بڑے سوٹ کیس ہیں تو یہ ضروری ہے۔"
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
