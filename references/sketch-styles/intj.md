# INTJ 手绘笔记风格 — 框架演绎

> ⚠️ 注意：INTJ **不适合** sketch-note 手绘美学。
> 正确路线是「极简信息设计」（editorial minimal design）——精确网格、冷色、数字锚点。

---

## 核心气质
高端商业报告页。冷、精、有权威感。像 McKinsey 图表页或《经济学人》数据报道——严格网格、充足留白、字体层级承担全部视觉工作。没有任何手绘感、温暖感或装饰性元素。

## 配色
- 背景：冷白 #F5F7FA
- 主色（标题 / 大字数字 / 深色条）：深海蓝 #1A3A7A
- 次色（边框 / 分隔线 / 标签）：冷蓝 #2A5CAA
- 浅填充：冰蓝 #EBF0FA（三栏底色、行背景）
- 正文：深灰蓝 #1A1C2A
- 次要标注：石灰 #8A9AB0

## 布局骨架（参考 MKT1 案例 v5）
自上而下五个区块：

1. **Header**：eyebrow 小字 + 超大主标题（36-40px ultra-bold）+ 副标题 + 全宽分隔线
2. **数字锚点行**：3 列，每列一个超大数字（44-48px bold）+ 小字说明——这是「洞察感」的来源
3. **框架三栏**：1px 冷蓝边框，列头有冰蓝填充，序号 ①②③ + 箭头 → 表达递进关系
4. **隐藏假设**：左对齐标签 A/B/C + 箭头 → 说明，字重轻于行动区
5. **SO WHAT**：全宽行，左 3px 深蓝细线，浅蓝行背景，字重加粗——视觉上最重的内容区
6. **收口 bar**：深海蓝全宽，白字洞见句

## 线条语言
- 所有线条：直线，无手绘抖动
- 边框：1px 实线
- 分隔线：1.5px 冷蓝全宽水平线
- SO WHAT 左边线：3px 深蓝实线（细线，不是色块）
- 无有机曲线，无圆角气泡

## 排版特征
- 大字数字：44-48px ultra-bold，视觉锚点
- 主标题：36-40px ultra-bold
- 区块标签：12-14px bold small caps，letter-spacing 0.15em
- 正文：11-12px regular
- 全程 geometric sans-serif（Helvetica / Inter 感），禁止手写体

## 装饰词汇
- 数字本身是最大的装饰
- 全大写小字区块标签
- 1px / 1.5px 分隔线
- 序号 ① ② ③ + 箭头 → 表达结构关系
- 无星星、无插画、无圆形气泡

## 生成方式
使用 `scripts/gen-ai-card.sh`，比例 `--ar 3:4`
参考 prompt：`examples/mkt1-paid-ads/prompt-intj-minimal.md`
参考输出：`examples/mkt1-paid-ads/image-card-intj-minimal-v5.png`

## 不得出现
- 手绘线条、sketch texture、brush stroke
- 暖色（橙、黄、粉）
- 圆形气泡、有机曲线
- 任何「友好感」或「温暖感」的元素
- 颜色超过 2 种（深蓝 + 冷蓝，严格执行）
