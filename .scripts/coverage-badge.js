import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { getTotalCoverage, loadCoverageData, saveSvg } from "./_utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COVERAGE_PATH = path.resolve(__dirname, "../coverage/coverage-summary.json");

function getColor(percent) {
  if (percent >= 90) return "#4c1";
  if (percent >= 75) return "#97CA00";
  if (percent >= 60) return "#dfb317";
  if (percent >= 40) return "#fe7d37";
  return "#e05d44";
}

function generateSvg(label, value, color) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="20">
  <linearGradient id="b" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="a">
    <rect width="140" height="20" rx="3" fill="#fff"/>
  </mask>
  <g mask="url(#a)">
    <rect width="75" height="20" fill="#555"/>
    <rect x="75" width="65" height="20" fill="${color}"/>
    <rect width="140" height="20" fill="url(#b)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" font-size="11">
    <text x="37.5" y="14">${label}</text>
    <text x="105.5" y="14">${value}%</text>
  </g>
</svg>
`.trim();
}

// 실행
const coverage = loadCoverageData(COVERAGE_PATH);
const summary = getTotalCoverage(coverage);

for (const [key, value] of Object.entries(summary)) {
  console.log(`\nCoverage ${key}: ${value.pct}%`);

  const percent = value.pct;
  const color = getColor(percent);
  const svg = generateSvg(key, percent, color);
  const outputPath = path.resolve(__dirname, `../badges/${key}.svg`);
  saveSvg(svg, outputPath);
}
