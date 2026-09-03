import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Compass } from 'lucide-react';

export const metadata: Metadata = {
    title: '15 Best Ziyarat Places in Makkah: Complete Guide 2026',
    description: 'Explore 15 Ziyarat places in Makkah, including Cave Hira, Jabal Thawr, Arafat, Mina and Jannat al-Mualla, with practical visit tips.',
    keywords: [
        'best ziyarat places in Makkah',
        'Makkah Ziyarat places',
        'places to visit in Makkah',
        'Makkah Ziyarat guide',
        'historical places in Makkah',
        'Makkah Ziyarat tour',
        'Makkah Ziyarat taxi',
        'Makkah holy sites',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: '15 Best Ziyarat Places in Makkah: Complete Guide 2026' }],
        siteName: 'Taxi Service KSA',
        title: '15 Best Ziyarat Places in Makkah: Complete Guide 2026',
        description: 'A practical guide to 15 historical and religious Ziyarat places in Makkah, grouped by area, with visit tips and transport information.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the most important Ziyarat places in Makkah?',
            acceptedAnswer: { '@type': 'Answer', text: 'Popular historical and religious sites include Jabal al-Nour and Cave Hira, Jabal Thawr, Jannat al-Mualla, Masjid al-Jinn and the Holy Sites of Arafat, Mina and Muzdalifah.' },
        },
        {
            '@type': 'Question',
            name: 'Is Ziyarat required for Umrah?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Visiting historical Ziyarat sites is not a required part of performing Umrah. These visits are generally undertaken to learn about Islamic history and places connected with the Seerah.' },
        },
        {
            '@type': 'Question',
            name: 'Can I visit Makkah Ziyarat places in one day?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, several sites can be combined in one private trip, but trying to visit every location in a single outing would make the itinerary rushed. Grouping locations geographically is more practical.' },
        },
        {
            '@type': 'Question',
            name: 'Can elderly pilgrims visit Jabal al-Nour?',
            acceptedAnswer: { '@type': 'Answer', text: "Jabal al-Nour involves a steep climb to Cave Hira. Pilgrims should consider their physical ability before attempting the ascent. The Hira Cultural District at the foot of the mountain provides an alternative for visitors who don't want to climb." },
        },
        {
            '@type': 'Question',
            name: 'Can I book a private car for Makkah Ziyarat?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. A private vehicle can be arranged for a Ziyarat itinerary. Send your pickup location, date, passenger count and preferred sites to request a quote.' },
        },
        {
            '@type': 'Question',
            name: 'Should I book a return transfer?',
            acceptedAnswer: { '@type': 'Answer', text: 'For a private Ziyarat outing, arranging the return journey in advance is convenient, particularly when travelling with family or elderly passengers.' },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '15 Best Ziyarat Places in Makkah: Complete Guide 2026',
    description: 'A practical guide to 15 historical and religious Ziyarat places in Makkah, grouped by area, with visit tips and transport information.',
    datePublished: '2026-03-25T00:00:00+03:00',
    dateModified: '2026-08-21T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/' },
};

