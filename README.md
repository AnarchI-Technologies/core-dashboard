# AnarchI Core Dashboard

Executive operating surface for AnarchI Technologies.

Hardcoding freedom into the systems of tomorrow.

## Purpose

This repository presents the public-facing shell for an AnarchI operations dashboard. It is intentionally small: the goal is to show the operating model, not expose private infrastructure, account data, or unreleased CERBERUS logic.

The dashboard organizes AnarchI work into deterministic system layers:

- Signal intake and triage
- Automation engine health
- Risk and compliance posture
- Treasury and product surfaces
- Investor-ready operating narrative

## Current State

This is a static prototype that can be opened directly in a browser. It is designed for presentation, product direction, and future integration with real telemetry APIs.

## Repository Structure

```text
.
├── index.html
├── styles.css
└── README.md
```

## Local Preview

Open `index.html` in any modern browser.

## Production Notes

- Keep private runtime logs, browser profiles, local storage, and tokens out of this repository.
- Add real metrics only through reviewed API boundaries.
- Treat this repo as a presentation-safe layer over internal systems, not as a dump of live operational state.

## Brand

AnarchI is building deterministic systems so deeply compiled that they feel intelligent, while reserving real AI for the moments where it is actually required.

