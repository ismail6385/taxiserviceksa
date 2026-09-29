'use client';

import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

// Madinah -> Makkah quote card: the generic route card with a Miqat stop option.
export default function MadinahMakkahQuoteCard() {
    return (
        <RouteQuoteCard
            title="Madinah → Makkah quote"
            cta="Get My Route Quote"
            fromCity="Madinah"
            toCity="Makkah"
            fromChips={['Central Area hotel', 'Madinah Airport (MED)', 'Madinah Haramain Station']}
            stop={{ label: 'Plan a Miqat stop', note: 'Please plan a stop at the Miqat (Dhul-Hulayfah / Abyar Ali).', defaultChecked: true }}
            returnNote="Return trip Makkah to Madinah also needed - date to confirm."
        />
    );
}
