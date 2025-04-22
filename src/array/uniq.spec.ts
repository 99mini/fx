import { uniq } from "./uniq";

describe("uniq", () => {
  test("should return unique values from an array", () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = uniq(input);
    expect(result).toEqual(expected);
  });

  test("should return unique values from a set", () => {
    const input = new Set([1, 2, 2, 3, 4, 4, 5]);
    const expected = [1, 2, 3, 4, 5];
    const result = uniq(input);
    expect(result).toEqual(expected);
  });
});
