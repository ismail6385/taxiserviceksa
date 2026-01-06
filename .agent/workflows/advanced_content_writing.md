---
description: Advanced SEO Content Writing Workflow using ChatGPT Prompts (Based on Session 4)
---

# Advanced Content Writing Strategy

This workflow implements the "Session 4" advanced content writing techniques to generate high-ranking, engaging, and human-like articles for TaxiServiceKSA.

## 1. Pre-Writing Checklist (The "Brain" Phase)

Before asking for a single word, define these 6 pillars:
- **Topic**: e.g., "Jeddah Airport Taxi Guide"
- **Keyword**: Primary keyword (e.g., "best taxi Jeddah airport") + LSI keywords.
- **Intent**: What does the user want? (Booking, Information, Schedule, Price?)
- **Tone**: Professional, Helpful, Verified, "Guide-like" (avoid "salesy" until the end).
- **Format**: Blog Post, detailed Guide, or Listicle?
- **Competitor Analysis**: checking top 3 results for their H2/H3 structure.

## 2. Step-by-Step Prompting Strategy

Do NOT ask for the whole article at once. Use this chained prompting method:

### Step A: The "Expert" Persona Setup & Outline
**Prompt:**
> "Act as a professional Travel Content Writer and SEO Expert for Saudi Arabia. Your niche is luxury transport and Umrah services.
> I want to write a blog post about: [TOPIC].
> My target audience is: Pilgrims and Business Travelers (Age 25-55).
> Tone: Helpful, Authoritative, Clear, Empathetic.
>
> First, generate a comprehensive OUTLINE for this article.
> Analyze the user intent for the keyword '[MAIN KEYWORD]'.
> The outline must include:
> - An engaging H1.
> - At least 6-8 H2 headings covering all sub-topics (Prices, Locations, Tips, Scams, Booking).
> - Nested H3 headings for deep details.
> - A dedicated FAQ section based on 'People Also Ask'.
> - A Conclusion.
> 
> Do NOT write the article yet. Just give me the best detailed outline."

### Step B: The "Drafting" (Section by Section)
**Prompt:**
> "Great. Now write the article section by section based on that outline.
> 
> **Rules for Writing:**
> 1. **No Robot Intros**: Never start with 'In this article...'. Start with a hook (e.g., 'Arriving in Jeddah can be chaotic...')
> 2. **Short Paragraphs**: Max 2-3 lines per paragraph.
> 3. **Simple Language**: Use Grade 6-8 English (Hemingway App style). Avoid complex words like 'orchestrate', 'realm', 'tapestry'.
> 4. **Engaging**: Use 'You' and 'We'. Ask rhetorical questions.
> 5. **Formatting**: Use Markdown (Bold key phrases, Bullet points for lists).
> 6. **Keyword Placement**: Naturally include '[KEYWORD]' in the first 100 words.
>
> **Task**: Write the Introduction and the first 2 H2 sections now."

*(Continue asking for the next sections with "Continue with the next 3 sections..." to avoid cutoff/low quality)*

### Step C: The "Refusal to Be Boring" Check
**Prompt (Self-Correction):**
> "Review the content you just wrote.
> - Does the Intro hook the reader immediately?
> - Are the paragraphs short enough?
> - Did you use any fluff words? Remove them.
> - Add a 'Pro Tip' box (formatted as blockquote) in section 2."

## 3. Post-Writing Polish (Manual)

1.  **Hemingway Check**: Copy text to [Hemingway Editor](https://hemingwayapp.com/). Aim for Grade 6-7.
    - *Fix*: Break long sentences. Remove adverbs.
2.  **Visuals**: Add relevant images (not stock-heavy) every 300 words.
3.  **Internal Links**: Link to `/fleet/`, `/booking/`, and other `/guides/`.
4.  **FAQ Schema**: Ensure FAQs are marked up for Rich Snippets.

## 4. Implementation on Website

When adding to the Next.js project:
1.  Use `<RichTextEditor />` or standard Tailwind classes (`prose prose-lg`).
2.  Ensure H2s have `id` attributes for Table of Contents.
3.  Add `metadata` with energetic Title and Description.

---
**Example "Golden" Intro:**
*Bad:* "In this comprehensive guide, we will explore the various options for taxi services available at King Abdulaziz International Airport..."
*Good:* "Landing in Jeddah after a long flight? The last thing you want is to haggle with taxi drivers in the heat. Whether you're heading to Makkah for Umrah or a business meeting in Riyadh, getting the right ride can save you hours—and money."
