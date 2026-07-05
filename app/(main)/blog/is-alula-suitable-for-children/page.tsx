import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is AlUla Suitable for Children? Family Travel Guide 2026",
  description:
    "Is AlUla family-friendly and suitable for children? Discover the best activities for kids in AlUla, age recommendations, safety tips, and family-friendly hotels for a memorable 2026 trip.",
  keywords: [
    "AlUla suitable for children",
    "AlUla family travel",
    "AlUla with kids",
    "AlUla family friendly",
    "AlUla children activities",
    "AlUla kids guide",
    "family trip AlUla Saudi Arabia",
  ],
  openGraph: {
    title: "Is AlUla Suitable for Children? Family Travel Guide 2026",
    description:
      "Planning an AlUla family trip? Find out what activities kids will love, what to skip, and how to plan a successful family visit.",
    type: "article",
    url: "https://taxiserviceksa.com/blog/is-alula-suitable-for-children/",
  },
  alternates: {
    canonical:
      "https://taxiserviceksa.com/blog/is-alula-suitable-for-children/",
  },
};

const kidActivities = [
  {
    activity: "Elephant Rock (Jabal AlFil)",
    age: "All ages",
    desc: "The giant elephant-shaped rock needs no explanation — children are immediately captivated. Easy, flat walking with great photo opportunities.",
    rating: "⭐⭐⭐⭐⭐",
    icon: "🐘",
  },
  {
    activity: "Camel Riding",
    age: "3+ years",
    desc: "Traditional camel rides in the desert are magical for kids. Supervised, safe, and unforgettable. Available through most tour operators.",
    rating: "⭐⭐⭐⭐⭐",
    icon: "🐪",
  },
  {
    activity: "AlUla Oasis Farm Visit",
    age: "All ages",
    desc: "Walking through ancient date palm farms, picking dates, and seeing traditional irrigation — a wonderful educational and sensory experience.",
    rating: "⭐⭐⭐⭐",
    icon: "🌴",
  },
  {
    activity: "Old Town AlUla (Al-Deerah)",
    age: "4+ years",
    desc: "The atmospheric mud-brick ruins and evening light shows fascinate children. The AlUla Night Market nearby has food and entertainment for all ages.",
    rating: "⭐⭐⭐⭐",
    icon: "🏚️",
  },
  {
    activity: "Desert Jeep Safari",
    age: "5+ years",
    desc: "4WD adventures through sand dunes and rocky landscapes — children love the bumpy, exciting rides and the sense of adventure.",
    rating: "⭐⭐⭐⭐⭐",
    icon: "🚙",
  },
  {
    activity: "Stargazing in the Desert",
    age: "All ages",
    desc: "AlUla's zero light pollution makes for spectacular stargazing. Many resorts and tour operators offer dedicated stargazing experiences with telescopes.",
    rating: "⭐⭐⭐⭐⭐",
    icon: "🌟",
  },
  {
    activity: "Hegra UNESCO Site",
    age: "8+ years",
    desc: "Younger children may find the tour long and overwhelming. Older kids who enjoy history and ancient mysteries will be fascinated.",
    rating: "⭐⭐⭐",
    icon: "🏛️",
  },
  {
    activity: "Hot Air Balloon",
    age: "6+ years (varies by operator)",
    desc: "A magical experience, but check minimum age requirements with your specific operator. Early morning starts can be challenging for young children.",
    rating: "⭐⭐⭐⭐",
    icon: "🎈",
  },
];

