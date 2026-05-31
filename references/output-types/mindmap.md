# Output Type: Mindmap

## Purpose

Show hierarchical or relational structure. Best for readers who want to understand how concepts connect before reading the full article.

## When to Use

- Article has clear heading hierarchy or nested concepts
- Structure type is **Hierarchical** or **Relational**
- Audience wants a navigable overview, not a summary

## When NOT to Use

- Article is primarily narrative or argumentative — mindmap shows skeleton but loses reasoning chain
- Article has more data/numbers than concepts — use Interactive HTML instead

## Layout Rules

- Central topic at top or center
- Branches expand outward or downward
- Each branch = one major heading or concept cluster
- Sub-branches = supporting points, examples, sub-concepts
- Maximum 3 levels of nesting (root → branch → leaf)
- No prose — labels only, ≤ 8 words per node

## Content Rules

- Extract headings and key terms verbatim from article
- Do not invent new concept names
- Each leaf node must trace back to source content
- Relationships shown by position, not arrows (arrows = concept map, not mindmap)

## Output Format

Markdown indented list — renderable by [Markmap](https://markmap.js.org/repl):

```markdown
# Article Title

## Branch 1
- Sub-point A
  - Detail
- Sub-point B

## Branch 2
- Sub-point C
- Sub-point D
```

## Template

`templates/mindmap/prompt.md`

## Share Path

- Markmap REPL: paste Markdown at markmap.js.org/repl for instant preview
- 幕布 (Mubu): export as `.otml` — see `templates/mindmap/` for format spec
