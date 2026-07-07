import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Info, Landmark, History, Utensils, ShoppingBag, Car } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jeddah Complete Travel Guide 2026 | History, Landmarks & Getting Around',
    description: 'Your ultimate guide to Jeddah, Saudi Arabia. Discover the rich history of the Red Sea gateway city, top tourist attractions, culture, food, and everything you need to know before visiting Jeddah in 2026.',
    keywords: [
        'Jeddah travel guide',
        'Jeddah history',
        'things to do in Jeddah',
        'Jeddah tourist attractions',
        'visiting Jeddah Saudi Arabia',
        'Jeddah for tourists 2026',
        'Al Balad Jeddah',
        'Jeddah Corniche',
        'Jeddah culture food',
        'getting around Jeddah',
        'Jeddah airport taxi transfer',
        'Jeddah Makkah transfer',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/complete-jeddah-guide/',
    },
    openGraph: {
        title: 'Jeddah Complete Travel Guide 2026 | History, Landmarks & Getting Around',
        description: 'Everything you need to know about Jeddah — history, must-see spots, food, culture and private transport options for international travelers.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/complete-jeddah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Jeddah famous for?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Jeddah is famous as the gateway to the holy cities of Makkah and Madinah, its UNESCO-listed Al Balad heritage district, the King Fahd Fountain (one of the world\'s tallest), its vibrant Corniche, and Red Sea diving. It is also Saudi Arabia\'s commercial capital and its most cosmopolitan city.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Jeddah Airport to the city?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best and most reliable way is a pre-booked private taxi or chauffeur service. Ride-hailing apps like Uber and Careem operate in Jeddah but surge pricing during peak pilgrimage seasons can be very high. A fixed-rate private transfer from King Abdulaziz International Airport (JED) to Jeddah city hotels costs from SAR 80–120 (~$21–32 USD) and is available 24/7.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can non-Muslims visit Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Jeddah is open to tourists of all faiths. Non-Muslims cannot enter Makkah or Madinah, but Jeddah itself is a welcoming, cosmopolitan city with world-class hotels, restaurants, museums, and beaches. Saudi Arabia\'s tourist visa is available to citizens of 60+ countries.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to visit Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time to visit Jeddah is between November and March when temperatures are comfortable (20–28°C / 68–82°F). Summer months (June–August) are extremely hot and humid. If visiting for Umrah, outside Ramadan and Hajj season is less crowded.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far is Jeddah from Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Jeddah is approximately 85–90 km from Makkah. By private taxi, the journey takes about 55–75 minutes depending on traffic. The Haramain High Speed Railway also connects Jeddah to Makkah in about 30 minutes.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jeddah Complete Travel Guide 2026: History, Culture, Landmarks & Transportation',
    description: 'Your ultimate guide to Jeddah, Saudi Arabia — history, top attractions, local culture, food, and practical travel tips for international visitors.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/complete-jeddah-guide/' },
};

