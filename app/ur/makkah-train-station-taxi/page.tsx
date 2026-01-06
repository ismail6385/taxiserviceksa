
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
    title: 'مکہ ٹرین اسٹیشن ٹیکسی | حرمین اسٹیشن سے ہوٹل ٹرانسفر',
    description: 'مکہ حرمین ٹرین اسٹیشن (رسیفہ) سے حرم ہوٹل تک ٹیکسی سروس۔ اسٹیشن اور ہوٹل کے درمیان آرام دہ سفر۔ فکسڈ ریٹس۔',
    keywords: ['مکہ ٹرین اسٹیشن ٹیکسی', 'حرمین اسٹیشن ٹرانسفر', 'رسیفہ اسٹیشن ٹیکسی', 'مکہ اسٹیشن سے حرم'],
    alternates: {
        canonical: 'https://transferksa.com/ur/makkah-train-station-taxi/',
    },
};

export default function MakkahTrainStationPageUr() {
    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="مکہ ٹرین اسٹیشن ٹیکسی"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        اسٹیشن ٹرانسفر
                    </span>
                }
                subtitle="آپ کے سفر کا آخری مرحلہ"
                location="رسیفہ اسٹیشن"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="اسٹیشن ٹیکسی™"
                        description="حرمین ہائی اسپیڈ اسٹیشن سے آپ کے ہوٹل کی دہلیز تک۔ اسٹیشن کے باہر ٹیکسی تلاش کرنے کی پریشانی سے بچیں۔"
                        foundingDate="2012"
                        metrics={[
                            { label: 'اسٹیشن پک اپ', value: '20k+', icon: Train },
                            { label: 'حرم تک', value: '15 منٹ', icon: Clock },
                            { label: 'بھروہ', value: '100%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">پہلے سے بکنگ کیوں کریں؟</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                مکہ اسٹیشن رسیفہ میں واقع ہے، حرم سے تقریبا 10-15 منٹ کی ڈرائیو پر۔ جب ٹرین پہنچتی ہے تو سینکڑوں مسافر ٹیکسی اسٹینڈ پر آتے ہیں، جس سے لمبی قطاریں لگ جاتی ہیں۔
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>قطار سے بچیں:</strong> ڈرائیور آپ کا منتظر ہوتا ہے۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>فکسڈ قیمت:</strong> بحث کی ضرورت نہیں۔</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>سامان میں مدد:</strong> ڈرائیور سامان اٹھانے میں مدد کرتا ہے۔</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> اسٹیشن لوکیشن
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                <strong>نام:</strong> مکہ حرمین ہائی اسپیڈ ریلوے اسٹیشن<br />
                                <strong>علاقہ:</strong> الرسیفہ<br />
                                <strong>شاہ عبدالعزیز گیٹ سے فاصلہ:</strong> ~6 کلومیٹر
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>نوٹ:</strong> شٹل بسیں موجود ہیں لیکن وہ بس اسٹیشنز پر اتارتی ہیں۔ ہماری ٹیکسی آپ کو ہوٹل کے دروازے تک لے جاتی ہے۔
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
