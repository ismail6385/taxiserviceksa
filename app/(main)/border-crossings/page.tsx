import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, ArrowRight, MapPin, Shield, Globe, Clock, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Border Crossing Taxi Services | Saudi Arabia Intercity Transfers',
    description: 'Professional taxi and VIP transfer services across Saudi Arabian border crossings. King Fahd Causeway, Salwa, Al Batha, and more. 24/7 cross-border transport.',
    keywords: ['Saudi border taxi', 'King Fahd Causeway taxi', 'Salwa border transfer', 'Al Batha border taxi', 'cross-border transport Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/',
    },
};

const BORDER_CROSSINGS = [
    {
        name: 'King Fahd Causeway',
        to: 'Bahrain',
        slug: 'taxi-king-fahd-causeway-border-crossing',
        description: 'Connecting Al Khobar with Manama. The busiest border crossing for business and tourism.',
        highlights: ['Fast-track available', 'Door-to-door', '24/7 Service']
    },
    {
        name: 'Salwa Border',
        to: 'Qatar',
        slug: 'taxi-salwa-border-crossing',
        description: 'Primary gateway between Saudi Arabia and Qatar. Ideal for FIFA World Cup legacy fans and family travel.',
        highlights: ['Direct to Doha', 'Hassle-free', 'Comfortable SUVs']
    },
    {
        name: 'Al Batha Border',
        to: 'UAE',
        slug: 'taxi-al-batha-border-crossing',
        description: 'Major transit point for travelers heading to Abu Dhabi and Dubai from Saudi Arabia.',
        highlights: ['Long-distance comfort', 'Reliable', 'Express Transit']
    },
    {
        name: 'Al Haditha Border',
        to: 'Jordan',
        slug: 'taxi-al-haditha-border-crossing',
        description: 'The main crossing for those traveling between KSA and Jordan (Amman).',
        highlights: ['Amman transfers', 'Border assistance', 'Safe & Secure']
    },
    {
        name: 'Khafji Border',
        to: 'Kuwait',
        slug: 'taxi-khafji-border-crossing',
        description: 'Popular crossing for travelers between Dammam/Jubail and Kuwait City.',
        highlights: ['Dammam to Kuwait', 'Quick crossing', 'Professional drivers']
    },
    {
        name: 'Abu Samra Border',
        to: 'Qatar',
        slug: 'taxi-abu-samra-border-crossing',
        description: 'Qatar-side crossing connected to Salwa. We provide seamless pickup and drop-off.',
        highlights: ['Dual-border service', 'Meet & Greet', 'Luxury Fleet']
    },
    {
        name: 'Al Durrah',
        to: 'Jordan',
        slug: 'taxi-al-durrah-border-crossing',
        description: 'Coastal border crossing near Tabuk/Haql connecting to Aqaba, Jordan.',
        highlights: ['Red Sea route', 'Aqaba transfers', 'Scenic drive']
    },
    {
        name: 'Halat Ammar',
        to: 'Jordan',
        slug: 'taxi-halat-ammar-border-crossing',
        description: 'Historical crossing point for religious and commercial traffic from Tabuk to Jordan.',
        highlights: ['Tabuk hub', 'Pilgrim support', 'Reliable transit']
    },
    {
        name: 'Al Salmi',
        to: 'Kuwait',
        slug: 'taxi-al-salmi-border-crossing',
        description: 'Alternative crossing to Kuwait, serving northern regions of Saudi Arabia.',
        highlights: ['Northern KSA hub', 'Express service', 'Safe travel']
    },
    {
        name: 'Nuwaiseeb',
        to: 'Kuwait',
        slug: 'taxi-nuwaiseeb-border-crossing',
        description: 'Kuwait-side crossing corresponding to Khafji. Essential for cross-gulf travel.',
        highlights: ['Kuwait City direct', 'Border experts', 'SUV options']
    }
];

export default function BorderCrossingsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        International Transfers
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Saudi Border Crossing Taxi Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Seamless cross-border VIP transfers. We handle the logistics while you travel in comfort across all major Saudi Arabian border points.
                    </p>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Safe & Legal</h3>
                        <p className="text-sm text-gray-500">Fully licensed vehicles authorized for international cross-border passenger transport.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Multi-Country</h3>
                        <p className="text-sm text-gray-500">Service to Bahrain, UAE, Qatar, Kuwait, and Jordan with door-to-door convenience.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
                        <p className="text-sm text-gray-500">Border crossings operate around the clock, and so do our professional chauffeurs.</p>
                    </div>
                </div>

                {/* Crossings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BORDER_CROSSINGS.map((crossing, index) => (
                        <Link key={index} href={`/border-crossings/${crossing.slug}/`} className="group">
                            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                                        <Navigation className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                                        To {crossing.to}
                                    </span>
                                </div>
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {crossing.name}
                                </h2>
                                
                                <p className="text-gray-600 text-sm mb-6 flex-1">
                                    {crossing.description}
                                </p>

                                <div className="space-y-2 mb-8">
                                    {crossing.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-gray-900 font-bold text-sm">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Custom Quote Section */}
                <div className="mt-20 bg-black text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Plan Your Cross-Border Journey</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Crossing borders requires planning. Let our experienced drivers handle the paperwork while you relax in a premium SUV or sedan.
                        </p>
                        <Link href="/booking/">
                            <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 rounded-xl">
                                <Car className="w-5 h-5 mr-2" />
                                Get a Cross-Border Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* SEO Content Block */}
                <div className="mt-20 prose prose-gray max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Border Crossing Taxi Services?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-600">
                                Traveling across borders in the Middle East can be complex due to varying regulations and customs procedures. Our border crossing taxi services are designed to eliminate the stress of international travel between Saudi Arabia and its neighbors. Whether you are heading to Bahrain via the King Fahd Causeway or traveling to Qatar through the Salwa border, we provide a seamless door-to-door experience.
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600">
                                Our fleet of premium vehicles, including GMC Yukons and Mercedes-Benz E-Class, are equipped with the necessary permits for international transit. Our chauffeurs are highly experienced with border protocols, ensuring that your transition between countries is as smooth as possible. We offer fixed pricing with no hidden fees, providing transparent value for business travelers and families alike.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
