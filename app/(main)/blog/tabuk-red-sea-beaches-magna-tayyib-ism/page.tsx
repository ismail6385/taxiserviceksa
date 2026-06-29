import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Red Sea Beaches Guide: Sharma, Umluj, Haql & Tayyib Al-Ism 2026',
    description: 'The complete guide to Tabuk\'s Red Sea coastline. Explore Sharma Beach, Umluj boat tours, Haql shipwreck, Magna springs, and Tayyib Al-Ism valley.',
    keywords: ['Tabuk beaches guide 2026', 'Sharma beach Tabuk', 'Umluj Maldives Saudi Arabia', 'Haql shipwreck beach', 'Tayyib Al Ism valley Magna'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-red-sea-beaches-magna-tayyib-ism/' },
    openGraph: { title: 'Tabuk Red Sea Beaches Guide: Sharma, Umluj, Haql & Tayyib Al-Ism 2026', description: 'Explore the pristine turquoise coastlines of Saudi Arabia\'s northwest Tabuk province.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-red-sea-beaches-magna-tayyib-ism/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is Umluj and why is it called the Maldives of Saudi Arabia?', acceptedAnswer: { '@type': 'Answer', text: 'Umluj is a coastal town in southern Tabuk Province famous for its 104 small islands, shallow turquoise waters, white sand dunes, and pristine coral reefs, drawing immediate comparisons to the Maldives.' } },
        { '@type': 'Question', name: 'Can you swim at the Haql shipwreck beach?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! The beach at Haql features the famous Georgios G cargo ship wreck (often called the Saudi Titanic) which ran aground in 1978. The water is clear and popular for swimming, diving, and photography, with the Sinai mountains of Egypt visible across the gulf.' } },
    ],
};

export default function TabukBeachesPage() {
    const coastalHighlights = [
        { name: 'Sharma Beach', desc: 'A beautiful public beach with wide white sands and luxury resorts, serving as a primary leisure gateway adjacent to the NEOM project.' },
        { name: 'Umluj Islands', desc: 'Hire a local wooden yacht to cruise around untouched coral reefs, swim with sea turtles, and relax on isolated sand bars.' },
        { name: 'Haql Shipwreck Beach', desc: 'See the half-submerged Greek freighter Georgios G lying just yards off the shore, with the dramatic Gulf of Aqaba scenery.' },
        { name: 'Tayyib Al-Ism Valley', desc: 'A spectacular granite canyon split opening directly onto the sea. Walk along a wooden pathway suspended over clear running water.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Red Sea Beaches</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🏖️ Beaches</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Red Sea Beaches Guide:<br /><span className="text-cyan-300">Sharma, Umluj, Haql & Tayyib Al-Ism</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Discover Saudi Arabia\'s untouched coastal paradise: coral reef snorkeling, shipwrecks, and white sands.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Untouched Red Sea Coastline</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">While Tabuk is famous for its mountains and canyons, its western boundary is defined by over 500 km of untouched Red Sea coastline. Free from mass tourism, these beaches offer some of the most pristine coral reefs, crystal-clear water, and sandy coves in the world.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Coastal Highlights</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {coastalHighlights.map((ch, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-cyan-300 transition-colors">
                                <h3 className="font-bold text-cyan-800 text-lg mb-2">⭐ {ch.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{ch.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Magna & 12 Springs of Prophet Moses</h2>
                    <p className="text-gray-700 leading-relaxed">Near the sleepy village of Magna, you will find the natural springs of Moses (Bir Al-Saeedani). Under date palms, sweet water continuously bubbles out of the desert sand directly into the sea, serving as a historical site that holds deep spiritual significance.</p>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Coastal Taxi Tour</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Ready to cruise the beaches? Pre-book a private taxi to take you from Tabuk city center direct to Sharma, Haql, or Umluj.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Tabuk%20beaches" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
