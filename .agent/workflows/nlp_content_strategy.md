---
description: NLP & Entity Salience Strategy (Optimizing for Google BERT/RankBrain)
---

# NLP Implementation Strategy for SEO

To "implement NLP" in a website for SEO, we don't install an NLP library. Instead, we **structure our content and code** so that Google's NLP algorithms (BERT, RankBrain, Neural Matching) can easily parse and understand our "Entities" (Subject Matter).

## 1. The "RDF Triple" Writing Style
Google's Knowledge Graph works on **Triples**: `Subject` → `Predicate` → `Object`.
*   **Bad (Passive/Vague):** "Driving is what we do best and cars are available."
*   **Good (NLP-Optimized):** "VIP Transfer KSA **(Subject)** provides **(Predicate)** luxury airport transfers **(Object)**."

**Action:** Rewrite key introductory paragraphs to use simple, declarative sentences.

## 2. Entity Salience (The "First Sentence" Rule)
The most important entity must appear in the first sentence to establish **Salience** (Importance).
*   If the page is about "Jeddah to Makkah Taxi", that exact phrase should be the **Subject** of the first sentence.

## 3. Contextual Vectors (LSI/Semantics)
Surround your main entity with "Attribute" entities to build a vector.
*   **Main Entity:** "Umrah Taxi"
*   **Vector Context via Attributes:** "Ihram", "Miqat", "Haramain Highway", "Terminal 1", "Ziyarat".
*   *Why?* Google knows "Umrah" is statistically likely to appear near "Miqat". If you include "Miqat", your "Umrah" relevancy score goes up.

## 4. Structured Data (The Code Layer)
Use JSON-LD Schema to explicitly tell the NLP engine what the strings mean.
*   Text: "Price is 200"
*   Schema: `"price": "200", "priceCurrency": "SAR"` -> removes ambiguity.
