'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Minus, Plus } from 'lucide-react';

export interface RabighVehicle { name: string; cls: string; image: string; passengers: number; luggage: number; studio: boolean }

function Stepper({ id, label, hint, value, set, min, max }: { id: string; label: string; hint: string; value: number; set: (n: number) => void; min: number; max: number }) {
    return (
        <div>
            <p id={id} className="text-sm font-bold text-[#10213f]">{label}</p>
            <p className="text-xs text-slate-500 mb-2">{hint}</p>
            <div role="group" aria-labelledby={id} className="inline-flex items-center rounded-xl border border-[#10213f]/[0.15] bg-white">
                <button type="button" onClick={() => set(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer: ${label}`} className="w-11 h-11 flex items-center justify-center text-[#10213f] disabled:opacity-30 rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]"><Minus className="w-4 h-4" aria-hidden="true" /></button>
                <output aria-live="polite" className="w-10 text-center text-lg font-bold text-[#10213f]">{value}</output>
                <button type="button" onClick={() => set(Math.min(max, value + 1))} disabled={value >= max} aria-label={`More: ${label}`} className="w-11 h-11 flex items-center justify-center text-[#10213f] disabled:opacity-30 rounded-r-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]"><Plus className="w-4 h-4" aria-hidden="true" /></button>
            </div>
        </div>
    );
}

// Passengers, suitcases, hand luggage and child seats -> the vehicles whose seats and bag space fit.
// Two small bags are counted as one large bag. Figures come from the booking system's vehicle list.
export default function RabighVehicleFit({ fleet }: { fleet: RabighVehicle[] }) {
    const [pax, setPax] = useState(3);
    const [cases, setCases] = useState(2);
    const [hand, setHand] = useState(2);
    const [child, setChild] = useState(false);
    const [special, setSpecial] = useState('');
    const need = cases + Math.ceil(hand / 2);
    const fits = fleet.filter((v) => v.passengers >= pax && v.luggage >= need);
    const notes = [child && 'Child seat needed.', special.trim()].filter(Boolean).join(' ');

    return (
        <div>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-5 mb-6">
                <Stepper id="rvf-pax" label="Passengers" hint="Including children" value={pax} set={setPax} min={1} max={14} />
                <Stepper id="rvf-cases" label="Suitcases" hint="Large checked bags" value={cases} set={setCases} min={0} max={16} />
                <Stepper id="rvf-hand" label="Hand luggage" hint="Small bags" value={hand} set={setHand} min={0} max={16} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-center mb-6">
                <label className="inline-flex items-center gap-3 h-11 cursor-pointer select-none">
                    <input type="checkbox" checked={child} onChange={(e) => setChild(e.target.checked)} className="w-5 h-5 accent-[#f07b5a]" />
                    <span className="text-sm font-bold text-[#10213f]">Child seat needed</span>
                </label>
                <div>
                    <label htmlFor="rvf-special" className="sr-only">Special requirements</label>
                    <input id="rvf-special" value={special} onChange={(e) => setSpecial(e.target.value)} maxLength={160} placeholder="Special requirements (optional)" className="w-full h-11 rounded-lg border border-[#10213f]/[0.15] bg-white px-3 text-base text-[#10213f] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f07b5a]/40" />
                </div>
            </div>
            <p className="text-sm text-slate-600 mb-4" aria-live="polite">
                {fits.length ? `${fits.length} vehicle${fits.length > 1 ? 's' : ''} with room for ${pax} passenger${pax > 1 ? 's' : ''} and about ${need} large bag${need === 1 ? '' : 's'}.` : 'No single vehicle fits these numbers. Send the details and we suggest two vehicles or a larger option.'}
                {child && ' Child seats are requested in your booking notes and confirmed with the quote.'}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {fits.map((v) => (
                    <li key={v.name} className="snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <div className="h-full rounded-2xl bg-white border border-[#10213f]/10 overflow-hidden flex flex-col transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
                            <div className="relative aspect-[16/10] bg-[#f5efe4]">
                                <Image src={v.image} alt={v.name.split(' /')[0]} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 72vw" className={v.studio ? 'object-contain p-4' : 'object-cover'} />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#c4553a]">{v.cls}</p>
                                <p className="font-bold text-[#10213f] mb-1">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-slate-500 mb-4 flex-1">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                <Link href={`/booking/?${new URLSearchParams({ vehicle: v.name, passengers: String(pax), luggage: String(need), ...(notes ? { notes } : {}) }).toString()}`} className="group inline-flex items-center gap-2 text-sm font-bold text-[#10213f]">
                                    Request this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
