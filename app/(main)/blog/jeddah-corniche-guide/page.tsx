import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Waves, Sun, Camera, Navigation, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete Guide to Jeddah Corniche 2026 | What to See, Do & Eat',
    description: 'Your complete guide to the Jeddah Corniche — the 30 km Red Sea promenade. Discover top attractions, best restaurants, hotels, walking routes, the King Fahd Fountain, and how to get there in 2026.',
    keywords: [
        'Jeddah Corniche guide',
        'Jeddah Corniche attractions',
        'things to do Jeddah Corniche',
        'Jeddah Corniche restaurants',
        'Jeddah Corniche hotels',
        'King Fahd Fountain Jeddah',
        'Al-Rahma Mosque Jeddah Corniche',
        'Jeddah waterfront promenade',
        'Jeddah Corniche walk',
        'visiting Jeddah Corniche 2026',
        'Jeddah Corniche nightlife',
        'Jeddah Corniche map',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jeddah-corniche-guide/',
    },
    openGraph: {
        title: 'Complete Guide to Jeddah Corniche 2026 | What to See, Do & Eat',
        description: 'Everything you need to know about the Jeddah Corniche — 30 km of Red Sea seafront, iconic landmarks, restaurants, hotels and how to make the most of your visit.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/jeddah-corniche-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How long is the Jeddah Corniche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Jeddah Corniche stretches approximately 30 kilometers along the Red Sea coast, running from the historic Al Balad district in the south to the exclusive Obhur Creek area in the north. It is one of the longest seafront promenades in the Middle East.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to visit the Jeddah Corniche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time to visit the Jeddah Corniche is in the evening, from about 5pm onward, when temperatures cool and the promenade lights up. For the King Fahd Fountain spectacle, visit after sunset (8–11pm). The best months are November to March when daytime temperatures are comfortable for walking.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is the Jeddah Corniche free to visit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Jeddah Corniche promenade is entirely free to walk and enjoy. Individual attractions along the Corniche — such as the Fakieh Aquarium or Al-Shallal Theme Park — charge separate entry fees. Restaurants and cafes have their own pricing. Parking along the Corniche road is generally free or SAR 5/hour in designated lots.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you walk the entire Jeddah Corniche?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The full 30 km Corniche is too long to walk in one go, but dedicated cycling and walking lanes run its entire length. Most visitors focus on the Central Corniche section (5–7 km between the King Fahd Fountain and Al-Rahma Mosque) which contains the main landmarks. This section takes 1.5–2 hours to walk at a leisurely pace.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get to the Jeddah Corniche from the airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'King Abdulaziz International Airport (JED) is approximately 25–30 km north of the Central Corniche. A pre-booked private taxi costs SAR 80–120 and takes 30–40 minutes. Uber and Careem also operate the route. Ask to be dropped at "Al-Hamra Corniche" or "Jeddah Corniche, King Fahd Fountain area" for the best starting point.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to Jeddah Corniche 2026 — Attractions, Restaurants, Hotels & Tips',
    description: 'Your complete guide to the Jeddah Corniche — a 30 km Red Sea seafront promenade and the cultural heart of Jeddah, Saudi Arabia.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/jeddah-corniche-guide/' },
};

