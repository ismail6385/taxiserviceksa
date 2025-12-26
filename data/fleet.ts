
import { FAQItem } from './cities';

export interface VehicleData {
    name: string;
    slug: string;
    description: string;
    faq: FAQItem[];
    chatbotContext: {
        capacity: string;
        luggage: string;
        bestFor: string;
    };
}

export const fleet: Record<string, VehicleData> = {
    "gmc-yukon": {
        name: "GMC Yukon",
        slug: "gmc-yukon",
        description: "Experience the ultimate comfort with our GMC Yukon chauffeur service. Ideal for Umrah, business, and family travel.",
        chatbotContext: {
            capacity: "7 Passengers",
            luggage: "5 Large Suitcases",
            bestFor: "VIPs, Families, Umrah Groups, Business Executives"
        },
        faq: [
            {
                question: "Is the GMC Yukon suitable for Umrah travel?",
                answer: "Yes, the GMC Yukon is an excellent choice for Umrah. It offers spacious seating and a smooth ride, perfect for long journeys between Jeddah, Makkah, and Madinah.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Is GMC Yukon good for Umrah?",
                    botAnswer: "Yes, it's perfect for Umrah with spacious seating and a smooth ride for long trips.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "How many suitcases can fit in the GMC Yukon?",
                answer: "The GMC Yukon can comfortably accommodate up to 5 large suitcases along with hand luggage, making it ideal for international travelers.",
                intent: "Informational",
                chatbotData: {
                    userQuestion: "How much luggage fits in GMC Yukon?",
                    botAnswer: "It fits up to 5 large suitcases plus hand luggage.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Do you offer GMC Yukon for airport pickup?",
                answer: "Absolutely. You can book a GMC Yukon for VIP airport pickup at Jeddah (JED) or Madinah (MED) airports with meet-and-greet service. <strong>Secure your VIP ride today via online booking.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "GMC Yukon for airport pickup?",
                    botAnswer: "Yes, book a GMC Yukon for VIP pickup at JED or MED airports.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Is the GMC Yukon service available in Riyadh?",
                answer: "Yes, our premium GMC Yukon service is available in Riyadh for corporate events, airport transfers, and delegation transport.",
                intent: "Contextual",
                chatbotData: {
                    userQuestion: "GMC Yukon available in Riyadh?",
                    botAnswer: "Yes, available in Riyadh for corporate and airport transport.",
                    suggestedAction: "Booking"
                }
            }
        ]
    },
    "hyundai-staria": {
        name: "Hyundai Staria",
        slug: "hyundai-staria",
        description: "Modern, spacious, and perfect for families. The Hyundai Staria offers a comfortable ride for group city tours and transfers.",
        chatbotContext: {
            capacity: "7 Passengers",
            luggage: "4 Large Suitcases",
            bestFor: "Families, Small Groups, City Tours"
        },
        faq: [
            {
                question: "Is the Hyundai Staria good for families?",
                answer: "Yes, the Hyundai Staria is designed for families. With sliding doors and ample legroom, it ensures a comfortable ride for children and seniors.",
                intent: "Commercial",
                chatbotData: {
                    userQuestion: "Hyundai Staria good for families?",
                    botAnswer: "Yes, it's perfect for families, offering easy access and ample legroom.",
                    suggestedAction: "Booking"
                }
            },
            {
                question: "Can I book a Staria for a day tour in Jeddah?",
                answer: "Yes, the Hyundai Staria is available for daily rentals. It's the perfect vehicle for exploring Jeddah's landmarks with your family. <strong>Call now to reserve for your family trip.</strong>",
                intent: "Transactional",
                chatbotData: {
                    userQuestion: "Book Staria for day tour Jeddah?",
                    botAnswer: "Yes, daily rentals available for family city tours.",
                    suggestedAction: "Booking"
                }
            }
        ]
    }
};
