import Benchmark from "benchmark";

import { Fx } from "../../../src/index";

import { filter, map, take, interval } from "rxjs";

import { consoleResult } from "../utils";

const suite = new Benchmark.Suite();

const SIZE = 1_000_000;
const original = Array.from({ length: SIZE }, (_, i) => i);

const fxVsLodash = suite
  .add("Fx", () => {
    Fx.of(original)
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .take(2)
      .toArray();
  })
  .add("RxJS", () => {
    interval(SIZE)
      .pipe(
        filter((x) => x % 2 === 0),
        map((x) => x * 2),
        take(2)
      )
      .subscribe();
  })
  .on("cycle", (event: any) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    consoleResult(suite);
  });

export default fxVsLodash;
