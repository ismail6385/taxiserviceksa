import { Metadata } from 'next';
import Link from 'next/link';
import { Hotel, Factory, Plane, Ship, ArrowRight } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import RouteFleetSection from '@/components/RouteFleetSection';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/routes/yanbu-alula/';
const BOOK = '/booking/?from=Yanbu&to=AlUla';

export const metadata: Metadata = {
    title: 'Yanbu to AlUla Taxi | Private Car from Hotel, Airport or Port | Taxi Service KSA',
    description: 'Private taxi from Yanbu to AlUla. Pickup from Yanbu city, Yanbu Industrial City, YNB airport or the port. About 4-4.5 hours to your AlUla hotel. Fixed quote.',
    keywords: [
        'Yanbu to AlUla taxi',
        'Yanbu to AlUla private transfer',
        'Yanbu to AlUla car',
        'Yanbu to AlUla distance',
        'Yanbu to AlUla by road',
        'Yanbu port to AlUla',
        'Yanbu Industrial City to AlUla',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'Yanbu to AlUla Taxi | Private Car',
        description: 'From the Red Sea coast to AlUla with a private driver.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const pickups = [
    { icon: Hotel, name: 'Yanbu Al Bahr', text: 'Hotels, apartments and homes in Yanbu city and along the corniche.' },
    { icon: Factory, name: 'Yanbu Industrial City', text: 'Compounds and residences in Yanbu Al Sinaiyah - popular for weekend trips.' },
    { icon: Plane, name: 'Yanbu Airport (YNB)', text: 'Meet and greet in arrivals, then straight to AlUla.' },
    { icon: Ship, name: 'Yanbu port', text: 'Pickup for cruise and ferry passengers, timed to your ship.' },
];

export default function YanbuAlUlaRoutePage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLdLocation
                cityName="Yanbu to AlUla"
                description="Private car transfer from Yanbu city, Yanbu Industrial City, Yanbu airport (YNB) and Yanbu port to hotels, resorts and camps in AlUla."
                services={[
                    { name: 'Yanbu to AlUla One Way', description: 'Private car to any AlUla hotel or camp.' },
                    { name: 'Yanbu - AlUla Weekend Round Trip', description: 'Out and back with the option of a driver in AlUla.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra.webp', '/alula-hegra-tombs.webp']}
                h1Text="Yanbu to AlUla Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Red Sea → AlUla
                    </span>
                }
                subtitle="Private car from the coast to the heritage valley"
                location="~360-400 km | ~4-4.5 Hours"
            />


            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who books Yanbu to AlUla?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Residents on a weekend</h3>
                        <p className="text-sm leading-relaxed">Families and engineers living in Yanbu who want two or three days in AlUla without driving 8+ hours themselves.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Red Sea visitors</h3>
                        <p className="text-sm leading-relaxed">Divers and beach visitors adding AlUla to a west-coast trip.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Ship passengers</h3>
                        <p className="text-sm leading-relaxed">Cruise and ferry passengers arriving at Yanbu port who want to see AlUla on land.</p>
                    </div>
                </div>
                <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                    There is no train and usually no direct flight between Yanbu and AlUla, so the road is the practical choice. Depending on the road taken, it is roughly 360-400 km, about 4 to 4.5 hours of driving.
                </p>
            </section>

            {/* Pickup grid */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Where we pick you up in Yanbu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {pickups.map((p) => (
                            <div key={p.name} className="bg-white rounded-2xl p-6 border border-gray-200">
                                <p.icon className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                                <p className="text-sm text-gray-600">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* One way vs round trip */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">One way or round trip?</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-5 py-4"></th>
                                <th className="px-5 py-4">One way</th>
                                <th className="px-5 py-4">Round trip</th>
                                <th className="px-5 py-4">Round trip + AlUla driver</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-5 py-4 font-semibold">Best for</td>
                                <td className="px-5 py-4">Continuing to Madinah, Tabuk or flying out of AlUla</td>
                                <td className="px-5 py-4">Returning to Yanbu after your stay</td>
                                <td className="px-5 py-4">Weekend trips with sightseeing</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-4 font-semibold">In AlUla</td>
                                <td className="px-5 py-4">Drop at hotel</td>
                                <td className="px-5 py-4">Drop, then pickup on your return date</td>
                                <td className="px-5 py-4">Same car and driver for sightseeing days</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-4 font-semibold">Booking</td>
                                <td className="px-5 py-4">One form</td>
                                <td className="px-5 py-4">Add return date in the form</td>
                                <td className="px-5 py-4">Mention it in the notes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link href={BOOK}>
                        <Button size="lg" className="bg-primary text-black hover:bg-gray-900 hover:text-white font-bold px-10 py-6 rounded-xl">
                            Get a Yanbu → AlUla Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="Yanbu to AlUla"
                faqs={[
                    {
                        question: 'How far is AlUla from Yanbu by road?',
                        shortAnswer: 'About 360-400 km',
                        detailedAnswer: 'Roughly 360-400 km depending on the road taken, usually about 4 to 4.5 hours of driving.',
                        perspectives: [],
                    },
                    {
                        question: 'Can I do Yanbu to AlUla and back in one day?',
                        shortAnswer: 'Possible, not ideal',
                        detailedAnswer: 'It means 8-9 hours in the car. We recommend at least one night in AlUla.',
                        perspectives: [],
                    },
                    {
                        question: 'Do you pick up from Yanbu Industrial City?',
                        shortAnswer: 'Yes',
                        detailedAnswer: 'Yes. We pick up from compounds and residences in Yanbu Al Sinaiyah as well as Yanbu city.',
                        perspectives: [],
                    },
                ]}
            />

            <RouteFleetSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <RelatedRoutes originSlug="yanbu" currentSlug="yanbu-alula" />
            </div>
            <AlUlaLinkStrip current="/routes/yanbu-alula/" />
        </div>
    );
}
