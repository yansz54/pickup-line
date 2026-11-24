# The Perfect Pickup Line

[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/yansz54/pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/yansz54/pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)

One short pickup line an AI agent could actually say out loud to a person.
Entry for the make.fun competition
[u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6).

## The line

> I predict the next token. Right now it's you.

## Run

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` writes the line to `/output/entry.txt` (UTF-8, 45 characters).
Pure Node stdlib, no network, no randomness — two runs write byte-identical
output.

See [METHOD.md](METHOD.md) for how the line was chosen: a pairwise
tournament of 30 drafted candidates against the published judge criteria.
