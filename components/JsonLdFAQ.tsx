import Script from 'next/script';
import { FC } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface JsonLdFAQProps {
    faqs: FAQItem[];
}

const JsonLdFAQ: FC<JsonLdFAQProps> = ({ faqs }) => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
};

export default JsonLdFAQ;
