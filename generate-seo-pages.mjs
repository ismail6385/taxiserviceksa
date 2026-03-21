import fs from 'fs';
import path from 'path';

const cities = [
    { id: 'riyadh', name: 'Riyadh' },
    { id: 'jeddah', name: 'Jeddah' },
    { id: 'makkah', name: 'Makkah' },
    { id: 'madinah', name: 'Madinah' },
    { id: 'dammam', name: 'Dammam' },
    { id: 'khobar', name: 'Khobar' },
    { id: 'dhahran', name: 'Dhahran' },
    { id: 'taif', name: 'Taif' },
    { id: 'tabuk', name: 'Tabuk' },
    { id: 'abha', name: 'Abha' },
    { id: 'khamis-mushait', name: 'Khamis Mushait' },
    { id: 'hail', name: 'Hail' },
    { id: 'buraidah', name: 'Buraidah' },
    { id: 'najran', name: 'Najran' },
    { id: 'jubail', name: 'Jubail' },
    { id: 'yanbu', name: 'Yanbu' },
    { id: 'al-qassim', name: 'Al Qassim' },
    { id: 'al-ahsa', name: 'Al Ahsa' }
];

const patterns = [
    { prefix: 'driver-jobs', title: 'Driver Jobs in', keyword: 'driver jobs' },
    { prefix: 'taxi-driver-jobs', title: 'Taxi Driver Jobs in', keyword: 'taxi driver jobs' },
    { prefix: 'chauffeur-jobs', title: 'Chauffeur Jobs in', keyword: 'chauffeur jobs' }
];

const baseDir = path.join(process.cwd(), 'app', '(main)');

for (const city of cities) {
    for (const pattern of patterns) {
        const folderName = `${pattern.prefix}-${city.id}`;
        const folderPath = path.join(baseDir, folderName);
        
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const componentName = `${pattern.prefix.replace(/-/g, '')}${city.id.replace(/-/g, '')}Page`;

        const code = `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '${pattern.title} ${city.name} - Premium Opportunities',
    description: 'Looking for ${pattern.keyword} in ${city.name}? Join as a professional VIP driver. High income, own car (2020+), premium clients, and long trips.',
    keywords: ['${pattern.keyword} ${city.name}', '${pattern.keyword} in ${city.name}', 'VIP drivers ${city.name}'],
    alternates: {
        canonical: '/${folderName}',
    }
};

export default function ${componentName}() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-gray-950 text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Career Opportunity
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        ${pattern.title} ${city.name}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Are you looking for high-paying <strong>${pattern.keyword} in ${city.name}</strong>? Discover the premium opportunities available for professional drivers.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg prose-gray max-w-none mb-12">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                        The demand for professional transportation in ${city.name} has never been higher. With the expansion of regional commerce, tourism, and daily business activities, the traditional ride-hailing market is overflowing. However, the most profitable sub-sector remains private VIP transport. For those seeking <strong>${pattern.keyword} in ${city.name}</strong>, transitioning to a specialized chauffeur network offers stability, safety, and vastly superior income potential.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Unmatched Income Potential</h2>
                    <p>
                        Unlike standing on a street corner or waiting endlessly for low-value app pings, providing luxury transportation directly scales with your dedication. Drivers who secure top-tier <strong>${pattern.keyword} in ${city.name}</strong> regularly capture significantly higher monthly revenues. These high incomes are driven by fixed-rate, high-value corporate accounts, lucrative long-distance transfers, and generous tips from highly satisfied premium clientele.
                    </p>
                    <p>
                        Your time is valuable. By focusing on scheduled VIP clients rather than random street flags, your profit per hour increases dramatically, allowing for a structured, successful financial future.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Requirements: Using Your Own Premium Car (2020+)</h2>
                    <p>
                        Excellence begins with the vehicle. The primary requirement for joining our elite network of chauffeurs is establishing comfort and safety. As such, drivers must operate their own personal vehicle, which must be model year 2020 or newer. Maintaining clean, pristine sedans or spacious SUVs tells your VIP clients that you take their comfort seriously.
                    </p>
                    <p>
                        This "own car (2020+)" standard strictly filters out the saturated, low-quality commercial markets, ensuring that our team maintains a sterling reputation across ${city.name}. It places you immediately into the highest category of <strong>${pattern.keyword}</strong> available.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Handling VIP Clients</h2>
                    <p>
                        Our client base focuses heavily on respect, discretion, and reliability. This means avoiding the stress of anonymous app passengers and instead dealing with pre-vetted corporate executives, international tourists, and high-net-worth families. Our focus ensures a professional working environment for our drivers every single day.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Benefit of Long Trips</h2>
                    <p>
                        Why grind through 20 stressful inner-city traffic jams when you can execute two seamless, high-paying intercity runs? Operating in ${city.name} gives you extreme priority access to long-distance dispatch routes, airport transfers, and even border runs. These long trips are the absolute backbone of maximizing your monthly take-home income while preserving the condition of your vehicle.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
                        <p className="mb-6 text-gray-600">
                            Spaces are currently limited as we selectively build our premium fleet. If you have a professional attitude, excellent driving skills, and a qualifying vehicle, we invite you to take the next step.
                        </p>
                        <Link href="/join-as-driver/${city.id}" className="inline-flex items-center justify-center bg-primary hover:bg-black text-white font-black py-4 px-8 rounded-xl transition-all">
                            Apply as a driver in ${city.name} &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
`;
        fs.writeFileSync(path.join(folderPath, 'page.tsx'), code);
    }
}

console.log('Successfully generated 54 SEO pages across all cities!');