export default function IsAlUlaSuitableForChildren() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#c8860a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Family Travel Guide · AlUla 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Is AlUla Suitable for Children?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Yes — with the right activities and planning, AlUla can be a
            magical, enriching family holiday that children will never forget.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Quick Answer */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            👨‍👩‍👧‍👦 Family-Friendly Verdict: Yes, with Planning
          </h2>
          <p className="text-green-700">
            AlUla is suitable for children, but it's not a theme park or a
            beach resort. The best family experiences center around nature,
            animals, and adventure — which children love. The key is choosing
            age-appropriate activities and visiting during cooler months
            (October–March).
          </p>
        </div>

        {/* Activities for Kids */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Best Activities for Children in AlUla
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {kidActivities.map((act, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{act.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {act.activity}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {act.age}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{act.desc}</p>
                <p className="text-xs text-gray-400 mt-2">{act.rating}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Age Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Expect by Age Group
          </h2>
          <div className="space-y-4">
            {[
              {
                age: "Toddlers (0–3 years)",
                color: "bg-pink-50 border-pink-200",
                badge: "bg-pink-500",
                suitable: ["Elephant Rock viewing", "Camel rides (with parent)", "Oasis walks", "AlUla Night Market"],
                avoid: ["Long heritage site tours", "Desert hikes", "Early morning balloon rides"],
              },
              {
                age: "Young Children (4–7 years)",
                color: "bg-blue-50 border-blue-200",
                badge: "bg-blue-500",
                suitable: ["Camel riding", "Desert jeep safari", "Old Town evening visit", "Stargazing", "Farm visits"],
                avoid: ["Hegra 4-hour tour", "Challenging hiking trails", "Very early mornings"],
              },
              {
                age: "Older Children (8–12 years)",
                color: "bg-green-50 border-green-200",
                badge: "bg-green-500",
                suitable: ["All of the above + Hegra", "Hiking trails (easy-moderate)", "Rock climbing (beginner)", "Hot air balloon"],
                avoid: ["Strenuous desert treks", "Extreme heat midday activities"],
              },
              {
                age: "Teenagers (13+)",
                color: "bg-purple-50 border-purple-200",
                badge: "bg-purple-500",
                suitable: ["Full AlUla experience", "Rock climbing", "Photography tours", "Hegra deep dives", "Desert camping"],
                avoid: [],
              },
            ].map((group, i) => (
              <div key={i} className={`border rounded-2xl p-5 ${group.color}`}>
                <span className={`${group.badge} text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3`}>
                  {group.age}
                </span>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-1">✅ GREAT CHOICES</p>
                    <ul className="text-sm text-gray-700 space-y-0.5">
                      {group.suitable.map((s, j) => <li key={j}>• {s}</li>)}
                    </ul>
                  </div>
                  {group.avoid.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-red-600 mb-1">⚠️ CONSIDER SKIPPING</p>
                      <ul className="text-sm text-gray-700 space-y-0.5">
                        {group.avoid.map((a, j) => <li key={j}>• {a}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family Hotels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Family-Friendly Accommodation in AlUla
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Shaden Resort",
                type: "Mid-Range Family",
                feature: "Family rooms, pool, central location",
                icon: "🏨",
              },
              {
                name: "Habitas AlUla",
                type: "Boutique Eco-Luxury",
                feature: "Outdoor activities, kids programs, stargazing",
                icon: "🌿",
              },
              {
                name: "Dar Tantora",
                type: "Heritage Boutique",
                feature: "Cultural experience, central Old Town access",
                icon: "🏚️",
              },
            ].map((hotel, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl mb-2">{hotel.icon}</div>
                <h3 className="font-bold text-gray-900">{hotel.name}</h3>
                <p className="text-xs text-amber-700 font-semibold mb-1">{hotel.type}</p>
                <p className="text-gray-600 text-sm">{hotel.feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Parent Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Essential Tips for Parents Visiting AlUla
          </h2>
          <ul className="space-y-3">
            {[
              "Visit October–March to avoid dangerous heat (40°C+ in summer) — non-negotiable for young children",
              "Carry extra water for children — dehydration happens quickly in the desert climate",
              "Book accommodation with a pool — essential for afternoon breaks during warmer months",
              "Private taxi is far superior to renting a car with young children (no car seat challenges, no driving stress)",
              "Pack sunscreen SPF 50+, hats, and light long-sleeve clothing even in winter",
              "AlUla has a general hospital for emergencies — bring your children's medical history and any medications",
              "Many tour operators offer family packages with shorter, adapted heritage tours",
              "The AlUla Night Market is perfect for evenings — food, entertainment, and ambient atmosphere",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-amber-500">🧡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#c8860a] to-[#e6a020] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Travel Comfortably with Your Family
          </h2>
          <p className="text-amber-100 mb-6">
            A private taxi is the smartest choice for families — car seats,
            flexible stops, and a driver who knows the best family-friendly
            spots in AlUla.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition"
            >
              Book Family Taxi
            </Link>
            <Link
              href="/routes/alula"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              View AlUla Routes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
