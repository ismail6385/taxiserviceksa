/**
 * fix-gsc-seo-meta-db2.mjs
 * Round 2: DB slugs verified from actual Supabase query.
 * Updates correct slugs that were missing in round 1.
 *
 * Run: node scripts/fix-gsc-seo-meta-db2.mjs
 */

const SUPABASE_URL = "https://fdojxnluwuzsqeejslzo.supabase.co";
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb2p4bmx1d3V6c3FlZWpzbHpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTg4NDMyOCwiZXhwIjoyMDgxNDYwMzI4fQ.FoMKTuznOjWu2MdD-32RrNXK8Birul1GY28dDXnVHlo";

const SEO_UPDATES = [
  // Correct slug from DB listing (was "madinah-airport-taxi-transfer-guide" before)
  {
    slug: "madinah-airport-to-hotel-transport",
    seo_title: "Madinah Airport to Hotel Transfer 2026 | MED Airport Taxi Guide | Taxi Service KSA",
    seo_description:
      "Complete guide to getting from Prince Mohammed Bin Abdulaziz Airport (MED) to your hotel in Madinah. Compare private taxi, shared shuttle & Haramain Train. Pre-book for Umrah season to skip queues.",
    seo_keywords: [
      "madinah airport taxi",
      "madinah airport to hotel",
      "madinah airport transfer",
      "taxi from madinah airport",
      "med airport taxi",
      "madinah airport to masjid nabawi taxi",
      "umrah airport taxi madinah",
      "abha airport transportation",
    ],
  },

  // From DB: jeddah airport terminals (GSC: "jeddah airport north terminal" - 1 impression)
  {
    slug: "jeddah-airport-terminals-guide-north-vs-one",
    seo_title: "Jeddah Airport Terminals Guide 2026: North Terminal vs Terminal 1 | Taxi Service KSA",
    seo_description:
      "Confused between Jeddah Airport North Terminal and Terminal 1? This guide explains which terminal you fly from, how to get between them, and how to arrange a taxi pickup at KAIA Jeddah in 2026.",
    seo_keywords: [
      "jeddah airport north terminal",
      "jeddah airport terminal 1",
      "jeddah airport terminals guide",
      "kaia jeddah terminal",
      "jeddah airport which terminal",
      "north terminal jeddah taxi",
      "jeddah airport pickup",
    ],
  },

  // From DB: jeddah to makkah transport (slug confirmed from earlier output)
  {
    slug: "jeddah-airport-to-makkah-transport-guide",
    seo_title: "Jeddah to Makkah Transport Guide 2026: Taxi, Train & Bus Options | Taxi Service KSA",
    seo_description:
      "How to get from Jeddah Airport (or city) to Makkah in 2026. Compare private taxi, Haramain Train, SAPTCO bus & shared van options. See fares, travel times & Umrah-season tips.",
    seo_keywords: [
      "jeddah to makkah taxi service",
      "jeddah to mecca taxi",
      "jeddah to makkah transport",
      "jeddah airport to makkah",
      "makkah taxi service",
      "how to get from jeddah to makkah",
      "jeddah makkah private car",
    ],
  },

  // From DB: saptco vip bus (covers "jeddah to madina taxi" query)
  {
    slug: "saptco-vip-bus-jeddah-madinah-review",
    seo_title: "Jeddah to Madinah by Bus or Taxi 2026: SAPTCO VIP, Train & Private Car | Taxi Service KSA",
    seo_description:
      "Planning the Jeddah to Madinah journey? Compare SAPTCO VIP bus, Haramain Train and private taxi costs for 2026. Ideal for Umrah pilgrims. Book a direct private car for door-to-door comfort.",
    seo_keywords: [
      "jeddah to madina taxi",
      "jeddah to madinah transport",
      "jeddah to madinah private car",
      "saptco vip bus jeddah madinah",
      "jeddah madinah taxi fare",
      "haramain train jeddah madinah",
      "jeddah to medina taxi service",
    ],
  },

  // From DB: haramain train booking (intercity travel)
  {
    slug: "haramain-train-booking-guide",
    seo_title: "Haramain Train Booking Guide 2026: Jeddah, Makkah, Madinah Tickets | Taxi Service KSA",
    seo_description:
      "How to book Haramain High-Speed Train tickets online in 2026. Step-by-step guide for Jeddah to Makkah, Jeddah to Madinah and Makkah to Madinah routes. Compare with private taxi for Umrah.",
    seo_keywords: [
      "haramain train booking",
      "haramain train tickets",
      "jeddah to makkah train",
      "jeddah to madinah train",
      "haramain express booking guide",
      "saudi train umrah",
      "hhr train ticket 2026",
    ],
  },
];

async function fetchBlogIdBySlug(slug) {
  const url = `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&select=id,slug,seo_title`;
  const res = await fetch(url, {
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed for "${slug}": ${res.status}`);
  const rows = await res.json();
  return rows.length > 0 ? rows[0] : null;
}

async function patchBlogSeo(id, slug, patch) {
  const url = `${SUPABASE_URL}/rest/v1/blogs?id=eq.${id}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      seo_title: patch.seo_title,
      seo_description: patch.seo_description,
      seo_keywords: patch.seo_keywords,
      updated_at: new Date().toISOString(),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PATCH failed for "${slug}": ${res.status} — ${body}`);
  }
}

async function main() {
  console.log("\n🔍  GSC SEO Meta Fix — Round 2 (Verified DB Slugs)");
  console.log("════════════════════════════════════════════════════════════\n");

  let updated = 0, skipped = 0, failed = 0;

  for (const entry of SEO_UPDATES) {
    process.stdout.write(`  ➜  ${entry.slug} … `);
    try {
      const row = await fetchBlogIdBySlug(entry.slug);
      if (!row) { console.log("⚠️  NOT FOUND"); skipped++; continue; }
      await patchBlogSeo(row.id, entry.slug, entry);
      console.log(`✅  "${entry.seo_title}"`);
      updated++;
    } catch (err) {
      console.log(`❌  ${err.message}`); failed++;
    }
  }

  console.log("\n════════════════════════════════════════════════════════════");
  console.log(`✅ Updated : ${updated}`);
  console.log(`⚠️  Skipped : ${skipped}`);
  console.log(`❌ Failed  : ${failed}`);
  console.log("════════════════════════════════════════════════════════════\n");
}

main().catch((err) => { console.error("\n💥 Fatal:", err.message); process.exit(1); });
