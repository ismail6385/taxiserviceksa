import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Camera } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Photography Guide: Best Photo & Instagram Locations 2026',
    description: 'Master your camera in AlUla. Complete guide to the best photography spots, instagrammable locations, sunset framing, and drone rules for 2026.',
    keywords: ['AlUla photography guide 2026', 'best photo spots in AlUla', 'instagram locations AlUla', 'Maraya concert hall photos', 'how to photograph Hegra'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-photography-instagram-spots/' },
    openGraph: { title: 'AlUla Photography Guide: Best Photo & Instagram Locations 2026', description: 'Your guide to capturing AlUla\'s beautiful desert landscapes, mirrored halls, and ancient monuments.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-photography-instagram-spots/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Where is the best spot to photograph Maraya?', acceptedAnswer: { '@type': 'Answer', text: 'The best spot is from the sandy driveway about 100 meters directly in front of the building. This angle allows you to capture the complete symmetry of the mirrored cube reflecting the canyon walls. Early morning or late afternoon provides soft, dramatic lighting.' } },
        { '@type': 'Question', name: 'Are drones allowed in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'No. Flying drones in AlUla is strictly prohibited for general tourists without a special commercial permit from the General Authority of Civil Aviation (GACA) and the Royal Commission for AlUla. Security personnel will confiscate unauthorized drones at checkpoints.' } },
        { '@type': 'Question', name: 'What is the best lens for AlUla photography?', acceptedAnswer: { '@type': 'Answer', text: 'A wide-angle lens (16-35mm equivalent) is essential for capturing the vast sandstone canyons, Maraya, and monumental Hegra tombs. A telephoto lens (70-200mm) is also useful for compressing rock details and capturing sunset glows on distant cliffs.' } },
    ],
};

export default function AlUlaPhotographyPage() {
    const locations = [
        { name: 'Mirrored Walls of Maraya', angle: 'Front center alignment', tip: 'Capture the reflection of the rugged canyons against the smooth mirrored facade. Shoot at golden hour for a stunning contrast.' },
        { name: 'Tomb of Lihyan son of Kuza (Hegra)', desc: 'Low-angle wide perspective', tip: 'Situate your camera low to the sand to emphasize the massive size of the four-story tomb against the open sky.' },
        { name: 'Elephant Rock at Golden Hour', desc: 'Framed through outdoor seating arches', tip: 'Capture the glowing monolithic rock between the design arches of the sunken sand lounges.' },
        { name: 'Al-Jadidah Colorful Stairs & Murals', desc: 'Eye-level street photography', tip: 'Explore the narrow passages of Al-Jadidah art district, capturing vibrant street art and hand-painted stone steps.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Photography Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">📸 Camera Tips</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Photography Guide:<br /><span className="text-amber-300">Best Photo & Instagram Locations</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Capture the perfect shot. Our complete guide to camera gear, drone rules, golden hour timings, and the most photogenic spots in AlUla.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><Camera className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Photographer's Desert Paradise</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">AlUla is a dream location for landscape, travel, and portrait photographers. The contrast between ancient red sandstone cliffs, modern mirrored buildings, green palm oases, and sweeping sand dunes offers endless creative potential. Knowing when and where to shoot will ensure you walk away with breathtaking imagery.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Photogenic Spots & Framing Tips</h2>
                    <div className="grid gap-6">
                        {locations.map((loc, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-amber-300 transition-colors text-gray-700">
                                <h3 className="font-bold text-amber-800 text-lg mb-2">📸 {loc.name}</h3>
                                <p className="text-sm mb-1"><strong>Suggested Angle:</strong> {loc.desc || loc.angle}</p>
                                <p className="text-sm text-gray-600"><strong>Tip:</strong> {loc.tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Photography Rules & Etiquette</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Drones:</strong> Do not bring or fly drones. General tourist use is strictly illegal in AlUla and across Saudi Arabia without pre-approved commercial licensing.</li>
                        <li><strong>Respecting Locals:</strong> Avoid pointing cameras directly at local residents, especially women, without asking for explicit permission first.</li>
                        <li><strong>Commercial Shoots:</strong> If you are planning a professional fashion shoot or commercial advertising campaign, you must obtain a permit from the Royal Commission for AlUla.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Hire a Private Taxi for Photo Shoots</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Need to catch the early morning sunrise glow at Hegra or the sunset at Harrat Viewpoint? Pre-book a reliable private driver to take you to all spots on time.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20for%20a%20photography%20trip%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
