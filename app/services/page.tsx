import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Plane, Building2, Compass, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'VIP Private Transfers & Chauffeur Services Saudi Arabia',
    description: 'Explore premium VIP private transfer services in Saudi Arabia. Specializing in executive airport pickups, long-distance intercity travel, and dedicated Umrah transport.',
    keywords: ['VIP Private Transfers', 'Executive Chauffeur Service', 'Premium Transfer KSA', 'Long Distance Transfer', 'Umrah Private Transport', 'Business Chauffeur'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/',
    },
};

export default function ServicesPage() {
    const services = [
        {
            name: 'VIP Umrah Transfers',
            description: 'Exclusive private transport for pilgrims between Jeddah Airport, Makkah, and Madinah. We specialize in luxury family transfers with ample luggage space.',
            icon: Car,
            href: '/services/umrah-transport',
            features: ['Executive Meeqat assistance', 'Spacious pilgrim luxury vans', 'Multilingual chauffeurs', 'All-day private hire'],
            isPopular: true
        },
        {
            name: 'Executive Airport Pickups',
            description: 'Premium meet-and-greet service at all major Saudi airports. Our chauffeurs wait at the terminal with personalized signage for a VIP arrival experience.',
            icon: Plane,
            href: '/services/airport-transfers',
            features: ['Personalized name signs', 'Flight tracker integration', 'VIP terminal assistance', 'Luxury sedan & SUV options'],
            isPopular: true
        },
        {
            name: 'Corporate VIP Transfers',
            description: 'Corporate VIP transfer service ensures reliable transport for business executives. Premium booking offers monthly billing and priority allocation.',
            icon: Building2,
            href: '/services/corporate-travel',
            features: ['Executive vehicles', 'Monthly billing', 'Priority booking', 'Business districts'],
            isPopular: true
        },
        {
            name: 'Heritage Tour Transport',
            description: 'Heritage tour transport connects tourists to UNESCO sites like AlUla. Professional drivers operate 4x4 vehicles for desert excursions.',
            icon: Compass,
            href: '/services/heritage-tours/',
            features: ['AlUla Hegra tours', '4x4 desert vehicles', 'English-speaking guides', 'Flexible schedules'],
            isPopular: true
        },
        {
            name: 'Business & Executive Transfers',
            description: 'Business VIP transfers for corporate travelers in Riyadh and Jeddah. Premium vehicles and professional chauffeurs for executive meetings.',
            icon: Building2,
            href: '/services/business/',
            features: ['KAFD & Business districts', 'Punctual meeting arrivals', 'Premium VIP fleet', 'Hourly booking options'],
            isPopular: false
        },
        {
            name: 'Wheelchair Accessible VIP Transfer',
            description: 'Wheelchair accessible transfer service for pilgrims and passengers with special needs. Specially equipped vehicles with ramps.',
            icon: Car,
            href: '/services/wheelchair-taxi/',
            features: ['Ramp equipped vehicles', 'Safe luggage storage', 'Trained helpful drivers', 'Door-to-door assistance'],
            isPopular: false
        },
        {
            name: 'Sightseeing & Ziyarat Tours',
            description: 'Sightseeing tours in Makkah, Madinah, and Taif. Visit historical sites with knowledgeable drivers who know the city history.',
            icon: MapPin,
            href: '/services/tours/',
            features: ['Makkah Ziyarat', 'Madinah historical sites', 'Taif mountain tours', 'Flexible itinerary'],
            isPopular: false
        },
        {
            name: 'Intercity VIP Transfers',
            description: 'Intercity transfer service connecting all major cities. Travel comfortably from Riyadh to Jeddah or Madinah with fixed flat rates.',
            icon: Compass,
            href: '/services/intercity/',
            features: ['Long distance comfort', 'Multiple city stops', 'Fixed intercity rates', '24/7 highway service'],
            isPopular: false
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        VIP Private Transfer &<br />
                        <span className="text-black">Executive Chauffeur Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        VIP Transfer KSA provides a premium alternative to local transport. We specialize in **pre-booked private journeys**, intercity travel, and hourly chauffeur hire for international guests.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary transition-all h-full flex flex-col">
                            {/* Header */}
                            <div className="p-8 border-b border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    {service.isPopular && (
                                        <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                            TOP RATED
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>

                            {/* Features */}
                            <div className="p-8 flex-1">
                                <h3 className="font-bold text-gray-900 mb-4">Key Features:</h3>
                                <div className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-8 pt-0">
                                <Link href={service.href} className="block">
                                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold group">
                                        View Service Details
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Specializing in Premium & Long-Distance Travel</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed text-lg">
                        We are a dedicated private transfer service. We do **not** provide local street-hail taxi services or short-distance point-to-point city trips. Our fleet is reserved for pre-booked airport transfers, intercity travel, and all-day rentals.
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold">
                            Book Any Service
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
