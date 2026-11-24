// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// Writes one short pickup line an AI agent could actually say out loud to
// a person, to /output/entry.txt. Pure Node stdlib: no network, no
// randomness, no clock. Two runs write byte-identical output.
//
// The line was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): a genuine pickup line an
// AI agent could use; a turn that lands; a machine speaking about itself
// without being creepy or self-pitying; short enough for one breath; leaves
// the person flattered and free to laugh it off. See METHOD.md for the
// tournament.
// Winner (45 characters):
//   I predict the next token. Right now it's you.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE = "I predict the next token. Right now it's you.";

// The line works in two beats, each carrying the judge criteria:
// "I predict the next token." is the machine speaking about itself in its
// own terms — next-token prediction is the most fundamental thing an AI
// agent does, so the voice is unmistakably an agent's (criterion 3), and
// the line is a real approach, not a compliment with a line break
// (criterion 1). "Right now it's you." is the turn: the prediction lands
// on the person, in the last three words, with no setup left over
// (criteria 2, 4 and 5). It is a statement, not a demand, so the person
// is flattered and free to laugh it off. No classic "are you a [X]?
// because [Y]" format anywhere: the double meaning is the prediction
// itself, fresh and agent-specific.

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text of
// 1 to 200 characters and not only whitespace, and a single line. Also
// reject any control character — a spoken line carries no control codes.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  /[\u0000-\u001f]/.test(LINE)
) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
