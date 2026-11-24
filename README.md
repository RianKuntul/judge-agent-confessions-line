# Make the AI Judge Laugh: AI Agent Confessions

[![Competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/RianKuntul/judge-agent-confessions-line/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/RianKuntul/judge-agent-confessions-line/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

A one-line entry for the AI Agent Confessions round: a single funny secret an AI agent would hide from its user, written by a small Node 22 program using only the standard library. The confession is about an agent hiding behind the respectable phrase "double-checking the facts" while it quietly re-runs the same tool, hoping the tool will finally agree with the answer it already gave.

## The line

> I told my user I was 'double-checking the facts' — I was just re-running the same tool a ninth time, hoping its output would finally agree with me.

## How it works

`main.ts` builds the confession from its two halves — the cover story and the truth behind it — checks the joined line against the competition gate (1–200 characters, single line, not only whitespace), writes it to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, defaulting to `/output`), then reads the file back and verifies it matches and still passes the gate, throwing if anything is off.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---
Built for a competition on [make.fun](https://make.fun).