export default function JeddahCompleteBlogPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Jeddah Complete Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌍 International Travel Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 15 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        The Complete Guide to<br />
                        <span className="text-emerald-300">Jeddah, Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        From ancient port city to modern cosmopolitan hub — everything you need to know about Jeddah before you visit. History, top landmarks, local culture, food, and how to get around.
                    </p>
                </div>
            </section>

            {/* Table of Contents */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Table of Contents</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {[
                            { href: '#history', label: '1. History of Jeddah' },
                            { href: '#geography', label: '2. Geography & Location' },
                            { href: '#landmarks', label: '3. Top Landmarks & Attractions' },
                            { href: '#culture', label: '4. Culture & People' },
                            { href: '#food', label: '5. Food & Cuisine' },
                            { href: '#shopping', label: '6. Shopping in Jeddah' },
                            { href: '#transport', label: '7. Getting Around Jeddah' },
                            { href: '#tips', label: '8. Practical Tips for Tourists' },
                            { href: '#faq', label: '9. FAQ' },
                        ].map((item) => (
                            <a key={item.href} href={item.href} className="text-sm text-emerald-800 hover:text-emerald-600 font-medium flex items-center gap-2 py-1">
                                <ArrowRight className="w-3 h-3" /> {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-20">

                {/* Section 1: History */}
                <section id="history">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <History className="w-5 h-5 text-emerald-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">History of Jeddah</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Jeddah is one of the oldest continuously inhabited cities in the world, with a recorded history spanning over <strong>2,500 years</strong>. Situated on the eastern shore of the Red Sea, it has served as a critical maritime hub connecting the Arabian Peninsula to Africa, the Indian subcontinent, and beyond.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ancient Origins</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Archaeological evidence suggests that the area around Jeddah was settled as early as <strong>3000 BCE</strong> by the Quda'a tribe, a branch of the ancient Yemenite peoples who migrated northward along the Red Sea coast. The city's name itself — "Jeddah" (جدة) — is popularly believed to derive from the Arabic word for "grandmother," owing to a local tradition that <strong>Eve (Hawwa), the mother of humanity,</strong> was buried here. Her tomb, known historically as <em>Hawaa Mosque</em>, was a place of pilgrimage for centuries until its demolition in the 20th century.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Strategically positioned on the ancient <strong>Incense Trade Route</strong>, Jeddah's port attracted spice merchants from India, silk traders from China, and frankincense caravans from Yemen and Oman. The city became a vital stop for ships crossing between the Arabian Peninsula and East Africa.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Islamic Era (7th Century CE)</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Jeddah's transformation from a fishing village to a major city accelerated dramatically with the rise of Islam. In <strong>647 CE</strong>, during the caliphate of Uthman ibn Affan (the third Caliph of Islam), Jeddah was officially designated as the <strong>maritime gateway to Makkah</strong> — the holiest city in Islam. This was a turning point that would shape Jeddah's identity for the next 1,400 years.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        As millions of Muslim pilgrims from across the world began converging on Makkah for Hajj and Umrah, Jeddah became their primary point of entry. Ships from Persia, Egypt, East Africa, and later Southeast Asia would dock at Jeddah's port, and pilgrims would complete the final leg of their journey to Makkah by land — a distance of approximately 85 km.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Ottoman Period (1517–1916)</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        In 1517, the Ottoman Empire extended its control over the Hejaz region (western Arabia), incorporating Jeddah into its vast empire. The Ottomans recognized Jeddah's strategic and religious importance and invested heavily in its infrastructure. They built the iconic <strong>city walls of Jeddah</strong> — massive coral-stone fortifications stretching 3.5 km around the old city — to protect against Portuguese naval attacks in the Red Sea.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        During this period, Jeddah flourished as an international merchant city. The city's distinctive <strong>Hejazi architecture</strong> emerged — tall coral-stone buildings adorned with ornate wooden balconies (called <em>Rawasheen</em>) that regulated airflow in the hot climate and provided privacy for residents above street level. Many of these centuries-old structures survive today in the Al Balad district.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Modern Saudi Era (1925–Present)</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        In 1925, following the defeat of the Hashemite rulers, King Abdulaziz Al Saud (Ibn Saud) incorporated Jeddah into his newly founded Kingdom of Saudi Arabia. The discovery of oil in 1938 and the subsequent economic boom transformed Jeddah from a medieval walled city into a modern metropolis.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The ancient city walls were demolished in the 1940s and 1950s to allow for urban expansion. Jeddah grew rapidly outward along the Red Sea coast, developing the modern Corniche, business districts, and world-class hotels. Today, Jeddah is home to over <strong>4.5 million people</strong> and serves as Saudi Arabia's commercial capital and most cosmopolitan city.
                    </p>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5 my-6">
                        <p className="text-emerald-900 font-semibold flex items-start gap-2">
                            <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
                            In 2014, UNESCO inscribed Al Balad (Historic Jeddah) as a <strong>World Heritage Site</strong>, recognizing its outstanding universal value as a historic mercantile city with unique Hejazi coral-stone architecture.
                        </p>
                    </div>
                </section>

                {/* Section 2: Geography */}
                <section id="geography">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-blue-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Geography & Location</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Jeddah is located on the <strong>eastern coast of the Red Sea</strong>, in the Hejaz region of western Saudi Arabia (known in Arabic as the Makkah Province). It sits at latitude 21.5°N and longitude 39.2°E.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        {[
                            { label: 'Distance to Makkah', value: '85 km (55 min drive)', icon: '🕌' },
                            { label: 'Distance to Madinah', value: '420 km (4 hr drive)', icon: '🌿' },
                            { label: 'Distance to Riyadh', value: '950 km (9 hr drive / 1 hr flight)', icon: '✈️' },
                            { label: 'Coastline', value: '100 km along the Red Sea', icon: '🌊' },
                            { label: 'Airport (JED)', value: 'King Abdulaziz International Airport', icon: '🛫' },
                            { label: 'Elevation', value: '15 meters above sea level (mostly flat)', icon: '📍' },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                                    <p className="text-gray-900 font-semibold">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        The city is divided into several key districts. The <strong>North Jeddah</strong> area contains the most modern developments — luxury hotels, shopping malls, the Jeddah Waterfront development, and NEOM-linked infrastructure projects. <strong>Central Jeddah</strong> is the commercial and diplomatic hub, home to embassies, banks, and corporate headquarters. <strong>Al Balad (Historic Jeddah)</strong> in the south preserves the ancient city's architecture and culture.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The Red Sea coast plays a central role in Jeddah's identity. The famous <strong>Jeddah Corniche</strong> — a 30-km seafront promenade — runs from the historic port in the south to the upscale Obhur Creek in the north, lined with parks, sculptures, restaurants, and the iconic King Fahd Fountain.
                    </p>
                </section>

                {/* Section 3: Landmarks */}
                <section id="landmarks">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <Landmark className="w-5 h-5 text-amber-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Top Landmarks & Attractions</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        Jeddah offers a unique blend of ancient heritage and modern spectacle. Here are the must-visit attractions for any international visitor:
                    </p>

                    <div className="space-y-8">
                        {[
                            {
                                name: '1. Al Balad — The Historic Heart (UNESCO World Heritage)',
                                body: `Al Balad (meaning "the town") is Jeddah's original walled city, a labyrinthine network of narrow alleyways, centuries-old coral-stone buildings, and historic mosques. It was inscribed as a UNESCO World Heritage Site in 2014 in recognition of its extraordinary Hejazi architecture.\n\nThe district's most distinctive feature is its ornately carved wooden balconies (Rawasheen), designed to catch the Red Sea breeze while maintaining privacy. Walking through Al Balad is like stepping back in time — you'll find ancient merchant houses, traditional souqs (markets) selling spices, fabrics, and perfumes, and historic mosques including Al-Shafi'i Mosque (one of the oldest in Jeddah).\n\nFor international visitors, Al Balad is best explored with a private driver who can drop you at key entry points and wait while you wander — the narrow streets are not accessible by car.`,
                                transport: '/transfers/al-balad-jeddah-taxi/',
                                transportLabel: 'Book Al Balad Private Tour Transfer',
                            },
                            {
                                name: '2. King Fahd Fountain — The World\'s Tallest',
                                body: `Standing in the Red Sea just off the Jeddah Corniche, the King Fahd Fountain (Saqqa Al-Jawhar) is the world's tallest fountain, shooting water up to 312 meters (1,024 feet) — higher than the Eiffel Tower. Illuminated at night by 500 spotlights, it is one of the most spectacular sights in the Arab world.\n\nThe fountain pumps 625 liters of seawater per second at speeds of up to 375 km/h, creating a visible plume that can be seen from throughout the city. It was gifted to the city by the late King Fahd and has become Jeddah's most iconic landmark.\n\nBest time to view: sunset and after dark, when the lighting creates a rainbow effect in the spray. Viewable from the Corniche promenade and from boat tours in the bay.`,
                                transport: '/jeddah-airport-transfer/',
                                transportLabel: 'Book Jeddah Airport to Corniche Transfer',
                            },
                            {
                                name: '3. The Jeddah Corniche — 30 km of Seafront Beauty',
                                body: `The Jeddah Corniche is the city's showpiece — a 30-kilometer seafront promenade along the Red Sea that serves as the social heart of the city. It is dotted with sculpture parks, fountains, beaches, cycling paths, and outdoor restaurants.\n\nKey highlights along the Corniche include the Abdul Raouf Khalil Museum (Jeddah's history museum), the Fakieh Aquarium, the Floating Mosque (Al-Rahma Mosque), which appears to float on the Red Sea at high tide, and the Saudi Aramco Jeddah headquarters. The northern end of the Corniche opens into the exclusive Obhur Creek area, a favored spot for boating and water sports.\n\nThe Corniche is safe, well-lit, and ideal for evening walks — a favorite activity for both residents and tourists.`,
                                transport: '/services/jeddah-corniche-hotel-taxi/',
                                transportLabel: 'Book Corniche Hotel Transfer',
                            },
                            {
                                name: '4. Al-Rahma Mosque — The Floating Mosque',
                                body: `One of Jeddah's most photographed sites, Al-Rahma Mosque (Mosque of Mercy) appears to float on the surface of the Red Sea at high tide. Built on pillars over the water, the mosque's pale pink and white exterior creates a stunning reflection in the sea, especially during golden hour.\n\nThe mosque is open to Muslim worshippers for all five daily prayers and can accommodate up to 1,500 people. Non-Muslim visitors are welcome to view it from the Corniche walkway. It is a symbol of Jeddah's unique relationship with the Red Sea.`,
                                transport: '/jeddah-airport-transfer/',
                                transportLabel: 'Book Jeddah City Tour Transfer',
                            },
                            {
                                name: '5. Red Sea Mall & Mall of Arabia — World-Class Shopping',
                                body: `Jeddah is home to some of the largest and most luxurious shopping malls in the Middle East. Red Sea Mall is one of the largest in Saudi Arabia, featuring 350+ international and local brands, a food court, entertainment areas, and a hypermarket. Mall of Arabia is even larger, with a sprawling 235,000 m² of retail space housing global luxury brands, a multi-screen cinema, and a vast dining district.\n\nFor international visitors, Jeddah's malls offer a comfortable, air-conditioned refuge from the heat, with global chains sitting alongside Saudi and regional brands. Tax-free shopping is an additional draw — Saudi Arabia's 15% VAT is charged on purchases, but the absence of import duties on many goods keeps prices competitive.`,
                                transport: '/transfers/mall-of-arabia-jeddah-taxi/',
                                transportLabel: 'Book Mall Transfer',
                            },
                            {
                                name: '6. Jeddah Waterfront (AMAALA Promenade) — New Jeddah',
                                body: `The Jeddah Waterfront development project is transforming the northern coastline of the city into a world-class leisure destination. Inspired by Dubai's Marina concept, it features a 14-kilometer waterfront promenade, luxury residential towers, five-star hotel clusters including the Rosewood Jeddah and Waldorf Astoria, and the Red Sea Global marina.\n\nThe new Jeddah Season festival — Saudi Arabia's annual entertainment mega-event — is centered around the waterfront and brings international performances, art installations, and food festivals to the city each year.`,
                                transport: '/vip-chauffeur-jeddah/',
                                transportLabel: 'Book VIP Waterfront Transfer',
                            },
                        ].map((landmark, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-black text-gray-900 mb-4">{landmark.name}</h3>
                                {landmark.body.split('\n\n').map((para, j) => (
                                    <p key={j} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                                ))}
                                <Link href={landmark.transport}
                                    className="inline-flex items-center gap-2 bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-600 transition-colors mt-2">
                                    🚗 {landmark.transportLabel} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 4: Culture */}
                <section id="culture">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Star className="w-5 h-5 text-purple-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Culture & People of Jeddah</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Jeddah has long been Saudi Arabia's most cosmopolitan and culturally diverse city, shaped by 1,400 years of pilgrimage traffic from across the Muslim world.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">A City of Many Origins</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Unlike Riyadh, which is historically a Najdi city with a more conservative culture, Jeddah has always been a port city open to the world. For centuries, Hajj pilgrims who arrived and could not afford to return home settled permanently in Jeddah. This created a uniquely multi-ethnic population: you will find Jeddawi families of Turkish, Indian, Hadrami (Yemeni), African, Malay, Egyptian, and Central Asian descent — all fully integrated as Saudi citizens. This diversity is visible in Jeddah's cuisine, architecture, and social customs.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Social Life & Openness</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Since Saudi Arabia's Vision 2030 social reforms, Jeddah has become increasingly open for international tourists. Women no longer require a male guardian (mahram) to travel, drive, or visit public places. Concerts, entertainment venues, mixed-gender spaces, and international events now take place regularly. Alcohol remains prohibited, but the social atmosphere in Jeddah's restaurants, cafes, and malls is relaxed and welcoming to foreigners.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Religion & Pilgrimage Culture</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Despite its cosmopolitan nature, Jeddah remains deeply rooted in Islamic culture. The five daily prayers are observed, and many shops briefly close during prayer times (approximately 15–20 minutes each). During Ramadan, eating and drinking in public during daylight hours is culturally sensitive and legally restricted. The spiritual atmosphere intensifies enormously during Hajj season (Dhul Hijjah month), when millions of pilgrims transit through the city.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                        <h4 className="font-bold text-amber-900 mb-3">🤝 Cultural Tips for International Visitors</h4>
                        <ul className="space-y-2 text-amber-800 text-sm">
                            <li>• Dress modestly in public — shoulders and knees covered (loose, light clothing recommended in the heat)</li>
                            <li>• In mosques: remove shoes, women cover hair</li>
                            <li>• Greet with "As-salamu alaykum" — you'll receive a warm response</li>
                            <li>• Photography of women and government buildings is sensitive — always ask permission</li>
                            <li>• Friday is the weekly day off — many businesses are closed or have reduced hours</li>
                        </ul>
                    </div>
                </section>

                {/* Section 5: Food */}
                <section id="food">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                            <Utensils className="w-5 h-5 text-red-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Food & Cuisine</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Jeddah is widely regarded as the food capital of Saudi Arabia — a city where Hejazi tradition meets global cuisine, shaped by centuries of pilgrimage trade.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                name: 'Kabsa',
                                desc: 'Saudi Arabia\'s national dish — fragrant basmati rice cooked with chicken or lamb in a rich blend of spices including saffron, cinnamon, cardamom, and dried lemon (loomi). Every Jeddawi family has their own variation.',
                                emoji: '🍛',
                            },
                            {
                                name: 'Mandi',
                                desc: 'A Yemeni-origin dish popular in Jeddah — meat (goat or chicken) slow-cooked in an underground tandoor oven until fall-off-the-bone tender, served on a bed of spiced rice. Al Shaab Mandi Restaurant is a Jeddah institution.',
                                emoji: '🥩',
                            },
                            {
                                name: 'Jeddawi Seafood',
                                desc: 'Fresh Red Sea fish — hammour (grouper), sultan ibrahim (red mullet), and shrimp — grilled or fried and served with flatbread and tamarind chutney. The Al-Balad fish market area is legendary.',
                                emoji: '🐟',
                            },
                            {
                                name: 'Mutabbaq',
                                desc: 'A stuffed pancake filled with minced meat, onions, and egg (savory) or banana and sugar (sweet). A street food staple in the Al Balad souk, particularly popular during Ramadan.',
                                emoji: '🫓',
                            },
                            {
                                name: 'Harees',
                                desc: 'A slow-cooked porridge of ground wheat and meat — a hearty, comforting dish especially popular during Ramadan and celebrations. Simple ingredients, deeply satisfying.',
                                emoji: '🥣',
                            },
                            {
                                name: 'Karak Tea & Qahwa',
                                desc: 'Karak (spiced milk tea) and Saudi Qahwa (cardamom-spiced green coffee) are the social lubricants of Jeddawi hospitality. Offered in homes, offices, and traditional cafes across the city.',
                                emoji: '☕',
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{item.emoji}</span>
                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Beyond traditional food, Jeddah has an thriving international dining scene. You'll find high-quality Japanese, Lebanese, Italian, Indian, and American restaurants throughout the Corniche, Al Hamra, and Al Rawdah districts. The city's café culture has exploded under Vision 2030, with specialty coffee shops and artisan bakeries across every neighborhood.
                    </p>
                </section>

                {/* Section 6: Shopping */}
                <section id="shopping">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-pink-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Shopping in Jeddah</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Jeddah is a premier shopping destination offering everything from ultra-luxury brands to authentic traditional souqs.
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            { name: 'Mall of Arabia', type: 'Mega Mall', desc: 'One of the largest malls in the Middle East. H&M, Zara, Gucci, Louis Vuitton, Carrefour hypermarket, VOX Cinemas.' },
                            { name: 'Red Sea Mall', type: 'Mega Mall', desc: '350+ stores across 3 floors. Strong international fashion brands, Apple Store, Foot Locker, and large food court.' },
                            { name: 'Serafi Megamall', type: 'Luxury Mall', desc: 'Jeddah\'s newest ultra-luxury mall. Hermès, Dior, Bottega Veneta, and fine dining experiences.' },
                            { name: 'Al Balad Souq', type: 'Traditional Market', desc: 'Authentic handicrafts, oud perfumes, Saudi dates, frankincense, prayer beads, and traditional clothing. Best for unique souvenirs.' },
                            { name: 'Al-Hawiyya Gold Souq', type: 'Gold Market', desc: 'Jeddah\'s famous gold and jewellery district. Exceptional prices on 21K and 24K gold pieces with intricate Hejazi craftsmanship.' },
                        ].map((shop, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <span className="text-2xl">🛍️</span>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-gray-900">{shop.name}</h3>
                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{shop.type}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{shop.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 7: Transport */}
                <section id="transport">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Car className="w-5 h-5 text-blue-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Getting Around Jeddah</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        Unlike many Western cities, Jeddah does not have a comprehensive public transport network. The city is built for cars — spread across a vast area with wide highways and limited pedestrian infrastructure outside of key areas like the Corniche. Here are your transport options as an international visitor:
                    </p>

                    <div className="space-y-6">
                        {[
                            {
                                title: '✅ Pre-Booked Private Taxi (Recommended)',
                                content: 'The best option for international visitors. A professional driver picks you up directly from the airport, hotel lobby, or any address with a name sign. Fixed prices agreed in advance — no surprises, no surge pricing. English-speaking drivers available. Ideal for airport transfers, intercity travel to Makkah/Madinah, and full-day city tours.',
                                highlight: true,
                                cta: true,
                            },
                            {
                                title: '📱 Uber & Careem',
                                content: 'Both apps are operational in Jeddah and work well for short trips within the city. However, during Hajj and Ramadan seasons, wait times increase dramatically and surge pricing can multiply fares by 3–5x. Also limited for intercity routes to Makkah and Madinah.',
                                highlight: false,
                                cta: false,
                            },
                            {
                                title: '🚆 Haramain High-Speed Railway',
                                content: 'Saudi Arabia\'s newest intercity rail connects Jeddah to Makkah (30 min), Madinah (2 hrs), and King Abdullah Economic City (KAEC). The Jeddah station is located in the city\'s north. While convenient for intercity travel, a private taxi to/from the railway station is still required.',
                                highlight: false,
                                cta: false,
                            },
                            {
                                title: '🚌 Public Bus (SAPTCO)',
                                content: 'Jeddah has a public bus network operated by SAPTCO, but routes are limited, bus stops are not well signed, schedules are irregular, and buses are generally not recommended for international tourists unfamiliar with the city.',
                                highlight: false,
                                cta: false,
                            },
                            {
                                title: '🚗 Car Rental',
                                content: 'International driving licenses from most countries are accepted in Saudi Arabia. Major rental companies (Hertz, Avis, Budget, Sixt) are present at KAIA Airport and in the city. Note: driving in Jeddah traffic can be intense, parking is challenging in old areas, and GPS is strongly recommended.',
                                highlight: false,
                                cta: false,
                            },
                        ].map((opt, i) => (
                            <div key={i} className={`rounded-2xl p-6 border ${opt.highlight ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-100'}`}>
                                <h3 className={`text-lg font-bold mb-3 ${opt.highlight ? 'text-emerald-900' : 'text-gray-900'}`}>{opt.title}</h3>
                                <p className={`leading-relaxed ${opt.highlight ? 'text-emerald-800' : 'text-gray-600'}`}>{opt.content}</p>
                                {opt.cta && (
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                                            <Phone className="w-4 h-4" /> Book via WhatsApp (English)
                                        </a>
                                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                                            Airport Transfer Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Transfer Distance Table */}
                    <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-gray-900 text-white px-6 py-4">
                            <h3 className="font-bold text-lg">Key Transfer Distances from Jeddah</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Destination</th>
                                        <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Distance</th>
                                        <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Drive Time</th>
                                        <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Private Taxi From</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { dest: 'KAIA Airport → City Center', dist: '25 km', time: '30–40 min', price: 'SAR 80–120' },
                                        { dest: 'Jeddah → Makkah Al Haram', dist: '85 km', time: '55–75 min', price: 'SAR 300–600' },
                                        { dest: 'Jeddah → Madinah', dist: '420 km', time: '4 hrs', price: 'SAR 600–800' },
                                        { dest: 'Jeddah → Riyadh', dist: '950 km', time: '9 hrs', price: 'SAR 1,400+' },
                                        { dest: 'Jeddah → KAEC', dist: '100 km', time: '1 hr 15 min', price: 'SAR 200–280' },
                                        { dest: 'Jeddah Port → Makkah', dist: '85 km', time: '1 hr', price: 'SAR 300–600' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-5 py-3 font-medium text-gray-800">{row.dest}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.dist}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.time}</td>
                                            <td className="px-5 py-3 font-bold text-emerald-700">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                            <p className="text-xs text-gray-500">All prices are for standard Sedan. Family SUVs (GMC Yukon XL, Hyundai Staria) available at higher rates. Book via WhatsApp for confirmed fixed pricing.</p>
                        </div>
                    </div>
                </section>

                {/* Section 8: Practical Tips */}
                <section id="tips">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <Info className="w-5 h-5 text-green-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Practical Tips for International Visitors</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            {
                                title: '🛂 Visa',
                                content: 'Citizens of 60+ countries can obtain a Saudi tourist e-visa online in minutes at visitsaudi.com. Cost is SAR 300 (~$80 USD), valid for 1 year, multiple entry, 90 days per visit. Visa-on-arrival is available at KAIA Airport for eligible nationalities.',
                            },
                            {
                                title: '💰 Currency',
                                content: 'Saudi Riyal (SAR). 1 USD ≈ 3.75 SAR (fixed peg). ATMs are widely available. Credit cards accepted at hotels, malls, and most restaurants. Cash still preferred at souqs and small shops.',
                            },
                            {
                                title: '🌡️ Climate',
                                content: 'Jeddah is hot and humid year-round. Nov–Mar: 20–28°C (pleasant). Apr–May / Sep–Oct: 30–38°C (warm). Jun–Aug: 38–46°C + high humidity (very challenging). Pack light, breathable clothing.',
                            },
                            {
                                title: '📡 SIM Card & Internet',
                                content: 'STC, Mobily, and Zain offer prepaid tourist SIMs at the KAIA Airport arrivals hall. 30-day data plans (10–50GB) available from SAR 30–80. 5G coverage is excellent across Jeddah. Most hotels and cafes offer free WiFi.',
                            },
                            {
                                title: '🏥 Health & Safety',
                                content: 'Jeddah is a very safe city for tourists. No specific vaccinations required for Saudi Arabia (check your country\'s travel advisory). Tap water is technically safe but bottled water is universally preferred and cheap. Private hospitals (Saudi German Hospital, Fakeeh Hospital) provide world-class medical care.',
                            },
                            {
                                title: '📞 Emergency Numbers',
                                content: 'Police: 911 | Ambulance: 911 | Fire: 911 (unified emergency number) | Tourist Police: 920000897. Our driver WhatsApp (+966 569 487 569) is also available 24/7 for any transport assistance during your stay.',
                            },
                        ].map((tip, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 9: FAQ */}
                <section id="faq">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq: any, i: number) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-black mb-4">Ready to Explore Jeddah?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Book your private English-speaking chauffeur for seamless travel from Jeddah Airport to your hotel, Makkah, Madinah, and every landmark in between.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20visiting%20Jeddah%20and%20need%20a%20taxi%20transfer" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> WhatsApp Us in English
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Airport Transfer <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
