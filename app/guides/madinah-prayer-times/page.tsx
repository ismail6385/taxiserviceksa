
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Clock, Sun, Moon, AlertCircle, ArrowRight, Car, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Madinah Prayer Times | Salat Directions for Masjid Nabawi',
    description: 'Current prayer (Salah) times in Madinah Al Munawwarah. Importance of praying in the Prophet\'s Mosque. Avoid peak crowds.',
    keywords: ['Madinah prayer times', 'Masjid Nabawi salat time', 'Fajr time Madinah', 'Isha time Madinah', 'Prayer schedule Madinah'],
    alternates: {
        canonical: 'https://transferksa.com/guides/madinah-prayer-times/',
    },
};

export default function PrayerTimesPage() {

    // Note: Since this is a static site, we can't show real-time dynamic times without a client-side fetch.
    // We will provide general guidance and link to authoritative sources.

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Prayer Times Guidance for Madinah",
        "description": "Information on calculating prayer times and visiting Masjid Nabawi.",
        "image": "https://transferksa.com/madinah-night-view.webp"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="prayer-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/madinah-night-view.webp', '/hero-slide-2.webp']}
                h1Text="Madinah Prayer Schedule"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Salah Timings
                    </span>
                }
                subtitle="Daily Worship in the City of Light"
                location="Masjid An Nabawi"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        "One prayer in my Mosque is better than a thousand prayers in any other mosque excepting Al-Masjid Al-Haram." Plan your spiritual journey in <Link href="/locations/madinah/" className="text-white underline hover:text-primary transition-colors">Madinah (Al Haram)</Link> with our comprehensive schedule.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Prayer Times</h2>
                    <p className="text-gray-600 mb-12">
                        Prayer times in Madinah change daily based on the sun's position. While exact times vary, here is the general schedule flow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { name: 'Fajr', icon: Moon, desc: 'Dawn' },
                            { name: 'Dhuhr', icon: Sun, desc: 'Noon' },
                            { name: 'Asr', icon: Sun, desc: 'Afternoon' },
                            { name: 'Maghrib', icon: Moon, desc: 'Sunset' },
                            { name: 'Isha', icon: Moon, desc: 'Night' },
                        ].map((p, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <p.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                                <h3 className="font-bold text-gray-900">{p.name}</h3>
                                <div className="text-xs text-gray-500 uppercase">{p.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-3 text-left">
                        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-blue-900 mb-2">Visitor Tip</h4>
                            <p className="text-blue-800 text-sm">
                                Arrive at the Prophet's Mosque at least <strong>45 minutes</strong> before prayer time to find space. If you've just arrived via the <Link href="/routes/makkah-madinah/" className="text-blue-900 font-bold underline hover:text-primary transition-colors">Makkah to Madinah taxi</Link>, we recommend heading to your hotel first for a quick refresh.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Where can I check exact times?",
                                shortAnswer: "Official Apps.",
                                detailedAnswer: "We recommend using reliable apps like 'Nusuk' or 'Athan' set to Madinah location. Most hotels also display the daily times in the lobby.",
                                perspectives: [
                                    {
                                        role: "Reliability",
                                        icon: "Clock",
                                        insight: "The Adhan from the Haram is audible across most of the central area."
                                    }
                                ]
                            },
                            {
                                question: "When is the best time for Rawdah Ziyarah?",
                                shortAnswer: "By Appointment.",
                                detailedAnswer: "Visiting the Rawdah requires a booked slot via the Nusuk app. Times are strictly enforced. Ensure you arrive at the designated gate 15 minutes before your permit time.",
                                perspectives: [
                                    {
                                        role: "Access",
                                        icon: "AlertCircle",
                                        insight: "Do not attempt to enter without a permit; security is strict. You can <Link href='/booking/' className='text-primary font-bold hover:underline'>book a reliable taxi service</Link> to ensure you arrive at the designated Rawdah gates on time."
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
