import { reduce } from "./reduce";

describe("reduce", () => {
  it("applies function to each element", () => {
    const input = [1, 2, 3];
    const result = reduce((acc, cur) => acc + cur, 0, input);
    expect(result).toEqual(6);
  });
  it("returns initial value when input is empty", () => {
    const input: number[] = [];
    const result = reduce((acc, cur) => acc + cur, 0, input);
    expect(result).toEqual(0);
  });
  it("works with non-numeric types", () => {
    const input = ["a", "b", "c"];
    const result = reduce((acc, cur) => acc + cur, "", input);
    expect(result).toEqual("abc");
  });
  it("works with complex objects", () => {
    const input = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const result = reduce((acc, cur) => acc + cur.value, 0, input);
    expect(result).toEqual(6);
  });
  it("works with initial value of different type", () => {
    const input = [1, 2, 3];
    const result = reduce((acc, cur) => acc + cur, "", input);
    expect(result).toEqual("123");
  });
});
