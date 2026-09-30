'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Minus, Plus } from 'lucide-react';

export interface FitVehicle { name: string; label: string; image: string; passengers: number; luggage: number; studio: boolean }

function Stepper({ id, label, value, set, min, max }: { id: string; label: string; value: number; set: (n: number) => void; min: number; max: number }) {
    return (
        <div>
            <p id={id} className="text-sm font-bold text-[#06232b] mb-2">{label}</p>
            <div role="group" aria-labelledby={id} className="inline-flex items-center rounded-xl border border-[#06232b]/[0.15] bg-white">
                <button type="button" onClick={() => set(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`} className="w-12 h-12 flex items-center justify-center text-[#06232b] disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e] rounded-l-xl"><Minus className="w-4 h-4" aria-hidden="true" /></button>
                <output aria-live="polite" className="w-12 text-center text-lg font-bold text-[#06232b]">{value}</output>
                <button type="button" onClick={() => set(Math.min(max, value + 1))} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`} className="w-12 h-12 flex items-center justify-center text-[#06232b] disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e] rounded-r-xl"><Plus className="w-4 h-4" aria-hidden="true" /></button>
            </div>
        </div>
    );
}

// Passengers + suitcases (+ child seats) -> every listed vehicle whose seats and bag space fit.
// Seats and bag figures come from the booking system's vehicle list.
export default function CausewayVehicleFit({ fleet }: { fleet: FitVehicle[] }) {
    const [pax, setPax] = useState(3);
    const [bags, setBags] = useState(3);
    const [child, setChild] = useState(false);
    const fits = fleet.filter((v) => v.passengers >= pax && v.luggage >= bags);

    const notes = `Cross-border via King Fahd Causeway.${child ? ' Child seat needed.' : ''}`;

    return (
        <div>
            <div className="flex flex-wrap items-end gap-6 mb-8">
                <Stepper id="cvf-pax" label="Passengers" value={pax} set={setPax} min={1} max={14} />
                <Stepper id="cvf-bags" label="Suitcases" value={bags} set={setBags} min={0} max={16} />
                <label className="inline-flex items-center gap-3 h-12 cursor-pointer select-none">
                    <input type="checkbox" checked={child} onChange={(e) => setChild(e.target.checked)} className="w-5 h-5 accent-[#0f5e6e]" />
                    <span className="text-sm font-bold text-[#06232b]">Travelling with young children</span>
                </label>
            </div>
            <p className="text-sm text-slate-600 mb-4" aria-live="polite">
                {fits.length ? `${fits.length} vehicle${fits.length > 1 ? 's' : ''} with room for ${pax} passenger${pax > 1 ? 's' : ''} and ${bags} suitcase${bags === 1 ? '' : 's'}${child ? ' - child seats are requested in your booking notes and confirmed with the quote' : ''}.` : 'No single listed vehicle fits these numbers. Send the details and we suggest two vehicles or a larger option.'}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {fits.map((v) => (
                    <li key={v.name} className="snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <div className="h-full rounded-2xl bg-white border border-[#06232b]/10 overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/10] bg-[#f4efe5]">
                                <Image src={v.image} alt={v.name.split(' /')[0]} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 72vw" className={v.studio ? 'object-contain p-4' : 'object-cover'} />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#0f5e6e]">{v.label}</p>
                                <p className="font-bold text-[#06232b] mb-1">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-slate-500 mb-4 flex-1">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                <Link href={`/booking/?${new URLSearchParams({ vehicle: v.name, passengers: String(pax), luggage: String(bags), notes }).toString()}`} className="group inline-flex items-center gap-2 text-sm font-bold text-[#06232b]">
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
