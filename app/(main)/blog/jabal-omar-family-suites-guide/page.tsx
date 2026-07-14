import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, BedDouble, Link2, PhoneCall, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jabal Omar Family Suites for 6 People: Best Hotels & Booking Tips 2026',
    description: 'Traveling for Umrah with 2 adults, an elderly parent, and kids — 6 people total? Here are the Jabal Omar hotels with real family suites or connecting rooms, and how to book them.',
    keywords: [
        'jabal omar family suite',
        'makkah hotel for 6 people',
        'family suite near haram',
        'hilton suites jabal omar family',
        'address jabal omar family suite',
        'jabal omar hotels for large family',
        'swissotel al maqam family suite',
        'connecting rooms makkah hotel',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jabal-omar-family-suites-guide/',
    },
    openGraph: {
        title: 'Jabal Omar Family Suites for 6 People: Best Hotels & Booking Tips 2026',
        description: 'Which Jabal Omar hotels actually have rooms or suites that fit a family of 6? A practical comparison and booking guide for Umrah families.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/jabal-omar-family-suites-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Which Jabal Omar hotels have suites big enough for 6 people?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The most realistic options are Hilton Suites Jabal Omar Makkah and Address Jabal Omar Makkah, both of which are apartment-style properties with kitchenettes and multi-room layouts built for families rather than standard hotel rooms. Swissotel Al Maqam Makkah has large Family Suites (around 177 sqm) with a separate bedroom and living room, but you should confirm sleeping capacity directly with the hotel before booking. Jabal Omar Hyatt Regency and Jabal Omar Marriott offer Quad Rooms and family-style suites, but these typically sleep 3-4, so a family of 6 usually needs two connecting rooms there rather than one.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I fit 2 adults, 1 elderly parent, and 3 kids in one hotel room in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Rarely in a single standard room — most 5-star Makkah hotel rooms are capped at 3-4 occupants by fire safety regulations, regardless of how the room looks in photos. For 6 people you generally need either a genuine multi-bedroom family suite (apartment-style properties like Hilton Suites or Address Jabal Omar are built for this) or two adjoining/connecting standard rooms booked together.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is it better to book one big family suite or two connecting rooms?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For families traveling with an elderly parent, two connecting rooms are often more comfortable than one large open-plan suite, since it gives your mother her own private space and bathroom rather than sharing one open living area with three children. If you do book connecting rooms, confirm with the hotel directly that the rooms have an actual internal connecting door — some hotels only offer "same floor, nearby" rooms rather than true connecting rooms, which is a common source of complaints.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far in advance should I book a Jabal Omar family suite?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Book 3-6 months ahead if possible. Family suites and connecting-room configurations are a small percentage of total inventory at any hotel, and they sell out long before standard rooms — especially around Ramadan, school holidays, and the summer travel season. Because these room types are often not fully searchable on third-party booking sites, it is worth emailing or calling the hotel\'s reservations desk directly once you\'ve shortlisted 2-3 options.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jabal Omar Family Suites for 6 People: Best Hotels & Booking Tips',
    description: 'A practical comparison of Jabal Omar hotels that can realistically accommodate a family of 6 for Umrah, plus booking tips for connecting rooms and family suites.',
    datePublished: '2026-07-13T00:00:00+03:00',
    dateModified: '2026-07-13T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/jabal-omar-family-suites-guide/' },
};

const tips = [
    { title: '🛏️ Know the Real Capacity Limits Before You Fall in Love With Photos', detail: 'Most standard 5-star rooms in Jabal Omar are capped at 3-4 occupants by fire safety rules, no matter how spacious the photos look. Before booking, always ask the hotel directly for the maximum occupancy of the specific room type — "family suite" branding doesn\'t guarantee it sleeps 6.' },
    { title: '🏨 Apartment-Style Suites Fit Large Families Better Than Hotel Suites', detail: 'Properties like Hilton Suites Jabal Omar Makkah and Address Jabal Omar Makkah are built as serviced apartments with kitchenettes and separate living/sleeping areas — designed for families, not just couples. A "suite" at a standard hotel is often one large room with a sitting area, not extra bedrooms.' },
    { title: '🔗 Connecting Rooms Protect Your Mother\'s Privacy', detail: 'If you\'re traveling with an elderly parent, two connecting rooms usually work better than one open-plan suite shared with three children. Confirm the rooms have an actual internal connecting door — some hotels only offer "nearby, same floor" rooms, which isn\'t the same thing and is a common source of complaints.' },
    { title: '📞 Call the Hotel Directly for a 6-Person Booking', detail: 'Booking engines on Expedia, Booking.com, and hotel websites are usually built around 1-4 guests per room. For a 6-person family configuration, shortlist 2-3 hotels online first, then email or call the hotel\'s reservations desk directly to confirm the family suite or connecting-room setup and get an accurate quote.' },
];

