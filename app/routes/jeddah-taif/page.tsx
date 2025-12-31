
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Taif Taxi | Scenic Mountain Transfer 170km',
    description: 'Taxi from Jeddah to Taif. Enjoy the scenic drive to Taif mountains. 2.5 hour journey. Fixed rates from SAR 350. Reliable 24/7 service.',
    keywords: ['Jeddah to Taif taxi', 'Jeddah Taif transfer', 'taxi fare Jeddah Taif', 'Al Hada road taxi', 'Taif city tours'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-taif/',
    },
    openGraph: {
        title: 'Jeddah to Taif Taxi | Scenic Mountain Transfer',
        description: 'Taxi from Jeddah to Taif. Enjoy the scenic drive to Taif mountains. 2.5 hour journey. Fixed rates from SAR 350.',
        url: 'https://taxiserviceksa.com/routes/jeddah-taif/',
        type: 'website',
    },
};

export default function JeddahTaifRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '170 km', icon: Navigation },
        { label: 'Travel Time', value: '2.5 - 3 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 350', icon: DollarSign },
        { label: 'Route Type', value: 'Mountain Drive', icon: Mountain },
    ];



    const routeImages = [
        '/jeddah-corniche-sunset.webp', // Ideally Taif mountains, but will use Jeddah image or generic
        '/hero-slide-3.webp',
        '/makkah-kaaba-night.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Taif",
        "fromLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Taif",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Taif",
                "addressCountry": "SA"
            }
        },
        "distance": "170 km",

    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Online Taxi from Jeddah to Taif"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Taif Route
                    </span>
                }
                subtitle="Scenic Drive to the City of Roses"
                location="2.5 Hours | Fixed Rate SAR 350+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=jeddah-taif">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah to Taif Mountain Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the breathtaking drive up the Al Hada mountain range to the cool, rose-filled city of Taif.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features Section */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Mountain className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Why Visit Taif?</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Cool Weather & Nature</h4>
                                <p className="text-gray-300 mb-4">Taif is known as the summer capital of Saudi Arabia due to its pleasant climate. Enjoy the fresh mountain air, far from the heat of Jeddah.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Cable Car & Fruit Market</h4>
                                <p className="text-gray-300 mb-4">Experience the famous cable car ride in Al Hada and visit the vibrant local fruit markets selling pomegranates, grapes, and figs.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Mountain Route Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Jeddah to Taif Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates including the scenic drive up Al Hada mountain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Camry (Sedan)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 350
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4 Passengers / 2 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                RECOMMENDED
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">GMC Yukon (SUV)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 550
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                7 Passengers / 5 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">HiAce Bus</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 700
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Small Groups (10-12 pax)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Jeddah to Taif?",
                        shortAnswer: "2.5 - 3 Hours",
                        detailedAnswer: "The drive typically takes 2.5 to 3 hours. The route involves driving up the Al Hada mountain road, which is scenic but requires careful driving.",
                        perspectives: []
                    },
                    {
                        question: "How much is a taxi from Jeddah to Taif?",
                        shortAnswer: "From SAR 350",
                        detailedAnswer: "Fares start from SAR 350 for a standard sedan. SUVs, which are recommended for the mountain ascent for better power and comfort, start from SAR 550.",
                        perspectives: []
                    },
                    {
                        question: "Is the Al Hada mountain road safe?",
                        shortAnswer: "Yes, Safe",
                        detailedAnswer: "Yes, the Al Hada road is a modern engineering marvel with multiple lanes and safety barriers. However, it can be foggy in winter. Our drivers are experienced with mountain driving conditions.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer return trips from Taif to Jeddah?",
                        shortAnswer: "Yes, Available",
                        detailedAnswer: "Yes, you can book a one-way transfer or a round trip. If you are visiting Taif for a day tour, the driver can wait for you (waiting charges apply) or return to pick you up later.",
                        perspectives: []
                    },
                    {
                        question: "Can I stop to take photos on the mountain road?",
                        shortAnswer: "Yes, Of Course",
                        detailedAnswer: "Yes, there are designated parking spots and fruit stalls along the Al Hada road where you can stop for photos and see the famous monkeys. Just let your driver know.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Jeddah to Taif Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Enjoy a safe and scenic mountain drive with our experienced chauffeurs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=jeddah-taif">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 350+)
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
