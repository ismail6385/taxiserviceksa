import Link from 'next/link';

export const metadata = {
  title: 'Taxi from Jeddah Airport to Pullman ZamZam Makkah | Taxi Service KSA',
  description: 'Book a premium private taxi from Jeddah Airport (JED) directly to Pullman ZamZam Hotel in Makkah. Fixed rates, comfortable rides, and professional drivers.',
};

export default function JeddahToPullmanMakkah() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jeddah Airport to Pullman Makkah</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">Premium private transfers from King Abdulaziz International Airport directly to Pullman ZamZam Hotel in Abraj Al Bait.</p>
          <Link href="/booking?from=Jeddah+Airport&to=Pullman+ZamZam+Makkah" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Your Transfer Now
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Seamless Travel to Pullman ZamZam Makkah</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Located in the prestigious Abraj Al Bait complex, Pullman ZamZam Makkah is a premier destination for pilgrims. Our dedicated transfer service ensures that your journey from Jeddah Airport to the hotel is as smooth and peaceful as possible.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Direct Hotel Drop-off</h3>
              <p className="text-slate-600">We drop you off right at the entrance of the Pullman ZamZam, assisting with your luggage so you can check in effortlessly.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Meet & Greet at JED</h3>
              <p className="text-slate-600">Our driver will be waiting for you at the arrivals hall with a name sign, ready to escort you to your comfortable vehicle.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Spacious Vehicles</h3>
              <p className="text-slate-600">Whether you need a sedan for a small family or a GMC Yukon for a larger group with luggage, we have the perfect vehicle.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Fixed Transparent Pricing</h3>
              <p className="text-slate-600">No hidden fees. The price you book is the final price you pay for your VIP transfer to Makkah.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
