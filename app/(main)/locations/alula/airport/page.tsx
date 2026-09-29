import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Clock, Luggage, MapPin, ShieldCheck, CircleAlert, ArrowRight, Moon } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/locations/alula/airport/';
const BOOK = '/booking/?from=AlUla%20International%20Airport%20(ULH)&to=AlUla';

export const metadata: Metadata = {
    title: 'AlUla Airport Taxi (ULH) | Hotel & Resort Transfers | Taxi Service KSA',
    description: 'Pre-book a taxi from AlUla International Airport (ULH) to your hotel, Ashar Valley resort, Old Town or Hegra. Driver waits in arrivals with your name. Fixed quote by email.',
    keywords: [
        'AlUla airport taxi',
        'ULH airport transfer',
        'AlUla International Airport taxi',
        'AlUla airport to Banyan Tree',
        'AlUla airport to Habitas',
        'AlUla airport to hotel',
        'taxi from AlUla airport',
        'Prince Abdul Majeed airport taxi',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla Airport Taxi (ULH) | Hotel & Resort Transfers',
        description: 'Driver waiting in arrivals at AlUla International Airport, fixed quote by email.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const dropOffs = [
    { place: 'AlUla town hotels & Old Town', time: '30-40 min', note: 'Most budget and mid-range hotels, Dar Tantora, Old Town car park.' },
    { place: 'Ashar Valley resorts', time: '35-50 min', note: 'Banyan Tree, Habitas and nearby resorts. Drop point depends on resort rules.' },
    { place: 'Desert camps', time: '30-60 min', note: 'Depends on the camp. Send us the camp location pin.' },
    { place: 'Hegra visitor centre', time: '45-60 min', note: 'Private cars cannot drive inside Hegra; drop at the visitor centre.' },
    { place: 'Madinah', time: '~3.5 hours', note: 'Straight from arrivals to your Madinah hotel.' },
    { place: 'Tabuk', time: '~3.5-4 hours', note: 'Direct intercity transfer north.' },
];

const luggageGuide = [
    { group: '1-3 people, up to 3 suitcases', car: 'Toyota Camry / sedan' },
    { group: '4-6 people or 4-6 suitcases', car: 'GMC Yukon or Hyundai Staria' },
    { group: '7-12 people, group luggage', car: 'Toyota Hiace' },
    { group: '13+ people, tour groups', car: 'Toyota Coaster' },
];

export default function AlUlaAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLdLocation
                cityName="AlUla Airport"
                description="Pre-booked taxi and private transfers from AlUla International Airport (ULH) to hotels, resorts, desert camps and the Hegra visitor centre."
                services={[
                    { name: 'AlUla Airport Pickup', description: 'Pickup planned around your flight arrival time.' },
                    { name: 'Resort Transfer', description: 'Airport to Ashar Valley resorts and desert camps.' },
                    { name: 'Airport Drop-off', description: 'Hotel to AlUla airport for departures.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra.webp', '/alula-hegra-tombs.webp']}
                h1Text="AlUla Airport Taxi (ULH)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        AlUla International Airport
                    </span>
                }
                subtitle="Your driver waits in arrivals - no queue, no app"
                location="Hotels | Resorts | Camps | Hegra"
            />


            {/* Problem statement */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why pre-book at AlUla airport?</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                        AlUla International Airport (ULH), previously called Prince Abdul Majeed bin Abdulaziz Airport, is a small terminal outside AlUla town. It mainly handles domestic flights from cities like Riyadh and Jeddah, with some seasonal international flights in the winter season.
                    </p>
                    <p>
                        Because flights come in waves, the few taxis at the kerb are often taken by the time you collect your bags. Ride-hailing apps have very few cars in AlUla, and after a late arrival there may be none at all. Hotels and resorts are spread across a wide valley, so walking or waiting is not a real option.
                    </p>
                    <p>
                        A pre-booked transfer solves this: send us your flight number and hotel, and a driver will be waiting when you walk out.
                    </p>
                </div>
            </section>

            {/* Arrival steps - horizontal */}
            <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Plane className="text-primary" /> What happens when you land</h2>
                    <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            ['Share your flight details', 'Send your flight number and arrival time when you book. If the flight changes, message us on WhatsApp.'],
                            ['Driver in arrivals', 'Your driver waits outside baggage claim with a sign showing your name.'],
                            ['Help with bags', 'Luggage is loaded for you. Child seats can be arranged if requested in advance.'],
                            ['Straight to your stay', 'Direct drive to your hotel, resort gate, camp or onward city. No shared stops.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="border-t-4 border-primary pt-4">
                                <div className="text-primary font-black text-sm mb-1">STEP {i + 1}</div>
                                <h3 className="font-bold text-lg mb-2">{t}</h3>
                                <p className="text-sm text-gray-400">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Drive-time table */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3"><Clock className="text-primary" /> Approximate drive times from the airport</h2>
                <p className="text-gray-500 mb-8">Times are typical and depend on your exact hotel and traffic at events.</p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-sm uppercase text-gray-500">
                            <tr>
                                <th className="px-5 py-4">Drop-off</th>
                                <th className="px-5 py-4">Drive time</th>
                                <th className="px-5 py-4 hidden md:table-cell">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {dropOffs.map((d) => (
                                <tr key={d.place}>
                                    <td className="px-5 py-4 font-semibold text-gray-900"><MapPin className="inline w-4 h-4 text-primary mr-1" />{d.place}</td>
                                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">{d.time}</td>
                                    <td className="px-5 py-4 text-gray-500 text-sm hidden md:table-cell">{d.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Resort gate + late flights callouts */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                    <h3 className="font-bold text-lg text-amber-900 mb-2 flex items-center gap-2"><CircleAlert className="w-5 h-5" /> Resort gate rules</h3>
                    <p className="text-amber-900/80 text-sm leading-relaxed">
                        Some Ashar Valley resorts control vehicle access. Depending on the resort, we drop you at reception or at the gate where the resort buggy collects you. Tell us your resort when booking and we will follow its instructions.
                    </p>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2"><Moon className="w-5 h-5 text-primary" /> Late-night arrivals</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Evening and night flights are when finding a car is hardest. Pickups can be booked for late arrivals too - just tell us about any change to your flight time.
                    </p>
                </div>
            </section>

            {/* Luggage guide */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><Luggage className="text-primary" /> Which car do you need?</h2>
                    <div className="space-y-3">
                        {luggageGuide.map((g) => (
                            <div key={g.group} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4">
                                <span className="text-gray-700">{g.group}</span>
                                <span className="font-bold text-gray-900">{g.car}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Golf bags, strollers or camping gear? Mention them in the booking notes so we send the right vehicle.</p>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="AlUla Airport"
                faqs={[
                    {
                        question: 'Are there taxis waiting at AlUla airport?',
                        shortAnswer: 'A few - not guaranteed',
                        detailedAnswer: 'There are some taxis, but numbers are small and they are often taken quickly after a flight lands. Pre-booking guarantees a car.',
                        perspectives: [],
                    },
                    {
                        question: 'Does Uber or Careem work at AlUla airport?',
                        shortAnswer: 'Very limited',
                        detailedAnswer: 'The apps may open, but very few drivers operate in AlUla, so waits can be long or no car may accept, especially late at night.',
                        perspectives: [],
                    },
                    {
                        question: 'What if my flight is delayed?',
                        shortAnswer: 'Tell us and we adjust',
                        detailedAnswer: 'Message us on WhatsApp with the new arrival time and we will rearrange the pickup.',
                        perspectives: [],
                    },
                    {
                        question: 'Can you take me to the airport for my departure?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. Book a hotel-to-airport drop-off, or add it as the return leg of your arrival booking.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="bg-primary py-14 px-4 text-center">
                <h2 className="text-3xl font-black text-black mb-3">Landing in AlUla soon?</h2>
                <p className="text-black/70 mb-6">Send your flight number and hotel - we reply with a fixed price by email.</p>
                <Link href={BOOK}>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold px-10 py-6 rounded-xl">
                        Book Airport Pickup <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <p className="text-sm text-black/60 mt-4 flex items-center justify-center gap-1"><ShieldCheck className="w-4 h-4" /> Or email info@taxiserviceksa.com</p>
            </section>

            <AlUlaLinkStrip current="/locations/alula/airport/" />
        </div>
    );
}
