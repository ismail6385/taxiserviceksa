import { Metadata } from 'next';
import Link from 'next/link';
import { Sunrise, Sun, Calendar, CheckCircle2, XCircle, Compass, ArrowRight } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RouteFleetSection from '@/components/RouteFleetSection';
import AuthorCard from '@/components/AuthorCard';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/locations/alula/private-driver/';
const BOOK = '/booking/?from=AlUla%20(hotel%20pickup)&to=AlUla%20sightseeing%20with%20driver';

export const metadata: Metadata = {
    title: 'AlUla Private Driver | Half Day, Full Day & Multi-Day Hire | Taxi Service KSA',
    description: 'Hire a car with a driver in AlUla. Half day, full day or 2-3 days: Old Town, Dadan, Jabal Ikmah, Elephant Rock, Maraya and the Hegra visitor centre on your schedule.',
    keywords: [
        'AlUla private driver',
        'hire driver in AlUla',
        'AlUla car with driver',
        'AlUla full day driver',
        'AlUla day tour driver',
        'AlUla chauffeur',
        'AlUla sightseeing car',
        'AlUla driver for 2 days',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla Private Driver | Half Day, Full Day & Multi-Day',
        description: 'One car and one driver for your AlUla sightseeing, on your own schedule.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const packages = [
    {
        icon: Sunrise,
        name: 'Half Day',
        hours: 'About 5 hours',
        best: 'One or two sites plus a meal',
        plan: ['Hotel pickup', 'Old Town walk', 'Dadan & Jabal Ikmah', 'Lunch in town, back to hotel'],
    },
    {
        icon: Sun,
        name: 'Full Day',
        hours: 'About 10 hours',
        best: 'Most first-time visitors',
        plan: ['Hegra visitor centre for your tour', 'Dadan & Jabal Ikmah', 'Old Town & Maraya (exterior)', 'Sunset at Elephant Rock, dinner, hotel'],
        featured: true,
    },
    {
        icon: Calendar,
        name: '2-3 Days',
        hours: 'Same driver each day',
        best: 'Families, photographers, slow travel',
        plan: ['Airport or Madinah pickup on day 1', 'Heritage sites spread over 2 days', 'Optional Khaybar or Tayma day', 'Drop at airport or onward city'],
    },
];

export default function AlUlaPrivateDriverPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="AlUla"
                description="Car hire with a professional driver in AlUla for half-day, full-day and multi-day sightseeing."
                services={[
                    { name: 'AlUla Half-Day Driver', description: 'Around 5 hours with one car and driver.' },
                    { name: 'AlUla Full-Day Driver', description: 'Around 10 hours covering the main heritage sites.' },
                    { name: 'AlUla Multi-Day Driver', description: 'Same driver for a 2-3 day AlUla trip.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra-tombs.webp', '/alula-hegra.webp']}
                h1Text="Private Driver in AlUla"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Car + Driver, Your Schedule
                    </span>
                }
                subtitle="One car stays with you all day"
                location="Half Day | Full Day | 2-3 Days"
            />

            <div className="bg-white border-b border-gray-200">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap gap-2 text-gray-500">
                    <Link href="/" className="hover:text-gray-900">Home</Link> /
                    <Link href="/locations/alula/" className="hover:text-gray-900">AlUla</Link> /
                    <span className="text-gray-900 font-semibold">Private Driver</span>
                </nav>
            </div>

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AlUla is big. Its sites are far apart.</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Hegra sits north of town, Elephant Rock to the north-east, Maraya in the Ashar Valley, and Dadan and Jabal Ikmah beyond the Old Town. There is no simple public transport linking them, and ride-hailing cars are rare - getting a ride back from Elephant Rock after sunset is a common problem. A private driver keeps one car with you, waits at every stop and moves on when you are ready.
                </p>
            </section>

            {/* Packages */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((p) => (
                        <div key={p.name} className={`rounded-3xl p-8 flex flex-col ${p.featured ? 'bg-gray-900 text-white ring-4 ring-primary' : 'bg-white border border-gray-200'}`}>
                            <p.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-2xl font-bold">{p.name}</h3>
                            <p className={`text-sm mb-1 ${p.featured ? 'text-gray-300' : 'text-gray-500'}`}>{p.hours}</p>
                            <p className={`text-sm font-semibold mb-6 ${p.featured ? 'text-primary' : 'text-gray-800'}`}>Best for: {p.best}</p>
                            <ul className="space-y-2 mb-8 flex-1">
                                {p.plan.map((step) => (
                                    <li key={step} className="flex gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {step}
                                    </li>
                                ))}
                            </ul>
                            <Link href={BOOK}>
                                <Button className={`w-full font-bold ${p.featured ? 'bg-primary text-black hover:bg-white' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                                    Request {p.name} Quote
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Zone guide */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><Compass className="text-primary" /> How the driver plans your day</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Ticket times come first</h3>
                            <p className="text-sm leading-relaxed">Hegra, Dadan and some other sites run on timed tickets booked through the official AlUla website. Send us your ticket times and the driver builds the route around them.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Heat and light</h3>
                            <p className="text-sm leading-relaxed">Outdoor sites are best early morning. Midday is for Old Town cafes, museums or the hotel. Elephant Rock is saved for sunset.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Group sites by area</h3>
                            <p className="text-sm leading-relaxed">Dadan, Jabal Ikmah and the Old Town are close together; Hegra and Elephant Rock are further out. Grouping them avoids driving back and forth across the valley.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Flexible on the day</h3>
                            <p className="text-sm leading-relaxed">Want longer at one site or an extra coffee stop? Just tell the driver - within your booked hours, the plan is yours.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Does / doesn't */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white border border-gray-200 p-6">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Your driver will</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {['Pick up and drop at your hotel, resort or camp', 'Wait at each site car park', 'Drop you at the Hegra visitor centre and collect you after the tour', 'Stop for prayer, meals and photos', 'Keep water and AC ready in the car'].map((t) => (
                            <li key={t} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />{t}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 p-6">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Good to know</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {['Private cars cannot drive inside Hegra', 'Site tickets are not included - book them online', 'The driver is not a licensed site guide', 'Off-road desert driving is not included'].map((t) => (
                            <li key={t} className="flex gap-2"><XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />{t}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="AlUla Private Driver"
                faqs={[
                    {
                        question: 'Can I hire a car with a driver in AlUla for one day?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. Choose half day (about 5 hours) or full day (about 10 hours). The same driver stays with you the whole time.',
                        perspectives: [],
                    },
                    {
                        question: 'Can the driver take us inside Hegra?',
                        shortAnswer: 'No',
                        detailedAnswer: 'Private vehicles are not allowed inside Hegra. The driver drops you at the visitor centre for the official tour and picks you up when it finishes.',
                        perspectives: [],
                    },
                    {
                        question: 'Can we add Khaybar or Tayma?',
                        shortAnswer: 'Yes, on a multi-day hire',
                        detailedAnswer: 'Both are around 2 hours from AlUla, so they fit best as a separate day on a 2-3 day hire.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="py-14 px-4 text-center">
                <Link href={BOOK}>
                    <Button size="lg" className="bg-primary text-black hover:bg-gray-900 hover:text-white font-bold px-10 py-6 rounded-xl">
                        Get a Driver Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </section>

            <RouteFleetSection />
            <AlUlaLinkStrip current="/locations/alula/private-driver/" title="Getting to and around AlUla" />
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>
        </div>
    );
}
