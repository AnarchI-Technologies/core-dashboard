import { readFileSync } from "node:fs";
import { scenarios } from "./dashboard-data.mjs";

const requiredFiles = [
  "README.md",
  "index.html",
  "styles.css",
  "scripts/dashboard.mjs",
  "scripts/dashboard-data.mjs",
];

const requiredMarkers = [
  "Hardcoding freedom into the systems of tomorrow.",
  'data-validate="status-grid"',
  'data-validate="operating-model"',
  'data-validate="scenario-tabs"',
  'data-validate="sellable-grid"',
  "IP posture",
  "Proof and validation",
  "Offer Engine",
];

for (const file of requiredFiles) {
  readFileSync(file, "utf8");
}

const html = readFileSync("index.html", "utf8");
const readme = readFileSync("README.md", "utf8");

for (const marker of requiredMarkers) {
  if (!html.includes(marker) && !readme.includes(marker)) {
    throw new Error(`Missing dashboard marker: ${marker}`);
  }
}

for (const scenario of ["overview", "signals", "engines", "controls"]) {
  if (!scenarios[scenario]) {
    throw new Error(`Missing dashboard scenario: ${scenario}`);
  }
  if (scenarios[scenario].steps.length !== 4) {
    throw new Error(`Scenario ${scenario} must have four deterministic steps`);
  }
}

if (/[Â�]/.test(readme + html)) {
  throw new Error("Mojibake or replacement characters detected");
}

console.log("[dashboard] validation passed");
