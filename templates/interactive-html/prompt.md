# Interactive HTML 生成 Prompt

用于指导 Claude 将文章内容填入 `template.html`，生成可分享的交互式地铁图。

## 适用场景

文章同时具备以下特征时使用此模板：
- 有多条并行的「路线」或「方向」（2-5条）
- 每条路线下有 3-6 个具体操作或概念（「站点」）
- 每个站点有「为什么」和「怎么做」两层内容
- 可选：有数值型的进展数据（成本/性能的优化步骤）

不适合：纯叙事型文章、只有一条线的简单列表、概念之间关系复杂（用知识图谱代替）。

---

## 使用方式

将以下 prompt 发给 Claude，附上文章全文：

---

```
请将这篇文章的内容填入交互式 HTML 地铁图模板，生成完整的 HTML 文件。

## 你需要做的事

1. 分析文章结构，识别 2-5 条「主线」（对应地铁线路）
2. 每条主线下提取 3-6 个「站点」（具体方法/工具/概念）
3. 为每个站点写：
   - s-name：2-6 字的简短名称
   - s-badge：副标签（工具名、数字、关键词，≤8字）
   - title：完整标题（8-20字）
   - why：为什么重要，背景和原理（50-100字，保留原文的数字和数据）
   - tips：3条具体操作建议（每条≤40字，保留原文的命令/工具名）
4. 如果文章有量化的优化步骤（成本/性能/效率的前后对比），填写 METRIC_STEPS
5. 为每条线路选择颜色主题：s-blue / s-green / s-amber / s-purple / s-gray
6. 填写 PAGE_TITLE、PAGE_DESCRIPTION、SOURCE_URL、SOURCE_LABEL、AUTHOR、VIZ_CREDIT

## 颜色选择建议
- s-blue：核心/首要路线
- s-green：输入/选择类操作
- s-amber：压缩/优化类操作
- s-purple：架构/系统级操作
- s-gray：辅助/外置类操作

## 质量要求
- why 字段必须保留原文的具体数字（如"节省 45%"、"8-10k tokens"）
- tips 字段要具体到可执行，不写"考虑使用"，要写"运行 xxx 命令"
- s-badge 是视觉锚点，要让人一眼知道这个站点在讲什么
- 每条线路的 rail-line 颜色要和 station 颜色系一致

## 输出
直接输出完整 HTML 文件，不需要解释。文件要求自包含、无外部依赖。

[在此粘贴文章全文]
```

---

## 模板文件

`template.html` — 填入数据即可使用，JS 逻辑部分不需要修改。

## 分享

生成完成后，上传到 [sharehtml.zhenjia.dev](https://sharehtml.zhenjia.dev)，获得 7 天有效的分享链接。
如需长期托管，在 [lifeodyssey/share-html](https://github.com/lifeodyssey/share-html) 提 issue。