const zones = [
    {
        id: 'south',
        name: 'South Corniche — Al Balad to Al Hamra',
        emoji: '🏛️',
        color: 'amber',
        distance: 'km 0–8',
        highlights: ['Al Balad UNESCO Heritage', 'Historic Jeddah Port', 'Al-Shafi\'i Mosque', 'Traditional Fish Market', 'Abdul Raouf Khalil Museum'],
        description: 'The southern section of the Corniche transitions from the ancient Al Balad heritage district into the established Al Hamra residential neighborhood. This stretch carries the deepest historical layers of the city — you can see the remains of the old Ottoman walls near the port, the traditional fishing harbor where dhow boats still dock, and the distinctive coral-stone architecture of the heritage district rising behind the waterfront.\n\nThe Al Hamra area along this section is one of Jeddah\'s most beautiful residential neighborhoods — grand old villas, mature palm trees lining wide boulevards, and a relaxed, affluent atmosphere that feels distinctly different from the modern northern parts of the city. The beach along Al Hamra is one of the cleanest free public beaches in Jeddah, with excellent water clarity and beautiful views of the King Fahd Fountain in the distance.',
        vibe: 'Historic & Residential',
        bestTime: 'Morning',
    },
    {
        id: 'central',
        name: 'Central Corniche — Al Hamra to Al Shati',
        emoji: '⛲',
        color: 'blue',
        distance: 'km 8–18',
        highlights: ['King Fahd Fountain', 'Al-Rahma Floating Mosque', 'Corniche Sculpture Park', 'Public Beaches', 'Ritz-Carlton Jeddah', 'Hilton Jeddah'],
        description: 'The Central Corniche is the heart of the Jeddah waterfront experience — the most iconic, most photographed, and most visited section of the promenade. This 10-km stretch contains virtually all of Jeddah\'s globally recognized landmarks: the King Fahd Fountain shooting 312 meters into the sky over the Red Sea, the Al-Rahma Floating Mosque appearing to hover on the water\'s surface, and the international luxury hotel strip running from the Ritz-Carlton to the Hilton.\n\nThe promenade itself at this section is at its grandest — wide sculpted walkways, beautifully maintained gardens, illuminated fountains at ground level, outdoor sculptures, and designated family picnic areas with direct sea views. The cycling lane running the full length is busy from dawn to dusk with residents. In the evenings, this section transforms into Jeddah\'s outdoor social centre — families, couples, and tourists fill the walkways, and the atmosphere has an energy that rivals any comparable waterfront in the Gulf.',
        vibe: 'Iconic & Buzzing',
        bestTime: 'Sunset to Late Evening',
    },
    {
        id: 'north',
        name: 'North Corniche — Al Shati to Obhur',
        emoji: '🏨',
        color: 'emerald',
        distance: 'km 18–30',
        highlights: ['Jeddah Waterfront Development', 'Waldorf Astoria Qasr Al Sharq', 'Rosewood Jeddah', 'Red Sea Marina', 'Fakieh Aquarium', 'Obhur Creek'],
        description: 'The North Corniche represents Jeddah\'s Vision 2030 ambition made physical — a dramatic transformation of formerly underdeveloped coastline into a world-class luxury destination. The centerpiece is the Jeddah Waterfront development, where the Waldorf Astoria, Rosewood, and a cluster of premium residential towers create a skyline that rivals Dubai Marina.\n\nBeyond the hotels, the North Corniche becomes progressively more residential and exclusive as it approaches Obhur Creek — the 40 km natural inlet that serves as Jeddah\'s premium coastal resort zone. The pace here is calmer and more private than the central section, with luxury villas behind high walls, private beach clubs accessible only to members or day-pass holders, and an atmosphere of quietly confident wealth that characterizes the preferred neighborhoods of Jeddah\'s elite.',
        vibe: 'Luxury & Modern',
        bestTime: 'Afternoon & Evening',
    },
];

