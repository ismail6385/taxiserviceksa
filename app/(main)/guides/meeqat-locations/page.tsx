
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Compass, Info, AlertTriangle, CheckCircle2, Car, ArrowRight, Briefcase, Plane } from 'lucide-react';


import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Meeqat Locations for Umrah | 5 Miqats Map & Guide',
    description: 'Comprehensive guide to the 5 Miqat locations for Umrah pilgrims. Dhul Hulaifah (Abyar Ali), Al-Juhfah, Qarn al-Manazil, Yalamlam, and Dhat Irq. Distances and rules.',
    keywords: ['Meeqat locations', 'Miqat maps', 'Dhul Hulaifah', 'Abyar Ali', 'Yalamlam miqat', 'Qarn al Manazil', 'Umrah ihram boundary'],
    alternates: {
        canonical: '/guides/meeqat-locations/',
    },
};

export default function MeeqatLocationsPage() {
    const miqats = [
        {
            name: "Dhul Hulaifah (Abyar Ali)",
            forwhom: "Pilgrims from Madinah",
            distance: "450 km from Makkah",
            desc: "The farthest Miqat from Makkah. It has a large mosque with extensive facilities for shower and Ihram for those departing from <Link href='/locations/madinah/' className='text-emerald-700 hover:underline'>Madinah (Holy City)</Link>."
        },
        {
            name: "Al-Juhfah (Rabigh)",
            forwhom: "Pilgrims from North/West (inc. Syria, Egypt)",
            distance: "183 km from Makkah",
            desc: "near the city of Rabigh. Many pilgrims traveling by road from Jeddah highway pass near here."
        },
        {
            name: "Qarn al-Manazil (As-Sail Al-Kabir)",
            forwhom: "Pilgrims from Najd (Riyadh) & Taif",
            distance: "75 km from Makkah",
            desc: "Located on the road from Taif. A major stop for those traveling the <Link href='/routes/riyadh-jeddah/' className='text-emerald-700 hover:underline'>Riyadh to Jeddah route</Link>."
        },
        {
            name: "Yalamlam (Sa'diyah)",
            forwhom: "Pilgrims from South (Yemen)",
            distance: "92 km from Makkah",
            desc: "Traditionally for Yemenis. Today serves many coming from the southern coast."
        },
        {
            name: "Dhat Irq",
            forwhom: "Pilgrims from Iraq/East",
            distance: "94 km from Makkah",
            desc: "Located in the desert, less accessible by main highways today compared to others."
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Guide to Meeqat Locations for Umrah",

        "description": "Detailed guide on the 5 designated stations (Meeqat) where pilgrims must enter the state of Ihram.",
        "image": "https://taxiserviceksa.com/madinah-ziyarat-map.png"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="guide-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/madinah-ziyarat-map.png', '/hero-slide-2.webp']}
                h1Text="Meeqat Locations Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Spiritual Boundaries
                    </span>
                }
                subtitle="Points of Entry for Ihram"
                location="The 5 Miqats"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        The Meeqat is the designated boundary line that pilgrims intending to perform Umrah or Hajj must not cross without being in the state of Ihram, especially when visiting <Link href="/locations/makkah/" className="text-white underline hover:text-primary transition-colors">Makkah (Haram Area)</Link>.
                    </p>
                </div>
            </Hero>

            {/* Miqats List */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">The 5 Designated Miqats</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {miqats.map((m, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-emerald-500 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong className="text-gray-900">For:</strong> {m.forwhom}</p>
                                    <p><strong className="text-gray-900">Distance:</strong> {m.distance}</p>
                                    <p className="text-gray-500 mt-3 italic">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <AlertTriangle className="text-amber-500 w-6 h-6" /> Important Rules
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                <span>You <strong>must</strong> enter Ihram (Niyyah and talbiyah) before or precisely at the Meeqat.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                <span>If you cross the Meeqat without Ihram while intending Umrah, you must return to the Meeqat to assume Ihram, or pay a penalty (Dam).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                <span>For those flying into Jeddah: The plane often crosses the Meeqat in the air. You should wear your Ihram garments before boarding and arrange a <Link href='/services/umrah-transport/' className='text-emerald-700 hover:underline font-medium'>professional Umrah transport hub</Link> trip to ensure you reach the Haram without delay.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Can I shower at the Meeqat?",
                                shortAnswer: "Yes, facilities available.",
                                detailedAnswer: "Major Miqats like Dhul Hulaifah (Abyar Ali) and Qarn al-Manazil are equipped with large shower complexes and shops selling Ihram clothing.",
                                perspectives: [
                                    {
                                        role: "Pilgrim Advice",
                                        icon: "Info",
                                        insight: "It's often crowded. If possible, shower at your hotel before departure and just make Niyyah at the Meeqat."
                                    }
                                ]
                            },
                            {
                                question: "Which Meeqat do I use if I come from Riyadh?",
                                shortAnswer: "Qarn al-Manazil.",
                                detailedAnswer: "The designated Miqat for those traveling from Najd (Riyadh) is Qarn al-Manazil (As-Sail Al-Kabir), located near Taif.",
                                perspectives: [
                                    {
                                        role: "Route Guide",
                                        icon: "Navigation",
                                        insight: "It is about 75km from Makkah. Our taxi drivers know the exact stop. You can <Link href='/booking/' className='text-primary font-bold hover:underline'>book your Meeqat transfer online</Link> for total peace of mind."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Madinah to Makkah Taxi',
                        description: 'We stop at Dhul Hulaifah (Abyar Ali) for 45+ minutes for your Ihram.',
                        href: '/madinah-to-makkah-taxi/',
                        icon: Car
                    },
                    {
                        name: 'Jeddah to Makkah',
                        description: 'Direct transfer for those who arrived in Ihram via flight.',
                        href: '/routes/jeddah-makkah/',
                        icon: MapPin
                    }
                ]}
                title="Transport to Meeqat"
                description=""
            />

            {/* Strategic Internal Links Hub */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Column 1: Locations */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" /> Pilgrimage Hubs
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
                                            <span>Madinah (Al Haram)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/locations/taif/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Taif (Ziyarat)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Routes */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Navigation className="w-5 h-5 text-primary" /> Key Routes
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah Airport → Makkah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/madinah-to-makkah-taxi/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Madinah → Makkah (Taxi)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/makkah-madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Makkah → Madinah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Services */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-primary" /> Specialized Services
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/services/umrah-transport/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Umrah Transport Hub</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Family Group Vans</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/booking/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors w-full shadow-lg shadow-primary/20">
                                            Book Meeqat Transfer
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
