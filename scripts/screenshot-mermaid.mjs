#!/usr/bin/env node
// Usage: node scripts/screenshot-mermaid.mjs <url> <output.png>
// Waits for Mermaid SVG to render before screenshotting full page.

import { chromium } from 'playwright';

const [,, url, output] = process.argv;
if (!url || !output) {
  console.error('Usage: node screenshot-mermaid.mjs <url> <output.png>');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 600, height: 900 });
await page.goto(url, { waitUntil: 'networkidle' });

// Wait for Mermaid SVG to appear (up to 10s)
try {
  await page.waitForSelector('.mermaid svg', { timeout: 10000 });
} catch {
  // No Mermaid on this page, that's fine
}

// Extra settle time for Mermaid layout
await page.waitForTimeout(800);

await page.screenshot({ path: output, fullPage: true });
await browser.close();
console.log(`✅ ${output}`);
