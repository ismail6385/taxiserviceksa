
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Star, ArrowRight } from 'lucide-react';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: 'Taif Rose Festival Guide 2025 | Dates, Locations & Tips',
    description: 'Complete guide to the Taif Rose Festival. Learn when to visit, best rose farms to see, and how to buy authentic Taif Rose oil. Taxi transfers available.',
    keywords: ['Taif Rose Festival', 'Taif Rose Season', 'Rose Factories Taif', 'Taif Tourism', 'Rose Oil Saudi Arabia'],
    openGraph: {
        images: [{ url: '/taif-rose-festival.webp', alt: 'Taif Rose Festival' }],
    },
};

export default function TaifRoseFestivalPage() {
    const spots = [
        {
            name: "Al Hada Rose Farms",
            distance: "Al Hada Ring Road",
            description: "Famous for terraced rose gardens, this area offers spectacular views and fresh cool air. Best visited in the early morning to see farmers harvesting the roses.",
            tip: "Visit between 6 AM and 9 AM for the harvest.",
            highlight: "Mountain views combined with pink fields."
        },
        {
            name: "Bin Salman Rose Factory",
            distance: "Wadi Mahram",
            description: "One of the oldest and most traditional distilleries. Watch the ancient process of extracting rose water and oil using copper pots.",
            tip: "Buy the 'Bride of the Orchard' rose water here.",
            highlight: "Traditional distillation demonstration."
        },
        {
            name: "Al Shafa Mountains",
            distance: "25km from City Center",
            description: "Higher in altitude than Al Hada, Al Shafa is known for its fruit orchards and rose farms. It's a perfect spot for a family picnic surrounded by nature.",
            tip: "Bring a jacket, it gets cold even in summer.",
            highlight: "Combined fruit and rose tour."
        },
        {
            name: "Rashid Husain Al Qorashei Factory",
            distance: "Al Hada",
            description: "A modern facility that welcomes tourists with a showroom and cafe. Great for buying gifts and learning about the science of perfume making.",
            tip: "Their rose-infused tea is a must-try.",
            highlight: "Visitor-friendly with English guides."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-8">
                    <div className="relative h-64 sm:h-96">
                        <div className="absolute inset-0 bg-rose-50 flex items-center justify-center text-rose-400">
                            {/* Placeholder for Main Blog Image */}
                            <Calendar className="w-16 h-16 opacity-20" />
                            <span className="ml-2">Hero Image: Pink Roses of Taif</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Seasonal Event
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Taif Rose Festival 2025: The Ultimate Visitor's Guide
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Every spring, the mountains of Taif turn pink. Discover the scent that perfumes the Holy Kaaba and explore the farms producing the world's most expensive rose oil.
                        </p>

                        <ExpertReview
                            reviewerName="Sarah Al-Amri"
                            reviewerTitle="Saudi Heritage Guide"
                            reviewDate="Jan 2025"
                            expertise={["Taif Agriculture", "Cultural Festivals"]}
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
                                        <span className="text-rose-500 text-3xl">#{index + 1}</span>
                                        {spot.name}
                                    </h2>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{spot.distance}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                {spot.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                                    <h4 className="font-bold text-rose-900 flex items-center gap-2 mb-1">
                                        <Star className="w-4 h-4" /> Highlight
                                    </h4>
                                    <p className="text-rose-800 text-sm">{spot.highlight}</p>
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
                <div className="mt-12 bg-rose-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Smell the Roses Yourself</h2>
                        <p className="text-rose-100 mb-8 text-lg max-w-2xl mx-auto">
                            Don't miss the harvest season. Book a private driver to take you on a scent-filled journey through the Taif mountains.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/locations/taif">
                                <Button size="lg" className="bg-white text-rose-900 hover:bg-rose-50 font-bold px-8">
                                    Book Taif Tour
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
