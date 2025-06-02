import { Fx } from "../src/Fx";
import { map, filter } from "../src/lazy";
import { take, toArray } from "../src/evaluate";

// MARK: Test Integration
// - pure functions
// - `Fx` instance methods

const original = Array.from({ length: 1_000_000 }, (_, i) => i);

describe("integration pure functions", () => {
  it("should apply functions in post-order", () => {
    const result = toArray(
      take(
        2,
        map(
          (x) => x * 2,
          filter((x) => x % 2 === 0, original)
        )
      )
    );

    expect(result).toEqual([0, 4]);
  });
});

describe("integration Fx", () => {
  it("should evaluate functions lazily (lazy evaluation)", () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    const double = (x: number) => {
      console.log(`double: ${x}`);
      return x * 2;
    };
    const isEven = (x: number) => {
      console.log(`isEven: ${x}`);
      return x % 2 === 0;
    };
    const result = Fx.of(original).filter(isEven).map(double).take(2).toArray();

    expect(result).toEqual([0, 4]);
    expect(console.log).toHaveBeenCalledTimes(8); // call 0, 1, 2, 3
  });
});
