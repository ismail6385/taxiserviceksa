'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface TabukVehicle { name: string; cls: string; image: string; passengers: number; luggage: number; studio: boolean }

// `seats` is the top of each band, so a suggested vehicle fits the whole band.
const GROUPS = [
    { label: '1–3', seats: 3 },
    { label: '4–5', seats: 5 },
    { label: '6–7', seats: 7 },
    { label: '8–11', seats: 11 },
    { label: '12+', seats: 12 },
];
// Large bags per passenger, roughly.
const LOADS = [
    { label: 'Light', per: 0.34 },
    { label: 'Normal', per: 0.6 },
    { label: 'Heavy', per: 1 },
];
const JOURNEYS = [
    { label: 'City', tip: 'Short hops around Tabuk: seats matter more than boot space.' },
    { label: 'Airport', tip: 'Count every checked bag - airport luggage is what usually decides the vehicle.' },
    { label: '2+ hour journey', tip: 'On longer drives, legroom and luggage space matter more. If you are near a vehicle’s limit, go one size up.' },
    { label: 'Multiple stops', tip: 'With several stops, book by the hour so the vehicle stays with you.' },
    { label: 'Project / business', tip: 'Tell us about equipment or cases - not every vehicle carries them well.' },
];

function Choice({ legend, options, value, set }: { legend: string; options: string[]; value: number; set: (i: number) => void }) {
    return (
        <fieldset>
            <legend className="text-sm font-bold text-[#241a12] mb-2">{legend}</legend>
            <div className="flex flex-wrap gap-2">
                {options.map((o, i) => (
                    <button key={o} type="button" aria-pressed={i === value} onClick={() => set(i)} className={`min-h-[44px] rounded-xl px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] focus-visible:ring-offset-2 ${i === value ? 'bg-[#241a12] text-white' : 'bg-white border border-[#241a12]/[0.15] text-[#241a12] hover:border-[#e2a23b]'}`}>{o}</button>
                ))}
            </div>
        </fieldset>
    );
}

// Passengers, luggage and journey type -> the smallest vehicles whose seats and bag space fit.
// Figures come from the booking system's vehicle list.
export default function TabukVehicleFit({ fleet }: { fleet: TabukVehicle[] }) {
    const [g, setG] = useState(0);
    const [l, setL] = useState(1);
    const [j, setJ] = useState(2);
    const seats = GROUPS[g].seats;
    const bags = Math.ceil(seats * LOADS[l].per);
    const fits = fleet.filter((v) => v.passengers >= seats && v.luggage >= bags).sort((a, b) => a.passengers - b.passengers).slice(0, 4);
    const notes = `${GROUPS[g].label} passengers, ${LOADS[l].label.toLowerCase()} luggage. Journey: ${JOURNEYS[j].label}.`;

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <Choice legend="Passengers" options={GROUPS.map((x) => x.label)} value={g} set={setG} />
                <Choice legend="Luggage" options={LOADS.map((x) => x.label)} value={l} set={setL} />
                <Choice legend="Journey" options={JOURNEYS.map((x) => x.label)} value={j} set={setJ} />
            </div>
            <p className="text-sm text-stone-600 mb-5" aria-live="polite">
                {fits.length ? 'The smallest vehicles with enough seats and luggage space. ' : 'No single vehicle covers this group and luggage. Send the details and we suggest a larger option or two vehicles. '}
                {JOURNEYS[j].tip}
            </p>
            <ul className="flex gap-4 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                {fits.map((v) => (
                    <li key={v.name} className="snap-start shrink-0 w-[72%] sm:w-[45%] md:w-auto animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <div className="h-full rounded-2xl bg-white border border-[#241a12]/10 overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/10] bg-[#f3ebdd]">
                                <Image src={v.image} alt={v.name.split(' /')[0]} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 72vw" className={v.studio ? 'object-contain p-3' : 'object-cover'} />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#9a4f1c]">{v.cls}</p>
                                <p className="font-bold text-[#241a12] mb-1">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-stone-500 mb-4 flex-1">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                <Link href={`/booking/?${new URLSearchParams({ from: 'Tabuk', vehicle: v.name, notes }).toString()}`} className="group inline-flex items-center gap-2 text-sm font-bold text-[#241a12]">
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
