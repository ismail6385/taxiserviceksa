
import { FAQItem } from './cities';

export interface ServiceData {
    name: string;
    slug: string;
    description: string;
    faq: FAQItem[];
    chatbotContext: {
        targetAudience: string;
        keyBenefits: string;
        serviceArea: string;
    };
}

export const services: Record<string, ServiceData> = {
    "airport-taxi": {
        name: "Airport Taxi Service",
        slug: "airport-taxi",
        description: "Reliable, 24/7 airport transfers across Saudi Arabia. We track your flight for on-time pickups at JED, RUH, MED, and DMM airports.",
        chatbotContext: {
            targetAudience: "Travelers, Business, Pilgrims",
            keyBenefits: "Flight Tracking, Meet & Greet, Fixed Rates",
            serviceArea: "All KSA Airports (JED, RUH, MED, DMM, TIF)"
        },
        faq: [
            {
                question: "Do you offer meet and greet services at the airport?",
                answer: "Yes, our drivers will meet you at the arrivals hall with a name sign. We also assist with luggage to ensure a smooth start to your journey.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Do you offer meet and greet?",
                    botAnswer: "Yes, we provide meet and greet service at arrivals with baggage assistance.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "What happens if my flight is delayed?",
                answer: "We monitor all flight schedules in real-time. If your flight is delayed, our driver will adjust the pickup time automatically at no extra cost.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "What if flight is delayed?",
                    botAnswer: "We track flights and adjust pickup times automatically for free.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "How do I book an airport taxi in advance?",
                answer: "You can book your airport taxi online easily. We recommend booking at least 24 hours in advance to guarantee vehicle availability. <strong>Pre-book now for a guaranteed pickup.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "How to book airport taxi?",
                    botAnswer: "Book online 24 hours in advance for guaranteed availability.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is your airport taxi service available at Medina Airport?",
                answer: "Yes, we provide 24/7 transfers from Prince Mohammad Bin Abdulaziz International Airport (MED) to hotels in Madinah and Makkah.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Service at Medina Airport?",
                    botAnswer: "Yes, 24/7 transfers available from Medina Airport (MED) to hotels.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a large van for airport transfer?",
                answer: "Yes, our fleet includes GMC Yukons and buses for large groups and families with extra luggage, ensuring a comfortable airport transfer.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Large van for airport?",
                    botAnswer: "Yes, GMC Yukons and buses are available for large groups and luggage.",
                    suggestedAction: "Booking"
                }
            }
        ]
    },
    "umrah-taxi": {
        name: "Umrah Taxi Service",
        slug: "umrah-taxi",
        description: "Specialized transportation for Umrah pilgrims. Safe, respectful, and punctual rides between Jeddah, Makkah, and Madinah.",
        chatbotContext: {
            targetAudience: "Pilgrims, Families, Groups",
            keyBenefits: "Ziyarat Knowledge, Ihram Stops, Spacious Vehicles",
            serviceArea: "Makkah, Madinah, Jeddah, Miqats"
        },
        faq: [
            {
                question: "Does the driver stop at Miqat for Ihram?",
                answer: "Yes, our drivers are experienced with Umrah rituals and will happily stop at the designated Miqat for you to wear Ihram and pray.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "Stop at Miqat for Ihram?",
                    botAnswer: "Yes, drivers stop at designated Miqats for Ihram and prayer.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a taxi from Makkah to Madinah?",
                answer: "Yes, we provide direct intercity transfers between Makkah and Madinah. The journey takes about 4-5 hours in our comfortable, air-conditioned vehicles. <strong>Contact us to arrange your spiritual journey.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Taxi Makkah to Madinah?",
                    botAnswer: "Yes, direct 4-5 hour transfers available between Makkah and Madinah.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Are your drivers familiar with Ziyarat sites?",
                answer: "Absolutely. Our drivers are locals who know the history and locations of all major Ziyarat sites in Makkah and Madinah.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Drivers know Ziyarat sites?",
                    botAnswer: "Yes, our local drivers know all major Ziyarat sites well.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is your Umrah taxi service suitable for elderly pilgrims?",
                answer: "Yes, we prioritize the comfort of elderly pilgrims. Our drivers offer door-to-door service and assistance with wheelchairs and luggage.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "Suitable for elderly pilgrims?",
                    botAnswer: "Yes, we offer door-to-door service and assistance for elderly pilgrims.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer group rates for Umrah?",
                answer: "Yes, we have special packages and discounted rates for large Umrah groups booking buses or multiple vehicles.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Group rates for Umrah?",
                    botAnswer: "Yes, special rates available for large groups and bus bookings.",
                    suggestedAction: "Booking"
                }
            }
        ]
    }
};
