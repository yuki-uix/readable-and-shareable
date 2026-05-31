# Style: ink

Pure white, maximum readability. Zero decoration, concept-first aesthetic.

## Best For

Concept explainers, educational content, articles where the words should do all the work. Best when card-title clarity is the priority.

## Color Tokens

| Token | Value |
|-------|-------|
| `--bg` | `#ffffff` |
| `--bg2` | `#f8f8f8` |
| `--bg3` | `#eeeeee` |
| `--text` | `#111111` |
| `--text2` | `#555555` |
| `--text3` | `#999999` |
| `--border` | `rgba(0, 0, 0, 0.08)` |
| `--accent` | `#111111` |

## Typography

- Card title: `clamp(24px, 5.5vw, 34px)`, weight 400 (lighter than warm — lets whitespace breathe)
- No title underline accent (removed for minimal aesthetic)
- Description: 15px, color `#555555`, line-height 1.75

## Decorative Elements

Minimal — no background circle decoration. Card relies on whitespace alone.
Footer background: `--bg2`.

## Screenshot Behavior

Fixed light scheme — does **not** respond to `prefers-color-scheme`.

## Template

`templates/image-card/template-ink.html`
