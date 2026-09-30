'use client';

import type { ReactNode } from 'react';
import { setDubaQuote } from './setQuote';
import type { DubaSetDetail } from './DubaQuoteCard';

// Button that prefills the Duba quote card for a given journey.
export default function QuoteAction({ set, children, className = '' }: { set: DubaSetDetail; children: ReactNode; className?: string }) {
    return <button type="button" onClick={() => setDubaQuote(set)} className={className}>{children}</button>;
}
