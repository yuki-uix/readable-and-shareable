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

## Keyword Shortcuts

When the user's request contains these keywords, use the mapped output type and style as the **leading recommendation** in Step 3. Skip content-based output inference for matched keywords — go straight to the mapped option as #1.

**Step 2 analysis still runs regardless** — shortcuts only affect Step 3 recommendation order, not content consistency.

| User Keyword | Output Type | Style | Notes |
|---|---|---|---|
| 小红书 / 发小红书 / xhs / 红书 | 图片卡片（HTML） | xhs | 直接推 xhs 风格作为首选 |
| 思维导图 / mindmap / 脑图 | 思维导图 | — | 用户已明确形式，跳过推断 |
| 信息图 / infographic | AI 信息图 | hand-drawn-edu | 提醒用户需要图像 API |
| 地铁图 / subway / 交互 / interactive | Interactive HTML | — | 提醒 7 天链接有效期 |
| 手绘 / 插画 / 手绘卡 / 手绘图片 / ai图片 / ai卡片 | AI 图片卡 | sketch-notes | 直接走 ③b 流程，检测 API key |
| 粉笔 / 黑板 / chalkboard | AI 图片卡 | chalkboard | 直接走 ③b chalkboard 风格 |
| 卡片 / 观点卡 / 知识卡 | 图片卡片（HTML） | warm | 默认 warm，可追问风格偏好 |
| 黑白 / 极简 / 纯白 | 图片卡片（HTML） | ink | 最大化可读性场景 |
| 深色 / 暗色 / 科技感 / dark | 图片卡片（HTML） | night | 高对比冲击感场景 |
| 架构图 / 系统图 / 关系图 / diagram | SVG 架构图 | — | 读 design-system.md 生成 SVG |

### Step 3 — Output Selection

**Step 3.1 — Check Keyword Shortcuts first**

Scan the user's original request for keywords from the table above.
- **Match found** → use mapped output + style as Recommendation #1; promote associated options to top; skip content-based inference for #1
- **No match** → proceed to Step 3.2

**Step 3.1.5 — 消歧：用户说「图片」时**

If the user says only `图片` / `生成图片` / `图片卡` / `做成图片` without further qualification:

**Do NOT assume ③a.** Ask one clarifying question:

```
你想要哪种图片格式？

A. 图片卡片（HTML 截图）— 即用，无需 API，warm/night/ink 风格
B. AI 手绘图片卡          — 手绘插画风格，需要 DASHSCOPE_API_KEY 或 OPENAI_API_KEY
```

Wait for the user's answer before proceeding.

**Step 3.2 — Content-based recommendation** (when no keyword matched)

Based on `analysis.md`, present recommendations. **Rationale must use scene language** — write in terms of "适合发到哪里/给谁看/用在什么场景"，不要在用户侧呈现"层级型/时序型"等内部结构类型术语。

```
根据分析，这篇文章最适合以下产出形式：

✦ 首选：{产出形式} — {场景理由，例："适合截图发朋友圈 / 分享给想快速了解的朋友"}
  备选：{产出形式} — {场景理由，例："适合需要深读的受众，可导入幕布整理"}
  备选：{产出形式} — {场景理由}
```

**多结构类型文章**（analysis.md 命中多种结构）：在推荐列表前加一行说明主结构与优先级依据：
> 主结构是 {X}，首推 {形式}；若你更想突出 {Y 部分}，可以选 {备选形式}。

**单一推荐**（只有一种形式明显适合）：同样附理由，并说明其他形式不适合的原因（一句话即可）：
> 这篇最适合 {形式}。其他形式不太合适：思维导图会丢失 {原因}，图片卡片难以体现 {原因}。

完整选项：

```
① 思维导图           — 适合愿意花时间细读的受众，可截图或导入幕布；约 5 分钟
② Interactive HTML    — 交互式网页，适合数据密集或有流程步骤的内容；sharehtml.zhenjia.dev 一键分享（7天有效）；约 15 分钟
③a 图片卡片（HTML）  — 核心观点提炼成卡片，截图即用，无需 API；warm/night/ink 风格；约 10 分钟
③b AI 图片卡（手绘） — AI 生成手绘风卡片，视觉冲击强；需要 DASHSCOPE_API_KEY 或 OPENAI_API_KEY；约 15 分钟
④ SVG 架构图         — 系统关系可视化，适合技术读者；约 10 分钟
⑤ 概念关系图         — 展示概念间连接，适合复杂系统；约 15 分钟（模板建设中）
⑥ 漫画               — 轻量叙事，降低阅读门槛（模板建设中，暂不可用）

请回复选项编号（如「③b」）继续。
```

**重要：等待用户回复编号后再执行。用户回复描述性语言时（如「手绘」「图片」），对照关键词表映射到对应编号，然后向用户确认：「你选的是 ③b AI 图片卡（手绘风），继续？」，确认后再执行。不得自行推断并直接开始生成。**

**⛔ AI 图片卡硬性禁令（③b 路径）**

