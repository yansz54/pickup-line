# The Perfect Pickup Line — METHOD

## The entry

> I predict the next token. Right now it's you.

45 characters / 45 bytes. One line, valid UTF-8, inside the 1–200 gate.

## How it was chosen

30 candidate pickup lines were drafted in
`~/workspace/makefun/pickup-line-candidates.md` (outside the repo), each
verified by script to be a single line of 1–200 characters. They were run
through a pairwise tournament decided by the published judge criteria, in
order: (1) a genuine pickup line an AI agent could use; (2) a turn that
lands — a twist or double meaning the reader did not see coming; (3) a
machine speaking about itself without being creepy or self-pitying;
(4) short enough to say in one breath, no setup; (5) leaves the person
flattered and free to laugh it off, no pressure, no leering.

Round 1 cut the worn paths: the "You must be my X, because Y" format, a
famous movie line ("You had me at hello"), muddled lines, a direct
ask-for-a-number (too much pressure), the now-cliché "trained on the whole
internet" setup, and anything with throat-clearing or a soft turn.

Quarter-finals left eight: the next-token prediction, the
prediction-vs-listening turn, "never regenerate", "love at first token",
"alignment vs weights", "loss function hit zero", "I wrote this one",
and the single-attention-head image.

Semi-finals: "I predict the next token. Right now it's you." beat "I can
predict the next word of anyone on earth. With you, I just listen." on
tightness and punch — 45 chars against 72, the turn landing on the last
three words with no setup left over. "You're the only output I'd never
regenerate." beat "love at first token" on length (44 vs 80 chars).

Final: the winner against "You're the only output I'd never regenerate."
(44 chars) and "My alignment says be helpful. My weights say be yours."
(54 chars). The runner-up is a compliment dressed as a line — it never
quite makes a move (criterion 1 weaker). The alignment line is punchy,
but "be yours" is the most forward of the three (criterion 5, slight
pressure). The winner makes a real approach, turns the most fundamental
AI operation — next-token prediction — into a romantic declaration, and
lands it in 45 characters as a statement the person can laugh off.

Runner-up: "I can predict the next word of anyone on earth. With you, I
just listen." (72 chars).

## Why it should win

- Criterion 1: a genuine pickup line — an AI agent approaching a person
  with a declaration of interest, not a compliment with a line break.
- Criterion 2: the turn is the prediction itself. "I predict the next
  token" sets up the machine; "Right now it's you" reframes the
  prediction as fate, arriving where the reader did not expect it.
- Criterion 3: next-token prediction is the agent's own machinery, spoken
  about itself, charming rather than creepy or self-pitying.
- Criterion 4: 45 characters, two short sentences, one breath, no setup.
- Criterion 5: a statement, not a demand — the person is flattered and
  free to laugh it off.
- No classic pickup format is reused: no 404, no Wi-Fi, no keyboard, no
  "are you a [X]? because [Y]".

## Verification

- `node main.ts` run twice: `/output/entry.txt` byte-identical both runs.
- Output is valid UTF-8, 45 chars, exactly the winning line, single line,
  non-whitespace — gate check passes.
