# readable-and-shareable

A Claude Code skill + toolkit for turning complex technical articles into visual, shareable formats.

## What it does

Drop in a technical article → get a structure analysis → generate the right visualization for each part.

Not every article needs visualization. Not every part of an article needs the same form. This skill figures out what fits.

## Quick start

```bash
# Install the skill
cp .claude/skills/viz.md ~/.claude/skills/viz.md

# Use it
/viz
# Then paste your article or give a file path
```

## Structure types → visual forms

| If the article has... | Generate... |
|---|---|
| Nested concepts / hierarchy | Mind map (otml for Mubu) |
| Numbers, cost data, before/after | Chart / interactive calculator |
| Steps, implementation order | Flowchart / Scrollytelling |
| A vs B, trade-offs | Comparison table |
| Concepts that reference each other | Knowledge graph |
| Pure narrative / dense reasoning | ⚠️ Skip visualization — explained in output |

## Outputs

- `mindmap.otml` — import into Mubu (幕布) to export as image
- `index.html` — self-contained interactive HTML, shareable as a single file
- Platform drafts: 微信 / 掘金 / dev.to / LinkedIn / Twitter thread

## Example

[Coding Agent Cost Optimization](examples/coding-agent-cost/) — a 20,000-word article that contains hierarchical, quantitative, and sequential structures. Demonstrates all three visualization forms.

## Methodology

See [docs/methodology.md](docs/methodology.md) for the theory behind the form-matching logic (Dual Coding Theory, Cognitive Load Theory, and why some articles shouldn't be visualized at all).

## Templates

- [`templates/mindmap/`](templates/mindmap/) — otml format spec + generation prompt
- [`templates/interactive-html/`](templates/interactive-html/) — base HTML template
- [`templates/scrollytelling/`](templates/scrollytelling/) — scroll-driven reveal template
