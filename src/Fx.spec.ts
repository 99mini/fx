import { Fx } from "./Fx";

describe("Fx", () => {
  // MARK: Test Static Methods
  it("should create an instance of Fx", () => {
    const fx = Fx.of([1, 2, 3]);
    expect(fx).toBeInstanceOf(Fx);
    expect(fx.toArray()).toEqual([1, 2, 3]);
  });

  it("should iterate over elements", () => {
    const fx = Fx.of([1, 2, 3]);
    const result = [];
    for (const item of fx) {
      result.push(item);
    }
    expect(result).toEqual([1, 2, 3]);
  });

  it("should returns an instance of Fx", () => {
    const fx = Fx.of([1, 2, 3]);
    expect(fx.toArray()).toEqual([1, 2, 3]);
  });

  it("should return length of elements", () => {
    const fx = Fx.of([1, 2, 3]);
    expect(fx.length).toBe(3);
  });

  // MARK: Test Static Methods
  it("should return empty array when no elements", () => {
    const fx = Fx.of([]);
    expect(fx.toArray()).toEqual([]);
  });

  it("should map elements", () => {
    const fx = Fx.of([1, 2, 3]);
    const result = fx.map((x) => x * 2).toArray();
    expect(result).toEqual([2, 4, 6]);
  });

  it("should filter elements", () => {
    const fx = Fx.of([1, 2, 3, 4, 5]);
    const result = fx.filter((x) => x % 2 === 0).toArray();
    expect(result).toEqual([2, 4]);
  });

  it("should take elements", () => {
    const fx = Fx.of([1, 2, 3, 4, 5]);
    const result = fx.take(3).toArray();
    expect(result).toEqual([1, 2, 3]);
  });

  it("should group elements", () => {
    const fx = Fx.of([
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
      { id: 4, category: "C" },
    ]);
    const grouped = fx.groupBy((item) => item.category);
    expect(grouped.get("A")).toEqual([
      { id: 1, category: "A" },
      { id: 3, category: "A" },
    ]);
    expect(grouped.get("B")).toEqual([{ id: 2, category: "B" }]);
    expect(grouped.get("C")).toEqual([{ id: 4, category: "C" }]);
  });

  it("should flatMap elements", () => {
    const fx = Fx.of([1, 2, 3]);
    const result = fx.flatMap((x) => [x, x * 2]).toArray();
    expect(result).toEqual([1, 2, 2, 4, 3, 6]);
  });

  it("should zip elements", () => {
    const fx1 = Fx.of([1, 2, 3]);
    const fx2 = Fx.of(["a", "b", "c"]);
    const result = fx1.zip(fx2).toArray();
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });

  it("should chunk elements", () => {
    const fx = Fx.of([1, 2, 3, 4, 5]);
    const result = fx.chunk(2).toArray();
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should partition elements", () => {
    const fx = Fx.of([1, 2, 3, 4, 5]);
    const [even, odd] = fx.partition((x) => x % 2 === 0);
    expect(even.toArray()).toEqual([2, 4]);
    expect(odd.toArray()).toEqual([1, 3, 5]);
  });

  it("should pluck elements", () => {
    const fx = Fx.of([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
    const result = fx.pluck("name").toArray();
    expect(result).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("should uniq elements", () => {
    const fx = Fx.of([1, 2, 2, 3, 4, 4, 5]);
    const result = fx.uniq().toArray();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should reduce elements", () => {
    const fx = Fx.of([1, 2, 3]);
    const result = fx.reduce((acc, cur) => acc + cur, 0);
    expect(result).toBe(6);
  });

  it("should scan elements", () => {
    const fx = Fx.of([1, 2, 3]);
    const result = fx.scan((acc, cur) => acc + cur, 0).toArray();
    expect(result).toEqual([0, 1, 3, 6]);
  });

  it("should sort elements", () => {
    const fx = Fx.of([3, 1, 2]);
    const result = fx.sort((a, b) => a - b).toArray();
    expect(result).toEqual([1, 2, 3]);
  });

  it("should sort elements by key", () => {
    const fx = Fx.of([
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
    const result = fx.sort((a, b) => a.id - b.id).toArray();
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });
});
