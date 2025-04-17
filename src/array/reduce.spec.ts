import { reduce } from "./reduce";

describe("reduce", () => {
  test("applies function to each element", () => {
    const input = [1, 2, 3];
    const result = reduce(input, (acc, cur) => acc + cur, 0);
    expect(result).toEqual(6);
  });
  test("returns initial value when input is empty", () => {
    const input: number[] = [];
    const result = reduce(input, (acc, cur) => acc + cur, 0);
    expect(result).toEqual(0);
  });
  test("works with non-numeric types", () => {
    const input = ["a", "b", "c"];
    const result = reduce(input, (acc, cur) => acc + cur, "");
    expect(result).toEqual("abc");
  });
  test("works with complex objects", () => {
    const input = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const result = reduce(input, (acc, cur) => acc + cur.value, 0);
    expect(result).toEqual(6);
  });
  test("works with initial value of different type", () => {
    const input = [1, 2, 3];
    const result = reduce(input, (acc, cur) => acc + cur, "");
    expect(result).toEqual("123");
  });
});
