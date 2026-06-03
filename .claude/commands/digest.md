# Skill: /digest — 文章解读与卡片生成

## 定位

输入一篇文章，走完从「深度解读」到「可视化卡片」的完整流程。

内部由三个专职模块组成，按需依次调用：
- **digest-read** — 摄入 + 解读 + Review
- **cardplan** — 卡片规划 + 视觉语言选择
- **cardgen** — prompt 写作 + 图片生成

---

## 调用方式

```
/digest {文章 URL / 文件路径 / 粘贴文本}   ← 全流程，从头跑
/digest cardplan {slug}                    ← 从规划阶段继续（已有 digest.md）
/digest cardgen {slug}                     ← 从生成阶段继续（已有 card-plan.md）
/digest cardgen {slug} {N}                 ← 重新生成第 N 张卡
```

---

## 编排逻辑

### 全流程（默认）

输入是文章时，依次执行：

**Phase 1 — 解读**
读取并执行 `.claude/skills/digest-read.md`。
完成条件：用户确认解读准确（说「继续」）。

**Phase 2 — 规划**
读取并执行 `.claude/skills/cardplan.md`。
完成条件：用户确认卡片拆分方案和视觉风格。

**Phase 3 — 生成**
读取并执行 `.claude/skills/cardgen.md`。
完成条件：所有卡片生成完毕并确认。

---

### 断点续跑

若已有中间产物，从对应阶段继续：

| 命令 | 前提 | 执行模块 |
|---|---|---|
| `/digest cardplan {slug}` | 已有 `examples/{slug}/digest.md` | cardplan |
| `/digest cardgen {slug}` | 已有 `examples/{slug}/card-plan.md` | cardgen |
| `/digest cardgen {slug} {N}` | 已有 `examples/{slug}/card-plan.md` | cardgen（单张） |

若前提文件不存在，提示用户从哪一步开始。

---

## 文件结构

每篇文章的产出物统一存放：

```
examples/{slug}/
├── digest.md        ← Phase 1 输出
├── card-plan.md     ← Phase 2 输出
├── prompts/         ← Phase 3 中间产物
└── cards/           ← Phase 3 最终产物
```

---

## 边界

- 对用户只暴露 `/digest` 一个命令
- 三个内部模块的实现细节对用户不可见
- 任意阶段可单独重跑，不影响其他阶段的产物
