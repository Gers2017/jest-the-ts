import { tsnacci } from "./tsnacci";

describe("testing tsnacci", () => {
  it("should return 1", () => {
    expect(tsnacci(2)).toBe(1);
  });

  it("should return 2", () => {
    expect(tsnacci(3)).toBe(2);
  });

  it("should return 9", () => {
    expect(tsnacci(9)).toBe(34);
  });
});
