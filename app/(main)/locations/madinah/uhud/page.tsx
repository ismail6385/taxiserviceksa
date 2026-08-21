import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Users, Mountain, ArrowRight, Sun, Footprints, Droplets } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations, { RelatedLink } from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Mount Uhud Taxi from Madinah | Private Ziyarat Transfer | Taxi Service KSA',
    description: 'Book a private taxi from Madinah to Mount Uhud. Hotel pickup, return transfers and private Ziyarat options for families, couples and groups.',
    keywords: ['Mount Uhud taxi', 'Mount Uhud Ziyarat', 'Uhud Mountain taxi from Madinah', 'Mount Uhud private transfer', 'Madinah Ziyarat tour'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/uhud/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Mount Uhud Taxi from Madinah | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Mount Uhud Taxi from Madinah | Private Ziyarat Transfer',
        description: 'Private hotel pickup, direct transfer, and return service to Mount Uhud from Madinah.',
        url: 'https://taxiserviceksa.com/locations/madinah/uhud/',
        type: 'website',
    },
};

export default function UhudPage() {
    const images = [
        '/madinah-prophets-mosque.webp',
        '/hero-slide-3.webp',
    ];

    const ziyaratLinks: RelatedLink[] = [
        { name: 'Quba Mosque', url: '/locations/madinah/quba/', description: 'Private taxi to the first mosque built in Islam.' },
        { name: 'Qiblatain Mosque', url: '/locations/madinah/qiblatain/', description: 'Private taxi to the Mosque of the Two Qiblahs.' },
        { name: 'Madinah Ziyarat Tour', url: '/services/madinah-ziyarat/', description: 'Combine Uhud with other Madinah Ziyarat sites in one private trip.' },
    ];

    const faqs = [
        {
            question: "How far is Mount Uhud from Masjid an-Nabawi?",
            shortAnswer: "About 5-6 km",
            detailedAnswer: "Mount Uhud is roughly 5-6 km north of Masjid an-Nabawi, generally a 10-15 minute drive depending on traffic and your exact pickup point.",
            perspectives: []
        },
        {
            question: "How long does it take to reach Mount Uhud by taxi?",
            shortAnswer: "10-15 minutes",
            detailedAnswer: "From central Madinah, the drive is typically 10-15 minutes. Traffic around prayer times can add to this, so drivers plan around the schedule when possible.",
            perspectives: []
        },
        {
            question: "Can I book a return taxi from Mount Uhud?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, return transfers are available — you can book a round trip with the driver waiting, or arrange a separate pickup once you're ready to leave.",
            perspectives: []
        },
        {
            question: "Can I visit Mount Uhud as part of a Madinah Ziyarat tour?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, Mount Uhud is commonly included in a private Madinah Ziyarat tour alongside sites like Quba Mosque and Qiblatain Mosque. See our Madinah Ziyarat service for the full tour option.",
            perspectives: []
        },
        {
            question: "Can the driver wait while we visit?",
            shortAnswer: "Yes, on request",
            detailedAnswer: "Yes, waiting time can be arranged when you book — let us know roughly how long you expect to spend at the site so we can plan accordingly.",
            perspectives: []
        },
        {
            question: "How long should I plan for a Mount Uhud visit?",
            shortAnswer: "Around 30-60 minutes",
            detailedAnswer: "Most visitors spend around 30-60 minutes at the site, though this varies by how much time you want at the cemetery and surrounding area.",
            perspectives: []
        },
        {
            question: "Can families and elderly pilgrims visit comfortably?",
            shortAnswer: "Yes, with the right vehicle",
            detailedAnswer: "Yes. The site involves some walking on uneven, outdoor ground, so a family or elderly group may want extra time and a vehicle that can pull up close to the entrance — mention this when booking.",
            perspectives: []
        },
        {
            question: "Can I book a private vehicle for multiple Ziyarat sites?",
            shortAnswer: "Yes",
            detailedAnswer: "Yes, a private vehicle can be booked for Mount Uhud together with other Madinah Ziyarat sites in one trip — see our Madinah Ziyarat service for details.",
            perspectives: []
        },
        {
            question: "Which vehicle is best for a family group?",
            shortAnswer: "GMC Yukon or Hyundai Staria",
            detailedAnswer: "A GMC Yukon or Hyundai Staria comfortably seats a family with room to spare. A sedan suits 1-3 passengers, and a Toyota Hiace covers larger groups.",
            perspectives: []
        },
        {
            question: "Is Mount Uhud open to visitors every day?",
            shortAnswer: "Generally yes, but check current conditions",
            detailedAnswer: "The public area is generally open daily, but access arrangements and any restrictions can change. It's worth checking current conditions before your visit, and your driver can advise on the day.",
            perspectives: []
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Mount Uhud, Madinah"
                description="Private taxi and Ziyarat transfer service to Mount Uhud from Madinah. Hotel pickup, direct transfer, and return service."
                services={[
                    { name: 'Mount Uhud Ziyarat Taxi', description: 'Private hotel pickup and direct transfer to Mount Uhud.' },
                    { name: 'Madinah Ziyarat Tour', description: 'Mount Uhud combined with other Madinah Ziyarat sites in one trip.' },
                    { name: 'Return Transfer', description: 'Round-trip or separately arranged pickup after your visit.' },
                    { name: 'Family & Group Vehicles', description: 'Sedan, SUV or van depending on group size.' }
                ]}
                image="https://taxiserviceksa.com/madinah-prophets-mosque.webp"
            />

            <Hero
                images={images}
                h1Text="Mount Uhud Taxi & Private Ziyarat Transfer from Madinah"
                bookingFormTitle="WhatsApp Booking for Mount Uhud Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah Ziyarat
                    </span>
                }
                subtitle="Private Pickup From Your Madinah Hotel to Mount Uhud"
                location="Mount Uhud • Martyrs' Cemetery • Madinah"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Masjid%20Nabawi&dropoff=Mount%20Uhud">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Private Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Request Ziyarat Tour
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <MapPin className="w-6 h-6 text-emerald-600 mb-3" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">From Masjid an-Nabawi</span>
                        <span className="text-lg font-black text-gray-900">~5-6 km</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Clock className="w-6 h-6 text-emerald-600 mb-3" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Drive Time</span>
                        <span className="text-lg font-black text-gray-900">~10-15 min</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Car className="w-6 h-6 text-emerald-600 mb-3" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Pickup</span>
                        <span className="text-lg font-black text-gray-900">Your Hotel</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Users className="w-6 h-6 text-emerald-600 mb-3" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Vehicles</span>
                        <span className="text-lg font-black text-gray-900">Sedan-Van</span>
                    </div>
                </div>
            </div>

            {/* About Mount Uhud */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <span className="text-red-800 font-bold uppercase tracking-wider text-sm">Why Mount Uhud Is Important</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                        About Mount Uhud
                    </h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Mount Uhud is associated with the Battle of Uhud, fought in 3 AH (625 CE) between the Muslims of Madinah and the Quraysh of Makkah, following the earlier Battle of Badr. The mountain sits about 5-6 km north of Masjid an-Nabawi.
                    </p>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Jabal al-Rumah, a small hill near the battlefield, is associated with the archers positioned there during the battle. Nearby is the Martyrs' Cemetery, the resting place of the Muslims who fell at Uhud, including Hamza ibn Abdul-Muttalib (RA), the Prophet's ﷺ uncle.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Many pilgrims visit to pay their respects at the cemetery and view the surrounding site. Access to specific areas, including Jabal al-Rumah, can be subject to current site conditions — your driver can advise on the day.
                    </p>
                </div>
            </section>

            {/* Getting there + how it works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Getting to Mount Uhud from Madinah</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Mount Uhud is located north of central Madinah. A private taxi can pick you up from your hotel and take you directly to the site — no need to arrange onward transport from a bus stop or fixed schedule.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            A return transfer can be arranged either as a round trip with the driver waiting, or as a separate pickup once you're ready to head back.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How the Uhud Transfer Works</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Hotel Pickup', desc: 'Driver collects you from your Madinah hotel.' },
                                { step: '2', title: 'Direct Transfer', desc: 'Travel directly to the Uhud area, about 10-15 minutes.' },
                                { step: '3', title: 'Visit', desc: 'Time to explore the area at your own pace.' },
                                { step: '4', title: 'Return Pickup', desc: 'Driver waits per your booking, or returns at an agreed time.' },
                                { step: '5', title: 'Hotel Drop-off', desc: 'Direct return to your Madinah accommodation.' },
                            ].map((s) => (
                                <div key={s.step} className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm shrink-0">{s.step}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{s.title}</h4>
                                        <p className="text-gray-500 text-xs">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What you'll see + visiting tips */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What You'll See</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Mountain className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Jabal Uhud</h4>
                                    <p className="text-sm text-gray-500">The mountain itself, viewed from the site around its base.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Mountain className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Jabal al-Rumah (Archers' Hill)</h4>
                                    <p className="text-sm text-gray-500">The small hill associated with the archers, near the battlefield.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Users className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Uhud Martyrs' Cemetery</h4>
                                    <p className="text-sm text-gray-500">The resting place of the martyrs of Uhud, including Hamza ibn Abdul-Muttalib (RA).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Sun className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Outdoor Site, Limited Shade</h4>
                                    <p className="text-sm text-gray-500">Early morning or late afternoon visits are generally more comfortable than the middle of the day.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Footprints className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Walking on Uneven Ground</h4>
                                    <p className="text-sm text-gray-500">The area involves some walking on rocky, outdoor terrain — comfortable footwear is worth bringing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                                <Droplets className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Bring Water</h4>
                                    <p className="text-sm text-gray-500">Sayyid Al-Shuhada Mosque sits next to the site for prayer, but it's worth carrying water for the visit itself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ziyarat tour + vehicles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Private Mount Uhud Ziyarat Tour</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Mount Uhud can be combined with other Madinah Ziyarat sites in a single private trip — such as Quba Mosque and Qiblatain Mosque — rather than booking each stop separately.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/services/madinah-ziyarat/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">Madinah Ziyarat Tour <ArrowRight className="w-4 h-4" /></Link>
                            <Link href="/locations/madinah/quba/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">Quba Mosque <ArrowRight className="w-4 h-4" /></Link>
                            <Link href="/locations/madinah/qiblatain/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">Qiblatain Mosque <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Options</h3>
                        <div className="space-y-2">
                            <Link href="/fleet/toyota-camry/" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">Sedan — 1-3 passengers</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                            </Link>
                            <Link href="/fleet/gmc-yukon-xl/" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">SUV — families, 4-7 passengers</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                            </Link>
                            <Link href="/fleet/toyota-hiace/" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">Van — larger groups</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
                <RelatedLocations
                    currentCity="Madinah"
                    customLinks={ziyaratLinks}
                    labels={{
                        title: 'More Ziyarat Places in Madinah',
                        subtitle: 'Private transfers to other historic sites around Madinah',
                        viewRoutes: 'View Details',
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ
                faqs={faqs}
            />
        </div>
    );
}
