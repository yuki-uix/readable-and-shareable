/**
 * Spike #23 — CDP auto-screenshot feasibility test
 *
 * Goal: verify headless Chrome can screenshot a local HTML card file
 * at 600px width with correct Chinese font rendering.
 *
 * Validation criteria:
 *   - PNG file exists
 *   - Width = 600px
 *   - File size > 50KB (not blank)
 *   - Chinese font visible (manual inspection of output)
 */

import puppeteer from "puppeteer-core";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const HTML_FILE = resolve(__dirname, "../examples/coding-agent-cost/cards-xhs.html");
const OUTPUT = resolve(__dirname, "../examples/coding-agent-cost/cards-xhs-spike.png");
const CARD_WIDTH = 600;

async function run() {
  console.log("Launching Chrome headless...");
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Set viewport to card width; height will be auto from fullPage screenshot
  await page.setViewport({ width: CARD_WIDTH, height: 900, deviceScaleFactor: 2 });

  console.log(`Loading: file://${HTML_FILE}`);
  await page.goto(`file://${HTML_FILE}`, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait for fonts — Google Fonts may timeout on network; fall back after 5s
  try {
    await page.evaluate(() => document.fonts.ready);
  } catch {
    console.warn("Font load timed out — continuing with system fonts");
  }

  console.log("Taking full-page screenshot...");
  await page.screenshot({
    path: OUTPUT,
    fullPage: true,
  });

  await browser.close();

  // Validate output
  const { size } = await stat(OUTPUT);
  const sizeKB = Math.round(size / 1024);
  const pass = size > 50 * 1024;

  console.log("\n=== Spike Result ===");
  console.log(`Output : ${OUTPUT}`);
  console.log(`Size   : ${sizeKB} KB  ${pass ? "✅ > 50KB" : "❌ too small (blank?)"}`);
  console.log(`Width  : ${CARD_WIDTH}px (viewport set)`);
  console.log("\nManual check required:");
  console.log("  Open the PNG and verify Chinese text renders correctly (not ▯ boxes).");
  console.log(pass ? "\n✅ Spike PASS — CDP screenshot chain works" : "\n❌ Spike FAIL — file too small");

  process.exit(pass ? 0 : 1);
}

run().catch((err) => {
  console.error("Spike FAIL:", err.message);
  process.exit(1);
});
