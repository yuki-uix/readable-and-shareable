# Fill Prompt — Image Card Template

Use this prompt to fill an image card template with content from a source article.

---

## Instructions for Claude

You are filling `templates/image-card/template-{style}.html` to generate a shareable image card set.

### Step 0 — Choose style

If the caller (e.g. viz.md) has already specified a style, skip this step and proceed with that style.

Otherwise, ask the user:

```
请选择卡片风格：
1. warm  — 暖米色轻量，微信朋友圈 / 公众号截图首选（默认）
2. night — 深色高对比，科技/产品内容，深色 UI 截图冲击感强
3. ink   — 纯白极简，概念讲解 / 学术感，印刷级可读性

（不选则默认使用 warm）
```

Record the chosen style as `{style}` (warm / night / ink). Default: `warm`.
Note the selected style when outputting HTML: "使用风格：{style}"。

### Step 1 — Extract core observations

Read the article and identify the key points. Follow these rules strictly:

- Extract **4–6 core observations** (not more, not fewer after adjustment)
- If the article has **fewer than 4** clear points: supplement with closely related background context or implications to reach exactly 4 cards
- If the article has **more than 6** clear points: merge similar ones, keep only the most essential 5–6; discard the rest without mentioning them

For each observation, draft:
- **Title** (`card-title`): ≤ 15 characters. The core insight in the fewest possible words. **If over 15 chars, cut — do not exceed.**
- **Description** (`card-desc`): ≤ 40 characters. One concrete sentence that adds context or a "so what." **If over 40 chars, cut — do not exceed.**

Show the user your drafted observations **before generating HTML**, and ask:
> "以上是从文章提取的 N 个核心观点，是否需要调整？确认后我来生成 HTML。"

### Step 2 — Fill the template

After the user confirms (or requests adjustments), fill `template-{style}.html`:

| Placeholder | Value |
|---|---|
| `{{PAGE_TITLE}}` | Article title (short form) |
| `{{SERIES_TOTAL}}` | Total number of content cards (e.g. `06` if 6 content cards) |
| `{{POINT_N_TITLE}}` | Card N main observation (≤ 15 chars) |
| `{{POINT_N_DESC}}` | Card N supporting description (≤ 40 chars) |
| `{{SOURCE_URL}}` | Original article URL (if provided; else use `#`) |
| `{{AUTHOR}}` | Author name |
| `{{SOURCE_LABEL}}` | Short source label (e.g. publication name + date) |

**Card count rules:**
- Add or remove `<div class="card">` blocks to match the confirmed number of observations (4–6)
- The `.card-footer` block must always remain as the very last card
- Update `{{SERIES_TOTAL}}` to match the actual content card count (not including footer)

### Step 3 — Output

Output the complete filled HTML as a single self-contained file.
Remind the user to screenshot it: see `templates/image-card/README.md` for the Chrome screenshot guide.

---

## Text Requirements for AI-generated outputs

When this template's content is passed to an AI image generation backend (e.g. baoyu-infographic):

- **步骤标签**：统一使用「步骤 N」或「①②③」，禁止使用英文 `Step N`
- **技术缩写**：API、MCP、CLAUDE.md、LLM 等保留英文原样，不翻译
- **中文内容全程中文**：正文、标题、注释均使用中文，不中英混排
- 目的：防止图像模型截断英文单词（如 "Step" → "tep"）

---

## Quality checklist before output

- [ ] Style selected and noted (warm / night / ink)
- [ ] Correct `template-{style}.html` used — not mixed with another style
- [ ] Every `card-title` ≤ 15 characters
- [ ] Every `card-desc` ≤ 40 characters
- [ ] Content cards: 4–6 (not counting footer card)
- [ ] Footer card is the last block and untouched
- [ ] All `{{PLACEHOLDER}}` tokens replaced (no leftover placeholders)
- [ ] `{{SERIES_TOTAL}}` matches actual content card count
