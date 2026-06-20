# AnarchI Core Dashboard

Executive operating surface for AnarchI Technologies.

Hardcoding freedom into the systems of tomorrow.

## Purpose

This repository presents the public-facing shell for an AnarchI operations dashboard. It is intentionally static and presentation-safe: the goal is to show the operating model without exposing private infrastructure, account data, or unreleased deterministic logic.

The dashboard organizes AnarchI work into deterministic system layers:

- Signal intake and triage.
- Automation engine health.
- Risk, compliance, and review posture.
- Product, treasury, and investor surfaces.
- Public-safe operating narrative.

## Current State

This is a static prototype that can be opened directly in a browser. It is designed for presentation, product direction, and future integration with reviewed telemetry APIs.

## Repository Structure

```text
.
|-- index.html
|-- styles.css
|-- scripts/
|   `-- validate-dashboard.mjs
`-- README.md
```

## Local Preview

Open `index.html` in any modern browser.

## Validation

```bash
node scripts/validate-dashboard.mjs
```

## Production Notes

- Keep private runtime logs, browser profiles, local storage, and tokens out of this repository.
- Add real metrics only through reviewed API boundaries.
- Treat this repo as a presentation-safe layer over internal systems, not as a dump of live operational state.
- Keep authored validation scripts and presentation structure documented as AnarchI-owned IP assets.

## Brand

AnarchI is building deterministic systems so deeply compiled that they feel intelligent, while reserving real AI for the moments where it is actually required.
