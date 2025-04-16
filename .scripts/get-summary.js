import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.resolve(__dirname, "../coverage/coverage-final.json");
const data = JSON.parse(fs.readFileSync(file, "utf-8"));

let covered = 0;
let total = 0;

for (const file of Object.values(data)) {
  const s = file.s || {};
  for (const hit of Object.values(s)) {
    total++;
    if (hit > 0) covered++;
  }
}

const percentage = total === 0 ? 100 : Math.round((covered / total) * 10000) / 100;
console.log(percentage);
