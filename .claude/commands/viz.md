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

Takes a core article as input, analyzes its structure and saves the analysis, then helps the user generate one or more shareable outputs — so different audiences can find their preferred entry point, and come back to read the original if interested.

Output types: 思维导图 · Interactive HTML · 图片卡片 · 概念关系图 · 漫画（持续扩充）

## Execution Steps

### Step 1 — Ingest

Accept the article as:
- Pasted text
- A file path (read it)
- A URL (fetch it)

If the article is very long (>5000 words), ask the user if they want a full analysis or a quick scan.

### Step 2 — Analyze & Save

Read `references/analysis-framework.md` for the full schema, then analyze the article and write the result to `examples/{slug}/analysis.md` (overwrite if exists).

**Slug rules:** 2–4 words, kebab-case, from article title or URL. Example: `coding-agent-cost`.
Conflict: if `examples/{slug}/` already exists for a different article, append `-YYYYMMDD` to the slug.

Scan the article for these structure signals. A single article can have multiple types.

| Structure Type | Signals to look for | Output types that fit well |
|---|---|---|
| **Hierarchical** | Headings, nested lists, parent-child concepts, "consists of", "includes" | 思维导图 · 概念关系图 |
| **Quantitative** | Numbers, percentages, before/after comparisons, cost/performance data | Interactive HTML · 图片卡片 |
| **Sequential** | "Step N", "first/then/finally", implementation order, timelines | Interactive HTML · 图片卡片 |
| **Comparative** | "A vs B", pros/cons, trade-offs, decision matrices | Interactive HTML · 图片卡片 |
| **Relational** | Concepts that reference each other, dependency graphs, system architectures | 概念关系图 · 思维导图 |
| **Narrative/Argumentative** | Story-driven, emotional arc, dense reasoning chains | 漫画（实验性）· 图片卡片（摘要式） |

After saving `analysis.md`, show the user a **3-line summary** in the conversation:

```
📄 分析完成 → examples/{slug}/analysis.md

主结构：{Primary structure type}（{one-line evidence}）
核心论点：{N} 条 · 可视化挑战：{one-line summary}

如果结构识别不准确，告诉我，我重新分析。
```

All subsequent steps reference `analysis.md` — do **not** re-read the original article.

### Step 3 — Output Selection

Based on `analysis.md` (written in Step 2), present recommendations with explicit one-line reasons tied to the detected structure type:

```
根据分析，这篇文章最适合以下产出形式：

1. {首选} — {理由，必须引用结构类型，例："层级型结构清晰，思维导图能展示完整知识框架"}
2. {次选} — {理由}
3. {第三选} — {理由}

完整选项：
① 思维导图      — 展示层级与关系，适合愿意细读的受众；约 5 分钟
② Interactive HTML — 数据/流程交互展示，视觉冲击强；约 15 分钟
③ 图片卡片      — 核心观点提炼，适合快速传播；约 10 分钟
④ 概念关系图    — 展示概念间连接，适合复杂系统；约 15 分钟（模板建设中）
⑤ 漫画          — 轻量叙事，降低阅读门槛；约 30 分钟（实验性）
```

If the article is Narrative/Argumentative and the user still wants visualization, explicitly note:
> 这篇文章的价值在于 [叙事节奏 / 论证链条 / 情感表达]，可视化会保留骨架但会丢失 [具体说明]。继续生成 [选定形式]？

### Step 4 — Generate

Use the corresponding template/approach. Extract content from `analysis.md` — do not re-read the original article.

**Two-layer loading for image-card outputs:**
1. Read `references/output-types/{output-type}.md` — layout rules, content constraints, save path
2. Read `references/styles/{style}.md` — color tokens, typography, decorative elements
Apply both together. `references/design-system.md` is the overarching visual standard.

| Output Type | Layout Reference | Style Reference | Template |
|---|---|---|---|
| 思维导图 | `references/output-types/mindmap.md` | — | `templates/mindmap/prompt.md` |
| Interactive HTML | `references/output-types/interactive-html.md` | — | `templates/interactive-html/` |
| 图片卡片 | `references/output-types/image-card.md` | `references/styles/{style}.md` | `templates/image-card/prompt.md` |
| SVG 架构图 | `references/output-types/diagram.md` | — (uses design-system.md colors) | 直接生成 SVG |
| **AI 信息图** | 从 `references/base-prompt.md` 填充 | `references/base-prompt.md` 内含 | 按 `references/prompts-guide.md` 命名保存 |
| 概念关系图 | `templates/concept-map/`（建设中） | — | Mermaid / D3 |
| 漫画 | `templates/comic/`（实验性） | — | 分镜脚本 + 图像生成提示词 |

#### 图片卡片风格选择

用户选择「图片卡片」后，追加询问风格（在调用 prompt.md 前）：

```
请选择卡片风格：
1. warm  — 暖米色轻量，适合知识博主、温和调性（默认）
2. night — 深色高对比，适合科技/产品内容，截图冲击感强
3. ink   — 纯白极简，适合概念讲解，最大化可读性
4. xhs   — 暖珊瑚色封面卡 + pill badge，适合小红书传播

（不选则默认使用 warm）
```

将用户选定的风格作为上下文传入 `templates/image-card/prompt.md`，prompt.md 会跳过风格询问步骤，直接使用 `template-{style}.html`。

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
