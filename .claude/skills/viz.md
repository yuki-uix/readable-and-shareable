# Skill: viz — Share-Thought Generator

## Trigger

Use this skill when the user says any of:
- `/viz`
- "帮我可视化这篇文章"
- "生成可分享的产出物"
- "这篇文章适合做成什么形式"
- "readable and shareable"
- "share-thought"

## What this skill does

Takes a core article as input, detects its structure type, then helps the user generate one or more shareable outputs — so different audiences can find their preferred entry point, and come back to read the original if interested.

Output types: 思维导图 · Interactive HTML · 图片卡片 · 概念关系图 · 漫画（持续扩充）

## Execution Steps

### Step 1 — Ingest

Accept the article as:
- Pasted text
- A file path (read it)
- A URL (fetch it)

If the article is very long (>5000 words), ask the user if they want a full analysis or a quick scan.

### Step 2 — Structure Analysis

Scan the article for these structure signals. A single article can have multiple types.

| Structure Type | Signals to look for | Output types that fit well |
|---|---|---|
| **Hierarchical** | Headings, nested lists, parent-child concepts, "consists of", "includes" | 思维导图 · 概念关系图 |
| **Quantitative** | Numbers, percentages, before/after comparisons, cost/performance data | Interactive HTML · 图片卡片 |
| **Sequential** | "Step N", "first/then/finally", implementation order, timelines | Interactive HTML · 图片卡片 |
| **Comparative** | "A vs B", pros/cons, trade-offs, decision matrices | Interactive HTML · 图片卡片 |
| **Relational** | Concepts that reference each other, dependency graphs, system architectures | 概念关系图 · 思维导图 |
| **Narrative/Argumentative** | Story-driven, emotional arc, dense reasoning chains | 漫画（实验性）· 图片卡片（摘要式） |

### Step 3 — Output Selection

Ask the user:

```
这篇文章的结构类型是 [X]，以下产出形式都可以生成，你想要哪种？

1. 思维导图      — 展示层级与关系，适合愿意细读的受众；约 5 分钟
2. Interactive HTML — 数据/流程交互展示，视觉冲击强；约 15 分钟
3. 图片卡片      — 核心观点提炼，适合快速传播；约 10 分钟（模板建设中）
4. 概念关系图    — 展示概念间连接，适合复杂系统；约 15 分钟（模板建设中）
5. 漫画          — 轻量叙事，降低阅读门槛；约 30 分钟（实验性）

（如果不确定，我推荐 [基于 Step 2 结构类型的首选]）
```

If the article is Narrative/Argumentative and the user still wants visualization, explicitly note:
> 这篇文章的价值在于 [叙事节奏 / 论证链条 / 情感表达]，可视化会保留骨架但会丢失 [具体说明]。继续生成 [选定形式]？

### Step 4 — Generate

Use the corresponding template/approach:

| Output Type | Template / Approach |
|---|---|
| 思维导图 | `templates/mindmap/prompt.md` → Markdown 缩进列表（Markmap 可渲染）；按需生成 otml |
| Interactive HTML | `templates/interactive-html/` → 单文件 HTML；上传至 sharehtml.zhenjia.dev |
| 图片卡片 | `templates/image-card/`（建设中）→ SVG / Canvas |
| 概念关系图 | `templates/concept-map/`（建设中）→ Mermaid / D3 |
| 漫画 | `templates/comic/`（实验性）→ 分镜脚本 + 图像生成提示词 |

### Step 5 — Export

产出物底部自动附加来源 footer（防洗稿）：

```
原文：[文章标题]（[链接，若用户提供]）
via readable-and-shareable · github.com/yuki-uix/readable-and-shareable
```

分享路径建议：
- 思维导图 → [Markmap](https://markmap.js.org/repl) 渲染预览 · [幕布](https://mubu.com) otml 导入
- Interactive HTML → [sharehtml.zhenjia.dev](https://sharehtml.zhenjia.dev)（7天有效链接）
  ⚠️ sharehtml 链接7天后失效。建议同时另存本地副本（浏览器 → 文件 → 存储网页），需要永久分享时可托管到 GitHub Pages。
- 图片卡片 → 详见 `templates/image-card/README.md`（Chrome 截图指引）
- 其他形式 → 直接保存文件，嵌入博客或上传平台

## Notes

- Always state what visualization *loses* compared to the original, not just what it gains.
- If a section shouldn't be visualized, say so explicitly — don't force a form onto every part.
- The platform where the user shares is their choice — this skill focuses on generating the right output type, not prescribing platforms.
- The otml mind map format is for import into Mubu (幕布). See `templates/mindmap/` for the format spec.
