---
title: "Don't Panic"
tagline: "Stripped ELF hiding an RC4 routine with an obfuscated key"
year: "2026"
stack: [objdump, Python, RC4, XOR, ELF]
repo: "https://github.com/becem69/don-t-panic-writeup"
featured: false
perms: "r-xr-x---"
risk: "high"
excerpt: "Mid-hard RE challenge: locate an RC4 KSA/PRGA in a stripped binary, decode a 9-byte XOR-obfuscated key from .rodata, and decrypt the 30-byte flag."
order: 15
---

Author and solver, SPARK CTF. Category: Reverse Engineering. Difficulty: Mid-hard.

A stripped 64-bit ELF that prints `correct` or `wrong`. Neither the flag nor the key appears in `strings`.

## Solution path

- Located the challenge routine by searching the disassembly for the `0x100` state size and the `0x5a` XOR immediate
- Recognized the RC4 key-scheduling and keystream generation loops from the swap and modulo-256 patterns
- Extracted the 9-byte encoded key and the 30-byte ciphertext from `.rodata`, decoding the key with the single-byte XOR seen in the assembly
- Wrote a standalone RC4 script that mirrors the binary, decrypted the flag and verified it against the ELF
