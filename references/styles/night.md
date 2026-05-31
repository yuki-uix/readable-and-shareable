# Style: night

Dark high-contrast scheme. Strong visual impact for tech and product content.

## Best For

Tech articles, product launches, developer content, audiences comfortable with dark UI.

## Color Tokens

| Token | Value |
|-------|-------|
| `--bg` | `#1c1c1a` |
| `--bg2` | `#272725` |
| `--bg3` | `#333330` |
| `--text` | `#e8e6de` |
| `--text2` | `#b4b2a9` |
| `--text3` | `#73726c` |
| `--border` | `rgba(255, 255, 255, 0.12)` |
| `--accent` | `#e8e6de` |
| `--bg-info` | `#042c53` |
| `--bg-success` | `#173404` |
| `--bg-warning` | `#412402` |

## Typography

Same scale as `warm`. Title weight: 500. Text colors use the dark-scheme token values above.

## Decorative Elements

Same structure as `warm` — background circle, card border, footer divider — using dark token values.

## Screenshot Behavior

Intentionally dark. Does **not** respond to `prefers-color-scheme` — output is always dark regardless of system theme. This is the one exception to the "fixed light" rule used by other styles.

## Template

`templates/image-card/template-night.html`
