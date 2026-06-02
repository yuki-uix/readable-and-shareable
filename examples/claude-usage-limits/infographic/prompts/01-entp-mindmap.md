Create a hand-drawn mind map card following these specifications:

## Image Specifications

- **Type**: Mind map card
- **Layout**: radial-mindmap
- **Style**: hand-drawn-sketch
- **Aspect Ratio**: 1:1
- **Language**: zh (Chinese)

## Core Principles

- Center node radiates outward to 4 branch nodes, no fixed reading order
- All text must be clearly legible Chinese
- Arrows are loose and slightly curved, not ruler-straight
- No visual hierarchy implied — all branches feel equally important
- Generous whitespace, not cluttered

## Layout Guidelines (radial-mindmap)

Square canvas. One large center node, 4 branch nodes around it, one dashed orphan node at bottom:

```
[但是节点]              [颠覆节点]
    ↖                      ↗
         [中心命题节点]
    ↙                      ↘
[如果节点]              [还有节点]

              [虚线孤儿节点]

  [旁注1]          [旁注2]

        [底部反问]
```

## Style Guidelines (hand-drawn-sketch)

Hand-drawn sketch aesthetic on warm cream paper. Single accent color: burnt orange (#E85D00).

Color Palette:
- Background: Warm cream (#FAFAF8)
- Center node fill: Burnt orange (#E85D00), white text
- Branch nodes: White fill, dark hand-drawn border (2px black sketch line)
- 「但是」and「颠覆」nodes: thin orange border instead of black
- Orphan node: dashed gray oval border, no fill
- Scatter notes: light warm gray (#F0F0EC) background
- All text: deep charcoal (#1A1A18)

Visual Elements:
- Slightly imperfect, hand-drawn rectangular boxes with sketch borders (not perfectly straight)
- Curved sketchy arrows connecting center to each branch, with arrowheads
- Arrow from center to orphan is dashed
- Each branch node has a small label tag at top-left corner (「但是——」「颠覆——」「如果——」「还有——」) in small uppercase style
- No decorative icons or illustrations, pure text + geometry

Typography:
- Center node: 16px bold white Chinese text, 2 lines
- Sub-caption in center: 12px semi-transparent white, italic
- Branch node labels: 10px uppercase gray tag
- Branch node text: 14px regular Chinese
- Orphan text: 13px italic gray
- Scatter notes: 12px italic gray
- Footer: 12px italic gray, centered

---

Generate the card based on the content below:

## Center Node (orange background, white text)
你在为「说过的话」反复付费
副文：——文章给的解法对吗？

## Branch Node — Top Left（「但是——」label，orange border）
用 Haiku 多轮迭代，可能比 Opus 一次更贵

## Branch Node — Top Right（「颠覆——」label，thicker orange border 3px，slightly larger font than other nodes to signal higher visual weight）
你学的那 20 条，本来不该你来学

## Branch Node — Middle Left（「如果——」label，black border）
每 20 条重开，深度研究的隐性共识就没了

## Branch Node — Middle Right（「还有——」label，black border）
「选对模型」本身就是一个新的认知负担

## Orphan Node（dashed oval，bottom center，keep text short to avoid bad line breaks）
自动压缩来了，这些还有用吗？

## Scatter Notes（two small warm-gray boxes, side by side at bottom, each box shows exactly ONE line of text, do NOT duplicate or repeat any text）
- Left box: 也许这些技巧，产品迭代后就过期了
- Right box: 也许真正的问题是：省下来的时间去哪了？

## Footer（centered italic, clearly separated from scatter notes above with generous whitespace of at least 20px）
文章给了 20 条建议，但省下来的 token 你真的用对了吗？

## Attribution（small text, bottom of card, two lines）
Line 1: 原文：How to Stop Hitting Claude Usage Limits · Ruben's Substack
Line 2: via readable-and-shareable
