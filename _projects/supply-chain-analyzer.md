---
title: "Supply Chain Security Analyzer"
tagline: "Polyglot microservice SCA platform — Go, Rust & C++ over gRPC"
year: "2026"
stack: [Go, Rust, "C++", gRPC, "Protocol Buffers", Docker, Kubernetes]
repo: "https://github.com/becem69/Supply-Chain-Security-Analyzer"
featured: true
perms: "rwxr-xr-x"
risk: "high"
excerpt: "Four-service polyglot platform for software composition analysis — dependency graphing, typosquat detection, secret scanning, and CI/CD pipeline auditing."
order: 1
---

A multi-language software composition analysis platform spanning **Go, Rust, and C++**, with four independent microservices communicating over gRPC / Protocol Buffers.

## What it does

- **Go orchestrator** — parses `package.json` / `package-lock.json` (v1, v2/v3 formats), builds a dependency graph with blast-radius and depth analysis, and queries the OSV vulnerability database with batched requests, retry/backoff, and CVE enrichment.
- **Rust typosquat detector** — Levenshtein distance + Jaro-Winkler phonetic similarity + Unicode homograph normalization against popular npm packages.
- **Rust secret scanner** — regex signatures (AWS/GitHub/Stripe keys, JWTs, private keys) combined with Shannon entropy analysis, scanning both the working tree and full Git history via `libgit2`, with redaction enforced at the protobuf schema level.
- **C++ CI/CD analyzer** — uses RapidYAML to detect GitHub Actions vulnerabilities: curl-pipe-to-shell execution, unpinned action references, and `pull_request_target` privilege escalation.

## Deployment

Multi-stage Docker builds for all four services, deployed on Kubernetes (Deployments, Services, ConfigMap, and a Job for orchestrated scans) — validated end-to-end on a local `kind` cluster.
