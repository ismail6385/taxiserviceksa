"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, Star, CheckCircle2, Users, Car, ArrowRight, Camera, Calendar, Sparkles, Info, Wallet, Globe, Accessibility, Landmark } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import JsonLdFAQ from '@/components/JsonLdFAQ';
import TrustedTransportNetwork from '@/components/seo/TrustedTransportNetwork';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import HowItWorks from '@/components/HowItWorks';
import GlobalTrust from '@/components/GlobalTrust';
import TLDRSummary from '@/components/seo/TLDRSummary';
import FreshnessStatus from '@/components/seo/FreshnessStatus';

export default function HomeClientUrdu() {

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        "name": "Taxi Service KSA",
        "url": "https://taxiserviceksa.com",
        "logo": "https://taxiserviceksa.com/logo.png",
        "image": "https://taxiserviceksa.com/hero-image.jpg",
        "description": "Taxi Service KSA سعودی عرب میں وی آئی پی پرائیویٹ ٹرانسپورٹ اور شوفیر سروس کی معروف ترین کمپنی ہے۔ عمرہ ٹرانسپورٹ، انٹرسٹی سفر اور بارڈر کراسنگ میں مہارت رکھتے ہیں۔ محمد اسماعیل، سعودی ٹریول لاجسٹکس اور ٹیکنیکل SEO کے ماہر، اس کے بانی ہیں۔",
        "brand": { "@type": "Brand", "name": "Taxi Service KSA" },
        "founder": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "بانی و ٹریول لاجسٹکس ایکسپرٹ",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail",
            "sameAs": [
                "https://www.linkedin.com/in/muhammad-ismail-sqa/",
                "https://www.facebook.com/profile.php?id=100007701130236"
            ]
        },
        "areaServed": "Saudi Arabia and GCC border regions",
        "availableLanguage": ["English", "Arabic", "Urdu"],
        "priceRange": "$$$",
        "serviceType": "VIP Chauffeur and Premium Private Transport",
        "knowsAbout": ["Umrah", "Haramain High Speed Railway", "Border Crossings", "GCC Tourism", "King Abdulaziz International Airport", "Executive Travel", "Intercity Transport"],
        "sameAs": [
            "https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/",
            "https://www.linkedin.com/company/taxi-service-ksa/",
            "https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw",
            "https://twitter.com/TaxiServiceKSA",
            "https://www.instagram.com/taxiserviceksa/"
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": { "@type": "EntryPoint", "urlTemplate": "https://taxiserviceksa.com/booking/" },
            "result": { "@type": "Reservation", "name": "ٹیکسی کوٹیشن" }
        }
    };

    const heroImages = [
        '/makkah-kaaba-night.webp',
        '/madinah-prophets-mosque.webp',
        '/jeddah-corniche-sunset.webp',
        '/taif-mountains-view.webp',
        '/alula-hegra-tombs.webp',
    ];

    const services = [
        {
            title: "عمرہ ٹرانسپورٹ سروس",
            description: "جدہ ایئرپورٹ سے مکہ، مکہ سے مدینہ اور مقامی زیارات تک۔ نماز کے اوقات کا خیال رکھنے والے پیشہ ور ڈرائیورز، زمزم لانے کی سہولت کے ساتھ۔",
            icon: Sparkles,
            link: "/ur/services/umrah-transport/",
            price: "فکسڈ ریٹس"
        },
        {
            title: "ایئرپورٹ ٹرانسفر",
            description: "جدہ (JED)، مدینہ اور دیگر ایئرپورٹس پر فری فلائٹ ٹریکنگ اور میٹ اینڈ گریٹ سروس کے ساتھ 24/7 استقبال۔",
            icon: Plane,
            link: "/ur/services/airport-transfers/",
            price: "فکسڈ ریٹس"
        },
        {
            title: "کارپوریٹ اینڈ بزنس ٹریول",
            description: "کمپنیوں اور ایگزیکٹوز کے لیے قابلِ اعتماد شیڈولڈ ٹرانسپورٹ۔ انوائسنگ اور ماہانہ بلنگ کی سہولت دستیاب۔",
            icon: Building2,
            link: "/ur/services/corporate-travel/",
            price: "کارپوریٹ ریٹس"
        },
        {
            title: "انٹرسٹی ٹرانسپورٹ",
            description: "سعودی عرب کے بڑے شہروں کے درمیان آرام دہ لمبے سفر — جدہ، مکہ، مدینہ، ریاض اور طائف کو ملانے والے فکسڈ پرائس روٹس۔",
            icon: MapPin,
            link: "/ur/services/intercity/",
            price: "فکسڈ ریٹس"
        },
        {
            title: "ہیریٹیج اینڈ زیارت ٹورز",
            description: "مدینہ کی تاریخی مساجد، احد پہاڑ اور دیگر زیارات کے مقامات کی سیر — ماہر ڈرائیورز کی رہنمائی کے ساتھ۔",
            icon: Landmark,
            link: "/ur/services/heritage-tours/",
            price: "ٹور پیکج"
        },
        {
            title: "ویل چیئر فرینڈلی ٹیکسی",
            description: "بزرگ اور معذور مسافروں کے لیے خصوصی طور پر تیار کردہ گاڑیاں، تربیت یافتہ اور نرم مزاج ڈرائیورز کے ساتھ۔",
            icon: Accessibility,
            link: "/ur/services/wheelchair-taxi/",
            price: "معاون سروس"
        },
    ];

    const fleet = [
        { name: "جی ایم سی یوکون (GMC Yukon)", image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp", passengers: 7, luggage: 5, features: ["وی آئی پی ایگزیکٹو ایس یو وی", "اضافی لیگ روم", "لگژری کیبن"], link: "/fleet/gmc-yukon/" },
        { name: "مرسیڈیز ایس کلاس (Mercedes S-Class)", image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp", passengers: 3, luggage: 2, features: ["وی آئی پی تجربہ", "لگژری لیدر کیبن", "پرائیویٹ سروس"], link: "/fleet/mercedes-s-class/" },
        { name: "کیڈیلک ایسکیلیڈ (Cadillac Escalade)", image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp", passengers: 7, luggage: 4, features: ["پریمیم ساؤنڈ سسٹم", "اضافی آرام", "وی آئی پی شوفیر"], link: "/fleet/cadillac-escalade/" },
        { name: "ٹویوٹا ہائس (Toyota Hiace)", image: "/toyota-hiace.webp", passengers: 11, luggage: 16, features: ["گروپ ٹرانسپورٹ", "زائرین کے لیے موزوں", "بڑی گنجائش"], link: "/fleet/toyota-hiace/" },
        { name: "ہنڈائی ستاریا (Hyundai Staria)", image: "/hyundai-staria.webp", passengers: 7, luggage: 4, features: ["وی آئی پی فیملی وین", "کشادہ کیبن", "گروپس کے لیے بہترین"], link: "/fleet/hyundai-staria/" },
        { name: "ٹویوٹا کیمری (Toyota Camry)", image: "/toyota-camry.webp", passengers: 4, luggage: 2, features: ["پیشہ ور ڈرائیور", "ایئر کنڈیشنڈ", "موثر سفر"], link: "/fleet/toyota-camry/" },
        { name: "ہنڈائی سٹاریکس (Hyundai Starex)", image: "/hyundai-starex.webp", passengers: 7, luggage: 10, features: ["فیملی کے لیے موزوں", "پیشہ ور ڈرائیور", "ایئرپورٹ ماہر"], link: "/fleet/hyundai-starex/" },
        { name: "مرسیڈیز سپرنٹر (Mercedes Sprinter)", image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp", passengers: 14, luggage: 4, features: ["کسٹم انٹیریئر", "اونچی چھت", "کارپوریٹ سفر"], link: "/fleet/mercedes-sprinter/" },
        { name: "ٹویوٹا کوسٹر (Toyota Coaster)", image: "/toyota-coaster.webp", passengers: 17, luggage: 20, features: ["گروپ بس", "وفود کی ٹرانسپورٹ", "بڑے گروپس"], link: "/fleet/toyota-coaster/" },
        { name: "لگژری بس", image: "/fleet/luxurious-bus.webp", passengers: 25, luggage: 30, features: ["آرام دہ نشستیں", "بڑے گروپس", "ایگزیکٹو سیٹنگ"], link: "/fleet/luxurious-bus/" },
    ];

    const quickLinks = [
        { title: "جدہ ایئرپورٹ تا مکہ ٹیکسی", desc: "کنگ عبدالعزیز ایئرپورٹ سے مکہ ہوٹلز تک 24/7 ٹرانسفر۔", link: "/ur/jeddah-airport-to-makkah-taxi/" },
        { title: "مدینہ تا مکہ ٹیکسی", desc: "دونوں مقدس شہروں کے درمیان آرام دہ سفر۔", link: "/ur/madinah-to-makkah-taxi/" },
        { title: "مکہ تا مدینہ ٹیکسی", desc: "نماز اور آرام کے وقفوں کے ساتھ سفر۔", link: "/ur/makkah-to-madinah-taxi/" },
        { title: "مدینہ ایئرپورٹ ٹیکسی", desc: "پرنس محمد بن عبدالعزیز ایئرپورٹ سے ہوٹل تک۔", link: "/ur/madinah-airport-taxi/" },
        { title: "مکہ ٹرین اسٹیشن ٹیکسی", desc: "حرمین ہائی اسپیڈ ریلوے اسٹیشن سے ہوٹل تک۔", link: "/ur/makkah-train-station-taxi/" },
        { title: "جدہ سٹی ٹیکسی سروس", desc: "جدہ شہر اور کورنیش کے لیے پرائیویٹ ڈرائیور۔", link: "/ur/services/taxi-in-jeddah/" },
        { title: "مکہ سٹی ٹیکسی سروس", desc: "ہوٹل سے حرم تک 24/7 ڈائریکٹ سروس۔", link: "/ur/services/taxi-in-makkah/" },
        { title: "تبوک ٹیکسی سروس", desc: "تبوک شہر اور نیوم کے راستوں کے لیے۔", link: "/ur/services/taxi-in-tabuk/" },
    ];

    const topRoutes = [
        { title: "جدہ ایئرپورٹ تا مکہ", desc: "عمرہ زائرین کے لیے سب سے تیز ایئرپورٹ ٹرانسفر۔ 80 کلومیٹر کا براہ راست سفر۔", link: "/routes/jeddah-makkah/" },
        { title: "مکہ تا مدینہ", desc: "دونوں حرمین کے درمیان 450 کلومیٹر کا تاریخی روٹ۔", link: "/routes/makkah-madinah/" },
        { title: "مدینہ تا جدہ ایئرپورٹ", desc: "مدینہ ہوٹلز سے کنگ عبدالعزیز ایئرپورٹ واپسی کے لیے بہترین۔", link: "/routes/madinah-jeddah/" },
        { title: "ریاض تا جدہ", desc: "دارالحکومت سے ساحلی شہر تک ایگزیکٹو انٹرسٹی سفر۔", link: "/routes/riyadh-jeddah/" },
        { title: "جدہ تا طائف", desc: "شہرِ گلاب اور سروات پہاڑوں کا خوبصورت نظاروں والا سفر۔", link: "/routes/jeddah-taif/" },
    ];

    const guides = [
        { title: "عمرہ طواف گائیڈ", link: "/ur/guides/umrah-tawaf-guide/" },
        { title: "مسجد نبوی کے دروازے", link: "/ur/guides/haram-gates-access/" },
        { title: "سات مساجد (مدینہ)", link: "/ur/guides/seven-mosques/" },
        { title: "احد پہاڑ کی تاریخ", link: "/ur/guides/uhud-history/" },
        { title: "مسجد قباء واکنگ پاتھ", link: "/ur/guides/quba-walking-path/" },
        { title: "مدینہ میں نماز کے اوقات", link: "/ur/guides/madinah-prayer-times/" },
        { title: "مکہ شاپنگ گائیڈ", link: "/ur/guides/makkah-shopping/" },
        { title: "سعودی عرب کرنسی گائیڈ", link: "/ur/guides/currency/" },
    ];

    const serviceAreas = [
        { name: "جدہ", role: "مکہ مکرمہ کا داخلی دروازہ", link: "/ur/locations/jeddah/" },
        { name: "مکہ مکرمہ", role: "مقدس شہر اور عمرہ کا مرکز", link: "/ur/locations/makkah/" },
        { name: "مدینہ منورہ", role: "روضہ رسول ﷺ کا شہر", link: "/ur/locations/madinah/" },
        { name: "ریاض", role: "اقتصادی دارالحکومت", link: "/ur/locations/riyadh/" },
        { name: "دمام", role: "مشرقی علاقہ اور خلیجی بارڈر ہب", link: "/ur/locations/dammam/" },
        { name: "طائف", role: "شہرِ گلاب", link: "/ur/locations/taif/" },
        { name: "العلا", role: "قدیم تاریخی ورثہ", link: "/ur/locations/alula/" },
        { name: "ینبع", role: "صنعتی مرکز", link: "/ur/locations/yanbu/" },
    ];

    const faqs = [
        {
            question: "کیا سعودی عرب میں آپ کی ٹیکسی سروس جدہ سے مکہ کے لیے دستیاب ہے؟",
            answer: "جی ہاں، ہماری ایئرپورٹ ٹیکسی سروس کنگ عبدالعزیز انٹرنیشنل ایئرپورٹ (JED) سے مکہ کے ہوٹلز تک 24/7 چلتی ہے۔ عام پیلی ٹیکسیوں کے برعکس، ہم فکسڈ اور پہلے سے طے شدہ ریٹس دیتے ہیں، کوئی چھپا میٹر نہیں۔ ڈرائیور ارائیول ہال میں آپ کا استقبال کرتا ہے اور فلائٹ ٹریکنگ کے ذریعے تاخیر پر بھی نظر رکھتا ہے۔"
        },
        {
            question: "کیا آپ کے ڈرائیورز اردو یا ہندی بول سکتے ہیں؟",
            answer: "جی ہاں، ہمارے تمام ڈرائیورز انگریزی اور عربی بول سکتے ہیں، اور خاص طور پر پاکستانی و ہندوستانی زائرین کی سہولت کے لیے ہم اردو اور ہندی بولنے والے ڈرائیورز کا بندوبست بھی کرتے ہیں۔ بکنگ کے وقت اپنی زبان کی ترجیح بتا دیں۔"
        },
        {
            question: "عمرہ کے سفر کے لیے کون سی گاڑی بہترین رہے گی؟",
            answer: "اکیلے مسافر یا جوڑوں کے لیے ٹویوٹا کیمری مناسب ہے۔ فیملی بمعہ سامان کے لیے جی ایم سی یوکون یا ہنڈائی ستاریا بہترین انتخاب ہیں۔ بڑے گروپس کے لیے ٹویوٹا ہائس یا کوسٹر بس دستیاب ہے، جس میں زمزم کے کنٹینرز کے لیے بھی اضافی جگہ ہوتی ہے۔"
        },
        {
            question: "کیا ٹیکسی سروس رمضان اور حج کے سیزن میں دستیاب ہوتی ہے؟",
            answer: "جی ہاں، ہماری سروس سارا سال 24/7 چلتی ہے، بشمول رمضان اور حج کے مصروف ترین دنوں میں۔ رش کے موقع پر کم از کم 48-72 گھنٹے پہلے ایڈوانس بکنگ کا مشورہ دیا جاتا ہے۔"
        },
        {
            question: "میں واٹس ایپ پر بکنگ کیسے کر سکتا ہوں؟",
            answer: "آپ سیدھا ہمارے واٹس ایپ نمبر پر پک اپ لوکیشن، منزل اور گاڑی کی قسم بھیج کر کوٹیشن حاصل کر سکتے ہیں۔ اس کے علاوہ ویب سائٹ پر موجود آن لائن بکنگ فارم بھی استعمال کیا جا سکتا ہے۔"
        },
        {
            question: "کیا آپ بین الاقوامی کریڈٹ کارڈز قبول کرتے ہیں؟",
            answer: "جی ہاں، ہم ویزا اور ماسٹرکارڈ سمیت بین الاقوامی کریڈٹ کارڈز قبول کرتے ہیں، ساتھ ہی سعودی ریال، امریکی ڈالر اور برطانوی پاؤنڈ میں نقد ادائیگی کی سہولت بھی موجود ہے۔"
        },
        {
            question: "کیا Taxi Service KSA ایک لائسنس یافتہ کمپنی ہے؟",
            answer: "جی ہاں، Taxi Service KSA سعودی عرب میں مکمل طور پر لائسنس یافتہ ٹرانسپورٹ فیسیلیٹیشن کمپنی ہے اور جنرل اتھارٹی فار ٹرانسپورٹ (TGA) کے ضوابط کے تحت کام کرتی ہے۔ تمام ڈرائیورز کے پاس درست لائسنس ہوتا ہے۔"
        },
    ];

    return (
        <div className="bg-white min-h-screen rtl font-urdu" dir="rtl">
            <Script id="transportation-schema-ur" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={heroImages}
                h1Text="سعودی عرب میں وی آئی پی ٹیکسی سروس"
                subtitle="مکہ، مدینہ، جدہ، ریاض اور خلیجی ممالک (یو اے ای، بحرین، قطر، کویت، عمان) میں بارڈر کراسنگ، ایئرپورٹ ٹرانسفر اور انٹرسٹی سفر کے لیے پیشہ ور شوفیر سروس۔"
            />

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="2026-08-10" />
                    <TLDRSummary
                        title="Taxi Service KSA کا مختصر تعارف"
                        summary="Taxi Service KSA سعودی عرب میں 2012 سے قائم ایگزیکٹو شوفیر اور پرائیویٹ ٹرانسپورٹ کی معروف کمپنی ہے۔ ہم عمرہ ٹرانسپورٹ، انٹرسٹی سفر، ایئرپورٹ ٹرانسفر اور پورے ملک میں ٹور سروسز فراہم کرتے ہیں۔"
                        points={[
                            "سعودی عرب بھر میں مکمل کوریج: تمام شہر، بارڈرز اور سیاحتی مقامات",
                            "100% لائسنس یافتہ اور تربیت یافتہ ڈرائیورز",
                            "عمرہ، بزنس اور فیملی سفر کے لیے پریمیم فلیٹ",
                            "کوئی چھپے چارجز نہیں — فکسڈ پرائس گارنٹی",
                            "24/7 سروس: مکہ، مدینہ، ریاض، جدہ، العلا اور دیگر شہر"
                        ]}
                        pricing="فکسڈ ریٹس"
                        duration="24/7 سروس"
                    />
                </div>
            </section>

            <GlobalTrust />

            <div className="bg-emerald-600 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-white text-emerald-700 text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">نئی رپورٹ</span>
                        <p className="text-sm sm:text-base font-medium">
                            <span className="font-bold">2026 اسٹڈی:</span> 70% فیملیز ہائی اسپیڈ ٹرین کی بجائے ٹیکسی کیوں چنتی ہیں؟
                        </p>
                    </div>
                    <Link href="/insights/pilgrimage-transport-report-2026/" className="flex-shrink-0">
                        <button className="text-white border-b border-white hover:border-emerald-200 hover:text-emerald-100 transition-colors text-sm font-bold flex items-center gap-1 group">
                            ڈیٹا دیکھیں <ArrowRight className="w-4 h-4 rotate-180 transform group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1120]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <Shield className="w-3 h-3" />
                                <span>سیفٹی سب سے پہلے</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                پرائیویٹ وی آئی پی ٹرانسپورٹ <span className="text-primary block mt-2">اور ایگزیکٹو شوفیر سروس</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                سعودی عرب کی نمبر ون پرائیویٹ ٹرانسپورٹ سروس کے ساتھ سفر کا اعلیٰ ترین معیار۔ ہم بین الاقوامی زائرین اور کاروباری حضرات کے لیے قابلِ اعتماد سروس فراہم کرتے ہیں، خاص طور پر <strong>بارڈر کراسنگ، ایئرپورٹ ٹرانسفر اور عمرہ ٹرانسپورٹ</strong> میں۔ ہم صرف پہلے سے بک شدہ لمبے سفر پر توجہ دیتے ہیں، لوکل اسٹریٹ پک اپ فراہم نہیں کرتے۔
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/booking/">
                                    <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary font-bold transition-all shadow-lg shadow-primary/20">
                                        آن لائن واٹس ایپ بکنگ
                                    </Button>
                                </Link>
                                <a href="https://wa.me/966563573531?text=Assalam-o-Alaikum%2C%20mujhe%20VIP%20taxi%20ki%20quotation%20chahiye" target="_blank" rel="nofollow noopener noreferrer">
                                    <Button size="lg" className="bg-emerald-600 border-none text-white hover:bg-emerald-700 font-bold transition-all shadow-lg flex items-center gap-2 h-14 px-8 rounded-2xl">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        واٹس ایپ پر کوٹیشن حاصل کریں
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/chauffeur-service.png"
                                    alt="سعودی عرب میں بہترین آن لائن ٹیکسی سروس - ڈرائیور گاڑی کا دروازہ کھول رہا ہے"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">لائسنس یافتہ ڈرائیورز</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">سیلف ڈرائیو رینٹ اے کار نہیں</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">صرف شوفیر سروس</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs px-3 py-1 rounded-full mb-4 inline-block shadow-md shadow-primary/30">
                                ہماری خدمات
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[0.9]">
                                بہترین <br />پرائیویٹ<br />ٹرانسپورٹ سروسز
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                لمبے سفر، وی آئی پی ایئرپورٹ استقبال اور عمرہ زائرین کے لیے مخصوص ٹرانسپورٹ سروسز میں مہارت۔
                            </p>
                            <a href="https://wa.me/966563573531?text=Assalam-o-Alaikum%2C%20mujhe%20VIP%20taxi%20ki%20quotation%20chahiye" target="_blank" rel="nofollow noopener noreferrer">
                                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-8 py-6 text-lg font-bold min-h-[48px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 flex items-center gap-2">
                                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                                    واٹس ایپ پر کوٹیشن حاصل کریں
                                </Button>
                            </a>
                        </div>
                        <div className="lg:col-span-7 space-y-0">
                            {services.map((service, index) => (
                                <div key={index} className="group relative border-r-4 border-gray-200 hover:border-black pr-8 py-8 transition-colors duration-300">
                                    <Link href={service.link} className="block">
                                        <div className="flex items-baseline justify-between mb-2">
                                            <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <ArrowRight className="w-6 h-6 transform rotate-[225deg] group-hover:rotate-180 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl group-hover:text-gray-900 transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black">
                                            <span>{service.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TrustedTransportNetwork />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">وی آئی پی معیار</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Taxi Service KSA <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">کیوں چنیں؟</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "100% لائسنس یافتہ", desc: "وزارتِ ٹرانسپورٹ اور جنرل اتھارٹی فار ٹرانسپورٹ (TGA) کے پاس رجسٹرڈ، آپ کی مکمل حفاظت کی ضمانت۔" },
                            { icon: Clock, title: "وقت پر پہنچنا", desc: "کوئی تاخیر نہیں۔ ہمارا ڈرائیور آپ کی فلائٹ لینڈنگ سے 15 منٹ پہلے ایئرپورٹ پہنچ جاتا ہے۔" },
                            { icon: Users, title: "پیشہ ور ڈرائیورز", desc: "انگریزی بولنے والے، تربیت یافتہ اور مہمان نوازی کے اعلیٰ معیار پر پورا اترنے والے ڈرائیورز۔" },
                            { icon: Wallet, title: "فکسڈ قیمت", desc: "جو قیمت آپ دیکھتے ہیں وہی ادا کرتے ہیں۔ کوئی چھپا ٹیکس، پارکنگ فیس یا اضافی چارجز نہیں۔" }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <HowItWorks title={<>واٹس ایپ پر <span className="text-[#FFC107]">صرف 3 آسان مراحل</span> میں ٹیکسی بک کریں</>} />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-10 aspect-[4/5]">
                                <Image
                                    src="/gmc-yukon.webp"
                                    alt="Taxi Service KSA کا وی آئی پی ٹرانسپورٹ فلیٹ"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-0.5 bg-primary"></div>
                                        <span className="text-xs font-bold uppercase tracking-[0.3em]">پورے ملک میں</span>
                                    </div>
                                    <h3 className="text-2xl font-black italic">2014 سے قائم</h3>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden sm:block">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">10+ سال</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">مارکیٹ میں تجربہ</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full"></div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">50,000+</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">مکمل سفر</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest mb-6">
                                    <Info className="w-4 h-4 text-primary" /> ہماری کہانی
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                                    آپ کا دروازہ <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">وی آئی پی لگژری سفر کی طرف</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    سعودی عرب کے دل میں، <strong>Taxi Service KSA</strong> ایک سادہ مقصد کے ساتھ شروع ہوئی: حج، عمرہ اور بزنس سفر کے تجربے کو نئے سرے سے متعین کرنا۔ عام پبلک ٹرانسپورٹ کی غیر یقینی صورتحال سے ہٹ کر ہم دروازے سے دروازے تک لگژری سروس کی ضمانت دیتے ہیں۔
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" /> سرکاری منظور شدہ
                                    </h4>
                                    <p className="text-sm text-gray-500">وزارتِ ٹرانسپورٹ اور TGA سے مکمل لائسنس یافتہ آپریشن۔</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Wallet className="w-4 h-4 text-primary" /> ٹیکس کمپلائنٹ
                                    </h4>
                                    <p className="text-sm text-gray-500">ZATCA سے منظور شدہ مکمل VAT انوائسنگ تمام کارپوریٹ بکنگز کے لیے دستیاب۔</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <a href="https://wa.me/966563573531?text=Assalam-o-Alaikum%2C%20mujhe%20VIP%20taxi%20ki%20quotation%20chahiye" target="_blank" rel="nofollow noopener noreferrer" className="w-full sm:w-auto">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20 flex items-center gap-3">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        واٹس ایپ پر کوٹیشن حاصل کریں
                                    </Button>
                                </a>
                                <Link href="/booking/" className="w-full sm:w-auto">
                                    <Button className="w-full bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 border-2 border-slate-900 px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95">
                                        آن لائن فارم استعمال کریں <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block shadow-md shadow-primary/30">ہمارا فلیٹ</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            بہترین وی آئی پی فلیٹ رینج
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            ہمارے فلیٹ میں GMC یوکون، ٹویوٹا کیمری، ہنڈائی ستاریا اور ٹویوٹا ہائس شامل ہیں، جو ایگزیکٹو معیار کے مطابق مکمل مینٹین کی جاتی ہیں۔
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {fleet.map((vehicle, index) => (
                            <div key={index} className="block group h-full">
                                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-200 group-hover:border-primary/50 flex flex-col">
                                    <Link href={vehicle.link} className="block">
                                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                            <Image
                                                src={vehicle.image}
                                                alt={`${vehicle.name} - سعودی عرب میں قابل اعتماد ٹیکسی سروس`}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                        </div>
                                    </Link>
                                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                                        <Link href={vehicle.link}>
                                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary transition-colors transform rotate-180 group-hover:-translate-x-1" />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-gray-600 text-sm sm:text-base">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.passengers} مسافر</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.luggage} بیگ</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 sm:space-y-2 mb-4 flex-1">
                                            {vehicle.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mt-auto">
                                            <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name.replace(/\s+/g, '-'))}`} className="w-full">
                                                <Button className="w-full bg-primary text-white hover:bg-blue-600 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-primary/20 text-xs"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> واٹس ایپ بکنگ</Button>
                                            </Link>
                                            <a
                                                href={`https://wa.me/966563573531?text=${encodeURIComponent(`Assalam-o-Alaikum, mujhe ${vehicle.name} ki VIP quotation chahiye.`)}`}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                className="w-full"
                                            >
                                                <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/20 text-xs gap-1.5 px-1">
                                                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                                                    واٹس ایپ
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">نمایاں سروسز</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">ایئرپورٹ اور شہری ٹرانسپورٹ</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((item, idx) => (
                            <Link key={idx} href={item.link} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                </div>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">ایگزیکٹو ہب</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">مشہور ترین وی آئی پی روٹس</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topRoutes.map((route, idx) => (
                            <Link key={idx} href={route.link} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{route.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                </div>
                                <p className="text-sm text-gray-500">{route.desc}</p>
                            </Link>
                        ))}
                        <Link href="/routes/" className="group p-6 bg-primary text-white rounded-2xl border border-primary hover:bg-black transition-all shadow-lg flex items-center justify-center font-bold">
                            تمام روٹس دیکھیں (+50) ←
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">سعودی عرب سے باہر</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">خلیجی ممالک اور بارڈر کراسنگ روٹس</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                            سعودی عرب اور پڑوسی خلیجی ممالک (یو اے ای، بحرین، قطر، کویت) کے درمیان لائسنس یافتہ ایگزیکٹو ٹرانسپورٹ — بارڈر کراسنگ کے تمام کاغذات ہماری ذمہ داری۔
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/routes/dammam-bahrain/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">دمام تا بحرین</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">کنگ فہد کاز وے کے راستے، تمام کاغذی کارروائی میں مدد کے ساتھ۔</p>
                        </Link>
                        <Link href="/routes/riyadh-dubai/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">ریاض تا دبئی</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">یو اے ای کے لیے طویل فاصلے کا ایگزیکٹو سفر۔</p>
                        </Link>
                        <Link href="/routes/riyadh-doha/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">ریاض تا دوحہ</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">قطر کے لیے پرائیویٹ کراس بارڈر ٹرانسپورٹ۔</p>
                        </Link>
                        <Link href="/routes/riyadh-kuwait/" className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors">ریاض تا کویت</h3>
                                <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-400">کویت سٹی تک بین الاقوامی وی آئی پی ٹرانسپورٹ۔</p>
                        </Link>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/border-crossings/">
                            <Button size="lg" className="bg-primary text-black hover:bg-white font-bold px-8 py-6 rounded-xl">
                                تمام بارڈر کراسنگ روٹس دیکھیں <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-4">ٹیکسی سروس کوریج والے شہر</h2>
                            <p className="text-gray-600 max-w-xl">
                                ہماری اعلیٰ درجہ بندی والی سروس جدہ، مکہ، مدینہ، ریاض اور دمام کے علاوہ خلیجی ممالک تک پھیلی ہوئی ہے۔
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {serviceAreas.map((area, index) => (
                            <Link key={index} href={area.link} className="block group">
                                <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-primary/10"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{area.name}</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">{area.role}</p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        روٹس دیکھیں <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">مفید گائیڈز</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">زائرین کے لیے ضروری معلومات</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {guides.map((g, idx) => (
                            <Link key={idx} href={g.link} className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary hover:bg-white transition-all shadow-sm flex items-center justify-between">
                                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">{g.title}</span>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            سب سے زیادہ ریٹیڈ کسٹمر ریویوز
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            مسافر <strong>Taxi Service KSA</strong> کو ایک قابل اعتماد اور پیشہ ور ٹرانسپورٹ سروس کے طور پر جانتے ہیں۔
                        </p>
                    </div>
                    <div className="mb-12 flex justify-center">
                        <div
                            className="trustpilot-widget w-full max-w-4xl"
                            data-locale="en-US"
                            data-template-id="56278e9abfbbba0bdcd568bc"
                            data-businessunit-id="69590063ca6f6aed3292cfb9"
                            data-style-height="52px"
                            data-style-width="100%"
                            data-token="fab9a024-f184-45ab-904b-1cf6f5e9b94a"
                        >
                            <a href="https://www.trustpilot.com/review/taxiserviceksa.com" target="_blank" rel="nofollow noopener noreferrer">
                                Trustpilot
                            </a>
                        </div>
                    </div>
                    <div className="mb-12">
                        <ReviewsDisplay limit={3} />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                        <Link href="/submit-review/">
                            <Button size="lg" className="w-full lg:w-auto bg-black text-white hover:bg-gray-800 font-bold min-h-[56px] px-8">
                                <Star className="w-5 h-5 ml-2" />
                                اپنا تجربہ شیئر کریں
                            </Button>
                        </Link>
                        <a
                            href="https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="w-full lg:w-auto"
                        >
                            <Button size="lg" className="w-full lg:w-auto bg-[#00b67a] text-white hover:bg-[#00a36c] font-bold min-h-[56px] px-8 border-none">
                                <Star className="w-5 h-5 ml-2 fill-white" />
                                Trustpilot پر ریٹ کریں
                            </Button>
                        </a>
                        <Link href="/ask-question/" className="w-full lg:w-auto">
                            <Button size="lg" variant="outline" className="w-full lg:w-auto border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-colors min-h-[56px] px-8">
                                سوال پوچھیں؟
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-md shadow-primary/30">اکثر پوچھے جانے والے سوالات</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            اکثر پوچھے جانے والے سوالات
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 px-4 sm:px-5 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <AccordionTrigger className="text-right hover:no-underline py-3 sm:py-4">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pl-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-3 sm:pb-4">
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                        بہترین آن لائن ٹیکسی سروس کے ساتھ واٹس ایپ پر بک کریں
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-4 max-w-2xl mx-auto">
                        سعودی عرب کی سب سے زیادہ ریٹیڈ آن لائن ٹیکسی سروس سے ابھی اپنا کوٹیشن حاصل کریں — ایئرپورٹ آمد و رفت کے لیے قابل اعتماد ٹرانسپورٹ۔
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link href="/booking/" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-blue-600 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/40"><WhatsAppIcon className="w-4 h-4 ml-2 fill-current" /> واٹس ایپ پر بکنگ</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95">
                                ای میل کریں
                            </Button>
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> فوری تصدیق</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> فکسڈ قیمت</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> مفت منسوخی</span>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:hidden animate-bounce-subtle">
                <Button
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full bg-slate-900 hover:bg-black text-white h-14 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-2 border border-white/10"
                >
                    <Car className="w-5 h-5 text-primary" /> واٹس ایپ پر بکنگ <ArrowRight className="w-5 h-5 rotate-180" />
                </Button>
            </div>
        </div>
    );
}
