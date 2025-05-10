import Benchmark from "benchmark";

import { Fx } from "../../../src/index";

import { consoleResult } from "../utils";

const suite = new Benchmark.Suite();
const original = Array.from({ length: 1_000_000 }, (_, i) => i);

const fxLazyVsVanillaEager = suite
  .add("Fx#take", () => {
    Fx.of(original)
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .take(2)
      .toArray();
  })
  .add("Array#slice", () => {
    original
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .slice(0, 2);
  })
  .on("cycle", (event: any) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    consoleResult(suite);
  });

export default fxLazyVsVanillaEager;
