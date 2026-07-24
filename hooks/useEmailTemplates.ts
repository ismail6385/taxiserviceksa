'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface EmailTemplate {
    id: string;
    title: string;
    category: string;
    subject: string;
    body: string;
    created_at: string;
}

// Seeded the first time the table is empty, so the picker isn't a blank
// list — covers the common B2B outreach and client-communication cases.
// {{company}} is only replaced when sent from the B2B Leads composer.
const DEFAULT_TEMPLATES: Omit<EmailTemplate, 'id' | 'created_at'>[] = [
    {
        title: 'Partnership Introduction',
        category: 'B2B',
        subject: 'Partnership Opportunity — Reliable Ground Transport for Your Pilgrims in Saudi Arabia',
        body: `Dear {{company}} team,

We'd like to introduce Taxi Service KSA as a trusted ground transport partner for Umrah and Hajj groups arriving in Saudi Arabia.

We specialize in:
- Airport pickups (Jeddah, Madinah) with flight tracking
- Intercity transfers between Makkah, Madinah, and Jeddah
- Group transport in SUVs, vans, and buses for larger parties
- 24/7 availability with English and Arabic-speaking chauffeurs

We would welcome the opportunity to discuss group rates and a long-term partnership for your upcoming pilgrim groups.

Looking forward to hearing from you.`,
    },
    {
        title: 'Umrah Season Capacity & Rates',
        category: 'B2B',
        subject: 'Umrah Season — Fleet Availability & Group Rates for {{company}}',
        body: `Dear {{company}} team,

With the Umrah season approaching, we wanted to reach out regarding fleet availability for your upcoming groups.

We currently have capacity for:
- Airport-to-hotel transfers in Jeddah and Madinah
- Makkah-Madinah intercity transport
- Group vehicles ranging from sedans to full-size coaches

If you share your expected group sizes and travel dates, we can put together a rate proposal tailored to your needs.

We look forward to supporting your pilgrims this season.`,
    },
    {
        title: 'Follow-up — No Response',
        category: 'B2B',
        subject: 'Following Up — Partnership with Taxi Service KSA',
        body: `Dear {{company}} team,

I wanted to follow up on our previous message regarding a ground transport partnership for your pilgrim groups in Saudi Arabia.

We'd be happy to share our rates and availability whenever convenient for you — even a short call would help us understand how we can best support your operations.

Please let us know if you have any questions in the meantime.`,
    },
    {
        title: 'Booking Follow-up',
        category: 'Client',
        subject: 'Following Up on Your Recent Inquiry',
        body: `Thank you for reaching out to Taxi Service KSA.

I wanted to follow up and see if you had any questions about your upcoming trip, or if you'd like us to prepare a quote for your journey.

We're happy to help with airport transfers, intercity travel, or any other transport needs during your stay.

Please let us know how we can assist.`,
    },
    {
        title: 'Thank You After Trip',
        category: 'Client',
        subject: 'Thank You for Traveling with Taxi Service KSA',
        body: `Thank you for choosing Taxi Service KSA for your recent journey. We hope you had a comfortable and safe trip.

If you have a moment, we'd really appreciate a quick review of your experience — it helps us keep improving our service.

We look forward to serving you again on your next visit to Saudi Arabia.`,
    },
];

// Shared save/reuse library for the admin's Email Client and B2B Leads
// composers, so a good message doesn't have to be retyped every time.
export function useEmailTemplates() {
    const [templates, setTemplates] = useState<EmailTemplate[]>([]);
    const [dbReady, setDbReady] = useState(true);
    const [loading, setLoading] = useState(true);

    const fetchTemplates = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('email_templates')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            setDbReady(false);
            setLoading(false);
            return;
        }
        setDbReady(true);

        if (data.length === 0) {
            const { data: seeded } = await supabase
                .from('email_templates')
                .insert(DEFAULT_TEMPLATES)
                .select();
            setTemplates((seeded as EmailTemplate[]) || []);
        } else {
            setTemplates(data as EmailTemplate[]);
        }
        setLoading(false);
    };

    useEffect(() => { fetchTemplates(); }, []);

    const saveTemplate = async (title: string, category: string, subject: string, body: string) => {
        const { data, error } = await supabase
            .from('email_templates')
            .insert({ title, category: category || 'General', subject, body })
            .select()
            .single();
        if (!error && data) setTemplates(prev => [data as EmailTemplate, ...prev]);
        return { data, error };
    };

    const deleteTemplate = async (id: string) => {
        await supabase.from('email_templates').delete().eq('id', id);
        setTemplates(prev => prev.filter(t => t.id !== id));
    };

    return { templates, dbReady, loading, saveTemplate, deleteTemplate, refetch: fetchTemplates };
}
