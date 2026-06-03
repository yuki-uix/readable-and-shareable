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
道德解法，找错了层次
副文：——结构性问题需要结构性出路

## Branch Node — Top Left（「颠覆——」label，thicker orange border 3px，slightly larger font than other nodes to signal higher visual weight）
结构主义乐观，也是一种没有路径的信仰

## Branch Node — Top Right（「但是——」label，orange border）
需要比 Moloch 更强的对齐力量，才能胜出

## Branch Node — Middle Left（small orange label tag reads exactly:「如果——」, black border box）
问题是结构的，解法也必须是结构的

## Branch Node — Middle Right（small orange label tag reads exactly:「还有——」, black border box）
AI 如果不被对齐，就是最强的 Moloch

## Orphan Node（dashed oval，bottom center，keep text short to avoid bad line breaks）
谁来建这个对齐力量？

## Scatter Notes（two small warm-gray boxes, side by side at bottom, each box shows exactly ONE line of text, do NOT duplicate or repeat any text）
- Left box: 也许改变规则比改变人心更快
- Right box: 也许 Elua 本身也会被劫持……？

## Footer（centered italic, clearly separated from scatter notes above with generous whitespace of at least 20px）
解法层次换了，可执行路径还是空的

## Attribution（small text, bottom of card, two lines）
Line 1: 原文：Meditations on Moloch · Scott Alexander
Line 2: via readable-and-shareable
