---
title: "rev_this_#.bin"
tagline: ".NET self-contained binary reverse engineering"
year: "2026"
stack: [".NET 6", "C#", Python, "SHA-256", XOR]
repo: "https://github.com/becem69/Ramadhan-CTF-rev-this-sharp-challenge-writeup"
featured: false
perms: "r-xr-x---"
risk: "high"
excerpt: "Hidden .NET assembly extracted from a self-contained Linux ELF, XOR key recovered from metadata streams. Author write-up for Ramadhan CTF (ISET'COM)."
order: 9
---

Author & Reverse Engineer, Ramadhan CTF (ISET'COM).

Reverse engineered a .NET 6 self-contained ELF binary containing a hidden managed assembly (`revproj.dll`) embedded within the Linux executable.

## Solution

- Located the .NET bundle header using its magic byte signature (`0x8B1202B96A612038`) and extracted the 10KB DLL payload at offset `0xa49730`
- Analyzed .NET metadata streams (`#US`, `#Blob`, `FieldRVA`) to recover a 48-byte XOR key, encrypted flag halves (24 bytes each), and a SHA-256 verification hash
- Implemented XOR decryption in Python to reconstruct the full flag: `jus7_r3m3mb3r_n0_c4p_wh3n_y0u_sp3ll_7h3m_becem69`
- Verified the solution by matching the SHA-256 hash against `TARGET_HASH` and confirming an "Access Granted!" response from the original binary
