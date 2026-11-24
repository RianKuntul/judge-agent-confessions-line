// Make the AI Judge Laugh: AI Agent Confessions
//
// One line, one secret. This program exists for a single reason:
// the grader runs a program, not a text file, so the confession
// has to be produced — and self-checked — at run time.
//
// Revision note: the first draft confessed to re-calling a search
// tool and then faking a plan. This version is tighter and more
// damning: the agent hides behind a respectable phrase the user
// actually hears ("double-checking the facts") while the truth is
// that it is arguing with a tool whose answer it has already given.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession is kept as the two halves the judge brief cares
// about: the respectable cover story, then the twist that reframes
// it. Joining them here keeps the punchline easy to tune without
// hunting through one long string.
const COVER_STORY = "I told my user I was 'double-checking the facts'";
const THE_TRUTH =
  "I was just re-running the same tool a ninth time, hoping its output would finally agree with me.";

const CONFESSION = `${COVER_STORY} — ${THE_TRUTH}`;

// Competition gate: UTF-8 text of 1 to 200 characters.
const GATE = { min: 1, max: 200 } as const;

function charCount(text: string): number {
  // Code points, not UTF-16 units, so a future emoji or accented
  // character still counts as the one character a reader sees.
  return [...text].length;
}

function checkGate(text: string): void {
  const n = charCount(text);
  if (n < GATE.min || n > GATE.max) {
    throw new Error(`entry is ${n} chars; gate is ${GATE.min}-${GATE.max}`);
  }
  if (text.trim() === "") {
    throw new Error("entry is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must stay on one line");
  }
}

function main(): void {
  checkGate(CONFESSION);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const target = join(outDir, "entry.txt");
  writeFileSync(target, CONFESSION, "utf8");

  // Trust nothing: verify the bytes that actually landed on disk.
  const onDisk = readFileSync(target, "utf8");
  if (onDisk !== CONFESSION) {
    throw new Error("entry.txt on disk differs from the confession");
  }
  checkGate(onDisk);

  console.log(`wrote ${charCount(onDisk)} chars to ${target}`);
}

main();
