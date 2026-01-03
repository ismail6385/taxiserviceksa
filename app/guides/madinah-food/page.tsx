
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Utensils, Coffee, Star, MapPin, AlertCircle, ArrowRight, Car, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Madinah Food Guide | Best Restaurants Near Haram',
    description: 'Where to eat in Madinah? Guide to the best restaurants near Prophet\'s Mosque. Al Baik locations, traditional Mandi, Bukhari rice, and fine dining.',
    keywords: ['Madinah restaurants', 'Best food near Masjid Nabawi', 'Al Baik Madinah', 'Mandi Madinah', 'Places to eat Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/madinah-food/',
    },
};

export default function MadinahFoodPage() {

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="food-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Madinah Dining Guide"
                    })
                }}
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="Madinah Food Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Culinary Delights
                    </span>
                }
                subtitle="From Broast to Mandi"
                location="Madinah Al Munawwarah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        Experience the traditional flavors of Hejazi cuisine in <Link href="/locations/madinah/" className="text-white underline hover:text-primary transition-colors">Al-Madinah Al-Munawwarah</Link> or grab a quick meal at famous fast-food spots near the Haram.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Star className="w-6 h-6 text-red-500" /> Popular Picks
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-lg mb-1">Al Baik</h3>
                                    <p className="text-gray-600 text-sm mb-2">The legendary Saudi fried chicken chain. A must-try. Expect long queues.</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400"><MapPin className="w-3 h-3" /> Near Haram (multiple branches)</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-lg mb-1">Arabesque</h3>
                                    <p className="text-gray-600 text-sm mb-2">Fine dining with views of the Haram. Best for families wanting a quiet, high-quality meal.</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400"><MapPin className="w-3 h-3" /> Oberoi Hotel</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Utensils className="w-6 h-6 text-emerald-600" /> Traditional Cuisine
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-lg mb-1">Mandi & Madhbi</h3>
                                    <p className="text-gray-600 text-sm mb-2">Try local spots like <strong>Romansiah</strong> for traditional rice and meat dishes. Many are located on the way to the <Link href="/routes/makkah-madinah/" className="text-emerald-700 hover:underline">Madinah to Makkah taxi service</Link> pickup points.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-lg mb-1">Dates & Coffee</h3>
                                    <p className="text-gray-600 text-sm mb-2">Visit the Central Dates Market to taste dozens of varieties like Ajwa, Safawi, and Sukari with Arabic coffee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Is tap water safe to drink?",
                                shortAnswer: "No.",
                                detailedAnswer: "Always drink bottled water or Zamzam water provided in the Haram. Tap water is for washing only.",
                                perspectives: [
                                    {
                                        role: "Health",
                                        icon: "AlertCircle",
                                        insight: "Zamzam coolers inside the mosque are cold and safe."
                                    }
                                ]
                            },
                            {
                                question: "Are there western food chains?",
                                shortAnswer: "Yes.",
                                detailedAnswer: "You will find McDonald's, KFC, Burger King, and Starbucks in the malls surrounding the Haram (e.g., Taiba Commercial Center).",
                                perspectives: [
                                    {
                                        role: "Option",
                                        icon: "Coffee",
                                        insight: "Good for a familiar taste. If you need to reach restaurants further from the Haram, you should <Link href='/booking/' className='text-primary font-bold hover:underline'>book a ride in Madinah</Link> in advance."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}

