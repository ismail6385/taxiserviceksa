
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { DoorOpen, MapPin, Accessibility, Info, AlertCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Makkah Haram Gates Guide | Entrances & Wheelchair Access',
    description: 'Guide to Masjid Al Haram gates. Find King Abdulaziz Gate, King Fahd Gate, Umrah entrances, and wheelchair accessible gates. Navigate the Haram easily.',
    keywords: ['Haram gates Makkah', 'King Abdulaziz Gate', 'King Fahd Gate', 'Umrah gate number', 'Wheelchair access Haram gates'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/haram-gates-access/',
    },
};

export default function HaramGatesPage() {

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="gates-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Masjid Al Haram Gates Guide"
                    })
                }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-1.webp']}
                h1Text="Masjid Al Haram Gates"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Entrances & Navigation
                    </span>
                }
                subtitle="Finding Your Way"
                location="Makkah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        With over 100 gates, navigating Masjid Al Haram can be confusing. Knowing the key main gates helps you find your meeting points easily, especially when exploring the <Link href="/locations/makkah/" className="text-white underline hover:text-primary transition-colors">Makkah (Haram Area)</Link>.
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Major Gates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">King Abdulaziz Gate</h3>
                            <p className="text-gray-600 text-sm">The main southern entrance. Often the busiest. Direct access to the Mataf.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">79</div>
                            <h3 className="text-xl font-bold mb-2">King Fahd Gate</h3>
                            <p className="text-gray-600 text-sm">Located on the western side. A major landmark and often used for those coming from Jebel Omar hotels.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">89</div>
                            <h3 className="text-xl font-bold mb-2">King Abdullah Gate</h3>
                            <p className="text-gray-600 text-sm">The massive northern expansion entrance. Highest capacity and very modern facilities.</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h3 className="flex items-center gap-2 font-bold text-blue-900 text-xl mb-4">
                            <Accessibility className="w-6 h-6" /> Wheelchair Access
                        </h3>
                        <p className="text-blue-800 mb-4">
                            If you are performing Umrah with a wheelchair, you should use the designated ramp bridges. Our <Link href="/services/umrah-transport/" className="font-bold underline">professional Umrah transport service</Link> can help coordinate drop-offs at these exact points.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900 font-medium">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Ajyad Bridge (near Gate 1)</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Shubaikah Bridge (near Gate 64)</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Marwah Gate (for Sa'i exit)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "What is the best gate for Umrah?",
                                shortAnswer: "King Abdulaziz (1).",
                                detailedAnswer: "Traditionally, pilgrims enter via King Abdulaziz Gate (1) or Al-Salam Gate to access the Mataf directly for Tawaf. This is highly recommended for those arriving via the <Link href='/routes/jeddah-makkah/' className='text-emerald-700 hover:underline'>Jeddah Airport to Makkah route</Link>. However, you can enter from any gate.",
                                perspectives: [
                                    {
                                        role: "Tip",
                                        icon: "DoorOpen",
                                        insight: "Gate numbers change with expansions. Always note the number on the LED screen."
                                    }
                                ]
                            },
                            {
                                question: "If I lose my shoes, where do I go?",
                                shortAnswer: "Lost & Found.",
                                detailedAnswer: "Shoe racks are numbered. Memorize the zone color and rack number. If lost, check the Lost & Found office near Marwah.",
                                perspectives: [
                                    {
                                        role: "Advice",
                                        icon: "AlertCircle",
                                        insight: "Bring a shoe bag and carry them with you. For those also visiting <Link href='/locations/madinah/' className='text-emerald-700 hover:underline'>Madinah (Holy City)</Link>, the shoe management system there is different but equally important. You can avoid heat and traffic by choosing to <Link href='/booking/' className='text-primary font-bold hover:underline'>book your taxi online</Link> for all transfers."
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
