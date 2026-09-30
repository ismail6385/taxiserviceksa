import type { DubaSetDetail } from './DubaQuoteCard';

// Prefill the Duba quote card and bring it into view. Notes reset unless the journey sets its own.
export function setDubaQuote(input: DubaSetDetail) {
    const detail: DubaSetDetail = { notes: '', ...input };
    window.dispatchEvent(new CustomEvent<DubaSetDetail>('duba:set', { detail }));
    document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    document.getElementById(detail.to ? 'dq-date' : 'dq-to')?.focus({ preventScroll: true });
}
