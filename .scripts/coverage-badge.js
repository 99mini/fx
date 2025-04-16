import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COVERAGE_PATH = path.resolve(__dirname, "../coverage/coverage-final.json");
const OUTPUT_PATH = path.resolve(__dirname, "../badges/coverage.svg");

function loadCoverageData(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("❌ coverage-final.json 파일을 찾을 수 없습니다.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getTotalCoverage(data) {
  let statements = { covered: 0, total: 0 };
  let branches = { covered: 0, total: 0 };
  let functions = { covered: 0, total: 0 };
  let lines = { covered: 0, total: 0 };

  for (const file of Object.values(data)) {
    for (const [k, v] of Object.entries(file.s || {})) {
      statements.covered += v > 0 ? 1 : 0;
      statements.total++;
    }
    for (const [k, v] of Object.entries(file.b || {})) {
      branches.covered += v.reduce((acc, b) => acc + (b > 0 ? 1 : 0), 0);
      branches.total += v.length;
    }
    for (const [k, v] of Object.entries(file.f || {})) {
      functions.covered += v > 0 ? 1 : 0;
      functions.total++;
    }
    // lines는 별도로 없으면 statements와 동일하게 처리
    lines = statements;
  }

  const toPercent = ({ covered, total }) => (total === 0 ? 100 : Math.round((covered / total) * 100));

  return {
    statements: toPercent(statements),
    branches: toPercent(branches),
    functions: toPercent(functions),
    lines: toPercent(lines),
  };
}

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

function saveSvg(svg, filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, svg, "utf8");
  console.log(`✅ Coverage SVG badge saved to: ${filePath}`);
}

// 실행
const coverage = loadCoverageData(COVERAGE_PATH);
const summary = getTotalCoverage(coverage);
const percent = summary.statements; // 주요 지표 선택 가능
const color = getColor(percent);
const svg = generateSvg("coverage", percent, color);
saveSvg(svg, OUTPUT_PATH);
