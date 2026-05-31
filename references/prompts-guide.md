# Prompts Guide — AI Image Generation

Rules for generating, naming, and managing prompt files for AI image outputs.

## Workflow

1. Read `references/base-prompt.md` — this is the skeleton, never hand-write from scratch
   - **Do not add comment lines** (`{# ... #}`, `<!-- ... -->`, `// ...`) to the prompt file — the file is passed verbatim to the image API via `--promptfiles`, and any comment syntax becomes part of the prompt text
2. Fill each `{{PLACEHOLDER}}` with content from `analysis.md` and the chosen layout/style
3. Save the complete filled prompt to `examples/{slug}/infographic/prompts/`
4. Invoke the image backend with the saved prompt file
5. The prompt file is the reproducibility record — if regenerating, write a new file (don't overwrite)

## Placeholder Reference

| Placeholder | What to fill |
|-------------|-------------|
| `{{LAYOUT}}` | Layout name, e.g. `linear-progression` |
| `{{STYLE}}` | Style name, e.g. `hand-drawn-edu` |
| `{{ASPECT_RATIO}}` | Ratio string, e.g. `9:16`, `1:1`, `16:9` |
| `{{LANGUAGE}}` | Language code + name, e.g. `zh (Chinese)` |
| `{{LAYOUT_GUIDELINES}}` | Detailed layout instructions (from `references/layouts/{layout}.md` if available, else describe inline) |
| `{{STYLE_GUIDELINES}}` | Detailed style instructions (from `references/styles/{style}.md` if available, else describe inline) |
| `{{CONTENT}}` | Structured content sections derived from `analysis.md` |
| `{{TEXT_LABELS}}` | Exhaustive list of all text strings that must appear in the image |

## Naming Convention

```
examples/{slug}/infographic/prompts/NN-{type}-{slug}.md
```

| Part | Rule | Example |
|------|------|---------|
| `NN` | Two-digit sequence, starts at `01` | `01`, `02` |
| `{type}` | Output type shorthand | `infographic`, `diagram`, `card` |
| `{slug}` | Same slug as the parent `examples/{slug}/` | `coding-agent-cost` |

Example: `examples/coding-agent-cost/infographic/prompts/01-infographic-coding-agent-cost.md`

## Regeneration Policy

- **First generation:** `01-infographic-{slug}.md`
- **Regeneration (prompt revised):** `02-infographic-{slug}.md` — increment `NN`, keep old file
- **Regeneration (same prompt):** overwrite the existing file — no new number needed
- **Never delete old prompt files** — they are the reproducibility record

## Backup Policy

Before overwriting an existing image output (`.png`):
- Rename existing to `infographic-backup-YYYYMMDD-HHMMSS.png`
- Then write new output

Prompt `.md` files are never overwritten except when explicitly regenerating with the same prompt (see above).
