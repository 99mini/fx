import { take } from "./take";
import { range } from "../iter/range";

describe("take", () => {
  it("takes the first n elements", () => {
    const input = range(0, 10);
    const result = [...take(input, 3)];
    expect(result).toEqual([0, 1, 2]);
  });

  it("returns all if n > length", () => {
    const input = range(0, 3);
    const result = [...take(input, 10)];
    expect(result).toEqual([0, 1, 2]);
  });

  it("returns empty if n = 0", () => {
    const input = range(0, 5);
    const result = [...take(input, 0)];
    expect(result).toEqual([]);
  });
});
