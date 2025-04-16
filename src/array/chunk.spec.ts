import { chunk } from "./chunk";

describe("chunk", () => {
  test("should chunk an array into smaller arrays of specified size", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = chunk(arr, 2);
    expect(Array.from(result)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("should handle empty array", () => {
    const arr: number[] = [];
    const result = chunk(arr, 2);
    expect(Array.from(result)).toEqual([]);
  });

  test("should handle chunk size greater than array length", () => {
    const arr = [1, 2];
    const result = chunk(arr, 5);
    expect(Array.from(result)).toEqual([[1, 2]]);
  });

  test("should handle chunk size of one", () => {
    const arr = [1, 2, 3];
    const result = chunk(arr, 1);
    expect(Array.from(result)).toEqual([[1], [2], [3]]);
  });
});
