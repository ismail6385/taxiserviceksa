
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Cloud, Sun, Thermometer, Wind, AlertCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Madinah Weather Guide | Best Time to Visit & Climate',
    description: 'Seasonal weather guide for Madinah. Average temperatures, summer heat warnings, and the best months for Umrah. Plan your packing accordingly.',
    keywords: ['Madinah weather', 'Best time to visit Madinah', 'Madinah temperature by month', 'Umrah weather guide', 'Madinah climate'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/madinah-weather/',
    },
};

export default function MadinahWeatherPage() {

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="weather-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Madinah Climate Guide"
                    })
                }}
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-2.webp']}
                h1Text="Madinah Weather Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Seasonal Planner
                    </span>
                }
                subtitle="Best Time to Visit"
                location="Madinah Al Munawwarah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        Madinah has a desert
                        climate with very hot summers and mild winters. Knowing what to expect helps you pack the right clothing for your spiritual journey.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left align-middle items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Overview</h2>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Cloud className="w-6 h-6 text-blue-500" />
                                        <h3 className="font-bold text-lg text-blue-900">Winter (Nov - Feb)</h3>
                                    </div>
                                    <p className="text-blue-800 text-sm">
                                        <strong>Best time to visit.</strong> Days are pleasant (20°C - 25°C) and nights can be cool (10°C - 15°C). Light jacket recommended for Fajr and Isha.
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Sun className="w-6 h-6 text-amber-500" />
                                        <h3 className="font-bold text-lg text-amber-900">Summer (Jun - Aug)</h3>
                                    </div>
                                    <p className="text-amber-800 text-sm">
                                        <strong>Extremely Hot.</strong> Temperatures often exceed 45°C. Outdoor activities should be limited to night time. Hydration is critical.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                                <Thermometer className="w-5 h-5" /> Average Highs
                            </h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500">Jan</div>
                                    <div className="font-bold">24°C</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500">Apr</div>
                                    <div className="font-bold">35°C</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500">Jul</div>
                                    <div className="font-bold text-red-600">43°C</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-xs text-gray-500">Oct</div>
                                    <div className="font-bold">36°C</div>
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
                                question: "Does it rain in Madinah?",
                                shortAnswer: "Rarely.",
                                detailedAnswer: "Rainfall is scarce and usually occurs in winter/spring as short, heavy thunderstorms. When it rains, it is considered a blessing (Rahmah).",
                                perspectives: [
                                    {
                                        role: "Warning",
                                        icon: "AlertCircle",
                                        insight: "Flash floods can occur in valleys. Avoid wadis during rain."
                                    }
                                ]
                            },
                            {
                                question: "What should I wear?",
                                shortAnswer: "Loose, cotton fabrics.",
                                detailedAnswer: "Given the religious nature and heat, loose-fitting cotton clothing is best. White is preferred to reflect the sun. Sunglasses are essential.",
                                perspectives: [
                                    {
                                        role: "Tip",
                                        icon: "Sun",
                                        insight: "The marble floor of the Haram is cooled, but the outside courtyard tiles can burn feet at noon. Wear sandals until the entrance."
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
