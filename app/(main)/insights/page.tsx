import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar, BarChart2, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
    title: 'Transport Insights & Data Reports | Taxi Service KSA',
    description: 'Deep dives, data reports, and specialized insights into Saudi Arabian transport and pilgrimage logistics. Strategic analysis for the modern traveler.',
    keywords: ['Saudi transport reports', 'pilgrimage data analysis', 'taxi vs train data', 'Saudi Arabia transport insights', 'Umrah logistics 2025'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/insights/',
    },
};

const INSIGHTS = [
    {
        title: 'The "Door-to-Door" Fallacy: Why Families Are Choosing Taxis Over High-Speed Rail',
        slug: 'pilgrimage-transport-report-2025',
        date: 'Dec 28, 2025',
        readTime: '8 min read',
        category: 'Data Report',
        excerpt: 'New 2025 data study reveals why 70% of Umrah families prefer private taxis over the high-speed train. Detailed analysis of cost, time, and luggage friction.',
        image: '/taxi-vs-train-2025.png'
    }
];

export default function InsightsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/5">
                        Deep Dives & Data
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Transport Insights <span className="text-primary">&</span> Intelligence
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Beyond the ride. We analyze travel patterns, cost efficiencies, and logistics to help you make informed decisions for your Saudi Arabian journey.
                    </p>
                </div>

                {/* Main Feature */}
                {INSIGHTS.map((report, index) => (
                    <Link key={index} href={`/insights/${report.slug}/`} className="group">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 mb-16 flex flex-col lg:flex-row items-stretch">
                            <div className="lg:w-1/2 relative min-h-[300px] overflow-hidden">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1 font-bold text-[10px] uppercase tracking-widest">
                                        {report.category}
                                    </Badge>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Calendar className="w-3 h-3" /> {report.date}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight group-hover:text-primary transition-colors">
                                    {report.title}
                                </h2>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                    {report.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Clock className="w-3 h-3" /> {report.readTime}
                                    </span>
                                    <Button variant="ghost" className="text-primary font-black uppercase tracking-widest hover:bg-transparent group-hover:translate-x-2 transition-transform">
                                        Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Additional Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                            <BarChart2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Market Trends</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Analyzing seasonal price fluctuations and demand spikes during Hajj and Ramadan to provide the best value for our clients.
                        </p>
                        <Link href="/blog/" className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline">Explore Trends →</Link>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                            <Lightbulb className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Guides</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Deep-dive manuals on navigating Saudi Arabian infrastructure, from airport terminal transfers to intercity rail integration.
                        </p>
                        <Link href="/guides/" className="text-amber-600 font-bold text-xs uppercase tracking-widest hover:underline">View Guides →</Link>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Data</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Internal performance metrics and service quality reports ensuring transparency in our VIP transfer operations.
                        </p>
                        <Link href="/about/" className="text-emerald-600 font-bold text-xs uppercase tracking-widest hover:underline">Learn More →</Link>
                    </div>
                </div>

                {/* Newsletter/Contact CTA */}
                <div className="mt-24 bg-black rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                         {/* Subtle grid pattern or similar could be added here */}
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8">
                            Empowering Your Journey with Expertise
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Looking for custom logistics analysis or corporate travel partnership? Our data team is ready to assist.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact/">
                                <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-black uppercase tracking-widest px-10 py-6 h-auto text-lg rounded-xl">
                                    Contact Data Team
                                </Button>
                            </Link>
                            <Link href="/blog/">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest px-10 py-6 h-auto text-lg rounded-xl">
                                    Browse All Articles
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
