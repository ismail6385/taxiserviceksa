import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Clock, MapPin, Car, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to NEOM Distance & Drive Time (2026) | Taxi Service KSA',
    description: 'Tabuk to NEOM is 190 km — 2 to 2.5 hours by car. Full route guide: highway, checkpoints, rest stops, and fastest way to reach NEOM from Tabuk airport or city.',
    keywords: [
        'Tabuk to NEOM distance',
        'Tabuk to NEOM drive time',
        'how far is NEOM from Tabuk',
        'Tabuk to NEOM km',
        'NEOM distance from Tabuk',
        'Tabuk to NEOM route',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-neom-distance-drive-time/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-neom-distance-drive-time/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-neom-distance-drive-time/',
        },
    },
    openGraph: {
        title: 'Tabuk to NEOM Distance & Drive Time (2026)',
        description: '190 km, 2–2.5 hours. Full route guide with checkpoints, rest stops, and transport options.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-neom-distance-drive-time/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How many km is Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk to NEOM (Sharma area) is approximately 190 km by road. The route follows Highway 15 northwest from Tabuk city centre through Al Muwaylih and into the NEOM zone.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to drive from Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive from Tabuk to NEOM takes 2 to 2.5 hours under normal conditions. The road is a modern 4-lane highway with a speed limit of 120 km/h. A security checkpoint at the NEOM entry adds 10–20 minutes if you have your credentials ready.',
            },
        },
        {
            '@type': 'Question',
            name: 'What road do you take from Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'From Tabuk city, take Route 15 (the main highway) heading northwest towards Haql. After approximately 150 km, take the junction towards Al Muwaylih and then follow signs to NEOM / Sharma. The road is well-signposted and Google Maps covers the route reliably.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far is Tabuk Airport to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Airport (TUU) is approximately 14 km north of Tabuk city centre. From the airport to NEOM is approximately 200–205 km — about 2.5 hours. A pre-booked private transfer from TUU Airport directly to NEOM is the most convenient option for arriving workers and visitors.',
            },
        },
    ],
};

