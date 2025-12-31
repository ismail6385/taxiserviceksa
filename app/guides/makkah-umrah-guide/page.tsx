import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Car, ArrowRight, CheckCircle2, AlertCircle, Info, Compass } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';


export const metadata: Metadata = {
    title: 'Makkah Umrah Complete Guide 2026 | Transport, Tawaf, Ziyarat - Taxi Service KSA',
    description: 'Complete Umrah guide for Makkah: Haram access, Tawaf timing, Ziyarat sites, Zamzam logistics, hotel zones, prayer schedules, and taxi transport. Everything pilgrims need to know.',
    keywords: ['Umrah guide Makkah', 'Tawaf timing', 'Ziyarat sites Makkah', 'Haram access points', 'Makkah hotel zones', 'Jabal al-Nour', 'Zamzam water'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/makkah-umrah-guide/',
    },
    openGraph: {
        title: 'Makkah Umrah Complete Guide 2026 | Everything Pilgrims Need',
        description: 'Comprehensive Umrah guide: Haram access, Tawaf timing, Ziyarat sites, transport, and practical tips for pilgrims.',
        url: 'https://taxiserviceksa.com/guides/makkah-umrah-guide/',
        type: 'article',
    },
};

export default function MakkahUmrahGuidePage() {
    const faqs = [
        {
            question: "What is the best time to perform Tawaf at the Haram?",
            answer: "After Fajr prayer (5-7 AM) is least crowded and spiritually rewarding. After Isha (9-11 PM) offers cooler weather. Avoid 12-3 PM due to extreme heat. During Ramadan, the last 10 nights are extremely crowded - book taxi 90 minutes before Taraweeh if staying far from Haram."
        },
        {
            question: "Which Haram gate is closest for taxi drop-off?",
            answer: "King Abdul Aziz Gate (Gate 1), Umrah Gate (Gate 79), and King Fahd Gate are closest drop-off points. Distance to Kaaba: 200-400 meters walking. Peak times (Maghrib-Isha) expect 30+ minute delays near Haram. Fajr (4-5 AM) is least crowded."
        },
        {
            question: "How do I visit Jabal al-Nour (Cave Hira)?",
            answer: "Jabal al-Nour is 7 km from Haram (20 min taxi ride). Visit early morning (6-8 AM) to avoid heat. Climb takes 30-45 minutes. Bring water and wear good shoes. Our taxi waits at the base (no extra charge for waiting). Not mandatory for Umrah but spiritually significant."
        },
        {
            question: "Do I need a taxi if my hotel is near the Haram?",
            answer: "Hotels within walking distance (Clock Tower, Jabal Omar): 5-10 min walk to Haram. Taxi not needed for prayers, only for Ziyarat trips. Hotels in Aziziyah, Misfalah, Rusayfah: 2-5 km from Haram. Taxi essential for all prayers (walking 2-3km in heat, 5 times daily, exhausts pilgrims)."
        },
        {
            question: "Where can I buy Zamzam water containers?",
            answer: "Shops near Haram sell Zamzam containers (SAR 5-20). Standard sizes: 5L, 10L, 20L. Buy on your last day - we transport to airport at no extra charge. Don't carry heavy containers throughout your Umrah stay. All our vehicles accommodate Zamzam containers."
        },
        {
            question: "What are the main Ziyarat sites in Makkah?",
            answer: "Jabal al-Nour (Cave Hira): 7km, 20 min. Jabal Thawr: 5km, 15 min. Masjid Aisha (Taneem - for Ihram): 8km, 20 min. Masjid Jin: 2km, 10 min. Our drivers know all Ziyarat sites and can arrange full-day tours with multiple stops."
        },
    ];

    const guideSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Makkah Umrah Complete Guide 2026",
        "description": "Comprehensive guide for Umrah pilgrims in Makkah covering Haram access, Tawaf timing, Ziyarat sites, and practical logistics.",


        "datePublished": "2024-01-01",
        "dateModified": "2026-01-01"
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <Script
                id="guide-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        Complete Umrah Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Makkah Umrah Complete Guide 2026
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need for a blessed Umrah: Haram access, Tawaf timing, Ziyarat sites, Zamzam logistics, hotel zones, and transport. Complete guide for pilgrims.
                    </p>
                </div>

                {/* Quick Navigation */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="#haram" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <MapPin className="w-4 h-4" />
                            <span>Haram Access</span>
                        </a>
                        <a href="#tawaf" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Clock className="w-4 h-4" />
                            <span>Tawaf Timing</span>
                        </a>
                        <a href="#ziyarat" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Compass className="w-4 h-4" />
                            <span>Ziyarat Sites</span>
                        </a>
                        <a href="#zamzam" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Users className="w-4 h-4" />
                            <span>Zamzam</span>
                        </a>
                        <a href="#hotels" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Car className="w-4 h-4" />
                            <span>Hotel Zones</span>
                        </a>
                        <a href="#transport" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Car className="w-4 h-4" />
                            <span>Transport</span>
                        </a>
                        <a href="#tips" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Pro Tips</span>
                        </a>
                        <a href="#faq" className="flex items-center gap-2 text-black hover:text-emerald-600 hover:underline font-medium transition-colors">
                            <Info className="w-4 h-4" />
                            <span>FAQs</span>
                        </a>
                    </div>
                </div>

                {/* Haram Access Guide */}
                <section id="haram" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Haram Access & Drop-off Points</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">King Abdul Aziz Gate (Gate 1)</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Distance to Kaaba:</strong> 200 meters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Best for:</strong> Main entrance, wheelchair access</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Peak times:</strong> Maghrib-Isha (busiest)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Umrah Gate (Gate 79)</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Distance to Kaaba:</strong> 300 meters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Best for:</strong> Umrah pilgrims, less crowded</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Peak times:</strong> After Isha prayer</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">King Fahd Gate</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Distance to Kaaba:</strong> 400 meters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Best for:</strong> Alternative entrance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Peak times:</strong> Fajr (least crowded)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-bold text-yellow-900 mb-2">Peak Time Strategy</p>
                                <p className="text-yellow-800 text-sm">Maghrib-Isha is busiest (expect 30+ min delays near Haram). Fajr (4-5 AM) is least crowded - best for first Tawaf. During Ramadan nights, book taxi 90 min before Taraweeh. Consider walking if hotel is within 1km during peak times.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tawaf Timing Guide */}
                <section id="tawaf" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Tawaf Timing Strategy</h2>
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-emerald-600 mb-4">✅ Best Times for Tawaf</h3>
                                <div className="space-y-4">
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="font-bold text-green-900 mb-1">After Fajr (5-7 AM)</p>
                                        <p className="text-green-800 text-sm">Least crowded. Spiritually rewarding. Cool weather. Best for elderly and families.</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="font-bold text-green-900 mb-1">After Isha (9-11 PM)</p>
                                        <p className="text-green-800 text-sm">Cooler weather. Moderate crowds. Good for those who prefer evening worship.</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="font-bold text-green-900 mb-1">Late Night (1-3 AM)</p>
                                        <p className="text-green-800 text-sm">Very quiet. Peaceful atmosphere. Ideal for focused worship. Taxi available 24/7.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-red-600 mb-4">❌ Times to Avoid</h3>
                                <div className="space-y-4">
                                    <div className="bg-red-50 rounded-lg p-4">
                                        <p className="font-bold text-red-900 mb-1">Midday (12-3 PM)</p>
                                        <p className="text-red-800 text-sm">Extreme heat (40-50°C). Marble floor very hot. Risk of heat exhaustion. Not recommended.</p>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-4">
                                        <p className="font-bold text-red-900 mb-1">Maghrib-Isha (6-8 PM)</p>
                                        <p className="text-red-800 text-sm">Most crowded time. Difficult to move. Long wait for taxi after. Better to wait until after Isha.</p>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-4">
                                        <p className="font-bold text-red-900 mb-1">Ramadan Last 10 Nights</p>
                                        <p className="text-red-800 text-sm">Extremely crowded. Tawaf can take 2-3 hours. Book taxi 90+ min before. Consider walking if close.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ziyarat Sites */}
                <section id="ziyarat" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Ziyarat Sites in Makkah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                    <Compass className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Jabal al-Nour (Cave Hira)</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance:</strong> 7 km from Haram (20 min taxi)</li>
                                <li><strong>Climb time:</strong> 30-45 minutes</li>
                                <li><strong>Best time:</strong> 6-8 AM (avoid heat)</li>
                                <li><strong>What to bring:</strong> Water, good shoes, umbrella</li>
                                <li><strong>Significance:</strong> Where Prophet ﷺ received first revelation</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Service:</strong> We wait at the base while you climb (no extra charge for waiting). Round trip: SAR 80-100.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Compass className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Jabal Thawr</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance:</strong> 5 km from Haram (15 min taxi)</li>
                                <li><strong>Climb time:</strong> 20-30 minutes</li>
                                <li><strong>Best time:</strong> Early morning or late afternoon</li>
                                <li><strong>Difficulty:</strong> Moderate climb</li>
                                <li><strong>Significance:</strong> Cave where Prophet ﷺ hid during Hijrah</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Service:</strong> Round trip with waiting: SAR 60-80.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Masjid Aisha (Taneem)</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-4">
                                <li><strong>Distance:</strong> 8 km from Haram (20 min taxi)</li>
                                <li><strong>Purpose:</strong> Miqat for Umrah from Makkah</li>
                                <li><strong>Best time:</strong> Any time (24/7 open)</li>
                                <li><strong>Facilities:</strong> Ihram changing rooms, prayer area</li>
                                <li><strong>Use case:</strong> For those wanting to perform additional Umrah</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <strong>Taxi Service:</strong> One-way: SAR 30-40. We can arrange return pickup.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-gray-700" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Other Ziyarat Sites</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li><strong>Masjid Jin:</strong> 2 km, 10 min taxi</li>
                                <li><strong>Jannat al-Mualla Cemetery:</strong> 1 km, 5 min taxi</li>
                                <li><strong>Birthplace of Prophet ﷺ (Library):</strong> 1.5 km, 8 min taxi</li>
                                <li><strong>Mina, Arafat, Muzdalifah:</strong> Hajj sites (15-25 km)</li>
                            </ul>
                            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mt-4">
                                <strong>Full-Day Ziyarat Tour:</strong> We offer complete Ziyarat packages covering all major sites. Contact via email for pricing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pro Tips */}
                <section id="tips" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips from Experienced Drivers</h2>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-white mb-2">🕌 First Tawaf Strategy:</p>
                                <p className="text-gray-300 text-sm">Do your first Tawaf immediately after check-in, even if tired. Crowds increase daily. Early completion = peace of mind for rest of stay.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🏨 Hotel Location Matters:</p>
                                <p className="text-gray-300 text-sm">If staying in Aziziyah/Misfalah (2-5km from Haram), book taxi for ALL prayers. Walking 2-3km in heat, 5 times daily, exhausts pilgrims. Taxi is essential, not luxury.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">⏰ Fajr Prayer is Special:</p>
                                <p className="text-gray-300 text-sm">Fajr at Haram is most peaceful. Book taxi night before (4:00 AM pickup). Traffic minimal. Best Tawaf experience after Fajr (5-7 AM).</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">💧 Zamzam Transport:</p>
                                <p className="text-gray-300 text-sm">Buy Zamzam containers on last day only. We transport to airport (no extra charge). Don't carry heavy containers throughout Umrah - unnecessary burden.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🏔️ Jabal al-Nour Timing:</p>
                                <p className="text-gray-300 text-sm">Visit 6-7 AM. Climb takes 30-45 min. Bring water, wear good shoes. Taxi waits at base (no extra charge). Not mandatory but spiritually rewarding.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">📅 Ramadan Last 10 Nights:</p>
                                <p className="text-gray-300 text-sm">Extreme crowds. Book taxi 90 min before Taraweeh. If hotel within 1km, consider walking. Taxi return after Taraweeh can take 60+ min wait.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-2 border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                {/* User-Generated Content Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Umrah Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow pilgrims by sharing your experience or asking questions about Umrah transport and Makkah logistics.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Makkah" service="Umrah Transport" />
                        <QuestionsDisplay location="Makkah" service="Umrah Transport" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Makkah" serviceName="Umrah Transport" />
                        <QuestionForm locationName="Makkah" serviceName="Umrah Transport" />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need Transport for Your Umrah?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional taxi service for Umrah pilgrims. Airport transfers, Haram transport, Ziyarat tours. Drivers understand prayer schedules and Haram access routes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto">
                            <Link href="/booking">
                                Book Umrah Transport
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto">
                            <Link href="/services/umrah-transport">
                                View Umrah Services
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
