import { pluck } from "./pluck";

describe("pluck", () => {
  test("should pluck values from an array of objects", () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const expected = [1, 2, 3];
    const result = Array.from(pluck("id", input));
    expect(result).toEqual(expected);
  });

  test("should pluck values from an array of objects with different keys", () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const expected = ["Alice", "Bob", "Charlie"];
    const result = Array.from(pluck("name", input));
    expect(result).toEqual(expected);
  });
});
