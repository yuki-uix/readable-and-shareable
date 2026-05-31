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
