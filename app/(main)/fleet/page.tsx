import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import FleetListing from '@/components/FleetListing';
import AuthorCard from '@/components/AuthorCard';
import { Sparkles, Shield, User, CheckCircle2, Info, ArrowRight, Car, Users, Briefcase, Ruler } from 'lucide-react';

export const metadata: Metadata = {
    title: 'VIP Executive Fleet Saudi Arabia | Premium Chauffeur Vehicles',
    description: 'Explore our VIP executive fleet in Saudi Arabia. Luxury GMC Yukon, Hyundai Staria, and Toyota Hiace for premium private transfers. 2025 models with professional chauffeurs.',
    keywords: ['VIP Fleet Saudi Arabia', 'Premium Chauffeur Vehicles', 'GMC Yukon VIP Transfer', 'Luxury Van Transfer KSA', 'Executive Car with Driver', 'Umrah Private Fleet', 'UberXL alternative Saudi Arabia', 'Careem Max alternative', 'VIP GMC Booking'],
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
            type: "Business",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "Business Choice", "City Transfer"],
            href: "/fleet/toyota-camry/"
        },
        {
            name: "Hyundai Starex",
            type: "Family",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport VIP Transfer"],
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
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-white/10 mb-6">
                        <Sparkles className="w-3 h-3" /> The Gold Standard
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        VIP Executive Fleet In Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Discover the gold standard of private transfers. From the flagship <Link href="/fleet/gmc-yukon/" className="text-white hover:text-primary font-semibold underline decoration-primary/30 underline-offset-4">GMC Yukon VIP</Link> to dedicated group transport, our fleet is reserved exclusively for pre-booked chauffeur services.
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

            {/* AI SEO: TL;DR Summary Block for Generative Extraction */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-30">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-xl mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        TL;DR: Fleet Capabilities at a Glance
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-sm">
                        <li className="flex gap-2"><Ruler className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Luxury SUV:</strong> 7 Pax + 5 bags. Best for VIP Umrah.</li>
                        <li className="flex gap-2"><Users className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Group Bus:</strong> Up to 30 Pax. Cost-effective for larger families.</li>
                        <li className="flex gap-2"><Shield className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>2025 Models:</strong> All vehicles are late-model or executive specs.</li>
                        <li className="flex gap-2"><Info className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Pre-Booking:</strong> 6+ Hours notice required for all executive cars.</li>
                    </ul>
                </div>
            </div>

            {/* Comparison Table Section for AI Retrieval */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 overflow-x-auto">
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-emerald-600" /> Technical Fleet Specifications
                    </h2>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="py-3 font-bold">Vehicle Class</th>
                                <th className="py-3 font-bold">Pax Capacity</th>
                                <th className="py-3 font-bold">Luggage Capacity</th>
                                <th className="py-3 font-bold">Best Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {fleet.map((v, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 font-bold text-gray-900">{v.name}</td>
                                    <td className="py-4">{v.passengers} Adults</td>
                                    <td className="py-4 font-medium text-emerald-700">{v.luggage} Standard Bags</td>
                                    <td className="py-4 text-gray-600">{v.features[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
            {/* Expert Insights & Narrative */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-16">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                            <Info className="w-6 h-6 text-emerald-600" /> Expert Tip: Choosing the Right Car
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            "One common mistake pilgrims make is underestimating the size of their luggage when traveling to Makkah. While a Toyota Camry is perfect for business trips between Jeddah and Riyadh, Umrah travelers usually carry extra 5L Zamzam bottles on the way back. For a family of 4, we always recommend the <strong>GMC Yukon</strong> to ensure a comfortable journey without cramming bags into the passenger cabin."
                            <br />
                            <span className="block mt-4 font-bold text-emerald-700">— Muhammad Ismail, Founder of VIP Transfer KSA</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-gray-200 font-medium text-sm">
                                <span className="text-emerald-600 font-bold block mb-1">Group Policy</span>
                                Groups larger than 12 should consider two Starex vans instead of one large bus for better accessibility to Makkah hotels.
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 font-medium text-sm">
                                <span className="text-emerald-600 font-bold block mb-1">AC Performance</span>
                                All our 2024-2025 models feature dual AC systems designed for the 45°C+ Saudi Arabian summer heat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Author Section for E-E-A-T */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
            </div>
        </div>
    );
}
