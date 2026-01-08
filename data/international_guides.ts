
import { Flag } from "lucide-react";

export interface InternationalGuide {
    slug: string;
    countryCode: string;
    countryName: string;
    flagEmoji: string;
    title: string;
    metaDescription: string;
    heroImage: string;
    currency: {
        code: string;
        symbol: string;
        approxRate: string;
    };
    flightInfo: {
        majorAirports: string[];
        airlines: string[];
        flightDuration: string;
    };
    visaInfo: {
        type: string;
        cost: string;
        validity: string;
    };
    taxiBooking: {
        heading: string;
        whyBookPreArrival: string[];
        paymentMethods: string[];
    };
    contentSections: {
        title: string;
        content: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

const paymentNotice = `
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800">⚠️ Important Note on Cash Payments:</p>
  <p class="text-yellow-700 text-sm mt-1">
    While some drivers may accept foreign currency in emergencies, <strong>we strongly recommend paying in Saudi Riyals (SAR)</strong>. 
    Exchanging foreign currency incurs fees and taxes for our drivers, often resulting in a less favorable exchange rate for you. 
    For the best price and convenience, please <strong>book online</strong> or ensure you have SAR cash ready.
  </p>
</div>
`;

export const internationalGuides: InternationalGuide[] = [
    // 1. United Kingdom (UK)
    {
        slug: "united-kingdom-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "GB",
        countryName: "United Kingdom",
        flagEmoji: "🇬🇧",
        title: "Trusted Umrah Taxi for United Kingdom Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for United Kingdom pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (GBP reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/uk-umrah-transfer.jpg",
        currency: {
            code: "GBP",
            symbol: "£",
            approxRate: "1 GBP ≈ 4.75 SAR",
        },
        flightInfo: {
            majorAirports: ["London (LHR)", "Manchester (MAN)", "Birmingham (BHX)"],
            airlines: ["Saudia", "British Airways", "Emirates", "Qatar Airways"],
            flightDuration: "6-7 hours (Direct)",
        },
        visaInfo: {
            type: "Electronic Visa Waiver (EVW) or Tourist E-Visa",
            cost: "~ £30 (EVW) or £120 (E-Visa)",
            validity: "Single entry (EVW) or 1 Year Multiple (E-Visa)",
        },
        taxiBooking: {
            heading: "How to Book a Jeddah Taxi from the UK",
            whyBookPreArrival: [
                "Avoid haggling in SAR when you only have Pounds",
                "Driver waits for you even if your flight from London is delayed",
                "Clear fixed price - no surprises upon arrival",
                "English speaking drivers who understand British expectations",
            ],
            paymentMethods: [
                "Online: UK Debit/Credit Cards (Recommended)",
                "Cash: Saudi Riyals (SAR) ONLY (Recommended)",
            ],
        },
        contentSections: [
            {
                title: "Trusted Umrah Taxi for United Kingdom Pilgrims: Jeddah Airport to Makkah",
                content: `
          <p>For British pilgrims arriving at King Abdulaziz International Airport (JED), usually via <strong>London Heathrow (Terminal 1)</strong> or Manchester, the journey is just beginning. After a 6-hour flight, you need a seamless transfer.</p>
          <p>Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service is designed for UK families. We track your flight (e.g., SV120 or BA133) and endure the wait time if you are delayed at immigration.</p>
          <p>Unlike untrusted street taxis, our drivers meet you at the arrivals hall with a name sign, specifically catering to the comfort standards UK travelers expect.</p>
        `,
            },
            {
                title: "Trusted Umrah Taxi for United Kingdom Pilgrims: Jeddah Airport to Makkah",
                content: `
          <p>Once your Umrah is complete, most UK pilgrims proceed to the City of the Prophet. The <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> route helps you avoid the hassle of crowded bus stations.</p>
          <p>This 4-5 hour drive is comfortable in our GMC Yukon XL (for families with luggage) or Toyota HiAce (for larger groups), allowing you to rest before reaching Masjid An-Nabawi.</p>
        `,
            },
            {
                title: "Trusted Umrah Taxi for United Kingdom Pilgrims: Jeddah Airport to Makkah",
                content: `
          <p>Don't miss the historical sites. We offer dedicated <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> tours (Jabal Al-Nour, Cave of Hira, Arafat) and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> (Quba Mosque, Uhud).</p>
        `,
            },
            {
                title: "Trusted Umrah Taxi for United Kingdom Pilgrims: Jeddah Airport to Makkah",
                content: `
          <p>Unlike black cabs or Uber in the UK, hailing a cab at Jeddah airport can be chaotic. Language barriers and 'broken meters' are common.</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
             <li><strong>Payment:</strong> Local drivers rarely accept GBP cards. We do.</li>
             <li><strong>Safety:</strong> Our vehicles are tracked and insured.</li>
          </ul>
          ${paymentNotice}
        `,
            }
        ],
        faqs: [
            {
                question: "Can I pay for my taxi in British Pounds (GBP)?",
                answer: "We strongly recommend paying in Saudi Riyals (SAR). Drivers often lose money exchanging GBP due to bank fees. The best option is to book online with your UK bank card."
            },
            {
                question: "Do your drivers speak English?",
                answer: "Yes, our VIP class drivers are fluent in English, ensuring clear communication for our British guests."
            }
        ]
    },

    // 2. United States (USA)
    {
        slug: "united-states-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "US",
        countryName: "United States",
        flagEmoji: "🇺🇸",
        title: "Trusted Umrah Taxi for United States Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for United States pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (USD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/usa-umrah-transfer.jpg",
        currency: {
            code: "USD",
            symbol: "$",
            approxRate: "1 USD = 3.75 SAR (Fixed Peg)",
        },
        flightInfo: {
            majorAirports: ["New York (JFK)", "Washington DC (IAD)", "Chicago (ORD)"],
            airlines: ["Saudia (Direct)", "Turkish Airlines", "Qatar Airways"],
            flightDuration: "12-14 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa (Instant)",
            cost: "~ $120 USD",
            validity: "1 Year Multiple Entry",
        },
        taxiBooking: {
            heading: "Booking a GMC Yukon for US Families",
            whyBookPreArrival: [
                "Ensure you get a large SUV (GMC Yukon) for American-sized luggage",
                "Fixed exchange rate (1 USD = 3.75 SAR) means no confusion",
                "12+ hour flight is exhausting; don't wait in taxi queues",
                "US-style customer service standards",
            ],
            paymentMethods: [
                "Online: US Credit Cards (Visa/Amex/MC)",
                "Cash: Saudi Riyals (SAR) Preferred",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from New York? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Will my US Credit Card work?",
                answer: "Yes, major US credit cards (Visa, Mastercard, Amex) work for online bookings on our site. Apple Pay is also widely accepted in Saudi Arabia."
            },
            {
                question: "Do I need to tip the driver?",
                answer: "Tipping is not mandatory but appreciated for good service, similar to the US. 10-20 SAR is customary for help with heavy luggage."
            }
        ]
    },

    // 3. Canada
    {
        slug: "canada-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "CA",
        countryName: "Canada",
        flagEmoji: "🇨🇦",
        title: "Top Umrah Taxi for Canadian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Canadian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (CAD), large GMC SUVs, and 24/7 support.",
        heroImage: "/images/guides/canada-umrah-transfer.jpg",
        currency: {
            code: "CAD",
            symbol: "$",
            approxRate: "1 CAD ≈ 2.75 SAR",
        },
        flightInfo: {
            majorAirports: ["Toronto (YYZ)", "Montreal (YUL)", "Vancouver (YVR)"],
            airlines: ["Saudia (Direct)", "Emirates", "Turkish Airlines"],
            flightDuration: "12+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 160 CAD",
            validity: "1 Year Multiple Entry",
        },
        taxiBooking: {
            heading: "Reliable Transfers for Canadian Pilgrims",
            whyBookPreArrival: [
                "Secure your ride before the long flight from Toronto",
                "Avoid exchange rate hassles upon arrival",
                "Large vehicles available for winter jackets and heavy luggage",
                "Professional drivers who respect family privacy",
            ],
            paymentMethods: [
                "Online: Credit Card (Recommended)",
                "Cash: Saudi Riyals (SAR) Strictly Preferred",
            ],
        },
        contentSections: [
            {
                title: "1. Arriving from the Great White North",
                content: `
          <p>Canadian pilgrims often face long travel times. Direct flights from Toronto are convenient but can still be tiring. Upon landing in Jeddah, the heat can be a shock.</p>
          <p>Don't waste time looking for a currency exchange. Pre-book your <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> so a driver is waiting for you with a cooled car suitable for heavy luggage.</p>
        `,
            },
            {
                title: "2. Makkah to Madinah Transfers",
                content: `
          <p>After your time in Makkah, we facilitate your travel to Madinah. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service is ideal for families who value privacy and door-to-door convenience.</p>
        `,
            },
            {
                title: "3. Ziyarat in Holy Cities",
                content: `
          <p>We provide knowledgeable drivers for <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a>. Explore the heritage of Islam comfortably.</p>
          ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Canadian Dollars?",
                answer: "We do not recommend it. Canadian Dollars are harder for drivers to exchange. Please pay in SAR or book online using your Canadian credit card."
            },
            {
                question: "How much luggage can we bring?",
                answer: "If you are traveling with large bags (common for Canadians), we recommend our GMC Yukon (7 passengers + luggage) or Toyota HiAce for larger groups."
            }
        ]
    },

    // 4. Australia
    {
        slug: "australia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AU",
        countryName: "Australia",
        flagEmoji: "🇦🇺",
        title: "Premium Umrah Taxi for Australian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Australian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (AUD), family SUVs, and 24/7 support.",
        heroImage: "/images/guides/australia-umrah-transfer.jpg",
        currency: {
            code: "AUD",
            symbol: "$",
            approxRate: "1 AUD ≈ 2.50 SAR",
        },
        flightInfo: {
            majorAirports: ["Sydney (SYD)", "Melbourne (MEL)", "Perth (PER)"],
            airlines: ["Emirates", "Etihad", "Qatar Airways", "Oman Air"],
            flightDuration: "14+ hours (plus layover)",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 180 AUD",
            validity: "1 Year Multiple Entry",
        },
        taxiBooking: {
            heading: "Comfort After the Long Journey",
            whyBookPreArrival: [
                "Total travel time often exceeds 20 hours - ensure a driver is waiting",
                "Australians value honest, fixed-pricing service",
                "Avoid the humid wait at the taxi curb",
                "Pre-paid bookings mean you can head straight to the hotel",
            ],
            paymentMethods: [
                "Online: Credit Card (Best Option)",
                "Cash: Saudi Riyals (SAR) Only",
            ],
        },
        contentSections: [
            {
                title: "1. The Ultra-Long Haul: Jeddah Arrival",
                content: `
          <p>Traveling from Australia is one of the longest journeys to the Holy Land. By the time you land in Jeddah (JED), you will be exhausted.</p>
          <p>Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> guarantees a driver waits for you, assists with heavy luggage, and takes you directly to your hotel. No queues, no hassle.</p>
        `,
            },
            {
                title: "2. Makkah to Madinah",
                content: `
          <p>Complete your pilgrimage by visiting the Prophet’s Mosque. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service is perfect for families who want to travel at their own pace.</p>
        `,
            },
            {
                title: "3. Sacred Sightseeing (Ziyarat)",
                content: `
          <p>We organize <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> for Australian groups, visiting Jabal Thawr, Quba Mosque, and more.</p>
          ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you supply child seats?",
                answer: "We can provide child seats upon request for families traveling with young children. Please mention this in your booking notes."
            },
            {
                question: "Is it better to exchange money in Australia or Saudi?",
                answer: "Rates are usually better in Saudi Arabia or via ATM withdrawals. However, to pay your driver, you must have SAR cash if you haven't prepaid online."
            }
        ]
    },

    // 5. Pakistan
    {
        slug: "pakistan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "PK",
        countryName: "Pakistan",
        flagEmoji: "🇵🇰",
        title: "Trusted Umrah Taxi for Pakistani Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Pakistani pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Urdu/Hindi drivers, Toyota HiAces for families. No hidden charges.",
        heroImage: "/images/guides/pakistan-umrah-transfer.jpg",
        currency: {
            code: "PKR",
            symbol: "Rs",
            approxRate: "1 SAR ≈ 75 PKR",
        },
        flightInfo: {
            majorAirports: ["Karachi (KHI)", "Lahore (LHE)", "Islamabad (ISB)"],
            airlines: ["PIA", "Saudia", "Airblue", "Serene Air"],
            flightDuration: "4-6 hours",
        },
        visaInfo: {
            type: "Umrah Visa / Tourist Visa",
            cost: "Varies",
            validity: "90 Days",
        },
        taxiBooking: {
            heading: "Apna Driver, Apni Sahulat",
            whyBookPreArrival: [
                "Urdu speaking drivers available",
                "Large vehicles (HiAce) for extended families",
                "Respectful family transport",
                "Avoid scams and overcharging at the airport",
            ],
            paymentMethods: [
                "Online: Card Payment",
                "Cash: Saudi Riyals (SAR) Only (PKR not accepted)",
            ],
        },
        contentSections: [
            {
                title: "1. Welcome to KSA (Jeddah Airport Arrival)",
                content: `
          <p>Thousands of Pakistani pilgrims arrive daily. While many look for the cheapest option, <strong>comfort and reliability</strong> are vital for families, especially elders.</p>
          <p>Avoid the chaos of airport touts. Book our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> for a dignified, fixed-price service straight to your hotel.</p>
        `,
            },
            {
                title: "2. Traveling from Makkah to Madinah",
                content: `
          <p>For the onward journey, our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> ensures your elderly parents and children travel in air-conditioned comfort, avoiding crowded buses.</p>
        `,
            },
            {
                title: "3. Ziyarat Packages",
                content: `
          <p>We offer affordable <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a>. Visit Ghar-e-Hira, Jabal Uhud, and Masjid Quba with drivers who can explain the history in Urdu.</p>
           ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Kya driver Urdu bolta hai?",
                answer: "Jee haan, humare aksar drivers Urdu/Hindi samajhte aur bolte hain, aur aapki family ke liye respectful mahool faraham karte hain."
            },
            {
                question: "Can we fit 10 people in one car?",
                answer: "For 10 people, you should book our Toyota HiAce. A standard car cannot accommodate this many passengers."
            }
        ]
    },

    // 6. India
    {
        slug: "india-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "IN",
        countryName: "India",
        flagEmoji: "🇮🇳",
        title: "Best Umrah Taxi for Indian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Indian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Urdu/Hindi drivers. Safe family transport.",
        heroImage: "/images/guides/india-umrah-transfer.jpg",
        currency: {
            code: "INR",
            symbol: "₹",
            approxRate: "1 SAR ≈ 22 INR",
        },
        flightInfo: {
            majorAirports: ["Mumbai (BOM)", "Delhi (DEL)", "Hyderabad (HYD)", "Kozhikode (CCJ)"],
            airlines: ["IndiGo", "Saudia", "Air India", "Flynas"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Umrah Visa / Tourist Visa",
            cost: "Varies",
            validity: "90 Days",
        },
        taxiBooking: {
            heading: "Hassle-Free Transport for Indian Families",
            whyBookPreArrival: [
                "Hindi/Urdu speaking drivers",
                "Transparent pricing - no hidden costs",
                "Safe for ladies and elderly",
                "Pre-book to avoid airport chaos",
            ],
            paymentMethods: [
                "Online: Credit/Debit Card",
                "Cash: Saudi Riyals (SAR) Only (INR not accepted)",
            ],
        },
        contentSections: [
            {
                title: "1. Arrival at Jeddah Airport",
                content: `
          <p>Arriving from India, you want your focus to be on Ibadah, not logistical headaches. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures that your journey is smooth and worry-free.</p>
          <p>Our drivers are respectful, helping with heavy luggage and ensuring your family reaches the hotel safely.</p>
        `,
            },
            {
                title: "2. Traveling Between Holy Cities",
                content: `
          <p>Book our reliable <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service. It is safer and more comfortable than buses, especially for elderly parents.</p>
        `,
            },
            {
                title: "3. Sacred Visits",
                content: `
          <p>Perform <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> with drivers who speak your language (Hindi/Urdu).</p>
          ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you have drivers who speak Hindi?",
                answer: "Yes, many of our drivers speak Hindi and Urdu fluently."
            },
            {
                question: "Is booking online safe?",
                answer: "Yes, our online system is secure. Pre-paying locks in your vehicle and price, so you don't have to worry about cash upon arrival."
            }
        ]
    },

    // 7. Malaysia
    {
        slug: "malaysia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MY",
        countryName: "Malaysia",
        flagEmoji: "🇲🇾",
        title: "Best Umrah Taxi for Malaysian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Malaysian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Trusted by Malaysian families. Fixed prices (MYR reference).",
        heroImage: "/images/guides/malaysia-umrah-transfer.jpg",
        currency: {
            code: "MYR",
            symbol: "RM",
            approxRate: "1 SAR ≈ 1.25 MYR",
        },
        flightInfo: {
            majorAirports: ["Kuala Lumpur (KUL)"],
            airlines: ["Malaysia Airlines", "Saudia", "AirAsia X"],
            flightDuration: "9 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa / Umrah Visa",
            cost: "~ 480 SAR (Visa)",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Keselesaan Untuk Jemaah Malaysia",
            whyBookPreArrival: [
                "Trusted service for Malaysian families",
                "Clean, air-conditioned vehicles guaranteed",
                "Fixed price booking online",
                "Driver waiting at arrivals hall",
            ],
            paymentMethods: [
                "Online: Credit Card / Debit Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. Arrival at Jeddah Airport",
                content: `
          <p>Malaysian travelers expect organization and cleanliness. Don't rely on random airport taxis. Book our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> for a private, hygienic transfer.</p>
        `,
            },
            {
                title: "2. Makkah to Madinah Journey",
                content: `
          <p>Enjoy a scenic drive with our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a>. Our drivers stop at clean rest areas, ensuring comfort for your family.</p>
        `,
            },
            {
                title: "3. Ziarrah (Ziyarat)",
                content: `
          <p>Complete your Umrah with <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a>. We take you to all historic sites including Uhud and Quba.</p>
           ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Ringgit?",
                answer: "No, drivers only accept Saudi Riyals. Please exchange your Ringgit at the airport or in Malaysia before flying."
            },
            {
                question: "How do I find my driver?",
                answer: "Our driver will be waiting at the arrival hall holding a sign with your name. We also send vehicle details via WhatsApp."
            }
        ]
    },

    // 8. Singapore
    {
        slug: "singapore-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SG",
        countryName: "Singapore",
        flagEmoji: "🇸🇬",
        title: "Premium Umrah Taxi for Singaporean Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Singaporean pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Lexus/GMC comfort, fixed pricing (SGD ref), and VIP service.",
        heroImage: "/images/guides/singapore-umrah-transfer.jpg",
        currency: {
            code: "SGD",
            symbol: "S$",
            approxRate: "1 SGD ≈ 2.80 SAR",
        },
        flightInfo: {
            majorAirports: ["Singapore Changi (SIN)"],
            airlines: ["Saudia", "Scoot", "Singapore Airlines (via Dubai/Doha)"],
            flightDuration: "9-10 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 170 SGD",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Efficient & Premium Transport",
            whyBookPreArrival: [
                "High standard of cleanliness and punctuality",
                "Avoid the chaos of taxi queues",
                "Premium vehicle options (Lexus, GMC)",
                "Cashless online payment available",
            ],
            paymentMethods: [
                "Online: Credit Card (Preferred)",
                "Cash: Saudi Riyals (SAR) Only",
            ],
        },
        contentSections: [
            {
                title: "1. VIP Arrival Experience",
                content: `
          <p>Singaporeans value efficiency. The chaos of Jeddah's taxi stands is not for you. Pre-book our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> for a seamless, VIP experience.</p>
        `,
            },
            {
                title: "2. Makkah to Madinah in Comfort",
                content: `
          <p>Travel between the Holy Cities in a Lexus ES or GMC Yukon using our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service. Cleanliness and safe driving are guaranteed.</p>
        `,
            },
            {
                title: "3. Educational Ziyarat",
                content: `
          <p>Book private <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours to learn about Islamic history in comfort.</p>
          ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Which terminal does Scoot fly into?",
                answer: "Scoot flights typically arrive at the North Terminal (manageable, but basic). Saudia flights arrive at the new Terminal 1."
            },
            {
                question: "Are child seats available?",
                answer: "Yes, please request them in advance during your booking."
            }
        ]
    },

    // 9. Indonesia
    {
        slug: "indonesia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ID",
        countryName: "Indonesia",
        flagEmoji: "🇮🇩",
        title: "Taksi Umrah Resmi untuk Jamaah Indonesia: Bandara Jeddah ke Makkah",
        metaDescription: "Pesan taksi Umrah terbaik untuk jamaah Indonesia. Jemputan pribadi Bandara Jeddah ke Makkah & Madinah. Mobil HiAce untuk rombongan. Harga tetap.",
        heroImage: "/images/guides/indonesia-umrah-transfer.jpg",
        currency: {
            code: "IDR",
            symbol: "Rp",
            approxRate: "1 SAR ≈ 4,200 IDR",
        },
        flightInfo: {
            majorAirports: ["Jakarta (CGK)", "Surabaya (SUB)", "Medan (KNO)"],
            airlines: ["Garuda Indonesia", "Saudia", "Lion Air"],
            flightDuration: "9-10 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "90 Days",
        },
        taxiBooking: {
            heading: "Transportasi Nyaman untuk Keluarga",
            whyBookPreArrival: [
                "Cocok untuk rombongan keluarga besar (HiAce)",
                "Harga tetap, tidak perlu tawar-menawar",
                "Supir menunggu di bandara",
                "Booking mudah via WhatsApp/Online",
            ],
            paymentMethods: [
                "Online: Credit Card",
                "Cash: Saudi Riyals (SAR) Wajib",
            ],
        },
        contentSections: [
            {
                title: "1. Penjemputan di Bandara Jeddah",
                content: `
          <p>Bagi jamaah mandiri (non-group), kami menyediakan layanan <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Taksi Bandara Jeddah ke Makkah</a> yang aman dan amanah.</p>
          <p>Pesan mobil besar seperti Toyota HiAce jika Anda membawa banyak koper dan air Zamzam nantinya.</p>
        `,
            },
        ],
        faqs: [
            {
                question: "Bisa bayar pakai Rupiah?",
                answer: "Sebaiknya tidak. Kurs Rupiah di sini sangat rendah. Harap bayar dengan Riyal atau kartu kredit online."
            },
            {
                question: "Apakah muat untuk 7 orang?",
                answer: "Untuk 7 orang dengan bagasi, Anda harus memesan Toyota HiAce. Mobil biasa (sedan) tidak akan cukup."
            }
        ]
    },

    // 10. South Africa
    {
        slug: "south-africa-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ZA",
        countryName: "South Africa",
        flagEmoji: "🇿🇦",
        title: "Trusted Umrah Taxi for South African Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for South African pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (ZAR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/south-africa-umrah-transfer.jpg",
        currency: {
            code: "ZAR",
            symbol: "R",
            approxRate: "1 SAR ≈ 5 ZAR",
        },
        flightInfo: {
            majorAirports: ["Johannesburg (JNB)", "Cape Town (CPT)", "Durban (DUR)"],
            airlines: ["Saudia", "Emirates", "Qatar Airways", "Ethiopian Airlines"],
            flightDuration: "8-10 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 900 ZAR",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Safe & Reliable Transport",
            whyBookPreArrival: [
                "Peace of mind for families traveling long distance",
                "Trusted service - no airport hustlers",
                "Large vehicles for extra luggage",
                "Transparent pricing in SAR",
            ],
            paymentMethods: [
                "Online: Credit Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>South African hujjaj are known for their meticulous preparation. Don't leave your ground transport to chance. Pre-book your <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> to ensure a driver is waiting for you after your long flight from Johannesburg or Cape Town.</p>
            <p>We provide spacious vehicles like the GMC Yukon or Toyota HiAce, perfect for families with luggage.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>For your journey to the Prophet's City, our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service offers a comfortable, private ride, allowing you to reflect and rest.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Enhance your pilgrimage with our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit historical sites safely and comfortably.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Rands (ZAR)?",
                answer: "No, Rands are not accepted by taxi drivers. Please exchange to Saudi Riyals (SAR) or US Dollars before your trip, or use our online booking system."
            },
            {
                question: "How reliable are the pickup times?",
                answer: "We track your flight arrival. If your flight from Johannesburg or Cape Town is delayed, our driver will adjust the pickup time accordingly at no extra cost."
            }
        ]
    },

    // 11. Turkey
    {
        slug: "turkey-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TR",
        countryName: "Turkey",
        flagEmoji: "🇹🇷",
        title: "Trusted Umrah Taxi for Turkish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Turkish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Mercedes/GMC vehicles. 24/7 Turkish support available.",
        heroImage: "/images/guides/turkey-umrah-transfer.jpg",
        currency: {
            code: "TRY",
            symbol: "₺",
            approxRate: "1 SAR ≈ 8-9 TRY (Variable)",
        },
        flightInfo: {
            majorAirports: ["Istanbul (IST)", "Sabiha Gokcen (SAW)", "Ankara (ESB)"],
            airlines: ["Turkish Airlines", "Saudia", "Pegasus", "Flynas"],
            flightDuration: "3-4 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa / Umrah Visa",
            cost: "Varies",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Hac ve Umre için Özel Transfer",
            whyBookPreArrival: [
                "Türk hacılar için güvenilir hizmet",
                "Havalimanında bekleme yapmadan otele transfer",
                "Geniş araç seçenekleri (Vito/Sprinter muadili GMC/HiAce)",
                "Sabit fiyat garantisi",
            ],
            paymentMethods: [
                "Online: Kredi Kartı (Recommended)",
                "Nakit: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Istanbul or Ankara? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome. We offer vehicles similar to Mercedes Vito (GMC/HiAce) for your comfort.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Ödeme Hakkında:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Şoförlerimiz Türk Lirası (TL) kabul etmemektedir. Lütfen ödemeyi Suudi Riyali (SAR) olarak yapınız veya web sitemizden kredi kartı ile güvenle ödeyiniz.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "TL ile ödeme yapabilir miyim?",
                answer: "Maalesef hayır. Şoförler sadece Riyal kabul eder. Kredi kartınızla online ödeme yapmanız en kolay yoldur."
            },
            {
                question: "Araçlarınız klimalı mı?",
                answer: "Evet, tüm araçlarımız (GMC, Toyota, Lexus) son model ve yüksek performanslı klimalara sahiptir."
            }
        ]
    },

    // 12. Egypt
    {
        slug: "egypt-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "EG",
        countryName: "Egypt",
        flagEmoji: "🇪🇬",
        title: "Trusted Umrah Taxi for Egyptian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Egyptian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Affordable rates (Camry/HiAce). Arabic speaking drivers.",
        heroImage: "/images/guides/egypt-umrah-transfer.jpg",
        currency: {
            code: "EGP",
            symbol: "E£",
            approxRate: "1 SAR ≈ 13 EGP",
        },
        flightInfo: {
            majorAirports: ["Cairo (CAI)", "Borg El Arab (HBE)", "Sharm El Sheikh (SSH)"],
            airlines: ["EgyptAir", "Saudia", "Flynas", "Air Cairo"],
            flightDuration: "2 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "90 Days",
        },
        taxiBooking: {
            heading: "Limousine Service from Jeddah Airport",
            whyBookPreArrival: [
                "Avoid haggling with airport touts",
                "Fixed price (know before you go)",
                "Respectful service for families",
                "Direct to hotel in Makkah",
            ],
            paymentMethods: [
                "Online: Credit Card / Debit Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>For our Egyptian brothers and sisters arriving from Cairo or Alexandria, we offer a <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service that respects your budget and need for comfort. No need to negotiate prices at the curb.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> is a popular choice for Egyptian families, offering a direct and hassle-free transfer.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Perform <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> with our knowledgeable drivers who speak your language.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Payment Note:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Please pay in SAR. Egyptian Pounds (EGP) are not accepted by drivers due to exchange volatility.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Is the price per person or per car?",
                answer: "The price is per Car. If you book a Camry, it is for up to 4 passengers."
            },
            {
                question: "Do drivers speak Arabic?",
                answer: "Yes, all our drivers are fluent in Arabic."
            }
        ]
    },

    // 13. France
    {
        slug: "france-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "FR",
        countryName: "France",
        flagEmoji: "🇫🇷",
        title: "Trusted Umrah Taxi for French Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for French pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Premium vehicles, fixed prices (EUR ref).",
        heroImage: "/images/guides/france-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Paris CDG", "Lyon (LYS)", "Marseille (MRS)"],
            airlines: ["Saudia", "Air France", "Transavia"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 120 EUR",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Service de Transfert Premium",
            whyBookPreArrival: [
                "Chauffeurs ponctuels",
                "Véhicules spacieux et propres",
                "Prix fixe en ligne (pas de surprise)",
                "Service client réactif",
            ],
            paymentMethods: [
                "Online: Carte Bancaire (Recommended)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Paris or Lyon? Ensure your journey starts smoothly with our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a>. We offer premium vehicles that meet European standards of comfort and safety.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel in style with our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service. Enjoy a private, air-conditioned ride across the desert.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Discover the history of Islam with our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Note sur le paiement:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Nos chauffeurs n'acceptent pas les Euros en espèces. Nous recommandons fortement de payer en ligne ou d'avoir des Riyals (SAR).
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Avez-vous des sièges bébé?",
                answer: "Oui, disponibles sur demande lors de la réservation."
            },
            {
                question: "Puis-je payer en Euros?",
                answer: "Il est préférable de payer en ligne par carte. Les espèces en Euros ne sont généralement pas acceptées par les chauffeurs."
            }
        ]
    },

    // 14. Germany
    {
        slug: "germany-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "DE",
        countryName: "Germany",
        flagEmoji: "🇩🇪",
        title: "Trusted Umrah Taxi for German Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for German pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Reliable, punctual, German-standard service.",
        heroImage: "/images/guides/germany-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Frankfurt (FRA)", "Munich (MUC)", "Berlin (BER)"],
            airlines: ["Lufthansa", "Saudia", "Eurowings"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 120 EUR",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Deutscher Standard in Saudi-Arabien",
            whyBookPreArrival: [
                "Pünktlichkeit und Zuverlässigkeit",
                "Saubere, moderne Fahrzeuge",
                "Festpreisgarantie",
                "Fahrer wartet am Gate",
            ],
            paymentMethods: [
                "Online: Kreditkarte / Sofort",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>We bring German reliability to Saudi Arabia. Book our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> for a punctual and high-quality transfer from the airport to your hotel.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>For the long journey to Madinah, rely on our safe <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service. Safety and comfort are our top priorities.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Explore the holy sites with our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Zahlungshinweis:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Bitte zahlen Sie in Saudi-Riyal (SAR) oder bequem online. Euro werden von den Fahrern meist nicht akzeptiert.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Sprechen die Fahrer Deutsch?",
                answer: "Einige sprechen etwas Deutsch, aber alle sprechen Arabisch und Englisch."
            },
            {
                question: "Wie finde ich meinen Fahrer?",
                answer: "Der Fahrer wartet mit einem Namensschild am Ausgang der Ankunftshalle auf Sie."
            }
        ]
    },

