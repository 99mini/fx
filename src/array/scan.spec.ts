import { scan } from "./scan";

describe("scan", () => {
  test("applies function to each element", () => {
    const input = [1, 2, 3];
    const result = [...scan(input, (acc, cur) => acc + cur, 0)];
    expect(result).toEqual([0, 1, 3, 6]);
  });

  test("returns initial value when input is empty", () => {
    const input: number[] = [];
    const result = [...scan(input, (acc, cur) => acc + cur, 0)];
    expect(result).toEqual([0]);
  });
});
