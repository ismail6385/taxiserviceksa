'use client';

import type { ReactNode } from 'react';
import { setKhaybarQuote } from './setQuote';
import type { KhaybarSetDetail } from './KhaybarQuoteCard';

// Button that prefills the Khaybar quote card for a given journey.
export default function QuoteAction({ set, children, className = '' }: { set: KhaybarSetDetail; children: ReactNode; className?: string }) {
    return <button type="button" onClick={() => setKhaybarQuote(set)} className={className}>{children}</button>;
}
