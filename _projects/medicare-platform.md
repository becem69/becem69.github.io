---
title: "MediCare Health Platform"
tagline: "Secure healthcare report distribution for Tunisia's medical sector"
year: "2026"
stack: ["Flask 3.0", MariaDB, bcrypt, "MFA/OTP", RBAC]
repo: "https://github.com/becem69/MediCare-Health-Platform-project"
live: "https://bacem69.alwaysdata.net"
featured: true
perms: "rwxr-x---"
risk: "high"
excerpt: "Three-portal Flask/MariaDB platform for doctors, patients, and medical centers — MFA, RBAC, and zero critical vulnerabilities after full pen testing."
order: 3
---

Full-stack **Flask 3.0 / MariaDB** application with three role-based portals (doctors, patients, medical centers), built during a security-focused internship at Zimys.

## Security architecture

- bcrypt password hashing + 5-minute expiring OTP via email
- RBAC controls and parameterized queries — blocked 100% of SQL injection attempts in testing
- Secure file handling for PDF/DOCX/CSV/XLSX/DICOM: 16MB limits, MIME validation, UUID filenames, zero path traversal vulnerabilities
- 7-table MariaDB schema with foreign key constraints, cascading deletes, ENUM types, and optimized indexes supporting 5,000+ monthly transactions

## Testing & results

Penetration tested with sqlmap (SQLi), Burp Suite (XSS), nmap, and Wireshark — **zero critical vulnerabilities**, 99.21% availability under DoS simulation. Deployed to AlwaysData VPS (Paris); reduced report delivery time from 24–72 hours to under 1 minute.
