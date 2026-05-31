# Output Type: Image Card

## Purpose

Extract 4–6 core observations as shareable 1:1 square cards. Optimized for social media (Xiaohongshu, WeChat Moments, Twitter/X).

## When to Use

- Any structure type — image cards adapt to content
- User wants fast, low-friction sharing
- Article has 4–6 distinct, quotable insights
- Target platform is mobile-first social media

## When NOT to Use

- Article has fewer than 4 clear insights (supplement with context, but flag this)
- Content is primarily data/charts — use Interactive HTML for richer visualization
- User needs to preserve the article's narrative flow

## Layout Rules

- Aspect ratio: **1:1 square** (600×600px at 1x, 1200×1200px at 2x)
- One insight per card, 4–6 content cards + 1 footer card
- Card sequence number visible (e.g., `01 — 06`)
- Footer card always last: source attribution + brand tag
- Max-width 600px, screenshotted via Chrome at exactly 600px viewport

## Content Rules

- **card-title**: ≤ 15 characters — the core insight, no fluff
- **card-desc**: ≤ 40 characters — one concrete sentence with "so what"
- If fewer than 4 insights: supplement with related background to reach 4
- If more than 6 insights: merge similar ones, keep 5–6 most essential

## Style Layer

Visual style is chosen independently — see `references/styles/` for options:
- `warm` — default, knowledge-blogger aesthetic
- `night` — dark, high-contrast, tech content
- `ink` — minimal white, concept-focused
- `xhs` — coral gradient, Xiaohongshu-optimized

## Output Format

Single self-contained `.html` file per style. Screenshot each card individually or full-page.

## Template

`templates/image-card/prompt.md` → fills `templates/image-card/template-{style}.html`

## Share Path

Screenshot via Chrome: ⌘+Shift+P → "Capture screenshot" at 600px window width.
See `templates/image-card/README.md` for detailed screenshot guide.
