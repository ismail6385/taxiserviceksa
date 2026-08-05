// Data for the "Company Dammam to Bahrain VIP Taxi" route pages under
// app/(main)/routes/<slug>-dammam-to-bahrain-taxi/. Each entry drives
// CorporateBahrainTransferPage with sector-specific, non-generic copy so
// these don't collapse into the kind of templated duplicate content flagged
// in the 2026-07-24 indexing review (see memory) — only the pricing/fleet
// scaffolding is shared, the context/travelReason/faq text is not.
//
// These companies are not affiliated with or endorsed by Taxi Service KSA;
// this data exists to describe a route commonly used by their staff/contractors.

export interface CorporateFaq {
    question: string;
    shortAnswer: string;
    detailedAnswer: string;
}

export interface CorporateTransferCompany {
    slug: string;
    name: string;
    sector: string;
    heroBadge: string;
    context: string;
    travelReason: string;
    uniqueFaq: CorporateFaq;
}

export const corporateBahrainTransfers: CorporateTransferCompany[] = [
    // ---- Oilfield Services ----
    {
        slug: 'schlumberger',
        name: 'Schlumberger (SLB)',
        sector: 'Oilfield Services',
        heroBadge: 'Oilfield Services Corridor',
        context: "Dammam, Al Khobar and Dhahran form the heart of Saudi Arabia's oilfield services corridor, home to Aramco headquarters and the regional offices and yards of companies like Schlumberger (SLB).",
        travelReason: 'Staff, contractors and visiting engineers regularly cross to Bahrain for meetings, project reviews and regional coordination.',
        uniqueFaq: {
            question: 'Can you accommodate a last-minute pickup for a rig crew change?',
            shortAnswer: 'Yes, with notice',
            detailedAnswer: 'We can usually arrange same-day pickups for crew changes and urgent handovers. WhatsApp us the pickup point and time as early as possible so we can confirm a vehicle.',
        },
    },
    {
        slug: 'halliburton',
        name: 'Halliburton',
        sector: 'Oilfield Services',
        heroBadge: 'Oilfield Services Corridor',
        context: "Halliburton is one of the world's largest oilfield services companies, with a long-standing presence across Saudi Arabia's Eastern Province supporting drilling, completions and production work for operators throughout the Gulf.",
        travelReason: 'Its engineers and account managers cross to Bahrain regularly for regional planning meetings, equipment logistics, and coordination with Gulf-based clients and suppliers.',
        uniqueFaq: {
            question: 'Can the driver wait while I attend a short meeting in Manama?',
            shortAnswer: 'Yes, waiting time available',
            detailedAnswer: 'Yes, we offer waiting-time packages if you need the same vehicle for a return trip after a short meeting or site visit. Mention this when booking so we can quote it correctly.',
        },
    },
    {
        slug: 'baker-hughes',
        name: 'Baker Hughes',
        sector: 'Oilfield Services',
        heroBadge: 'Oilfield Services Corridor',
        context: 'Baker Hughes provides oilfield equipment, technology and services to operators throughout the Gulf, with staff and contractors based across the Dammam, Al Khobar and Dhahran corridor.',
        travelReason: 'Regional reviews, client meetings and technical coordination with Bahrain-based partners are a routine part of the schedule for teams working this corridor.',
        uniqueFaq: {
            question: "Can you transport technical equipment or sample cases along with passengers?",
            shortAnswer: 'Small equipment cases only',
            detailedAnswer: 'Our GMC Yukon XL and Mercedes S-Class have space for laptop bags, sample cases and small equipment alongside luggage. For bulky freight, please describe the items when booking so we can confirm the right vehicle.',
        },
    },
    {
        slug: 'weatherford',
        name: 'Weatherford',
        sector: 'Oilfield Services',
        heroBadge: 'Oilfield Services Corridor',
        context: "Weatherford supplies drilling, completions and production equipment to operators across Saudi Arabia's Eastern Province, one of the busiest oilfield services markets in the Gulf.",
        travelReason: 'Field engineers and supply-chain staff often need to reach Bahrain for warehouse coordination, client visits or regional handovers on tight schedules.',
        uniqueFaq: {
            question: 'Do you offer early-morning pickups for flight or shift connections?',
            shortAnswer: 'Yes, 24/7 service',
            detailedAnswer: 'Yes, our service runs 24/7. Early-morning and overnight pickups are common for shift and flight connections — book the day before to guarantee a driver at your preferred time.',
        },
    },

    // ---- Aramco Joint-Venture & International Majors ----
    {
        slug: 'exxonmobil',
        name: 'ExxonMobil',
        sector: 'Aramco Joint-Venture Partner',
        heroBadge: 'Aramco Joint-Venture Partner',
        context: "ExxonMobil is a long-standing international partner in Saudi Arabia's downstream and lubricants joint ventures, with technical and commercial teams coordinating across the Gulf region.",
        travelReason: 'Professionals working on these joint ventures use the Dammam-Khobar-Bahrain corridor for regional meetings and cross-border coordination with Gulf partners.',
        uniqueFaq: {
            question: 'Can you arrange transport for a small delegation traveling together?',
            shortAnswer: 'Yes, multiple vehicles',
            detailedAnswer: 'Yes, we can book multiple vehicles departing together for a delegation, or a single GMC Yukon XL for groups of up to six. Let us know passenger count and timing in advance.',
        },
    },
    {
        slug: 'shell',
        name: 'Shell',
        sector: 'Aramco Joint-Venture Partner',
        heroBadge: 'Aramco Joint-Venture Partner',
        context: "Shell maintains trading, technical and joint-venture interests across the Gulf's oil and gas sector, with teams coordinating between Saudi operations and regional hubs.",
        travelReason: 'Commercial and technical staff on these accounts frequently travel the Dammam-Bahrain corridor for partner meetings, audits and regional reviews.',
        uniqueFaq: {
            question: 'Is there a fixed rate or does the price change with fuel/toll costs?',
            shortAnswer: 'Fixed, all-inclusive',
            detailedAnswer: 'Our published rates are fixed and all-inclusive of fuel and the King Fahd Causeway toll. The only thing that changes the price is your choice of vehicle.',
        },
    },
    {
        slug: 'totalenergies',
        name: 'TotalEnergies',
        sector: 'Aramco Joint-Venture Partner',
        heroBadge: 'Aramco Joint-Venture Partner',
        context: 'TotalEnergies participates in downstream and energy joint ventures across Saudi Arabia, with commercial and technical staff coordinating regularly across Gulf markets.',
        travelReason: 'Teams supporting these ventures use this route for supplier meetings, partner visits and regional planning sessions in Bahrain.',
        uniqueFaq: {
            question: 'Can you issue a receipt in English for expense reporting?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we provide an English-language receipt for every trip, suitable for standard corporate expense reporting. Ask your driver or request one by email after booking.',
        },
    },
    {
        slug: 'sinopec',
        name: 'Sinopec',
        sector: 'Aramco Joint-Venture Partner',
        heroBadge: 'Aramco Joint-Venture Partner',
        context: 'Sinopec is one of Saudi Arabia’s major international energy partners, with project and technical teams operating on refining and engineering contracts across the Kingdom.',
        travelReason: 'Staff coordinating regional projects often route through the Eastern Province to reach Bahrain for supplier meetings and partner reviews.',
        uniqueFaq: {
            question: 'Do your drivers speak English for international staff?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, our chauffeurs on this route are comfortable communicating in English. Share your pickup instructions in English or Arabic and we will confirm them back to you before the trip.',
        },
    },

    // ---- EPC & Engineering Contractors ----
    {
        slug: 'bechtel',
        name: 'Bechtel',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'Bechtel has been one of the major international EPC contractors in Saudi Arabia for decades, delivering large-scale infrastructure, energy and industrial projects across the Eastern Province.',
        travelReason: 'Project management and procurement staff travel this route for supplier meetings, vendor inspections and coordination with Bahrain-based partners.',
        uniqueFaq: {
            question: 'Can you pick up directly from a project site or construction camp?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we regularly pick up from project sites and construction camps across the Eastern Province, not just offices and hotels. Share the site name or coordinates when booking.',
        },
    },
    {
        slug: 'fluor',
        name: 'Fluor Corporation',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: "Fluor is a leading EPC contractor on Saudi Arabia's refining and petrochemical megaprojects, with engineering and project teams based across the Eastern Province.",
        travelReason: 'Its staff travel to Bahrain for vendor qualification meetings, procurement reviews and regional project coordination.',
        uniqueFaq: {
            question: 'How far in advance should a project team book this route?',
            shortAnswer: 'Same-day usually works',
            detailedAnswer: 'For a single vehicle, same-day WhatsApp booking is usually fine. For a delegation or a fixed weekly schedule, booking a few days ahead guarantees your preferred vehicle and timing.',
        },
    },
    {
        slug: 'jacobs',
        name: 'Jacobs Engineering',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'Jacobs Engineering provides project management, engineering and consulting services to Aramco and other industrial clients across the Eastern Province.',
        travelReason: 'Consultants and project managers use this route for client meetings, design reviews and coordination with Bahrain-based project offices.',
        uniqueFaq: {
            question: 'Can I book a return trip the same day for a day meeting?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, same-day return trips are common for day meetings in Manama. Tell us your planned return time when booking, or call the driver directly once your meeting wraps up.',
        },
    },
    {
        slug: 'mcdermott',
        name: 'McDermott International',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'McDermott International operates one of its major offshore fabrication yards in the Eastern Province, supporting fabrication and construction work across the Gulf.',
        travelReason: 'Engineers and project staff travel between the Dammam-area yard and Bahrain for client inspections, subcontractor meetings and regional coordination.',
        uniqueFaq: {
            question: 'Do you provide transport for shift workers on a fixed roster?',
            shortAnswer: 'Yes, roster accounts available',
            detailedAnswer: 'Yes, we can set up a fixed roster arrangement with pre-agreed pickup times for shift workers or rotating teams. Contact us to set up a recurring booking schedule.',
        },
    },
    {
        slug: 'technip-energies',
        name: 'Technip Energies',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'Technip Energies delivers engineering and construction for petrochemical and LNG projects across Saudi Arabia, with technical teams coordinating regionally.',
        travelReason: 'Its engineers travel this route for licensor meetings, technical reviews and coordination with Bahrain-based project partners.',
        uniqueFaq: {
            question: 'Is the causeway crossing included in the fare, or extra?',
            shortAnswer: 'Included',
            detailedAnswer: 'The King Fahd Causeway toll is already included in every fare on this route. There are no extra charges added at the border.',
        },
    },
    {
        slug: 'samsung-engineering',
        name: 'Samsung Engineering',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: "Samsung Engineering is among the Korean EPC majors executing refining and petrochemical projects in Saudi Arabia, with project teams based across the Eastern Province.",
        travelReason: 'Project staff travel to Bahrain for procurement meetings, client reviews and coordination with regional suppliers.',
        uniqueFaq: {
            question: 'Can non-Arabic speaking staff book easily by WhatsApp?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, you can book in English by WhatsApp — just send your pickup location, destination in Bahrain, date, time and passenger count, and we will confirm the vehicle and price.',
        },
    },
    {
        slug: 'hyundai-enc',
        name: 'Hyundai Engineering & Construction',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'Hyundai Engineering & Construction is one of the Korean EPC contractors active on Saudi infrastructure and energy projects, with staff working across Eastern Province sites.',
        travelReason: 'Its project teams travel to Bahrain for regional coordination meetings, supplier visits and client reviews.',
        uniqueFaq: {
            question: 'Can you handle a recurring weekly booking for a project team?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we can set up a recurring weekly booking with the same pickup point and time so your team does not need to re-book each trip. Ask about our corporate account option.',
        },
    },
    {
        slug: 'lt',
        name: 'Larsen & Toubro (L&T)',
        sector: 'EPC & Engineering',
        heroBadge: 'EPC & Engineering Projects',
        context: 'Larsen & Toubro (L&T) is a major Indian engineering and construction conglomerate active on hydrocarbon and infrastructure projects across the Gulf, including sites in the Eastern Province.',
        travelReason: 'Its engineers and project managers use this corridor for client meetings, procurement coordination and regional project reviews in Bahrain.',
        uniqueFaq: {
            question: 'Can you drop off directly at a project office inside Bahrain, not just central Manama?',
            shortAnswer: 'Yes, anywhere in Bahrain',
            detailedAnswer: 'Yes, our drop-off is door-to-door anywhere in Bahrain, not limited to central Manama — including project offices, industrial areas and outlying towns.',
        },
    },

    // ---- Industrial Automation & Equipment ----
    {
        slug: 'siemens',
        name: 'Siemens',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'Siemens supplies automation, power and digitalization equipment to plants and facilities across Saudi Arabia’s Eastern Province industrial base.',
        travelReason: 'Its sales engineers and service technicians travel between client sites in Dammam and Al Khobar and Bahrain for regional support visits and business meetings.',
        uniqueFaq: {
            question: 'Can a service engineer carry a toolkit or laptop case in the car?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, standard toolkits, laptop cases and demo equipment travel fine in the trunk of any of our vehicles. For larger equipment, mention it when booking.',
        },
    },
    {
        slug: 'ge',
        name: 'General Electric (GE)',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'General Electric supplies power generation and oil & gas equipment used across Aramco and industrial projects in the Eastern Province.',
        travelReason: 'Its regional account managers and field engineers travel to Bahrain for client meetings and technical coordination.',
        uniqueFaq: {
            question: 'Do you provide a confirmation before the trip so I can plan my meeting?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, once you book we confirm the vehicle, driver contact and pickup time by WhatsApp so you can plan your meeting schedule with confidence.',
        },
    },
    {
        slug: 'honeywell',
        name: 'Honeywell',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'Honeywell provides process automation and control systems to refineries and petrochemical plants across the Eastern Province.',
        travelReason: 'Its technical teams travel to Bahrain for training sessions, commissioning support and regional client meetings.',
        uniqueFaq: {
            question: 'Is airport pickup available if I am flying into Dammam first?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we can pick you up directly at King Fahd International Airport (DMM) arrivals and continue straight to Bahrain via the causeway — just share your flight number.',
        },
    },
    {
        slug: 'abb',
        name: 'ABB',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'ABB supplies electrification and automation technology to industrial plants across Saudi Arabia’s Eastern Province.',
        travelReason: 'Its engineers travel this corridor for site commissioning support, regional sales meetings and partner coordination in Bahrain.',
        uniqueFaq: {
            question: 'Can the driver help coordinate a border-crossing badge or ID check?',
            shortAnswer: 'Driver assists at the crossing',
            detailedAnswer: 'Your driver is experienced with the King Fahd Causeway crossing and will guide you through the ID/passport check, but the travel documents themselves are the passenger’s responsibility.',
        },
    },
    {
        slug: 'emerson',
        name: 'Emerson Electric',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'Emerson supplies automation and measurement instrumentation to oil & gas facilities across the Eastern Province.',
        travelReason: 'Its account managers and application engineers travel to Bahrain for client visits and regional technical support.',
        uniqueFaq: {
            question: 'Can you accommodate two stops — an office and then a hotel — in one trip?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we can plan a route with an intermediate stop such as an office visit before your hotel drop-off. Mention both addresses when booking so we can quote accordingly.',
        },
    },
    {
        slug: 'johnson-controls',
        name: 'Johnson Controls',
        sector: 'Industrial Automation',
        heroBadge: 'Industrial Automation & Equipment',
        context: 'Johnson Controls supplies building automation, HVAC and fire-safety systems to large industrial and commercial facilities across the Eastern Province.',
        travelReason: 'Its project engineers travel to Bahrain for regional project coordination and client handover meetings.',
        uniqueFaq: {
            question: 'What happens if my meeting runs late and I miss my planned return time?',
            shortAnswer: 'Just message your driver',
            detailedAnswer: 'Message your driver or our WhatsApp line as soon as you know your meeting is running late — we will adjust the pickup time. Extended waiting may carry a small additional charge.',
        },
    },

    // ---- Logistics & Shipping ----
    {
        slug: 'dhl',
        name: 'DHL',
        sector: 'Logistics & Freight',
        heroBadge: 'Logistics & Freight Network',
        context: "DHL operates as part of the logistics and freight network connecting Saudi Arabia's Eastern Province with the wider Gulf market.",
        travelReason: 'Regional operations managers travel between Dammam-area facilities and Bahrain for scheduling, customs coordination and client meetings.',
        uniqueFaq: {
            question: 'Can you time the pickup around a warehouse shift change?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, tell us the shift or handover time and we will schedule the pickup around it, including early-morning or late-night departures.',
        },
    },
    {
        slug: 'fedex',
        name: 'FedEx',
        sector: 'Logistics & Freight',
        heroBadge: 'Logistics & Freight Network',
        context: 'FedEx runs express logistics operations connecting the Eastern Province with regional Gulf hubs, including Bahrain.',
        travelReason: 'Its regional coordinators travel this route for operations meetings and cross-border scheduling with Bahrain-based teams.',
        uniqueFaq: {
            question: 'Do you operate on Fridays and public holidays?',
            shortAnswer: 'Yes, 24/7 including holidays',
            detailedAnswer: 'Yes, this service runs 24/7 including Fridays and public holidays in both Saudi Arabia and Bahrain. Booking ahead is recommended during peak holiday periods.',
        },
    },
    {
        slug: 'db-schenker',
        name: 'DB Schenker',
        sector: 'Logistics & Freight',
        heroBadge: 'Logistics & Freight Network',
        context: 'DB Schenker provides freight forwarding and logistics services connecting Saudi Arabia’s Eastern Province with Gulf ports and markets.',
        travelReason: 'Its account managers travel between Dammam operations and Bahrain for client meetings and freight coordination.',
        uniqueFaq: {
            question: 'Can I pay by bank transfer instead of cash on arrival?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, corporate clients can pay by bank transfer against an invoice. Individual travelers can pay in cash or by card with the driver. Ask about setting up an account when booking.',
        },
    },
    {
        slug: 'maersk',
        name: 'Maersk',
        sector: 'Logistics & Freight',
        heroBadge: 'Logistics & Freight Network',
        context: 'Maersk connects Saudi Arabia’s Eastern Province ports and terminals with the wider Gulf shipping network, including routes touching Bahrain.',
        travelReason: 'Its port and commercial teams travel between Dammam and Bahrain for scheduling meetings and client coordination.',
        uniqueFaq: {
            question: 'Can you pick up from near King Fahd Industrial Port?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we cover pickups from King Fahd Industrial Port and the surrounding industrial and port areas of Dammam, in addition to offices and hotels.',
        },
    },
    {
        slug: 'msc',
        name: 'MSC',
        sector: 'Logistics & Freight',
        heroBadge: 'Logistics & Freight Network',
        context: 'MSC operates container shipping services linking Saudi Arabia’s Eastern Province with Gulf ports, including Bahrain.',
        travelReason: 'Its regional staff travel this corridor for client visits, port coordination meetings and commercial reviews.',
        uniqueFaq: {
            question: 'Is the car available for a same-day round trip to a port meeting?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, same-day round trips for a single port meeting are common on this route. Tell us your expected return time so we can plan the driver’s schedule.',
        },
    },

    // ---- Automotive Distribution ----
    {
        slug: 'toyota',
        name: 'Toyota',
        sector: 'Automotive Distribution',
        heroBadge: 'Automotive Distribution Network',
        context: 'Toyota’s regional dealership and distribution network spans Saudi Arabia’s Eastern Province and the wider Gulf market.',
        travelReason: 'Area managers and after-sales teams travel between Dammam-area dealerships and Bahrain for regional coordination and dealer meetings.',
        uniqueFaq: {
            question: 'Can you arrange transport for a group attending a dealer conference?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we can arrange several vehicles for a group traveling to the same conference or event in Bahrain. Share the group size and schedule and we will coordinate the fleet.',
        },
    },
    {
        slug: 'nissan',
        name: 'Nissan',
        sector: 'Automotive Distribution',
        heroBadge: 'Automotive Distribution Network',
        context: 'Nissan’s regional dealership network covers Saudi Arabia’s Eastern Province alongside operations across the Gulf.',
        travelReason: 'Its regional managers travel between Dammam-area showrooms and Bahrain for business reviews and coordination meetings.',
        uniqueFaq: {
            question: 'Can I book from my phone without creating an account?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, you can book entirely over WhatsApp without creating any account — just send your trip details and confirm the price with our team.',
        },
    },
    {
        slug: 'hyundai-motor',
        name: 'Hyundai Motor',
        sector: 'Automotive Distribution',
        heroBadge: 'Automotive Distribution Network',
        context: 'Hyundai Motor’s regional dealership and distribution operations extend across Saudi Arabia’s Eastern Province and the Gulf.',
        travelReason: 'Its area managers travel this corridor for dealer visits, regional coordination and business meetings in Bahrain.',
        uniqueFaq: {
            question: 'Do you offer a discount for regular, repeat bookings?',
            shortAnswer: 'Ask about corporate rates',
            detailedAnswer: 'Yes, regular travelers and companies making frequent trips can ask about our corporate account rates, which offer better pricing than one-off bookings.',
        },
    },

    // ---- Retail & Hospitality ----
    {
        slug: 'ikea',
        name: 'IKEA',
        sector: 'Retail & Hospitality',
        heroBadge: 'Retail & Hospitality Network',
        context: 'IKEA’s regional retail operations span Saudi Arabia’s Eastern Province and connect with the wider Gulf market.',
        travelReason: 'Store and regional operations managers travel between Dammam-area locations and Bahrain for business reviews and cross-market coordination.',
        uniqueFaq: {
            question: 'Can you accommodate a business trip with extra bags for samples or catalogs?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, our sedans and SUVs have space for a few extra bags of samples, catalogs or presentation materials in addition to your personal luggage.',
        },
    },
    {
        slug: 'carrefour',
        name: 'Carrefour',
        sector: 'Retail & Hospitality',
        heroBadge: 'Retail & Hospitality Network',
        context: 'Carrefour’s regional hypermarket operations span Saudi Arabia’s Eastern Province and the wider Gulf retail market.',
        travelReason: 'Regional and category managers travel between Dammam-area stores and Bahrain for business reviews and supplier meetings.',
        uniqueFaq: {
            question: 'Is the price different if I am traveling alone versus with colleagues?',
            shortAnswer: 'Price is per vehicle',
            detailedAnswer: 'Our pricing is per vehicle, not per passenger, so traveling with colleagues in the same car does not increase the cost as long as everyone fits in the chosen vehicle.',
        },
    },
    {
        slug: 'marriott',
        name: 'Marriott',
        sector: 'Retail & Hospitality',
        heroBadge: 'Retail & Hospitality Network',
        context: 'Marriott operates hotel properties across Saudi Arabia’s Eastern Province as part of its wider Gulf hospitality network.',
        travelReason: 'Regional hotel managers and corporate staff travel between Dammam-area properties and Bahrain for business reviews and brand meetings.',
        uniqueFaq: {
            question: 'Can you drop off directly at a hotel entrance rather than a public parking area?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, drop-off is at the hotel entrance or lobby, not a public parking area — just confirm the exact hotel name and we will handle the rest.',
        },
    },
    {
        slug: 'hilton',
        name: 'Hilton',
        sector: 'Retail & Hospitality',
        heroBadge: 'Retail & Hospitality Network',
        context: 'Hilton operates hotel properties across Saudi Arabia’s Eastern Province as part of its Gulf-wide hospitality portfolio.',
        travelReason: 'Regional management and corporate staff travel between Dammam-area properties and Bahrain for reviews, training and brand coordination meetings.',
        uniqueFaq: {
            question: 'Can you meet me at hotel checkout with luggage assistance?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, your driver will meet you at the hotel entrance at checkout and help load luggage into the vehicle before departure.',
        },
    },
    {
        slug: 'intercontinental',
        name: 'InterContinental',
        sector: 'Retail & Hospitality',
        heroBadge: 'Retail & Hospitality Network',
        context: 'InterContinental Hotels Group (IHG) operates properties across Saudi Arabia’s Eastern Province within its wider Gulf hospitality network.',
        travelReason: 'Regional management and corporate staff travel between Dammam-area properties and Bahrain for brand reviews and coordination meetings.',
        uniqueFaq: {
            question: 'Can this be booked as part of a longer multi-city itinerary?',
            shortAnswer: 'Yes',
            detailedAnswer: 'Yes, we can quote this leg as part of a longer itinerary — for example combined with a Riyadh or Jeddah transfer. Share your full schedule and we will put together a plan.',
        },
    },
];

export function getCorporateBahrainTransfer(slug: string): CorporateTransferCompany | undefined {
    return corporateBahrainTransfers.find((c) => c.slug === slug);
}

export function getSectorSiblings(slug: string, limit = 4): CorporateTransferCompany[] {
    const current = getCorporateBahrainTransfer(slug);
    if (!current) return [];
    const sameSector = corporateBahrainTransfers.filter((c) => c.sector === current.sector && c.slug !== slug);
    if (sameSector.length >= limit) return sameSector.slice(0, limit);
    const others = corporateBahrainTransfers.filter((c) => c.sector !== current.sector && c.slug !== slug);
    return [...sameSector, ...others].slice(0, limit);
}
