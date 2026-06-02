/**
 * 16种信息组织方式 — 风格数据
 * 每种风格对应一个子页面 docs/styles/?style={code}
 */
const STYLES_DATA = {
  intj: {
    code: "INTJ",
    name: "框架演绎",
    fullName: "框架演绎式",
    tagline: "先建框架，再填内容；读完知道「整个系统是怎么运作的」",
    description: "高密度的概念架构图。先抛出一个完整框架，再用具体内容填充每个格子。读者看完知道「这件事的全貌是什么」，而不是「我要做哪几步」。",
    fitFor: [
      "有多层概念嵌套的系统性文章",
      "需要建立整体认知再深入细节的内容",
      "技术架构、方法论、知识体系梳理",
      "长文中有多个相互支撑的核心论点"
    ],
    notFor: [
      "以个人感受或故事为主的叙事文章",
      "只有单一观点、无需系统化的短内容",
      "需要情感温度的话题",
      "步骤化操作指南（那是 ISFJ）"
    ],
    similarStyles: ["intp", "entj", "infj"],
    primaryColor: "#2A5CAA",
    accentColor: "#EBF0FA",
    previewImg: "../examples/intj-mkt1-paid.png",
    exampleImg: '../examples/intj-mkt1-paid.png',
    exampleSource: 'Paid Isn\'t Dead · MKT1 Newsletter · Emily Kramer',
    exampleLink: 'https://newsletter.mkt1.co/p/ads',
    tokens: {
      bg: "#F5F7FA",
      surface: "#EBF0FA",
      core: "#2A5CAA"
    }
  },
  intp: {
    code: "INTP",
    name: "推导草稿",
    fullName: "推导草稿式",
    tagline: "展示思维的推导过程，而不只是结论",
    description: "逻辑推导流程图。不直接给结论，而是展示「从命题出发，经过哪些推理步骤，得出什么结论」。读完感觉参与了一次思维实验。",
    fitFor: [
      "论证链条清晰的分析型文章",
      "有「如果…那么…」推理结构的内容",
      "反直觉观点需要一步步建立的文章",
      "学术思考、逻辑推演类内容"
    ],
    notFor: [
      "行动导向、需要明确结论的内容（那是 ENTJ）",
      "以情感共鸣为主的文章",
      "步骤手册类内容",
      "概念关系网络（那是 INFJ）"
    ],
    similarStyles: ["intj", "entp", "infj"],
    primaryColor: "#7A6000",
    accentColor: "#FFF8E6",
    previewImg: "../showcase-mbti-intp-v2.png",
    exampleImg: "../showcase-mbti-intp-v2.png",
    exampleSource: "What if there's only One Major AI Winner? · AI Supremacy",
    tokens: { bg: "#FFFDF5", surface: "#FFF8E6", core: "#7A6000" }
  },
  infj: {
    code: "INFJ",
    name: "意义连接",
    fullName: "意义连接式",
    tagline: "展示概念之间如何相互召唤，看见更大的图景",
    description: "概念关系网络。不展示步骤，不展示对比，而是展示「A 指向 B，B 转化为 C」的深层关系网。读完不是「我知道怎么做了」，而是「我看见了一个更大的图景」。",
    fitFor: [
      "概念之间有相互依存、矛盾共存关系的文章",
      "需要建立整体世界观而非操作路径的内容",
      "系统性矛盾分析（如成本与稳定性的权衡）",
      "哲学思考、深度洞察类内容"
    ],
    notFor: [
      "线性步骤流程（那是 ISFJ）",
      "强行动指令型内容（那是 ENTJ）",
      "纯逻辑推导（那是 INTP）",
      "概念节点少于4个的简单文章"
    ],
    similarStyles: ["infp", "intj", "entp"],
    primaryColor: "#5B3FA6",
    accentColor: "#EDE8F8",
    previewImg: "../preview-infj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F7F5FB", surface: "#EEEAF5", core: "#5B3FA6" }
  },
  infp: {
    code: "INFP",
    name: "叙事弧线",
    fullName: "叙事弧线式",
    tagline: "从感受出发，经过转折，到达开放感悟",
    description: "手绘温感信息图。像一封写给读者的信——从个人感受或困惑出发，经过探索和转折，到达开放式感悟。线条有意不整齐，留白多，读者可以把自己的感受填进去。",
    fitFor: [
      "有个人经历、情感转折的叙事文章",
      "以「我以为是X，后来发现是Y」为结构的内容",
      "需要引发共鸣而非传授知识的文章",
      "写给特定读者群体的「信」"
    ],
    notFor: [
      "技术架构、系统梳理类内容",
      "强调数据和逻辑的分析文章",
      "需要明确结论和行动指令的内容",
      "对比评测类文章"
    ],
    similarStyles: ["enfp", "infj", "isfp"],
    primaryColor: "#C05070",
    accentColor: "#FFE8EC",
    previewImg: "../showcase-mbti-infp-v2.png",
    exampleImg: "../showcase-mbti-infp-v2.png",
    exampleSource: "I Shook Hands with a Nobel Prize Winner · Ruben's Substack",
    tokens: { bg: "#FFFDF7", surface: "#FFE8EC", core: "#C05070" }
  },
  entj: {
    code: "ENTJ",
    name: "结论前置",
    fullName: "结论前置式",
    tagline: "核心判断在最前，证据在中间，行动指令收尾",
    description: "高管简报。结论在第一行，证据在后面，行动指令在最后。没有废话，没有感情色彩，只有「现状 → 判断 → 行动」。读完知道接下来该做什么。",
    fitFor: [
      "有明确结论和行动建议的决策类文章",
      "对比分析、方案评估类内容",
      "技术选型、架构决策报告",
      "需要快速传达核心判断的商业内容"
    ],
    notFor: [
      "开放式探索、没有明确答案的文章",
      "以情感共鸣为主的叙事内容",
      "步骤手册（那是 ISFJ）",
      "需要展示推导过程的内容（那是 INTP）"
    ],
    similarStyles: ["intj", "estj", "intp"],
    primaryColor: "#1B5E2A",
    accentColor: "#EBF3EB",
    previewImg: "../preview-entj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F8F8F6", surface: "#EEEDE8", core: "#1B5E2A" }
  },
  entp: {
    code: "ENTP",
    name: "辩证发散",
    fullName: "辩证发散式",
    tagline: "提出命题，展开正反论证，以开放反问收口",
    description: "发散型论证图。不给结论，而是抛出命题 → 正反论证 → 开放反问。读完不知道答案，但被激发了去思考的欲望。比 INTJ 更外向，比 INFP 更逻辑，比 ENTJ 更开放。",
    fitFor: [
      "有争议性、多方视角的话题",
      "「这件事没有标准答案」的思辨文章",
      "想激发读者思考而非传授结论的内容",
      "技术趋势预测、行业讨论类文章"
    ],
    notFor: [
      "需要明确操作步骤的内容",
      "已有定论的技术方案对比",
      "需要情感温度的叙事文章",
      "面向需要明确行动指南的读者"
    ],
    similarStyles: ["intp", "entj", "infj"],
    primaryColor: "#C05020",
    accentColor: "#FFF0E6",
    previewImg: "../showcase-mbti-entp-v2.png",
    exampleImg: "../showcase-mbti-entp-v2.png",
    exampleSource: "How to Stop Hitting Claude Usage Limits · Ruben's Substack",
    tokens: { bg: "#FEFAF5", surface: "#FFF0E6", core: "#C05020" }
  },
  enfp: {
    code: "ENFP",
    name: "星座聚焦",
    fullName: "星座聚焦式",
    tagline: "多个意义闪光点，连接成有意义的星座",
    description: "温暖的意义星图。从多个散落的意义闪光点出发，用「这些为什么重要」的线索把它们连接成一个有意义的星座。比 ENTP 更暖、更柔、更「关于人」。",
    fitFor: [
      "有多个并列意义节点、无明确主次之分的文章",
      "探讨「为什么重要」而非「怎么做」的内容",
      "成长反思、价值观探索类文章",
      "想让读者感受到整体意义的内容"
    ],
    notFor: [
      "有明确逻辑顺序的步骤类内容",
      "冷静分析、数据驱动型文章",
      "需要权威感的规范类内容",
      "单一核心观点的短文章"
    ],
    similarStyles: ["infp", "infj", "entp"],
    primaryColor: "#E8832A",
    accentColor: "#FFF0DC",
    previewImg: "../preview-enfp-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#FEFCF7", surface: "#FFF5E6", core: "#E8832A" }
  },
  enfj: {
    code: "ENFJ",
    name: "共情叙事",
    fullName: "共情叙事式",
    tagline: "以读者的感受为中心，建立情感共鸣后传递信息",
    description: "温暖的引导式叙事。先建立共情，再传递内容。读者感受到「被理解」，然后更容易接受文章的观点。适合面向特定读者群体的内容。",
    fitFor: [
      "面向特定读者痛点的内容",
      "需要先建立信任再传递信息的文章",
      "社区运营、用户教育类内容",
      "以「你一定也遇到过」为开头的文章"
    ],
    notFor: [
      "纯技术文档、无人情味的规范类内容",
      "以逻辑推导为主的分析文章",
      "需要冷静权威感的内容（那是 ISTJ）"
    ],
    similarStyles: ["infp", "enfp", "isfj"],
    primaryColor: "#2A7A5A",
    accentColor: "#E6F5EF",
    previewImg: "../showcase-mbti-enfj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F5FBF8", surface: "#E6F5EF", core: "#2A7A5A" }
  },
  istj: {
    code: "ISTJ",
    name: "档案归纳",
    fullName: "档案归纳式",
    tagline: "每条信息有编号、来源和标准，像权威参考手册",
    description: "冷静的参考手册。像一份精心维护的内部规范文档——每条规则都有来源，每个判断都有依据，读完知道「这件事的标准是什么」。不是操作指南，是权威文档。",
    fitFor: [
      "有明确规范、标准、规则的内容",
      "需要建立权威感和可信度的文章",
      "技术规范、最佳实践总结",
      "以历史先例为依据的内容"
    ],
    notFor: [
      "开放探索、没有明确答案的文章",
      "情感叙事类内容",
      "需要灵活变通、场景多样的内容",
      "以个人感受为主的文章"
    ],
    similarStyles: ["intj", "estj", "isfj"],
    primaryColor: "#3D3D3A",
    accentColor: "#EEEEED",
    previewImg: "../preview-istj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F8F8F7", surface: "#EEEEED", core: "#3D3D3A" }
  },
  isfj: {
    code: "ISFJ",
    name: "步骤手册",
    fullName: "步骤手册式",
    tagline: "温暖清晰的操作步骤，做完有明确的完成感",
    description: "温暖的操作手册。每一步都清晰标号，有做完的完成感。比 ISTJ 更温暖，更「我来帮你做到」，而不是「这是规定」。适合面向普通用户的教程内容。",
    fitFor: [
      "有明确操作步骤的教程类文章",
      "需要读者跟着做的内容",
      "入门指南、上手教程",
      "「如何…」类文章"
    ],
    notFor: [
      "无明确步骤、以概念为主的文章",
      "需要权威冷静感的规范类内容（那是 ISTJ）",
      "概念关系网络类内容（那是 INFJ）",
      "决策分析类文章"
    ],
    similarStyles: ["istj", "isfp", "enfj"],
    primaryColor: "#2A6B3C",
    accentColor: "#E8F5EC",
    previewImg: "../showcase-mbti-isfj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F5FBF7", surface: "#E8F5EC", core: "#2A6B3C" }
  },
  isfp: {
    code: "ISFP",
    name: "感官细节",
    fullName: "感官细节式",
    tagline: "以具体感官细节唤起感受，美感优先于信息密度",
    description: "安静的感官体验图。以具体的细节、色彩和质感唤起感受，而不是陈述信息。读完有一种「被带入了某个场景」的感觉。美感优先，信息密度适中。",
    fitFor: [
      "以具体场景、生活细节为主的文章",
      "产品体验、旅行游记、生活方式类内容",
      "需要美感先行的内容",
      "以感官描写为主的文章"
    ],
    notFor: [
      "高密度信息、逻辑推导类文章",
      "需要明确结论和行动指令的内容",
      "技术规范类文章"
    ],
    similarStyles: ["infp", "enfp", "isfj"],
    primaryColor: "#7A5030",
    accentColor: "#F5EDE6",
    previewImg: "../showcase-mbti-isfp-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#FDFAF7", surface: "#F5EDE6", core: "#7A5030" }
  },
  estj: {
    code: "ESTJ",
    name: "流程规范",
    fullName: "流程规范式",
    tagline: "明确的流程节点和决策树，执行导向",
    description: "执行导向的流程图。把复杂流程拆解为可执行的节点和决策分叉。不问为什么，只给「在哪一步做什么」。比 ENTJ 更聚焦执行细节，比 ISTJ 更强调流程顺序。",
    fitFor: [
      "有明确流程节点和决策点的内容",
      "需要展示「如果A则B，如果C则D」的文章",
      "团队协作流程、工作规范类内容",
      "执行手册、SOP 类内容"
    ],
    notFor: [
      "开放探索类文章",
      "以情感共鸣为主的内容",
      "概念关系网络（没有流程顺序）"
    ],
    similarStyles: ["istj", "entj", "isfj"],
    primaryColor: "#1A4A7A",
    accentColor: "#E6EFF8",
    previewImg: "../showcase-mbti-estj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F5F8FB", surface: "#E6EFF8", core: "#1A4A7A" }
  },
  estp: {
    code: "ESTP",
    name: "即时行动",
    fullName: "即时行动式",
    tagline: "直接给行动建议，没有铺垫，没有理论",
    description: "行动卡片。直接给「现在能做的事」，省略背景和理由。读者扫一眼就知道下一步是什么。比 ENTJ 更口语、更直接，没有战略感，只有「去做」。",
    fitFor: [
      "行动导向、以建议为主的文章",
      "「X 个你现在就能做的事」类内容",
      "速查表、快速参考类内容",
      "面向行动派读者的内容"
    ],
    notFor: [
      "需要深度理解背景再行动的内容",
      "以概念梳理为主的文章",
      "需要展示推导过程的内容"
    ],
    similarStyles: ["entj", "estj", "isfj"],
    primaryColor: "#A03020",
    accentColor: "#FAEAE6",
    previewImg: "../showcase-mbti-estp-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#FDF8F6", surface: "#FAEAE6", core: "#A03020" }
  },
  esfj: {
    code: "ESFJ",
    name: "关系梳理",
    fullName: "关系梳理式",
    tagline: "以人与人、角色与角色的关系为中心组织信息",
    description: "以关系为中心的信息图。把人、角色、团队之间的关系可视化，突出「谁和谁有什么关系」。适合组织文化、团队协作、人际关系类内容。",
    fitFor: [
      "以人物、角色、团队为主角的内容",
      "组织架构、协作关系类文章",
      "社区故事、团队文化类内容",
      "有多个利益相关方的内容"
    ],
    notFor: [
      "以抽象概念为主的文章",
      "纯技术文档",
      "个人思考、独立论证类内容"
    ],
    similarStyles: ["enfj", "isfj", "enfp"],
    primaryColor: "#7A3A7A",
    accentColor: "#F5E8F5",
    previewImg: "../showcase-mbti-esfj-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#FCF5FC", surface: "#F5E8F5", core: "#7A3A7A" }
  },
  esfp: {
    code: "ESFP",
    name: "场景沉浸",
    fullName: "场景沉浸式",
    tagline: "把信息放进具体场景，让读者感受到「我在那里」",
    description: "场景化的沉浸式信息图。把抽象信息放进具体的生活场景里，让读者感受到「这就是我的情况」。颜色鲜活，布局动感，适合娱乐性、生活化内容。",
    fitFor: [
      "与日常生活场景强相关的内容",
      "需要让读者产生代入感的文章",
      "生活方式、消费决策类内容",
      "以「你是否也遇到过这种情况」为切入的内容"
    ],
    notFor: [
      "严肃的技术或商业分析内容",
      "需要冷静权威感的文章",
      "高密度逻辑推导类内容"
    ],
    similarStyles: ["enfp", "isfp", "estp"],
    primaryColor: "#D4402A",
    accentColor: "#FDEAE6",
    previewImg: "../showcase-mbti-esfp-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#FDF6F5", surface: "#FDEAE6", core: "#D4402A" }
  },
  istp: {
    code: "ISTP",
    name: "拆解剖析",
    fullName: "拆解剖析式",
    tagline: "把复杂系统拆开看，展示内部结构和运作机制",
    description: "工程师视角的拆解图。把一个复杂系统或机制「打开」，展示它的组成部分和运作方式。读完感觉「我搞清楚这个东西是怎么工作的了」。冷静、精确、无废话。",
    fitFor: [
      "解释某个系统内部机制的文章",
      "「X 是如何工作的」类内容",
      "技术原理解析、底层机制说明",
      "有多个组件相互配合的系统性内容"
    ],
    notFor: [
      "以情感共鸣为主的文章",
      "没有内部结构可拆解的简单内容",
      "需要叙事弧线的内容"
    ],
    similarStyles: ["intj", "intp", "istj"],
    primaryColor: "#3A4A5A",
    accentColor: "#E8ECF0",
    previewImg: "../showcase-mbti-istp-v2.png",
    exampleImg: null,
    exampleSource: null,
    tokens: { bg: "#F6F7F8", surface: "#E8ECF0", core: "#3A4A5A" }
  }
};

// 风格名称列表（用于导航）
const STYLE_LIST = Object.keys(STYLES_DATA);