const landmarks = [
    {
        name: 'King Fahd Fountain',
        emoji: '⛲',
        category: 'World Record Landmark',
        details: 'Height: 312 meters (1,024 ft) — taller than the Eiffel Tower. Pumps 625 liters/second. Illuminated by 500 spotlights at night.',
        bestTime: 'After sunset — spectacular light show',
        entryFee: 'Free (viewable from Corniche)',
        tips: 'Best viewed from the promenade directly opposite. Boat tours available for close-up views from the bay.',
    },
    {
        name: 'Al-Rahma Floating Mosque',
        emoji: '🕌',
        category: 'Iconic Architecture',
        details: 'Built on Red Sea pillars — appears to float at high tide. Capacity 1,500 worshippers. Pink & white Hejazi exterior with stunning sea reflections.',
        bestTime: 'High tide + sunrise for magical reflection',
        entryFee: 'Free (exterior viewing for all; interior for Muslims)',
        tips: 'Check tide tables for Jeddah — high tide creates the floating effect. Dawn photos are exceptional.',
    },
    {
        name: 'Abdul Raouf Khalil Museum',
        emoji: '🏺',
        category: 'City History Museum',
        details: '5,000+ artifacts spanning pre-Islamic Arabia to modern Saudi era. Hajj & pilgrimage gallery, ancient Islamic manuscripts, Red Sea trade history.',
        bestTime: 'Weekday morning',
        entryFee: 'SAR 15–25 per person',
        tips: 'Excellent English descriptions. Combine with a walk along the South Corniche for context.',
    },
    {
        name: 'Corniche Sculpture Park',
        emoji: '🗿',
        category: 'Outdoor Art',
        details: 'A curated collection of large-scale sculptures and installations displayed along 3 km of the Central Corniche promenade. Free to visit.',
        bestTime: 'Golden hour for photography',
        entryFee: 'Free',
        tips: 'Many sculptures are by Saudi artists — look for the descriptive plaques. The park is especially beautiful at night when lit.',
    },
    {
        name: 'Al-Shallal Theme Park',
        emoji: '🎡',
        category: 'Family Entertainment',
        details: 'Largest indoor theme park in Jeddah. Roller coasters, ice rink, bowling, cinema, outdoor rides with Red Sea views.',
        bestTime: 'Late afternoon — opens at 3pm',
        entryFee: 'SAR 50–100 (day pass)',
        tips: 'The outdoor area faces the sea — evening rides with Corniche views are magical.',
    },
    {
        name: 'Fakieh Aquarium',
        emoji: '🐠',
        category: 'Marine Life',
        details: '200+ Red Sea species. Walk-through shark tunnel, dolphin shows, sea lion performances, waterpark section.',
        bestTime: 'Weekday morning',
        entryFee: 'SAR 60–80 per person',
        tips: 'Dolphin show runs at fixed times — check schedule on arrival. Book online to skip queues.',
    },
];

const restaurants = [
    {
        name: 'Mövenpick Corniche Restaurant',
        type: 'International Fine Dining',
        priceRange: 'SAR 150–300/person',
        specialty: 'International cuisine with panoramic Red Sea views from every table',
        location: 'Mövenpick Hotel, Central Corniche',
        bestFor: 'Special occasions, business lunches',
    },
    {
        name: 'Nakheel Seafood Restaurant',
        type: 'Fresh Red Sea Seafood',
        priceRange: 'SAR 80–200/person',
        specialty: 'Live Red Sea fish, grilled hammour, shrimp machboos, fresh calamari',
        location: 'Corniche Road, near Obhur Creek',
        bestFor: 'Authentic local seafood experience',
    },
    {
        name: 'Fuego — Ritz-Carlton Jeddah',
        type: 'Upscale Latin Grill',
        priceRange: 'SAR 200–400/person',
        specialty: 'Premium grilled meats, fresh ceviche, sunset Corniche views from terrace',
        location: 'Ritz-Carlton Jeddah, Al Hamra',
        bestFor: 'Luxury dining, romantic dinners',
    },
    {
        name: 'Left Bank — Jeddah Waterfront',
        type: 'Modern International',
        priceRange: 'SAR 120–250/person',
        specialty: 'European-inspired menu with Red Sea marina views, extensive mocktail menu',
        location: 'Jeddah Waterfront Promenade, North Corniche',
        bestFor: 'Casual upscale dining, groups, couples',
    },
    {
        name: 'Corniche Street Food Strip',
        type: 'Street Food & Casual',
        priceRange: 'SAR 10–40/person',
        specialty: 'Fresh corn, mango chaat, shawarma, karak tea — the authentic local experience',
        location: 'Central Corniche promenade, near parks',
        bestFor: 'Budget dining, families, local atmosphere',
    },
    {
        name: 'Aqua Restaurant — Waldorf Astoria',
        type: 'Ultra-Luxury Dining',
        priceRange: 'SAR 300–600/person',
        specialty: 'Red Sea fish, Japanese-Arabic fusion, full marina and sea view setting',
        location: 'Waldorf Astoria Qasr Al Sharq, North Corniche',
        bestFor: 'VIP entertainment, special occasions',
    },
];

