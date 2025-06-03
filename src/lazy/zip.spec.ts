import { zip } from "./zip";

describe("zip", () => {
  it("should zip two arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["a", "b", "c"];
    const result = zip<number | string>(arr1, arr2);
    expect(Array.from(result)).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });
  it("should zip three arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["a", "b", "c"];
    const arr3 = [true, false, true];
    const result = zip<number | string | boolean>(arr1, arr2, arr3);
    expect(Array.from(result)).toEqual([
      [1, "a", true],
      [2, "b", false],
      [3, "c", true],
    ]);
  });
  it("should zip arrays of different lengths", () => {
    const arr1 = [1, 2];
    const arr2 = ["a", "b", "c"];
    const result = zip<number | string>(arr1, arr2);
    expect(Array.from(result)).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });
  it("should zip empty arrays", () => {
    const arr1: number[] = [];
    const arr2: string[] = [];
    const result = zip<number | string>(arr1, arr2);
    expect(Array.from(result)).toEqual([]);
  });
});
