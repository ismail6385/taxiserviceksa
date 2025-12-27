import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Mountain, History } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'خیبر ٹور | تاریخی قلعوں کی سیر',
    description: 'مدینہ منورہ سے خیبر کا تاریخی سفر۔ قدیم قلعے اور نخلستان دیکھیں۔ العلا سے بھی سروس دستیاب ہے۔',
    keywords: ['خیبر ٹور', 'خیبر کا قلعہ', 'مدینہ سے خیبر', 'خیبر زیارت', 'تاریخی مقامات'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/khayber-fort/',
            'ar': 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
        }
    },
    openGraph: {
        title: 'خیبر تاریخی ٹور',
        description: 'اسلامی تاریخ کا اہم مقام خیبر دیکھیں۔',
        url: 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/khayber.webp', alt: 'خیبر قلعہ' }],
    },
};

export default function KhayberPageUrdu() {
    const images = [
        '/locations/alula.webp',
        '/hero-slide-2.webp',
    ];

    const distanceData = [
        { destination: 'مدینہ منورہ', distance: '170 کلومیٹر', time: '2 گھنٹے', route: 'خیبر روڈ' },
        { destination: 'العلا', distance: '200 کلومیٹر', time: '2.5 گھنٹے', route: 'العلا روڈ' },
    ];

    const faqs = [
        {
            question: "خیبر مدینہ سے کتنا دور ہے؟",
            answer: "تقریباً 170 کلومیٹر۔ جانے میں 2 گھنٹے لگتے ہیں۔"
        },
        {
            question: "کیا وہاں کھانا ملتا ہے؟",
            answer: "وہاں سہولیات کم ہیں۔ ہم مشورہ دیتے ہیں کہ اپنا کھانا ساتھ لے کر چلیں۔"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="خیبر: تاریخ کا سفر"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        قلعہ خیبر
                    </span>
                }
                subtitle="مدینہ منورہ سے ڈے ٹرپ"
                location="خیبر • مدینہ"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        خیبر کے قدیم قلعوں اور آتش فشاں کے پتھروں سے بنے مکانات دیکھیں۔ یہ ایک منفرد تاریخی تجربہ ہے۔
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            ٹور بک کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">کیا دیکھنے کو ملے گا؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <History className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">تاریخی قلعے</h3>
                            <p className="text-gray-600">پہاڑی پر واقع قدیم قلعے۔</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Mountain className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">کالے پہاڑ</h3>
                            <p className="text-gray-600">آتش فشاں لاوا سے بنی زمین۔</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <DistanceTable
                        origin="خیبر"
                        locations={distanceData}
                        isRtl={true}
                        labels={{
                            title: "فاصلے",
                            subtitle: "لوکیشن",
                            destinationHeader: "شہر",
                            distanceHeader: "فاصلہ",
                            timeHeader: "وقت",
                            routeHeader: "روٹ",
                            disclaimer: ""
                        }}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            isRtl={true}
                            labels={{
                                title: "عمومی سوالات",
                                subtitle: "معلومات",
                                quickAnswer: "جواب",
                                perspectives: "مزید",
                                readMore: "+",
                                readLess: "-"
                            }}
                            faqs={[
                                {
                                    question: "کیا فیملی کے لیے محفوظ ہے؟",
                                    shortAnswer: "جی ہاں",
                                    detailedAnswer: "بالکل، یہ ایک محفوظ سیاحتی مقام ہے۔ لیکن پیدل چلتے وقت احتیاط کریں۔",
                                    perspectives: [{ role: "ٹورسٹ", icon: "MapPin", insight: "دن کی روشنی میں جانا بہتر ہے۔" }]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="خیبر"
                isRtl={true}
                labels={{ title: "قریبی مقامات", subtitle: "مزید", viewRoutes: "دیکھیں" }}
                customLinks={[
                    { name: 'مدینہ منورہ', url: '/locations/madinah', description: 'واپسی' },
                    { name: 'العلا', url: '/locations/alula', description: 'تاریخی شہر' },
                ]}
            />
        </div>
    );
}
