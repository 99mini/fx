import { Fx } from "../Fx";

const original = Array.from({ length: 1_000_000 }, (_, i) => i);

describe("benchmark (lazy evaluation vs eager evaluation)", () => {
  it("should be faster with Fx", () => {
    const start = performance.now();
    const resultWithFx = Fx.of(original)
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .take(2)
      .toArray();
    const end = performance.now();

    const timeWithFx = end - start;

    const startArray = performance.now();
    const resultWithArray = original
      .filter((x) => x % 2 === 0)
      .map((x) => x * 2)
      .slice(0, 2);
    const endArray = performance.now();

    const timeWithArray = endArray - startArray;

    console.log(`Time with Fx: ${timeWithFx.toFixed(2)}ms`);
    console.log(`Time with Array: ${timeWithArray.toFixed(2)}ms`);
    console.log(`Speedup: ${(timeWithArray / timeWithFx).toFixed(2)}x`);

    expect(resultWithFx).toEqual(resultWithArray);
    expect(timeWithFx).toBeLessThan(timeWithArray);
  });
});
