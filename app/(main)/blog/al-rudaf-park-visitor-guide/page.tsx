import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Al Rudaf Park Visitor Guide: Taif's Best Family Destination",
  description:
    "A complete guide to Al Rudaf Park in Taif. Find details on the dancing fountain, opening hours, tickets, family activities, and layout for your 2026 visit.",
  keywords: [
    "Al Rudaf Park Taif",
    "Rudaf Park dancing fountain",
    "parks in Taif",
    "Al Rudaf Park hours",
    "family attractions Taif",
    "Taif parks guide",
    "visiting Al Rudaf Park",
  ],
  openGraph: {
    title: "Al Rudaf Park Visitor Guide: Taif's Best Family Destination",
    description:
      "Explore Al Rudaf Park, featuring lush gardens, children's play areas, and the famous musical dancing fountain in Taif.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/al-rudaf-park-visitor-guide/",
  },
  alternates: {
    canonical: "https://taxiserviceksa.com/blog/al-rudaf-park-visitor-guide/",
  },
};

export default function AlRudafParkVisitorGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#52b788] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Park Guide · Family Spot · Taif 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Al Rudaf Park Visitor Guide
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover Taif's premier family park — a stunning green oasis featuring spectacular musical dancing fountains, lush lawns, and modern leisure facilities.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Entry Fee", value: "Free", icon: "🎫" },
            { label: "Opening Hours", value: "4:00 PM – 12:00 AM", icon: "⏱️" },
            { label: "Top Feature", value: "Musical Fountain", icon: "⛲" },
            { label: "Best For", value: "Families & Couples", icon: "👨‍👩‍👧‍👦" },
          ].map((info, i) => (
            <div key={i} className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{info.icon}</div>
              <p className="text-xs text-gray-500">{info.label}</p>
              <p className="font-bold text-green-800">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Al Rudaf Park?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Rudaf Park (sometimes spelled Ar Ruddaf Park) is arguably the most popular public park in Taif. Spanning over 565,000 square meters in the southern part of the city, this beautifully landscaped park is famous for its massive natural granite rock formations integrated into green lawns, walking paths, and colorful flower beds.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It represents the modern face of Taif's green initiatives, offering locals and international tourists a perfect evening escape to enjoy the city's legendary cool climate.
          </p>
        </section>

        {/* Top Highlights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Attractions in the Park</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "The Dancing Musical Fountain", desc: "The centerpiece of the park. A giant laser-light musical fountain show that dances to patriotic and classical Arabic music after sunset.", icon: "⛲" },
              { title: "Granite Rock Formations", desc: "Unique natural granite boulders are scattered throughout the park, offering scenic photo backdrops and a natural feel.", icon: "🪨" },
              { title: "Sports Fields & Jogging Track", desc: "Features a dedicated, cushioned rubber jogging track, football pitches, basketball courts, and outdoor gym equipment.", icon: "🏃" },
              { title: "Children's Playgrounds", desc: "Several designated play areas with slides, swings, and safe climbing frames spread across the lawns for kids.", icon: "🎠" },
              { title: "Lush Flower Gardens", desc: "Taif is the City of Roses, and Al Rudaf showcases beautifully manicured floral carpets and landscaped rose gardens.", icon: "🌹" },
              { title: "Cafés & Food Stalls", desc: "Numerous kiosks and cafés serve local tea (haleeb), Arabic coffee, cotton candy, popcorn, and traditional snacks.", icon: "☕" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fountain Show Schedule */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Musical Fountain Show Times</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
            <p className="text-blue-900 mb-4">
              The dancing fountain show is a massive crowd-pleaser and typically runs only in the evenings.
            </p>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• <strong>Show Frequency:</strong> Every 30 to 45 minutes after sunset.</li>
              <li>• <strong>First Show:</strong> Typically starts around 7:00 PM or 7:30 PM.</li>
              <li>• <strong>Last Show:</strong> Around 11:00 PM.</li>
              <li>• <strong>Admission:</strong> Entirely free to watch from the lakeside amphitheater.</li>
            </ul>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Tips for Visitors</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Go on weekdays if possible. Weekends (Thursday and Friday nights) get extremely crowded with local families.",
              "Bring a picnic mat if you plan to sit on the lawns, as benches fill up early.",
              "Taif evenings are cool, especially during autumn and winter. Bring a light sweater or jacket for children.",
              "The park is vast. Wear comfortable walking shoes.",
              "No pets are allowed inside the park boundaries.",
              "Photography is allowed, but respect the privacy of local families relaxing in the park.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Location & Access */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get to Al Rudaf Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Al Rudaf Park is located in the southern sector of Taif, about 10-15 minutes drive from the historical city center. Because of its popularity, parking spaces outside the gates can fill up rapidly on weekends.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Taking a pre-booked private taxi is highly recommended to avoid the parking hassle at the gates, letting you step straight out at the main entrance.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#2d6a4f] to-[#52b788] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Taxi to Al Rudaf Park</h2>
          <p className="text-green-100 mb-6">
            Travel in comfort and style. Skip the parking queues and let a professional driver take you directly to the park.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Book Taif Taxi
            </Link>
            <Link href="/routes/taif" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition">
              View Taif Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
