import { range } from "./range";

describe("range", () => {
  it("return numbers from 0 to n", () => {
    const result = [...range(5)];
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("return numbers from start to end", () => {
    const result = [...range(2, 5)];
    expect(result).toEqual([2, 3, 4]);
  });

  it("return numbers in the specified range", () => {
    const result = [...range(0, 5, 1)];
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("return numbers in reverse order with negative step", () => {
    const result = [...range(5, 0, -1)];
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it("return empty array when start is greater than end", () => {
    const result = [...range(5, 2)];
    expect(result).toEqual([]);
  });
});
