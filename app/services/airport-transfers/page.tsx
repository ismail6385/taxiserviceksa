import React, { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import { Plane, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Airport Transfers Saudi Arabia | Jeddah, Madinah, Riyadh, Taif Taxi',
    description: 'Reliable and luxury airport transfer services in Saudi Arabia. Pickup from Jeddah (KAIA), Madinah (Prince Mohammad), Riyadh (KKIA), and Taif airports. Book your ride now.',
    keywords: 'Jeddah Airport Taxi, Madinah Airport Transfer, Riyadh Airport Pickup, Taif Airport Taxi, Saudi Arabia Airport Transfer, Umrah Taxi Service',
};

export default function AirportTransfersPage() {
    const airports = [
        {
            name: "Jeddah King Abdulaziz Intl Airport (JED)",
            code: "JED",
            description: "The main gateway for Umrah pilgrims. We provide 24/7 pickup services from all terminals (Terminal 1, North Terminal, Hajj Terminal) directly to your hotel in Makkah or Madinah.",
            image: "https://images.unsplash.com/photo-1565552629477-e2be80b53d8c?q=80&w=2074&auto=format&fit=crop",
            features: ["Meet & Greet Service", "Makkah Transfers (1 Hr)", "Madinah Transfers (4 Hrs)", "Hajj Terminal Pickup"]
        },
        {
            name: "Madinah Prince Mohammad Bin Abdulaziz Airport (MED)",
            code: "MED",
            description: "Start your spiritual journey in the City of the Prophet. Our chauffeurs will ensure a smooth ride to your hotel near Masjid Al Nabawi.",
            image: "https://images.unsplash.com/photo-1565657829323-57f9b97771b6?q=80&w=2070&auto=format&fit=crop",
            features: ["Hotel Transfers (25 Mins)", "Makkah Transfers (4.5 Hrs)", "Ziyarat Tours Available", "VIP Service"]
        },
        {
            name: "Riyadh King Khalid Intl Airport (RUH)",
            code: "RUH",
            description: "Premium transport services for business travelers and tourists arriving in the capital. Comfortable rides to Makkah for Umrah are also available.",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
            features: ["City Transfers", "Long Distance to Makkah", "Business Class Fleet", "English Speaking Drivers"]
        },
        {
            name: "Taif International Airport (TIF)",
            code: "TIF",
            description: "Arriving in Taif? Enjoy a scenic drive through the mountains down to Makkah. Perfect for those looking for a cooler climate before their Umrah.",
            image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=2070&auto=format&fit=crop",
            features: ["Makkah Transfers (1 Hr)", "Scenic Route", "Cool Weather", "Family Vans Available"]
        }
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                        alt="Airport Transfer Saudi Arabia"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                                <Plane className="w-4 h-4 text-primary" />
                                <span className="text-primary text-sm font-medium">Premium Airport Services</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary animate-gradient">Airport Transfers</span> in KSA
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Experience VIP treatment from the moment you land. We cover all major airports in Saudi Arabia including Jeddah, Madinah, Riyadh, and Taif. Reliable, punctual, and comfortable.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Flight Tracking</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>60 Mins Free Wait Time</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Meet & Greet</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Suspense fallback={<div className="text-white text-center">Loading booking form...</div>}>
                                <BookingForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airports Grid */}
            <section className="py-20 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Major Airports We Serve</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Whether you are arriving for Umrah, Hajj, or business, our fleet is ready at all key terminals across the Kingdom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {airports.map((airport, index) => (
                            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={airport.image}
                                        alt={airport.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="bg-primary text-black font-bold px-3 py-1 rounded-lg text-sm mb-2 inline-block">
                                            {airport.code}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white">{airport.name}</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {airport.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {airport.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={`/booking?service=${encodeURIComponent(airport.name + " Transfer")}`} className="block">
                                        <Button className="w-full bg-white/5 hover:bg-primary hover:text-black text-white border border-white/10 hover:border-primary transition-all">
                                            Book Transfer from {airport.code}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Punctual Pickups</h3>
                            <p className="text-gray-400">We track your flight status to ensure our driver is waiting for you when you land, even if your flight is delayed.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Safe & Secure</h3>
                            <p className="text-gray-400">All our drivers are licensed, professional, and vetted. Our vehicles are regularly inspected for your safety.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Door-to-Door</h3>
                            <p className="text-gray-400">We provide seamless door-to-door service from the airport terminal directly to your hotel lobby.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
