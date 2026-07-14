import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, CalendarDays, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'List of Places to Visit in Madinah: Complete Ziyarat Guide (2026)',
    description: 'The 10 essential Ziyarat sites in Madinah — Masjid an-Nabawi, Jannat al-Baqi, Quba, Uhud, Qiblatain, the Seven Mosques, and more — grouped into a practical 3-day route.',
    keywords: [
        'places to visit in madinah ziyarat',
        'madinah ziyarat sites list',
        'masjid al-ijabah madinah',
        'masjid al-jumuah madinah',
        'bir uthman well of rumah',
        'madinah ziyarat 3 day itinerary',
        'seven mosques madinah',
        'jannat al baqi ziyarat',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/places-to-visit-in-madinah-ziyarat-guide/',
    },
    openGraph: {
        title: 'List of Places to Visit in Madinah: Complete Ziyarat Guide (2026)',
        description: 'Every major Ziyarat site in Madinah, briefly explained and grouped into a practical route you can actually follow in 2-3 days.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/places-to-visit-in-madinah-ziyarat-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the most important Ziyarat places to visit in Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The core Ziyarat sites are Masjid an-Nabawi and the Rawdah, Jannat al-Baqi, Masjid Quba, Mount Uhud and the Martyrs\' area, Masjid al-Qiblatain, the Seven Mosques (Masajid al-Sab\'ah), Masjid al-Ghamama, Masjid al-Jumu\'ah, Masjid al-Ijabah, and Bir Uthman (the Well of Rumah). Together these cover the Prophet\'s mosque, his companions\' resting places, and the key locations from the early Madinan period of Islam.',
            },
        },
        {
            '@type': 'Question',
            name: 'How many days do you need for a full Madinah Ziyarat?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Two to three focused days is enough to cover all ten major sites without rushing. One day for the sites immediately around Masjid an-Nabawi (Baqi, Ijabah, Ghamama), one day for the Quba and Hijrah-route sites (Quba, Jumu\'ah, Qiblatain), and one day for the northern sites (Uhud, the Seven Mosques, and Bir Uthman), which are more spread out and best covered by private car.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Masjid al-Ijabah in Madinah the same as Masjid al-Ijabah in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No — these are two different mosques that happen to share the same name. Masjid al-Ijabah in Madinah (also called Bani Mu\'awiyah Mosque) is located about 580 metres from Masjid an-Nabawi, near Jannat al-Baqi, and is where the Prophet made a specific supplication. There is a separate, unrelated site referred to by a similar name in the Makkah area, so always confirm which city a tour or article is referring to.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can a private taxi cover all these Ziyarat sites in one trip?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not comfortably in a single outing — the sites are spread across at least three geographic clusters (central Madinah, the southern Quba/Hijrah route, and the northern Uhud/Khandaq route), and rushing all ten in one day leaves little time to actually absorb any of them. Most private Ziyarat taxi services split the route into 2-3 separate half-day or full-day tours instead.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'List of Places to Visit in Madinah: Complete Ziyarat Guide',
    description: 'The 10 essential Ziyarat sites in Madinah, briefly explained and grouped into a practical 2-3 day route.',
    datePublished: '2026-07-13T00:00:00+03:00',
    dateModified: '2026-07-13T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/places-to-visit-in-madinah-ziyarat-guide/' },
};

const sites = [
    {
        name: '1. Masjid an-Nabawi & the Rawdah',
        href: '/blog/masjid-an-nabawi-complete-guide-history/',
        detail: 'The Prophet\'s Mosque itself, and the small area between his pulpit and his house — the Rawdah — described in hadith as "a garden from the gardens of Paradise." For most pilgrims this is the anchor of the entire Madinah trip; everything else radiates outward from here.',
    },
    {
        name: '2. Jannat al-Baqi',
        href: '/blog/jannat-al-baqi-madinah-cemetery-guide/',
        detail: 'The main cemetery of Madinah, immediately beside Masjid an-Nabawi, where many of the Prophet\'s family members and companions are buried. Entry times are limited and gender-segregated at certain hours, so check the current schedule before walking over.',
    },
    {
        name: '3. Masjid al-Ghamama',
        href: null,
        detail: 'A short walk west of Masjid an-Nabawi, marking the spot where the Prophet is said to have led Eid prayers and prayed for rain (ghamama means "cloud"). Small, easy to combine with a Nabawi/Baqi visit on the same walk.',
    },
    {
        name: '4. Masjid al-Ijabah',
        href: null,
        detail: 'Roughly 580 metres from Masjid an-Nabawi, near Baqi. Here the Prophet made three specific supplications for his community, two of which were answered — giving the mosque its name, "the Mosque of the Response."',
    },
    {
        name: '5. Masjid Quba',
        href: '/blog/quba-mosque-history-visit-guide/',
        detail: 'The first mosque built in Islam, a few kilometres south of the city centre. A voluntary prayer here carries the reward of an Umrah according to hadith, which makes it one of the most consistently visited sites outside the Haram itself.',
    },
    {
        name: '6. Masjid al-Jumu\'ah',
        href: null,
        detail: 'About 900 metres north of Quba, on the route the Prophet walked during the Hijrah. This is where he led the first Friday prayer in Islamic history, on his way into Madinah.',
    },
    {
        name: '7. Masjid al-Qiblatain',
        href: '/blog/qiblatain-mosque-seven-mosques-guide/',
        detail: 'The "Mosque of the Two Qiblas," where the direction of prayer changed mid-salah from Jerusalem to Makkah — a pivotal moment commemorated by the mosque\'s twin-mihrab design.',
    },
    {
        name: '8. The Seven Mosques (Masajid al-Sab\'ah)',
        href: '/blog/qiblatain-mosque-seven-mosques-guide/',
        detail: 'A cluster of small mosques marking the defensive positions of the Muslims during the Battle of the Trench (Khandaq). Usually visited together as one stop rather than seven separate ones.',
    },
    {
        name: '9. Mount Uhud & the Martyrs\' Area',
        href: '/blog/mount-uhud-history-visit-guide/',
        detail: 'Site of the Battle of Uhud and the resting place of its martyrs, including the Prophet\'s uncle Hamza (RA). A quieter, more reflective stop than the crowded central sites, north of the city.',
    },
    {
        name: '10. Bir Uthman (Well of Rumah)',
        href: null,
        detail: 'A working well roughly 5-6 km northwest of the Haram in Wadi al-Aqiq, bought by Uthman ibn Affan (RA) during a water shortage and endowed for free public use — one of the earliest and longest-running waqf (charitable endowment) stories in Islamic history, and still active today.',
    },
];

