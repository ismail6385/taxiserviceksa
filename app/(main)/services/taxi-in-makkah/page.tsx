import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Users, Star, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Car Transfer, Taxi and Chauffeur Service in Makkah | Hotel to Haram & Ziyarat | Taxi Service KSA',
    description: 'Local taxi service within Makkah for pilgrims. Hotel to Haram shuttles, short Ziyarat trips, and intra-city rides. Available 24/7 during Umrah and Hajj season.',
    keywords: ['Local taxi Makkah', 'Hotel to Haram taxi', 'Makkah city rides', 'Pilgrims taxi Makkah', 'Intra-city taxi Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-makkah/',
            'ur': 'https://taxiserviceksa.com/ur/services/taxi-in-makkah/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-makkah/',
        },
    },
    openGraph: {
        title: 'Private Car Transfer, Taxi and Chauffeur Service in Makkah | Hotel to Haram & Ziyarat | Taxi Service KSA',
        description: 'Reliable private taxi service in Makkah. Premium fleet available 24/7 for intercity travel and Ziyarat.',
        url: 'https://taxiserviceksa.com/services/taxi-in-makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'Taxi in Makkah service' }],
    },
};

export default function TaxiInMakkahPage() {
    const fleet = [
        { name: 'GMC', type: 'Family SUV', pax: '7', lugg: '4', img: 'Car', note: 'Families making frequent hotel-to-Haram trips during prayer times.' },
        { name: 'Cadillac Escalade', type: 'Premium SUV', pax: '7', lugg: '4', img: 'Car', note: 'VIP pilgrim groups needing a discreet, spacious ride to the Haram.' },
        { name: 'Mercedes Vito', type: 'Luxury Van', pax: '7', lugg: '4', img: 'Car', note: 'Small Ziyarat groups touring Quba, Mina, and Jabal al-Noor.' },
        { name: 'Mercedes Sprinter', type: 'Executive Minibus', pax: '14', lugg: '4', img: 'Car', note: 'Mid-size pilgrim groups on a full-day Ziyarat itinerary.' },
        { name: 'Luxurious Bus', type: 'Large Group Transport', pax: '25', lugg: '4', img: 'Users', note: 'Large Umrah group logistics between hotel, Haram, and Ziyarat sites.' },
        { name: 'Mercedes S-Class', type: 'Luxury Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Solo or couple pilgrims wanting a quiet, comfortable Haram shuttle.' },
        { name: 'BMW', type: 'Luxury Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Individual hotel-to-Haram transfers, any prayer time.' },
        { name: 'Ford Taurus 2026', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Everyday hotel pickups for one or two pilgrims.' },
        { name: 'Genesis 2023', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Comfortable option for elderly pilgrims needing shorter walks.' },
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Local Taxi & Ziyarat Chauffeur Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Makkah"
        },
        "description": "Local taxi and chauffeur service within Makkah for pilgrims — hotel to Al Haram shuttles, short Ziyarat site visits, and intra-city rides, available 24/7.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on trip"
        }
    };

    const faqs = [
        { question: 'How far is my hotel from Al Haram?', answer: 'Most Jabal Omar and Ajyad hotels are within 1-2 km of Al Haram — a 5-15 minute ride depending on prayer-time pedestrian closures.' },
        { question: 'Can you take me to nearby Ziyarat sites like Jabal al-Noor or Mina?', answer: 'Yes. We cover short local Ziyarat trips to Jabal al-Noor, Mina, Muzdalifah, and Jabal Thawr, with the driver waiting on-site.' },
        { question: 'Do you have large vehicles for families in Makkah?', answer: 'Yes. We have 7-seater vehicles like the Cadillac Escalade and GMC, plus larger options like the Mercedes Vito, Mercedes Sprinter (14 pax), and a Luxurious Bus for up to 25 people.' },
        { question: 'Are your taxi prices in Makkah fixed?', answer: 'Yes, 100% fixed. We do not use meters — every local ride has a fixed, upfront price with no extra charge for traffic or prayer-time delays.' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema-makkah-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={['/makkah-clock-tower.webp', '/makkah-kaaba-night.webp']}
                h1Text="Private Car Transfer, Taxi and Chauffeur Service in Makkah - Hotel to Haram & Ziyarat"
                bookingFormTitle="Get a quote for your Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Chauffeur Service
                    </span>
                }
                subtitle="Pre-book Reliable Private Cars & SUVs for Hajj, Umrah, and Intercity Routes."
                location="24/7 Availability | Local Drivers | Fixed Fares"
            />

            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/services/" className="text-gray-500 hover:text-primary transition-colors">Services</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">Taxi in Makkah</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Heading out of Makkah?</h2>
                            <p className="text-gray-600">Select your destination for specific route details and pricing.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/routes/makkah-madinah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Madinah
                                </Button>
                            </Link>
                            <Link href="/routes/makkah-jeddah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Jeddah Airport
                                </Button>
                            </Link>
                            <Link href="/routes/makkah-taif/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Taif
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and The "Why" */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Hotel to Haram &amp; Local Ziyarat</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Local Taxi Service Within Makkah
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>Need a quick, reliable ride from your hotel near the Haram (such as Jabal Omar) to Al Haram itself, or a short trip to a nearby Ziyarat site? This page covers local rides <strong>within Makkah</strong> — for a long-distance trip to Madinah or Jeddah, see the intercity routes below.</p>
                            <p>We do not operate as a standard metered street taxi. Our drivers know the Haram's complex pedestrian zones and prayer-time crowd patterns, and every fare is fixed before you get in the car — no negotiating during rush hour.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hotel to Haram Shuttle</h3>
                            <p className="text-gray-600 text-sm">Direct rides between your Jabal Omar or Ajyad hotel and Al Haram, any time of day.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Local Ziyarat Sites</h3>
                            <p className="text-gray-600 text-sm">Short trips to Jabal al-Noor, Mina, Muzdalifah, and Jabal Thawr with a waiting driver.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">All Prayer Times</h3>
                            <p className="text-gray-600 text-sm">Fixed fares around the clock, including Fajr and Tahajjud — no surge pricing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Premium Vehicles</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Makkah Fleet</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            From state-of-the-art sedans to spacious group transport, carefully selected for comfort during long journeys across Saudi Arabia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {fleet.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group">
                                <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {v.img === 'Car' ? <Car className="w-7 h-7 text-primary" /> : <Users className="w-7 h-7 text-primary" />}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{v.name}</h3>
                                <p className="text-sm font-semibold text-primary mb-6">{v.type}</p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{v.pax} Passengers</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Briefcase className="w-5 h-5 text-gray-400" />
                                        <span>{v.lugg} Luggage</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                        </div>
                                        <span>Air Conditioning</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-xs mt-4 border-t border-white/10 pt-3">{v.note}</p>

                                <Link href="/booking/" className="mt-8 relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary/20 rounded-xl group-hover:bg-primary group-hover:text-black">
                                    <span className="relative font-bold">WhatsApp Booking for This Vehicle</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Trust Signals & Social Proof */}
             <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <EntityTrustSignal 
                            brandName="TaxiServiceKSA Makkah"
                            description="The preferred premium transfer choice for international Umrah groups, VIPs, and business travelers visiting the Holy City."
                            foundingDate="2016"
                            metrics={[
                                { label: 'Route Experts', value: '100%', icon: MapPin },
                                { label: 'On-Time', value: '24/7', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 relative overflow-hidden">
                            <Star className="absolute -top-10 -right-10 w-48 h-48 text-yellow-100 opacity-50" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Why We Do Not Use Meters</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                Standard taxis in Makkah often use meters, which can lead to unpredictable high costs when stuck in heavy traffic around the Haram, especially during Ramadan or Hajj. 
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10">
                                Our company operates strictly on a **fixed-fare model**. We analyze the distance, vehicle type, and current routing beforehand. You get a set price. Even if we encounter absolute gridlock traffic, your fare does not go up a single Riyal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Makkah" */}
            <MicroSemanticFAQ
                        contextName="Taxi In Makkah"
                faqs={[
                    {
                        question: "How far is my hotel from Al Haram?",
                        shortAnswer: "Usually a 5–15 minute ride.",
                        detailedAnswer: "Most Jabal Omar and Ajyad hotels are within 1–2 km of Al Haram — a 5–15 minute ride depending on prayer-time pedestrian closures. Book via WhatsApp with your hotel name and we'll confirm the fixed fare.",
                        perspectives: []
                    },
                    {
                        question: "Can you take me to nearby Ziyarat sites like Jabal al-Noor or Mina?",
                        shortAnswer: "Yes, with a waiting driver.",
                        detailedAnswer: "Yes. We cover short local Ziyarat trips to Jabal al-Noor, Mina, Muzdalifah, and Jabal Thawr, with the driver waiting on-site. For a full-day Ziyarat itinerary across Makkah, ask about our extended packages.",
                        perspectives: []
                    },
                    {
                        question: "Do you have large vehicles for families in Makkah?",
                        shortAnswer: "Yes.",
                        detailedAnswer: "Absolutely. We have 7-seater vehicles like the Cadillac Escalade and GMC, as well as larger options like the Mercedes Vito (7 pax), Mercedes Sprinter (14 pax), and a Luxurious Bus for groups of up to 25 people with their luggage.",
                        perspectives: []
                    },
                    {
                        question: "Are your taxi prices in Makkah fixed?",
                        shortAnswer: "Yes, 100% fixed.",
                        detailedAnswer: "Yes. Unlike street taxis, we do not use meters. Every local ride booked through us has a fixed, upfront price. You will not pay anything extra for traffic or prayer-time delays.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

