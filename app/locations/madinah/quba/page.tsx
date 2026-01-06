import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, BookOpen, Sun, ArrowRight, Heart, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Masjid Quba | Madinah Ziyarat Service',
    description: 'Premium VIP private transfer and executive chauffeur service to Masjid Quba. Perform Sunnah prayers in the first mosque of Islam with a professional driver.',
    keywords: ['Masjid Quba VIP transfer', 'Madinah Quba premium chauffeur', 'First Mosque VIP transport', 'Madinah Ziyarat executive car'],
    alternates: {
        canonical: 'https://transferksa.com/locations/madinah/quba/',
    },
    openGraph: {
        title: 'Taxi to Masjid Quba (The First Mosque)',
        description: 'Visit the historic Quba Mosque. Earn the reward of an Umrah by praying here. Convenient taxi transfer from your hotel.',
        url: 'https://transferksa.com/locations/madinah/quba/',
        type: 'website',
    },
};

export default function QubaPage() {
    const images = [
        '/madinah-mosque.webp', // Ideally Quba Mosque image
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    const qubaSchema = {
        "@context": "https://schema.org",
        "@type": "Mosque",
        "name": "Masjid Quba",
        "description": "The first mosque built by Prophet Muhammad (PBUH) upon his arrival in Madinah. Praying here has the reward of an Umrah.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.4392",
            "longitude": "39.6173"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="quba-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(qubaSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Masjid Quba"
                bookingFormTitle="Book Heritage Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Chauffeur Heritage
                    </span>
                }
                subtitle="The First Mosque in Islamic History"
                location="Saturday Morning Sunnah | Madinah VIP"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Masjid%20Nabawi&dropoff=Masjid%20Quba">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Full VIP Ziyarat Tour
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Heritage Tours, intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-green-700 font-bold uppercase tracking-wider text-sm">Spiritual Journey</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Prayer with the Reward of Umrah
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Masjid Quba is located on the outskirts of Madinah. It holds immense spiritual significance, as the Prophet (PBUH) said that whoever purifies themselves at home and comes to Masjid Quba to pray two Raka'at will have the reward of an Umrah.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                While there is a new walking path from the Haram, it is over 3km long and can be exhausting in the heat, especially for the elderly. A taxi is the most comfortable way to visit.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Star className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Umrah Reward</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Sun className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Avoid the Heat</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Wait & Return</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Vans</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Times to Visit</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Saturday Mornings</h4>
                                        <p className="text-sm text-gray-500">Following the Sunnah of the Prophet (PBUH) who used to visit every Saturday.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Early Morning (Duha)</h4>
                                        <p className="text-sm text-gray-500">To avoid the crowds and midday heat. The mosque is open 24/7 (usually).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Between Maghrib & Isha</h4>
                                        <p className="text-sm text-gray-500">A peaceful time to reflect and recite Quran.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Walking Path",
                                commonBelief: "We should walk.",
                                reality: "The 'Quba Walking Path' is beautiful but long (3km+). In summer, it is dangerous due to heatstroke risk. A private VIP transfer is safer for families.",
                                truthRange: "Long Walk",
                                factors: ["Heat", "Distance"]
                            },
                            {
                                topic: "Transport",
                                commonBelief: "Easy to find.",
                                reality: "Getting TO Quba is easy. Getting transport BACK to the hotel can be chaotic with erratic pricing. Pre-booking a VIP return trip avoids the hassle.",
                                truthRange: "Return Hard",
                                factors: ["Crowds", "Pricing"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Masjid Quba from Masjid Nabawi?",
                        shortAnswer: "10-15 mins",
                        detailedAnswer: "It is about 3.5 km away, which takes 10-15 minutes by car depending on traffic lights.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer full Ziyarat tours?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can combine Masjid Quba with Mount Uhud, Seven Mosques, and Masjid Qiblatain in a single trip.",
                        perspectives: []
                    },
                    {
                        question: "Is there a ladies section?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there is a large, separate prayer area and ablation facility for women.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
