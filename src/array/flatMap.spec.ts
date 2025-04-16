import { flatMap } from "./flatMap";

describe("flatMap", () => {
  it("should flatten an array of arrays", () => {
    const input = [[1, 2], [3, 4], [5]];
    const result = flatMap(input, (x) => x);
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should flatten an array of strings", () => {
    const input = ["hello", "world"];
    const result = flatMap(input, (x) => x.split(""));
    expect(Array.from(result)).toEqual(["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]);
  });

  it("should work with empty arrays", () => {
    const input: number[][] = [];
    const result = flatMap(input, (x) => x);
    expect(Array.from(result)).toEqual([]);
  });
});
