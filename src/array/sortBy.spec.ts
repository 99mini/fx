import { sortBy } from "./sortBy";

describe("sortBy", () => {
  test("should sort an array of objects by a key", () => {
    const input = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const expected = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const result = sortBy(input, (a, b) => a.id - b.id);
    expect(result).toEqual(expected);
  });

  test("should sort an array of numbers", () => {
    const input = [3, 1, 2];
    const expected = [1, 2, 3];
    const result = sortBy(input, (a, b) => a - b);
    expect(result).toEqual(expected);
  });
});
