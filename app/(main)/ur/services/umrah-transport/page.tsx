import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Navigation, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'عمرہ ٹرانسپورٹ سروس | مکہ اور مدینہ کے لیے ڈرائیور کے ساتھ ٹیکسی',
    description: 'پیشہ ور ڈرائیورز کے ساتھ مکمل عمرہ ٹرانسپورٹ سروس۔ جدہ ایئرپورٹ سے مکہ، مکہ سے مدینہ لیٹسٹ ماڈل ٹیکسی۔ فکسڈ ریٹس، 24/7 سروس اور زمزم لانے کی سہولت۔',
    keywords: ['عمرہ ٹیکسی سروس', 'مکہ مدینہ ٹرانسپورٹ', 'ڈرائیور کے ساتھ عمرہ ٹرانسپورٹ', 'جدہ ایئرپورٹ سے مکہ ٹیکسی', 'سعودی عرب زیارات ٹرانسپورٹ'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/services/umrah-transport/',
    },
    openGraph: {
        title: 'عمرہ ٹرانسپورٹ سروس | مکہ اور مدینہ کے لیے ڈرائیور کے ساتھ ٹیکسی',
        description: 'پیشہ ور ڈرائیورز کے ساتھ مکمل عمرہ ٹرانسپورٹ سروس۔ جدہ ایئرپورٹ سے مکہ، مکہ سے مدینہ ٹیکسی۔ فکسڈ ریٹس، 24/7 سروس۔',
        url: 'https://taxiserviceksa.com/ur/services/umrah-transport/',
        type: 'website',
    },
};

