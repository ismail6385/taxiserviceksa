import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Clock, Star, ArrowRight } from 'lucide-react';
import ExpertReview from '@/components/seo/ExpertReview';

export const metadata: Metadata = {
    title: '5 Hidden Historical Spots in Makkah | Beyond the Haram',
    description: 'Discover the secret historical Ziyarat spots in Makkah that most pilgrims miss. From the Jinn Mosque to the Prophet\'s Hiding Place. Verified by local experts.',
    keywords: ['Makkah hidden gems', 'Ziyarat Makkah', 'Masjid Al Jinn', 'Jabal Thawr', 'Makkah history'],
    openGraph: {
        images: [{ url: '/makkah-hidden-gems.webp', alt: 'Hidden Historical Spots in Makkah' }],
    },
};

export default function HiddenMakkahSpotsPage() {
    const spots = [
        {
            name: "Masjid Al-Jinn (Mosque of the Jinn)",
            distance: "2 km from Haram",
            description: "Located near Jannat Al-Mu'alla, this is where a group of Jinn gathered to hear the Prophet (PBUH) recite the Quran. It is one of the oldest mosques in Makkah but often overlooked by tour groups rushing to bus terminals.",
            tip: "Visit after Isha prayer for a quieter experience.",
            highlight: "Surah Al-Jinn was revealed here."
        },
        {
            name: "Masjid Al-Rayyah (Flag Mosque)",
            distance: "1.5 km from Haram",
            description: "This spot marks where the Prophet (PBUH) planted his flag during the Conquest of Makkah. It sits on a hill and offers a unique vantage point of the old city, away from the skyscrapers.",
            tip: "Requires a short hike; wear comfortable shoes.",
            highlight: "Historical significance of the Conquest."
        },
        {
            name: "The Library of Makkah (Birthplace of the Prophet)",
            distance: "500m from Marwah Gate",
            description: "Known locally as Maktaba Makkah, this building stands on the site believed to be the house of Abdullah ibn Abdul Muttalib, where the Prophet (PBUH) was born. While entry is often restricted, the exterior relevance is immense.",
            tip: "Located remarkably close to the Marwah exit.",
            highlight: "The profound energy of the Birthplace."
        },
        {
            name: "Mount Abu Qubais",
            distance: "Adjacent to Safa",
            description: "This is believed to be the first mountain created by Allah on Earth. It overlooks the Kaaba directly. Today, the Royal Palaces sit atop it, but the base near Safa is accessible and holds deep historical weight.",
            tip: "Best viewed from the upper floors of the Haram extension.",
            highlight: "The First Mountain on Earth."
        },
        {
            name: "Masjid Al-Shajarah (Mosque of the Tree)",
            distance: "3 km from Haram",
            description: "Across from Masjid Al-Jinn, this marks the spot where a tree was called by the Prophet (PBUH) and it walked to him to testify his prophethood. It is a quiet, spiritual spot for reflection.",
            tip: "Combine this with your visit to Jannat Al-Mu'alla.",
            highlight: "A site of a clear physical miracle."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-8">
                    <div className="relative h-64 sm:h-96">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                            {/* Placeholder for Main Blog Image */}
                            <Camera className="w-16 h-16 opacity-20" />
                            <span className="ml-2">Hero Image: Makkah Old Streets</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Cultural Guide
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            5 Hidden Historical Spots in Makkah That Most Pilgrims Miss
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Beyond the Haram and the Clock Tower lies a layer of history that mass tourism often overlooks. Here is your guide to the secret spiritual corners of the Holy City.
                        </p>

                        <ExpertReview
                            reviewerName="Dr. Ahmed Al-Masri"
                            reviewerTitle="Islamic History Researcher"
                            reviewDate="Jan 2025"
                            expertise={["Makkah Heritage", "Archaeological Sites"]}
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
                                        <span>{spot.distance}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                {spot.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                    <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
                                        <Star className="w-4 h-4" /> Historical Highlight
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

                {/* Internal Linking & Call to Action (The "Configuration" Part) */}
                <div className="mt-12 bg-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Want to Visit These Ziyarat Spots?</h2>
                        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                            Standard buses won't take you to these hidden gems. Book a private GMC Yukon or Taxi Day Rental to explore Makkah's history at your own pace.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/locations/makkah">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                                    Browse Makkah Fleet
                                </Button>
                            </Link>
                            <Link href="/booking">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                                    Check Taxi Prices
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none">
                        {/* Abstract Pattern */}
                        <svg width="100%" height="100%">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
