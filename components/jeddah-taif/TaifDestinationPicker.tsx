'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Mountain, Trees, MapPin } from 'lucide-react';

const DESTS = [
    {
        key: 'city', label: 'Taif City', icon: Building2, to: 'Taif city',
        blurb: 'For hotels, residences and city destinations.',
        context: 'On the plateau, past the top of the climb. Most city hotels and homes are reached without any further mountain driving.',
        send: 'The hotel name or the district and a landmark.',
        vehicle: 'Choose by headcount and bags - a sedan is often enough for up to three with light luggage.',
        link: { href: '/locations/taif/', label: 'Getting around Taif' },
    },
    {
        key: 'hada', label: 'Al Hada', icon: Mountain, to: 'Al Hada, Taif',
        blurb: 'For mountain hotels, resorts and attractions.',
        context: 'On the Al Hada road, Al Hada is reached at the top of the climb, before Taif city. We drive you to your specific hotel or resort entrance.',
        send: 'The resort or hotel name. If you are heading to the cable-car area, say so - tickets and operating hours are not part of the transfer.',
        vehicle: 'Resort stays usually mean more luggage - count the bags before choosing a sedan.',
        link: { href: '/locations/taif/al-hada/', label: 'Al Hada transfers' },
        extra: { href: '/routes/jeddah-to-shaza-al-hada-taif/', label: 'Jeddah Airport → Shaza Al Hada' },
    },
    {
        key: 'shafa', label: 'Shafa', icon: Trees, to: 'Al Shafa, Taif',
        blurb: 'For travellers continuing into the Shafa mountain area.',
        context: 'Al Shafa lies beyond Taif city, further into the mountains, so it is a longer journey than Taif city itself.',
        send: 'The exact resort, farm stay or a map pin - addresses in the area can be hard to find by name.',
        vehicle: 'It is the longest of the three drives - consider a little more room than the minimum.',
        link: { href: '/locations/taif/al-shafa/', label: 'Al Shafa transfers' },
    },
    {
        key: 'custom', label: 'Custom Destination', icon: MapPin, to: '',
        blurb: 'For another verified address.',
        context: 'A private home, an event venue, Taif Airport or somewhere else in the Taif area.',
        send: 'The full address or a map pin, and we confirm it before quoting.',
        vehicle: 'Tell us passengers and bags and we suggest the vehicle.',
        link: null,
    },
];

// Pick where in Taif you are going: fills the destination on the route quote card and shows what that choice changes.
export default function TaifDestinationPicker() {
    const [i, setI] = useState(0);
    const d = DESTS[i];
    const choose = (k: number) => {
        setI(k);
        window.dispatchEvent(new CustomEvent('routequote:set', { detail: { to: DESTS[k].to } }));
    };
    const toQuote = () => {
        window.dispatchEvent(new CustomEvent('routequote:set', { detail: { to: d.to } }));
        document.getElementById('quote')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        (document.getElementById(d.to ? 'rq-from' : 'rq-to') as HTMLInputElement | null)?.focus({ preventScroll: true });
    };

    return (
        <div>
            <div role="group" aria-label="Taif destinations" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {DESTS.map((x, k) => (
                    <button key={x.key} type="button" aria-pressed={k === i} onClick={() => choose(k)} className={`text-left rounded-2xl border-2 p-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d4b] focus-visible:ring-offset-2 ${k === i ? 'border-[#2f5d4b] bg-white' : 'border-transparent bg-white/60 hover:border-[#2f5d4b]/40'}`}>
                        <x.icon className={`w-6 h-6 mb-3 ${k === i ? 'text-[#2f5d4b]' : 'text-stone-500'}`} aria-hidden="true" />
                        <span className="block font-bold text-[#1f2a26]">{x.label}</span>
                        <span className="block text-xs text-stone-600 mt-1">{x.blurb}</span>
                    </button>
                ))}
            </div>
            <div aria-live="polite" key={d.key} className="rounded-3xl bg-[#1f2a26] text-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a8c7b5] mb-2">Jeddah → {d.label}</p>
                    <p className="text-lg text-white/90 leading-relaxed mb-5">{d.context}</p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                        <button type="button" onClick={toQuote} className="group inline-flex items-center gap-2 rounded-xl bg-[#e8c99a] px-5 py-3 font-bold text-[#1f2a26] hover:bg-[#f0d9b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Quote this destination <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </button>
                        {d.link && <Link href={d.link.href} className="font-semibold text-[#a8c7b5] hover:underline">{d.link.label}</Link>}
                        {'extra' in d && d.extra && <Link href={d.extra.href} className="font-semibold text-[#a8c7b5] hover:underline">{d.extra.label}</Link>}
                    </div>
                </div>
                <dl className="space-y-4 text-sm">
                    <div><dt className="font-bold text-[#e8c99a]">Send us</dt><dd className="text-white/80">{d.send}</dd></div>
                    <div><dt className="font-bold text-[#e8c99a]">Vehicle</dt><dd className="text-white/80">{d.vehicle}</dd></div>
                </dl>
            </div>
        </div>
    );
}
