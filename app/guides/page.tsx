import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Plane, Building2, Star, MessageCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Travel Guides | VIP Transfer KSA - Expert Insights for Saudi Arabia',
    description: 'Comprehensive travel guides for Jeddah Airport, Makkah Umrah, and Riyadh Business Travel. Expert insights from professional drivers with years of local experience.',
    keywords: ['Jeddah Airport Guide', 'Makkah Umrah Guide', 'Riyadh Business Guide', 'Saudi Arabia Travel', 'VIP Transfer KSA'],
    alternates: {
        canonical: 'https://transferksa.com/guides/',
    },
};

const guides = [
    {
        title: 'Jeddah Airport Complete Guide',
        slug: 'jeddah-airport-guide',
        description: 'Everything you need to know about King Abdulaziz International Airport - terminals, facilities, taxi services, and insider tips from experienced drivers.',
        icon: Plane,
        color: 'blue',
        stats: {
            queries: '50+ topics covered',
            tips: '12 Pro Tips',
            faqs: '8 FAQs answered'
        },
        highlights: [
            'Terminal navigation',
            'Taxi pickup points',
            'Prayer facilities',
            'Currency exchange',
            'Best routes to Makkah'
        ]
    },
    {
        title: 'Makkah Umrah Complete Guide',
        slug: 'makkah-umrah-guide',
        description: 'Comprehensive guide for Umrah pilgrims - Haram access, Tawaf strategy, Ziyarat sites, and practical tips from drivers who serve thousands of pilgrims.',
        icon: MapPin,
        color: 'green',
        stats: {
            queries: '60+ topics covered',
            tips: '10 Pro Tips',
            faqs: '10 FAQs answered'
        },
        highlights: [
            'Haram access points',
            'Tawaf timing strategy',
            'Ziyarat site visits',
            'Hotel zone navigation',
            'Zamzam water guide'
        ]
    },
    {
        title: 'Riyadh Business Travel Guide',
        slug: 'riyadh-business-guide',
        description: 'Essential guide for business travelers - KAFD access, business districts, local etiquette, and professional transport insights for corporate visitors.',
        icon: Building2,
        color: 'purple',
        stats: {
            queries: '50+ topics covered',
            tips: '8 Pro Tips',
            faqs: '8 FAQs answered'
        },
        highlights: [
            'KAFD access guide',
            'Business district navigation',
            'Local business etiquette',
            'Meeting venue transport',
            'Corporate monthly plans'
        ]
    }
];

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Expert Travel Guides for Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive guides written by professional drivers from <Link href="/locations/makkah/" className="text-primary font-bold hover:underline">Makkah</Link> and Madinah.
                        Get insider insights, practical tips, and answers to all your questions for a smooth journey.
                    </p>
                </div>

                {/* Guides Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {guides.map((guide) => {
                        const Icon = guide.icon;
                        const colorClasses = {
                            blue: 'bg-blue-50 border-blue-200 hover:border-blue-400',
                            green: 'bg-green-50 border-green-200 hover:border-green-400',
                            purple: 'bg-purple-50 border-purple-200 hover:border-purple-400',
                        };
                        const iconColors = {
                            blue: 'text-blue-600',
                            green: 'text-green-600',
                            purple: 'text-purple-600',
                        };

                        return (
                            <div
                                key={guide.slug}
                                className={`${colorClasses[guide.color as keyof typeof colorClasses]} rounded-2xl p-8 border-2 transition-all hover:shadow-lg`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 ${iconColors[guide.color as keyof typeof iconColors]} bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {guide.title}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {guide.description}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 mb-6">
                                    <div className="bg-white rounded-lg p-3 text-center">
                                        <div className="text-xs text-gray-600 mb-1">Topics</div>
                                        <div className="text-sm font-bold text-gray-900">{guide.stats.queries.split('+')[0]}+</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 text-center">
                                        <div className="text-xs text-gray-600 mb-1">Pro Tips</div>
                                        <div className="text-sm font-bold text-gray-900">{guide.stats.tips.split(' ')[0]}</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-3 text-center">
                                        <div className="text-xs text-gray-600 mb-1">FAQs</div>
                                        <div className="text-sm font-bold text-gray-900">{guide.stats.faqs.split(' ')[0]}</div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-900 mb-3">What's Inside:</div>
                                    <ul className="space-y-2">
                                        {guide.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <Link href={`/guides/${guide.slug}/`}>
                                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold">
                                        Read Complete Guide
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Guides Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Madinah Heritage & Ziyarat */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-emerald-600" /> Madinah Heritage & Ziyarat
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li><Link href="/guides/uhud-history/" className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all" /> Mount Uhud History</Link></li>
                            <li><Link href="/guides/seven-mosques/" className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all" /> The Seven Mosques</Link></li>
                            <li><Link href="/guides/quba-walking-path/" className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all" /> Quba Walking Path</Link></li>
                            <li><Link href="/guides/madinah-food/" className="text-gray-600 hover:text-emerald-600 flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all" /> Madinah Food Guide</Link></li>
                        </ul>
                    </div>

                    {/* Practical Pilgrim Guides */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Star className="w-6 h-6 text-primary" /> Practical Insights
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li><Link href="/guides/avoid-taxi-scams/" className="text-red-600 font-bold hover:text-red-700 flex items-center gap-2 group"><AlertTriangle className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-all" /> Avoid Taxi Scams (2025)</Link></li>
                            <li><Link href="/guides/haram-gates-access/" className="text-gray-600 hover:text-primary flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" /> Haram Gates Guide</Link></li>
                            <li><Link href="/guides/meeqat-locations/" className="text-gray-600 hover:text-primary flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" /> Meeqat Points</Link></li>
                            <li><Link href="/guides/currency/" className="text-gray-600 hover:text-primary flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" /> Currency & SAR Guide</Link></li>
                            <li><Link href="/guides/makkah-shopping/" className="text-gray-600 hover:text-primary flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" /> Makkah Shopping Guide</Link></li>
                            <li><Link href="/insights/pilgrimage-transport-report-2025/" className="text-emerald-600 font-bold hover:text-primary flex items-center gap-2 group"><ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" /> 2025 Transport Report</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white rounded-2xl p-12 border-2 border-gray-200 mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Why Our Guides Are Different
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Driver Expertise</h3>
                            <p className="text-gray-600">
                                Written by professional drivers with 5-10 years of local experience serving thousands of customers.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Real Insights</h3>
                            <p className="text-gray-600">
                                Practical tips and insider knowledge you won't find in generic travel guides or tourist websites.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Coverage</h3>
                            <p className="text-gray-600">
                                50-60 topics per guide covering everything from basic navigation to advanced local insights.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Have a Question?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Can't find what you're looking for? Ask our experienced drivers and get personalized answers within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold w-full sm:w-auto">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Book With Expert Driver
                            </Button>
                        </Link>
                        <Link href="/fleet/">
                            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-gray-100 font-bold w-full sm:w-auto">
                                <Star className="w-5 h-5 mr-2" />
                                Explore Our Fleet
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
