# Skill: viz — Article Visualization Analyzer

## Trigger

Use this skill when the user says any of:
- `/viz`
- "帮我可视化这篇文章"
- "分析这篇文章的可视化方案"
- "这篇文章适合做成什么形式"
- "readable and shareable"

## What this skill does

Takes a technical article as input, analyzes its internal structure types, judges whether and how visualization would help, then generates the recommended output format(s).

## Execution Steps

### Step 1 — Ingest

Accept the article as:
- Pasted text
- A file path (read it)
- A URL (fetch it)

If the article is very long (>5000 words), ask the user if they want a full analysis or a quick scan.

### Step 2 — Structure Analysis

Scan the article for these structure signals. A single article can have multiple types.

| Structure Type | Signals to look for | Recommended Form |
|---|---|---|
| **Hierarchical** | Headings, nested lists, parent-child concepts, "consists of", "includes" | Markdown mindmap（[Markmap](https://markmap.js.org/repl) / 幕布） |
| **Quantitative** | Numbers, percentages, before/after comparisons, cost/performance data | Chart, interactive calculator |
| **Sequential** | "Step N", "first/then/finally", implementation order, timelines | Flowchart, Scrollytelling |
| **Comparative** | "A vs B", pros/cons, trade-offs, decision matrices | Comparison table, matrix |
| **Relational** | Concepts that reference each other, dependency graphs, system diagrams | Knowledge graph |
| **Narrative/Argumentative** | Story-driven, emotional arc, dense reasoning chains | ⚠️ Not recommended — explain why |

### Step 3 — Fit Judgment

Before recommending, explicitly answer:
- Does this article's VALUE come from its structure (good for viz) or its language/reasoning (bad for viz)?
- Which sections benefit most from visualization? Which should stay as prose?
- What's the primary audience: people who want to explore deeply, or people who want a quick summary?

### Step 4 — Output Recommendation Report

Present findings in this format:

**如果适合可视化：**

```
## 文章结构分析

**文章类型判断：** [适合 / 部分适合，一句话说明原因]
（部分适合时，注明哪些章节适合可视化、哪些建议保留原文）

**检测到的结构类型：**
- [类型]：[具体位置/内容示例]

---

**首选：[形式名称]**
- 适合场景：[具体场景，如"截图发微信" / "发可点击链接给朋友"]
- 平台：[工具名]（[链接]）
- 时间：约 [X] 分钟
- 下一步：[第一个动作，如"用 templates/mindmap/prompt.md，把文章粘进去"]

**备选：[形式名称]**（仅当文章有第二种明显结构时才列）
- 适合场景：[具体场景]
- 平台：[工具名]（[链接]）
- 时间：约 [X] 分钟
- 下一步：[第一个动作]
```

时间估算（写死，不要动态判断）：
- 思维导图：约 5 分钟
- 交互式 HTML：约 15 分钟
- Scrollytelling：约 30 分钟（模板建设中）

平台与链接：
- 思维导图 → [幕布](https://mubu.com) · [Markmap](https://markmap.js.org/repl)
- 交互式 HTML → [sharehtml.zhenjia.dev](https://sharehtml.zhenjia.dev)（7天有效链接）
- 掘金嵌入 → Mermaid mindmap 格式（在 prompt 里加"同时输出 Mermaid 版"）

**如果不适合可视化：**

```
## 文章结构分析

**文章类型判断：** 不适合可视化

**原因：**
这篇文章的价值在于 [叙事语言的节奏 / 论证链条的完整性 / 情感表达]，
而不是结构本身。可视化会保留骨架，但丢失 [具体说明会损失什么]。

**建议：** 直接阅读原文。如果需要笔记，手写摘要比结构图更适合这类内容。
```

### Step 5 — Generate

Ask the user: "要直接生成哪种形式？"

Then use the corresponding template:
- Mind map → generate Markdown indented list first (human-readable, renderable by Markmap); optionally export otml for Mubu import
- Interactive HTML → `templates/interactive-html/` → upload to sharehtml.zhenjia.dev → share link (7-day expiry)
- Scrollytelling → `templates/scrollytelling/`
- Chart/Calculator → generate inline with Chart.js or vanilla JS

### Step 6 — Export to platforms (optional)

If the user wants to publish:
- 微信/掘金: Extract key insights as prose article draft
- dev.to/LinkedIn: English summary with embedded visuals
- Twitter/X: Thread format from the sequential structure

## Notes

- Always state what visualization *loses* compared to the original, not just what it gains.
- If a section shouldn't be visualized, say so explicitly — don't force a form onto every part.
- The otml mind map format is for import into Mubu (幕布). See `templates/mindmap/` for the format spec.
