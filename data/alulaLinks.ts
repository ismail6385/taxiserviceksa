// Internal links shared by the AlUla transfer pages (airport, private driver, routes).
export const ALULA_LINKS = [
    { href: '/locations/alula/', label: 'AlUla Taxi & Transport' },
    { href: '/locations/alula/airport/', label: 'AlUla Airport (ULH) Taxi' },
    { href: '/locations/alula/private-driver/', label: 'AlUla Private Driver (Day Hire)' },
    { href: '/locations/alula/hegra/', label: 'Taxi to Hegra' },
    { href: '/locations/alula/elephant-rock/', label: 'Taxi to Elephant Rock' },
    { href: '/routes/madinah-alula/', label: 'Madinah to AlUla' },
    { href: '/routes/alula-madinah/', label: 'AlUla to Madinah' },
    { href: '/routes/jeddah-alula/', label: 'Jeddah to AlUla' },
    { href: '/routes/tabuk-alula/', label: 'Tabuk to AlUla' },
    { href: '/routes/yanbu-alula/', label: 'Yanbu to AlUla' },
    { href: '/routes/hail-alula/', label: 'Hail to AlUla' },
    { href: '/routes/alula-khaybar/', label: 'AlUla to Khaybar Day Trip' },
    { href: '/routes/alula-amman/', label: 'AlUla to Jordan (Petra & Amman)' },
];

export function alulaLinksExcept(href: string) {
    return ALULA_LINKS.filter((l) => l.href !== href);
}
