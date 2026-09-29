import { Metadata } from 'next';
import Link from 'next/link';
import { Flag, FileText, Landmark, MapPin, ArrowRight, CircleAlert, Clock } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import RouteFleetSection from '@/components/RouteFleetSection';
import AuthorCard from '@/components/AuthorCard';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';

const URL = 'https://taxiserviceksa.com/routes/alula-amman/';
const BOOK = '/booking/?from=AlUla&to=Jordan%20(Petra%20%2F%20Amman)';

export const metadata: Metadata = {
    title: 'AlUla to Jordan Taxi | AlUla to Petra, Amman & Aqaba by Road | Taxi Service KSA',
    description: 'Private cross-border car from AlUla to Jordan: Petra, Wadi Rum, Aqaba and Amman via Tabuk and the Halat Ammar border. Link Hegra and Petra, the two great Nabataean cities.',
    keywords: [
        'AlUla to Jordan',
        'AlUla to Petra',
        'AlUla to Amman taxi',
        'AlUla to Petra by car',
        'Hegra to Petra',
        'AlUla to Aqaba',
        'AlUla Jordan border crossing',
        'Saudi to Jordan taxi',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla to Jordan Taxi | Petra, Amman & Aqaba',
        description: 'From Hegra to Petra: private car from AlUla to Jordan via Tabuk.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

const legs = [
    { from: 'AlUla', to: 'Tabuk', km: '~330-350 km', note: 'Desert highway north. Good place for a meal and fuel stop.' },
    { from: 'Tabuk', to: 'Halat Ammar border', km: '~100 km', note: 'Saudi exit formalities at Halat Ammar.' },
    { from: 'Al-Mudawwara (Jordan)', to: "Ma'an", km: '~110 km', note: 'Jordanian entry, then the road north through southern Jordan.' },
    { from: "Ma'an", to: 'Petra (Wadi Musa)', km: '~35 km', note: 'Short detour west to Petra.' },
    { from: "Ma'an", to: 'Amman', km: '~210-220 km', note: 'Desert Highway north to the capital.' },
];

const destinations = [
    { name: 'Petra (Wadi Musa)', dist: '~600 km', time: '~7-8 h + border' },
    { name: 'Wadi Rum', dist: '~560-600 km', time: '~7 h + border' },
    { name: 'Aqaba', dist: '~560-620 km', time: '~7-8 h + border' },
    { name: 'Amman', dist: '~780-850 km', time: '~9-11 h + border' },
    { name: 'Dead Sea', dist: '~800-880 km', time: '~10-11 h + border' },
];

export default function AlUlaAmmanRoutePage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLdLocation
                cityName="AlUla to Jordan"
                description="Private cross-border car transfer from AlUla, Saudi Arabia to Petra, Wadi Rum, Aqaba and Amman in Jordan via Tabuk and the Halat Ammar - Al-Mudawwara border."
                services={[
                    { name: 'AlUla to Petra', description: 'Private car from AlUla to Wadi Musa (Petra).' },
                    { name: 'AlUla to Amman', description: 'Cross-border private transfer to Amman.' },
                    { name: 'AlUla to Aqaba', description: 'Private car to Aqaba and Wadi Rum.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra-tombs.webp', '/alula-hegra.webp']}
                h1Text="AlUla to Jordan by Private Car"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Hegra → Petra
                    </span>
                }
                subtitle="Cross-border transfer to Petra, Aqaba & Amman"
                location="Via Tabuk & Halat Ammar Border"
            />

            <div className="border-b border-gray-200">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap gap-2 text-gray-500">
                    <Link href="/" className="hover:text-gray-900">Home</Link> /
                    <Link href="/routes/" className="hover:text-gray-900">Routes</Link> /
                    <span className="text-gray-900 font-semibold">AlUla to Jordan</span>
                </nav>
            </div>

            {/* Nabataean story */}
            <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Landmark className="w-10 h-10 text-primary mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Nabataean cities, one road</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Petra in Jordan was the Nabataean capital. Hegra in AlUla was their great southern city on the incense trade route. Both are UNESCO World Heritage Sites, and seeing one makes you want to see the other.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Flying between them usually means connections through other cities. By road, you follow roughly the same north-south corridor the ancient caravans used - with a private driver handling the long drive and the border.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <h3 className="font-bold text-primary mb-4">Where in Jordan?</h3>
                        <table className="w-full text-sm">
                            <thead className="text-gray-400 text-left">
                                <tr><th className="pb-2">From AlUla to</th><th className="pb-2">Distance</th><th className="pb-2">Time</th></tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {destinations.map((d) => (
                                    <tr key={d.name}>
                                        <td className="py-2 font-semibold">{d.name}</td>
                                        <td className="py-2 text-gray-300">{d.dist}</td>
                                        <td className="py-2 text-gray-300">{d.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="text-xs text-gray-500 mt-3">Approximate. Border waiting time is extra and varies from under an hour to several hours.</p>
                    </div>
                </div>
            </section>

            {/* Road legs */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3"><MapPin className="text-primary" /> The route, leg by leg</h2>
                <p className="text-gray-500 mb-8">The usual crossing is Halat Ammar (Saudi) - Al-Mudawwara (Jordan), north of Tabuk.</p>
                <div className="space-y-3">
                    {legs.map((l, i) => (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_120px_2fr] gap-2 md:gap-6 items-center rounded-xl border border-gray-200 px-5 py-4">
                            <div className="font-bold text-gray-900">{l.from} → {l.to}</div>
                            <div className="text-primary font-bold">{l.km}</div>
                            <div className="text-sm text-gray-600">{l.note}</div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    For Aqaba, the driver may use the Durra crossing near Haql on the Red Sea coast instead, depending on your final stop.
                </p>
            </section>

            {/* Documents */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"><FileText className="text-primary" /> Documents checklist</h2>
                        <ul className="space-y-3 text-gray-700">
                            {[
                                'Valid passport for every traveller (children included).',
                                'Saudi residents: a valid exit/re-entry visa if you are coming back to Saudi Arabia.',
                                'Jordan entry: many nationalities can get a visa on arrival or use the Jordan Pass - check the rules for your passport before you travel.',
                                'Tourist e-visa holders: check your Saudi visa allows exit and, if needed, re-entry.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3"><Flag className="w-4 h-4 text-primary shrink-0 mt-1" /><span>{t}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 h-fit">
                        <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2"><CircleAlert className="w-5 h-5" /> Before you book</h3>
                        <p className="text-sm text-amber-900/80 leading-relaxed mb-3">
                            Visa rules depend on your nationality and can change. The driver helps you through the border process but cannot issue visas. Please confirm your own entry requirements with the official Jordanian and Saudi sources.
                        </p>
                        <p className="text-sm text-amber-900/80 leading-relaxed">
                            Tell us your nationality and final stop in Jordan when requesting a quote so we can confirm the vehicle and crossing.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to split */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><Clock className="text-primary" /> One long day or two easy ones?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-gray-200 p-6">
                        <h3 className="font-bold text-lg mb-2">Straight through</h3>
                        <p className="text-sm text-gray-600">AlUla to Petra in one day is possible with an early start: roughly 7-8 hours of driving plus the border. Amman in one day is a very long day.</p>
                    </div>
                    <div className="rounded-2xl border-2 border-primary p-6 bg-primary/5">
                        <h3 className="font-bold text-lg mb-2">Night in Tabuk (recommended for Amman)</h3>
                        <p className="text-sm text-gray-600">Drive AlUla → Tabuk on day one, cross the border fresh the next morning and reach Petra by afternoon or Amman by evening.</p>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="AlUla to Jordan"
                faqs={[
                    {
                        question: 'Can I travel from AlUla to Petra by car?',
                        shortAnswer: 'Yes, via Tabuk',
                        detailedAnswer: 'Yes. The usual road goes north to Tabuk, crosses at Halat Ammar - Al-Mudawwara and continues through Ma\'an to Petra. It is roughly 600 km plus border time.',
                        perspectives: [],
                    },
                    {
                        question: 'How long is the drive from AlUla to Amman?',
                        shortAnswer: 'About 9-11 hours + border',
                        detailedAnswer: 'Roughly 780-850 km. Many travellers split it with a night in Tabuk or Petra.',
                        perspectives: [],
                    },
                    {
                        question: 'Do I need a visa for Jordan?',
                        shortAnswer: 'Depends on nationality',
                        detailedAnswer: 'Many nationalities can get a visa on arrival or use the Jordan Pass, but rules vary. Check the official requirements for your passport before booking.',
                        perspectives: [],
                    },
                    {
                        question: 'Can you bring us from Jordan to AlUla?',
                        shortAnswer: 'Yes, on request',
                        detailedAnswer: 'Yes. Tell us your pickup city in Jordan (Amman, Petra or Aqaba) and your AlUla hotel, and we will quote the reverse trip.',
                        perspectives: [],
                    },
                ]}
            />

            <section className="bg-black text-white py-16 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-4">From Hegra to Petra</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Send your dates, passengers, nationality and final stop in Jordan. We reply by email with a fixed quote.</p>
                <Link href={BOOK}>
                    <Button size="lg" className="bg-primary text-black hover:bg-white font-bold px-10 py-6 rounded-xl">
                        Request Jordan Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </section>

            <RouteFleetSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <RelatedRoutes originSlug="alula" currentSlug="alula-amman" />
            </div>
            <AlUlaLinkStrip current="/routes/alula-amman/" />
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>
        </div>
    );
}
