'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Lets a driver enter what a trip cost on their private trip page; the page
// then shows the profit and their 50% share.
export default function DriverCostForm({ slug, token, bookingId, initialCost, currency }: {
    slug: string; token: string; bookingId: string; initialCost: number | null; currency: string;
}) {
    const router = useRouter();
    const [value, setValue] = useState(initialCost !== null ? String(initialCost) : '');
    const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const dirty = value !== (initialCost !== null ? String(initialCost) : '');

    const save = async () => {
        setState('saving'); setMessage('');
        try {
            const res = await fetch('/api/driver-trips/cost/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug, token, bookingId, cost: value.trim() === '' ? null : value.trim() }),
            });
            const j = await res.json().catch(() => ({}));
            if (!res.ok) { setState('error'); setMessage(j.error || 'Could not save.'); return; }
            setState('saved');
            router.refresh();
        } catch {
            setState('error'); setMessage('No connection. Please try again.');
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            <label className="text-sm text-gray-600" htmlFor={`cost-${bookingId}`}>Trip cost ({currency})</label>
            <input
                id={`cost-${bookingId}`}
                inputMode="decimal"
                value={value}
                onChange={e => { setValue(e.target.value.replace(/[^\d.]/g, '')); setState('idle'); }}
                placeholder="e.g. 3000"
                className="h-10 w-28 rounded-lg border border-gray-300 px-3 text-base"
            />
            <button
                type="button"
                onClick={save}
                disabled={!dirty || state === 'saving'}
                className="h-10 rounded-lg bg-gray-900 px-4 text-sm font-bold text-white disabled:opacity-40"
            >
                {state === 'saving' ? 'Saving…' : 'Save'}
            </button>
            {state === 'saved' && !dirty && <span className="text-sm font-semibold text-emerald-700">Saved ✓</span>}
            {state === 'error' && <span className="text-sm text-red-600">{message}</span>}
        </div>
    );
}
