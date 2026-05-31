# Output Type: Interactive HTML

## Purpose

High visual impact for data-rich, comparative, or sequential content. Single-file HTML with embedded JS — shareable via link.

## When to Use

- Structure type is **Quantitative**, **Sequential**, or **Comparative**
- Content has numbers, percentages, before/after comparisons, or step-by-step flow
- Audience wants to explore or interact, not just read

## When NOT to Use

- Article is purely narrative — interaction adds no value
- User needs a permanent link (sharehtml.zhenjia.dev expires in 7 days)

## Layout Rules

- Single scrollable page, max-width 860px, centered
- Each major section = one visual block (chart, progress bar, table, timeline)
- Dark/light mode responsive via `prefers-color-scheme`
- Data stays in JS `const` objects — not hardcoded in HTML markup
- Interactive elements: click to expand, hover for details, toggles
- Footer: source attribution with original article link

## Content Rules

- All numbers and statistics copied verbatim from article
- Preserve original phrasing for key claims
- Section order follows article's logical flow, not length
- Each visual block must have a descriptive heading (≤ 12 words)

## Output Format

Single self-contained `.html` file:
- Inline CSS (no external stylesheets)
- Inline JS (no external libraries except optionally Chart.js via CDN)
- All data embedded in JS constants
- Works offline after first load

## Template

`templates/interactive-html/prompt.md` + `templates/interactive-html/template.html`

## Share Path

Upload to [sharehtml.zhenjia.dev](https://sharehtml.zhenjia.dev) — 7-day link.
⚠️ Save a local copy simultaneously (Browser → File → Save Page). For permanent hosting, deploy to GitHub Pages.
