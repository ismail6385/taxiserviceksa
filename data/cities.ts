
export interface FAQItem {
    question: string;
    answer: string;
    intent: 'Informational' | 'Commercial' | 'Transactional' | 'Contextual';
    chatbotData: {
        userQuestion: string;
        botAnswer: string;
        suggestedAction?: 'Booking';
    }
}

export interface HowToStep {
    name: string;
    text: string;
    image?: string;
}

export interface CityData {
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    primaryAudience: string;
    serviceFocus: string;
    landmarks: string[];
    nearbyCities: string[];
    description: string;
    faqSetA: FAQItem[]; // Primary Intent (e.g. Pilgrim/Tourist)
    faqSetB: FAQItem[]; // Secondary Intent (e.g. Family/Business/Voice)
    howTo: {
        title: string;
        steps: HowToStep[];
    };
    seoContent: {
        overview: string;
        services: string;
        whyChoose: string;
    };
    contextualBlock?: {
        title: string;
        content: string;
        internalLink: {
            text: string;
            url: string;
            context: string;
        };
    };
}

export const cities: Record<string, CityData> = {
    jeddah: {
        name: "Jeddah",
        slug: "jeddah",
        metaTitle: "Taxi Service in Jeddah | Reliable Transfers & Airport Taxi KSA",
        metaDescription: "Book a reliable taxi service in Jeddah for King Abdulaziz Airport, hotels & city travel. Professional drivers, clean vehicles & 24/7 support.",
        primaryAudience: "Tourists, Business Travelers, Pilgrims",
        serviceFocus: "Airport Transfers & City Tours",
        landmarks: ["King Abdulaziz International Airport", "Jeddah Corniche", "Al-Balad (Historic Jeddah)", "King Fahd's Fountain"],
        nearbyCities: ["makkah", "madinah"],
        description: "Jeddah is the gateway to the Two Holy Mosques and a vibrant hub for business and tourism. Our taxi service ensures you navigate this bustling city with ease and comfort.",
        faqSetA: [
            {
                question: "How much is a taxi from Jeddah Airport to the Corniche?",
                answer: "Our rates are competitive and fixed. Booking a <a href='/locations/jeddah' class='text-primary hover:underline'>taxi from King Abdulaziz International Airport to the Jeddah Corniche</a> is affordable and stress-free. We recommend booking in advance to avoid waiting. <strong>Book online instantly for quick confirmation.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "How much is taxi from JED airport to Corniche?",
                    botAnswer: "Rates are fixed and affordable. Pre-booking ensures a stress-free ride from King Abdulaziz Airport to the Corniche.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer rides to Al-Balad?",
                answer: "Yes, we provide comfortable rides to the historic Al-Balad district, perfect for tourists wanting to explore Jeddah's heritage.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Do you go to Al-Balad?",
                    botAnswer: "Yes, we offer comfortable rides to Al-Balad for tourists exploring Jeddah's history.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is taxi service available 24/7 in Jeddah?",
                answer: "Yes, our taxi service in Jeddah operates 24/7. Whether you have a late-night flight arrival at JED airport or need an early morning ride to Makkah, our drivers are always available.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Is taxi available 24/7 in Jeddah?",
                    botAnswer: "Yes, we operate 24/7 in Jeddah, including late-night airport pickups.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "What is the best taxi service for families in Jeddah?",
                answer: "For families, Taxi Service KSA is the top choice. We offer spacious vehicles like the GMC Yukon and strictly adhere to safety protocols, making us the best family taxi in Jeddah.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Best taxi for families in Jeddah?",
                    botAnswer: "We are top-rated for families, offering spacious GMC Yukons and safe, professional drivers.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I get an Uber or Taxi late at night in Jeddah?",
                answer: "While apps offer rides, our reliable pre-booked taxi service ensures you have a driver waiting for you late at night without the risk of cancellations.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Can I get a taxi late night in Jeddah?",
                    botAnswer: "Yes, pre-book with us for a guaranteed driver late at night, avoiding cancellations.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "How do I book a taxi from Jeddah to Makkah for Umrah?",
                answer: "You can easily book a transfer by visiting our booking page. We specialize in Jeddah to Makkah transfers for pilgrims, offering direct hotel drop-offs.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "How to book Jeddah to Makkah taxi?",
                    botAnswer: "Book easily on our website for direct transfers from Jeddah to Makkah hotels.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "How to Book a Taxi in Jeddah",
            steps: [
                { name: "Choose Your Ride", text: "Select from our fleet of luxury sedans or family SUVs suitable for Jeddah travel." },
                { name: "Enter Details", text: "Provide your pickup location (e.g., JED Airport) and drop-off destination." },
                { name: "Confirm & Ride", text: "Receive instant confirmation and enjoy a premium travel experience." }
            ]
        },
        seoContent: {
            overview: "As the commercial capital of Saudi Arabia, Jeddah demands efficient transportation. Our <strong>taxi service in Jeddah</strong> caters to airport arrivals, business executives, and families enjoying the Red Sea coast. We offer a fleet ranging from standard sedans to luxury SUVs like GMC Yukon.",
            services: "Whether you need a <strong>Jeddah airport taxi</strong> for a late-night arrival or a day tour of the <strong>Jeddah Corniche</strong>, our drivers are at your service. We also specialize in seamless transfers for pilgrims arriving in Jeddah before heading to Makkah or Madinah.",
            whyChoose: "Choose us for our punctuality and local expertise. Our drivers know the best routes to avoid traffic near <strong>King Fahd's Fountain</strong> and ensuring you reach your meetings or hotels on time."
        },
        contextualBlock: {
            title: "Gateway to the Two Holy Cities",
            content: "Jeddah serves as the primary entry point for millions of pilgrims performing Umrah and Hajj. Navigating from King Abdulaziz International Airport (JED) requires a reliable transport partner who understands the logistics of pilgrim transfers. Our service bridges the gap between arrival and your spiritual journey, offering direct routes to the Haramain High Speed Railway station or private, comfortable drives directly to your hotel in the Holy City. We ensure that your transition from the airport environment to the state of Ihram is handled with respect and efficiency.",
            internalLink: {
                text: "Umrah taxi services to Makkah",
                url: "/locations/makkah",
                context: "For a seamless spiritual journey, consider our dedicated"
            }
        }
    },
    riyadh: {
        name: "Riyadh",
        slug: "riyadh",
        metaTitle: "Taxi Service in Riyadh | Premium Chauffeur & City Transfers",
        metaDescription: "Safe & reliable taxi service in Riyadh for business & leisure. Airport transfers, city tours & VIP chauffeur service. Book now!",
        primaryAudience: "Business Executives, Tourists",
        serviceFocus: "Corporate Travel & Events",
        landmarks: ["Kingdom Centre", "King Khalid International Airport", "Ad Diriyah", "Riyadh Boulevard"],
        nearbyCities: ["dammam", "al-khobar"],
        description: "Riyadh, the capital of Saudi Arabia, is a city of business and modern marvels. Our premium taxi service is tailored for executives and tourists alike.",
        faqSetA: [
            {
                question: "Can I book a VIP taxi for business meetings in Riyadh?",
                answer: "Absolutely. We specialize in corporate transport and VIP chauffeur services for business meetings across Riyadh, ensuring you arrive at the Kingdom Centre or KAFD in style.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "VIP taxi for business in Riyadh?",
                    botAnswer: "Yes, we offer VIP chauffeur services for business meetings at Kingdom Centre or KAFD.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you provide transfers to King Khalid Airport?",
                answer: "Yes, we offer reliable 24/7 airport transfers to and from King Khalid International Airport (RUH). Our drivers track your flight to ensure timely pickups. <strong>Book online to schedule your airport ride.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Transfers to Riyadh airport?",
                    botAnswer: "Yes, we provide 24/7 transfers to King Khalid International Airport with flight tracking.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is it easy to find a taxi in Riyadh for tourists?",
                answer: "While street taxis are available, booking our private taxi service in Riyadh guarantees a clean, smoke-free vehicle and an English-speaking driver for your tours to Ad Diriyah or Boulevard City.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Easy to find tourist taxi in Riyadh?",
                    botAnswer: "Pre-booking with us guarantees a clean car and English-speaking driver for tours.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "Where can I find a luxury chauffeur in Riyadh?",
                answer: "You can find reputable luxury chauffeurs through our website. We provide high-end service with vehicles like the GMC Yukon for special occasions in Riyadh.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Find luxury chauffeur Riyadh?",
                    botAnswer: "Book dependable luxury chauffeurs with GMC Yukons on our website.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "What is the cost of a taxi from Riyadh Airport to downtown?",
                answer: "Our rates are fixed and transparent. We offer competitive pricing for transfers from RUH Airport to Olaya, Diplomatic Quarter, and other downtown areas.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Cost taxi Riyadh airport to downtown?",
                    botAnswer: "We offer fixed, competitive rates from RUH Airport to downtown areas like Olaya.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a car for the whole day in Riyadh?",
                answer: "Yes, we offer hourly and daily rental services with a driver. This is ideal for visiting multiple locations or Riyadh Season events in comfort.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Book car for whole day Riyadh?",
                    botAnswer: "Yes, hourly and daily driver rentals are available for multiple stops or events.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "Booking Your Riyadh Chauffeur",
            steps: [
                { name: "Select Service", text: "Choose between point-to-point transfer or hourly chauffeur service." },
                { name: "Schedule Pickup", text: "Set your time and location, whether it's a hotel or King Khalid Airport." },
                { name: "Travel in Style", text: "Meet your professional driver and travel in a premium vehicle." }
            ]
        },
        seoContent: {
            overview: "Navigating the capital requires a reliable partner. Our <strong>taxi service in Riyadh</strong> offers premium transportation for the city's busy professionals and visitors. From the <strong>Kingdom Centre</strong> to the historic <a href='/locations/riyadh' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Ad Diriyah</a>, we cover it all.",
            services: "We provide specialized <strong>airport taxi in Riyadh</strong> services, ensuring swift pickups from King Khalid International Airport. Our fleet is perfect for corporate events at <strong>Riyadh Boulevard</strong> or private city tours in a <a href='/fleet/gmc-yukon' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>VIP chauffeur car</a>.",
            whyChoose: "Our commitment to professionalism makes us the top choice for <strong>taxi service in Riyadh</strong>. Enjoy clean, air-conditioned luxury vehicles and drivers who value your time and privacy. We also offer transfers to nearby cities like <a href='/locations/dammam' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Dammam</a>."
        },
        contextualBlock: {
            title: "Corporate Mobility in the Capital",
            content: "As Saudi Arabia's financial hub, Riyadh demands a level of transportation that matches its pace. Business travelers visiting the King Abdullah Financial District (KAFD) or attending major conferences require more than just a ride; they need a mobile office. Our chauffeur service provides the quiet, climate-controlled environment necessary for preparing for meetings on the go. Whether moving between diplomatic quarters or heading to Riyadh Season events, our service offers the discretion and reliability expected by top-tier executives.",
            internalLink: {
                text: "GMC Yukon Luxury Fleet",
                url: "/fleet/gmc-yukon",
                context: "Experience superior comfort and status with our"
            }
        }
    },
    madinah: {
        name: "Madinah",
        slug: "madinah",
        metaTitle: "Taxi Service in Madinah | Ziyarat & Airport Transfers",
        metaDescription: "Reliable taxi service in Madinah for pilgrims. Hotel pickup, Ziyarat tours & Prince Mohammad Airport transfers. Safe & respectful drivers.",
        primaryAudience: "Pilgrims, Ziyarat Visitors",
        serviceFocus: "Religious Tourism & Airport Transfers",
        landmarks: ["Al-Masjid an-Nabawi", "Quba Mosque", "Mount Uhud", "Prince Mohammad Bin Abdulaziz Airport"],
        nearbyCities: ["makkah", "jeddah"],
        description: "Madinah is a city of peace. Our taxi service provides pilgrims with a respectful and comfortable travel experience to the Prophet's Mosque and historical sites.",
        faqSetA: [
            {
                question: "Do you offer Ziyarat tours in Madinah?",
                answer: "Yes, we arrange comprehensive Ziyarat tours to Quba Mosque, Mount Uhud, and other holy sites. Our drivers are knowledgeable and respectful of the spiritual nature of your visit.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Do you offer Ziyarat tours Madinah?",
                    botAnswer: "Yes, we provide Ziyarat tours to Quba Mosque, Uhud, and other holy sites.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is taxi service available from the airport to the Haram?",
                answer: "Yes, we provide direct transfers from Prince Mohammad Bin Abdulaziz Airport (MED) to hotels near Al-Masjid an-Nabawi. We ensure a smooth arrival for pilgrims. <strong>Book online for an immediate response.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Taxi from Madinah airport to Haram?",
                    botAnswer: "Yes, we offer direct transfers from Madinah Airport (MED) to Haram-area hotels.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "What is the best way to travel from Madinah to Makkah?",
                answer: "The most comfortable way is to book a <a href='/fleet/gmc-yukon' class='text-primary hover:underline'>GMC Yukon taxi</a> for the journey. It takes about 4-5 hours and ensures a restful trip between the two holy cities.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Best way Madinah to Makkah?",
                    botAnswer: "A private GMC Yukon taxi is the most comfortable option, taking 4-5 hours.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "How do I get a taxi for Fajr prayer in Madinah?",
                answer: "Our 24/7 service allows you to pre-book a ride for Fajr. This is especially helpful if your hotel is a bit far from the Prophet's Mosque.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Taxi for Fajr prayer Madinah?",
                    botAnswer: "You can pre-book a 24/7 ride for Fajr to reach the Prophet's Mosque easily.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Are taxis in Madinah clean and safe?",
                answer: "Yes, cleanliness is our priority. All our vehicles are sanitized regularly to ensure a safe and hygienic environment for pilgrims.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Are Madinah taxis clean?",
                    botAnswer: "Yes, all vehicles are sanitized regularly to ensure safety for pilgrims.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a bus for a group in Madinah?",
                answer: "Certainly. We provide buses like the Toyota Coaster for large groups performing Ziyarat, ensuring everyone stays together.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Book bus for group Madinah?",
                    botAnswer: "Yes, Toyota Coasters are available for large groups performing Ziyarat.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "How to Book Ziyarat in Madinah",
            steps: [
                { name: "Pick Your Tour", text: "Select a Ziyarat package visiting Quba, Uhud, and other holy sites." },
                { name: "Choose Vehicle", text: "Select a vehicle that fits your group size, from sedans to buses." },
                { name: "Start Your Journey", text: "Your driver will pick you up from your hotel for a spiritual tour." }
            ]
        },
        seoContent: {
            overview: "Our <strong>taxi service in Madinah</strong> is dedicated to serving the guests of the Prophet. We provide serene and safe transportation for pilgrims visiting <strong>Al-Masjid an-Nabawi</strong> and other significant Islamic landmarks like <a href='/locations/madinah' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Quba Mosque</a>.",
            services: "Beyond hotel transfers, we specialize in **Madinah Ziyarat tours**. Visit **Quba Mosque** and the historic **Mount Uhud** with drivers who understand the spiritual importance of your journey. We also offer reliable **airport taxi in Madinah** transfers to <a href='/locations/jeddah' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Jeddah Airport</a>.",
            whyChoose: "We are the preferred <strong>reliable taxi in Madinah</strong> for families. Our spacious vehicles like the <a href='/fleet/gmc-yukon' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>GMC Yukon</a> accommodate groups, and our respectful drivers ensure a peaceful journey consistent with the sanctity of the city."
        },
        contextualBlock: {
            title: "Respectful Transport for Ziyarat",
            content: "Visiting Madinah Al Munawwarah involves more than just transit; it is an act of devotion. Our drivers are trained to provide a respectful, quiet atmosphere befitting the holiness of the city. When performing Ziyarat to historical sites like Mount Uhud or the Qiblatain Mosque, having a knowledgeable local driver transforms the trip into an educational experience. We coordinate pickups around prayer times, ensuring you never miss a congregational prayer at Al-Masjid an-Nabawi while still exploring the rich Islamic heritage.",
            internalLink: {
                text: "Intercity taxi to Makkah",
                url: "/locations/makkah",
                context: "Upon completing your stay, book our comfortable"
            }
        }
    },
    dammam: {
        name: "Dammam",
        slug: "dammam",
        metaTitle: "Taxi Service in Dammam | Airport & City Travel",
        metaDescription: "Book the best taxi service in Dammam. fast airport transfers, corniche rides & intercity travel to Khobar/Jubail. 24/7 availability.",
        primaryAudience: "Residents, Business, Tourists",
        serviceFocus: "Local & Intercity Travel",
        landmarks: ["King Fahd International Airport", "Dammam Corniche", "Half Moon Bay", "Ithra Center"],
        nearbyCities: ["riyadh", "al-khobar"],
        description: "As a key port city, Dammam is a hub of activity. Our taxi service connects you to the airport, the beautiful Corniche, and neighboring cities efficiently.",
        faqSetA: [
            {
                question: "Do you offer rides from Dammam to Al Khobar?",
                answer: "Yes, we provide frequent and affordable intercity taxi services between Dammam, Al Khobar, and Dhahran, connecting the tri-city area seamlessly.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Ride Dammam to Al Khobar?",
                    botAnswer: "Yes, we provide frequent intercity taxis between Dammam, Al Khobar, and Dhahran.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is airport pickup available at King Fahd Airport?",
                answer: "Yes, we offer 24/7 pickups from King Fahd International Airport (DMM). Our drivers are always ready to take you to Dammam, Khobar, or Jubail. <strong>Pre-book online to guarantee your driver.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Pickup King Fahd Airport?",
                    botAnswer: "Yes, 24/7 pickups available from Dammam Airport (DMM) to any city.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a taxi for a day trip to Half Moon Bay?",
                answer: "Certainly! You can book a taxi for a relaxing day trip to Half Moon Bay. Our drivers can drop you off and pick you up at your scheduled time.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Taxi to Half Moon Bay?",
                    botAnswer: "Yes, book a round-trip taxi for a day at Half Moon Bay with scheduled pickup.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "What is the fastest way to get to Jubail from Dammam?",
                answer: "Our private taxi service is the fastest and most convenient way to travel from Dammam to Jubail, avoiding the hassle of buses or shared rides.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Fastest way Dammam to Jubail?",
                    botAnswer: "Our private taxi service is the fastest option for Dammam to Jubail travel.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer corporate transport in Dammam?",
                answer: "Yes, we provide tailored corporate transport solutions for companies operating in Dammam's industrial sectors.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Corporate transport Dammam?",
                    botAnswer: "Yes, we offer tailored transport solutions for Dammam's corporate and industrial sectors.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "How do I pay for my taxi in Dammam?",
                answer: "We offer flexible payment options including cash and online booking payments for your convenience.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "How to pay taxi Dammam?",
                    botAnswer: "Pay flexibly with cash or secure online booking options.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "Easy Taxi Booking in Dammam",
            steps: [
                { name: "Book Online", text: "Use our website to schedule your ride in Dammam or Khobar." },
                { name: "Get Confirmation", text: "Receive driver details and vehicle information immediately." },
                { name: "Ride Safely", text: "Enjoy a smooth ride to the Corniche, Airport, or Industrial City." }
            ]
        },
        seoContent: {
            overview: "Discover the Eastern Province with our premier <strong>taxi service in Dammam</strong>. Whether you are heading to the **Dammam Corniche** for leisure or to the industrial hubs for business, we provide the right vehicle for you. We connect Dammam to Riyadh and other key cities.",
            services: "We excel in <strong>airport taxi in Dammam</strong> transfers from King Fahd International Airport. Our services also extend to day trips to **Half Moon Bay** and cultural visits to the **Ithra Center** in nearby Dhahran.",
            whyChoose: "Locals and visitors trust our <strong>reliable taxi in Dammam</strong> for our knowledge of the Eastern Province roads. We ensure quick, safe, and comfortable rides for daily commutes or special trips in our modern fleet."
        },
        contextualBlock: {
            title: "Connecting the Eastern Province",
            content: "Dammam is the heart of a metropolitan area that includes Al Khobar and Dhahran. Our service is designed to tackle the unique geography of this tri-city region. Whether you are an engineer commuting to the industrial zones of Jubail or a family visiting the Ithra Center for a cultural weekend, our drivers understand the highway networks that connect these hubs. We provide reliable intercity transfers that turn a long commute across the Eastern Province into a relaxing journey, maximizing your productivity or leisure time.",
            internalLink: {
                text: "Taxi to Riyadh",
                url: "/locations/riyadh",
                context: "Need to travel to the capital? Book our direct"
            }
        }
    },
    taif: {
        name: "Taif",
        slug: "taif",
        metaTitle: "Taxi Service in Taif | Tourist & Intercity Transfers",
        metaDescription: "Explore Taif with reliable taxi service. Visit Shubra Palace, Taif Rose Gardens & Al Hada mountain. Comfortable rides for tourists & families.",
        primaryAudience: "Tourists, Families",
        serviceFocus: "Tourism & Nature Trips",
        landmarks: ["Al Hada Mountain", "Shubra Palace", "Taif Rose Factories", "Souq Okaz"],
        nearbyCities: ["makkah", "jeddah"],
        description: "Known as the City of Roses, Taif offers cool weather and scenic views. Our taxi service helps you explore its mountains and historic sites in comfort.",
        faqSetA: [
            {
                question: "Can you take us up Al Hada mountain?",
                answer: "Yes, our drivers are experienced in mountain driving. We can safely take you to Al Hada to enjoy the views, cable cars, and fruit markets.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Drive up Al Hada mountain?",
                    botAnswer: "Yes, our experienced drivers can safely take you up Al Hada mountain.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer tours to Taif Rose factories?",
                answer: "We offer customized tours to the famous Taif Rose factories and farms. This is a must-do activity, especially during the rose harvest season in spring.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Tours to Taif Rose factories?",
                    botAnswer: "Yes, we offer custom tours to Taif Rose factories, especially during harvest.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is it safe to travel from Makkah to Taif by taxi?",
                answer: "Yes, the road from Makkah to Taif is scenic and safe. Our drivers are skilled at navigating the mountain pass (Al-Kar) for a smooth journey.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Safe Makkah to Taif taxi?",
                    botAnswer: "Yes, our drivers are skilled on the scenic Al-Kar mountain pass.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "What is the best time to visit Taif?",
                answer: "Taif is beautiful year-round, but summer is popular for its cool weather. Our taxi service is available all seasons to take you to the best spots.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Best time to visit Taif?",
                    botAnswer: "Summer is popular for cool weather, but we operate year-round.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you have family vans for Taif tours?",
                answer: "Yes, we have spacious vans like the Hyundai Staria, perfect for families visiting parks and historical sites in Taif.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Family vans for Taif?",
                    botAnswer: "Yes, spacious vans like Hyundai Staria are available for family tours.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a ride from Taif Airport to the city?",
                answer: "We provide prompt transfers from Taif Regional Airport to all hotels and resorts in the city center and Al Hada. <strong>Book online to reserve your mountain transfer.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Ride Taif Airport to city?",
                    botAnswer: "Yes, we provide transfers from Taif Airport to all city hotels and resorts.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "How to Tour Taif by Taxi",
            steps: [
                { name: "Plan Your Route", text: "Decide on visiting Al Hada, Rose Factories, or Souq Okaz." },
                { name: "Book Your Taxi", text: "Select a comfortable vehicle for mountain driving from our fleet." },
                { name: "Enjoy the Views", text: "Sit back and enjoy the scenic drive with our experienced chauffeurs." }
            ]
        },
        seoContent: {
            overview: "Enjoy the cool breeze of the mountains with our <strong>taxi service in Taif</strong>. Perfect for summer getaways, we transport you to <strong>Al Hada</strong> and **Shubra Palace** with ease and safety. We offer direct transfers from <a href='/locations/makkah' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Makkah</a> for pilgrims wanting to visit Taif.",
            services: "Our services focus on tourism. Book a <strong>taxi in Taif</strong> for a tour of the **Taif Rose Factories** or a trip to the historic **Souq Okaz**. We also provide transfers from <a href='/locations/jeddah' class='bg-primary text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline'>Jeddah</a>.",
            whyChoose: "Mountain roads require skilled driving. Our **reliable taxi in Taif** drivers are experts on the winding roads of Al Hada, ensuring a safe and enjoyable sightseeing experience for your family."
        },
        contextualBlock: {
            title: "Mountain Driving Expertise",
            content: "Driving in Taif, especially around the Al Hada mountain roads, requires vehicles with good power and drivers with specific mountain experience. Our fleet is maintained to the highest standards to handle steep gradients and winding turns safely. Whether you are taking the cable car at Al Hada or visiting the Rose Factories in the valley, our drivers ensure a smooth, nausea-free ride for your family, allowing you to enjoy the spectacular views without concern for the road conditions.",
            internalLink: {
                text: "Family vans like Hyundai Staria",
                url: "/fleet/hyundai-staria",
                context: "For large families visiting the mountains, we recommend our"
            }
        }
    },
    'al-khobar': {
        name: "Al Khobar",
        slug: "al-khobar",
        metaTitle: "Taxi Service in Al Khobar | Corniche & Causeway Transfers",
        metaDescription: "Best taxi service in Al Khobar for local travel & Causeway trips to Bahrain. Reliable, comfortable rides to Dammam Airport and Corniche.",
        primaryAudience: "Business, Residents, Visitors",
        serviceFocus: "Business & Cross-Border Travel",
        landmarks: ["Khobar Corniche", "King Fahd Causeway", "Half Moon Beach", "Al Rashid Mall"],
        nearbyCities: ["dammam", "dhahran"],
        description: "Al Khobar is a vibrant coastal city known for its Corniche and business hubs. We provide top-tier taxi services for seamless city travel.",
        faqSetA: [
            {
                question: "Do you go to Bahrain from Al Khobar?",
                answer: "Yes, we specialize in transfers across the King Fahd Causeway to Bahrain. Please ensure you have the necessary travel documents.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Taxi Khobar to Bahrain?",
                    botAnswer: "Yes, we offer transfers to Bahrain. Please have travel documents ready.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a taxi for shopping at Al Rashid Mall?",
                answer: "Absolutely. We can drop you off at Al Rashid Mall or Mall of Dhahran and pick you up when you're done via a scheduled booking.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Taxi to Al Rashid Mall?",
                    botAnswer: "Yes, we offer scheduled drop-offs and pickups for shopping malls.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "How far is Dammam Airport from Al Khobar?",
                answer: "It takes about 45-60 minutes to reach King Fahd International Airport (DMM) from Al Khobar. We recommend booking in advance.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Distance Khobar to Dammam Airport?",
                    botAnswer: "It takes 45-60 mins. Advance booking recommended.",
                    suggestedAction: "Booking"
                }
            }
        ],
        faqSetB: [
            {
                question: "Is there a taxi service to the Corniche?",
                answer: "Yes, enjoy a ride to the beautiful Al Khobar Corniche for a family outing. We provide safe and clean vehicles.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Taxi to Khobar Corniche?",
                    botAnswer: "Yes, we provide rides to the Corniche for family outings.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer executive cars in Khobar?",
                answer: "Yes, we have a fleet of luxury sedans and SUVs for business executives attending meetings in the Eastern Province.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Executive cars Khobar?",
                    botAnswer: "Yes, luxury sedans and SUVs are available for business travel.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I pay by card?",
                answer: "We accept online payments during booking for your convenience.",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Pay by card in Khobar?",
                    botAnswer: "Online payments are accepted during booking.",
                    suggestedAction: "Booking"
                }
            }
        ],
        howTo: {
            title: "Getting Around Al Khobar",
            steps: [
                { name: "Select Destination", text: "Choose your drop-off, whether it's the Corniche, Mall, or Bahrain." },
                { name: "Book Ride", text: "Reserve your taxi online for a guaranteed pickup." },
                { name: "Arrive in Comfort", text: "Relax as our driver takes you to your destination." }
            ]
        },
        seoContent: {
            overview: "Experience the best of the Eastern Province with our <strong>taxi service in Al Khobar</strong>. From the busy <strong>King Fahd Causeway</strong> to the relaxing <strong>Half Moon Beach</strong>, we cover all your travel needs.",
            services: "We offer dedicated <strong>airport transfers to Dammam Airport</strong> and cross-border rides to Bahrain. Our service is perfect for business travelers and families alike.",
            whyChoose: "Punctuality and comfort are our hallmarks. Choose us for a <strong>reliable taxi in Al Khobar</strong> that understands your schedule."
        },
        contextualBlock: {
            title: "Business and Leisure in Khobar",
            content: "Al Khobar perfectly blends business with leisure. After a meeting at the business towers, unwind at the Corniche. Our taxi service ensures you transition smoothly between work and play. We also facilitate safe trips across the Causeway for weekend getaways to Bahrain.",
            internalLink: {
                text: "Airport Transfers",
                url: "/services/airport-transfers",
                context: "Need to catch a flight? Book our reliable"
            }
        }
    }
};
