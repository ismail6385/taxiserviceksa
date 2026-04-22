const fs = require('fs');
const path = require('path');

function generateLocationPage(cityName) {
    const slug = cityName.toLowerCase().replace(/[' ]/g, '-');
    const componentName = cityName.replace(/[' -]/g, '');
    
    const img1 = Math.floor(Math.random() * 5) + 1;
    const img2 = Math.floor(Math.random() * 5) + 1;
    const img3 = Math.floor(Math.random() * 5) + 1;

    const template = `import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Shield, CheckCircle2, ArrowRight, Car, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: "VIP Private Transfer & Chauffeur ${cityName} | Taxi Service KSA",
    description: "Premium VIP private transfer and executive chauffeur service in ${cityName}. Professional, reliable intercity transport and airport pickups.",
    keywords: ["${cityName} VIP private transfer", "Executive chauffeur ${cityName}", "${cityName} Airport VIP pickup", "Premium driver ${cityName}"],
    alternates: {
        canonical: "https://taxiserviceksa.com/locations/${slug}/",
    },
    openGraph: {
        title: "${cityName} VIP Transfer & Pickups | Taxi Service KSA",
        description: "Need a premium VIP transfer in ${cityName}? We provide comfortable chauffeured trips and intercity transport.",
        url: "https://taxiserviceksa.com/locations/${slug}/",
        type: "website",
    },
};

export default function ${componentName}LocationPage() {
    const images = [
        '/hero-slide-${img1}.webp',
        '/hero-slide-${img2}.webp',
        '/hero-slide-${img3}.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="${cityName}"
                description="Professional VIP transfers in ${cityName}. Specializing in airport pickups, corporate travel, and comfortable intercity transfers."
                services={[
                    { name: "${cityName} Airport Pickup", description: "VIP meet & greet at the airport with flight tracking." },
                    { name: "Intercity Transfers", description: "Safe, direct transport to major Saudi cities." },
                    { name: "Corporate Travel", description: "Executive chauffeur services for business meetings." }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer & Chauffeur ${cityName}"
                bookingFormTitle="WhatsApp Booking for Premium Transfer in ${cityName}"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service ${cityName}
                    </span>
                }
                subtitle="Premium Executive Transport Excellence"
                location="${cityName} | Intercity Transfers | Airport Pickups"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=${cityName}&dropoff=Selected%20Hotel">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked long-distance and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Professional Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                VIP Transfer Services in ${cityName}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Navigating ${cityName} requires a reliable and comfortable mode of transport. Whether you are traveling for business, visiting family, or heading out for a long-distance intercity journey, our premium fleet is ready to serve you.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We prioritize safety, punctuality, and discretion. Avoid the hassle of public transport or standard ride-hailing apps by pre-booking a dedicated VIP chauffeur.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Service</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Premium Fleet</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current inline-block" /> WhatsApp Booking</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us in ${cityName}?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold"><CheckCircle2 className="w-5 h-5"/></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fixed Pricing</h4>
                                        <p className="text-sm text-gray-500">No meters, no surge prices. Know your exact fare before you travel.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold"><Shield className="w-5 h-5"/></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Verified Chauffeurs</h4>
                                        <p className="text-sm text-gray-500">Experienced, professional drivers with excellent knowledge of Saudi highways.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold"><Car className="w-5 h-5"/></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Spacious SUVs</h4>
                                        <p className="text-sm text-gray-500">Perfect for families or lots of luggage. Comfort is guaranteed.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="${cityName}" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How do I book a transfer from ${cityName}?",
                        shortAnswer: "Via WhatsApp",
                        detailedAnswer: "You can book easily by sending us a message on WhatsApp. We will provide a fixed quote instantly.",
                        perspectives: []
                    },
                    {
                        question: "Are your vehicles air-conditioned?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. All our premium sedans and SUVs feature excellent climate control for your comfort.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a ride late at night?",
                        shortAnswer: "24/7 Available",
                        detailedAnswer: "Yes, our intercity and airport transfer services operate 24 hours a day, 7 days a week.",
                        perspectives: []
                    }
                ]}
            />
        </div >
    );
}`;
    return { slug, template };
}

const cities = [
    "Jizan", "Sakaka", "Arar", "Al Bahah", "Al Majma'ah", "Hofuf", "Khafji", 
    "Qurayyat", "Turaif", "Duba", "Umluj", "Hafar Al Batin", "Rabigh", "Al Lith", 
    "Al Wajh", "Khulais", "Thadiq", "Zulfi", "Dariya", "Al-Qunfudhah", "Bishah", 
    "Mahad al-Dhahab", "Afif", "Dawadmi", "Wadi ad-Dawasir", "Sharurah", 
    "Baljurashi", "Sabya", "Abu Arish", "Samtah", "Unaizah", "Al-Rass", "Al-Kharj", 
    "Al-Muzahmiyya", "Al-Quway'iyah", "Huraymila", "Rumah", "Al-Ghat", "Al-Bukayriyah", 
    "Al-Badai", "Al-Midhnab", "Al-Uyun", "Al-Jafr", "Al-Mubarraz", "Buqayq", 
    "Al-Nairyah", "Tayma", "Al-Bad", "Haql", "Sharma", "Magna", "Al Rais", "Thuwal", 
    "KAEC", "Masturah", "Dhahban", "Qilwah", "Al Makhwah", "Al Namas", "Tanuma", 
    "Bareq", "Al Majardah"
];

const basePath = path.join(__dirname, "..", "app", "(main)", "locations");

for (const city of cities) {
    const { slug, template } = generateLocationPage(city);
    const dirPath = path.join(basePath, slug);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const filePath = path.join(dirPath, "page.tsx");
    fs.writeFileSync(filePath, template, "utf-8");
}

console.log(`Successfully generated ${cities.length} location pages in app/(main)/locations/`);