const historicalSites = [
    {
        title: '1. Jabal al-Nour & Cave Hira',
        body: (
            <>
                Jabal al-Nour, the Mountain of Light, is one of Makkah's best-known historical sites. Cave Hira is located at its summit and is associated with the beginning of the first Quranic revelation received by Prophet Muhammad ﷺ.
                <br /><br />
                The mountain is northeast of Masjid al-Haram and has a steep ascent. Read our <Link href="/blog/cave-of-hira-history/" className="text-emerald-600 underline">Cave of Hira Guide</Link> for more on the site's history.
            </>
        ),
    },
    {
        title: '2. Hira Cultural District',
        body: "At the foot of Jabal al-Nour, the Hira Cultural District provides a way to learn about the history of revelation without treating the mountain climb as the only reason to visit the area. It includes cultural and educational attractions connected with the story of revelation — a useful addition to a Ziyarat itinerary, particularly for pilgrims travelling with family members who may not want to climb Jabal al-Nour.",
    },
    {
        title: '3. Jabal Thawr & Cave Thawr',
        body: (
            <>
                Jabal Thawr is associated with the Hijrah of Prophet Muhammad ﷺ and Abu Bakr al-Siddiq (رضي الله عنه). The mountain lies south of the Grand Mosque and is another important historical site connected with the Seerah.
                <br /><br />
                The climb is demanding, so visitors should consider their fitness and physical condition before attempting it. Read our <Link href="/blog/jabal-thawr-guide/" className="text-emerald-600 underline">Jabal Thawr Guide</Link> for more information.
            </>
        ),
    },
    {
        title: '4. Jannat al-Mualla',
        body: (
            <>
                Jannat al-Mualla is the historic cemetery in Makkah associated with members of the Prophet's family and early Muslim community. It is located in the area of Al-Hujun, north of Masjid al-Haram, and is commonly included in Makkah Ziyarat itineraries.
                <br /><br />
                Because access arrangements can change, visitors should follow current local instructions when visiting. See our <Link href="/blog/jannat-al-mualla-makkah-guide/" className="text-emerald-600 underline">Jannat al-Mualla Guide</Link> for more.
            </>
        ),
    },
    {
        title: '5. Masjid al-Jinn',
        body: 'Masjid al-Jinn is a historic mosque in Makkah near the Jannat al-Mualla area. It is associated with the account of a group of jinn hearing the Quran and accepting Islam. Its location also makes it practical to combine with other northern Makkah sites during a private Ziyarat drive.',
    },
    {
        title: '6. Arafat & Jabal al-Rahmah',
        body: 'Arafat is one of the three Holy Sites of Hajj, together with Mina and Muzdalifah. It is the place where pilgrims stand on the Day of Arafah during Hajj. Jabal al-Rahmah, or the Mount of Mercy, is a prominent landmark within the Arafat area — the only Holy Site outside the boundaries of the Haram. Outside Hajj season, visitors may see the area as part of a historical or Holy Sites tour, subject to current access arrangements.',
    },
    {
        title: '7. Mina',
        body: 'Mina is another major Holy Site associated with Hajj, known for its large tent city and the Jamarat complex, where pilgrims perform the stoning ritual during Hajj. For pilgrims interested in understanding the geography of Hajj, a private drive through the Holy Sites can make the route easier to understand.',
    },
    {
        title: '8. Muzdalifah',
        body: 'Muzdalifah is the third of the three Holy Sites. During Hajj, pilgrims travel from Arafat to Muzdalifah and spend part of the night there before continuing toward Mina. Because the three Holy Sites are geographically connected, Arafat, Muzdalifah and Mina are often grouped together when planning a Makkah Ziyarat or Holy Sites drive.',
    },
    {
        title: "9. Al-Bay'ah Mosque",
        body: "Al-Bay'ah Mosque is a historic mosque near the Jamarat area, associated with the Pledge of Aqabah. Its location makes it particularly relevant when visiting Mina and the surrounding historical sites.",
    },
    {
        title: '10. Jamarat Bridge Area',
        body: 'The Jamarat area is one of the most recognizable parts of the Hajj route, where pilgrims perform the stoning ritual during Hajj. Outside the pilgrimage period, access and visitor arrangements can differ, so visitors should follow current local instructions rather than assuming every part of the complex is open for sightseeing.',
    },
    {
        title: '11. Masjid al-Khayf',
        body: 'Masjid al-Khayf is located in Mina and is associated with the Hajj landscape. For visitors interested in the historical and religious geography of Mina, it can be considered as part of a Holy Sites route where access permits.',
    },
    {
        title: '12. Masjid Namirah',
        body: 'Masjid Namirah is a major mosque in the Arafat area, strongly associated with the Day of Arafah. It is an important landmark for understanding the geography and rituals of Hajj and can be viewed as part of an Arafat visit, subject to current access arrangements.',
    },
    {
        title: '13. Hudaibiyah',
        body: 'Al-Hudaibiyah is a historically important area outside central Makkah associated with the Treaty of Hudaybiyyah. Because it is farther from the central Makkah Ziyarat cluster, it is better treated as an extended historical trip rather than squeezed into a short city tour.',
    },
    {
        title: '14. Hunayn Valley',
        body: 'Hunayn is another historical location in the wider Makkah region associated with the early Islamic period. Like Hudaibiyah, it is better suited to a longer historical excursion than a standard short Makkah Ziyarat route.',
    },
    {
        title: "15. Al-Ju'ranah",
        body: "Al-Ju'ranah is a location associated with the Prophet's ﷺ journeys and is also known for its relevance to entering Ihram for Umrah. It is outside the central Ziyarat cluster, so visitors planning to include it should allow additional driving time.",
    },
];

const faqs = [
    { q: 'What are the most important Ziyarat places in Makkah?', a: 'Popular historical and religious sites include Jabal al-Nour and Cave Hira, Jabal Thawr, Jannat al-Mualla, Masjid al-Jinn and the Holy Sites of Arafat, Mina and Muzdalifah.' },
    { q: 'Is Ziyarat required for Umrah?', a: 'No. Visiting historical Ziyarat sites is not a required part of performing Umrah. These visits are generally undertaken to learn about Islamic history and places connected with the Seerah.' },
    { q: 'Can I visit Makkah Ziyarat places in one day?', a: 'Yes, several sites can be combined in one private trip, but trying to visit every location in this guide in a single outing would make the itinerary rushed. Grouping locations geographically is more practical.' },
    { q: "Can elderly pilgrims visit Jabal al-Nour?", a: "Jabal al-Nour involves a steep climb to Cave Hira. Pilgrims should consider their physical ability before attempting the ascent. The Hira Cultural District at the foot of the mountain provides an alternative for visitors who don't want to climb." },
    { q: 'Can I book a private car for Makkah Ziyarat?', a: 'Yes. A private vehicle can be arranged for a Ziyarat itinerary. Send your pickup location, date, passenger count and preferred sites to request a quote.' },
    { q: 'Should I book a return transfer?', a: 'For a private Ziyarat outing, arranging the return journey in advance is convenient, particularly when travelling with family or elderly passengers.' },
];

