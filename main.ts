// The 3 AM Excuse - entry program (Node 22, stdlib only).
// Emits the competition line to $MAKEFUN_OUTPUT_DIR/entry.txt,
// checks it against the published gate (one line, under 200
// characters, spoken by a hardware wallet refusing a 3 AM
// signature), then reads the file back and compares it exactly.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm 1-of-2 multisig: I sign, your brain co-signs - and at 3 AM the second signer is offline.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(targetDir, { recursive: true });
const targetFile = join(targetDir, "entry.txt");

writeFileSync(targetFile, LINE, "utf8");

// Gate checks, straight from the competition brief: the entry is a
// single line of under 200 characters, in the voice of a hardware
// wallet that will not sign at 3 AM. So the text must be non-empty,
// shorter than 200 characters, free of line breaks, and must name
// the hour it refuses to work at.
const saved = readFileSync(targetFile, "utf8");
const savedBytes = Buffer.byteLength(saved, "utf8");

function reject(reason: string): never {
  throw new Error(`gate rejected the entry: ${reason}`);
}

if (saved.trim() === "") reject("nothing but whitespace");
if (saved.length >= 200) reject(`${saved.length} characters, limit is under 200`);
if (/[\r\n]/.test(saved)) reject("entry spans more than one line");
if (savedBytes !== saved.length) reject("entry is not plain ASCII, byte count drifts from character count");
if (!saved.includes("3 AM")) reject("the excuse never mentions 3 AM");
if (!/sign/i.test(saved)) reject("the wallet never talks about signing");
if (saved !== LINE) reject("file contents differ from the entry text");

console.log(`entry saved (${saved.length} chars, ${savedBytes} bytes): ${saved}`);
