import { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, Mountain, Sun, ArrowRight, Camera } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import AuthorCard from '@/components/AuthorCard';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/routes/hail-alula/';
const BOOK = '/booking/?from=Hail&to=AlUla';

export const metadata: Metadata = {
    title: 'Hail to AlUla Taxi | Jubbah Rock Art to Hegra Road Trip | Taxi Service KSA',
    description: 'Private car from Hail to AlUla, about 4.5-5 hours. Combine the Jubbah rock art and Hegra - two UNESCO sites - in one trip. Hail hotel or airport pickup, fixed quote.',
    keywords: [
        'Hail to AlUla taxi',
        'Hail to AlUla private transfer',
        'Hail to AlUla distance',
        'Hail to AlUla road trip',
        'Jubbah to AlUla',
        'Hail airport to AlUla',
        'Jubbah and Hegra tour',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'Hail to AlUla Taxi | Heritage Road Trip',
        description: 'Jubbah rock art to Hegra with a private driver.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function HailAlUlaRoutePage() {
    return (
        <div className="bg-stone-50 min-h-screen">
            <JsonLdLocation
                cityName="Hail to AlUla"
                description="Private car transfer and heritage road trip from Hail city, Hail airport (HAS) and Jubbah to AlUla."
                services={[
                    { name: 'Hail to AlUla Transfer', description: 'Direct private car from Hail to AlUla.' },
                    { name: 'Jubbah + AlUla Road Trip', description: 'Multi-day trip combining the Hail rock art and Hegra.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra-tombs.webp', '/alula-hegra.webp']}
                h1Text="Hail to AlUla Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Two UNESCO Sites, One Road
                    </span>
                }
                subtitle="Private car across northern Arabia"
                location="~400-450 km | ~4.5-5 Hours"
            />

            <div className="bg-white border-b border-gray-200">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap gap-2 text-gray-500">
                    <Link href="/" className="hover:text-gray-900">Home</Link> /
                    <Link href="/routes/" className="hover:text-gray-900">Routes</Link> /
                    <span className="text-gray-900 font-semibold">Hail to AlUla</span>
                </nav>
            </div>

            {/* Two-site story */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white rounded-3xl p-8 border border-stone-200">
                        <Camera className="w-8 h-8 text-primary mb-3" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hail: rock art</h2>
                        <p className="text-gray-600 leading-relaxed">The Rock Art in the Hail Region, at Jubbah and Shuwaymis, is a UNESCO World Heritage Site with thousands of carvings of people and animals made over thousands of years.</p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 border border-stone-200">
                        <Landmark className="w-8 h-8 text-primary mb-3" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">AlUla: Hegra</h2>
                        <p className="text-gray-600 leading-relaxed">Hegra, Saudi Arabia&apos;s first UNESCO site, has more than a hundred monumental Nabataean tombs cut into sandstone outcrops.</p>
                    </div>
                </div>
                <div className="max-w-3xl text-lg text-gray-700 leading-relaxed space-y-4">
                    <p>
                        Many heritage travellers want to see both. The problem is getting between them: there is usually no direct flight, no train, and the road is roughly 400-450 km of desert highway, about 4.5 to 5 hours.
                    </p>
                    <p>
                        A private car turns that into part of the trip. You leave when you want, stop for photos and food, and arrive at your AlUla hotel without renting a car or driving yourself.
                    </p>
                </div>
            </section>

            {/* 3-day sample */}
            <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">Sample 3-day heritage road trip</h2>
                    <div className="space-y-6">
                        {[
                            { day: 'Day 1', icon: Camera, title: 'Hail & Jubbah', text: 'Pickup at your Hail hotel or Hail airport. Visit the Jubbah rock art (site entry booked in advance) and return to Hail for the night.' },
                            { day: 'Day 2', icon: Sun, title: 'The drive to AlUla', text: 'Early start from Hail. Around 4.5-5 hours of driving with stops for fuel, prayer and lunch. Arrive in AlUla in the afternoon for sunset at Elephant Rock.' },
                            { day: 'Day 3', icon: Mountain, title: 'Hegra & AlUla', text: 'Drop at the Hegra visitor centre for your tour, then Old Town. Add an AlUla driver day or continue to Madinah or the airport.' },
                        ].map((d) => (
                            <div key={d.day} className="flex gap-6 items-start bg-white/5 rounded-2xl p-6 border border-white/10">
                                <div className="shrink-0 text-center">
                                    <d.icon className="w-8 h-8 text-primary mx-auto" />
                                    <div className="text-xs font-bold text-primary mt-1">{d.day}</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{d.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{d.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6">Only need the transfer? Book Hail → AlUla one way and skip the rest.</p>
                </div>
            </section>

            {/* Season tips */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    ['Best season', 'October to March, when days are mild. Summer daytime heat is strong on both sites.'],
                    ['Start early', 'The road is long and mostly desert. Daylight driving is more comfortable and lets you enjoy the views.'],
                    ['Book entry', 'Jubbah and Hegra both need entry arranged in advance. Share your ticket times so we plan around them.'],
                ].map(([t, d]) => (
                    <div key={t} className="bg-white rounded-2xl p-6 border border-stone-200">
                        <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                        <p className="text-sm text-gray-600">{d}</p>
                    </div>
                ))}
            </section>

            <MicroSemanticFAQ
                contextName="Hail to AlUla"
                faqs={[
                    {
                        question: 'How far is Hail from AlUla?',
                        shortAnswer: 'About 400-450 km',
                        detailedAnswer: 'By road it is roughly 400-450 km depending on the route, around 4.5 to 5 hours of driving.',
                        perspectives: [],
                    },
                    {
                        question: 'Is there a flight from Hail to AlUla?',
                        shortAnswer: 'Usually not direct',
                        detailedAnswer: 'Direct flights are usually not available; flying often means connecting through Riyadh, which can take longer than driving door to door.',
                        perspectives: [],
                    },
                    {
                        question: 'Can I book only the transfer?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. The 3-day plan is only an example. You can book a simple one-way Hail to AlUla transfer.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-14 px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan your Hail → AlUla trip</h2>
                <Link href={BOOK}>
                    <Button size="lg" className="bg-primary text-black hover:bg-gray-900 hover:text-white font-bold px-10 py-6 rounded-xl">
                        Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </section>

            <AlUlaLinkStrip current="/routes/hail-alula/" />
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>
        </div>
    );
}
