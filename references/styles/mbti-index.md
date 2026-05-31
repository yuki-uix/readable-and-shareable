# MBTI Style Index

每种风格从对应 MBTI 类型的认知偏好推导设计语言。
不是「给某类人专用」，而是「某类认知风格偏好摄取信息的视觉形式」。

---

## 风格一览（按四象限分组）

### NT Analysts — 逻辑框架系

| 风格 | 状态 | 核心美学 | 工具 | 文件 |
|---|---|---|---|---|
| **INTJ** | ✅ 完成 | 技术文档图 · 精确几何 · 强结论 | HTML | `styles/intj.md` |
| **INTP** | ✅ 完成 | 数学草稿 · 条件分支 · 待验证 | HTML | `styles/intp.md` |
| **ENTJ** | ✅ 完成 | 战略简报 · 结论前置 · 行动指令 | HTML | `styles/entj.md` |
| **ENTP** | ✅ 完成 | 发散风暴 · 放射网状 · 无收口 | AI 生成 | `styles/entp.md` |

### NF Diplomats — 意义叙事系

| 风格 | 状态 | 核心美学 | 工具 | 文件 |
|---|---|---|---|---|
| **INFJ** | ✅ 完成 | 意义地图 · 概念网络 · 整体感悟 | AI 生成 | `styles/infj.md` |
| **INFP** | ✅ 完成 | 手写的信 · 叙事弧线 · 开放邀请 | AI 生成 | `styles/infp.md` |
| **ENFJ** | ✅ 完成 | 成长路线图 · 转化节点 · 邀请前进 | HTML | `styles/enfj.md` |
| **ENFP** | ✅ 完成 | 意义星图 · 多色节点 · 柔和连线 | AI 生成 | `styles/enfp.md` |

### SJ Sentinels — 秩序执行系

| 风格 | 状态 | 核心美学 | 工具 | 文件 |
|---|---|---|---|---|
| **ISFJ** | ✅ 完成 | 步骤手册 · 编号清单 · 明确完成 | HTML | `styles/isfj.md` |
| **ISTJ** | 🔲 待定义 | 规则手册 · 历史依据 · 精确归档 | — | — |
| **ESFJ** | 🔲 待定义 | 关系清单 · 他人需求 · 和谐配色 | — | — |
| **ESTJ** | 🔲 待定义 | 流程图表 · 标准执行 · 强秩序感 | — | — |

### SP Explorers — 即兴感官系

| 风格 | 状态 | 核心美学 | 工具 | 文件 |
|---|---|---|---|---|
| **ISTP** | 🔲 待定义 | 拆解结构 · 实用机制 · 极简 | — | — |
| **ESTP** | 🔲 待定义 | 即时行动 · 感官驱动 · 高刺激 | — | — |
| **ISFP** | 🔲 待定义 | 感官美学 · 色彩直觉 · 安静表达 | — | — |
| **ESFP** | 🔲 待定义 | 体验优先 · 即兴活力 · 高饱和 | — | — |

---

## 命名约定

- 文件名：`references/styles/{mbti}.md`（全小写）
- Prompt 模板：`templates/image-card/{mbti}-prompt-base.md`
- HTML 模板：`templates/image-card/template-{mbti}.html`
- 示例输出：`examples/{article-slug}/ai-image-card/infographic-{mbti}-v{N}.png`

---

## 设计原则

每种 MBTI 风格定义时必须回答：

1. **认知入口**：这种类型的人如何进入一个新概念？（演绎/归纳/联想/步骤）
2. **密度偏好**：高密度 + 强层级 / 低密度 + 大留白？
3. **颜色语义**：颜色传递逻辑关系 / 情绪氛围 / 还是无语义纯装饰？
4. **收口方式**：强结论 / 开放延伸 / 行动指引？
5. **不适合什么**：哪种布局 / 色彩 / 结语形式会让这类型读者感到格格不入？

---

## 关联文件

- 元素语库：`references/sketchnote-design-language.md`
- Prompt 生成基础：`references/base-prompt.md`
