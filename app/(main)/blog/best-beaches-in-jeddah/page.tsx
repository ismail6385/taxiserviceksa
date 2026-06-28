import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Waves, Sun, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Beaches in Jeddah 2026 | Red Sea Beach Guide for Tourists',
    description: 'Discover the best beaches in Jeddah, Saudi Arabia. From private luxury beach clubs to free public Red Sea shores — complete guide with entry fees, transport tips, and what to expect in 2026.',
    keywords: [
        'best beaches in Jeddah',
        'Jeddah beach guide',
        'Red Sea beaches Jeddah',
        'Jeddah beach clubs',
        'Obhur Creek beach Jeddah',
        'free beach Jeddah',
        'private beach Jeddah',
        'Jeddah beach for tourists',
        'swimming in Jeddah',
        'Jeddah Red Sea swimming',
        'Jeddah beach clubs 2026',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-beaches-in-jeddah/',
    },
    openGraph: {
        title: 'Best Beaches in Jeddah 2026 | Red Sea Beach Guide for Tourists',
        description: 'From Obhur Creek private beach clubs to the public Corniche beaches — discover where to swim, snorkel and relax on Jeddah\'s beautiful Red Sea coastline.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-beaches-in-jeddah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Are there public beaches in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Jeddah has several public beaches along the Corniche that are free to access. The most popular are Al-Hamra Beach, Al-Shati Beach, and the beaches near Al-Nuzha Park. These are family-friendly and open to all nationalities. Men and women are welcome, though modest swimwear is expected at public beaches.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the best private beach clubs in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best private beach clubs in Jeddah include Obhur Beach Club, Al-Nawras Beach Club, Jeddah Waterfront Beach, Nakheel Beach Club, and the hotel beach clubs at Waldorf Astoria Jeddah - Qasr Al Sharq and Ritz-Carlton Jeddah. Most beach clubs require advance reservations and charge SAR 150–400 per person entry with food and drink credit included.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can tourists swim in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Swimming is fully permitted in Jeddah. The Red Sea waters around Jeddah are warm (25–30°C), clear, and generally calm with excellent visibility for snorkeling. Tourist women can wear regular swimwear at private beach clubs. At public beaches, modest swimwear (one-piece or rash guards) is more appropriate. The water quality is excellent and the Red Sea coral reefs near Jeddah are some of the world\'s most beautiful.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to visit Jeddah beaches?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time for Jeddah beaches is November to April. Sea temperatures range from 24–27°C (perfect for swimming) and air temperatures are comfortable at 22–30°C. From May to October, air temperatures exceed 40°C and humidity is high, making outdoor beach visits challenging. Most locals visit beaches in the late afternoon and evenings year-round to avoid the worst heat.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get to Obhur Creek beaches from Jeddah city center?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Obhur Creek is located approximately 20 km north of central Jeddah, about a 25–35 minute drive. The best way is a pre-booked private taxi or ride-hailing app (Uber/Careem). A fixed-rate private transfer from central Jeddah hotels to Obhur Creek costs approximately SAR 60–90 one way. Book via WhatsApp at +966 569 487 569 for a confirmed fixed rate.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Beaches in Jeddah 2026 — Complete Red Sea Beach Guide',
    description: 'Discover the best beaches in Jeddah — public Red Sea shores, luxury private beach clubs, snorkeling spots, and everything tourists need to know about swimming in Jeddah.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/best-beaches-in-jeddah/' },
};

