'use client';

import type { ReactNode } from 'react';
import type { UhudSetDetail } from './UhudQuoteCard';

// Prefill the Uhud quote card and bring it into view. Notes reset unless the option sets its own.
export function setUhudQuote(input: UhudSetDetail) {
    const detail: UhudSetDetail = { notes: '', ...input };
    window.dispatchEvent(new CustomEvent<UhudSetDetail>('uhud:set', { detail }));
    document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    document.getElementById('uq-date')?.focus({ preventScroll: true });
}

export default function QuoteAction({ set, children, className = '' }: { set: UhudSetDetail; children: ReactNode; className?: string }) {
    return <button type="button" onClick={() => setUhudQuote(set)} className={className}>{children}</button>;
}
