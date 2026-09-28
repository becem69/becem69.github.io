---
title: "Z3 Obfuscation"
tagline: "Reading through a deliberately noisy Z3 constraint checker"
year: "2026"
stack: [Python, Z3, "XOR", Base64]
repo: "https://github.com/becem69/Z3-obfuscation-writeup"
featured: false
perms: "r-xr-x---"
risk: "medium"
excerpt: "Misc/RE challenge where Z3 is not actually needed: strip the tautologies and red herrings, and every byte is pinned by simple arithmetic."
order: 14
---

Author and solver, SPARK CTF (Misc).

A Python checker that looks intimidating: Z3 BitVectors, obfuscated `_0x1`-style names, base64 lookup tables and noisy constraints. The trick is to see that the system is fully determined.

## How the checker works

- A static 22-byte XOR key is applied to the input
- The result is shuffled by a fixed permutation into the Z3 array `f`
- Constraints on `f` mix real ones with tautologies such as `Or(f[3] > 0, f[3] <= 0)` that carry no information

## Solution path

- Ignored the red herrings and derived every `f[i]` directly from value pins, simple arithmetic, or the two base64 tables
- Inverted the permutation, then undid the XOR to recover the input, all in plain Python with no solver call
