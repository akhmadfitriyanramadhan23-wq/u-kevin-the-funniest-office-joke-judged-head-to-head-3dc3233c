import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Office Joke — one line, setup + turn, punchline last.
// Playbook joke template: rule -> literal violation -> flat consequence.
// Rule: HR demands every meeting have a clear purpose. Dave obeys it
// literally by renaming the meeting itself, and the consequence is that
// the meeting nobody wanted can now never be cancelled.
const text =
  "HR said every meeting needs a clear purpose, so Dave renamed the 9 AM standup 'Why Are We Here' and nobody has dared cancel it since.\n";

// Guard: the gate requires 1-200 characters, a single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