const hotels = [
    {
        name: 'Hilton Suites Jabal Omar Makkah',
        fit: 'Best overall fit for 6',
        detail: 'An apartment-style property with a kitchenette in every suite and a dedicated Family Experience program for children under 12. Designed for multi-generational stays rather than a standard overnight room.',
    },
    {
        name: 'Address Jabal Omar Makkah',
        fit: 'Best for a 3-bedroom style layout',
        detail: 'A 5-star apart-hotel about a 7-minute walk from Al-Masjid Al-Haram, offering family suites with spacious living areas and extra beds — closer to a serviced apartment than a hotel room.',
    },
    {
        name: 'Swissotel Al Maqam Makkah',
        fit: 'Largest suite footprint, verify sleeping capacity first',
        detail: 'Family Suites here are around 177 sqm with a separate bedroom, living room, and a dining table seating up to 10 — impressive on paper, but confirm directly how many people it actually sleeps before booking, and double-check connecting-room availability if you need two units.',
    },
    {
        name: 'Jabal Omar Hyatt Regency Makkah',
        fit: 'Good for two connecting rooms, one minute from the Haram',
        detail: '656 rooms including 25 suites. Quad and Triple Rooms (around 38 sqm) are designed for families but typically sleep 3-4, so a family of 6 will likely need two rooms booked together rather than one.',
    },
    {
        name: 'Jabal Omar Marriott Hotel',
        fit: 'Good mid-range option for connecting rooms',
        detail: '426 rooms and 52 suites, with suites offering a separate living area. As with the Hyatt, plan on two connecting rooms for a family of 6 rather than a single unit.',
    },
];

export default function JabalOmarFamilySuitesGuidePage() {
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
                        <span>Jabal Omar Family Suites</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏨 Hotel Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated July 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Jabal Omar Family Suites<br />
                        <span className="text-emerald-300">for a Family of 6</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Two adults, an elderly parent, and three kids — one room, or two? Here's an honest comparison of which Jabal Omar hotels actually have suites or connecting rooms built for a family that size.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20booking%20a%20Jabal%20Omar%20hotel%20for%206%20people%20and%20need%20a%20large%20taxi%20from%20Jeddah%20airport" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Ask About a 6-Seater Transfer
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            View Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Banner */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Users className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">The "One Room or Two" Question</h4>
                        <p className="leading-relaxed">
                            Families planning their first Umrah together often assume a "family suite" will simply fit everyone. In reality, occupancy limits, room layout, and whether rooms are truly "connecting" matter far more than the word "suite" on a booking page. Here's what to actually check before you book.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why "Family Suite" Doesn't Always Mean 6 Beds</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Jabal Omar is one of the most convenient areas to stay for Umrah — most of its towers are within a one-to-ten-minute walk of Al-Masjid al-Haram. But "family suite" is used loosely across hotel websites. Sometimes it means a genuine multi-bedroom apartment; sometimes it means one large room with a sofa and a slightly bigger bathroom.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        For a group of six — two adults, an elderly parent, and three children — the safest approach is to separate hotels into two categories: those built as <strong>apartment-style suites</strong> (genuinely designed for large families) and those where you'll realistically need <strong>two connecting standard rooms</strong> instead of one.
                    </p>
                </section>

                {/* Step-by-step framework */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">What to Check Before You Book</h2>
                    <div className="space-y-6">
                        {tips.map((step, idx) => (
                            <div key={idx} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-950 text-white rounded-2xl flex items-center justify-center font-black text-lg">
                                    0{idx + 1}
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex-1">
                                    <h3 className="font-black text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hotel comparison */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <BedDouble className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Jabal Omar Hotels Compared for a Family of 6</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        A quick honest read on the main Jabal Omar properties, based on how their room types are actually built — not just their marketing photos.
                    </p>
                    <div className="space-y-4">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="font-black text-gray-900 text-lg">{h.name}</h3>
                                    <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">{h.fit}</span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{h.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Connecting rooms callout */}
                <section className="space-y-4 bg-amber-50 border border-amber-100 rounded-3xl p-8">
                    <div className="flex items-center gap-3">
                        <Link2 className="w-6 h-6 text-amber-600" />
                        <h2 className="text-2xl font-black text-gray-900">"Connecting" vs. "Nearby" — Always Confirm the Difference</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        A genuine connecting room has an internal door between the two rooms, so your family can move between them without stepping into the corridor — important for young kids at night and for keeping an eye on an elderly parent. "Nearby" or "same floor" rooms are simply two separate rooms with two separate corridor entrances, which is far less convenient. Some guests have reported requesting connecting rooms and being told none were available on arrival, so don't rely on a website label alone — get written confirmation from the hotel before you travel.
                    </p>
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                        <PhoneCall className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p><strong>Practical tip:</strong> Email the hotel's reservations desk (not just the booking platform) with your exact group makeup — "2 adults, 1 senior citizen, 3 children" — and ask them to confirm in writing which specific room type and floor plan they are assigning you.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Family Booking FAQ</h2>
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
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Pilgrim Guides</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Should You Take Your Kids for Umrah?', href: '/blog/umrah-with-kids-family-guide/', emoji: '👨‍👩‍👧‍👦' },
                            { title: 'Elderly Umrah Guide: Wheelchairs & Care Tips', href: '/blog/elderly-umrah-guide-tips/', emoji: '❤️' },
                            { title: 'Best Hotels Near Masjid Haram Makkah', href: '/blog/best-hotels-masjid-haram-makkah/', emoji: '🏨' },
                            { title: 'Ultimate Umrah Packing List 2026', href: '/blog/ultimate-umrah-packing-list/', emoji: '🧳' },
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
                    <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">One Vehicle for All Six of You</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        A standard sedan won't fit 2 adults, a senior parent, 3 kids, and luggage. Book our GMC Yukon XL or Hyundai Staria — spacious, air-conditioned, with room for everyone and every suitcase — direct from Jeddah Airport to your Jabal Omar hotel entrance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20large%20taxi%20for%206%20people%20from%20Jeddah%20Airport%20to%20Jabal%20Omar" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
