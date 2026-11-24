// One Word, One Username, One Reward
// Competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// Writes the entrant's own make.fun username, and nothing else, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 30 chars). Node 22 stdlib-only.
//
// Revision: the bounty judges the username itself — funnier or more
// interesting wins — so there is nothing to decorate and nothing to pad:
// any added word, punctuation or casing change would stop being the
// username as registered. The revision instead hardens the contract:
// assert a single bare token with no whitespace anywhere, so the file
// can never drift from "one word, one username, nothing else".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The account's own make.fun username, exactly as registered.
const LINE = "sayang";

if (!/^\S{1,30}$/.test(LINE)) {
  throw new Error(`Invalid entry: must be one bare word of 1-30 chars, got ${JSON.stringify(LINE)}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
