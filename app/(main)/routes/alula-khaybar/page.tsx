import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, RotateCcw, ArrowRightLeft, ArrowRight, Footprints, Sun } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/routes/alula-khaybar/';

export const metadata: Metadata = {
    title: 'AlUla to Khaybar Day Trip | Private Car & Driver | Taxi Service KSA',
    description: 'Private day trip from AlUla to Khaybar fort and oasis, about 2 hours each way. The driver waits while you explore - or continue on to Madinah the same day.',
    keywords: [
        'AlUla to Khaybar',
        'AlUla to Khaybar day trip',
        'AlUla to Khaybar taxi',
        'Khaybar fort tour from AlUla',
        'AlUla to Khaybar distance',
        'AlUla Khaybar Madinah',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla to Khaybar Day Trip | Private Car & Driver',
        description: 'Khaybar fort and oasis from AlUla with a driver who waits.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const timeline = [
    ['07:00', 'Pickup in AlUla', 'Early start to reach Khaybar before the midday heat.'],
    ['09:00', 'Arrive in Khaybar', 'Around 2 hours on the highway south.'],
    ['09:00 - 11:30', 'Fort & old town', 'Climb to the fort on its basalt hill and walk the old mud-brick quarter below. The driver waits.'],
    ['11:30 - 12:30', 'Oasis & lunch', 'Palm groves around the old settlement, then lunch in town.'],
    ['12:30', 'Leave Khaybar', 'Back north to AlUla - or south to Madinah.'],
    ['~14:30', 'Back in AlUla', 'Time to rest before sunset at Elephant Rock.'],
];

export default function AlUlaKhaybarRoutePage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLdLocation
                cityName="AlUla to Khaybar"
                description="Private day trip and one-way car from AlUla to Khaybar fort and oasis, with the option to continue to Madinah."
                services={[
                    { name: 'AlUla - Khaybar Day Trip', description: 'Return trip; driver waits while you explore.' },
                    { name: 'AlUla - Khaybar - Madinah', description: 'Visit Khaybar on the way to Madinah.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra.webp', '/alula-hegra-tombs.webp']}
                h1Text="AlUla to Khaybar Day Trip"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Fort, Oasis & Lava Fields
                    </span>
                }
                subtitle="A private car and a driver who waits"
                location="~180 km | ~2 Hours Each Way"
            />

            <div className="border-b border-gray-200">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap gap-2 text-gray-500">
                    <Link href="/" className="hover:text-gray-900">Home</Link> /
                    <Link href="/routes/" className="hover:text-gray-900">Routes</Link> /
                    <span className="text-gray-900 font-semibold">AlUla to Khaybar</span>
                </nav>
            </div>

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-lg text-gray-700 leading-relaxed space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Why visit Khaybar from AlUla</h2>
                <p>
                    Khaybar is a historic oasis south of AlUla. Its old fort stands on a dark basalt hill above palm groves and a quiet mud-brick old town, surrounded by the huge Harrat Khaybar lava fields. It gets far fewer visitors than AlUla, which is part of its appeal.
                </p>
                <p>
                    It is roughly 180 km from AlUla, about 2 hours each way, so it makes a comfortable day trip. There is no bus that fits a day visit, which is why most people go with a private car. See our <Link href="/locations/khayber-fort/" className="text-primary font-semibold underline">Khaybar Fort transport guide</Link> for more on the site.
                </p>
            </section>

            {/* Clock timeline */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3"><Clock className="text-primary" /> A sample day</h2>
                    <p className="text-gray-500 mb-8">Times are an example - you set the start time.</p>
                    <div className="divide-y divide-gray-200 bg-white rounded-2xl border border-gray-200">
                        {timeline.map(([time, title, text]) => (
                            <div key={title} className="grid grid-cols-[110px_1fr] gap-4 px-6 py-5">
                                <div className="font-mono font-bold text-gray-900">{time}</div>
                                <div>
                                    <div className="font-bold text-gray-900">{title}</div>
                                    <div className="text-sm text-gray-600">{text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Two options */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose your trip</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-3xl border-2 border-gray-200 p-8">
                        <RotateCcw className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Day trip & return</h3>
                        <p className="text-gray-600 mb-6">AlUla → Khaybar → AlUla. Driver waits during your visit. Best if you are staying more nights in AlUla.</p>
                        <Link href="/booking/?from=AlUla&to=Khaybar%20(day%20trip%2C%20return%20to%20AlUla)">
                            <Button className="w-full bg-gray-900 text-white hover:bg-primary hover:text-black font-bold">Quote: Day Trip</Button>
                        </Link>
                    </div>
                    <div className="rounded-3xl border-2 border-primary p-8 bg-primary/5">
                        <ArrowRightLeft className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Khaybar on the way to Madinah</h3>
                        <p className="text-gray-600 mb-6">AlUla → Khaybar → Madinah. Khaybar is on the way, so you see it while travelling. Roughly 170 km more from Khaybar to Madinah.</p>
                        <Link href="/booking/?from=AlUla&to=Madinah%20via%20Khaybar">
                            <Button className="w-full bg-primary text-black hover:bg-gray-900 hover:text-white font-bold">Quote: Via Khaybar</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <Sun className="w-6 h-6 text-amber-700 shrink-0" />
                    <p className="text-sm text-amber-900">From April to October, go early. The fort has little shade and the rock holds heat by midday.</p>
                </div>
                <div className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <Footprints className="w-6 h-6 text-gray-700 shrink-0" />
                    <p className="text-sm text-gray-700">The path up to the fort is steep and rocky. Wear proper shoes and carry water.</p>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="AlUla to Khaybar"
                faqs={[
                    {
                        question: 'How far is Khaybar from AlUla?',
                        shortAnswer: 'About 180 km',
                        detailedAnswer: 'Roughly 180 km by road, about 2 hours each way.',
                        perspectives: [],
                    },
                    {
                        question: 'Does the driver wait in Khaybar?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'On a day trip the same driver waits while you visit and drives you back to AlUla.',
                        perspectives: [],
                    },
                    {
                        question: 'Can I visit Khaybar and continue to Madinah?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. Khaybar lies between AlUla and Madinah, so you can stop there and continue to your Madinah hotel the same day.',
                        perspectives: [],
                    },
                ]}
            />

            <div className="text-center py-10">
                <Link href="/booking/?from=AlUla&to=Khaybar" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary">
                    Open booking form <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <AlUlaLinkStrip current="/routes/alula-khaybar/" title="More trips from AlUla" />
        </div>
    );
}
