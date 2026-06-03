# Skill: /cardgen — 卡片生成

## 定位

基于已有的 `card-plan.md`，写 prompt、生成图片。

**只做生成**，不做解读，不做规划。

---

## 输入

需要先有 `examples/{slug}/card-plan.md`（由 `/cardplan` 生成）。

调用方式：
- `/cardgen` — 自动寻找当前 session 最近的 card-plan.md
- `/cardgen {slug}` — 指定 slug
- `/cardgen {slug} {N}` — 只生成第 N 张卡

---

## 执行

### Step 1 — 读取 card-plan.md

读取 `examples/{slug}/card-plan.md`，提取：
- MBTI 视觉语言
- 输出模式（手绘笔记 / 编辑卡片）
- 每张卡的 brief（主题 / 核心问题 / 关键内容）

同时读取对应的视觉规范：
- 手绘笔记模式 → `references/sketch-styles/{mbti}.md` + `references/sketchnote-design-language.md`
- 编辑卡片模式 → `references/styles/{mbti}.md` + `references/design-system.md`

---

### Step 2 — 逐张生成

对每张卡依次执行：

#### 2a — 写 prompt

基于 card brief + 视觉规范构建图像生成 prompt。

**Prompt 写作规则（从实践提炼）：**
- Footer 只写 `(full-width, deep navy fill, white text)`，不加 "NO white gap / flush" 等强调指令——越强调反而越容易渲染错误
- 单张卡内容行数超过 9 行时 footer 容易被挤出，需精简内容
- **系列标识写法**：用 `Top-right corner, tiny text, {color}, small caps:` 然后换行写标识文字（如 `SERIES NAME · 1 / 3`）。不要用 "SERIES LABEL" 等区块标题词，模型会把区块标题渲染进图片
- **停靠站描述**：用 "First story stop / Second story stop" 等序数描述，不要用 "STOP 1 / STOP 2"，模型会把 STOP 字样渲染进图片
- 表格每行只放一个工具 / 概念，禁止「A / B」合并
- Eyebrow 不写 MBTI 类型（字母 J 渲染不稳定），只写内容标签
- 系列卡 footer attribution 格式：`{domain} · readable-and-shareable`（不超过 30 字符）
- **ENTP 关键节点标签禁用「颠覆——」**：模型会把「覆」字截掉渲染成「颠是——」；改用「关键——」，视觉权重靠橙色边框和字号区分

保存至 `examples/{slug}/prompts/{NN}-{mbti}-{mode}.md`

#### 2b — 执行生成

**手绘笔记模式：**
```bash
bash scripts/gen-ai-card.sh \
  --prompt examples/{slug}/prompts/{NN}-{mbti}-sketch.md \
  --output examples/{slug}/cards/card-{N}.png \
  --ar 2:3
```

**编辑卡片模式：**
生成 HTML → `examples/{slug}/image-card-{N}.html`，执行截图：
```bash
node scripts/screenshot.mjs examples/{slug}/image-card-{N}.html --json
```

#### 2c — 展示并确认

展示生成的图片，询问：
```
Card {N} · {主题名} 生成完成。

满意继续下一张，或告诉我哪里要调整？
```

用户确认后继续下一张。若需要调整，修改 prompt 后重新生成当前卡，不影响其他卡。

---

## 输出

```
✅ 系列生成完成（{N} 张）

  Card 1 · {主题} → examples/{slug}/cards/card-1.png
  Card 2 · {主题} → examples/{slug}/cards/card-2.png
  ...

  满意直接分享。需要调整某张：/cardgen {slug} {N}
```

---

## 边界

- 只做图片生成，不修改 digest.md 或 card-plan.md
- 依赖 card-plan.md 存在，否则提示先运行 /cardplan
- 手绘笔记模式依赖 `scripts/gen-ai-card.sh`（DashScope API）
- 编辑卡片模式依赖 `scripts/screenshot.mjs`（本地 Chrome）
- 单张重新生成：`/cardgen {slug} {N}`
