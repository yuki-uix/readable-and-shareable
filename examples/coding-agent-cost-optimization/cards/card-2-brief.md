# Card 2 · 框架全图

**核心问题**：怎么系统性地优化？有没有一个完整的思维框架？

**框架**：Context Engineering 四个方向

- **Select**：让正确的信息进来（grep / LSP / CLAUDE.md / Index）
- **Compress**：减少已有上下文的 token 数（RTK / lean-ctx / DCP）
- **Isolate**：拆任务 + 换便宜模型（sub-agent / Haiku for exploration）
- **Write**：把信息搬到上下文之外（SPEC.md / planning-with-files）

**核心洞察**：
- Select 和 Write 是预防性的（减少进入上下文的量）
- Compress 和 Isolate 是治疗性的（处理已经膨胀的上下文）
- 四个方向不是并列的——Select 是最高杠杆，最先做

**布局**：2×2 网格，每格：方向名 + 一句话定义 + 代表工具
