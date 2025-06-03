import { chunk } from "./chunk";

describe("chunk", () => {
  it("should chunk an array into smaller arrays of specified size", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = chunk(2, arr);
    expect(Array.from(result)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("should handle empty array", () => {
    const arr: number[] = [];
    const result = chunk(2, arr);
    expect(Array.from(result)).toEqual([]);
  });
  it("should handle chunk size greater than array length", () => {
    const arr = [1, 2];
    const result = chunk(5, arr);
    expect(Array.from(result)).toEqual([[1, 2]]);
  });
  it("should handle chunk size of one", () => {
    const arr = [1, 2, 3];
    const result = chunk(1, arr);
    expect(Array.from(result)).toEqual([[1], [2], [3]]);
  });
});
