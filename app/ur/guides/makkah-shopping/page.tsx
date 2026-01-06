
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ShoppingBag, MapPin, Tag, Star, Gift } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Makkah Shopping Guide | Malls, Souqs & Gifts',
    description: 'Best places for shopping in Makkah. Guide to Abraj Al Bait Mall, Makkah Mall, and traditional souqs. Where to buy dates, perfumes, gold, and souvenirs.',
    keywords: ['Makkah shopping malls', 'Abraj Al Bait mall', 'Buy dates Makkah', 'Makkah gold market', 'Souvenirs Makkah'],
    alternates: {
        canonical: 'https://transferksa.com/guides/makkah-shopping/',
    },
};

export default function MakkahShoppingPage() {

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="shopping-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Makkah Shopping Guide"
                    })
                }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="Shopping in Makkah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Malls & Souqs
                    </span>
                }
                subtitle="From Luxuries to Souvenirs"
                location="Makkah Markets"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        Whether you are looking for premium dates, Oud perfumes, or prayer mats as gifts, Makkah offers a diverse shopping experience.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Malls */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-emerald-600" /> Modern Malls
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-lg mb-1">Abraj Al Bait (Clock Tower) Mall</h3>
                                    <p className="text-gray-600 text-sm mb-2">Located directly in front of the Haram. 5 floors of international brands, food court, and perfume shops.</p>
                                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Luxury & Convenience</span>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-lg mb-1">Makkah Mall</h3>
                                    <p className="text-gray-600 text-sm mb-2">Located in Al Aziziyah, away from the Haram crowds. Great for families with kids (entertainment zones) and fashion shopping.</p>
                                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Family Friendly</span>
                                </div>
                            </div>
                        </div>

                        {/* Souqs */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Tag className="w-6 h-6 text-amber-600" /> Traditional Markets
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                    <h3 className="font-bold text-lg mb-1">Souq Al Khalil</h3>
                                    <p className="text-gray-600 text-sm mb-2">Part of the Jebel Omar complex. Good mix of mid-range brands and local gift shops.</p>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                    <h3 className="font-bold text-lg mb-1">Kakia Wholesale Market</h3>
                                    <p className="text-gray-600 text-sm mb-2">Best place for buying dates, fruits, and wholesale items in bulk.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">What to Buy?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <Gift className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                            <div className="font-bold">Ajwa Dates</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <Star className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                            <div className="font-bold">Oud / Perfume</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <ShoppingBag className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                            <div className="font-bold">Prayer Mats</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                            <Tag className="w-8 h-8 mx-auto text-red-500 mb-2" />
                            <div className="font-bold">Gold</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
