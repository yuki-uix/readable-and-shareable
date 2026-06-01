# Style: INTJ

**认知偏好摘要**
Introverted · Intuitive · Thinking · Judging
→ 框架先行 · 演绎逻辑 · 精确语义 · 强收口

独立自主消化信息，不需要引导语。先给系统模型，再给细节。
颜色只做语义标注，不做情绪渲染。容忍高密度，但要求严格层级。

---

## Visual System

### 底层美学
接近「技术文档插图」或「系统架构图」，而不是 sketchnote。
精确感本身是审美——线条干净不是冷漠，是对读者智识的尊重。

参照：Stripe 文档图、Linear 截图风格、Edward Tufte 数据图、技术白皮书的 figure。

### Color System

| Role | Value | 用途 |
|---|---|---|
| Background | `#F7F7F5` 极浅灰白 | 全局背景，不用纯白（太冷）不用暖色（太柔） |
| Primary text | `#1C1C1A` 近黑 | 标题、主要标签 |
| Secondary text | `#6B6A64` 中灰 | 说明文字、次要标注 |
| Accent | `#1C1C1A` 黑色 | 框线、主要箭头 |
| Semantic highlight | `#2563EB` 冷蓝 | 只标「核心框架节点」，不用于装饰 |
| Muted fill | `#EBEBEA` 浅灰 | 次要信息的背景填充 |

严格语义用色：蓝色 = 核心框架，灰色 = 支撑细节，黑色 = 逻辑关系线。**无氛围色。**

### Layout Structure — 框架优先，层级明确

- **主导元素居首**：最核心的模型 / 框架 / 结论放在视觉重心位置（通常是上方或中央），不藏在最后
- **主从权重分明**：不用等权网格——核心节点 > 支撑节点，视觉大小反映信息优先级
- **演绎方向**：从框架 → 分支 → 细节，不做归纳式「现象堆砌→结论」
- **信息闭合**：必须有明确结论框，不以问句或「延伸思考」收尾

推荐布局：
| 布局 | 适用 |
|---|---|
| **顶层框架 + 向下展开** | 有一个统领模型，多个子项 |
| **收敛型**（多条线汇向中心结论）| 多个前提推向同一结论 |
| **二维矩阵** | 两个维度的交叉分析 |

避免：时间线叙事、等权列表、发散型（无收口）。

### 签名视觉元素（v2）

以下元素是 INTJ 风格的专属语法，必须出现：

**① Framework Box（核心框架容器）**
- 全宽蓝色边框容器，顶部有浮动标签「核心框架」（蓝底白字，小号全大写）
- 背景 `#EEF3FB`（冷蓝极浅），边框 `#2563EB` 1.5px
- 容器内：核心命题（15px bold 蓝色）+ 一句话定义（12px 灰色）
- 这是整张卡片的视觉霸主，位于最顶部

**② 多列轴节点网格**
- 将核心框架的子变量以等宽网格排列（2-4列）
- 每个节点：label（9px 全大写灰色）+ title（13px bold 蓝色）+ desc（11px 灰色）
- 边框 `#2563EB` 1px，区别于普通节点（border `--border`）

**③ 关系约束表格**
- 用 `<table>` 展示场景 × 约束 × 结论的交叉关系
- 表头背景 `--surface`，行间距宽松，使用 tag 标注关键状态
- tag 颜色：蓝色 = 合法/正向，红色 = 错误/摩擦，灰色 = 中性

**④ 标注箭头逻辑行**
- 每行：[主体] → [关系标签] → [影响对象]
- 关系标签用小边框 pill（`border 0.5px`，背景白色）
- 箭头颜色：`--blue` 正向逻辑 / `--text2` 中性 / `#C0392B` 否定逻辑（配 `≠`）

**⑤ 结论 Bar（∴ 收口）**
- 全宽，左侧 4px 蓝色 accent bar，背景白色
- 顶部：`∴ 演绎结论`（10px 全大写蓝色）
- 主文：14px bold 近黑，一句话结论
- 副文：11px 灰色，结论的条件限定说明

### Typography

- **主标题**：18–22px，weight 600，近黑，无装饰
- **模型标签**：14–16px，weight 600，蓝色（核心节点）或近黑（次要节点）
- **说明文字**：12–13px，weight 400，中灰，行高 1.6
- **结论框文字**：15–16px，weight 600，近黑，下划线
- **字体感觉**：印刷体感，不要手写感——清晰、规整、可快速扫描

### Lines & Shapes

- 线条：细，1–1.5px，精确，不手绘——直线或轻微圆角
- 框：圆角 4–6px，薄边框（0.5–1px），不做粗描边
- 箭头：极简，只有头部，细线，带逻辑标签
- 分隔线：用 0.5px 灰色细线，不用装饰性分隔符

### Arrows — 逻辑关系专用

| 箭头类型 | 语义 |
|---|---|
| `→` 单向实线 | 导致 / 推出 / 下一步 |
| `⟺` 双向 | 相互影响 / 对比关系 |
| `- - →` 虚线 | 弱关联 / 可选路径 |
| `≠` / `×` | 否定 / 不适用 |

箭头必须带标签：「导致」「约束」「因此」「≠」——不允许无标签箭头（无标签 = 歧义）。

### Icons / 图示

- 只用功能性符号：维恩图（关系）、矩阵（二维）、树形（层级）、收敛箭头（结论）
- 不用插画式图标、人物、表情
- 图示服从于逻辑结构，不做装饰

### 结论框（必须有）

- 全宽，蓝色左边框 4px（accent bar，不是全框）
- 内容：一句话，weight 600，近黑
- 放在视觉流的终点，不在中间

---

## Template

`docs/preview-intj.html` — v2 参考实现（2026.06）

---

## Prompt Keywords

```
light gray-white background #F7F7F5,
clean precise thin lines 1px near-black,
cold blue #2563EB only on primary framework nodes,
geometric shapes with 4px corner radius,
strict visual hierarchy primary node larger than secondary,
deductive layout framework at top cascading to details,
labeled arrows with logical operators,
no hand-drawn texture no decorative elements no icons,
structured print-style typography not handwriting,
conclusion bar: full-width block with 4px blue left border,
high information density with clear hierarchy
```

## 与其他风格的关键区别

| 维度 | INTJ | macaron (INFP) | vivid-lineArt |
|---|---|---|---|
| 背景 | 浅灰白 | 暖奶油 | 纯白 |
| 色彩逻辑 | 语义色（冷蓝=核心）| 氛围色（多色=温暖）| 双色（teal=结构）|
| 线条 | 精确细线 | 手绘有机 | 手绘有机 |
| 字体感 | 印刷体感 | 手写感 | 手写感 |
| 布局重心 | 框架居首 | 多区块平权 | 网格等权 |
| 收口方式 | 强结论框（accent bar）| footer 标注 | 底部框 |

## Template

`templates/image-card/intj-prompt-base.md`
