"use client";

import React, { useState } from 'react';
import { HelpCircle, Check, ChevronDown, ChevronUp, Shield, Users, User, Briefcase, Heart, Compass } from 'lucide-react';

export interface MicroPerspective {
    role: string;
    icon: string; // Changed from any (component) to string name
    insight: string;
}

export interface SemanticFAQItem {
    question: string;
    shortAnswer: string;
    detailedAnswer: string;
    perspectives: MicroPerspective[];
}

interface MicroSemanticFAQProps {
    faqs: SemanticFAQItem[];
    isRtl?: boolean;
    labels?: {
        title: string;
        subtitle: string;
        quickAnswer: string;
        perspectives: string;
        readMore: string;
        readLess: string;
    };
    theme?: 'light' | 'dark';
}

const iconMap: { [key: string]: any } = {
    Shield,
    Users,
    User,
    Briefcase,
    Heart,
    Compass,
    HelpCircle
};

const MicroSemanticFAQ: React.FC<MicroSemanticFAQProps> = ({
    faqs,
    isRtl = false,
    labels = {
        title: "Expert Answers",
        subtitle: "Direct facts followed by role-based insights",
        quickAnswer: "Quick Answer",
        perspectives: "Contextual Perspectives",
        readMore: "Read detailed breakdown",
        readLess: "Show less"
    },
    theme = 'light'
}) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const isDark = theme === 'dark';

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={`my-16 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="text-center mb-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    FAQs
                </span>
                <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{labels.title}</h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto`}>{labels.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className={`${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-100'} rounded-xl shadow-sm border overflow-hidden transition-all duration-300 hover:shadow-md`}>
                        {/* Header: Question & Micro-Answer */}
                        <div
                            className="p-6 cursor-pointer"
                            onClick={() => toggleExpand(index)}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <HelpCircle className="w-5 h-5 text-primary" />
                                        {faq.question}
                                    </h3>

                                    {/* The "Micro-Semantic" Answer Box */}
                                    <div className={`border rounded-lg p-3 inline-flex items-center gap-3 ${isDark ? 'bg-emerald-900/20 border-emerald-900/40' : 'bg-green-50 border-green-100'}`}>
                                        <span className={`text-xs font-bold uppercase tracking-wide ${isDark ? 'text-emerald-400' : 'text-green-700'}`}>
                                            {labels.quickAnswer}:
                                        </span>
                                        <span className={`font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                                            {faq.shortAnswer}
                                        </span>
                                        <Check className={`w-4 h-4 ${isDark ? 'text-emerald-500' : 'text-green-600'}`} />
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-primary transition-colors">
                                    {expandedIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>

                        {/* Expanded Content: Detail & Perspectives */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className={`px-6 pb-6 pt-0 border-t ${isDark ? 'border-gray-800 bg-gray-900/30' : 'border-gray-50 bg-gray-50/50'}`}>
                                <div className={`py-4 leading-relaxed text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {faq.detailedAnswer}
                                </div>

                                {faq.perspectives.length > 0 && (
                                    <div className="mt-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {faq.perspectives.map((persp, pIndex) => {
                                                const IconComponent = iconMap[persp.icon] || HelpCircle;
                                                return (
                                                    <div key={pIndex} className={`p-4 rounded-lg border shadow-sm flex gap-3 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
                                                        <div className="mt-1 flex-shrink-0">
                                                            <IconComponent className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <div>
                                                            <span className={`block text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{persp.role}</span>
                                                            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{persp.insight}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MicroSemanticFAQ;
