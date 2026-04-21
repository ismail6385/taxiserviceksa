import Link from 'next/link';

export const metadata = {
  title: 'Al Rajhi Grand Mosque: Riyadh\'s Prayer Space | Taxi Service KSA',
  description: 'Learn about Al Rajhi Grand Mosque, the largest mosque in Riyadh, offering massive prayer spaces and architectural beauty.',
};

export default function AlRajhiGrandMosque() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Al Rajhi Grand Mosque</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">Discover Riyadh's largest and most prominent architectural marvel and spiritual center.</p>
          <Link href="/booking" className="inline-block bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-lg">
            Book a Taxi in Riyadh
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">A Masterpiece of Islamic Architecture</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            The Al Rajhi Grand Mosque is not just the largest mosque in Riyadh, but also a major Islamic institution. Funded by the Al Rajhi family, it stands as a testament to modern Islamic architecture combined with immense capacity and community utility.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Massive Capacity</h3>
              <p className="text-slate-600">The mosque can accommodate over 18,000 worshippers in the men's section and 2,500 in the women's section, making it pivotal during Friday prayers and Eid.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Community Hub</h3>
              <p className="text-slate-600">Beyond prayers, it features extensive libraries, educational halls for Islamic studies, and facilities for washing and preparing the deceased.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Stunning Architecture</h3>
              <p className="text-slate-600">The interior is adorned with beautiful calligraphy, massive chandeliers, and a design that beautifully captures natural light.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Translation Services</h3>
              <p className="text-slate-600">Friday sermons are translated live into multiple languages, including English and Urdu, for expatriates and visitors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
