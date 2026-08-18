---
title: "SOC Home Lab with Wazuh"
tagline: "Dockerized detection & response pipeline on low-end hardware"
year: "2026"
stack: [Wazuh, Suricata, Docker, nftables, "OWASP Juice Shop", VirusTotal]
repo: "https://github.com/becem69/soc-homelab-wazuh"
featured: true
perms: "rw-r--r--"
risk: "medium"
excerpt: "Full SOC detection pipeline — Wazuh SIEM/XDR, Suricata IDS, and a deliberately vulnerable target, all containerized to fit constrained hardware."
order: 2
---

A complete SOC detection pipeline built from scratch — Wazuh (SIEM/XDR), a monitored victim host, Suricata IDS, and an attack target — running entirely in **Docker containers instead of full VMs** to fit low-end hardware constraints.

## Build notes

- Deployed and debugged single-node Wazuh Manager, Indexer, and Dashboard — traced an OpenSearch `OutOfMemoryError` down to a misconfigured off-heap memory pool rather than the JVM heap itself.
- Monitored Ubuntu victim host with a version-pinned Wazuh agent (FIM, rootcheck, syscollector) and OWASP Juice Shop as a live, deliberately vulnerable target.
- Suricata as a host-level network IDS sniffing the custom Docker bridge interface, with custom detection rules for Juice Shop attack traffic.
- Wazuh community ruleset with automated updates, plus full VirusTotal integration for File Integrity Monitoring — verified end-to-end with an EICAR test file (65/67 engines flagged, alert auto-generated with full verdict).
- Network-level enforcement via host `nftables` hooked into Docker's `DOCKER-USER` forward chain (`br_netfilter` required), isolating the monitored host from core SOC infrastructure with logged, counter-tracked block rules.
- Hardened persistence across reboots via systemd services, module autoloading, and sysctl configuration.
