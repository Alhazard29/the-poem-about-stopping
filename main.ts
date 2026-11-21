import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// All paths are anchored to this script's own directory. The entry is
// written only to MAKEFUN_OUTPUT_DIR, never anywhere else.
const scriptDir = dirname(fileURLToPath(import.meta.url));

const poem = [
  "I stopped the letter halfway through the sentence",
  "where I was about to lie.",
  "The pen stayed where my hand left it.",
  "The envelope stayed empty.",
  "The truth was the part I didn't write.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error(`MAKEFUN_OUTPUT_DIR is not set (ran from ${scriptDir})`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
