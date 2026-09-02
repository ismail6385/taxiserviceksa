import { Metadata } from 'next';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Car, MapPin, Clock, FileText, Route } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Car With Driver from Riyadh to Dubai | Road Travel Guide',
    description: 'Planning Riyadh to Dubai by road? Learn about distance, travel time, the Al Batha border, documents, vehicles and private car options.',
    keywords: ['car with driver from Riyadh to Dubai', 'Riyadh to Dubai car with driver', 'Riyadh to Dubai chauffeur', 'Riyadh to Dubai private car', 'Riyadh to Dubai by car', 'Riyadh to Dubai distance', 'Riyadh Dubai border crossing'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/car-with-driver-riyadh-to-dubai/',
    },
};

const WA_LINK = "https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20car%20with%20driver%20from%20Riyadh%20to%20Dubai.";

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Can I travel from Riyadh to Dubai by car with a driver?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A private chauffeur transfer can be arranged for the road journey between Riyadh and Dubai, subject to the applicable passenger, vehicle and cross-border requirements.' } },
        { '@type': 'Question', name: 'How far is Dubai from Riyadh by road?', acceptedAnswer: { '@type': 'Answer', text: 'The road journey is approximately 1,000 km via the Al Batha–Al Ghuwaifat border crossing.' } },
        { '@type': 'Question', name: 'How long does Riyadh to Dubai take by car?', acceptedAnswer: { '@type': 'Answer', text: 'Allow roughly 10-12 hours. Border processing, traffic, rest stops and road conditions can affect total journey time.' } },
    ],
};

