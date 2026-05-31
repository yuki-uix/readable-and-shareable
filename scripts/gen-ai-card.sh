#!/usr/bin/env bash
# gen-ai-card.sh — Generate AI image card from a prompt file
# Usage: ./scripts/gen-ai-card.sh --prompt <file> --output <path> [--ar <ratio>] [--total <N>] [--index <N>]
#
# Providers (auto-detected from env):
#   DASHSCOPE_API_KEY  → DashScope qwen-image-2.0-pro (recommended, best Chinese text rendering)
#   OPENAI_API_KEY     → OpenAI DALL-E 3 (fallback)
#
# Requires: npx + bun (for DashScope), curl + python3 (for OpenAI fallback)
# DashScope uses baoyu-image-gen's main.ts for qwen-image-2.0-pro support.

set -euo pipefail

# ── Auto-load API keys from shell profile if not in environment ───────────────
if [[ -z "${DASHSCOPE_API_KEY:-}" && -z "${OPENAI_API_KEY:-}" ]]; then
  for _profile in ~/.zshrc ~/.bash_profile ~/.bashrc ~/.profile; do
    [[ -f "$_profile" ]] && source "$_profile" 2>/dev/null || true
    [[ -n "${DASHSCOPE_API_KEY:-}" || -n "${OPENAI_API_KEY:-}" ]] && break
  done
fi

# ── Parse args ────────────────────────────────────────────────────────────────
PROMPT_FILE=""
OUTPUT_PATH=""
ASPECT_RATIO="2:3"
TOTAL=1
INDEX=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --prompt)    PROMPT_FILE="$2";   shift 2 ;;
    --output)    OUTPUT_PATH="$2";   shift 2 ;;
    --ar)        ASPECT_RATIO="$2";  shift 2 ;;
    --total)     TOTAL="$2";         shift 2 ;;
    --index)     INDEX="$2";         shift 2 ;;
    *) echo "Unknown argument: $1" >&2; exit 1 ;;
  esac
done

if [[ -z "$PROMPT_FILE" || -z "$OUTPUT_PATH" ]]; then
  echo "Usage: $0 --prompt <file> --output <path> [--ar <ratio>] [--total <N>] [--index <N>]" >&2
  exit 1
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "❌ Prompt file not found: $PROMPT_FILE" >&2
  exit 1
fi

# ── Detect provider ───────────────────────────────────────────────────────────
if [[ -n "${DASHSCOPE_API_KEY:-}" ]]; then
  PROVIDER="dashscope"
elif [[ -n "${OPENAI_API_KEY:-}" ]]; then
  PROVIDER="openai"
else
  echo "❌ 未检测到 API key。请设置 DASHSCOPE_API_KEY 或 OPENAI_API_KEY" >&2
  echo "   配置方式：在 ~/.zshrc 中加入 export DASHSCOPE_API_KEY=your_key" >&2
  exit 1
fi

# ── Ensure output directory exists ────────────────────────────────────────────
mkdir -p "$(dirname "$OUTPUT_PATH")"

echo "⏳ 第 ${INDEX}/${TOTAL} 张生成中… (provider: ${PROVIDER})"

# ── Generate ──────────────────────────────────────────────────────────────────
if [[ "$PROVIDER" == "dashscope" ]]; then
  # Use baoyu-image-gen main.ts for qwen-image-2.0-pro (best Chinese text rendering)
  # Locate baoyu-image-gen script
  BAOYU_SCRIPT=""
  for _candidate in \
    "$HOME/Documents/AIGC/github-repos/learn-from-baoyu-skills/skills/baoyu-image-gen/scripts/main.ts" \
    "$HOME/.baoyu-skills/baoyu-image-gen/scripts/main.ts"; do
    [[ -f "$_candidate" ]] && BAOYU_SCRIPT="$_candidate" && break
  done

  if [[ -n "$BAOYU_SCRIPT" ]]; then
    npx -y bun "$BAOYU_SCRIPT" \
      --provider dashscope \
      --model qwen-image-2.0-pro \
      --promptfiles "$PROMPT_FILE" \
      --image "$OUTPUT_PATH" \
      --ar "$ASPECT_RATIO" 2>&1
  else
    echo "❌ 未找到 baoyu-image-gen 脚本。请确认 baoyu-skills 已在以下路径之一安装：" >&2
    echo "   ~/Documents/AIGC/github-repos/learn-from-baoyu-skills/" >&2
    echo "   重跑命令：$0 --prompt $PROMPT_FILE --output $OUTPUT_PATH" >&2
    exit 1
  fi

elif [[ "$PROVIDER" == "openai" ]]; then
  # OpenAI DALL-E 3 (sync fallback)
  PROMPT_TEXT=$(cat "$PROMPT_FILE")

  RESPONSE=$(curl -s -X POST \
    "https://api.openai.com/v1/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"dall-e-3\",
      \"prompt\": $(echo "$PROMPT_TEXT" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read().strip()))'),
      \"size\": \"1024x1792\",
      \"n\": 1
    }")

  IMAGE_URL=$(echo "$RESPONSE" | python3 -c "
import sys, json
try:
  d = json.load(sys.stdin)
  print(d['data'][0]['url'])
except Exception as e:
  print('ERROR:' + str(e), file=sys.stderr)
  sys.exit(1)
" 2>&1)

  if [[ "$IMAGE_URL" == ERROR:* ]]; then
    echo "❌ 第 ${INDEX}/${TOTAL} 张生成失败：$IMAGE_URL" >&2
    echo "   重跑命令：$0 --prompt $PROMPT_FILE --output $OUTPUT_PATH" >&2
    exit 1
  fi

  curl -s "$IMAGE_URL" -o "$OUTPUT_PATH"
fi

echo "✅ 已生成：$OUTPUT_PATH"
