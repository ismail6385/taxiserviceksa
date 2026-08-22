import { Metadata } from 'next';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Car, Train, Smartphone, MapPin, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Makkah Taxi Fare 2026: Prices Compared',
    description: 'How much does a taxi from Jeddah Airport to Makkah cost? Compare official taxis, Uber/Careem, the Haramain train and private pre-booked transfers, with real fixed rates.',
    keywords: ['jeddah airport to makkah taxi fare', 'jeddah airport to makkah taxi price', 'jeddah airport to makkah taxi cost', 'taxi from jeddah airport to makkah', 'jeddah airport to makkah transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jeddah-airport-makkah-taxi-fare-2026/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much is a taxi from Jeddah Airport to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Pre-booked private transfers start from 300 SAR for a sedan. Official airport taxis and ride-hailing apps are typically priced higher and can vary with demand.' } },
        { '@type': 'Question', name: 'How far is Jeddah Airport from Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'The distance is approximately 90 km via Highway 40, with a typical driving time of 1 to 1.5 hours, or up to 2 hours during peak periods such as Ramadan, Hajj or Friday afternoons.' } },
    ],
};

export default function TaxiFareGuide2026() {
    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Header */}
            <div className="bg-emerald-900 text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/10 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        2026 Fare Guide
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        How Much Should You Pay for a Taxi from Jeddah Airport to Makkah?
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                        Taxi prices from Jeddah Airport to Makkah can vary depending on the vehicle, travel time, booking method and season. This guide compares the main transport options so you can understand what a reasonable fare looks like before you travel.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Quick answer */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <Car className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Private Taxi</p>
                            <p className="font-bold text-gray-900">From 300 SAR</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Distance</p>
                            <p className="font-bold text-gray-900">~90 km</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Journey Time</p>
                            <p className="font-bold text-gray-900">~1-1.5 hours</p>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="my-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Price Comparison</h2>
                    <p className="text-gray-500 text-sm mb-6">Indicative regular-season prices. Actual fares can change with demand, vehicle type, pickup location and travel time.</p>
                    <div className="border rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-gray-50">
                                <TableRow>
                                    <TableHead className="w-[200px] font-bold text-gray-900">Transport Type</TableHead>
                                    <TableHead className="font-bold text-gray-900">Typical Cost (SAR)</TableHead>
                                    <TableHead className="font-bold text-gray-900">Pros</TableHead>
                                    <TableHead className="font-bold text-gray-900">Cons</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Car className="w-4 h-4" /> Official Airport Taxi</div>
                                    </TableCell>
                                    <TableCell>200-300 SAR</TableCell>
                                    <TableCell className="text-green-600 text-sm">Available at the curb</TableCell>
                                    <TableCell className="text-red-600 text-sm">Possible queues, variable vehicle condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Uber / Careem</div>
                                    </TableCell>
                                    <TableCell>220-400+ SAR</TableCell>
                                    <TableCell className="text-green-600 text-sm">Trackable in-app</TableCell>
                                    <TableCell className="text-red-600 text-sm">Fares can rise during high-demand periods</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Train className="w-4 h-4" /> Haramain Train</div>
                                    </TableCell>
                                    <TableCell>60-80 SAR/person</TableCell>
                                    <TableCell className="text-green-600 text-sm">Fast, comfortable</TableCell>
                                    <TableCell className="text-red-600 text-sm">Fixed schedule, luggage allowance applies, onward transfer needed from the station</TableCell>
                                </TableRow>
                                <TableRow className="bg-emerald-50">
                                    <TableCell className="font-semibold text-emerald-900">
                                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Private Pre-Booked Transfer</div>
                                    </TableCell>
                                    <TableCell className="font-bold text-emerald-700">From 300 SAR</TableCell>
                                    <TableCell className="text-emerald-700 text-sm">Meet & greet, luggage assistance, price confirmed before travel</TableCell>
                                    <TableCell className="text-emerald-700 text-sm">Advance booking required</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* What affects fare */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects the Jeddah Airport to Makkah Taxi Fare?</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Vehicle type', 'Number of passengers', 'Luggage', 'Travel date', 'Peak season', 'Pickup/drop-off location', 'One-way vs return', 'Waiting time', 'Special vehicle requirements'].map((f) => (
                            <span key={f} className="bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg text-center">{f}</span>
                        ))}
                    </div>
                </div>

                {/* Detailed Sections */}
                <div className="grid gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Official Airport Taxi</h2>
                        <p className="text-gray-700 mb-4">
                            These are the official taxis available at the airport curb. Official airport taxis may operate under airport and local taxi rules, and the final fare can depend on the applicable pricing method and journey conditions.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                            <p className="text-sm text-orange-800">
                                <strong>Note:</strong> During peak periods such as Ramadan or Hajj, waiting times at the taxi rank can be longer than usual.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ride Apps: Uber & Careem</h2>
                        <p className="text-gray-700 mb-4">
                            App-based pickups may require passengers to follow the airport's designated ride-hailing pickup instructions, which can involve a walk from the terminal.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Ride-hailing fares can increase during periods of high demand, including major arrival waves and peak Umrah periods.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Private Pre-Booked Transfer</h2>
                        <p className="text-gray-700 mb-4">
                            For families, elderly travellers and passengers with several bags, a private taxi can offer better overall convenience because it provides direct door-to-door transport without requiring a second transfer from a station.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Driver waits with a name sign at arrivals</li>
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Price confirmed before you fly</li>
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Luggage assistance included</li>
                        </ul>

                        <div className="overflow-x-auto mb-6">
                            <Table>
                                <TableHeader className="bg-gray-50">
                                    <TableRow>
                                        <TableHead className="font-bold text-gray-900">Vehicle</TableHead>
                                        <TableHead className="font-bold text-gray-900">Ideal For</TableHead>
                                        <TableHead className="font-bold text-gray-900">From</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><Link href="/fleet/toyota-camry/" className="font-semibold text-emerald-700 hover:underline">Toyota Camry</Link></TableCell>
                                        <TableCell>1-3 passengers</TableCell>
                                        <TableCell className="font-bold">300 SAR</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Link href="/fleet/hyundai-staria-vip/" className="font-semibold text-emerald-700 hover:underline">Hyundai Staria VIP</Link></TableCell>
                                        <TableCell>Families, up to 7</TableCell>
                                        <TableCell className="font-bold">350 SAR</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Link href="/fleet/toyota-hiace/" className="font-semibold text-emerald-700 hover:underline">Toyota Hiace</Link></TableCell>
                                        <TableCell>Large groups, up to 11</TableCell>
                                        <TableCell className="font-bold">500 SAR</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Link href="/fleet/gmc-yukon-xl/" className="font-semibold text-emerald-700 hover:underline">GMC Yukon XL</Link></TableCell>
                                        <TableCell>Larger families/groups</TableCell>
                                        <TableCell className="font-bold">600 SAR</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">Fixed rates include tolls and airport fees. See our <Link href="/routes/jeddah-makkah/" className="text-emerald-700 underline">Jeddah to Makkah route page</Link> for full details.</p>

                        <div className="bg-gray-100 p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-bold mb-4">Check Current Jeddah Airport → Makkah Rates</h3>
                            <div className="flex justify-center gap-4">
                                <Link href="/services/airport-transfers/">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl">
                                        View Prices & Book
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Haramain High-Speed Train</h2>
                        <p className="text-gray-700 mb-4">
                            The train is a fast, comfortable option, but has some practical limitations worth planning around.
                        </p>
                        <ul className="space-y-3 pl-4 border-l-2 border-gray-200">
                            <li className="text-gray-700"><strong>Luggage:</strong> Each passenger is allowed one checked bag (up to 25 kg) plus a small handbag or laptop bag. Excess luggage can usually be sent via the station's cargo service for an extra fee — check current rules before travelling.</li>
                            <li className="text-gray-700"><strong>Last Mile:</strong> The Makkah station is in the Ar Rusayfah area, a few kilometres from Masjid al-Haram. You may still need onward transportation from the station to your hotel or the Haram area, and travel time can vary with traffic.</li>
                            <li className="text-gray-700"><strong>Schedule:</strong> Trains run on a fixed timetable, so a very early or late flight arrival may mean waiting for the next available train.</li>
                        </ul>
                    </div>
                </div>

                {/* Taxi vs train for luggage */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi vs Train for Luggage</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Private Taxi</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Luggage stays with you in the vehicle</li>
                                <li>No station transfer required</li>
                                <li>Direct drop-off at your hotel</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Haramain Train</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Checked-bag allowance applies</li>
                                <li>An onward transfer from the station is usually needed</li>
                                <li>Passengers should confirm current luggage rules before travelling</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Who meets you */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Will Your Driver Meet You?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        For a pre-booked transfer, your driver waits in the arrivals area with a name sign and assists with your luggage. Send your flight number when booking so the pickup can be coordinated around your scheduled arrival time.
                    </p>
                </div>

                {/* Per vehicle */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Is the Taxi Fare Per Person or Per Vehicle?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Private taxi fares are normally quoted per vehicle rather than per passenger. This can make a private transfer attractive for families travelling together, since the price doesn't multiply with each additional passenger (within the vehicle's capacity).
                    </p>
                </div>

                {/* FAQ */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-5">
                        {[
                            { q: 'How much is a taxi from Jeddah Airport to Makkah?', a: 'Pre-booked private transfers start from 300 SAR for a sedan. Official airport taxis and ride-hailing apps are typically similar or higher, and can vary with demand.' },
                            { q: 'How far is Jeddah Airport from Makkah?', a: 'Approximately 90 km via Highway 40.' },
                            { q: 'How long does the taxi journey take?', a: 'Typically 1 to 1.5 hours, or up to 2 hours during peak periods such as Ramadan, Hajj or Friday afternoons.' },
                            { q: 'Is the taxi fare per person or per vehicle?', a: 'Per vehicle. The quoted price covers the vehicle for the journey, not individual seats.' },
                            { q: 'Is 300 SAR a reasonable price?', a: 'For a pre-booked sedan transfer, 300 SAR is our current published starting rate. Prices for other transport options can be similar or higher depending on demand and vehicle type.' },
                            { q: 'Can I book a private taxi in advance?', a: 'Yes, we recommend pre-booking so your driver and vehicle are confirmed before you fly.' },
                            { q: 'Is a taxi better than the Haramain train for families?', a: 'For families or passengers with several bags, a private taxi avoids the need for an onward transfer from the train station. Solo travellers with light luggage may find the train a fast, economical option if the schedule aligns with their arrival.' },
                            { q: 'Can the driver meet me at Jeddah Airport?', a: 'Yes, your driver waits in the arrivals area with a name sign. Send your flight number when booking so pickup can be coordinated.' },
                        ].map((f) => (
                            <div key={f.q} className="border-b border-gray-100 pb-5">
                                <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <div className="mt-16 border-t pt-8">
                    <h3 className="text-2xl font-bold mb-4">The Verdict</h3>
                    <p className="text-gray-700 mb-4">
                        If you're a solo traveller with light luggage and the schedule aligns, the <strong>Haramain train</strong> can be a fast, economical option.
                    </p>
                    <p className="text-gray-700 mb-6">
                        If you're travelling as a family, with elderly relatives, or with several bags, a <strong>private pre-booked taxi</strong> offers direct door-to-door transport without an extra transfer from the station.
                    </p>
                    <p className="text-sm text-gray-500 italic mb-8">
                        * Prices mentioned are indicative regular-season rates for 2026 and may vary during Ramadan or Hajj.
                    </p>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Need a Fixed-Price Transfer from Jeddah Airport to Makkah?</h3>
                        <p className="text-emerald-800 text-sm mb-6 max-w-xl mx-auto">
                            If you'd rather have a driver waiting when your flight arrives, pre-book a private transfer and confirm your vehicle and fare before travelling.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/services/airport-transfers/">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl">
                                    Check Current Rates
                                </Button>
                            </Link>
                            <Link href="/locations/makkah/">
                                <Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 font-bold px-8 py-6 rounded-xl">
                                    Makkah Taxi Service
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