const beaches = [
    {
        rank: 1,
        name: 'Obhur Creek (Khalij Obhur) — Jeddah\'s Premier Beach Destination',
        type: 'Private Beach Clubs & Creek',
        emoji: '⛵',
        badge: '#1 Beach Destination',
        badgeColor: 'bg-blue-600 text-white',
        location: '20 km North of Central Jeddah',
        entryFee: 'Beach clubs: SAR 150–400/person',
        bestFor: 'Families, Water Sports, Seafood Dining',
        waterSports: ['Jet Ski', 'Banana Boat', 'Parasailing', 'Kayaking', 'Snorkeling'],
        gradient: 'from-blue-50 to-cyan-50',
        border: 'border-blue-200',
        accentBg: 'bg-blue-600',
        description: `Obhur Creek is without question the finest beach and water leisure destination in all of Jeddah — and arguably in the entire western region of Saudi Arabia. This natural inlet of the Red Sea, stretching approximately 40 km north of the city, has been developed into a premium coastal resort zone that combines private beach clubs, luxury villas, seafood restaurants, and world-class water sports in one stunning setting.

The creek's waters are calm, clear, and turquoise — protected from the open Red Sea swells by the natural geography of the inlet. This makes it ideal for all ages and swimming abilities, from small children paddling in the shallows to experienced snorkelers exploring the coral formations offshore. The water temperature ranges from a comfortable 25°C in winter to a warm 30°C in the peak summer months.

The beach club scene at Obhur is thriving and diverse. Premium clubs like Nakheel Beach Club, Al-Nawras, and several boutique resort clubs offer day passes that include sunbed and umbrella rental, use of swimming pools, access to private jetties, and credit toward food and drinks. Most clubs have full service restaurants serving extraordinary fresh Red Sea seafood — the grilled hammour (grouper) and shrimp machboos at the waterfront restaurants here are considered among the finest in Saudi Arabia.`,
        tips: [
            'Reserve beach club day passes at least 1–2 days in advance, especially for weekends',
            'Friday afternoons are extremely busy — visit on weekday mornings for a peaceful experience',
            'Jet ski rental: SAR 150–200 for 30 minutes, available directly from beach operators',
            'The northern end of Obhur Creek (Obhur Al-Shamaliyah) is more exclusive and quieter than the southern entry',
            'Best fresh seafood restaurants: arrive by 1pm before the lunch rush',
        ],
    },
    {
        rank: 2,
        name: 'Al-Hamra Beach — Jeddah\'s Most Popular Public Beach',
        type: 'Public Beach (Free)',
        emoji: '🏖️',
        badge: 'Free Entry',
        badgeColor: 'bg-green-600 text-white',
        location: 'Al Hamra District, Central Corniche',
        entryFee: 'Free',
        bestFor: 'Families, Casual Swimming, Sunsets',
        waterSports: ['Swimming', 'Beach Volleyball', 'Fishing'],
        gradient: 'from-emerald-50 to-green-50',
        border: 'border-emerald-200',
        accentBg: 'bg-emerald-600',
        description: `Al-Hamra Beach is Jeddah's most beloved and accessible public beach — a free, well-maintained stretch of Red Sea shoreline in the Al Hamra district on the city's central Corniche. It is the beach that Jeddawi families have visited for generations and remains the most popular free swimming spot in the city for both residents and tourists.

The beach extends for approximately 2 km along a wide, sandy coastline with clear, calm Red Sea water. The sea floor transitions from fine sand to patchy reef coral, making it suitable for both casual wading and snorkeling. The water clarity is excellent — on calm days, visibility underwater exceeds 10 meters even close to shore. There are no strong currents, and the beach is protected by a gentle breakwater, making it safe for children and non-swimmers.

The beach is lined with palm trees, public seating areas, and landscaped parks — part of the broader Jeddah Corniche beautification project. Nearby you'll find food stalls and cafes, public restroom facilities, and ample parking. In the evenings, the beach becomes a social hub — families spread picnic mats, children play in the shallows, and the setting sun over the Red Sea creates spectacular golden-hour views with the King Fahd Fountain visible in the distance.`,
        tips: [
            'Arrive before 9am for a peaceful morning swim with the beach to yourself',
            'The beach is busiest after sunset — families arrive in large groups for evening picnics',
            'Modest swimwear (one-piece, rash guards) is appropriate at this public beach',
            'Bring your own snorkeling gear — rental is not available at public beaches',
            'The stretch nearest to the Ritz-Carlton hotel has the cleanest sand and water',
        ],
    },
    {
        rank: 3,
        name: 'Ritz-Carlton Jeddah Beach — Luxury Seaside',
        type: 'Five-Star Hotel Beach',
        emoji: '🏨',
        badge: 'Luxury Hotel Beach',
        badgeColor: 'bg-amber-600 text-white',
        location: 'Al Hamra Corniche, Central Jeddah',
        entryFee: 'SAR 300–500/person (day pass with credit)',
        bestFor: 'Luxury Travellers, Corporate Guests, Honeymooners',
        waterSports: ['Swimming Pool', 'Watersports on Request', 'Snorkeling'],
        gradient: 'from-amber-50 to-yellow-50',
        border: 'border-amber-200',
        accentBg: 'bg-amber-600',
        description: `The Ritz-Carlton Jeddah's private beachfront is the most exclusive and meticulously maintained beach experience in Jeddah. Situated on a private peninsula jutting into the Red Sea, the hotel's beach club offers a level of service and privacy that is unmatched anywhere on the Jeddah coastline.

The beach itself is impeccably maintained — raked fine white sand, perfectly aligned sun loungers with plush cushions, and beach umbrellas arranged in neat rows along 300 meters of exclusive Red Sea frontage. The water in front of the hotel is exceptionally clear, with a sandy bottom and healthy coral patches visible just below the surface. Hotel guests and day-pass holders have the beach to themselves, with a remarkably low density of visitors even on weekends.

Day pass guests receive full access to the hotel's three swimming pools (including a stunning infinity pool facing the Red Sea), the private beach area, beach butler service, and SAR credit toward food and beverages at the beach restaurant. The menu features fresh salads, sandwiches, mezze, and fresh juices in a relaxed outdoor setting. The entire experience feels more like a private Mediterranean resort than anything typically associated with Saudi Arabia.`,
        tips: [
            'Non-hotel day passes must be booked in advance by contacting the hotel concierge',
            'The infinity pool offers better Red Sea views than the beach itself — worth the upgrade',
            'Couples and honeymooners: request the private cabana option for additional seclusion',
            'Business dress code applies in the hotel lobby — beach attire only in the beach/pool zone',
            'Excellent base for day trips to Makkah — the hotel concierge can arrange private transfers',
        ],
    },
    {
        rank: 4,
        name: 'Waldorf Astoria Qasr Al Sharq Beach — Palatial Opulence',
        type: 'Ultra-Luxury Hotel Beach',
        emoji: '👑',
        badge: 'Ultra VIP Experience',
        badgeColor: 'bg-purple-600 text-white',
        location: 'North Corniche, Jeddah Waterfront',
        entryFee: 'SAR 400–600/person (day pass)',
        bestFor: 'VIP Guests, Special Occasions, Gulf Royalty',
        waterSports: ['Private Infinity Pool', 'Watersports Charter', 'Yacht Rental'],
        gradient: 'from-purple-50 to-violet-50',
        border: 'border-purple-200',
        accentBg: 'bg-purple-700',
        description: `The Waldorf Astoria Jeddah - Qasr Al Sharq (Palace of the East) offers the most palatial beach and pool experience in all of Saudi Arabia. Built in the style of a traditional Arabian palace with sweeping arches, turquoise tilework, and dramatic Persian-influenced gardens, the hotel's beachfront is a destination in its own right — rivaling anything available in Dubai or Abu Dhabi.

The hotel's private beach club features an extraordinary sequence of three interconnected pools terraced down toward the Red Sea, each progressively closer to the water. The main infinity pool is one of the largest hotel pools in Saudi Arabia, facing west directly toward the Red Sea horizon — a view that becomes magnificent during the Jeddah sunset. Beyond the pools, a private sandy beach with individually positioned four-poster canopied daybeds extends along the hotel's exclusive Red Sea frontage.

The beach club experience here is more than just sun and sea — it is a full day retreat. Beach butlers attend to every need, delivering fresh-squeezed juices, artisan mocktails (no alcohol in Saudi Arabia), and a full à la carte menu from the hotel's beach restaurant. The signature fresh hammour (Red Sea grouper) and mezze served on the terrace overlooking the water make this one of the finest lunch experiences in Jeddah.`,
        tips: [
            'Book day passes at least 3 days in advance — extremely limited availability',
            'Sunset from the infinity pool terrace is one of Jeddah\'s great unmissable experiences',
            'Private beach cabanas can be booked for full-day exclusive use',
            'Complimentary non-alcoholic welcome drinks are offered to all day-pass guests',
            'Adjacent to the Jeddah Waterfront promenade — combine for a perfect full day',
        ],
    },
    {
        rank: 5,
        name: 'Al-Shati Beach — Family-Friendly Free Beach',
        type: 'Public Beach (Free)',
        emoji: '🌴',
        badge: 'Free Entry',
        badgeColor: 'bg-green-600 text-white',
        location: 'Al Shati District, North Corniche',
        entryFee: 'Free',
        bestFor: 'Large Families, Picnics, Evening Walks',
        waterSports: ['Swimming', 'Fishing', 'Beach Games'],
        gradient: 'from-teal-50 to-emerald-50',
        border: 'border-teal-200',
        accentBg: 'bg-teal-600',
        description: `Al-Shati Beach (meaning "the shore" in Arabic) is Jeddah's most expansive free public beach — a wide, long stretch of Red Sea shoreline in the upscale Al Shati district of north Jeddah that serves as the outdoor living room for the city's northern residential neighborhoods. It runs parallel to the Corniche road and is accessible from multiple entry points.

The beach at Al-Shati is wider and more open than Al-Hamra further south, with a long gradual entry into the sea that makes it particularly safe and popular with families with small children. The seabed at Al-Shati transitions from fine compacted sand in the shallows to small coral patches in deeper water — making it a good snorkeling spot for those who venture further from shore. The water is exceptionally clear year-round.

The area surrounding the beach has been significantly upgraded as part of Jeddah's Corniche beautification works, with modern landscaped parks, illuminated walking paths, outdoor gyms, children's play areas, and coffee kiosks added along the beachfront. In the evening, Al-Shati Beach transforms into one of the city's most pleasant outdoor spaces — a promenade of families, joggers, and couples enjoying the sea breeze against the backdrop of the illuminated North Corniche.`,
        tips: [
            'The northern section of Al-Shati Beach (near Shangri-La Hotel) has the best water clarity',
            'Al-Rahma Floating Mosque is located at the southern end of Al-Shati Beach — combine both',
            'Evening visits (after 6pm) are ideal — cooler temperatures and beautiful Corniche lighting',
            'Street food vendors set up along the beach road in the evenings — try fresh corn and mango with chili salt',
            'Parking is free along the Corniche road but fills up quickly on Thursday/Friday evenings',
        ],
    },
    {
        rank: 6,
        name: 'Durrat Al-Arus — Jeddah\'s Hidden Resort Beach (1 hr away)',
        type: 'Resort Beach (Day Trip)',
        emoji: '🏝️',
        badge: 'Day Trip Escape',
        badgeColor: 'bg-orange-600 text-white',
        location: '70 km South of Jeddah (1 hour drive)',
        entryFee: 'SAR 200–350/person (resort day pass)',
        bestFor: 'Pristine Nature, Coral Reef Snorkeling, Couples',
        waterSports: ['Snorkeling', 'Diving', 'Kayaking', 'Glass-Bottom Boat'],
        gradient: 'from-orange-50 to-amber-50',
        border: 'border-orange-200',
        accentBg: 'bg-orange-600',
        description: `Durrat Al-Arus is Jeddah's best-kept secret for beach lovers — a stunning integrated resort development located 70 km south of the city on an exceptionally pristine stretch of Red Sea coastline. The journey takes approximately 60 minutes by private car along the scenic coastal highway, and the dramatic improvement in water clarity and coral reef health compared to the city beaches makes the trip absolutely worthwhile.

The resort complex features an artificial island network with private chalets and villas, several hotel accommodation options, and a large beach club with direct access to a spectacular section of Red Sea reef. The water at Durrat Al-Arus is visibly cleaner and clearer than anywhere in the city — visibility can exceed 20 meters on calm days, revealing an extraordinary underwater world of table corals, brain corals, reef fish, and occasional turtles just meters from the beach.

The snorkeling here is the best accessible from Jeddah without a boat trip — you can walk directly from the beach into waist-deep water and immediately encounter healthy coral formations teeming with life. Glass-bottom boat tours depart from the resort's jetty for non-swimmers who want to experience the reef. Kayak and paddleboard rental is available, and PADI-certified dive trips can be arranged to deeper offshore sites.`,
        tips: [
            'Book a private transfer for the day — the 70 km coastal drive is best experienced comfortably',
            'Bring reef-safe sunscreen — conventional sunscreen damages the coral reef ecosystem',
            'The resort accommodation (overnight chalets) allows access to uncrowded beaches at dawn — magical',
            'Best snorkeling: incoming tide in the morning provides the clearest visibility',
            'Ideal for a romantic day escape or a family adventure — far less crowded than Obhur Creek',
        ],
    },
    {
        rank: 7,
        name: 'Jeddah Waterfront Beach — Modern Seaside Promenade',
        type: 'Public Beach / Resort Area',
        emoji: '🌅',
        badge: 'New Development',
        badgeColor: 'bg-slate-600 text-white',
        location: 'North Jeddah Waterfront Development',
        entryFee: 'Free (public promenade), Beach clubs: SAR 200+',
        bestFor: 'Couples, Dining, Architecture, Sunset Views',
        waterSports: ['Swimming', 'Marina Boat Rides', 'Paddleboarding'],
        gradient: 'from-slate-50 to-gray-50',
        border: 'border-slate-200',
        accentBg: 'bg-slate-700',
        description: `The Jeddah Waterfront redevelopment project has created a stunning new beachfront and marina district in the north of the city that combines accessible public beach space with upscale dining, world-class hotels, and a working yacht marina — all within a beautifully designed 14-kilometer promenade.

The public beach sections integrated within the Waterfront development are among the cleanest and most modern beach facilities in Jeddah. White sand has been imported and graded, the water entry is gentle and clean, and the surrounding promenade provides a stunning backdrop of architectural excellence — the towers of the Rosewood and Waldorf Astoria hotels rising behind the beach, luxury yachts moored at the adjacent marina.

What makes the Waterfront Beach distinct is its evening atmosphere. Unlike traditional city beaches that wind down after sunset, the Waterfront promenade comes fully alive after dark. The restaurants and cafes lining the waterfront terrace create a vibrant, cosmopolitan ambiance with the Red Sea on one side and the illuminated skyline on the other. Al fresco dining with fresh seafood, live background music, and the cool evening Red Sea breeze makes this one of Jeddah's great evening experiences.`,
        tips: [
            'The sunset from the Waterfront promenade is one of the most spectacular in Jeddah',
            'Fine dining at Rosewood or Waldorf beach restaurants should be reserved 2–3 days ahead',
            'The marina area offers short boat tours of the bay — book directly from the dock',
            'The public beach sections are accessible free of charge — park at the Waterfront car park (SAR 5/hour)',
            'Jeddah Season events (Nov–Feb) take place on the Waterfront — check for entertainment programs',
        ],
    },
];

