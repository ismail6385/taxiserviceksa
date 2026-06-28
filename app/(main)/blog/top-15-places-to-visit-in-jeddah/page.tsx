import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Navigation, Camera } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Top 15 Places to Visit in Jeddah 2026 | Best Tourist Attractions',
    description: 'Discover the best places to visit in Jeddah, Saudi Arabia. From UNESCO-listed Al Balad to the King Fahd Fountain, floating mosque, Red Sea beaches and luxury malls — your complete Jeddah bucket list for 2026.',
    keywords: [
        'places to visit in Jeddah',
        'best tourist attractions Jeddah',
        'things to do in Jeddah',
        'Jeddah sightseeing guide',
        'top places Jeddah 2026',
        'Jeddah tourist spots',
        'Al Balad Jeddah',
        'King Fahd Fountain Jeddah',
        'Jeddah Corniche',
        'Al-Rahma Mosque Jeddah',
        'Jeddah landmarks',
        'visit Jeddah Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/top-15-places-to-visit-in-jeddah/',
    },
    openGraph: {
        title: 'Top 15 Places to Visit in Jeddah 2026 | Best Tourist Attractions',
        description: 'Discover the 15 best tourist attractions in Jeddah — Al Balad, King Fahd Fountain, Red Sea Corniche, floating mosque and more with transport tips.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/top-15-places-to-visit-in-jeddah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the top places to visit in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The top places to visit in Jeddah include Al Balad Historic District (UNESCO World Heritage), the King Fahd Fountain, the Jeddah Corniche, Al-Rahma Floating Mosque, Fakieh Aquarium, Red Sea Mall, the Jeddah Waterfront, and Obhur Creek. Jeddah also offers easy day trips to Makkah and Madinah for Muslim visitors.',
            },
        },
        {
            '@type': 'Question',
            name: 'How many days do you need to see Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Two to three days is enough to visit the main highlights of Jeddah comfortably. Day 1: Al Balad heritage district, Corniche, King Fahd Fountain at night. Day 2: Floating Mosque, shopping malls, Jeddah Waterfront. Day 3 (optional): Day trip to Makkah (for Muslims) or Red Sea beach clubs and Obhur Creek.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Jeddah good for tourists?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Jeddah is the most tourist-friendly city in Saudi Arabia. It has world-class hotels, diverse restaurants, excellent shopping, UNESCO heritage sites, Red Sea beaches and water sports, and a cosmopolitan atmosphere shaped by 1,400 years of international pilgrimage traffic. A Saudi tourist e-visa is available online for citizens of 60+ countries.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best way to get around Jeddah\'s attractions?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best way to see Jeddah\'s attractions is with a pre-booked private driver or chauffeur. Jeddah is a large, car-centric city and distances between attractions can be 10–25 km. A full-day private driver starting from your hotel costs from SAR 350–500 and eliminates the need to navigate traffic, find parking, or rely on surge-priced ride-hailing apps.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can non-Muslims visit Al Balad Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Al Balad is open to all visitors regardless of religion. The UNESCO World Heritage district welcomes tourists from around the world. You can walk its historic alleyways, visit traditional souqs, and admire the centuries-old coral-stone Hejazi architecture. Only the interior of active mosques requires respectful dress.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 15 Places to Visit in Jeddah 2026 — Best Tourist Attractions',
    description: 'Discover the 15 best places to visit in Jeddah, Saudi Arabia — from the UNESCO Al Balad heritage district to the King Fahd Fountain, Corniche, floating mosque and more.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/top-15-places-to-visit-in-jeddah/' },
};

