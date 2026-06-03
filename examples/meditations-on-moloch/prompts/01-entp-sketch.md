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
没有坏人，也会有坏结果
副文：——Moloch 不是恶魔，是规则本身

## Branch Node — Top Left — THIS IS THE KEY NODE, must stand out visually（small label tag reads:「关键——」in orange color, box border: thick orange 3px stroke NOT black, font slightly larger than other branch nodes）
指责任何人，都是在问错问题

## Branch Node — Top Right（「如果——」label，black border）
鱼塘里每个人都是理性的，结果是集体灾难

## Branch Node — Middle Left（「如果——」label，black border）
「提高意识」「呼唤道德」找错了层次

## Branch Node — Middle Right（「还有——」label，black border）
没有指挥者，没有主谋，没有谈判对象

## Orphan Node（dashed oval，bottom center，keep text short to avoid bad line breaks）
那反抗什么？

## Scatter Notes（two small warm-gray boxes, side by side at bottom, each box shows exactly ONE line of text, do NOT duplicate or repeat any text）
- Left box: 也许真正的问题是结构，不是人心
- Right box: 也许善良的人也会建造地狱……？

## Footer（centered italic, clearly separated from scatter notes above with generous whitespace of at least 20px）
Moloch 是 Allen Ginsberg 诗里的古代恶神，Scott Alexander 用它命名一种文明陷阱

## Attribution（small text, bottom of card, two lines）
Line 1: 原文：Meditations on Moloch · Scott Alexander
Line 2: via readable-and-shareable
