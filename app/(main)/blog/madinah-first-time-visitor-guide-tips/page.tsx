import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah First-Time Visitor Guide, Tips & Checklist 2026',
    description: 'Essential tips, a comprehensive checklist, and a first-time visitor guide to Madinah. Learn what to expect, what to pack, and how to make the most of your trip.',
    keywords: ['first time visitor Madinah guide', 'Madinah travel tips 2026', 'Madinah travel checklist', 'what to expect in Madinah', 'Madinah dos and donts'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-first-time-visitor-guide-tips/' },
    openGraph: { title: 'Madinah First-Time Visitor Guide, Tips & Checklist 2026', description: 'Everything a first-time visitor needs to know before arriving in Madinah — from etiquette to transport.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-first-time-visitor-guide-tips/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What should I know before visiting Madinah for the first time?', acceptedAnswer: { '@type': 'Answer', text: 'Key tips: Book accommodation close to Masjid an-Nabawi for easy access, download the Nusuk app to book Rawdah visits, dress modestly at all times, avoid photographing people without permission, and carry Zamzam water bottles for personal use.' } },
        { '@type': 'Question', name: 'Is Madinah safe for solo travelers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Madinah is considered one of the safest cities in the world. It has a heavy security presence, especially around the Grand Mosque area. Solo women travelers also generally feel very safe due to strong community values and security personnel.' } },
        { '@type': 'Question', name: 'Do I need a special visa to visit Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'To visit Madinah, you need a valid Saudi Arabian visa. Muslims visiting for Umrah or Hajj can obtain a pilgrimage visa. For general tourism, apply for a tourist e-visa which can be obtained online at Saudi eVisa portal.' } },
    ],
};

export default function MadinahFirstTimePage() {
    const checklist = ['Book hotel within 500m of Masjid an-Nabawi', 'Download Nusuk app for Rawdah booking', 'Carry light, modest clothing for all weather', 'Pack comfortable walking shoes', 'Keep your passport/visa accessible', 'Arrange airport transfer in advance', 'Exchange currency before arrival or use ATMs near the Haram', 'Carry personal medication and sunscreen'];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>First-Time Visitor Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">✅ Beginner Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 7 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah First-Time Visitor:<br /><span className="text-emerald-300">Tips, Checklist & What to Expect</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Your complete beginner's handbook for visiting the City of Light. From visa to Ziyarat, we cover everything first-time pilgrims and tourists need to know.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Before You Arrive</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Planning is key for a smooth, spiritually fulfilling visit to Madinah. Here are the most important preparations:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Visa:</strong> Apply for an Umrah visa via your travel agency or a Saudi tourist e-visa at evisa.mofa.gov.sa.</li>
                        <li><strong>Accommodation:</strong> The best areas to stay are the Al-Haram and Central Zone districts, within easy walking distance of Masjid an-Nabawi.</li>
                        <li><strong>Rawdah Booking:</strong> Book your Rawdah visit slot through the official Nusuk app at least 2-3 days in advance.</li>
                        <li><strong>Transport:</strong> Arrange a private airport transfer to your hotel to avoid taxi confusion at the airport.</li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Madinah Visit Checklist</h2>
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                        <ul className="space-y-3">
                            {checklist.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Key Etiquette Rules</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Maintain silence and lower your voice inside Masjid an-Nabawi.</li>
                        <li>Switch your phone to silent mode before entering the prayer halls.</li>
                        <li>Women must wear full covering including a face veil (niqab) is recommended near the Rawdah.</li>
                        <li>Do not eat or drink while walking toward or inside the mosque courtyards.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Madinah Airport Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Start your Madinah trip right with a stress-free private transfer from the airport directly to your hotel.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20an%20airport%20transfer%20to%20my%20hotel%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Transfer Rates <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
