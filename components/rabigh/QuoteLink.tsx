'use client';

import type { ReactNode } from 'react';
import type { RabighSetDetail } from './RabighQuoteCard';

// A button that prefills the Rabigh quote card and scrolls back to it.
export default function QuoteLink({ set, children, className = '' }: { set: RabighSetDetail; children: ReactNode; className?: string }) {
    const go = () => {
        window.dispatchEvent(new CustomEvent<RabighSetDetail>('rabigh:set', { detail: set }));
        document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        (document.getElementById(set.from && set.to ? 'rb-date' : set.from ? 'rb-to' : 'rb-from') as HTMLInputElement | null)?.focus({ preventScroll: true });
    };
    return <button type="button" onClick={go} className={className}>{children}</button>;
}
