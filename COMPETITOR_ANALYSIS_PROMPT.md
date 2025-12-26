# Competitor Analysis & Prioritization Strategy (Blue Hat SEO)

Based on the "77x Growth" Blue Hat SEO series, this strategy uses a multi-layered prompt to visualize competitor data and identify high-value/low-cost ranking opportunities.

## 1. The Strategy: "Cost of Entry vs. Relevance"

The goal is to move beyond simple keyword overlap and understand the **"Cost of Ranking"**:
- **High Relevance (Shared Keywords)** + **Low Authority (DR/Traffic)** = **High Priority Target**.
    - *Why?* You are already relevant to them, and they are weak. Outranking them yields quick wins.
- **High Relevance** + **High Authority** = **Long-term Battle**.
    - *Why?* You are relevant, but they have brand power.
- **Low Relevance** + **High Authority** = **Ignore/Deprioritize**.
    - *Why?* Hard to rank, and you don't share enough semantic ground yet.

## 2. The Data Source
Export the **"Organic Competitors"** report from Ahrefs as a CSV.
Key columns needed:
- **Competitor** (Domain)
- **Common Keywords** (Intersection)
- **Competitor Keywords** (Unique)
- **Traffic**
- **Traffic Value** (Cost)
- **DR** (Domain Rating)
- **Pages** (Page Count)

## 3. The Multi-Layered Prompt for AI/Code Interpreter

Copy and paste the following prompt structure into ChatGPT (Advanced Data Analysis) or use it with your AI assistant after uploading the CSV.

```markdown
"""
!!! SECTION 1: DATA DEFINITION & SYNTAX !!!
This is the first section of the prompt.
I am providing a dataset from Ahrefs 'Organic Competitors'.
The file uses UTF-16 encoding and tab separators.
The columns are defined as follows:
- 'Competitor': The domain name of the rival website.
- 'Common Keywords': Count of queries we both rank for (Relevance Signal).
- 'Competitor Keywords': Count of queries they rank for but we do not (Expansion Opportunity).
- 'Traffic': The estimated monthly organic traffic.
- 'Traffic Value': The estimated monetary value of that traffic (Cost proxy).
- 'DR': Domain Rating (Authority proxy).
- 'Pages': The number of pages indexed (Content Velocity proxy).

Please read the uploaded file using these parameters.
"""

"""
!!! SECTION 2: VISUALIZATION PURPOSE !!!
This section defines the goal.
The purpose is to visualize the "Relevance" of these domains to our Target Domain and correlate it with the "Possible Cost" of outranking them.
- High 'Common Keywords' + Low 'Traffic Value' = Low Cost, High Relevance (Priority 1).
- High 'Traffic Value' correlates with High 'Cost of Ranking'.
- High 'DR' correlates with Brand Power (Resistance).
Create a visualization that helps me spot the "Weak but Relevant" competitors instantly.
"""

"""
!!! SECTION 3: VISUALIZATION COMMANDS !!!
This section defines the output format.
1. Use a Multi-Wire Axis Chart (or Subplots if needed) to represent multiple dimensions on one figure.
2. X-Axis: Competitor Domains.
3. Y-Axis 1 (Bars): Traffic Value (use Logarithmic Scale if variance is high).
4. Y-Axis 2 (Line): Common Keywords (Relevance).
5. Y-Axis 3 (Line/Scatter): Domain Rating (DR).
6. Color Code:
   - Orange Bars = Traffic Value (Cost).
   - Blue Line = Common Keywords (Relevance).
   - Green Line = Unique Queries (Expansion).
7. Ensure all labels are legible. Rotate X-axis labels if necessary.
"""

"""
!!! SECTION 4: KNOWLEDGE DOMAIN TERMS !!!
Define the SEO concepts for context:
- 'Relevance': Measured by the overlap of keywords (Common Keywords). Higher overlap means we are semantically similar.
- 'Cost of Ranking': Correlated with Traffic Value and DR. Higher Value means they are monetizing well and likely defend their rankings.
- 'Blue Hat SEO': The methodology of Using data science to prioritize targets based on mathematical efficiency rather than just volume.
"""

"""
!!! SECTION 5: CORRELATION LOGIC & LATEST DETAILS !!!
Interpret the data using this logic:
- If a competitor has [High Common Keywords] but [Low DR] and [Low Page Count], they are a "Vulnerable Target". We should inspect their top pages and outrank them first.
- If a competitor has [Low Common Keywords] but [High Traffic], they are an "Authority Mismatch". We need to build more topical authority before attacking.
- Please highlight any "Outliers" – domains that have surprisingly high traffic value despite low page counts (High Efficiency domains).
"""
```

## 4. How to Interpret the Output
1.  **Look for the "Gap":** Find domains where the **Blue Line (Relevance)** is high, but the **Orange Bar (Traffic Value/Cost)** is low. These are your "Low Hanging Fruit".
2.  **Check Page Efficiency:** If a competitor has high traffic but very few pages (Red bar if visualized), they have high-quality content. Study their structure.
3.  **Expansion Targets:** Look at the **Green Line (Unique Keywords)**. If this is high and you have high relevance, they are a perfect "Content Gap" source. Run a "Content Gap Analysis" specifically against these domains.