    // 15. Nigeria
    {
        slug: "nigeria-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "NG",
        countryName: "Nigeria",
        flagEmoji: "🇳🇬",
        title: "Trusted Umrah Taxi for Nigerian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Nigerian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Large HiAce vans for groups. Pay in SAR.",
        heroImage: "/images/guides/nigeria-umrah-transfer.jpg",
        currency: {
            code: "NGN",
            symbol: "₦",
            approxRate: "1 SAR ≈ 400+ NGN (Volatile)",
        },
        flightInfo: {
            majorAirports: ["Lagos (LOS)", "Kano (KAN)", "Abuja (ABV)"],
            airlines: ["Saudia", "Air Peace", "EgyptAir", "Ethiopian"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Umrah Visa / E-Visa (if eligible)",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Trusted Transport for Nigerian Families",
            whyBookPreArrival: [
                "Safety and security focused",
                "Large vehicles for heavy luggage",
                "Avoid airport hassles",
                "Professional handling",
            ],
            paymentMethods: [
                "Online: International Card",
                "Cash: Saudi Riyals (SAR) Only",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>For our Nigerian brothers and sisters, we offer a service based on trust and respect. Book your <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> to ensure a safe journey from the airport to your hotel.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel comfortably with our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a>. Our Toyota HiAce vans are perfect for large family groups with luggage.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Visit the holy sites with our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Strict Currency Rule:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Naira (NGN) is <strong>NOT accepted</strong> in Saudi Arabia. You MUST bring US Dollars or Saudi Riyals to pay cash, or book online with a card.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Naira?",
                answer: "No. You must exchange NGN for USD or SAR before leaving Nigeria."
            },
            {
                question: "How much luggage can we carry?",
                answer: "Our Toyota HiAce vans are perfect for groups with many bags."
            }
        ]
    },

    // 16. Bangladesh
    {
        slug: "bangladesh-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BD",
        countryName: "Bangladesh",
        flagEmoji: "🇧🇩",
        title: "Trusted Umrah Taxi for Bangladeshi Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Bangladeshi pilgrims. Private Jeddah Airport pickup. Bengali speaking support. HiAce for groups.",
        heroImage: "/images/guides/bangladesh-umrah-transfer.jpg",
        currency: {
            code: "BDT",
            symbol: "৳",
            approxRate: "1 SAR ≈ 30-32 BDT",
        },
        flightInfo: {
            majorAirports: ["Dhaka (DAC)", "Chittagong (CGP)", "Sylhet (ZYL)"],
            airlines: ["Biman Bangladesh", "Saudia", "US-Bangla"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Hassle-Free Journey to Makkah",
            whyBookPreArrival: [
                "Avoid language problems",
                "Fixed rates (No bargaining needed)",
                "Large vans (HiAce) for families",
                "Driver waits for delayed flights",
            ],
            paymentMethods: [
                "Online: Credit Card",
                "Cash: Saudi Riyals (SAR) Only",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>We welcome thousands of pilgrims from Bangladesh every month. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> ensures you travel in large family groups with reliable transport.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Book our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> for a safe and comfortable trip to the Prophet's Mosque.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Experience <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> with drivers who respect your traditions.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Taka Not Accepted:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Drivers cannot accept Bangladeshi Taka. Please bring Riyals or Dollars.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Bengali?",
                answer: "Some drivers speak Bengali, but most speak Arabic/Urdu/English. We have Bengali support via WhatsApp if needed."
            },
            {
                question: "Is there space for Zamzam water?",
                answer: "Yes, our large vehicles have plenty of space."
            }
        ]
    },

    // 17. Philippines
    {
        slug: "philippines-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "PH",
        countryName: "Philippines",
        flagEmoji: "🇵🇭",
        title: "Trusted Umrah Taxi for Filipino Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Filipino pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Safe, fixed price. Kabayan friendly.",
        heroImage: "/images/guides/philippines-umrah-transfer.jpg",
        currency: {
            code: "PHP",
            symbol: "₱",
            approxRate: "1 SAR ≈ 15 PHP",
        },
        flightInfo: {
            majorAirports: ["Manila (MNL)"],
            airlines: ["Philippine Airlines", "Saudia"],
            flightDuration: "9-10 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Safe Transport for Kabayan",
            whyBookPreArrival: [
                "Trusted service",
                "Safety is priority",
                "Fixed price (No overcharging)",
                "Online booking convenience",
            ],
            paymentMethods: [
                "Online: Credit Card / GCash (via Card)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Mabuhay! Whether you are coming for Umrah or visiting family, our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> ensures receive a safe, comfortable, and respectful service.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel to Madinah with our reliable <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service. Enjoy the scenic desert route in comfort.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Don't miss the historical sites. Book <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Payment:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Please pay in SAR. Pesos are not commonly accepted by taxi drivers.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "How far is Makkah?",
                answer: "It takes about 1 hour and 15 minutes by car."
            },
            {
                question: "Can I pay with Peso?",
                answer: "No, please exchange to SAR at the airport or pay online."
            }
        ]
    },

    // 18. Netherlands
    {
        slug: "netherlands-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "NL",
        countryName: "Netherlands",
        flagEmoji: "🇳🇱",
        title: "Trusted Umrah Taxi for Dutch Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Dutch pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Premium Mercedes/GMC transfers. Fixed online pricing.",
        heroImage: "/images/guides/netherlands-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Amsterdam Schiphol (AMS)"],
            airlines: ["KLM", "Saudia", "Transavia"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 120 EUR",
            validity: "1 Year Multiple",
        },
        taxiBooking: {
            heading: "Dutch Efficiency in Transport",
            whyBookPreArrival: [
                "Direct, non-stop transfer",
                "No waiting or queuing",
                "Fixed price agreed in advance",
                "Premium vehicles available",
            ],
            paymentMethods: [
                "Online: iDEAL (via Card) / Credit Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Start your pilgrimage with peace of mind. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> ensures you are met at the arrival hall by a professional driver.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service offers a smooth link between the Holy Cities.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>Learn about Islamic history with our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours.</p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <p class="font-bold text-yellow-800">⚠️ Cash Payment:</p>
                <p class="text-yellow-700 text-sm mt-1">
                    Drivers do not accept Euro coins or notes. Please use SAR or book online.
                </p>
            </div>
        `,
            },
        ],
        faqs: [
            {
                question: "Are child seats mandatory?",
                answer: "Not mandatory by law in taxis, but highly recommended. We provide them on request."
            },
            {
                question: "Do you have large vans?",
                answer: "Yes, we have GMC Yukon (7 seats) and Toyota HiAce (10 seats) for larger families."
            }
        ]
    },

    // 19. Sri Lanka
    {
        slug: "sri-lanka-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "LK",
        countryName: "Sri Lanka",
        flagEmoji: "🇱🇰",
        title: "Trusted Umrah Taxi for Sri Lanka Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Sri Lanka pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (LKR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/srilanka-umrah-transfer.jpg",
        currency: {
            code: "LKR",
            symbol: "Rs",
            approxRate: "1 SAR ≈ 80-85 LKR",
        },
        flightInfo: {
            majorAirports: ["Colombo (CMB)"],
            airlines: ["SriLankan Airlines", "Saudia"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Reliable Service for Sri Lankans",
            whyBookPreArrival: [
                "Family friendly service",
                "Help with luggage",
                "Fixed affordable rates",
                "No hidden costs",
            ],
            paymentMethods: [
                "Online: Credit Card",
                "Cash: Saudi Riyals (SAR) Only",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Colombo? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can we stop for food on the way?",
                answer: "Yes, just ask your driver. There are many rest stops on the highway."
            },
            {
                question: "Is the detailed price final?",
                answer: "Yes, the price you book is the price you pay. No extra charges."
            }
        ]
    },

    // 20. Algeria
    {
        slug: "algeria-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "DZ",
        countryName: "Algeria",
        flagEmoji: "🇩🇿",
        title: "Trusted Umrah Taxi for Algerian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Algerian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (DZD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/algeria-umrah-transfer.jpg",
        currency: {
            code: "DZD",
            symbol: "DA",
            approxRate: "1 SAR ≈ 35-40 DZD",
        },
        flightInfo: {
            majorAirports: ["Algiers (ALG)", "Oran (ORN)"],
            airlines: ["Air Algérie", "Saudia"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service de Confiance pour les Algériens",
            whyBookPreArrival: [
                "Chauffeurs parlant Arabe",
                "Service respectueux",
                "Véhicules pour familles nombreuses",
                "Prix clairs sans négociation",
            ],
            paymentMethods: [
                "Online: Carte Bancaire",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Algiers? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Les chauffeurs parlent-ils Français?",
                answer: "Beaucoup comprennent le français, et tous parlent Arabe."
            },
            {
                question: "Acceptez-vous les Dinars?",
                answer: "Non, uniquement les Riyals ou paiement par carte en ligne."
            }
        ]
    },

    // 21. Morocco
    {
        slug: "morocco-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MA",
        countryName: "Morocco",
        flagEmoji: "🇲🇦",
        title: "Trusted Umrah Taxi for Moroccan Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Moroccan pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (MAD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/morocco-umrah-transfer.jpg",
        currency: {
            code: "MAD",
            symbol: "DH",
            approxRate: "1 SAR ≈ 2.7 MAD",
        },
        flightInfo: {
            majorAirports: ["Casablanca (CMN)", "Marrakech (RAK)"],
            airlines: ["Royal Air Maroc", "Saudia"],
            flightDuration: "6-7 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service de Qualité pour les Marocains",
            whyBookPreArrival: [
                "Évitez les négociations difficiles",
                "Chauffeurs respectueux",
                "Véhicules spacieux pour les bagages",
                "Réservation simple et rapide",
            ],
            paymentMethods: [
                "Online: Carte Bancaire",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Casablanca? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Puis-je payer en Dirhams?",
                answer: "Non, uniquement en Riyals (SAR) ou par carte bancaire en ligne."
            },
            {
                question: "Les chauffeurs parlent-ils Darija?",
                answer: "Ils parlent l'Arabe classique et comprennent souvent les dialectes, ainsi que le Français."
            }
        ]
    },

    // 22. Tunisia
    {
        slug: "tunisia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TN",
        countryName: "Tunisia",
        flagEmoji: "🇹🇳",
        title: "Trusted Umrah Taxi for Tunisian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Tunisian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (TND reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/tunisia-umrah-transfer.jpg",
        currency: {
            code: "TND",
            symbol: "DT",
            approxRate: "1 TND ≈ 1.2 SAR",
        },
        flightInfo: {
            majorAirports: ["Tunis-Carthage (TUN)"],
            airlines: ["Tunisair", "Saudia"],
            flightDuration: "4-5 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Transfert Sécurisé pour les Aigles de Carthage",
            whyBookPreArrival: [
                "Accueil personnalisé",
                "Prix fixe sans surprise",
                "Confort total après le vol",
                "Service fiable",
            ],
            paymentMethods: [
                "Online: Carte Bancaire",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Tunis-Carthage? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Acceptez-vous les Dinars Tunisiens?",
                answer: "Non, impossible. Veuillez payer en SAR."
            },
            {
                question: "Combien de temps dure le trajet?",
                answer: "Environ 1h15 de l'aéroport de Jeddah à La Mecque."
            }
        ]
    },

    // 23. Uzbekistan
    {
        slug: "uzbekistan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "UZ",
        countryName: "Uzbekistan",
        flagEmoji: "🇺🇿",
        title: "Trusted Umrah Taxi for Uzbek Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Uzbek pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (UZS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/uzbekistan-umrah-transfer.jpg",
        currency: {
            code: "UZS",
            symbol: "so'm",
            approxRate: "1 SAR ≈ 3,300 UZS",
        },
        flightInfo: {
            majorAirports: ["Tashkent (TAS)"],
            airlines: ["Uzbekistan Airways", "Flynas", "Saudia"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "90 Days",
        },
        taxiBooking: {
            heading: "Reliable Transport for O'zbekistonliklar",
            whyBookPreArrival: [
                "Avoid language barriers",
                "Fixed pricing",
                "Large vans for groups",
                "Respectful service",
            ],
            paymentMethods: [
                "Online: Visa/Mastercard",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Tashkent? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Russian?",
                answer: "Many of our drivers speak basic Russian or English, alongside Arabic."
            },
            {
                question: "Can we pay in Som?",
                answer: "No, Som is not accepted. Please use SAR."
            }
        ]
    },

    // 24. Russia
    {
        slug: "russia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "RU",
        countryName: "Russia",
        flagEmoji: "🇷🇺",
        title: "Trusted Umrah Taxi for Russian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Russian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (RUB reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/russia-umrah-transfer.jpg",
        currency: {
            code: "RUB",
            symbol: "₽",
            approxRate: "1 SAR ≈ 24 RUB",
        },
        flightInfo: {
            majorAirports: ["Moscow (SVO/DME)", "Kazan (KZN)", "Grozny (GRV)"],
            airlines: ["Aeroflot", "Saudia", "Utair"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ $120",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Transfer Service for Russian Muslims",
            whyBookPreArrival: [
                "Safe and secure",
                "Fixed price (No bargaining)",
                "Comfortable AC cars",
                "Online payment avoids currency issues",
            ],
            paymentMethods: [
                "Online: UnionPay / International Cards",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Moscow? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept UnionPay?",
                answer: "Yes, we accept UnionPay for online bookings."
            },
            {
                question: "Can I pay in Rubles?",
                answer: "No, drivers do not accept Rubles."
            }
        ]
    },

    // 25. China
    {
        slug: "china-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "CN",
        countryName: "China",
        flagEmoji: "🇨🇳",
        title: "Trusted Umrah Taxi for Chinese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Chinese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (CNY reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/china-umrah-transfer.jpg",
        currency: {
            code: "CNY",
            symbol: "¥",
            approxRate: "1 SAR ≈ 1.9 CNY",
        },
        flightInfo: {
            majorAirports: ["Guangzhou (CAN)", "Beijing (PEK)", "Urumqi (URC)"],
            airlines: ["China Southern", "Saudia", "Air China"],
            flightDuration: "9-10 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 800 CNY",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Trusted Service for Chinese Hujjaj",
            whyBookPreArrival: [
                "Clear communication via WeChat/WhatsApp",
                "No hidden fees",
                "Drivers wait for you",
                "Safe for families",
            ],
            paymentMethods: [
                "Online: Alipay / WeChat Pay (via partner) / Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Guangzhou? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay with WeChat Pay?",
                answer: "Directly to the driver? No. Please book online."
            },
            {
                question: "Is there chinese speaking staff?",
                answer: "Most communication is in English/Arabic, but we use translation tools to assist you."
            }
        ]
    },

    // 26. Iraq
    {
        slug: "iraq-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "IQ",
        countryName: "Iraq",
        flagEmoji: "🇮🇶",
        title: "Trusted Umrah Taxi for Iraqi Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Iraqi pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (IQD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/iraq-umrah-transfer.jpg",
        currency: {
            code: "IQD",
            symbol: "IQD",
            approxRate: "1 SAR ≈ 350 IQD",
        },
        flightInfo: {
            majorAirports: ["Baghdad (BGW)", "Erbil (EBL)", "Najaf (NJF)"],
            airlines: ["Iraqi Airways", "Fly Baghdad", "Saudia"],
            flightDuration: "2-3 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Ahlan wa Sahlan to our Iraqi Brothers",
            whyBookPreArrival: [
                "Arabic speaking drivers",
                "Respectful treatment",
                "Large vehicles for families",
                "Fair pricing",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Baghdad? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept US Dollars?",
                answer: "Yes, US Dollars are generally accepted, but SAR is preferred for small change."
            },
            {
                question: "How far is the Miqat?",
                answer: "If landing in Jeddah for Umrah, you should have assumed Ihram on the plane (Yalamlam)."
            }
        ]
    },

    // 27. Sudan
    {
        slug: "sudan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SD",
        countryName: "Sudan",
        flagEmoji: "🇸🇩",
        title: "Trusted Umrah Taxi for Sudanese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Sudanese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (SDG reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/sudan-umrah-transfer.jpg",
        currency: {
            code: "SDG",
            symbol: "SDG",
            approxRate: "Variable",
        },
        flightInfo: {
            majorAirports: ["Port Sudan (PZU)"],
            airlines: ["Tarco Air", "Badr Airlines", "Saudia"],
            flightDuration: "1 hour",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Reliable Service for Sudanese",
            whyBookPreArrival: [
                "Understand your needs",
                "Help with luggage",
                "No overcharging",
                "Direct to Makkah",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Port Sudan? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in USD?",
                answer: "Yes, USD is widely accepted if you don't have SAR."
            },
            {
                question: "Is the price fixed?",
                answer: "Yes, the price is fixed to avoid any confusion."
            }
        ]
    },

    // 28. Libya
    {
        slug: "libya-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "LY",
        countryName: "Libya",
        flagEmoji: "🇱🇾",
        title: "Trusted Umrah Taxi for Libyan Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Libyan pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (LYD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/libya-umrah-transfer.jpg",
        currency: {
            code: "LYD",
            symbol: "LD",
            approxRate: "1 SAR ≈ 1.3 LYD",
        },
        flightInfo: {
            majorAirports: ["Tripoli (MJI)", "Benghazi (BEN)"],
            airlines: ["Libyan Wings", "Berniq", "Afriqiyah"],
            flightDuration: "4 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Libyan Families",
            whyBookPreArrival: [
                "Respectful and private",
                "Comfortable cars",
                "Arabic speaking",
                "Waiting at airport",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Tripoli? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you go to Madinah?",
                answer: "Yes, we can arrange transport to Madinah as well."
            },
            {
                question: "Are there breaks on the road?",
                answer: "Yes, there are rest stops available."
            }
        ]
    },

    // 29. Jordan
    {
        slug: "jordan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "JO",
        countryName: "Jordan",
        flagEmoji: "🇯🇴",
        title: "Trusted Umrah Taxi for Jordanian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Jordanian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (JOD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/jordan-umrah-transfer.jpg",
        currency: {
            code: "JOD",
            symbol: "JD",
            approxRate: "1 JOD ≈ 5.3 SAR",
        },
        flightInfo: {
            majorAirports: ["Queen Alia (AMM)"],
            airlines: ["Royal Jordanian", "Saudia", "Fly Jordan"],
            flightDuration: "2 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Nashama Transport",
            whyBookPreArrival: [
                "Quick and efficient",
                "No waiting",
                "Arabic speaking",
                "Fixed rates",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Queen Alia? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you take families?",
                answer: "Yes, we have family vans available."
            },
            {
                question: "How long is the ride?",
                answer: "About 75 minutes to Makkah."
            }
        ]
    },

    // 30. Lebanon
    {
        slug: "lebanon-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "LB",
        countryName: "Lebanon",
        flagEmoji: "🇱🇧",
        title: "Trusted Umrah Taxi for Lebanese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Lebanese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (LBP reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/lebanon-umrah-transfer.jpg",
        currency: {
            code: "LBP",
            symbol: "L£",
            approxRate: "Variable",
        },
        flightInfo: {
            majorAirports: ["Beirut (BEY)"],
            airlines: ["MEA", "Saudia"],
            flightDuration: "3 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Comfortable Ride for Lebanese",
            whyBookPreArrival: [
                "Premium service",
                "Clean vehicles",
                "Polite drivers",
                "No haggling",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Beirut? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in USD?",
                answer: "Yes, fresh USD is accepted."
            },
            {
                question: "Is the car private?",
                answer: "Yes, all our bookings are for private vehicles."
            }
        ]
    },

    // 31. Kazakhstan
    {
        slug: "kazakhstan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "KZ",
        countryName: "Kazakhstan",
        flagEmoji: "🇰🇿",
        title: "Trusted Umrah Taxi for Kazakhstani Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Kazakhstani pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (KZT reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/kazakhstan-umrah-transfer.jpg",
        currency: {
            code: "KZT",
            symbol: "₸",
            approxRate: "1 SAR ≈ 120 KZT",
        },
        flightInfo: {
            majorAirports: ["Almaty (ALA)", "Astana (NQZ)"],
            airlines: ["Air Astana", "FlyArystan", "Saudia"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Komfort dlya Kazakhstanskikh Palomnikov",
            whyBookPreArrival: [
                "Russian speaking drivers available",
                "Fixed price (No bargaining)",
                "Large vans for family groups",
                "Safe and official service",
            ],
            paymentMethods: [
                "Online: Kaspi Bank cards (Visa/MC)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Almaty? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept Kaspi Gold?",
                answer: "You can use your Kaspi Visa/Mastercard for online booking on our website."
            },
            {
                question: "Do drivers speak Russian?",
                answer: "Yes, we have Russian speaking support."
            }
        ]
    },

    // 32. Kyrgyzstan
    {
        slug: "kyrgyzstan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "KG",
        countryName: "Kyrgyzstan",
        flagEmoji: "🇰🇬",
        title: "Trusted Umrah Taxi for Kyrgyz Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Kyrgyz pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (KGS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/kyrgyzstan-umrah-transfer.jpg",
        currency: {
            code: "KGS",
            symbol: "с",
            approxRate: "1 SAR ≈ 23 KGS",
        },
        flightInfo: {
            majorAirports: ["Bishkek (FRU)", "Osh (OSS)"],
            airlines: ["Avia Traffic", "Flynas", "Saudia"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Values",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Kyrgyz Families",
            whyBookPreArrival: [
                "Reliable pickup",
                "Help with luggage",
                "No hidden fees",
                "Group transport experts",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Bishkek? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is it safe?",
                answer: "Yes, fully licensed and safe service."
            },
            {
                question: "Can we book a bus?",
                answer: "For very large groups, please contact us on WhatsApp for a Coaster bus."
            }
        ]
    },

    // 33. Azerbaijan
    {
        slug: "azerbaijan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AZ",
        countryName: "Azerbaijan",
        flagEmoji: "🇦🇿",
        title: "Trusted Umrah Taxi for Azerbaijani Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Azerbaijani pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (AZN reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/azerbaijan-umrah-transfer.jpg",
        currency: {
            code: "AZN",
            symbol: "₼",
            approxRate: "1 SAR ≈ 0.45 AZN",
        },
        flightInfo: {
            majorAirports: ["Baku (GYD)"],
            airlines: ["AZAL", "Flynas", "Qatar Airways"],
            flightDuration: "4 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Xoş gəlmisiniz",
            whyBookPreArrival: [
                "Turkish speaking drivers often available",
                "VIP Service",
                "Modern Cars",
                "Direct to Hotel",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Baku? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Manat?",
                answer: "No, please pay in SAR or USD."
            },
            {
                question: "Do drivers speak Turkish/Azeri?",
                answer: "Most speak Turkish which is very close to Azeri."
            }
        ]
    },

    // 34. Thailand
    {
        slug: "thailand-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TH",
        countryName: "Thailand",
        flagEmoji: "🇹🇭",
        title: "Trusted Umrah Taxi for Thai Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Thai pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (THB reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/thailand-umrah-transfer.jpg",
        currency: {
            code: "THB",
            symbol: "฿",
            approxRate: "1 SAR ≈ 9-10 THB",
        },
        flightInfo: {
            majorAirports: ["Bangkok (BKK)", "Phuket (HKT)"],
            airlines: ["Thai Airways", "Saudia", "Oman Air"],
            flightDuration: "8-9 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Sawasdee Krup",
            whyBookPreArrival: [
                "Reliable service",
                "Family friendly vans",
                "Helpful drivers",
                "Fixed Rates",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Bangkok? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can we stop for Halal food?",
                answer: "All food in Saudi Arabia is Halal. Your driver can stop at good restaurants."
            },
            {
                question: "Is there space for luggage?",
                answer: "Yes, our vans are spacious."
            }
        ]
    },

    // 35. Kuwait
    {
        slug: "kuwait-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "KW",
        countryName: "Kuwait",
        flagEmoji: "🇰🇼",
        title: "Trusted Umrah Taxi for Kuwaiti Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Kuwaiti pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (KWD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/kuwait-umrah-transfer.jpg",
        currency: {
            code: "KWD",
            symbol: "KD",
            approxRate: "1 KWD ≈ 12 SAR",
        },
        flightInfo: {
            majorAirports: ["Kuwait City (KWI)"],
            airlines: ["Kuwait Airways", "Jazeera", "Saudia"],
            flightDuration: "2 hours",
        },
        visaInfo: {
            type: "GCC Resident / Citizen (Visa Free/On Arrival)",
            cost: "Low/Free",
            validity: "Varied",
        },
        taxiBooking: {
            heading: "Hala bil Kuwait",
            whyBookPreArrival: [
                "Premium vehicles (GMC/Lexus)",
                "Privacy for families",
                "Drivers wait at terminal",
                "No waiting in heat",
            ],
            paymentMethods: [
                "Online: K-Net (via Credit Card)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Kuwait City? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you have Yukon?",
                answer: "Yes, we have latest model GMC Yukon XL."
            },
            {
                question: "Is it private?",
                answer: "Yes, 100% private."
            }
        ]
    },

    // 36. Oman
    {
        slug: "oman-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "OM",
        countryName: "Oman",
        flagEmoji: "🇴🇲",
        title: "Trusted Umrah Taxi for Omani Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Omani pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (OMR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/oman-umrah-transfer.jpg",
        currency: {
            code: "OMR",
            symbol: "RO",
            approxRate: "1 OMR ≈ 9.7 SAR",
        },
        flightInfo: {
            majorAirports: ["Muscat (MCT)"],
            airlines: ["Oman Air", "SalamAir", "Saudia"],
            flightDuration: "3 hours",
        },
        visaInfo: {
            type: "GCC Resident / Citizen",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Ahlan People of Oman",
            whyBookPreArrival: [
                "Respectful drivers",
                "Clean cars",
                "On time pickup",
                "Clear pricing",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Muscat? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "How long to Makkah?",
                answer: "about 1 hour 15 minutes."
            },
            {
                question: "Can I pay in OMR?",
                answer: "Drivers prefer SAR. Exchange at airport please."
            }
        ]
    },

    // 37. Bahrain
    {
        slug: "bahrain-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BH",
        countryName: "Bahrain",
        flagEmoji: "🇧🇭",
        title: "Trusted Umrah Taxi for Bahraini Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Bahraini pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (BHD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/bahrain-umrah-transfer.jpg",
        currency: {
            code: "BHD",
            symbol: "BD",
            approxRate: "1 BHD ≈ 10 SAR",
        },
        flightInfo: {
            majorAirports: ["Bahrain (BAH)"],
            airlines: ["Gulf Air", "Saudia"],
            flightDuration: "2 hours",
        },
        visaInfo: {
            type: "GCC Resident / Citizen",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Bahrain",
            whyBookPreArrival: [
                "Short flight, quick pickup",
                "No waiting",
                "Excellent cars",
                "Friendly service",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Bahrain? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you go to Madinah?",
                answer: "Yes."
            },
            {
                question: "Is it safe?",
                answer: "Yes, very safe."
            }
        ]
    },

    // 38. Qatar
    {
        slug: "qatar-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "QA",
        countryName: "Qatar",
        flagEmoji: "🇶🇦",
        title: "Trusted Umrah Taxi for Qatari Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Qatari pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (QAR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/qatar-umrah-transfer.jpg",
        currency: {
            code: "QAR",
            symbol: "QR",
            approxRate: "1 QAR ≈ 1 SAR",
        },
        flightInfo: {
            majorAirports: ["Doha (DOH)"],
            airlines: ["Qatar Airways", "Saudia"],
            flightDuration: "2.5 hours",
        },
        visaInfo: {
            type: "GCC Resident / Citizen",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Luxury Service for Qataris",
            whyBookPreArrival: [
                "High standards",
                "New cars",
                "Professional drivers",
                "Privacy",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Doha? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you have Lexus?",
                answer: "Yes, we have Lexus ES."
            },
            {
                question: "Is the driver vaccinated?",
                answer: "Yes."
            }
        ]
    },

    // 39. Belgium
    {
        slug: "belgium-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BE",
        countryName: "Belgium",
        flagEmoji: "🇧🇪",
        title: "Trusted Umrah Taxi for Belgian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Belgian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/belgium-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Brussels (BRU)"],
            airlines: ["Saudia", "Brussels Airlines", "Turkish Airlines"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 120 EUR",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service de Confiance / Betrouwbare Service",
            whyBookPreArrival: [
                "Fixed rates",
                "No surprises",
                "Comfortable ride",
                "Online booking",
            ],
            paymentMethods: [
                "Online: Card (Bancontact via Visa/MC)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Brussels? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Parlez-vous Français?",
                answer: "Oui, nous avons un support francophone."
            },
            {
                question: "Is it safe?",
                answer: "Yes, very safe."
            }
        ]
    },

    // 40. Spain
    {
        slug: "spain-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ES",
        countryName: "Spain",
        flagEmoji: "🇪🇸",
        title: "Trusted Umrah Taxi for Spanish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Spanish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/spain-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Madrid (MAD)", "Barcelona (BCN)"],
            airlines: ["Saudia", "Iberia", "Turkish Airlines"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 120 EUR",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Servicio de Taxi Confiable",
            whyBookPreArrival: [
                "Fixed price",
                "Comfortable cars",
                "No stress",
                "Family friendly",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Madrid? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Hablas español?",
                answer: "Some staff speak basic Spanish, but English/Arabic is best."
            },
            {
                question: "How far is Makkah?",
                answer: "75 minutes."
            }
        ]
    },

    // 41. Singapore
    {
        slug: "singapore-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SG",
        countryName: "Singapore",
        flagEmoji: "🇸🇬",
        title: "Trusted Umrah Taxi for Singapore Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Singapore pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (SGD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/singapore-umrah-transfer.jpg",
        currency: {
            code: "SGD",
            symbol: "S$",
            approxRate: "1 SGD ≈ 2.8 SAR",
        },
        flightInfo: {
            majorAirports: ["Changi (SIN)"],
            airlines: ["Singapore Airlines", "Scoot", "Saudia"],
            flightDuration: "8-9 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa / Visa Waiver",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Premium Service for Singaporeans",
            whyBookPreArrival: [
                "Standards matching Singapore",
                "Immaculate cleanliness",
                "Punctual drivers",
                "Online payment efficiency",
            ],
            paymentMethods: [
                "Online: Credit Card (Stripe)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Changi? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept PayNow?",
                answer: "Not directly, but you can use your Singapore credit card on our website."
            },
            {
                question: "Are child seats available?",
                answer: "Yes, upon request."
            }
        ]
    },

    // 42. Brunei
    {
        slug: "brunei-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BN",
        countryName: "Brunei",
        flagEmoji: "🇧🇳",
        title: "Trusted Umrah Taxi for Bruneian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Bruneian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (BND reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/brunei-umrah-transfer.jpg",
        currency: {
            code: "BND",
            symbol: "B$",
            approxRate: "1 BND ≈ 2.8 SAR",
        },
        flightInfo: {
            majorAirports: ["Brunei Intl (BWN)"],
            airlines: ["Royal Brunei", "Saudia"],
            flightDuration: "9 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Royal Service for Brunei",
            whyBookPreArrival: [
                "Utmost privacy",
                "Respectful staff",
                "Luxury vehicle options",
                "Direct transfer",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Brunei Intl? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is it a private car?",
                answer: "Yes, always private."
            },
            {
                question: "English speaking?",
                answer: "Yes, drivers speak basic English."
            }
        ]
    },

    // 43. Maldives
    {
        slug: "maldives-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MV",
        countryName: "Maldives",
        flagEmoji: "🇲🇻",
        title: "Trusted Umrah Taxi for Maldivian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Maldivian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (MVR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/maldives-umrah-transfer.jpg",
        currency: {
            code: "MVR",
            symbol: "Rf",
            approxRate: "1 SAR ≈ 4.1 MVR",
        },
        flightInfo: {
            majorAirports: ["Velana (MLE)"],
            airlines: ["Saudia", "Qatar Airways", "Emirates"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Maldivians",
            whyBookPreArrival: [
                "Friendly service",
                "Help with luggage",
                "Good rates",
                "A/C Vehicles",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
                "Cash: USD",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Velana? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept USD?",
                answer: "Yes, USD is accepted."
            },
            {
                question: "Large groups?",
                answer: "We have vans for large families."
            }
        ]
    },

    // 44. Bosnia
    {
        slug: "bosnia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BA",
        countryName: "Bosnia & Herzegovina",
        flagEmoji: "🇧🇦",
        title: "Trusted Umrah Taxi for Bosnian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Bosnian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (BAM reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/bosnia-umrah-transfer.jpg",
        currency: {
            code: "BAM",
            symbol: "KM",
            approxRate: "1 BAM ≈ 2.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Sarajevo (SJJ)"],
            airlines: ["Flynas", "Turkish Airlines", "Saudia"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Dobrodošli Bosnians",
            whyBookPreArrival: [
                "Safe and secure",
                "Fixed prices",
                "Nice cars",
                "Worry-free",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Sarajevo? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Euro?",
                answer: "Yes, Euro notes are often accepted, but SAR is better."
            },
            {
                question: "Distance?",
                answer: "75 mins to Makkah."
            }
        ]
    },

    // 45. Albania
    {
        slug: "albania-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AL",
        countryName: "Albania",
        flagEmoji: "🇦🇱",
        title: "Trusted Umrah Taxi for Albanian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Albanian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (ALL reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/albania-umrah-transfer.jpg",
        currency: {
            code: "ALL",
            symbol: "Lek",
            approxRate: "1 SAR ≈ 25 ALL",
        },
        flightInfo: {
            majorAirports: ["Tirana (TIA)"],
            airlines: ["Air Albania", "Saudia", "Flynas"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Transport for Shqiptarët",
            whyBookPreArrival: [
                "Respectful drivers",
                "On time",
                "Fair price",
                "Comfortable",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Tirana? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is smoking allowed?",
                answer: "No, our cars are smoke-free."
            },
            {
                question: "Do you have WiFi?",
                answer: "We can provide hotspot on request."
            }
        ]
    },

    // 46. Kosovo
    {
        slug: "kosovo-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "XK",
        countryName: "Kosovo",
        flagEmoji: "🇽🇰",
        title: "Trusted Umrah Taxi for Kosovan Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Kosovan pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/kosovo-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Pristina (PRN)"],
            airlines: ["Flynas", "Turkish Airlines"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Kosovo",
            whyBookPreArrival: [
                "Direct transfer",
                "No waiting",
                "Clean cars",
                "Fixed rates",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Pristina? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept Euro?",
                answer: "Yes, but change will be in SAR."
            },
            {
                question: "How long is the ride?",
                answer: "About 1 hour 15 mins."
            }
        ]
    },

    // 47. Sweden
    {
        slug: "sweden-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SE",
        countryName: "Sweden",
        flagEmoji: "🇸🇪",
        title: "Trusted Umrah Taxi for Swedish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Swedish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (SEK reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/sweden-umrah-transfer.jpg",
        currency: {
            code: "SEK",
            symbol: "kr",
            approxRate: "1 SAR ≈ 2.8 SEK",
        },
        flightInfo: {
            majorAirports: ["Stockholm (ARN)", "Gothenburg (GOT)"],
            airlines: ["SAS", "Turkish Airlines", "Qatar Airways"],
            flightDuration: "7-8 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 1200 SEK",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Reliable Service for Swedes",
            whyBookPreArrival: [
                "Fixed price",
                "No haggling",
                "Clean cars",
                "Safe for families",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Stockholm? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is there Swish payment?",
                answer: "No, but you can use your card online."
            },
            {
                question: "Are cars safe?",
                answer: "Yes, we use modern vehicles with safety features."
            }
        ]
    },

    // 48. Italy
    {
        slug: "italy-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "IT",
        countryName: "Italy",
        flagEmoji: "🇮🇹",
        title: "Trusted Umrah Taxi for Italian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Italian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/italy-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Rome (FCO)", "Milan (MXP)"],
            airlines: ["ITA Airways", "Saudia"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Servizio di Trasferimento",
            whyBookPreArrival: [
                "Punctual",
                "Clean",
                "Fixed rate",
                "Comfortable",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Rome? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Italian?",
                answer: "Rarely, but English/Arabic is standard."
            },
            {
                question: "How much luggage?",
                answer: "Depends on car, usually 1 large bag per person."
            }
        ]
    },

    // 49. Japan
    {
        slug: "japan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "JP",
        countryName: "Japan",
        flagEmoji: "🇯🇵",
        title: "Trusted Umrah Taxi for Japanese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Japanese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (JPY reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/japan-umrah-transfer.jpg",
        currency: {
            code: "JPY",
            symbol: "¥",
            approxRate: "1 SAR ≈ 40 JPY",
        },
        flightInfo: {
            majorAirports: ["Narita (NRT)", "Haneda (HND)", "Kansai (KIX)"],
            airlines: ["JAL", "ANA", "Saudia", "Emirates"],
            flightDuration: "10-12 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Trusted Service for Japan",
            whyBookPreArrival: [
                "Extremely punctual",
                "Very clean cars",
                "Silent/Polite drivers",
                "Safe driving",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Narita? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is tipping required?",
                answer: "No, it is not required, but appreciated."
            },
            {
                question: "Is it safe?",
                answer: "Yes, extreme safety is our priority."
            }
        ]
    },

    // 50. South Korea
    {
        slug: "south-korea-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "KR",
        countryName: "South Korea",
        flagEmoji: "🇰🇷",
        title: "Trusted Umrah Taxi for South Korean Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for South Korean pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (KRW reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/korea-umrah-transfer.jpg",
        currency: {
            code: "KRW",
            symbol: "₩",
            approxRate: "1 SAR ≈ 360 KRW",
        },
        flightInfo: {
            majorAirports: ["Incheon (ICN)"],
            airlines: ["Korean Air", "Saudia", "Emirates"],
            flightDuration: "10 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Fast & Comfortable for Koreans",
            whyBookPreArrival: [
                "New model cars",
                "Speed & Efficiency",
                "Easy booking",
                "24/7 Support",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Incheon? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you have WiFi?",
                answer: "Hotspot available on request."
            },
            {
                question: "Is it direct?",
                answer: "Yes, non-stop to Makkah."
            }
        ]
    },

    // 51. Australia
    {
        slug: "australia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AU",
        countryName: "Australia",
        flagEmoji: "🇦🇺",
        title: "Trusted Umrah Taxi for Australia Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Australia pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (AUD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/australia-umrah-transfer.jpg",
        currency: {
            code: "AUD",
            symbol: "A$",
            approxRate: "1 AUD ≈ 2.4 SAR",
        },
        flightInfo: {
            majorAirports: ["Sydney (SYD)", "Melbourne (MEL)"],
            airlines: ["Qatar Airways", "Emirates", "Etihad"],
            flightDuration: "14+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 180 AUD",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Secure Transport for Aussies",
            whyBookPreArrival: [
                "Long flight, quick exit",
                "Fixed pricing (No surprises)",
                "Safe for families",
                "English speaking support",
            ],
            paymentMethods: [
                "Online: Credit Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Sydney? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you supply child seats?",
                answer: "Yes, please request when booking."
            },
            {
                question: "Is it direct?",
                answer: "Yes, straight to your hotel door."
            }
        ]
    },

    // 52. New Zealand
    {
        slug: "new-zealand-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "NZ",
        countryName: "New Zealand",
        flagEmoji: "🇳🇿",
        title: "Trusted Umrah Taxi for New Zealander Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for New Zealander pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (NZD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/new-zealand-umrah-transfer.jpg",
        currency: {
            code: "NZD",
            symbol: "NZ$",
            approxRate: "1 NZD ≈ 2.2 SAR",
        },
        flightInfo: {
            majorAirports: ["Auckland (AKL)"],
            airlines: ["Emirates", "Qatar Airways"],
            flightDuration: "17+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "~ 200 NZD",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Kiwis",
            whyBookPreArrival: [
                "Hassle-free arrival",
                "Fixed rate",
                "Comfortable vans",
                "Online booking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Auckland? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is there lots of room?",
                answer: "Yes, our vehicles are spacious."
            },
            {
                question: "Do drivers speak English?",
                answer: "Yes, most speak basic to good English."
            }
        ]
    },

    // 53. Kenya
    {
        slug: "kenya-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "KE",
        countryName: "Kenya",
        flagEmoji: "🇰🇪",
        title: "Trusted Umrah Taxi for Kenyan Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Kenyan pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (KES reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/kenya-umrah-transfer.jpg",
        currency: {
            code: "KES",
            symbol: "KSh",
            approxRate: "1 SAR ≈ 35 KES",
        },
        flightInfo: {
            majorAirports: ["Nairobi (NBO)", "Mombasa (MBA)"],
            airlines: ["Kenya Airways", "Saudia", "Ethiopian"],
            flightDuration: "4 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Karibu Kenya Pilgrims",
            whyBookPreArrival: [
                "Avoid airport hagglers",
                "Fixed price",
                "Safe for families",
                "Luggage assistance",
            ],
            paymentMethods: [
                "Online: M-Pesa (via Card)",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Nairobi? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay with M-Pesa?",
                answer: "You can use your M-Pesa linked card online."
            },
            {
                question: "Do you take USD?",
                answer: "Yes, USD is accepted."
            }
        ]
    },

    // 54. Tanzania
    {
        slug: "tanzania-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TZ",
        countryName: "Tanzania",
        flagEmoji: "🇹🇿",
        title: "Trusted Umrah Taxi for Tanzanian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Tanzanian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (TZS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/tanzania-umrah-transfer.jpg",
        currency: {
            code: "TZS",
            symbol: "TSh",
            approxRate: "1 SAR ≈ 700 TZS",
        },
        flightInfo: {
            majorAirports: ["Dar es Salaam (DAR)", "Zanzibar (ZNZ)"],
            airlines: ["Air Tanzania", "Oman Air", "Emirates"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Usafiri wa Uhakika",
            whyBookPreArrival: [
                "Reliable drivers",
                "Fair price",
                "Group transport",
                "Respectful",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Dar es Salaam? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you know Swahili?",
                answer: "Some drivers know basic Swahili, but Arabic/English is main."
            },
            {
                question: "Is it safe for ladies?",
                answer: "Yes, very safe and private."
            }
        ]
    },

    // 55. Ghana
    {
        slug: "ghana-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "GH",
        countryName: "Ghana",
        flagEmoji: "🇬🇭",
        title: "Trusted Umrah Taxi for Ghanaian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Ghanaian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (GHS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/ghana-umrah-transfer.jpg",
        currency: {
            code: "GHS",
            symbol: "GH₵",
            approxRate: "1 SAR ≈ 3.5 GHS",
        },
        flightInfo: {
            majorAirports: ["Accra (ACC)"],
            airlines: ["EgyptAir", "Turkish Airlines", "Qatar Airways"],
            flightDuration: "7 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Akwaaba Pilgrims",
            whyBookPreArrival: [
                "No stress",
                "Fixed price",
                "Helpful drivers",
                "AC Cars",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Accra? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept USD?",
                answer: "Yes, USD is fine."
            },
            {
                question: "Is luggage help available?",
                answer: "Yes, the driver will help."
            }
        ]
    },

    // 56. Ethiopia
    {
        slug: "ethiopia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ET",
        countryName: "Ethiopia",
        flagEmoji: "🇪🇹",
        title: "Trusted Umrah Taxi for Ethiopian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Ethiopian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (ETB reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/ethiopia-umrah-transfer.jpg",
        currency: {
            code: "ETB",
            symbol: "Br",
            approxRate: "Var",
        },
        flightInfo: {
            majorAirports: ["Addis Ababa (ADD)"],
            airlines: ["Ethiopian Airlines", "Saudia"],
            flightDuration: "3 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Selamta",
            whyBookPreArrival: [
                "Many drivers speak local languages",
                "Fair price",
                "Direct to Makkah",
                "Safe",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Addis Ababa? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Amharic?",
                answer: "Yes, many drivers in Jeddah are of Ethiopian origin and speak Amharic."
            },
            {
                question: "Can I pay in Birr?",
                answer: "No, Birr is not expected."
            }
        ]
    },

    // 57. Senegal
    {
        slug: "senegal-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SN",
        countryName: "Senegal",
        flagEmoji: "🇸🇳",
        title: "Trusted Umrah Taxi for Senegalese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Senegalese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (XOF reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/senegal-umrah-transfer.jpg",
        currency: {
            code: "XOF",
            symbol: "CFA",
            approxRate: "1 SAR ≈ 165 XOF",
        },
        flightInfo: {
            majorAirports: ["Dakar (DSS)"],
            airlines: ["Air Senegal", "Turkish Airlines"],
            flightDuration: "8 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Dalal Ak Jamm",
            whyBookPreArrival: [
                "Safe and secure",
                "French speaking support",
                "Respectful",
                "Fixed rate",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Dakar? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you speak Wolof?",
                answer: "Some drivers might, but French/Arabic is common."
            },
            {
                question: "Do you take Euro?",
                answer: "Yes, Euro notes."
            }
        ]
    },

    // 58. Mauritania
    {
        slug: "mauritania-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MR",
        countryName: "Mauritania",
        flagEmoji: "🇲🇷",
        title: "Trusted Umrah Taxi for Mauritanian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Mauritanian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (MRU reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/mauritania-umrah-transfer.jpg",
        currency: {
            code: "MRU",
            symbol: "UM",
            approxRate: "1 SAR ≈ 10 MRU",
        },
        flightInfo: {
            majorAirports: ["Nouakchott (NKC)"],
            airlines: ["Mauritania Airlines", "Tunisair"],
            flightDuration: "7-8 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Mauritanians",
            whyBookPreArrival: [
                "Arabic speaking",
                "Culturally respectful",
                "Private",
                "Comfortable",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Nouakchott? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you go to Madinah?",
                answer: "Yes."
            },
            {
                question: "Is it cold in the car?",
                answer: "Yes, AC is powerful."
            }
        ]
    },

    // 59. Mali
    {
        slug: "mali-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ML",
        countryName: "Mali",
        flagEmoji: "🇲🇱",
        title: "Trusted Umrah Taxi for Malian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Malian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (XOF reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/mali-umrah-transfer.jpg",
        currency: {
            code: "XOF",
            symbol: "CFA",
            approxRate: "1 SAR ≈ 165 XOF",
        },
        flightInfo: {
            majorAirports: ["Bamako (BKO)"],
            airlines: ["Turkish Airlines", "Ethiopian"],
            flightDuration: "8 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "I Ni Ce",
            whyBookPreArrival: [
                "Trustworthy",
                "Group vans",
                "Luggage help",
                "Fixed price",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Bamako? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you take CFA?",
                answer: "No."
            },
            {
                question: "Is it safe?",
                answer: "Yes, very."
            }
        ]
    },

    // 60. Ivory Coast
    {
        slug: "ivory-coast-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "CI",
        countryName: "Ivory Coast",
        flagEmoji: "🇨🇮",
        title: "Trusted Umrah Taxi for Ivorian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Ivorian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (XOF reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/ivory-coast-umrah-transfer.jpg",
        currency: {
            code: "XOF",
            symbol: "CFA",
            approxRate: "1 SAR ≈ 165 XOF",
        },
        flightInfo: {
            majorAirports: ["Abidjan (ABJ)"],
            airlines: ["Air Côte d’Ivoire", "Turkish Airlines"],
            flightDuration: "8 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service de Confiance",
            whyBookPreArrival: [
                "French speaking",
                "Comfortable",
                "Fixed price",
                "No negotiation",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Abidjan? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Parlez vous français?",
                answer: "Oui, nous avons des chauffeurs francophones."
            },
            {
                question: "Combien ça coûte?",
                answer: "Le prix est fixe, voir le site."
            }
        ]
    },

    // 61. South Africa
    {
        slug: "south-africa-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "ZA",
        countryName: "South Africa",
        flagEmoji: "🇿🇦",
        title: "Trusted Umrah Taxi for South Africa Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for South Africa pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (ZAR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/south-africa-umrah-transfer.jpg",
        currency: {
            code: "ZAR",
            symbol: "R",
            approxRate: "1 SAR ≈ 5.0 ZAR",
        },
        flightInfo: {
            majorAirports: ["O.R. Tambo (JNB)", "Cape Town (CPT)"],
            airlines: ["Saudia", "Emirates", "Qatar Airways"],
            flightDuration: "8-9 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Trusted Service for South Africans",
            whyBookPreArrival: [
                "Safety priority",
                "English speaking",
                "Family vans available",
                "Fixed Rand-equivalent rates",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from O.R. Tambo? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is it safe?",
                answer: "Yes, KSA is very safe, and our drivers are vetted."
            },
            {
                question: "Do you have large vans?",
                answer: "Yes, GMC and HiAce for families."
            }
        ]
    },

    // 62. Switzerland
    {
        slug: "switzerland-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "CH",
        countryName: "Switzerland",
        flagEmoji: "🇨🇭",
        title: "Trusted Umrah Taxi for Swiss Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Swiss pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (CHF reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/switzerland-umrah-transfer.jpg",
        currency: {
            code: "CHF",
            symbol: "CHF",
            approxRate: "1 CHF ≈ 4.3 SAR",
        },
        flightInfo: {
            majorAirports: ["Zurich (ZRH)", "Geneva (GVA)"],
            airlines: ["Saudia", "Swiss", "Emirates"],
            flightDuration: "6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Swiss Quality Service",
            whyBookPreArrival: [
                "Punctual (Swiss time)",
                "Premium vehicles",
                "Quiet & Comfortable",
                "Easy booking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Zurich? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Are drivers on time?",
                answer: "Yes, we monitor flights to be exact."
            },
            {
                question: "Luxury cars?",
                answer: "Yes, Lexus and BMW available."
            }
        ]
    },

    // 63. Austria
    {
        slug: "austria-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AT",
        countryName: "Austria",
        flagEmoji: "🇦🇹",
        title: "Trusted Umrah Taxi for Austrian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Austrian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/austria-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Vienna (VIE)"],
            airlines: ["Austrian", "Saudia", "Turkish Airlines"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Austria",
            whyBookPreArrival: [
                "Reliable",
                "Fixed Price",
                "Comfortable",
                "German speaking support (via Whatsapp)",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Vienna? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you offer water?",
                answer: "Yes, free water in the car."
            },
            {
                question: "Is smoking allowed?",
                answer: "No, strict non-smoking policy."
            }
        ]
    },

    // 64. Norway
    {
        slug: "norway-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "NO",
        countryName: "Norway",
        flagEmoji: "🇳🇴",
        title: "Trusted Umrah Taxi for Norwegian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Norwegian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (NOK reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/norway-umrah-transfer.jpg",
        currency: {
            code: "NOK",
            symbol: "kr",
            approxRate: "1 SAR ≈ 2.9 NOK",
        },
        flightInfo: {
            majorAirports: ["Oslo (OSL)"],
            airlines: ["Norwegian", "Qatar Airways", "Emirates"],
            flightDuration: "7-8 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Transport for Norway",
            whyBookPreArrival: [
                "Safe winter-grade driving",
                "Warm welcome",
                "Fixed pricing",
                "Easy online booking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Oslo? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is there Vipps?",
                answer: "No, please use credit card."
            },
            {
                question: "How far is Makkah?",
                answer: "About 1 hour from Jeddah airport."
            }
        ]
    },

    // 65. Denmark
    {
        slug: "denmark-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "DK",
        countryName: "Denmark",
        flagEmoji: "🇩🇰",
        title: "Trusted Umrah Taxi for Danish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Danish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (DKK reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/denmark-umrah-transfer.jpg",
        currency: {
            code: "DKK",
            symbol: "kr",
            approxRate: "1 SAR ≈ 1.8 DKK",
        },
        flightInfo: {
            majorAirports: ["Copenhagen (CPH)"],
            airlines: ["SAS", "Turkish Airlines", "Pegasus"],
            flightDuration: "6-7 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Danes",
            whyBookPreArrival: [
                "Punctual",
                "High standards",
                "English speaking",
                "Direct transfer",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Copenhagen? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you have MobilePay?",
                answer: "No, card payment on website only."
            },
            {
                question: "Is it a shared ride?",
                answer: "No, fully private."
            }
        ]
    },

    // 66. Ireland
    {
        slug: "ireland-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "IE",
        countryName: "Ireland",
        flagEmoji: "🇮🇪",
        title: "Trusted Umrah Taxi for Irish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Irish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/ireland-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Dublin (DUB)"],
            airlines: ["Aer Lingus", "Turkish Airlines", "Qatar Airways"],
            flightDuration: "7-8 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "A Chead Míle Fáilte",
            whyBookPreArrival: [
                "Friendly drivers",
                "Great craic (atmosphere)",
                "Fixed price",
                "Reliable",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Dublin? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in Euro?",
                answer: "Yes, notes are accepted."
            },
            {
                question: "Is it far?",
                answer: "Not too far, about 1 hour drive."
            }
        ]
    },

    // 67. Portugal
    {
        slug: "portugal-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "PT",
        countryName: "Portugal",
        flagEmoji: "🇵🇹",
        title: "Trusted Umrah Taxi for Portuguese Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Portuguese pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/portugal-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Lisbon (LIS)"],
            airlines: ["TAP", "Turkish Airlines", "Emirates"],
            flightDuration: "6-7 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Serviço Confiável",
            whyBookPreArrival: [
                "Safe driving",
                "Clean cars",
                "Good rates",
                "Help with bags",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Lisbon? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Portuguese?",
                answer: "No, mostly English and Arabic."
            },
            {
                question: "Is luggage included?",
                answer: "Yes, free luggage assistance."
            }
        ]
    },

    // 68. Somalia
    {
        slug: "somalia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "SO",
        countryName: "Somalia",
        flagEmoji: "🇸🇴",
        title: "Trusted Umrah Taxi for Somali Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Somali pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (SOS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/somalia-umrah-transfer.jpg",
        currency: {
            code: "SOS",
            symbol: "S",
            approxRate: "1 SAR ≈ 150 SOS",
        },
        flightInfo: {
            majorAirports: ["Mogadishu (MGQ)", "Hargeisa (HGA)"],
            airlines: ["Daallo", "Jubba", "Ethiopian"],
            flightDuration: "2-3 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Soo Dhawoow",
            whyBookPreArrival: [
                "Somali speaking drivers",
                "Respectful",
                "Direct to hotel",
                "Cheap rates",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Mogadishu? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Ma hadashaa Af-Somali?",
                answer: "Haa, wadayaal badan ayaa ku hadla Af-Soomaali."
            },
            {
                question: "Lacagta dollar?",
                answer: "Haa, dollar waa la ogol yahay."
            }
        ]
    },

    // 69. Afghanistan
    {
        slug: "afghanistan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AF",
        countryName: "Afghanistan",
        flagEmoji: "🇦🇫",
        title: "Trusted Umrah Taxi for Afghan Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Afghan pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (AFN reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/afghanistan-umrah-transfer.jpg",
        currency: {
            code: "AFN",
            symbol: "؋",
            approxRate: "1 SAR ≈ 19 AFN",
        },
        flightInfo: {
            majorAirports: ["Kabul (KBL)"],
            airlines: ["Kam Air", "Ariana", "Emirates"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Khush Amadid",
            whyBookPreArrival: [
                "Respectful",
                "Privacy for families",
                "Language support",
                "Fixed price",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Kabul? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Pashto?",
                answer: "Many drivers in KSA are from the region and speak Pashto/Dari."
            },
            {
                question: "Is it safe?",
                answer: "Yes, completely safe."
            }
        ]
    },

    // 70. Greece
    {
        slug: "greece-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "GR",
        countryName: "Greece",
        flagEmoji: "🇬🇷",
        title: "Trusted Umrah Taxi for Greek Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Greek pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (EUR reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/greece-umrah-transfer.jpg",
        currency: {
            code: "EUR",
            symbol: "€",
            approxRate: "1 € ≈ 4.0 SAR",
        },
        flightInfo: {
            majorAirports: ["Athens (ATH)"],
            airlines: ["Aegean", "Saudia", "EgyptAir"],
            flightDuration: "4-5 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Greece",
            whyBookPreArrival: [
                "Reliable",
                "Clean cars",
                "Fixed price",
                "Easy booking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Athens? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "How long to Makkah?",
                answer: "75 to 90 minutes."
            },
            {
                question: "Are taxis metered?",
                answer: "We offer fixed prices, no meters."
            }
        ]
    },

    // 71. Brazil
    {
        slug: "brazil-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BR",
        countryName: "Brazil",
        flagEmoji: "🇧🇷",
        title: "Trusted Umrah Taxi for Brazilian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Brazilian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (BRL reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/brazil-umrah-transfer.jpg",
        currency: {
            code: "BRL",
            symbol: "R$",
            approxRate: "1 SAR ≈ 1.3 BRL",
        },
        flightInfo: {
            majorAirports: ["Guarulhos (GRU)"],
            airlines: ["Emirates", "Qatar Airways", "Turkish Airlines"],
            flightDuration: "14+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Serviço para Brasileiros",
            whyBookPreArrival: [
                "Long flight comfort",
                "Fixed pricing",
                "Safe for families",
                "App/Online booking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Guarulhos? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Fala português?",
                answer: "Não, mainly English/Arabic."
            },
            {
                question: "Is it safe?",
                answer: "Yes, very safe."
            }
        ]
    },

    // 72. Argentina
    {
        slug: "argentina-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "AR",
        countryName: "Argentina",
        flagEmoji: "🇦🇷",
        title: "Trusted Umrah Taxi for Argentine Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Argentine pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (ARS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/argentina-umrah-transfer.jpg",
        currency: {
            code: "ARS",
            symbol: "$",
            approxRate: "Var",
        },
        flightInfo: {
            majorAirports: ["Ezeiza (EZE)"],
            airlines: ["Emirates", "Turkish Airlines", "Ethiopian"],
            flightDuration: "17+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Servicio para Argentinos",
            whyBookPreArrival: [
                "Secure transfer",
                "Fixed rates",
                "Comfortable vans",
                "Reliable",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Ezeiza? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you take USD?",
                answer: "Yes, USD is widely accepted."
            },
            {
                question: "Distance?",
                answer: "1 hour 15 mins to Makkah."
            }
        ]
    },

    // 73. Mexico
    {
        slug: "mexico-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MX",
        countryName: "Mexico",
        flagEmoji: "🇲🇽",
        title: "Trusted Umrah Taxi for Mexican Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Mexican pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (MXN reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/mexico-umrah-transfer.jpg",
        currency: {
            code: "MXN",
            symbol: "$",
            approxRate: "1 SAR ≈ 5 MXN",
        },
        flightInfo: {
            majorAirports: ["Mexico City (MEX)"],
            airlines: ["Emirates", "Turkish Airlines"],
            flightDuration: "18+ hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Servicio para Mexicanos",
            whyBookPreArrival: [
                "Safe travel",
                "Fair price",
                "No haggling",
                "AC cars",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Mexico City? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Is it hot?",
                answer: "Yes, but our cars have strong AC."
            },
            {
                question: "Is it safe?",
                answer: "Yes, very safe."
            }
        ]
    },

    // 74. Poland
    {
        slug: "poland-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "PL",
        countryName: "Poland",
        flagEmoji: "🇵🇱",
        title: "Trusted Umrah Taxi for Polish Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Polish pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (PLN reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/poland-umrah-transfer.jpg",
        currency: {
            code: "PLN",
            symbol: "zł",
            approxRate: "1 SAR ≈ 1.0 PLN",
        },
        flightInfo: {
            majorAirports: ["Warsaw (WAW)"],
            airlines: ["LOT", "Emirates", "Qatar Airways"],
            flightDuration: "6-7 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Transport dla Polaków",
            whyBookPreArrival: [
                "Reliable service",
                "Fixed price",
                "Clean cars",
                "English speaking",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Warsaw? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept Card?",
                answer: "Yes, online booking."
            },
            {
                question: "Distance?",
                answer: "75 km to Makkah."
            }
        ]
    },

    // 75. Ukraine
    {
        slug: "ukraine-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "UA",
        countryName: "Ukraine",
        flagEmoji: "🇺🇦",
        title: "Trusted Umrah Taxi for Ukrainian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Ukrainian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (UAH reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/ukraine-umrah-transfer.jpg",
        currency: {
            code: "UAH",
            symbol: "₴",
            approxRate: "1 SAR ≈ 10 UAH",
        },
        flightInfo: {
            majorAirports: ["Kyiv (KBP) - *Check Status*"],
            airlines: ["Turkish Airlines", "Flydubai"],
            flightDuration: "Varies",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Ukraine",
            whyBookPreArrival: [
                "Safe",
                "Reliable",
                "Fixed price",
                "Helpful drivers",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Kyiv? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Can I pay in USD?",
                answer: "Yes."
            },
            {
                question: "Is it private?",
                answer: "Yes, private taxi."
            }
        ]
    },

    // 76. Tajikistan
    {
        slug: "tajikistan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TJ",
        countryName: "Tajikistan",
        flagEmoji: "🇹🇯",
        title: "Trusted Umrah Taxi for Tajik Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Tajik pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (TJS reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/tajikistan-umrah-transfer.jpg",
        currency: {
            code: "TJS",
            symbol: "SM",
            approxRate: "1 SAR ≈ 3 TJS",
        },
        flightInfo: {
            majorAirports: ["Dushanbe (DYU)"],
            airlines: ["Somon Air", "Flydubai"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Khush Omadid",
            whyBookPreArrival: [
                "Language ease",
                "Respectful",
                "Group vans",
                "Fair price",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Dushanbe? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you speak Tajik?",
                answer: "Drivers may speak Persian/Dari which is similar."
            },
            {
                question: "Price for van?",
                answer: "See booking form for GMC/HiAce rates."
            }
        ]
    },

    // 77. Turkmenistan
    {
        slug: "turkmenistan-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "TM",
        countryName: "Turkmenistan",
        flagEmoji: "🇹🇲",
        title: "Trusted Umrah Taxi for Turkmen Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Turkmen pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (TMT reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/turkmenistan-umrah-transfer.jpg",
        currency: {
            code: "TMT",
            symbol: "m",
            approxRate: "1 SAR ≈ 0.9 TMT",
        },
        flightInfo: {
            majorAirports: ["Ashgabat (ASB)"],
            airlines: ["Turkmenistan Airlines", "Flydubai"],
            flightDuration: "4-5 hours",
        },
        visaInfo: {
            type: "Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Turkmenistan",
            whyBookPreArrival: [
                "Safe",
                "Direct",
                "Clean",
                "Respectful",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Ashgabat? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Russian?",
                answer: "Yes, many drivers confirm Russian speaking."
            },
            {
                question: "Is it safe?",
                answer: "Yes."
            }
        ]
    },

    // 78. Romania
    {
        slug: "romania-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "RO",
        countryName: "Romania",
        flagEmoji: "🇷🇴",
        title: "Trusted Umrah Taxi for Romanian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Romanian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (RON reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/romania-umrah-transfer.jpg",
        currency: {
            code: "RON",
            symbol: "lei",
            approxRate: "1 SAR ≈ 1.2 RON",
        },
        flightInfo: {
            majorAirports: ["Bucharest (OTP)"],
            airlines: ["Tarom", "Turkish Airlines", "Wizz Air"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Romania",
            whyBookPreArrival: [
                "Fixed price",
                "No hidden costs",
                "Comfortable",
                "Direct",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Bucharest? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept Euro?",
                answer: "Yes."
            },
            {
                question: "How long is the ride?",
                answer: "Approx 1 hr 15 mins."
            }
        ]
    },

    // 79. Bulgaria
    {
        slug: "bulgaria-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "BG",
        countryName: "Bulgaria",
        flagEmoji: "🇧🇬",
        title: "Trusted Umrah Taxi for Bulgarian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Bulgarian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (BGN reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/bulgaria-umrah-transfer.jpg",
        currency: {
            code: "BGN",
            symbol: "лв",
            approxRate: "1 SAR ≈ 0.5 BGN",
        },
        flightInfo: {
            majorAirports: ["Sofia (SOF)"],
            airlines: ["Turkish Airlines", "Flydubai"],
            flightDuration: "5 hours",
        },
        visaInfo: {
            type: "Tourist E-Visa",
            cost: "Varies",
            validity: "1 Year",
        },
        taxiBooking: {
            heading: "Service for Bulgaria",
            whyBookPreArrival: [
                "Reliable",
                "Safe",
                "Turkish speakers available",
                "Fixed rate",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Sofia? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do drivers speak Turkish?",
                answer: "Yes, many do."
            },
            {
                question: "Do you take Euro?",
                answer: "Yes."
            }
        ]
    },

    // 80. North Macedonia
    {
        slug: "north-macedonia-pilgrims-umrah-taxi-jeddah-makkah-madinah",
        countryCode: "MK",
        countryName: "North Macedonia",
        flagEmoji: "🇲🇰",
        title: "Trusted Umrah Taxi for Macedonian Pilgrims: Jeddah Airport to Makkah",
        metaDescription: "Book the best Umrah taxi for Macedonian pilgrims. Private Jeddah Airport pickup to Makkah & Madinah. Fixed prices (MKD reference), luxury vans, and 24/7 support.",
        heroImage: "/images/guides/macedonia-umrah-transfer.jpg",
        currency: {
            code: "MKD",
            symbol: "den",
            approxRate: "1 SAR ≈ 15 MKD",
        },
        flightInfo: {
            majorAirports: ["Skopje (SKP)"],
            airlines: ["Turkish Airlines", "Pegasus", "Wizz Air"],
            flightDuration: "5-6 hours",
        },
        visaInfo: {
            type: "Tourist / Umrah Visa",
            cost: "Varies",
            validity: "Varies",
        },
        taxiBooking: {
            heading: "Service for Macedonia",
            whyBookPreArrival: [
                "Direct transfer",
                "Reliable",
                "Clean cars",
                "Fixed price",
            ],
            paymentMethods: [
                "Online: Card",
                "Cash: Saudi Riyals (SAR)",
            ],
        },
        contentSections: [
            {
                title: "1. The Arrival: Jeddah Airport to Makkah",
                content: `
            <p>Arriving from Skopje? Skip the chaos. Our <a href='/jeddah-airport-to-makkah-taxi' class='text-emerald-700 hover:underline font-bold'>Jeddah Airport to Makkah Taxi</a> service ensures a VIP welcome.</p>
        `,
            },
            {
                title: "2. The Journey Continues: Makkah to Madinah",
                content: `
            <p>Travel between the Holy Cities with ease. Our <a href='/makkah-to-madinah-taxi' class='text-emerald-700 hover:underline font-bold'>Makkah to Madinah Taxi</a> service provides a swift and comfortable journey via the highway.</p>
        `,
            },
            {
                title: "3. Spiritual Visits: Ziyarat",
                content: `
            <p>We invite you to experience our <a href='/ziyarat-in-makkah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Makkah</a> and <a href='/ziyarat-in-madinah' class='text-emerald-700 hover:underline font-bold'>Ziyarat in Madinah</a> tours. Visit locations significant to Islamic history.</p>
            ${paymentNotice}
        `,
            },
        ],
        faqs: [
            {
                question: "Do you accept Euro?",
                answer: "Yes."
            },
            {
                question: "How long is the ride?",
                answer: "About 1 hour 15 mins."
            }
        ]
    }
];
