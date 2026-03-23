import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import WhatsAppIcon from '@/components/WhatsAppIcon';


export const metadata: Metadata = {
    title: 'Tabuk to Al-Bukayriyah Taxi | Private Car Service 880 km | Fixed Price | Taxi Service KSA',
    description: 'Request a quote for a private taxi from Tabuk to Al-Bukayriyah. Reliable 8-9 Hours drive with professional drivers. Fixed rates, door-to-door service, and comfortable SUVs for families.',
    keywords: ['Tabuk to Al-Bukayriyah taxi', 'taxi from Tabuk to Al-Bukayriyah', 'private transfer Tabuk to Al-Bukayriyah', 'chauffeur Tabuk to Al-Bukayriyah', 'Tabuk to Al-Bukayriyah car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-al-bukayriyah/',
    },
    openGraph: {
        title: 'Tabuk to Al-Bukayriyah Taxi | Private Transfer - Fixed Price | Taxi Service KSA',
        description: 'Reliable 880 km drive. Request a quote for a comfortable ride from Tabuk to Al-Bukayriyah. Professional service available 24/7.',
        url: 'https://taxiserviceksa.com/routes/tabuk-al-bukayriyah/',
        type: 'website',
    },
};

export default function TabukAlBukayriyahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '880 km', icon: Navigation },
        { label: 'Travel Time', value: '8-9 Hours', icon: Clock },
        { label: 'Price', value: 'Fixed Rate', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Tabuk to Al Bukayriyah"
                description="Professional VIP private car service from Tabuk to Al Bukayriyah. Reliable, door-to-door long-distance transport for families and business travelers."
                services={[
                    { name: 'Tabuk to Al Bukayriyah Taxi', description: 'Direct 24/7 private transfer with professional chauffeurs.' },
                    { name: 'Family SUV Transfer', description: 'Spacious and safe GMC Yukons for the drive between Tabuk and Al Bukayriyah.' },
                    { name: 'Long-Distance Chauffeur', description: 'Comfortable long-distance travel across Saudi Arabia with luxury vehicles.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Al Bukayriyah back to Tabuk at competitive rates.' }
                ]}
                
                image="https://taxiserviceksa.com/locations/tabuk.webp"
            />

            <Hero
                images={['/locations/tabuk.webp', '/hero-slide-3.webp']}
                h1Text="Tabuk to Al-Bukayriyah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Al-Bukayriyah
                    </span>
                }
                subtitle="Private Car Service - WhatsApp Booking"
                location="8-9 Hours | WhatsApp Booking | Local Drivers"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=tabuk-al-bukayriyah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">Travel from Tabuk to Al-Bukayriyah</h2>
                        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                            <p>Heading out from Tabuk to Al-Bukayriyah? Our private car service gets you there reliably. We focus on direct trips across Saudi Arabia for families and professionals. You can skip the crowded buses and long waits. We pick you up right from your door in Tabuk and drive you straight to your destination in Al-Bukayriyah. It is a straightforward way to travel without the usual stress of finding transport.</p>
                            <p>From the northern borders down towards Al-Bukayriyah, our service bridges the gap for those who prefer private travel. We avoid the busy terminals and give you a direct route that saves you hours of waiting and multiple transfers.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Why Travelers Choose Our Service</h3>
                                <p className="text-gray-300 leading-relaxed">A private taxi gives you control over your trip. You pick the departure time that works for you. If you need to stop for coffee, a meal, or prayer, just tell the driver. We stop at clean service stations along the way. Your luggage stays safe in the trunk, and you don't have to carry heavy bags through stations. It is a quiet, private way for your family to get to Al-Bukayriyah.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">Local Knowledge</h4>
                                        <p className="text-sm text-gray-400">Our drivers know the best routes and safe rest points between Tabuk and Al-Bukayriyah.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-400">The price we agree on is what you pay. No extra charges for highway tolls or fuel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Available Cars for Your Trip</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Toyota Camry', type: 'Standard Sedan', pax: '1-4' },
                                { name: 'Hyundai Staria', type: 'Family Van', pax: '1-7' },
                                { name: 'GMC Yukon', type: 'Premium SUV', pax: '1-7' },
                                { name: 'Toyota Hiace', type: 'Minibus', pax: '1-12' }
                            ].map((v, i) => (
                                <div key={i} className="bg-white border-2 border-gray-50 rounded-[2rem] p-8 shadow-sm hover:border-primary transition-all group">
                                    <Car className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-1">{v.name}</h4>
                                    <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter mb-4">{v.type}</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Users className="w-4 h-4 text-primary" /> {v.pax} Passengers
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Clock className="text-primary" /> Booking is Simple</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">01</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Get a Quote</h4>
                                        <p className="text-gray-600 text-sm">Submit your request via our booking form or email us for a custom quote.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">02</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Confirm Vehicle</h4>
                                        <p className="text-gray-600 text-sm">Pick the car that fits your group size and luggage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">03</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Meet the Driver</h4>
                                        <p className="text-gray-600 text-sm">We show up at your gate in Tabuk at the right time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <EntityTrustSignal 
                                brandName="TaxiServiceKSA"
                                description="Reliable intercity transfers for families traveling from Tabuk across the Kingdom."
                                foundingDate="2016"
                                metrics={[
                                    { label: 'Verified', value: '100%', icon: Shield },
                                    { label: 'Support', value: '24/7', icon: Clock }
                                ]}
                            />
                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-primary"><MapPin /> Door-to-Door</h4>
                                <p className="text-sm text-gray-400">Skip the taxi wait. We go from your house in Tabuk directly to your hotel in Al-Bukayriyah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                        contextName="Tabuk Al Bukayriyah"
                faqs={[
{
                        question: "How do I Request a quote for a pickup in Tabuk?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. Just provide your location in Tabuk, and our driver will meet you there to take you directly to Al-Bukayriyah.",
                        perspectives: []
                    },
                    {
                        question: "Is the price for the whole car?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. The price we give you is for the private vehicle and driver. You don't share the ride with strangers on your way to Al-Bukayriyah.",
                        perspectives: []
                    },
                    {
                        question: "How long is the drive from Tabuk to Al-Bukayriyah?",
                        shortAnswer: "Verified",
                        detailedAnswer: "It usually takes about 8-9 Hours. The distance is close to 880 km. We use the main highways and keep a steady pace to get you there on time.",
                        perspectives: []
                    },
                    {
                        question: "Can I Request a quote for a ride at night?",
                        shortAnswer: "Verified",
                        detailedAnswer: "Yes. We work 24 hours a day. If you need to leave Tabuk late at night or very early in the morning, we can arrange that for you.",
                        perspectives: []
                    },
                    {
                        question: "Where do we stop for food on the way to Al-Bukayriyah?",
                        shortAnswer: "Verified",
                        detailedAnswer: "We stop at good service stations like SASCO. During the 880 km trip, you can ask the driver to stop whenever you need a break for a meal or prayer.",
                        perspectives: []
                    },
                ]}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to go to Al-Bukayriyah?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now to get your fixed price and Get a quote for your driver.</p>
                    <Link href="/booking/?route=tabuk-al-bukayriyah">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </Link>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                <RelatedLocations currentCity="Tabuk" />
            </div>
        </div>
    );
}


