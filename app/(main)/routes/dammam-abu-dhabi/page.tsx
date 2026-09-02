import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, ArrowRight, FileText } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Dammam to Abu Dhabi Taxi | Private Cross-Border Transfer | Taxi Service KSA',
    description: 'Book a private Dammam to Abu Dhabi taxi with door-to-door service, comfortable vehicles and cross-border road transfers for families and groups.',
    keywords: ['Dammam to Abu Dhabi taxi', 'Dammam to Abu Dhabi taxi fare', 'Dammam to Abu Dhabi private taxi', 'Dammam to Abu Dhabi transfer', 'taxi from Dammam to Abu Dhabi', 'Saudi Arabia to Abu Dhabi taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-abu-dhabi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Dammam to Abu Dhabi cross-border taxi' }],
        siteName: 'Taxi Service KSA',
        title: 'Dammam to Abu Dhabi Taxi | Private Cross-Border Transfer',
        description: 'Private door-to-door transfers from Dammam to Abu Dhabi by road, with pre-arranged cross-border transportation for families, groups and business travelers.',
        url: 'https://taxiserviceksa.com/routes/dammam-abu-dhabi/',
        type: 'website',
    },
};

export default function DammamAbuDhabiRoutePage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const vehicles = [
        { name: 'Toyota Camry', cap: 'Up to 4 passengers, 2 luggage', desc: 'A practical option for smaller groups and business travelers.', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon XL / Denali', cap: 'Up to 7 passengers, 5 luggage', desc: 'A spacious SUV suited to families and groups who want additional cabin space.', link: '/fleet/gmc-yukon-xl/' },
        { name: 'Hyundai Staria VIP', cap: 'Up to 7 passengers, 4 luggage', desc: 'A larger family vehicle with additional interior space for passengers travelling together.', link: '/fleet/hyundai-staria-vip/' },
        { name: 'Mercedes Sprinter', cap: 'Up to 14 passengers, 4 luggage', desc: 'A larger option for groups that need additional passenger capacity.', link: '/fleet/mercedes-sprinter/' },
    ];

    const documents = ['Valid passport', 'UAE visa, entry permit or other valid entry status where required', 'Valid Saudi residency documentation where applicable', 'Any required vehicle or travel authorization', 'Required vehicle insurance arrangements'];

    const faqs = [
        {
            question: "How long does a taxi from Dammam to Abu Dhabi take?",
            shortAnswer: "Several hours — plan a full day",
            detailedAnswer: "The road journey takes several hours, with current route estimates varying depending on the route and exact endpoints. Border processing, traffic and rest stops can add to the total journey time. Plan extra time if you have a fixed appointment or flight.",
            perspectives: []
        },
        {
            question: "How far is Dammam from Abu Dhabi by road?",
            shortAnswer: "Roughly 700-780 km",
            detailedAnswer: "Current route estimates vary by route, with roughly 700-780 km commonly reported, depending on your exact pickup point in Dammam and destination in Abu Dhabi.",
            perspectives: []
        },
        {
            question: "Can I travel from Dammam to Abu Dhabi by private car?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, a private road transfer can be arranged for passengers who meet the Saudi exit and UAE entry requirements and have the necessary travel documents.",
            perspectives: []
        },
        {
            question: "Do I need a UAE visa?",
            shortAnswer: "Depends on your nationality and status",
            detailedAnswer: "That depends on your nationality, residency status and applicable UAE entry rules. Do not assume that every passenger has the same visa requirements — check your eligibility before travelling.",
            perspectives: []
        },
        {
            question: "Is UAE vehicle insurance required?",
            shortAnswer: "Yes, confirmed at quote stage",
            detailedAnswer: "Vehicle insurance requirements apply when entering the UAE. Abu Dhabi Customs states that GCC-plated vehicles must have insurance before entering the UAE. Ask us what insurance arrangement applies to your specific transfer when requesting the quote.",
            perspectives: []
        },
        {
            question: "Can families book this route?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, private vehicles can be requested for families and groups. Provide the passenger and luggage count so an appropriate vehicle can be selected.",
            perspectives: []
        },
        {
            question: "Can I book a return taxi from Abu Dhabi to Dammam?",
            shortAnswer: "Yes",
            detailedAnswer: "A return transfer can be requested. Provide the return date and preferred pickup time when requesting your quote.",
            perspectives: []
        },
        {
            question: "Can I stop during the journey?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, reasonable rest stops can be arranged during the long road journey for food, refreshments, prayer and personal needs.",
            perspectives: []
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Dammam to Abu Dhabi"
                description="Private road transfer from Dammam to Abu Dhabi. Door-to-door cross-border transportation with a professional driver."
                services={[
                    { name: 'Dammam to Abu Dhabi Taxi', description: 'Private one-way or return cross-border transfer.' },
                    { name: 'Family & Group Vehicles', description: 'Vehicles selected based on passenger and luggage requirements.' },
                    { name: 'Door-to-Door Pickup', description: 'Pickup from your Dammam address, drop-off in Abu Dhabi.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Dammam to Abu Dhabi Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Saudi Arabia → UAE
                    </span>
                }
                subtitle="Private door-to-door transfers from Dammam to Abu Dhabi by road, with pre-arranged cross-border transportation for families, groups and business travelers."
                location="Private • Door-to-Door • Cross-Border Road Travel"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Abu%20Dhabi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Request a Quote from 3,000 SAR
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking?pickup=Dammam&dropoff=Abu%20Dhabi">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book Online
                        </Button>
                    </Link>
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold mt-6 text-center">Licensed Drivers • 24/7 Booking</p>
            </Hero>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Cross-Border Transfer</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Private Dammam to Abu Dhabi Taxi Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Travelling from Dammam to Abu Dhabi by road gives you the convenience of a private vehicle from your pickup location directly to your destination. Instead of arranging separate transport for different parts of the journey, you can book one private transfer and travel with your family, colleagues or group in the same vehicle.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The route is suitable for passengers who prefer privacy, flexible stops and door-to-door transportation rather than arranging multiple connections.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Because this is an international journey, passengers must have the required travel documents and meet the entry requirements for the United Arab Emirates. If you're starting your journey in Dammam, our <Link href="/locations/dammam/" className="text-primary font-semibold hover:underline">private intercity service</Link> provides door-to-door pickup from hotels, residences and other agreed locations.
                    </p>
                </div>
            </section>

            {/* Distance & time */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Dammam to Abu Dhabi Distance & Travel Time</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The exact road distance depends on your pickup point in Dammam, destination in Abu Dhabi and the route used. Current route estimates vary, with road distances of roughly 700-780 km reported between the two cities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Driving time also varies. A normal road journey can take several hours before adding border processing, traffic and rest stops. For this reason, treat any journey duration as an estimate rather than a guaranteed arrival time.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        If you have a flight, meeting or appointment in Abu Dhabi, allow additional time for the border crossing and unexpected delays.
                    </p>
                </div>
            </section>

            {/* Border */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Saudi Arabia to UAE Border Crossing</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        A Dammam to Abu Dhabi road transfer involves leaving Saudi Arabia and entering the United Arab Emirates. At the border, passengers may need to complete normal passport and immigration procedures, while the vehicle is subject to the applicable border and customs requirements.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Passengers should keep their passport, visa or entry permission and other required documents available throughout the journey.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Saudi customs guidance states that vehicles travelling through land ports must have valid vehicle and driver documentation, and authorization may be required where the driver is not the registered owner in applicable cases.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        UAE vehicle requirements can also apply at entry. Abu Dhabi Customs states that GCC-plated vehicles can enter without customs conditions, but insurance must be obtained before entering the UAE. Because entry requirements can depend on nationality, residency and vehicle circumstances, passengers should confirm their personal UAE entry eligibility before travelling.
                    </p>
                </div>
            </section>

            {/* Documents */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3"><FileText className="w-7 h-7 text-primary" /> Documents You Should Check Before Travel</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Before booking an international road transfer, make sure you have the documents required for your journey. Depending on your circumstances, these may include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {documents.map((d) => (
                            <div key={d} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{d}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        The exact immigration requirements are not identical for every nationality or residency status. The passenger remains responsible for having the correct personal travel documents and permission to enter the UAE.
                    </p>
                </div>
            </section>

            {/* Families & groups */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Door-to-Door Service for Families & Groups</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">A private vehicle can be particularly convenient when several people are travelling together. You can request pickup from your:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {['Dammam residence', 'Hotel', 'Office', 'Agreed meeting point', 'King Fahd International Airport area'].map((p) => (
                            <span key={p} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg">{p}</span>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Your destination can be a hotel, residence, office or other agreed location in Abu Dhabi. For families and groups, tell us the number of passengers and luggage when requesting your quote — this helps us recommend an appropriate vehicle.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        You can also request rest stops during the journey for refreshments, meals, prayer or other reasonable breaks.
                    </p>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Choose the Right Vehicle</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Different passengers have different requirements, so vehicle selection should be based on group size, luggage and the level of comfort you want.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.link} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
                                <Car className="w-6 h-6 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.name}</h3>
                                <p className="text-xs font-bold text-primary mb-2">{v.cap}</p>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">Other premium vehicles may also be available depending on your travel date and requirements.</p>
                    <div className="text-center mt-4">
                        <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            View full fleet <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fare */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Dammam to Abu Dhabi Taxi Fare</h2>
                    <p className="text-gray-300 leading-relaxed mb-2">
                        Private Dammam to Abu Dhabi transfers start from <strong>3,000 SAR</strong>. The final price depends on the vehicle, number of passengers, luggage, travel date and whether you require a one-way or return transfer.
                    </p>
                    <p className="text-gray-400 text-sm mb-8">For an exact quote, send us your pickup location, travel date, passenger count and preferred vehicle.</p>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Dammam%20to%20Abu%20Dhabi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-bold">
                            Request Current Dammam-Abu Dhabi Fare <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* How to book */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How to Book Your Dammam to Abu Dhabi Taxi</h2>
                    <div className="space-y-5">
                        {[
                            { step: '1', title: 'Send Your Journey Details', desc: 'Contact us through WhatsApp or the booking form with your pickup and destination.' },
                            { step: '2', title: 'Provide Passenger Information', desc: 'Tell us how many people are travelling and how much luggage you have.' },
                            { step: '3', title: 'Confirm Your Vehicle and Quote', desc: "We'll confirm the available vehicle and applicable fare for your trip." },
                            { step: '4', title: 'Prepare Your Travel Documents', desc: 'Before departure, make sure your passport, UAE entry permission and other required documents are valid for the journey.' },
                            { step: '5', title: 'Meet Your Driver', desc: 'Your private vehicle collects you from the agreed Dammam location and takes you toward Abu Dhabi.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <span className="text-3xl font-black text-primary/40 shrink-0">{s.step}</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Dammam to Abu Dhabi Taxi FAQs</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* Related routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Other Popular Routes from Dammam</h3>
                    <p className="text-gray-500 text-sm mb-6">If Abu Dhabi isn't your final destination, we also provide other pre-booked intercity routes from Dammam.</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
                        <Link href="/routes/dammam-dubai/" className="text-primary font-semibold hover:underline">Dammam to Dubai</Link>
                        <Link href="/routes/dammam-bahrain/" className="text-primary font-semibold hover:underline">Dammam to Bahrain</Link>
                        <Link href="/routes/dammam-doha/" className="text-primary font-semibold hover:underline">Dammam to Doha</Link>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">For local Eastern Province journeys, you can also explore transfers to:</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/locations/al-khobar/" className="text-primary font-semibold hover:underline">Al Khobar</Link>
                        <Link href="/locations/dhahran/" className="text-primary font-semibold hover:underline">Dhahran</Link>
                        <Link href="/locations/jubail/" className="text-primary font-semibold hover:underline">Jubail</Link>
                        <Link href="/locations/hofuf/" className="text-primary font-semibold hover:underline">Hofuf</Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Book Your Dammam to Abu Dhabi Transfer</h2>
                    <p className="text-gray-400 mb-10 text-lg">Send your pickup location, travel date, passenger count and preferred vehicle to receive a quote.</p>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Abu%20Dhabi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-lg px-10 py-7 h-auto rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Request a Quote from 3,000 SAR</Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
