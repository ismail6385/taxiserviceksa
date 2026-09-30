'use client';

import type { ReactNode } from 'react';
import type { TabukSetDetail } from './TabukQuoteCard';

// A button that prefills the Tabuk quote card and scrolls back to it.
export default function QuoteLink({ set, children, className = '' }: { set: TabukSetDetail; children: ReactNode; className?: string }) {
    const go = () => {
        window.dispatchEvent(new CustomEvent<TabukSetDetail>('tabuk:set', { detail: set }));
        document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        (document.getElementById(set.from && set.to ? 'tb-date' : set.from ? 'tb-to' : 'tb-from') as HTMLInputElement | null)?.focus({ preventScroll: true });
    };
    return <button type="button" onClick={go} className={className}>{children}</button>;
}
