'use client';

import { useState } from 'react';
import FleetCard from '@/components/FleetCard';
import { Car, Shield, User, Clock, CheckCircle2, Star, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FleetPage() {
    const [filter, setFilter] = useState('All');

    const fleet = [
        {
            name: "GMC Yukon",
            type: "Luxury",
            image: "/gmc-yukon.webp",
            passengers: 7,
            luggage: 5,
            features: ["Luxury Interior", "Extra Legroom", "VIP Experience", "Premium Sound System"],
            href: "/fleet/gmc-yukon"
        },
        {
            name: "Hyundai Staria",
            type: "Luxury",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["Modern Design", "Spacious", "Family Travel", "USB Charging"],
            href: "/fleet/hyundai-staria"
        },
        {
            name: "Toyota Camry",
            type: "Economy",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "Economic Choice", "City Travel"],
            href: "/fleet/toyota-camry"
        },
        {
            name: "Hyundai Starex",
            type: "Economy",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport Transfer"],
            href: "/fleet/hyundai-starex"
        },
        {
            name: "Toyota Hiace",
            type: "Group",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["Group Travel", "Spacious Interior", "Umrah Groups", "Reliable"],
            href: "/fleet/toyota-hiace"
        },
        {
            name: "Toyota Coaster",
            type: "Group",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["Large Groups", "Tour Bus", "Corporate Events", "Long Distance"],
            href: "/fleet/toyota-coaster"
        }
    ];

    const filteredFleet = filter === 'All' ? fleet : fleet.filter(v => v.type === filter);
    const categories = ['All', 'Luxury', 'Economy', 'Group'];

    return (
        <div className="bg-white min-h-screen">
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
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        World-Class Fleet
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Experience Saudi Arabia in absolute comfort. From the executive <span className="text-white font-semibold">GMC Yukon</span> to the reliable <span className="text-white font-semibold">Camry</span>, every vehicle is meticulously maintained.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <SlidersHorizontal className="w-4 h-4" /> Filter Vehicles:
                    </div>
                    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto max-w-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-300 ${filter === cat
                                        ? 'bg-white text-black shadow-md scale-105'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="hidden sm:block text-sm text-gray-400">
                        Showing {filteredFleet.length} vehicles
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFleet.map((vehicle, index) => (
                        <div key={index} className="transform hover:-translate-y-2 transition-transform duration-500">
                            <FleetCard {...vehicle} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
                            <p className="text-gray-500 leading-relaxed">All vehicles are equipped with GPS tracking and undergo rigorous daily safety inspections.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Immaculate Condition</h3>
                            <p className="text-gray-500 leading-relaxed">We maintain a strict "Showroom Clean" policy. Every car is sanitized before pickup.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <User className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Chauffeurs</h3>
                            <p className="text-gray-500 leading-relaxed">Our drivers are uniformed, multilingual, and trained in hospitality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
