---
title: "cook.bin"
tagline: "ELF binary reverse engineering challenge"
year: "2026"
stack: [Ghidra, objdump, Python, XOR]
repo: "https://github.com/becem69/Ramadhan-CTF-cook-task-writeup"
featured: false
perms: "r-xr-x---"
risk: "medium"
excerpt: "Stripped 64-bit PIE ELF binary, XOR-encoded flag recovered via static analysis. Author write-up for Ramadhan CTF (ISET'COM)."
order: 8
---

Author & Reverse Engineer, Ramadhan CTF (ISET'COM).

Analyzed a stripped 64-bit PIE ELF binary using static analysis techniques (`file`, `strings`, `objdump`) to locate XOR-encoded flag data in the `.rodata` section.

## Solution

- Identified the XOR obfuscation pattern and reverse-engineered the key (`0xDE`) by analyzing null-byte termination in the encoded sequence at offset `0x2090`
- Developed a Python decryption script to recover the hidden flag: `becem69_is_4lw4ys_h3r3`
- Documented the complete solution walkthrough, including an anti-debugging bypass (`/proc/self/status` inspection) and decoy flag analysis
