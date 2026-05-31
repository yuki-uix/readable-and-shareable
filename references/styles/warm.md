# Style: warm

Default style. Warm cream tones, minimal decoration, knowledge-blogger aesthetic.

## Best For

Knowledge-sharing content, personal blogs, general audiences, light academic tone.

## Color Tokens

| Token | Value |
|-------|-------|
| `--bg` | `#faf9f7` |
| `--bg2` | `#f0ede8` |
| `--bg3` | `#e5e1db` |
| `--text` | `#1a1a18` |
| `--text2` | `#6b6a64` |
| `--text3` | `#9c9a92` |
| `--border` | `rgba(0, 0, 0, 0.08)` |
| `--accent` | `#1a1a18` |

## Typography

- Card title: `clamp(24px, 5.5vw, 34px)`, weight 500
- Title underline accent: 32px × 2px, color `#9c9a92`
- Description: 15px, color `#6b6a64`, line-height 1.75

## Decorative Elements

- Top-right background circle: `--bg2`, 200×200px, opacity 0.5
- Card bottom border: 0.5px, `rgba(0,0,0,0.08)`
- Footer background: `--bg2`
- Footer divider: 24px × 1.5px, `--bg3`

## Screenshot Behavior

Fixed light scheme — does **not** respond to `prefers-color-scheme`. Output is always light regardless of system theme.

## Template

`templates/image-card/template-warm.html`
