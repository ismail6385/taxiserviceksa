import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Outdoor Adventures: Hiking, Camping & Desert Safaris 2026',
    description: 'Detailed guide to outdoor sports in Tabuk, Saudi Arabia. Learn about camping in Hisma Desert, hiking in Wadi Al-Disah, and mountain trails.',
    keywords: ['Tabuk outdoor adventure 2026', 'hiking in Tabuk Saudi Arabia', 'desert camping Tabuk', 'Tabuk road trip guide', 'Wadi Al Disah trekking'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-adventure-activities-hiking-camping/' },
    openGraph: { title: 'Tabuk Outdoor Adventures: Hiking, Camping & Desert Safaris 2026', description: 'Plan your next hiking, camping, or desert road trip in Tabuk Province with our adventure guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-adventure-activities-hiking-camping/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Where can I go camping in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'The Hisma Desert is the premier spot for wild camping due to its majestic red sand and sandstone arches. Alternatively, Sharma beach offers seaside camping spots. Always check weather forecasts for high wind warnings before setting up camp.' } },
        { '@type': 'Question', name: 'What is the most popular road trip route in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'The coastal road trip from Tabuk city to Magna, passing through Tayyib Al-Ism, Sharma beach, and finishing at the Haql shipwreck, is highly popular, offering stunning sea-cliff views and historic sights.' } },
    ],
};

export default function TabukAdventurePage() {
    const activities = [
        { name: '🥾 Canyon Trekking in Al-Disah', desc: 'Walk the flat sandy floor of Wadi Al-Disah between 500-meter cliffs. Easy 5-8 km trails passing natural springs and historic mud brick ruins.' },
        { name: '⛺ Sand Dune Camping in Hisma', desc: 'Set up camp under the pristine night skies of Hisma. Great for stargazing, dune climbing, and ancient inscription tracking.' },
        { name: '⛰️ Mountain Climbing at Jabal Al-Lawz', desc: 'High-altitude hiking on rocky paths, rising up to 2,580m. In winter, this route becomes a rare snowy trek.' },
        { name: '🚗 Gulf of Aqaba Road Trip', desc: 'Drive the scenic coastal highway connecting Umluj, Sharma, and Haql, viewing coral islands and shipwreck bays.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Outdoor Adventures</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🥾 Adventure</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Outdoor Adventure Guide:<br /><span className="text-cyan-300">Hiking, Camping & Road Trips 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Your ultimate handbook to desert camping, mountain trekking, canyon hiking, and scenic coastal road trips.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Explore Tabuk's Diverse Wilderness</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">From soaring granite cliffs to vast red deserts and deep canyons, Tabuk Province is a premier wilderness destination in the Middle East. Whether you are an experienced mountaineer, a camper looking for dark starry skies, or a road-trip enthusiast, this region offers unparalleled opportunities.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Recommended Adventure Activities</h2>
                    <div className="grid gap-6">
                        {activities.map((a, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <h3 className="font-bold text-cyan-800 text-lg mb-2">{a.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Desert Hiking & Camping Safety</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Hydration:</strong> Carry a minimum of 4 liters of fresh water per day. Dehydration occurs rapidly in dry desert air.</li>
                        <li><strong>Wadi Floods:</strong> Do not camp inside wadi bottoms. Sudden rains in distant mountains can cause flash floods.</li>
                        <li><strong>Navigation:</strong> Always carry a backup power bank and keep offline GPS maps downloaded.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Adventure Taxi Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Adventure spots in Tabuk are located far from public transport. Pre-book a private SUV taxi to transport you to canyon trailheads or beach camps safely.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20my%20hiking/camping%20trip%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
