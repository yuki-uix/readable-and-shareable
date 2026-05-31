# Style: sketch-notes

Hand-drawn educational infographic style. Macaron color palette, paper texture, handwritten typography.

## Recommended Model
`qwen-image-2.0-pro` (DashScope) — best Chinese text rendering. Do NOT use wanx2.1-t2i-turbo.

## Canvas
- Ratio: **2:3** (portrait, gives enough vertical space for 5-6 zones)
- Background: warm cream #F5F0E8
- Layout: dense-modules, 5-6 zones, minimize whitespace

## Macaron Color Palette
ALL colors at the SAME low saturation and similar lightness — unified dreamy feel.
No color should stand out more than others.

| Role | Color | Hex |
|---|---|---|
| Background | Warm cream | #F5F0E8 |
| Zone A | Macaron coral | #FFB7B2 |
| Zone B | Macaron lavender | #C7CEEA |
| Zone C | Macaron mint | #B5EAD7 |
| Zone D | Macaron peach | #FFDAC1 |
| Zone E | Macaron yellow | #FFEAA7 |
| Zone F | Macaron sky blue | #B5D8F7 |
| Accent (stars only) | Warm gold | #F4C542 |
| Prohibition/warning | **Muted** rose (NOT saturated red) | #D4827A |
| Text | Dark charcoal | #2D2D2D |

⚠️ Do NOT use saturated red for ⊘ or ✗ — use muted rose #D4827A only.
⚠️ Cool blue palette does NOT match the sketch-notes hand-drawn aesthetic — avoid.

## Zone Structure
- Vary border styles: rounded-rect, cloud-shape, dotted — never all the same
- ALL borders: hand-drawn wobble, organic irregular edges, NOT perfect geometry
- Color fills must NOT reach border edges (hand-painted gap intentional)
- Key concept zone: full-width, more vertical space, visually prominent
- Reorder zones so the most important concept appears in the middle (not last)

## Typography
- All text: handwritten style
- Zone labels: bold, dark charcoal
- Body text: regular weight, same charcoal
- **Chinese-only in small elements** (pill badges, table cells, callout bubbles)
- No English text inside small colored blocks — causes garbled rendering
- Technical terms (API, prompt, CSS, Token) allowed inline in body text

## Text Constraints
- Zone title: ≤ 10 Chinese characters
- Zone body text per line: ≤ 20 Chinese characters
- Table cells: ≤ 8 Chinese characters each

## Decorations
- Gold ✦ stars scattered between zones (NOT inside zones)
- Hand-drawn wavy underlines for key insights
- Speech-bubble callouts for bottom notes (柠檬黄 #FFEAA7 background)
- Curvy double arrows ⇄ for comparisons
- Simple hand-drawn icons: lightbulb, gear, document, person, checkmark/X

## Attribution Footer
Bottom strip, one shade darker than background:
```
via readable-and-shareable · {SOURCE_TITLE}
```

## Style Rules

### Do
- Maintain hand-painted feel — irregular lines, organic shapes
- Use Macaron colors at consistent saturation
- Make prohibition symbols (⊘) in muted rose, not red
- Vary zone border styles throughout
- Put most important concept as full-width zone in the middle

### Don't
- Use perfect geometric shapes or straight lines
- Use saturated or primary colors (too harsh)
- Use cool blue palette — clashes with hand-drawn aesthetic
- Put English text in small colored pill badges (causes garbled rendering)
- Make all zones the same shape (boring and rigid)
- Leave large empty whitespace areas
