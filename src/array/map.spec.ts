import { map } from "./map";
import { range } from "../iter/range";

describe("map", () => {
  it("applies function to each element", () => {
    const input = range(1, 4, 1); // [1, 2, 3]
    const result = [...map(input, (x) => x * 2)];
    expect(result).toEqual([2, 4, 6]);
  });

  it("returns empty when input is empty", () => {
    const input: number[] = [];
    const result = [...map(input, (x) => x * 2)];
    expect(result).toEqual([]);
  });
});
