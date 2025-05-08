import Benchmark from "benchmark";

import { Fx } from "../../../src/index";

import { consoleResult } from "../utils";

const suite = new Benchmark.Suite();
const original = Array.from({ length: 1_000_000 }, (_, i) => i);

const fxVsVanilla = suite
  .add("Fx/filter", () => {
    Fx.of(original)
      .filter((x) => x % 2 === 0)
      .toArray();
  })
  .add("Array/filter", () => {
    original.filter((x) => x % 2 === 0);
  })
  .on("cycle", (event: any) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    consoleResult(suite);
  });

export default fxVsVanilla;
