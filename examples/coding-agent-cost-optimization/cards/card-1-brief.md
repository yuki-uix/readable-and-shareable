# Card 1 · 成本真相

**核心问题**：为什么 AI coding 这么贵？钱到底花在哪里？

**关键数字**：
- 93-99%：每轮 API 调用中 input token 占比
- 10x：Prompt Cache 让 cached input 比普通 input 便宜 10 倍
- $5 vs $0.50：Opus 4.6 普通 input vs cached input（per MTok）

**核心洞察**：
- Prefill 阶段（一次性处理所有 input）是计算量最大、最贵的阶段
- Output 单价是 input 的 5 倍，但 output 只占 token 总量的 1-7%
- 因此：优化 input 的收益远大于优化 output——方向完全不对称

**布局**：数字锚点行（3个大数字）+ Prefill vs Decode 对比 + SO WHAT
