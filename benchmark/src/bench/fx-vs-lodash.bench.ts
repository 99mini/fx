import Benchmark from "benchmark";

import { Fx } from "../../../src/index";
import _ from "lodash";

import { consoleResult } from "../utils";

const suite = new Benchmark.Suite();
const original = Array.from({ length: 1_000_000 }, (_, i) => i);

const fxVsLodash = suite
  .add("Fx", () => {
    Fx.of(original)
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .toArray();
  })
  .add("Lodash", () => {
    _.filter(original, (x) => x % 2 === 0).map((x) => x * 2);
  })
  .on("cycle", (event: any) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    consoleResult(suite);
  });

export default fxVsLodash;
