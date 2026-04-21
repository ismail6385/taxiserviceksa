import Link from 'next/link';

export const metadata = {
  title: 'Taxi from Jeddah Airport to Swissotel Makkah | Taxi Service KSA',
  description: 'Book a premium private taxi from Jeddah Airport (JED) directly to Swissotel Makkah. Fixed rates, comfortable rides, and professional drivers.',
};

export default function JeddahToSwissotelMakkah() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jeddah Airport to Swissotel Makkah</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">Premium private transfers from King Abdulaziz International Airport to Swissotel Makkah.</p>
          <Link href="/booking?from=Jeddah+Airport&to=Swissotel+Makkah" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Your Transfer Now
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Comfortable Transfers to Swissotel</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Swissotel Makkah offers direct access to the Holy Mosque. Our transfer service ensures that your journey from Jeddah Airport is as convenient and comfortable as your stay at the hotel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Reliable Service</h3>
              <p className="text-slate-600">Punctuality is our priority. We guarantee on-time pickups from the airport to get you to Swissotel without any delay.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Family Friendly</h3>
              <p className="text-slate-600">Traveling with family? We provide spacious SUVs and vans that comfortably accommodate your entire group and luggage.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">English-Speaking Drivers</h3>
              <p className="text-slate-600">Communicate easily with our professional drivers who speak English and understand the needs of international pilgrims.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">All-Inclusive Rates</h3>
              <p className="text-slate-600">The rate you see is final. It covers fuel, tolls, parking, and all taxes, ensuring a stress-free experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
