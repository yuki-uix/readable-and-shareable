# Output Type: Diagram (SVG)

## Purpose

Show system architecture, concept relationships, or process flows as a professional dark-themed SVG. Suited for technical articles with structural relationships.

## When to Use

- Structure type is **Hierarchical**, **Relational**, or **Sequential** with system/component relationships
- Article describes a framework, architecture, or multi-step process with dependencies
- Audience is technical and comfortable reading architecture diagrams

## When NOT to Use

- Structure is primarily narrative or comparative — use mindmap or image cards instead
- Article is data-heavy with numbers — use Interactive HTML
- Relationships are too complex for a single diagram (consider multiple diagrams)

## Layout Rules

Follow **all** rules in `references/design-system.md`:
- Choose one primary flow direction: Left-to-Right (data pipelines) or Top-to-Bottom (layered systems)
- Group related components in region boundaries (dashed amber outlines)
- SVG layering order: background → regions → arrows → masks → boxes → text → legend → title
- Always include a legend (bottom area) and title block (top-left)
- `viewBox` must extend to fit all content + 30px padding on all sides
- Never set fixed `width`/`height` — let SVG scale responsively

## Color Assignment

Use semantic colors from `references/design-system.md`:
- **Input** (cyan): article source, data inputs
- **Process** (emerald): transformations, workflow steps
- **Output** (violet): generated artifacts
- **Structure** (amber): frameworks, grouping regions
- **Caution** (rose): warnings, losses, caveats
- **Flow** (orange): arrows, connectors
- **Neutral** (slate): context, external references
- **Highlight** (blue): key insight, recommended option

Maximum 4 colors per diagram.

## Content Rules

- Components are labeled with names from the article (verbatim where possible)
- Each component has a name (11-12px, weight 600) and optional sublabel (9px, weight 400)
- Arrows carry labels ≤ 8 words when the relationship needs clarification
- Regions are labeled at their top-left corner

## Output Format

Single self-contained `.svg` file with:
- `xmlns="http://www.w3.org/2000/svg"` on root element
- All `<style>`, `<defs>`, markers at top of SVG
- Google Fonts import for JetBrains Mono (with Noto Sans SC / PingFang SC fallback for Chinese)

## Save Path

`examples/{slug}/diagram.svg`

## Share Path

Embed in blog, export to PNG via browser screenshot, or convert via `scripts/screenshot.ts` (when available).
