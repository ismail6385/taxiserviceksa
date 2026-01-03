import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, ArrowRight, Clock, DollarSign, MapPin, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Popular Routes | Taxi Service KSA - Fixed Price Routes',
    description: 'Popular taxi routes in Saudi Arabia with fixed pricing. Jeddah to Makkah (80km), Makkah to Madinah (450km). 24/7 service with transparent rates.',
    keywords: ['taxi routes Saudi Arabia', 'Jeddah Makkah taxi', 'Makkah Madinah taxi', 'intercity taxi KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/',
    },
};

export default function RoutesPage() {
    const routes = [
        {
            name: 'Jeddah → Makkah',
            distance: '80 km',
            duration: '60-90 minutes',
            price: 'From SAR 250',
            description: 'Most popular route for Umrah pilgrims. Direct transfer from King Abdulaziz Airport to Makkah hotels.',
            image: '/makkah-kaaba-night.webp',
            href: '/routes/jeddah-makkah/',
            highlights: ['Airport pickup', 'Meet & greet', 'Train alternative'],
            isPopular: true
        },
        {
            name: 'Makkah → Madinah',
            distance: '450 km',
            duration: '4-5 hours',
            price: 'From SAR 450',
            description: 'Complete your Umrah journey. Comfortable transfer with rest stops between the two holy cities.',
            image: '/madinah-prophets-mosque.webp',
            href: '/routes/makkah-madinah/',
            highlights: ['Rest stops included', 'Prayer breaks', 'Zamzam accommodation'],
            isPopular: true
        },
        {
            name: 'Madinah → Jeddah',
            distance: '450 km',
            duration: '4-5 hours',
            price: 'From SAR 450',
            description: 'Reliable return transfer to Jeddah Airport. Comfortable journey for pilgrims departing from Madinah.',
            image: '/madinah-prophets-mosque.webp',
            href: '/routes/madinah-jeddah/',
            highlights: ['Airport drop-off', 'Rest stops included', 'Group friendly'],
            isPopular: true
        },
        {
            name: 'Jeddah → Taif',
            distance: '170 km',
            duration: '2.5-3 hours',
            price: 'From SAR 350',
            description: 'Scenic mountain drive to the City of Roses. Enjoy the cool weather and nature of Taif.',
            image: '/hero-slide-3.webp',
            href: '/routes/jeddah-taif/',
            highlights: ['Mountain views', 'Cable car access', 'Cool climate'],
            isPopular: true
        },
        {
            name: 'Riyadh → Jeddah',
            distance: '950 km',
            duration: '10-12 hours',
            price: 'From SAR 1800',
            description: 'Premium long-distance chauffeur service. Travel between the capital and the coast in comfort.',
            image: '/jeddah-corniche-sunset.webp',
            href: '/routes/riyadh-jeddah/',
            highlights: ['Luxury vehicles', 'Professional drivers', 'Door-to-door'],
            isPopular: false
        },
        {
            name: 'Jeddah → Yanbu',
            distance: '330 km',
            duration: '3.5-4 hours',
            price: 'From SAR 550',
            description: 'Express transfer to the Industrial City and Royal Commission. Scenic drive along the Red Sea coast.',
            image: '/yanbu-lake.webp',
            href: '/routes/jeddah-yanbu/',
            highlights: ['RCY drop-off', 'Coastal highway', 'Business travel'],
            isPopular: false
        },
        {
            name: 'Jeddah → Al Ula',
            distance: '700 km',
            duration: '7-8 hours',
            price: 'From SAR 1400',
            description: 'Journey to the ancient city of Hegra. Long-distance comfort for the ultimate heritage experience.',
            image: '/alula-hegra.webp',
            href: '/routes/jeddah-alula/',
            highlights: ['Hegra visit', 'Desert landscapes', 'Premium SUVs'],
            isPopular: false
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        Popular Routes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Taxi Routes in Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Fixed-price routes for your journey to the <Link href="/locations/makkah/" className="text-primary font-bold hover:underline">Holy City of Makkah</Link> and other major cities.
                        Direct intercity transfers with professional drivers and comfortable vehicles.
                    </p>
                </div>

                {/* Routes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {routes.map((route, index) => (
                        <Link key={index} href={route.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-primary flex flex-col">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={route.image}
                                        alt={route.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                    {/* Route Name Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Navigation className="w-6 h-6 text-white" />
                                            <h2 className="text-2xl font-bold text-white">{route.name}</h2>
                                        </div>
                                        {route.isPopular && (
                                            <span className="inline-block bg-primary text-white hover:text-black text-xs font-bold px-3 py-1 rounded-full">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Route Stats */}
                                    <div className="grid grid-cols-3 gap-2 mb-6 pb-6 border-b border-gray-200">
                                        <div className="text-center">
                                            <MapPin className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Distance</div>
                                            <div className="font-bold text-gray-900 text-sm">{route.distance}</div>
                                        </div>
                                        <div className="text-center">
                                            <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Duration</div>
                                            <div className="font-bold text-gray-900 text-sm">{route.duration}</div>
                                        </div>
                                        <div className="text-center">
                                            <DollarSign className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                            <div className="text-xs text-gray-500">Price</div>
                                            <div className="font-bold text-primary text-sm">{route.price}</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 flex-1 text-sm">{route.description}</p>

                                    {/* Highlights */}
                                    <div className="space-y-2 mb-6">
                                        {route.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between text-gray-900 font-bold group-hover:text-accent transition-colors text-sm">
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Booking CTA */}
                <div className="bg-black text-white rounded-3xl p-12 text-center mb-16 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-white">Need a Custom Route?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            If you don't see your destination here, we can still provide a quote. Most pilgrims traveling between holy cities use our <Link href="/services/umrah-transport/" className="text-white underline font-bold hover:text-primary transition-colors">Umrah transport packages</Link> for the best value.
                        </p>
                        <Link href="/booking/">
                            <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 rounded-xl">
                                <Car className="w-5 h-5 mr-2" />
                                Book a Reliable Taxi Online
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Strategic Internal Links Hub */}
                <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" /> Premium Fleet For Intercity
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>GMC Yukon (Top Rated for Long Trips)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Toyota HiAce (Umrah & Large Groups)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/" className="text-primary font-bold hover:underline">View All Vehicle Options →</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Service Hubs
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah (Haram & Umrah)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Madinah (Prophet's Mosque)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/" className="text-primary font-bold hover:underline">See All Service Locations →</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
