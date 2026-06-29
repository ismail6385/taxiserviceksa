import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Camera } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Photography Guide: Best Photo & Instagram Locations 2026',
    description: 'A comprehensive photography guide to Tabuk. Learn the best angles, camera settings, and timings for Wadi Al-Disah, shipwrecks, and sand dunes.',
    keywords: ['Tabuk photography guide 2026', 'best photo spots in Tabuk', 'Tabuk instagram spots', 'how to photograph Wadi Al Disah', 'shipwreck beach photography'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-photography-instagram-spots/' },
    openGraph: { title: 'Tabuk Photography Guide: Best Photo & Instagram Locations 2026', description: 'Your visual guide to photographing the dramatic canyon walls, Red Sea shipwrecks, and castles of Tabuk.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-photography-instagram-spots/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the most photographed spot in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Wadi Al-Disah is the most photographed natural spot in Tabuk. The view from inside the canyon looking up at the towering sandstone pillars, framed by green date palm branches, is iconic. For coastal shots, the Georgios G shipwreck in Haql is highly popular.' } },
        { '@type': 'Question', name: 'Can I fly a drone in Tabuk for photography?', acceptedAnswer: { '@type': 'Answer', text: 'No. Flying recreational drones in Tabuk and across Saudi Arabia is strictly prohibited for tourists without a commercial GACA permit. Security checkpoints near NEOM and border zones strictly monitor and confiscate unauthorized drones.' } },
    ],
};

export default function TabukPhotographyPage() {
    const locations = [
        { name: 'Wadi Al-Disah Canyon Columns', time: 'Late afternoon (3:30 PM - 5:30 PM)', details: 'Position your camera low near the water spring pools to capture the reflections of the red cliffs, utilizing palm leaves as a natural frame.' },
        { name: 'Georgios G Shipwreck (Haql)', time: 'Sunset (5:00 PM - 6:30 PM)', details: 'Capture the half-sunken ship silhouette against the orange horizon, with the towering Sinai mountains of Egypt forming the background across the sea.' },
        { name: 'Hisma Sandstone Arches', time: 'Sunrise (6:00 AM - 7:30 AM)', details: 'Early morning light makes the red sand dunes glow with high contrast, highlighting the detailed Nabataean rock inscriptions.' },
        { name: 'Hejaz Railway Museum Locomotives', time: 'Morning (8:30 AM - 10:30 AM)', details: 'Capture symmetrical leading-line shots of the restored steam trains on their tracks, with the historic station buildings.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Photography Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">📸 Photo Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Photography Guide:<br /><span className="text-cyan-300">Best Photo & Instagram Locations 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Capture spectacular desert vistas. Learn the best angles, gear recommendations, and timings for Tabuk's iconic landmarks.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><Camera className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">A Visual Playground</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Tabuk Province is an absolute dream for landscape, travel, and portrait photographers. The contrast between rugged red deserts, turquoise coastal beaches, historic railways, and snow-capped peaks creates endless creative possibilities. Finding the perfect frame and lighting will elevate your photo collection.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Instagram & Photo Sights</h2>
                    <div className="grid gap-6">
                        {locations.map((loc, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <h3 className="font-bold text-cyan-800 text-lg mb-2">⭐ {loc.name}</h3>
                                <p className="text-sm mb-1"><strong>Best Time:</strong> {loc.time}</p>
                                <p className="text-gray-600 text-sm leading-relaxed"><strong>Angle Tip:</strong> {loc.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Important Photography Etiquette</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Recreational Drones:</strong> Do not fly drones. Checkpoints monitor for unlicensed drones, carrying heavy fines and confiscation.</li>
                        <li><strong>Respect privacy:</strong> Always request permission before taking close-up portraits of locals, especially women.</li>
                        <li><strong>Leave no trace:</strong> Avoid scratching carvings or stepping on fragile historical ruins at any archaeological site.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Driver for Sunset & Sunrise Shoots</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Photography requires precise timing. Pre-book one of our private taxis with local drivers to ensure you arrive at your photo locations exactly during golden hour.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20a%20photography%20trip%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
