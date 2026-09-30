import type { KhaybarSetDetail } from './KhaybarQuoteCard';

// Prefill the Khaybar quote card and bring it into view.
export function setKhaybarQuote(detail: KhaybarSetDetail) {
    window.dispatchEvent(new CustomEvent<KhaybarSetDetail>('khaybar:set', { detail }));
    document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    document.getElementById('kq-date')?.focus({ preventScroll: true });
}
