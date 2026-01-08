
import { Metadata } from 'next';
import Link from 'next/link';
import { internationalGuides } from '@/data/international_guides';
import { ArrowRight, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'International Pilgrim Guides | VIP Transfer KSA',
    description: 'Find dedicated Umrah taxi and transport guides for your country. Comprehensive travel information for pilgrims from over 80 nations visiting Saudi Arabia.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/international/',
    },
    openGraph: {
        title: 'International Pilgrim Guides | VIP Transfer KSA',
        description: 'Find dedicated Umrah taxi and transport guides for your country. Comprehensive travel information for pilgrims from over 80 nations visiting Saudi Arabia.',
        url: 'https://taxiserviceksa.com/guides/international/',
        siteName: 'VIP Transfer KSA',
        type: 'website',
    }
};

export default function InternationalGuidesIndex() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-white text-indigo-600 font-bold px-4 py-2 rounded-full shadow-sm text-sm mb-6 inline-flex items-center gap-2 border border-indigo-100">
                        <Globe className="w-4 h-4" />
                        Global Coverage
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        International Pilgrim Guides
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We welcome pilgrims from every corner of the globe. Select your country below to find tailored advice on visas, flights, and VIP transport from Jeddah Airport to Makkah & Madinah.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {internationalGuides.map((guide) => (
                        <Link
                            key={guide.slug}
                            href={`/guides/international/${guide.slug}/`}
                            className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-10 opacity-0 transition-opacity">
                                <Globe className="w-24 h-24 text-indigo-50 transform translate-x-8 -translate-y-8" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-4xl shadow-sm rounded-lg p-1 bg-gray-50/50">{guide.flagEmoji}</span>
                                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                                    {guide.countryName}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                                    {guide.title}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-indigo-600 transition-colors uppercase tracking-wider">
                                    Read Guide
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
