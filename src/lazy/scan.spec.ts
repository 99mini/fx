import { scan } from "./scan";

describe("scan", () => {
  it("applies function to each element", () => {
    const input = [1, 2, 3];
    const result = [...scan((acc, cur) => acc + cur, 0, input)];
    expect(result).toEqual([0, 1, 3, 6]);
  });

  it("returns initial value when input is empty", () => {
    const input: number[] = [];
    const result = [...scan((acc, cur) => acc + cur, 0, input)];
    expect(result).toEqual([0]);
  });
});