export default function BestBeachesJeddahPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Best Beaches in Jeddah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-500/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-400">🌊 Beach Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 10 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Best Beaches in<br />
                        <span className="text-cyan-300">Jeddah, Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Jeddah sits on the Red Sea — one of the world's most beautiful bodies of water. From free public beaches to ultra-luxury private beach clubs, here's your complete guide to the best coastal experiences in the city.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20a%20Jeddah%20beach" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Beach Transfer
                        </a>
                        <Link href="/vip-chauffeur-jeddah/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all">
                            Chauffeur Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Facts Bar */}
            <div className="bg-cyan-50 border-b border-cyan-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Beaches Listed', value: '7', icon: '🏖️' },
                            { label: 'Free Beaches', value: '3', icon: '🆓' },
                            { label: 'Sea Temperature', value: '25–30°C', icon: '🌡️' },
                            { label: 'Best Season', value: 'Nov – Apr', icon: '☀️' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-cyan-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-black text-cyan-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Intro */}
            <div className="max-w-4xl mx-auto px-4 pt-12 pb-4">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                    <Waves className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                        <h2 className="font-bold text-blue-900 mb-2 text-lg">Why Jeddah's Beaches Are Special</h2>
                        <p className="text-blue-800 leading-relaxed">
                            The Red Sea is widely considered one of the world's top 5 most biodiverse marine environments — home to over 1,200 species of fish and 200 types of coral found nowhere else on earth. Jeddah's 100 km of coastline gives direct access to this extraordinary underwater world. Water visibility regularly exceeds 15–20 meters even near shore, and the absence of strong tides or currents makes it safe and accessible for all swimming abilities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Beach Cards */}
            <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
                {beaches.map((beach) => (
                    <article key={beach.rank} className={`rounded-3xl border ${beach.border} bg-gradient-to-br ${beach.gradient} overflow-hidden shadow-sm`}>
                        <div className="p-8 pb-0">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${beach.accentBg} text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0`}>
                                        #{beach.rank}
                                    </div>
                                    <div>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${beach.badgeColor} inline-block mb-1`}>{beach.badge}</span>
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{beach.type}</p>
                                    </div>
                                </div>
                                <span className="text-4xl">{beach.emoji}</span>
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{beach.name}</h2>

                            {/* Quick Info */}
                            <div className="grid sm:grid-cols-3 gap-3 mb-6">
                                <div className="bg-white/70 rounded-xl p-3 border border-white text-center">
                                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Location</p>
                                    <p className="text-sm font-bold text-gray-800">{beach.location}</p>
                                </div>
                                <div className="bg-white/70 rounded-xl p-3 border border-white text-center">
                                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Entry Fee</p>
                                    <p className="text-sm font-bold text-gray-800">{beach.entryFee}</p>
                                </div>
                                <div className="bg-white/70 rounded-xl p-3 border border-white text-center">
                                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Best For</p>
                                    <p className="text-sm font-bold text-gray-800">{beach.bestFor}</p>
                                </div>
                            </div>

                            {/* Water Sports Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {beach.waterSports.map((sport) => (
                                    <span key={sport} className="inline-flex items-center gap-1 text-xs bg-white/80 text-gray-700 px-3 py-1.5 rounded-full border border-white font-medium">
                                        <Waves className="w-3 h-3" /> {sport}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="px-8 pb-6">
                            {/* Description */}
                            {beach.description.split('\n\n').map((para, i) => (
                                <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                            ))}

                            {/* Tips */}
                            <div className="bg-white/60 rounded-2xl p-5 mb-6 border border-white">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-widest flex items-center gap-2">
                                    <Sun className="w-4 h-4 text-amber-500" /> Insider Tips
                                </h3>
                                <ul className="space-y-2">
                                    {beach.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-cyan-500 font-bold flex-shrink-0 mt-0.5">→</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20${encodeURIComponent(beach.name.split('—')[0].trim())}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
                                    <Phone className="w-4 h-4" /> Book Transfer
                                </a>
                                <Link href="/vip-chauffeur-jeddah/"
                                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
                                    <MapPin className="w-4 h-4" /> Chauffeur Options
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}

                {/* What to Pack Section */}
                <section className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-600" /> What to Pack for Jeddah Beaches
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { item: 'Reef-safe sunscreen (SPF 50+)', note: 'Regular sunscreen damages Red Sea coral — reef-safe brands are available in Jeddah pharmacies' },
                            { item: 'Rash guard or swim shirt', note: 'Useful for UV protection during long water sessions and appropriate for public beaches' },
                            { item: 'Snorkel set', note: 'Bring your own — rental is limited at public beaches. Available at Carrefour and sporting goods stores' },
                            { item: 'Water sandals / reef shoes', note: 'Essential for rocky beach entries and walking on coral — the seafloor can be uneven' },
                            { item: 'Reusable water bottle', note: 'Jeddah sun is intense — 2–3 liters per person per day recommended. Staying hydrated is critical' },
                            { item: 'Cash (SAR)', note: 'Many beach operators and food stalls prefer cash. Carry SAR 100–200 in small bills for beach extras' },
                        ].map((p, i) => (
                            <div key={i} className="flex gap-3 bg-white rounded-xl p-4 border border-amber-100">
                                <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{p.item}</p>
                                    <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{p.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Beach FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq: any, i: number) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white rounded-3xl p-10 text-center">
                    <Waves className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Ready for Your Beach Day?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Book a private transfer to any Jeddah beach or beach club. Fixed rates, 24/7 availability, English-speaking drivers, and meet & greet service from your hotel.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20transfer%20to%20Obhur%20Creek%20beach%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> WhatsApp Beach Transfer
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Airport to Beach <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
