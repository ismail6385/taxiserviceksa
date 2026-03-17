import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'سروس لوکیشنز | وی آئی پی پرائیویٹ ٹرانسفر KSA',
    description: 'سعودی عرب بھر میں پریمیم وی آئی پی پرائیویٹ ٹرانسفر سروس۔ جدہ، مکہ، مدینہ، ریاض، العلا اور طائف میں ایئرپورٹ ٹرانسفر اور ٹورز کے لیے پیشہ ور چوفرز۔',
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/',
    },
};

const locations = [
    {
        name: 'مکہ مکرمہ',
        description: 'عمرہ زائرین اور مقدس زیارات کے لیے بھروسہ مند وی آئی پی ٹرانسپورٹ۔',
        image: '/makkah-kaaba-night.webp',
        href: '/ur/locations/makkah/'
    },
    {
        name: 'مدینہ منورہ',
        description: 'شہرِ نبی ﷺ کے لیے پرسکون اور آرام دہ پریمیم سفر۔',
        image: '/madinah-prophets-mosque.webp',
        href: '/ur/locations/madinah/'
    },
    {
        name: 'جدہ',
        description: 'جدہ ایئرپورٹ (JED) ٹرانسفر اور عروس البحر (ساحلی شہر) کے پریمیم ٹورز۔',
        image: '/jeddah-corniche-sunset.webp',
        href: '/ur/locations/jeddah/'
    },
    {
        name: 'ریاض',
        description: 'دارالحکومت میں ایگزیکٹو کارپوریٹ ٹرانسپورٹ اور وی آئی پی ایئرپورٹ ٹرانسفر۔',
        image: '/hero-slide-1.webp',
        href: '/ur/locations/riyadh/'
    },
    {
        name: 'طائف',
        description: 'پھولوں کے شہر طائف کے پہاڑوں کا خوبصورت اور پریمیم سفر۔',
        image: '/taif-mountains-view.webp',
        href: '/ur/locations/taif/'
    },
    {
        name: 'العلا',
        description: 'تاریخی مقامات اور قدیم عجائبات کی سیر کے لیے پریمیم پرائیویٹ ٹرانسفر۔',
        image: '/alula-hegra-tombs.webp',
        href: '/ur/locations/alula/'
    },
    {
        name: 'دمام',
        description: 'ایسٹرن پروونس کے انتظامی مرکز میں وی آئی پی ایئرپورٹ اور سٹی ٹرانسفر۔',
        image: '/hero-slide-3.webp',
        href: '/ur/locations/dammam/'
    },
    {
        name: 'تبوک (نیوم)',
        description: 'نیوم (NEOM) اور العلا کے لیے انٹر سٹی ٹرانسفر اور ایئرپورٹ سروس۔',
        image: '/hero-slide-1.webp',
        href: '/ur/locations/tabuk/'
    },
    {
        name: 'ینبع',
        description: 'ینبع انڈسٹریل سٹی اور ریڈ سی ایگزیکٹو ٹرانسپورٹ سروسز۔',
        image: '/hero-slide-2.webp',
        href: '/ur/locations/yanbu/'
    },
    {
        name: 'مکہ زیارات',
        description: 'غارِ حرا، ثور اور میدانِ عرفات کے مخصوص روحانی ٹورز۔',
        image: '/hero-slide-2.webp',
        href: '/ur/locations/makkah-ziyarat/'
    },
    {
        name: 'قلعہ خیبر',
        description: 'خیبر کے قدیم نخلستانوں اور تاریخی مقامات کا خصوصی ثقافتی ٹور۔',
        image: '/hero-slide-2.webp',
        href: '/ur/locations/khayber-fort/'
    },
    {
        name: 'الخبر',
        description: 'کورنیش، ہوٹلوں اور بحرین کاز وے کے لیے لگژری ٹرانسپورٹ۔',
        image: '/hero-slide-4.webp',
        href: '/ur/locations/al-khobar/'
    }
];

export default function LocationsPageUrdu() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20 rtl" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-emerald-100 text-emerald-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">مقاماتِ سفر</span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-urdu">ہماری سروس کے مقامات</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        ہم سعودی عرب کے تمام بڑے شہروں اور تاریخی مقامات پر خدمات فراہم کرتے ہیں۔ سفر سے پہلے ہمارا <Link href="/guides/makkah-umrah-guide/" className="text-gray-900 font-bold hover:underline underline-offset-4 decoration-primary">مکہ عمرہ گائیڈ</Link> ضرور پڑھیں۔ اپنی منزل کا انتخاب کریں اور آج ہی اپنی <Link href="/routes/" className="text-gray-900 font-bold hover:underline underline-offset-4 decoration-primary">انٹر سٹی سواری</Link> کوٹیشن حاصل کریں۔
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 text-white text-right">
                                        <div className="flex items-center gap-2 mb-1 justify-end">
                                            <h3 className="text-2xl font-bold">{loc.name}</h3>
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col text-right">
                                    <p className="text-gray-600 mb-6 flex-1 font-urdu leading-relaxed">{loc.description}</p>
                                    <div className="flex items-center justify-end text-gray-900 font-bold group-hover:-translate-x-2 transition-transform">
                                        <ArrowRight className="mr-2 w-5 h-5 rotate-180" /> سروسز دیکھیں 
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 border-y border-amber-200 bg-amber-50 rounded-3xl p-6 text-center shadow-md mb-12">
                    <p className="text-amber-800 text-sm font-bold flex items-center justify-center gap-2 font-urdu">
                        <Shield className="w-4 h-4" />
                        آفیشل نوٹ: ہم صرف پہلے سے بک شدہ وی آئی پی ٹرانسفرز، انٹر سٹی اور ایئرپورٹ سروسز فراہم کرتے ہیں۔ ہم لوکل شارٹ ڈسٹنس ٹیکسی سروس فراہم نہیں کرتے۔
                    </p>
                </div>

                <div className="mt-20 bg-gray-900 text-white rounded-3xl p-12 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-white font-urdu">کیا آپ سفر کے لیے تیار ہیں؟</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed font-urdu">
                        چاہے آپ جدہ (JED)، ریاض (RUH) یا مدینہ (MED) پہنچ رہے ہوں، ہمارے پیشہ ور ڈرائیورز آپ کے استقبال کے لیے تیار ہیں۔ فکسڈ ریٹس پر سعودی عرب کی سب سے <Link href='/booking/' className='text-white font-bold underline decoration-primary'>بھروسہ مند وی آئی پی ٹرانسفر سروس</Link> کا تجربہ کریں۔
                    </p>
                    <div className="flex justify-center">
                        <Link href="/booking/">
                            <Button className="bg-primary text-white hover:text-black hover:bg-white font-bold px-10 py-6 text-lg rounded-xl flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                اپنی سواری کوٹیشن حاصل کریں
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
