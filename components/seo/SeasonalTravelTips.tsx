import React from 'react';
import { Sun, CloudRain, Thermometer } from 'lucide-react';

export interface SeasonalTipsLabels {
    title: string;
    subtitle: string;
    summerTitle: string;
    summerText: string;
    summerTag: string;
    winterTitle: string;
    winterText: string;
    winterTag: string;
}

interface SeasonalTravelTipsProps {
    city: string;
    labels?: SeasonalTipsLabels;
    isRtl?: boolean;
}

export default function SeasonalTravelTips({ city, labels, isRtl = false }: SeasonalTravelTipsProps) {
    const defaultLabels: SeasonalTipsLabels = {
        title: `Traveling in ${city}: Seasonal Taxi Tips`,
        subtitle: "Understanding the local climate before you travel.",
        summerTitle: "Summer (June - August)",
        summerText: `Temperatures can exceed 40°C (104°F). It is worth booking an <strong>air-conditioned taxi</strong> in advance and minimizing time outdoors around midday. Our fleet is checked for reliable AC to keep you comfortable from pickup to drop-off.`,
        summerTag: "Book Ahead: AC Taxis",
        winterTitle: "Winter (December - February)",
        winterText: `Pleasant weather (18°C - 30°C / 64°F - 86°F) tends to bring more visitors and heavier traffic. <strong>Pre-booking</strong> helps you avoid waiting for a taxi during busier periods.`,
        winterTag: "Traffic Alert: Peak Season"
    };

    const t = { ...defaultLabels, ...labels };

    return (
        <div className={`bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 my-12 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                    <Sun className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.title}</h3>
                    <p className="text-gray-600 mt-1">
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <Thermometer className="w-5 h-5 text-red-500" />
                        <h4 className="font-bold text-gray-900">{t.summerTitle}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.summerText }} />
                    <div className="mt-3 text-xs bg-red-50 text-red-800 px-2 py-1 rounded inline-block">
                        {t.summerTag}
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <CloudRain className="w-5 h-5 text-blue-500" />
                        <h4 className="font-bold text-gray-900">{t.winterTitle}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.winterText }} />
                    <div className="mt-3 text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded inline-block">
                        {t.winterTag}
                    </div>
                </div>
            </div>
        </div>
    );
}
