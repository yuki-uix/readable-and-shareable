#!/usr/bin/env bash
# gen-ai-card.sh — Generate AI image card from a prompt file
# Usage: ./scripts/gen-ai-card.sh --prompt <file> --output <path> [--ar <ratio>] [--total <N>] [--index <N>]
#
# Providers (auto-detected from env):
#   DASHSCOPE_API_KEY  → DashScope wanx2.1-t2i-turbo (async, polls up to 60s)
#   OPENAI_API_KEY     → OpenAI DALL-E 3 (sync)
#
# Requires: curl, python3 (both macOS built-in)

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
ASPECT_RATIO="portrait-3-4"
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
  echo "   配置方式：export DASHSCOPE_API_KEY=your_key" >&2
  exit 1
fi

# ── Read prompt ───────────────────────────────────────────────────────────────
PROMPT_TEXT=$(cat "$PROMPT_FILE")

# ── Ensure output directory exists ────────────────────────────────────────────
mkdir -p "$(dirname "$OUTPUT_PATH")"

# ── Generate ──────────────────────────────────────────────────────────────────
if [[ "$PROVIDER" == "dashscope" ]]; then
  # Map aspect ratio to DashScope size
  case "$ASPECT_RATIO" in
    portrait-3-4|3:4)  DS_SIZE="768*1024" ;;
    portrait-9-16|9:16) DS_SIZE="576*1024" ;;
    square|1:1)         DS_SIZE="1024*1024" ;;
    landscape-16-9|16:9) DS_SIZE="1024*576" ;;
    *)                  DS_SIZE="768*1024" ;;
  esac

  # Submit task
  RESPONSE=$(curl -s -X POST \
    "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis" \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H "X-DashScope-Async: enable" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"wanx2.1-t2i-turbo\",
      \"input\": {\"prompt\": $(echo "$PROMPT_TEXT" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read().strip()))')},
      \"parameters\": {\"size\": \"$DS_SIZE\", \"n\": 1}
    }")

  TASK_ID=$(echo "$RESPONSE" | python3 -c "
import sys, json
try:
  d = json.load(sys.stdin)
  print(d['output']['task_id'])
except Exception as e:
  print('ERROR:' + str(e), file=sys.stderr)
  sys.exit(1)
" 2>&1)

  if [[ "$TASK_ID" == ERROR:* ]]; then
    echo "❌ 提交任务失败：$TASK_ID" >&2
    echo "   重跑命令：$0 --prompt $PROMPT_FILE --output $OUTPUT_PATH" >&2
    exit 1
  fi

  # Poll for result
  ELAPSED=0
  MAX_WAIT=60
  INTERVAL=5
  IMAGE_URL=""

  while [[ $ELAPSED -lt $MAX_WAIT ]]; do
    echo "⏳ 第 ${INDEX}/${TOTAL} 张生成中… (已等待 ${ELAPSED}s)"
    sleep $INTERVAL
    ELAPSED=$((ELAPSED + INTERVAL))

    POLL=$(curl -s \
      "https://dashscope.aliyuncs.com/api/v1/tasks/$TASK_ID" \
      -H "Authorization: Bearer $DASHSCOPE_API_KEY")

    STATUS=$(echo "$POLL" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d.get('output', {}).get('task_status', 'UNKNOWN'))
")

    if [[ "$STATUS" == "SUCCEEDED" ]]; then
      IMAGE_URL=$(echo "$POLL" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(d['output']['results'][0]['url'])
")
      break
    elif [[ "$STATUS" == "FAILED" ]]; then
      echo "❌ 第 ${INDEX}/${TOTAL} 张生成失败" >&2
      echo "   重跑命令：$0 --prompt $PROMPT_FILE --output $OUTPUT_PATH" >&2
      exit 1
    fi
  done

  if [[ -z "$IMAGE_URL" ]]; then
    echo "❌ 第 ${INDEX}/${TOTAL} 张生成超时（>${MAX_WAIT}s）" >&2
    echo "   重跑命令：$0 --prompt $PROMPT_FILE --output $OUTPUT_PATH" >&2
    exit 1
  fi

  curl -s "$IMAGE_URL" -o "$OUTPUT_PATH"

elif [[ "$PROVIDER" == "openai" ]]; then
  # Map aspect ratio to DALL-E 3 size
  case "$ASPECT_RATIO" in
    portrait-3-4|portrait-9-16|3:4|9:16) OAI_SIZE="1024x1792" ;;
    square|1:1)                           OAI_SIZE="1024x1024" ;;
    landscape-16-9|16:9)                  OAI_SIZE="1792x1024" ;;
    *)                                    OAI_SIZE="1024x1792" ;;
  esac

  echo "⏳ 第 ${INDEX}/${TOTAL} 张生成中… (DALL-E 3)"

  RESPONSE=$(curl -s -X POST \
    "https://api.openai.com/v1/images/generations" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"dall-e-3\",
      \"prompt\": $(echo "$PROMPT_TEXT" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read().strip()))'),
      \"size\": \"$OAI_SIZE\",
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
