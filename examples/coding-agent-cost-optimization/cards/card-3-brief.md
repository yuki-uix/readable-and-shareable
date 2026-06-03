# Card 3 · 工具选型

**核心问题**：每个方向具体用什么工具？怎么选？

**关键对比**：

Select 方向：
- grep：零配置、极新鲜、全格式覆盖；代价是 token 消耗高（搜 200 行，3个有效）
- LSP：编译器级精度，find-references 一步到位；代价是资源占用大、动态语言支持差
- CLAUDE.md：确定性最高，Agent 直接读；代价是需要人工维护、会 context drift

Compress 方向：
- RTK：最简单，一行安装，CLI 输出压缩 80%；只管 Bash 输出
- lean-ctx：全通道覆盖（Shell + 文件读取 + MCP）；需要理解 read modes
- DCP：选择性剪枝，保留 session 可回溯；AGPL license 需注意

Isolate 方向：
- Haiku：探索 / 搜索任务，比 Opus 便宜 15 倍
- Sonnet：实现层任务
- Opus：架构 / 安全审查，做错了代价高

**布局**：左侧方向标签 + 右侧横向工具对比行（名称 / 适用场景 / 注意点）
