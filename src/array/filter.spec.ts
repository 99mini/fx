import { filter } from "./filter";
import { range } from "../iter/range";

describe("filter", () => {
  it("filters elements based on predicate", () => {
    const input = range(1, 6);
    const result = [...filter(input, (x) => x % 2 === 0)];
    expect(result).toEqual([2, 4]);
  });

  it("returns empty if no elements match", () => {
    const input = range(1, 5);
    const result = [...filter(input, (x) => x > 10)];
    expect(result).toEqual([]);
  });
});
