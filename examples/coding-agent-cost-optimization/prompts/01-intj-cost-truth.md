Create a minimalist editorial infographic in portrait 2:3 ratio.

## Visual Style
Editorial data report aesthetic. Cold white background, deep navy and cold blue as the only colors, large bold numbers as visual anchors, strict grid layout, typographic hierarchy doing all the work. Feels like a McKinsey chart page or an Economist data spread — authoritative, cold, precise. NOT hand-drawn. NOT warm. NO organic shapes.

## Canvas & Colors
- Background: cold white #F5F7FA
- Primary accent: deep navy #1A3A7A (title, key numbers, section bars)
- Secondary accent: cold blue #2A5CAA (borders, chart fills, dividers)
- Light fill: ice blue #EBF0FA (row backgrounds, subtle tints)
- Body text: dark blue-gray #1A1C2A
- Secondary text: slate #8A9AB0
- Divider lines: 1px cold blue #2A5CAA

## Layout

**Header** (full-width, white background)
- Eyebrow: small caps, slate gray, letter-spacing wide: CODING AGENT · 成本解构
- Main title: ultra-bold, deep navy: 钱花在哪里
- Subtitle: regular, slate: 你以为优化 output，其实应该优化 input
- Full-width 2px divider line below

**Data anchor row** (3 columns, large numbers as visual anchors)
Each column: huge number in deep navy (ultra-bold) + small label below in slate
- Left: 93–99% / Input token 占每轮 API 调用的比例
- Center: 10x / Prompt Cache 让 cached input 便宜的倍数
- Right: $5 vs $0.50 / Opus 4.6 普通输入 vs 缓存输入（per MTok）

**1.5px full-width divider**

**Two-column comparison section**
Section label: small caps bold, cold blue: PREFILL vs DECODE
Left column header: bold, ice blue fill: PREFILL（最贵）
Left column body: compact body text
- 一次性处理全部 input tokens
- 计算量 O(n²)，随上下文平方增长
- 对应费用：Input token 费用
Right column header: bold, ice blue fill: DECODE（逐 token）
Right column body: compact body text
- 逐个生成 output token
- 每步只算新 token，线性增长
- 对应费用：Output token 费用（单价 5×）

**1.5px full-width divider**

**SO WHAT section**
Section label: bold small caps, deep navy: SO WHAT
Four full-width rows, each with ice blue background and thin left 3px navy border:
→ Output 单价是 input 的 5 倍，但 output 只占总 token 的 1–7%——优化方向完全不对称
→ 不要问「怎么少用 AI」，要问「怎么让每次计算都命中 Cache」
→ 最高杠杆动作：固定前缀顺序，一次配置，长期受益
→ 上下文越稳定，Cache 命中率越高，成本越低——这是架构问题，不是习惯问题

**Footer insight bar** (full-width, deep navy fill, white text)
Left: 「用得少」不如「用得稳」
Right: zhenjia.dev · readable-and-shareable

## Typography Rules
- Large numbers: ultra-bold, deep navy — visual anchors
- Title: ultra-bold, deep navy
- Section labels: bold small caps, letter-spacing 0.15em, cold blue
- Body: compact regular, dark blue-gray
- ALL SANS-SERIF GEOMETRIC — Helvetica, Inter, or similar

## Absolutely No
- Hand-drawn textures or sketch lines
- Warm colors of any kind
- Rounded organic blobs or speech bubbles
- Decorative icons or illustrations
- Colors beyond deep navy + cold blue
