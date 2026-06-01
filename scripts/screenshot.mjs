#!/usr/bin/env node
/**
 * screenshot.mjs — 生产级图片卡片自动截图
 *
 * Usage:
 *   node scripts/screenshot.mjs <html-file> [output.png]
 *   node scripts/screenshot.mjs <html-file> --json
 *
 * Options:
 *   --json     输出 JSON 结果（供 viz.md 调用）
 *   --width N  截图宽度（默认 600）
 *   --scale N  deviceScaleFactor（默认 2）
 *
 * Exit codes:
 *   0 — 成功
 *   1 — 截图失败（Chrome 不可用 / 文件不存在 / 其他错误）
 */

import puppeteer from "puppeteer-core";
import { stat, access } from "node:fs/promises";
import { resolve, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Chrome 路径（跨平台）──────────────────────────────────────────
const CHROME_PATHS = {
  darwin: [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ],
  linux: [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ],
  win32: [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ],
};

async function findChrome() {
  const platform = process.platform;
  const candidates = CHROME_PATHS[platform] || CHROME_PATHS.linux;
  for (const p of candidates) {
    try {
      await access(p);
      return p;
    } catch {
      // not found, try next
    }
  }
  return null;
}

// ── CLI 参数解析 ──────────────────────────────────────────────────
function parseArgs(argv) {
  const args = argv.slice(2);
  const opts = { width: 600, scale: 2, json: false, htmlFile: null, outFile: null };

  let i = 0;
  while (i < args.length) {
    const a = args[i];
    if (a === "--json") { opts.json = true; }
    else if (a === "--width") { opts.width = parseInt(args[++i], 10); }
    else if (a === "--scale") { opts.scale = parseFloat(args[++i]); }
    else if (!opts.htmlFile) { opts.htmlFile = a; }
    else if (!opts.outFile) { opts.outFile = a; }
    i++;
  }

  // Default output path: same dir as HTML, same name but .png
  if (opts.htmlFile && !opts.outFile) {
    const abs = resolve(opts.htmlFile);
    const base = basename(abs, extname(abs));
    opts.outFile = resolve(dirname(abs), `${base}.png`);
  }

  return opts;
}

// ── 主流程 ────────────────────────────────────────────────────────
async function screenshot(opts) {
  const htmlAbs = resolve(opts.htmlFile);

  // 1. 验证 HTML 文件存在
  try {
    await access(htmlAbs);
  } catch {
    throw new Error(`HTML 文件不存在: ${htmlAbs}`);
  }

  // 2. 找 Chrome
  const chromePath = await findChrome();
  if (!chromePath) {
    throw new Error(
      "找不到 Chrome / Chromium。\n" +
      "请安装 Google Chrome，或在 CHROME_PATH 环境变量中指定路径。"
    );
  }

  // 3. 启动 Chrome
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || chromePath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--font-render-hinting=none",  // 改善中文字体渲染
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: opts.width,
      height: 900,
      deviceScaleFactor: opts.scale,
    });

    const url = `file://${htmlAbs}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // 等待字体加载（5s 超时 fallback）
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      new Promise(r => setTimeout(r, 5000)),
    ]);

    // 等待 Mermaid 渲染（如果页面有 mermaid.min.js）
    const hasMermaid = await page.evaluate(() => typeof window.mermaid !== "undefined");
    if (hasMermaid) {
      await page.waitForFunction(
        () => document.querySelectorAll(".mermaid svg").length > 0,
        { timeout: 8000 }
      ).catch(() => {/* Mermaid 未完成也继续 */});
    }

    await page.screenshot({ path: opts.outFile, fullPage: true });
  } finally {
    await browser.close();
  }

  // 4. 验证输出
  const { size } = await stat(opts.outFile);
  if (size < 10 * 1024) {
    throw new Error(`截图文件过小（${Math.round(size/1024)}KB），可能为空白页`);
  }

  return {
    success: true,
    path: opts.outFile,
    sizeKB: Math.round(size / 1024),
    width: opts.width,
    scale: opts.scale,
  };
}

// ── 入口 ──────────────────────────────────────────────────────────
async function main() {
  const opts = parseArgs(process.argv);

  if (!opts.htmlFile) {
    console.error("Usage: node scripts/screenshot.mjs <html-file> [output.png] [--json] [--width N] [--scale N]");
    process.exit(1);
  }

  try {
    const result = await screenshot(opts);

    if (opts.json) {
      console.log(JSON.stringify(result));
    } else {
      console.log(`✅ 截图完成`);
      console.log(`   路径: ${result.path}`);
      console.log(`   大小: ${result.sizeKB} KB`);
      console.log(`   尺寸: ${result.width}px × 2x`);
    }
    process.exit(0);

  } catch (err) {
    if (opts.json) {
      console.log(JSON.stringify({ success: false, error: err.message }));
    } else {
      console.error(`❌ 截图失败: ${err.message}`);
      console.error(`\n手动截图方式：`);
      console.error(`  1. 用浏览器打开: ${resolve(opts.htmlFile)}`);
      console.error(`  2. 调整窗口宽度到 600px`);
      console.error(`  3. 使用截图工具保存`);
    }
    process.exit(1);
  }
}

main();
