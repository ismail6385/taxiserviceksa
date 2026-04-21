import Link from 'next/link';

export const metadata = {
  title: 'Taxi from Jeddah Airport to Fairmont Makkah Clock Royal Tower | Taxi Service KSA',
  description: 'Book a premium private taxi from Jeddah Airport (JED) directly to Fairmont Makkah Clock Royal Tower. Fixed rates, VIP rides, and professional drivers.',
};

export default function JeddahToFairmontMakkah() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jeddah Airport to Fairmont Makkah</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">VIP private transfers from King Abdulaziz International Airport to Fairmont Makkah Clock Royal Tower.</p>
          <Link href="/booking?from=Jeddah+Airport&to=Fairmont+Makkah" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Your VIP Transfer
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Luxury Transfers to Fairmont Makkah</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Begin your spiritual journey with the highest level of comfort. Our luxury transfer service from Jeddah Airport to the iconic Fairmont Makkah Clock Royal Tower ensures you arrive relaxed and ready for your Umrah or Hajj.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">VIP Fleet Options</h3>
              <p className="text-slate-600">Travel in style in our premium vehicles, including GMC Yukon, Ford Expedition, and luxury sedans, perfect for families and VIPs.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Direct Hotel Access</h3>
              <p className="text-slate-600">Our drivers are experienced with Makkah's complex navigation and will drop you off exactly at the Fairmont entrance.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Flight Monitoring</h3>
              <p className="text-slate-600">We track your flight to JED in real-time, ensuring your driver is waiting for you even if your flight is delayed.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">24/7 Support</h3>
              <p className="text-slate-600">Our customer service team is available around the clock via WhatsApp to assist you with any changes or inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
