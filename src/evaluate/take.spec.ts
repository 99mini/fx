import { take } from "./take";

describe("take", () => {
  it("takes the first n elements", () => {
    const input = [0, 1, 2, 3, 4, 5];
    const result = [...take(3, input)];
    expect(result).toEqual([0, 1, 2]);
  });

  it("returns all if n > length", () => {
    const input = [0, 1, 2];
    const result = [...take(10, input)];
    expect(result).toEqual([0, 1, 2]);
  });

  it("returns empty if n = 0", () => {
    const input = [0, 1, 2];
    const result = [...take(0, input)];
    expect(result).toEqual([]);
  });
});
