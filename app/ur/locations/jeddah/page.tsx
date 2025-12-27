import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Car, ArrowRight, Building2, Waves } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import TravelConsensus from '@/components/seo/TravelConsensus';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'جدہ ٹیکسی سروس | ایئرپورٹ ٹرانسفر اور مکہ زیارت',
    description: 'جدہ میں بہترین ٹیکسی سروس۔ کنگ عبدالعزیز ایئرپورٹ سے مکہ اور مدینہ کے لیے آرام دہ سفر۔ فیملی کاریں (GMC) دستیاب ہیں۔',
    keywords: ['جدہ ٹیکسی', 'جدہ ایئرپورٹ پک اپ', 'مکہ ٹیکسی', 'عمرہ ٹرانسپورٹ', 'جدہ سے مدینہ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah/',
        }
    },
    openGraph: {
        title: 'جدہ ٹیکسی | مکہ اور مدینہ ٹرانسفر',
        description: 'جدہ ایئرپورٹ (ٹرمینل 1) سے مکہ ہوٹل تک براہ راست سروس۔ سامان اور فیملی کے لیے بہترین۔',
        url: 'https://taxiserviceksa.com/ur/locations/jeddah/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'جدہ کورنیش' }],
    },
};

export default function JeddahPageUrdu() {
    const services = [
        { name: 'ایئرپورٹ استقبال', description: 'ٹرمینل 1 اور نارتھ ٹرمینل', icon: Plane },
        { name: 'مکہ ڈراپ', description: 'حرم یا ہوٹل تک (75 منٹ)', icon: Car },
        { name: 'جدہ سٹی ٹور', description: 'بلد اور کورنیش کی سیر', icon: Waves },
        { name: 'بزنس ٹرانسپورٹ', description: 'لگژری گاڑیاں', icon: Building2 },
    ];

    const images = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const faqs = [
        {
            question: "جدہ ایئرپورٹ پر ڈرائیور کیسے ملے گا؟",
            answer: "ٹرمینل 1 میں 'ایکویریم' کے پاس، اور نارتھ ٹرمینل میں گیٹ 2 پر ہمارے ڈرائیور آپ کا استقبال کریں گے۔"
        },
        {
            question: "کیا مکہ جانے کے لیے ٹرین بہتر ہے یا ٹیکسی؟",
            answer: "فیملی اور سامان کے ساتھ ٹیکسی بہتر ہے کیونکہ یہ آپ کو ہوٹل کے دروازے پر اتارتی ہے۔ ٹرین اسٹیشن سے حرم دور ہے۔"
        },
        {
            question: "کرایہ کتنا ہے؟",
            answer: "کرایہ گاڑی کی قسم پر منحصر ہے۔ برائے مہربانی کرایہ کی فہرست دیکھیں یا واٹس ایپ پر رابطہ کریں۔"
        }
    ];

    const distanceData = [
        { destination: 'مکہ مکرمہ', distance: '95 کلومیٹر', time: '1 گھنٹہ 15 منٹ', route: 'حرمین ہائی وے' },
        { destination: 'مدینہ منورہ', distance: '415 کلومیٹر', time: '4 گھنٹے', route: 'روٹ 15' },
        { destination: 'طائف', distance: '170 کلومیٹر', time: '2 گھنٹے 15 منٹ', route: 'الہدا روڈ' },
        { destination: 'ابحر', distance: '35 کلومیٹر', time: '40 منٹ', route: 'کورنیش روڈ' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="جدہ ٹیکسی سروس: ایئرپورٹ اور مکہ ٹرانسفر"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        مکہ کا دروازہ
                    </span>
                }
                subtitle="کنگ عبدالعزیز ایئرپورٹ استقبال"
                location="جدہ • مکہ • مدینہ"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        طویل پرواز کے بعد انتظار نہ کریں۔ ہم آپ کو ایئرپورٹ کے اندر سے ریسیو کرتے ہیں اور آرام دہ گاڑی میں مکہ ہوٹل پہنچاتے ہیں۔
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            ٹیکسی بک کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">ہماری خدمات</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="جدہ"
                        isRtl={true}
                        labels={{
                            title: "سفر کے مشورے",
                            subtitle: "جدہ موسم",
                            summerTitle: "گرمی اور حبس",
                            summerText: "جدہ میں حبس بہت ہوتا ہے۔ باہر ٹیکسی کا انتظار نہ کریں، پہلے سے اے سی گاڑی بک کریں۔",
                            summerTag: "گرمی",
                            winterTitle: "سردی",
                            winterText: "موسم بہت خوشگوار ہوتا ہے۔ بلد اور سمندر کنارے جانے کا بہترین وقت۔",
                            winterTag: "بہترین وقت"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="جدہ ایئرپورٹ"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "فاصلے اور اوقات",
                                subtitle: "اندازاً وقت",
                                destinationHeader: "منزل",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "راستہ",
                                disclaimer: "*ٹریفک کی وجہ سے وقت بدل سکتا ہے۔"
                            }}
                        />
                    </div>

                    <div className="mt-12">
                        <TravelConsensus
                            isRtl={true}
                            labels={{
                                title: "مکہ جانے کے ذرائع",
                                subtitle: "ٹرین یا کار؟",
                                beliefLabel: "خیال",
                                realityLabel: "حقیقت",
                                rangeLabel: "نتیجہ",
                                factorsLabel: "وجوہات"
                            }}
                            points={[
                                {
                                    topic: "حرمین ٹرین",
                                    commonBelief: "سب سے تیز ہے۔",
                                    reality: "ٹرین اسٹیشن جانے اور وہاں سے ہوٹل جانے میں وقت ضائع ہوتا ہے۔ ٹیکسی آپ کو سیدھا ہوٹل اتارتی ہے۔",
                                    truthRange: "ٹیکسی بہتر ہے",
                                    factors: ["سامان", "فیملی", "پریشانی"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "سوالات",
                                subtitle: "اہم معلومات",
                                quickAnswer: "جواب",
                                perspectives: "تفصیل",
                                readMore: "+",
                                readLess: "-"
                            }}
                            faqs={[
                                {
                                    question: "کیا احرام کے ساتھ سفر کر سکتے ہیں؟",
                                    shortAnswer: "جی ہاں",
                                    detailedAnswer: "ہماری گاڑیاں کھلی اور ٹھنڈی ہوتیں ہیں، جو احرام کے ساتھ سفر کرنے والوں کے لیے بہت آرام دہ ہیں۔",
                                    perspectives: [{ role: "ڈرائیور", icon: "Shield", insight: "ہم عمرہ زائرین کا خاص خیال رکھتے ہیں۔" }]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="جدہ"
                isRtl={true}
                labels={{ title: "دیگر شہر", subtitle: "سعودی عرب", viewRoutes: "دیکھیں" }}
                customLinks={[
                    { name: 'مکہ مکرمہ', url: '/locations/makkah', description: 'عمرہ ٹیکسی' },
                    { name: 'مدینہ منورہ', url: '/locations/madinah', description: 'زیارت' },
                    { name: 'طائف', url: '/locations/taif', description: 'سیاحت' }
                ]}
            />
        </div>
    );
}
