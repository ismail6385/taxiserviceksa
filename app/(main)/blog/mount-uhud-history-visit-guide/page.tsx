import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mount Uhud Madinah: History, Battle & Complete Visit Guide 2026',
    description: 'Complete guide to Mount Uhud in Madinah. History of the Battle of Uhud, the graves of the martyrs, Hamza (R.A), visiting tips, and how to get there.',
    keywords: ['Mount Uhud guide 2026', 'Battle of Uhud history', 'Hamza ibn Abdul Muttalib grave', 'Uhud Madinah visit tips', 'Jabal Uhud how to visit'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/mount-uhud-history-visit-guide/' },
    openGraph: { title: 'Mount Uhud Madinah: History, Battle & Visit Guide 2026', description: 'Visit Mount Uhud — site of the historic Battle of Uhud and the resting place of 70 companions.', type: 'article', url: 'https://taxiserviceksa.com/blog/mount-uhud-history-visit-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the significance of Mount Uhud in Islam?', acceptedAnswer: { '@type': 'Answer', text: 'Mount Uhud is where the Battle of Uhud was fought in 625 CE (3 AH). It was a crucial battle in early Islamic history where 70 companions of the Prophet ﷺ were martyred, including his uncle Hamza ibn Abdul Muttalib (R.A), who was known as "The Lion of Allah." The Prophet ﷺ himself was wounded in this battle. He later said: "Uhud is a mountain that loves us and we love it."' } },
        { '@type': 'Question', name: 'How far is Uhud from Masjid an-Nabawi?', acceptedAnswer: { '@type': 'Answer', text: 'Mount Uhud is approximately 5 km north of Masjid an-Nabawi. A taxi journey takes about 15-20 minutes from the mosque. Most Ziyarat tour packages include Uhud as the furthest stop on the Madinah Ziyarat circuit.' } },
    ],
};

export default function MountUhudGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Mount Uhud Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">⛰ Historical Site</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Mount Uhud Madinah:<br /><span className="text-emerald-300">History, Battle & Visit Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">"Uhud is a mountain that loves us and we love it." — The Prophet Muhammad ﷺ. Visit the site of the Battle of Uhud and honor the 70 martyrs.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">The Battle of Uhud: Historical Overview</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">In 625 CE (3 AH), the Quraysh army of 3,000 soldiers marched from Makkah to avenge their defeat at the Battle of Badr. At the base of Mount Uhud, the Muslim army of 700 met them. Initially the Muslims were winning, but when 40 archers posted on "Archers' Hill" abandoned their positions against the Prophet's ﷺ explicit command, the Quraysh cavalry flanked the Muslims, turning the battle.</p>
                    <p className="text-gray-700 leading-relaxed">Seventy companions were martyred in this battle. Among the most notable was Hamza ibn Abdul Muttalib (R.A), the Prophet's ﷺ uncle and a legendary warrior, known as "Asad Allah" (Lion of Allah). The Prophet ﷺ was deeply grieved by his loss. The event carries profound lessons about obedience and steadfastness in Islam.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">What to See at Mount Uhud</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { name: 'Graves of the 70 Martyrs', desc: 'The cemetery of Shuhada (martyrs) at the foot of Uhud. Hamza (R.A) is buried here.' },
                            { name: "Archer's Hill (Jabal al-Rumah)", desc: 'The rocky rise where 40 archers were posted by the Prophet ﷺ. Their departure changed the battle.' },
                            { name: "The Prophet's ﷺ Wound Site", desc: 'The spot where the Prophet ﷺ was struck and temporarily fell. An emotional spot for all pilgrims.' },
                            { name: 'Uhud Mountain Itself', desc: 'The mountain the Prophet ﷺ described as "loving us." A majestic red-rock formation spanning 7 km.' },
                        ].map((item) => (
                            <div key={item.name} className="border border-gray-200 rounded-xl p-4 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-emerald-800 text-sm mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visitor Tips for Mount Uhud</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Visit early morning (before 9am) to avoid the scorching midday sun — Uhud is an open area with minimal shade.</li>
                        <li>The graves of the martyrs are open for du'a — recite the dua for the deceased (salat al-janaza du'a).</li>
                        <li>There are vendors selling cold water and juice near the entrance — prices are fair.</li>
                        <li>Dress appropriately — loose, comfortable, light-colored clothing for the heat.</li>
                        <li>Allow 1.5 to 2 hours for a complete, unhurried visit.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Madinah Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Include Uhud in your Madinah Ziyarat tour alongside Quba, Qiblatain, Seven Mosques, and Jannat al-Baqi.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20Ziyarat%20taxi%20including%20Mount%20Uhud%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/madinah-ziyarat-places-museums-landmarks/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Full Ziyarat Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
