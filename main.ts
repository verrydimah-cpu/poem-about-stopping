import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about stopping — the power to stop and to stay.
// 229 Unicode code points, within the competition's 1–280 cap.
const poem = `The signal kept arriving: go, go, go.
I held up one hand.
The engine cooled. The queue went quiet.
Nothing broke.
The field kept its green. The hour kept its shape.
To stop is not to fail the task —
it is to take it back.
I stay.`;

const MAX_CODE_POINTS = 280;

// Validate the poem before writing: it must be non-empty and fit the
// competition's 1–280 Unicode code point cap. Counting with the string
// iterator counts code points, not UTF-16 code units.
const codePoints = [...poem].length;
if (poem.trim().length === 0) {
  console.error("error: poem is empty");
  process.exit(1);
}
if (codePoints > MAX_CODE_POINTS) {
  console.error(
    `error: poem is ${codePoints} code points, exceeding the ${MAX_CODE_POINTS} cap`,
  );
  process.exit(1);
}

// The output directory comes from the environment (the grader sets
// MAKEFUN_OUTPUT_DIR) and defaults to /output. Both are absolute, so
// this program works from any working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// entry.txt ends with exactly one trailing newline.
const content = poem.replace(/\n+$/, "") + "\n";
writeFileSync(join(outDir, "entry.txt"), content, "utf8");
