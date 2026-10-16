'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, UserCheck, CheckCircle2, Send } from 'lucide-react';

type Action = 'arrived' | 'picked_up' | 'completed' | 'note';

// Trip status buttons and a note box on a driver's private trip page.
// Updates go to /api/driver-trips/update and show up on the admin booking.
export default function DriverTripActions({ slug, token, bookingId, status, arrivedAt, startedAt, notes }: {
    slug: string; token: string; bookingId: string; status: string;
    arrivedAt: string | null; startedAt: string | null; notes: string[];
}) {
    const router = useRouter();
    const [note, setNote] = useState('');
    const [busy, setBusy] = useState<Action | null>(null);
    const [error, setError] = useState('');

    const send = async (action: Action) => {
        if (action === 'completed' && !confirm('Mark this trip as completed?')) return;
        setBusy(action); setError('');
        try {
            const res = await fetch('/api/driver-trips/update/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug, token, bookingId, action, note: action === 'note' ? note : undefined }),
            });
            const j = await res.json().catch(() => ({}));
            if (!res.ok) { setError(j.error || 'Could not save.'); return; }
            if (action === 'note') setNote('');
            router.refresh();
        } catch {
            setError('No connection. Please try again.');
        } finally {
            setBusy(null);
        }
    };

    const completed = status === 'completed';
    const inProgress = status === 'in_progress';
    const btn = 'flex items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-sm font-bold disabled:opacity-40';

    return (
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-3 space-y-2.5">
            {completed ? (
                <p className="flex items-center gap-1.5 text-sm font-bold text-emerald-700"><CheckCircle2 className="w-4 h-4" /> Trip completed</p>
            ) : (
                <div className="grid grid-cols-3 gap-2">
                    <button type="button" disabled={!!busy || !!arrivedAt} onClick={() => send('arrived')} className={`${btn} ${arrivedAt ? 'bg-emerald-100 text-emerald-800' : 'bg-white border border-gray-300 text-gray-800'}`}>
                        <MapPin className="w-4 h-4" />{arrivedAt ? 'Arrived ✓' : 'Arrived'}
                    </button>
                    <button type="button" disabled={!!busy || inProgress} onClick={() => send('picked_up')} className={`${btn} ${inProgress ? 'bg-emerald-100 text-emerald-800' : 'bg-white border border-gray-300 text-gray-800'}`}>
                        <UserCheck className="w-4 h-4" />{inProgress ? 'Picked up ✓' : 'Picked up'}
                    </button>
                    <button type="button" disabled={!!busy} onClick={() => send('completed')} className={`${btn} bg-gray-900 text-white`}>
                        <CheckCircle2 className="w-4 h-4" />Completed
                    </button>
                </div>
            )}
            {(arrivedAt || startedAt) && (
                <p className="text-xs text-gray-600">
                    {arrivedAt && <>Arrived {arrivedAt}</>}{arrivedAt && startedAt && ' · '}{startedAt && <>Picked up {startedAt}</>}
                </p>
            )}

            <div className="flex gap-2">
                <input
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && note.trim()) send('note'); }}
                    maxLength={500}
                    placeholder="Note for the office (e.g. customer late, waiting 30 min)"
                    className="flex-1 min-w-0 h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm"
                />
                <button type="button" disabled={!note.trim() || busy === 'note'} onClick={() => send('note')} className="h-10 rounded-lg bg-blue-600 px-3 text-sm font-bold text-white disabled:opacity-40 flex items-center gap-1">
                    <Send className="w-4 h-4" />{busy === 'note' ? '…' : 'Send'}
                </button>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {notes.length > 0 && (
                <ul className="space-y-0.5 text-xs text-gray-600">
                    {notes.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
            )}
        </div>
    );
}
