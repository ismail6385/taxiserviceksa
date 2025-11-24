import React, { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import { MapPin, Clock, Shield, CheckCircle, Car, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Jeddah Airport to Makkah Taxi | Best Umrah Taxi Service',
    description: 'Book reliable taxi from Jeddah Airport (JED) to Makkah. Fixed rates, 24/7 service, and comfortable vehicles for Umrah pilgrims. Toyota Camry, GMC Yukon, and Hiace available.',
    keywords: 'Jeddah Airport to Makkah Taxi, JED to Makkah Taxi, Umrah Taxi Service, Jeddah to Makkah Cab, Taxi Fare Jeddah to Makkah, Private Car Jeddah to Makkah',
};

export default function JeddahToMakkahPage() {
    const vehicles = [
        {
            name: "Toyota Camry",
            type: "Sedan",
            passengers: "3-4",
            luggage: "2-3",
            price: "Best Value",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?q=80&w=2070&auto=format&fit=crop",
            features: ["AC", "Comfortable", "Economic"]
        },
        {
            name: "Hyundai Staria",
            type: "Family Van",
            passengers: "7",
            luggage: "4-5",
            price: "Popular",
            image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=1974&auto=format&fit=crop",
            features: ["Spacious", "Modern", "Family Friendly"]
        },
        {
            name: "GMC Yukon",
            type: "VIP SUV",
            passengers: "7",
            luggage: "4-5",
            price: "Luxury",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop",
            features: ["Leather Seats", "VIP Service", "Extra Legroom"]
        },
        {
            name: "Toyota Hiace",
            type: "Group Van",
            passengers: "10-12",
            luggage: "8-10",
            price: "Group Deal",
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
            features: ["High Capacity", "Good for Groups", "Reliable"]
        }
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1565552629477-e2be80b53d8c?q=80&w=2074&auto=format&fit=crop"
                        alt="Jeddah to Makkah Taxi"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-primary text-sm font-medium">Jeddah Airport (JED) ➔ Makkah</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary animate-gradient">Jeddah to Makkah</span> Taxi Service
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Start your Umrah journey with peace of mind. We provide 24/7 airport pickup from all terminals. No waiting, no hidden fees. Direct transfer to your hotel in Makkah.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="flex items-center space-x-2 text-primary mb-2">
                                        <Clock className="w-5 h-5" />
                                        <span className="font-bold">Duration</span>
                                    </div>
                                    <p className="text-white text-lg">~1 Hr 15 Mins</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="flex items-center space-x-2 text-primary mb-2">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-bold">Distance</span>
                                    </div>
                                    <p className="text-white text-lg">~100 KM</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Fixed Rates</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Flight Monitoring</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Free Child Seat</span>
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

            {/* Fleet Section */}
            <section className="py-20 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Vehicle</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We have a diverse fleet to accommodate solo travelers, families, and large groups.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all group">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                                        <span className="text-primary font-bold text-xs">{vehicle.price}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{vehicle.type}</p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Passengers</span>
                                            <span className="text-white">{vehicle.passengers}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Luggage</span>
                                            <span className="text-white">{vehicle.luggage}</span>
                                        </div>
                                    </div>

                                    <Link href={`/booking?service=${encodeURIComponent("Jeddah to Makkah - " + vehicle.name)}`} className="block">
                                        <Button className="w-full bg-white text-black hover:bg-primary hover:text-black font-bold transition-all">
                                            Book Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Route Info */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">About The Route</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Pickup Locations</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We pick up from all terminals at King Abdulaziz International Airport (JED):
                                        <br />• <span className="text-white">Terminal 1 (New Airport)</span>: For most international flights (Saudia, Flynas, etc.)
                                        <br />• <span className="text-white">North Terminal</span>: For some international airlines.
                                        <br />• <span className="text-white">Hajj Terminal</span>: Dedicated for Hajj and Umrah charter flights.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Safety & Comfort</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        The journey takes approximately 75-90 minutes via the Makkah-Jeddah Highway. Our cars are equipped with AC and comfortable seating to ensure you arrive fresh for your Umrah. We can stop at the Miqat (if required) upon request.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
