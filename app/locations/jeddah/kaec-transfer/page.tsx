import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Briefcase, Building2, Train, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import DistanceTable from '@/components/seo/DistanceTable';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Jeddah to KAEC | Executive Chauffeur Service',
    description: 'Premium VIP private transfer and executive chauffeur service from Jeddah Airport to KAEC (King Abdullah Economic City). Fixed rates for business and leisure travel.',
    keywords: ['Jeddah to KAEC VIP transfer', 'KAEC executive chauffeur', 'Jeddah Airport to KAEC premium transport', 'KAEC business transfer'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jeddah/kaec-transfer/',
    },
    openGraph: {
        title: 'VIP Private Transfer Jeddah to KAEC | Executive Chauffeur',
        description: 'Professional VIP private transfer service from Jeddah to KAEC. Business class luxury vehicles and professional chauffeurs.',
        url: 'https://transferksa.com/locations/jeddah/kaec-transfer/',
        type: 'website',
    },
};

export default function KaecTransferPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally a KAEC skyline or road image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const kaecSchema = {
        "@context": "https://schema.org",
        "@type": "Transport",
        "name": "Jeddah to KAEC VIP Private Transfer Service",
        "description": "Premium VIP private transfer from King Abdulaziz International Airport to King Abdullah Economic City.",
        "provider": {
            "@type": "Organization",
            "name": "VIP Transfer KSA"
        },
        "areaServed": [
            { "@type": "Place", "name": "Jeddah Airport" },
            { "@type": "Place", "name": "King Abdullah Economic City" },
            { "@type": "Place", "name": "Bay La Sun Hotel" }
        ],
        "hasMap": "https://g.page/kaec"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="kaec-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(kaecSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Jeddah to KAEC"
                bookingFormTitle="Book Executive Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Chauffeur Service
                    </span>
                }
                subtitle="Premium Intercity Link to King Abdullah Economic City"
                location="Door-to-Door | Professional Logistics"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=KAEC">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Business VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Corporate, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <span className="bg-blue-100 text-blue-800 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full">Business Hub</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Executive Chauffeur Service to KAEC
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                King Abdullah Economic City (KAEC) is located approximately 100km north of Jeddah. It is a major hub for business, international manufacturing, and world-class leisure.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private VIP transfer service offers the most convenient, door-to-door solution from Jeddah Airport or hotels directly to your destination in KAEC. We provide professional chauffeurs for international standards.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct to Bay La Sun</h4>
                                        <p className="text-sm text-gray-500">We drop you right at the lobby of Bay La Sun Hotel & Marina.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Industrial Valley Access</h4>
                                        <p className="text-sm text-gray-500">Service to Mars, Pfizer, and other corporate sites in the Industrial Valley.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Haramain Train Station</h4>
                                        <p className="text-sm text-gray-500">Transfers to/from the KAEC Haramain Railway Station.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <DistanceTable
                                origin="Jeddah Airport (JED)"
                                locations={[
                                    { destination: 'Bay La Sun Hotel (KAEC)', distance: '110 km', time: '1h 15m', route: 'Route 5 (Highway)' },
                                    { destination: 'KAEC Train Station', distance: '105 km', time: '1h 05m', route: 'Route 5' },
                                    { destination: 'Royal Greens Golf Club', distance: '112 km', time: '1h 20m', route: 'Coastal Rd' },
                                    { destination: 'Industrial Valley', distance: '115 km', time: '1h 10m', route: 'Route 5' }
                                ]}
                            />
                        </div>
                    </div>

                    {/* Vehicles Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-200">
                            <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="font-bold text-lg text-gray-900">Business Sedan</h3>
                            <p className="text-gray-500 text-sm mt-2">Toyota Camry / Sonata</p>
                            <div className="text-2xl font-black text-primary mt-4">SAR 350 - 400</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center border-2 border-primary shadow-lg relative transform scale-105">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg text-gray-900">Executive SUV</h3>
                            <p className="text-gray-500 text-sm mt-2">GMC Yukon / Chevrolet Tahoe</p>
                            <div className="text-2xl font-black text-primary mt-4">SAR 550 - 650</div>
                            <p className="text-xs text-gray-400 mt-2">Perfect for Corporate Teams</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-200">
                            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="font-bold text-lg text-gray-900">Faily Van</h3>
                            <p className="text-gray-500 text-sm mt-2">Hyundai H1 / Staria</p>
                            <div className="text-2xl font-black text-primary mt-4">SAR 450 - 500</div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does it take from Jeddah Airport to KAEC?",
                        shortAnswer: "1h 10m",
                        detailedAnswer: "The drive typically takes about 1 hour and 10 minutes (100-110 km) via Route 5. Traffic is usually light once you leave the Jeddah city limits.",
                        perspectives: []
                    },
                    {
                        question: "Is there a train from Jeddah Airport to KAEC?",
                        shortAnswer: "Yes, but schedule varies",
                        detailedAnswer: "Yes, the Haramain High-Speed Railway connects Jeddah Airport to KAEC. However, trains run on a specific schedule. A private VIP transfer offers flexibility if your flight time doesn't match the train schedule.",
                        perspectives: []
                    },
                    {
                        question: "Can you enter the Industrial Valley in KAEC?",
                        shortAnswer: "Yes, with details",
                        detailedAnswer: "We can drop you off at any company in the Industrial Valley. Please ensure you have the necessary security clearance or appointment details for entry into specific industrial zones if required.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