const dayPlan = [
    { day: 'Day 1', label: 'Around the Prophet\'s Mosque', stops: 'Masjid an-Nabawi & Rawdah, Jannat al-Baqi, Masjid al-Ijabah, Masjid al-Ghamama', note: 'All within easy walking distance of each other and most hotels in the central Haram area.' },
    { day: 'Day 2', label: 'The Quba & Hijrah Route', stops: 'Masjid Quba, Masjid al-Jumu\'ah, Masjid al-Qiblatain', note: 'A few kilometres south and west of the centre — best covered by car rather than on foot.' },
    { day: 'Day 3', label: 'The Uhud & Khandaq Route', stops: 'Mount Uhud & Martyrs\' area, the Seven Mosques, Bir Uthman', note: 'The most spread-out cluster, north and northwest of the city — a private taxi tour is the practical way to see all three in one morning.' },
];

export default function MadinahZiyaratListPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Places to Visit in Madinah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Ziyarat Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 10 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated July 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        List of Places to Visit<br />
                        <span className="text-emerald-300">in Madinah: Ziyarat Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Ziyarat — from the Arabic for "visit" — means walking through the places connected to the Prophet Muhammad ﷺ, his companions, and the earliest years of Islam. Most pilgrims land in Madinah wanting to "do Ziyarat" with no real plan for order or timing. Here are the 10 sites worth knowing, grouped into a route you can actually follow.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20Madinah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book a Ziyarat Taxi Tour
                        </a>
                        <Link href="/blog/madinah-travel-itinerary-planning/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Full Itinerary <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Mapping This Out Early Matters</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        These ten sites carry real spiritual and historical weight, but they aren't clustered in one walkable area — they stretch from the centre of Madinah out to the Quba road in the south and the Uhud/Khandaq route in the north. Arriving without a rough plan usually means either missing several sites entirely or rushing through all of them on the last afternoon before checkout.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        With the right grouping, two to three focused days is enough to cover everything on this list at a pace that actually lets it mean something.
                    </p>
                </section>

                {/* All 10 sites */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">The 10 Ziyarat Sites</h2>
                    <div className="space-y-4">
                        {sites.map((s, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-black text-gray-900 text-lg mb-2">{s.name}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-3">{s.detail}</p>
                                {s.href && (
                                    <Link href={s.href} className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-sm hover:text-emerald-900">
                                        Full guide <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Day plan */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">A Practical 3-Day Route</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Grouped by geography rather than by importance, so you aren't crossing the city back and forth on the same day.
                    </p>
                    <div className="space-y-4">
                        {dayPlan.map((d, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="flex-shrink-0 w-14 h-14 bg-emerald-950 text-white rounded-2xl flex items-center justify-center font-black text-sm text-center">
                                    {d.day}
                                </div>
                                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex-1">
                                    <h3 className="font-black text-emerald-950 mb-1">{d.label}</h3>
                                    <p className="text-gray-700 text-sm font-semibold mb-2">{d.stops}</p>
                                    <p className="text-gray-600 text-xs leading-relaxed">{d.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Ziyarat FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related pilgrim links */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Madinah Guides</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Complete Madinah Ziyarat Guide (Museums & Landmarks)', href: '/blog/madinah-ziyarat-places-museums-landmarks/', emoji: '🗺️' },
                            { title: 'How to Book a Rawdah Visit', href: '/blog/how-to-book-visit-rawdah-madinah/', emoji: '🕌' },
                            { title: 'Madinah Day Trips & Ziyarat Guide', href: '/blog/madinah-day-trips-ziyarat-guide-2026/', emoji: '🚗' },
                            { title: 'Madinah Travel Itinerary Planning', href: '/blog/madinah-travel-itinerary-planning/', emoji: '📅' },
                        ].map((b, i) => (
                            <Link key={i} href={b.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 transition-all flex gap-3 items-start">
                                <span className="text-2xl">{b.emoji}</span>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{b.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">One Driver, Every Ziyarat Stop</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Skip the back-and-forth of figuring out routes between Quba, Uhud, and the Seven Mosques. Book a private, air-conditioned Ziyarat taxi tour — our drivers know every stop on this list and the order that makes sense.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20Madinah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/blog/madinah-day-trips-ziyarat-guide-2026/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Tour Details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
