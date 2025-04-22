import { groupBy } from "./groupBy";

describe("groupBy", () => {
  test("should group items by key", () => {
    const items = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
      { id: 4, category: "C" },
    ];

    const grouped = groupBy(items, (item) => item.category);

    expect(grouped.get("A")).toEqual([
      { id: 1, category: "A" },
      { id: 3, category: "A" },
    ]);
    expect(grouped.get("B")).toEqual([{ id: 2, category: "B" }]);
    expect(grouped.get("C")).toEqual([{ id: 4, category: "C" }]);
  });
});
