import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Taxi Makkah to Madinah | Book Online | Taxi in Makkah',
    description: 'Book the best online taxi in Makkah. Private car service Makkah to Madinah, Jeddah Airport, and Ziyarat. Fixed pricing, VIP cars including GMC & Mercedes.',
    keywords: ['Taxi Makkah to Madinah', 'Taxi in Makkah', 'Makkah Taxi', 'Makkah to Madinah Taxi', 'Makkah to Jeddah Taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-makkah/',
    },
    openGraph: {
        title: 'Taxi in Makkah | 24/7 Premium Private Taxis',
        description: 'Reliable private taxi service in Makkah. Premium fleet available 24/7 for intercity travel and Ziyarat.',
        url: 'https://taxiserviceksa.com/services/taxi-in-makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'Taxi in Makkah service' }],
    },
};

export default function TaxiInMakkahPage() {
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
        "serviceType": "Taxi Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Makkah"
        },
        "description": "Premium 24/7 pre-booked taxi and chauffeur services based in Makkah, Saudi Arabia. Covering all domestic routes including Madinah and Jeddah.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on route"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema-makkah-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={['/makkah-clock-tower.webp', '/makkah-kaaba-night.webp']}
                h1Text="Taxi Makkah"
                bookingFormTitle="Get a quote for your Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Chauffeur Service
                    </span>
                }
                subtitle="Pre-book Reliable Private Cars & VIP SUVs for Hajj, Umrah, and Intercity Routes."
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
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Your Spiritual Journey Transport</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            The Most Trusted Taxi in Makkah
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>Finding a reliable <strong>taxi in Makkah</strong> during high pilgrimage seasons can be incredibly challenging. Whether you need a quick VIP pickup from your hotel near the Haram (such as Jabal Omar) or a comfortable long-distance ride to Madinah, we provide a pre-booked, private chauffeur service that eliminates the stress of street-hailing.</p>
                            <p>We do not operate as a standard metered street taxi. We are a dedicated private transport provider specializing in premium, comfortable travel for Umrah groups, families, and VIP individuals. Our transparent fixed-pricing means you never have to negotiate fares with drivers during rush hour.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed Pricing</h3>
                            <p className="text-gray-600 text-sm">No surge pricing during prayer times or peak seasons. Know the exact fare before you get in the car.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Punctual Pickups</h3>
                            <p className="text-gray-600 text-sm">Our chauffeurs are scheduled well in advance to ensure you never miss a flight or prayer time.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed Professionals</h3>
                            <p className="text-gray-600 text-sm">Every vehicle is fully insured and operated by a verified driver who knows Makkah's complex road network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Premium Vehicles</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Makkah VIP Fleet</h2>
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
                faqs={[
                    {
                        question: "How do I Request a quote for a private taxi in Makkah?",
                        shortAnswer: "Pre-book online via Email.",
                        detailedAnswer: "You can book our Makkah taxi service directly through our website booking form or by sending us an email. Let us know your pickup location in Makkah, your destination, the date, and the size of your group. We will confirm your VIP vehicle immediately.",
                        perspectives: []
                    },
                    {
                        question: "Can you provide a taxi from Makkah to Madinah?",
                        shortAnswer: "Yes, 24/7 service.",
                        detailedAnswer: "Yes, this is our most popular route. We offer direct, comfortable intercity transfers from your Makkah hotel straight to your Madinah accommodation. You can choose from our sedans or large Mercedes/GMC SUVs.",
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
                        detailedAnswer: "Yes. Unlike street taxis, we do not use meters. Every ride booked through us has a fixed, upfront price. You will not pay anything extra for traffic delays.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

