import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Madinah Taxi | Pre-Book Private Transfer 410km | From SAR 600',
    description: 'Pre-book your smooth transfer from Jeddah to Madinah. Trusted by travelers from UK, USA, & Canada. English-speaking drivers, fixed rates, and door-to-door luxury service.',
    keywords: ['Jeddah to Madinah taxi booking', 'Jeddah Airport to Madinah private car', 'prebook taxi saudi arabia', 'luxury transfer jeddah to madinah', 'Jeddah to Madinah taxi fare'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-madinah/',
    },
    openGraph: {
        title: 'Jeddah to Madinah Taxi | Pre-Book VIP Transfer - Fixed Price',
        description: 'Reliable 410km intercity transfer. Book in advance from home. 24/7 service with professional drivers.',
        url: 'https://taxiserviceksa.com/routes/jeddah-madinah/',
        type: 'website',
    },
};

export default function JeddahMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '410-430 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 600', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Madinah",
        "fromLocation": {
            "@type": "Place",
            "name": "Jeddah (Airport or City)",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "distance": "415 km",
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jeddah-madinah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={routeImages}
                h1Text="Jeddah to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Madinah Intercity
                    </span>
                }
                subtitle="Reliable Airport to Hotel Transfer - Book Before You Fly"
                location="4-5 Hours | Fixed Rate SAR 600+ | Pre-Book Online"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Secure Your Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Strategic Internal Links Hub */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Route Cities:</span>
                            <Link href="/locations/jeddah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Jeddah
                            </Link>
                            <Link href="/locations/madinah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Madinah
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center md:justify-end gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Vehicle Types:</span>
                            <Link href="/fleet/toyota-hiace/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> HiAce Bus
                            </Link>
                            <Link href="/fleet/hyundai-staria/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> Hyundai Staria
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Info</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Long-Distance Jeddah to Madinah Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our <strong>Jeddah to Madinah taxi</strong> service is the stress-free alternative to the <strong>Haramain Train</strong>. We offer door-to-door pickup from <strong>King Abdulaziz International Airport (KAIA)</strong> directly to <strong>Al Masjid an Nabawi</strong> in 4 hours—no station transfers or luggage limits.
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

                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-3xl font-bold mb-8">Why Book Private Taxi for this Route?</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">01</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Station vs Door-to-Door</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">The train station is far from both Jeddah city and Madinah Haram. A private taxi picks you up from your exact location and drops you at your hotel entrance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">02</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Luggage Freedom</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">No baggage weight limits or carrying heavy suitcases through crowded terminals. Your driver handles all luggage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">03</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Licensed & Insured</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">All our vehicles are fully licensed by the <strong>Transport General Authority (TGA)</strong>, ensuring a safe, legal, and insured journey.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">04</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Flexible Schedule</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">Depart whenever you want. You are not tied to train or bus timings. Perfect for late-night arrivals at Jeddah Airport.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">05</div>
                                    <div>
                                        <h4 className="font-bold mb-1">International Standards</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">Trusted by visitors from UK, USA, and Europe. We provide professional service with clear, fixed pricing and no surprises.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold text-primary">06</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Rest Stops & Prayers</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">It&apos;s a 4-hour drive. We are happy to stop at clean, family-friendly rest areas like <strong>SASCO</strong> or <strong>Badr</strong> for coffee, bathrooms, or prayer times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Comparison */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900">Jeddah to Madinah Vehicle Fares</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="text-lg font-bold mb-2">Camry / Sonata</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 600</div>
                            <p className="text-sm text-gray-500">Ideal for 1-4 Passengers</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-primary">
                            <div className="text-lg font-bold mb-2">GMC Yukon (VIP)</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 850</div>
                            <p className="text-sm text-gray-500">Best Comfort (SUV)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="text-lg font-bold mb-2">HiAce / Staria</div>
                            <div className="text-4xl font-black text-primary mb-4">SAR 750</div>
                            <p className="text-sm text-gray-500">Perfect for Large Families</p>
                        </div>
                    </div>
                </div>
            </section >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-20">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Jeddah to Madinah?",
                        shortAnswer: "4 - 5 Hours",
                        detailedAnswer: "The distance from Jeddah to Madinah is approximately 415 km. Depending on traffic and terminal stops, it usually takes between 4 and 5 hours by car.",
                        perspectives: []
                    },
                    {
                        question: "What is the cost of a taxi from Jeddah Airport to Madinah?",
                        shortAnswer: "From SAR 600",
                        detailedAnswer: "Our fixed rates for Jeddah to Madinah start at SAR 600 for a standard sedan. Larger SUVs (GMC) start from SAR 850.",
                        perspectives: []
                    },
                    {
                        question: "Is it safe to travel from Jeddah to Madinah at night?",
                        shortAnswer: "Yes, Safest Route",
                        detailedAnswer: "The route between Jeddah and Madinah is a major well-lit highway. Our experienced drivers are accustomed to night driving and ensure maximum safety.",
                        perspectives: []
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Your 410km Journey</h2>
                    <Link href="/booking/?route=jeddah-madinah">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-12 py-7 h-auto">
                            Book Jeddah to Madinah Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div >
    );
}
