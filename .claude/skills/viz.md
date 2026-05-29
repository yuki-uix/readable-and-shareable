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
| **Hierarchical** | Headings, nested lists, parent-child concepts, "consists of", "includes" | Mind map (otml for Mubu) |
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

```
## 文章结构分析

**文章类型判断：** [适合可视化 / 部分适合 / 不适合，附理由]

**检测到的结构类型：**
- [类型]: [具体位置/内容] → 推荐 [形式]
- ...

**推荐优先级：**
1. [最推荐的形式] — 理由：[认知收益 + 实现难度]
2. [次推荐] — ...
3. ...

**不推荐的形式：** [形式] — 理由：[会损失什么]
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
