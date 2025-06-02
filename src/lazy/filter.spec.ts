import { filter } from "./filter";
import { range } from "./range";

describe("filter", () => {
  it("filters elements based on predicate", () => {
    const input = range(1, 6);
    const result = [...filter((x) => x % 2 === 0, input)];
    expect(result).toEqual([2, 4]);
  });

  it("returns empty if no elements match", () => {
    const input = range(1, 5);
    const result = [...filter((x) => x > 10, input)];
    expect(result).toEqual([]);
  });
});
