'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

// Only districts that have their own page on the site.
const AREAS = [
    {
        key: 'jabal-omar',
        name: 'Jabal Omar',
        img: '/makkah-jabal-omar-taxi.png',
        context: 'A development of large hotels right beside Masjid al-Haram, on its western side.',
        transport: 'Hotels here are close to the Haram, so the question is usually where the car can stop. Your pickup and drop-off point is confirmed for your hotel.',
    },
    {
        key: 'misfalah',
        name: 'Misfalah',
        img: '/makkah-misfalah-street.png',
        context: 'A busy district just south of the Haram, with many hotels and shops.',
        transport: 'Streets can be crowded near prayer times. Agree a clear meeting point with the driver, especially for early departures.',
    },
    {
        key: 'kudai',
        name: 'Kudai',
        img: '/makkah-kudai-transport.png',
        context: 'An area south of the centre known for its bus and parking station serving the Haram area.',
        transport: 'Useful as a pickup point when roads closer to the Haram are controlled.',
    },
    {
        key: 'aziziyah',
        name: 'Aziziyah',
        img: '/makkah-aziziyah-taxi.png',
        context: 'A large district east of the centre, towards Mina, with many hotels and apartments used by families and groups.',
        transport: 'Further from the Haram, so many guests book transfers into the centre and back, or a car for Ziyarat.',
    },
    {
        key: 'jarwal',
        name: 'Jarwal',
        img: '/makkah-jarwal-area.png',
        context: 'A residential district north-west of the Haram with a mix of hotels.',
        transport: 'Handy for airport and Jeddah transfers; tell us your hotel so the driver knows the approach.',
    },
];

export default function NeighborhoodExplorer() {
    const [active, setActive] = useState(AREAS[0].key);
    const a = AREAS.find((x) => x.key === active)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            <div role="tablist" aria-label="Makkah districts" className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                {AREAS.map((x) => (
                    <button
                        key={x.key}
                        role="tab"
                        id={`nb-${x.key}`}
                        aria-selected={active === x.key}
                        aria-controls="nb-panel"
                        onClick={() => setActive(x.key)}
                        className={`shrink-0 flex items-center gap-3 rounded-xl border px-5 py-4 text-left font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${active === x.key ? 'border-[#1a1208] bg-[#1a1208] text-white' : 'border-stone-200 bg-white text-gray-800 hover:border-amber-600/60'}`}
                    >
                        <MapPin className={`w-4 h-4 ${active === x.key ? 'text-amber-300' : 'text-amber-700'}`} aria-hidden="true" />
                        {x.name}
                    </button>
                ))}
            </div>
            <div id="nb-panel" role="tabpanel" aria-labelledby={`nb-${a.key}`} key={a.key} className="rounded-3xl overflow-hidden bg-white border border-stone-200 grid grid-cols-1 md:grid-cols-2 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-stone-100">
                    <Image src={a.img} alt={`Street scene in ${a.name}, Makkah`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7 flex flex-col">
                    <h3 className="mb-3">{a.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{a.context}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 border-l-2 border-amber-500 pl-4">{a.transport}</p>
                    <Link href={`/locations/makkah/${a.key}/`} className="group mt-auto inline-flex items-center gap-2 font-bold text-amber-800">
                        Transport in {a.name} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
