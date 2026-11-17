# Changelog

## 0.1.6 - 2026-11-17

- Fix: malformed or oversized JSON sent to /api/* now gets a 400 response instead of 500, and these client errors no longer land in the error log.

## 0.1.5 - 2026-11-17

- Security: fixed all 24 npm audit vulnerabilities reported by the Hostinger build (1 critical, 17 high). Ran `npm audit fix`, raised nodemailer from ^8.0.1 to ^10.6.0 and express from ^4.22.1 to ^4.22.3 (newer qs). `npm audit` now reports 0 vulnerabilities.
