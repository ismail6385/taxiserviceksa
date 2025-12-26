
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Jeddah to Taif Taxi | Scenic Mountain Transfer 170km',
    description: 'Taxi from Jeddah to Taif. Enjoy the scenic drive to Taif mountains. 2.5 hour journey. Fixed rates from SAR 350. Reliable 24/7 service.',
    keywords: ['Jeddah to Taif taxi', 'Jeddah Taif transfer', 'taxi fare Jeddah Taif', 'Al Hada road taxi', 'Taif city tours'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-taif',
    },
    openGraph: {
        title: 'Jeddah to Taif Taxi | Scenic Mountain Transfer',
        description: 'Taxi from Jeddah to Taif. Enjoy the scenic drive to Taif mountains. 2.5 hour journey. Fixed rates from SAR 350.',
        url: 'https://taxiserviceksa.com/routes/jeddah-taif',
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

    const vehicleOptions = [
        {
            name: 'Toyota Camry (Sedan)',
            passengers: '4 passengers',
            luggage: '2 large bags',
            price: 'SAR 350',
            ideal: 'Solo travelers or couples'
        },
        {
            name: 'GMC Yukon (SUV)',
            passengers: '7 passengers',
            luggage: '5 large bags',
            price: 'SAR 550',
            ideal: 'Families (Best for Mountains)'
        },
        {
            name: 'Toyota Hiace (Van)',
            passengers: '11 passengers',
            luggage: '16 large bags',
            price: 'SAR 700',
            ideal: 'Large groups / Tours'
        },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp', // Ideally Taif mountains, but will use Jeddah image or generic
        '/hero-slide-3.webp',
        '/makkah-kaaba-night.webp',
    ];

    const faqs = [
        {
            question: "How long is the taxi ride from Jeddah to Taif?",
            answer: "The drive typically takes 2.5 to 3 hours. The route involves driving up the Al Hada mountain road, which is scenic but requires careful driving."
        },
        {
            question: "How much is a taxi from Jeddah to Taif?",
            answer: "Fares start from SAR 350 for a standard sedan. SUVs, which are recommended for the mountain ascent for better power and comfort, start from SAR 550."
        },
        {
            question: "Is the Al Hada mountain road safe?",
            answer: "Yes, the Al Hada road is a modern engineering marvel with multiple lanes and safety barriers. However, it can be foggy in winter. Our drivers are experienced with mountain driving conditions."
        },
        {
            question: "Do you offer return trips from Taif to Jeddah?",
            answer: "Yes, you can book a one-way transfer or a round trip. If you are visiting Taif for a day tour, the driver can wait for you (waiting charges apply) or return to pick you up later."
        },
        {
            question: "Can I stop to take photos on the mountain road?",
            answer: "Yes, there are designated parking spots and fruit stalls along the Al Hada road where you can stop for photos and see the famous monkeys. Just let your driver know."
        }
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
        "provider": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "email": "taxiserviceksa9988@gmail.com"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Taxi from Jeddah to Taif: Mountain Transfer"
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

            {/* Vehicle Options Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vehicle Options & Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powerful and comfortable vehicles for mountain driving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicleOptions.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all">
                                <div className="text-center mb-6">
                                    <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                    <div className="text-3xl font-black text-primary mb-4">{vehicle.price}</div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.passengers}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-500">
                                        <strong className="text-gray-900">Ideal for:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Related Routes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Related Routes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/routes/jeddah-makkah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah to Makkah</h3>
                            <p className="text-gray-600 text-sm">Transfer to Holy City</p>
                        </Link>
                        <Link href="/locations/jeddah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Jeddah City Transport</h3>
                            <p className="text-gray-600 text-sm">Local Jeddah transfers</p>
                        </Link>
                        <Link href="/routes/makkah-madinah" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Makkah to Madinah</h3>
                            <p className="text-gray-600 text-sm">Intercity pilgrimage route</p>
                        </Link>
                    </div>
                </div>
            </section>

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
