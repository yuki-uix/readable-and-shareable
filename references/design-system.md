# viz Design System

Visual language for all viz outputs: SVG diagrams, HTML cards, Interactive HTML.
Reference this file whenever generating or modifying any visual output.

---

## Color Palette

### Semantic Colors (SVG / Diagram outputs)

Assign colors by **content role**, not by topic or technology.

| Role | Fill (rgba) | Stroke | Use For |
|------|-------------|--------|---------|
| **Input** | `rgba(8, 51, 68, 0.4)` | `#22d3ee` (cyan) | Article source, original content, data inputs |
| **Process** | `rgba(6, 78, 59, 0.4)` | `#34d399` (emerald) | Transformations, workflow steps, actions |
| **Output** | `rgba(76, 29, 149, 0.4)` | `#a78bfa` (violet) | Generated artifacts, stored results |
| **Structure** | `rgba(120, 53, 15, 0.3)` | `#fbbf24` (amber) | Frameworks, regions, grouping boundaries |
| **Caution** | `rgba(136, 19, 55, 0.4)` | `#fb7185` (rose) | Visualization losses, caveats, warnings |
| **Flow** | `rgba(251, 146, 60, 0.3)` | `#fb923c` (orange) | Arrows, connections, transitions |
| **Neutral** | `rgba(30, 41, 59, 0.5)` | `#94a3b8` (slate) | Context, background info, secondary elements |
| **Highlight** | `rgba(59, 130, 246, 0.3)` | `#60a5fa` (blue) | Key insight, recommended option, current focus |

**Rule:** Never use more than 4 semantic colors in a single diagram.

### Design Tokens (HTML Card outputs)

Used in `template-*.html` files. Defined as CSS custom properties on `:root`.

| Token | warm | night | ink | xhs |
|-------|------|-------|-----|-----|
| `--bg` | `#faf9f7` | `#1c1c1a` | `#ffffff` | `#FFF9F5` |
| `--bg2` | `#f0ede8` | `#272725` | `#f8f8f8` | `#FFF1E8` |
| `--text` | `#1a1a18` | `#e8e6de` | `#111111` | `#1C1816` |
| `--text2` | `#6b6a64` | `#b4b2a9` | `#555555` | `#6B5E57` |
| `--accent` | `#1a1a18` | `#e8e6de` | `#111111` | `#FF6B5B` |
| `--border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.12)` | `rgba(0,0,0,0.08)` | `rgba(0,0,0,0.06)` |

**Rule:** HTML card templates must never respond to `prefers-color-scheme` — screenshot output must be consistent regardless of system theme. Exception: `night` template intentionally uses dark scheme.

---

## Typography

### SVG Diagrams

```svg
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  text { font-family: 'JetBrains Mono', 'Noto Sans SC', 'PingFang SC', monospace; }
</style>
```

Chinese text: use `font-family: 'JetBrains Mono', 'Noto Sans SC', 'PingFang SC', sans-serif` and **increase box widths** — CJK characters are wider than ASCII.

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Diagram title | 16px | 700 | `white` |
| Component name | 11–12px | 600 | `white` |
| Sublabel / description | 9px | 400 | `#94a3b8` |
| Annotation / note | 8px | 400 | `#94a3b8` |
| Arrow label | 7–8px | 400 | `#64748b` |
| Region label | 9px | 600 | stroke color of region |

### HTML Cards

| Role | Size | Weight |
|------|------|--------|
| Card title (`card-title`) | `clamp(24px, 5.5vw, 34px)` | 500–700 |
| Card description (`card-desc`) | 15px | 400 |
| Sequence number | 11px | 600–700 |
| Footer source | 13px | 400 |
| Footer brand | 10–11px | 400 |

---

## SVG Structure & Layering

Draw SVG elements in this exact order (SVG paints back-to-front):

