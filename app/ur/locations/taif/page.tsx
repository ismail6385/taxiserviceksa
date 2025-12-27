import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Car, ArrowRight, Mountain, Cloud } from 'lucide-react';
import Hero from '@/components/Hero';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'طائف ٹیکسی سروس | جدہ اور مکہ سے ٹرانسفر',
    description: 'طائف کے لیے قابل اعتماد ٹیکسی۔ الہدا، شفا اور دیگر تفریحی مقامات کی سیر۔ جدہ ایئرپورٹ سے طائف فیملی پک اپ۔',
    keywords: ['طائف ٹیکسی', 'جدہ طائف ٹیکسی', 'الہدا ٹرپ', 'شفا طائف', 'طائف سیاحت'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/taif/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/taif/',
            'ar': 'https://taxiserviceksa.com/ar/locations/taif/',
        }
    },
    openGraph: {
        title: 'طائف فیملی ٹرپ | پہاڑی مقامات کی سیر',
        description: 'گرمیوں میں طائف کا سفر کریں۔ ٹھنڈا موسم اور خوبصورت پہاڑ۔ ہمارے ساتھ محفوظ سفر کریں۔',
        url: 'https://taxiserviceksa.com/ur/locations/taif/',
        locale: 'ur_PK',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/taif.webp', alt: 'طائف پہاڑ' }],
    },
};

export default function TaifPageUrdu() {
    const images = [
        '/locations/taif.webp',
        '/hero-slide-3.webp',
        '/hero-slide-1.webp',
    ];

    const distanceData = [
        { destination: 'مکہ مکرمہ', distance: '90 کلومیٹر', time: '1 گھنٹہ', route: 'الکر روڈ' },
        { destination: 'جدہ ایئرپورٹ', distance: '170 کلومیٹر', time: '2.5 گھنٹے', route: 'الہدا' },
        { destination: 'ریاض', distance: '780 کلومیٹر', time: '7-8 گھنٹے', route: 'طائف-ریاض ہائی وے' },
    ];

    const faqs = [
        {
            question: "جدہ سے طائف کا کرایہ کیا ہے؟",
            answer: "تقریباً 300 ریال سے شروع ہوتا ہے۔ یہ کار کی قسم پر منحصر ہے۔"
        },
        {
            question: "کیا الہدا روڈ کھلا ہے؟",
            answer: "جی ہاں، عام طور پر کھلا رہتا ہے۔ بارش کے دوران احتیاطی طور پر بند ہو سکتا ہے۔"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={images}
                h1Text="طائف ٹیکسی سروس اور سیاحت"
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        خوبصورت طائف
                    </span>
                }
                subtitle="جدہ اور مکہ سے فیملی ٹرپس"
                location="طائف • الہدا • شفا"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-white text-lg drop-shadow-md">
                        طائف کے خوشگوار موسم کا لطف اٹھائیں۔ الہدا کے پہاڑی راستے اور شفا کے باغات کی سیر کریں۔۔ ہم آپ کو بہترین سروس فراہم کرتے ہیں۔
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto">
                            بکنگ کریں
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">طائف کیوں جائیں؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Mountain className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">پہاڑی راستے</h3>
                            <p className="text-gray-600">الہدا کا خوبصورت اور گھماؤ دار راستہ۔</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Cloud className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">ٹھنڈا موسم</h3>
                            <p className="text-gray-600">گرمی سے نجات اور تازہ ہوا کا لطف۔</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Car className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">فیملی پکنک</h3>
                            <p className="text-gray-600">پارک اور کیبل کار۔</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SeasonalTravelTips
                        city="طائف"
                        isRtl={true}
                        labels={{
                            title: "طائف کا موسم",
                            subtitle: "معلومات",
                            summerTitle: "موسم گرما",
                            summerText: "یہ سیزن ہے۔ پھل بہت ملتے ہیں۔ موسم بہت اچھا ہوتا ہے۔",
                            summerTag: "سیزن",
                            winterTitle: "سردی",
                            winterText: "بہت سردی ہوتی ہے اور دھند چھائی رہتی ہے۔",
                            winterTag: "دھند"
                        }}
                    />

                    <div className="mt-12">
                        <DistanceTable
                            origin="طائف سٹی"
                            locations={distanceData}
                            isRtl={true}
                            labels={{
                                title: "فاصلے",
                                subtitle: "وقت",
                                destinationHeader: "جگہ",
                                distanceHeader: "فاصلہ",
                                timeHeader: "وقت",
                                routeHeader: "روٹ",
                                disclaimer: "*بارش میں احتیاط کریں۔"
                            }}
                        />
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="طائف"
                isRtl={true}
                labels={{ title: "قریبی شہر", subtitle: "مزید دیکھیں", viewRoutes: "تفصیل" }}
                customLinks={[
                    { name: 'مکہ مکرمہ', url: '/locations/makkah', description: 'صرف ایک گھنٹہ دور' },
                    { name: 'جدہ', url: '/locations/jeddah', description: 'ساحل سمندر' },
                ]}
            />
        </div>
    );
}
