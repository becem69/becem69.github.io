---
title: "WASMALLAH / WARMUP V2"
tagline: "Native verifier plus WASM capsule with a custom VM and 24-round hash"
year: "2026"
stack: [Ghidra, Python, WebAssembly, xorshift, Feistel]
repo: "https://github.com/becem69/WASMALLAH-writeup"
featured: true
perms: "rwx------"
risk: "high"
excerpt: "Two-layer RE challenge: a 192-instruction custom VM and a 24-round custom hash, both fully inverted in Python from a stripped ELF and a 95-byte WASM file."
order: 12
---

Author and solver, SPARK CTF. Category: Reverse Engineering.

A stripped ELF (`super_easy`) verifies a 37-character flag against a 40-byte transformed digest hidden inside a 95-byte `warmup.wasm` file. Solving means working backwards through two layers.

## The two layers

- **Outer layer:** a custom VM with 192 instructions (Feistel steps, rotations, swaps, lane permutations) plus a 10-word whitening step
- **Inner layer:** a 24-round custom hash with an S-box, xorshift-based stream words and derived round keys

## Solution path

- Recovered a XOR-obfuscated locator tag (`SPK-CAPSULE-v4`) by brute-forcing the single-byte key, and confirmed it against the `memcmp` in Ghidra
- Validated the capsule layout and its XOR integrity tag from the decompiled loop
- Rebuilt every primitive from the disassembly: xorshift generator, S-box, nonlinear mixer, stream words, round keys and the Feistel round function
- Reconstructed the instruction table generator and opcode semantics, then wrote inverses for each operation
- Undid whitening, then reversed all 24 hash rounds to recover the plaintext, with 32-bit masking on every subtraction
