import * as evaluateExports from "./index";

describe("evaluate index exports", () => {
  it("should export all evaluate functions", () => {
    expect(evaluateExports.toArray).toBeDefined();
    expect(evaluateExports.take).toBeDefined();
    expect(evaluateExports.reduce).toBeDefined();
  });
});