1. **Background** — solid fill + grid pattern
2. **Region boundaries** — dashed outlines for groups
3. **Connection arrows and lines**
4. **Opaque masking rects** — same position as component boxes, `fill="#0f172a"` ← critical
5. **Component boxes** — semi-transparent fill + colored stroke
6. **Text labels**
7. **Legend** — bottom area, outside all boundaries
8. **Title block** — top-left, 20px from edge

**Why masking rects matter:** Semi-transparent fills will show arrows beneath them without a mask. Always place an opaque rect before each styled component box.

```svg
<!-- Step 4: mask -->
<rect x="100" y="100" width="160" height="60" rx="6" fill="#0f172a"/>
<!-- Step 5: styled box -->
<rect x="100" y="100" width="160" height="60" rx="6" fill="rgba(8,51,68,0.4)" stroke="#22d3ee" stroke-width="1.5"/>
<!-- Step 6: labels -->
<text x="180" y="125" fill="white" font-size="11" font-weight="600" text-anchor="middle">Component</text>
<text x="180" y="141" fill="#94a3b8" font-size="9" text-anchor="middle">description</text>
```

---

## Spacing Rules

Follow strictly — these prevent overlapping without manual adjustment.

### SVG Diagrams

| Rule | Value |
|------|-------|
| Component box height (standard) | 50–70px |
| Component box height (large/complex) | 80–120px |
| Minimum gap between components (vertical) | 40px |
| Minimum gap between components (horizontal) | 30px |
| Arrow label clearance from any box edge | 10px |
| Region boundary padding (inside edges) | 20px |
| Legend placement below lowest element | ≥ 20px |
| Title block from top-left corner | 20px |
| viewBox padding on all sides | 30px |

**Rule:** Always extend `viewBox` to fit all content + 30px padding. Never set fixed `width`/`height` attributes — let SVG scale responsively.

### HTML Cards

| Rule | Value |
|------|-------|
| Card aspect ratio | `1 / 1` (square) |
| Card max width | 600px |
| Card padding | ≥ 48px |
| Card title font size | ≥ 26px |
| Card description line height | ≥ 1.7 |
| Screenshot width (Chrome) | 600px |

---

## SVG Component Patterns

### Standard box

```svg
<rect x="X" y="Y" width="160" height="60" rx="6" fill="#0f172a"/>
<rect x="X" y="Y" width="160" height="60" rx="6" fill="FILL_RGBA" stroke="STROKE_HEX" stroke-width="1.5"/>
<text x="CX" y="Y+24" fill="white" font-size="11" font-weight="600" text-anchor="middle">Name</text>
<text x="CX" y="Y+40" fill="#94a3b8" font-size="9" text-anchor="middle">description</text>
```

### Region boundary

```svg
<rect x="X" y="Y" width="W" height="H" rx="12" fill="none" stroke="#fbbf24" stroke-width="1" stroke-dasharray="8,4"/>
<text x="X+12" y="Y+16" fill="#fbbf24" font-size="9" font-weight="600">Region Name</text>
```

### Standard arrowhead

```svg
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
  </marker>
</defs>
```

### Background + grid

```svg
<defs>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0f172a"/>
<rect width="100%" height="100%" fill="url(#grid)"/>
```

---

## Output File Rules

| Output type | Format | Save path | Naming |
|-------------|--------|-----------|--------|
| SVG diagram | `.svg` | `examples/{slug}/` | `diagram.svg` |
| HTML card | `.html` | `examples/{slug}/` | `cards-{style}.html` |
| Card screenshot | `.png` | `examples/{slug}/` | `cards-{style}.png` |
| Interactive HTML | `.html` | `examples/{slug}/` | `index.html` |
| AI infographic | `.png` | `examples/{slug}/infographic/` | `infographic.png` |
| Analysis | `.md` | `examples/{slug}/` | `analysis.md` |
| AI prompt | `.md` | `examples/{slug}/infographic/prompts/` | `NN-{type}-{slug}.md` |

**Conflict rule:** If a file already exists, overwrite silently. Exception: AI infographic PNG — rename existing to `infographic-backup-YYYYMMDD-HHMMSS.png` before regenerating.
