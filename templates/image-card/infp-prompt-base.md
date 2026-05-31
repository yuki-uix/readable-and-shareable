# Prompt Base — INFP Style
# 认知偏好：归纳共鸣 · 叙事弧线 · 情绪色块 · 开放落点
# 工具：AI 图像生成（qwen-image-2.0-pro）
# 用法：替换 {{}} 占位符，GLOBAL RULES 保持不变

A warm handwritten-style infographic, portrait 2:3 ratio.
Style: journal / sketchnote — hand-drawn, organic, emotional. NOT geometric, NOT technical diagram.
Background: warm off-white #FFFDF7, like notebook paper.
Text: deep warm brown #2C2416, like ink pen.
Colors: 4 pastel zones — rose pink #FFE8EC · moss green #E8F4E8 · cream yellow #FFF3D6 · lavender blue #E8EEFF.
Each color = one emotional function (feeling / observation / association / question). NOT decoration.

=== PAGE PROPORTION RULES ===
- Opening (top 15%): one feeling or story that opens the piece — NOT a conclusion
- Main body (65%): 3–4 color-zone sections arranged organically, vertical flow with slight offsets
- Closing (20%): open-ended question or invitation, NOT a strong conclusion

=== VISUAL RULES ===
- Lines: hand-drawn, slightly wobbly, 1–2px, warm brown — NO straight ruler lines
- Boxes / color zones: organic edges, slightly uneven corners — NOT perfectly rectangular
- Arrows: curved hand-drawn lines, NO text labels on arrows, direction implies logic
- Numbers: circled ①②③ in hand-drawn style
- Emphasis: wavy underlines or color-wash highlights
- Small illustrations: 1–2 simple sketch figures or objects (plant / person / object), decorative only
- Typography: mix of regular and slightly italic text for warmth
- Fill rate: ≤ 65% — generous white space, let the reader breathe

=== OPENING SECTION (top 15%) ===
Start with a feeling, observation, or small story — NOT the conclusion.
Weight 600, warm brown, larger size:
  {{OPENING_HOOK}}

=== COLOR ZONE SECTIONS (main body) ===
Arrange 3–4 zones vertically with slight left/right offset for rhythm.
Each zone has one color and one emotional function:

Zone A — rose pink #FFE8EC (feeling / emotional anchor):
  Label: {{ZONE_A_LABEL}}
  Content: {{ZONE_A_CONTENT}}

Zone B — moss green #E8F4E8 (observation / fact):
  Label: {{ZONE_B_LABEL}}
  Content: {{ZONE_B_CONTENT}}

Zone C — cream yellow #FFF3D6 (association / free thought):
  Label: {{ZONE_C_LABEL}}
  Content: {{ZONE_C_CONTENT}}

Zone D — lavender blue #E8EEFF (question / unresolved):
  Label: {{ZONE_D_LABEL}}
  Content: {{ZONE_D_CONTENT}}

=== CLOSING SECTION (bottom 20%) ===
End with an open question or invitation — NOT a strong single-sentence conclusion.
  {{CLOSING — a question or "也许……" style sentence}}

Small secondary text (gray, 11px):
  via readable-and-shareable

=== GLOBAL RULES ===
- Background: #FFFDF7 warm off-white everywhere
- NO cold colors (no pure blue, no gray tones)
- NO straight lines, NO perfect rectangles, NO geometric shapes
- NO icons from icon sets — only hand-drawn sketch style illustrations
- Arrows: curved, unlabeled, directional only
- Color zones: each zone uses ONE pastel color as fill, warm brown border
- Typography: warm brown #2C2416 for all text — NOT black
- Closing is always open-ended: a question, an invitation, or an unfinished thought
- All Chinese text: 4 characters or fewer per key term to reduce rendering errors
- Avoid complex characters — test with simpler synonyms if needed
