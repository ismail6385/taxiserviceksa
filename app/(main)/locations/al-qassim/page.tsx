import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Shield, CheckCircle2, ArrowRight, Car, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur Al-Qassim | Taxi Service KSA',
    description: 'Premium VIP private transfer and executive chauffeur service in Al-Qassim region. Professional, reliable intercity transport and airport pickups. Book online.',
    keywords: ['Al-Qassim VIP private transfer', 'Executive chauffeur Al-Qassim', 'Al-Qassim taxi service', 'Buraidah taxi', 'Al-Qassim to Riyadh taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-qassim/',
    },
    openGraph: {
        title: 'Al-Qassim VIP Transfer & Pickups | Taxi Service KSA',
        description: 'Need a premium VIP transfer in Al-Qassim? We provide comfortable chauffeured trips and intercity transport.',
        url: 'https://taxiserviceksa.com/locations/al-qassim/',
        type: 'website',
    },
};

export default function AlQassimLocationPage() {
    const images = [
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Al-Qassim"
                description="Professional VIP transfers in Al-Qassim region. Specializing in airport pickups, corporate travel, and comfortable intercity transfers across Saudi Arabia."
                services={[
                    { name: 'Al-Qassim Airport Pickup', description: 'VIP meet & greet at Prince Nayef bin Abdulaziz Airport with flight tracking.' },
                    { name: 'Intercity Transfers', description: 'Safe, direct transport to Riyadh, Madinah, and Jeddah.' },
                    { name: 'Corporate Travel', description: 'Executive chauffeur services for business meetings.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer & Chauffeur Al-Qassim"
                bookingFormTitle="WhatsApp Booking for Premium Transfer in Al-Qassim"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Al-Qassim
                    </span>
                }
                subtitle="Premium Executive Transport Excellence"
                location="Al-Qassim | Intercity Transfers | Airport Pickups"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Al-Qassim&dropoff=Selected%20Hotel">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked long-distance and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Professional Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                VIP Transfer Services in Al-Qassim
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al-Qassim region, with its capital Buraidah, is the agricultural heart of Saudi Arabia known for dates and livestock. Whether traveling for business, family visits, or tourism, our premium fleet serves the entire region including Buraidah, Unaizah, and Ar Rass.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We prioritize safety, punctuality, and discretion. Pre-book a dedicated VIP chauffeur from Al-Qassim to Riyadh, Madinah, or anywhere across Saudi Arabia.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Service</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Premium Fleet</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current inline-block" /> WhatsApp Booking</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us in Al-Qassim?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold"><CheckCircle2 className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fixed Pricing</h4>
                                        <p className="text-sm text-gray-500">No meters, no surge prices. Know your exact fare before you travel.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold"><Shield className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Verified Chauffeurs</h4>
                                        <p className="text-sm text-gray-500">Experienced, professional drivers with excellent knowledge of Saudi highways.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold"><Car className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Spacious SUVs</h4>
                                        <p className="text-sm text-gray-500">Perfect for families or lots of luggage. Comfort is guaranteed.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al-Qassim" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How do I book a transfer from Al-Qassim?",
                        shortAnswer: "Via WhatsApp",
                        detailedAnswer: "You can book easily by sending us a message on WhatsApp. We will provide a fixed quote instantly for your Al-Qassim transfer.",
                        perspectives: []
                    },
                    {
                        question: "Do you go from Al-Qassim (Buraidah) to Riyadh?",
                        shortAnswer: "Yes, 3.5 Hours",
                        detailedAnswer: "Yes, we provide private transfers between Buraidah and Riyadh. The journey takes approximately 3.5 hours on the highway.",
                        perspectives: []
                    },
                    {
                        question: "Do you serve Unaizah and other cities in Al-Qassim?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Al-Qassim region including Buraidah, Unaizah, Ar Rass, and surrounding areas.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
