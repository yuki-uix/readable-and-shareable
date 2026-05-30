Create a professional infographic following these specifications:

## Image Specifications

- **Type**: Infographic
- **Layout**: linear-progression
- **Style**: hand-drawn-edu
- **Aspect Ratio**: 9:16
- **Language**: zh (Chinese)

## Core Principles

- Follow the layout structure precisely for information architecture
- Apply style aesthetics consistently throughout
- Keep information concise, highlight keywords and core concepts
- Use ample whitespace for visual clarity
- Maintain clear visual hierarchy

## Text Requirements

- All text must match the specified style treatment
- Main titles should be prominent and readable
- Key concepts should be visually emphasized
- Labels should be clear and appropriately sized
- Use Chinese for all text content

## Layout Guidelines (linear-progression)

Vertical sequential progression showing numbered steps from top to bottom.
- Large bold title at the very top
- 5 numbered step blocks arranged vertically, connected by downward arrows
- Each step block is a distinct rounded-corner card
- Clear directional arrows between each step
- Consistent spacing between blocks
- Summary conclusion block at the bottom

## Style Guidelines (hand-drawn-edu)

Hand-drawn educational infographic with macaron pastel color blocks on warm cream paper texture.

Color Palette:
- Background: Warm cream (#F5F0E8) with subtle paper grain texture
- Primary text: Deep charcoal (#2D2D2D) for headlines, outlines
- Macaron Blue (#A8D8EA): step 1 and 2 cards
- Macaron Mint (#B5E5CF): step 3 card
- Macaron Lavender (#D5C6E0): step 4 card
- Macaron Peach (#FFD5C2): step 5 card
- Accent Coral Red (#E8655A): key numbers and emphasis
- Dashed border summary box at bottom

Visual Elements:
- Hand-drawn wavy connection arrows between steps with slight wobble
- Simple cartoon robot character near title (cute, not realistic)
- Small doodle icons per step: coin/money bag, lightning bolt, four-quadrant grid, staircase, arrow-down
- Star sparkle decorations scattered around title
- Bold circled numbers (①②③④⑤) for step labels
- Doodle underlines under key phrases
- Color fills don't completely fill outlines — preserve casual hand-drawn feel
- Bold takeaway quote at bottom in dashed box

Typography:
- Main title: Bold hand-drawn style, large, with slight wobble
- Section headers: Hand-lettered inside macaron color blocks
- Body text: Clear handwritten print style
- Keywords bolded within body text

---

Generate the infographic based on the content below:

## Title
怎么优化 Coding Agent 的成本
Subtitle: 从 Prompt Cache 到 Context Engineering

## ① Input Token 是成本杀手
Card color: Macaron Blue
Content:
- Coding Agent 每轮调用都重发完整上下文
- Input token 占总成本 93-99%
- Output 虽然单价贵 5 倍，但只占 7%
Key number (coral red): 93-99%
Small icon: money bag / coin doodle

## ② Prompt Cache 是最大杠杆
Card color: Macaron Blue
Content:
- 命中 cache 的 input 便宜 10 倍
- 固定前缀顺序 · 清理多余 MCP · 关 attribution header
- 一次配置，每次请求都受益
Key number (coral red): 10×
Small icon: lightning bolt / cache doodle

## ③ Context Engineering 四步
Card color: Macaron Mint
Content: Four sub-boxes in a 2×2 grid inside the card:
- Select：让正确信息进来（CLAUDE.md + LSP）
- Compress：减少 token（RTK 压缩 80%）
- Isolate：拆任务换模型（Haiku/Sonnet/Opus）
- Write：把记忆写进文件（SPEC.md）
Small icon: four-quadrant grid doodle

## ④ 模型分级省大钱
Card color: Macaron Lavender
Content: Three-tier staircase visualization:
- 第一层 Haiku：探索·搜索·小修改（最便宜）
- 第二层 Sonnet：实现·写测试·修 bug
- 第三层 Opus：架构设计·跨模块重构（最贵）
Caption: 同样工作量，成本相差 15 倍
Small icon: staircase / pyramid doodle

## ⑤ 端到端粗算
Card color: Macaron Peach
Content: Cost reduction bar / progress visualization:
- 什么都不做：$11.30
- → 缓存优化后：~$6.20
- → 减少探索后：~$5.30
- → 防膨胀后：~$4.70
- → 分级+外存后：~$4-5
Caption: 省约 55%（假设 70% cache 命中率，非实测）
Accent coral red: $11.30 → $4-5
Small icon: downward arrow / progress bar doodle

## Bottom Summary Box (dashed border)
Text: "先让 cache 命中，再减少探索，最后防膨胀——顺序比工具更重要"
Style: dashed rounded rectangle, warm gray background

## Footer
Small text at bottom: 原文：Zhenjia Zhou · ThoughtWorks 博客大赛 2026.05

Text labels (in Chinese):
- 怎么优化 Coding Agent 的成本
- Input Token 是成本杀手
- Prompt Cache 是最大杠杆
- Context Engineering 四步
- 模型分级省大钱
- 端到端粗算
- Select · Compress · Isolate · Write
- Haiku 探索 · Sonnet 实现 · Opus 架构
- 省约 55%
