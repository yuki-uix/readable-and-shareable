Clean editorial decision flowchart. Warm cream background (#FAF8F3). Deep indigo (#3D3580) as single accent color. Black ink lines and arrows. Portrait ratio 2:3. Style: rounded rectangle nodes for statements and conclusions, diamond nodes for decision questions. Clean typographic hierarchy, no icons, no decorative elements. Like a Korean research infographic — structured, minimal, readable.

---

TITLE (top, large bold indigo, centered):
你的 AI 记忆系统
真的需要数据库吗？

Small subtitle below (gray): 一张自测决策图

Thin horizontal divider.

---

START NODE — top center, small indigo fill rounded rectangle, white text, compact size (smaller than decision nodes):
用 markdown 存 AI 记忆？

Arrow pointing down.

---

DECISION 1 — diamond node, indigo outline, black text:
你的记忆条目
会超过几百条吗？

Arrow left labeled: 不会
Arrow right labeled: 会

---

LEFT BRANCH (不会) — leads to conclusion box:
Rounded rectangle, light indigo fill, black text:
结论 A
Markdown 够用
便利贴有便利贴的场景
保持简单，不要过度工程

---

RIGHT BRANCH (会) — arrow pointing down to Decision 2:

DECISION 2 — diamond node, indigo outline, black text:
需要多个 agent 并发写入
或跨条目关系查询吗？

Arrow left labeled: 不需要
Arrow right labeled: 需要

---

LEFT BRANCH (不需要) — leads to conclusion box:
Rounded rectangle, light indigo fill, black text, generous line height matching 结论 A:
结论 B
升级到 SQLite

单文件数据库，零服务器
可查询、可索引、仍然简单

---

RIGHT BRANCH (需要) — leads to conclusion box:
Rounded rectangle, indigo fill, white text (most prominent):
结论 C
需要图数据库
SQLite + Kuzu
多跳关系查询
并发写入不冲突

---

BOTTOM — thin top border, centered:
Bold black: 「便利贴不是数据库。知道区别，才知道何时升级。」
Small gray: 原文：Limited Edition Jonathan · via readable-and-shareable