export default function BestZiyaratPlacesPage() {
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
                        <span>Best Ziyarat Places</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">Makkah Ziyarat</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        15 Best Ziyarat Places<br />
                        <span className="text-emerald-300">in Makkah: Complete Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Makkah is best known for Masjid al-Haram and the Kaaba, but the city and surrounding Holy Sites are also connected with important moments from Islamic history. Many pilgrims choose to visit these places during an Umrah or Hajj stay to learn more about the Seerah and the history of the pilgrimage.
                    </p>
                </div>
            </section>

            {/* Important note */}
            <div className="bg-amber-50 border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-amber-950 text-sm">
                    <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-amber-900 text-base mb-1">Important</h4>
                        <p className="leading-relaxed">
                            Ziyarat visits are not a required part of performing Umrah. The places below are historical and religious sites that pilgrims may choose to visit during their stay in Makkah.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tour booking callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Tour Booking Recommendation</h4>
                        <p className="leading-relaxed">
                            Public transport does not run directly to many historic sites like Jabal Thawr or Cave of Hira. Booking a private taxi or hiring a vehicle for a half-day tour is the most convenient way to visit these locations.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                {/* Before you plan */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Compass className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Before You Plan Your Makkah Ziyarat</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Not every site below is the same type of destination. Some are historical places connected with the life of the Prophet Muhammad ﷺ, while Mina, Arafat and Muzdalifah are Holy Sites associated with the rites of Hajj.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The sites are also spread around Makkah, so visiting several of them in one outing is generally easier by private vehicle than trying to walk between them. For elderly pilgrims, families and groups, consider booking a private SUV or van according to your passenger and luggage requirements.
                    </p>
                </section>

                {/* The 15 places */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">15 Ziyarat Places in Makkah</h2>
                    </div>
                    <div className="space-y-6">
                        {historicalSites.map((site) => (
                            <div key={site.title} className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-bold text-emerald-900 mb-2">{site.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{site.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to plan */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-900">How to Plan a Makkah Ziyarat Tour</h2>
                    <p className="text-gray-700 leading-relaxed">
                        You don't need to visit every location in one trip. A practical approach is to group sites by geography.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Short Makkah Historical Route</h4>
                            <ul className="text-gray-600 text-xs space-y-1 list-disc pl-4">
                                <li>Jabal al-Nour</li>
                                <li>Hira Cultural District</li>
                                <li>Jannat al-Mualla</li>
                                <li>Masjid al-Jinn</li>
                                <li>Jabal Thawr</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Holy Sites Route</h4>
                            <ul className="text-gray-600 text-xs space-y-1 list-disc pl-4">
                                <li>Arafat / Jabal al-Rahmah</li>
                                <li>Muzdalifah</li>
                                <li>Mina</li>
                                <li>Jamarat area</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Extended Historical Route</h4>
                            <ul className="text-gray-600 text-xs space-y-1 list-disc pl-4">
                                <li>Hudaibiyah</li>
                                <li>Hunayn</li>
                                <li>Al-Ju'ranah</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">This approach avoids spending the whole day crossing Makkah unnecessarily.</p>
                </section>

                {/* Booking */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-black text-gray-900">How to Book a Private Makkah Ziyarat Taxi</h2>
                    <p className="text-gray-700 leading-relaxed">
                        A private vehicle can be useful when several Ziyarat sites are on your itinerary, particularly for families, elderly pilgrims and groups. When requesting a quote, send:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Your hotel or pickup location</li>
                        <li>Date of travel and preferred start time</li>
                        <li>Number of passengers and luggage requirements</li>
                        <li>Sites you want to visit</li>
                        <li>Whether you need a return to your hotel</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        Vehicle selection should be based on the size of your group and luggage — vehicles like a GMC Yukon or Hyundai Staria provide extra comfort for families and senior citizens. Agree on the fare, including any waiting time, before starting your trip.
                    </p>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-900">Makkah Ziyarat FAQs</h2>
                    <div className="space-y-5">
                        {faqs.map((f) => (
                            <div key={f.q} className="border-b border-gray-100 pb-5">
                                <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Plan Your Makkah Ziyarat</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Choose the places that matter most to your group, arrange them by location and allow enough time at each stop rather than trying to rush through a long checklist.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966590209905?text=Hi,%20I%20want%20to%20book%20a%20Makkah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Request a Ziyarat Quote
                        </a>
                        <Link href="/locations/makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Makkah Taxi Service <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
