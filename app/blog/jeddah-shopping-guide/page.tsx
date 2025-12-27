
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingBag, Coffee, Clock, Star, ArrowRight } from 'lucide-react';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'Jeddah Shopping Guide 2025 | Best Malls & Souqs',
    description: 'Ultimate guide to shopping in Jeddah. From luxury brands at Red Sea Mall to traditional bargains in Al-Balad. Taxi transfers available for shopping tours.',
    keywords: ['Jeddah Shopping Malls', 'Red Sea Mall', 'Mall of Arabia', 'Al Balad Souq', 'Jeddah Souvenirs', 'Shopping Taxi Jeddah'],
    openGraph: {
        images: [{ url: '/jeddah-shopping.webp', alt: 'Jeddah Shopping Mall' }],
    },
};

export default function JeddahShoppingGuidePage() {
    const spots = [
        {
            name: "Red Sea Mall",
            location: "Corniche Area",
            description: "One of the largest malls in Jeddah, located near the waterfront. It features luxury brands, a massive food court, and a cinema. Great for families.",
            tip: "Visit on weekdays to avoid the crowds.",
            highlight: "Luxury brands & Waterfront proximity."
        },
        {
            name: "Al-Balad (Historical Souq)",
            location: "Historic District",
            description: "For a traditional experience, walk through the narrow alleys of Al-Balad. Buy gold, spices, perfumes (Oud), and traditional textiles.",
            tip: "Bargaining is expected here!",
            highlight: "Authentic culture & cheap souvenirs."
        },
        {
            name: "Mall of Arabia",
            location: "Near Airport",
            description: "A favorite for travelers due to its proximity to the airport. It has a huge range of international high-street brands like Zara, H&M, and more.",
            tip: "Perfect for last-minute shopping before flight.",
            highlight: "KidZania for children."
        },
        {
            name: "Stars Avenue Mall",
            location: "King Abdulaziz Road",
            description: "Known for its high-end luxury boutiques and the famous Rubaiyat department store. The place to go for designer fashion.",
            tip: "Check out the luxury cafes for a break.",
            highlight: "Designer labels."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-8">
                    <div className="relative h-64 sm:h-96">
                        <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center text-emerald-400">
                            {/* Placeholder for Main Blog Image */}
                            <ShoppingBag className="w-16 h-16 opacity-20" />
                            <span className="ml-2">Hero Image: Jeddah Malls</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            City Guide
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Jeddah Shopping Guide 2025: Malls & Souqs
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Jeddah is the shopping capital of Saudi Arabia. Whether you want glitzy modern malls or the scent of spices in old markets, we have the list for you.
                        </p>

                        <ExpertReview
                            reviewerName="Layla Al-Juhani"
                            reviewerTitle="Lifestyle Editor"
                            reviewDate="Jan 2025"
                            expertise={["Fashion", "Local Markets"]}
                        />
                    </div>
                </div>

                {/* Content Blocks */}
                <div className="space-y-8">
                    {spots.map((spot, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="text-emerald-500 text-3xl">#{index + 1}</span>
                                        {spot.name}
                                    </h2>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{spot.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                {spot.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                    <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
                                        <Star className="w-4 h-4" /> Highlight
                                    </h4>
                                    <p className="text-emerald-800 text-sm">{spot.highlight}</p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                    <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                                        <Clock className="w-4 h-4" /> Pro Tip
                                    </h4>
                                    <p className="text-amber-800 text-sm">{spot.tip}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Internal Linking & Call to Action */}
                <div className="mt-12 bg-emerald-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Shop 'til You Drop</h2>
                        <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                            Need a ride between malls? Book a private driver for the day and leave your shopping bags in the car.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/locations/jeddah">
                                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8">
                                    Book Jeddah Driver
                                </Button>
                            </Link>
                            <Link href="/booking">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                                    Check Rates
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
