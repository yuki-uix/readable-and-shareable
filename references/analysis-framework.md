# Analysis Framework — viz Skill

Defines the schema and content rules for `analysis.md`, the intermediate artifact generated in Step 2 of the viz skill.

## Output Path

```
examples/{slug}/analysis.md
```

**Slug rules:** 2–4 words, kebab-case, derived from article title or URL.
Example: `coding-agent-cost`, `transformer-attention`, `product-design-principles`

**Conflict:** If `examples/{slug}/` already exists with a different article, append `-YYYYMMDD`.

**Overwrite policy:** Always overwrite. No backup needed at current scale.

---

## Schema

```markdown
# Analysis — {Article Title}

## Meta
- **Source**: {URL or "pasted text" or file path}
- **Language**: {zh / en / mixed}
- **Word count (approx)**: {N}
- **Date analyzed**: {YYYY-MM-DD}

## Topic & Audience
- **Core topic**: One sentence — what is this article fundamentally about?
- **Target audience**: Who wrote this for? (developers / designers / general / executives / ...)
- **Tone**: {technical / conversational / narrative / argumentative}

## Structure Types
Primary: {type} — {one-line evidence}
Secondary (if any): {type} — {one-line evidence}

Structure type options:
- Hierarchical — headings, nested lists, parent-child concepts
- Quantitative — numbers, percentages, before/after comparisons
- Sequential — step-by-step, "first/then/finally", timelines
- Comparative — A vs B, pros/cons, trade-offs
- Relational — dependency graphs, system architectures, concept maps
- Narrative/Argumentative — story-driven, emotional arc, dense reasoning

## Key Arguments
(3–6 bullet points, each ≤ 25 words, verbatim from article when possible)
- ...
- ...
- ...

## Visualization Challenges
What will be hard or impossible to preserve in any visual format?
- ...

## Recommended Output Types
(Ranked 1–3, each with a one-line reason tied to structure type)
1. {output type} — {reason referencing structure type, e.g. "顺序型结构，Interactive HTML 的进度条视觉化最直观"}
2. {output type} — {reason}
3. {output type} — {reason}
```

---

## Rules

- `Key Arguments` must reflect article content faithfully — no new information, no paraphrasing that changes meaning
- `Visualization Challenges` must be honest: if the article is dense narrative, say so
- `Recommended Output Types` reasons must reference the detected structure type — generic reasons ("looks good") are not acceptable
- The file is always written before any output is generated; all subsequent steps reference it
