# INTP 手绘笔记风格 — 推导草稿

## 核心气质
手绘逻辑拆解图。像在横线笔记本上画的论证链——有命题框、菱形判断节点、双路径对比，最后以暂定结论或开放问题收口。不追求美观，追求论证链路的完整性。

参考案例：`examples/ai-one-winner/infographic/prompts/01-intp-logic.md`

---

## 配色
- 背景：暖白带横线笔记纸感
- 单一强调色：暖琥珀 #E8A020（菱形判断节点、关键对比边框）
- 普通节点：白填充 + 黑手绘边框
- 文字：深炭灰 / 黑色

**严格单色系**：只用琥珀作为唯一强调色。

---

## 布局骨架
从上到下的逻辑流：
- 顶部：大号标题（论点 + 副标题说明拆解目的）
- 主体：命题框 → 连线箭头 → 判断节点 → 路径分叉
- 菱形节点（琥珀填充）：关键判断问题
- 双列对比（VS 结构）：两条路径并排，一正一反
- 底部：大号暂定结论句，小号来源标注

---

## 线条语言
- 推导箭头：手绘弧线，有方向
- 框架：手绘矩形，略不规则
- 条件分支：分叉连线
- 否定路径：穿越划线（被推翻的想法）

---

## Prompt 关键词

```
Hand-drawn logic diagram on notebook paper. Black ink sketchnote style. Warm amber (#E8A020) as single accent color. Background: off-white paper with visible horizontal ruled lines.
Layout flows top to bottom: title → proposition boxes → amber diamond judgment node → two-column VS comparison → conclusion.
```

---

## 不得出现
- 强收口（结论永远是暂定的，带问号）
- 鲜艳多色配色
- 完全对称布局
- 行动指令（那是 ENTJ）
