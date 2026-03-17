
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FleetListing from '@/components/FleetListing';
import AuthorCard from '@/components/AuthorCard';
import { Sparkles, Shield, User, CheckCircle2, Info, ArrowRight, Car, Users, Briefcase, Ruler } from 'lucide-react';

export const metadata: Metadata = {
    title: 'VIP Executive Fleet Saudi Arabia | Premium Chauffeur Vehicles',
    description: 'Explore our VIP executive fleet in Saudi Arabia. Luxury Mercedes S-Class, Cadillac Escalade, GMC Yukon, and Luxurious Buses for premium private transfers. 2025 models.',
    keywords: ['VIP Fleet Saudi Arabia', 'Premium Chauffeur Vehicles', 'Mercedes S-Class Saudi Arabia', 'Cadillac Escalade Chauffeur', 'GMC Yukon VIP Transfer', 'Luxury Van Transfer KSA', 'Executive Car with Driver', 'Umrah Private Fleet', 'Luxurious Bus Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/',
    }
};

export default function FleetPage() {
    const fleet = [
        {
            name: "Mercedes S-Class",
            type: "VIP Executive",
            image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["VIP Experience", "Leather Interior", "Discreet Service", "Late Model"],
            href: "/fleet/mercedes-s-class/",
            category: "Luxury"
        },
        {
            name: "Cadillac Escalade",
            type: "Ultra Luxury SUV",
            image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["Premium Audio", "Extra Comfort", "VIP Chauffeur", "Climate Control"],
            href: "/fleet/cadillac-escalade/",
            category: "Luxury"
        },
        {
            name: "GMC Yukon XL / Denali",
            type: "Luxury SUV",
            image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
            passengers: 7,
            luggage: 5,
            features: ["Spacious", "Extra Legroom", "Most Popular", "American Comfort"],
            href: "/fleet/gmc-yukon/",
            category: "Luxury"
        },
        {
            name: "Mercedes Vito",
            type: "Business Van",
            image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["European Luxury", "Conference Seats", "Business Class", "Privacy Glass"],
            href: "/fleet/mercedes-vito/",
            category: "Luxury"
        },
        {
            name: "BMW 7 Series",
            type: "VIP Sedan",
            image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["Performance", "Luxury Comfort", "Chauffeur Choice", "Prestige"],
            href: "/fleet/bmw-7-series/",
            category: "Luxury"
        },
        {
            name: "Genesis G80 VIP",
            type: "Premium Sedan",
            image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
            passengers: 3,
            luggage: 2,
            features: ["Korean Craftsmanship", "Silent Cabin", "VIP Rear Seat", "Modern Luxury"],
            href: "/fleet/genesis-g80/",
            category: "Luxury"
        },
        {
            name: "Ford Taurus 2025",
            type: "Executive Sedan",
            image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
            passengers: 3,
            luggage: 2,
            features: ["New Model", "Smooth Ride", "Efficient", "Modern Tech"],
            href: "/fleet/ford-taurus/",
            category: "Economy"
        },
        {
            name: "Mercedes Sprinter",
            type: "VIP Minibus",
            image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
            passengers: 14,
            luggage: 4,
            features: ["Custom Interior", "High Roof", "Corporate Travel", "Group VIP"],
            href: "/fleet/mercedes-sprinter/",
            category: "Group"
        },
        {
            name: "Hyundai Staria VIP",
            type: "Premium Van",
            image: "/fleet/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["Futuristic Design", "Panoramic View", "Easy Access", "Efficient"],
            href: "/fleet/hyundai-staria/",
            category: "Luxury"
        },
        {
            name: "Toyota Hiace",
            type: "Standard Van",
            image: "/fleet/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["Great for Luggage", "Reliable", "Umrah Group Choice", "Versatile"],
            href: "/fleet/toyota-hiace/",
            category: "Group"
        },
        {
            name: "Toyota Coaster",
            type: "VIP Minibus",
            image: "/fleet/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["Group Efficiency", "Air Conditioning", "Stable Ride", "Trusted"],
            href: "/fleet/toyota-coaster/",
            category: "Group"
        },
        {
            name: "Toyota Camry",
            type: "Executive Sedan",
            image: "/fleet/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Smooth Ride", "Clean Interior", "Punctual", "Efficient"],
            href: "/fleet/toyota-camry/",
            category: "Economy"
        },
        {
            name: "Hyundai Starex",
            type: "Family Van",
            image: "/fleet/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Reliable", "Extra Luggage", "Smooth Ride", "Family Favorite"],
            href: "/fleet/hyundai-starex/",
            category: "Economy"
        },
        {
            name: "Luxurious Bus",
            type: "Premium Coach",
            image: "/fleet/luxurious-bus.webp",
            passengers: 25,
            luggage: 30,
            features: ["Tourismo Spec", "On-board Comfort", "Large Groups", "Premium Seating"],
            href: "/fleet/luxurious-bus/",
            category: "Group"
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
            "description": `Premium ${vehicle.name} (${vehicle.type}) for VIP transfers in Saudi Arabia.`,
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
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-white/10 mb-6">
                        <Sparkles className="w-3 h-3" /> Premium Selection
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        VIP & Executive Fleet Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        The ultimate choice for luxury ground transportation. Featuring the <strong>Mercedes S-Class</strong>, <strong>Cadillac Escalade</strong>, and specialized <strong>VIP GMC Yukons</strong> for discerning travelers.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                        <span>PREMIUM ROUTES:</span>
                        <Link href="/routes/jeddah-makkah/" className="text-emerald-400 hover:text-white transition-colors">Jeddah to Makkah</Link>
                        <span>•</span>
                        <Link href="/routes/madinah-makkah/" className="text-emerald-400 hover:text-white transition-colors">Madinah to Makkah</Link>
                        <span>•</span>
                        <Link href="/routes/jeddah-riyadh/" className="text-emerald-400 hover:text-white transition-colors">Jeddah to Riyadh</Link>
                    </div>
                </div>
            </div>

            {/* AI SEO Summary Block */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-30">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-xl mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        Fleet Capabilities & Recommendations
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-sm">
                        <li className="flex gap-2"><Briefcase className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Executive VIP:</strong> Mercedes S-Class & BMW. Best for 1-3 Pax.</li>
                        <li className="flex gap-2"><Car className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Luxury SUVs:</strong> Escalade & Yukon. Best for high-capacity luxury.</li>
                        <li className="flex gap-2"><Users className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>VIP Vans:</strong> Mercedes Vito & Staria. Ideal for families and business groups.</li>
                        <li className="flex gap-2"><Sparkles className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Large Groups:</strong> Sprinters & Premium Coaches up to 25 seats.</li>
                    </ul>
                </div>
            </div>

            {/* Fleet Spreadsheet View */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 overflow-x-auto">
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Ruler className="w-6 h-6 text-emerald-600" /> Comparison of Fleet Specs
                    </h2>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="py-3 font-bold">Vehicle Model</th>
                                <th className="py-3 font-bold">Pax</th>
                                <th className="py-3 font-bold">Luggage</th>
                                <th className="py-3 font-bold">Key Feature</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {fleet.map((v, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 font-bold text-gray-900">{v.name}</td>
                                    <td className="py-4">{v.passengers}</td>
                                    <td className="py-4 font-medium text-emerald-700">{v.luggage} Bags</td>
                                    <td className="py-4 text-gray-600">{v.features[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <FleetListing fleet={fleet} />

            {/* Trust Signals */}
            <div className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Pre-Book Our VIP Fleet?</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Unlike standard taxi apps, our fleet specializes in pre-arranged, high-standard intercity transfers across the Kingdom of Saudi Arabia.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Impeccable Safety</h3>
                            <p className="text-gray-500 leading-relaxed">Fleet maintained to the highest manufacturer standards with 2024-2025 production models available for VIP bookings.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Amenities</h3>
                            <p className="text-gray-500 leading-relaxed">On-board Wi-Fi (on request), complimentary water, and professional multilingual chauffeurs in uniform.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <User className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Protocol</h3>
                            <p className="text-gray-500 leading-relaxed">Dedicated meet-and-greet service. Our chauffeurs handle all heavy luggage and provide a seamless door-to-door experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expert Insights */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-16">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                            <Info className="w-6 h-6 text-emerald-600" /> Expert Tip: Group Transfers
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            "For groups of 10 or more, the **Mercedes Sprinter** provides a level of comfort that standard vans simply cannot match. It allows for full standing height inside the cabin and individual executive seats, making long-distance drives like Riyadh to Makkah feel much shorter and more enjoyable."
                            <br />
                            <span className="block mt-4 font-bold text-emerald-700">— Muhammad Ismail, Founder of TaxiServiceKSA™</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
            </div>
        </div>
    );
}