export default function TabukToNeomDistancePage() {

    const distanceTable = [
        { from: 'Tabuk City Centre', to: 'NEOM (Sharma)', km: '190 km', time: '2–2.5 hrs', highway: 'Route 15 NW' },
        { from: 'Tabuk Airport (TUU)', to: 'NEOM (Sharma)', km: '205 km', time: '2.5 hrs', highway: 'Route 15 NW' },
        { from: 'Tabuk City Centre', to: 'Al Muwaylih (NEOM gateway)', km: '150 km', time: '1.5 hrs', highway: 'Route 15 NW' },
        { from: 'Tabuk City Centre', to: 'Haql (Red Sea)', km: '320 km', time: '3.5 hrs', highway: 'Route 15 NW' },
        { from: 'NEOM (Sharma)', to: 'Jeddah', km: '930 km', time: '9 hrs', highway: 'Route 15 → Route 5' },
        { from: 'NEOM (Sharma)', to: 'Riyadh', km: '1,350 km', time: '13 hrs', highway: 'Route 15 → Route 65' },
    ];

    const milestones = [
        { km: '0 km', place: 'Tabuk City / TUU Airport', note: 'Departure point' },
        { km: '45 km', place: 'Al Muwaylih junction area', note: 'First major town northwest of Tabuk' },
        { km: '90 km', place: 'SASCO rest stop', note: 'Good fuel and food stop — recommended break point' },
        { km: '150 km', place: 'Al Muwaylih town', note: 'Last major services before NEOM entry' },
        { km: '165 km', place: 'NEOM security checkpoint', note: 'Show access credentials — 10–20 min stop' },
        { km: '190 km', place: 'NEOM Sharma / destination', note: 'Arrival at NEOM zone' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-distance" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Tabuk → NEOM Route Facts
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Tabuk to NEOM:<br />Distance &amp; Drive Time
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Everything you need to know about the Tabuk–NEOM road — distance, time, highway route, checkpoints, and rest stops.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-3">Quick Answer</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { label: 'Distance', value: '190 km' },
                                { label: 'Drive Time', value: '2–2.5 hrs' },
                                { label: 'Highway', value: 'Route 15 NW' },
                                { label: 'Checkpoint', value: 'Yes — NEOM entry' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
                                    <div className="text-xs text-gray-400 mb-1">{s.label}</div>
                                    <div className="font-bold text-white text-sm">{s.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
                    <nav className="flex items-center space-x-2 text-gray-500">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-gray-900">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Tabuk to NEOM Distance</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Distance table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tabuk to NEOM — Distances at a Glance</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-5 py-3 font-bold">From</th>
                                    <th className="px-5 py-3 font-bold">To</th>
                                    <th className="px-5 py-3 font-bold">Distance</th>
                                    <th className="px-5 py-3 font-bold">Drive Time</th>
                                    <th className="px-5 py-3 font-bold">Route</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {distanceTable.map((r, i) => (
                                    <tr key={i} className={`hover:bg-gray-50 ${i < 2 ? 'bg-emerald-50/40' : ''}`}>
                                        <td className="px-5 py-3 font-medium text-gray-900">{r.from}</td>
                                        <td className="px-5 py-3 text-gray-700">{r.to}</td>
                                        <td className="px-5 py-3 font-bold text-gray-900">{r.km}</td>
                                        <td className="px-5 py-3 text-gray-600">{r.time}</td>
                                        <td className="px-5 py-3 text-gray-500 text-xs">{r.highway}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Milestone map */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Route — Milestone by Milestone</h2>
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                        <div className="space-y-4">
                            {milestones.map((m, i) => (
                                <div key={i} className="relative flex items-start gap-4 pl-14">
                                    <div className="absolute left-0 w-12 text-right">
                                        <span className="text-xs font-bold text-gray-500">{m.km}</span>
                                    </div>
                                    <div className={`absolute left-4 w-4 h-4 rounded-full border-2 border-white flex-shrink-0 ${i === milestones.length - 1 ? 'bg-emerald-600' : i === 4 ? 'bg-amber-500' : 'bg-black'}`} style={{ top: '2px' }} />
                                    <div className={`flex-1 p-4 rounded-xl border ${i === 4 ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'}`}>
                                        <p className="font-bold text-gray-900 text-sm">{m.place}</p>
                                        <p className="text-gray-600 text-xs mt-0.5">{m.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Checkpoint tip:</strong> Have your NEOM access ID, company letter, or contractor badge ready before you reach the checkpoint. Searching for documents at the checkpoint slows everyone down. Our drivers know the checkpoint procedure and can advise on required documents.</p>
                    </div>
                </section>

                {/* Tips */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Driving Tips: Tabuk to NEOM</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Best time to leave Tabuk', desc: 'Early morning (6–8 AM) for coolest temperatures and lightest checkpoint traffic. Avoid Friday afternoon — highest traffic volume.' },
                            { title: 'Fuel up in Tabuk', desc: 'Fill up before leaving Tabuk. There is one reliable SASCO station around the 90 km mark, but fuel options are limited near NEOM.' },
                            { title: 'Google Maps works', desc: 'Google Maps covers the Tabuk–NEOM route reliably. Download offline maps before departure as signal drops in desert stretches.' },
                            { title: 'Speed cameras active', desc: 'Speed cameras operate on Route 15. Limit is 120 km/h on the highway and 100 km/h near towns. Our drivers always comply.' },
                            { title: 'Temperature extremes', desc: 'Summer (June–Sep) temperatures exceed 45°C. Ensure your vehicle A/C is working and carry water. Winter nights drop below 10°C.' },
                            { title: 'Checkpoint documents', desc: 'Workers need NEOM company ID. Visitors need prior authorization letter. Prepare both before the checkpoint stop.' },
                        ].map((tip, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                                <p className="font-bold text-gray-900 text-sm mb-1">{tip.title}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Tabuk to NEOM Distance</h2>
                    <div className="space-y-5">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed speakable-answer">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mb-16 bg-black text-white rounded-3xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Book Your Tabuk → NEOM Transfer</h2>
                    <p className="text-gray-400 mb-6">Driver picks you up from Tabuk city or TUU airport. Fixed price. Arrives at NEOM checkpoint with you.</p>
                    <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20car%20from%20Tabuk%20to%20NEOM" target="_blank">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-10">
                            WhatsApp Booking <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/blog/how-to-get-to-neom-from-tabuk/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            How to Get to NEOM from Tabuk
                        </Link>
                        <Link href="/routes/tabuk-neom/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tabuk to NEOM Route Page
                        </Link>
                        <Link href="/tabuk-airport-taxi/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tabuk Airport (TUU) Transfer
                        </Link>
                        <Link href="/services/taxi-in-tabuk/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            All Tabuk Taxi Services
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
