import { Fx } from "./index";

function* range(start: number, end: number): Generator<number> {
  for (let i = start; i < end; i++) yield i;
}

describe("Fx Functional Class", () => {
  it("filters, maps, and takes values correctly", () => {
    const result = Fx.of(range(0, 20))
      .filter((x) => x % 2 === 0)
      .map((x) => x * 10)
      .take(3)
      .toArray();

    expect(result).toEqual([0, 20, 40]);
  });

  it("returns empty array when take(0)", () => {
    const result = Fx.of(range(0, 10)).take(0).toArray();
    expect(result).toEqual([]);
  });

  it("chaining multiple operations", () => {
    const result = Fx.of(range(1, 10))
      .filter((x) => x > 5)
      .map((x) => x * x)
      .toArray();

    expect(result).toEqual([36, 49, 64, 81]);
  });
});
