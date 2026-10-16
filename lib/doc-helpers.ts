// Small helpers shared by the quotation / invoice / requests pages.

// The booking form appends boilerplate to special_requests ("Please Provide
// Quote", "Source: /calculator/", "Request: One Way."); documents and lists
// should show only what the customer actually wrote.
export function cleanCustomerNote(note?: string | null): string {
    return (note || '')
        .replace(/Please Provide Quote/gi, '')
        .replace(/\|?\s*Source:\s*\S+/gi, '')
        .replace(/Request:\s*One Way\.?/gi, '')
        .replace(/\s*\.\s*\./g, '.')
        .replace(/^[\s.|]+|[\s.|]+$/g, '')
        .trim();
}

export const VAT_RATE = 0.15;

/** Splits a VAT-inclusive total into base fare + 15% VAT (2-decimal, base + vat === total). */
export function splitVat(totalInclVat: number) {
    const base = Math.round((totalInclVat / (1 + VAT_RATE)) * 100) / 100;
    return { base, vat: Math.round((totalInclVat - base) * 100) / 100 };
}

/** Booking paid by card/online, where the owner's price includes 15% VAT. */
export const isCardOrOnline = (method?: string | null) => /card|online|link|apple|mada|stc/i.test(method || '');
