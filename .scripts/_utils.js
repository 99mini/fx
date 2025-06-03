import fs from "fs";
import path from "path";

function loadCoverageData(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ${filePath} 파일을 찾을 수 없습니다.`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveSvg(svg, filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, svg, "utf8");
  console.log(`✅ Coverage SVG badge saved to: ${filePath}`);
}

function getTotalCoverage(data) {
  const {
    total: { lines, statements, functions, branches, branchesTrue },
  } = data;
  const totalTotal = lines.total + statements.total + functions.total + branches.total + branchesTrue.total;
  const totalCovered = lines.covered + statements.covered + functions.covered + branches.covered + branchesTrue.covered;
  const totalSkipped = lines.skipped + statements.skipped + functions.skipped + branches.skipped + branchesTrue.skipped;
  // 소수점 2자리
  const totalPct = totalTotal === 0 ? 100 : Math.round((totalCovered / totalTotal) * 10000) / 100;

  const total = {
    total: totalTotal,
    covered: totalCovered,
    skipped: totalSkipped,
    pct: totalPct,
  };

  return {
    coverage: total,
    lines,
    statements,
    functions,
    branches,
    branchesTrue,
  };
}

export { getTotalCoverage, loadCoverageData, saveSvg };
