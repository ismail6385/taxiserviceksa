'use client';

import type { ReactNode } from 'react';
import { openQuote } from './QuotePanel';

// Opens the shared quote panel with a service preselected.
export default function QuoteButton({ service, children, className = '' }: { service?: string; children: ReactNode; className?: string }) {
    return <button type="button" onClick={() => openQuote(service)} className={className}>{children}</button>;
}
