import Link from 'next/link';

export const metadata = {
  title: 'Top Places to Visit in Saudi Arabia | Taxi Service KSA',
  description: 'Explore the best tourist destinations in Saudi Arabia, from the historical ruins of AlUla to the modern skyline of Riyadh and the beautiful Red Sea coast.',
};

export default function PlacesToVisitSaudiArabia() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Places to Visit in Saudi Arabia</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">A comprehensive guide to the Kingdom's most breathtaking historical, natural, and modern destinations.</p>
          <Link href="/booking" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Intercity Transport
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Discover the Wonders of the Kingdom</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Saudi Arabia is rapidly opening up to the world, revealing a diverse landscape that ranges from ancient Nabataean ruins to futuristic mega-cities. Here are some of the top destinations you must explore.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">AlUla & Hegra</h3>
              <p className="text-slate-600">Saudi Arabia's first UNESCO World Heritage site. Explore the monumental rock-cut tombs of Hegra and the breathtaking Elephant Rock in this ancient oasis.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Jeddah's Al-Balad</h3>
              <p className="text-slate-600">The historical gateway to Makkah. Wander through the narrow alleys of Al-Balad to see the traditional coral-stone houses and vibrant souqs.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Edge of the World</h3>
              <p className="text-slate-600">Just outside Riyadh, this dramatic geological wonder offers stunning panoramic views of the valley below from atop a massive 300-meter cliff.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">The Red Sea Coast</h3>
              <p className="text-slate-600">From pristine beaches to world-class scuba diving among untouched coral reefs, the Red Sea coast offers an unmatched coastal getaway.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
