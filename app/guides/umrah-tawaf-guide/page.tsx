
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { RefreshCw, Footprints, Heart, BookOpen, AlertTriangle, ArrowRight, MapPin, Briefcase, Plane } from 'lucide-react';

import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Umrah Tawaf Guide | Step-by-Step Circumambulation Rules',
    description: 'Learn how to perform Tawaf for Umrah. 7 rounds around the Kaaba, rules of Idtiba and Raml for men, and recommended Duas. Complete beginner guide.',
    keywords: ['Umrah Tawaf guide', 'How to do Tawaf', 'Tawaf duas', 'Idtiba and Raml', 'Kaaba cicumambulation'],
    alternates: {
        canonical: 'https://transferksa.com/guides/umrah-tawaf-guide/',
    },
};

export default function TawafGuidePage() {

    const schemas = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Perform Tawaf",
        "step": [
            { "@type": "HowToStep", "name": "Niyyah (Intention)", "text": "Make intention for Tawaf." },
            { "@type": "HowToStep", "name": "Start at Hajar al-Aswad", "text": "Align with the Black Stone and say Bismillah Allahu Akbar." },
            { "@type": "HowToStep", "name": "Circumambulate 7 Times", "text": "Walk anti-clockwise around the Kaaba." },
            { "@type": "HowToStep", "name": "Pray 2 Rakats", "text": "Pray 2 rakat Sunnah behind Maqam Ibrahim." }
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="tawaf-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-1.webp']}
                h1Text="Step-by-Step Tawaf Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Heart of Umrah
                    </span>
                }
                subtitle="Circumambulating the Kaaba"
                location="Masjid Al Haram"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        Tawaf involves attempting to kiss or touch the Black Stone (or gesturing towards it) and going around the Kaaba seven times. It is the first major rite for pilgrims visiting <Link href="/locations/makkah/" className="text-white underline hover:text-primary transition-colors">Makkah (Haram Area)</Link>.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Preparation</h3>
                                <p className="text-gray-600 mb-2">Before starting, ensure you have arranged your <Link href="/services/umrah-transport/" className="text-primary hover:underline">Umrah transport service</Link> for a smooth transition from your hotel. Ensure you are in Wudu. Men must allow their Right Shoulder to be uncovered (Idtiba) by passing the upper ihram garment under the right armpit.</p>
                                <div className="bg-gray-100 p-4 rounded-lg text-sm flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Wudu is mandatory for Tawaf.
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starting Point (Hajar al-Aswad)</h3>
                                <p className="text-gray-600">Align yourself with the Black Stone (indicated by green lights on the wall). Face it, raise your right hand, and say <strong>"Bismillahi Allahu Akbar"</strong>. Do not push or harm others to kiss the stone; a gesture from afar is sufficient.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">The 7 Rounds</h3>
                                <p className="text-gray-600 mb-2">Walk anti-clockwise (Kaaba on your left). </p>
                                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                                    <li><strong>Men (First 3 rounds):</strong> Perform Raml (walking briskly with chest out).</li>
                                    <li><strong>Remaining 4 rounds:</strong> Walk normally. Many pilgrims who arrived via the <Link href="/routes/jeddah-makkah/" className="text-primary hover:underline font-medium">Jeddah to Makkah route</Link> perform this immediately after checking in.</li>
                                    <li><strong>Rukn Al Yamani:</strong> Touch it if possible (do not kiss), or pass by without gesturing. Between here and the Black Stone, recite "Rabbana atina fid-dunya hasanatan...".</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Completion</h3>
                                <p className="text-gray-600">After 7 rounds, cover your right shoulder. Proceed to Maqam Ibrahim and pray 2 Rakats. Drink Zamzam water afterwards. For those continuing their journey, we recommend booking a <Link href="/locations/madinah/" className="text-primary hover:underline">reliable taxi in Madinah</Link> in advance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Can I take a break during Tawaf?",
                                shortAnswer: "Only for obligatory prayer.",
                                detailedAnswer: "Tawaf should be continuous. However, if the congregational prayer starts, you must stop and join the prayer. After prayer, resume your round from where you stopped.",
                                perspectives: [
                                    {
                                        role: "Fiqh",
                                        icon: "BookOpen",
                                        insight: "Minor water breaks are permissible but continuity is preferred."
                                    }
                                ]
                            },
                            {
                                question: "What if I lose count of rounds?",
                                shortAnswer: "Build on certainty.",
                                detailedAnswer: "If unsure whether you did 3 or 4, assume 3 (the lower number) and complete the rest. This removes doubt.",
                                perspectives: [
                                    {
                                        role: "Tip",
                                        icon: "RefreshCw",
                                        insight: "Use a finger counter or simple tasbeeh to keep track. If you're feeling exhausted after the journey, you can always <Link href='/booking/' className='text-primary font-bold hover:underline'>book a comfortable taxi online</Link> to rest before your next rite."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>
            {/* Strategic Internal Links Hub */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Column 1: Locations */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" /> Key Locations
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Makkah (Haram Area)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/locations/madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Madinah (Prophet's Mosque)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/guides/meeqat-locations/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Meeqat Boundaries Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Routes */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Footprints className="w-5 h-5 text-primary" /> Pilgrimage Routes
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah Airport → Makkah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/makkah-madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Makkah → Madinah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/madinah-to-makkah-taxi/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Madinah → Makkah (Taxi)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Services */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-primary" /> Specialist Services
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/services/umrah-transport/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Umrah Transport Service</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Family Group Vans (HiAce)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/booking/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors w-full shadow-lg shadow-primary/20">
                                            Book Umrah Taxi Now
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
