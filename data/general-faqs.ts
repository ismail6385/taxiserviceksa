
import { FAQItem } from './cities';

export const generalFaqs: FAQItem[] = [
    {
        question: "How do I book a taxi with VIP Transfer KSA?",
        answer: "You can book easily via our website booking form for instant confirmation. <strong>Click the 'Book Now' button to start.</strong>",
        intent: "Transactional",
        chatbotData: {
            userQuestion: "How to book a taxi?",
            botAnswer: "Book via website for instant confirmation.",
            suggestedAction: "Booking"
        }
    },
    {
        question: "What areas do you cover in Saudi Arabia?",
        answer: "We cover all major cities including Makkah, Madinah, Jeddah, Riyadh, Dammam, and Taif. We also specialize in intercity transfers.",
        intent: "Informational",
        chatbotData: {
            userQuestion: "What areas do you cover?",
            botAnswer: "We cover Makkah, Madinah, Jeddah, Riyadh, Dammam, Taif, and intercity routes.",
            suggestedAction: "Booking"
        }
    },
    {
        question: "Are your prices fixed or metered?",
        answer: "Our prices are fixed and transparent. You will know the exact cost of your trip before you book, with no hidden charges or surge pricing.",
        intent: "Commercial",
        chatbotData: {
            userQuestion: "Are prices fixed?",
            botAnswer: "Yes, prices are fixed and transparent with no hidden charges.",
            suggestedAction: "Booking"
        }
    },
    {
        question: "Is your taxi service suitable for Umrah pilgrims?",
        answer: "Yes, we are experts in Umrah transportation. Our drivers know the holy sites well, and we offer vehicles suitable for groups and luggage.",
        intent: "Commercial",
        chatbotData: {
            userQuestion: "Suitable for Umrah pilgrims?",
            botAnswer: "Yes, we specialize in Umrah transport with experienced drivers and suitable vehicles.",
            suggestedAction: "Booking"
        }
    },
    {
        question: "Do you provide child seats?",
        answer: "Yes, child seats are available upon request. Please mention this requirement when you make your booking so we can arrange it for you. <strong>Contact us to request a child seat.</strong>",
        intent: "Transactional",
        chatbotData: {
            userQuestion: "Do you have child seats?",
            botAnswer: "Yes, available upon request. Please specify when booking.",
            suggestedAction: "Booking"
        }
    },
    {
        question: "Can I pay with credit card?",
        answer: "Yes, we accept cash and major credit cards. You can also pay online securely when you book through our website.",
        intent: "Transactional",
        chatbotData: {
            userQuestion: "Can I pay by credit card?",
            botAnswer: "Yes, we accept cash, credit cards, and secure online payments.",
            suggestedAction: "Booking"
        }
    }
];
