import Link from 'next/link';

export const metadata = {
  title: 'Makkah to Madinah 7-Seater Hyundai Staria Taxi | Taxi Service KSA',
  description: 'Book a spacious 7-seater Hyundai Staria for your journey from Makkah to Madinah. Ideal for families and groups performing Umrah. Fixed rates.',
};

export default function MakkahToMadinahStaria() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Makkah to Madinah: 7-Seater Staria</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">Spacious, comfortable, and reliable Hyundai Staria transfers for groups and families traveling between the Holy Cities.</p>
          <Link href="/booking?from=Makkah&to=Madinah" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book Your Family Taxi
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Perfect Vehicle for Your Family's Journey</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            The journey between Makkah and Madinah is a significant part of your spiritual trip. The Hyundai Staria 7-Seater offers the perfect blend of space, comfort, and safety for your family's intercity travel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Spacious Interior</h3>
              <p className="text-slate-600">Comfortably seats up to 7 passengers with ample legroom and generous space for luggage and Zamzam water.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Modern Comfort</h3>
              <p className="text-slate-600">Equipped with powerful multi-zone air conditioning to ensure a pleasant ride across the Saudi desert highways.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Safe Intercity Travel</h3>
              <p className="text-slate-600">Driven by experienced chauffeurs who are familiar with the Haramain Expressway connecting Makkah and Madinah.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Door-to-Door Service</h3>
              <p className="text-slate-600">We pick you up from your hotel in Makkah and drop you off directly at your accommodation in Madinah.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
