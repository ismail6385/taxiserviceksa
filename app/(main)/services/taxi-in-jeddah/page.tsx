import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Taxi Jeddah to Makkah | Jeddah Airport Taxi | Taxi in Jeddah',
    description: 'Looking for the best online taxi in Jeddah? We provide Jeddah Airport taxi services, VIP chauffeur cars, and direct transfers Jeddah to Makkah or Madinah.',
    keywords: ['Taxi Jeddah to Makkah', 'Jeddah Airport Taxi', 'Taxi in Jeddah', 'Jeddah to Makkah Taxi', 'Taxi Jeddah Airport to Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
    },
    openGraph: {
        title: 'Taxi in Jeddah | Premium Chauffeured Cars',
        description: 'Elite private taxis and executive SUVs in Jeddah for VIPs, corporate travel, and Umrah pilgrims.',
        url: 'https://taxiserviceksa.com/services/taxi-in-jeddah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/jeddah.webp', alt: 'Premium Taxi service in Jeddah' }],
    },
};

export default function TaxiInJeddahPage() {
    const fleet = [
        { name: 'Mercedes S-Class', type: 'Luxury Sedan', pax: '3', lugg: '2', img: 'Car' },
        { name: 'BMW', type: 'Luxury Sedan', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Cadillac Escalade', type: 'Premium SUV', pax: '7', lugg: '4', img: 'Car' },
        { name: 'GMC', type: 'Family SUV', pax: '7', lugg: '4', img: 'Car' },
        { name: 'Ford Taurus 2025', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Genesis 2023', type: 'Executive Sedan', pax: '3', lugg: '2', img: 'Car' },
        { name: 'Mercedes Vito', type: 'Luxury Van', pax: '7', lugg: '4', img: 'Car' },
        { name: 'Mercedes Sprinter', type: 'Executive Minibus', pax: '14', lugg: '4', img: 'Car' },
        { name: 'Luxurious Bus', type: 'Large Group Transport', pax: '25', lugg: '4', img: 'Users' }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "VIP Taxi & Airport Transfer",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Jeddah"
        },
        "description": "Exclusive 24/7 pre-booked VIP taxi service in Jeddah. We specialize in KAIA Airport pickups, corporate chauffeur services, and direct Makkah transfers.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on route & vehicle"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema-jeddah-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={['/locations/jeddah.webp', '/hero-slide-1.webp']}
                h1Text="Taxi Jeddah"
                bookingFormTitle="Get a quote for your Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Transport Hub
                    </span>
                }
                subtitle="VIP Airport Transfers, Corporate Travel, and Premium Chauffeurs."
                location="24/7 Service | KAIA Pickups | Fixed Pricing"
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

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Jeddah Routes</h2>
                            <p className="text-gray-600">Select your destination from Jeddah for VIP transport.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/routes/jeddah-makkah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Makkah
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-madinah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Madinah
                                </Button>
                            </Link>
                            <Link href="/routes/jeddah-alula/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to AlUla
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
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Corporate & Airport Experts</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Premium Taxi Service in Jeddah
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>Arriving at **King Abdulaziz International Airport (KAIA)** and need immediate, VIP transport? Or perhaps you are an executive needing a reliable chauffeur for a full day of meetings along the Jeddah Corniche? Finding a premium **taxi in Jeddah** is no longer a hassle with our pre-booked chauffeur service.</p>
                            <p>We provide a strictly high-end alternative to rideshare apps and standard green street taxis. Our fleet includes the latest Mercedes, BMW, and Cadillac models. We specialize in seamless airport pickups (where our driver waits with a sign), intercity trips to Makkah for Umrah, and executive VIP car rentals with a driver.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Plane className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KAIA Airport Service</h3>
                            <p className="text-gray-600 text-sm">Meet & Greet at arrivals. We track your flight, so even if you land early or late, your chauffeur will be waiting.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Group Logistics</h3>
                            <p className="text-gray-600 text-sm">From luxury Mercedes Vito vans to 25-seater executive buses, we handle transport for large groups, diplomats, and families.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Makkah Transfers</h3>
                            <p className="text-gray-600 text-sm">Land in Jeddah and travel directly to your hotel in Makkah without waiting for trains or buses. Private and dignified.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Executive Selection</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Jeddah Executive Fleet</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We operate the finest luxury models available in Saudi Arabia. Perfect for impressing corporate clients or ensuring maximum comfort for your family.
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
                                
                                <Link href="/booking/" className="mt-8 relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary/20 rounded-xl group-hover:bg-primary group-hover:text-black">
                                    <span className="relative font-bold">Get Quote for This Vehicle</span>
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
                                Using local ride apps at Jeddah Airport during peak arrival times usually means long waits, unpredictable surge pricing, and smaller cars not suited for heavy luggage. 
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10">
                                With us, you get a **confirmed VIP vehicle**. Our chauffeur greets you inside the terminal. You get exactly the luxury car you requested (like an S-Class or Escalade), and your price never changes, creating a completely seamless travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Jeddah" */}
            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Can I Request a quote for a VIP taxi from Jeddah Airport?",
                        shortAnswer: "Yes, 24/7 Meet & Greet.",
                        detailedAnswer: "Yes, airport transfers from KAIA are our specialty. Our driver will meet you at the arrivals hall with a name board, assist with your luggage, and take you directly to your hotel in Jeddah or Makkah.",
                        perspectives: []
                    },
                    {
                        question: "What types of cars do you have in Jeddah?",
                        shortAnswer: "Premium SUVs, Sedans & Vans.",
                        detailedAnswer: "Our Jeddah fleet focuses on luxury and executive comfort. We offer the Mercedes S-Class, BMW, Genesis, Cadillac Escalade, GMC, and spacious passenger vans like the Mercedes Sprinter and Vito.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer full-day chauffeur service in Jeddah?",
                        shortAnswer: "Yes.",
                        detailedAnswer: "Yes, if you have business meetings, corporate events, or simply want to explore the city, you can rent a vehicle with a professional chauffeur for a full day (8-12 hours).",
                        perspectives: []
                    },
                    {
                        question: "How do I pay for my taxi in Jeddah?",
                        shortAnswer: "Advance or Cash.",
                        detailedAnswer: "You can lock in your fixed rate by booking via our online form or sending an email. We offer flexible payment options to ensure your convenience.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

