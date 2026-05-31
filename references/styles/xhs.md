# Style: xhs

Warm coral gradient, cover card, pill badge sequence numbers. Optimized for Xiaohongshu (小红书) multi-image posts.

## Best For

Xiaohongshu posts, WeChat Moments sharing, audiences who respond to playful-warm visual language, lifestyle-adjacent tech content.

## Color Tokens

| Token | Value |
|-------|-------|
| `--bg` | `#FFF9F5` |
| `--bg2` | `#FFF1E8` |
| `--bg3` | `#FFE4D0` |
| `--text` | `#1C1816` |
| `--text2` | `#6B5E57` |
| `--text3` | `#A8998F` |
| `--coral` | `#FF6B5B` |
| `--amber` | `#FFAB40` |
| `--border` | `rgba(0, 0, 0, 0.06)` |

## Typography

- Card title: `clamp(26px, 5.5vw, 36px)`, weight 700 (bolder than warm)
- Title highlight: `<span>` with `background: linear-gradient(180deg, transparent 55%, rgba(255,171,64,0.45) 55%)` — yellow highlighter effect
- Description: 15px, `--text2`, `border-left: 2.5px solid var(--coral)` — coral left-bar accent
- Sequence number: pill badge, `background: rgba(255,107,91,0.1)`, `border: 1px solid rgba(255,107,91,0.25)`, coral text

## Decorative Elements

- **Dual blobs**: `::before` (top-right, `--bg2`, 260×260px) + `::after` (bottom-left, `--bg3`, 180×180px, opacity 0.5)
- **Cover card**: first card has `linear-gradient(145deg, #FFF9F5, #FFE8DC)` background, large faint number watermark (80px, coral 7% opacity)
- **Footer**: 3-dot decoration row (first dot coral, others `--bg3`) + coral gradient background

## Special: Cover Card

xhs is the only style with a dedicated cover card before content cards:
- `cover-label`: 11px, weight 700, letter-spacing 0.15em, uppercase, coral
- `cover-title`: 26–38px, weight 800, tight line-height
- `cover-sub`: 13px, `--text2`, max-width 340px
- Large faint watermark: total card count in coral at 7% opacity (top-right corner)

## Screenshot Behavior

Fixed warm light scheme — does **not** respond to `prefers-color-scheme`.

## Template

`templates/image-card/template-xhs.html`