const hotels = [
    { name: 'The Ritz-Carlton Jeddah', stars: 5, location: 'Al Hamra, Central Corniche', from: 'SAR 950/night', tag: 'Best Overall' },
    { name: 'Waldorf Astoria Qasr Al Sharq', stars: 5, location: 'North Corniche Waterfront', from: 'SAR 1,200/night', tag: 'Most Luxurious' },
    { name: 'Rosewood Jeddah', stars: 5, location: 'North Corniche Waterfront', from: 'SAR 1,100/night', tag: 'Newest 5-Star' },
    { name: 'Hilton Jeddah', stars: 5, location: 'Al Shati, North Corniche', from: 'SAR 750/night', tag: 'Best Value 5-Star' },
    { name: 'Shangri-La Jeddah', stars: 5, location: 'Ash Shati, Corniche', from: 'SAR 850/night', tag: 'Best Service' },
    { name: 'Mövenpick Hotel Jeddah', stars: 5, location: 'Central Corniche', from: 'SAR 600/night', tag: 'Best Corniche Views' },
];

export default function JeddahCornicheGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-950 via-cyan-950 to-slate-950 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.2) 0%, transparent 50%)' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Jeddah Corniche Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-500/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-400">🌊 Complete Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 12 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Complete Guide to<br />
                        <span className="text-cyan-300">Jeddah Corniche</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        The Jeddah Corniche is the most iconic 30 km stretch of Red Sea coastline in Saudi Arabia — a world-class promenade of iconic landmarks, luxury hotels, seafood restaurants, and breathtaking views. Here's everything you need to know.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20the%20Jeddah%20Corniche" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Corniche Transfer
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all">
                            Airport Transfer <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <div className="bg-cyan-50 border-b border-cyan-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Total Length', value: '30 km', icon: '📏' },
                            { label: 'Entry Fee', value: 'Free', icon: '🆓' },
                            { label: 'Hotels on Corniche', value: '10+', icon: '🏨' },
                            { label: 'Best Time', value: 'After 5pm', icon: '🌅' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-cyan-100">
                                <div className="text-2xl mb-1">{s.icon}</div>
                                <div className="text-xl font-black text-cyan-700">{s.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-20">

                {/* TOC */}
                <section>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">In This Guide</p>
                    <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-2 gap-2">
                        {[
                            { href: '#overview', label: '1. What is the Jeddah Corniche?' },
                            { href: '#zones', label: '2. The Three Corniche Zones' },
                            { href: '#landmarks', label: '3. Top Landmarks & Attractions' },
                            { href: '#restaurants', label: '4. Best Restaurants' },
                            { href: '#hotels', label: '5. Best Hotels on the Corniche' },
                            { href: '#activities', label: '6. Activities & Things to Do' },
                            { href: '#getting-there', label: '7. Getting to the Corniche' },
                            { href: '#tips', label: '8. Visitor Tips' },
                            { href: '#faq', label: '9. FAQ' },
                        ].map((item) => (
                            <a key={item.href} href={item.href} className="text-sm text-cyan-800 hover:text-cyan-600 font-medium flex items-center gap-2 py-1">
                                <ArrowRight className="w-3 h-3" /> {item.label}
                            </a>
                        ))}
                    </div>
                </section>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">What is the Jeddah Corniche?</h2>
                    <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                        The Jeddah Corniche (كورنيش جدة) is a 30-kilometer seafront promenade running along the entire eastern shore of the Red Sea within the city of Jeddah, Saudi Arabia. It is the social, cultural, and architectural spine of the city — the equivalent of Dubai's Marina Walk, Abu Dhabi's Corniche, or Nice's Promenade des Anglais, but on a grander scale and with a distinctly Arabian character.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-5">
                        First developed in the 1970s as part of Jeddah's rapid post-oil urbanization, the Corniche has been continuously expanded, upgraded, and beautified over five decades. Today it represents one of the finest urban waterfronts in the Middle East — a seamless blend of public parks, luxury hotels, world-class restaurants, iconic landmarks, family entertainment, and working fishing harbors.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        What makes the Jeddah Corniche extraordinary is its democratic spirit — it is simultaneously a place where Jeddah's wealthiest families dine at rooftop restaurants in five-star hotels and where ordinary families spread picnic blankets on the grass at 10pm, watching the King Fahd Fountain light up the night sky over the Red Sea. It belongs to everyone, and everyone uses it.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
                        <p className="text-blue-900 font-semibold flex items-start gap-2">
                            <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                            The Corniche was significantly enhanced as part of Saudi Vision 2030's "Jeddah Development" project, which invested billions of SAR in waterfront infrastructure, the Jeddah Waterfront mega-project in the north, and the ongoing restoration of the heritage harbor area in the south.
                        </p>
                    </div>
                </section>

                {/* Three Zones */}
                <section id="zones">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">The Three Corniche Zones</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The Corniche is best understood as three distinct zones, each with its own character, attractions, and atmosphere. Here's how to navigate them:
                    </p>
                    <div className="space-y-6">
                        {zones.map((zone) => (
                            <div key={zone.id} className={`rounded-3xl border-2 overflow-hidden ${
                                zone.color === 'amber' ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50' :
                                zone.color === 'blue' ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50' :
                                'border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50'
                            }`}>
                                <div className="p-7">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{zone.emoji}</span>
                                            <div>
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-1 ${
                                                    zone.color === 'amber' ? 'bg-amber-600 text-white' :
                                                    zone.color === 'blue' ? 'bg-blue-600 text-white' :
                                                    'bg-emerald-600 text-white'
                                                }`}>{zone.distance}</span>
                                                <h3 className="text-xl font-black text-gray-900">{zone.name}</h3>
                                            </div>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <p className="text-xs text-gray-500 uppercase font-bold">Vibe</p>
                                            <p className="font-bold text-gray-800 text-sm">{zone.vibe}</p>
                                            <p className="text-xs text-gray-500 mt-1">Best: {zone.bestTime}</p>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {zone.highlights.map((h) => (
                                            <span key={h} className="text-xs bg-white/80 text-gray-700 px-3 py-1.5 rounded-full border border-white font-medium">
                                                📍 {h}
                                            </span>
                                        ))}
                                    </div>

                                    {zone.description.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Landmarks */}
                <section id="landmarks">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Top Landmarks & Attractions</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The Corniche is home to some of Saudi Arabia's most iconic sights. Here are the must-see landmarks along the promenade:
                    </p>
                    <div className="space-y-4">
                        {landmarks.map((lm, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5">
                                <span className="text-4xl flex-shrink-0">{lm.emoji}</span>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-black text-gray-900 text-lg">{lm.name}</h3>
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{lm.category}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">{lm.details}</p>
                                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> <strong>Best Time:</strong> {lm.bestTime}</span>
                                        <span className="flex items-center gap-1"><Star className="w-3 h-3" /> <strong>Entry:</strong> {lm.entryFee}</span>
                                    </div>
                                    <p className="text-xs text-cyan-700 mt-2 font-medium">💡 {lm.tips}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Restaurants */}
                <section id="restaurants">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Best Restaurants on the Jeddah Corniche</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        The Corniche dining scene covers every budget and taste — from world-class hotel fine dining to beloved local seafood shacks and street food stalls. Here are the best options:
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {restaurants.map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-black text-gray-900 text-base leading-tight pr-2">{r.name}</h3>
                                    <span className="text-xs bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full font-bold whitespace-nowrap flex-shrink-0">{r.priceRange}</span>
                                </div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{r.type}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{r.specialty}</p>
                                <div className="flex flex-col gap-1 text-xs text-gray-500">
                                    <span><MapPin className="w-3 h-3 inline mr-1" />{r.location}</span>
                                    <span><Star className="w-3 h-3 inline mr-1" />Best for: {r.bestFor}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hotels */}
                <section id="hotels">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Best Hotels on the Jeddah Corniche</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Staying on the Corniche means waking up to Red Sea views and having the promenade at your doorstep. These are the top hotels along the waterfront:
                    </p>
                    <div className="space-y-3">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="font-black text-gray-900">{h.name}</h3>
                                        <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">{h.tag}</span>
                                    </div>
                                    <p className="text-xs text-gray-500">{h.location}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="flex text-amber-400">{'⭐'.repeat(h.stars)}</div>
                                    <p className="text-sm font-bold text-gray-900 mt-0.5">{h.from}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 text-center">
                        All Corniche hotels offer private airport and city transfers. Book a pre-arranged pickup via WhatsApp for guaranteed fixed rates without hotel markup.
                    </div>
                </section>

                {/* Activities */}
                <section id="activities">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Activities & Things to Do</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { emoji: '🚴', title: 'Cycling', desc: 'Dedicated cycle lanes run the full 30 km. Bikes available for rent at multiple points along the promenade. Dawn rides are spectacular.' },
                            { emoji: '🏃', title: 'Running & Walking', desc: 'The Corniche path is one of the best running routes in Saudi Arabia. Fully lit at night, scenic sea views throughout.' },
                            { emoji: '⛵', title: 'Bay Boat Tours', desc: 'Traditional dhow boats and modern speedboats offer short Red Sea tours from the Corniche waterfront, including close passes of the King Fahd Fountain.' },
                            { emoji: '📸', title: 'Photography', desc: 'The Corniche offers world-class photography opportunities — the Floating Mosque at dawn, the Fountain at night, and the Waterfront skyline at golden hour.' },
                            { emoji: '🎣', title: 'Fishing', desc: 'Local fishermen cast lines from the Corniche walls daily. Visitors can join informally — the Red Sea wall fishing culture is a beloved Jeddawi tradition.' },
                            { emoji: '🍦', title: 'Corniche Street Food', desc: 'The best people-watching in Jeddah. Fresh corn, mango with chili, camel milk ice cream, and Saudi karak tea from the promenade food carts.' },
                            { emoji: '🌅', title: 'Sunset Watching', desc: 'The Red Sea sunset from the Corniche is one of Jeddah\'s great free pleasures. The sun drops into the sea behind the horizon, turning the water golden.' },
                            { emoji: '🛥️', title: 'Water Sports at Obhur', desc: 'The northern Corniche connects to Obhur Creek where jet skiing, parasailing, banana boat rides and kayaking are available daily.' },
                        ].map((act, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4">
                                <span className="text-3xl flex-shrink-0">{act.emoji}</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{act.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Getting There */}
                <section id="getting-there">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Getting to the Jeddah Corniche</h2>
                    <div className="space-y-4">
                        {[
                            {
                                title: '✅ Private Taxi / Chauffeur (Best Option)',
                                highlight: true,
                                content: 'The most comfortable and reliable option. Tell your driver to drop you at "Al-Hamra Corniche" (for the central section near the King Fahd Fountain) or "Jeddah Waterfront" (for the northern luxury section). Fixed-rate transfers from KAIA Airport to the Corniche cost SAR 80–120. Book via WhatsApp for a confirmed rate.',
                            },
                            {
                                title: '📱 Uber & Careem',
                                highlight: false,
                                content: 'Both apps work well along the Corniche for point-to-point trips. Good for short hops between Corniche zones. Surge pricing can apply on Thursday/Friday evenings when the Corniche is at peak activity.',
                            },
                            {
                                title: '🚗 Self-Drive',
                                highlight: false,
                                content: 'The Corniche road runs parallel to the promenade its entire length. Parking areas are available throughout, mostly free or SAR 5/hour. Driving along the Corniche in the evening is a Jeddawi tradition in itself — the "Corniche cruise" is a beloved local pastime.',
                            },
                        ].map((opt, i) => (
                            <div key={i} className={`rounded-2xl p-6 border ${opt.highlight ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
                                <h3 className={`font-bold text-lg mb-2 ${opt.highlight ? 'text-emerald-900' : 'text-gray-900'}`}>{opt.title}</h3>
                                <p className={`leading-relaxed ${opt.highlight ? 'text-emerald-800' : 'text-gray-600'}`}>{opt.content}</p>
                                {opt.highlight && (
                                    <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20the%20Jeddah%20Corniche" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                                        <Phone className="w-4 h-4" /> Book Corniche Transfer on WhatsApp
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Distance Table */}
                    <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gray-900 text-white px-6 py-4">
                            <h3 className="font-bold">Distance to the Corniche from Key Points</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-5 py-3">From</th>
                                        <th className="text-left px-5 py-3">Distance</th>
                                        <th className="text-left px-5 py-3">Drive Time</th>
                                        <th className="text-left px-5 py-3">Private Taxi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { from: 'KAIA Airport (JED)', dist: '25–30 km', time: '30–40 min', price: 'SAR 80–120' },
                                        { from: 'Al Balad (Historic Jeddah)', dist: '3–5 km', time: '10–15 min', price: 'SAR 25–40' },
                                        { from: 'Mall of Arabia', dist: '8–12 km', time: '15–25 min', price: 'SAR 35–55' },
                                        { from: 'Jeddah Islamic Port', dist: '5 km', time: '15 min', price: 'SAR 30–45' },
                                        { from: 'Makkah (Holy Mosque)', dist: '90 km', time: '75 min', price: 'SAR 180–220' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-5 py-3 font-medium text-gray-800">{row.from}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.dist}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.time}</td>
                                            <td className="px-5 py-3 font-bold text-emerald-700">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Tips */}
                <section id="tips">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Practical Visitor Tips</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            { icon: '🌡️', title: 'Beat the Heat', tip: 'Visit after 4pm in summer. In winter (Nov–Mar), mornings and evenings are both comfortable. The evening sea breeze on the Corniche is a relief year-round.' },
                            { icon: '📷', title: 'Best Photo Spots', tip: 'King Fahd Fountain from directly opposite (after sunset). Al-Rahma Mosque at high tide dawn. Corniche Sculpture Park at golden hour. Waterfront marina from Rosewood terrace.' },
                            { icon: '👗', title: 'Dress Code', tip: 'Casual Western clothes are fine on the Corniche. Modest dress (covered shoulders/knees) is expected at public beaches. No restrictions on women\'s dress since Vision 2030 reforms.' },
                            { icon: '💰', title: 'Budget Tips', tip: 'The Corniche walk, promenade, parks, and views are all free. Budget SAR 30–60 for street food and drinks. Hotel and fine dining restaurants: SAR 150–400+ per person.' },
                            { icon: '🅿️', title: 'Parking', tip: 'Free parking on the Corniche side roads. Paid lots (SAR 5/hour) near major hotels. Thursday/Friday evenings: arrive early as lots fill by 8pm.' },
                            { icon: '🌙', title: 'Evening Magic', tip: 'The Corniche is at its most beautiful between 8pm–11pm. The King Fahd Fountain, Floating Mosque, Waterfront hotels, and promenade lights create an atmosphere that is genuinely world-class.' },
                        ].map((tip, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <div className="text-2xl mb-3">{tip.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{tip.tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Jeddah Corniche FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq: any, i: number) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Blogs */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">More Jeddah Guides</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Top 15 Places to Visit in Jeddah', href: '/blog/top-15-places-to-visit-in-jeddah/', emoji: '📍' },
                            { title: 'Best Beaches in Jeddah', href: '/blog/best-beaches-in-jeddah/', emoji: '🏖️' },
                            { title: 'Complete Jeddah Travel Guide', href: '/blog/complete-jeddah-guide/', emoji: '🗺️' },
                        ].map((b, i) => (
                            <Link key={i} href={b.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-cyan-300 transition-all flex gap-3 items-start">
                                <span className="text-2xl">{b.emoji}</span>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{b.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-blue-950 to-cyan-950 text-white rounded-3xl p-10 text-center">
                    <Waves className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Ready to Explore the Corniche?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Book a private taxi or chauffeur from your hotel or the airport to the Jeddah Corniche. English-speaking drivers, fixed rates, and 24/7 availability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20the%20Jeddah%20Corniche" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> WhatsApp Booking
                        </a>
                        <Link href="/services/jeddah-corniche-hotel-taxi/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Corniche Hotel Transfers <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
