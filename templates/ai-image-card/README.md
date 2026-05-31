# AI Image Card — 使用说明

手绘风 AI 图片卡，通过 DashScope 或 OpenAI DALL-E 3 生成 PNG，无需安装额外工具。

## 前置条件

配置以下任一 API key（二选一）：

```bash
# 国内用户推荐（DashScope）
export DASHSCOPE_API_KEY=your_key
# 获取：https://dashscope.aliyuncs.com → 控制台 → API Keys

# 海外用户（OpenAI DALL-E 3）
export OPENAI_API_KEY=your_key
# 获取：https://platform.openai.com/api-keys
```

建议写入 `~/.zshrc` 或 `~/.bash_profile` 永久生效。

## 使用方式

在 Claude Code 终端中触发：

```
/viz
```

选择产出形式：**3b. AI 图片卡（手绘风）**

Claude 会自动：
1. 检测 API key
2. 提取文章核心观点（4–6 条）
3. 写入 prompt 文件
4. 调用 `scripts/gen-ai-card.sh` 生成 PNG

## 直接调用脚本

```bash
./scripts/gen-ai-card.sh \
  --prompt examples/my-article/ai-image-card/01-sketch-notes-my-article.md \
  --output examples/my-article/ai-image-card/01.png \
  --ar portrait-3-4
```

## 风格说明

| 风格 | 背景 | 适合场景 |
|---|---|---|
| sketch-notes | 暖奶油纸张纹理 | 概念讲解、知识总结、技术文章 |
| chalkboard | 黑板深色背景 | 强对比场景、教育主题 |

## 已知局限

- **中文字符渲染**：AI 图像模型对中文渲染不稳定，已将字数压缩至最小（标题 ≤8 字，说明 ≤20 字）。如仍出现字符截断，重新生成该张卡片。
- **Footer 可见性**：`via readable-and-shareable` 标注已写入 prompt，但 AI 渲染质量不保证，建议人工确认。
- **DALL-E 3 + chalkboard**：实验性组合，渲染结果可能与预期有较大差异。
