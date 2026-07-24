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
        setTemplates((data as EmailTemplate[]) || []);
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
