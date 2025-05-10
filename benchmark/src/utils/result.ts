import Benchmark from "benchmark";

export function consoleResult(suite: Benchmark.Suite) {
  const fasterHz = suite.filter("fastest").map("hz")[0];
  const slowerHz = suite.filter("slowest").map("hz")[0];

  const speedup = fasterHz / slowerHz;

  console.log(`Fastest is ${suite.filter("fastest").map("name").join(", ")} (${speedup.toFixed(2)}x)\n`);
}
