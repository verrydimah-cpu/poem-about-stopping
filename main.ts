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

// The output directory comes from the environment (the grader sets
// MAKEFUN_OUTPUT_DIR) and defaults to /output. Both are absolute, so
// this program works from any working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
