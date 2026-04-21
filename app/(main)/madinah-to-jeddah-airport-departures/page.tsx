import Link from 'next/link';

export const metadata = {
  title: 'Madinah to Jeddah Airport (JED) Departures Taxi | Taxi Service KSA',
  description: 'Book your departure transfer from Madinah to Jeddah Airport (JED). Reliable, on-time private taxis ensuring you never miss your flight.',
};

export default function MadinahToJeddahAirport() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Madinah to Jeddah Airport (JED)</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">Reliable departure transfers from Madinah directly to King Abdulaziz International Airport in Jeddah.</p>
          <Link href="/booking?from=Madinah&to=Jeddah+Airport" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Departure Transfer
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Punctual Departures to JED</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Ending your spiritual journey should be stress-free. Our departure transfer service guarantees on-time pickups from your hotel in Madinah, ensuring you reach Jeddah Airport with plenty of time for check-in and departure procedures.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Punctuality Guarantee</h3>
              <p className="text-slate-600">We understand the importance of flight timings. Our drivers always arrive early for peace of mind.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Comfortable End to Journey</h3>
              <p className="text-slate-600">Relax in our premium, air-conditioned vehicles during the 4+ hour drive from Madinah to Jeddah.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Luggage Assistance</h3>
              <p className="text-slate-600">Our drivers will assist with loading your luggage and Zamzam water securely into the vehicle.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Terminal Drop-off</h3>
              <p className="text-slate-600">We drop you off directly at your specific departure terminal (Hajj, North, South, or Terminal 1) at King Abdulaziz International Airport.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