export default function UmrahTransportPageUrdu() {
    const umrahRoutes = [
        {
            name: 'جدہ ایئرپورٹ → مکہ مکرمہ',
            distance: '80 کلومیٹر',
            duration: '60-90 منٹ',
            price: 'مناسب ترین منصفانہ ریٹس',
            description: 'کنگ عبدالعزیز بین الاقوامی ہوائی اڈے سے براہ راست آپ کے مکہ ہوٹل تک ٹرانسفر۔ استقبالیہ (Meet-and-greet) سروس شامل ہے۔',
            link: '/ur/routes/jeddah-makkah',
            icon: Plane
        },
        {
            name: 'مکہ مکرمہ → مدینہ منورہ',
            distance: '450 کلومیٹر',
            duration: '4-5 گھنٹے',
            price: 'مناسب ترین منصفانہ ریٹس',
            description: 'دونوں مقدس شہروں کے درمیان آرام دہ سفر کے ساتھ اپنا عمرہ مکمل کریں۔ راستے میں نماز اور آرام کے لیے رکنے کی سہولت۔',
            link: '/ur/routes/makkah-madinah',
            icon: Navigation
        },
        {
            name: 'مکہ سٹی ٹرانسپورٹ',
            distance: 'شہر کے اندر',
            duration: '15-30 منٹ',
            price: 'مسابقتی ریٹس',
            description: 'ہوٹل سے حرم تک ڈائریکٹ ٹیکسی سروس۔ نمازوں، طواف اور مقدس زیارات کے ٹورز کے لیے 24/7 دستیاب۔',
            link: '/ur/locations/makkah',
            icon: MapPin
        },
        {
            name: 'مدینہ سٹی ٹرانسپورٹ',
            distance: 'شہر کے اندر',
            duration: '15-30 منٹ',
            price: 'مسابقتی ریٹس',
            description: 'ہوٹل سے مسجد نبوی اور زیارات کے مقامات (مسجد قباء، احد وغیرہ) تک۔ مقامی راستوں سے مکمل واقف پیشہ ور ڈرائیورز۔',
            link: '/ur/locations/madinah',
            icon: MapPin
        },
    ];

    const vehicles = [
        {
            name: 'ٹویوٹا کیمری (Toyota Camry)',
            capacity: '4 مسافر',
            luggage: '2 بڑے بیگ',
            ideal: 'اکیلی سواری یا جوڑے',
            features: ['ایئر کنڈیشنڈ', 'آرام دہ سیٹیں', 'زمزم رکھنے کی جگہ']
        },
        {
            name: 'جی ایم سی یوکون (GMC Yukon)',
            capacity: '7 مسافر',
            luggage: '5 بڑے بیگ',
            ideal: 'بڑی فیملی بمعہ سامان',
            features: ['کشادہ انٹیریئر', 'سامان کی اضافی جگہ', 'بچوں کی سیٹ دستیاب']
        },
        {
            name: 'ٹویوٹا ہائس (Toyota Hiace)',
            capacity: '11 مسافر',
            luggage: '16 بڑے بیگ',
            ideal: 'بڑے عمرہ گروپس',
            features: ['گروپ ٹرانسپورٹ', 'سامان کی بہت زیادہ جگہ', 'متعدد آبِ زمزم کنٹینرز']
        },
    ];

    const features = [
        'عمرہ کے راستوں سے واقف لائسنس یافتہ ڈرائیورز',
        'تمام گاڑیوں کے ساتھ ڈرائیور شامل ہیں (بغیر ڈرائیور گاڑیاں نہیں دیتیں)',
        'ایئرپورٹ پک اپ کے لیے مفت فلائٹ ٹریکنگ',
        'ایئرپورٹ پر آنے والوں کے لیے استقبالیہ سروس',
        'نماز کے اوقات کے مطابق شیڈول میں لچک اور احترام',
        'آبِ زمزم باحفاظت ساتھ لے جانے کی سہولت',
        'بغیر کسی پوشیدہ اضافی چارجز کے فکسڈ ریٹس',
        'انگریزی، عربی اور اردو بولنے والے ڈرائیورز',
    ];

    const faqs = [
        {
            question: "کیا آپ عمرہ کے لیے بغیر ڈرائیور (سیلف ڈرائیو) گاڑیاں فراہم کرتے ہیں؟",
            answer: "نہیں، حفاظتی نقطہ نظر سے ہماری تمام گاڑیاں لائسنس یافتہ پیشہ ور ڈرائیورز کے ساتھ آتی ہیں۔ ہم بغیر ڈرائیور گاڑیاں (رینٹ اے کار) فراہم نہیں کرتے۔ اس سے آپ کے سفر کی حفاظت اور سعودی ٹریفک قوانین کی پابندی یقینی ہوتی ہے۔ ہمارے ڈرائیورز عمرہ کے راستوں، چیک پوسٹس، اور نماز کے اوقات سے بخوبی واقف ہوتے ہیں۔"
        },
        {
            question: "عمرہ ٹرانسپورٹ سروس میں کیا کیا شامل ہے؟",
            answer: "اس میں پیشہ ور ڈرائیور، گاڑی کا ایندھن، ایئرپورٹ پر استقبال، فلائٹ ٹریکنگ، نماز کے لیے وقفے، اور زمزم کنٹینر لانے کی سہولت شامل ہے۔ تمام گاڑیاں بہترین حالت میں اور فل ایئر کنڈیشنڈ ہوتی ہیں۔ آپ کو راستے میں کچھ بھی اضافی پے نہیں کرنا پڑتا۔"
        },
        {
            question: "مکمل عمرہ پیکیج (جدہ سے مکہ، اور مدینہ) کا کتنا خرچ آتا ہے؟",
            answer: "مکمل عمرہ پیکیج میں جدہ ایئرپورٹ سے مکہ، مکہ سے مدینہ، اور مقامی زیارات شامل ہیں۔ کل خرچ آپ کے گروپ کے سائز اور گاڑی کی قسم پر منحصر ہے۔ مکمل پیکیج کے لیے ہم خاص رعایت دیتے ہیں، اس لیے ایڈوانس بکنگ کا مشورہ دیا جاتا ہے۔"
        },
        {
            question: "کیا ڈرائیور عمرہ یا نماز کے دوران ہمارا انتظار کر سکتا ہے؟",
            answer: "جی ہاں، ڈرائیور آپ کا انتظار کر سکتا ہے۔ 2 گھنٹے سے زیادہ طویل انتظار پر اضافی چارجز لاگو ہو سکتے ہیں۔ عام طور پر طواف اور سعی کے لیے ڈرائیور آپ کو حرم چھوڑ کر عمرہ مکمل ہونے کے بعد واپس لینے آ جاتا ہے تاکہ آپ کا وقت اور پیسہ دونوں بچیں۔"
        },
        {
            question: "کیا ڈرائیورز بین الاقوامی زائرین کے لیے زبانیں جانتے ہیں؟",
            answer: "جی ہاں، ہمارے تمام ڈرائیورز انگریزی اور عربی بول سکتے ہیں۔ ہم خاص طور پر پاکستانی اور ہندوستانی زائرین کی سہولت کے لیے اردو اور ہندی بولنے والے ڈرائیورز کا بھی بندوبست کرتے ہیں۔ ڈرائیورز راستوں اور عمرہ کی بنیادی گائیڈنس میں آپ کی مدد کر سکتے ہیں۔"
        },
        {
            question: "کیا ٹیکسی سروس رمضان اور حج کے سیزن میں 24/7 دستیاب ہوتی ہے؟",
            answer: "جی ہاں، ہماری ٹیکسی سروس سارا سال 24/7 چلتی ہے، بشمول رمضان اور حج کے انتہائی مصروف سیزن میں۔ تا ہم رش کے دنوں میں ہم سختی سے ایڈوانس بکنگ (کم از کم 48-72 گھنٹے پہلے) کا مشورہ دیتے ہیں۔ پری-بکڈ کسٹمرز کو ہمیشہ ترجیح دی جاتی ہے۔"
        },
        {
            question: "کیا میں عمرہ کے دوران کئی دنوں کے لیے ڈرائیور بمعہ گاڑی بک کر سکتا ہوں؟",
            answer: "جی ہاں، کئی دن کے لیے ڈرائیور بک کرنے کی سہولت موجود ہے۔ عام پیکیجز میں 3 دن کا مکہ ٹرپ، یا 5 دن کا مکہ اور مدینہ کا ٹرپ شامل ہے۔ اپنی مرضی کا پیکیج بنوانے کے لیے ہماری ہیلپ لائن پر رابطہ کریں۔ ہم آپ کی سہولت کے مطابق پیکیج کسٹمائز کر دیں گے۔"
        },
        {
            question: "اگر میری ایئرپورٹ آنے والی فلائٹ لیٹ ہو جائے تو کیا ہوگا؟",
            answer: "ہماری ایئرپورٹ پک اپ سروس میں فری فلائٹ ٹریکنگ شامل ہے۔ ڈرائیور آپ کی فلائٹ کا اسٹیٹس خود مانیٹر کرتا ہے اور اسی کے مطابق پک اپ ٹائم ایڈجسٹ کرتا ہے۔ 3 گھنٹے تک کی تاخیر پر کوئی اضافی چارجز نہیں ہوتے۔"
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Umrah Transport Service with Driver (Urdu)",
        "serviceType": "Umrah Transport",
        "areaServed": [
            { "@type": "City", "name": "Makkah" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "Jeddah" }
        ],
        "description": "مکمل عمرہ ٹرانسپورٹ سروس پیشہ ور ڈرائیورز کے ساتھ۔ جدہ ایئرپورٹ سے مکہ، مکہ سے مدینہ، اور مقامی زیارات۔ تمام گاڑیوں کے ساتھ ڈرائیور شامل ہیں۔",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-emerald-950 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-urdu border-b border-emerald-900/50">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-right">
                    <div className="mb-12">
                        <span className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-100 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6 shadow-lg shadow-emerald-500/10">
                            مکمل عمرہ ٹرانسپورٹ
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
                            عمرہ ٹرانسپورٹ سروس<br />
                            <span className="text-emerald-400">پیشہ ور ڈرائیورز کے ساتھ</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 font-light text-right">
                            آپ کے مبارک عمرہ سفر کے لیے مکمل ٹرانسپورٹ سلوشن۔ جدہ ایئرپورٹ آمد سے لے کر مکہ، مدینہ، اور تمام مقدس مقامات کی زیارات تک۔ ہماری تمام گاڑیوں کے ساتھ لائسنس یافتہ، بااخلاق ڈرائیورز شامل ہوتے ہیں۔
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href="/ur/booking?service=umrah-transport">
                                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all transform hover:scale-105 group border border-emerald-100/20">
                                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                                    عمرہ کی سواری کوٹیشن حاصل کریں
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Umrah Routes Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-wider mb-2 block">سفری روٹس</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">عمرہ کے سفر کی مکمل کوریج</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            آپ کے عمرہ کے سفر کے ہر مرحلے کے لیے ڈرائیور کے ساتھ ہماری پروفیشنل ٹیکسی سروس موجود ہے۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {umrahRoutes.map((route, index) => (
                            <Link key={index} href={route.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-500 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10 group-hover:bg-emerald-200/50 transition-colors"></div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-14 h-14 bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <route.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1 text-right">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                                {route.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3 justify-start flex-row-reverse">
                                                <span className="flex items-center gap-1">
                                                    <Navigation className="w-4 h-4 text-emerald-600" />
                                                    {route.distance}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4 text-emerald-600" />
                                                    {route.duration}
                                                </span>
                                                <span className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                                                    <DollarSign className="w-4 h-4" />
                                                    {route.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-right">{route.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-wider mb-2 block">ہمارا فلیٹ</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">پیشہ ور ڈرائیورز کے ساتھ گاڑیاں</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            ہماری تمام گاڑیوں کے ساتھ بااخلاق اور ماہر ڈرائیورز شامل ہیں۔ آپ کو خود ڈرائیو کرنے کی جھنجھٹ نہیں لینی۔
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-emerald-100 shadow-sm hover:shadow-lg transition-all">
                                <Car className="w-12 h-12 text-emerald-900 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 justify-start flex-row-reverse text-left">
                                        <Users className="w-5 h-5 text-emerald-500" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 justify-start flex-row-reverse text-left">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 mb-4">
                                    <p className="text-sm text-gray-500 mb-3 text-right">
                                        <strong className="text-gray-900 font-bold">بہترین انتخاب برائے:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    {vehicle.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 text-right justify-start flex-row-reverse text-left">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-urdu text-right">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-wider mb-2 block">ہماری خصوصیات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">ہماری عمرہ سروس ہی کیوں چنیں؟</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-800 font-semibold leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 font-urdu text-right">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-900 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">سوالات و جوابات</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 underline decoration-emerald-500/30">اکثر پوچھے جانے والے سوالات</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:border-emerald-200 transition-colors">
                                <AccordionTrigger className="text-left hover:no-underline py-4 flex-row-reverse text-right">
                                    <h3 className="text-lg font-bold text-gray-900 flex-1 text-right pl-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2 text-right">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-950 font-urdu border-t-4 border-emerald-500">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        اپنی بہترین عمرہ سواری کوٹیشن حاصل کریں
                    </h2>
                    <p className="text-lg text-emerald-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        پیشہ ور ڈرائیورز، فکسڈ ریٹس، اور آپ کے پورے عمرہ کے سفر کے لیے 24/7 سروس۔ ایئرپورٹ پر آمد سے لے کر واپسی کی روانگی تک ہم آپ کے ہمراہ ہیں۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ur/booking?service=umrah-transport">
                            <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-black text-lg px-10 py-6 h-auto min-w-[200px] rounded-full shadow-xl">
                                کوٹیشن حاصل کریں
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
