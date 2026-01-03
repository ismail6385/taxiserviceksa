import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Plane, Building2, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Top Rated Online Taxi Service in Saudi Arabia | Professional Services',
    description: 'Best online taxi service in Saudi Arabia offering professional airport transfers, Umrah transport, and corporate travel. Book licensed drivers 24/7.',
    keywords: ['Online Taxi Service in Saudi Arabia', 'Top Rated Taxi Service', 'Best Taxi Service KSA', 'Umrah transport', 'airport transfer KSA', 'corporate taxi', 'heritage tours'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/',
    },
};

export default function ServicesPage() {
    const services = [
        {
            name: 'Umrah Taxi Service',
            description: 'Umrah taxi service provides transport for pilgrims between Jeddah, Makkah, and Madinah. Professional drivers ensure on-time arrival for prayer schedules.',
            icon: Car,
            href: '/services/umrah-transport',
            features: ['Jeddah Airport pickup', 'Makkah to Madinah route', 'Prayer time flexibility', 'Zamzam accommodation'],
            isPopular: true
        },
        {
            name: 'Airport Transfer Service',
            description: 'Airport transfer service operates 24/7 at all major Saudi airports. Top rated online taxi service includes flight tracking and meet-and-greet.',
            icon: Plane,
            href: '/services/airport-transfers',
            features: ['8 airports covered', 'Flight tracking', 'Meet & greet', '24/7 availability'],
            isPopular: true
        },
        {
            name: 'Corporate Taxi Service',
            description: 'Corporate taxi service ensures reliable transport for business executives. Best online taxi service offers monthly billing and priority booking.',
            icon: Building2,
            href: '/services/corporate-travel',
            features: ['Executive vehicles', 'Monthly billing', 'Priority booking', 'Business districts'],
            isPopular: true
        },
        {
            name: 'Heritage Tour Transport',
            description: 'Heritage tour transport connects tourists to UNESCO sites like AlUla. Professional drivers operate 4x4 vehicles for desert excursions.',
            icon: Compass,
            href: '/services/heritage-tours',
            features: ['AlUla Hegra tours', '4x4 desert vehicles', 'English-speaking guides', 'Flexible schedules'],
            isPopular: true
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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Top Rated Online Taxi Service<br />
                        <span className="text-emerald-600">With Licensed Drivers</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Taxi Service KSA is a professional online taxi service in Saudi Arabia. All vehicles include licensed drivers. No self-drive rental available.
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">All Services Include Professional Drivers</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        We do not offer self-drive car rental. All our vehicles come with licensed, experienced drivers who know Saudi routes and traffic regulations.
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
