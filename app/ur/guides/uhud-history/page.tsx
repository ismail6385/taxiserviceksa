
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Mountain, Flag, Shield, MapPin, Layers } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'History of Mount Uhud & Battle | Madinah Ziyarat Guide',
    description: 'Explore the history of the Battle of Uhud. Guide to the Archers Hill, Martyrs Cemetery (Sayyidina Hamza), and the significance of Mount Uhud in Islam.',
    keywords: ['Mount Uhud history', 'Battle of Uhud guide', 'Archers Hill Madinah', 'Hamza grave Uhud', 'Madinah historical sites'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/uhud-history',
    },
};

export default function UhudHistoryPage() {

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "Mount Uhud",
        "description": "Historical mountain and site of the Battle of Uhud.",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.5034",
            "longitude": "39.6116"
        },
        "containsPlace": [
            { "@type": "Place", "name": "Archers' Hill" },
            { "@type": "Place", "name": "Martyrs Cemetery" }
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="uhud-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="Mount Uhud Guide"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jabal Uhud
                    </span>
                }
                subtitle="The Mountain that Loves Us"
                location="North Madinah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        "Uhud is a mountain that loves us and we love it." — Prophet Muhammad ﷺ
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical Significance</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Battle of Uhud** took place in 3 AH (625 CE) between the Muslims and the Quraish of Makkah. It was a pivotal moment in Islamic history, teaching valuable lessons about obedience to leadership.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The site contains the graves of 70 martyrs, including **Hamza ibn Abdul-Muttalib (RA)**, the uncle of the Prophet ﷺ, known as the "Lion of Allah".
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="flex items-center gap-2 font-bold text-red-900 mb-2">
                                    <Mountain className="w-5 h-5" /> Archers' Hill (Jabal Ruma)
                                </h3>
                                <p className="text-sm text-red-800">
                                    A small hillock where the Prophet ﷺ stationed 50 archers with strict orders not to leave. Their departure led to a tactical reversal in the battle. Today, pilgrims climb it to view the battlefield.
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <h3 className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                                    <Shield className="w-5 h-5" /> Martyrs' Cemetery
                                </h3>
                                <p className="text-sm text-emerald-800">
                                    An enclosed area containing the resting places of the Shuhada. Visitors stand at the transparent fence to offer Salam and make Dua.
                                </p>
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
                                question: "Is climbing Mount Uhud allowed?",
                                shortAnswer: "Not recommended.",
                                detailedAnswer: "The main mountain is rugged and dangerous. Pilgrims typically climb the smaller **Archers' Hill** (Jabal Ruma) which is safe and has stairs/paths. Climbing the big mountain is not part of the Sunnah Ziyarah.",
                                perspectives: [
                                    {
                                        role: "Safety",
                                        icon: "AlertTriangle",
                                        insight: "Stick to the Archers' Hill for the best view and safety."
                                    }
                                ]
                            },
                            {
                                question: "What should I recite here?",
                                shortAnswer: "Salam and Dua.",
                                detailedAnswer: "Recite the Salam upon the Martyrs (Peace be upon you, O people of this abode...). It is a time for reflection on sacrifice and making Dua for the Ummah.",
                                perspectives: [
                                    {
                                        role: "Spiritual",
                                        icon: "BookOpen",
                                        insight: "Reflect on the Prophet's ﷺ resilience here despite being injured."
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
