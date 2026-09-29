'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Names, seats and large-bag figures from the booking system's vehicle list (lib/supabase.ts).
const V = {
    camry: { name: 'Toyota Camry', cat: 'Business sedan', img: '/toyota-camry.webp', seats: 4, bags: 2 },
    g80: { name: 'Genesis G80 VIP', cat: 'Executive sedan', img: '/fleet/genesis-g80-luxury-transport-ksa.webp', seats: 3, bags: 2 },
    veloz: { name: 'Toyota Veloz 2024', cat: 'Family MPV', img: '/fleet/toyota-veloz-2024-dammam-jubail-bahrain-chauffeur.webp', seats: 7, bags: 4 },
    yukon: { name: 'GMC Yukon XL / Denali', cat: 'Premium SUV', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', seats: 7, bags: 5 },
    hiace: { name: 'Toyota Hiace', cat: 'Group van', img: '/toyota-hiace.webp', seats: 11, bags: 16 },
};
type K = keyof typeof V;

const STANDARD: K[] = ['camry', 'veloz', 'yukon', 'hiace'];
const PREMIUM: K[] = ['g80', 'yukon', 'hiace'];

const seg = (on: boolean) =>
    `flex-1 rounded-lg px-3 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] ${on ? 'bg-[#0b1535] text-white' : 'text-[#0b1535] hover:bg-white'}`;

// Passengers, bags, border and comfort preference -> the smallest listed vehicle that fits.
export default function KhobarVehiclePicker() {
    const [pax, setPax] = useState(2);
    const [bags, setBags] = useState(2);
    const [border, setBorder] = useState(false);
    const [premium, setPremium] = useState(false);

    const order = premium ? PREMIUM : STANDARD;
    const key = order.find((k) => V[k].seats >= pax && V[k].bags >= bags);
    const v = key ? V[key] : null;

    const params = new URLSearchParams({ passengers: String(pax), luggage: String(bags), from: 'Al Khobar' });
    if (v) params.set('vehicle', v.name);
    if (border) params.set('to', 'Bahrain');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-stretch">
            <div className="rounded-3xl bg-[#eef2fb] p-6 md:p-8 space-y-6">
                <div>
                    <label htmlFor="kv-pax" className="flex justify-between text-sm font-bold text-[#0b1535] mb-2">Passengers <span>{pax}</span></label>
                    <input id="kv-pax" type="range" min={1} max={11} value={pax} onChange={(e) => setPax(Number(e.target.value))} className="w-full accent-[#2f6bff] h-2" />
                </div>
                <div>
                    <label htmlFor="kv-bags" className="flex justify-between text-sm font-bold text-[#0b1535] mb-2">Large suitcases <span>{bags}</span></label>
                    <input id="kv-bags" type="range" min={0} max={16} value={bags} onChange={(e) => setBags(Number(e.target.value))} className="w-full accent-[#2f6bff] h-2" />
                </div>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0b1535] mb-2">Journey</legend>
                    <div className="flex gap-1 rounded-xl bg-[#dfe6f5] p-1">
                        <button type="button" aria-pressed={!border} onClick={() => setBorder(false)} className={seg(!border)}>Within Saudi</button>
                        <button type="button" aria-pressed={border} onClick={() => setBorder(true)} className={seg(border)}>To Bahrain / GCC</button>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-bold text-[#0b1535] mb-2">Comfort</legend>
                    <div className="flex gap-1 rounded-xl bg-[#dfe6f5] p-1">
                        <button type="button" aria-pressed={!premium} onClick={() => setPremium(false)} className={seg(!premium)}>Standard</button>
                        <button type="button" aria-pressed={premium} onClick={() => setPremium(true)} className={seg(premium)}>Executive</button>
                    </div>
                </fieldset>
            </div>

            <div aria-live="polite" className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col">
                {v ? (
                    <>
                        <div key={v.name} className="relative aspect-[16/9] bg-slate-100 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                            <Image src={v.img} alt={v.name} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#2f6bff] mb-1">{v.cat}</p>
                            <p className="text-2xl font-bold text-[#0b1535]">{v.name.split(' /')[0]}</p>
                            <p className="text-sm text-slate-600 mt-1 mb-4">Up to {v.seats} passengers · about {v.bags} large bags</p>
                            {border && <p className="text-sm text-slate-600 mb-4 rounded-xl bg-[#eef2fb] px-4 py-3">For border trips we confirm a vehicle and driver permitted to cross when you book - the final vehicle may differ.</p>}
                            <Link href={`/booking/?${params.toString()}`} className="group mt-auto inline-flex items-center gap-2 font-bold text-[#2f6bff]">
                                Quote with this vehicle <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="p-8 flex-1 flex flex-col justify-center">
                        <p className="text-xl font-bold text-[#0b1535] mb-2">More than one vehicle carries</p>
                        <p className="text-slate-600 mb-5">Send the exact passenger and bag count and we suggest a larger vehicle or two cars travelling together.</p>
                        <Link href={`/booking/?${params.toString()}`} className="group inline-flex items-center gap-2 font-bold text-[#2f6bff]">Request a group quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                    </div>
                )}
            </div>
        </div>
    );
}
