'use client';

import { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

// Corporate "bill to" details (company name, address, VAT / registration no.)
// for a booking's invoice, receipt and quotation. Some business clients need
// their company on the document instead of only the traveller's name.
// Stored in this browser per booking, shared by all three documents.
const key = (bookingId: string) => `billto-company:${bookingId}`;

export function useBillToCompany(bookingId?: string | null) {
    const [value, setValue] = useState('');
    useEffect(() => {
        if (!bookingId) return;
        try { setValue(localStorage.getItem(key(bookingId)) || ''); } catch { /* storage blocked */ }
    }, [bookingId]);
    const update = (v: string) => {
        setValue(v);
        if (!bookingId) return;
        try {
            if (v.trim()) localStorage.setItem(key(bookingId), v);
            else localStorage.removeItem(key(bookingId));
        } catch { /* storage blocked */ }
    };
    return [value, update] as const;
}

/** Screen-only input shown above the document. */
export function BillToCompanyInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="max-w-[210mm] mx-auto mb-3 print:hidden">
            <label className="flex items-center gap-1.5 text-xs font-bold text-gray-600 mb-1">
                <Building2 className="w-3.5 h-3.5" /> Bill to company (optional, for business clients)
            </label>
            <textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={'Company name\nAddress, city, country\nVAT / Registration No.'}
                rows={3}
                className="w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-primary resize-y bg-white shadow-sm"
            />
        </div>
    );
}

/** Printed company block: first line bold (company name), rest as address lines. */
export function BillToCompanyBlock({ value, className = '' }: { value: string; className?: string }) {
    const lines = value.split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) return null;
    const [name, ...rest] = lines;
    return (
        <div className={className}>
            <p className="font-bold text-gray-900">{name}</p>
            {rest.map((l, i) => <p key={i} className="text-gray-600">{l}</p>)}
        </div>
    );
}