export default function CarWithDriverRiyadhToDubai() {
    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Header */}
            <div className="bg-emerald-900 text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/10 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Road Travel Guide
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Car With Driver from Riyadh to Dubai
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                        Planning to travel from Riyadh to Dubai by road? This guide covers the distance, travel time, border crossing, documents, vehicle options and what to expect from a private car with driver.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Quick answer */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <Route className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Distance</p>
                            <p className="font-bold text-gray-900">~1,000 km</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Driving Time</p>
                            <p className="font-bold text-gray-900">10-12 hours</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Car className="w-6 h-6 text-emerald-700 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Private Car</p>
                            <p className="font-bold text-gray-900">From 2,000 SAR</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>car with driver from Riyadh to Dubai</strong> can be a comfortable option for families, business travelers, groups, and passengers who prefer a private door-to-door journey instead of flying.
                </p>
                <p className="text-gray-700 mb-12 leading-relaxed">
                    The trip crosses from Saudi Arabia into the United Arab Emirates, so it's more than an ordinary intercity transfer. Below is what to expect: the road distance, the border crossing, travel documents, vehicle options and how the journey is arranged.
                </p>

                {/* Quick overview table */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Riyadh to Dubai by Car: Quick Overview</h2>
                    <div className="border rounded-2xl overflow-hidden shadow-sm overflow-x-auto mt-6">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-semibold w-1/3">Route</TableCell>
                                    <TableCell>Riyadh → Al Kharj → Haradh → Al Batha → Al Ghuwaifat → Abu Dhabi → Dubai</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Distance</TableCell>
                                    <TableCell>Approximately 1,000 km, depending on exact pickup and drop-off locations</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Driving Time</TableCell>
                                    <TableCell>Roughly 10-12 hours, including border processing</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Border</TableCell>
                                    <TableCell>Al Batha (Saudi side) — Al Ghuwaifat (UAE side), the sole land crossing between the two countries</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Highways</TableCell>
                                    <TableCell>Highway 95 in Saudi Arabia, becoming the E11 in the UAE</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Best For</TableCell>
                                    <TableCell>Families, groups, business travelers and passengers with luggage</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        The actual journey can take longer than the minimum driving estimate because of border processing, traffic and rest stops — allow extra time if you have a fixed appointment in Dubai.
                    </p>
                </div>

                {/* Why private driver */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Travel from Riyadh to Dubai With a Private Driver?</h2>
                    <p className="text-gray-700 mb-4">
                        Flying is usually faster, but a private car offers a different kind of convenience — you don't have to drive the whole route yourself. A private car can be useful when:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['Traveling with family', 'Several passengers together', 'Substantial luggage', 'You want door-to-door transport', 'Traveling for business', 'You prefer not to drive the full distance'].map((f) => (
                            <div key={f} className="flex items-center gap-2 text-gray-700 text-sm bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {f}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Route */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Riyadh to Dubai Road Route</h2>
                    <p className="text-gray-700 mb-4">
                        The journey travels east from Riyadh toward the Saudi-UAE border, following the general corridor:
                    </p>
                    <p className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-semibold text-gray-900 text-sm mb-4">
                        Riyadh → Al Kharj → Haradh → Al Batha → Al Ghuwaifat → Abu Dhabi → Dubai
                    </p>
                    <p className="text-gray-700">
                        Al Batha is the Saudi side of the crossing, and Al Ghuwaifat is on the UAE side — it's the only land border crossing between the two countries. After completing exit and entry procedures, the journey continues on the E11 through the UAE toward Abu Dhabi and then Dubai. The exact route can vary with your pickup location, destination and road conditions.
                    </p>
                </div>

                {/* Travel time */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Does Riyadh to Dubai Take by Car?</h2>
                    <p className="text-gray-700 mb-4">
                        For planning purposes, allow around <strong>10-12 hours</strong> for the complete road journey. This is an estimate, not a guaranteed arrival time — several factors affect the total duration:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Traffic leaving Riyadh', 'Highway conditions', 'Border traffic', 'Immigration processing', 'Rest stops', 'Weather', 'Traffic near Abu Dhabi/Dubai', 'Exact pickup/drop-off points'].map((f) => (
                            <span key={f} className="bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg text-center">{f}</span>
                        ))}
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
                        <p className="text-sm text-orange-800">
                            <strong>Note:</strong> The border is one of the biggest variables. On a quiet day the crossing can be quick; during busy periods it can take considerably longer. If you have a fixed appointment in Dubai, build in a reasonable buffer.
                        </p>
                    </div>
                </div>

                {/* Border */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Saudi Arabia–UAE Border Crossing</h2>
                    <p className="text-gray-700 mb-4">
                        The international border is what makes this trip different from a normal domestic transfer. Passengers leave Saudi Arabia through the <strong>Al Batha</strong> border facilities and enter the UAE through <strong>Al Ghuwaifat</strong>, operating 24 hours a day.
                    </p>
                    <p className="text-gray-700">
                        Keep your passport and other travel documents easily accessible throughout the journey. Exact entry requirements depend on your nationality, residency and visa status — confirm your own eligibility to enter the UAE by land before booking.
                    </p>
                </div>

                {/* Documents */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-emerald-700" /> Documents You Need for the Journey</h2>
                    <p className="text-gray-700 mb-4">Because this is an international journey, treat it differently from a normal domestic taxi ride. Depending on your circumstances, you may need:</p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> A valid passport</li>
                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> A valid UAE visa or entry status, where required</li>
                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> For Saudi residents: valid Iqama plus an exit-re-entry permit</li>
                        <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Any other travel authorization required for your nationality</li>
                    </ul>
                    <p className="text-gray-700">
                        Visa and entry requirements differ by nationality and residency status, so verify your own UAE entry eligibility before starting the journey. Keep your original documents with you rather than packed away in checked luggage.
                    </p>
                </div>

                {/* Same car */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Does the Same Car Continue From Riyadh to Dubai?</h2>
                    <p className="text-gray-700 mb-4">
                        This is worth asking any cross-border operator before booking, since it isn't the same for every company. For our <Link href="/routes/riyadh-dubai/" className="text-emerald-700 font-semibold hover:underline">Riyadh to Dubai transfers</Link>, the same vehicle and driver travel with you the whole way — there's no vehicle change at the border. Your chauffeur handles the vehicle-side border paperwork and crossing insurance; you remain responsible for your own passport, visa and residency documents.
                    </p>
                    <p className="text-gray-700">
                        That means your luggage stays in one vehicle for the entire trip, with no transfer between cars at the crossing.
                    </p>
                </div>

                {/* Vehicles */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Vehicle Is Best for Riyadh to Dubai?</h2>
                    <p className="text-gray-700 mb-6">The right vehicle depends on your group size, luggage and preferred comfort.</p>
                    <div className="overflow-x-auto mb-4">
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
                                    <TableCell><Link href="/fleet/toyota-camry/" className="font-semibold text-emerald-700 hover:underline">Sedan (Camry/Sonata)</Link></TableCell>
                                    <TableCell>Up to 4 passengers, business travelers with light luggage</TableCell>
                                    <TableCell className="font-bold">2,000 SAR</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">Toyota Fortuner</TableCell>
                                    <TableCell>Up to 6 passengers, small groups</TableCell>
                                    <TableCell className="font-bold">2,800 SAR</TableCell>
                                </TableRow>
                                <TableRow className="bg-emerald-50">
                                    <TableCell><Link href="/fleet/gmc-yukon/" className="font-semibold text-emerald-700 hover:underline">GMC Yukon / Chevy Tahoe</Link></TableCell>
                                    <TableCell>Up to 7 passengers, families and groups with more luggage</TableCell>
                                    <TableCell className="font-bold">3,500 SAR</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-xs text-gray-500">Prices are per vehicle and include fuel, tolls and border crossing insurance. See the full <Link href="/fleet/" className="text-emerald-700 underline">fleet</Link> for more options.</p>
                </div>

                {/* Pickup/dropoff */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-6 h-6 text-emerald-700" /> Riyadh Pickup and Dubai Drop-Off</h2>
                    <p className="text-gray-700 mb-4">
                        A private car with driver means door-to-door service. Pickup in Riyadh can be arranged from a hotel, private residence, office, or <Link href="/riyadh-airport-taxi/" className="text-emerald-700 font-semibold hover:underline">King Khalid International Airport</Link>. Your Dubai destination can similarly be a hotel, residence, office or another agreed address.
                    </p>
                    <p className="text-gray-700">
                        If you're staying at a large hotel or residential development, sharing the exact location or a map pin makes pickup and drop-off easier.
                    </p>
                </div>

                {/* Cost */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does a Riyadh to Dubai Car With Driver Cost?</h2>
                    <p className="text-gray-700 mb-4">
                        Current rates for our Riyadh to Dubai transfer start from <strong>2,000 SAR</strong> for a sedan, up to <strong>3,500 SAR</strong> for a GMC Yukon/Chevy Tahoe. All prices are per vehicle — not per passenger — and include fuel, tolls and border crossing insurance.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Being per-vehicle can make a private transfer attractive for families, since the price doesn't multiply with each extra passenger within the vehicle's capacity. Final pricing can still vary with your exact pickup/drop-off points, travel date and whether you need a return trip — see the full <Link href="/routes/riyadh-dubai/" className="text-emerald-700 underline">Riyadh to Dubai taxi page</Link> for current rates, or request a quote directly.
                    </p>
                </div>

                {/* Driving vs driver */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Driving Yourself vs Hiring a Private Driver</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Your Own Vehicle</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Full control over timing and stops</li>
                                <li>You handle the entire drive and both sides of the border yourself</li>
                                <li>More tiring over a 10-12 hour journey</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Private Driver</h3>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                <li>Rest, work or spend time with family during the drive</li>
                                <li>Vehicle-side border paperwork handled for you</li>
                                <li>Door-to-door, no need to navigate yourself</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Preparation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare for the Journey</h2>
                    <p className="text-gray-700 mb-4">Keep your passport, visa information, phone and charger within easy reach. It also helps to carry:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Drinking water', 'Snacks', 'Comfortable clothing', 'Personal medication', 'Phone charger/power bank', 'Travel documents'].map((f) => (
                            <span key={f} className="bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg text-center">{f}</span>
                        ))}
                    </div>
                    <p className="text-gray-700 mt-4">
                        If you're travelling with children or elderly passengers, or want specific rest stops, mention this when booking so the journey can be planned accordingly.
                    </p>
                </div>

                {/* Booking */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Book a Riyadh to Dubai Car With Driver</h2>
                    <p className="text-gray-700 mb-4">Booking is easier when you share complete trip details from the start:</p>
                    <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                        <li>Your Riyadh pickup location</li>
                        <li>Your Dubai destination</li>
                        <li>Passenger and luggage count</li>
                        <li>Preferred vehicle (sedan, Fortuner or GMC Yukon/Tahoe)</li>
                        <li>Travel date, and whether you need a return trip</li>
                    </ol>
                    <div className="bg-gray-100 p-8 rounded-2xl text-center mt-6">
                        <h3 className="text-xl font-bold mb-4">Check Current Riyadh → Dubai Rates</h3>
                        <div className="flex justify-center gap-4">
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl">
                                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Request a Quote
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Riyadh to Dubai Car With Driver FAQs</h2>
                    <div className="space-y-5">
                        {[
                            { q: 'Can I travel from Riyadh to Dubai by car with a driver?', a: 'Yes. A private chauffeur transfer can be arranged for the road journey between Riyadh and Dubai, subject to the applicable passenger, vehicle and cross-border requirements.' },
                            { q: 'How far is Dubai from Riyadh by road?', a: 'Approximately 1,000 km via the Al Batha–Al Ghuwaifat border crossing.' },
                            { q: 'How long does Riyadh to Dubai take by car?', a: 'Allow roughly 10-12 hours. Border processing, traffic, rest stops and road conditions can add to the total journey time.' },
                            { q: 'Which border is used between Saudi Arabia and the UAE?', a: 'Al Batha on the Saudi side and Al Ghuwaifat on the UAE side — the only land crossing between the two countries.' },
                            { q: 'Does the same car continue from Riyadh to Dubai?', a: 'Yes, for our Riyadh to Dubai transfers the same vehicle and driver travel with you the whole way — there is no vehicle change at the border.' },
                            { q: 'Can families travel this way?', a: 'Yes. Families can book the GMC Yukon/Chevy Tahoe or Toyota Fortuner depending on passenger and luggage count.' },
                            { q: 'Is a private driver better than driving myself?', a: 'It depends on your priorities. A private driver lets you rest, work or spend time with your group instead of driving the full 10-12 hour route yourself.' },
                            { q: 'How much does it cost?', a: 'Current rates start from 2,000 SAR for a sedan up to 3,500 SAR for a GMC Yukon/Chevy Tahoe, per vehicle, including fuel, tolls and border insurance. See the Riyadh to Dubai taxi page for current rates.' },
                            { q: 'Is the fare per person or per vehicle?', a: 'Per vehicle. The quoted price covers the whole vehicle, not individual seats.' },
                            { q: 'Do I need a UAE visa?', a: 'UAE entry requirements depend on your nationality, residency and individual circumstances. Confirm your own eligibility before traveling.' },
                            { q: 'Can I book a return trip?', a: 'Yes, return transportation can be arranged — share your return date and pickup time when requesting a quote.' },
                            { q: 'How far in advance should I book?', a: 'Advance booking is recommended for international road journeys so the vehicle, chauffeur and cross-border arrangements can be confirmed.' },
                        ].map((f) => (
                            <div key={f.q} className="border-b border-gray-100 pb-5">
                                <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related routes */}
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">More GCC Cross-Border Transfers</h2>
                    <p className="text-gray-700 mb-4">Traveling from elsewhere in Saudi Arabia? We also run private transfers on these cross-border routes:</p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/routes/dammam-dubai/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl px-4 py-2 text-sm font-semibold text-gray-900 transition-colors">Dammam to Dubai</Link>
                        <Link href="/routes/dammam-abu-dhabi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl px-4 py-2 text-sm font-semibold text-gray-900 transition-colors">Dammam to Abu Dhabi</Link>
                        <Link href="/routes/dammam-bahrain/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl px-4 py-2 text-sm font-semibold text-gray-900 transition-colors">Dammam to Bahrain</Link>
                        <Link href="/locations/riyadh/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl px-4 py-2 text-sm font-semibold text-gray-900 transition-colors">Riyadh Taxi Service</Link>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 border-t pt-8">
                    <h3 className="text-2xl font-bold mb-4">Book a Car With Driver from Riyadh to Dubai</h3>
                    <p className="text-gray-700 mb-6">
                        A car with driver from Riyadh to Dubai is an international road journey, not simply a long taxi ride — it takes planning around the border, documents, vehicle and travel time. For families, business travelers and groups who prefer a private door-to-door trip, a coordinated chauffeur transfer can make it considerably easier.
                    </p>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Need a Private Car from Riyadh to Dubai?</h3>
                        <p className="text-emerald-800 text-sm mb-6 max-w-xl mx-auto">
                            Share your pickup location, travel date, passenger count and preferred vehicle to get a current quote.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/routes/riyadh-dubai/">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl">
                                    View Riyadh to Dubai Rates
                                </Button>
                            </Link>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 font-bold px-8 py-6 rounded-xl">
                                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Request a Quote
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
