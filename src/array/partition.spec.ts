import { partition } from "./partition";

describe("partition", () => {
  test("should partition an array into two arrays based on a predicate", () => {
    const input = [1, 2, 3, 4, 5];
    const predicate = (x: number) => x % 2 === 0;
    const expected = [
      [2, 4], // truthy
      [1, 3, 5], // falsy
    ];
    const result = partition(input, predicate);
    expect(result).toEqual(expected);
  });

  test("should handle an empty array", () => {
    const input: number[] = [];
    const predicate = (x: number) => x % 2 === 0;
    const expected = [
      [], // truthy
      [], // falsy
    ];
    const result = partition(input, predicate);
    expect(result).toEqual(expected);
  });
});
