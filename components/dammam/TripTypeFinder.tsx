'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PlaneLanding, Briefcase, Factory, Globe2, Users, Route, CalendarClock } from 'lucide-react';

const TYPES = [
    {
        key: 'airport',
        label: 'Airport arrival',
        icon: PlaneLanding,
        book: 'A DMM Airport transfer',
        send: ['Flight number and arrival time', 'Where you are going (hotel, home, office)', 'Passengers and suitcases'],
        vehicle: 'A sedan for one or two people with normal luggage; a Veloz or Staria for families.',
        quote: { from: 'King Fahd International Airport (DMM)' },
        link: { label: 'Dammam Airport transfers', href: '/dammam-airport-taxi/' },
    },
    {
        key: 'business',
        label: 'Business meeting',
        icon: Briefcase,
        book: 'A corporate transfer',
        send: ['Pickup address or hotel', 'Meeting address in Dammam, Dhahran or Al Khobar', 'Meeting time and whether you need a ride back'],
        vehicle: 'A sedan for one passenger; a GMC Yukon or Staria for two to six colleagues.',
        quote: { notes: 'Business meeting transfer.' },
        link: { label: 'Corporate travel', href: '/services/corporate-travel/' },
    },
    {
        key: 'industrial',
        label: 'Industrial site',
        icon: Factory,
        book: 'A Jubail or site transfer',
        send: ['Site or company address', 'Who will be travelling and with what equipment', 'Arrival time and return time'],
        vehicle: 'Hiace for teams with tool bags or equipment cases; a sedan or Yukon for individual visitors.',
        quote: { to: 'Jubail Industrial City', notes: 'Industrial site visit.' },
        link: { label: 'Jubail Industrial City transfers', href: '/locations/jubail/industrial-city/' },
    },
    {
        key: 'bahrain',
        label: 'Bahrain trip',
        icon: Globe2,
        book: 'A cross-border transfer',
        send: ['Pickup in Dammam or Al Khobar', 'Your address in Bahrain', 'Nationality of each passenger, so we can check the trip is possible'],
        vehicle: 'Any vehicle permitted to cross; tell us your group size and luggage.',
        quote: { to: 'Bahrain' },
        link: { label: 'Dammam to Bahrain transfer', href: '/routes/dammam-bahrain/' },
    },
    {
        key: 'family',
        label: 'Family outing',
        icon: Users,
        book: 'A family transfer',
        send: ['Number of adults and children', 'Child seats you would like us to check for', 'Where you are going - the Corniche, a mall or a family visit'],
        vehicle: 'Toyota Veloz or Hyundai Staria for up to 7; GMC Yukon if you also carry larger bags.',
        quote: { notes: 'Family trip.' },
        link: { label: 'Dammam Corniche', href: '/locations/dammam/corniche/' },
    },
    {
        key: 'intercity',
        label: 'Long-distance',
        icon: Route,
        book: 'An intercity transfer',
        send: ['Pickup address', 'Destination city and address - Riyadh, Al Ahsa or elsewhere', 'Stops you would like on the way'],
        vehicle: 'Choose by luggage: on a long drive, a little more space goes a long way.',
        quote: { to: 'Riyadh' },
        link: { label: 'Dammam to Riyadh transfer', href: '/routes/dammam-riyadh/' },
    },
    {
        key: 'driver',
        label: 'Several meetings',
        icon: CalendarClock,
        book: 'A private driver by the hour',
        send: ['Start time and roughly how many hours', 'The addresses in order, if you know them', 'Whether the day ends at the airport'],
        vehicle: 'Usually a sedan or Yukon for one to three people.',
        quote: { hourly: true },
        link: { label: 'Private driver service', href: '/services/private-driver/' },
    },
] as const;

// "What are you booking?" - pick the purpose of the trip; see what to send and the right service.
export default function TripTypeFinder() {
    const [active, setActive] = useState<string>('airport');
    const t = TYPES.find((x) => x.key === active)!;

    const params = new URLSearchParams();
    const q = t.quote as { from?: string; to?: string; notes?: string; hourly?: boolean };
    if (q.hourly) {
        params.set('trip', 'hourly');
        params.set('from', 'Dammam');
    } else {
        params.set('from', q.from ?? 'Dammam');
        if (q.to) params.set('to', q.to);
    }
    if (q.notes) params.set('notes', q.notes);
    const href = `/booking/?${params.toString()}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div role="tablist" aria-label="Purpose of your trip" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {TYPES.map((x) => (
                    <button
                        key={x.key}
                        role="tab"
                        id={`tt-${x.key}`}
                        aria-selected={active === x.key}
                        aria-controls="tt-panel"
                        onClick={() => setActive(x.key)}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${active === x.key ? 'border-[#07141f] bg-[#07141f] text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-teal-600/60'}`}
                    >
                        <x.icon className={`w-4 h-4 shrink-0 ${active === x.key ? 'text-teal-300' : 'text-teal-700'}`} aria-hidden="true" />
                        {x.label}
                    </button>
                ))}
            </div>

            <div id="tt-panel" role="tabpanel" aria-labelledby={`tt-${t.key}`} key={t.key} className="rounded-3xl bg-white border border-slate-200 p-7 md:p-9 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">You are booking</p>
                <h3 className="mb-5">{t.book}</h3>
                <p className="text-sm font-bold text-slate-900 mb-3">Send us</p>
                <ul className="space-y-2 mb-6">
                    {t.send.map((s) => (
                        <li key={s} className="flex gap-3 text-slate-700">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" aria-hidden="true" />
                            {s}
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-slate-600 border-l-2 border-teal-500 pl-4 mb-7">
                    <span className="font-semibold text-slate-900">Vehicle: </span>
                    {t.vehicle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={href} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2">
                        Start this booking <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    <Link href={t.link.href} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-center text-sm font-bold text-slate-800 hover:border-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                        {t.link.label}
                    </Link>
                </div>
            </div>
        </div>
    );
}
