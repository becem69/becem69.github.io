---
title: "WireGuard VPN Infrastructure"
tagline: "Stealth UDP/53 tunneling for restrictive networks"
year: "2026"
stack: [WireGuard, iptables, systemd, Ubuntu]
repo: "https://github.com/becem69/VPN-server-config"
featured: false
perms: "rw-------"
risk: "medium"
excerpt: "End-to-end WireGuard VPN with stealth UDP/53 config, NAT traversal, and traffic masquerading — optimized for offensive security use cases."
order: 6
---

End-to-end WireGuard VPN infrastructure on Ubuntu, configured with stealth UDP/53 to bypass restrictive firewalls.

## Configuration

- IP forwarding, iptables NAT rules, and a systemd service for persistent operation on cloud VPS environments
- Secure key exchange via `wg genkey`, strict peer routing with `AllowedIPs`, `PersistentKeepalive` for NAT traversal
- Optimized for offensive security use cases: traffic masquerading, DNS-port obfuscation, minimal attack surface
