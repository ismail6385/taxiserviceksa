import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Car Transfer, Taxi and Chauffeur Service in Jeddah | Local City Rides | Taxi Service KSA',
    description: 'Need a local taxi in Jeddah? We cover same-day city rides, hotel pickups, shopping mall transfers, and short trips within Jeddah. Book online, fixed price.',
    keywords: ['Local taxi Jeddah', 'Taxi within Jeddah city', 'Jeddah city rides', 'Hotel pickup Jeddah', 'Same day taxi Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/services/taxi-in-jeddah/',
            'ur': 'https://taxiserviceksa.com/ur/services/taxi-in-jeddah/',
            'x-default': 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
        },
    },
    openGraph: {
        title: 'Private Car Transfer, Taxi and Chauffeur Service in Jeddah | Local City Rides | Taxi Service KSA',
        description: 'Same-day local taxi rides within Jeddah — Corniche hotels, malls, business districts, and hotel-to-hotel transfers.',
        url: 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/jeddah.webp', alt: 'Local taxi service in Jeddah' }],
    },
};

export default function TaxiInJeddahPage() {
    const fleet = [
        { name: 'Toyota Camry', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Best for a solo mall run or one-off meeting.' },
        { name: 'Mercedes S-Class', type: 'Luxury Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Corniche hotel arrivals and business district meetings.' },
        { name: 'Ford Taurus 2026', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car', note: 'City rides for one or two passengers.' },
        { name: 'Genesis 2023', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car', note: 'Comfortable pick for a full day of local meetings.' },
        { name: 'GMC', type: 'Family SUV', pax: '7', lugg: '4', img: 'Car', note: 'Family shopping trips with luggage room to spare.' },
        { name: 'Cadillac Escalade', type: 'Premium SUV', pax: '7', lugg: '4', img: 'Car', note: 'VIP hotel-to-hotel transfers along the Corniche.' },
        { name: 'Mercedes Vito', type: 'Luxury Van', pax: '7', lugg: '4', img: 'Car', note: 'Small groups moving between mall and hotel stops.' },
        { name: 'Mercedes Sprinter', type: 'Executive Minibus', pax: '14', lugg: '4', img: 'Car', note: 'Corporate teams touring Jeddah business districts.' },
        { name: 'Luxurious Bus', type: 'Large Group Transport', pax: '25', lugg: '4', img: 'Users', note: 'Large city-wide group logistics within Jeddah.' }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Local City Taxi & Chauffeur Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Jeddah"
        },
        "description": "Same-day pre-booked local taxi service within Jeddah city — Corniche hotels, malls, business districts, hospital visits, and hotel-to-hotel transfers.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on trip & vehicle"
        }
    };

    const faqs = [
        { question: 'Can I book a short local ride within Jeddah city?', answer: 'Yes. This service covers rides entirely within Jeddah — hotel to hotel, a mall run, or a meeting across town. Most local trips can be booked and confirmed the same day via WhatsApp.' },
        { question: 'Do you cover Jeddah Corniche hotels and the waterfront?', answer: 'Yes. We provide lobby pickups at Ritz-Carlton, Shangri-La, Waldorf Astoria, and every major hotel on the Corniche.' },
        { question: 'What about shopping trips to Red Sea Mall or Mall of Arabia?', answer: 'Yes. We handle mall and shopping-district drop-offs across Jeddah, with the option to have the driver wait or return at a scheduled time.' },
        { question: 'I need an airport pickup instead — where do I book that?', answer: 'This page is for rides within Jeddah city. For a KAIA airport pickup, book through our Jeddah Airport Transfer service, built specifically for flight-tracked arrivals.' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema-jeddah-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={['/locations/jeddah.webp', '/hero-slide-1.webp']}
                h1Text="Private Car Transfer, Taxi and Chauffeur Service in Jeddah - Local City Rides"
                bookingFormTitle="Get a quote for your Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Local City Rides
                    </span>
                }
                subtitle="Corniche Hotels, Malls, Business Districts, and Same-Day City Rides."
                location="24/7 Service | Same-Day Booking | Fixed Pricing"
            />

            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/services/" className="text-gray-500 hover:text-primary transition-colors">Services</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">Taxi in Jeddah</span>
                </div>
            </div>

            {/* Local Jeddah Destinations */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Local Jeddah Destinations</h2>
                    <p className="text-gray-600 mb-6">Same-day rides within the city — no intercity trip required.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/services/jeddah-corniche-hotel-taxi/" className="block bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-gray-900 mb-1">Corniche &amp; Waterfront Hotels</h3>
                            <p className="text-gray-600 text-sm">Ritz-Carlton, Shangri-La, Waldorf Astoria — lobby pickups along the Corniche.</p>
                        </Link>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-1">Shopping &amp; Malls</h3>
                            <p className="text-gray-600 text-sm">Red Sea Mall, Mall of Arabia, and Al Balad's historic souqs.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-1">Business Districts</h3>
                            <p className="text-gray-600 text-sm">Tahlia Street and Al Andalus meeting venues, door-to-door.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outbound routes — secondary, not this page's focus */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Traveling Outside Jeddah Instead?</h2>
                            <p className="text-gray-600 text-sm">For a KAIA airport pickup or an intercity trip, these pages cover that specifically.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/jeddah-airport-transfer/">
                                <Button variant="outline" className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Airport Transfer
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-makkah/">
                                <Button variant="outline" className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Makkah
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-madinah/">
                                <Button variant="outline" className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Madinah
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and Value Proposition */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Local City Rides</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Premium Local Taxi Service in Jeddah
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>Need a ride within Jeddah itself — a hotel-to-hotel transfer, a shopping trip to Red Sea Mall, a business meeting on Tahlia Street, or a hospital visit? A pre-booked private taxi is a more reliable, fixed-price alternative to street-hailing or waiting for a rideshare app during Jeddah's traffic.</p>
                            <p>This page covers rides <strong>inside Jeddah city</strong> — for KAIA airport pickups or a trip out to Makkah or Madinah, see the dedicated pages linked above, which are built specifically for those journeys.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Corniche &amp; Waterfront</h3>
                            <p className="text-gray-600 text-sm">Hotel-to-hotel transfers and leisure rides along the Jeddah Corniche.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mall &amp; Shopping Runs</h3>
                            <p className="text-gray-600 text-sm">Door-to-door drops at Red Sea Mall, Mall of Arabia, and Al Balad's souqs, with waiting time available.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Briefcase className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Business District Meetings</h3>
                            <p className="text-gray-600 text-sm">Punctual transfers between hotels and meeting venues across Jeddah's business districts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Local City Fleet</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Choose Your Jeddah City Vehicle</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            The right vehicle for local Jeddah errands and meetings — from a solo mall run to a full corporate team touring the city.
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

                                <a
                                    href={`https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20book%20a%20VIP%20${encodeURIComponent(v.name)}%20in%20Jeddah.`}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="mt-8 relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary/20 rounded-xl group-hover:bg-primary group-hover:text-black text-center"
                                >
                                    <span className="relative font-bold">WhatsApp Booking for This Vehicle</span>
                                </a>
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
                            brandName="TaxiServiceKSA Jeddah"
                            description="The absolute benchmark for professional, high-tier transportation inside Jeddah and extending across the Kingdom."
                            foundingDate="2016"
                            metrics={[
                                { label: 'Fixed Prices', value: '100%', icon: DollarSign },
                                { label: 'Support', value: '24/7', icon: Clock }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 relative overflow-hidden">
                            <Shield className="absolute -top-10 -right-10 w-48 h-48 text-black/5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Why Pre-book Over Ride Apps?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                Hailing a ride app in Jeddah during Corniche rush hour or a mall's peak shopping time usually means long waits, unpredictable surge pricing, and a small car not suited for shopping bags or a full family.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10"> With us, you get a **confirmed vehicle**. Our chauffeur meets you at your hotel lobby or pickup point. You get exactly the car you requested, and your price never changes, creating a completely seamless local trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Jeddah" */}
            <MicroSemanticFAQ
                        contextName="Taxi In Jeddah"
                faqs={[
                    {
                        question: "Can I book a short local ride within Jeddah city?",
                        shortAnswer: "Yes, same-day booking.",
                        detailedAnswer: "Yes. This service covers rides entirely within Jeddah — hotel to hotel, a mall run, or a meeting across town. Most local trips can be booked and confirmed the same day via WhatsApp.",
                        perspectives: []
                    },
                    {
                        question: "Do you cover Jeddah Corniche hotels and the waterfront?",
                        shortAnswer: "Yes, all major Corniche hotels.",
                        detailedAnswer: "Yes. We provide lobby pickups at Ritz-Carlton, Shangri-La, Waldorf Astoria, and every major hotel on the Corniche. See our dedicated Jeddah Corniche Hotel Taxi page for hotel-specific details.",
                        perspectives: []
                    },
                    {
                        question: "What about shopping trips to Red Sea Mall or Mall of Arabia?",
                        shortAnswer: "Yes, with waiting time.",
                        detailedAnswer: "Yes. We handle mall and shopping-district drop-offs across Jeddah, with the option to have the driver wait or return at a scheduled time.",
                        perspectives: []
                    },
                    {
                        question: "I need an airport pickup instead — where do I book that?",
                        shortAnswer: "Use our Jeddah Airport Transfer page.",
                        detailedAnswer: "This page is for rides within Jeddah city. For a KAIA airport pickup, book directly through our Jeddah Airport Transfer service, which is built specifically for flight-tracked arrivals.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

