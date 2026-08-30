---
title: "RELab"
tagline: "Modular, Dockerized static-analysis pipeline for binary samples"
year: "2026"
stack: [Go, Rust, "C++", "C#", Python, Ruby, gRPC, Docker]
repo: "https://github.com/becem69/Reverse-Engineering-Lab"
featured: true
perms: "rwxr-xr-x"
risk: "high"
excerpt: "Polyglot pipeline that triages any binary sample, routes it to the right language-specific analyzer, correlates findings against MITRE ATT&CK, and outputs a structured JSON report, all in containers."
order: 10
---

A modular, Dockerized static-analysis pipeline for binary samples. Hand it a file, an ELF, a PE, a raw shellcode blob, or anything in between, and it automatically triages the format, routes the sample to the right language-specific analyzer, correlates findings against MITRE ATT&CK, and writes a structured JSON report. Everything runs locally in containers, no cloud dependencies.

Deliberately polyglot: each analyzer is written in the language best suited to the job (Python for signature matching, Go for build-info extraction, Rust for symbol demangling, C++ for disassembly, C# for CLR metadata, Ruby for report generation), all stitched together by a Go orchestrator over gRPC.

## Pipeline stages

- **Triage (Python)** , magic-byte format detection (PE/ELF/Mach-O), language fingerprinting via byte-string markers, packer detection (UPX, ASPack, Themida, PECompact, MPRESS) with Shannon entropy fallback, and structured metadata via `lief`
- **Go analyzer** , extracts embedded build manifests via `debug/buildinfo`, works even on stripped binaries
- **Rust analyzer** , parses with `goblin`, demangles Itanium-mangled Rust symbols via `rustc-demangle`
- **C++ analyzer** , scans for mangled symbols, vtable strings, and `GLIBCXX` version markers
- **Shellcode analyzer (C++)** , disassembles raw headerless bytes with Capstone, flags syscalls, interrupts, NOP sleds, and call-then-pop GetPC patterns
- **.NET analyzer (C#)** , reads CLR metadata directly via `System.Reflection.Metadata`, without loading or executing the assembly
- **TTP correlation engine (Python)** , maps signals to MITRE ATT&CK techniques through independent, extensible rule functions
- **Report generator (Ruby)** , merges and de-duplicates all analyzer outputs into a single JSON report

## Architecture

Every service speaks the same gRPC contract defined in a single shared `analyzer.proto`, so any language can host any pipeline stage without knowing what language another stage is written in. The orchestrator resolves services by `(format, language)` pairs over the Docker Compose network and falls back to the shellcode analyzer for unknown/headerless payloads.

## Notable engineering decision

An earlier version attempted full packer-stub emulation (C + Unicorn Engine) to recover the Original Entry Point on packed binaries. Signature-based packer *detection* still works reliably in triage, but faithful syscall/ABI emulation proved unreliable with hand-rolled hooks, so the unpacking-emulation service was removed rather than shipped broken. Revisiting it would mean building on a full userland-emulation framework like Qiling instead of raw Unicorn.
