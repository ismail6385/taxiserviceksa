import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, Train, Hotel, ArrowRight, MapPin } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/routes/alula-madinah/';
const BOOK = '/booking/?from=AlUla&to=Madinah';

export const metadata: Metadata = {
    title: 'AlUla to Madinah Taxi | Private Transfer to Hotel, Airport or Train | Taxi Service KSA',
    description: 'Private taxi from AlUla to Madinah, about 330 km and 3.5 hours. Drop at your hotel near the Prophet\'s Mosque, Madinah airport (MED) or the Haramain train station.',
    keywords: [
        'AlUla to Madinah taxi',
        'taxi from AlUla to Madinah',
        'AlUla to Madinah private transfer',
        'AlUla to Madinah airport',
        'AlUla to Madinah train station',
        'AlUla to Madinah distance',
        'AlUla to Madinah drive time',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla to Madinah Taxi | Private Transfer',
        description: 'About 330 km and 3.5 hours from your AlUla hotel to Madinah.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const planners = [
    {
        icon: Plane,
        title: 'Catching a flight at MED',
        advice: 'Plan to reach the airport about 2-3 hours before your flight. With roughly 3.5 hours of driving, most travellers leave AlUla 6-7 hours before departure.',
    },
    {
        icon: Train,
        title: 'Catching the Haramain train',
        advice: 'Aim to arrive at Madinah station at least 45-60 minutes before departure. Share your train time and we suggest a pickup time.',
    },
    {
        icon: Hotel,
        title: 'Going to your Madinah hotel',
        advice: 'Leave whenever suits you. Many guests leave AlUla after breakfast and arrive in Madinah in time for Dhuhr or Asr prayer.',
    },
];

export default function AlUlaMadinahRoutePage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLdLocation
                cityName="AlUla to Madinah"
                description="Private intercity car from AlUla hotels and resorts to Madinah hotels, Prince Mohammad bin Abdulaziz Airport (MED) and the Haramain train station."
                services={[
                    { name: 'AlUla to Madinah Hotel Transfer', description: 'Door to door from AlUla to central Madinah.' },
                    { name: 'AlUla to Madinah Airport', description: 'Drop at MED timed to your flight.' },
                    { name: 'AlUla to Haramain Station', description: 'Drop at Madinah train station.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra-tombs.webp', '/hero-slide-2.webp']}
                h1Text="AlUla to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        AlUla → Madinah
                    </span>
                }
                subtitle="From the heritage valley to the Prophet's city"
                location="~330 km | ~3.5 Hours | Door to Door"
            />

            <div className="border-b border-gray-200">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap gap-2 text-gray-500">
                    <Link href="/" className="hover:text-gray-900">Home</Link> /
                    <Link href="/routes/" className="hover:text-gray-900">Routes</Link> /
                    <span className="text-gray-900 font-semibold">AlUla to Madinah</span>
                </nav>
            </div>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-4 text-lg text-gray-700 leading-relaxed">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Ending your AlUla trip in Madinah</h2>
                    <p>
                        Madinah is the most common next stop after AlUla. Some travellers are Umrah pilgrims who added AlUla to their trip, others fly home from Madinah airport or take the Haramain high-speed train on to Makkah and Jeddah.
                    </p>
                    <p>
                        There is no train between AlUla and Madinah and bus options are limited, so most people go by car. The drive is roughly 330 km on a good desert highway and takes around 3.5 hours without long stops.
                    </p>
                    <p>
                        We collect you from your AlUla hotel, resort or camp and drive straight to your destination in Madinah. You choose the departure time and the driver stops whenever you need.
                    </p>
                </div>
                <aside className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-200 h-fit">
                    <h3 className="font-bold text-gray-900 mb-4">Trip at a glance</h3>
                    <dl className="space-y-3 text-sm">
                        {[
                            ['Distance', 'About 330 km'],
                            ['Driving time', 'About 3.5 hours'],
                            ['Pickup', 'Any AlUla hotel, resort or camp'],
                            ['Drop-off', 'Madinah hotel, MED airport or train station'],
                            ['Optional stop', 'Khaybar fort (adds time)'],
                            ['Price', 'Fixed quote by email'],
                        ].map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4 border-b border-gray-200 pb-2">
                                <dt className="text-gray-500">{k}</dt>
                                <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <Link href={BOOK} className="block mt-6">
                        <Button className="w-full bg-primary text-black hover:bg-gray-900 hover:text-white font-bold py-6">Get a Quote</Button>
                    </Link>
                </aside>
            </section>

            {/* Planner by destination */}
            <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">When should you leave AlUla?</h2>
                    <p className="text-gray-400 mb-10">It depends on what you are catching in Madinah.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {planners.map((p) => (
                            <div key={p.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <p.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{p.advice}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Road strip */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">The road south</h2>
                <ol className="relative border-l-2 border-primary ml-3 space-y-8">
                    {[
                        ['AlUla', 'Pickup from your hotel. Last look at the sandstone cliffs as you leave the valley.'],
                        ['Desert highway', 'A long, quiet highway through open desert and volcanic harrat. Fuel stations with food and prayer areas along the way.'],
                        ['Khaybar (optional)', 'Historic oasis and fort roughly halfway. Add it as a stop when booking.'],
                        ['Madinah', 'Drop at your hotel near the Prophet\'s Mosque, the airport or the train station.'],
                    ].map(([t, d]) => (
                        <li key={t} className="ml-6">
                            <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary" />
                            <h3 className="font-bold text-gray-900 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{t}</h3>
                            <p className="text-gray-600 text-sm">{d}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Umrah continuation */}
            <section className="bg-primary/10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Continuing your Umrah journey?</h2>
                        <p className="text-gray-600">Book your Madinah Ziyarat tour or onward car to Makkah with the same team.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/services/madinah-ziyarat/" className="rounded-xl bg-white border border-gray-200 px-5 py-3 font-semibold hover:border-primary">Madinah Ziyarat</Link>
                        <Link href="/routes/madinah-makkah/" className="rounded-xl bg-white border border-gray-200 px-5 py-3 font-semibold hover:border-primary">Madinah to Makkah</Link>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="AlUla to Madinah"
                faqs={[
                    {
                        question: 'How long does it take from AlUla to Madinah by car?',
                        shortAnswer: 'About 3.5 hours',
                        detailedAnswer: 'The road trip is roughly 330 km and usually takes about 3.5 hours, plus any stops you ask for.',
                        perspectives: [],
                    },
                    {
                        question: 'Is there a train from AlUla to Madinah?',
                        shortAnswer: 'No',
                        detailedAnswer: 'There is no passenger train between AlUla and Madinah. The Haramain train runs from Madinah to Makkah and Jeddah only.',
                        perspectives: [],
                    },
                    {
                        question: 'Can you drop us at Madinah airport?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. Share your flight time and we will suggest a pickup time in AlUla so you arrive with enough buffer.',
                        perspectives: [],
                    },
                ]}
            />

            <div className="text-center py-12 px-4">
                <Link href={BOOK}>
                    <Button size="lg" className="bg-gray-900 text-white hover:bg-primary hover:text-black font-bold px-10 py-6 rounded-xl">
                        Book AlUla to Madinah <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedRoutes originSlug="alula" currentSlug="alula-madinah" />
            </div>
            <AlUlaLinkStrip current="/routes/alula-madinah/" />
        </div>
    );
}
