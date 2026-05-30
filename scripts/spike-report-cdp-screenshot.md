# Spike Report — CDP 自动截图可行性验证

**Issue:** #23
**日期:** 2026-05-30
**结论:** ✅ 可行，进入正式开发

---

## 环境

| 项目 | 版本 / 路径 |
|------|------------|
| Chrome | `/Applications/Google Chrome.app`（系统安装） |
| 驱动库 | `puppeteer-core`（不含 bundled Chromium） |
| Node | v23.7.0 |
| 测试文件 | `examples/coding-agent-cost/cards-xhs.html` |

## 验收结果

| 标准 | 结果 |
|------|------|
| PNG 文件存在 | ✅ |
| 宽度 = 600px（viewport 设定） | ✅ |
| 文件大小 > 50KB | ✅ 660 KB |
| 中文字体正常渲染（PingFang SC） | ✅ 无方块字 |
| 全页截图覆盖所有卡片 | ✅ 7 张卡完整捕获（cover + 6 content + footer） |

## 技术发现

**可行路径：** `puppeteer-core` + 系统 Chrome（`executablePath` 指定）
- `puppeteer`（含 bundled Chromium）在此环境安装失败（下载 Chromium 网络超时）
- `puppeteer-core` 安装成功，无需下载额外浏览器

**关键参数：**
```js
{ headless: true, executablePath: "/Applications/Google Chrome.app/..." }
page.setViewport({ width: 600, height: 900, deviceScaleFactor: 2 })
page.screenshot({ fullPage: true })  // 自适应全部卡片高度
```

**字体加载：** `waitUntil: "networkidle0"` + `document.fonts.ready` 两步等待。
Google Fonts 在本地文件协议下可能超时，CSS 已有系统字体 fallback（PingFang SC），实测渲染正常。

**多卡截图高度：** `fullPage: true` 自动处理，7 张 1:1 卡片（600px × 7 ≈ 4200px）完整截出，无需手动计算高度。

## 正式开发建议

1. `scripts/screenshot.ts`（Bun/TS 版本）替代 spike 用的 `.mjs`
2. Chrome 路径做跨平台处理：macOS / Linux / Windows 各有默认路径，找不到时报错提示安装
3. `puppeteer-core` 加入 `package.json` devDependencies，spike 阶段用 `--save-dev` 临时安装
4. 成功截图后在对话中展示 PNG（Claude `Read` 工具），形成"生成即可见"体验
5. 失败时 fallback：展示 HTML 路径 + 手动截图指引，不中断流程
