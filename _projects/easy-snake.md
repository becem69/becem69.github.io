---
title: "Easy Snake"
tagline: "PyInstaller unpacking and Python 3.13 bytecode analysis"
year: "2026"
stack: [Python, PyInstaller, pyinstxtractor, dis, marshal]
repo: "https://github.com/becem69/easy-snake-writeup"
featured: false
perms: "r-xr-x---"
risk: "low"
excerpt: "Easy RE challenge: unpack a PyInstaller ELF, disassemble the .pyc with dis when decompilers do not support Python 3.13, and read the hardcoded constants."
order: 13
---

Author and solver, SPARK CTF. Category: Reverse Engineering. Difficulty: Easy.

A ~8 MB Linux binary that turns out to be a PyInstaller bundle around a small flag checker.

## Solution path

- Identified PyInstaller from the file size and markers like `_MEIPASS` and `pyiboot`
- Extracted the archive with `pyinstxtractor` using the matching Python 3.13 interpreter, since PYZ extraction is skipped on a version mismatch
- Decompilers did not yet support 3.13, so read the `check_flag` function with the built-in `dis` and `marshal` modules
- Decoded the hardcoded ASCII ordinal tuple to recover the flag

Key takeaway: PyInstaller does not protect source code, and constants in the bytecode are fully visible.
