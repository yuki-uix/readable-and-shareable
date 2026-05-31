# Sketchnote Design Language · 元素语库

基于四张参考图的审美提取，记录哪些维度可以跨风格混用、哪些必须保持系统内统一。

参考来源：
- **图1** Lage der Nation（德国播客）— 多色块分区型
- **图2** The Story of a Workshop — 单色时间线叙事型
- **图3** Sketchnote Handbook — 高密度自由流动型
- **图4** Ramzi Rizk / AI Talk — 双色中心发散型

---

## 一、系统层（System Layer）— 必须统一，不可跨风格混用

同一张图内，以下维度只能有一套逻辑。混用会造成视觉语言断裂，让读者感知到「这张图不是一个人做的」。

### 1. 色彩系统

每张图只能有一套色彩逻辑，选其一：

| 色彩逻辑 | 特征 | 参考 |
|---|---|---|
| **多色分区**（multi-zone） | 每个 zone 有独立背景色，颜色区隔内容区域 | 图1 蓝橙米黄 |
| **单色高亮**（mono-accent） | 黑白底 + 一个强调色只标重点，背景不填色 | 图2 琥珀黄 / 图4 黄黑 |
| **macaron 低饱和多色** | 多色但全部低饱和同亮度，整体柔和统一 | v1 现有风格 |

⚠️ **不可混**：「多色分区背景」+「单色高亮重点」放在同一张图 → 强调逻辑互相打架，读者不知道颜色在说什么。

### 2. 线条风格

同一张图内线条粗细可有变化，但手绘感必须一致：

- ✅ 全部手绘有机线条（wobble, imperfect）
- ✅ 粗线框重点区域 + 细线做说明
- ❌ 部分区域手绘，部分区域完美几何线条

### 3. 插画角色风格

如果有插画人物或图标，同一张图只能有一种角色气质：

- **功能性 icon**：极简线条，无表情，服务于说明内容（图1风格）
- **有个性小人**：有特征（如图4的脑袋帽子小人），重复出现形成角色感
- ❌ 不能混：精致小人 + 极简 icon 放在一起，两套「角色语言」共存

---

## 二、手法层（Technique Layer）— 可以跨图借用

以下维度属于「做法」，不属于某套系统，可以自由从不同参考图借鉴并共存于同一张图。

### 1. 布局结构手法

| 手法 | 描述 | 来源 | 适用场景 |
|---|---|---|---|
| **分区块** | 有边框的色块区域，内容各自独立 | 图1 | 多个并列概念，互不依赖 |
| **时间线主干** | 竖向主轴，内容向两侧延展 | 图2 | 有时序关系的内容 |
| **中心发散** | 核心概念居中，箭头向外辐射子概念 | 图4 | 有中心结论 + 多个支撑项 |
| **自由流动** | 无区块，靠字号和箭头自组织 | 图3 | 密集笔记，无严格层级 |
| **局部混排** | 某个 zone 内用发散，其他 zone 用列表 | — | 复杂内容需要多种关系类型 |

✅ **同一张图里可以混**：例如 Zone ①② 用分区块，Zone ⑤ 用中心发散。布局手法不属于「系统」，是局部决策。

### 2. 字体层级处理

| 手法 | 描述 | 来源 |
|---|---|---|
| **大小对比** | 标题极大、正文极小，靠字号建立层级（不靠颜色）| 图1 |
| **框选关键词** | 关键词加矩形框或下划线单独强调 | 图3 |
| **全大写关键词** | 核心概念全大写，其余正常 | 图4 |
| **手写混印刷** | 部分文字模拟印刷体（更规整），部分模拟草书 | 图3 |

✅ 以上可以在同一张图内混用。

### 3. 箭头与连接线

| 手法 | 描述 |
|---|---|
| **弯曲手绘箭头** | 表达流程或因果关系，有方向性 |
| **双向箭头** | 表达对比或相互关系 |
| **虚线连接** | 表达弱关联或补充说明 |
| **蜿蜒路径** | 像图2 的黄色「路」，表达时间连续性 |

✅ 同一张图内可以混用不同箭头类型，只要粗细风格一致。

### 4. 对话气泡与 callout

| 手法 | 描述 | 来源 |
|---|---|---|
| **云形气泡** | 承载补充说明、引用、次要信息 | 图4 |
| **矩形 callout** | 结论性语句的高亮框 | 图1、图3 |
| **语音气泡** | 表达「说话」的角色台词 | 图4 |

✅ 不同 callout 形式可以混，靠形状区分信息层级（云形=补充，矩形=结论）。

---

## 三、实践建议：如何组合

### 建议的「稳定组合」

**C · vivid-lineArt 双色线稿（新增风格）**
- 色彩系统：纯白背景 + 单一 teal #00B5B5 + 黑色，严格双色
- 布局：中心网格 + 侧边注释向内指，或顶部向下流
- 字体：混合大小写标题大字、关键词下划线、数字放边缘
- 插画：极简 2-3 笔线条 icon，放在盒子内部
- 箭头：黑色手绘弯曲，动词标签写在箭头上
- 参考文件：`references/styles/vivid-lineArt.md`
- Prompt 模板：`templates/image-card/vivid-lineArt-prompt-base.md`

**A · macaron 多区块（当前风格）**
- 色彩系统：macaron 低饱和多色
- 布局：分区块为主，局部用中心发散（Zone ⑤）
- 字体：大小对比 + 框选关键词
- 插画：功能性 icon（简笔）
- 来源混用：借图1字体处理 + 借图4局部布局

**B · 黑白单色高亮**
- 色彩系统：黑白 + 单一橙色/黄色高亮
- 布局：自由流动 or 中心发散
- 字体：大小对比 + 全大写关键词
- 插画：有个性小人（图4风格）
- 来源混用：借图3字体密度 + 借图4角色感

### 不建议的组合

- ❌ macaron 多色背景 + 单色高亮逻辑 → 颜色系统混乱
- ❌ 精致小人 + 极简 icon 混放 → 插画角色断裂
- ❌ 时间线主干 + 平行分区块 → 视线不知道怎么走

---

## 四、prompt 关键词速查

在写 AI 图像生成 prompt 时，以下词组可直接使用：

**手绘感**
`hand-drawn wobble lines`, `organic irregular edges`, `sketch-notes style`, `imperfect hand-painted fills`, `visible pen texture`

**字体层级**
`large bold handwritten title`, `small neat handwritten body text`, `extreme size contrast between title and body`, `keyword boxed with hand-drawn rectangle`

**布局**
`zone-based layout with color blocks`, `radial mind-map from center concept`, `free-flow sketchnote no grid`

**箭头**
`curvy hand-drawn arrows`, `double-headed comparison arrows`, `flowing path connecting sections`

**气泡**
`cloud-shape callout bubble`, `speech bubble for secondary info`, `hand-drawn rectangular highlight box`

**色彩约束**
`macaron pastel palette all same saturation`, `single accent color only on key nodes`, `warm cream background #F5F0E8`
