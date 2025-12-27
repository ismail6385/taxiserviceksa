
'use client';

import { useState } from 'react';
import { blogService } from '@/lib/blogService';
import { Button } from '@/components/ui/button';
import { Check, Loader2, FileText } from 'lucide-react';

const BLOG_TEMPLATES = [
    {
        title: "Complete Guide to Meeqat Locations for Umrah (Map & Rules)",
        slug: "meeqat-locations-umrah-map-rules",
        category: "Umrah Guide",
        excerpt: "Detailed guide to the 5 Meeqat points: Dhul Hulaifah, Al-Juhfah, Qarn al-Manazil, Yalamlam, and Dhat Irq. Know where to enter Ihram to avoid penalties.",
        seo_title: "Meeqat Locations for Umrah: 5 Stations Map & Rules (2025)",
        seo_description: "Where is the Meeqat for Umrah? Complete guide to Dhul Hulaifah, Yalamlam, Qarn al-Manazil, and penalties for bypassing them.",
        seo_keywords: ["Meeqat locations", "Dhul Hulaifah", "Abyar Ali", "Yalamlam", "Umrah rules", "Jeddah Meeqat"],
        content: `
**The Meeqat (Site of Intention)** is the geographic boundary that a pilgrim intending to perform Hajj or Umrah **must not cross** without assuming **Ihram** (state of ritual purity).

There are **5 specific Meeqat locations** established by Prophet Muhammad (PBUH). Bypassing these boundaries without Ihram requires a **Damm (sacrifice of a sheep)** as expiation.

### Table: The 5 Meeqat Locations

| Meeqat Name | Distance from Makkah | For Pilgrims Coming From |
| :--- | :--- | :--- |
| **Dhul Hulaifah (Abyar Ali)** | 450 km (North) | Madinah |
| **Al-Juhfah (Rabigh)** | 183 km (North-West) | Egypt, Syria, North Africa, Europe |
| **Qarn al-Manazil (As-Sayl Al-Kabir)** | 75 km (East) | Riyadh, Taif, UAE, Pakistan, India |
| **Yalamlam (Sa'adiyah)** | 92 km (South) | Yemen, South Africa, Nigeria |
| **Dhat Irq** | 94 km (North-East) | Iraq, Iran, Eastern Saudi Arabia |

## 1. Dhul Hulaifah (Abyar Ali) – The Furthest Meeqat
Located **450 kilometers north of Makkah**, this is the Meeqat for pilgrims traveling from **Madinah**. It is often called **Abyar Ali** today.
*   **Significance:** It is where the Prophet (PBUH) entered Ihram for his pilgrimage.
*   **Facilities:** Includes a large mosque (Masjid Al-Shajarah) with extensive bathing and changing facilities.

## 2. Al-Juhfah (Rabigh)
Historically a village, now located near **Rabigh** (approx. 183km from Makkah).
*   **For:** Pilgrims from Egypt, Levant, and North America/Europe traveling via the coastal route.

## 3. Qarn al-Manazil (As-Sayl Al-Kabir)
Located **75km east of Makkah**, near Taif.
*   **For:** Visitors from Riyadh, Dammam, Dubai, Pakistan, and India.
*   **Note:** There is a second location called *Wadi Mahram* for those descending from Taif via the mountain road.

## 4. Yalamlam (Sa'adiyah)
Located **92km south of Makkah**.
*   **For:** Pilgrims from Yemen and those crossing the Red Sea by ship from the south.

## 5. Dhat Irq
Located **94km north-east**.
*   **For:** Pilgrims from Iraq and Iran.
*   **Status:** It is less accessible by modern highways compared to others.

### Frequently Asked Questions

### What if I am flying to Jeddah?
**Jeddah is NOT a Meeqat.** It is inside the boundary. If you fly to Jeddah for Umrah:
1.  **Wear Ihram on the plane** before crossing the Meeqat zone (usually 20-30 mins before landing).
2.  Or, travel to a Meeqat (like Dhul Hulaifah if going to Madinah first) by taxi.

### Can I wear Ihram at my hotel in Makkah?
**No**, unless you are already a resident of Makkah (Hil). For Umrah, you must go out to the nearest boundary (like Masjid Aisha/Taneem) if you are already in the city.

### Pros and Cons of Taxi to Meeqat
**Pros:**
*   Comfortable changing stops.
*   Direct travel to Makkah Haram.
*   No luggage hassle.

**Cons:**
*   More expensive than bus.
`
    }
];

export default function BlogGeneratorPage() {
    const [generating, setGenerating] = useState<string | null>(null);
    const [generated, setGenerated] = useState<string[]>([]);
    const [status, setStatus] = useState<string>('');

    const generateBlog = async (template: typeof BLOG_TEMPLATES[0]) => {
        try {
            setGenerating(template.slug);
            setStatus(`Generating ${template.title}...`);

            // Check if exists
            const existing = await blogService.getBlogBySlug(template.slug).catch(() => null);
            if (existing) {
                setStatus('Blog already exists! Skipping.');
                setGenerating(null);
                return;
            }

            await blogService.createBlog({
                title: template.title,
                slug: template.slug,
                excerpt: template.excerpt,
                content: template.content,
                category: template.category,
                tags: template.seo_keywords,
                status: 'draft',
                author: 'Muhammad Ismail',
                seo_title: template.seo_title,
                seo_description: template.seo_description,
                seo_keywords: template.seo_keywords,
                featured_image: '' // Left empty for user to fill
            });

            setGenerated(prev => [...prev, template.slug]);
            setStatus(`Successfully created draft: ${template.title}`);
        } catch (error) {
            console.error(error);
            setStatus(`Error creating ${template.title}`);
        } finally {
            setGenerating(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Blog Generator</h1>

                {status && (
                    <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
                        {status}
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-700">Available Templates</h2>
                        <span className="text-sm text-gray-500">{BLOG_TEMPLATES.length} templates ready</span>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {BLOG_TEMPLATES.map((template) => (
                            <div key={template.slug} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{template.title}</h3>
                                    <p className="text-sm text-gray-500">{template.excerpt}</p>
                                    <span className="inline-block mt-2 text-xs font-semibold bg-primary/10 text-primary-dark px-2 py-0.5 rounded">
                                        {template.category}
                                    </span>
                                </div>

                                <Button
                                    onClick={() => generateBlog(template)}
                                    disabled={generating !== null || generated.includes(template.slug)}
                                    className={`min-w-[140px] ${generated.includes(template.slug) ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                >
                                    {generated.includes(template.slug) ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" /> Created
                                        </>
                                    ) : generating === template.slug ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Writing...
                                        </>
                                    ) : (
                                        <>
                                            <FileText className="w-4 h-4 mr-2" /> Generate Draft
                                        </>
                                    )}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
