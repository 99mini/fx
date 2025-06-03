import { sortBy } from "./sortBy";

describe("sortBy", () => {
  it("should sort an array of objects by a key", () => {
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
    const result = sortBy((a, b) => a.id - b.id, input);
    expect(result).toEqual(expected);
  });

  it("should sort an array of numbers", () => {
    const input = [3, 1, 2];
    const expected = [1, 2, 3];
    const result = sortBy((a, b) => a - b, input);
    expect(result).toEqual(expected);
  });

  it("should sort undefined array", () => {
    const expected: number[] = [];
    const result = sortBy(undefined, undefined);
    expect(result).toEqual(expected);
  });
});
