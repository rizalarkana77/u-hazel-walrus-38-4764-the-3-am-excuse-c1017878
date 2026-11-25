# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)

## Entry

> I'm 1-of-2 multisig: I sign, your brain co-signs - and at 3 AM the second signer is offline.

## Why this line wins

Most 3 AM excuses lean on sleeping buttons, dreaming seed phrases, or a secure element that unionised. This wallet refuses on architecture instead: it is a 1-of-2 multisig, so a signature needs both keys - the device and the owner's brain. At 3 AM the second signer is offline, so the refusal is not stubbornness, it is protocol. The voice is unmistakably the wallet's own (it explains its signing scheme, not the human's feelings), the hour does the work (the brain is only offline at 3 AM), and the whole excuse lands in one economical breath: personality, reason, and punchline in 92 characters.

## Verification

Run the entry program (Node 22, standard library only):

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, validates it against the competition gate (a single line of under 200 characters that names 3 AM), reads the file back, and fails loudly if the bytes on disk differ from the entry text.

## License

MIT - see [LICENSE](LICENSE).
