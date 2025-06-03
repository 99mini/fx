import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { getTotalCoverage, loadCoverageData } from "./_utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = loadCoverageData(path.resolve(__dirname, "../coverage/coverage-summary.json"));
const summary = getTotalCoverage(data);

console.log(summary.coverage.pct);
