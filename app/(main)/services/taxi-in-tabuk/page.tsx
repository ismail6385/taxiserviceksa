import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Users, DollarSign, Shield, Star, Plane, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Tabuk to NEOM Taxi | Private Car Service | Taxi in Tabuk | Taxi Service KSA',
    description: 'Book the best online taxi in Tabuk. We specialize in Tabuk to NEOM taxi services, city transfers, and long-distance private transfers with VIP cars.',
    keywords: ['Taxi Tabuk to NEOM', 'Taxi in Tabuk', 'Tabuk to Neom Taxi', 'Taxi Tabuk to Madinah', 'Tabuk Private Car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
    },
    openGraph: {
        title: 'Taxi in Tabuk | Reliable NEOM & City Transfers | Taxi Service KSA',
        description: 'Premium taxi service in Tabuk specializing in long-distance intercity travel uniquely focused on NEOM connectivity.',
        url: 'https://taxiserviceksa.com/services/taxi-in-tabuk/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/locations/tabuk.webp', alt: 'Premium Taxi service in Tabuk' }],
    },
};

export default function TaxiInTabukPage() {
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
        "serviceType": "VIP Taxi & Long Distance Transfers",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Taxi Service KSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Tabuk"
        },
        "description": "Premium pre-booked taxi operations out of Tabuk, focusing on the highly-demanded Tabuk to NEOM city transfer route, and VIP family travel.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "price": "Depending on destination"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema-tabuk-taxi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={['/locations/tabuk.webp', '/hero-slide-3.webp']}
                h1Text="Taxi Tabuk"
                bookingFormTitle="Get a quote for your Tabuk Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Northern Transport Hub
                    </span>
                }
                subtitle="Your Premier Private Taxi in Tabuk. Specialists in NEOM Transfers & VIP Corporate Travel."
                location="Fixed Pricing | Long Distance Experts | Local Drivers"
            />

            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="/services/" className="text-gray-500 hover:text-primary transition-colors">Services</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">Taxi in Tabuk</span>
                </div>
            </div>

            {/* Core Routes Silo Interlinking */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Tabuk Routes</h2>
                            <p className="text-gray-600">Select your destination from Tabuk for a safe, verified transfer.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/routes/tabuk-neom/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to NEOM
                                </Button>
                            </Link>
                            <Link href="/routes/tabuk-jeddah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Jeddah
                                </Button>
                            </Link>
                            <Link href="/routes/tabuk-makkah/">
                                <Button className="bg-white text-black hover:bg-primary hover:text-white border-2 border-gray-200 rounded-full px-6 transition-all shadow-sm">
                                    Taxi to Makkah
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
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Pioneering the North</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Executive Taxi Service in Tabuk
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-4xl">
                            <p>Tabuk is rapidly becoming the gateway to Saudi Arabia's futuristic developments. Whether you are a business executive leading a project, or a family exploring the northern wonders, booking a **taxi in Tabuk** needs to be reliable, safe, and comfortable for long-distance highway travel.</p>
                            <p>We supply private cars from any location in Tabuk directly to **NEOM**, AlUla, and even cross-country to Jeddah or Makkah. Because the distances between northern cities are vast, we only deploy meticulously maintained luxury sedans, VIP SUVs, and spacious Mercedes vans. Your comfort and security are our highest priority.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Tabuk City Transfers</h3>
                            <p className="text-gray-600 text-sm">Reliable pickups from any location in Tabuk. Our drivers know the city perfectly and ensure prompt service.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">NEOM Specialists</h3>
                            <p className="text-gray-600 text-sm">We provide expert long-distance chauffeurs who know the exact routes, rest stops, and checkpoints for smooth travel to NEOM.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-black/5 transition-colors">
                            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromised Luxury</h3>
                            <p className="text-gray-600 text-sm">A 2-hour drive requires absolute comfort. Our Cadillac, GMC, and Mercedes fleet provides a first-class road experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our VIP Fleet (Integrated User Data) */}
            <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Long-Haul Luxury</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Tabuk Transport Fleet</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Travel long highways in absolute peace. Choose from premium SUVs, Executive Sedans, or Group Minibuses equipped with powerful air conditioning and ample luggage space.
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
                            brandName="TaxiServiceKSA Tabuk"
                            description="Providing corporate and private luxury transport across the vast northern regions of Saudi Arabia, connecting Tabuk to future hubs."
                            foundingDate="2016"
                            metrics={[
                                { label: 'Local Drivers', value: '100%', icon: MapPin },
                                { label: 'WhatsApp Booking', value: 'Yes', icon: DollarSign }
                            ]}
                        />
                    </div>
                    <div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 relative overflow-hidden">
                            <Shield className="absolute -top-10 -right-10 w-48 h-48 text-black/5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Safe, Long-Distance Expertise</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                Intercity routes radiating from Tabuk are long expanses of highway. You cannot trust basic ride-hailing apps for these 2 to 4-hour journeys. 
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm relative z-10">
                                Our drivers are local professionals experienced in highway driving. We ensure every VIP taxi, like our GMC SUVs or S-Class Sedans, is thoroughly inspected before extended trips, guaranteeing your safety and absolute comfort in the desert climate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Dedicated MicroSemanticFAQ for "Taxi in Tabuk" */}
            <MicroSemanticFAQ
                        contextName="Taxi In Tabuk"
                faqs={[
                    {
                        question: "How long is the taxi ride from Tabuk to NEOM?",
                        shortAnswer: "Approximately 2 to 2.5 hours.",
                        detailedAnswer: "The distance from Tabuk to the central NEOM area is around 180 km. Our smooth, comfortable vehicles make the 2 to 2.5-hour journey highly relaxing.",
                        perspectives: []
                    },
                    {
                        question: "Can I get a taxi in Tabuk for long distances?",
                        shortAnswer: "Yes, pre-book online.",
                        detailedAnswer: "Yes. By booking ahead through our website or sending an email, you can secure a private car from Tabuk to any major city or development project like NEOM.",
                        perspectives: []
                    },
                    {
                        question: "Are there large family taxis available in Tabuk?",
                        shortAnswer: "Yes, SUVs & Vans.",
                        detailedAnswer: "Yes, we deploy 7-seater vehicles like the GMC and Cadillac Escalade, as well as passenger vans like the Mercedes Vito for larger families and their luggage.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer fixed taxi fares from Tabuk?",
                        shortAnswer: "Yes, 100% WhatsApp Booking.",
                        detailedAnswer: "Yes. All our intercity transfers from Tabuk, whether to NEOM, Jeddah, or Makkah, operate on a fixed-fare basis. No hidden changes, no meters. You lock in your price when you book.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

