import { readFileSync } from "node:fs";

const requiredFiles = ["README.md", "index.html", "styles.css"];
const requiredMarkers = [
  "Hardcoding freedom into the systems of tomorrow.",
  'data-validate="status-grid"',
  'data-validate="operating-model"',
  "IP posture",
  "Proof and validation",
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

if (/[Â�]/.test(readme + html)) {
  throw new Error("Mojibake or replacement characters detected");
}

console.log("[dashboard] validation passed");
