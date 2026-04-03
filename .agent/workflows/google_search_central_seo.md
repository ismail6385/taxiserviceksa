---
description: Google Search Central Technical SEO Best Practices (URL, Media, & Visual Elements)
---

# Google Search Central SEO Implementation Workflow

This workflow encapsulates the Google Search Central best practices for Visual Elements, File Types, and proper URL Structure. Use this workflow when building new pages, updating routing, or modifying site assets.

## 1. URL Structure & Routing
Google bot heavily relies on a clean, scalable, and simple URL architecture. 

- **Use Hyphens, Not Underscores**: Always use `-` to separate words in URLs. Underscores `_` are completely forbidden. Example: `/book-taxi-makkah` (Correct) vs `/book_taxi_makkah` (Incorrect).
- **Lowercase Enforcement**: Ensure all URLs are explicitly lowercase. `/City` and `/city` are treated as distinct endpoints and risk crawl bloat.
- **Descriptive & Human-Readable**: Avoid ID-based routing where possible unless essential for the application. E.g., prefer `/blog/hajj-taxi-tips` over `/blog?id=452`.
- **No Fragments for Content**: Do not use "hash" fragments (`#`) for state management or rendering new content blocks. Search bots ignore fragments.
- **Parameter Control**: Avoid multiple search parameters resulting in additive combinations. Eliminate session IDs in URLs. Use standard `?key=value&` encoding.

## 2. File Indexing & Asset Management
Google crawler parses media formats differently. Ensure all files meet encoding guidelines.

- **Images**: Ensure all core image assets (Hero images, thumbnails, logos) use supported formats: `WebP`, `AVIF`, `PNG`, `JPEG`, `SVG`.
- **Media Optimization**: For image results, follow SEO best practices (descriptive `alt` tags, relevant surrounding text).
- **Rich Media**: For any video used, ensure you provide a valid video thumbnail and metadata to qualify for Video Rich Results.

## 3. Visual Elements & Attribution Optimization
A successful SERP strategy relies on owning as much visual landscape as possible.

- **Attribution Accuracy**: Ensure the `<head>` contains valid metadata for the Favicon and Site Name (using unstructured text or JSON-LD). Ensure Breadcrumb schema is provided to format the visual URL cleanly.
- **Rich Attributes**: Implement review stars, prices, and schema where applicable to trigger Rich Results.
- **Featured Snippet / Exploration Prep**: Structure content logically with headers to increase the chance of landing in the "People Also Ask" (Exploration) block. 

## 4. Link Best Practices & Anchor Text
Google relies on links to pass relevance and crawl new pages. Your link architecture must conform to these rules:

- **Crawlable Links**: Google can ONLY reliably parse links using standard HTML `<a>` tags with an `href` attribute. Avoid `<span href="...">`, or `<a onclick="...">` without a valid fallback `href`.
- **Descriptive Anchor Text**: Anchor text should explain exactly what the target page is about. Avoid generic terms ("click here", "read more") and unnecessarily long stuffed sentences.
- **Image Link Fallbacks**: When using images as links, the `alt` tag acts as the anchor text. Always assign descriptive `alt` tags to hyperlinked images.
- **Contextual Link Spacing**: Give your links context and separate them. Do not chain multiple links consecutively without meaningful text separating them.
- **Outbound Link Qualifiers**: Use `rel="nofollow"` when linking to sources you don't fully trust, `rel="sponsored"` for paid placements, and `rel="ugc"` for user-generated content like comments. 

## 5. Crawling & Indexing Management
Properly notifying Google about changes is essential for rapid inclusion into the SERPs.

- **Bulk Discovery via Sitemaps**: Use a dynamically generated `sitemap.xml` to broadcast all internal URLs. More importantly, utilize specific nodes within the sitemap for alternate language endpoints (e.g. `hreflang`), and detailed schema for images and video pages.
- **Micro-Updates via URL Inspection**: For isolated page changes, manually request indexing via the Google Search Console (GSC) URL Inspection tool.
- **Indexing Expectations**: Indexing priority is dictated by content quality, not submission volume. Endlessly re-submitting an identical URL via GSC will not bypass the crawl queue or index faster.

## 6. Canonicalization Management
Duplicate content naturally arises through parameters, languages, and trailing slashes. Canonical tags dictate the "Source of Truth" to Google for deduplication.

- **Primary Variant Declaration**: The canonical URL identifies your preferred page variant. Always assert your primary canonical variant accurately to prevent domain cannibalization (especially across `http/https`, mobile/desktop, or paginated endpoints).
- **Rel-Canonical Rules**: Rely on `rel="canonical"` within the `<head>`. Canonical hints are strong directives but not absolute rules; Google evaluates them alongside sitemaps and localized tags.
- **Language Distinction**: Localized endpoints serving the *same* content in *different languages* are NOT duplicates. They simply require `hreflang` bindings to the canonical.
- **Accidental Root Overrides**: Beware of generalized layout inheritance (like Next.js `layout.tsx` `alternates: { canonical: '/' }`), which can accidentally force all pages to canonicalize back to the root (`/`), causing index exclusion for internal pages.

## 7. Defining Canonical Preferences
Google uses explicit signals to consolidate link equity. Always declare your preference proactively.

- **Absolute URLs Only**: Google explicitly requires absolute paths for canonical tags (e.g., `https://taxiserviceksa.com/page`, NOT `/page`). Note: In Next.js, defining a `metadataBase` in the root layout safely transforms relative strings in page metadata into valid absolute URLs upon HTML render.
- **Hierarchy of Signals**: Google weighs Canonicalization signals in this order: 1) `301 Redirects` (strongest), 2) `rel="canonical"` annotations, 3) Sitemap Inclusion (weakest).
- **HTTPS & Hreflang Preferences**: Google by default prefers `HTTPS` over `HTTP`. It also leans towards picking canonicals that exist inside a valid `hreflang` localized matrix over isolated pages.
- **Avoid Anti-patterns**: Do NOT use `robots.txt` or URL Removal tool to handle deduplication. Do NOT use `noindex` to fix duplicate content issues (it zeroes out all ranking signals entirely)—always use `rel="canonical"`.

## 8. Auditing & Fixing Canonical Issues
Even with perfect canonical tags, Google can still reject them and choose a different Source of Truth. Use the URL inspection tool to troubleshoot. 

- **Missing Hreflang Clusters**: If you have multidomain or multiregional sites (e.g., Arabic and Urdu variants), Canonical issues are often explicitly caused by missing localized annotations. Ensure `hreflang` bindings are present.
- **CMS/Server Misconfigurations**: Ensure no CMS plugin is injecting rogue `rel="canonical"` headers, and ensure servers are not dumping `Soft 404` pages mimicking existing active URLs.
- **Syndicated & Copied Content**: If your content is syndicated, ensure partners explicitly block indexing rather than using `rel="canonical"`. For malicious copies, file a DMCA removal.
