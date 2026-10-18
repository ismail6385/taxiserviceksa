'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { ExtraCharge, saveExtras } from '@/lib/extra-charges';

// Screen-only editor for a booking's extra charges (and, on the quotation,
// the optional bank-transfer fare). Saving stores them on the booking so the
// other documents pick them up.
export default function ExtraChargesEditor({ bookingId, extras, onChange, transferPrice, onTransferPriceChange, currency }: {
    bookingId: string;
    extras: ExtraCharge[];
    onChange: (extras: ExtraCharge[]) => void;
    transferPrice?: number | null;
    onTransferPriceChange?: (v: number | null) => void;
    currency: string;
}) {
    const [rows, setRows] = useState(extras.map(e => ({ label: e.label, amount: String(e.amount) })));
    const [msg, setMsg] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    const update = (next: { label: string; amount: string }[]) => {
        setRows(next);
        setMsg(null);
        onChange(next.map(r => ({ label: r.label.trim(), amount: Number(r.amount) || 0 })).filter(r => r.label && r.amount > 0));
    };

    const save = async () => {
        setSaving(true);
        const clean = rows.map(r => ({ label: r.label.trim(), amount: Number(r.amount) || 0 })).filter(r => r.label && r.amount > 0);
        const err = await saveExtras(bookingId, clean, onTransferPriceChange ? transferPrice ?? null : undefined);
        setSaving(false);
        setMsg(err || 'Saved ✓');
    };

    return (
        <div className="max-w-[210mm] mx-auto mb-4 print:hidden rounded-xl border bg-white p-3 text-xs shadow-sm space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-gray-700">Extra charges (added to the total, e.g. border crossing)</p>
                <div className="flex gap-1.5">
                    <button type="button" onClick={() => update([...rows, { label: 'Border crossing charge', amount: '181' }])} className="rounded border border-gray-300 px-2 h-7 font-semibold text-gray-700 hover:border-gray-500">+ Border crossing 181</button>
                    <button type="button" onClick={() => update([...rows, { label: '', amount: '' }])} className="inline-flex items-center gap-1 rounded border border-gray-300 px-2 h-7 font-semibold text-gray-700 hover:border-gray-500"><Plus className="w-3 h-3" /> Other charge</button>
                </div>
            </div>
            {rows.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                    <input value={r.label} onChange={e => update(rows.map((x, j) => j === i ? { ...x, label: e.target.value } : x))} placeholder="Description" className="flex-1 min-w-0 h-8 rounded border border-gray-300 px-2" />
                    <span className="text-gray-500">{currency}</span>
                    <input type="number" min={0} value={r.amount} onChange={e => update(rows.map((x, j) => j === i ? { ...x, amount: e.target.value } : x))} placeholder="0" className="w-24 h-8 rounded border border-gray-300 px-2" />
                    <button type="button" aria-label="Remove" onClick={() => update(rows.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                </div>
            ))}
            {onTransferPriceChange && (
                <label className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-100">
                    <span className="font-semibold text-gray-700">Different price if the WHOLE amount is paid by bank transfer (optional, shows 2 options). For part bank + rest cash, leave empty and use "Advance + balance cash" under Payment &amp; terms.</span>
                    <span className="text-gray-500">{currency}</span>
                    <input type="number" min={0} value={transferPrice ?? ''} onChange={e => { setMsg(null); onTransferPriceChange(Number(e.target.value) > 0 ? Number(e.target.value) : null); }} placeholder="e.g. 3500" className="w-24 h-8 rounded border border-gray-300 px-2" />
                </label>
            )}
            <div className="flex items-center gap-2">
                <button type="button" onClick={save} disabled={saving} className="rounded bg-gray-900 px-3 h-7 font-bold text-white hover:bg-black disabled:opacity-50">{saving ? 'Saving…' : 'Save to booking'}</button>
                {msg && <span className={msg.startsWith('Saved') ? 'text-emerald-700 font-semibold' : 'text-amber-700'}>{msg}</span>}
            </div>
        </div>
    );
}