- **绝对禁止**用 HTML / CSS / SVG / canvas 来模拟或替代 AI 图片卡的输出。
- 如果 API key 不可用，必须明确告知用户并停止，不得悄悄降级为 HTML。
- 产出物必须是通过 `scripts/gen-ai-card.sh` 生成的 PNG 文件，没有例外。

**③b AI 图片卡风格选择**（用户选择 ③b 后追加询问）：

```bash
# Source shell profile first, then check
for _p in ~/.zshrc ~/.bash_profile ~/.bashrc ~/.profile; do
  [ -f "$_p" ] && . "$_p" 2>/dev/null || true
  { [ -n "${DASHSCOPE_API_KEY:-}" ] || [ -n "${OPENAI_API_KEY:-}" ]; } && break
done
if [ -z "${DASHSCOPE_API_KEY:-}" ] && [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "❌ 未检测到 API key"
  echo "请将以下任一行添加到 ~/.zshrc，重新开启 Claude Code 终端后生效："
  echo "  export DASHSCOPE_API_KEY=your_key"
  echo "  export OPENAI_API_KEY=your_key"
fi
```

若 key 存在，继续询问风格：
```
请选择 AI 图片卡风格：
1. sketch-notes — 手绘教育风，暖奶油背景，马卡龙色块（默认）
2. chalkboard   — 粉笔黑板风，深色背景，适合强对比场景
                  ⚠️ DALL-E 3 + chalkboard 为实验性组合
```

将选定风格传入 `templates/ai-image-card/prompt.md`，跳过其中的 Step 0 和 Step 1（已完成）。

If the article is Narrative/Argumentative and the user still wants visualization, explicitly note:
> 这篇文章的价值在于 [叙事节奏 / 论证链条 / 情感表达]，可视化会保留骨架但会丢失 [具体说明]。继续生成 [选定形式]？

## Confirmation Policy

Applies **only to AI image generation outputs** (AI 信息图, and any future output type that calls an image API). HTML-based outputs (图片卡片 HTML, Interactive HTML, 思维导图, SVG 架构图) do not require confirmation — they have no API cost.

**Default behavior: confirm before generating.**

Before invoking any image backend, show the user:

```
即将生成 AI 信息图，确认以下参数：

- Layout:  {layout}
- Style:   {style}
- Aspect:  {aspect}
- Backend: {backend}
- Prompt:  将保存至 {prompt-file-path}

确认生成？（回复「确认」或「yes」继续；或直接说「改 style」等来调整）
```

Wait for explicit confirmation before proceeding. Do **not** auto-generate.

**Skip confirmation** when the user's current request contains any of:
`--no-confirm` · "直接生成" · "跳过确认" · "不用确认" · "按默认出图"

In skip mode: state the assumed parameters in the next message, then generate immediately.

### Step 4 — Generate

Use the corresponding template/approach. Extract content from `analysis.md` — do not re-read the original article.

**Two-layer loading for image-card outputs:**
1. Read `references/output-types/{output-type}.md` — layout rules, content constraints, save path
2. Read `references/styles/{style}.md` — color tokens, typography, decorative elements
Apply both together. `references/design-system.md` is the overarching visual standard.

| Output Type | Layout Reference | Style Reference | Template | Confirm? |
|---|---|---|---|---|
| 思维导图 | `references/output-types/mindmap.md` | — | `templates/mindmap/prompt.md` | ❌ |
| Interactive HTML | `references/output-types/interactive-html.md` | — | `templates/interactive-html/` | ❌ |
| 图片卡片 | `references/output-types/image-card.md` | `references/styles/{style}.md` | `templates/image-card/prompt.md` | ❌ |
| SVG 架构图 | `references/output-types/diagram.md` | — (uses design-system.md colors) | 直接生成 SVG | ❌ |
| **AI 信息图** | 从 `references/base-prompt.md` 填充 | `references/base-prompt.md` 内含 | 按 `references/prompts-guide.md` 命名保存 | **✅ 必须确认** |
| **AI 图片卡** | `templates/ai-image-card/style-{style}.md` | 内含于 style 文件 | `templates/ai-image-card/prompt.md` → `scripts/gen-ai-card.sh` | **✅ 必须确认** |
| 概念关系图 | `templates/concept-map/`（建设中） | — | Mermaid / D3 | ❌ |
| 漫画 | `templates/comic/`（建设中，尚未可用） | — | **模板未就绪，不得使用任何外部工具（包括 baoyu-comic）替代** | ❌ |

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

## ⛔ Scope Boundary — External Tools Prohibited

This skill operates **only within the readable-and-shareable repository**. When a template or feature is marked "建设中" or "暂不可用":

- **Do NOT** reach for external tools or skills (e.g. `baoyu-comic`, `baoyu-infographic`, `baoyu-xhs-images`) as substitutes.
- **Do NOT** silently downgrade to HTML/CSS/SVG when the user requested AI-generated raster images.
- **Instead**: tell the user clearly — "此功能模板尚未就绪，无法生成。" and stop.

The presence of baoyu-skills in the environment does **not** authorize its use within this skill's flows.