const places = [
    {
        rank: 1,
        name: 'Al Balad — Historic Jeddah (UNESCO World Heritage)',
        category: 'Heritage & Culture',
        emoji: '🏛️',
        badge: 'UNESCO World Heritage',
        badgeColor: 'bg-amber-100 text-amber-800',
        bestTime: 'Morning (8am–12pm) or evening (4pm–8pm)',
        duration: '2–4 hours',
        entryFee: 'Free',
        description: `Al Balad is the undisputed crown jewel of Jeddah — the ancient walled city that earned UNESCO World Heritage status in 2014. Walking through its centuries-old labyrinthine alleyways is like stepping into a living museum.

The district's most iconic feature is its distinctive Hejazi architecture: towering coral-stone merchant houses, some dating back 500+ years, adorned with intricately carved wooden lattice balconies called Rawasheen. These overhanging balconies were engineering masterpieces — they caught the Red Sea breeze, provided natural cooling, and allowed women to observe street life while maintaining privacy.

Key highlights within Al Balad include the Nassif House (a grand 19th-century merchant residence now converted into a museum), Al-Shafi'i Mosque (one of the oldest surviving mosques in Jeddah), the historic Al-Alawi Souq (where you'll find traditional spices, oud perfume, and Saudi textiles), and dozens of restored old houses that now serve as boutique cafes, art galleries, and cultural centers.`,
        tips: [
            'Wear comfortable walking shoes — the streets are cobbled and narrow',
            'Visit early morning to avoid heat and tour groups',
            'Hire a local guide from the Jeddah Heritage Authority for deeper context',
            'The best photo angles are from the rooftops of restored heritage cafes',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Transfer to Al Balad Area',
        gradient: 'from-amber-50 to-orange-50',
        borderColor: 'border-amber-200',
        rankBg: 'bg-amber-600',
    },
    {
        rank: 2,
        name: 'King Fahd Fountain — World\'s Tallest Fountain',
        category: 'Iconic Landmark',
        emoji: '⛲',
        badge: 'World Record Holder',
        badgeColor: 'bg-blue-100 text-blue-800',
        bestTime: 'After sunset (8pm–11pm)',
        duration: '1–2 hours',
        entryFee: 'Free (viewable from Corniche)',
        description: `Standing in the Red Sea just off the Jeddah Corniche, the King Fahd Fountain — locally called Saqqa Al-Jawhar (Jewel of the Water) — is a global record-holder. It shoots saltwater from the Red Sea to a staggering height of 312 meters (1,024 feet), surpassing the Eiffel Tower in height. At full power, it pumps 625 liters of water per second at jet speeds of 375 km/h.

The fountain was gifted to the city by the late King Fahd Bin Abdulaziz and has operated since 1985. At night, 500 high-power spotlights illuminate the water plume in white light, creating a rainbow effect in the mist visible for miles across the bay. During Jeddah Season and national holidays, colored lights transform it into a spectacular light show.

The fountain operates on most evenings except during heavy winds. The best viewing spots are from the Corniche promenade directly opposite, from the restaurants of the Corniche hotels, or from chartered bay tour boats that pass within meters of the fountain's base.`,
        tips: [
            'Check fountain schedule — it does not operate in strong winds',
            'Best photography: 30 minutes after sunset with remaining blue sky',
            'Boat tours depart from the Corniche waterfront for close-up views',
            'The fountain spray creates a cooling mist on the promenade — refreshing in summer',
        ],
        transportLink: '/vip-chauffeur-jeddah/',
        transportLabel: 'Book VIP Corniche Evening Transfer',
        gradient: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        rankBg: 'bg-blue-600',
    },
    {
        rank: 3,
        name: 'The Jeddah Corniche — 30 km Seafront Promenade',
        category: 'Scenic Waterfront',
        emoji: '🌊',
        badge: 'Must-See',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        bestTime: 'Sunset to late evening',
        duration: 'Half day to full day',
        entryFee: 'Free',
        description: `The Jeddah Corniche is the city's heartbeat — a 30-kilometer continuous seafront promenade stretching from the ancient port of Al Balad in the south to the exclusive Obhur Creek resort area in the north. It is the most beloved public space in Jeddah and one of the most beautiful waterfronts in the Middle East.

Along its length, the Corniche transforms through several distinct zones. The Central Corniche features the sculpture park, public beaches, food trucks, and the best views of the King Fahd Fountain. The North Corniche is home to the luxury hotel strip — The Ritz-Carlton, Hilton, Waldorf Astoria, and Rosewood — as well as the Jeddah Waterfront development. The South Corniche transitions into the Al Balad heritage area and the historic fishing harbor.

Beyond its scenic beauty, the Corniche is Jeddah's outdoor living room. Families picnic on its lawns at night, cyclists ride its dedicated lanes at dawn, fishermen cast lines from its walls, and couples stroll along its illuminated paths. The Al-Rahma Floating Mosque sits on the water at the Corniche's midsection.`,
        tips: [
            'The Corniche is best experienced in the evenings — daytime heat can be intense',
            'Cycling lanes run the full length — bikes can be rented at several points',
            'The stretch in front of the Ritz-Carlton has the most scenic hotel views',
            'Combine with a Corniche restaurant dinner for the full experience',
        ],
        transportLink: '/services/jeddah-corniche-hotel-taxi/',
        transportLabel: 'Book Corniche Hotel Transfer',
        gradient: 'from-emerald-50 to-teal-50',
        borderColor: 'border-emerald-200',
        rankBg: 'bg-emerald-600',
    },
    {
        rank: 4,
        name: 'Al-Rahma Mosque — The Floating Mosque',
        category: 'Religious & Architectural',
        emoji: '🕌',
        badge: 'Iconic Architecture',
        badgeColor: 'bg-pink-100 text-pink-800',
        bestTime: 'High tide, morning or golden hour',
        duration: '30–60 minutes',
        entryFee: 'Free (Muslims only inside)',
        description: `Al-Rahma Mosque (Mosque of Mercy) is one of the most photographed and visually distinctive buildings in Saudi Arabia. Built on pillars directly over the Red Sea, the mosque appears to float on the water's surface at high tide — a breathtaking sight that makes it one of the most unique mosques in the world.

The mosque was constructed in 1985 and can accommodate up to 1,500 worshippers. Its exterior is finished in delicate pale pink and white hues that create a stunning reflection in the calm Red Sea waters, particularly during the golden hours of sunrise and sunset. The interior features traditional Islamic geometric tilework and a stunning collection of stained glass windows.

At low tide, the sea recedes to reveal the mosque's supporting pillars and a small sandy beach below. At high tide, the water rises almost to the base of the prayer hall, creating the iconic floating effect. Non-Muslim visitors are warmly welcome to view and photograph the mosque from the Corniche walkway, though entry into the prayer hall is restricted to Muslim worshippers during prayer times.`,
        tips: [
            'Check tide times for Jeddah — high tide provides the magical floating effect',
            'Best photographs from the public walkway directly opposite',
            'Sunrise photos have the softest light with the mosque reflected in still water',
            'The mosque is located in the Al Shati neighborhood, easy to combine with Corniche walk',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Jeddah City Tour Transfer',
        gradient: 'from-pink-50 to-rose-50',
        borderColor: 'border-pink-200',
        rankBg: 'bg-pink-600',
    },
    {
        rank: 5,
        name: 'Fakieh Aquarium — Red Sea Marine Life',
        category: 'Family & Entertainment',
        emoji: '🐠',
        badge: 'Family Favourite',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        bestTime: 'Weekday mornings',
        duration: '2–3 hours',
        entryFee: 'SAR 60–80 per person',
        description: `Fakieh Aquarium is Jeddah's premier marine attraction, home to an extraordinary collection of Red Sea marine life. The aquarium features over 200 species of fish, sharks, rays, sea turtles, and marine invertebrates drawn from the rich ecosystem of the Red Sea — one of the world's most biodiverse bodies of water.

The facility includes multiple walk-through tunnel aquariums where sharks and rays glide overhead, a dolphin and sea lion performance theater, a waterpark section for families, and a dedicated children's play area. The aquarium's central attraction is its large shark tank, where multiple species of reef sharks circle alongside giant groupers and schools of tropical fish.

The Fakieh complex has expanded significantly since Vision 2030 entertainment reforms, now including an outdoor amusement park section and a Jeddah Season entertainment zone during festival periods. It remains one of the most popular family destinations in Jeddah for both residents and international tourists.`,
        tips: [
            'Book tickets online in advance — queues can be long on weekends and school holidays',
            'Arrive early on weekdays for the best experience without crowds',
            'The dolphin show runs at fixed times — check the schedule at entry',
            'Combined family packages (aquarium + waterpark) offer better value',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Family Transfer in Jeddah',
        gradient: 'from-cyan-50 to-sky-50',
        borderColor: 'border-cyan-200',
        rankBg: 'bg-cyan-600',
    },
    {
        rank: 6,
        name: 'Jeddah Waterfront (AMAALA Promenade) — New Jeddah',
        category: 'Modern Development',
        emoji: '🏙️',
        badge: 'Vision 2030 Showcase',
        badgeColor: 'bg-violet-100 text-violet-800',
        bestTime: 'Evening',
        duration: '2–4 hours',
        entryFee: 'Free',
        description: `The Jeddah Waterfront is the most ambitious urban development in the city's modern history — a sweeping 14-kilometer seafront redevelopment project that is transforming the northern Corniche into a world-class destination comparable to Dubai Marina or Abu Dhabi's Corniche.

The project clusters Saudi Arabia's most prestigious hotel brands along a beautifully landscaped marina promenade: the Waldorf Astoria Jeddah - Qasr Al Sharq, Rosewood Jeddah, and the Red Sea Global Marina anchor the development. Between the hotels, an architectural promenade features luxury retail, fine dining restaurants with Red Sea views, outdoor art installations, and a working marina with luxury yachts and traditional dhow boats.

During Jeddah Season — Saudi Arabia's annual entertainment festival — the Waterfront transforms into the city's entertainment hub with international concerts, comedy shows, street food markets, and cultural performances. Even outside festival season, the evening ambiance of the illuminated promenade, fine dining options, and sunset views over the Red Sea make it one of Jeddah's most magical experiences.`,
        tips: [
            'The promenade is most atmospheric 1 hour before and after sunset',
            'Fine dining reservations at Rosewood and Waldorf restaurants should be booked 2–3 days ahead',
            'The marina area has beautiful photo opportunities with yachts and the Jeddah skyline',
            'Check Jeddah Season dates — the waterfront entertainment is world-class during the festival',
        ],
        transportLink: '/vip-chauffeur-jeddah/',
        transportLabel: 'Book VIP Waterfront Transfer',
        gradient: 'from-violet-50 to-purple-50',
        borderColor: 'border-violet-200',
        rankBg: 'bg-violet-600',
    },
    {
        rank: 7,
        name: 'Nassif House Museum — Inside a Merchant\'s Palace',
        category: 'Museum & Heritage',
        emoji: '🏠',
        badge: 'Historical Museum',
        badgeColor: 'bg-orange-100 text-orange-800',
        bestTime: 'Morning',
        duration: '1–1.5 hours',
        entryFee: 'Free',
        description: `Nassif House — Beit Nassif in Arabic — is one of the most historically significant buildings in all of Saudi Arabia. Built in 1881 by Omar Effendi Nassif, the head of one of Jeddah's most prominent merchant families, the house served as the residence of King Abdulaziz Al Saud upon his conquest of Jeddah in 1925.

The building is a magnificent example of traditional Hejazi architecture at its grandest scale — a seven-storey coral-stone structure with exquisitely carved wooden doors, high-ceilinged reception halls, and an iconic lone Neem tree in its courtyard that has stood for over 130 years and remains one of the oldest trees in Jeddah's historic district.

Today, the house operates as a cultural museum, with its rooms restored to reflect 19th-century Hejazi merchant life. Exhibits showcase traditional furniture, historic photographs, trading artifacts, and documents chronicling the city's commercial history. It is located in the heart of Al Balad, making it an essential stop on any heritage walk through the old city.`,
        tips: [
            'The 130-year-old Neem tree in the courtyard is a must-photograph',
            'Guided tours in English are available on request',
            'Combine with Al-Alawi Souq and Al-Shafi\'i Mosque nearby for a full Al Balad morning',
            'The upper floors offer views over Al Balad\'s roofscape',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Al Balad Transfer',
        gradient: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        rankBg: 'bg-orange-600',
    },
    {
        rank: 8,
        name: 'Obhur Creek — Jeddah\'s Luxury Waterfront Escape',
        category: 'Leisure & Beach',
        emoji: '⛵',
        badge: 'VIP Leisure Spot',
        badgeColor: 'bg-teal-100 text-teal-800',
        bestTime: 'Afternoon to evening',
        duration: 'Half day',
        entryFee: 'Free (beach clubs charge entry)',
        description: `Obhur Creek (Khalij Obhur) is Jeddah's most exclusive coastal leisure destination — a natural inlet of the Red Sea located 20 km north of the city center that has been developed into a premium waterfront resort area. The creek is famous for its clear, calm turquoise waters, luxury beach clubs, water sports facilities, seafood restaurants, and private villa compounds.

The area is particularly popular with Jeddah's elite and expatriate community. Weekends see the creek dotted with jet skis, speedboats, luxury yachts, and fishing boats. Upscale beach clubs along the waterfront offer private sunbeds, swimming pools, watersports rental, and full dining service in a relaxed beach resort atmosphere — unusual in the conservative Gulf context.

For international tourists, Obhur Creek offers the best combination of Red Sea swimming, water activities, and fine seafood dining in a safe, well-managed environment. The waterfront restaurants specializing in fresh grilled Red Sea fish are among the best seafood experiences in the entire kingdom.`,
        tips: [
            'Beach clubs require reservation — book by WhatsApp a day in advance',
            'Friday afternoons are peak time — weekday visits are much quieter',
            'Water sports (jet ski, parasailing, banana boat) can be booked directly at the creek',
            'The fresh grilled hammour (grouper) fish here is considered the best in Jeddah',
        ],
        transportLink: '/vip-chauffeur-jeddah/',
        transportLabel: 'Book Obhur Private Transfer',
        gradient: 'from-teal-50 to-emerald-50',
        borderColor: 'border-teal-200',
        rankBg: 'bg-teal-600',
    },
    {
        rank: 9,
        name: 'Mall of Arabia — Shopping Paradise',
        category: 'Shopping & Entertainment',
        emoji: '🛍️',
        badge: 'Largest Mall in Jeddah',
        badgeColor: 'bg-red-100 text-red-800',
        bestTime: 'Afternoon (after 2pm)',
        duration: '3–5 hours',
        entryFee: 'Free entry',
        description: `Mall of Arabia is the largest shopping mall in Jeddah and one of the biggest in the Middle East, spanning over 235,000 square meters of retail and entertainment space. It is the go-to destination for both international fashion shopping and family entertainment in the city.

The mall houses over 450 stores across three floors, from global luxury brands (Gucci, Louis Vuitton, Armani) on the premium level to high-street international fashion (H&M, Zara, Mango, Marks & Spencer) on the main floors. The electronics section features Apple Store, Samsung, and all major tech brands. The food court is one of the largest in Saudi Arabia, with over 100 restaurant and café options spanning international cuisines.

Beyond shopping, Mall of Arabia features a full-scale entertainment zone: VOX Cinemas (with IMAX and premium formats), a large gaming arcade, a dedicated children's play area, and during Jeddah Season, special entertainment activations with celebrity appearances and concerts.`,
        tips: [
            'The mall is busiest on Thursday and Friday evenings — early afternoon on weekdays is quieter',
            'Tax-free shopping: Saudi Arabia has no customs duty on many imported goods',
            'The food court on the 3rd floor has the widest variety of cuisines',
            'Valet parking available at all entrances for SAR 10',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Mall of Arabia Transfer',
        gradient: 'from-red-50 to-pink-50',
        borderColor: 'border-red-200',
        rankBg: 'bg-red-600',
    },
    {
        rank: 10,
        name: 'Abdul Raouf Khalil Museum — Jeddah\'s History in One Place',
        category: 'Museum',
        emoji: '🏺',
        badge: 'City History Museum',
        badgeColor: 'bg-yellow-100 text-yellow-800',
        bestTime: 'Morning',
        duration: '1.5–2 hours',
        entryFee: 'SAR 15–25 per person',
        description: `The Abdul Raouf Khalil Museum is Jeddah's most comprehensive historical museum, housing over 5,000 artifacts that document the city's history from pre-Islamic Arabia through to the modern Saudi era. Located on the Corniche Road, the museum is housed in a purpose-built traditional-style building with beautifully landscaped grounds.

The collection spans multiple thematic galleries: the pre-Islamic antiquities hall displays Stone Age tools, ancient pottery, and bronze artifacts excavated from sites across the Hejaz region. The Islamic period gallery traces the development of Jeddah as the gateway to Makkah, with manuscripts, maps, and navigational instruments from the golden age of Red Sea trade. The Hajj and Pilgrimage hall is particularly moving — it documents the stories of pilgrims from across the world who journeyed to Jeddah across the centuries, with historical photographs, pilgrim documents, and traditional pilgrimage garments.

For international visitors, this is one of the best single-stop contexts for understanding why Jeddah is what it is — a melting pot of civilizations created by the annual convergence of the Muslim world.`,
        tips: [
            'Excellent English descriptions accompany most exhibits',
            'The outdoor garden section has traditional archaeological display areas',
            'Photography permitted in most areas — check for signs',
            'Less crowded on weekday mornings — staff are very welcoming to international visitors',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Museum Transfer',
        gradient: 'from-yellow-50 to-amber-50',
        borderColor: 'border-yellow-200',
        rankBg: 'bg-yellow-600',
    },
    {
        rank: 11,
        name: 'Al-Shallal Theme Park — Family Entertainment',
        category: 'Family & Entertainment',
        emoji: '🎡',
        badge: 'Family Theme Park',
        badgeColor: 'bg-lime-100 text-lime-800',
        bestTime: 'Late afternoon to evening',
        duration: '3–5 hours',
        entryFee: 'SAR 50–100 (day pass)',
        description: `Al-Shallal Theme Park is Jeddah's largest integrated entertainment complex and one of the most popular family destinations in the western region of Saudi Arabia. Located on the Corniche, the complex combines an indoor theme park, ice skating rink, bowling alley, cinema, and a waterpark — all under one roof, making it ideal for the city's hot climate.

The park features over 30 rides and attractions spread across indoor and outdoor zones: the indoor section has roller coasters, thrill rides, a Ferris wheel, and a large carousel, while the outdoor section opens onto the Red Sea waterfront with bumper boats and outdoor rides. The Ice Land section houses one of the largest ice skating rinks in Saudi Arabia, regularly hosting ice shows and skating competitions.

Since Saudi Arabia's entertainment reforms under Vision 2030, Al-Shallal has significantly expanded its offerings, adding international food chains, a dedicated children's entertainment zone, and regular live entertainment events. It remains the most accessible large-scale entertainment complex for families visiting Jeddah.`,
        tips: [
            'Weekend evenings are very crowded — Thursday afternoons are the busiest',
            'Ice skating rink: bring socks and wear warm clothing in the ice area',
            'Combination day passes covering rides + ice skating offer the best value',
            'The waterpark section operates seasonally — confirm availability',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Family Theme Park Transfer',
        gradient: 'from-lime-50 to-green-50',
        borderColor: 'border-lime-200',
        rankBg: 'bg-lime-600',
    },
    {
        rank: 12,
        name: 'Serafi Megamall — Jeddah\'s Luxury Shopping Destination',
        category: 'Luxury Shopping',
        emoji: '💎',
        badge: 'Ultra-Luxury Mall',
        badgeColor: 'bg-slate-100 text-slate-800',
        bestTime: 'Afternoon',
        duration: '2–4 hours',
        entryFee: 'Free entry',
        description: `Serafi Megamall is Jeddah's newest and most luxurious shopping destination, launched as part of Saudi Arabia's broader push to attract high-spending international tourists and position Jeddah as a global luxury retail hub. The mall occupies a prime location in north Jeddah and has quickly established itself as the address for ultra-premium brand shopping in the kingdom.

The mall's brand portfolio is unmatched in the city: Hermès, Dior, Bottega Veneta, Balenciaga, Valentino, Brunello Cucinelli, and over 100 other international luxury labels fill its pristine, architecturally striking interior. The design of the mall itself is a destination — dramatic atrium spaces, gallery-like retail environments, and a refined atmosphere more akin to a European luxury department store than a conventional mall.

The dining level at Serafi houses some of the finest restaurants in Jeddah, including international celebrity chef concepts and local fine dining establishments that have drawn significant culinary attention. For international shoppers accustomed to luxury shopping in Paris, Milan, or Dubai, Serafi delivers a comparable experience in the heart of Saudi Arabia.`,
        tips: [
            'Luxury shopping in Saudi Arabia is VAT-inclusive — 15% VAT applies to all purchases',
            'The dining floor has some of the best restaurants in all of Jeddah — worth a dedicated visit',
            'Valet parking from SAR 15 — complimentary with minimum purchase at many stores',
            'The mall is quieter on weekday mornings — ideal for unhurried luxury shopping',
        ],
        transportLink: '/vip-chauffeur-jeddah/',
        transportLabel: 'Book VIP Shopping Transfer',
        gradient: 'from-slate-50 to-gray-50',
        borderColor: 'border-slate-200',
        rankBg: 'bg-slate-700',
    },
    {
        rank: 13,
        name: 'Red Sea Diving & Snorkeling — World-Class Underwater Experience',
        category: 'Adventure & Nature',
        emoji: '🤿',
        badge: 'World-Class Diving',
        badgeColor: 'bg-indigo-100 text-indigo-800',
        bestTime: 'October to May (best visibility)',
        duration: 'Half day to full day',
        entryFee: 'SAR 200–400 (dive tour)',
        description: `Jeddah's position on the Red Sea gives it access to one of the world's most spectacular marine ecosystems. The Red Sea is globally celebrated among divers for its extraordinary visibility (often 30+ meters), rich coral reef systems, and extraordinary diversity of marine life found nowhere else on earth.

The coastline around Jeddah offers accessible diving and snorkeling sites for all skill levels. The offshore reef systems teem with hundreds of species of reef fish, giant moray eels, hawksbill sea turtles, octopus, and occasional whale sharks and dolphins. The water temperature ranges from a comfortable 24°C in winter to 30°C+ in summer.

Several PADI-certified dive centers operate in Jeddah, offering half-day and full-day boat dive packages to offshore reef sites. For non-divers, glass-bottom boat tours depart from Obhur Creek for reef viewing without getting wet. Snorkeling directly from the beaches of Obhur Creek also reveals impressive shallow reef life accessible without any equipment or experience.`,
        tips: [
            'Best diving season: November to April for coolest water and best visibility',
            'Book with a PADI-certified dive center for safety — several operate from Obhur Creek',
            'No diving certification? Try a beginner "Discover Scuba" session in the calm protected waters',
            'Bring reef-safe sunscreen — regular sunscreen is harmful to coral reefs',
        ],
        transportLink: '/vip-chauffeur-jeddah/',
        transportLabel: 'Book Dive Site Transfer',
        gradient: 'from-indigo-50 to-blue-50',
        borderColor: 'border-indigo-200',
        rankBg: 'bg-indigo-600',
    },
    {
        rank: 14,
        name: 'Al-Balad Souq (Traditional Market) — Authentic Shopping',
        category: 'Shopping & Culture',
        emoji: '🌶️',
        badge: 'Authentic Experience',
        badgeColor: 'bg-rose-100 text-rose-800',
        bestTime: 'Late morning or evening',
        duration: '1–2 hours',
        entryFee: 'Free',
        description: `The traditional souqs of Al Balad offer an authentic shopping experience that no modern mall can replicate — a sensory immersion into centuries of Hejazi mercantile culture. The area encompasses several specialized markets, each trading in the goods that have defined Jeddah's character as a crossroads of global trade.

Al-Alawi Souq is the largest and most famous, occupying a historic commercial building at the heart of the old city. Its stalls overflow with loose spices (saffron, oud, dried lemon, sumac), frankincense and bakhoor incense burners, traditional Saudi perfumes (attar), hand-embroidered textiles from Yemen and Egypt, prayer beads, and intricately crafted silver jewelry. The aromas — oud wood smoke, spices, and rosewater — create an experience unique to the Arabian souq.

For international visitors, Al Balad's markets offer the most meaningful souvenirs from Saudi Arabia: hand-crafted items with genuine cultural significance, purchased from family traders whose ancestors have occupied the same stalls for generations. Bargaining is expected and respectful — always approach with a friendly smile.`,
        tips: [
            'Best souvenirs: Saudi saffron, oud perfume oil, hand-knotted prayer beads, and Yemeni silver',
            'Prices are negotiable — start at 60–70% of the asking price for non-fixed price items',
            'The covered sections of the souq provide shade and are more comfortable in summer',
            'Small-denomination cash (SAR 10–50 notes) is preferred by market vendors',
        ],
        transportLink: '/jeddah-airport-transfer/',
        transportLabel: 'Book Al Balad Souq Transfer',
        gradient: 'from-rose-50 to-pink-50',
        borderColor: 'border-rose-200',
        rankBg: 'bg-rose-600',
    },
    {
        rank: 15,
        name: 'Day Trip to Makkah Al-Mukarramah — The Holiest City',
        category: 'Spiritual & Religious',
        emoji: '🕌',
        badge: 'For Muslims Only',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        bestTime: 'Early morning for Fajr prayer, or evening for Isha',
        duration: 'Half day to full day',
        entryFee: 'Free (Umrah permit required)',
        description: `For Muslim visitors to Jeddah, a day trip to the holy city of Makkah Al-Mukarramah is not simply a tourist attraction — it is a profound spiritual obligation and one of the most significant experiences of a lifetime. Makkah lies just 85 km from Jeddah, approximately a 55–75 minute drive, making it perfectly accessible as a half or full-day excursion from the city.

The heart of Makkah is the Masjid Al-Haram — the Grand Mosque — which surrounds the Kaaba (the cube-shaped structure that Muslims around the world face during daily prayers) and the Zamzam Well. The Tawaf (circumambulation of the Kaaba) and Sa'i (the walking between Safa and Marwa hills) together constitute the Umrah pilgrimage, which Muslims from around the world travel thousands of miles to perform. To complete these rites within 2 hours of leaving your Jeddah hotel is a profoundly moving experience.

Beyond Al-Haram, Makkah's religious sites include Jabal Al-Nour (the Cave of Hira, where the first Quranic revelation descended), Jabal Thawr, the Mina plains, and Arafat — all significant sites of Islamic history. Non-Muslims are not permitted to enter Makkah.`,
        tips: [
            'Book a private driver who is Muslim-certified to enter Makkah checkpoints',
            'Obtain your Umrah permit through the Nusuk app (Saudi government platform)',
            'Dress in Ihram (white pilgrim garments for men) before the Miqat boundary — your driver can guide you to the right entry point',
            'Book your transfer in advance during Ramadan — thousands travel from Jeddah to Makkah nightly',
        ],
        transportLink: '/routes/jeddah-makkah/',
        transportLabel: 'Book Jeddah to Makkah Private Transfer',
        gradient: 'from-emerald-50 to-green-50',
        borderColor: 'border-emerald-200',
        rankBg: 'bg-emerald-700',
    },
];

export default function Top15JeddahPlacesPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-black text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Top 15 Places Jeddah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌍 Travel Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 12 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Top 15 Places to<br />
                        <span className="text-emerald-300">Visit in Jeddah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        From the UNESCO-listed streets of Al Balad to the world's tallest fountain, a floating mosque, and world-class diving — Jeddah's best experiences ranked and explained for international visitors.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20driver%20to%20explore%20Jeddah%20attractions" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book City Tour Driver
                        </a>
                        <Link href="/vip-chauffeur-jeddah/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all">
                            View Chauffeur Options <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Overview */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Attractions', value: '15', icon: '📍' },
                            { label: 'UNESCO Sites', value: '1', icon: '🏛️' },
                            { label: 'Entry Free', value: '8 of 15', icon: '🆓' },
                            { label: 'Best Season', value: 'Nov–Mar', icon: '🌤️' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-2xl font-black text-emerald-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Places List */}
            <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">

                {places.map((place) => (
                    <article key={place.rank} className={`rounded-3xl border ${place.borderColor} bg-gradient-to-br ${place.gradient} overflow-hidden shadow-sm`}>
                        {/* Header */}
                        <div className="p-8 pb-0">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${place.rankBg} text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0`}>
                                        #{place.rank}
                                    </div>
                                    <div>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${place.badgeColor} inline-block mb-1`}>{place.badge}</span>
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{place.category}</p>
                                    </div>
                                </div>
                                <span className="text-4xl">{place.emoji}</span>
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{place.name}</h2>

                            {/* Quick Facts */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 text-xs bg-white/70 text-gray-700 px-3 py-1.5 rounded-full border border-white font-medium">
                                    <Clock className="w-3 h-3" /> {place.duration}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs bg-white/70 text-gray-700 px-3 py-1.5 rounded-full border border-white font-medium">
                                    <Star className="w-3 h-3" /> Entry: {place.entryFee}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs bg-white/70 text-gray-700 px-3 py-1.5 rounded-full border border-white font-medium">
                                    <Camera className="w-3 h-3" /> {place.bestTime}
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="px-8 pb-6">
                            {place.description.split('\n\n').map((para, i) => (
                                <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">{para}</p>
                            ))}

                            {/* Tips */}
                            <div className="bg-white/60 rounded-2xl p-5 mb-6 border border-white">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-widest">💡 Insider Tips</h3>
                                <ul className="space-y-2">
                                    {place.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">→</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Transport CTA */}
                            <div className="flex flex-wrap gap-3">
                                <Link href={place.transportLink}
                                    className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors">
                                    <Navigation className="w-4 h-4" /> {place.transportLabel}
                                </Link>
                                <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20driver%20for%20Jeddah%20sightseeing" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors">
                                    <Phone className="w-4 h-4" /> WhatsApp Driver
                                </a>
                            </div>
                        </div>
                    </article>
                ))}

                {/* FAQ Section */}
                <section className="pt-8">
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

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-black mb-4">Plan Your Jeddah Itinerary</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
                        Explore all 15 places comfortably with a pre-booked English-speaking private driver. Fixed rates, meet & greet service, and 24/7 WhatsApp support.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20full%20day%20sightseeing%20driver%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book Full-Day Driver
                        </a>
                        <Link href="/vip-chauffeur-jeddah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Chauffeur Details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
