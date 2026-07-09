import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, DollarSign, ArrowRight, Navigation, Mountain, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RouteFleetSection from '@/components/RouteFleetSection';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Shaza Al Hada Taxi | Mountain Resort Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Jeddah Airport (KAIA) to Shaza Al Hada resort in Taif. Experienced mountain-road drivers, fixed rates, door-to-door drop-off. 24/7 Service.',
    keywords: ['Jeddah airport to Shaza Al Hada taxi', 'Shaza Al Hada transfer', 'Shaza Al Hada Taif taxi', 'KAIA to Shaza Al Hada', 'Al Hada resort taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-to-shaza-al-hada-taif/',
    },
    openGraph: {
        title: 'Jeddah Airport to Shaza Al Hada Taxi | Fixed Price Mountain Transfer | Taxi Service KSA',
        description: 'Direct transfer from KAIA Airport to Shaza Al Hada resort in the Taif mountains.',
        url: 'https://taxiserviceksa.com/routes/jeddah-to-shaza-al-hada-taif/',
        type: 'website',
    },
};

export default function JeddahToShazaAlHadaPage() {
    const routeDetails = [
        { label: 'Resort Distance', value: '190 km', icon: Navigation },
        { label: 'Drive Time', value: '2.5-3 Hours', icon: Clock },
        { label: 'Price', value: 'Affordable', icon: DollarSign },
        { label: 'Altitude', value: '2000m+', icon: Mountain },
    ];

    const routeImages = [
        '/hero-slide-2.webp',
        '/gmc-yukon.webp',
        '/hero-slide-3.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Jeddah to Shaza Al Hada"
                description="Professional private car service from Jeddah Airport to the Shaza Al Hada mountain resort in Taif. Reliable transfers with drivers experienced in mountain-road driving."
                services={[
                    { name: 'Jeddah to Shaza Al Hada Taxi', description: 'Direct resort transfer with fixed rates.' },
                    { name: 'Mountain Road Driving', description: 'Experienced chauffeurs for the winding Al Hada highway.' },
                    { name: 'Family SUV Service', description: 'Spacious vehicles for families and luggage.' },
                    { name: 'Airport Meet & Greet', description: 'Flight tracking and arrivals-hall pickup.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-2.webp"
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah Airport to Shaza Al Hada Taxi"
                title={
                    <span className="bg-emerald-600/90 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Mountain Resort Transfer
                    </span>
                }
                subtitle="Direct Transfer to the Al Hada Mountains"
                location="KAIA (JED) ➔ Shaza Al Hada Resort"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Shaza%20Al%20Hada">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Shaza Al Hada Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            {/* Reverse Silo Link */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4" />
                        <span>Part of our</span>
                        <Link href="/locations/taif/al-hada/" className="text-primary font-bold hover:underline">
                            Al Hada &amp; Taif Mountain Transfers
                        </Link>
                        <span>network</span>
                    </div>
                </div>
            </div>

            {/* TL;DR */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        TL;DR: Jeddah Airport to Shaza Al Hada Transfer Facts
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li><strong>Distance &amp; Time:</strong> Approximately 190 kilometers. The drive takes 2.5 to 3 hours from JED Airport, including the winding Al Hada mountain ascent.</li>
                        <li><strong>Drop-off Point:</strong> Direct to the Shaza Al Hada resort entrance, high in the Taif mountains.</li>
                        <li><strong>Vehicle Types:</strong> Sedans (Toyota Camry) and VIP SUVs (GMC Yukon) suited to steep mountain roads with luggage.</li>
                        <li><strong>Pricing:</strong> Affordable, fixed rates with no hidden surge fees, agreed before travel.</li>
                    </ul>
                </div>
            </section>

            {/* Route Details */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Mountain Resort Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport (JED) to Shaza Al Hada</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>Shaza Al Hada</strong> is a luxury mountain resort in the Al Hada highlands above Taif, known for its cooler climate and panoramic views over the escarpment toward Makkah. Reaching it means climbing the winding Kara mountain road, which requires an experienced driver and a capable vehicle — exactly what our chauffeurs provide on every trip.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-emerald-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Why Book a Private Taxi to Shaza Al Hada?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Mountain-Road Experience:</strong> Our drivers navigate the steep, winding Al Hada highway daily and know the safest pace for the climb.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Direct Resort Drop-off:</strong> No transfers or waiting — you&apos;re taken straight to the Shaza Al Hada entrance.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <p><strong className="text-emerald-400">Zero Waiting:</strong> We track your flight at KAIA North Terminal or Terminal 1. Your car is ready when you land.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <Building2 className="w-10 h-10 text-emerald-400" />
                                    <div>
                                        <div className="font-bold text-lg">Shaza Al Hada</div>
                                        <div className="text-sm text-gray-400">Al Hada Mountains, Taif</div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Location</span>
                                        <span className="font-mono text-white text-right">Al Hada, Kara Mountain Road</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Climate</span>
                                        <span className="font-mono text-white text-right">Cool, high-altitude</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Airport Drive Time</span>
                                        <span className="font-mono text-white">2.5-3 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Mountain className="w-5 h-5 text-emerald-600" />
                        Other Taif &amp; Al Hada Transfers
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/jeddah-taif/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Jeddah to Taif Taxi
                        </Link>
                        <Link href="/routes/makkah-taif/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Makkah to Taif Taxi
                        </Link>
                        <Link href="/locations/taif/al-hada/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Al Hada Cable Car &amp; Resorts
                        </Link>
                        <Link href="/taif-day-trip/" className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm">
                            Taif Day Trip Tour
                        </Link>
                    </div>
                </div>
            </div>

            <RouteFleetSection />

            <MicroSemanticFAQ
                contextName="Jeddah To Shaza Al Hada"
                faqs={[
                    {
                        question: 'How much is a taxi from Jeddah Airport to Shaza Al Hada?',
                        shortAnswer: 'WhatsApp Booking',
                        detailedAnswer: 'A private sedan (like a Toyota Camry) from Jeddah Airport to Shaza Al Hada is offered at an affordable fixed rate. A VIP SUV (like a GMC Yukon) is also available for larger families or groups with extensive luggage. All prices are fixed and pre-agreed before you travel.',
                        perspectives: [],
                    },
                    {
                        question: 'Is the road to Shaza Al Hada safe to drive?',
                        shortAnswer: 'Yes, with an experienced driver',
                        detailedAnswer: 'The Al Hada mountain highway is a steep, winding road with sharp curves. It is safe when driven carefully, and our chauffeurs navigate it daily. We recommend a private, experienced driver over a self-drive rental for this route.',
                        perspectives: [],
                    },
                    {
                        question: 'How long is the drive from Jeddah Airport (JED) to Shaza Al Hada?',
                        shortAnswer: '2.5-3 Hours',
                        detailedAnswer: 'The drive from King Abdulaziz International Airport (JED) to Shaza Al Hada covers approximately 190 kilometers and takes 2.5 to 3 hours, including the mountain ascent past Taif.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get a Quote for Your Shaza Al Hada Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Reserve your ride from Jeddah Airport to the Al Hada mountains. No haggling, no waiting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Shaza%20Al%20Hada">
                            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Taif" />
            </div>
        </div>
    );
}
