import { toArray } from "./toArray";

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

describe("toArray", () => {
  it("converts iterable to array", () => {
    const input = gen();
    const result = toArray(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it("returns empty array for empty input", () => {
    const input: number[] = [];
    expect(toArray(input)).toEqual([]);
  });
});
