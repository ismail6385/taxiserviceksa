import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdJobPosting from '@/components/seo/JsonLdJobPosting';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

export const metadata: Metadata = {
    title: 'Chauffeur Jobs in Jeddah - Premium Opportunities',
    description: 'Looking for chauffeur jobs in Jeddah? Join as a professional VIP driver. High income, own car (2020+), premium clients, and long trips.',
    keywords: ['chauffeur jobs Jeddah', 'chauffeur jobs in Jeddah', 'VIP drivers Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/chauffeur-jobs-jeddah',
    }
};

export default function ChauffeurJobsJeddahPage() {
    return (
        <main className="min-h-screen bg-white">
            <JsonLdBreadcrumb 
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Jeddah Jobs', item: '/chauffeur-jobs-jeddah' }
                ]}
            />
            <JsonLdJobPosting 
                title="VIP Chauffeur - Jeddah"
                description="Join our elite network of professional chauffeurs in Jeddah. We are looking for drivers with their own 2020+ model cars to serve VIP clients, corporate executives, and international travelers. High income potential with long-distance trips and flexible schedules."
                datePosted="2025-01-01"
                validThrough="2025-12-31"
                employmentType="FULL_TIME"
                hiringOrganization="Taxi Service KSA"
                jobLocation={{
                    addressLocality: "Jeddah",
                    addressRegion: "Makkah Province",
                    addressCountry: "SA"
                }}
                baseSalary={{
                    currency: "SAR",
                    value: 8500,
                    unitText: "MONTH"
                }}
            />
            <div className="bg-gray-950 text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Career Opportunity
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Chauffeur Jobs in Jeddah
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Are you looking for high-paying <strong>chauffeur jobs in Jeddah</strong>? Discover the premium opportunities available for professional drivers.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg prose-gray max-w-none mb-12">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                        The demand for professional transportation in Jeddah has never been higher. With the expansion of regional commerce, tourism, and daily business activities, the traditional ride-hailing market is overflowing. However, the most profitable sub-sector remains private VIP transport. For those seeking <strong>chauffeur jobs in Jeddah</strong>, transitioning to a specialized chauffeur network offers stability, safety, and vastly superior income potential.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Unmatched Income Potential</h2>
                    <p>
                        Unlike standing on a street corner or waiting endlessly for low-value app pings, providing luxury transportation directly scales with your dedication. Drivers who secure top-tier <strong>chauffeur jobs in Jeddah</strong> regularly capture significantly higher monthly revenues. These high incomes are driven by fixed-rate, high-value corporate accounts, lucrative long-distance transfers, and generous tips from highly satisfied premium clientele.
                    </p>
                    <p>
                        Your time is valuable. By focusing on scheduled VIP clients rather than random street flags, your profit per hour increases dramatically, allowing for a structured, successful financial future.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Requirements: Using Your Own Premium Car (2020+)</h2>
                    <p>
                        Excellence begins with the vehicle. The primary requirement for joining our elite network of chauffeurs is establishing comfort and safety. As such, drivers must operate their own personal vehicle, which must be model year 2020 or newer. Maintaining clean, pristine sedans or spacious SUVs tells your VIP clients that you take their comfort seriously.
                    </p>
                    <p>
                        This "own car (2020+)" standard strictly filters out the saturated, low-quality commercial markets, ensuring that our team maintains a sterling reputation across Jeddah. It places you immediately into the highest category of <strong>chauffeur jobs</strong> available.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Handling VIP Clients</h2>
                    <p>
                        Our client base focuses heavily on respect, discretion, and reliability. This means avoiding the stress of anonymous app passengers and instead dealing with pre-vetted corporate executives, international tourists, and high-net-worth families. Our focus ensures a professional working environment for our drivers every single day.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Benefit of Long Trips</h2>
                    <p>
                        Why grind through 20 stressful inner-city traffic jams when you can execute two seamless, high-paying intercity runs? Operating in Jeddah gives you extreme priority access to long-distance dispatch routes, airport transfers, and even border runs. These long trips are the absolute backbone of maximizing your monthly take-home income while preserving the condition of your vehicle.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
                        <p className="mb-6 text-gray-600">
                            Spaces are currently limited as we selectively build our premium fleet. If you have a professional attitude, excellent driving skills, and a qualifying vehicle, we invite you to take the next step.
                        </p>
                        <Link href="/join-as-driver/jeddah" className="inline-flex items-center justify-center bg-primary hover:bg-black text-white font-black py-4 px-8 rounded-xl transition-all">
                            Apply as a driver in Jeddah &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
