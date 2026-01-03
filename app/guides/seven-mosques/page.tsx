
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, History, Landmark, Info, ArrowRight, Car, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'The Seven Mosques (Al-Masjid Al-Sab\'a) Guide | Battle of Trench Site',
    description: 'Guide to the Seven Mosques (Sab\'a Masajid) in Madinah. Site of the Battle of the Trench (Khandaq). History, location, and the new big mosque.',
    keywords: ['Seven mosques Madinah', 'Battle of Trench site', 'Khandaq Madinah', 'Masjid Fath', 'Masjid Salman Farsi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/seven-mosques/',
    },
};

export default function SevenMosquesPage() {

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={['/locations/madinah.webp', '/hero-slide-1.webp']}
                h1Text="The Seven Mosques"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Battle of the Trench
                    </span>
                }
                subtitle="The Site of Khandaq"
                location="West Madinah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        A complex of small mosques marking the locations where the Muslim armies camped during the Battle of the Trench (Ghazwat Al-Khandaq) in <Link href="/locations/madinah/" className="text-white underline hover:text-primary transition-colors">Madinah Al Munawwarah</Link>.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical Context</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 5 AH, the Muslims dug a trench to defend Madinah against a coalition of enemy tribes. The "Seven Mosques" mark the command posts of various Companions (Sahaba). Most pilgrims visit this as part of a <Link href="/services/heritage-tours/" className="text-emerald-700 hover:underline">professional Madinah Ziyarat service</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The most prominent is **Masjid Al-Fath** (Mosque of Victory), where the Prophet ﷺ made Dua for victory, which was granted.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 text-xl mb-4">The Mosques</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Al-Fath (The highest one)
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Salman Al-Farsi
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Abu Bakr Al-Siddiq
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Umar ibn Al-Khattab
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Ali ibn Abi Talib
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <Landmark className="w-5 h-5 text-emerald-600" /> Masjid Fatimah Al-Zahra
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Are there really 7 mosques?",
                                shortAnswer: "It varies.",
                                detailedAnswer: "Historically there were 7. Today, some have been removed or merged. A large new mosque (Masjid Al-Khandaq) has been built nearby to accommodate prayers, but the historical small structures (like Fath and Salman) are preserved as heritage sites.",
                                perspectives: [
                                    {
                                        role: "Visitor Note",
                                        icon: "Info",
                                        insight: "You usually visit 4-5 of the small structures which are walkable. To visit all these sites comfortably, you can <Link href='/booking/' className='text-primary font-bold hover:underline'>book a taxi in Madinah</Link> for your personal tour."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
