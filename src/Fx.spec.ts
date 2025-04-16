import { Fx } from "./Fx";

describe("Fx", () => {
  test("should create an instance of Fx", () => {
    const fx = new Fx([1, 2, 3]);
    expect(fx).toBeInstanceOf(Fx);
    expect(fx.toArray()).toEqual([1, 2, 3]);
  });

  test("should iterate over elements", () => {
    const fx = new Fx([1, 2, 3]);
    const result = [];
    for (const item of fx) {
      result.push(item);
    }
    expect(result).toEqual([1, 2, 3]);
  });

  test("should returns an instance of Fx", () => {
    const fx = Fx.of([1, 2, 3]);
    expect(fx.toArray()).toEqual([1, 2, 3]);
  });

  test("should return length of elements", () => {
    const fx = new Fx([1, 2, 3]);
    expect(fx.length).toBe(3);
  });

  test("should map elements", () => {
    const fx = new Fx([1, 2, 3]);
    const result = fx.map((x) => x * 2).toArray();
    expect(result).toEqual([2, 4, 6]);
  });
  test("should filter elements", () => {
    const fx = new Fx([1, 2, 3, 4, 5]);
    const result = fx.filter((x) => x % 2 === 0).toArray();
    expect(result).toEqual([2, 4]);
  });
  test("should take elements", () => {
    const fx = new Fx([1, 2, 3, 4, 5]);
    const result = fx.take(3).toArray();
    expect(result).toEqual([1, 2, 3]);
  });
  test("should group elements", () => {
    const fx = new Fx([
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
      { id: 4, category: "C" },
    ]);
    const grouped = fx.group((item) => item.category);
    expect(grouped.get("A")).toEqual([
      { id: 1, category: "A" },
      { id: 3, category: "A" },
    ]);
    expect(grouped.get("B")).toEqual([{ id: 2, category: "B" }]);
    expect(grouped.get("C")).toEqual([{ id: 4, category: "C" }]);
  });
});
