# Style: vivid-lineArt

Teal-and-black line-art sketchnote. White background, single teal accent, minimal decoration.
Inspired by "The Six Vivid Quick Tricks" visual grammar style.

## Best For

Concept explainers, relationship diagrams, process flows, "when X → draw Y" type content.
Works best when the content has a clear structural skeleton (grid, hierarchy, flow).
NOT suitable for dense text-heavy content — needs breathing room to work.

## Visual System

### Color System (MUST stay unified — do not mix with macaron or other palettes)

| Role | Value | Usage |
|---|---|---|
| Background | `#FFFFFF` pure white | Entire background, box fills |
| Primary accent | `#00B5B5` teal/cyan | Box borders, key labels, circle numbers |
| Text | `#1A1A1A` near-black | All body text, arrows, annotations |
| Underline emphasis | `#1A1A1A` with wavy/straight underline | Key terms only |
| No other colors | — | Strictly two-color system |

### Box Style

- Hand-drawn rectangular border in teal, slightly irregular/tilted (not perfectly geometric)
- Interior fill: white (transparent-looking against white background)
- Corner style: slightly rounded, organic
- Inside: bold label in teal, small icon below (simple line drawing)
- Box size: consistent within a grid section, vary by importance

### Typography

- **Page title**: large, mixed-case handwritten (`The Six Vivid Quick Tricks` style), near-black
- **Subtitle / instruction lines**: italic handwritten, smaller, near-black
- **Box labels**: bold teal caps or title-case, inside box
- **Key terms**: underlined (straight or wavy), near-black, mixed with normal text
- **Side annotations**: small handwritten, placed on margins, connected by arrows to main grid
- **Sequence numbers**: circled (①②③), black circle + white number OR black circle outline

### Arrows

- All arrows: hand-drawn curvy, near-black, with arrowhead
- "draw a →" style: text label ON the arrow line itself (not beside it)
- Direction: from side annotations inward toward the main grid
- Style: loose, organic curves — not ruler-straight

### Layout Structure (choose one per image)

| Structure | Description | When to use |
|---|---|---|
| **Center grid** | Main concept grid in center, numbered side annotations pointing inward | Multiple related items with one unifying frame |
| **Top-down flow** | Title at top, boxes flow downward with arrows | Sequential or hierarchical content |
| **Radial** | Center node, boxes radiate outward | One core concept with branching sub-ideas |

### Signature Elements

- Arrow labels: write the action verb ON the arrow (`draw a →`, `leads to →`)
- Side numbering: ① ② ③ placed at page margins, NOT inside the main grid
- Minimal decoration: NO stars, NO background blobs, NO color fills behind text
- Small functional icons inside boxes: simple 2-3 line drawings (portrait face, chart bars, map pin, timeline arrows)

## Prompt Keywords

```
pure white background, single teal accent color #00B5B5,
hand-drawn rectangular boxes with teal borders white fill slightly tilted,
black curvy hand-drawn arrows with text labels on arrow lines,
mixed-case handwritten title large near-black,
underlined key terms for emphasis,
black circled sequence numbers at page margins,
small simple line-art icons inside boxes,
side annotations with inward-pointing arrows,
no background color fills no decorative blobs,
clean minimal two-color sketchnote style
```

## What This Style Loses vs. Macaron

- **Warmth**: white background reads colder than cream
- **Visual richness**: two colors only — no zone differentiation by color
- **Density tolerance**: works poorly with many text bullets per zone

## Known Limitations (qwen-image-2.0-pro)

- **中文字渲染错误**：笔画复杂的字（摩、碎、燥等）容易出现笔画缺失或变形
- **缓解策略**：
  - 每个盒子最多 2 条内容，减少字符密度
  - 优先用常用简单字，避免笔画多的生僻字
  - 关键结论句用独立框承载，不要混在密集区域
  - 盒子标签控制在 6 字以内
- **待验证**：Ideogram / Midjourney 在中文渲染上是否更稳定

## Template / Prompt Base

See `templates/image-card/vivid-lineArt-prompt-base.md`

## Reference Image

`/Users/yuki/Documents/AIGC/reference/` — "The Six Vivid Quick Tricks" sketchnote
