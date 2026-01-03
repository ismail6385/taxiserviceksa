import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Sparkles, Shield, User } from 'lucide-react';
import FleetListing from '@/components/FleetListing';
import RelatedServices from '@/components/seo/RelatedServices'; // Assuming this exists or similar

export const metadata: Metadata = {
    title: 'Taxi Fleet Saudi Arabia | GMC Yukon, Hiace, Staria & Camry',
    description: 'Choose from our premium taxi fleet in Saudi Arabia. Luxury GMC Yukon for VIPs, Toyota Hiace for Umrah groups, and Hyundai Staria for families. 2025 Models.',
    keywords: ['taxi fleet saudi arabia', 'gmc yukon tax', 'toyota hiace rental ksa', 'luxury car with driver saudi arabia', 'hyundai staria taxi', 'umrah bus rental', 'camry taxi jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/',
    }
};

export default function FleetPage() {
    const fleet = [
        {
            name: "GMC Yukon",
            type: "Luxury",
            image: "/gmc-yukon.webp",
            passengers: 7,
            luggage: 5,
            features: ["Luxury Interior", "Extra Legroom", "VIP Experience", "Premium Sound System"],
            href: "/fleet/gmc-yukon/"
        },
        {
            name: "Hyundai Staria",
            type: "Luxury",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["Modern Design", "Spacious", "Family Travel", "USB Charging"],
            href: "/fleet/hyundai-staria/"
        },
        {
            name: "Toyota Camry",
            type: "Economy",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "Economic Choice", "City Travel"],
            href: "/fleet/toyota-camry/"
        },
        {
            name: "Hyundai Starex",
            type: "Economy",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport Transfer"],
            href: "/fleet/hyundai-starex/"
        },
        {
            name: "Toyota Hiace",
            type: "Group",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["Group Travel", "Spacious Interior", "Umrah Groups", "Reliable", "2025 Model"],
            href: "/fleet/toyota-hiace/"
        },
        {
            name: "Toyota Coaster",
            type: "Group",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["Large Groups", "Tour Bus", "Corporate Events", "Long Distance"],
            href: "/fleet/toyota-coaster/"
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": fleet.map((vehicle, index) => ({
            "@type": "Car",
            "position": index + 1,
            "name": vehicle.name,
            "image": `https://taxiserviceksa.com${vehicle.image}`,
            "description": `Book ${vehicle.name} (${vehicle.type}) for your travel in Saudi Arabia.`,
            "url": `https://taxiserviceksa.com${vehicle.href}`
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="fleet-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Elegant Dark Header */}
            <div className="relative bg-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-white/10 mb-6">
                        <Sparkles className="w-3 h-3" /> The Gold Standard
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Luxury Taxi Fleet in Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Experience diverse transport options. From the executive <Link href="/fleet/gmc-yukon/" className="text-white hover:text-primary font-semibold underline decoration-primary/30 underline-offset-4">GMC Yukon</Link> for VIPs to the reliable <Link href="/fleet/toyota-hiace/" className="text-white hover:text-primary font-semibold underline decoration-primary/30 underline-offset-4">Toyota Hiace</Link> for Umrah groups, every vehicle is a 2025 model kept in showroom condition.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                        <span>Popular destinations:</span>
                        <Link href="/locations/makkah/" className="text-emerald-400 hover:text-white transition-colors">Makkah</Link>
                        <span>•</span>
                        <Link href="/locations/madinah/" className="text-emerald-400 hover:text-white transition-colors">Madinah</Link>
                        <span>•</span>
                        <Link href="/locations/jeddah/" className="text-emerald-400 hover:text-white transition-colors">Jeddah</Link>
                    </div>
                </div>
            </div>

            {/* Client Component for Filtering and Grid */}
            <FleetListing fleet={fleet} />

            {/* Trust Signals */}
            <div className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Our fleet maintenance standards exceed regulatory requirements. We ensure every journey is safe, cool, and comfortable, even in the Saudi summer.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Tracking</h3>
                            <p className="text-gray-500 leading-relaxed">All vehicles are equipped with real-time GPS tracking, speed limiters, and undergo rigorous daily safety inspections.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Immaculate Condition</h3>
                            <p className="text-gray-500 leading-relaxed">We maintain a strict "Showroom Clean" policy. Every car is deep-cleaned and sanitized before every single passenger pickup.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <User className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Chauffeurs</h3>
                            <p className="text-gray-500 leading-relaxed">Our drivers are uniformed, multilingual (Arabic, English, Urdu), and trained in hospitality and defensive driving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
